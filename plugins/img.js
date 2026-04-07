const { bot, pinterestSearch, lang } = require('../lib')

bot(
	{
		pattern: 'img ?(.*)',
		fromMe: true,
		desc: lang.plugins.img.desc,
		type: 'search',
	},
	async (message, match) => {
		if (!match) return await message.send(lang.plugins.img.example)
		let lim = 3
		const count = /\d+/.exec(match)
		if (count) {
			match = match.replace(count[0], '')
			lim = parseInt(count[0])
		}

		const result = await pinterestSearch(match.trim())

		if (!result || !result.length) {
			return await message.send(lang.plugins.img.no_result.format(match.trim()))
		}

		lim = result.length > lim ? lim : result.length
		await message.send(lang.plugins.img.downloading.format(lim, match.trim()))

		for (let i = 0; i < Math.min(lim, result.length); i++) {
			await message.sendFromUrl(result[i], { buffer: false })
		}
	}
)
