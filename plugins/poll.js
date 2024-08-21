const { bot } = require('../lib/')

bot(
  {
    pattern: 'poll ?(.*)',
    desc: 'poll',
    type: 'whatsapp',
  },
  async (message, match) => {
    const poll = match.split(',')
    if (poll.length < 3) return await message.send('*Example : question,option1,option2,...*')
    const name = poll[0]
    const options = []
    for (let i = 1; i < poll.length; i++) options.push({ optionName: poll[i] })
    await message.send(
      {
        name,
        options,
        selectableOptionsCount: options.length,
      },
      {},
      'poll'
    )
  }
)
