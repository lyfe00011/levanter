const { bot, setVar, parsedJid, isGroup, lang } = require('../lib')

bot(
  {
    pattern: 'antiedit ?(.*)',
    desc: lang.plugins.antiedit.desc,
    type: 'whatsapp',
  },
  async (message, match) => {
    const parts = match.trim().split(/\s+/)
    const dest = parts[0] || ''
    const scope = parts[1]?.toLowerCase() || ''
    const jid = parsedJid(dest)[0]
    const isDisable = dest === 'off' || dest === 'false'
    const validScopes = ['pm', 'gm', 'no-pm', 'no-gm']

    if (!dest || (!['p', 'g', 'off', 'false'].includes(dest) && !jid)) {
      return message.send(lang.plugins.antiedit.example)
    }

    if (scope && !validScopes.includes(scope)) {
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

    await setVar({ ANTI_EDIT: match.trim() }, message.id)

    let responseMessage
    if (isDisable) {
      responseMessage = lang.plugins.antiedit.edit_msg_disable
    } else {
      const destText = jid
        ? lang.plugins.antiedit.edit_dest_jid.replace('{0}', jid)
        : dest === 'p'
        ? lang.plugins.antiedit.edit_dest_sudo
        : lang.plugins.antiedit.edit_dest_chat

      const scopeText = scope
        ? '\n' + (lang.plugins.antiedit[`edit_scope_${scope.replace('-', '_')}`] || '')
        : ''

      responseMessage = destText + scopeText
    }

    await message.send(responseMessage)
  }
)
