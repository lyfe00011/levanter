const { facebook, bot, generateList, isUrl, lang } = require('../lib/')

bot(
  {
    pattern: 'fb ?(.*)',
    desc: lang.plugins.fb.desc,
    type: 'download',
  },
  async (message, match) => {
    match = isUrl(match || message.reply_message?.text)

    if (!match) {
      return message.send(lang.plugins.fb.example)
    }

    const result = await facebook(match)

    if (!result.length) {
      return message.send(lang.plugins.fb.invalid, {
        quoted: message.quoted,
      })
    }

    if (result.length === 1) {
      return message.sendFromUrl(result[0].url, { quoted: message.data })
    }

    const list = generateList(
      result.map((e) => ({
        id: `upload ${e.url}`,
        text: e.quality,
      })),
      lang.plugins.fb.quality,
      message.jid,
      message.participant,
      message.id
    )

    return message.send(list.message, {}, list.type)
  }
)
