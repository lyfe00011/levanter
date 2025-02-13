const { bot, setVar, lang } = require('../lib/')

async function handleSetting(message, setting, match) {
  if (match === 'on' || match === 'off') {
    await setVar(
      {
        [setting]: match === 'on' ? 'true' : 'false',
      },
      message.id
    )
  }
}

bot(
  {
    pattern: 'status ?(.*)',
    desc: lang.plugins.status.desc,
    type: 'whatsapp',
  },
  async (message, match) => {
    if (!match) {
      return await message.send(lang.plugins.status.usage)
    }
    await handleSetting(message, 'AUTO_STATUS_VIEW', match)
    await message.send(lang.plugins.common.update)
  }
)

bot(
  {
    pattern: 'call ?(.*)',
    desc: lang.plugins.call.desc,
    type: 'whatsapp',
  },
  async (message, match) => {
    if (!match) {
      return await message.send(lang.plugins.call.usage)
    }
    await handleSetting(message, 'REJECT_CALL', match)
    await message.send(lang.plugins.common.update)
  }
)

bot(
  {
    pattern: 'read ?(.*)',
    desc: lang.plugins.read.desc,
    type: 'whatsapp',
  },
  async (message, match) => {
    if (!match) {
      return await message.send(lang.plugins.read.usage)
    }
    await handleSetting(message, 'SEND_READ', match)
    await message.send(lang.plugins.common.update)
  }
)

bot(
  {
    pattern: 'online ?(.*)',
    desc: lang.plugins.online.desc,
    type: 'whatsapp',
  },
  async (message, match) => {
    if (!match) {
      return await message.send(lang.plugins.online.usage)
    }
    await handleSetting(message, 'ALWAYS_ONLINE', match)
    await message.send(lang.plugins.common.update)
  }
)
