const { bot, setWord, getWord, addWord, removeWord, lang } = require('../lib')

bot(
  {
    pattern: 'antiword ?(.*)',
    desc: lang.plugins.antiword.desc,
    onlyGroup: true,
    type: 'group',
  },
  async (message, match) => {
    const antiword = await getWord(message.jid, message.id)
    const status = antiword && antiword.enabled ? 'on' : 'off'
    const action = antiword && antiword.action ? antiword.action : 'null'
    const words = antiword && antiword.words ? antiword.words : ''

    if (!match) {
      return message.send(lang.plugins.antiword.example.format(status))
    }

    const cmd = match.split(' ')[0].toLowerCase()
    const args = match.slice(cmd.length).trim()

    if (cmd === 'on' || cmd === 'off') {
      await setWord(message.jid, cmd === 'on', message.id)
      return message.send(
        lang.plugins.antiword.status.format(cmd === 'on' ? lang.plugins.antiword.activated : lang.plugins.antiword.deactivated)
      )
    }

    if (['kick', 'warn', 'null'].includes(cmd)) {
      await setWord(message.jid, cmd, message.id)
      return message.send(lang.plugins.antiword.action_update.format(cmd))
    }

    if (cmd === 'add') {
      if (!args) return message.send(lang.plugins.antiword.add_prompt)
      await addWord(message.jid, args, message.id)
      return message.send(lang.plugins.antiword.added.format(args))
    }

    if (cmd === 'remove') {
      if (!args) return message.send(lang.plugins.antiword.remove_prompt)
      await removeWord(message.jid, args, message.id)
      return message.send(lang.plugins.antiword.removed.format(args))
    }

    if (cmd === 'list' || cmd === 'info') {
      if (!words) return message.send(lang.plugins.antiword.no_words)
      return message.send(
        lang.plugins.antiword.info.format(status, action, words.replace(/,/g, ', '))
      )
    }

    if (cmd === 'clear') {
      await setWord(message.jid, '', message.id)
      if (words) {
        await removeWord(message.jid, words, message.id)
      }
      return message.send(lang.plugins.antiword.cleared)
    }

    return message.send(lang.plugins.antiword.example.format(status))
  }
)
