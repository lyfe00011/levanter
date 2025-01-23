const { bot, photoEditor } = require('../lib/')

bot(
  {
    pattern: 'skull',
    type: 'editor',
    desc: 'Skull Photo editor.',
  },
  async (message, match) => {
    if (!message.reply_message || !message.reply_message.image)
      return await message.send('*Reply to a image.*')
    const { status, result } = await photoEditor(
      await message.reply_message.downloadAndSaveMediaMessage(),
      'skull'
    )
    if (!status) return await message.send(result)
    return await message.sendFromUrl(result)
  }
)
bot(
  {
    pattern: 'sketch',
    type: 'editor',
    desc: 'Sketch Photo editor.',
  },
  async (message, match) => {
    if (!message.reply_message || !message.reply_message.image)
      return await message.send('*Reply to a image.*')
    const { status, result } = await photoEditor(
      await message.reply_message.downloadAndSaveMediaMessage(),
      'sketch'
    )
    if (!status) return await message.send(result)
    return await message.sendFromUrl(result)
  }
)

bot(
  {
    pattern: 'pencil',
    type: 'editor',
    desc: 'pencil Photo editor.',
  },
  async (message, match) => {
    if (!message.reply_message || !message.reply_message.image)
      return await message.send('*Reply to a image.*')
    const { status, result } = await photoEditor(
      await message.reply_message.downloadAndSaveMediaMessage(),
      'pencil'
    )
    if (!status) return await message.send(result)
    return await message.sendFromUrl(result)
  }
)

bot(
  {
    pattern: 'color',
    type: 'editor',
    desc: 'color Photo editor.',
  },
  async (message, match) => {
    if (!message.reply_message || !message.reply_message.image)
      return await message.send('*Reply to a image.*')
    const { status, result } = await photoEditor(
      await message.reply_message.downloadAndSaveMediaMessage(),
      'color'
    )
    if (!status) return await message.send(result)
    return await message.sendFromUrl(result)
  }
)

bot(
  {
    pattern: 'kiss',
    type: 'editor',
    desc: 'kiss Photo editor.',
  },
  async (message, match) => {
    if (!message.reply_message || !message.reply_message.image)
      return await message.send('*Reply to a image.*')
    const { status, result } = await photoEditor(
      await message.reply_message.downloadAndSaveMediaMessage(),
      'kiss'
    )
    if (!status) return await message.send(result)
    return await message.sendFromUrl(result)
  }
)

bot(
  {
    pattern: 'bokeh',
    type: 'editor',
    desc: 'bokeh Photo editor.',
  },
  async (message, match) => {
    if (!message.reply_message || !message.reply_message.image)
      return await message.send('*Reply to a image.*')
    const { status, result } = await photoEditor(
      await message.reply_message.downloadAndSaveMediaMessage(),
      'bokeh'
    )
    if (!status) return await message.send(result)
    return await message.sendFromUrl(result)
  }
)

bot(
  {
    pattern: 'wanted',
    type: 'editor',
    desc: 'Wanted Photo editor.',
  },
  async (message, match) => {
    if (!message.reply_message || !message.reply_message.image)
      return await message.send('*Reply to a image.*')
    const { status, result } = await photoEditor(
      await message.reply_message.downloadAndSaveMediaMessage(),
      'wanted'
    )
    if (!status) return await message.send(result)
    return await message.sendFromUrl(result)
  }
)

bot(
  {
    pattern: 'look',
    type: 'editor',
    desc: 'Dramatic Look Photo editor.',
  },
  async (message, match) => {
    if (!message.reply_message || !message.reply_message.image)
      return await message.send('*Reply to a image.*')
    const { status, result } = await photoEditor(
      await message.reply_message.downloadAndSaveMediaMessage(),
      'look'
    )
    if (!status) return await message.send(result)
    return await message.sendFromUrl(result)
  }
)

