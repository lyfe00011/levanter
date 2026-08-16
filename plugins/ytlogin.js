const { bot, startYtLogin, clearYtCreds, isYtLoggedIn, lang } = require('../lib/')

bot(
  {
    pattern: 'ytlogin ?(.*)',
    desc: lang.plugins.ytlogin.desc,
    type: 'bot',
  },
  async (message, match) => {
    const cmd = (match || '').trim().toLowerCase()

    if (cmd === 'status') {
      return message.send(
        (await isYtLoggedIn(message.id)) ? lang.plugins.ytlogin.status_in : lang.plugins.ytlogin.status_out
      )
    }

    if (cmd === 'logout') {
      await clearYtCreds(message.id)
      return message.send(lang.plugins.ytlogin.logout)
    }

    try {
      await startYtLogin(message.id, async (data) => {
        const url = data.verification_url || data.verification_uri || 'https://www.google.com/device'
        await message.send(lang.plugins.ytlogin.prompt.format(url, data.user_code))
      })
      return message.send(lang.plugins.ytlogin.success)
    } catch (error) {
      return message.send(lang.plugins.ytlogin.failed.format(error.message))
    }
  }
)
