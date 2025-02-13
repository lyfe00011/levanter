const { bot, lang } = require('../lib/')

bot(
  {
    pattern: 'ping ?(.*)',
    desc: lang.plugins.ping.desc,
    type: 'misc',
  },
  async (message, match) => {
    const start = new Date().getTime()
    await message.send(lang.plugins.ping.ping_sent)
    const end = new Date().getTime()
    return await message.send(lang.plugins.ping.pong.format(end - start))
  }
)
