const {
  bot,
  backupFilesToDrive,
  isUrl,
  listDriveFiles,
  deleteDriveFile,
  downloadDriveFile,
  uploadFile,
  lang,
} = require('../lib/')

if (process.env.VPS) {
  bot(
    {
      pattern: 'backup ?(.*)',
      desc: lang.plugins.backup.desc,
      type: 'bot',
    },
    async (message, match) => {
      if (!match) {
        return await message.send(lang.plugins.backup.usage)
      }
      if (match === 'now') {
        await backupFilesToDrive(undefined, undefined, message.id)
        return await message.send(lang.plugins.backup.success)
      }

      if (match === 'auth') {
        return await message.send(lang.plugins.backup.auth_prompt)
      }

      if (match.startsWith('code')) {
        return await message.send(lang.plugins.backup.code_prompt)
      }
    }
  )
}

bot(
  {
    pattern: 'gupload ?(.*)',
    desc: lang.plugins.gdrive.desc,
    type: 'bot',
  },
  async (message, match) => {
    const [cmd, ...args] = (match || '').split(' ')
    const arg = args.join(' ')

    if (cmd === 'list') {
      try {
        const files = await listDriveFiles(message.id)
        if (files.length === 0) return await message.send(lang.plugins.gdrive.list_empty)
        let res = ''
        files.forEach((file, i) => {
          res += `${i + 1}. *${file.name}*\n`
          res += `   ID: \`${file.id.substring(0, 10)}\`\n\n`
        })
        return await message.send(lang.plugins.gdrive.list.format(res.trim()) + lang.plugins.gdrive.short_id_info)
      } catch (e) {
        return await message.send(lang.plugins.gdrive.error.format(e.message))
      }
    }

    if (cmd === 'del' || cmd === 'delete') {
      if (!arg) return await message.send(lang.plugins.gdrive.invalid_id)
      try {
        await deleteDriveFile(arg, message.id)
        return await message.send(lang.plugins.gdrive.deleted)
      } catch (e) {
        return await message.send(lang.plugins.gdrive.error.format(e.message))
      }
    }

    if (cmd === 'dl' || cmd === 'download') {
      if (!arg) return await message.send(lang.plugins.gdrive.invalid_id)
      try {
        await message.send(lang.plugins.backup.downloading)
        const { file, options, type } = await downloadDriveFile(arg, message.id)
        options.quoted = message.data
        return await message.send(file.stream, options, type)
      } catch (e) {
        return await message.send(lang.plugins.gdrive.error.format(e.message))
      }
    }

    const url = isUrl(match)
    if (url) {
      return await backupFilesToDrive(url, message, message.id)
    }

    if (
      message.reply_message &&
      (message.reply_message.image ||
        message.reply_message.video ||
        message.reply_message.document ||
        message.reply_message.audio)
    ) {
      const path = await message.reply_message.downloadAndSaveMediaMessage('file')
      await message.send(lang.plugins.gdrive.uploading)
      await uploadFile(path, undefined, message.id)
      return await message.send(lang.plugins.gdrive.upload_success)
    }

    return await message.send(lang.plugins.gdrive.url_prompt)
  }
)

