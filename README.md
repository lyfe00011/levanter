#WhatsApp MD User Bot (Levanter)

A powerful, feature-rich WhatsApp bot with multi-session support, plugin
system, group moderation, media tools, and an optional **API** for
sending and receiving messages programmatically.

## Features

- **Multi-Session** – run several WhatsApp accounts from one instance.
- **Plugin System** – built-in and external (`eplugins`) command plugins.
- **Group Moderation** – anti-link, anti-spam, anti-word, warnings, welcome/goodbye.
- **Media Tools** – stickers, conversions, downloads, and more.
- **API Mode** – send messages and receive incoming messages via webhooks ([see below](#-api-mode)).
- **Localized** – responses in 11 languages.
- **Easy Deployment** – Koyeb, Render, Heroku, or any VPS/PC.

## Supported Languages

Set your preferred language with `BOT_LANG` in `config.env`.

| Code | Language   |
|------|------------|
| `en` | English    |
| `es` | Spanish    |
| `fr` | French     |
| `hi` | Hindi      |
| `bn` | Bengali    |
| `id` | Indonesian |
| `ur` | Urdu       |
| `tr` | Turkish    |
| `ru` | Russian    |
| `ar` | Arabic     |
| `ml` | Malayalam  |
| `zh` | Chinese    |

```env
BOT_LANG=es
```

---

## 🔌 API Mode

Expose an API to **send messages** and **receive incoming messages via
webhooks** — useful for integrating the bot with your own app, CRM, or
chat dashboard.

### Enable

`API_MODE` is a tri-state switch:

| Value | Mode | Behavior |
|-------|------|----------|
| `false` *(default)* | bot only | normal bot, API off |
| `true` | bot **+** api | commands work **and** the API is exposed |
| `only` | api only | pure gateway, no bot commands |

Minimal `config.env` to turn it on:

```env
API_MODE=true
API_KEY=your-secret-key      # required — every request needs it
PORT=3000                    # port
API_PUBLIC_URL=https://bot.example.com   # public base url (for media links)
API_WEBHOOK_URL=https://your-app.com/hook # optional — receive incoming messages
```

On start, the bot messages itself an **API quick-start card** (localized) with
the base URL, auth status, and a ready-to-run example.

### Authentication

Every request must carry your key as a header:

```
x-api-key: your-secret-key
```

Requests without a valid key get `401`. If `API_KEY` is unset, the API is locked.

### Sessions

Sessions are addressed by **positional index** — `"0"` is the first session,
`"1"` the second, and so on (following the `SESSION_ID` order). `session` is
optional in requests and defaults to `"0"`.

---

### `POST /api/send` — send a message

Body:

| Field | Required | Notes |
|-------|----------|-------|
| `to` | ✅ | phone number (`919876543210`) or full jid (`...@g.us` for a group) |
| `type` | ✅ | `text` \| `image` \| `video` \| `audio` \| `document` |
| `text` | for `text` | body, or caption for media |
| `url` | for media | **public http(s) URL** of the media |
| `session` | – | defaults to `"0"` |
| `fileName` | – | document/file name |
| `mimetype` | – | override mimetype |
| `ptt` | – | `true` sends audio as a voice note |
| `quoted` | – | a received message `id` to reply/quote |

**Send text:**

```bash
curl -X POST https://bot.example.com/api/send \
 -H "x-api-key: your-secret-key" \
 -H "Content-Type: application/json" \
 -d '{"to":"919876543210","type":"text","text":"hello from api"}'
```

**Send an image with caption:**

```bash
curl -X POST https://bot.example.com/api/send \
 -H "x-api-key: your-secret-key" \
 -H "Content-Type: application/json" \
 -d '{"to":"919876543210","type":"image","url":"https://picsum.photos/600","text":"nice pic"}'
```

**Reply to a received message:**

```bash
curl -X POST https://bot.example.com/api/send \
 -H "x-api-key: your-secret-key" \
 -H "Content-Type: application/json" \
 -d '{"to":"919876543210","type":"text","text":"got it","quoted":"<msgId-from-webhook>"}'
```

Response:

```json
{ "status": 200, "id": "3EB0XXXXXXXXXXXX" }
```

---

### `GET /api/sessions` — list sessions

```bash
curl https://bot.example.com/api/sessions -H "x-api-key: your-secret-key"
```

```json
{
  "count": 1,
  "sessions": [
    { "id": "0", "name": "main", "connected": true, "number": "919876543210" }
  ]
}
```

`number` is `null` until the session connects.

---

### `GET /api/media/:session/:id` — download received media

Fetch the bytes of a received image/video/audio/document by its message id
(the id from a webhook payload). Media is cached ~10 minutes after arrival.

```bash
curl https://bot.example.com/api/media/0/<msgId> -H "x-api-key: your-secret-key" -o file.jpg
```

---

### Webhooks — receive incoming messages

Set `API_WEBHOOK_URL` and the bot POSTs a JSON payload for **every incoming
message** (its own and other bots' messages are skipped):

```json
{
  "session": "0",
  "id": "3EB0XXXX",
  "from": "919876543210@s.whatsapp.net",
  "sender": "919876543210@s.whatsapp.net",
  "pushName": "Alice",
  "isGroup": false,
  "timestamp": 1736500000,
  "type": "image",
  "text": "check this",
  "media": {
    "mimetype": "image/jpeg",
    "fileName": "photo.jpg",
    "url": "https://bot.example.com/api/media/0/3EB0XXXX"
  },
  "quoted": null
}
```

- `media` is present only for media messages; download it from `media.url`
  (send your `x-api-key`).
- The webhook request itself carries `x-api-key` so you can verify it's from your bot.

### Environment variables

| Variable | Default | Description |
|----------|---------|-------------|
| `API_MODE` | `false` | `false` \| `true` \| `only` |
| `API_KEY` | – | secret for the `x-api-key` header (required) |
| `PORT` | `3000` | port |
| `API_PUBLIC_URL` | auto | public base url used in media links. Auto-detected on Render/Heroku; set manually behind a proxy/custom domain/VPS |
| `API_WEBHOOK_URL` | – | where incoming messages are POSTed (optional) |

### Notes & limits

- Media is **URL-only** for sending; the bot downloads the URL (or, for webhooks, serves a download link). Only `http(s)` URLs to public hosts are accepted (private/loopback/metadata hosts are blocked).
- A single `API_KEY` grants access to **all** sessions — intended for single-tenant use.
- API sends share the bot's send queue; avoid flooding.

---

## Deployment

### 1️⃣ Koyeb

[Deploy Now](https://levanter.site/) to set up on Koyeb.

### 2️⃣ Render

[Deploy Now](https://levanter.site/) to set up on Render.

### 3️⃣ VPS or PC (Ubuntu)

**Quick install:**

```sh
bash <(curl -fsSL http://bit.ly/43JqREw)
```

**Manual install:**

1. **System deps:**

   ```sh
   sudo apt update && sudo apt upgrade -y
   sudo apt install git ffmpeg curl -y
   ```

2. **Node.js 20.x:**

   ```sh
   curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
   sudo apt install nodejs -y
   ```

3. **Yarn + PM2:**

   ```sh
   sudo npm install -g yarn
   yarn global add pm2
   ```

4. **Clone & install:**

   ```sh
   git clone https://github.com/lyfe00011/levanter botName
   cd botName
   yarn install
   ```

5. **Configure `config.env`:**

   ```sh
   SESSION_ID=your_session_id_here
   PREFIX=.
   STICKER_PACKNAME=LyFE
   ALWAYS_ONLINE=false
   RMBG_KEY=null
   LANGUAG=en
   BOT_LANG=en
   WARN_LIMIT=3
   FORCE_LOGOUT=false
   BRAINSHOP=159501,6pq8dPiYt7PdqHz3
   MAX_UPLOAD=200
   REJECT_CALL=false
   SUDO=989876543210
   TZ=Asia/Kolkata
   VPS=true
   AUTO_STATUS_VIEW=true
   SEND_READ=true
   AJOIN=true
   DISABLE_START_MESSAGE=false
   PERSONAL_MESSAGE=null

   # --- API mode (optional) ---
   # API_MODE=true
   # API_KEY=your-secret-key
   # PORT=3000
   # API_PUBLIC_URL=https://bot.example.com
   # API_WEBHOOK_URL=https://your-app.com/hook
   ```

6. **Run with PM2:**

   ```sh
   pm2 start . --name botName --attach --time   # start
   pm2 stop botName                              # stop
   ```

---

## Credits

- **[Yusuf Usta](https://github.com/Quiec)** – creator of [WhatsAsena](https://github.com/yusufusta/WhatsAsena).
- **[@adiwajshing](https://github.com/adiwajshing)** – developer of [Baileys](https://github.com/adiwajshing/Baileys).

---

## 🛠 Need Help?

- [Bot Environment Variables](https://levanter.site/)
- [Frequently Asked Questions](https://levanter.site/)
