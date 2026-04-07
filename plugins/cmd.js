const { setCmd, bot, getCmd, delCmd, lang } = require('../lib/index')

bot(
  {
    pattern: 'setcmd ?(.*)',
    desc: lang.plugins.cmd.desc_set,
    type: 'misc',
  },
  async (message, match) => {
    if (!message.reply_message || !message.reply_message.sticker)
      return await message.send(lang.plugins.cmd.reply_to_sticker)
    if (!match) return await message.send(lang.plugins.cmd.example_set)
    const res = await setCmd(match, message.reply_message, message.id)
    return await message.send(res < 1 ? lang.plugins.cmd.failed : lang.plugins.cmd.success)
  }
)

bot(
  {
    pattern: 'getcmd ?(.*)',
    desc: lang.plugins.cmd.desc_get,
    type: 'misc',
  },
  async (message, match) => {
    const res = await getCmd(message.id)
    if (!res.length) return await message.send(lang.plugins.cmd.not_set)
    return await message.send('```' + res.join('\n') + '```')
  }
)

bot(
  {
    pattern: 'delcmd ?(.*)',
    desc: lang.plugins.cmd.desc_del,
    type: 'misc',
  },
  async (message, match) => {
    if (!match && (!message.reply_message || !message.reply_message.sticker))
      return await message.send(lang.plugins.cmd.example_del)
    const res = await delCmd(match || message.reply_message, message.id)
    return await message.send(res < 1 ? lang.plugins.cmd.failed : lang.plugins.cmd.success)
  }
)