bot(
  {
    pattern: 'gandm',
    type: 'editor',
    desc: 'Dramatic Look Photo editor.',
  },
  async (message, match) => {
    if (!message.reply_message || !message.reply_message.image)
      return await message.send('*Reply to a image.*')
    const { status, result } = await photoEditor(
      await message.reply_message.downloadAndSaveMediaMessage(),
      'gandm'
    )
    if (!status) return await message.send(result)
    return await message.sendFromUrl(result)
  }
)

bot(
  {
    pattern: 'dark',
    type: 'editor',
    desc: 'Dramatic Look Photo editor.',
  },
  async (message, match) => {
    if (!message.reply_message || !message.reply_message.image)
      return await message.send('*Reply to a image.*')
    const { status, result } = await photoEditor(
      await message.reply_message.downloadAndSaveMediaMessage(),
      'dark'
    )
    if (!status) return await message.send(result)
    return await message.sendFromUrl(result)
  }
)

bot(
  {
    pattern: 'makeup',
    type: 'editor',
    desc: 'Dramatic Look Photo editor.',
  },
  async (message, match) => {
    if (!message.reply_message || !message.reply_message.image)
      return await message.send('*Reply to a image.*')
    const { status, result } = await photoEditor(
      await message.reply_message.downloadAndSaveMediaMessage(),
      'makeup'
    )
    if (!status) return await message.send(result)
    return await message.sendFromUrl(result)
  }
)

bot(
  {
    pattern: 'cartoon',
    type: 'editor',
    desc: 'Dramatic Look Photo editor.',
  },
  async (message, match) => {
    if (!message.reply_message || !message.reply_message.image)
      return await message.send('*Reply to a image.*')
    const { status, result } = await photoEditor(
      await message.reply_message.downloadAndSaveMediaMessage(),
      'cartoon'
    )
    if (!status) return await message.send(result)
    return await message.sendFromUrl(result)
  }
)

bot(
  {
    pattern: 'demon',
    type: 'editor',
    desc: 'demon Look Photo editor.',
  },
  async (message, match) => {
    if (!message.reply_message || !message.reply_message.image)
      return await message.send('*Reply to a image.*')
    const { status, result } = await photoEditor(
      await message.reply_message.downloadAndSaveMediaMessage(),
      'demon'
    )
    if (!status) return await message.send(result)
    return await message.sendFromUrl(result)
  }
)

bot(
  {
    pattern: 'bloody',
    type: 'editor',
    desc: 'bloody Look Photo editor.',
  },
  async (message, match) => {
    if (!message.reply_message || !message.reply_message.image)
      return await message.send('*Reply to a image.*')
    const { status, result } = await photoEditor(
      await message.reply_message.downloadAndSaveMediaMessage(),
      'bloody'
    )
    if (!status) return await message.send(result)
    return await message.sendFromUrl(result)
  }
)

bot(
  {
    pattern: 'zombie',
    type: 'editor',
    desc: 'zombie Look Photo editor.',
  },
  async (message, match) => {
    if (!message.reply_message || !message.reply_message.image)
      return await message.send('*Reply to a image.*')
    const { status, result } = await photoEditor(
      await message.reply_message.downloadAndSaveMediaMessage(),
      'zombie'
    )
    if (!status) return await message.send(result)
    return await message.sendFromUrl(result)
  }
)

bot(
  {
    pattern: 'horned',
    type: 'editor',
    desc: 'horned Look Photo editor.',
  },
  async (message, match) => {
    if (!message.reply_message || !message.reply_message.image)
      return await message.send('*Reply to a image.*')
    const { status, result } = await photoEditor(
      await message.reply_message.downloadAndSaveMediaMessage(),
      'horned'
    )
    if (!status) return await message.send(result)
    return await message.sendFromUrl(result)
  }
)

bot(
  {
    pattern: 'enhance',
    type: 'editor',
    desc: 'horned Look Photo editor.',
  },
  async (message, match) => {
    if (!message.reply_message || !message.reply_message.image)
      return await message.send('*Reply to a image.*')
    const { status, result } = await photoEditor(
      await message.reply_message.downloadAndSaveMediaMessage(),
      'enhance'
    )
    if (!status) return await message.send(result)
    return await message.sendFromUrl(result)
  }
)
