const { bot, lang, setGroupMention } = require('../lib/')

bot(
  {
    pattern: 'antigm ?(.*)',
    desc: 'Manage anti group mention configuration',
    type: 'group',
  },
  async (message, match) => {
    if (!match) {
      return await message.send(lang.plugins.antigm.usage)
    }

    if (['delete', 'warn', 'kick'].includes(match)) {
      await setGroupMention({ action: match })
      return await message.send(lang.plugins.antigm.action.format(match))
    }

    if (match.startsWith('ignore')) {
      await setGroupMention({ filter: match })
      return await message.send(lang.plugins.antigm.filter)
    }

    const enabled = match === 'on'
    await setGroupMention({ enabled })
    await message.send(enabled ? lang.plugins.antigm.enabled : lang.plugins.antigm.disabled)
  }
)
