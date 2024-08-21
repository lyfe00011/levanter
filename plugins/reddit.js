const { reddit, bot, isUrl } = require('../lib/')

bot(
  {
    pattern: 'reddit ?(.*)',
    desc: 'Download reddit video',
    type: 'download',
  },
  async (message, match) => {
    match = isUrl(match || message.reply_message.text)
    if (!match) return await message.send('_Example : reddit url_')
    const result = await reddit(match)
    if (!result)
      return await message.send('*Not found*', {
        quoted: message.quoted,
      })
    return await message.sendFromUrl(result)
  }
)
