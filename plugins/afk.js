const { bot } = require('../lib/')

global.AFK = {
  isAfk: false,
  reason: false,
  lastseen: 0,
  p: '',
}

bot(
  {
    pattern: 'afk ?(.*)',
    desc: 'away from keyboard',
    type: 'misc',
  },
  async (message, match) => {
    if (!global.AFK.isAfk && !match)
      return await message.send(
        '> Example :\n- My owner is AFK last seen before #lastseen\n- When send a message, automatically set status to not AFK.\n- afk off'
      )
    if (!global.AFK.isAfk) {
      if (match) global.AFK.reason = match
      global.AFK.isAfk = true
      global.AFK.lastseen = Math.round(new Date().getTime() / 1000)
      global.AFK.p = message.participant
      return await message.send(
        match.replace('#lastseen', Math.round(new Date().getTime() / 1000) - global.AFK.lastseen)
      )
    }
    if (match === 'off') {
      await message.send('Im not afk anymore.', { quoted: message.data }, 'text', global.AFK.p)
      global.AFK.isAfk = false
      global.AFK.reason = false
      global.AFK.lastseen = 0
      global.AFK.p = ''
    }
  }
)
