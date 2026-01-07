const { Client, logger } = require('./lib/client')
const { DATABASE, VERSION } = require('./config')
const { stopInstance } = require('./lib/pm2')

const start = async () => {
  logger.info(`levanter ${VERSION}`)
  try {
    await DATABASE.authenticate({ retry: { max: 3 } })
  } catch (error) {
    const databaseUrl = process.env.DATABASE_URL
    logger.error({ msg: 'Unable to connect to the database', error: error.message, databaseUrl })
    return stopInstance()
  }
  if (DATABASE.getDialect() === 'sqlite') {
    try {
      await DATABASE.query('PRAGMA journal_mode = WAL;')
      await DATABASE.query('PRAGMA synchronous = NORMAL;')
      await DATABASE.query('PRAGMA busy_timeout = 3000;')
    } catch (error) {
      logger.warn({ error }, 'Failed to set SQLite PRAGMAs')
    }
  }
  try {
    const bot = new Client()
    await bot.connect()
  } catch (error) {
    logger.error(error)
  }
}
start()
