const { bot } = require('../lib/')

bot(
  {
    pattern: 'fullpp ?(.*)',
    desc: 'set full size profile picture',
    type: 'user',
  },
  async (message, match) => {
    if (!message.reply_message || !message.reply_message.image)
      return await message.send('*Reply to a image.*')
    await message.updateProfilePicture(
      await message.reply_message.downloadMediaMessage(),
      message.client.user.jid
    )
    return await message.send('_Profile Picture Updated_')
  }
)
