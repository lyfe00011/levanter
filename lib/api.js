const aW = require('crypto');
const aX = require('net');
const aY = require('../config');
const aZ = require('./config');
const { NodeCache: b0 } = require('@cacheable/node-cache');
const { loadBaileys: b1 } = require('./baileys');
let b2;
let b3;
const b4 = {
  conversation: 'text',
  extendedTextMessage: 'text',
  imageMessage: 'image',
  videoMessage: 'video',
  audioMessage: 'audio',
  documentMessage: 'document',
};
const b5 = {
  stdTTL: 600,
  useClones: false,
  checkperiod: 120,
  maxKeys: 5000,
};
const b6 = ['image', 'video', 'audio', 'document'];
const b7 = ['text', ...b6];
const b8 = b4;
const b9 = new b0(b5);
const ba = (j) => (String(j).includes('@') ? String(j) : j + '@s.whatsapp.net');
const bb = /^[\w.+-]+(@[\w.-]+)?$/;
const bc = (j) => {
  const D = String(j)
    .toLowerCase()
    .replace(/^\[|\]$/g, '');
  if (!D || 'localhost' === D || D.endsWith('.localhost')) {
    return true;
  }
  if (aX.isIP(D)) {
    if ('0.0.0.0' === D || '::' === D || '::1' === D) {
      return true;
    }
    if (/^127\./.test(D) || /^10\./.test(D) || /^192\.168\./.test(D)) {
      return true;
    }
    if (/^169\.254\./.test(D)) {
      return true;
    }
    if (/^172\.(1[6-9]|2\d|3[01])\./.test(D)) {
      return true;
    }
    if (/^(fc|fd|fe80)/.test(D)) {
      return true;
    }
  }
  return false;
};
const bd = (j) => {
  let D;
  try {
    D = new URL(String(j));
  } catch (Q) {
    return false;
  }
  return ('http:' === D.protocol || 'https:' === D.protocol) && !bc(D.hostname);
};
const be = ({ type: F, text: Q, url: V, fileName: W, mimetype: X, ptt: Y } = {}) => {
  if ('text' === F) {
    if (!Q) {
      throw new Error('text is required for type text');
    }
    const a0 = {
      text: Q,
    };
    const a1 = {
      message: a0,
      options: {},
    };
    return a1;
  }
  if (b6.includes(F)) {
    if (!V) {
      throw new Error('url is required for type ' + F);
    }
    if (!bd(V)) {
      throw new Error('invalid or unsafe url');
    }
    const a2 = {};
    const a3 = {
      url: V,
    };
    Q && (a2.caption = Q);
    W && (a2.fileName = W);
    X && (a2.mimetype = X);
    Y && (a2.ptt = true);
    return {
      message: {
        [F]: a3,
        ...a2,
      },
      options: a2,
    };
  }
  throw new Error('unsupported type: ' + F);
};
const bf = (j) =>
  null == j
    ? 0
    : 'number' == typeof j
      ? j
      : 'function' == typeof j.toNumber
        ? j.toNumber()
        : Number(j) || 0;
