const { getJson, bot } = require('../lib/')

bot(
  {
    pattern: 'movie ?(.*)',
    desc: 'Movie info',
    type: 'search',
  },
  async (message, match) => {
    const movie = await getJson(`http://www.omdbapi.com/?apikey=742b2d09&t=${match}&plot=full`)
    if (movie.Response != 'True')
      return await message.send('*Not found*', {
        quoted: message.data,
      })
    let msg = ''
    const url = movie.Poster
    delete movie.Poster
    delete movie.Response
    delete movie.Ratings
    for (const data in movie) if (movie[data] != 'N/A') msg += `*${data} :* ${movie[data]}\n`
    if (url == 'N/A') return await message.send(msg.trim())
    return await message.sendFromUrl(url, { caption: msg.trim() })
  }
)
