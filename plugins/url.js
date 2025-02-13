const { bot, getUrl, lang } = require('../lib/')

bot(
  {
    pattern: 'url ?(.*)',
    fromMe: true,
    desc: lang.plugins.url.desc,
    type: 'misc',
  },
  async (message, match) => {
    if (!message.reply_message || (!message.reply_message.image && !message.reply_message.video))
      return await message.send(lang.plugins.url.usage)
    await message.send(
      await getUrl(await message.reply_message.downloadAndSaveMediaMessage('url'), match)
    )
  }
)
