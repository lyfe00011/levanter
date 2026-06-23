const { y2mate, bot, addAudioMetaData, yts, generateList, lang } = require('../lib/')
const ytIdRegex =
  /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed|shorts\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/

bot(
  {
    pattern: 'ytv ?(.*)',
    desc: lang.plugins.y2mate.ytv_desc,
    type: 'download',
  },
  async (message, match) => {
    match = match || message.reply_message.text
    if (!match) return await message.send(lang.plugins.y2mate.ytv_usage)

    if (match.startsWith('y2mate;')) {
      const [_, q, id] = match.split(';')
      const buffer = await y2mate.dl(id, 'video', q)
      if (!buffer) return await message.send(lang.plugins.y2mate.no_video, { quoted: message.data })
      return await message.send(buffer, { mimetype: 'video/mp4', quoted: message.data }, 'video')
    }

    if (!ytIdRegex.test(match)) {
      return await message.send(lang.plugins.y2mate.invalid_link, { quoted: message.data })
    }

    const vid = ytIdRegex.exec(match)
    const { title, video, thumbnail, time } = await y2mate.get(vid[1])
    const buttons = []

    for (const q in video) {
      buttons.push({
        text: `${q}`,
        id: `ytv y2mate;${q};${vid[1]}`,
      })
    }

    if (!buttons.length) {
      return await message.send(lang.plugins.y2mate.no_video, { quoted: message.quoted })
    }

    const list = generateList(
      buttons,
      `${title} (${time})\n`,
      message.jid,
      message.participant,
      message.id
    )

    if (list.type === 'text') {
      return await message.sendFromUrl(thumbnail, {
        caption: '```' + list.message + '```',
        buffer: false,
      })
    }

    return await message.send(list.message, {}, list.type)
  }
)

bot(
  {
    pattern: 'yta ?(.*)',
    desc: lang.plugins.y2mate.yta_desc,
    type: 'download',
  },
  async (message, match) => {
    match = match || message.reply_message.text
    if (!match) return await message.send(lang.plugins.y2mate.yta_usage)

    const vid = ytIdRegex.exec(match)
    let id, title, thumbUrl

    if (vid) {
      id = vid[1]
      const info = await y2mate.get(id)
      if (!info) return await message.send(lang.plugins.y2mate.no_audio, { quoted: message.data })
      title = info.title
      thumbUrl = info.thumbnail
    } else {
      const [video] = await yts(match, false, null, message.id)
      if (!video) return await message.send(lang.plugins.y2mate.no_audio, { quoted: message.data })
      id = video.id
      title = video.title
      thumbUrl = video.thumbnail?.url
    }

    const buffer = await y2mate.dl(id, 'audio')
    if (!buffer) return await message.send(lang.plugins.y2mate.no_audio, { quoted: message.data })

    return await message.send(
      await addAudioMetaData(buffer, title, '', '', thumbUrl),
      { quoted: message.data, mimetype: 'audio/mpeg' },
      'audio'
    )
  }
)
