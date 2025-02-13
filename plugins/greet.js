const { bot, setVar, getVars, lang } = require('../lib')

bot(
  {
    pattern: 'setgreet ?(.*)',
    desc: lang.plugins.greet.setdesc,
    type: 'personal',
  },
  async (message, match) => {
    if (!match) return await message.send(lang.plugins.greet.setexample)

    await setVar({ PERSONAL_MESSAGE: match }, message.id)

    return await message.send(lang.plugins.greet.setupdate)
  }
)

bot(
  {
    pattern: 'getgreet ?(.*)',
    desc: lang.plugins.greet.getdesc,
    type: 'personal',
  },
  async (message, match) => {
    const vars = await getVars(message.id)
    const msg = vars['PERSONAL_MESSAGE']

    if (!msg || msg === 'null') return await message.send(lang.plugins.greet.notsetgreet)

    return await message.send(msg)
  }
)

bot(
  {
    pattern: 'delgreet ?(.*)',
    desc: lang.plugins.greet.deldesc,
    type: 'personal',
  },
  async (message, match) => {
    await setVar({ PERSONAL_MESSAGE: 'null' }, message.id)

    return await message.send(lang.plugins.greet.delupdate)
  }
)
