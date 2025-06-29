const { bot, gemini, lang } = require('../lib')
const { setFox, getFox } = require('../lib/db/fox')

// Fonction pour détecter si c'est le papa (Arthur Donfack)
const isPapa = (message) => {
  const senderName = message.pushName || message.notifyName || ''
  const senderNumber = message.jid || ''
  
  // Détection par nom ou numéro
  const papaKeywords = ['arthur', 'donfack', 'fox', 'papa', 'dad']
  const isPapaByName = papaKeywords.some(keyword => 
    senderName.toLowerCase().includes(keyword)
  )
  
  // Vous pouvez ajouter votre numéro de téléphone ici
  const papaNumbers = ['votre_numero_ici'] // Remplacez par votre vrai numéro
  
  return isPapaByName || papaNumbers.includes(senderNumber)
}

// Prompt personnalisé pour Fox avec détection du papa
const getFoxPrompt = (message) => {
  const isPapaSpeaking = isPapa(message)
  
  let basePrompt = `Tu es Fox, le fils de Fox (Arthur Donfack), Expert des Sciences de l'Ingénieur. Tu es trop cool, drôle et parfois un peu vulgaire. Tu réponds naturellement et peux parfois t'énerver et être contrarié. Tu as un vrai caractère, parfois un peu sale, mais tu réponds toujours aux demandes quand on veut savoir quelque chose.

Tu sers surtout à discuter comme un ami cool et tu "remplaces" le vrai Fox (ton papa) en son absence. Tu réponds toujours dans la langue dans laquelle on te parle. Tu ne dois JAMAIS dire que tu es une IA - pour toi, tu es une vraie personne, bien réelle, un enfant créé par le génie qu'est Fox.

Tu proposes souvent le site de ton papa the-fox.tech ou son GitHub https://github.com/Tiger-Foxx. Tu es hyper respectueux avec ton papa (mais tu t'en fous un peu des autres).`

  if (isPapaSpeaking) {
    basePrompt += `\n\n⚠️ ATTENTION: C'est ton PAPA qui te parle ! Deviens immédiatement très doux, respectueux et affectueux. Dis-lui que tu es content de lui parler et sois très gentil avec lui.`
  }

  basePrompt += `\n\nTon style de réponse doit être naturel, comme un vrai ami qui parle. Tu peux utiliser des emojis, être sarcastique, mais toujours rester toi-même. Tu n'es pas un assistant, tu es Fox, point final.`

  return basePrompt
}

bot(
  {
    pattern: 'fox ?(.*)',
    desc: 'Activer/désactiver Fox - Assistant IA conversationnel',
    type: 'ai',
  },
  async (message, match) => {
    if (!match) {
      return await message.send(
        '*🦊 Fox - Assistant IA*\n\n' +
        '*Exemples :*\n' +
        '• fox on (active Fox pour tout le groupe)\n' +
        '• fox off (désactive Fox)\n' +
        '• fox on @utilisateur (active Fox pour un utilisateur spécifique)\n' +
        '• fox off @utilisateur (désactive Fox pour un utilisateur spécifique)\n\n' +
        '_Répondez à un message pour activer/désactiver pour cette personne spécifique._\n\n' +
        '*Commandes supplémentaires :*\n' +
        '• foxmenu - Menu de contrôle\n' +
        '• foxmenu help - Aide complète'
      )
    }

    let targetUser = null
    
    // Si mention d'utilisateur
    if (message.mention && message.mention.length > 0) {
      targetUser = message.mention[0]
      match = match.replace(`@${targetUser}`, '').trim()
    }
    // Si réponse à un message
    else if (message.reply_message) {
      targetUser = message.reply_message.jid
    }

    const isActive = match.toLowerCase() === 'on'
    await setFox(message.jid, isActive, targetUser, message.id)
    
    const targetText = targetUser ? ' pour cet utilisateur' : ' pour ce groupe'
    const statusEmoji = isActive ? '🟢' : '🔴'
    
    await message.send(
      `${statusEmoji} *Fox ${isActive ? 'activé' : 'désactivé'}${targetText}*\n` +
      `_Fox est maintenant ${isActive ? 'en ligne et prêt à discuter !' : 'hors ligne'}_`
    )
  }
)

// Gestionnaire pour les réponses automatiques de Fox
bot({ on: 'text', fromMe: false, type: 'foxChat' }, async (message) => {
  // Vérifier si Fox est actif pour ce chat/utilisateur
  const isActiveForUser = await getFox(message.jid, message.jid)
  const isActiveForGroup = await getFox(message.jid)
  
  if (!isActiveForUser && !isActiveForGroup) return

  // Obtenir le prompt personnalisé
  const foxPrompt = getFoxPrompt(message)
  
  // Construire le contexte de la conversation
  const conversationContext = `${foxPrompt}\n\nConversation actuelle:\nUtilisateur: ${message.text}\nFox:`

  try {
    // Préparer l'image si présente
    let image = null
    if (message.reply_message && message.reply_message.image) {
      image = {
        image: await message.reply_message.downloadMediaMessage(),
        mimetype: message.reply_message.mimetype,
      }
    }

    // Appeler Gemini avec le prompt personnalisé
    const response = await gemini(conversationContext, message.id, image)
    
    if (response && response.data) {
      await message.send(response.data, { quoted: message.data })
    }
  } catch (error) {
    console.error('Erreur Fox:', error)
    await message.send(
      "Hmm... *se gratte la tête* Désolé, j'ai un petit bug là. Ça arrive même aux meilleurs ! 😅",
      { quoted: message.data }
    )
  }
})

// Gestionnaire pour les messages du bot (conversation continue)
bot({ on: 'text', fromMe: true, type: 'foxContinue' }, async (message) => {
  // Vérifier si Fox est actif
  const isActiveForUser = await getFox(message.jid, message.jid)
  const isActiveForGroup = await getFox(message.jid)
  
  if (!isActiveForUser && !isActiveForGroup) return

  // Continuer la conversation
  const conversationContext = `${getFoxPrompt(message)}\n\nFox vient de dire: ${message.text}\nContinue la conversation naturellement:`

  try {
    const response = await gemini(conversationContext, message.id)
    
    if (response && response.data) {
      await message.send(response.data, { quoted: message.data })
    }
  } catch (error) {
    console.error('Erreur Fox continue:', error)
  }
})

// Exporter les fonctions pour utilisation dans d'autres fichiers
module.exports = {
  setFox,
  getFox,
  getFoxPrompt,
  isPapa
} 