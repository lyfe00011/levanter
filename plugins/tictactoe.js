const {
  bot,
  isTactacToe,
  ticTacToe,
  delTicTacToe,
  // genButtonMessage,
  isUser,
  parsedJid,
} = require('../lib/')

bot(
  {
    pattern: 'tictactoe ?(.*)',
    desc: 'TicTacToe Game.',
    type: 'game',
  },
  async (message, match) => {
    if (match == 'end') {
      const end = await delTicTacToe(message.id)
      if (end) return await message.send('*Game ended*')
    }
    let [restart, id] = match.split(' ')
    // const game = isTactacToe()
    // if (game.state)
    // return await message.send(game.text + '\n\nChoose a number in 1-9')
    // return await message.send(
    // 	await genButtonMessage(
    // 		[{ id: 'tictactoe end', text: 'END' }],
    // 		game.text,
    // 		'Choose Number from 1-9 to Play'
    // 	),
    // 	{ contextInfo: { mentionedJid: game.mentionedJid } },
    // 	'button'
    // )
    let opponent = message.mention[0] || message.reply_message.jid
    let me = message.participant
    const [_me, _opponent] = parsedJid(match)
    if (isUser(_me) && isUser(_opponent)) {
      me = _me
      opponent = _opponent
    }
    if (restart == 'restart' && isUser(id)) {
      opponent = id
      await delTicTacToe(message.id)
    }
    if (!opponent || opponent == me)
      return await message.send(
        '*Choose an Opponent*\n*Reply to a message or mention or tictactoe jid1 jid2*'
      )
    const { text } = await ticTacToe(message.jid, me, opponent, message.id)
    return await message.send(text, {
      contextInfo: { mentionedJid: [me, opponent] },
    })
  }
)
