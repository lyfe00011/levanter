const { trt, bot, lang } = require('../lib')

bot(
  {
    pattern: 'trt ?(.*)',
    desc: lang.plugins.trt.desc,
    type: 'search',
  },
  async (message, match, ctx) => {
    if (!message.reply_message.text) return await message.send(lang.plugins.trt.usage)
    const [to, from] = match.split(' ')
    const msg = await trt(message.reply_message.text, to || ctx.LANG, from)
    if (msg) return await message.send(msg, { quoted: message.quoted })
  }
)
