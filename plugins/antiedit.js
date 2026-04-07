const { bot, setVar, parsedJid, isGroup, lang } = require('../lib')

bot(
  {
    pattern: 'antiedit ?(.*)',
    desc: lang.plugins.antiedit.desc,
    type: 'whatsapp',
  },
  async (message, match) => {
    const jid = parsedJid(match)[0]
    const isDisable = match === 'off' || match === 'false'

    if (!match || (!['p', 'g', 'off', 'false'].includes(match) && !jid)) {
      return message.send(lang.plugins.antiedit.example)
    }

    if (jid) {
      if (isGroup(jid)) {
        try {
          await message.groupMetadata(jid)
        } catch (error) {
          return message.send(lang.plugins.antiedit.invalid_jid)
        }
      } else {
        const exist = await message.onWhatsapp(jid)
        if (!exist) return message.send(lang.plugins.antiedit.invalid_jid)
      }
    }

    await setVar({ ANTI_EDIT: match }, message.id)

    const responseMessage = jid
      ? lang.plugins.antiedit.edit_msg_jid
      : isDisable
        ? lang.plugins.antiedit.edit_msg_disable
        : match === 'p'
          ? lang.plugins.antiedit.edit_msg_sudo
          : lang.plugins.antiedit.edit_msg_chat

    await message.send(responseMessage)
  }
)
