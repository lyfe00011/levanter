const {
  bot,
  apkMirror,
  // genListMessage,
  // genButtonMessage,
  generateList,
} = require('../lib')
bot(
  {
    pattern: 'apk ?(.*)',
    desc: 'Download apk from apkmirror',
    type: 'download',
  },
  async (message, match) => {
    if (!match) return await message.send('*Example : apk Mixplorer*')
    const { result, status } = await apkMirror(match)
    if (status > 400) {
      if (!result.length) return await message.send('_No results found matching your query_')
      const list = []
      for (const { title, url } of result) list.push({ id: `apk ${status};;${url}`, text: title })
      const lists = generateList(
        list,
        `Matching Apps(${list.length})\n`,
        message.jid,
        message.participant,
        message.id
      )
      return await message.send(lists.message, {}, lists.type)

      // return await message.send(
      // 	generateList(list, 'Matching apps', 'DOWNLOAD'),
      // 	{},
      // 	'list'
      // )
    }
    if (status > 200) {
      const button = []
      for (const apk in result)
        button.push({
          id: `apk ${status};;${result[apk].url}`,
          text: result[apk].title,
        })
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
      // return await message.send(
      // 	await genButtonMessage(button, 'Available apks'),
      // 	{},
      // 	'button'
      // )
    }
    return await message.sendFromUrl(result, { quoted: message.data })
  }
)
