const { bot, backupFilesToDrive, initiateUserToken, validateUserCode } = require('../lib/')

if (process.env.VPS) {
  bot(
    {
      pattern: 'backup ?(.*)',
      desc: 'Manage backup operations: authenticate, validate, or perform a backup.',
      type: 'bot',
    },
    async (message, match) => {
      if (!match) {
        return await message.send(
          '*Backup Command Usage:*\n\n- backup auth — Authenticate your account for Google Drive access.\n- backup code <your_code> — Validate the authentication code after authorizing.\n- backup now — Perform a backup immediately.'
        )
      }
      if (match === 'now') {
        await backupFilesToDrive()
        return await message.send('backup completed successfully!')
      }

      if (match === 'auth') {
        const authUrl = await initiateUserToken()
        return await message.send(
          '*Authentication Required:*\n\n1. Click the link below to authenticate your account:\n{0}\n\n2. After granting permissions, you’ll land on an error page — this is expected.\n3. Copy the full URL from the address bar and use the "backup code <your_code>" command to complete the process.'.format(
            authUrl
          )
        )
      }

      if (match.startsWith('code')) {
        await validateUserCode(match)
        return await message.send('code validated successfully! Backup is now authorized.')
      }
    }
  )
}
