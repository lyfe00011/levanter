const { bot, isAdmin, lang } = require('../lib')

bot(
  {
    pattern: 'dlt ?(.*)',
    desc: lang.plugins.dlt.desc,
    type: 'whatsapp',
  },
  async (message, match) => {
    if (!message.reply_message) return await message.send(lang.plugins.common.reply_to_message)
    const key = message.reply_message.key
    if (!key.fromMe && message.isGroup) {
      const participants = await message.groupMetadata(message.jid)
      const isImAdmin = await isAdmin(participants, message.client.user.jid)
      if (!isImAdmin) return await message.send(lang.plugins.common.not_admin)
    }
    return await message.send(key, {}, 'delete')
  }
)
