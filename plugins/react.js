const { bot } = require('../lib/')
bot(
  {
    pattern: 'react ?(.*)',
    desc: 'React to msg',
    type: 'misc',
  },
  async (message, match) => {
    if (!match || !message.reply_message) return await message.send('_Example : react ❣_')
    return await message.send(
      {
        text: match,
        key: message.reply_message.key,
      },
      {},
      'react'
    )
  }
)
