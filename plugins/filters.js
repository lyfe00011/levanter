const { getFilter, bot, setFilter, deleteFilter, lydia } = require('../lib/')

bot(
  {
    pattern: 'stop ?(.*)',
    desc: 'Delete filters in chat',
    type: 'group',
    onlyGroup: true,
  },
  async (message, match) => {
    if (!match) return await message.send(`*Example : .stop hi*`)
    const isDel = await deleteFilter(message.jid, match, message.id)
    if (!isDel) return await message.send(`_${match} not found in filters_`)
    return await message.send(`_${match} deleted._`)
  }
)

bot(
  {
    pattern: 'filter ?(.*)',
    desc: 'filter in groups',
    type: 'group',
    onlyGroup: true,
  },
  async (message, match) => {
    match = match.match(/[\'\"](.*?)[\'\"]/gms)
    if (!match) {
      const filters = await getFilter(message.jid, message.id)
      if (!filters) return await message.send(`_Not set any filter_\n*Example filter 'hi' 'hello'*`)
      let msg = ''
      filters.map(({ pattern }) => {
        msg += `- ${pattern}\n`
      })
      return await message.send(msg.trim())
    } else {
      if (match.length < 2) {
        return await message.send(`Example filter 'hi' 'hello'`)
      }
      const k = match[0].replace(/['"]+/g, '')
      const v = match[1].replace(/['"]+/g, '')
      if (k && v) await setFilter(message.jid, k, v, match[0][0] === "'" ? true : false, message.id)
      await message.send(`_${k}_ added to filters.`)
    }
  }
)

bot({ on: 'text', fromMe: false, type: 'filterOrLydia' }, async (message, match, ctx) => {
  const filters = await getFilter(message.jid, message.id)
  if (filters)
    filters.map(async ({ pattern, regex, text }) => {
      pattern = new RegExp(`(?:^|\\W)${pattern}(?:$|\\W)`, 'i')
      if (pattern.test(message.text)) {
        await message.send(text, {
          quoted: message.data,
        })
      }
    })

  const isLydia = await lydia(message)
  if (isLydia) return await message.send(isLydia, { quoted: message.data })
})

bot({ on: 'text', fromMe: true, type: 'lydia' }, async (message, match) => {
  const isLydia = await lydia(message)
  if (isLydia) return await message.send(isLydia, { quoted: message.data })
})
