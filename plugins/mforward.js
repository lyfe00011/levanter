const {
	forwardOrBroadCast,
	bot,
	parsedJid,
	getBuffer,
	genThumbnail,
} = require('../lib/')

const url1 = 'https://randomuser.me/api/portraits/men/75.jpg' // Random mugshot-style image

bot(
	{
		pattern: 'mforward ?(.*)',
		fromMe: true,
		desc: 'forward replied msg',
		type: 'misc',
	},
	async (message, match) => {
		if (!message.reply_message)
			return await message.send('*Reply to a message*')
		if (!match)
			return await message.send(
				'*Give me a jid*\nExample .mforward jid1 jid2 jid3 jid4 ...'
			)

		const buff1 = await getBuffer(url1)
		const options = {}
		options.contextInfo = {
			forwardingScore: 5,
			isForwarded: true,
		}

		options.linkPreview = {
			head: 'ERROR', // Changed here
			body: '❣',
			mediaType: 2,
			thumbnail: buff1.buffer,
			sourceUrl: 'https://www.github.com/lyfe00011/whatsapp-bot-md/wiki',
		}

		options.quoted = {
			key: {
				fromMe: false,
				participant: '0@s.whatsapp.net',
				remoteJid: 'status@broadcast',
			},
			message: {
				imageMessage: {
					jpegThumbnail: await genThumbnail(buff1.buffer),
					caption: 'Hi', // Changed here
				},
			},
		}

		if (message.reply_message.audio) {
			options.waveform = [90, 60, 88, 45, 0, 0, 0, 45, 88, 28, 9]
			options.duration = 999999
			options.ptt = true
		}

		for (const jid of parsedJid(match))
			await forwardOrBroadCast(jid, message, options)
	}
)
