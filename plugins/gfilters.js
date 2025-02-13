const { getFilter, bot, setFilter, deleteFilter, lang } = require('../lib')

bot(
  {
    pattern: 'gstop ?(.*)',
    desc: lang.plugins.gstop.desc,
    type: 'autoReply',
  },
  async (message, match) => {
    if (!match) return await message.send(lang.plugins.gstop.example)
    const isDel = await deleteFilter('gfilter', match)
    if (!isDel) return await message.send(lang.plugins.gstop.not_found.format(match))
    return await message.send(lang.plugins.gstop.delete.format(match))
  }
)

bot(
  {
    pattern: 'pstop ?(.*)',
    desc: lang.plugins.pstop.desc,
    type: 'autoReply',
  },
  async (message, match) => {
    if (!match) return await message.send(lang.plugins.pstop.example)
    const isDel = await deleteFilter('pfilter', match, message.id)
    if (!isDel) return await message.send(lang.plugins.pstop.not_found.format(match))
    return await message.send(lang.plugins.pstop.delete.format(match))
  }
)

bot(
  {
    pattern: 'gfilter ?(.*)',
    desc: lang.plugins.gfilter.desc,
    type: 'autoReply',
  },
  async (message, match) => {
    if (!match) return await message.send(lang.plugins.gfilter.example)

    if (match === 'list' && !message.reply_message) {
      const filters = await getFilter('gfilter')
      if (!filters.length) return await message.send(lang.plugins.gfilter.example)

      let msg = '> *Group Filters:* \n'
      filters.forEach(({ pattern }) => {
        msg += `- ${pattern}\n`
      })
      return await message.send(msg.trim())
    }

    if (!message.reply_message || !message.reply_message.txt) {
      return await message.send(lang.plugins.common.reply_to_message)
    }

    await setFilter('gfilter', match, message.reply_message.text, true)
    await message.send(lang.plugins.gfilter.add.format(match))
  }
)

bot(
  {
    pattern: 'pfilter ?(.*)',
    desc: lang.plugins.pfilter.desc,
    type: 'autoReply',
  },
  async (message, match) => {
    match = match.match(/[\'\"](.*?)[\'\"]/gms)
    if (!match) return await message.send(lang.plugins.pfilter.example)

    if (match === 'list' && !message.reply_message) {
      const filters = await getFilter('pfilter', message.id)
      if (!filters.length) return await message.send(lang.plugins.pfilter.example)
      let msg = '> *Personal Filters:* \n'
      filters.forEach(({ pattern }) => {
        msg += `- ${pattern}\n`
      })
      return await message.send(msg.trim())
    }
    if (!message.reply_message || !message.reply_message.txt) {
      return await message.send(lang.plugins.common.reply_to_message)
    }
    await setFilter('pfilter', match, message.reply_message.text, true, message.id)
    await message.send(lang.plugins.pfilter.add.format(match))
  }
)

bot(
  {
    on: 'text',
    fromMe: false,
    type: 'gfilter',
    onlyGroup: true,
  },
  async (message) => {
    const filters = await getFilter('gfilter', message.id)
    for (const { pattern, text } of filters) {
      const regexPattern = new RegExp(`(?:^|\\W)${pattern}(?:$|\\W)`, 'i')
      if (regexPattern.test(message.text)) {
        return await message.send(text, {
          quoted: message.data,
        })
      }
    }
  }
)

bot(
  {
    on: 'text',
    fromMe: false,
    type: 'pfilter',
  },
  async (message) => {
    if (message.isGroup) return
    const filters = await getFilter('pfilter', message.id)
    for (const { pattern, text } of filters) {
      const regexPattern = new RegExp(`(?:^|\\W)${pattern}(?:$|\\W)`, 'i')
      if (regexPattern.test(message.text)) {
        return await message.send(text, {
          quoted: message.data,
        })
      }
    }
  }
)
