const {
  isAdmin,
  sleep,
  bot,
  addSpace,
  jidToNum,
  formatTime,
  parsedJid,
  getCommon,
  numToJid,
  // genButtonMessage,
} = require('../lib/')

bot(
  {
    pattern: 'kick ?(.*)',
    desc: 'Remove members from Group.',
    type: 'group',
    onlyGroup: true,
  },
  async (message, match) => {
    const participants = await message.groupMetadata(message.jid)
    const isImAdmin = await isAdmin(participants, message.client.user.jid)
    if (!isImAdmin) return await message.send(`_I'm not admin._`)
    let user = message.mention[0] || message.reply_message.jid
    if (!user && match != 'all') return await message.send(`_Give me a user_`)
    const isUserAdmin = match != 'all' && (await isAdmin(participants, user))
    if (isUserAdmin) return await message.send(`_User is admin._`)
    if (match == 'all') {
      user = participants.filter((member) => !member.admin == true).map(({ id }) => id)
      await message.send(`_kicking everyone(${user.length})_\n*Restart bot if u wanna stop.*`)
      await sleep(10 * 1000)
    }
    return await message.Kick(user)
  }
)

bot(
  {
    pattern: 'add ?(.*)',
    desc: 'To add members',
    type: 'group',
    onlyGroup: true,
  },
  async (message, match) => {
    await message.send('> dont add those not in contacts, chances of a ban is high.')
    const participants = await message.groupMetadata(message.jid)
    const isImAdmin = await isAdmin(participants, message.client.user.jid)
    if (!isImAdmin) return await message.send(`_I'm not admin._`)
    match = match || message.reply_message.jid
    if (!match) return await message.send('Example : add 91987654321')
    // if (!match.startsWith('@@')) {
    // 	match = jidToNum(match)
    // 	const button = await genButtonMessage(
    // 		[
    // 			{ id: `@@`, text: 'NO' },
    // 			{ id: `add @@${match}`, text: 'YES' },
    // 		],
    // 		`Your Number maybe banned, Do you want add @${match}`,
    // 		''
    // 	)
    // 	return await message.send(
    // 		button,
    // 		{ contextInfo: { mentionedJid: [numToJid(match)] } },
    // 		'button'
    // 	)
    // }
    await sleep(3000)
    match = jidToNum(match)
    const res = await message.Add(match)
    if (res == '403') return await message.send('_Failed, Invite sent_')
    else if (res && res != '200') return await message.send(res, { quoted: message.data })
  }
)

bot(
  {
    pattern: 'promote ?(.*)',
    desc: 'Give admin role.',
    type: 'group',
    onlyGroup: true,
  },
  async (message, match) => {
    const participants = await message.groupMetadata(message.jid)
    const isImAdmin = await isAdmin(participants, message.client.user.jid)
    if (!isImAdmin) return await message.send(`_I'm not admin._`)
    const user = message.mention[0] || message.reply_message.jid
    if (!user) return await message.send(`_Give me a user._`)
    const isUserAdmin = await isAdmin(participants, user)
    if (isUserAdmin) return await message.send(`_User is already admin._`)
    return await message.Promote(user)
  }
)

bot(
  {
    pattern: 'demote ?(.*)',
    desc: 'Remove admin role.',
    type: 'group',
    onlyGroup: true,
  },
  async (message, match) => {
    const participants = await message.groupMetadata(message.jid)
    const isImAdmin = await isAdmin(participants, message.client.user.jid)
    if (!isImAdmin) return await message.send(`_I'm not admin._`)
    const user = message.mention[0] || message.reply_message.jid
    if (!user) return await message.send(`_Give me a user._`)
    const isUserAdmin = await isAdmin(participants, user)
    if (!isUserAdmin) return await message.send(`_User is not an admin._`)
    return await message.Demote(user)
  }
)

bot(
  {
    pattern: 'invite ?(.*)',
    desc: 'Get Group invite',
    type: 'group',
    onlyGroup: true,
  },
  async (message, match) => {
    const participants = await message.groupMetadata(message.jid)
    const isImAdmin = await isAdmin(participants, message.client.user.jid)
    if (!isImAdmin) return await message.send(`_I'm not admin._`)
    return await message.send(await message.inviteCode(message.jid))
  }
)

bot(
  {
    pattern: 'mute ?(.*)',
    desc: 'Makes Groups Admins Only.',
    type: 'group',
    onlyGroup: true,
  },
  async (message, match) => {
    const participants = await message.groupMetadata(message.jid)
    const isImAdmin = await isAdmin(participants, message.client.user.jid)
    if (!isImAdmin) return await message.send(`_I'm not admin._`)
    if (!match || isNaN(match)) return await message.GroupSettingsChange(message.jid, true)
    await message.GroupSettingsChange(message.jid, true)
    await message.send(`_Muted for ${match} min._`)
    await sleep(1000 * 60 * match)
    return await message.GroupSettingsChange(message.jid, false)
  }
)

