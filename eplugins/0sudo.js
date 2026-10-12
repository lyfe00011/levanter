const { bot, jidToNum, getVars, setVar } = require('../lib')
const {
  assertOwner,
  getConfigOwners,
  isConfigOwnerNumber,
  mergeNumbers,
  numsMatch,
  splitNums,
} = require('../lib/owner')
const { getStoredSudos, saveStoredSudos } = require('../lib/sudoStore')

const USAGE = 'Example : setsudo 9876543210 | mention | reply to msg'

function targetOf(message, match) {
  const replied = message.reply_message && message.reply_message.jid
  const mentioned = message.mention && message.mention[0]
  return jidToNum(replied || mentioned || match)
}

async function varsSudos(id) {
  try {
    const vars = await getVars(id)
    return splitNums(vars && vars.SUDO)
  } catch {
    // hosts without a var backend cannot read runtime vars
    return []
  }
}

async function applySudos(id, numbers) {
  const value = numbers.join(',')
  try {
    // Called first because the platform var writers compare against process.env
    // and skip the update when the value already matches.
    await setVar({ SUDO: value }, id)
  } catch {
    // the persisted list is re-applied on the next boot, so hosts without a
    // var backend still pick it up
  }
  process.env.SUDO = value
}

bot(
  {
    pattern: 'setsudo ?(.*)',
    fromMe: true,
    desc: 'add replied or mentioned or given num to sudo',
    type: 'vars',
  },
  async (message, match) => {
    if (!(await assertOwner(message))) return
    const target = targetOf(message, match)
    if (!target) return await message.send(USAGE)
    try {
      const id = message.id
      const merged = mergeNumbers(getConfigOwners(), await getStoredSudos(id), await varsSudos(id), [target])
      await saveStoredSudos(id, merged.filter((num) => !isConfigOwnerNumber(num)))
      await applySudos(id, merged)
      return await message.send('```' + `New SUDO Numbers are : ${merged.join(',')}` + '```')
    } catch (error) {
      return await message.send(error.message, { quoted: message.data })
    }
  }
)

bot(
  {
    pattern: 'delsudo ?(.*)',
    fromMe: true,
    desc: 'remove replied or mentioned or given num to sudo',
    type: 'vars',
  },
  async (message, match) => {
    if (!(await assertOwner(message))) return
    const target = targetOf(message, match)
    if (!target) return await message.send(USAGE)
    if (isConfigOwnerNumber(target)) {
      return await message.send('_Cannot remove owner._')
    }
    try {
      const id = message.id
      const kept = mergeNumbers(await getStoredSudos(id), await varsSudos(id)).filter((num) => !numsMatch(num, target))
      const extras = kept.filter((num) => !isConfigOwnerNumber(num))
      await saveStoredSudos(id, extras)
      const merged = mergeNumbers(getConfigOwners(), extras)
      await applySudos(id, merged)
      await message.send('```' + `New SUDO Numbers are : ${merged.join(',')}` + '```')
    } catch (error) {
      return await message.send(error.message, { quoted: message.data })
    }
  }
)

bot(
  {
    pattern: 'getsudo ?(.*)',
    fromMe: true,
    desc: 'show sudos',
    type: 'vars',
  },
  async (message, match) => {
    try {
      const merged = mergeNumbers(getConfigOwners(), await getStoredSudos(message.id), await varsSudos(message.id))
      await message.send('```' + `SUDO Numbers are : ${merged.join(',')}` + '```')
    } catch (error) {
      return await message.send(error.message, { quoted: message.data })
    }
  }
)
