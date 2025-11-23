const { bot, getFake, setFake, addCode, removeCode, lang } = require('../lib/')

bot(
  {
    pattern: 'antifake ?(.*)',
    desc: lang.plugins.antifake.desc,
    type: 'group',
    onlyGroup: true,
  },
  async (message, match) => {
    const fake = await getFake(message.jid, message.id)
    const status = fake && fake.enabled ? 'on' : 'off'

    if (!match) {
      return message.send(lang.plugins.antifake.example.format(status))
    }

    const cmd = match.split(' ')[0].toLowerCase()
    const args = match.slice(cmd.length).trim()

    if (cmd === 'on' || cmd === 'off') {
      await setFake(message.jid, cmd === 'on', fake?.code, message.id)
      return message.send(
        lang.plugins.antifake.status.format(cmd === 'on' ? lang.plugins.antifake.enabled : lang.plugins.antifake.disabled)
      )
    }

    if (cmd === 'list') {
      if (!fake || !fake.code) return message.send(lang.plugins.antifake.not)

      const codeMatch = fake.code.match(/\^\((.*)\)/)
      if (!codeMatch) return message.send(lang.plugins.antifake.not)

      const codes = codeMatch[1].split('|').filter(c => c)
      if (!codes.length) return message.send(lang.plugins.antifake.not)

      const hasAllow = codes.some(c => c.startsWith('!'))
      const mode = hasAllow ? lang.plugins.antifake.whitelist_mode : lang.plugins.antifake.blacklist_mode

      const formattedCodes = codes.map((code, i) => {
        const cleanCode = code.replace('!', '')
        const prefix = hasAllow ? (code.startsWith('!') ? '✅' : '❌') : '🚫'
        return `${i + 1}. ${prefix} ${cleanCode}`
      }).join('\n')

      return message.send(`*${mode}*\n\n${formattedCodes}`)
    }

    if (cmd === 'allow') {
      if (!args) return message.send(lang.plugins.antifake.allow_prompt)

      if (fake && fake.code) {
        const codeMatch = fake.code.match(/\^\((.*)\)/)
        if (codeMatch) {
          const existing = codeMatch[1].split('|').filter(c => c && !c.startsWith('!'))
          if (existing.length > 0) {
            return message.send(lang.plugins.antifake.mode_conflict_whitelist)
          }
        }
      }

      const codes = args.split(',').map(c => `!${c.trim()}`).join(',')
      await addCode(message.jid, codes, message.id)

      if (!fake || !fake.enabled) {
        await setFake(message.jid, true, undefined, message.id)
      }

      return message.send(lang.plugins.antifake.whitelist_success.format(args.split(',').map(c => c.trim()).join(', ')))
    }

    if (cmd === 'disallow') {
      if (!args) return message.send(lang.plugins.antifake.disallow_prompt)

      if (fake && fake.code) {
        const codeMatch = fake.code.match(/\^\((.*)\)/)
        if (codeMatch) {
          const existing = codeMatch[1].split('|').filter(c => c && c.startsWith('!'))
          if (existing.length > 0) {
            return message.send(lang.plugins.antifake.mode_conflict_blacklist)
          }
        }
      }

      await addCode(message.jid, args, message.id)

      if (!fake || !fake.enabled) {
        await setFake(message.jid, true, undefined, message.id)
      }

      return message.send(lang.plugins.antifake.blacklist_success.format(args.split(',').map(c => c.trim()).join(', ')))
    }

    if (cmd === 'remove') {
      if (!args) return message.send(lang.plugins.antifake.remove_prompt)

      let codesToRemove = args
      if (fake && fake.code) {
        const codeMatch = fake.code.match(/\^\((.*)\)/)
        if (codeMatch) {
          const existing = codeMatch[1].split('|').filter(c => c)
          const hasAllow = existing.some(c => c.startsWith('!'))
          if (hasAllow) {
            codesToRemove = args.split(',').map(c => `!${c.trim()}`).join(',')
          }
        }
      }

      await removeCode(message.jid, codesToRemove, message.id)
      return message.send(lang.plugins.antifake.removed.format(args))
    }

    if (cmd === 'clear') {
      await setFake(message.jid, false, '', message.id)
      return message.send(lang.plugins.antifake.cleared)
    }

    return message.send(lang.plugins.antifake.example.format(status))
  }
)
