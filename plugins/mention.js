const { bot, mentionMessage, enableMention, clearFiles, getMention, lang } = require('../lib/')

bot(
  {
    pattern: 'mention ?(.*)',
    desc: lang.plugins.mention.desc,
    type: 'misc',
  },
  async (message, match) => {
    if (!match) {
      const mention = await getMention(message.id)
      const onOrOff = mention && mention.enabled ? 'on' : 'off'
      return await message.send(lang.plugins.mention.current_status.format(onOrOff))
    }

    if (match === 'get') {
      const msg = await mentionMessage(message.id)
      if (!msg) return await message.send(lang.plugins.mention.not_activated)
      return await message.send(msg)
    }

    if (match === 'on' || match === 'off') {
      await enableMention(match === 'on', message.id)
      return await message.send(
        match === 'on' ? lang.plugins.mention.activated : lang.plugins.mention.deactivated
      )
    }

    await enableMention(match, message.id)
    clearFiles()
    return await message.send(lang.plugins.mention.updated)
  }
)
