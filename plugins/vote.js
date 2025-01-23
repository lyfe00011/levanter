const { bot, newVote, participateInVote, sleep } = require('../lib/')

bot({ on: 'text', fromMe: false, type: 'vote' }, async (message, match) => {
  const msg = await participateInVote(message)
  if (msg) return await message.send(msg.text, msg.option)
})

bot(
  {
    pattern: 'vote ?(.*)',
    desc: 'vote in whatsapp',
    type: 'group',
  },
  async (message, match) => {
    const [msg, jids] = await newVote(message, match)
    if (!jids) return await message.send(msg)
    for (const jid of jids) {
      await message.send(msg, {}, 'text', jid)
      await sleep(5 * 1000)
    }
  }
)
