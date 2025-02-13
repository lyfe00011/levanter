const { bot, lang } = require('../lib/')
const jimp = require('jimp')
const QRReader = require('qrcode-reader')

bot({ pattern: 'qr ?(.*)', desc: lang.plugins.qr.desc, type: 'misc' }, async (message, match) => {
  if (match)
    return await message.sendFromUrl(
      `https://levanter.onrender.com/gqr?text=${encodeURIComponent(match)}`
    )
  if (!message.reply_message || !message.reply_message.image)
    return await message.send(lang.plugins.qr.usage)

  const { bitmap } = await jimp.read(await message.reply_message.downloadMediaMessage())
  const qr = new QRReader()
  qr.callback = (err, value) => message.send(err ?? value.result, { quoted: message.data })
  qr.decode(bitmap)
})