const bg = (j, z, D = '') => {
  if (!j || j.fromMe || j.isBot) {
    return null;
  }
  const Q = b8[j.type];
  if (!Q) {
    return null;
  }
  const V = j.key && j.key.id;
  const W = {
    session: String(z),
    id: V,
    from: j.key && j.key.remoteJid,
    sender: j.participant,
    pushName: j.pushName,
    isGroup: !!j.isGroup,
    timestamp: bf(j.messageTimestamp),
    type: Q,
    text: j.text || '',
    media: void 0,
    quoted: j.quoted
      ? {
          id: j.quoted.key && j.quoted.key.id,
          sender: j.quoted.participant,
          text: j.quoted.text || '',
        }
      : null,
  };
  if (b6.includes(Q)) {
    const X = j.message && j.message[j.type];
    W.media = {
      mimetype: X && X.mimetype,
      fileName: X && X.fileName,
      url: D + '/api/media/' + W.session + '/' + V,
    };
  }
  return W;
};
const bh = (z) => {
  const Q = z.headers['x-api-key'];
  if (!aY.API_KEY || 'string' != typeof Q) {
    return false;
  }
  const V = Buffer.from(Q);
  const W = Buffer.from(aY.API_KEY);
  return V.length === W.length && aW.timingSafeEqual(V, W);
};
let bi = null;
async function bj() {
  const W = (function () {
    let a1 = true;
    return function (a2, a3) {
      const a6 = a1
        ? function () {
            if (a3) {
              const a8 = a3.apply(a2, arguments);
              a3 = null;
              return a8;
            }
          }
        : function () {};
      a1 = false;
      return a6;
    };
  })();
  const Y = (function () {
    let a1 = true;
    return function (a2, a3) {
      const a5 = a1
        ? function () {
            if (a3) {
              const a6 = a3.apply(a2, arguments);
              a3 = null;
              return a6;
            }
          }
        : function () {};
      a1 = false;
      return a5;
    };
  })();
  try {
    b3 || (b3 = require('axios').default || require('axios'));
    const a0 = {
      timeout: 5000,
    };
    const { data: a1 } = await b3.get('https://api.ipify.org', a0);
    a1 && (bi = String(a1).trim());
  } catch (a2) {}
}
const bk = () => {
  const z = (F) => String(F).replace(/\/+$/, '');
  const D = process.env.PORT || 3000;
  return aY.API_PUBLIC_URL
    ? z(aY.API_PUBLIC_URL)
    : process.env.RENDER_EXTERNAL_URL
      ? z(process.env.RENDER_EXTERNAL_URL)
      : aY.HEROKU_APP_NAME
        ? 'https://' + aY.HEROKU_APP_NAME + '.herokuapp.com'
        : bi
          ? 'http://' + bi + ':' + D
          : 'http://localhost:' + D;
};
const bl =
  aY.API_ENABLED && !aY.API_PUBLIC_URL && !process.env.RENDER_EXTERNAL_URL && !aY.HEROKU_APP_NAME;
const bm = bl ? bj() : Promise.resolve();
let bn = null;
const bo = () => bn || (bn = bk());
const bp = (D, F, Q) => {
  const X = {};
  X['Content-Type'] = 'application/json';
  D.writeHead(F, X);
  D.end(JSON.stringify(Q));
};
const bq = 1048576;
const br = (j) =>
  new Promise((z, D) => {
    const Q = [];
    let V = 0;
    let W = false;
    j.on('data', (X) => {
      if (W) {
        return;
      }
      const a0 = Buffer.isBuffer(X) ? X : Buffer.from(String(X));
      V += a0.length;
      if (V > bq) {
        W = true;
        const a1 = new Error('body too large');
        a1.statusCode = 413;
        j.resume && j.resume();
        return D(a1);
      }
      Q.push(a0);
    });
    j.on('end', () => {
      if (W) {
        return;
      }
      W = true;
      const X = Buffer.concat(Q).toString('utf8');
      try {
        z(X ? JSON.parse(X) : {});
      } catch (Y) {
        D(Y);
      }
    });
    j.on('error', (X) => {
      W || ((W = true), D(X));
    });
  });
