const { bot, extractExif } = require('../lib/')

bot(
  {
    pattern: 'exif',
    desc: 'Extract Exif metadata from a sticker',
    type: 'sticker',
  },
  async (message) => {
    if (!message.reply_message?.sticker) {
      return await message.send('*Reply to a sticker.*')
    }

    const media = await message.reply_message.downloadMediaMessage()

    if (!media) {
      return await message.send('*Failed to download sticker.*')
    }

    const exifData = await extractExif(media)

    if (!exifData) {
      return await message.send('*No Exif metadata found in this sticker.*')
    }

    const { packId = 'N/A', packname = 'N/A', author = 'N/A', emojis = 'N/A' } = exifData

    return await message.send(
      `*Pack ID:* ${packId}\n` +
        `*Pack Name:* ${packname}\n` +
        `*Author:* ${author}\n` +
        `*Emojis:* ${emojis}`,
      { quoted: message.quoted }
    )
  }
)
