const { bot, groqResponse, lang } = require('../lib')

bot(
  {
    pattern: 'groq ?(.*)',
    desc: lang.plugins.groq.desc,
    type: 'AI',
  },
  async (message, match) => {
    if (!match) {
      return await message.send(lang.plugins.groq.example)
    }

    const res = await groqResponse(match)
    await message.send(res, { quoted: message.data })
  }
)
