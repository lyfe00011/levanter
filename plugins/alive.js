const { bot, aliveMessage } = require('../lib/')

bot(
  {
    pattern: 'alive ?(.*)',
    desc: 'bot alive message',
    type: 'misc',
  },
  async (message, match) => {
    const { msg, options, type } = await aliveMessage(match, message)
    return await message.send(msg, options, type)
  }
)
