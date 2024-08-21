const { bot, truecaller, jidToNum, delTruecaller, getTruecaller } = require('../lib/index')

bot(
  {
    pattern: 'truecaller ?(.*)',
    desc: 'search number in truecaller',
    type: 'search',
  },
  async (message, match) => {
    match =
      (message.mention[0] && jidToNum(message.mention[0])) ||
      match ||
      (message.reply_message && jidToNum(message.reply_message.jid))
    if (!match) return await message.send(`*Example :* truecaller 919876543210`)
    if (match === 'token') {
      const token = await getTruecaller()
      if (!token) return await message.send(`*Your not logined*`)
      return await message.send(token, { quoted: message.quoted })
    }
    if (match === 'logout') {
      await delTruecaller()
      return await message.send(`Logged out from Truecaller.`)
    }
    const res = await truecaller.search(match)

    if (res.message) {
      return await message.send(res.message)
    }
    let msg = ''
    if (res.name) msg += `*Name :* ${res.name}\n`
    if (res.gender) msg += `*Gender :* ${res.gender}\n`
    if (res.email) msg += `*Email :* ${res.email}\n`
    msg += `*Type :* ${res.numberType}(${res.type})\n`
    msg += `*Carrier :* ${res.carrier}\n`
    msg += `*Number :* ${res.number}\n`
    if (res.city) msg += `*City :* ${res.city}\n`
    msg += `*DailingCode :* ${res.dialingCode}(${res.countryCode})`
    await message.send(msg)
  }
)
