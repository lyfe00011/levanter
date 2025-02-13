const { bot, getNumbers, jidToNum, lang } = require('../lib')

bot(
  {
    pattern: 'ison ?(.*)',
    desc: lang.plugins.ison.desc,
    type: 'search',
  },
  async (message, match) => {
    if (!match) return message.send(lang.plugins.ison.usage)

    const numbers = getNumbers(match.replace('+', ''))

    const ison = await message.onWhatsapp(numbers)

    if (!ison.length) {
      let msg = ''
      msg += lang.plugins.ison.not_exist.format(numbers.length)
      for (const num of numbers) msg += `+${num}\n`
      return await message.send(msg.trim())
    }

    const about = await message.fetchStatus(ison.map((e) => e.jid))

    const exist = []
    const x403 = []

    about.forEach((item) => (item.status ? exist.push(item) : x403.push(jidToNum(item.id))))

    const not = ison.filter((item) => !item.exist).map((item) => jidToNum(item.jid))

    let msg = ''
    if (not.length) {
      msg += lang.plugins.ison.not_exist.format(not.length)
      for (const num of not) msg += `+${num}\n`
    }

    if (exist.length) {
      msg += lang.plugins.ison.exist.format(exist.length)
      for (const about of exist) {
        const num = jidToNum(about.id)
        msg += `@${num}\n*Number :* +${num}\n*About :* ${about.status}\n*Date :* ${about.date}\n\n`
      }
    }

    if (x403.length) {
      msg += lang.plugins.ison.privacy.format(x403.length)
      for (const num of x403) msg += `+${num}\n`
    }

    const mentionedJid = exist.map((user) => user.id)
    return await message.send(msg.trim(), { contextInfo: { mentionedJid } })
  }
)
