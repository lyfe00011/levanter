const {
  bot,
  getMsg,
  jidToNum,
  resetMsgs,
  getFloor,
  sleep,
  secondsToHms,
  isAdmin,
  addSpace,
  lang,
  getJid
} = require('../lib')

bot(
  {
    pattern: 'msgs ?(.*)',
    desc: lang.plugins.msgs.desc,
    type: 'group',
    onlyGroup: true,
  },
  async (message) => {
    const user = message.mention?.[0] || message.reply_message?.jid
    const participants = await getMsg(message.jid, user)
    let msg = ''
    const now = Date.now()

    const generateParticipantMsg = (participantData, jid) => {
      let out = lang.plugins.msgs.msg_init.format(
        jidToNum(jid),
        participantData.name || '',
        participantData.total
      )

      const { items } = participantData
      for (const key in items) {
        out += `*${key} :* ${items[key]}\n`
      }
      out += lang.plugins.msgs.msg_last.format(
        secondsToHms((now - participantData.time) / 1000) || 0
      )
      return out
    }

    if (!participants) {
      return await message.send(lang.plugins.msgs.no_activity)
    }

    if (user) {
      msg += generateParticipantMsg(participants, user)
    } else {
      for (const jid in participants) {
        msg += generateParticipantMsg(participants[jid], jid)
      }
    }

    await message.send(msg.trim())
  }
)

bot(
  {
    pattern: 'reset ?(.*)',
    desc: lang.plugins.reset.desc,
    type: 'group',
    onlyGroup: true,
  },
  async (message, match) => {
    const user = message.reply_message?.jid || message.mention?.[0]

    if (!user && match !== 'all') {
      return await message.send(lang.plugins.reset.usage)
    }

    if (match === 'all') {
      await resetMsgs(message.jid)
      return await message.send(lang.plugins.reset.reset_all)
    }

    await resetMsgs(message.jid, user)
    return await message.send(lang.plugins.reset.reset_one.format(jidToNum(user)), {
      contextInfo: { mentionedJid: [user] },
    })
  }
)

bot(
  {
    pattern: 'inactive ?(.*)',
    desc: lang.plugins.inactive.desc,
    type: 'group',
    onlyGroup: true,
  },
  async (message, match) => {
    const args = match.toLowerCase().split(' ')
    if (args.length < 2 && !args.includes('kick')) {
      return await message.send(lang.plugins.inactive.usage)
    }

    let inactiveDaysThreshold = null
    let totalMsgsThreshold = null
    const shouldKick = args.includes('kick')

    for (let i = 0; i < args.length; i++) {
      const val = Number(args[i + 1])
      if (args[i] === 'day' && !isNaN(val)) {
        inactiveDaysThreshold = val
      } else if (args[i] === 'total' && !isNaN(val)) {
        totalMsgsThreshold = val
      }
    }

    if (inactiveDaysThreshold === null && totalMsgsThreshold === null) {
      return await message.send(lang.plugins.inactive.usage)
    }

    const members = await message.groupMetadata(message.jid)
    const botJid = message.client.user.jid

    const participantsData = (await getMsg(message.jid)) || {}
    const now = Date.now()
    const day = 24 * 60 * 60 * 1000
    const inactiveJids = []

    for (const m of members) {
      const jid = await getJid(m.id, message.id)
      if (jid === botJid || m.admin) continue

      const data = participantsData[jid] || { total: 0, time: 0 }

      let satisfiesDay = true
      if (inactiveDaysThreshold !== null) {
        const daysInactive = data.time === 0 ? Infinity : (now - data.time) / day
        satisfiesDay = daysInactive >= inactiveDaysThreshold
      }

      let satisfiesTotal = true
      if (totalMsgsThreshold !== null) {
        satisfiesTotal = data.total <= totalMsgsThreshold
      }

      if (satisfiesDay && satisfiesTotal) {
        inactiveJids.push(jid)
      }
    }

    let msg = lang.plugins.inactive.inactives.format(inactiveJids.length)
    if (inactiveJids.length < 1) return await message.send(msg)

    if (shouldKick) {
      const isImAdmin = await isAdmin(members, botJid)
      if (!isImAdmin) return await message.send(lang.plugins.common.not_admin)
      await message.send(lang.plugins.inactive.removing.format(inactiveJids.length))
      await sleep(7000)
      return await message.Kick(inactiveJids)
    }

    for (let i = 0; i < inactiveJids.length; i++) {
      msg += `\n*${i + 1}.*${addSpace(i + 1, inactiveJids.length)} @${jidToNum(inactiveJids[i])}`
    }
    return await message.send(msg, {
      contextInfo: { mentionedJid: inactiveJids },
    })
  }
)
