const { bot, setVar, getVars, delVar, sortObject, lang } = require('../lib')

bot(
  {
    pattern: 'getvar ?(.*)',
    desc: lang.plugins.getvar.desc,
    type: 'vars',
  },
  async (message, match) => {
    if (!match) return await message.send(lang.plugins.getvar.usage)
    const vars = await getVars(message.id)
    match = match.toUpperCase()
    if (vars[match]) return await message.send(`${match} = ${vars[match]}`)
    return await message.send(lang.plugins.getvar.not_found.format(match))
  }
)

bot(
  {
    pattern: 'delvar ?(.*)',
    desc: lang.plugins.delvar.desc,
    type: 'vars',
  },
  async (message, match) => {
    if (!match) return await message.send(lang.plugins.delvar.usage)
    const vars = await getVars(message.id)
    match = match.toUpperCase()
    if (!vars[match]) return await message.send(lang.plugins.delvar.not_found.format(match))
    await delVar(match, message.id)
    await message.send(lang.plugins.delvar.deleted.format(match))
  }
)

bot(
  {
    pattern: 'setvar ?(.*)',
    desc: lang.plugins.setvar.desc,
    type: 'vars',
  },
  async (message, match) => {
    const [key, ...values] = match.split('=')
    if (!match || values.length === 0) return await message.send(lang.plugins.setvar.usage)
    const value = values.join('=').trim()
    const keyValue = key.trim().toUpperCase()
    await setVar({ [keyValue]: value }, message.id)
    await message.send(lang.plugins.setvar.success.format(keyValue, value))
  }
)

bot(
  {
    pattern: 'allvar ?(.*)',
    desc: lang.plugins.allvar.desc,
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
