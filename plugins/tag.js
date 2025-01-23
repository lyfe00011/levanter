const { bot, addSpace, forwardOrBroadCast } = require('../lib/')
bot(
  {
    pattern: 'tag ?(.*)',
    onlyGroup: true,
    desc: 'tag members or msg',
    type: 'group',
  },
  async (message, match) => {
    const participants = await message.groupMetadata(message.jid)
    const mentionedJid = participants.map(({ id }) => id)
    if (match == 'all') {
      let mesaj = ''
      mentionedJid.forEach(
        (e, i) => (mesaj += `${i + 1}${addSpace(i + 1, participants.length)} @${e.split('@')[0]}\n`)
      )
      return await message.send('```' + mesaj.trim() + '```', {
        contextInfo: { mentionedJid },
      })
    } else if (match == 'admin' || match == 'admins') {
      let mesaj = ''
      let mentionedJid = participants.filter((user) => !!user.admin == true).map(({ id }) => id)
      mentionedJid.forEach((e) => (mesaj += `@${e.split('@')[0]}\n`))
      return await message.send(mesaj.trim(), {
        contextInfo: { mentionedJid },
      })
    } else if (match == 'notadmin' || match == 'not admins') {
      let mesaj = ''
      const mentionedJid = participants.filter((user) => !!user.admin != true).map(({ id }) => id)
      mentionedJid.forEach((e) => (mesaj += `@${e.split('@')[0]}\n`))
      return await message.send(mesaj.trim(), {
        contextInfo: { mentionedJid },
      })
    }
    if (match || message.reply_message.txt)
      return await message.send(match || message.reply_message.text, {
        contextInfo: { mentionedJid },
      })
    if (!message.reply_message)
      return await message.send(
        '*Example :*\ntag all\ntag admin\ntag notadmin\ntag text\nReply to a message'
      )
    forwardOrBroadCast(message.jid, message, { contextInfo: { mentionedJid } })
  }
)
