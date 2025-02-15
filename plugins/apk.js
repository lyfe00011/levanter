const { bot, apkMirror, generateList, lang } = require('../lib')

bot(
  {
    pattern: 'apk ?(.*)',
    desc: lang.plugins.apk.desc,
    type: 'download',
  },
  async (message, match) => {
    if (!match) return message.send(lang.plugins.apk.example)

    const [query, apkm] = match.split(',')
    const { result, status } = await apkMirror(query, !!apkm)
    if (status > 400) {
      if (!result.length) return message.send(lang.plugins.apk.no_result)

      const list = result.map(({ title, url }) => ({
        id: `apk ${status};;${url}`,
        text: title,
      }))

      const lists = generateList(
        list,
        lang.plugins.apk.apps_list.format(list.length),
        message.jid,
        message.participant,
        message.id
      )
      return message.send(lists.message, {}, lists.type)
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
        'Available Architectures\n',
        message.jid,
        message.participant,
        message.id
      )
      return message.send(list.message, { quoted: message.data }, list.type)
    }

    return message.sendFromUrl(result, { quoted: message.data })
  }
)
