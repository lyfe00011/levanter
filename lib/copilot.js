const b3 = require('axios');
const b4 = require('ws');
const b5 = require('crypto');
const { genHeader: b6 } = require('./constants/spam.js');
class b7 {
  constructor(i) {
    this.axios = b3.create();
    this.baseHeaders = b6();
    this.conversation = null;
    this.cookies = i || '';
  }
  _logError(j, k) {
    if (j.response) {
      console.error('  Status Code: ' + j.response.status);
      console.error('  Data       : ' + JSON.stringify(j.response.data, null, 2));
    } else {
      if (j.request) {
        console.error('  Request    : No response received from server.');
      } else {
        console.error('  Pesan      : ' + j.message);
      }
    }
  }
  _getImageType(j) {
    const m = j.toString('hex', 0, 4).toUpperCase();
    if (m.startsWith('FFD8FF')) {
      return 'image/jpeg';
    }
    if (m.startsWith('89504E47')) {
      return 'image/png';
    }
    if (m.startsWith('47494638')) {
      return 'image/gif';
    }
    if (m.startsWith('52494646')) {
      if ('WEBP' === j.toString('ascii', 8, 12)) {
        return 'image/webp';
      }
    }
    return m.startsWith('424D') ? 'image/bmp' : 'image/jpeg';
  }
  async genConversation() {
    try {
      const m = await this.axios.post('https://copilot.microsoft.com/c/api/conversations', null, {
        headers: {
          ...this.baseHeaders,
          'Content-Type': 'application/json',
        },
      });
      const n = m.headers['set-cookie'];
      n && (this.cookies = n.map((p) => p.split(';')[0]).join('; '));
      this.conversation = m.data;
      this.conversation;
      return this.conversation;
    } catch (p) {
      this._logError(p, 'genConversation()');
      throw new Error('Failed to create conversation.');
    }
  }
  async genImage(l) {
    if (!this.conversation?.id) {
      throw new Error('Session not initialized. Call genConversation() first.');
    }
    try {
      let p;
      let q = 'image/jpeg';
      if ('string' == typeof l && l.startsWith('http')) {
        const w = {
          responseType: 'arraybuffer',
        };
        const x = await b3.get(l, w);
        p = Buffer.from(x.data);
        q = x.headers['content-type'] || this._getImageType(p);
      } else {
        if (!Buffer.isBuffer(l)) {
          throw new Error('Invalid imageUrl format (must be URL or Buffer).');
        }
        p = l;
        q = this._getImageType(p);
      }
      const u = {
        Referer: 'https://copilot.microsoft.com/chats/' + this.conversation.id,
        Cookie: this.cookies,
        Accept: '*/*',
      };
      u['Content-Type'] = q;
      u['User-Agent'] = this.baseHeaders['User-Agent'];
      u['Accept-Language'] = 'en-US,en;q=0.9';
      const v = u;
      return (
        await this.axios.post('https://copilot.microsoft.com/c/api/attachments', p, {
          headers: v,
          maxContentLength: 1e400,
          maxBodyLength: 1e400,
        })
      ).data;
    } catch (z) {
      this._logError(z, 'genImage()');
      throw new Error('Failed to upload image.');
    }
  }
  async chat({ prompt: i, imageUrl: j, mode: k, conversationId: l, ...m }) {
    return new Promise(async (x, y) => {
      try {
        if (l) {
          this.conversation = {
            id: l,
          };
        } else {
          if (!this.conversation?.id) {
            try {
              await this.genConversation();
            } catch (N) {
              const O = b5.randomUUID();
              const P = {
                id: O,
              };
              this.conversation = P;
              console.warn(
                '[WARN] HTTP session initiation failed. Using fallback conversation ID from crypto: ' +
                  O,
              );
            }
          }
        }
        let B = 'chat';
        if (k && ['chat', 'smart', 'reasoning'].includes(k)) {
          B = k;
        } else {
          k && console.warn('[WARN] Mode "' + k + "\" invalid. Using default mode 'chat'.");
        }
        let C = null;
        if (j) {
          try {
            C = await this.genImage(j);
          } catch (S) {
            console.warn('[WARN] ' + S.message + '. Proceeding with text prompt only.');
          }
        }
        const D = new URL('wss://copilot.microsoft.com/c/api/chat');
        const E = {
          features: '-,ncedge,edgepagecontext',
          setflight: '-,ncedge,edgepagecontext',
          ncedge: '1',
        };
        E['api-version'] = '2';
        D.search = new URLSearchParams(E).toString();
        const F = {
          ...this.baseHeaders,
        };
        F.Cookie = this.cookies;
        const G = F;
        const H = new b4(D.href, {
          headers: G,
        });
        const I = {
          conversationId: this.conversation.id,
          messageId: null,
          mode: B,
          createdAt: null,
          requestId: null,
          attachment: C,
          events: [],
        };
        let J = false;
        let K = '';
        let L = I;
        H.on('message', (T) => {
          try {
            const W = JSON.parse(T.toString());
            L.events.push(W);
            if (!J && 'connected' === W.event) {
              J = true;
              L.requestId = W.requestId;
              const Y = [];
              C?.url &&
                Y.push({
                  type: 'image',
                  url: C.url,
                });
              i &&
                Y.push({
                  type: 'text',
                  text: i,
                });
              if (0 === Y.length) {
                H.close();
                return y(new Error('No content (prompt or image) to send.'));
              }
              const Z = {
                ...m,
              };
              const a0 = {
                event: 'send',
                conversationId: this.conversation.id,
                content: Y,
                mode: B,
                context: Z,
              };
              const a1 = a0;
              return void H.send(JSON.stringify(a1));
            }
            if (J) {
              ('received' !== W.event && 'startMessage' !== W.event) ||
                ((L.messageId = W.messageId), (L.createdAt = W.createdAt));
              'modeSelected' === W.event && (L.mode = W.mode);
              const a2 = 'appendText' === W.event || 'chainOfThought' === W.event ? W.text : '';
              K += a2;
              if ('done' === W.event) {
                H.close(1000, 'Streaming Finished');
                x({
                  result: K.trim().replaceAll('**', '*'),
                  metadata: {
                    conversationId: L.conversationId,
                    messageId: L.messageId,
                    mode: L.mode,
                    createdAt: L.createdAt,
                    requestId: L.requestId,
                    attachment: L.attachment,
                    totalEvents: L.events.length,
                    timestamp: new Date().toISOString(),
                  },
                  raw: {
                    events: L.events,
                  },
                });
              }
            }
          } catch (a4) {
            console.error('[ERROR] Failed to parse JSON message from WebSocket:', a4.message);
          }
        });
        H.on('error', (T) => {
          this._logError(T, 'WebSocket');
          y(new Error('WebSocket connection error.'));
        });
      } catch (U) {
        y(U);
      }
    });
  }
  getCurrentConversationId() {
    return this.conversation?.id || null;
  }
  resetConversation() {
    this.conversation = null;
    this.cookies = '';
  }
}
module.exports = b7;
