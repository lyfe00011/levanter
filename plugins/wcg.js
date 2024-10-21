const { bot, wcg } = require('../lib/')
bot(
  {
    pattern: 'wcg ?(.*)',
    desc: 'word chain game\nwcg start to force start game',
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
    desc: 'random word game\nwrg start to force start game',
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
