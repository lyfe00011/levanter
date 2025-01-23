const { tiktok, bot, isUrl } = require('../lib/index')

bot(
  {
    pattern: 'tiktok ?(.*)',
    desc: 'Download tiktok video',
    type: 'download',
  },
  async (message, match) => {
    match = isUrl(match || message.reply_message.text)
    if (!match) return await message.send('_Example : tiktok url_')
    const result = await tiktok(match)
    if (!result)
      return await message.send('*Not found*', {
        quoted: message.quoted,
      })
    return await message.sendFromUrl(result.url2 || result.url1)
  }
)
