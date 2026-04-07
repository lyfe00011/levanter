const { bot, extractExif, lang } = require('../lib/')

bot(
  {
    pattern: 'exif',
    desc: lang.plugins.exif.desc,
    type: 'sticker',
  },
  async (message) => {
    if (!message.reply_message?.sticker) {
      return await message.send(lang.plugins.exif.reply_to_sticker)
    }

    const media = await message.reply_message.downloadMediaMessage()

    if (!media) {
      return await message.send(lang.plugins.exif.failed)
    }

    const exifData = await extractExif(media)

    if (!exifData) {
      return await message.send(lang.plugins.exif.not_found)
    }

    const { packId = 'N/A', packname = 'N/A', author = 'N/A', emojis = 'N/A' } = exifData

    return await message.send(
      `${lang.plugins.exif.pack_id}${packId}\n` +
        `${lang.plugins.exif.pack_name}${packname}\n` +
        `${lang.plugins.exif.author}${author}\n` +
        `${lang.plugins.exif.emojis}${emojis}`,
      { quoted: message.quoted }
    )
  }
)
