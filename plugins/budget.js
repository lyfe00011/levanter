const {
	bot,
	summary,
	setBudget,
	delBudget,
	isValidDate,
	nlpBudget,
	lang,
} = require('../lib/index')

bot(
	{
		pattern: 'income ?(.*)',
		desc: lang.plugins.budget.income_desc,
		type: 'budget',
	},
	async (message, match) => {
		const [type, amount, remark] = match.split(',')
		if (!type || !amount || isNaN(amount))
			return await message.send(lang.plugins.budget.income_example)
		const res = await setBudget(
			message.participant,
			'income',
			type,
			amount,
			remark
		)
		await message.send(lang.plugins.budget.income_success.format(res))
	}
)

bot(
	{
		pattern: 'expense ?(.*)',
		desc: lang.plugins.budget.expense_desc,
		type: 'budget',
	},
	async (message, match) => {
		const [type, amount, remark] = match.split(',')
		if (!type || !amount || isNaN(amount))
			return await message.send(lang.plugins.budget.expense_example)
		const res = await setBudget(
			message.participant,
			'expense',
			type,
			amount,
			remark
		)
		await message.send(lang.plugins.budget.expense_success.format(res))
	}
)

bot(
	{
		pattern: 'delbudget ?(.*)',
		desc: lang.plugins.budget.del_desc,
		type: 'budget',
	},
	async (message, match) => {
		if (!match)
			return await message.send(lang.plugins.budget.del_example)
		const res = await delBudget(message.participant, match)
		if (!res) return await message.send(lang.plugins.budget.del_not_found.format(match))
		await message.send(lang.plugins.budget.del_success.format(match))
	}
)

bot(
	{
		pattern: 'summary ?(.*)',
		fromMe: true,
		desc: lang.plugins.budget.summary_desc,
		type: 'budget',
	},
	async (message, match) => {
		const [from, to] = match.split(',')
		if (match && (!isValidDate(from) || !isValidDate(to)))
			return await message.send(lang.plugins.budget.summary_example)
		const budget = await summary(message.participant, from, to)
		const now = new Date()
		const dateStr = `${now.getDate()}-${now.getMonth() + 1}-${now.getFullYear()}`
		await message.send(
			budget,
			{
				fileName: `summary_${dateStr}.pdf`,
				mimetype: 'application/pdf',
			},
			'document'
		)
	}
)

bot(
	{
		pattern: 'budget ?(.*)',
		desc: lang.plugins.budget.budget_desc,
		type: 'budget',
	},
	async (message, match) => {
		if (!match) return await message.send(lang.plugins.budget.budget_example)
		const nlp = await nlpBudget(match, message.id)
		if (!nlp) return await message.send(lang.plugins.budget.budget_failed)
		const res = await setBudget(
			message.participant,
			nlp.type,
			nlp.category,
			nlp.amount,
			nlp.remark
		)
		await message.send(
			lang.plugins.budget.budget_success.format(
				nlp.type,
				nlp.amount,
				nlp.category,
				nlp.remark || '-',
				res
			)
		)
	}
)
