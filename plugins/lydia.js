const { setLydia, bot } = require('../lib/')

bot(
  {
    pattern: 'lydia ?(.*)',
    desc: 'to on off chat bot',
    type: 'misc',
  },
  async (message, match) => {
    if (!match)
      return await message.send(
        '*Example : lydia on | off*\n_reply or mention to activate for a person only._'
      )
    const user = message.mention[0] || message.reply_message.jid
    if (message.mention) {
      match = match.replace(`@${jidToNum(user)}`, '').trim()
    }
    await setLydia(message.jid, match == 'on', user, message.id)
    await message.send(
      `_Lydia ${match == 'on' ? 'Activated' : 'Deactivated'}_\n*Only works from reply msg.`
    )
  }
)
