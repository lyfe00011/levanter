const { bot, isUrl, getImgUrl } = require('../lib/')
bot(
  {
    pattern: 'upload ?(.*)',
    desc: 'Download from url',
    type: 'download',
  },
  async (message, match) => {
    match = isUrl(match || message.reply_message.text)
    if (!match) return await message.send('_Example : upload url_')
    if (match.startsWith('https://images.app.goo.gl')) match = await getImgUrl(match)
    await message.sendFromUrl(match, { buffer: false })
  }
)
