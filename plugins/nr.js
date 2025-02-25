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
    if (!z || !z.length) return await message.send(lang.plugins.yami.not_set)
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
    if (!match) return await message.send(lang.plugins.ope.usage)
    const z = await ope(message.jid, match, message.id)
    if (z === null) return await message.send(lang.plugins.ope.not_found.format(match))
    if (z === 'all') return await message.send(lang.plugins.ope.all_removed)
    await message.send(
      lang.plugins.ope.removed.format(
        message.isGroup ? message.jid : jidToNum(message.jid),
        z.map((a) => `- ${a}`).join('\n')
      ),
      { contextInfo: { mentionedJid: [message.jid] } }
    )
  }
)
