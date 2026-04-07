const { bot, yts, song, video, addAudioMetaData, generateList, lang, MUSIC_URL_REGEX, YT_URL_REGEX, searchMusic, downloadMusic, getMusicInfo } = require('../lib/')

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
        `${lang.plugins.yts.title}${title}\n${lang.plugins.yts.time}${duration}\n${lang.plugins.yts.views}${view}\n${lang.plugins.yts.publish}${published}\n${lang.plugins.yts.desc_label}${description}`
      )
    }
    const result = await yts(match, false, null, message.id)
    const msg = result
      .map(
        ({ title, id, view, duration, published, author }) =>
          `• *${title.trim()}*\n${view ? `${lang.plugins.yts.views}${view}\n` : ''}${lang.plugins.yts.time}${duration}\n${lang.plugins.yts.author}${author}\n${published ? `${lang.plugins.yts.publish}${published}\n` : ''}${lang.plugins.yts.url}${id.startsWith('http') ? id : `https://www.youtube.com/watch?v=${id}`}\n\n`
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
    if (!result.length) return await message.send(lang.plugins.song.no_result.format(match))
    const msg = generateList(
      result.map(({ title, id, duration, author, album }) => ({
        _id: lang.plugins.song.id_label,
        text: `🎵${title}\n🕒${duration}\n👤${author}\n📀${album}\n\n`,
        id: `song ${id.startsWith('http') ? id : `https://www.youtube.com/watch?v=${id}`}`,
      })),
      lang.plugins.song.list_header.format(match, result.length),
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
        lang.plugins.video.list_header.format(urlMatch, result.length),
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

bot(
  {
    pattern: 'lofi ?(.*)',
    desc: lang.plugins.lofi.desc,
    type: 'download',
  },
  async (message, match) => {
    match = match || message?.reply_message?.text
    if (!match) return await message.send(lang.plugins.lofi.usage)

    let trackId = null
    if (/^\d+$/.test(match.trim())) {
      trackId = match.trim()
    }
    if (trackId) {
      try {
        const trackInfo = await getMusicInfo(trackId)
        let m4aBuffer = await downloadMusic(trackId, 'lofi')
        if (trackInfo.title) {
          m4aBuffer = await addAudioMetaData(
            m4aBuffer,
            trackInfo.title,
            trackInfo.artist,
            '',
            trackInfo.thumbnail
          )
        }
        const ext = trackInfo.isLossless ? 'flac' : 'm4a'
        const mime = trackInfo.isLossless ? 'audio/flac' : 'audio/mp4'

        return await message.send(
          m4aBuffer,
          {
            quoted: message.data,
            mimetype: mime,
            fileName: `${trackInfo?.title || 'lofi'}.${ext}`,
          },
          trackInfo.isLossless ? 'document' : 'audio'
        )
      } catch (error) {
        return await message.send(lang.plugins.lofi.error_download.format(error.message))
      }
    }

    try {
      const result = await searchMusic(match, 5)
      if (!result || !result.length) return await message.send(lang.plugins.lofi.no_result.format(match))

      const msg = generateList(
        result.map(({ title, id, artist, duration }) => ({
          _id: lang.plugins.song.id_label,
          text: `🎵${title} [${duration}]\n👤${artist}\n\n`,
          id: `lofi ${id}`,
        })),
        lang.plugins.lofi.list_header.format(match, result.length),
        message.jid,
        message.participant,
        message.id
      )

      return await message.send(msg.message, { quoted: message.data }, msg.type)
    } catch (error) {
      return await message.send(lang.plugins.lofi.error_search.format(error.message))
    }
  }
)
