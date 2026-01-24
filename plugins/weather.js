const { bot, getJson, getFloor, lang } = require('../lib/')
const moment = require('moment')
bot(
	{
		pattern: 'weather ?(.*)',
		desc: lang.plugins.weather.desc,
		type: 'search',
	},
	async (message, match) => {
		if (!match) return await message.send(lang.plugins.weather.usage)
		const data = await getJson(
			`http://api.openweathermap.org/data/2.5/weather?q=${match}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273&language=en`
		).catch(() => { })
		if (!data) return await message.send(lang.plugins.weather.not_found.format(match))
		const { name, timezone, sys, main, weather, visibility, wind } = data
		const degree = [
			'N',
			'NNE',
			'NE',
			'ENE',
			'E',
			'ESE',
			'SE',
			'SSE',
			'S',
			'SSW',
			'SW',
			'WSW',
			'W',
			'WNW',
			'NW',
			'NNW',
		][getFloor(wind.deg / 22.5 + 0.5) % 16]
		return await message.send(
			lang.plugins.weather.report.format(
				name,
				sys.country,
				weather[0].description,
				getFloor(main.temp),
				getFloor(main.feels_like),
				main.humidity,
				visibility,
				wind.speed,
				degree,
				moment.utc(sys.sunrise, 'X').add(timezone, 'seconds').format('hh:mm a'),
				moment.utc(sys.sunset, 'X').add(timezone, 'seconds').format('hh:mm a')
			)
		)
	}
)
