const { bot, aliveMessage, lang } = require('../lib/')

bot(
  {
    pattern: 'alive ?(.*)',
    desc: lang.plugins.alive.desc,
    type: 'misc',
  },
  async (message, match) => {
    const { msg, options, type } = await aliveMessage(match, message)
    return await message.send(msg, options, type)
  }
)
