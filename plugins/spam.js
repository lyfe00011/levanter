const { bot, setSpam, lang } = require('../lib')

bot(
  {
    pattern: 'antispam ?(.*)',
    desc: lang.plugins.antispam.desc,
    onlyGroup: true,
    type: 'group',
  },
  async (message, match) => {
    if (match !== 'on' && match !== 'off') {
      return await message.send(lang.plugins.antispam.usage)
    }

    const isOn = match === 'on'
    await setSpam(message.jid, isOn)

    await message.send(isOn ? lang.plugins.antispam.activated : lang.plugins.antispam.deactivated)
  }
)
//
