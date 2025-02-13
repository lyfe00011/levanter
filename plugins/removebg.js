const { bot, removeBg, lang } = require('../lib')
bot(
  {
    pattern: 'rmbg',
    desc: lang.plugins.rmbg.desc,
    type: 'misc',
  },
  async (message, match, ctx) => {
    if (!ctx.RMBG_KEY || ctx.RMBG_KEY == 'null') {
      return await message.send(lang.plugins.rmbg.key)
    }
    if (!message.reply_message || !message.reply_message.image)
      return await message.send(lang.plugins.rmbg.usage)
    const buffer = await removeBg(
      await message.reply_message.downloadAndSaveMediaMessage('rmbg'),
      ctx.RMBG_KEY
    )
    if (typeof buffer == 'string') return await message.send(buffer, { quoted: message.data })
    return await message.send(buffer, { quoted: message.quoted, mimetype: 'image/png' }, 'image')
  }
)
