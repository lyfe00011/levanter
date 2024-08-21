const { bot, summary, setBudget, delBudget, isValidDate } = require('../lib/index')

bot(
  {
    pattern: 'income ?(.*)',
    desc: 'to set income',
    type: 'budget',
  },
  async (message, match) => {
    const [type, amount, remark] = match.split(',')
    if (!type || !amount || isNaN(amount))
      return await message.send(
        '*Missing type*\n*Example : income type,amount,remark*\n*income salary, 500*\n\n*remark is optional*'
      )
    const res = await setBudget(message.participant, 'income', type, amount, remark)
    await message.send(`*Income of current month is ${res}*`)
  }
)

bot(
  {
    pattern: 'expense ?(.*)',
    desc: 'to set expense',
    type: 'budget',
  },
  async (message, match) => {
    const [type, amount, remark] = match.split(',')
    if (!type || !amount || isNaN(amount))
      return await message.send(
        '*Missing type*\n*Example : expense type,amount,remark*\n*expense movie, 200, movie_name*\n\n*remark is optional*'
      )
    const res = await setBudget(message.participant, 'expense', type, amount, remark)
    await message.send(`*Expense of current month is ${res}*`)
  }
)

bot(
  {
    pattern: 'delBudget ?(.*)',
    desc: 'to delete income | expense',
    type: 'budget',
  },
  async (message, match) => {
    if (!match)
      return await message.send(
        '*Example : delbudget id*\n\n*Id from summary*\n*To update amount re-enter again instead of deletion*'
      )
    const res = await delBudget(message.participant, match)
    if (!res) return await message.send(`_${match} not in list._`)
    await message.send(`_${match} removed from the list._`)
  }
)

bot(
  {
    pattern: 'summary ?(.*)',
    desc: 'to get summary of budget',
    type: 'budget',
  },
  async (message, match) => {
    const [from, to] = match.split(',')
    if (match && (!isValidDate(from) || !isValidDate(to)))
      return await message.send(`*Example : summary 1 May 2023, 3 May 2023*`)
    const budget = await summary(message.participant, from, to)
    await message.send(
      budget,
      {
        fileName: 'summary.pdf',
        mimetype: 'application/pdf',
      },
      'document'
    )
  }
)
