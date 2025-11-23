const { bot, setSpam, getSpam, setAntiSpamLevel, setAntiSpamAction, lang } = require('../lib')
const { SPAM_LEVELS, VALID_LEVELS, VALID_ACTIONS } = require('../lib/constants/spam')

bot(
  {
    pattern: 'antispam ?(.*)',
    desc: lang.plugins.antispam.desc,
    onlyGroup: true,
    type: 'group',
  },
  async (message, match) => {
    const jid = message.jid
    const args = match?.trim().split(/\s+/) || []
    const command = args[0]?.toLowerCase() || ''

    if (command === 'info') {
      const settings = await getSpam(jid, message.id)
      if (!settings || !settings.enabled) {
        return await message.send(lang.plugins.antispam.disabled_status)
      }

      const { level, action } = settings
      const thresholds = SPAM_LEVELS[level] || SPAM_LEVELS.medium
      const statusEmoji = '🟢'

      const infoMsg = lang.plugins.antispam.info_status
        .replace('{status}', `${statusEmoji} *Enabled*`)
        .replace('{level}', level.charAt(0).toUpperCase() + level.slice(1))
        .replace('{action}', action.charAt(0).toUpperCase() + action.slice(1))

      return await message.send(infoMsg)
    }

    if (command === 'off') {
      await setSpam(jid, false, null, null, message.id)
      return await message.send(lang.plugins.antispam.deactivated)
    }

    if (command === 'on') {
      const level = args[1]?.toLowerCase() || 'medium'

      if (level !== 'medium' && !VALID_LEVELS.includes(level)) {
        return await message.send(lang.plugins.antispam.invalid_level)
      }

      await setSpam(jid, true, level, 'kick', message.id)
      const thresholds = SPAM_LEVELS[level] || SPAM_LEVELS.medium

      const activatedMsg = lang.plugins.antispam.activated
        .replace('{level}', level.charAt(0).toUpperCase() + level.slice(1))
        .replace('{description}', thresholds.description)
        .replace('{action}', 'Kick')

      return await message.send(activatedMsg)
    }

    if (VALID_LEVELS.includes(command)) {
      await setAntiSpamLevel(jid, command, message.id)
      const thresholds = SPAM_LEVELS[command]

      const levelMsg = lang.plugins.antispam.level_set
        .replace('{level}', command.charAt(0).toUpperCase() + command.slice(1))

      return await message.send(levelMsg)
    }

    if (VALID_ACTIONS.includes(command)) {
      await setAntiSpamAction(jid, command, message.id)

      const settings = await getSpam(jid, message.id)
      const level = settings?.level || 'medium'

      const actionDescMap = {
        warn: lang.plugins.antispam.action_warn,
        delete: lang.plugins.antispam.action_delete,
        kick: lang.plugins.antispam.action_kick
      }

      const actionMsg = lang.plugins.antispam.action_set
        .replace('{action_desc}', actionDescMap[command])
        .replace('{level}', level.charAt(0).toUpperCase() + level.slice(1))
        .replace('{action}', command.charAt(0).toUpperCase() + command.slice(1))

      return await message.send(actionMsg)
    }

    return await message.send(lang.plugins.antispam.help)
  }
)
