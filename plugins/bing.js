const { bot, bing, dall3, lang } = require('../lib/')
bot(
  {
    pattern: 'bing ?(.*)',
    desc: lang.plugins.bing.desc,
    type: 'ai',
  },
  async (message, match, ctx) => {
    match = match || message.reply_message.text
    if (!match) return await message.send(lang.plugins.bing.example)
    const res = await bing(match, message.id)
    return await message.send(res, { quoted: message.data })
  }
)

// bot(
//   {
//     pattern: 'dale ?(.*)',
//     desc: lang.plugins.bing.dale_desc,
//     type: 'ai',
//   },
//   async (message, match, ctx) => {
//     if (!ctx.BING_COOKIE)
//       return await message.send(lang.plugins.bing.dale_cookie_prompt)
//     if (!match)
//       return await message.send(lang.plugins.bing.dale_example)
//     const res = await dall3(match, message.id)
//     return await message.sendFromUrl(res.data)
//   }
// )
