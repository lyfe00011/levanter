const { bot, pinterestSearch } = require('../lib')

bot(
	{
		pattern: 'img ?(.*)',
		fromMe: true,
		desc: 'Pinterest image search',
		type: 'search',
	},
	async (message, match) => {
		if (!match) return await message.send('*Example :  img cats*\n*img 10 cats*')
		let lim = 3
		const count = /\d+/.exec(match)
		if (count) {
			match = match.replace(count[0], '')
			lim = parseInt(count[0])
		}

		const result = await pinterestSearch(match.trim())

		if (!result || !result.length) {
			return await message.send(`_No Pinterest images found for ${match.trim()}_`)
		}

		lim = result.length > lim ? lim : result.length
		await message.send(`_Downloading ${lim} Pinterest images of ${match.trim()}_`)

		for (let i = 0; i < Math.min(lim, result.length); i++) {
			await message.sendFromUrl(result[i], { buffer: false })
		}
	}
)
