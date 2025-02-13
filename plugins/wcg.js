const { bot, wcg, lang } = require('../lib/')
bot(
  {
    pattern: 'wcg ?(.*)',
    desc: lang.plugins.wcg.desc,
    type: 'game',
  },
  async (message, match) => {
    if (match == 'start') {
      return await wcg.start(message.jid, message.participant, message.id)
    }
    if (match == 'end') {
      return await wcg.end(message.jid, message.participant, message.id)
    }
    wcg.start_game(message.jid, message.participant, 'chain', message.id, match)
  }
)

bot(
  {
    pattern: 'wrg ?(.*)',
    desc: lang.plugins.wrg.desc,
    type: 'game',
  },
  async (message, match) => {
    if (match == 'start') {
      return await wcg.start(message.jid, message.participant, message.id)
    }
    if (match == 'end') {
      return await wcg.end(message.jid, message.participant, message.id)
    }
    wcg.start_game(message.jid, message.participant, 'random', message.id, match)
  }
)
