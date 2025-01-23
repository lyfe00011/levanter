const axios = require('axios')
const { writeFileSync, unlinkSync } = require('fs')
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
  // genButtonMessage,
  // PLATFORM,
} = require('../lib/')

bot(
  {
    pattern: 'plugin ?(.*)',
    desc: 'Install External plugins',
    type: 'plugin',
  },
  async (message, match) => {
    match = match || message.reply_message.text
    if (!match && match !== 'list')
      return await message.send(
        '> *Example :*\n- plugin url (_a gist url, which contain plugin code_)\n- plugin list (_list all plugins with the url_)'
      )
    if (match == 'list') {
      const plugins = await getPlugin(message.id)
      if (!plugins) return await message.send(`*Plugins not installed.*`)
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
    if (!isValidUrl) return await message.send('*Give me valid plugin url | plugin_name*')
    let msg = ''

    for (const url of isValidUrl) {
      try {
        const res = await axios.get(url) // Use axios.get for making the GET request
        if (res.status === 200) {
          // In axios, the status is 'res.status' instead of 'res.statusCode'
          let plugin_name = /pattern: ["'](.*)["'],/g.exec(res.data) // Access response data with 'res.data'
          plugin_name = plugin_name[1].split(' ')[0]
          const pluginPath = path.join(__dirname, '../eplugins/' + message.id + plugin_name + '.js')
          writeFileSync(pluginPath, res.data)

          try {
            installPlugin(pluginPath, message.id)
          } catch (e) {
            await message.send(e.stack, { quoted: message.quoted })
            return unlinkSync(pluginPath)
          }

          await setPlugin(plugin_name, url, message.id)
          msg += `${pluginsList(res.data).join(',')}\n`
        }
      } catch (error) {
        await message.send(`${error.message}\n${url}`)
      }
    }

    await message.send(`_Newly installed plugins are : ${msg.trim()}_`)
  }
)

bot(
  {
    pattern: 'remove ?(.*)',
    desc: 'Delete External Plugins',
    type: 'plugin',
  },
  async (message, match) => {
    if (!match)
      return await message.send(
        '> *Example :*\n- remove mforward (_name of the plugin file, check plugin list_)\n- remove all (_removes all plugins in plugin list_)'
      )
    // const buttons = [{ text: 'REBOOT', id: 'reboot' }]
    // if (PLATFORM == 'heroku') buttons.push({ text: 'RESTART', id: 'restart' })
    if (match == 'all') {
      const plugins = await getPlugin(message.id)
      for (const plugin of plugins) {
        try {
          await delPlugin(plugin.name, message.id)
          removePlugin(plugin.name, message.id)
        } catch (error) {}
      }
    } else {
      const isDeleted = await delPlugin(match, message.id)
      if (!isDeleted) return await message.send(`*Plugin ${match} not found*`)
      removePlugin(match, message.id)
    }
    return await message.send(`_removed plugins_`)
    // return await message.send(
    // 	await genButtonMessage(buttons, '_Plugin Deleted_'),
    // 	{},
    // 	'button'
    // )
  }
)
