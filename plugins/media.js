const {
  audioCut,
  videoTrim,
  mergeVideo,
  getFfmpegBuffer,
  videoHeightWidth,
  avm,
  blackVideo,
  cropVideo,
  bot,
  PDF,
  lang,
} = require('../lib/')
const fs = require('fs')

bot(
  {
    pattern: 'rotate ?(.*)',
    desc: lang.plugins.rotate.desc,
    type: 'video',
  },
  async (message, match) => {
    if (!message.reply_message || !message.reply_message.video) {
      return await message.send(lang.plugins.rotate.not_found)
    }

    const mode = match.trim().toLowerCase()
    if (!['right', 'left', 'flip'].includes(mode)) {
      return await message.send(lang.plugins.rotate.usage)
    }

    const location = await message.reply_message.downloadAndSaveMediaMessage('rotate')
    await message.send(lang.plugins.rotate.convert)

    return await message.send(
      await getFfmpegBuffer(location, 'orotate.mp4', mode),
      { mimetype: 'video/mp4', quoted: message.data },
      'video'
    )
  }
)

bot(
  {
    pattern: 'mp3',
    desc: lang.plugins.mp3.desc,
    type: 'video',
  },
  async (message) => {
    if (!message.reply_message || (!message.reply_message.video && !message.reply_message.audio)) {
      return await message.send(lang.plugins.mp3.usage)
    }
    return await message.send(
      await getFfmpegBuffer(
        await message.reply_message.downloadAndSaveMediaMessage('mp3'),
        'mp3.mp3',
        'mp3'
      ),
      {
        filename: 'mp3.mp3',
        mimetype: 'audio/mpeg',
        ptt: !message.reply_message.ptt,
        quoted: message.data,
      },
      'audio'
    )
  }
)

bot({ pattern: 'photo', desc: lang.plugins.photo.desc, type: 'sticker' }, async (message) => {
  if (!message.reply_message || !message.reply_message.sticker || message.reply_message.animated) {
    return await message.send(lang.plugins.photo.usage)
  }
  return await message.send(
    await getFfmpegBuffer(
      await message.reply_message.downloadAndSaveMediaMessage('photo'),
      'photo.png',
      'photo'
    ),
    { quoted: message.data, mimetype: 'image/png' },
    'image'
  )
})

bot(
  {
    pattern: 'reverse',
    desc: lang.plugins.reverse.desc,
    type: 'video',
  },
  async (message) => {
    const { reply_message } = message

    if (!reply_message || (!reply_message.audio && !reply_message.video)) {
      return await message.send(lang.plugins.reverse.usage)
    }

    const location = await reply_message.downloadAndSaveMediaMessage('reverse')

    if (reply_message.video) {
      return await message.send(
        await getFfmpegBuffer(location, 'reversed.mp4', 'videor'),
        { mimetype: 'video/mp4', quoted: message.data },
        'video'
      )
    }

    return await message.send(
      await getFfmpegBuffer(location, 'reversed.mp3', 'audior'),
      {
        filename: 'reversed.mp3',
        mimetype: 'audio/mpeg',
        ptt: false,
        quoted: message.data,
      },
      'audio'
    )
  }
)
bot(
  {
    pattern: 'cut ?(.*)',
    desc: lang.plugins.cut.desc,
    type: 'audio',
  },
  async (message, match) => {
    if (!message.reply_message || (!message.reply_message.audio && !message.reply_message.video)) {
      return await message.send(lang.plugins.cut.usage)
    }

    const [start, duration] = match.split(';').map((x) => x.trim())

    if (!start || !duration || isNaN(start) || isNaN(duration)) {
      return await message.send(lang.plugins.cut.not_found)
    }

    const location = await message.reply_message.downloadAndSaveMediaMessage('cut')

    return await message.send(
      await audioCut(location, start, duration),
      {
        filename: 'cut.mp3',
        mimetype: 'audio/mpeg',
        ptt: false,
        quoted: message.data,
      },
      'audio'
    )
  }
)

bot(
  {
    pattern: 'trim ?(.*)',
    desc: lang.plugins.trim.desc,
    type: 'video',
  },
  async (message, match) => {
    if (!message.reply_message || !message.reply_message.video) {
      return await message.send(lang.plugins.trim.usage)
    }

    const [start, duration] = match.split(';').map((x) => x.trim())

    if (!start || !duration || isNaN(start) || isNaN(duration)) {
      return await message.send(lang.plugins.trim.not_found)
    }

    const location = await message.reply_message.downloadAndSaveMediaMessage('trim')

    return await message.send(
      await videoTrim(location, start, duration),
      { mimetype: 'video/mp4', quoted: message.data },
      'video'
    )
  }
)

