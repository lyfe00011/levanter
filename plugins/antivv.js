const { bot, forwardOrBroadCast, parsedJid, isGroup, getAntiVv, setAntiVv, lang } = require('../lib/')
const { loadBaileys } = require('../lib/baileys')

const SCOPES = ['pm', 'gm', 'no-pm', 'no-gm']

const chatJids = async (message) => {
  const { jidNormalizedUser } = await loadBaileys()
  return [message.jid, message.message.key.remoteJidAlt].filter(Boolean).map(jidNormalizedUser)
}

const status = (s) =>
  lang.plugins.antivv.status.format(
    s.mode === 'forward' ? [s.dest, s.scope].filter(Boolean).join(' ') : s.mode,
    s.only.join(', ') || '-',
    s.ignore.join(', ') || '-'
  )

bot(
  {
    pattern: 'vv ?(.*)',
    fromMe: true,
    desc: lang.plugins.vv.desc,
    type: 'whatsapp',
  },
  async (message, match) => {
    if (
      !message.reply_message.image &&
      !message.reply_message.video &&
      !message.reply_message.audio &&
      !message.reply_message.txt
    ) {
      return await message.send(lang.plugins.vv.usage)
    }
    const original = await message.reply_message.getOriginal()
    const media = original.message[message.reply_message.type]
    if (!media?.text && !(media?.mediaKey && (media.directPath || media.url))) {
      const { mode } = await getAntiVv(message.id)
      return await message.send(
        lang.plugins.vv.unavailable + (mode === 'off' ? `\n${lang.plugins.vv.enable_hint}` : '')
      )
    }
    const [jid] = parsedJid(match)
    await forwardOrBroadCast(
      jid || message.jid,
      { id: message.id, client: message.client, message: original },
      { viewOnce: false }
    )
  }
)

bot(
  {
    pattern: 'antivv ?(.*)',
    desc: lang.plugins.antivv.desc,
    type: 'whatsapp',
  },
  async (message, match) => {
    const t = lang.plugins.antivv
    const current = await getAntiVv(message.id)
    const parts = match.trim().split(/\s+/)
    const cmd = parts[0].toLowerCase()
    const args = match.trim().slice(parts[0].length).trim()

    if (cmd === 'list') return await message.send(status(current))

    if (cmd === 'only' || cmd === 'ignore' || cmd === 'remove') {
      const jids = args ? parsedJid(args) : [message.jid]
      if (!jids.length) return await message.send(t.invalid_jid)
      if (cmd === 'remove') {
        const keep = (list) => list.filter((j) => !jids.includes(j))
        await setAntiVv({ only: keep(current.only), ignore: keep(current.ignore) }, message.id)
        return await message.send(t.removed)
      }
      await setAntiVv({ [cmd]: [...new Set([...current[cmd], ...jids])] }, message.id)
      return await message.send(cmd === 'only' ? t.only_added : t.ignore_added)
    }

    if (cmd === 'clear') {
      await setAntiVv({ only: [], ignore: [] }, message.id)
      return await message.send(t.cleared)
    }

    const scope = parts[1]?.toLowerCase() || ''
    const jid = parsedJid(parts[0])[0]
    let next
    if (['off', 'false', 'null'].includes(cmd)) next = { mode: 'off' }
    else if (cmd === 'vv') next = { mode: 'vv' }
    else if (cmd === 'p' || cmd === 'g' || jid) {
      if (scope && !SCOPES.includes(scope)) {
        return await message.send(t.invalid_scope.replace('{0}', scope))
      }
      next = { mode: 'forward', dest: jid || cmd, scope: scope || null }
    } else {
      return await message.send(`${status(current)}\n\n${t.example}`)
    }

    await setAntiVv(next, message.id)

    let reply
    if (next.mode === 'off') reply = t.vv_msg_disable
    else if (next.mode === 'vv') reply = t.vv_msg_save
    else {
      const destText = jid
        ? t.vv_dest_jid.replace('{0}', jid)
        : cmd === 'p'
        ? t.vv_dest_sudo
        : t.vv_dest_chat
      reply = destText + (scope ? '\n' + t[`vv_scope_${scope.replace('-', '_')}`] : '')
    }
    if ((current.mode === 'off') !== (next.mode === 'off')) reply += `\n\n${t.restart_note}`
    await message.send(reply)
  }
)

bot(
  {
    on: 'text',
    fromMe: false,
    type: 'auto_vv',
  },
  async (message) => {
    if (!message.message?.message[message.type]?.viewOnce) return
    const settings = await getAntiVv(message.id)
    if (settings.mode !== 'forward') return

    const isGrp = isGroup(message.jid)
    if (settings.scope === 'pm' && isGrp) return
    if (settings.scope === 'gm' && !isGrp) return
    if (settings.scope === 'no-pm' && !isGrp) return
    if (settings.scope === 'no-gm' && isGrp) return

    const chats = await chatJids(message)
    if (settings.only.length && !chats.some((j) => settings.only.includes(j))) return
    if (chats.some((j) => settings.ignore.includes(j))) return

    const vvJid =
      settings.dest === 'p'
        ? message.client.user.jid
        : settings.dest === 'g'
        ? message.jid
        : parsedJid(settings.dest)[0] || message.client.user.jid

    message.reply_message = null
    await forwardOrBroadCast(vvJid, message, { viewOnce: false, quoted: message.data })
  }
)
