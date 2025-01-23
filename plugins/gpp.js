const { bot, isAdmin } = require('../lib/')

bot(
	{
		pattern: 'gpp ?(.*)',
		desc: 'change group icon',
		type: 'group',
		onlyGroup: true,
	},
	async (message, match) => {
		const isRestrict = await message.groupMetadata(message.jid, 'restrict')
		if (isRestrict) {
			const participants = await message.groupMetadata(message.jid)
			const isImAdmin = await isAdmin(participants, message.client.user.jid)
			if (!isImAdmin) return await message.send(`_I'm not admin._`)
		}
		if (!message.reply_message || !message.reply_message.image)
			return await message.send('*Reply to a image.*')
		await message.updateProfilePicture(
			await message.reply_message.downloadMediaMessage(),
			message.jid
		)
		return await message.send('_Group icon Updated_')
	}
)