bot(
  {
    pattern: 'unmute ?(.*)',
    desc: 'Makes Group All participants can send Message.',
    type: 'group',
    onlyGroup: true,
  },
  async (message, match) => {
    const participants = await message.groupMetadata(message.jid)
    const isImAdmin = await isAdmin(participants, message.client.user.jid)
    if (!isImAdmin) return await message.send(`_I'm not admin._`)
    return await message.GroupSettingsChange(message.jid, false)
  }
)

bot(
  {
    pattern: 'join ?(.*)',
    type: 'group',
    desc: 'Join invite link.',
  },
  async (message, match) => {
    match = match || message.reply_message.text
    if (!match) return await message.send(`_Give me a Group invite link._`)
    const wa = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/
    const [_, code] = match.match(wa) || []
    if (!code) return await message.send(`_Give me a Group invite link._`)
    const res = await message.infoInvite(code)
    if (res.size > 1024) return await message.send('*Group full!*')
    const join = await message.acceptInvite(code)
    if (!join) return await message.send(`_Join Request Sent_`)
    return await message.send(`_Joined_`)
  }
)

bot(
  {
    pattern: 'revoke',
    onlyGroup: true,
    type: 'group',
    desc: 'Revoke Group invite link.',
  },
  async (message, match) => {
    const participants = await message.groupMetadata(message.jid)
    const im = await isAdmin(participants, message.client.user.jid)
    if (!im) return await message.send(`_I'm not admin._`)
    await message.revokeInvite(message.jid)
  }
)

bot(
  {
    pattern: 'ginfo ?(.*)',
    type: 'group',
    desc: 'Shows group invite info',
  },
  async (message, match) => {
    match = match || message.reply_message.text
    if (!match) return await message.send('*Example : info group_invte_link*')
    const linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
    const [_, code] = match.match(linkRegex) || []
    if (!code) return await message.send('_Invalid invite link_')
    const res = await message.infoInvite(code)
    const caption = `*Name :* ${res.subject}
*Jid :* ${res.id}@g.us
*Owner :* ${jidToNum(res.creator)}
*Members :* ${res.size}
*Created :* ${formatTime(res.creation)}
*Desc :* ${res.desc}`
    if (res.url) return await message.sendFromUrl(res.url, { caption })
    return await message.send(caption)
  }
)

bot(
  {
    pattern: 'common ?(.*)',
    onlyGroup: true,
    type: 'group',
    desc: 'Show or kick common memebers in two groups.',
  },
  async (message, match) => {
    const example = `*Example*\ncommon jid\ncommon jid kick\ncommon jid1 jid2\ncommon jid1,jid2 kick\ncommon jid1 jid2 jid3...jid999\n\ncommon jid1 jid2 jid3 any\nkick - to remove only group u command\nkickall - to remove from all jids\nany - to include two or more common group members\nskip - to avoid removing from all, example skip to avoid from one group or skip jid1,jid2,jid3 to skip from.`
    const kick = match.includes('kick')
    const kickFromAll = match.includes('kickall')
    const isAny = match.includes('any')
    const jids = parsedJid(match)
    const toSkip = parsedJid(match.split('skip')[1] || '')
    const anySkip = match.includes('skip') && !toSkip.length
    if (!match || (jids.length == 1 && jids.includes(message.jid)))
      return await message.send(example)
    if (!jids.includes(message.jid) && jids.length < 2) jids.push(message.jid)
    const metadata = {}
    for (const jid of jids) {
      metadata[jid] = (await message.groupMetadata(jid))
        .filter((user) => !user.admin)
        .map(({ id }) => id)
    }
    if (Object.keys(metadata).length < 2) return await message.send(example)
    const common = getCommon(Object.values(metadata), isAny)
    if (!common.length) return await message.send(`_Zero common members_`)
    if (kickFromAll) {
      let gids = jids
      if (!anySkip) gids = jids.filter((id) => !toSkip.includes(id))
      const skip = {}
      for (const jid of gids) {
        const participants = await message.groupMetadata(jid)
        const kick = participants.map(({ id }) => id).filter((id) => common.includes(id))
        const im = await isAdmin(participants, message.client.user.jid)
        if (im) {
          if (anySkip) {
            for (const id of kick) {
              if (skip[id]) await message.Kick(id, jid)
              skip[id] = id
            }
          } else await message.Kick(kick, jid)
        }
      }
      return
    }
    if (kick) {
      const participants = await message.groupMetadata(message.jid)
      const im = await isAdmin(participants, message.client.user.jid)
      if (!im) return await message.send(`_I'm not admin._`)
      return await message.Kick(common)
    }
    let msg = ''
    common.forEach((e, i) => (msg += `${i + 1}${addSpace(i + 1, common.length)} @${jidToNum(e)}\n`))
    await message.send(msg.trim(), { contextInfo: { mentionedJid: common } })
  }
)
