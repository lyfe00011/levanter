const { bot } = require('../lib/')

bot(
  {
    pattern: 'slots ?(.*)',
    desc: 'Play a fun slots game and test your luck!',
    type: 'game',
  },
  async (message) => {
    const symbols = ['🍒', '🍋', '🍊', '🍇', '⭐', '🔔']
    const spin = () => symbols[Math.floor(Math.random() * symbols.length)]

    // Generate slot results
    const slot1 = spin()
    const slot2 = spin()
    const slot3 = spin()

    // Check results and prepare the message
    let resultMessage = `🎰 *Slots* 🎰\n\n| ${slot1} | ${slot2} | ${slot3} |\n\n`
    if (slot1 === slot2 && slot2 === slot3) {
      resultMessage += '🎉 *Jackpot! You win!* 🎉'
    } else if (slot1 === slot2 || slot2 === slot3 || slot1 === slot3) {
      resultMessage += '✨ *So close! You get a small prize!* ✨'
    } else {
      resultMessage += '😢 *Better luck next time!* 😢'
    }

    // Send the result to the user
    await message.send(resultMessage)
  }
)
