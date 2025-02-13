const { bot, textToStylist, fontType, stylishTextGen, lang } = require('../lib')

bot(
  {
    pattern: 'fancy ?(.*)',
    fromMe: true,
    desc: lang.plugins.fancy.desc,
    type: 'misc',
  },
  async (message, match) => {
    const replyText = message.reply_message?.text

    if (!match && !replyText) {
      return message.send(lang.plugins.fancy.example)
    }

    if (replyText && (isNaN(match) || match < 1 || match > 47)) {
      return message.send(lang.plugins.fancy.invalid)
    }

    const fancyText = replyText ? textToStylist(replyText, fontType(match)) : stylishTextGen(match)

    return message.send(fancyText)
  }
)
