const { instagram, bot, lang } = require('../lib/')

bot(
  {
    pattern: 'insta ?(.*)',
    desc: lang.plugins.insta.desc,
    type: 'download',
  },
  async (message, match) => {
    match = match || message.reply_message.text
    if (!match) return await message.send(lang.plugins.insta.usage)
    const result = await instagram(match)
    if (!result.length)
      return await message.send(lang.plugins.insta.not_found, {
        quoted: message.quoted,
      })
    for (const url of result) {
      await message.sendFromUrl(url)
    }
  }
)
