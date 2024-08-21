const { bot, zushi, yami, ope, jidToNum } = require('../lib/')

bot(
  {
    pattern: 'zushi ?(.*)',
    desc: 'allow set commands to be used by others in chat',
    type: 'logia',
  },
  async (message, match) => {
    if (!match)
      return await message.send(
        `> Example :\n- zushi ping, sticker\n\nwanna set all ? type list copy and paste the reply message\n- zushi copied_message`
      )
    const z = await zushi(match, message.jid)
    if (!z) return await message.send(`*${match}* already set`)

    await message.send(
      `*allowed commands for @${message.isGroup ? message.jid : jidToNum(message.jid)}*\n${z
        .map((a) => `- ${a}`)
        .join('\n')}`,
      { contextInfo: { mentionedJid: [message.jid] } }
    )
  }
)

bot(
  {
    pattern: 'yami ?(.*)',
    desc: 'shows the commands',
    type: 'logia',
  },
  async (message, match) => {
    const z = await yami(message.jid)
    if (!z || !z.length) return await message.send(`not set any`)
    await message.send(
      `*allowed commands for @${message.isGroup ? message.jid : jidToNum(message.jid)}*\n${z
        .map((a) => `- ${a}`)
        .join('\n')}`,
      { contextInfo: { mentionedJid: [message.jid] } }
    )
  }
)

bot(
  {
    pattern: 'ope ?(.*)',
    desc: 'delete or unset the command',
    type: 'logia',
  },
  async (message, match) => {
    if (!match) return await message.send('> Example :\n- ope ping, sticker\n- ope all')
    const z = await ope(message.jid, match)
    if (z === null) return await message.send(`not set *${match}*`)
    if (z === 'all') return await message.send(`_removed all allowed commands_`)
    await message.send(
      `*removed commands for @${message.isGroup ? message.jid : jidToNum(message.jid)}*\n${z
        .map((a) => `- ${a}`)
        .join('\n')}`,
      { contextInfo: { mentionedJid: [message.jid] } }
    )
  }
)
