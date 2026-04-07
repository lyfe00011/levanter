const { tiktok, bot, generateList, isUrl, lang } = require('../lib/index')

bot(
  {
    pattern: 'tiktok ?(.*)',
    desc: lang.plugins.tiktok.desc,
    type: 'download',
  },
  async (message, match) => {
    match = isUrl(match || message.reply_message?.text)
    if (!match) return await message.send(lang.plugins.tiktok.usage)

    const result = await tiktok(match)

    if (!result || !result.length) {
      return await message.send(lang.plugins.tiktok.not_found, {
        quoted: message.quoted,
      })
    }

    if (result.length === 1) {
      return await message.sendFromUrl(result[0].url, { quoted: message.data })
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
