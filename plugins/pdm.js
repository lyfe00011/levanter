const { bot, setPdm, lang } = require('../lib/')

bot(
  {
    pattern: 'pdm ?(.*)',
    desc: lang.plugins.pdm.desc,
    type: 'group',
    onlyGroup: true,
  },
  async (message, match) => {
    if (!match) return await message.send(lang.plugins.pdm.usage)
    if (match == 'on' || match == 'off') {
      await setPdm(message.jid, match, message.id)
      return await message.send(
        match == 'on' ? lang.plugins.pdm.activated : lang.plugins.pdm.deactivated
      )
    }
    await message.send(lang.plugins.pdm.not_found)
  }
)
