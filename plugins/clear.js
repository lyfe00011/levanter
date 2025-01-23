const { bot } = require('../lib/')

bot(
	{
		pattern: 'clear ?(.*)',
		desc: 'delete whatsapp chat',
		type: 'whatsapp',
	},
	async (message, match) => {
		await message.clearChat(message.jid)
		await message.send('_Cleared_')
	}
)
