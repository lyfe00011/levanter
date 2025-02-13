const { bot, gemini, lang } = require('../lib')

bot(
  {
    pattern: 'gemini ?(.*)',
    desc: lang.plugins.gemini.desc,
    type: 'ai',
  },
  async (message, match, ctx) => {
    if (!ctx.GEMINI_API_KEY) {
      return await message.send(lang.plugins.gemini.Key)
    }

    if (!match) {
      return await message.send(lang.plugins.gemini.example)
    }

    let image = null

    if (message.reply_message && message.reply_message.image) {
      image = {
        image: await message.reply_message.downloadMediaMessage(),
        mimetype: message.reply_message.mimetype,
      }
    }

    const res = await gemini(match || 'Describe this image.', message.id, image)

    await message.send(res.data, { quoted: message.data })
  }
)
