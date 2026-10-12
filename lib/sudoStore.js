const { QueryTypes } = require('sequelize')
const { DATABASE } = require('../config')
const { getConfigOwners, mergeNumbers, splitNums } = require('./owner')

// Levanter's own var store only persists on Heroku/Koyeb/Render and on VPS
// hosts that keep a config.env file, so sudo numbers added at runtime are lost
// everywhere else (Railway falls back to an in-memory "fake VPS"). Keeping the
// extra numbers in the bot database makes them survive restarts on any host.
const TABLE = 'bot_sudos'
let tableReady = null

function ensureTable() {
  if (!tableReady) {
    tableReady = DATABASE.query(
      `CREATE TABLE IF NOT EXISTS ${TABLE} (id VARCHAR(128) PRIMARY KEY, numbers TEXT NOT NULL DEFAULT '')`
    ).catch((error) => {
      tableReady = null
      throw error
    })
  }
  return tableReady
}

async function getStoredSudos(id) {
  await ensureTable()
  const rows = await DATABASE.query(`SELECT numbers FROM ${TABLE} WHERE id = ?`, {
    replacements: [String(id)],
    type: QueryTypes.SELECT,
  })
  return splitNums(rows.length ? rows[0].numbers : '')
}

async function saveStoredSudos(id, numbers) {
  await ensureTable()
  const value = mergeNumbers(numbers).join(',')
  await DATABASE.query(
    `INSERT INTO ${TABLE} (id, numbers) VALUES (?, ?) ON CONFLICT (id) DO UPDATE SET numbers = excluded.numbers`,
    { replacements: [String(id), value] }
  )
  return splitNums(value)
}

async function getAllStoredSudos() {
  await ensureTable()
  const rows = await DATABASE.query(`SELECT numbers FROM ${TABLE}`, { type: QueryTypes.SELECT })
  return mergeNumbers(...rows.map((row) => splitNums(row.numbers)))
}

// The client copies process.env into per-session config when it connects, so
// stored numbers have to be merged into SUDO before that happens.
async function applyStoredSudosToEnv() {
  try {
    const stored = await getAllStoredSudos()
    if (!stored.length) return []
    const merged = mergeNumbers(getConfigOwners(), stored)
    process.env.SUDO = merged.join(',')
    return merged
  } catch (error) {
    console.error('[sudo] failed to load stored sudo numbers:', error.message)
    return []
  }
}

module.exports = {
  getStoredSudos,
  saveStoredSudos,
  getAllStoredSudos,
  applyStoredSudosToEnv,
}
