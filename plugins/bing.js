const { bot, bing, dall3 } = require('../lib/')
bot(
  {
    pattern: 'bing ?(.*)',
    desc: 'bing ai',
    type: 'ai',
  },
  async (message, match, ctx) => {
    if (!ctx.BING_COOKIE)
      return await message.send(
        `Please set a bing cookie, log in to bing.com/chat, use bing AI chat once, and then copy the cookie.\nRead More here => https://levanter-plugins.vercel.app/faq`
      )
    match = match || message.reply_message.text
    if (!match) return await message.send('*Example : bing Hi*')
    const res = await bing(match, message.id)
    return await message.send(res, { quoted: message.data })
  }
)

bot(
  {
    pattern: 'dale ?(.*)',
    desc: 'bing image creator',
    type: 'ai',
  },
  async (message, match, ctx) => {
    if (!ctx.BING_COOKIE)
      return await message.send(
        `Please set a bing cookie, log in to https://bing.com/images/create, use bing Image Creator once, and then copy the cookie.`
      )
    if (!match)
      return await message.send(
        '*Example :* dale Create a 3D illusion for a WhatsApp profile picture where a boy in a white shirt sits casually on a royal Sofa. Wearing White sneakers,a black T-shirt, and sunglasses, he looks ahead. The background features “Arjun ” in big and capital Yellow fonts on the black wall.'
      )
    const res = await dall3(match, message.id)
    return await message.sendFromUrl(res.data)
  }
)
