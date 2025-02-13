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
    const members = await message.groupMetadata(message.jid)
    const membersJids = members.map(({ id }) => id)

    let [rawType, rawCount, rawKickOrType, rawCOUNT, rawKICK] = match.split(' ')
    if (!rawType || !rawCount) {
      return await message.send(lang.plugins.inactive.usage)
    }

    const type = rawType.toLowerCase()
    const count = Number(rawCount)
    const kickOrType = rawKickOrType ? rawKickOrType.toLowerCase() : null
    const COUNT = rawCOUNT ? Number(rawCOUNT) : null
    const KICK = rawKICK ? rawKICK.toLowerCase() : null

    if (
      (type !== 'total' && type !== 'day') ||
      isNaN(count) ||
      (kickOrType && kickOrType !== 'total' && kickOrType !== 'kick') ||
      (rawCOUNT && isNaN(COUNT))
    ) {
      return await message.send(lang.plugins.inactive.usage)
    }

    const participants = await getMsg(message.jid)
    const now = Date.now()
    const inactive = []

    for (const jid of membersJids) {
      const data = participants[jid]
      if (!data) {
        inactive.push(jid)
        continue
      }

      if (kickOrType === 'total') {
        if (data.total <= COUNT && getFloor((now - data.time) / 1000) / 86400 >= count) {
          inactive.push(jid)
        }
      } else if (type === 'total') {
        if (data.total <= count) inactive.push(jid)
      } else if (type === 'day') {
        if (getFloor((now - data.time) / 1000) / 86400 >= count) {
          inactive.push(jid)
        }
      }
    }

    let msg = lang.plugins.inactive.inactives.format(inactive.length)
    if (inactive.length < 1) return await message.send(msg)

    if (kickOrType === 'kick' || KICK === 'kick') {
      const isImAdmin = await isAdmin(members, message.client.user.jid)
      if (!isImAdmin) return await message.send(lang.plugins.common.not_admin)
      await message.send(lang.plugins.inactive.removing.format(inactive.length))
      await sleep(7000)
      return await message.Kick(inactive)
    }

    for (let i = 0; i < inactive.length; i++) {
      msg += `\n*${i + 1}.*${addSpace(i + 1, inactive.length)} @${jidToNum(inactive[i])}`
    }
    return await message.send(msg, {
      contextInfo: { mentionedJid: inactive },
    })
  }
)
