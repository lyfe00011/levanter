const aj = (...D) => import('node-fetch').then(({ default: F }) => F(...D));
const ak = require('cheerio');
const { join: al } = require('path');
const am = require('pdfkit');
const {
  readFileSync: an,
  emptyDirSync: ao,
  readdirSync: ap,
  createWriteStream: aq,
  ensureDirSync: ar,
  existsSync: as,
} = require('fs-extra');
const at = require('axios').default;
const au = require('ws');
const av = require('./config');
const { genButtonMessage: aw, getUrl: ax } = require('./utils');
const { getSpam: ay } = require('./db');
const { spamCheck: az } = require('./antilink');
const { TEMP_DIR: aA } = require('./constant');
const aB =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36';
const aC = 600000;
let aD = null;
function aE() {
  const F = () => Math.floor(256 * Math.random());
  let G;
  for (;;) {
    G = F() + '.' + F() + '.' + F() + '.' + F();
    const [H] = G.split('.').map(Number);
    if (!(0 === H || 10 === H || 127 === H || H >= 224)) {
      break;
    }
  }
  return G;
}
exports.getImgUrl = async (D) => {
  const G = await aj(D);
  if (!G.ok) {
    throw new Error('Failed to fetch data: ' + G.statusText);
  }
  const H = await G.text();
  return ak.load(H)('#il_fi').attr('src');
};
exports.getCommon = function (F, G) {
  if (G) {
    const J = new Map();
    for (const L of F) for (const M of L) J.set(M, (J.get(M) || 0) + 1);
    const K = [];
    for (const [N, O] of J.entries()) O > 1 && K.push(N);
    return K;
  }
  return F.reduce((Q, R) => Q.filter((S) => R.includes(S)));
};
exports.buttonMessage = async (D, F) => {
  let H;
  const I = [];
  const J = D[0];
  const K = D[1];
  for (let L = 2; L < D.length; L++) {
    D[L].length > 0 &&
      I.push({
        id: D[L],
        text: D[L],
      });
  }
  F.reply_message &&
    F.reply_message.mimetype &&
    (H = {
      [F.reply_message.image ? 'image' : F.reply_message.video ? 'video' : 'document']:
        F.reply_message.message.message[F.reply_message.type],
    });
  return await aw(I, J, K, H, F);
};
exports.toPdf = async function () {
  const F = al(aA, 'pdf');
  ar(F);
  const G = as(F) ? ap(F) : [];
  if (0 == G.length) {
    throw new Error('Not added pages, Use page command');
  }
  const H = al(aA, 'pdf.pdf');
  return await new Promise((I) => {
    const J = [841.89, 1190.55];
    const K = new am({
      margin: 0,
      size: J,
    });
    for (let L = 0; L < G.length; L++) {
      K.image(al(F, G[L]), 0, 0, {
        fit: J,
        align: 'center',
        valign: 'center',
      });
      G.length != L + 1 && K.addPage();
    }
    K.end();
    K.pipe(aq(H)).on('finish', function () {
      ao(F);
      I(an(H));
    });
  });
};
exports.isSpam = async (D, F, G, H, I, J, K, L) => {
  const N = await ay(D, L);
  if (!N || !N.enabled) {
    return false;
  }
  const { level: O, action: P } = N;
  return {
    isSpam: az(D, F, G, H, I, J, K, O || 'medium', L),
    action: P || 'kick',
  };
};
const aF = {
  messages: [],
  t: 0,
};
const aG = aF;
const aH = 'https://levanter.onrender.com/';
exports.getGPTResponse = async function (H, I, J) {
  if (!I) {
    throw new Error('missing session');
  }
  const L = new Date().getTime() / 1000;
  let M;
  L - aG.t > 600 && (aG.messages = []);
  aG.t = L;
  J &&
    ((M = await ax(J, true)),
    (H = [
      {
        type: 'text',
        text: H,
      },
      {
        type: 'image_url',
        image_url: {
          url: M,
        },
      },
    ]));
  aG.messages.push({
    role: 'user',
    content: H,
  });
  aG.messages.length >= 10 && aG.messages.shift();
  if ('free' === av[I].env.GPT) {
    const P = 'string' == typeof H ? H : H[0]?.text || '';
    try {
      const Q = Date.now();
      if (!aD || Q - aD.lastActivity >= aC) {
        let T;
        try {
          T = await at.get('https://www.hotbot.com/chat', {
            headers: {
              'User-Agent': aB,
              Accept: 'text/html',
              'Accept-Language': 'en-US,en;q=0.9',
            },
            timeout: 15000,
          });
        } catch {
          throw new Error('SERVICE_UNAVAILABLE');
        }
        const U = T.data;
        const V = (T.headers['set-cookie'] || []).map((a0) => a0.split(';')[0]).join('; ');
        const W = (U.match(/hbai\.setAuth\(['"]([a-f0-9]+)['"]\)/) || [])[1];
        const X = (U.match(/hbai\.actor\s*=\s*['"]([a-f0-9-]+)['"]/) || [])[1];
        const Y = (U.match(/hbai\.init\(['"]([a-f0-9-]+)['"]/) || [])[1];
        if (!W || !X || !Y) {
          throw new Error('SERVICE_UNAVAILABLE');
        }
        aD = {
          cookies: V,
          auth: W,
          actor: X,
          appKey: Y,
          histId: null,
          lastActivity: Q,
          ip: aE(),
        };
      } else {
        aD.lastActivity = Q;
      }
      const R = await new Promise((a0, a1) => {
        const a3 = new au('wss://assistant.hotbot.com/', {
          headers: {
            'User-Agent': aB,
            Origin: 'https://www.hotbot.com',
            Cookie: aD.cookies,
            'Accept-Language': 'en-US,en;q=0.9',
          },
          handshakeTimeout: 15000,
        });
        let a4 = null;
        let a5 = aD.histId || null;
        let a6 = '';
        let a7 = false;
        let a8 = false;
        const a9 = (ac, ad) => {
          if (!a7) {
            a7 = true;
            try {
              a3.close();
            } catch {}
            if (ac) {
              a1(ac);
            } else {
              a0(ad);
            }
          }
        };
        const aa = setTimeout(() => a9(new Error('TIMEOUT')), 90000);
        const ab = (ac) => {
          a4 && (ac.con_id = a4);
          try {
            a3.send(JSON.stringify(ac));
          } catch (ad) {
            a9(ad);
          }
        };
        a3.on('message', (ac) => {
          let aI;
          try {
            aI = JSON.parse(ac.toString());
          } catch {
            return;
          }
          switch (aI.type) {
            case 'init':
              a4 = aI.con;
              ab({
                type: 'set_ip',
                ip: aD.ip,
              });
              ab({
                type: 'set_client_info',
                info: {
                  ip: aD.ip,
                  ref: 'https://www.hotbot.com/',
                  xff: null,
                  ua: aB,
                },
              });
              ab({
                type: 'check_auth',
                auth_key: aD.auth,
              });
              ab({
                type: 'key',
                k: aD.appKey,
              });
              ab({
                type: 'assert_act',
                replace: aI.new_act,
                actor_id: aD.actor,
              });
              break;
            case 'ack_act':
              ab({
                type: 'get_histories',
                def_settings: false,
              });
              break;
            case 'histories': {
              const aK = Object.keys(aI.hist || {});
              if (a5 && aK.includes(a5)) {
                ab({
                  type: 'get_history',
                  id: a5,
                });
              } else {
                if (aK.length) {
                  a5 = aK[0];
                  aD.histId = a5;
                  ab({
                    type: 'get_history',
                    id: a5,
                  });
                } else {
                  ab({
                    type: 'new_history',
                  });
                }
              }
              break;
            }
            case 'history':
              aI.id && !a5 && (a5 = aI.id);
              a5 && (aD.histId = a5);
              a5 &&
                !a8 &&
                ((a8 = true),
                ab(
                  (() => {
                    const aM = {
                      type: 'new_chat',
                      msg: P,
                      id: a5,
                      block_search: true,
                    };
                    if (!M) {
                      return aM;
                    }
                    const aN = {
                      type: 'image_url',
                      image_url: {},
                    };
                    aN.image_url.url = M;
                    aN.image_url.detail = 'low';
                    const aO = [aN];
                    P &&
                      aO.unshift({
                        type: 'text',
                        text: P,
                      });
                    return {
                      type: 'new_chat_img',
                      msg: aO,
                      id: a5,
                      block_search: true,
                    };
                  })(),
                ));
              break;
            case 'chat_delta':
              'string' == typeof aI.delta && (a6 += aI.delta);
              break;
            case 'chat_full':
              a9(null, 'string' == typeof aI.msg ? aI.msg.trim() : a6.trim());
              break;
            case 'comp_done':
              a9(null, a6.trim());
              break;
            case 'limit_reached':
            case 'limitreached':
              a9(new Error('RATE_LIMIT'));
              break;
            case 'ack_auth':
              false === aI.status && a9(new Error('SERVICE_UNAVAILABLE'));
          }
        });
        a3.on('error', () => a9(new Error('SERVICE_UNAVAILABLE')));
        a3.on('close', () => {
          clearTimeout(aa);
          a7 || a9(new Error('SERVICE_UNAVAILABLE'));
        });
      });
      const S = {
        role: 'assistant',
        content: R,
      };
      aG.messages.push(S);
      return (R || '').trim().replaceAll('**', '*');
    } catch (a0) {
      const a1 = a0 && a0.message;
      if ('RATE_LIMIT' === a1) {
        throw new Error('Rate limit reached. Please try again in a few minutes.');
      }
      if ('TIMEOUT' === a1) {
        aD = null;
        throw new Error('GPT request timed out. Please try again.');
      }
      aD = null;
      throw new Error('Failed to get GPT response. Please try again later.');
    }
  }
  const N = {
    messages: aG.messages,
    model: av[I].env.MODEL,
    temperature: 0.5,
  };
  const O = JSON.stringify(N);
  try {
    const a4 = await aj('https://api.openai.com/v1/chat/completions', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + av[I].env.GPT,
      },
      body: O,
    });
    const a5 = await a4.json();
    if (a5.error) {
      throw new Error(a5.error.message);
    }
    const a6 = a5.choices[0].message.content.trim();
    const a7 = {
      role: 'assistant',
      content: a6,
    };
    aG.messages.push(a7);
    return a6;
  } catch (a8) {
    throw new Error(a8.message);
  }
};
exports.getDallEResponse = async function (G, H, I = '512x512') {
  if (!H) {
    throw new Error('missing session');
  }
  if ('free' === av[H].env.GPT) {
    const L = {
      prompt: G,
      ratio: '1:1',
    };
    const M = new URLSearchParams(L);
    try {
      const N =
        'https://api.nekolabs.web.id/image-generation/imagen/4.0-fast?prompt=' + M.toString();
      const O = await aj(N, {
        method: 'GET',
      });
      const P = await O.json();
      if (!P || P.error) {
        throw new Error('API request failed');
      }
      return P.result || P.url || P.image;
    } catch (R) {
      throw new Error('Failed to generate image. Please try again later.');
    }
  }
  try {
    const S = {
      prompt: G,
      n: 1,
      size: I,
    };
    const T = await aj('https://api.openai.com/v1/images/generations', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + av[H].env.GPT,
      },
      body: JSON.stringify(S),
    });
    const U = await T.json();
    if (U.error) {
      throw new Error(U.error.message);
    }
    return U.data[0].url;
  } catch (W) {
    throw new Error(W.message);
  }
};
