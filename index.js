const { DATABASE, VERSION } = require('./config')
const { applyStoredSudosToEnv } = require('./lib/sudoStore')

const start = async () => {
  try {
    await DATABASE.authenticate({ retry: { max: 3 } })
  } catch (error) {
    const { logger } = require('./lib/client')
    const { stopInstance } = require('./lib/pm2')
    logger.error({
      msg: 'Database connection failed',
      error: error.message,
      url: process.env.DATABASE_URL,
    })
    return stopInstance()
  }

  // The client copies process.env (including SUDO) into per-session config when
  // it connects, so stored sudo numbers are merged in before that happens.
  await applyStoredSudosToEnv()
  const { Client, logger } = require('./lib/client')
  logger.info(`levanter ${VERSION}`)

  const bot = new Client()

  try {
    await bot.connect()
  } catch (error) {
    logger.error({ msg: 'Bot client failed to start', error: error.message })
  }

  return bot
}

const shutdown = async (bot) => {
  const { logger } = require('./lib/client')
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
