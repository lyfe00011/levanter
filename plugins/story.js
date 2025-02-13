const { story, bot, generateList, lang } = require('../lib/')

bot(
  {
    pattern: 'story ?(.*)',
    desc: lang.plugins.story.desc,
    type: 'download',
  },
  async (message, match) => {
    match ||= message.reply_message?.text
    if (!match) return await message.send(lang.plugins.story.usage)

    const result = await story(match)
    if (!result.length) {
      return await message.send(lang.plugins.story.not_found, { quoted: message.quoted })
    }

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

    await message.sendFromUrl(url)
  }
)
