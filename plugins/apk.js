const { bot, apkMirror, generateList } = require('../lib')

bot(
  {
    pattern: 'apk ?(.*)',
    desc: 'Download apk from apkmirror',
    type: 'download',
  },
  async (message, match) => {
    if (!match) {
      return await message.send(
        '> *Example :*\n- apk Mixplorer\n- apk whatsapp,apkm (includes bundle apk)'
      )
    }
    const [query, apkm] = match.split(',')
    
    const { result, status } = await apkMirror(query, !!apkm)

    if (status > 400) {
      if (!result.length) {
        return await message.send('_No results found matching your query_')
      }

      const list = result.map(({ title, url }) => ({ id: `apk ${status};;${url}`, text: title }))
      const lists = generateList(
        list,
        `Matching Apps(${list.length})\n`,
        message.jid,
        message.participant,
        message.id
      )

      return await message.send(lists.message, {}, lists.type)
    }

    if (status > 200) {
      const button = []
      for (const apk in result) {
        button.push({
          id: `apk ${status};;${result[apk].url}`,
          text: result[apk].title,
        })
      }
      if (button.length == 1) {
        const res = await apkMirror(button[0].id.replace('apk ', ''))
        return await message.sendFromUrl(res.result)
      }

      const list = generateList(
        button,
        `Available architectures\n`,
        message.jid,
        message.participant,
        message.id
      )

      return await message.send(list.message, { quoted: message.data }, list.type)
    }

    return await message.sendFromUrl(result, { quoted: message.data })
  }
)
