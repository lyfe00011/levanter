const {
  bot,
  getFake,
  antiList,
  enableAntiFake,
  // genButtonMessage,
} = require('../lib/')

bot(
  {
    pattern: 'antifake ?(.*)',
    desc: 'set antifake',
    type: 'group',
    onlyGroup: true,
  },
  async (message, match) => {
    if (!match) {
      const fake = await getFake(message.jid, message.id)
      const onOrOff = fake && fake.enabled ? 'on' : 'off'
      return await message.send(
        `_Antifake is ${onOrOff}_\n*Example :*\nantifake list\nantifake !91,1\nantifake on | off`
      )
      // const button = await genButtonMessage(
      // 	[
      // 		{ id: 'antifake list', text: 'LIST' },
      // 		{ id: `antifake ${onOrOff}`, text: onOrOff.toUpperCase() },
      // 	],
      // 	'Example\nhttps://github.com/lyfe00011/whatsapp-bot-md/wiki/antifake',
      // 	'Antifake'
      // )
      // return await message.send(button, {}, 'button')
      // return await message.send(
      // 	await genHydratedButtons(
      // 		[
      // 			{
      // 				urlButton: {
      // 					text: 'Example',
      // 					url: 'https://github.com/lyfe00011/whatsapp-bot-md/wiki/antifake',
      // 				},
      // 			},
      // 			{ button: { id: 'antifake list', text: 'LIST' } },
      // 			{ button: { id: 'antifake on', text: 'ON' } },
      // 			{ button: { id: 'antifake off', text: 'OFF' } },
      // 		],
      // 		'Antifake'
      // 	),
      // 	{},
      // 	'template'
      // )
    }
    if (match == 'list') {
      let list = ''
      let codes = await antiList(message.jid, 'fake', message.id)
      await message.send(codes.join(','))
      codes.forEach((code, i) => {
        list += `${i + 1}. ${code}\n`
      })
      return await message.send('```' + list + '```')
    }
    if (match == 'on' || match == 'off') {
      await enableAntiFake(message.jid, match, message.id)
      return await message.send(`_Antifake ${match == 'on' ? 'Activated' : 'Deactivated'}_`)
    }
    const res = await enableAntiFake(message.jid, match, message.id)
    return await message.send(
      `_Antifake Updated_\nAllow - ${res.allow.join(', ')}\nNotAllow - ${res.notallow.join(', ')}`
    )
  }
)
