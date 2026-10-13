const { DATABASE, VERSION } = require('./config')
const railway = require('./lib/railway')

// lib/vars.js picks its backend when it is first loaded and only the "vps"
// backend is backed by a file, so the Railway config.env has to exist before
// the client below is required.
railway.bootstrap()

const { Client, logger } = require('./lib/client')
const { stopInstance } = require('./lib/pm2')

const start = async () => {
  logger.info(`levanter ${VERSION}`)

  try {
    await DATABASE.authenticate({ retry: { max: 3 } })
  } catch (error) {
    logger.error({
      msg: 'Database connection failed',
      error: error.message,
      url: process.env.DATABASE_URL,
    })
    return stopInstance()
  }

  // The client reads the session variables on connect, so the stored ones are
  // put back before it starts and any later change is written back to the db.
  await railway.restore()
  railway.watch()

  const bot = new Client()

  try {
    await bot.connect()
  } catch (error) {
    logger.error({ msg: 'Bot client failed to start', error: error.message })
  }

  return bot
}

const shutdown = async (bot) => {
  try {
    if (bot) await bot.close()
    await DATABASE.close()
    process.exit(0)
  } catch (error) {
    logger.error({ msg: 'Error during shutdown', error: error.message })
    process.exit(1)
  }
}

const init = async () => {
  const bot = await start()

  process.on('SIGINT', () => shutdown(bot))
  process.on('SIGTERM', () => shutdown(bot))
}

init()
