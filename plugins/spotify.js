const { bot, IsSpotify, isUrl, dowloadTrack, getSpotifyPlaylist } = require('../lib/')

bot(
  {
    pattern: 'spotify ?(.*)',
    desc: 'download track or playlist',
    type: 'download',
  },
  async (message, match) => {
    match = match || message.reply_message.text || ''
    const spotify = IsSpotify(match)
    if (!spotify) return await message.send('*Example :* spotify track url | playlist url')
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
    await message.send(`_downloading ${playlist.length} tracks..._`)
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
