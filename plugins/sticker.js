const { sticker, webpToMp4, addExif, bot, addAudioMetaData, circleSticker } = require('../lib/')

bot(
  {
    pattern: 'sticker',
    desc: 'image/video to sticker',
    type: 'sticker',
  },
  async (message, match) => {
    if (!message.reply_message || (!message.reply_message.video && !message.reply_message.image))
      return await message.send('*Reply to image/video*')
    return await message.send(
      await sticker(
        'str',
        await message.reply_message.downloadAndSaveMediaMessage('sticker'),
        message.reply_message.image
          ? 1
          : //: message.reply_message.seconds < 10 ?
            2,
        //: 3
        message.id
      ),
      { isAnimated: !!message.reply_message.video, quoted: message.quoted },
      'sticker'
    )
  }
)

bot(
  {
    pattern: 'circle',
    desc: 'image to circle sticker',
    type: 'sticker',
  },
  async (message, match) => {
    if (!message.reply_message || !message.reply_message.image)
      return await message.send('*Reply to a image*')
    return await message.send(
      await circleSticker(
        await message.reply_message.downloadAndSaveMediaMessage('circleSticker'),
        message.reply_message.video,
        message.id
      ),
      { isAnimated: false, quoted: message.quoted },
      'sticker'
    )
  }
)

bot(
  {
    pattern: 'take ?(.*)',
    desc: 'change sticker pack',
    type: 'sticker',
  },
  async (message, match) => {
    if (!message.reply_message || (!message.reply_message.sticker && !message.reply_message.audio))
      return await message.send('*Reply to sticker/audio*')
    if (message.reply_message.sticker)
      return await message.send(
        await addExif(await message.reply_message.downloadMediaMessage('mp4'), match, message.id),
        { quoted: message.quoted },
        'sticker'
      )
    if (!match)
      return await message.send(`*Give me title,artists,url*\n*aritists or url is optional*`)
    const [title, artists, url] = match.split(',')
    return await message.send(
      await addAudioMetaData(
        await message.reply_message.downloadMediaMessage(),
        title,
        artists,
        '',
        url
      ),
      { quoted: message.quoted, mimetype: 'audio/mpeg' },
      'audio'
    )
  }
)

bot(
  {
    pattern: 'mp4',
    desc: 'animated sticker to video',
    type: 'sticker',
  },
  async (message, match) => {
    if (!message.reply_message.sticker || !message.reply_message || !message.reply_message.animated)
      return await message.send('*Reply to animated sticker*')
    return await message.sendFromUrl(
      await webpToMp4(await message.reply_message.downloadAndSaveMediaMessage('sticker'))
    )
  }
)