bot(
  {
    pattern: 'page ?(.*)',
    desc: lang.plugins.page.desc,
    type: 'document',
  },
  async (message, match) => {
    if (!message.reply_message || !message.reply_message.image)
      return await message.send(lang.plugins.page.not_found)
    if (isNaN(match)) return await message.send(lang.plugins.page.usage)
    await message.reply_message.downloadAndSaveMediaMessage(`./pdf/${match}`)
    return await message.send(lang.plugins.page.add(match))
  }
)

bot(
  {
    pattern: 'pdf ?(.*)',
    desc: lang.plugins.pdf.desc,
    type: 'document',
  },
  async (message, match) => {
    if (!match) return await message.send(lang.plugins.pdf.usage)
    await message.send(lang.plugins.rotate.convert)
    return await message.send(
      await PDF(),
      {
        fileName: `${match}.pdf`,
        mimetype: 'application/pdf',
        quoted: message.data,
      },
      'document'
    )
  }
)

bot(
  {
    pattern: 'merge ?(.*)',
    desc: lang.plugins.merge.desc,
    type: 'video',
  },
  async (message, match) => {
    const mergeDir = './media/merge'

    if (!fs.existsSync(mergeDir)) {
      fs.mkdirSync(mergeDir, { recursive: true })
    }

    if (!match) return await message.send(lang.plugins.merge.usage)
    if (isNaN(match)) return await message.send(lang.plugins.merge.not_found)

    if (/[0-9]+/.test(match)) {
      if (!message.reply_message || !message.reply_message.video) {
        return await message.send(lang.plugins.merge.usage)
      }

      await message.reply_message.downloadAndSaveMediaMessage(`${mergeDir}/${match}`)
      return await message.send(lang.plugins.merge.add.format(match))
    } else {
      const files = fs.readdirSync(mergeDir)
      if (files.length === 0) return await message.send(lang.plugins.merge.usage)

      await message.send(lang.plugins.merge.format(files.length))

      return await message.send(
        await mergeVideo(files.length),
        { mimetype: 'video/mp4', quoted: message.data },
        'video'
      )
    }
  }
)

bot(
  {
    pattern: 'compress ?(.*)',
    desc: lang.plugins.compress.desc,
    type: 'video',
  },
  async (message, match) => {
    if (!message.reply_message || !message.reply_message.video)
      return await message.send(lang.plugins.compress.usage)
    return await message.send(
      await getFfmpegBuffer(
        await message.reply_message.downloadAndSaveMediaMessage('compress'),
        'ocompress.mp4',
        'compress'
      ),
      { quoted: message.data },
      'video'
    )
  }
)

bot(
  {
    pattern: 'bass ?(.*)',
    desc: lang.plugins.bass.desc,
    type: 'audio',
  },
  async (message, match) => {
    if (!message.reply_message || (!message.reply_message.audio && !message.reply_message.video))
      return await message.send(lang.plugins.bass.usage)
    return await message.send(
      await getFfmpegBuffer(
        await message.reply_message.downloadAndSaveMediaMessage('basso'),
        'bass.mp3',
        `bass,${!match ? 10 : match}`
      ),
      { mimetype: 'audio/mpeg', quoted: message.data },
      'audio'
    )
  }
)

bot(
  {
    pattern: 'treble ?(.*)',
    desc: lang.plugins.treble.desc,
    type: 'audio',
  },
  async (message, match) => {
    if (!message.reply_message || (!message.reply_message.audio && !message.reply_message.video))
      return await message.send(lang.plugins.treble.usage)
    return await message.send(
      await getFfmpegBuffer(
        await message.reply_message.downloadAndSaveMediaMessage('trebleo'),
        'treble.mp3',
        `treble,${!match ? 10 : match}`
      ),
      { mimetype: 'audio/mpeg', quoted: message.data },
      'audio'
    )
  }
)

bot(
  {
    pattern: 'histo',
    desc: lang.plugins.histo.desc,
    type: 'audio',
  },
  async (message, match) => {
    if (!message.reply_message || (!message.reply_message.audio && !message.reply_message.video))
      return await message.send(lang.plugins.histo.usage)
    return await message.send(
      await getFfmpegBuffer(
        await message.reply_message.downloadAndSaveMediaMessage('histo'),
        'histo.mp4',
        'histo'
      ),
      { mimetype: 'video/mp4', quoted: message.data },
      'video'
    )
  }
)

