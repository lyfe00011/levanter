const { bot, extractExif } = require('../lib/')

bot(
  {
    pattern: 'exif',
    desc: 'Extract Exif metadata from a sticker',
    type: 'sticker',
  },
  async (message) => {
    if (!message.reply_message || !message.reply_message.sticker) {
      return await message.send('_Plugin made by manji *USAGE:* Reply to a sticker._')
    }

    const media = await message.reply_message.downloadMediaMessage()
    const exifData = await extractExif(media)

    if (!exifData) {
      return await message.send('No Exif metadata found in this sticker.')
    }

    return await message.send(
      `*Pack ID:*\n${exifData.packId}\n\n` +
      `*Pack Name:*\n${exifData.packname}\n\n` +
      `*Author:*\n${exifData.author}\n\n` +
      `*Emojis:*\n${exifData.emojis}`,
      { quoted: message.quoted }
    )
  }
)
