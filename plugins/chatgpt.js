const { bot, getGPTResponse, getDallEResponse } = require('../lib')

bot(
  {
    pattern: 'gpt ?(.*)',
    desc: 'ChatGPT fun',
    type: 'AI',
  },
  async (message, match) => {
    match = match || message.reply_message.text
    if (!match) return await message.send('*Example : gpt What is the capital of France?*')
    const res = await getGPTResponse(match)
    await message.send(res, { quoted: message.data })
  }
)

bot(
  {
    pattern: 'dall ?(.*)',
    desc: 'dall image generator',
    type: 'AI',
  },
  async (message, match) => {
    if (!match)
      return await message.send(
        '*Example : dall a close up, studio photographic portrait of a white siamese cat that looks curious, backlit ears*'
      )
    const res = await getDallEResponse(match)
    await message.sendFromUrl(res)
  }
)
