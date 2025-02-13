const {
  addSpace,
  textToStylist,
  getUptime,
  getRam,
  getDate,
  getPlatform,
  bot,
  lang,
} = require('../lib/')
bot(
  {
    pattern: 'help ?(.*)',
    dontAddCommandList: true,
  },
  async (message, match, ctx) => {
    const sorted = ctx.commands
      .slice()
      .sort((a, b) => (a.name && b.name ? a.name.localeCompare(b.name) : 0))

    const [date, time] = getDate()

    const CMD_HELP = [
      lang.plugins.menu.help.format(
        ctx.PREFIX,
        message.pushName,
        time,
        date.toLocaleString('en', { weekday: 'long' }),
        date.toLocaleDateString('hi'),
        ctx.VERSION,
        ctx.pluginsCount,
        getRam(),
        getUptime('t'),
        getPlatform()
      ),
      '╭────────────────',
    ]

    sorted.forEach((command, i) => {
      if (!command.dontAddCommandList && command.pattern !== undefined) {
        CMD_HELP.push(
          `│ ${i + 1} ${addSpace(i + 1, sorted.length)}${textToStylist(
            command.name.toUpperCase(),
            'mono'
          )}`
        )
      }
    })

    CMD_HELP.push('╰────────────────')

    return await message.send(CMD_HELP.join('\n'))
  }
)

bot(
  {
    pattern: 'list ?(.*)',
    dontAddCommandList: true,
  },
  async (message, match, ctx) => {
    const sorted = ctx.commands
      .slice()
      .sort((a, b) => (a.name && b.name ? a.name.localeCompare(b.name) : 0))

    const commandList = sorted
      .filter((command) => !command.dontAddCommandList && command.pattern !== undefined)
      .map((command) => `- *${command.name}*\n${command.desc}\n`)
      .join('\n')

    await message.send(commandList)
  }
)
bot(
  {
    pattern: 'menu ?(.*)',
    dontAddCommandList: true,
  },
  async (message, match, ctx) => {
    const commands = {}

    ctx.commands.forEach((command) => {
      if (!command.dontAddCommandList && command.pattern !== undefined) {
        let cmdType = command.type.toLowerCase()
        if (!commands[cmdType]) commands[cmdType] = []

        let isDisabled = command.active === false
        let cmd = command.name.trim()
        commands[cmdType].push(isDisabled ? `${cmd} [disabled]` : cmd)
      }
    })

    const sortedCommandKeys = Object.keys(commands).sort()

    const [date, time] = getDate()
    let msg = lang.plugins.menu.menu.format(
      ctx.PREFIX,
      message.pushName,
      time,
      date.toLocaleString('en', { weekday: 'long' }),
      date.toLocaleDateString('hi'),
      ctx.VERSION,
      ctx.pluginsCount,
      getRam(),
      getUptime('t'),
      getPlatform()
    )

    msg += '\n'

    if (match && commands[match]) {
      msg += ` ╭─❏ ${textToStylist(match.toLowerCase(), 'smallcaps')} ❏\n`
      commands[match]
        .sort((a, b) => a.localeCompare(b))
        .forEach((plugin) => {
          msg += ` │ ${textToStylist(plugin.toUpperCase(), 'mono')}\n`
        })
      msg += ` ╰─────────────────`
      return await message.send(msg)
    }

    for (const command of sortedCommandKeys) {
      msg += ` ╭─❏ ${textToStylist(command.toLowerCase(), 'smallcaps')} ❏\n`
      commands[command]
        .sort((a, b) => a.localeCompare(b))
        .forEach((plugin) => {
          msg += ` │ ${textToStylist(plugin.toUpperCase(), 'mono')}\n`
        })
      msg += ` ╰─────────────────\n`
    }

    await message.send(msg.trim())
  }
)
