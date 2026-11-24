const fs = require('fs')
const path = require('path')
const { QueryTypes } = require('sequelize')
const { parse: parseEnv } = require('dotenv')
const { DATABASE, RAILWAY } = require('../config')

// Railway containers have an ephemeral filesystem, so variable changes made at
// runtime are lost on the next deploy. The bot database is the only storage that
// outlives the container, so config.env is treated as a working copy: it is
// rebuilt from the database on boot and written back whenever it changes.
const TABLE = 'bot_vars'
const ROW = 'config'
const SYNC_INTERVAL = 5000

let tableReady = null
let lastContent = null
let syncTimer = null

const configPath = () => path.join(__dirname, '..', 'config.env')

function isRailway() {
  return Boolean(RAILWAY)
}

function readFile() {
  try {
    return fs.readFileSync(configPath(), 'utf8')
  } catch {
    return ''
  }
}

function writeFile(content) {
  fs.writeFileSync(configPath(), content)
  lastContent = content
}

function serialize(values) {
  return Object.entries(values)
    .filter(([, value]) => value !== undefined && value !== null && value !== '')
    .map(([key, value]) => `${key} = "${value}"`)
    .join('\n')
}

// Values that cannot round trip through the quoted config.env format stay in
// the environment, where the client picks them up as a fallback.
function fileSafe(value) {
  return typeof value === 'string' && value && !/["\r\n]/.test(value)
}

const NOT_A_SETTING = ['VERSION']

// lib/vars.js replaces the console methods with no-ops, so use the bot logger.
function report(error) {
  try {
    require('./client').logger.error('[railway] ' + error.message)
  } catch {
    console.error('[railway] ' + error.message)
  }
}

function mergeList(left, right) {
  const merged = []
  for (const value of [...String(left || '').split(','), ...String(right || '').split(',')]) {
    const entry = value.trim()
    if (entry && !merged.includes(entry)) merged.push(entry)
  }
  return merged.join(',')
}

// SUDO holds one comma separated list per session, joined by ';_;'.
function mergeSudo(left, right) {
  const a = String(left || '').split(';_;')
  const b = String(right || '').split(';_;')
  const merged = []
  for (let i = 0; i < Math.max(a.length, b.length); i++) {
    merged.push(mergeList(a[i], b[i]))
  }
  return merged.join(';_;')
}

async function ensureTable() {
  if (!tableReady) {
    tableReady = DATABASE.query(
      `CREATE TABLE IF NOT EXISTS ${TABLE} (id VARCHAR(64) PRIMARY KEY, content TEXT NOT NULL DEFAULT '')`
    ).catch((error) => {
      tableReady = null
      throw error
    })
  }
  return tableReady
}

async function load() {
  await ensureTable()
  const rows = await DATABASE.query(`SELECT content FROM ${TABLE} WHERE id = ?`, {
    replacements: [ROW],
    type: QueryTypes.SELECT,
  })
  return rows.length ? rows[0].content : ''
}

async function save(content) {
  await ensureTable()
  await DATABASE.query(
    `INSERT INTO ${TABLE} (id, content) VALUES (?, ?) ON CONFLICT (id) DO UPDATE SET content = excluded.content`,
    { replacements: [ROW, content] }
  )
}

// lib/vars.js decides which variable backend to use the moment it is loaded,
// and only the "vps" backend is backed by a file, so that file has to exist
// before the client is required.
function bootstrap() {
  if (!isRailway()) return false
  if (fs.existsSync(configPath())) return false
  const values = {}
  for (const [key, value] of Object.entries(require('../config'))) {
    if (fileSafe(value) && !NOT_A_SETTING.includes(key)) values[key] = value
  }
  writeFile(serialize(values))
  return true
}

async function restore() {
  if (!isRailway()) return null
  try {
    const boot = parseEnv(readFile())
    const stored = parseEnv(await load())
    const values = { ...boot, ...stored }
    if (stored.SUDO) values.SUDO = mergeSudo(boot.SUDO, stored.SUDO)
    writeFile(serialize(values))
    return values
  } catch (error) {
    report(error)
    return null
  }
}

function watch() {
  if (!isRailway() || syncTimer) return false
  lastContent = readFile()
  syncTimer = setInterval(async () => {
    const content = readFile()
    if (content === lastContent) return
    lastContent = content
    try {
      await save(content)
    } catch (error) {
      report(error)
    }
  }, SYNC_INTERVAL)
  syncTimer.unref?.()
  return true
}

module.exports = { isRailway, bootstrap, restore, watch, configPath }
