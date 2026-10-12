const { bot, setVar, getVars, delVar, sortObject, lang } = require('../lib')
const { assertOwner, getConfigOwners, isConfigOwnerNumber, mergeNumbers, splitNums } = require('../lib/owner')
const { getStoredSudos, saveStoredSudos } = require('../lib/sudoStore')

bot(
  {
    pattern: 'getvar ?(.*)',
    desc: lang.plugins.getvar.desc,
    type: 'vars',
  },
  async (message, match) => {
    if (!(await assertOwner(message))) return
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
    if (!(await assertOwner(message))) return
    if (!match) return await message.send(lang.plugins.delvar.usage)
    const vars = await getVars(message.id)
    match = match.toUpperCase()
    if (!vars[match]) return await message.send(lang.plugins.delvar.not_found.format(match))
    if (match === 'SUDO') {
      return await message.send('_Cannot delete SUDO._')
    }
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
    if (!(await assertOwner(message))) return
    const [key, ...values] = match.split('=')
    if (!match || values.length === 0) return await message.send(lang.plugins.setvar.usage)
    const value = values.join('=').trim()
    const keyValue = key.trim().toUpperCase()
    let nextValue = value
    if (keyValue === 'SUDO') {
      const merged = mergeNumbers(getConfigOwners(), await getStoredSudos(message.id), splitNums(value))
      await saveStoredSudos(message.id, merged.filter((num) => !isConfigOwnerNumber(num)))
      nextValue = merged.join(',')
    }
    await setVar({ [keyValue]: nextValue }, message.id)
    await message.send(lang.plugins.setvar.success.format(keyValue, nextValue))
  }
)

bot(
  {
    pattern: 'allvar ?(.*)',
    desc: lang.plugins.allvar.desc,
    type: 'vars',
  },
  async (message, match) => {
    if (!(await assertOwner(message))) return
    const vars = await getVars(message.id)
    const sortedVars = sortObject(vars)
    const allVars = Object.entries(sortedVars)
      .map(([key, value]) => `${key} = ${value}`)
      .join('\n\n')

    await message.send(allVars)
  }
)
