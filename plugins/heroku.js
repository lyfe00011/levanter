const got = require('got')
const Heroku = require('heroku-client')
const { secondsToHms, isUpdate, updateNow, bot, lang } = require('../lib/')
const Config = require('../config')
const heroku = new Heroku({ token: Config.HEROKU_API_KEY })
const baseURI = '/apps/' + Config.HEROKU_APP_NAME

if (Config.HEROKU_API_KEY && Config.HEROKU_APP_NAME) {
  bot(
    {
      pattern: 'restart',
      desc: 'Restart Dyno',
      type: 'heroku',
    },
    async (message, match) => {
      await message.send(`_Restarting_`)
      await heroku.delete(baseURI + '/dynos').catch(async (error) => {
        await message.send(`HEROKU : ${error.body.message}`)
      })
    }
  )

  bot(
    {
      pattern: 'shutdown',
      desc: 'Dyno off',
      type: 'heroku',
    },
    async (message, match) => {
      await heroku
        .get(baseURI + '/formation')
        .then(async (formation) => {
          await message.send(`_Shuttind down._`)
          await heroku.patch(baseURI + '/formation/' + formation[0].id, {
            body: {
              quantity: 0,
            },
          })
        })
        .catch(async (error) => {
          await message.send(`HEROKU : ${error.body.message}`)
        })
    }
  )

  bot(
    {
      pattern: 'dyno',
      desc: 'Show Quota info',
      type: 'heroku',
    },
    async (message, match) => {
      try {
        heroku
          .get('/account')
          .then(async (account) => {
            const url = `https://api.heroku.com/accounts/${account.id}/actions/get-quota`
            headers = {
              'User-Agent': 'Chrome/80.0.3987.149 Mobile Safari/537.36',
              Authorization: 'Bearer ' + Config.HEROKU_API_KEY,
              Accept: 'application/vnd.heroku+json; version=3.account-quotas',
            }
            const res = await got(url, { headers })
            const resp = JSON.parse(res.body)
            const total_quota = Math.floor(resp.account_quota)
            const quota_used = Math.floor(resp.quota_used)
            const remaining = total_quota - quota_used
            const quota = `Total Quota : ${secondsToHms(total_quota)}
Used  Quota : ${secondsToHms(quota_used)}
Remaning    : ${secondsToHms(remaining)}`
            await message.send('```' + quota + '```')
          })
          .catch(async (error) => {
            return await message.send(`HEROKU : ${error.body.message}`)
          })
      } catch (error) {
        await message.send(error)
      }
    }
  )
}

bot(
  {
    pattern: 'update$',
    desc: lang.plugins.update.desc,
    type: 'bot',
  },
  async (message) => {
    const update = await isUpdate()
    if (!update.length) return await message.send(lang.plugins.update.up_to_date)
    await message.send(lang.plugins.update.available.format(update.length, update.join('\n')))
  }
)

bot(
  {
    pattern: 'update now$',
    desc: lang.plugins.update_now.desc,
    type: 'bot',
  },
  async (message) => {
    const isupdate = await isUpdate()
    if (!isupdate.length) return await message.send(lang.plugins.update_now.up_to_date)
    await message.send(lang.plugins.update_now.updating)
    const e = await updateNow()
    if (e) return await message.send(e)
    return await message.send(lang.plugins.update_now.updated)
  }
)
