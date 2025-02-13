const { pinterest, bot, isUrl, lang } = require('../lib/')

bot(
  {
    pattern: 'pinterest ?(.*)',
    desc: lang.plugins.pinterest.desc,
    type: 'download',
  },
  async (message, match) => {
    match = isUrl(match || message.reply_message.text)
    if (!match) return await message.send(lang.plugins.pinterest.usage)
    const result = await pinterest(match)
    if (!result.length)
      return await message.send(lang.plugins.pinterest.not_found, {
        quoted: message.quoted,
      })
    return await message.sendFromUrl(result)
  }
)
