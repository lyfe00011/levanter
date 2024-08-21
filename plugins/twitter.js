const { twitter, bot, generateList, isUrl } = require('../lib/')

bot(
  {
    pattern: 'twitter ?(.*)',
    desc: 'Download twitter video',
    type: 'download',
  },
  async (message, match) => {
    match = isUrl(match || message.reply_message.text)
    if (!match) return await message.send('_Example : twitter url_')
    const result = await twitter(match)
    if (!result.length)
      return await message.send('*Not found*', {
        quoted: message.quoted,
      })
    if (result.length > 1) {
      const list = generateList(
        result.map((e) => ({
          id: `upload ${e.url}`,
          text: e.quality.split('x')[0],
        })),
        '*Choose Video Quality*\n',
        message.jid,
        message.participant
      )
      return await message.send(list.message, {}, list.type)
      // return await message.send(
      // 	await genButtonMessage(
      // 		result.map((e) => ({
      // 			id: `upload ${e.url}`,
      // 			text: e.quality.split('x')[0],
      // 		})),
      // 		'Choose Video Quality'
      // 	),
      // 	{},
      // 	'button'
      // )
    }
    await message.sendFromUrl(result[0].url, { quoted: message.quoted })
  }
)
