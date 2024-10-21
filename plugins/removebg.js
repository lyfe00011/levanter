const { bot, removeBg } = require('../lib')
bot(
  {
    pattern: 'rmbg',
    desc: 'TO remove backgroud of image',
    type: 'misc',
  },
  async (message, match, ctx) => {
    if (!ctx.RMBG_KEY || ctx.RMBG_KEY == 'null') {
      return await message.send(`1. Create a account in remove.bg
		2. Verify your account.
		3. Copy your Key.
		4. .setvar RMBG_KEY:copied_key
		.......................
    
    Example => .setvar RMBG_KEY:GWQ6jVy9MBpfYF9SnyG8jz8P
          
    For making this steps easy 
    Click SIGNUP LINK and Choose Google a/c
    after completing signup
    Click KEY LINK and copy your KEY.(Press show BUTTON)
    
    SIGNUP LINK : https://accounts.kaleido.ai/users/sign_up 
    
    KEY LINK : https://www.remove.bg/dashboard#api-key`)
    }
    if (!message.reply_message || !message.reply_message.image)
      return await message.send('*Reply to a image*')
    const buffer = await removeBg(
      await message.reply_message.downloadAndSaveMediaMessage('rmbg'),
      ctx.RMBG_KEY
    )
    if (typeof buffer == 'string') return await message.send(buffer, { quoted: message.data })
    return await message.send(buffer, { quoted: message.quoted, mimetype: 'image/png' }, 'image')
  }
)
