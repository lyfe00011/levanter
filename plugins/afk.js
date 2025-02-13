const { bot, setAfk, lang } = require('../lib/')

bot(
  {
    pattern: 'afk ?(.*)',
    desc: lang.plugins.afk.desc,
    type: 'misc',
  },
  async (message, match, ctx) => {
    if (match === 'off') {
      setAfk(false, '', 0, '', message.id)
      return message.send(lang.plugins.afk.not_afk, { quoted: message.data }, 'text', ctx.p)
    }

    if (!ctx.isAfk && !match) {
      return message.send(lang.plugins.afk.example)
    }

    if (!ctx.isAfk) {
      ctx.reason = match || ''
      ctx.isAfk = true
      const now = Date.now() / 1000
      setAfk(true, match, now, message.participant, message.id)

      return message.send(match.replace('#lastseen', now))
    }
  }
)
