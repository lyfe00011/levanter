const { bot, setVar, parsedJid, isGroup, lang } = require('../lib')

bot(
  {
    pattern: 'delete ?(.*)',
    desc: lang.plugins.delete.desc,
    type: 'whatsapp',
  },
  async (message, match) => {
    const jid = parsedJid(match)[0]

    if (!match || (!['p', 'g', 'off'].includes(match) && !jid)) {
      return message.send(lang.plugins.delete.example)
    }

    if (jid) {
      if (isGroup(jid)) {
        try {
          await message.groupMetadata(jid)
        } catch (error) {
          return message.send(lang.plugins.delete.invalid_jid)
        }
      } else {
        const exist = await message.onWhatsapp(jid)
        if (!exist) return message.send(lang.plugins.delete.invalid_jid)
      }
    }

    await setVar({ ANTI_DELETE: match }, message.id)

    const responseMessage = jid
      ? lang.plugins.delete.dlt_msg_jid
      : match === 'off'
      ? lang.plugins.delete.dlt_msg_disable
      : match === 'p'
      ? lang.plugins.delete.dlt_msg_sudo
      : lang.plugins.delete.dlt_msg_chat

    await message.send(responseMessage)
  }
)
