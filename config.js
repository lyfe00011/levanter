const { Sequelize } = require('sequelize')
const { existsSync } = require('fs')
const path = require('path')
const configPath = path.join(__dirname, './config.env')
const databasePath = path.join(__dirname, './database.db')
if (existsSync(configPath)) require('dotenv').config({ path: configPath })
const toBool = (x) => x == 'true'
const DATABASE_URL =
process.env.DATABASE_URL === undefined ? databasePath : process.env.DATABASE_URL
module.exports = {
  VERSION: require('./package.json').version,
  SESSION_ID: (process.env.SESSION_ID || '').trim(),
  DATABASE:
    DATABASE_URL === databasePath
      ? new Sequelize({
          dialect: 'sqlite',
          storage: DATABASE_URL,
          logging: false,
        })
      : new Sequelize(DATABASE_URL, {
          dialect: 'postgres',
          ssl: true,
          protocol: 'postgres',
          dialectOptions: {
            native: true,
            ssl: { require: true, rejectUnauthorized: false },
          },
          logging: false,
        }),
  PREFIX: (process.env.PREFIX || '^[.,!]').trim(),
  SUDO: process.env.SUDO || '',
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME,
  HEROKU_API_KEY: process.env.HEROKU_API_KEY,
  BRANCH: 'master',
  STICKER_PACKNAME: process.env.STICKER_PACKNAME || '❤️,LyFE',
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE,
  LOG_MSG: process.env.LOG_MSG || 'false',
  RMBG_KEY: process.env.RMBG_KEY || 'null',
  BAILEYS_LOG_LVL: process.env.BAILEYS_LOG_LVL || 'silent',
  LANG: (process.env.LANGUAG || 'en').toLowerCase(),
  WARN_LIMIT: process.env.WARN_LIMIT || 3,
  FORCE_LOGOUT: process.env.FORCE_LOGOUT || 'false',
  BRAINSHOP: process.env.BRAINSHOP || '159501,6pq8dPiYt7PdqHz3',
  DISABLE_BOT: process.env.DISABLE_BOT || 'null',
  ANTILINK_MSG: process.env.ANTILINK_MSG || '_Antilink Detected &mention kicked_',
  ANTISPAM_MSG: process.env.ANTISPAM_MSG || '_Antispam Detected &mention kicked_',
  ANTIWORDS_MSG: process.env.ANTIWORDS_MSG || '_AntiWord Detected &mention kicked_',
  ANTIWORDS: process.env.ANTIWORDS || 'word',
  MENTION: process.env.MENTION || '',
  MAX_UPLOAD: process.env.MAX_UPLOAD || 230,
  REJECT_CALL: process.env.REJECT_CALL,
  VPS: toBool(process.env.VPS),
  AUTO_STATUS_VIEW: (process.env.AUTO_STATUS_VIEW || 'false').trim(),
  SEND_READ: process.env.SEND_READ,
  KOYEB: toBool(process.env.KOYEB),
  KOYEB_NAME: (process.env.KOYEB_NAME || '').trim(),
  KOYEB_API: (process.env.KOYEB_API || '').trim(),
  AJOIN: process.env.AJOIN || 'false',
  GPT: (process.env.GPT || 'free').trim(),
  MODEL: (process.env.MODEL || 'gpt-3.5-turbo').trim(),
  APPROVE: (process.env.APPROVE || '').trim(),
  ANTI_DELETE: (process.env.ANTI_DELETE || 'null').trim(),
  PERSONAL_MESSAGE: (process.env.PERSONAL_MESSAGE || 'null').trim(),
  DISABLE_START_MESSAGE: process.env.DISABLE_START_MESSAGE || 'false',
  ANTI_BOT: (process.env.ANTI_BOT || 'off').trim(),
  ANTI_BOT_MESSAGE: process.env.ANTI_BOT_MESSAGE || '&mention removed',
  WARN_MESSAGE:
    process.env.WARN_MESSAGE ||
    '⚠️WARNING⚠️\n*User :* &mention\n*Warn :* &warn\n*Remaining :* &remaining',
  WARN_RESET_MESSAGE:
    process.env.WARN_RESET_MESSAGE || `WARN RESET\nUser : &mention\nRemaining : &remaining`,
  WARN_KICK_MESSAGE: process.env.WARN_KICK_MESSAGE || '&mention kicked',
  TRUECALLER: process.env.TRUECALLER,
  DELETE_TYPE: (process.env.DELETE_TYPE || '').trim(),
  LIST_TYPE: (process.env.LIST_TYPE || 'text').trim(),
  BING_COOKIE: (process.env.BING_COOKIE || '').trim(),
  GEMINI_API_KEY: (process.env.GEMINI_API_KEY || '').trim(),
  GROUP_ADMINS: process.env.GROUP_ADMINS || '',
  RENDER_NAME: (process.env.RENDER_NAME || '').trim(),
  RENDER_API_KEY: (process.env.RENDER_API_KEY || '').trim(),
  TIMEZONE: process.env.TIMEZONE,
  CMD_REACTION: process.env.CMD_REACTION || 'true',
  AUTO_UPDATE: process.env.AUTO_UPDATE || 'true',
}
