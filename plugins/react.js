const { bot, parseNewsLetterJId } = require('../lib/')
bot(
	{
		pattern: 'react ?(.*)',
		fromMe: true,
		desc: 'React to msg',
		type: 'misc',
	},
	async (message, match) => {
		if (!match || !message.reply_message)
			return await message.send('_Example : react ❣_')
		return await message.send(
			{
				text: match,
				key: message.reply_message.key,
			},
			{},
			'react'
		)
	}
)

bot(
	{
		pattern: 'creact ?(.*)',
		fromMe: true,
		desc: 'React to channel',
		type: 'misc',
	},
	async (message, match) => {
		const [url, react] = match.split(',')
		if (!url || !react) {
			return await message.send('_Example : creact https://whatsapp.com/channel/xxx/xxx, ❣_')
		}
		const { channelId, serverId } = parseNewsLetterJId(url)
		console.log(channelId, serverId)
		await message.newsletterReactMessage(channelId, serverId, react)
	}
)