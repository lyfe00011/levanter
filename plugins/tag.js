const { bot, addSpace, forwardOrBroadCast } = require('../lib/')
bot(
  {
    pattern: 'tag ?(.*)',
    onlyGroup: true,
    desc: 'tag members or msg (Admin only)',
    type: 'group',
  },
  async (message, match) => {
    // Get group metadata to check admin status
    const groupMetadata = await message.groupMetadata(message.jid)
    const participants = groupMetadata
    
    // Check if the sender is an admin
    const isAdmin = participants.find(
      (user) => user.id === message.participant && user.admin
    )
    
    // If sender is not an admin, return with error message
    if (!isAdmin) {
      return await message.send('❌ This command can only be used by group admins.')
    }

    // Continue with original functionality if user is admin
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
