const { bot, IsSpotify, isUrl, dowloadTrack, getSpotifyPlaylist, lang } = require('../lib/')

bot(
  {
    pattern: 'spotify ?(.*)',
    fromMe: true,
    desc: lang.plugins.spotify.desc,
    type: 'download',
  },
  async (message, match) => {
    match = match || message.reply_message.text || ''
    const spotify = IsSpotify(match)
    if (!spotify) return await message.send(lang.plugins.spotify.example)
    match = isUrl(match)
    if (spotify === 'track') {
      const track = await dowloadTrack(match)
      return await message.send(
        track.buffer,
        { fileName: track.title, quoted: message.data, mimetype: 'audio/mpeg' },
        'document'
      )
    }
    const playlist = await getSpotifyPlaylist(match)
    await message.send(lang.plugins.spotify.downloading.format(playlist.length))
    for (const song of playlist) {
      try {
        const track = await dowloadTrack(song.title)
        await message.send(
          track.buffer,
          { fileName: track.title, quoted: message.data, mimetype: 'audio/mpeg' },
          'document'
        )
      } catch (error) {}
    }
  }
)