const bs = (j) => {
  const D = String(j);
  const F = aZ.sessions;
  if (Array.isArray(F) && F.includes(D)) {
    return aZ[D];
  }
};
const bt = (j) => !(!j || !j.sock);
async function bu(Q, V) {
  let X;
  try {
    X = await br(Q);
  } catch (aa) {
    return 413 === aa.statusCode
      ? bp(V, 413, {
          error: 'body too large (max 1MB)',
        })
      : bp(V, 400, {
          error: 'invalid json',
        });
  }
  if (!X || 'object' != typeof X || Array.isArray(X)) {
    return bp(V, 400, {
      error: 'body must be a json object',
    });
  }
  const { to: Y, type: Z, quoted: a0 } = X;
  const a1 = void 0 === X.session || null === X.session ? '0' : X.session;
  if (!Y || !Z) {
    return bp(V, 400, {
      error: 'to and type are required',
    });
  }
  if (!bb.test(String(Y))) {
    return bp(V, 400, {
      error: 'invalid to',
    });
  }
  if (!b7.includes(Z)) {
    return bp(V, 400, {
      error: 'unsupported type: ' + Z,
    });
  }
  if (!Array.isArray(aZ.sessions)) {
    return bp(V, 503, {
      error: 'bot is starting, try again shortly',
    });
  }
  const a2 = bs(a1);
  const a3 = {
    error: 'unknown session: ' + a1,
  };
  if (!a2 || !a2.queue) {
    return bp(V, 400, a3);
  }
  if (!bt(a2)) {
    return bp(V, 503, {
      error: 'session not connected',
    });
  }
  let a4;
  try {
    a4 = be(X);
  } catch (ab) {
    const ac = {
      error: ab.message,
    };
    return bp(V, 400, ac);
  }
  const a5 = a4.options;
  if (a0) {
    const ae = b9.get(String(a1) + ':' + a0);
    ae && ae.msg && (a5.quoted = ae.msg);
  }
  const a6 = ba(Y);
  let a7;
  try {
    const af = {
      type: 'prepare_message',
      chat: a6,
      message: a4.message,
      options: a5,
    };
    a7 = await a2.queue.push(af);
  } catch (ah) {
    return bp(V, 500, {
      error: 'send failed',
    });
  }
  const a8 = {
    status: 200,
    id: a7 && a7.key ? a7.key.id : void 0,
  };
  return bp(V, 200, a8);
}
const bv = 30000;
async function bw(z, D, F, Q) {
  const W = b9.get(String(F) + ':' + Q);
  if (!W || !W.msg || !W.mimetype) {
    return bp(D, 404, {
      error: 'media not found or expired',
    });
  }
  try {
    b2 || (b2 = (await b1()).downloadMediaMessage);
    const X = await Promise.race([
      b2(W.msg, 'buffer'),
      new Promise((Z, a0) => setTimeout(() => a0(new Error('media download timeout')), bv)),
    ]);
    const Y = {};
    Y['Content-Type'] = W.mimetype || 'application/octet-stream';
    D.writeHead(200, Y);
    D.end(X);
  } catch (Z) {
    bp(D, 500, {
      error: 'download failed',
    });
  }
}
let bx;
const by = (j) => {
  const D = j && j.sock && j.sock.user;
  const F = D && (D.jid || D.id);
  if (F) {
    bx || (bx = require('./index').jidToNum);
    return bx(F).split(':')[0] || null;
  } else {
    return null;
  }
};
function bz(z, D) {
  if (!Array.isArray(aZ.sessions)) {
    return bp(D, 503, {
      error: 'bot is starting, try again shortly',
    });
  }
  const Q = (aZ.sessions || []).map((W) => {
    const X = aZ[W] || {};
    return {
      id: W,
      name: (X.env && X.env.SESSION_NAME) || W,
      connected: bt(X),
      number: by(X),
    };
  });
  const V = {
    count: Q.length,
    sessions: Q,
  };
  bp(D, 200, V);
}
async function bA(j, z) {
  try {
    if (!bh(j)) {
      return bp(z, 401, {
        status: 401,
        error: 'Unauthorized',
      });
    }
    const F = j.url.split('?')[0].split('/').filter(Boolean);
    const Q = F[1];
    return 'POST' === j.method && 'send' === Q
      ? await bu(j, z)
      : 'GET' === j.method && 'media' === Q
        ? await bw(j, z, F[2], F[3])
        : 'GET' === j.method && 'sessions' === Q
          ? bz(j, z)
          : bp(z, 404, {
              error: 'Not Found',
            });
  } catch (V) {
    z.headersSent ||
      bp(z, 500, {
        error: 'internal error',
      });
  }
}
function bB(z, D) {
  try {
    if (!z || z.fromMe || z.isBot) {
      return;
    }
    const Q = b8[z.type];
    if (!Q) {
      return;
    }
    const V = z.key && z.key.id;
    if (V && z.message) {
      const W = z.message[z.type];
      try {
        const Y = {
          key: z.key,
          message: z.message,
        };
        b9.set(String(D) + ':' + V, {
          msg: Y,
          mimetype: b6.includes(Q) ? W && W.mimetype : void 0,
        });
      } catch (Z) {}
    }
    if (!aY.API_WEBHOOK_URL) {
      return;
    }
    bm.then(() => {
      const a1 = bg(z, D, bo());
      a1 &&
        (b3 || (b3 = require('axios').default || require('axios')),
        b3
          .post(aY.API_WEBHOOK_URL, a1, {
            headers: {
              'x-api-key': aY.API_KEY,
            },
            timeout: 15000,
          })
          .catch((a2) => {
            try {
              require('./index').logger.debug('api webhook post failed: ' + a2.message);
            } catch (a4) {}
          }));
    });
  } catch (a0) {}
}
function bC(j) {
  j.on('incoming.message', (D) => {
    bB(D, D.session);
  });
}
const bD = {
  resolveJid: ba,
  buildContent: be,
  buildWebhookPayload: bg,
  authOk: bh,
  resolvePublicUrl: bk,
  handle: bA,
  onIncoming: bB,
  subscribe: bC,
  msgCache: b9,
};
module.exports = bD;
