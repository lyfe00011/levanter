const {
    bot,
    lang,
    addGoogleTask,
    listGoogleTasks,
    deleteGoogleTask,
    updateGoogleTask,
    completeGoogleTask,
    getGoogleTaskLists,
    setGoogleTaskList,
    getGoogleTaskList
} = require('../lib/')

bot(
    {
        pattern: 'task ?(.*)',
        desc: lang.plugins.task.desc,
        type: 'bot',
    },
    async (message, match) => {
        const input = (match || '').trim()

        if (!input) {
            return await message.send(lang.plugins.task.usage)
        }

        const parts = input.split(' ')
        const cmd = parts[0].toLowerCase()
        const args = parts.slice(1)
        const argStr = args.join(' ')

        try {
            if (cmd === 'list') {
                const tasks = await listGoogleTasks(message.id)
                if (tasks.length === 0) {
                    return await message.send(lang.plugins.task.list_empty)
                }
                const listId = await getGoogleTaskList(message.id)
                let response = lang.plugins.task.list_header.format(listId === '@default' ? 'Default' : listId) + '\n'

                tasks.forEach((t) => {
                    response += `*${t.title}*\n`
                    if (t.due) response += `   📅 ${t.due}\n`
                    response += `   🆔 \`${t.id.substring(0, 10)}\`\n`
                    response += `   ${t.status === 'completed' ? '✅' : '🔲'}\n\n`
                })
                return await message.send(response)
            }

            if (cmd === 'list-lists' || cmd === 'lists') {
                const lists = await getGoogleTaskLists(message.id)
                let response = lang.plugins.task.list_lists + '\n'
                lists.forEach((l, i) => {
                    response += `${i + 1}. *${l.title}*\n   🆔 \`${l.id}\`\n\n`
                })
                return await message.send(response)
            }

            if (cmd === 'list-switch' || cmd === 'switch') {
                if (!argStr) return await message.send(lang.plugins.task.usage)
                const lists = await getGoogleTaskLists(message.id)
                const target = lists.find(l => l.title.toLowerCase().includes(argStr.toLowerCase()) || l.id === argStr)
                if (!target) return await message.send(lang.plugins.task.not_found)

                await setGoogleTaskList(target.id, message.id)
                return await message.send(lang.plugins.task.switched.format(target.title))
            }

            if (cmd === 'add') {
                if (!argStr) return await message.send(lang.plugins.task.usage)
                const task = await addGoogleTask(argStr, message.id)
                return await message.send(lang.plugins.task.added.format(task.title, task.due || 'No date'))
            }

            if (cmd === 'delete' || cmd === 'del') {
                if (!argStr) return await message.send(lang.plugins.task.usage)
                await deleteGoogleTask(argStr, message.id)
                return await message.send(lang.plugins.task.deleted)
            }

            if (cmd === 'done' || cmd === 'complete') {
                if (!argStr) return await message.send(lang.plugins.task.usage)
                const task = await completeGoogleTask(argStr, message.id)
                return await message.send(lang.plugins.task.updated.format(task.title, 'Completed'))
            }

            if (cmd === 'update' || cmd === 'u') {
                if (args.length < 2) return await message.send(lang.plugins.task.usage)
                const id = args[0]
                const updateText = args.slice(1).join(' ')
                const task = await updateGoogleTask(id, updateText, message.id)
                return await message.send(lang.plugins.task.updated.format(task.title, task.status))
            }

            const task = await addGoogleTask(input, message.id)
            return await message.send(lang.plugins.task.added.format(task.title, task.due || 'No date'))

        } catch (error) {
            if (error.message.includes('Not authorized')) {
                return await message.send(lang.plugins.task.auth_required)
            }
            if (error.message.includes('No task found') || error.message.includes('Multiple tasks')) {
                return await message.send(error.message)
            }
            return await message.send(`*Error:* ${error.message}`)
        }
    }
)
