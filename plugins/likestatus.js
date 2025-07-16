const { smsg } = require('../lib/')

module.exports = {
  name: 'likestatus',
  description: 'Réagit automatiquement aux statuts WhatsApp avec un emoji.',
  type: 'whatsapp',
  reaction: true,

  async statusUpdate(client, update) {
    try {
      const emoji = '😎' // Tu peux changer ici l'emoji à utiliser
      if (!update || !update.status || !Array.isArray(update.status)) return
      
      for (let status of update.status) {
        if (status?.message) {
          await client.sendMessage(
            status.chat,
            {
              react: {
                text: emoji,
                key: {
                  remoteJid: status.chat,
                  fromMe: false,
                  id: status.id,
                },
              },
            }
          )
        }
      }
    } catch (e) {
      console.log('Erreur réaction statut:', e)
    }
  },
}
