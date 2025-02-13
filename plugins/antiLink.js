const { getAntiLink, bot, setAntiLink, lang } = require('../lib/')

bot(
  {
    pattern: 'antilink ?(.*)',
    desc: lang.plugins.antilink.desc,
    type: 'group',
    onlyGroup: true,
  },
  async (message, match) => {
    const antilink = await getAntiLink(message.jid, message.id)
    const status = antilink.enabled ? 'on' : 'off'

    if (!match) {
      return message.send(lang.plugins.antilink.example.format(status))
    }
    if (match === 'on' || match === 'off') {
      if (match === 'off' && !antilink.enabled) return message.send(lang.plugins.antilink.disable)
      await setAntiLink(message.jid, match === 'on', message.id)
      return message.send(
        lang.plugins.antilink.status.format(match === 'on' ? 'enabled' : 'disabled')
      )
    }

    if (match === 'info') {
      return message.send(
        lang.plugins.antilink.info.format(
          status,
          antilink.allowedUrls.length ? antilink.allowedUrls.join(', ') : 'None',
          antilink.action
        )
      )
    }

    if (match.startsWith('action/')) {
      const action = match.replace('action/', '')
      if (!['warn', 'kick', 'null'].includes(action))
        return message.send(lang.plugins.antilink.action_invalid)

      await setAntiLink(message.jid, match, message.id)
      return message.send(lang.plugins.antilink.action_update.format(action))
    }
    const res = await setAntiLink(message.jid, match)
    return message.send(
      lang.plugins.antilink.update.format(
        res.allow.length ? res.allow.join(', ') : '',
        res.notallow.length ? res.notallow.join(', ') : ''
      )
    )
  }
)
