const { getFilter, bot, setFilter, deleteFilter, chatBot, lang } = require('../lib/')

bot(
  {
    pattern: 'stop ?(.*)',
    desc: lang.plugins.stop.desc,
    type: 'group',
    onlyGroup: true,
  },
  async (message, match) => {
    if (!match) return message.send(lang.plugins.stop.example)

    const isDeleted = await deleteFilter(message.jid, match, message.id)
    return message.send(
      isDeleted ? lang.plugins.stop.delete.format(match) : lang.plugins.stop.not_found.format(match)
    )
  }
)

bot(
  {
    pattern: 'filter ?(.*)',
    desc: lang.plugins.filter.desc,
    type: 'group',
    onlyGroup: true,
  },
  async (message, match) => {
    if (!match) {
      if (!filters.length) return message.send(lang.plugins.filter.example)
    }
    if (match === 'list' && !message.reply_message) {
      const filters = await getFilter(message.jid, message.id)
      if (!filters.length) return message.send(lang.plugins.filter.example)
      return await message.send(
        lang.plugins.filter.list.format(filters.map(({ pattern }) => `- ${pattern}`).join('\n'))
      )
    }

    if (!message.reply_message || !message.reply_message.txt) {
      return message.send(lang.plugins.common.reply_to_message)
    }

    await setFilter(message.jid, match, message.reply_message.text, true, message.id)
    return message.send(lang.plugins.filter.filter_add.format(match, message.reply_message.text))
  }
)

bot({ on: 'text', fromMe: false, type: 'filterOrLydia' }, async (message) => {
  const filters = await getFilter(message.jid, message.id)

  for (const { pattern, text } of filters) {
    const regexPattern = new RegExp(`\\b${pattern}\\b`, 'i')
    if (regexPattern.test(message.text)) {
      return message.send(text, { quoted: message.data })
    }
  }

  const chatbotResponse = await chatBot(message)
  if (chatbotResponse) return message.send(chatbotResponse, { quoted: message.data })
})

bot({ on: 'text', fromMe: true, type: 'lydia' }, async (message) => {
  const chatbotResponse = await chatBot(message)
  if (chatbotResponse) return message.send(chatbotResponse, { quoted: message.data })
})
