const config = require('../config')
const { trt, bot } = require('../lib/index')

bot(
  {
    pattern: 'trt ?(.*)',
    desc: 'Google transalte',
    type: 'search',
  },
  async (message, match) => {
    if (!message.reply_message.text)
      return await message.send('*Reply to a text msg\n*_Example : trt ml_\ntrt ml hi')
    const [to, from] = match.split(' ')
    const msg = await trt(message.reply_message.text, to || config.LANG, from)
    if (msg) return await message.send(msg, { quoted: message.quoted })
  }
)
