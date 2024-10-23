const {
  bot,
  isAdmin,
  setMute,
  addTask,
  // genButtonMessage,
  c24to12,
  getMute,
} = require('../lib')

bot(
  {
    pattern: 'amute ?(.*)',
    desc: 'auto group mute scheduler',
    type: 'group',
    onlyGroup: true,
  },
  async (message, match) => {
    const participants = await message.groupMetadata(message.jid)
    const isImAdmin = await isAdmin(participants, message.client.user.jid)
    if (!isImAdmin) return await message.send(`_I'm not admin._`)
    let msg = message.reply_message.text || 'null'
    const [hour, min] = match.split(' ')
    if (hour == 'info') {
      const task = await getMute(message.jid, 'mute', message.id)
      if (!task) return await message.send('_Not Found AutoMute_')
      const { hour, minute, msg, enabled } = task
      return await message.send(
        `*Hour :* ${hour}\n*Minute :* ${minute}\n*Time :* ${c24to12(
          `${hour}:${minute}`
        )}\n*Mute :* ${enabled ? 'on' : 'off'}\nMessage : ${msg}`
      )
    }
    if (hour == 'on' || hour == 'off') {
      const isMute = await setMute(message.jid, 'mute', hour == 'on', message.id)
      if (!isMute) return await message.send('_Not Found AutoMute')
      const task = await getMute(message.jid, 'mute', message.id)
      if (!task || !task.hour) return await message.send('_Not Found AutoMute_')
      const isTask = addTask(
        message.jid,
        'mute',
        hour == 'off' ? 'off' : task.hour,
        task.minute,
        task.msg,
        message.id
      )
      if (!isTask) return await message.send('_AutoMute Already Disabled_')
      return await message.send(`_AutoMute ${hour == 'on' ? 'Enabled' : 'Disabled'}._`)
    }
    if (!hour || !min || isNaN(hour) || isNaN(min))
      return await message.send(
        '*Example : amute 6 0*\namute on | off\namute list\nReply to a text to send Msg on mute'
      )
    // return await message.send(
    // 	await genButtonMessage(
    // 		[
    // 			{ id: 'amute on', text: 'ON' },
    // 			{ id: 'amute off', text: 'OFF' },
    // 			{ id: 'amute info', text: 'INFO' },
    // 		],
    // 		'*Example : amute 6 0*\namute info\namute on/off\nReply to a text to set Msg'
    // 	),
    // 	{},
    // 	'button'
    // )
    await setMute(message.jid, 'mute', true, message.id, hour, min, msg)
    addTask(message.jid, 'mute', hour, min, msg, message.id)

    return await message.send(
      `_Group will Mute at ${c24to12(`${hour}:${min}`)}_${
        msg != 'null' ? `\n_Message: ${msg}_` : ''
      }`
    )
  }
)

bot(
  {
    pattern: 'aunmute ?(.*)',
    desc: 'auto group unmute scheduler',
    type: 'group',
    onlyGroup: true,
  },
  async (message, match) => {
    const participants = await message.groupMetadata(message.jid)
    const isImAdmin = await isAdmin(participants, message.client.user.jid)
    if (!isImAdmin) return await message.send(`_I'm not admin._`)
    let msg = message.reply_message.text || 'null'
    const [hour, min] = match.split(' ')
    if (hour == 'info') {
      const task = await getMute(message.jid, 'unmute', message.id)
      if (!task || !task.hour) return await message.send('_Not Found AutoUnMute_')
      const { hour, minute, msg, enabled } = task
      return await message.send(
        `*Hour :* ${hour}\n*Minute :* ${minute}\n*Time :* ${c24to12(
          `${hour}:${minute}`
        )}\n*unMute :* ${enabled ? 'on' : 'off'}\nMessage : ${msg}`
      )
    }
    if (hour == 'on' || hour == 'off') {
      const isMute = await setMute(message.jid, 'unmute', hour == 'on', message.id)
      if (!isMute) return await message.send('_Not Found AutoUnMute_')
      const task = await getMute(message.jid, 'unmute', message.id)
      if (!task) return await message.send('_Not Found AutoUnMute_')
      const isTask = addTask(
        message.jid,
        'unmute',
        hour == 'off' ? 'off' : task.hour,
        task.minute,
        task.msg,
        message.id
      )
      if (!isTask) return await message.send('_AutoUnMute Already Disabled_')
      return await message.send(`_AutoUnMute ${hour == 'on' ? 'Enabled' : 'Disabled'}._`)
    }
    if (!hour || !min || isNaN(hour) || isNaN(min))
      return await message.send(
        '*Example : aunmute 16 30*\naunmute on | off\naunmute list\nReply to a text to send Msg on unmute'
      )
    // return await message.send(
    // 	await genButtonMessage(
    // 		[
    // 			{ id: 'aunmute on', text: 'ON' },
    // 			{ id: 'aunmute off', text: 'OFF' },
    // 			{ id: 'aunmute info', text: 'INFO' },
    // 		],
    // 		'*Example : aunmute 6 0*\naunmute info\naunmute on/off\nReply to a text to set Msg'
    // 	),
    // 	{},
    // 	'button'
    // )
    await setMute(message.jid, 'unmute', true, message.id, hour, min, msg)
    addTask(message.jid, 'unmute', hour, min, msg, message.id)
    return await message.send(
      `_Group will unMute at ${c24to12(`${hour}:${min}`)}_${
        msg != 'null' ? `\n_Message: ${msg}_` : ''
      }`
    )
  }
)
