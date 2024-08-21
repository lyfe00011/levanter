const { bot, setVar, getVars, delVar } = require('../lib/index')

bot(
  {
    pattern: 'getvar ?(.*)',
    desc: 'Show var',
    type: 'vars',
  },
  async (message, match) => {
    if (!match) return await message.send(`*Example : getvar sudo*`)
    const vars = await getVars()
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
    const vars = await getVars()
    match = match.toUpperCase()
    if (!vars[match]) return await message.send(`_${match} not found in vars_`)
    await delVar(match)
    await message.send(`_${match} deleted_\nbot may restarts.`)
  }
)

bot(
  {
    pattern: 'setvar ?(.*)',
    desc: 'set var',
    type: 'vars',
  },
  async (message, match) => {
    const keyValue = match.split('=')
    if (!match || keyValue.length < 2)
      return await message.send(`*Example : setvar sudo = 91987653210*`)
    const key = keyValue[0].trim().toUpperCase()
    const value = keyValue[1].trim()
    await setVar({ [key]: value })
    await message.send(`_new var ${key} added as ${value}_\nbot may restarts.`)
  }
)

bot(
  {
    pattern: 'allvar ?(.*)',
    desc: 'Show All var',
    type: 'vars',
  },
  async (message, match) => {
    const vars = await getVars()
    let allVars = ''
    for (const key in vars) {
      allVars += `${key} = ${vars[key]}\n\n`
    }
    return await message.send(allVars.trim())
  }
)
