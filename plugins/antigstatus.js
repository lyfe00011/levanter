const {
  bot,
  lang,
  setAntiGstatus,
  getAntiGstatus,
  addAntiGstatusFilter,
  removeAntiGstatusFilter,
} = require('../lib/')

bot(
  {
    pattern: 'antigstatus ?(.*)',
    desc: lang.plugins.antigstatus.desc,
    type: 'group',
  },
  async (message, match) => {
    if (!match) {
      return await message.send(lang.plugins.antigstatus.usage)
    }

    const cmd = match.split(' ')[0].toLowerCase()
    const args = match.slice(cmd.length).trim()

    if (cmd === 'on' || cmd === 'off') {
      const enabled = cmd === 'on'
      await setAntiGstatus({ enabled })
      return await message.send(enabled ? lang.plugins.antigstatus.enabled : lang.plugins.antigstatus.disabled)
    }

    if (cmd === 'ignore') {
      if (!args) return await message.send(lang.plugins.antigstatus.ignore_prompt)
      await addAntiGstatusFilter(args)
      return await message.send(lang.plugins.antigstatus.filter)
    }

    if (cmd === 'unignore') {
      if (!args) return await message.send(lang.plugins.antigstatus.unignore_prompt)
      await removeAntiGstatusFilter(args)
      return await message.send(lang.plugins.antigstatus.removed)
    }

    if (cmd === 'list') {
      const cur = await getAntiGstatus()
      const jids = (cur.filter || '').split(',').map((j) => j.trim()).filter(Boolean)
      if (jids.length === 0) return await message.send(lang.plugins.antigstatus.list_empty)
      return await message.send(
        lang.plugins.antigstatus.list_header + '\n' + jids.map((j, i) => `${i + 1}. ${j}`).join('\n')
      )
    }

    if (cmd === 'clear') {
      await setAntiGstatus({ filter: '' })
      return await message.send(lang.plugins.antigstatus.cleared)
    }

    return await message.send(lang.plugins.antigstatus.usage)
  }
)
