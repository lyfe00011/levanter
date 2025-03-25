//who knows maybe its a useful tool and you can add this function in lib
//and accept the plugin pull request 

const fs = require('fs')
const webpmux = require('node-webpmux')

async function extractExif(file) {
  try {
    const img = new webpmux.Image()
    await img.load(file)

    if (!img.exif) return null

    const rawExif = img.exif.toString()

    try {
      const exifJson = JSON.parse(rawExif.match(/{.*}/s)[0])
      return {
        packId: exifJson['sticker-pack-id'] || 'Unknown',
        packname: exifJson['sticker-pack-name'] || 'Unknown',
        author: exifJson['sticker-pack-publisher'] || 'Unknown',
        emojis: exifJson['emojis']?.length ? exifJson['emojis'].join(', ') : 'None',
      }
    } catch (err) {
      return null
    }
  } catch (error) {
    console.error('Exif extraction error:', error)
    return null
  }
}

module.exports = { extractExif }
