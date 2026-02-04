const {
  bot,
  parsedJid,
  validateTime,
  createSchedule,
  delScheduleMessage,
  deleteScheduleTask,
  getScheduleMessage,
  parseSchedule,
  nlpSchedule,
  sleep,
  isGroup,
  jidToNum,
  lang,
} = require('../lib/')

bot(
  {
    pattern: 'setschedule ?(.*)',
    desc: lang.plugins.setschedule.desc,
    type: 'schedule',
  },
  async (message, match) => {
    if (!match && !message.reply_message) {
      return await message.send(lang.plugins.setschedule.usage)
    }

    if (!message.reply_message) {
      return await message.send(lang.plugins.setschedule.no_reply)
    }

    let schedule = parseSchedule(match)

    if (!schedule.jids.length || !validateTime(schedule.time)) {
      const nlp = await nlpSchedule(match, message.id)
      if (nlp && nlp.time && validateTime(nlp.time)) {
        schedule = nlp
      }
    }

    if (!schedule.jids.length) {
      schedule.jids = [message.jid]
    }

    const isTimeValid = validateTime(schedule.time)
    if (!schedule.jids.length || !isTimeValid) {
      return await message.send(lang.plugins.setschedule.usage)
    }

    for (let index = 0; index < schedule.jids.length; index++) {
      const jid = schedule.jids[index]
      const time = validateTime(schedule.time, index + 1)
      const at = await createSchedule(jid, time, message, true, schedule.once, message.id)
      await message.send(
        lang.plugins.setschedule.scheduled.format(at, isGroup(jid) ? jid : jidToNum(jid)),
        {
          contextInfo: { mentionedJid: [jid] },
        }
      )
      if (schedule.jids.length > 1) await sleep(3000)
    }
  }
)

bot(
  {
    pattern: 'getschedule ?(.*)',
    desc: lang.plugins.getschedule.desc,
    type: 'schedule',
  },
  async (message, match) => {
    const [jid] = parsedJid(match)
    const schedules = await getScheduleMessage(jid, message.id)
    if (schedules.length < 1) return await message.send(lang.plugins.getschedule.not_found)
    let msg = ''
    for (const schedule of schedules) {
      msg += `Jid : ${schedule.jid}\n${lang.plugins.getschedule.time.format(schedule.time)}\n\n`
    }
    return await message.send(msg.trim())
  }
)

bot(
  {
    pattern: 'delschedule ?(.*)',
    desc: lang.plugins.delschedule.desc,
    type: 'schedule',
  },
  async (message, match) => {
    if (!match) return await message.send(lang.plugins.delschedule.usage)
    const [jid, time] = match.split(',')
    let [isJid] = parsedJid(jid)
    const isTimeValid = validateTime(time)
    if (!isJid && match !== 'all') return await message.send(lang.plugins.delschedule.usage)
    if (!isJid) isJid = match
    const isDeleted = await delScheduleMessage(isJid, isTimeValid, message.id)
    if (!isDeleted) return await message.send(lang.plugins.delschedule.not_found)
    deleteScheduleTask(isJid, isTimeValid, message.id)
    return await message.send(lang.plugins.delschedule.deleted)
  }
)
