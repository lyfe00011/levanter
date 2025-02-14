const { forwardOrBroadCast, bot, parsedJid, lang, sleep } = require('../lib/')

bot(
  {
    pattern: 'forward ?(.*)',
    desc: lang.plugins.forward.desc,
    type: 'misc',
  },
  async (message, match) => {
    if (!message.reply_message) return message.send(lang.plugins.common.reply_to_message)

    const jids = parsedJid(match)
    if (!jids.length) return message.send(lang.plugins.forward.example)

    for (const jid of jids) {
      await forwardOrBroadCast(jid, message)
      await sleep(1234)
    }
    return message.send(lang.plugins.forward.foward.format(jids.join(', ')))
  }
)

bot(
  {
    pattern: 'save ?(.*)',
    desc: lang.plugins.save.desc,
    type: 'misc',
  },
  async (message) => {
    if (!message.reply_message) return message.send(lang.plugins.common.reply_to_message)

    await forwardOrBroadCast(message.participant, message)
    // return message.send(lang.plugins.save.save)
  }
)
