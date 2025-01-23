const { bot, setVar, getVars, delVar, sortObject } = require('../lib/index')

bot(
  {
    pattern: 'getvar ?(.*)',
    desc: 'Show var',
    type: 'vars',
  },
  async (message, match) => {
    if (!match) return await message.send(`*Example : getvar sudo*`)
    const vars = await getVars(message.id)
    match = match.toUpperCase()
    if (vars[match]) return await message.send(`${match} = ${vars[match]}`)
    return await message.send(`_${match} not found in vars_`)
  }
)

bot(
  {
    pattern: 'delvar ?(.*)',
    desc: 'delete var',
    type: 'vars',
  },
  async (message, match) => {
    if (!match) return await message.send(`*Example : delvar sudo*`)
    const vars = await getVars(message.id)
    match = match.toUpperCase()
    if (!vars[match]) return await message.send(`_${match} not found in vars_`)
    await delVar(match, message.id)
    await message.send(`_${match} deleted_`)
  }
)

bot(
  {
    pattern: 'setvar ?(.*)',
    desc: 'set var',
    type: 'vars',
  },
  async (message, match) => {
    const [key, ...values] = match.split('=')
    if (!match || values.length === 0) return await message.send(`*Example : setvar key = value*`)
    const value = values.join('=').trim()
    const keyValue = key.trim().toUpperCase()
    await setVar({ [keyValue]: value }, message.id)
    await message.send(`_new var ${key} added as ${value}_`)
  }
)

bot(
  {
    pattern: 'allvar ?(.*)',
    desc: 'Show All var',
    type: 'vars',
  },
  async (message, match) => {
    const vars = await getVars(message.id)
    const sortedVars = sortObject(vars)
    const allVars = Object.entries(sortedVars)
      .map(([key, value]) => `${key} = ${value}`)
      .join('\n\n')

    await message.send(allVars)
  }
)
