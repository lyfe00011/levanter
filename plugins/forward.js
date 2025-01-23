const { forwardOrBroadCast, bot, parsedJid } = require('../lib/')

bot(
  {
    pattern: 'forward ?(.*)',
    desc: 'forward replied msg',
    type: 'misc',
  },
  async (message, match) => {
    if (!message.reply_message) return await message.send('*Reply to a message*')
    for (const jid of parsedJid(match)) await forwardOrBroadCast(jid, message)
  }
)

bot(
  {
    pattern: 'save ?(.*)',
    desc: 'forward replied msg to u',
    type: 'misc',
  },
  async (message, match) => {
    if (!message.reply_message) return await message.send('*Reply to a message*')
    await forwardOrBroadCast(message.participant, message)
  }
)
