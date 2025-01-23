const {
  bot,
  parsedJid,
  validateTime,
  createStatusSchedule,
  getScheduleStatus,
  delScheduleStatus,
  deleteScheduleStatusTask,
} = require('../lib/')

bot(
  {
    pattern: 'setstatus ?(.*)',
    desc: 'set whatsapp status',
    type: 'whatsapp',
  },
  async (message, match) => {
    const jids = parsedJid(match)
    if (jids.length === 0 && match !== 'contact') {
      return await message.send(
        'Example :\n- setstatus jid,jid,jid,...\n- setstatus contact (set status for imported contacts)'
      )
    }
    if (
      !message.reply_message ||
      (!message.reply_message.image && !message.reply_message.video && !message.reply_message.txt)
    ) {
      return await message.send('> reply to a message')
    }
    const statusCount = await message.setStatus(message, jids, match)
    await message.send(`Status sent to ${statusCount} contacts.`)
  }
)

bot(
  {
    pattern: 'scstatus ?(.*)',
    desc: 'schedule whatsapp status',
    type: 'whatsapp',
  },
  async (message, match) => {
    if (match === 'list') {
      const statuses = await getScheduleStatus(message.id)
      let msg = 'scheduled status list'
      statuses.forEach((status) => {
        msg += `\n\ntime : ${status.time}\njids: ${
          status.jids.length > 1 ? status.jids : 'contact'
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
      return await message.send(
        'Example :\n- scstatus jid,jid,jid,...|min-hour-day-month (day and month optional)\n- scstatus contact| min-hour-day-month (set status for contacts imported)\n- scstatus contact| 0-22 (set status for contacts at 10pm)\n- scstatus delete all | 0-22\n-scstatus list'
      )
    }
    if (
      !message.reply_message ||
      (!message.reply_message.image && !message.reply_message.video && !message.reply_message.txt)
    ) {
      return await message.send('> reply to a message')
    }
    const at = await createStatusSchedule(isTimeValid, message, jids, message.id)
    return await message.send(`_successfully scheduled to send at ${at}_`)
  }
)
