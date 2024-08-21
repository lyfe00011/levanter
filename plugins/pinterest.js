const { pinterest, bot, isUrl } = require('../lib/')

bot(
  {
    pattern: 'pinterest ?(.*)',
    desc: 'Download pinterest video/image',
    type: 'download',
  },
  async (message, match) => {
    match = isUrl(match || message.reply_message.text)
    if (!match) return await message.send('_Example : pinterest url_')
    const result = await pinterest(match)
    if (!result.length)
      return await message.send('*Not found*', {
        quoted: message.quoted,
      })
    return await message.sendFromUrl(result)
  }
)
