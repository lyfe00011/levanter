const { bot, lang } = require('../lib/')

bot(
  {
    pattern: 'fullpp ?(.*)',
    desc: lang.plugins.fullpp.desc,
    type: 'user',
  },
  async (message) => {
    if (!message.reply_message || !message.reply_message.image) {
      return await message.send(lang.plugins.fullpp.usage)
    }
    await message.updateProfilePicture(
      await message.reply_message.downloadMediaMessage(),
      message.client.user.jid
    )
    return await message.send(lang.plugins.fullpp.updated)
  }
)
