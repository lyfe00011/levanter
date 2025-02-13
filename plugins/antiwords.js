const { bot, setWord, getWord, lang } = require('../lib')

const actions = ['null', 'warn', 'kick']

bot(
  {
    pattern: 'antiword ?(.*)',
    desc: lang.plugins.antiword.desc,
    onlyGroup: true,
    type: 'group',
  },
  async (message, match) => {
    const { enabled } = await getWord(message.jid, message.id)

    if (!match || (!['on', 'off'].includes(match) && !match.startsWith('action/'))) {
      return message.send(lang.plugins.antiword.example.format(enabled ? 'on' : 'off'))
    }

    if (match.startsWith('action/')) {
      const newAction = match.replace('action/', '')
      if (!actions.includes(newAction)) return message.send(lang.plugins.antilink.action_invalid)

      await setWord(message.jid, newAction, message.id)
      return message.send(lang.plugins.antiword.action_update.format(newAction))
    }

    await setWord(message.jid, match === 'on', message.id)
    return message.send(
      lang.plugins.antiword.status.format(match === 'on' ? 'activated' : 'deactivated')
    )
  }
)
