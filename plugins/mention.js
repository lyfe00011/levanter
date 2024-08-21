const {
  bot,
  // genButtonMessage,
  mentionMessage,
  enableMention,
  clearFiles,
  getMention,
} = require('../lib/')

bot(
  {
    pattern: 'mention ?(.*)',
    desc: 'To set and Manage mention',
    type: 'misc',
  },
  async (message, match) => {
    if (!match) {
      const mention = await getMention()
      const onOrOff = mention && mention.enabled ? 'on' : 'off'
      return await message.send(
        `Mention is ${onOrOff}\n\nhttps://github.com/lyfe00011/levanter/wiki/mention_example`
      )

      // const button = await genButtonMessage(
      // 	[
      // 		{ id: 'mention get', text: 'GET' },
      // 		{ id: `mention ${onOrOff}`, text: onOrOff.toUpperCase() },
      // 	],
      // 	'Example\nhttps://github.com/lyfe00011//whatsapp-bot-md/wiki/mention_example',
      // 	'Mention'
      // )
      // return await message.send(button, {}, 'button')
      // return await message.send(
      // 	await genHydratedButtons(
      // 		[
      // 			{
      // 				urlButton: {
      // 					text: 'example',
      // 					url: 'https://github.com/lyfe00011//whatsapp-bot-md/wiki/mention_example',
      // 				},
      // 			},
      // 			{ button: { id: 'mention on', text: 'ON' } },
      // 			{ button: { id: 'mention off', text: 'OFF' } },
      // 			{ button: { id: 'mention get', text: 'GET' } },
      // 		],
      // 		'Mention Msg Manager'
      // 	),
      // 	{},
      // 	'template'
      // )
    }
    if (match == 'get') {
      const msg = await mentionMessage()
      if (!msg) return await message.send('_Reply to Mention not Activated._')
      return await message.send(msg)
    } else if (match == 'on' || match == 'off') {
      await enableMention(match == 'on')
      return await message.send(`_Reply to mention ${match == 'on' ? 'Activated' : 'Deactivated'}_`)
    }
    await enableMention(match)
    clearFiles()
    return await message.send('_Mention Updated_')
  }
)
