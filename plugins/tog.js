const { TogCmd, bot, lang } = require('../lib/')

bot(
  {
    pattern: 'tog ?(.*)',
    desc: lang.plugins.tog.desc,
    type: 'bot',
  },
  async (message, match) => {
    const [cmd, tog] = match.split(' ')
    if (!cmd || (tog != 'off' && tog != 'on')) return await message.send(lang.plugins.tog.usage)
    if (cmd == 'tog') return await message.send(lang.plugins.tog.self_reference)
    await TogCmd(cmd, tog, message.id)
    await message.send(
      tog == 'on' ? lang.plugins.tog.enabled.format(cmd) : lang.plugins.tog.disabled.format(cmd)
    )
  }
)
