const { Sequelize } = require('sequelize')
const { DataTypes } = require('sequelize')
const db = require('../index.js').DATABASE

// Modèle pour stocker l'état de Fox
const FoxState = db.define('fox_state', {
  chat: {
    type: DataTypes.STRING,
    allowNull: false
  },
  user: {
    type: DataTypes.STRING,
    allowNull: true
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  session: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: '0'
  }
})

// Cache en mémoire pour optimiser les performances
const foxCache = new Map()

// Fonction pour activer/désactiver Fox
const setFox = async (chatId, isActive, userId = null, messageId) => {
  const cacheKey = userId ? `${chatId}-${userId}` : chatId
  
  try {
    // Mettre à jour la base de données
    const [foxState, created] = await FoxState.findOrCreate({
      where: {
        chat: chatId,
        user: userId || null
      },
      defaults: {
        isActive: isActive,
        session: messageId || '0'
      }
    })

    if (!created) {
      await foxState.update({
        isActive: isActive,
        session: messageId || foxState.session
      })
    }

    // Mettre à jour le cache
    foxCache.set(cacheKey, isActive)
    
    return isActive
  } catch (error) {
    console.error('Erreur setFox:', error)
    return false
  }
}

// Fonction pour vérifier si Fox est actif
const getFox = async (chatId, userId = null) => {
  const cacheKey = userId ? `${chatId}-${userId}` : chatId
  
  // Vérifier d'abord le cache
  if (foxCache.has(cacheKey)) {
    return foxCache.get(cacheKey)
  }

  try {
    // Chercher dans la base de données
    const foxState = await FoxState.findOne({
      where: {
        chat: chatId,
        user: userId || null
      }
    })

    const isActive = foxState ? foxState.isActive : false
    
    // Mettre à jour le cache
    foxCache.set(cacheKey, isActive)
    
    return isActive
  } catch (error) {
    console.error('Erreur getFox:', error)
    return false
  }
}

// Fonction pour obtenir tous les états Fox actifs
const getAllActiveFox = async () => {
  try {
    const activeStates = await FoxState.findAll({
      where: {
        isActive: true
      }
    })
    
    return activeStates.map(state => ({
      chat: state.chat,
      user: state.user,
      session: state.session
    }))
  } catch (error) {
    console.error('Erreur getAllActiveFox:', error)
    return []
  }
}

// Fonction pour supprimer un état Fox
const deleteFox = async (chatId, userId = null) => {
  const cacheKey = userId ? `${chatId}-${userId}` : chatId
  
  try {
    await FoxState.destroy({
      where: {
        chat: chatId,
        user: userId || null
      }
    })
    
    // Supprimer du cache
    foxCache.delete(cacheKey)
    
    return true
  } catch (error) {
    console.error('Erreur deleteFox:', error)
    return false
  }
}

// Fonction pour nettoyer le cache
const clearFoxCache = () => {
  foxCache.clear()
}

// Synchroniser la base de données
FoxState.sync()

module.exports = {
  setFox,
  getFox,
  getAllActiveFox,
  deleteFox,
  clearFoxCache,
  FoxState
} 