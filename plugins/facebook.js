const { facebook, bot, generateList, isUrl } = require('../lib/')

bot(
  {
    pattern: 'fb ?(.*)',
    desc: 'Download facebook video',
    type: 'download',
  },
  async (message, match) => {
    match = isUrl(match || message.reply_message.text)
    if (!match) return await message.send('_Example : fb url_')
    const result = await facebook(match)
    if (!result.length)
      return await message.send('*Not found*', {
        quoted: message.quoted,
      })
    if (result.length == 1)
      return await message.sendFromUrl(result[0].url, { quoted: message.data })
    const list = generateList(
      result.map((e) => ({
        id: `upload ${e.url}`,
        text: e.quality,
      })),
      `*Choose Video Quality*`,
      message.jid,
      message.participant
    )
    return await message.send(list.message, {}, list.type)
    // return await message.send(
    // 	await genButtonMessage(
    // 		result.map((e) => ({
    // 			id: `upload ${e.url}`,
    // 			text: e.quality,
    // 		})),
    // 		'Choose Video Quality'
    // 	),
    // 	{},
    // 	'button'
    // )
  }
)
