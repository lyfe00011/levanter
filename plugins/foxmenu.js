const { bot, getAllActiveFox, deleteFox } = require('../lib/db/fox')

bot(
  {
    pattern: 'foxmenu ?(.*)',
    desc: 'Menu de contrôle Fox - Gérer les sessions actives',
    type: 'ai',
  },
  async (message, match) => {
    if (!match) {
      return await message.send(
        '*🦊 Menu de contrôle Fox*\n\n' +
        '*Commandes disponibles :*\n' +
        '• foxmenu status - Voir les sessions actives\n' +
        '• foxmenu clear - Désactiver toutes les sessions\n' +
        '• foxmenu clear @user - Désactiver pour un utilisateur\n' +
        '• foxmenu help - Afficher ce menu\n\n' +
        '*Note :* Utilisez "fox on/off" pour activer/désactiver Fox'
      )
    }

    const command = match.toLowerCase()

    switch (command) {
      case 'status':
        try {
          const activeSessions = await getAllActiveFox()
          
          if (activeSessions.length === 0) {
            return await message.send('*🦊 Fox est actuellement hors ligne partout*')
          }

          let statusText = '*🦊 Sessions Fox actives :*\n\n'
          activeSessions.forEach((session, index) => {
            const userInfo = session.user ? `@${session.user}` : 'Groupe entier'
            statusText += `${index + 1}. Chat: ${session.chat}\n   Utilisateur: ${userInfo}\n   Session: ${session.session}\n\n`
          })

          await message.send(statusText)
        } catch (error) {
          console.error('Erreur foxmenu status:', error)
          await message.send('*❌ Erreur lors de la récupération du statut*')
        }
        break

      case 'clear':
        try {
          // Vérifier si c'est pour un utilisateur spécifique
          let targetUser = null
          if (message.mention && message.mention.length > 0) {
            targetUser = message.mention[0]
          }

          if (targetUser) {
            // Désactiver pour un utilisateur spécifique
            await deleteFox(message.jid, targetUser)
            await message.send(`*🦊 Fox désactivé pour @${targetUser}*`)
          } else {
            // Désactiver pour tout le groupe
            await deleteFox(message.jid)
            await message.send('*🦊 Fox désactivé pour ce groupe*')
          }
        } catch (error) {
          console.error('Erreur foxmenu clear:', error)
          await message.send('*❌ Erreur lors de la désactivation*')
        }
        break

      case 'help':
        await message.send(
          '*🦊 Aide Fox*\n\n' +
          '*Activation/Désactivation :*\n' +
          '• fox on - Activer pour le groupe\n' +
          '• fox off - Désactiver pour le groupe\n' +
          '• fox on @user - Activer pour un utilisateur\n' +
          '• fox off @user - Désactiver pour un utilisateur\n\n' +
          '*Gestion :*\n' +
          '• foxmenu status - Voir les sessions actives\n' +
          '• foxmenu clear - Désactiver toutes les sessions\n' +
          '• foxmenu clear @user - Désactiver pour un utilisateur\n\n' +
          '*Fonctionnalités :*\n' +
          '• Réponses automatiques en conversation\n' +
          '• Analyse d\'images \n' +
          '• Personnalité unique et naturelle\n' +
          '• Support multilingue\n\n' +
          '*Note :* Fox utilise l\'IA'
        )
        break

      default:
        await message.send(
          '*❌ Commande inconnue*\n\n' +
          'Utilisez "foxmenu help" pour voir toutes les commandes disponibles.'
        )
    }
  }
) 