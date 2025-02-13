const {
  sticker,
  webpToMp4,
  addExif,
  bot,
  addAudioMetaData,
  circleSticker,
  lang,
} = require('../lib/')

bot(
  {
    pattern: 'sticker',
    desc: lang.plugins.sticker.desc,
    type: 'sticker',
  },
  async (message) => {
    if (!message.reply_message || (!message.reply_message.video && !message.reply_message.image)) {
      return await message.send(lang.plugins.sticker.reply_required)
    }

    const mediaPath = await message.reply_message.downloadAndSaveMediaMessage('sticker')
    const type = message.reply_message.image ? 1 : 2
    const stickerData = await sticker('str', mediaPath, type, message.id)

    return await message.send(
      stickerData,
      { isAnimated: !!message.reply_message.video, quoted: message.quoted },
      'sticker'
    )
  }
)

bot(
  {
    pattern: 'circle',
    desc: lang.plugins.circle.desc,
    type: 'sticker',
  },
  async (message) => {
    if (!message.reply_message || !message.reply_message.image) {
      return await message.send(lang.plugins.circle.reply_required)
    }

    const mediaPath = await message.reply_message.downloadAndSaveMediaMessage('circleSticker')
    const circleData = await circleSticker(mediaPath, message.reply_message.video, message.id)

    return await message.send(circleData, { isAnimated: false, quoted: message.quoted }, 'sticker')
  }
)

bot(
  {
    pattern: 'take ?(.*)',
    desc: lang.plugins.take.desc,
    type: 'sticker',
  },
  async (message, match) => {
    if (
      !message.reply_message ||
      (!message.reply_message.sticker && !message.reply_message.audio)
    ) {
      return await message.send(lang.plugins.take.reply_required)
    }

    if (message.reply_message.sticker) {
      const media = await message.reply_message.downloadMediaMessage('mp4')
      return await message.send(
        await addExif(media, match, message.id),
        { quoted: message.quoted },
        'sticker'
      )
    }

    if (!match) {
      return await message.send(lang.plugins.take.usage)
    }

    const [title, artists, url] = match.split(',')
    const audioData = await addAudioMetaData(
      await message.reply_message.downloadMediaMessage(),
      title,
      artists,
      '',
      url
    )

    return await message.send(
      audioData,
      { quoted: message.quoted, mimetype: 'audio/mpeg' },
      'audio'
    )
  }
)

bot(
  {
    pattern: 'mp4',
    desc: lang.plugins.mp4.desc,
    type: 'sticker',
  },
  async (message) => {
    if (
      !message.reply_message ||
      !message.reply_message.sticker ||
      !message.reply_message.animated
    ) {
      return await message.send(lang.plugins.take.reply_required)
    }

    const mediaPath = await message.reply_message.downloadAndSaveMediaMessage('sticker')
    const videoUrl = await webpToMp4(mediaPath)

    return await message.sendFromUrl(videoUrl)
  }
)
