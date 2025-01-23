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
} = require('../lib')

bot(
  {
    pattern: 'msgs ?(.*)',
    desc: 'shows groups message count',
    type: 'group',
    onlyGroup: true,
  },
  async (message, match) => {
    const user = message.mention[0] || message.reply_message.jid
    const participants = await getMsg(message.jid, user)
    let msg = ''
    const now = new Date().getTime()
    if (user) {
      msg += `*Number :* ${jidToNum(user)}\n*Name :* ${participants.name || ''}\n*Total Msgs :* ${
        participants.total
      }\n`
      const { items } = participants
      for (const item in items) msg += `*${item} :* ${items[item]}\n`
      msg += `*lastSeen :* ${secondsToHms((now - participants.time) / 1000) || 0} ago\n\n`
    } else {
      for (const participant in participants) {
        msg += `*Number :* ${jidToNum(participant)}\n*Name :* ${
          participants[participant].name || ''
        }\n*Total Msgs :* ${participants[participant].total}\n`
        const { items } = participants[participant]
        for (const item in items) msg += `*${item} :* ${items[item]}\n`
        msg += `*lastSeen :* ${
          secondsToHms((now - participants[participant].time) / 1000) || 0
        } ago\n\n`
      }
    }
    await message.send(msg.trim())
  }
)

bot(
  {
    pattern: 'reset ?(.*)',
    desc: 'reset groups message count',
    type: 'group',
    onlyGroup: true,
  },
  async (message, match) => {
    const user = message.reply_message.jid || message.mention[0]
    if (!user && match != 'all')
      return await message.send('*Example :*\nreset all\nreset mention/reply a person')
    if (match == 'all') {
      await resetMsgs(message.jid)
      return await message.send('_Everyones message count deleted._')
    }
    await resetMsgs(message.jid, user)
    return await message.send(`_@${jidToNum(user)} message count deleted._`, {
      contextInfo: { mentionedJid: [user] },
    })
  }
)

bot(
  {
    pattern: 'inactive ?(.*)',
    desc: 'show/kick who message count not met',
    type: 'group',
    onlyGroup: true,
  },
  async (message, match) => {
    const members = await message.groupMetadata(message.jid)
    const membersJids = members.map(({ id }) => id)
    const [type, count, kickOrType, COUNT, KICK] = match.split(' ')
    if (
      !type ||
      !count ||
      (type.toLowerCase() != 'total' && type.toLowerCase() != 'day') ||
      isNaN(count) ||
      (kickOrType && kickOrType != 'total' && kickOrType != 'kick') ||
      (COUNT && isNaN(COUNT))
    )
      return await message.send(
        `*Example :*\ninactive day 10\ninactive day 10 kick\ninactive total 100\ninactive total 100 kick\ninactive day 7 total 150\ninactive day 7 total 150 kick\n\nif kick not mentioned, Just list`
      )
    const participants = await getMsg(message.jid)
    const now = new Date().getTime()
    const inactive = []
    for (const participant of membersJids) {
      if (!participants[participant]) inactive.push(participant)
      else if (kickOrType && kickOrType == 'total') {
        if (
          participants[participant].total <= COUNT &&
          getFloor((now - participants[participant].time) / 1000) / 86400 >= count
        )
          inactive.push(participant)
      } else if (type == 'total') {
        if (participants[participant].total <= count) inactive.push(participant)
      } else {
        if (getFloor((now - participants[participant].time) / 1000) / 86400 >= count)
          inactive.push(participant)
      }
    }
    let msg = `_Total inactives are : ${inactive.length}_`
    if (inactive.length < 1) return await message.send(msg)
    if (kickOrType == 'kick' || KICK == 'kick') {
      const isImAdmin = await isAdmin(members, message.client.user.jid)
      if (!isImAdmin) return await message.send(`_I'm not admin._`)
      await message.send(`_Removing ${inactive.length} inactive members in 7 seconds_`)
      await sleep(7000)
      return await message.Kick(inactive)
    }
    for (let i = 0; i < inactive.length; i++)
      msg += `\n*${i + 1}.*${addSpace(i + 1, inactive.length)} @${jidToNum(inactive[i])}`
    return await message.send(msg, {
      contextInfo: { mentionedJid: inactive },
    })
  }
)
