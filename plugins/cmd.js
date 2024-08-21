const { setCmd, bot, getCmd, delCmd } = require('../lib/index')

bot(
  {
    pattern: 'setcmd ?(.*)',
    desc: 'to set cmd',
    type: 'misc',
  },
  async (message, match) => {
    if (!message.reply_message || !message.reply_message.sticker)
      return await message.send('*Reply to a sticker*')
    if (!match) return await message.send('*Example : setcmd ping*')
    const res = await setCmd(match, message.reply_message)
    return await message.send(res < 1 ? '_Failed_' : '_Success_')
  }
)

bot(
  {
    pattern: 'getcmd ?(.*)',
    desc: 'to get cmd',
    type: 'misc',
  },
  async (message, match) => {
    const res = await getCmd()
    if (!res.length) return await message.send('*Not set any cmds*')
    return await message.send('```' + res.join('\n') + '```')
  }
)

bot(
  {
    pattern: 'delcmd ?(.*)',
    desc: 'to del cmd',
    type: 'misc',
  },
  async (message, match) => {
    if (!match && (!message.reply_message || !message.reply_message.sticker))
      return await message.send('*Example :*\ndelcmd cmdName\nReply to a sticker')
    const res = await delCmd(match || message.reply_message)
    return await message.send(res < 1 ? '_Failed_' : '_Success_')
  }
)
