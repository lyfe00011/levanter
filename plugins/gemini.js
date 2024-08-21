const config = require('../config')
const { bot, gemini } = require('../lib')

bot(
  {
    pattern: 'gemini ?(.*)',
    desc: 'google gemini',
    type: 'ai',
  },
  async (message, match) => {
    if (!config.GEMINI_API_KEY) {
      return await message.send(
        'Missing Gemini API key? Get one at https://aistudio.google.com/app/apikey.\nsetvar GEMINI_API_KEY = api_key'
      )
    }

    if (!match) {
      return await message.send(
        '*Example :*\ngemini hi\ngemini what is in the picture(reply to a image)'
      )
    }

    let image
    if (message.reply_message && message.reply_message.image) {
      image = {
        image: await message.reply_message.downloadMediaMessage(),
        mimetype: message.reply_message.mimetype,
      }
    }

    const res = await gemini(match, image)
    await message.send(res.data, { quoted: message.data })
  }
)
