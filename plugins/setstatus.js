const {
  bot,
  parsedJid,
  validateTime,
  createStatusSchedule,
  getScheduleStatus,
  delScheduleStatus,
  deleteScheduleStatusTask,
  lang,
  isGroup,
  isAdmin
} = require('../lib/')

bot(
  {
    pattern: 'setstatus ?(.*)',
    desc: lang.plugins.setstatus.desc,
    type: 'whatsapp',
  },
  async (message, match) => {
    const jids = parsedJid(match)
    if (jids.length === 0 && match !== 'contact') {
      return await message.send(lang.plugins.setstatus.usage)
    }
    if (
      !message.reply_message ||
      (!message.reply_message.image && !message.reply_message.video && !message.reply_message.txt)
    ) {
      return await message.send(lang.plugins.setstatus.reply_required)
    }
    const statusCount = await message.setStatus(message, jids, match)
    await message.send(lang.plugins.setstatus.sent.format(statusCount))
  }
)

bot(
  {
    pattern: 'scstatus ?(.*)',
    desc: lang.plugins.scstatus.desc,
    type: 'whatsapp',
  },
  async (message, match) => {
    if (match === 'list') {
      const statuses = await getScheduleStatus(message.id)
      let msg = lang.plugins.scstatus.list
      statuses.forEach((status) => {
        msg += `\n\ntime : ${status.time}\njids: ${status.jids.length > 1 ? status.jids : 'contact'
          }`
      })
      return await message.send(msg)
    }
    if (match.startsWith('delete')) {
      match = match.replace('delete', '').trim()
      await delScheduleStatus(match, message.id)
      await deleteScheduleStatusTask(match, message.id)
      return await message.send('deleted!')
    }
    const [_, time] = match.split('|')
    const isTimeValid = validateTime(time)
    const jids = parsedJid(match)
    if ((jids.length === 0 && match.startsWith('contact')) || !isTimeValid) {
      return await message.send(lang.plugins.scstatus.usage)
    }
    if (
      !message.reply_message ||
      (!message.reply_message.image && !message.reply_message.video && !message.reply_message.txt)
    ) {
      return await message.send(lang.plugins.scstatus.reply_required)
    }
    const at = await createStatusSchedule(isTimeValid, message, jids, message.id)
    return await message.send(lang.plugins.scstatus.scheduled.format(at))
  }
)

bot(
  {
    pattern: 'gstatus ?(.*)',
    desc: 'Update group status (reply to image, video, or text)',
    type: 'group'
  },
  async (message, match) => {
    if (
      !message.reply_message ||
      (!message.reply_message.image && !message.reply_message.video && !message.reply_message.txt)
    ) {
      return await message.send('Reply to an image, video, or text with `.gstatus <jid>`')
    }
    const groupJid = parsedJid(match)
    if (groupJid.length === 0) {
      const participants = await message.groupMetadata(message.jid)
      const isImAdmin = await isAdmin(participants, message.participant)
      if (!isImAdmin) {
        return await message.send('You are not admin')
      }
      await message.groupStatus(message, message.jid)
      return await message.send('Group status updated.')
    } else {
      let successCount = 0
      for (const jid of groupJid) {
        if (!isGroup(jid)) continue
        try {
          const participants = await message.groupMetadata(jid)
          const isImAdmin = await isAdmin(participants, message.participant)
          if (!isImAdmin) {
            await message.send(`You are not admin at @${jid}`, {
              contextInfo: { mentionedJid: [message.participant] },
            })
            continue
          }
          await message.groupStatus(message, jid)
          successCount++
        } catch (e) {
          await message.send(`Failed to update status at @${jid}`, {
            contextInfo: { mentionedJid: [jid] },
          })
        }
      }
      if (successCount > 0) {
        return await message.send(`Group status updated for ${successCount} group(s).`)
      }
    }
  }
)
