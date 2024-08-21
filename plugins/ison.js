const { bot, PREFIX, getNumbers, jidToNum } = require('../lib')

bot(
  {
    pattern: 'ison ?(.*)',
    desc: 'List number in whatsapp',
    type: 'search',
  },
  async (message, match) => {
    if (!match) return message.send(`*Example :* ${PREFIX}ison 9198765432x0`)

    const numbers = getNumbers(match.replace('+', ''))

    const ison = await message.onWhatsapp(numbers)

    if (!ison.length) {
      let msg = ''
      msg += `*Not Exist on Whatsapp* (${numbers.length})\n`
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
      msg += `*Not Exist on Whatsapp* (${not.length})\n`
      for (const num of not) msg += `+${num}\n`
    }

    if (exist.length) {
      msg += `\n*Exist on Whatsapp* (${exist.length})\n`
      for (const about of exist) {
        const num = jidToNum(about.id)
        msg += `@${num}\n*Number :* +${num}\n*About :* ${about.status}\n*Date :* ${about.date}\n\n`
      }
    }

    if (x403.length) {
      msg += `*Privacy Settings on* (${x403.length})\n`
      for (const num of x403) msg += `+${num}\n`
    }

    const mentionedJid = exist.map((user) => user.id)
    return await message.send(msg.trim(), { contextInfo: { mentionedJid } })
  }
)
