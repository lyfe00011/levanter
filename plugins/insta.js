const { instagram, bot, lang, generateList } = require('../lib/')

bot(
  {
    pattern: 'insta ?(.*)',
    desc: lang.plugins.insta.desc,
    type: 'download',
  },
  async (message, match) => {
    match = match || message.reply_message.text
    if (!match) return await message.send(lang.plugins.insta.usage)
    const result = await instagram(match)
    if (!result.length)
      return await message.send(lang.plugins.insta.not_found, {
        quoted: message.quoted,
      })

    if (result.length > 1) {
      const list = generateList(
        result.map((url, index) => ({
          id: `upload ${url}`,
          text: `${index + 1}/${result.length}`,
        })),
        lang.plugins.story.list.format(result.length),
        message.jid,
        message.participant,
        message.id
      )

      return await message.send(list.message, {}, list.type)
    }

    await message.sendFromUrl(result)
  }
)
