const symbols = ['🍒', '🍋', '🍊', '🍇', '⭐', '🔔']; // Available slot symbols

/**
 * Generate a random slot result
 * @returns {string} Random symbol from the slots
 */
function spin() {
  return symbols[Math.floor(Math.random() * symbols.length)];
}

/**
 * Play the Slots game
 * @returns {Object} The result of the slots game, including the symbols and the outcome message
 */
function playSlots() {
  // Generate slot results
  const slot1 = spin();
  const slot2 = spin();
  const slot3 = spin();

  // Determine the outcome
  let outcome = '';
  if (slot1 === slot2 && slot2 === slot3) {
    outcome = '🎉 Jackpot! You win! 🎉';
  } else if (slot1 === slot2 || slot2 === slot3 || slot1 === slot3) {
    outcome = '✨ So close! You get a small prize! ✨';
  } else {
    outcome = '😢 Better luck next time! 😢';
  }

  return {
    slots: `| ${slot1} | ${slot2} | ${slot3} |`,
    message: outcome
  };
}

module.exports = {
  playSlots
};
