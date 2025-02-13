const { bot, isUrl, getImgUrl, lang } = require('../lib/')
bot(
  {
    pattern: 'upload ?(.*)',
    desc: lang.plugins.upload.desc,
    type: 'download',
  },
  async (message, match) => {
    match = isUrl(match || message.reply_message.text)
    if (!match) return await message.send(lang.plugins.upload.usage)
    if (match.startsWith('https://images.app.goo.gl')) match = await getImgUrl(match)
    await message.sendFromUrl(match, { buffer: false })
  }
)
