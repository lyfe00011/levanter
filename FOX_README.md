# 🦊 Fox Plugin - Conversational AI Assistant

## 📋 Description

Fox is an intelligent conversational AI assistant that combines Lydia's logic (continuous responses) with Gemini's power (Google's AI). It's designed to "replace" Arthur Donfack (Fox) in his absence with a unique and natural personality.

## 🎯 Features

### ✨ Main Characteristics
- **🤖 Conversational AI** : Uses Google's Gemini API
- **🔄 Continuous Responses** : Works like Lydia with on/off activation
- **🖼️ Image Analysis** : Can analyze and comment on images
- **🌍 Multilingual** : Responds in the user's language
- **👤 Unique Personality** : Natural personality, sometimes sarcastic
- **🎭 Papa Detection** : Becomes very gentle when Arthur Donfack speaks

### 🎪 Fox's Personality
- **Cool and funny** : Natural responses with humor
- **Sometimes vulgar** : Relaxed and authentic language
- **Character** : Can get angry or annoyed
- **Respectful** : Very respectful towards his papa
- **Promoter** : Often suggests the-fox.tech and GitHub

## 🚀 Installation

### 1. Required Configuration
```bash
# Make sure you have a Gemini API key
GEMINI_API_KEY=your_gemini_api_key_here
```

### 2. Files to add
- `plugins/fox.js` - Main plugin
- `plugins/foxmenu.js` - Control menu
- `lib/db/fox.js` - Database system

### 3. Personal Configuration
In `plugins/fox.js`, modify the line:
```javascript
const papaNumbers = ['your_number_here'] // Replace with your real number
```

## 📱 Usage

### 🎮 Main Commands

#### Activation/Deactivation
```bash
fox on          # Activate Fox for the group
fox off         # Deactivate Fox for the group
fox on @user    # Activate Fox for a specific user
fox off @user   # Deactivate Fox for a specific user
```

#### Control Menu
```bash
foxmenu         # Display main menu
foxmenu status  # View active sessions
foxmenu clear   # Deactivate all sessions
foxmenu help    # Complete help
```

### 💬 Usage Examples

#### Normal Conversation
```
User: Hi Fox!
Fox: Hi! How are you? 😎
```

#### With Image
```
User: [sends an image]
Fox: Wow, what's this image? It looks cool! 🤔
```

#### When it's Papa
```
Arthur: Hi my son
Fox: Papa! 🥰 I'm so happy to talk to you! How are you?
```

## 🏗️ Technical Architecture

### 📊 Database Structure
```sql
fox_state {
  chat: STRING,      -- Chat ID
  user: STRING,      -- User ID (optional)
  isActive: BOOLEAN, -- Activation state
  session: STRING    -- Session ID
}
```

### 🔄 Workflow
1. **Activation Detection** : Checks if Fox is active for chat/user
2. **Message Analysis** : Detects if papa is speaking
3. **Prompt Construction** : Creates personalized context
4. **Gemini Call** : Sends request to API
5. **Automatic Response** : Sends response in chat

### 🎭 Personality System
- **Dynamic Prompt** : Adapts based on who's speaking
- **Papa Detection** : By name or phone number
- **Smart Cache** : Optimizes performance
- **Error Handling** : Natural responses in case of problems

## 🔧 Advanced Configuration

### 🎨 Prompt Customization
Modify the `getFoxPrompt()` function in `plugins/fox.js` to adjust personality.

### 📞 Papa Detection
Add your identifiers in the `isPapa()` function:
```javascript
const papaKeywords = ['arthur', 'donfack', 'fox', 'papa', 'dad']
const papaNumbers = ['your_number_here']
```

### 🌐 Multilingual Support
Fox automatically detects language and responds in the same language.

## 🐛 Troubleshooting

### Common Issues
1. **Fox doesn't respond** : Check that `GEMINI_API_KEY` is configured
2. **Database errors** : Check SQLite permissions
3. **No papa detection** : Add your number in `papaNumbers`

### Logs
Errors are logged in console with "Erreur Fox:" prefix

## 🤝 Contribution

To improve Fox:
1. Modify prompt in `getFoxPrompt()`
2. Add new features
3. Improve papa detection
4. Optimize performance

## 📄 License

This plugin is part of the Levanter WhatsApp Bot project.

---

**Created with ❤️ by Arthur Donfack (Fox)**
*Expert in Engineering Sciences*
🌐 [the-fox.tech](https://the-fox.tech)
🐙 [GitHub](https://github.com/Tiger-Foxx) 