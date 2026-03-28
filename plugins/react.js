const { bot, parseNewsLetterJId, lang, formatDate } = require('../lib/')
bot(
	{
		pattern: 'react ?(.*)',
		desc: 'React to msg',
		type: 'whatsapp',
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
		desc: 'React to channel',
		type: 'whatsapp',
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

bot(
	{
		pattern: 'cinfo ?(.*)',
		desc: 'Get channel info',
		type: 'whatsapp',
	},
	async (message, match) => {
		const url = match || (message.reply_message && message.reply_message.text)
		if (!url) return await message.send('_Example : cinfo https://whatsapp.com/channel/xxx')
		const res = parseNewsLetterJId(url)
		if (!res) return await message.send('_Invalid channel URL_')
		const { channelId } = res
		const metadata = await message.getChannelMetadata(channelId)
		if (!metadata) return await message.send('_Could not fetch channel metadata_')
		const { id, thread_metadata } = metadata
		const name = thread_metadata?.name?.text
		const subscribers = thread_metadata?.subscribers_count
		const verification = thread_metadata?.verification
		const creation_time = thread_metadata?.creation_time
		const description = thread_metadata?.description?.text

		let msg = `*Name :* ${name}\n`
		msg += `*Jid :* ${id}\n`
		if (subscribers) msg += `*Subscribers :* ${subscribers}\n`
		if (verification) msg += `*Verification :* ${verification}\n`
		if (creation_time)
			msg += `*Creation :* ${formatDate(creation_time * 1000)}\n`
		if (description) msg += `*Description :* ${description}`
		return await message.send(msg)
	}
)