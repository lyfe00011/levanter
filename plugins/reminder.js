const {
    bot,
    addCalendarEvent,
    listCalendarEvents,
    deleteCalendarEvent,
    lang,
} = require('../lib/')

bot(
    {
        pattern: 'reminder ?(.*)',
        desc: lang.plugins.reminder.desc,
        type: 'bot',
    },
    async (message, match) => {
        if (!match) {
            return await message.send(lang.plugins.reminder.usage)
        }

        const [cmd, ...args] = match.split(' ')
        const arg = args.join(' ')

        if (cmd === 'list') {
            try {
                const ninetyDaysLater = new Date()
                ninetyDaysLater.setDate(ninetyDaysLater.getDate() + 90)
                const events = await listCalendarEvents(ninetyDaysLater.toISOString(), message.id)
                if (events.length === 0) {
                    return await message.send(lang.plugins.reminder.list_empty)
                }

                let response = lang.plugins.reminder.list.format('')
                events.forEach((event, i) => {
                    response += `${i + 1}. *${event.summary}*\n`
                    response += `   ${lang.plugins.reminder.time}: ${event.start}\n`
                    response += `   ${lang.plugins.reminder.id}: \`${event.id.substring(0, 10)}\`\n\n`
                })

                return await message.send(response.trim() + lang.plugins.reminder.short_id_info)
            } catch (error) {
                if (error.message.includes('Not authorized')) {
                    return await message.send(lang.plugins.reminder.auth_required)
                }
                return await message.send(`*Error:* ${error.message}`)
            }
        }

        if (cmd === 'del' || cmd === 'delete') {
            if (!arg) {
                return await message.send(lang.plugins.reminder.invalid_id)
            }

            try {
                await deleteCalendarEvent(arg, message.id)
                return await message.send(lang.plugins.reminder.deleted)
            } catch (error) {
                if (error.message.includes('Not authorized')) {
                    return await message.send(lang.plugins.reminder.auth_required)
                }
                return await message.send(`*Error:* ${error.message}`)
            }
        }

        try {
            const res = await addCalendarEvent(match, message.id)
            const msg = lang.plugins.reminder.success.format(res.summary, res.start, res.link)
            await message.send(msg)
        } catch (error) {
            if (error.message.includes('Not authorized')) {
                return await message.send(lang.plugins.reminder.auth_required)
            }
            await message.send(`*Error:* ${error.message}`)
        }
    }
)
