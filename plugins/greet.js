const { bot, setVar, getVars } = require('../lib/index')

bot(
  {
    pattern: 'setgreet ?(.*)',
    desc: 'Set personal message var',
    type: 'personal',
  },
  async (message, match) => {
    if (!match)
      return await message.send(`*Example : setgreet Hi this is a bot, My boss will reply soon*`)
    const vars = await setVar({
      PERSONAL_MESSAGE: match,
    })
    return await message.send(`_Greet Message Updated_`)
  }
)

bot(
  {
    pattern: 'getgreet ?(.*)',
    desc: 'Get personal message var',
    type: 'personal',
  },
  async (message, match) => {
    const vars = await getVars()
    const msg = vars['PERSONAL_MESSAGE']
    if (!msg || msg == 'null') return await message.send(`*Greet Message not Set*`)
    return await message.send(msg)
  }
)

bot(
  {
    pattern: 'delgreet ?(.*)',
    desc: 'Delete personal message var',
    type: 'personal',
  },
  async (message, match) => {
    await setVar({ PERSONAL_MESSAGE: 'null' })
    return await message.send(`_Greet Message Deleted_`)
  }
)
