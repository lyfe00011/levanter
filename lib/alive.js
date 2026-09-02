const {
  readFileSync: a0,
  existsSync: a1,
  mkdirSync: a2,
  readdirSync: a3,
  writeFileSync: a4,
} = require('fs-extra');
const a5 = require('path');
const { setAlive: a6, getAlive: a7 } = require('./db/alive');
const { secondsToHms: a8, download: a9, getQuote: aa, isUrl: ab, lang: ac } = require('./index');
const ad = a5.join(__dirname, '../media/alive');
a1(ad) || a2(ad);
const ae = (x) => {
  if (x) {
    const z = Number(process.uptime());
    const A = Math.floor(z / 3600);
    const B = Math.floor((z % 3600) / 60);
    const C = Math.floor((z % 3600) % 60);
    return (0 == A ? '' : A + 'h ') + (0 == B ? '' : B + 'm ') + (0 == C ? '' : C + 's');
  }
  return a8(process.uptime());
};
exports.getUptime = ae;
const af = async (x, y) => {
  y && (x = x.replace(y, ''));
  x = x.replace('#uptime', ae()).trim();
  if (/#quote/.test(x)) {
    const A = await aa();
    x = x.replace('#quote', A || '');
  }
  return x;
};
exports.uptimeQuoteReplace = af;
exports.aliveMessage = async (A, B) => {
  let D = 'text';
  if (A && (B.sudo || B.fromMe)) {
    if ('get' == A) {
      const K = await a7(B.id);
      const L = {
        msg: K?.message,
        options: {},
        type: D,
      };
      return L;
    }
    let I = 'null';
    let J = ab(A);
    if (J && J.startsWith('http')) {
      const M = await a9(J, B.id);
      if (M?.ext) {
        a4(a5.join(ad, B.id + '.' + M.ext), M.buffer);
        I = M.ext;
        D = M.type;
      } else {
        J = 'null';
      }
    }
    await a6(J, A, D, I, B.id);
  }
  const E = {
    caption: G.message,
  };
  let F = '';
  const G = await a7(B.id);
  if (!G) {
    return {
      msg: await af(ac.plugins.alive.default),
      options: E,
      type: D,
    };
  }
  G.message = await af(G.message, G.url);
  if ('text' != G.type) {
    const O = a3(ad).find((Q) => Q.startsWith(B.id));
    if (!O) {
      const R = await a9(G.url, B.id);
      if (R.error) {
        F = G.message;
        D = 'text';
        return {
          msg: F,
          options: E,
          type: D,
        };
      }
      a4(a5.join(ad, B.id + '.' + R.ext), R.buffer);
    }
    F = a0(a5.join(ad, O));
    const P = E.caption.includes('&gif');
    P && ((E.caption = E.caption.replace('&gif', '')), (E.gifPlayback = P));
    D = G.type;
  } else {
    F = G.message;
  }
  const H = {
    msg: F,
    options: E,
    type: D,
  };
  return H;
};
