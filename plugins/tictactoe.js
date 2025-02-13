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

    const [_me, _opponent] = parsedJid(match)
    if (isUser(_me) && isUser(_opponent)) {
      me = _me
      opponent = _opponent
    }

    if (action === 'restart' && isUser(id)) {
      opponent = id
      await delTicTacToe(message.id)
    }

    if (!opponent || opponent === me) {
      return await message.send(lang.plugins.tictactoe.choose_opponent)
    }

    const { text } = await ticTacToe(message.jid, me, opponent, message.id)
    return await message.send(text, {
      contextInfo: { mentionedJid: [me, opponent] },
    })
  }
)
