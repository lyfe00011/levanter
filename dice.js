const games = (message) => {
  if (message.body === '.dice') {
    const roll = Math.floor(Math.random() * 6) + 1;
    message.reply(`🎲 You rolled a ${roll}`);
  }
};

module.exports = games;
