const {
  bot,
  setWord,
  getWord,
  // genButtonMessage
} = require('../lib')

const actions = ['null', 'warn', 'kick']

bot(
  {
    pattern: 'antiword ?(.*)',
    desc: 'filter the group chat',
    onlyGroup: true,
    type: 'group',
  },
  async (message, match) => {
    if (!match || (match != 'on' && match != 'off' && !match.startsWith('action'))) {
      const { enabled, action } = await getWord(message.jid)
      return await message.send(
        `_Antiword is ${
          enabled ? 'on' : 'off'
        } (${action})_\n*Example :*\nantiword action/(kick|warn|null)\nantiword on | off\nsetvar ANTIWORDS:word1,word2`
      )
      // const buttons = actions
      // 	.filter((e) => e != action)
      // 	.map((button) => ({
      // 		text: button,
      // 		id: `antiword action/${button}`,
      // 	}))
      // buttons.push({
      // 	text: enabled ? 'OFF' : 'ON',
      // 	id: `antiword ${enabled ? 'off' : 'on'}`,
      // })
      // return await message.send(
      // 	await genButtonMessage(
      // 		buttons,
      // 		'AntiWord\nExample : antiword on/off\nantiword action/null or kick or warn\nsetvar ANTIWORDS:word1,word2,...'
      // 	),
      // 	{},
      // 	'button'
      // )
    }
    if (match.startsWith('action/')) {
      const action = match.replace('action/', '')
      if (!actions.includes(action)) return await message.send(`${action} _is a invalid action_`)
      await setWord(message.jid, action)
      return await message.send(`_antiword action updated as ${action}_`)
    }
    await setWord(message.jid, match == 'on')
    await message.send(`_AntiWord ${match == 'on' ? 'activated' : 'deactivated.'}_`)
  }
)
