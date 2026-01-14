const axios = require('axios')
const fs = require('fs-extra')
const path = require('path')
const {
  bot,
  parseGistUrls,
  getPlugin,
  setPlugin,
  pluginsList,
  delPlugin,
  removePlugin,
  installPlugin,
  lang,
} = require('../lib/')

bot(
  {
    pattern: 'plugin ?(.*)',
    desc: lang.plugins.plugin.desc,
    type: 'plugin',
  },
  async (message, match) => {
    match = match || message.reply_message.text
    if (!match) return await message.send(lang.plugins.plugin.usage)
    if (match == 'list') {
      const plugins = await getPlugin(message.id)
      if (!plugins) return await message.send(lang.plugins.plugin.not_installed)
      let msg = ''
      plugins.map(({ name, url }) => {
        msg += `${name} : ${url}\n`
      })
      return await message.send('```' + msg + '```')
    }
    const isValidUrl = parseGistUrls(match)
    if (!isValidUrl || isValidUrl.length < 1) {
      const { url } = await getPlugin(message.id, match)
      if (url) return await message.send(url, { quoted: message.data })
    }
    if (!isValidUrl) return await message.send(lang.plugins.plugin.invalid)
    let msg = ''

    for (const url of isValidUrl) {
      try {
        const res = await axios.get(url)
        if (res.status === 200) {
          const matchResult = /pattern: ["'](.*)["'],/g.exec(res.data)
          if (!matchResult || !matchResult[1]) {
            await message.send(lang.plugins.plugin.invalid)
            continue
          }
          const plugin_name = matchResult[1].split(' ')[0].replace(/[^a-zA-Z0-9]/g, '')
          const epluginDir = path.join(__dirname, '../eplugins/')
          fs.ensureDirSync(epluginDir)
          const pluginPath = path.join(epluginDir, `${message.id}${plugin_name}.js`)
          fs.writeFileSync(pluginPath, res.data)

          try {
            installPlugin(pluginPath, message.id)
          } catch (e) {
            await message.send(e.stack, { quoted: message.quoted })
            fs.unlinkSync(pluginPath)
            continue
          }

          await setPlugin(plugin_name, url, message.id)
          msg += `${pluginsList(res.data).join(',')}\n`
        }
      } catch (error) {
        await message.send(`${error.message}\n${url}`)
      }
    }

    await message.send(lang.plugins.plugin.installed.format(msg.trim()))
  }
)

bot(
  {
    pattern: 'remove ?(.*)',
    desc: lang.plugins.remove.desc,
    type: 'plugin',
  },
  async (message, match) => {
    if (!match) return await message.send(lang.plugins.remove.usage)
    if (match == 'all') {
      const plugins = await getPlugin(message.id)
      for (const plugin of plugins) {
        try {
          await delPlugin(plugin.name, message.id)
          removePlugin(plugin.name, message.id)
        } catch (error) { }
      }
    } else {
      const isDeleted = await delPlugin(match, message.id)
      if (!isDeleted) return await message.send(lang.plugins.remove.not_found.format(match))
      removePlugin(match, message.id)
    }
    return await message.send(lang.plugins.remove.removed)
  }
)
