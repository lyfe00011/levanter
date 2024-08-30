# WhatsApp MD User Bot

A simple WhatsApp User bot.

## Setup

### 1. Deploy on Heroku

1. **Scan QR Code:**
   - Click [SCAN](https://qr-hazel-alpha.vercel.app/md) and scan the QR code through the "WhatsApp Linked Devices" option in your WhatsApp app.
   - You will get a session ID in WhatsApp; copy the ID only.

2. **Create Accounts:**
   - If you don't have an account on [Heroku](https://signup.heroku.com/), [create an account now](https://signup.heroku.com/).
   - If you don't have a GitHub account, [sign up](https://github.com/join) now.

3. **Fork Repository:**
   - [FORK](https://github.com/lyfe00011/levanter/fork) this repository.

4. **Deploy:**
   - Now [DEPLOY](https://qr-hazel-alpha.vercel.app/heroku).

### 2. Deploy on Koyeb

1. **Create an Account:**
   - Create an account on [Koyeb](https://app.koyeb.com/auth/signup). [Sign up now](https://app.koyeb.com/auth/signup).

2. **Get Required Information:**
   - Get the [DATABASE_URL](https://github.com/lyfe00011/levanter/wiki/DATABASE_URL). You'll need this while deploying.
   - Get the [SESSION_ID](https://qr-hazel-alpha.vercel.app/md). Open Linked Devices in WhatsApp and [SCAN](https://qr-hazel-alpha.vercel.app/md) now.
   - Get the Koyeb API key. [Let's Go](https://app.koyeb.com/account/api).

3. **Deploy:**
   - [![Deploy to Koyeb](https://www.koyeb.com/static/images/deploy/button.svg)](https://qr-hazel-alpha.vercel.app/koyeb)
   - Enter [Environment Variables](https://levanter-plugins.vercel.app/env). [Read More](https://levanter-plugins.vercel.app/env).
   - Enter a name and click "Create Service."

### 3. Deploy on VPS or PC (Example here as in Ubuntu)

#### Install with Script

- Run the following command:
  ```sh
  bash <(curl -fsSL http://bit.ly/43JqREw)
  ```

#### Install without Script

1. **Install Git, ffmpeg, and curl:**
   ```sh
   sudo apt -y update && sudo apt -y upgrade
   sudo apt -y install git ffmpeg curl
   ```

2. **Install Node.js:**
   ```sh
   curl -fsSL https://deb.nodesource.com/setup_20.x -o nodesource_setup.sh
   sudo -E bash nodesource_setup.sh
   sudo apt-get install -y nodejs
   ```

3. **Install Yarn:**
   ```sh
   sudo npm install -g yarn
   ```

4. **Install pm2:**
   ```sh
   sudo yarn global add pm2
   ```

5. **Clone Repository and Install Packages:**
   ```sh
   git clone https://github.com/lyfe00011/levanter botName
   cd botName
   yarn install
   ```

6. **Enter Environment Variables:**
   ```sh
   echo "SESSION_ID = Session_Id_you_Got_After_Scan_Dont_Add_This_Line_If_You_Can_Scan_From_Terminal_Itself
   PREFIX = .
   STICKER_PACKNAME = LyFE
   ALWAYS_ONLINE = false
   RMBG_KEY = null
   LANGUAG = en
   WARN_LIMIT = 3
   FORCE_LOGOUT = false
   BRAINSHOP = 159501,6pq8dPiYt7PdqHz3
   MAX_UPLOAD = 200
   REJECT_CALL = false
   SUDO = 989876543210
   TZ = Asia/Kolkata
   VPS = true
   AUTO_STATUS_VIEW = true
   SEND_READ = true
   AJOIN = true
   DISABLE_START_MESSAGE = false
   PERSONAL_MESSAGE = null" > config.env
   ```

   - [Read More](https://levanter-plugins.vercel.app/env)

7. **Edit `config.env` Using Nano (if needed):**
   - To save, press `Ctrl + O`, then press `Enter`, and to exit, press `Ctrl + X`.

8. **Start and Stop the Bot:**
   - To start the bot:
     ```sh
     pm2 start . --name botName --attach --time
     ```
   - To stop the bot:
     ```sh
     pm2 stop botName
     ```

### 4. Deploy on Replit

[![Run on Replit](https://replit.com/badge/github/your-repo-owner/your-repo-name)](https://replit.com/@Nightbot2O/whatsapp-bot-md)

1. Fork the repository.
2. Edit `config.env`.
3. Click run.

### 5. Deploy on Render
1. **Create an Account:**
   - Create an account on [render](https://dashboard.render.com/register). [Sign up now](https://dashboard.render.com/register).

2. **Get Required Information:**
   - Get the [DATABASE_URL](https://github.com/lyfe00011/levanter/wiki/DATABASE_URL). You'll need this while deploying.
   - Get the [SESSION_ID](https://qr-hazel-alpha.vercel.app/md). Open Linked Devices in WhatsApp and [SCAN](https://qr-hazel-alpha.vercel.app/md) now.
   - Get the render API key. [Let's Go](https://dashboard.render.com/u/settings#api-keys).

3. **Deploy:**
   - [![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://qr-hazel-alpha.vercel.app/render)
### Thanks To

- [Yusuf Usta](https://github.com/Quiec) for [WhatsAsena](https://github.com/yusufusta/WhatsAsena)
- [@adiwajshing](https://github.com/adiwajshing) for [Baileys](https://github.com/adiwajshing/Baileys)