bot(
  {
    pattern: 'vector',
    desc: lang.plugins.vector.desc,
    type: 'audio',
  },
  async (message, match) => {
    if (!message.reply_message || (!message.reply_message.audio && !message.reply_message.video))
      return await message.send(lang.plugins.vector.usage)
    return await message.send(
      await getFfmpegBuffer(
        await message.reply_message.downloadAndSaveMediaMessage('vector'),
        'vector.mp4',
        'vector'
      ),
      { mimetype: 'video/mp4', quoted: message.data },
      'video'
    )
  }
)
bot(
  {
    pattern: 'crop ?(.*)',
    desc: lang.plugins.crop.desc,
    type: 'video',
  },
  async (message, match) => {
    if (!message.reply_message || !message.reply_message.video)
      return await message.send(lang.plugins.crop.usage)
    const [vw, vh, w, h] = match.split(',')
    if (
      !vh ||
      !vw ||
      !w ||
      !h ||
      typeof +vh !== 'number' ||
      typeof +w !== 'number' ||
      typeof +h !== 'number' ||
      typeof +vw !== 'number'
    )
      return await message.send(lang.plugins.crop.not_found)
    const location = await message.reply_message.downloadAndSaveMediaMessage('plain')
    const { height, width } = await videoHeightWidth(location)
    if (vw > width || vh > height)
      return await message.send(lang.plugins.crop.xcrop.format(width, height))
    return await message.send(
      await cropVideo(location, vw, vh, w, h),
      { mimetype: 'video/mp4', quoted: message.data },
      'video'
    )
  }
)

bot(
  {
    pattern: 'low',
    desc: lang.plugins.low.desc,
    type: 'audio',
  },
  async (message, match) => {
    if (!message.reply_message || (!message.reply_message.audio && !message.reply_message.video))
      return await message.send(lang.plugins.low.usage)
    return await message.send(
      await getFfmpegBuffer(
        await message.reply_message.downloadAndSaveMediaMessage('lowmp3'),
        'lowmp3.mp3',
        'pitch'
      ),
      { filename: 'lowmp3.mp3', mimetype: 'audio/mpeg', quoted: message.data },
      'audio'
    )
  }
)
bot(
  {
    pattern: 'pitch',
    desc: lang.plugins.pitch.desc,
    type: 'audio',
  },
  async (message, match) => {
    if (!message.reply_message || (!message.reply_message.audio && !message.reply_message.video))
      return await message.send(lang.plugins.pitch.usage)
    return await message.send(
      await getFfmpegBuffer(
        await message.reply_message.downloadAndSaveMediaMessage('pitchmp3'),
        'lowmp3.mp3',
        'lowmp3'
      ),
      { filename: 'lowmp3.mp3', mimetype: 'audio/mpeg', quoted: message.data },
      'audio'
    )
  }
)
bot(
  {
    pattern: 'avec',
    desc: lang.plugins.avec.desc,
    type: 'audio',
  },
  async (message, match) => {
    if (!message.reply_message || (!message.reply_message.audio && !message.reply_message.video))
      return await message.send(lang.plugins.avec.usage)
    return await message.send(
      await getFfmpegBuffer(
        await message.reply_message.downloadAndSaveMediaMessage('avec'),
        'avec.mp4',
        'avec'
      ),
      { mimetype: 'video/mp4', quoted: message.data },
      'video'
    )
  }
)

bot(
  {
    pattern: 'avm',
    desc: lang.plugins.avm.desc,
    type: 'misc',
  },
  async (message, match) => {
    const mediaPath = './media/avm'

    if (!fs.existsSync(mediaPath)) {
      fs.mkdirSync(mediaPath, { recursive: true })
    }

    let files = fs.readdirSync(mediaPath)
    const isInvalidMessage =
      (!message.reply_message && files.length < 2) ||
      (message.reply_message && !message.reply_message.audio && !message.reply_message.video)

    if (isInvalidMessage) {
      return await message.send(lang.plugins.avm.usage)
    }

    if (message.reply_message) {
      const mediaType = message.reply_message.audio ? 'audio' : 'video'
      const filePath = `${mediaPath}/${mediaType}`

      await message.reply_message.downloadAndSaveMediaMessage(filePath)
      return await message.send(
        mediaType === 'audio' ? lang.plugins.avm.audio_add : lang.plugins.avm.video_add
      )
    }

    return await message.send(await avm(files), { quoted: message.data }, 'video')
  }
)

bot(
  {
    pattern: 'black',
    desc: lang.plugins.black.desc,
    type: 'audio',
  },
  async (message, match) => {
    if (!message.reply_message || (!message.reply_message.audio && !message.reply_message.video))
      return await message.send(lang.plugins.black.usage)
    await message.send(
      await blackVideo(await message.reply_message.downloadAndSaveMediaMessage('black')),
      { quoted: message.data },
      'video'
    )
  }
)
