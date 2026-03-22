const { bot, yts, song, video, addAudioMetaData, generateList, lang, MUSIC_URL_REGEX, YT_URL_REGEX } = require('../lib/')

bot(
  {
    pattern: 'yts ?(.*)',
    desc: lang.plugins.yts.desc,
    type: 'search',
  },
  async (message, match) => {
    if (!match) return await message.send(lang.plugins.yts.usage)
    const vid = YT_URL_REGEX.exec(match)
    if (vid) {
      const result = await yts(vid[1], true, null, message.id)
      const { title, description, duration, view, published } = result[0]
      return await message.send(
        `*Title :* ${title}\n*Time :* ${duration}\n*Views :* ${view}\n*Publish :* ${published}\n*Desc :* ${description}`
      )
    }
    const result = await yts(match, false, null, message.id)
    const msg = result
      .map(
        ({ title, id, view, duration, published, author }) =>
          `• *${title.trim()}*\n${view ? `*Views :* ${view}\n` : ''}*Time :* ${duration}\n*Author :* ${author}\n${published ? `*Published :* ${published}\n` : ''}*Url :* ${id.startsWith('http') ? id : `https://www.youtube.com/watch?v=${id}`}\n\n`
      )
      .join('')

    return await message.send(msg.trim())
  }
)

bot(
  {
    pattern: 'song ?(.*)',
    desc: lang.plugins.song.desc,
    type: 'download',
  },
  async (message, match) => {
    match = match || message.reply_message.text
    if (!match) return await message.send(lang.plugins.song.usage)
    const vid = YT_URL_REGEX.exec(match) || MUSIC_URL_REGEX.exec(match)
    if (vid) {
      const _song = await song(match, message.id)
      if (!_song) {
        return await message.send(lang.plugins.song.not_found)
      }
      const [result] = await yts(match, true, null, message.id)
      const { author, title, thumbnail } = result
      const meta = title ? await addAudioMetaData(_song, title, author, '', thumbnail?.url || thumbnail) : _song
      return await message.send(
        meta,
        { quoted: message.data, mimetype: 'audio/mpeg', fileName: `${title}.mp3` },
        'audio'
      )
    }
    const result = await yts(match, 0, 1, message.id)
    if (!result.length) return await message.send(`_Not result for_ *${match}*`)
    const msg = generateList(
      result.map(({ title, id, duration, author, album }) => ({
        _id: `🆔&id\n`,
        text: `🎵${title}\n🕒${duration}\n👤${author}\n📀${album}\n\n`,
        id: `song ${id.startsWith('http') ? id : `https://www.youtube.com/watch?v=${id}`}`,
      })),
      `Searched ${match} and Found ${result.length} results\nsend 🆔 to download song.\n`,
      message.jid,
      message.participant,
      message.id
    )
    return await message.send(msg.message, { quoted: message.data }, msg.type)
  }
)

bot(
  {
    pattern: 'video ?(.*)',
    desc: lang.plugins.video.desc,
    type: 'download',
  },
  async (message, match) => {
    match = match || message.reply_message.text
    if (!match) return await message.send(lang.plugins.video.usage)

    let quality = null;
    let urlMatch = match;

    const qualityPattern = /^(1080p|720p|480p|360p|240p|144p)\s+(.+)$/i;
    const qualityMatch = match.match(qualityPattern);

    if (qualityMatch) {
      quality = qualityMatch[1];
      urlMatch = qualityMatch[2];
    }

    const vid = YT_URL_REGEX.exec(urlMatch)
    if (!vid) {
      const result = (await yts(urlMatch, false, null, message.id)).filter(r => !r.isMusic)
      if (!result.length) return await message.send(lang.plugins.video.not_found)
      const msg = generateList(
        result.map(({ title, id, duration, view }) => ({
          text: `${title}\nduration : ${duration}\nviews : ${view}\n`,
          id: `video ${quality ? quality + ' ' : ''}https://www.youtube.com/watch?v=${id}`,
        })),
        `Searched ${urlMatch}\nFound ${result.length} results`,
        message.jid,
        message.participant,
        message.id
      )
      return await message.send(msg.message, { quoted: message.data }, msg.type)
    }

    const options = quality ? { videoQuality: quality } : {};
    return await message.send(
      await video(vid[1], message.id, options),
      { quoted: message.data, fileName: `${vid[1]}.mp4` },
      'video'
    )
  }
)
