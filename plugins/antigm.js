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

    const cmd = match.split(' ')[0].toLowerCase()
    const args = match.slice(cmd.length).trim()

    if (['delete', 'warn', 'kick'].includes(cmd)) {
      await setGroupMention({ action: cmd })
      return await message.send(lang.plugins.antigm.action.format(cmd))
    }

    if (cmd === 'on' || cmd === 'off') {
      const enabled = cmd === 'on'
      await setGroupMention({ enabled })
      return await message.send(enabled ? lang.plugins.antigm.enabled : lang.plugins.antigm.disabled)
    }

    if (cmd === 'ignore') {
      if (!args) return await message.send('*Please provide a JID to ignore.*')
      await setGroupMention({ filter: args })
      return await message.send(lang.plugins.antigm.filter)
    }

    return await message.send(lang.plugins.antigm.usage)
  }
)
