const { bot, isTactacToe, ticTacToe, delTicTacToe, isUser, parsedJid, lang } = require('../lib/')

bot(
  {
    pattern: 'tictactoe ?(.*)',
    desc: lang.plugins.tictactoe.desc,
    type: 'game',
  },
  async (message, match) => {
    if (match === 'end') {
      return (await delTicTacToe(message.id))
        ? message.send(lang.plugins.tictactoe.game_ended)
        : null
    }

    let [action, id] = match.split(' ')
    let opponent = message.mention?.[0] || message.reply_message?.jid
    let me = message.participant

    const jids = parsedJid(match)
    if (jids.length >= 2) {
      me = jids[0]
      opponent = jids[1]
    } else if (jids.length === 1 && !opponent) {
      opponent = jids[0]
    }

    if ((action === 'restart' || action === 'normal') && isUser(id)) {
      opponent = id
    }

    if (action === 'restart') {
      await delTicTacToe(message.id)
    }

    if (!opponent || opponent === me) {
      return await message.send(lang.plugins.tictactoe.usage)
    }

    const { text } = await ticTacToe(message.jid, me, opponent, message.id, action === 'normal' ? 'normal' : 'infinite')
    return await message.send(text, {
      contextInfo: { mentionedJid: [me, opponent] },
    })
  }
)
