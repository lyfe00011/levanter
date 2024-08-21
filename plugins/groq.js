const { bot, groqResponse } = require('../lib')

bot(
  {
    pattern: 'groq ?(.*)',
    desc: 'groq ai',
    type: 'AI',
  },
  async (message, match) => {
    if (!match)
      return await message.send(
        '*Example :* groq Hi\n\nYou can set GROQ_API_KEY, GROQ_MODEL, and GROQ_SYSTEM_MSG, which are optional.\nhttps://console.groq.com/keys'
      )
    const res = await groqResponse(match)
    await message.send(res, { quoted: message.data })
  }
)
