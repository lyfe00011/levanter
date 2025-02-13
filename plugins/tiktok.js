const { tiktok, bot, isUrl, lang } = require('../lib')

bot(
  {
    pattern: 'tiktok ?(.*)',
    desc: lang.plugins.tiktok.desc,
    type: 'download',
  },
  async (message, match) => {
    match = isUrl(match || message.reply_message.text)
    if (!match) return await message.send(lang.plugins.tiktok.usage)
    const result = await tiktok(match)
    if (!result)
      return await message.send(lang.plugins.tiktok.not_found, {
        quoted: message.quoted,
      })
    return await message.sendFromUrl(result.url2 || result.url1)
  }
)
