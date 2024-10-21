const {
  y2mate,
  bot,
  getBuffer,
  // genButtonMessage,
  addAudioMetaData,
  yts,
  generateList,
} = require('../lib/')
const ytIdRegex =
  /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed|shorts\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/

bot(
  {
    pattern: 'ytv ?(.*)',
    desc: 'Download youtube video',
    type: 'download',
  },
  async (message, match) => {
    match = match || message.reply_message.text
    if (!match) return await message.send('_Example : ytv url_')
    if (match.startsWith('y2mate;')) {
      const [_, q, id] = match.split(';')
      const result = await y2mate.dl(id, 'video', q)
      return await message.sendFromUrl(result, { quoted: message.data })
    }
    if (!ytIdRegex.test(match))
      return await message.send('*Give me a yt link!*', {
        quoted: message.data,
      })
    const vid = ytIdRegex.exec(match)
    const { title, video, thumbnail, time } = await y2mate.get(vid[1])
    const buttons = []
    for (const q in video)
      buttons.push({
        text: `${q}(${video[q].fileSizeH || video[q].size})`,
        id: `ytv y2mate;${q};${vid[1]}`,
      })
    if (!buttons.length)
      return await message.send('*Not found*', {
        quoted: message.quoted,
      })
    const list = generateList(
      buttons,
      title + `(${time})\n`,
      message.jid,
      message.participant,
      message.id
    )
    if (list.type === 'text')
      return await message.sendFromUrl(thumbnail, {
        caption: '```' + list.message + '```',
        buffer: false,
      })
    return await message.send(list.message, {}, list.type)

    // return await message.send(
    // 	await genButtonMessage(
    // 		buttons,
    // 		title,
    // 		time,
    // 		{ image: thumbnail },
    // 		message
    // 	),
    // 	{},
    // 	'button'
    // )
  }
)

bot(
  {
    pattern: 'yta ?(.*)',
    desc: 'Download youtube audio',
    type: 'download',
  },
  async (message, match) => {
    match = match || message.reply_message.text
    if (!match) return await message.send('_Example : yta darari/yt url_')
    const vid = ytIdRegex.exec(match)
    if (vid) match = vid[1]
    const [video] = await yts(match, !!vid)
    const { title, thumbnail, id } = video
    const audio = await y2mate.get(id)
    const result = await y2mate.dl(id, 'audio')
    if (!result) return await message.send(`_not found._`, { quoted: message.data })
    const { buffer } = await getBuffer(result)
    if (!buffer) return await message.send(result, { quoted: message.data })
    return await message.send(
      await addAudioMetaData(buffer, title, '', '', thumbnail.url),
      { quoted: message.data, mimetype: 'audio/mpeg' },
      'audio'
    )
  }
)
