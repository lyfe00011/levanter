const { bot, openRouter, lang } = require('../lib')

bot(
  {
    pattern: 'or ?(.*)',
    desc: lang.plugins.openrouter.desc,
    type: 'AI',
  },
  async (message, match) => {
    if (!match) {
      return await message.send(lang.plugins.openrouter.example)
    }

    const res = await openRouter(match, message.id)
    await message.send(res, { quoted: message.data })
  }
)
