const {
  isAdmin,
  sleep,
  bot,
  addSpace,
  jidToNum,
  formatTime,
  parsedJid,
  getCommon,
  lang,
} = require('../lib/')

bot(
  {
    pattern: 'kick ?(.*)',
    desc: lang.plugins.kick.desc,
    type: 'group',
    onlyGroup: true,
  },
  async (message, match) => {
    const participants = await message.groupMetadata(message.jid)
    const isImAdmin = await isAdmin(participants, message.client.user.jid)
    if (!isImAdmin) return await message.send(lang.plugins.kick.not_admin)
    let user = message.mention[0] || message.reply_message.jid
    if (!user && match != 'all') return await message.send(lang.plugins.kick.mention_user)
    const isUserAdmin = match != 'all' && (await isAdmin(participants, user))
    if (isUserAdmin) return await message.send(lang.plugins.kick.admin)
    if (match == 'all') {
      user = participants.filter((member) => !member.admin == true).map(({ id }) => id)
      await message.send(lang.plugins.kick.kicking_all.format(user.length))
      await sleep(10 * 1000)
    }
    await message.Kick(user)
    if (message.reply_message) {
      await sleep(3000)
      await message.send(message.reply_message.key, {}, 'delete')
    }
  }
)

bot(
  {
    pattern: 'add ?(.*)',
    desc: lang.plugins.add.desc,
    type: 'group',
    onlyGroup: true,
  },
  async (message, match) => {
    await message.send(lang.plugins.add.warning)
    const participants = await message.groupMetadata(message.jid)
    const isImAdmin = await isAdmin(participants, message.client.user.jid)
    if (!isImAdmin) return await message.send(lang.plugins.add.not_admin)
    match = match || message.reply_message.jid
    if (!match) return await message.send(lang.plugins.add.invalid_number)
    await sleep(3000)
    match = jidToNum(match)
    const res = await message.Add(match)
    if (res == '403') return await message.send(lang.plugins.add.failed)
    else if (res && res != '200') return await message.send(res, { quoted: message.data })
  }
)

bot(
  {
    pattern: 'promote ?(.*)',
    desc: lang.plugins.promote.desc,
    type: 'group',
    onlyGroup: true,
  },
  async (message) => {
    const participants = await message.groupMetadata(message.jid)
    const isImAdmin = await isAdmin(participants, message.client.user.jid)
    if (!isImAdmin) return await message.send(lang.plugins.promote.not_admin)
    const user = message.mention[0] || message.reply_message.jid
    if (!user) return await message.send(lang.plugins.promote.mention_user)
    const isUserAdmin = await isAdmin(participants, user)
    if (isUserAdmin) return await message.send(lang.plugins.promote.already_admin)
    return await message.Promote(user)
  }
)

bot(
  {
    pattern: 'demote ?(.*)',
    desc: lang.plugins.demote.desc,
    type: 'group',
    onlyGroup: true,
  },
  async (message) => {
    const participants = await message.groupMetadata(message.jid)
    const isImAdmin = await isAdmin(participants, message.client.user.jid)
    if (!isImAdmin) return await message.send(lang.plugins.demote.not_admin)
    const user = message.mention[0] || message.reply_message.jid
    if (!user) return await message.send(lang.plugins.demote.mention_user)
    const isUserAdmin = await isAdmin(participants, user)
    if (!isUserAdmin) return await message.send(lang.plugins.demote.not_admin_user)
    return await message.Demote(user)
  }
)

bot(
  {
    pattern: 'invite ?(.*)',
    desc: lang.plugins.invite.desc,
    type: 'group',
    onlyGroup: true,
  },
  async (message) => {
    const participants = await message.groupMetadata(message.jid)
    const isImAdmin = await isAdmin(participants, message.client.user.jid)
    if (!isImAdmin) return await message.send(lang.plugins.invite.not_admin)
    return await message.send(
      lang.plugins.invite.success.format(await message.inviteCode(message.jid))
    )
  }
)

bot(
  {
    pattern: 'mute ?(.*)',
    desc: lang.plugins.mute.desc,
    type: 'group',
    onlyGroup: true,
  },
  async (message, match) => {
    const participants = await message.groupMetadata(message.jid)
    const isImAdmin = await isAdmin(participants, message.client.user.jid)
    if (!isImAdmin) return await message.send(lang.plugins.mute.not_admin)
    if (!match || isNaN(match)) return await message.GroupSettingsChange(message.jid, true)
    await message.GroupSettingsChange(message.jid, true)
    await message.send(lang.plugins.mute.mute.format(match))
    await sleep(1000 * 60 * match)
    return await message.GroupSettingsChange(message.jid, false)
  }
)

bot(
  {
    pattern: 'unmute ?(.*)',
    desc: lang.plugins.unmute.desc,
    type: 'group',
    onlyGroup: true,
  },
  async (message) => {
    const participants = await message.groupMetadata(message.jid)
    const isImAdmin = await isAdmin(participants, message.client.user.jid)
    if (!isImAdmin) return await message.send(lang.plugins.unmute.not_admin)
    return await message.GroupSettingsChange(message.jid, false)
  }
)

bot(
  {
    pattern: 'join ?(.*)',
    type: 'group',
    desc: lang.plugins.join.desc,
  },
  async (message, match) => {
    match = match || message.reply_message.text
    if (!match) return await message.send(lang.plugins.join.invalid_link)
    const wa = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/
    const [_, code] = match.match(wa) || []
    if (!code) return await message.send(lang.plugins.join.invalid_link)
    const res = await message.infoInvite(code)
    if (res.size > 1024) return await message.send(lang.plugins.join.group_full)
    const join = await message.acceptInvite(code)
    if (!join) return await message.send(lang.plugins.join.request_sent)
    return await message.send(lang.plugins.join.success)
  }
)

bot(
  {
    pattern: 'revoke',
    onlyGroup: true,
    type: 'group',
    desc: lang.plugins.revoke.desc,
  },
  async (message, match) => {
    const participants = await message.groupMetadata(message.jid)
    const im = await isAdmin(participants, message.client.user.jid)
    if (!im) return await message.send(lang.plugins.revoke.not_admin)
    await message.revokeInvite(message.jid)
  }
)

bot(
  {
    pattern: 'ginfo ?(.*)',
    type: 'group',
    desc: lang.plugins.group_info.desc,
  },
  async (message, match) => {
    match = match || message.reply_message.text
    if (!match) return await message.send('*Example : info group_invte_link*')
    const linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
    const [_, code] = match.match(linkRegex) || []
    if (!code) return await message.send(lang.plugins.group_info.invalid_link)
    const res = await message.infoInvite(code)
    const caption = lang.plugins.group_info.details.format(
      res.subject,
      res.id,
      jidToNum(res.creator),
      res.size,
      res.creation,
      res.desc
    )
    if (res.url) return await message.sendFromUrl(res.url, { caption })
    return await message.send(caption)
  }
)

bot(
  {
    pattern: 'common ?(.*)',
    onlyGroup: true,
    type: 'group',
    desc: lang.plugins.common_members.desc,
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
    if (!common.length) return await message.send(lang.plugins.common_members.found)
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
      if (!im) return await message.send(lang.plugins.kick.not_admin)
      return await message.Kick(common)
    }
    let msg = ''
    common.forEach((e, i) => (msg += `${i + 1}${addSpace(i + 1, common.length)} @${jidToNum(e)}\n`))
    await message.send(msg.trim(), { contextInfo: { mentionedJid: common } })
  }
)
