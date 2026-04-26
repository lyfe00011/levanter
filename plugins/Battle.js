const games = {}

module.exports = {
  name: "battle",
  description: "Multiplayer battle game",
  category: "game",
  async run({ m, text, command }) {
    const chat = m.chat

    // Start Game
    if (command === "battle") {
      if (games[chat]) return m.reply("⚠️ Game already running!")

      games[chat] = {
        players: {},
        turn: null,
        started: false
      }

      return m.reply("⚔️ Battle Game Started!\nType *.join* to enter!")
    }

    // Join
    if (command === "join") {
      if (!games[chat]) return m.reply("❌ No game found!")
      if (games[chat].started) return m.reply("⚠️ Game already started!")

      let user = m.sender
      if (games[chat].players[user]) return m.reply("✅ Already joined!")

      games[chat].players[user] = {
        hp: 100,
        defend: false
      }

      return m.reply("✅ You joined the battle!")
    }

    // Start Battle
    if (command === "start") {
      if (!games[chat]) return m.reply("❌ No game!")

      let players = Object.keys(games[chat].players)
      if (players.length < 2) return m.reply("❌ Need at least 2 players!")

      games[chat].started = true
      games[chat].turn = players[0]

      return m.reply(`🔥 Battle Started!\nTurn: @${players[0].split("@")[0]}`, {
        mentions: [players[0]]
      })
    }

    // Actions
    if (["attack", "defend", "heal"].includes(command)) {
      let game = games[chat]
      if (!game || !game.started) return m.reply("❌ No active game!")

      let user = m.sender
      if (game.turn !== user) return m.reply("⏳ Not your turn!")

      let players = Object.keys(game.players)
      let target = players.find(p => p !== user)

      let attacker = game.players[user]
      let enemy = game.players[target]

      if (command === "attack") {
        let dmg = Math.floor(Math.random() * 20) + 10

        if (enemy.defend) {
          dmg = Math.floor(dmg / 2)
          enemy.defend = false
        }

        enemy.hp -= dmg

        if (enemy.hp <= 0) {
          delete games[chat]
          return m.reply(`🏆 @${user.split("@")[0]} wins!`, {
            mentions: [user]
          })
        }

        m.reply(`⚔️ Attack!\n-${dmg} HP`)
      }

      if (command === "defend") {
        attacker.defend = true
        m.reply("🛡️ Defense activated!")
      }

      if (command === "heal") {
        let heal = Math.floor(Math.random() * 15) + 5
        attacker.hp += heal
        m.reply(`❤️ +${heal} HP`)
      }

      // Next Turn
      let next = players.find(p => p !== user)
      game.turn = next

      return m.reply(`🔄 Turn: @${next.split("@")[0]}`, {
        mentions: [next]
      })
    }
  }
}
