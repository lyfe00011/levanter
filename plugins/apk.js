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
      const buttons = result.map(({ title, url }) => ({
        id: `apk ${status};;${url}`,
        text: title,
      }))

      if (buttons.length === 1) {
        const res = await apkMirror(buttons[0].id.replace('apk ', ''))
        return message.sendFromUrl(res.result)
      }

      const list = generateList(
        buttons,
        'Available Architectures',
        message.jid,
        message.participant,
        message.id
      )
      return message.send(list.message, { quoted: message.data }, list.type)
    }

    return message.sendFromUrl(result, { quoted: message.data })
  }
)
