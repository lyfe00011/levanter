const {
  enableGreetings,
  setMessage,
  deleteMessage,
  bot,
  getMessage,
  // genButtonMessage,
  greetingsPreview,
  clearGreetings,
} = require('../lib/')

bot(
  {
    pattern: 'welcome ?(.*)',
    desc: 'Welcome new members',
    onlyGroup: true,
    type: 'group',
  },
  async (message, match) => {
    const welcome = await getMessage(message.jid, 'welcome', message.id)
    if (!match && !welcome) return await message.send('*Example : welcome Hi &mention*')
    if (!match) {
      await message.send(welcome.message)
      const onOrOff = welcome && welcome.enabled ? 'on' : 'off'
      return await message.send(
        `Welcome is ${onOrOff}\n\nhttps://github.com/lyfe00011/levanter/wiki/Greetings`
      )
      // const button = await genButtonMessage(
      // 	[{ id: `welcome ${onOrOff}`, text: onOrOff.toUpperCase() }],
      // 	'Example\nhttps://github.com/lyfe00011//whatsapp-bot-md/wiki/Greetings',
      // 	'Welcome'
      // )
      // return await message.send(button, {}, 'button')
      // return await message.send(
      // 	await genHydratedButtons(
      // 		[
      // 			{
      // 				urlButton: {
      // 					text: 'Example',
      // 					url: 'https://github.com/lyfe00011//whatsapp-bot-md/wiki/Greetings',
      // 				},
      // 			},
      // 			{ button: { id: 'welcome on', text: 'ON' } },
      // 			{ button: { id: 'welcome off', text: 'OFF' } },
      // 		],
      // 		'Welcome'
      // 	),
      // 	{},
      // 	'template'
      // )
    }
    if (match == 'on' || match == 'off') {
      if (!welcome) return await message.send('*Example : welcome Hi #mention*')
      await enableGreetings(message.jid, 'welcome', match, message.id)
      return await message.send(`_Welcome  ${match == 'on' ? 'Enabled' : 'Disabled'}_`)
    }
    if (match === 'delete') {
      await deleteMessage(message.jid, 'welcome', message.id)
      clearGreetings(message.jid, 'welcome', message.id)
      return await message.send('_Welcome deleted_')
    }
    await setMessage(message.jid, 'welcome', match, true, message.id)
    const { msg, options, type } = await greetingsPreview(message, 'welcome', message.id)
    await message.send(msg, options, type)
    return await message.send('_Welcome set_')
  }
)

bot(
  {
    pattern: 'goodbye ?(.*)',
    desc: 'Goodbye members',
    onlyGroup: true,
    type: 'group',
  },
  async (message, match) => {
    const welcome = await getMessage(message.jid, 'goodbye', message.id)
    if (!match && !welcome) return await message.send('*Example : goodbye Bye &mention*')
    if (!match) {
      await message.send(welcome.message)
      const onOrOff = welcome && welcome.enabled ? 'on' : 'off'
      return await message.send(
        `Goodbye is ${onOrOff}\n\nhttps://github.com/lyfe00011/levanter/wiki/Greetings`
      )

      // const button = await genButtonMessage(
      // 	[{ id: `welcome ${onOrOff}`, text: onOrOff.toUpperCase() }],
      // 	'Example\nhttps://github.com/lyfe00011//whatsapp-bot-md/wiki/Greetings',
      // 	'Goodbye'
      // )
      // return await message.send(button, {}, 'button')
      // return await message.send(
      // 	await genHydratedButtons(
      // 		[
      // 			{
      // 				urlButton: {
      // 					url: 'https://github.com/lyfe00011/whatsapp-bot-md/wiki/Greetings',
      // 					text: 'Example',
      // 				},
      // 			},
      // 			{
      // 				button: { id: 'goodbye on', text: 'ON' },
      // 			},
      // 			{ button: { id: 'goodbye off', text: 'OFF' } },
      // 		],
      // 		'Goodbye'
      // 	),
      // 	{},
      // 	'template'
      // )
    }
    if (match == 'on' || match == 'off') {
      if (!welcome) return await message.send('*Example : goodbye Bye #mention*')
      await enableGreetings(message.jid, 'goodbye', match, message.id)
      return await message.send(`_Goodbye ${match == 'on' ? 'Enabled' : 'Disabled'}_`)
    }
    if (match === 'delete') {
      await deleteMessage(message.jid, 'goodbye', message.id)
      clearGreetings(message.jid, 'goodbye', message.id)
      return await message.send('_Goodbye deleted_')
    }
    await setMessage(message.jid, 'goodbye', match, true, message.id)
    const { msg, options, type } = await greetingsPreview(message, 'goodbye', message.id)
    await message.send(msg, options, type)
    return await message.send('_Goodbye set_')
  }
)
