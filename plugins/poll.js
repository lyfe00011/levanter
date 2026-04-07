const { bot, lang } = require('../lib/')

bot(
	{
		pattern: 'poll ?(.*)',
		fromMe: true,
		desc: lang.plugins.poll.desc,
		type: 'whatsapp',
	},
	async (message, match) => {
		const poll = match.split(',')
		if (poll.length < 3)
			return await message.send(lang.plugins.poll.example)
		const name = poll[0]
		const options = []
		for (let i = 1; i < poll.length; i++) options.push({ optionName: poll[i] })
		await message.send(
			{
				name,
				options,
				selectableOptionsCount: 1,
			},
			{},
			'poll'
		)
	}
)
