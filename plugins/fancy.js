const { bot, textToStylist, fontType, stylishTextGen } = require('../lib')
bot(
  {
    pattern: 'fancy ?(.*)',
    desc: 'Creates fancy text from given text',
    type: 'misc',
  },
  async (message, match) => {
    if (
      !match ||
      (message.reply_message.text && (!match || isNaN(match) || match < 1 || match > 47))
    )
      return await message.send('*Example :*\nfancy Hi\nfancy 7 replying text msg')
    if (message.reply_message.text) {
      return await message.send(textToStylist(message.reply_message.text, fontType(match)))
    }
    return await message.send(stylishTextGen(match))
  }
)
