const { twitter, bot, generateList, isUrl, lang } = require('../lib/')

bot(
  {
    pattern: 'twitter ?(.*)',
    desc: lang.plugins.twitter.desc,
    type: 'download',
  },
  async (message, match) => {
    const url = isUrl(match || message.reply_message?.text)
    if (!url) {
      return await message.send(lang.plugins.twitter.usage)
    }

    const result = await twitter(url)
    if (!result.length) {
      return await message.send(lang.plugins.twitter.not_found, {
        quoted: message.quoted,
      })
    }

    if (result.length > 1) {
      const qualityOptions = result.map((video) => ({
        id: `upload ${video.url}`,
        text: video.quality.split('x')[0],
      }))

      const list = generateList(
        qualityOptions,
        lang.plugins.twitter.choose_quality,
        message.jid,
        message.participant,
        message.id
      )

      return await message.send(list.message, {}, list.type)
    }

    await message.sendFromUrl(result[0].url, { quoted: message.quoted })
  }
)
