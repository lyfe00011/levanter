const { bot } = require('../lib/')
const { restartInstance } = require('../lib/pm2')
bot(
  {
    pattern: 'reboot ?(.*)',
    desc: 'restart with pm2',
    type: 'misc',
  },
  async (message, match) => {
    await message.send(`_Restarting_`)
    restartInstance()
  }
)
