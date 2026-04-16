const { bot, textMaker } = require('../lib')

bot(
	{
		pattern: 'eglow ?(.*)',
		fromMe: true,
		desc: 'Advanced glow effects',
		type: 'textmaker',
	},
	async (message, match) => {
		if (!match) return await message.send(' _Give me text_ \n 💠 *Example* - *.eglow* *Prabhath*')
		const effect_url =
			'https://en.ephoto360.com/create-glowing-text-effects-online-706.html'
		const { status, url } = await textMaker(effect_url, match)
		if (url) return await message.sendFromUrl(url)
	}
)
