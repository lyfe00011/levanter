const { bot, getUrl } = require('../lib/')

bot(
  {
    pattern: 'url ?(.*)',
    desc: 'Image/Video to url',
    type: 'misc',
  },
  async (message, match) => {
    if (!message.reply_message || (!message.reply_message.image && !message.reply_message.video))
      return await message.send('*Reply to a image | video*\nurl imgur - for imgur url')
    await message.send(
      await getUrl(await message.reply_message.downloadAndSaveMediaMessage('url'), match)
    )
  }
)
