const { instagram, bot } = require('../lib/')

bot(
  {
    pattern: 'insta ?(.*)',
    desc: 'Download Instagram Posts',
    type: 'download',
  },
  async (message, match) => {
    match = match || message.reply_message.text
    if (!match) return await message.send('_Example : insta url_')
    const result = await instagram(match)
    if (!result.length)
      return await message.send('*Not found*', {
        quoted: message.quoted,
      })
    for (const url of result) {
      await message.sendFromUrl(url)
    }
  }
)
