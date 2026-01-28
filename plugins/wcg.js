const { bot, wcg, lang } = require('../lib/')
bot(
  {
    pattern: 'wcg ?(.*)',
    desc: lang.plugins.wcg.desc,
    type: 'game',
  },
  async (message, match) => {
    if (!match) return await message.send(lang.plugins.wcg.usage)
    if (match == 'start' || match == 'hard' || match == 'easy') {
      return await wcg.start_game(message.jid, message.participant, 'chain', message.id, match == 'start' ? 'easy' : match)
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
    if (!match) return await message.send(lang.plugins.wrg.usage)
    if (match == 'start' || match == 'hard' || match == 'easy') {
      return await wcg.start_game(message.jid, message.participant, 'random', message.id, match == 'start' ? 'easy' : match)
    }
    if (match == 'end') {
      return await wcg.end(message.jid, message.participant, message.id)
    }
    wcg.start_game(message.jid, message.participant, 'random', message.id, match)
  }
)
