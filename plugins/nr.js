const { getGroupAdmins } = require('../lib/') // adjust as needed

bot(
  {
    pattern: 'zushi ?(.*)',
    desc: lang.plugins.zushi.desc,
    type: 'logia',
  },
  async (message, match) => {
    if (message.isGroup) {
      const admins = await getGroupAdmins(message.jid)
      if (!admins.includes(message.sender)) {
        return await message.send("Only *group admins* can use this command.")
      }
    }

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
