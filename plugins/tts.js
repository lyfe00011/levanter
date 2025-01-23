const { bot, tts } = require('../lib/')
bot(
  {
    pattern: 'tts ?(.*)',
    desc: 'text to speach',
    type: 'misc',
  },
  async (message, match, ctx) => {
    match = match || message.reply_message.text
    if (!match) return await message.send('*Example : tts Hi*\n*tts Hi {ml}*')
    let LANG = ctx.LANG
    const lang = match.match('\\{([a-z]+)\\}')
    if (lang) {
      match = match.replace(lang[0], '')
      LANG = lang[1]
    }
    await message.send(
      await tts(LANG, match),
      { ptt: true, mimetype: 'audio/ogg; codecs=opus' },
      'audio'
    )
  }
)
