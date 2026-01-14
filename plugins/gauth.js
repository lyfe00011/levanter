const { bot, initiateUserToken, validateUserCode, setGAuthCredentials, clearGAuth, lang, refreshUserToken, setupBackupCron } = require('../lib/')
const fs = require('fs-extra')

bot(
    {
        pattern: 'gauth ?(.*)',
        desc: lang.plugins.gauth.desc,
        type: 'bot',
    },
    async (message, match) => {
        const [cmd, ...args] = (match || '').split(' ')

        if (!match || cmd === 'help') {
            return await message.send(lang.plugins.gauth.usage)
        }

        if (cmd === 'auth') {
            try {
                const authUrl = await initiateUserToken(message.id)
                const instructions = lang.plugins.gauth.prompt.format(authUrl)
                return await message.send(instructions)
            } catch (error) {
                return await message.send(lang.plugins.gauth.failed.format(error.message))
            }
        }

        if (cmd === 'code') {
            const codeArg = args.join(' ')
            if (!codeArg) return await message.send('Please provide the code or URL.')
            try {
                await validateUserCode(codeArg, message.id)
                return await message.send(lang.plugins.gauth.success)
            } catch (error) {
                return await message.send(lang.plugins.gauth.failed.format(error.message))
            }
        }

        if (cmd === 'import') {
            console.log(message.reply_message)
            if (!message.reply_message || message.reply_message.type !== 'documentMessage') {
                return await message.send(lang.plugins.gauth.import_reply)
            }

            try {
                const path = await message.reply_message.downloadAndSaveMediaMessage('credentials')
                const content = await fs.readJSON(path)
                await setGAuthCredentials(content, message.id)
                await fs.remove(path)
                return await message.send(lang.plugins.gauth.import_success)
            } catch (error) {
                return await message.send(lang.plugins.gauth.failed.format(error.message))
            }
        }

        if (cmd === 'status') {
            try {
                const auth = await refreshUserToken(message.id)
                if (auth) {
                    return await message.send(lang.plugins.gauth.status_auth)
                } else {
                    return await message.send(lang.plugins.gauth.status_not_auth)
                }
            } catch (error) {
                return await message.send(lang.plugins.gauth.failed.format(error.message))
            }
        }

        if (cmd === 'logout') {
            await clearGAuth(message.id)
            await setupBackupCron(message.id)
            return await message.send(lang.plugins.gauth.logout)
        }
    }
)
