const {
  enableGreetings,
  setMessage,
  deleteMessage,
  bot,
  getMessage,
  greetingsPreview,
  clearGreetings,
  lang,
} = require('../lib/')

bot(
  {
    pattern: 'welcome ?(.*)',
    desc: lang.plugins.greetings.welcome_desc,
    onlyGroup: true,
    type: 'group',
  },
  async (message, match) => {
    const welcome = await getMessage(message.jid, 'welcome', message.id)

    if (!match) {
      if (welcome) await message.send(welcome.message)
      const status = welcome && welcome.enabled ? 'on' : 'off'
      return await message.send(lang.plugins.greetings.welcome_example.format(status))
    }

    if (match === 'on' || match === 'off') {
      if (!welcome) {
        return await message.send(lang.plugins.greetings.welcome_example.format('off'))
      }
      await enableGreetings(message.jid, 'welcome', match, message.id)
      return await message.send(
        lang.plugins.greetings.update.format(
          match === 'on'
            ? lang.plugins.greetings.welcome_enable
            : lang.plugins.greetings.welcome_disable
        )
      )
    }

    if (match === 'delete') {
      await deleteMessage(message.jid, 'welcome', message.id)
      clearGreetings(message.jid, 'welcome', message.id)
      return await message.send(lang.plugins.greetings.welcome_delete)
    }

    await setMessage(message.jid, 'welcome', match, true, message.id)
    const { msg, options, type } = await greetingsPreview(message, 'welcome', message.id)
    await message.send(msg, options, type)
  }
)

bot(
  {
    pattern: 'goodbye ?(.*)',
    desc: lang.plugins.greetings.goodbye_desc,
    onlyGroup: true,
    type: 'group',
  },
  async (message, match) => {
    const goodbye = await getMessage(message.jid, 'goodbye', message.id)
    if (!match) {
      if (goodbye) await message.send(goodbye.message)
      const status = goodbye && goodbye.enabled ? 'on' : 'off'
      return await message.send(lang.plugins.greetings.goodbye_example.format(status))
    }

    if (match === 'on' || match === 'off') {
      if (!goodbye) {
        return await message.send(lang.plugins.greetings.goodbye_example.format('off'))
      }
      await enableGreetings(message.jid, 'goodbye', match, message.id)
      return await message.send(
        match === 'on'
          ? lang.plugins.greetings.goodbye_enable
          : lang.plugins.greetings.goodbye_disable
      )
    }

    if (match === 'delete') {
      await deleteMessage(message.jid, 'goodbye', message.id)
      clearGreetings(message.jid, 'goodbye', message.id)
      return await message.send(lang.plugins.greetings.goodbye_delete)
    }

    await setMessage(message.jid, 'goodbye', match, true, message.id)
    const { msg, options, type } = await greetingsPreview(message, 'goodbye', message.id)
    await message.send(msg, options, type)
  }
)
