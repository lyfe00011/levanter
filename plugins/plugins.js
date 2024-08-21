const got = require('got')
const {
  bot,
  parseGistUrls,
  getPlugin,
  setPlugin,
  pluginsList,
  delPlugin,
  removePlugin,
  // genButtonMessage,
  // PLATFORM,
} = require('../lib/')
const { writeFileSync, unlinkSync } = require('fs')

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
      const plugins = await getPlugin()
      if (!plugins) return await message.send(`*Plugins not installed.*`)
      let msg = ''
      plugins.map(({ name, url }) => {
        msg += `${name} : ${url}\n`
      })
      return await message.send('```' + msg + '```')
    }
    const isValidUrl = parseGistUrls(match)
    if (!isValidUrl || isValidUrl.length < 1) {
      const { url } = await getPlugin(match)
      if (url) return await message.send(url, { quoted: message.data })
    }
    if (!isValidUrl) return await message.send('*Give me valid plugin url | plugin_name*')
    let msg = ''
    for (const url of isValidUrl) {
      try {
        const res = await got(url)
        if (res.statusCode == 200) {
          let plugin_name = /pattern: ["'](.*)["'],/g.exec(res.body)
          plugin_name = plugin_name[1].split(' ')[0]
          writeFileSync('./plugins/' + plugin_name + '.js', res.body)
          try {
            require('./' + plugin_name)
          } catch (e) {
            await message.send(e.stack, { quoted: message.quoted })
            return unlinkSync('./plugins/' + plugin_name + '.js')
          }
          await setPlugin(plugin_name, url)
          msg += `${pluginsList(res.body).join(',')}\n`
        }
      } catch (error) {
        await message.send(`${error}\n${url}`)
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
      const plugins = await getPlugin()
      for (const plugin of plugins) {
        try {
          await delPlugin(plugin.name)
          removePlugin(plugin.name)
        } catch (error) {}
      }
    } else {
      const isDeleted = await delPlugin(match)
      if (!isDeleted) return await message.send(`*Plugin ${match} not found*`)
      removePlugin(match)
    }
    return await message.send(`_removed plugins_`)
    // return await message.send(
    // 	await genButtonMessage(buttons, '_Plugin Deleted_'),
    // 	{},
    // 	'button'
    // )
  }
)
