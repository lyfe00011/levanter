const { bot, parseNewsLetterJId, lang, formatDate } = require('../lib/')
bot(
	{
		pattern: 'react ?(.*)',
		desc: lang.plugins.react.desc,
		type: 'whatsapp',
	},
	async (message, match) => {
		if (!match || !message.reply_message)
			return await message.send(lang.plugins.react.example)
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
		desc: lang.plugins.react.channel_desc,
		type: 'whatsapp',
	},
	async (message, match) => {
		const [url, react] = match.split(',')
		if (!url || !react) {
			return await message.send(lang.plugins.react.channel_example)
		}
		const { channelId, serverId } = parseNewsLetterJId(url)
		console.log(channelId, serverId)
		await message.newsletterReactMessage(channelId, serverId, react)
	}
)

bot(
	{
		pattern: 'cinfo ?(.*)',
		desc: lang.plugins.react.info_desc,
		type: 'whatsapp',
	},
	async (message, match) => {
		const url = match || (message.reply_message && message.reply_message.text)
		if (!url) return await message.send(lang.plugins.react.info_example)
		const res = parseNewsLetterJId(url)
		if (!res) return await message.send(lang.plugins.react.invalid_url)
		const { channelId } = res
		const metadata = await message.getChannelMetadata(channelId)
		if (!metadata) return await message.send(lang.plugins.react.metadata_failed)
		const { id, thread_metadata } = metadata
		const name = thread_metadata?.name?.text
		const subscribers = thread_metadata?.subscribers_count
		const verification = thread_metadata?.verification
		const creation_time = thread_metadata?.creation_time
		const description = thread_metadata?.description?.text

		let msg = `${lang.plugins.react.name} ${name}\n`
		msg += `${lang.plugins.react.jid} ${id}\n`
		if (subscribers) msg += `${lang.plugins.react.subscribers} ${subscribers}\n`
		if (verification) msg += `${lang.plugins.react.verification} ${verification}\n`
		if (creation_time)
			msg += `${lang.plugins.react.creation} ${formatDate(creation_time * 1000)}\n`
		if (description) msg += `${lang.plugins.react.description} ${description}`
		return await message.send(msg)
	}
)