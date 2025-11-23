const { bot, zushi, yami, ope, jidToNum, lang } = require('../lib/')

bot(
  {
    pattern: 'zushi ?(.*)',
    desc: lang.plugins.zushi.desc,
    type: 'logia',
  },
  async (message, match) => {
    if (!match) return await message.send(lang.plugins.zushi.usage)
    const z = await zushi(match, message.jid, message.id)

    if (z && z.error) {
      if (z.duplicates) {
        return await message.send(
          lang.plugins.zushi.duplicates.format(
            z.duplicates.join(', '),
            z.existing.length,
            z.existing.map((a) => `- ${a}`).join('\n')
          )
        )
      }
      if (z.invalidCommands) {
        return await message.send(
          lang.plugins.zushi.invalid.format(z.invalidCommands.join(', '))
        )
      }
      return await message.send(lang.plugins.zushi.error.format(z.error))
    }

    if (!z) return await message.send(lang.plugins.zushi.already_set)

    await message.send(
      lang.plugins.zushi.allowed.format(
        message.isGroup ? message.jid : jidToNum(message.jid),
        z.map((a) => `- ${a}`).join('\n')
      ),
      { contextInfo: { mentionedJid: [message.jid] } }
    )
  }
)

bot(
  {
    pattern: 'yami ?(.*)',
    desc: lang.plugins.yami.desc,
    type: 'logia',
  },
  async (message, match) => {
    const z = await yami(message.jid, message.id)
    if (!z || !z.length) return await message.send(lang.plugins.yami.no_commands)
    await message.send(
      lang.plugins.zushi.allowed.format(
        message.isGroup ? message.jid : jidToNum(message.jid),
        z.map((a) => `- ${a}`).join('\n')
      ),
      { contextInfo: { mentionedJid: [message.jid] } }
    )
  }
)

bot(
  {
    pattern: 'ope ?(.*)',
    desc: lang.plugins.ope.desc,
    type: 'logia',
  },
  async (message, match) => {
    if (!match) return await message.send(lang.plugins.ope.no_input)
    const z = await ope(message.jid, match, message.id)

    if (z && z.error) {
      if (z.notFound) {
        return await message.send(
          lang.plugins.ope.not_found_list.format(
            z.notFound.length > 1 ? 's' : '',
            z.notFound.join(', '),
            z.existing && z.existing.length > 0
              ? '\n\n📋 Current allowed commands:\n' + z.existing.map((a) => `- ${a}`).join('\n')
              : ''
          )
        )
      }
      if (z.error === 'No commands found for this user/group') {
        return await message.send(lang.plugins.ope.no_commands)
      }
      return await message.send(lang.plugins.ope.error.format(z.error))
    }

    if (z === 'all') return await message.send(lang.plugins.ope.all_success)
    if (!z) return await message.send(lang.plugins.ope.no_commands)

    await message.send(
      lang.plugins.ope.removed.format(
        message.isGroup ? message.jid : jidToNum(message.jid),
        z.map((a) => `- ${a}`).join('\n')
      ),
      { contextInfo: { mentionedJid: [message.jid] } }
    )
  }
)
