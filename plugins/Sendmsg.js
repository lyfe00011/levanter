const { bot } = require('../lib/');

bot(
  {
    pattern: 'sendmsgs ?(.*)',
    desc: 'Send message to multiple numbers',
    type: 'owner',
  },
  async (message, match) => {
    try {
      if (!match.includes('|')) {
        return await message.send(
          'Use:\n sendmsg number,number|message'
        );
      }

      let [numbers, text] = match.split('|');

      const numberList = numbers.split(',').map(n => n.trim());

      let success = 0;
      let failed = 0;

      for (let num of numberList) {
        try {
          let jid = num.replace(/[^0-9]/g, '') + '@s.whatsapp.net';

          await message.client.sendMessage(jid, {
            text: text.trim(),
          });

          success++;
          await new Promise(r => setTimeout(r, 10));
        } catch (e) {
          console.log(e);
          failed++;
        }
      }

      await message.send(
        `Done ✅\nSuccess: ${success}\nFailed: ${failed}`
      );

    } catch (err) {
      console.log(err);
      await message.send('Error:\n' + err);
    }
  }
);
