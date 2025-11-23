const { getAntiLink, bot, setAntiLink, setAllowedUrl, lang } = require('../lib/')

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
        lang.plugins.antilink.status.format(cmd === 'on' ? 'enabled' : 'disabled')
      )
    }

    if (['kick', 'warn', 'null'].includes(cmd)) {
      await setAntiLink(message.jid, cmd, message.id)
      return message.send(lang.plugins.antilink.action_update.format(cmd))
    }

    if (cmd === 'allow') {
      if (!args) return message.send('*Please provide a URL to allow.*')
      const urlsToAdd = args.split(',').map(u => u.trim()).filter(u => u)
      const currentList = allowedUrls ? allowedUrls.split(',') : []
      const newList = [...new Set([...currentList, ...urlsToAdd])].join(',')
      await setAllowedUrl(message.jid, newList, message.id)
      return message.send(`*Allowed URLs updated:*\n${newList.replace(/,/g, ', ')}`)
    }

    if (cmd === 'disallow') {
      if (!args) return message.send('*Please provide a URL to disallow.*')
      const urlsToDisallow = args.split(',').map(u => u.trim()).filter(u => u).map(u => `!${u}`)
      const currentList = allowedUrls ? allowedUrls.split(',') : []
      const cleanList = currentList.filter(u => !urlsToDisallow.includes(u) && !urlsToDisallow.includes(`!${u}`))
      const newList = [...new Set([...cleanList, ...urlsToDisallow])].join(',')
      await setAllowedUrl(message.jid, newList, message.id)
      return message.send(`*Disallowed URLs updated:*\n${newList.replace(/,/g, ', ')}`)
    }

    if (cmd === 'list' || cmd === 'info') {
      if (!allowedUrls) return message.send(lang.plugins.antilink.antilink_notset)
      const list = allowedUrls.split(',')
      const allowed = list.filter(u => !u.startsWith('!')).join(', ')
      const disallowed = list.filter(u => u.startsWith('!')).map(u => u.slice(1)).join(', ')
      return message.send(
        `*Antilink Status:* ${status}\n*Action:* ${action}\n\n*Allowed:* ${allowed || 'None'}\n*Disallowed:* ${disallowed || 'None'}`
      )
    }

    if (cmd === 'clear') {
      await setAllowedUrl(message.jid, 'null', message.id)
      return message.send('*Antilink settings cleared.*')
    }

    return message.send(lang.plugins.antilink.example.format(status))
  }
)
