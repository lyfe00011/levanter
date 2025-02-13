const {
  bot,
  parsedJid,
  validateTime,
  createStatusSchedule,
  getScheduleStatus,
  delScheduleStatus,
  deleteScheduleStatusTask,
  lang,
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
