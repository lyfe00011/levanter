const { bot, getFake, antiList, enableAntiFake, lang } = require('../lib/')

bot(
  {
    pattern: 'antifake ?(.*)',
    desc: lang.plugins.antifake.desc,
    type: 'group',
    onlyGroup: true,
  },
  async (message, match) => {
    if (!match) {
      const fake = await getFake(message.jid, message.id)
      const status = fake && fake.enabled ? 'on' : 'off'

      return message.send(lang.plugins.antifake.example.format(status))
    }

    if (match === 'list') {
      const codes = await antiList(message.jid, 'fake', message.id)
      if (!codes.length) return message.send(lang.plugins.antifake.not)

      return message.send('```' + codes.map((code, i) => `${i + 1}. ${code}`).join('\n') + '```')
    }

    if (match === 'on' || match === 'off') {
      await enableAntiFake(message.jid, match, message.id)
      return message.send(
        lang.plugins.antifake.status.format(match === 'on' ? 'enabled' : 'disabled')
      )
    }

    const res = await enableAntiFake(message.jid, match, message.id)
    return message.send(
      lang.plugins.antifake.update.format(
        res.allow.length ? res.allow.join(', ') : '',
        res.notallow.length ? res.notallow.join(', ') : ''
      )
    )
  }
)
