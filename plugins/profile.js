const { bot, getName, formatTime, jidToNum, parsedJid, isUser, isGroup, lang } = require('../lib/')

bot(
  {
    pattern: 'jid',
    desc: lang.plugins.jid.desc,
    type: 'user',
  },
  async (message) => {
    return await message.send(message.mention[0] || message.reply_message.jid || message.jid)
  }
)

bot(
  {
    pattern: 'left',
    decs: lang.plugins.left.desc,
    type: 'user',
    onlyGroup: true,
  },
  async (message, match) => {
    if (match) await message.send(match)
    return await message.leftFromGroup(message.jid)
  }
)

bot(
  {
    pattern: 'block',
    desc: lang.plugins.block.desc,
    type: 'user',
  },
  async (message) => {
    const id = message.mention[0] || message.reply_message.jid || (!message.isGroup && message.jid)
    if (!id) return await message.send(lang.plugins.block.usage)
    await message.send(lang.plugins.block.status)
    await message.Block(id)
  }
)

bot(
  {
    pattern: 'unblock',
    desc: lang.plugins.unblock.desc,
    type: 'user',
  },
  async (message) => {
    const id = message.mention[0] || message.reply_message.jid || (!message.isGroup && message.jid)
    if (!id) return await message.send(lang.plugins.unblock.usage)
    await message.Unblock(id)
    await message.send(lang.plugins.unblock.status)
  }
)

bot(
  {
    pattern: 'pp',
    desc: lang.plugins.pp.desc,
    type: 'user',
  },
  async (message) => {
    if (!message.reply_message || !message.reply_message.image)
      return await message.send(lang.plugins.pp.usage)
    await message.updateProfilePicture(await message.reply_message.downloadMediaMessage())
    return await message.send(lang.plugins.fullpp.updated)
  }
)

bot(
  {
    pattern: 'whois ?(.*)',
    desc: lang.plugins.whois.desc,
    type: 'misc',
  },
  async (message, match) => {
    match = parsedJid(match)[0]
    const gid = (isGroup(match) && match) || message.jid
    const id = (isUser(match) && match) || message.mention[0] || message.reply_message.jid
    let pp = ''
    try {
      pp = await message.profilePictureUrl(id || gid)
    } catch (error) {
      // pp = 'https://cdn.wallpapersafari.com/0/83/zKyWb6.jpeg'
    }
    let caption = ''
    if (id) {
      caption = lang.plugins.whois.number.format(jidToNum(id))
      try {
        const [res] = await message.fetchStatus(id)
        if (res.status) {
          caption += `\n${lang.plugins.whois.name.format(
            await getName(gid, id, message.id)
          )}\n${lang.plugins.whois.about.format(res.status)}\n${lang.plugins.whois.setAt.format(
            res.date
          )}`
        }
      } catch (error) {}
    } else {
      const { subject, size, creation, desc, owner } = await message.groupMetadata(gid, !!gid)
      caption = `${lang.plugins.whois.name.format(subject)}\n${lang.plugins.whois.owner.format(
        `${owner ? `+${jidToNum(owner)}` : ''}`
      )}\n${lang.plugins.whois.members.format(size)}\n${lang.plugins.whois.created.format(
        formatTime(creation)
      )}\n${lang.plugins.whois.description.format(desc)}`
    }
    if (!pp) return await message.send(caption, { quoted: message.data })
    return await message.sendFromUrl(pp, { caption, quoted: message.data })
  }
)

bot(
  {
    pattern: 'gjid',
    desc: lang.plugins.gjid.desc,
    type: 'user',
  },
  async (message) => {
    const gids = await message.getGids()
    let msg = ''
    let i = 1
    for (const gid in gids) {
      const name = gids[gid].subject
      msg += `*${i}.* *${name} :* ${gid}\n\n`
      i++
    }
    await message.send(msg.trim())
  }
)
