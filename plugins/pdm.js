const {
  bot,
  setPdm,
  // genButtonMessage
} = require('../lib/')

bot(
  {
    pattern: 'pdm ?(.*)',
    desc: 'To manage promote demote alert',
    type: 'group',
    onlyGroup: true,
  },
  async (message, match) => {
    if (!match) return await message.send('*Promote demote message*\npdm on | off')
    // await message.send(
    // 	await genButtonMessage(
    // 		[
    // 			{ id: 'pdm on', text: 'ON' },
    // 			{ id: 'pdm off', text: 'OFF' },
    // 		],
    // 		'Promote Demote Message'
    // 	),
    // 	{},
    // 	'button'
    // )
    if (match == 'on' || match == 'off') {
      await setPdm(message.jid, match, message.id)
      await message.send(`_pdm ${match == 'on' ? 'Activated' : 'Deactivated'}_`)
    }
  }
)
