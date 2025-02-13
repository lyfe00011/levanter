const { reddit, bot, isUrl, lang } = require('../lib/')

bot(
  {
    pattern: 'reddit ?(.*)',
    desc: lang.plugins.reddit.desc,
    type: 'download',
  },
  async (message, match) => {
    match = isUrl(match || message.reply_message.text)
    if (!match) return await message.send(lang.plugins.reddit.usage)
    const result = await reddit(match)
    if (!result)
      return await message.send(lang.plugins.reddit.error, {
        quoted: message.quoted,
      })
    return await message.sendFromUrl(result)
  }
)
