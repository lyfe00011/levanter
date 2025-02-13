const { bot, lang, sleep } = require('../lib/')
const { restartInstance } = require('../lib/pm2')
bot(
  {
    pattern: 'reboot ?(.*)',
    desc: lang.plugins.reboot.desc,
    type: 'misc',
  },
  async (message) => {
    await message.send(lang.plugins.reboot.starting)
    await sleep(3000)
    restartInstance()
  }
)
