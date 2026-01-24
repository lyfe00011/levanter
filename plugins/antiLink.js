const { getAntiLink, bot, setAntiLink, setAllowedUrl, lang, normalizeUrl } = require('../lib/')

bot(
  {
    pattern: 'antilink ?(.*)',
    desc: lang.plugins.antilink.desc,
    type: 'group',
    onlyGroup: true,
  },
  async (message, match) => {
    const antilink = await getAntiLink(message.jid, message.id)
    const status = antilink && antilink.enabled ? 'on' : 'off'
    const action = antilink && antilink.action ? antilink.action : 'null'
    const allowedUrls = antilink && antilink.allowedUrls && antilink.allowedUrls !== 'null' ? antilink.allowedUrls : ''

    if (!match) {
      return message.send(lang.plugins.antilink.example.format(status))
    }

    const cmd = match.split(' ')[0].toLowerCase()
    const args = match.slice(cmd.length).trim()

    if (cmd === 'on' || cmd === 'off') {
      if (cmd === 'off' && status === 'off') return message.send(lang.plugins.antilink.disable)
      await setAntiLink(message.jid, cmd === 'on', message.id)
      return message.send(
        lang.plugins.antilink.status.format(cmd === 'on' ? lang.plugins.antilink.enabled : lang.plugins.antilink.disabled)
      )
    }

    if (['kick', 'warn', 'null'].includes(cmd)) {
      await setAntiLink(message.jid, cmd, message.id)
      return message.send(lang.plugins.antilink.action_update.format(cmd))
    }

    if (cmd === 'allow') {
      if (!args) return message.send(lang.plugins.antilink.allow_prompt)

      const urlsToAdd = args.split(',')
        .map(u => u.trim())
        .filter(u => u)
        .map(u => normalizeUrl(u))

      const currentList = allowedUrls ? allowedUrls.split(',') : []
      const currentNormalized = currentList.map(u => normalizeUrl(u))

      const newUrls = urlsToAdd.filter(u => !currentNormalized.includes(u))

      if (newUrls.length === 0) {
        return message.send(lang.plugins.antilink.no_new_urls)
      }

      const newList = [...currentList, ...newUrls].join(',')
      await setAllowedUrl(message.jid, newList, message.id)

      return message.send(
        lang.plugins.antilink.urls_updated.format(newUrls.join(', '), [...currentList, ...newUrls].length)
      )
    }

    if (cmd === 'disallow') {
      if (!args) return message.send(lang.plugins.antilink.disallow_prompt)

      const urlsToDisallow = args.split(',')
        .map(u => u.trim())
        .filter(u => u)
        .map(u => `!${normalizeUrl(u)}`)

      const currentList = allowedUrls ? allowedUrls.split(',') : []

      const cleanList = currentList.filter(u => {
        const normalized = normalizeUrl(u.replace(/^!/, ''))
        return !urlsToDisallow.some(d => normalizeUrl(d.slice(1)) === normalized)
      })

      const existingDisallowed = cleanList
        .filter(u => u.startsWith('!'))
        .map(u => normalizeUrl(u.slice(1)))
      const newUrls = urlsToDisallow.filter(u => !existingDisallowed.includes(normalizeUrl(u.slice(1))))

      if (newUrls.length === 0) {
        return message.send(lang.plugins.antilink.no_disallowed_urls)
      }

      const newList = [...cleanList, ...newUrls].join(',')
      await setAllowedUrl(message.jid, newList, message.id)

      return message.send(
        lang.plugins.antilink.disallowed_updated.format(newUrls.map(u => u.slice(1)).join(', '), [...cleanList, ...newUrls].filter(u => u.startsWith('!')).length)
      )
    }

    if (cmd === 'list' || cmd === 'info') {
      if (!allowedUrls) return message.send(lang.plugins.antilink.antilink_notset)
      const list = allowedUrls.split(',')
      const allowed = list.filter(u => !u.startsWith('!')).join(', ')
      const disallowed = list.filter(u => u.startsWith('!')).map(u => u.slice(1)).join(', ')
      return message.send(
        lang.plugins.antilink.info.format(status, allowed || 'None', action) // Utilizing existing info key or updating it
      )
    }

    if (cmd === 'clear') {
      if (!args) {
        await setAllowedUrl(message.jid, 'null', message.id)
        return message.send(lang.plugins.antilink.settings_cleared)
      }

      const type = args.toLowerCase()
      const currentList = allowedUrls ? allowedUrls.split(',') : []

      if (type === 'allow' || type === 'allowed') {
        const disallowedOnly = currentList.filter(u => u.startsWith('!'))
        const newList = disallowedOnly.length > 0 ? disallowedOnly.join(',') : 'null'
        await setAllowedUrl(message.jid, newList, message.id)
        return message.send(lang.plugins.antilink.allowed_cleared)
      }

      if (type === 'disallow' || type === 'disallowed') {
        const allowedOnly = currentList.filter(u => !u.startsWith('!'))
        const newList = allowedOnly.length > 0 ? allowedOnly.join(',') : 'null'
        await setAllowedUrl(message.jid, newList, message.id)
        return message.send(lang.plugins.antilink.disallowed_cleared)
      }

      return message.send(lang.plugins.antilink.example.format(status))
    }

    return message.send(lang.plugins.antilink.example.format(status))
  }
)
