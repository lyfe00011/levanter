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
    const statusLine = async () => {
      const cur = await getAntiGstatus(message.id)
      return {
        jids: cur.jids,
        line: lang.plugins.antigstatus.status.format(cur.enabled ? 'on' : 'off', cur.jids.length),
      }
    }

    if (!match) {
      const { line } = await statusLine()
      return await message.send(`${line}\n\n${lang.plugins.antigstatus.usage}`)
    }

    const cmd = match.split(' ')[0].toLowerCase()
    const args = match.slice(cmd.length).trim()

    if (cmd === 'on' || cmd === 'off') {
      const enabled = cmd === 'on'
      await setAntiGstatus({ enabled }, message.id)
      return await message.send(enabled ? lang.plugins.antigstatus.enabled : lang.plugins.antigstatus.disabled)
    }

    if (cmd === 'ignore') {
      const target = args || (message.isGroup ? message.jid : '')
      if (!target) return await message.send(lang.plugins.antigstatus.ignore_prompt)
      await addAntiGstatusFilter(target, message.id)
      return await message.send(lang.plugins.antigstatus.filter)
    }

    if (cmd === 'unignore') {
      const target = args || (message.isGroup ? message.jid : '')
      if (!target) return await message.send(lang.plugins.antigstatus.unignore_prompt)
      await removeAntiGstatusFilter(target, message.id)
      return await message.send(lang.plugins.antigstatus.removed)
    }

    if (cmd === 'list') {
      const { jids, line } = await statusLine()
      if (jids.length === 0) return await message.send(`${line}\n\n${lang.plugins.antigstatus.list_empty}`)
      return await message.send(
        `${line}\n\n${lang.plugins.antigstatus.list_header}\n` +
          jids.map((j, i) => `${i + 1}. ${j}`).join('\n')
      )
    }

    if (cmd === 'clear') {
      await setAntiGstatus({ filter: '' }, message.id)
      return await message.send(lang.plugins.antigstatus.cleared)
    }

    const { line } = await statusLine()
    return await message.send(`${line}\n\n${lang.plugins.antigstatus.usage}`)
  }
)
