const { bot, parsedJid } = require('../lib/')

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
