const { bot, isUrl, takeScreenshot } = require('../lib/')

bot(
  {
    pattern: 'ss ?(.*)',
    desc: 'Take web page screenshot',
    type: 'download',
  },
  async (message, match) => {
    match = isUrl(match || message.reply_message.text)
    if (!match) return await message.send('*Example :* ss url')
    const image = await takeScreenshot(match)

    await message.send(image, { quoted: message.data, mimetype: 'image/png' }, 'image')
  }
)

bot(
  {
    pattern: 'fullss ?(.*)',
    desc: 'Take web page screenshot',
    type: 'download',
  },
  async (message, match) => {
    match = isUrl(match || message.reply_message.text)
    if (!match) return await message.send('*Example :* fullss url')
    const image = await takeScreenshot(match, 'full')
    await message.send(image, { quoted: message.data, mimetype: 'image/png' }, 'image')
  }
)
