const bu = require('browser-id3-writer');
const { loadBaileys: bv } = require('./baileys');
let bw;
let bx;
let by;
let bz;
let bA;
bv()
  .then((a7) => {
    bw = a7.delay;
    bx = a7.isJidGroup;
    by = a7.isJidUser;
    bz = a7.getBinaryNodeChild;
    bA = a7.getBinaryNodeChildren;
  })
  .catch((a7) => {
    process.stderr.write('lib/index.js top-level load failed: ' + a7.message + '\n');
  });
const { default: bB } = require('axios');
const bC = require('child_process');
const bD = require('pino-pretty');
const bE = require('os');
const bF = require('path');
const bG = require('simple-git');
const bH = require('pino');
const bI = require('fs-extra');
const bJ = require('moment');
const bK = require('form-data');
const bL = (a7) => a7.replace(/\^/g, '').replace(/\*\*/g, '*');
exports.sleep = async (a7 = 1) => {
  bw ||= (await bv()).delay;
  await bw(a7);
};
const bM = require('../config');
exports.getDate = () => {
  const a8 = require('moment-timezone');
  const a9 = bM.TIMEZONE || process.env.TZ || 'UTC';
  const aa = a8.tz(new Date(), a9);
  return [aa.toDate(), aa.format('hh:mm A'), aa.format('DD/MM/YYYY')];
};
const bN = {
  colorize: !0,
  levelFirst: !0,
  translateTime: 'SYS:HH:MM:ss dd-mm-yy',
  ignore: 'pid,hostname',
};
const bO = bD(bN);
exports.logger = bH.pino(
  {
    level: 'trace',
  },
  bO,
);
process.on('uncaughtException', (a8) => {
  const ab = a8.message || a8;
  exports.logger.error(a8, 'Uncaught Exception');
  if (!ab.includes('EADDRINUSE')) {
    process.exit(1);
  }
});
process.on('unhandledRejection', (a8, a9) => {
  exports.logger.error(a8, 'Unhandled Rejection');
});
exports.lang = require('./lang');
const bQ = (a7) => {
  const a8 = a7.match(/^https:\/\/whatsapp\.com\/channel\/([^\/]+)(?:\/([^\/]+))?\/?$/);
  if (a8) {
    return {
      channelId: a8[1],
      serverId: a8[2],
    };
  } else {
    return null;
  }
};
exports.parseNewsLetterJId = bQ;
const bR = require('./config');
const {
  getMention: bS,
  enableMention: bT,
  getMessage: bU,
  setMessage: bV,
  deleteMessage: bW,
  mentionMessage: bX,
  deleteCreds: bY,
  deleteKeys: bZ,
  setPlugin: c0,
  getPlugin: c1,
  delPlugin: c2,
  setPdm: c3,
  setWarn: c4,
  setMute: c5,
  getMute: c6,
  deleteWarn: c7,
  getFilter: c8,
  setFilter: c9,
  deleteFilter: ca,
  setLydia: cb,
  getAntiLink: cc,
  setAntiLink: cd,
  getMsg: cf,
  getSpam: cg,
  setSpam: ch,
  setAntiSpamLevel: ci,
  setAntiSpamAction: cj,
  setWord: ck,
  getWord: cl,
  addWord: cm,
  removeWord: cn,
  getGids: cp,
  getFake: cq,
  setFake: cs,
  getDeletedMessage: cu,
  getTMessage: cv,
  setTMessage: cw,
  updateTMessage: cx,
  getBudget: cy,
  setBudget: cz,
  delBudget: cA,
  delScheduleMessage: cB,
  getScheduleMessage: cC,
  zushi: cD,
  yami: cE,
  ope: cF,
  logia: cG,
  setAmenu: cH,
  getAmenu: cI,
  delAmenu: cJ,
  getTruecaller: cK,
  setTruecaller: cL,
  delTruecaller: cM,
  setGroupMention: cN,
  getGroupMention: cO,
  setAntiGstatus: cP,
  getAntiGstatus: cQ,
  addAntiGstatusFilter: cR,
  removeAntiGstatusFilter: cS,
  setAllowedUrl: cT,
  addCode: cU,
  removeCode: cV,
} = require('./db/');
const cW = require('./backup');
const { getScheduleStatus: cX, delScheduleStatus: cY } = require('./db/mute');
const cZ = (a7) => a7.replace(/\s/g, '');
const {
  getName: d0,
  resetMsgs: d1,
  getMsgs: d2,
  getContact: d3,
  setContact: d4,
  delContact: d5,
} = require('./db/store');
exports.zushi = cD;
exports.yami = cE;
exports.ope = cF;
exports.logia = cG;
exports.setAmenu = cH;
exports.getAmenu = cI;
exports.delAmenu = cJ;
exports.getTruecaller = cK;
bM.logger = exports.logger;
const d6 = 'https://github.com/lyfe00011/levanter.git';
exports.sortObject = (a8) => {
  const a9 = {
    xuirv: function (ad, af) {
      return ad !== af;
    },
    VrEql: 'tvpKi',
    KhIDU: 'hiexO',
  };
  const aa = a9;
  const ab = Object.keys(a8).sort();
  const ac = {};
  ab.forEach((ad) => {
    if (aa.xuirv(aa.VrEql, aa.KhIDU)) {
      ac[ad] = a8[ad];
    } else {
      if (!aa) {
        return [];
      }
      const ag = (ab = ac.replace(/[+\s]+/g, '')).match(/\d+/g);
      return ag || [];
    }
  });
  return ac;
};
const {
  parsedJid: d7,
  getUrl: d8,
  waWebVersion: d9,
  genButtonMessage: da,
  yts: db,
  forwardOrBroadCast: dc,
  ctt: dd,
  addSpace: df,
  textToStylist: dg,
  stylishTextGen: dh,
  formatTime: di,
  clearFiles: dj,
  isUrl: dk,
  rmComma: dl,
  enableAntiFake: dm,
  antiList: dn,
  parseGistUrls: dp,
  pluginsList: dq,
  getQuote: ds,
  secondsToHms: du,
  genHydratedButtons: dv,
  genListMessage: dw,
  trt: dx,
  getFloor: dy,
  levanter: dz,
  store: dA,
  song: dB,
  escapeRegExp: dC,
} = require('./utils');
const { downloadVideo: dD, downloadAudio: dE, getVideoInfo: dF } = require('./youtube');
const { startYtLogin: dG, clearYtCreds: dH, isYtLoggedIn: dI } = require('./yt-auth');
exports.startYtLogin = dG;
exports.clearYtCreds = dH;
exports.isYtLoggedIn = dI;
const dJ =
  /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed|shorts\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/;
exports.YT_URL_REGEX = dJ;
const dK = (a8) => {
  const a9 = {
    Kglmz: 'filename[^;=\\n]*=((["\']).*?\\2|[^;\\n]*)',
    sKCDk: function (ac, ad) {
      return ac != ad;
    },
  };
  const aa = a9;
  const ab = new RegExp(aa.Kglmz).exec(a8);
  if (aa.sKCDk(null, ab) && ab[1]) {
    return ab[1].replace(/['"]/g, '');
  } else {
    return a8;
  }
};
exports.takeScreenshot = async (a8, a9) => {
  if (!a8.startsWith('http')) {
    a8 = 'https://' + a8;
  }
  let ab = 'https://levanter.onrender.com/ss?url=' + encodeURIComponent(a8);
  if (a9) {
    ab += '&full=true';
  }
  try {
    const ac = {
      responseType: 'arraybuffer',
    };
    return (await bB.get(ab, ac)).data;
  } catch (ad) {
    throw new Error(exports.lang.extra.screenshot_error);
  }
};
exports.secondsToHms = du;
exports.getQuote = ds;
exports.isUrl = dk;
exports.levanter = dz;
exports.fetch = (...a7) => import('node-fetch').then(({ default: a8 }) => a8(...a7));
const { nameFromUrl: dL, getBuffer: dM, getJson: dN, download: dO } = require('./fetch');
exports.download = dO;
const dP = require('./mute');
const dQ = require('./events');
const { stopInstance: dR, restartInstance: dS } = require('./pm2');
const { removeBg: dT } = require('./rmbg');
const { iChecker: dU } = require('./test/test');
const dV = {};
const dW = 'https://www.bing.com';
const dX = async (a8) => {
  const a9 = {
    pGvaV: function (ad, af, ag) {
      return ad(af, ag);
    },
    WHrnc: 'x-sydney-encryptedconversationsignature',
    kYxGa: function (ad, af) {
      return ad === af;
    },
    nlhDn: 'bmUmB',
    FLDtg: 'Iwgdb',
    OCzQp: 'failed to parse response body',
  };
  const aa = {
    headers: a8,
  };
  const ab = await a9.pGvaV(fetch, dW + '/turing/conversation/create?bundleVersion=1.864.15', aa);
  const ac = await ab.text();
  try {
    const ad = JSON.parse(ac);
    ad.encryptedConversationSignature = ab.headers.get(a9.WHrnc) ?? null;
    return ad;
  } catch (af) {
    if (a9.kYxGa(a9.nlhDn, a9.FLDtg)) {
      throw new a9(aa.lang.plugins.common.upscale_failed);
    } else {
      throw new Error(a9.OCzQp);
    }
  }
};
const dY = require('./copilot');
let dZ = {};
let e0 = {};
const e1 = 900000;
exports.bing = async (a8, a9) => {
  const aa = {
    SrNpT: 'justify',
    XDxre: function (ab, ac) {
      return ab + ac;
    },
    PrdXV: function (ab, ac) {
      return ab === ac;
    },
    SQcSi: 'FxVyT',
    WbVcU: function (ab, ac) {
      return ab !== ac;
    },
    gYQJK: 'kQatD',
    jEIQX: function (ab, ac) {
      return ab(ac);
    },
    MFvMd: function (ab, ac, ad) {
      return ab(ac, ad);
    },
    XIXbT: function (ab, ac) {
      return ab === ac;
    },
    IwTwz: 'fyzYj',
  };
  try {
    if (aa.WbVcU(aa.gYQJK, aa.gYQJK)) {
      const ac = {
        zrerB: aa.SrNpT,
      };
      const af = ac;
      let ag = 0;
      aa.forEach((aj) => {
        const ak = {
          width: ag,
          align: af.zrerB,
        };
        const al = this.heightOfString(aj, ak);
        ag = af.max(ag, al);
      });
      return aa.XDxre(ag, 5);
    } else {
      dZ[a9] ||= new dY(bR[a9].env.BING_COOKIE);
      if (e0[a9]) {
        aa.jEIQX(clearTimeout, e0[a9]);
      }
      e0[a9] = aa.MFvMd(
        setTimeout,
        () => {
          if (aa.PrdXV(aa.SQcSi, aa.SQcSi)) {
            if (dZ[a9]) {
              dZ[a9].resetConversation();
              delete dZ[a9];
              delete e0[a9];
            }
          } else {
            throw new a9(aa.lang.extra.screenshot_error);
          }
        },
        e1,
      );
      const ac = {
        prompt: a8,
      };
      return (await dZ[a9].chat(ac)).result;
    }
  } catch (ad) {
    if (aa.XIXbT(aa.IwTwz, aa.IwTwz)) {
      throw new Error(ad.message);
    } else {
      throw new ab((ac.response && ad.response.data) || af.message);
    }
  }
};
const e2 = (a8) => {
  const ab = new RegExp('https://open.spotify.com/(playlist|track)/([a-zA-Z0-9]+)?');
  const ac = a8.match(ab);
  return !!ac && !!ac[2] && ac[1];
};
exports.IsSpotify = (a7) => e2(a7);
const e3 = {
  number: '',
  otp: '',
  login: !1,
  id: '',
  token: '',
};
const e4 = e3;
const e5 = 'https://right-annmaria-lev-8a3a4814.koyeb.app';
const e6 = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
exports.dowloadTrack = async (a8) => {
  try {
    const aa = {
      responseType: 'arraybuffer',
    };
    const ab = await bB.get(e5 + '/spotify/download/?url=' + a8, aa);
    return {
      title:
        dK(ab.headers['content-disposition']) ||
        (a8.startsWith('http') ? 'track.mp3' : a8 + '.mp3'),
      buffer: ab.data,
    };
  } catch (ac) {
    throw new Error(exports.lang.plugins.common.spotify_download_failed);
  }
};
exports.getSpotifyPlaylist = async (a7) => {
  try {
    return (await bB.get(e5 + '/spotify/playlist/?url=' + a7)).data.result;
  } catch (aa) {
    throw new Error(exports.lang.plugins.common.spotify_playlist_failed);
  }
};
exports.parseSchedule = (a8) => {
  const a9 = {
    MdQWk: function (aj, ak) {
      return aj + ak;
    },
    tFwSv: 'once',
    XpoGi: 'repeat',
    KRWNT: 'every',
  };
  const aa = a9;
  const ab = /[\w-]+@(s\.whatsapp\.net|g\.us)/g;
  const ac = a8.match(ab) || [];
  const ad = a8.replace(ab, '').trim().replace(/^,|,$/g, '').trim();
  const af = ad.match(/^([0-9*\/\- ,:]+)/);
  const ag = af ? af[0].trim() : null;
  let ah = ag
    ? ad
        .slice(aa.MdQWk(ad.indexOf(ag), ag.length))
        ?.replace(/^[, ]+/, '')
        .trim()
    : null;
  let ai = aa.tFwSv;
  if (ah && (ah.includes(aa.XpoGi) || ah.includes(aa.KRWNT))) {
    ai = aa.XpoGi;
  }
  return {
    jids: ac,
    time: ag,
    once: ai,
  };
};
exports.nlpSchedule = async (a8, a9) => {
  const [ab, ac] = exports.getDate();
  const ad =
    'You are a helpful assistant that extracts schedule details from natural language for a WhatsApp bot.\nCurrent local time: ' +
    ac +
    ' (' +
    new Date(ab).toDateString() +
    ').\n\nIMPORTANT: The user may write in ANY language — English, Hindi/Urdu (Romanized or native script), Arabic, Bengali, Malayalam, Spanish, French, Turkish, Indonesian, Russian, or mixed. Understand all of them.\n\n### Instructions:\n1. **Time Format**: Convert the schedule to a dash-separated string: "minute-hour-day-month-dayOfWeek".\n   - minute: 0-59\n   - hour: 0-23 (24-hour format)\n   - day: 1-31\n   - month: 1-12\n   - dayOfWeek: 0-6 (0 is Sunday)\n   - Use \'*\' for any field that repeats (e.g., "every day at 10am" -> "0-10-*-*-*").\n2. **JIDs**: Extract mentioned WhatsApp JIDs.\n   - User JIDs: Often look like "919876543210@s.whatsapp.net".\n   - Group JIDs: Often look like "1234567890-5678@g.us" or "1234567890@g.us".\n3. **Repetition**: Detect if it\'s a one-time thing ("once") or recurring ("repeat").\n   - Recurring keywords: every, daily, weekly, each, always\n     Hindi/Urdu: har din, har roz, haftay mein, har hafte\n     Arabic: يومياً, أسبوعياً, كل يوم, كل أسبوع\n     Bengali: প্রতিদিন, প্রতি সপ্তাহে, সবসময়\n     Spanish: cada día, diariamente, semanalmente, siempre\n     French: chaque jour, quotidien, hebdomadaire, toujours\n     Turkish: her gün, günlük, haftalık, her zaman\n     Indonesian: setiap hari, harian, mingguan, selalu\n     Russian: каждый день, ежедневно, еженедельно, всегда\n   - One-time keywords: once, tomorrow, next, on (date)\n     Hindi/Urdu: kal, agla, ek baar, sirf ek baar\n     Arabic: مرة واحدة, غداً, القادم\n     Bengali: একবার, আগামীকাল, পরের\n     Spanish: una vez, mañana, próximo\n     French: une fois, demain, prochain\n     Turkish: bir kez, yarın, gelecek\n     Indonesian: sekali, besok, depan\n     Russian: один раз, завтра, следующий\n\nRespond ONLY with a JSON object:\n{\n  "time": "min-hour-day-month-dayOfWeek",\n  "jids": ["jid1", "jid2"],\n  "once": "once" | "repeat"\n}';
  try {
    const af = (await exports.nlpComplete(ad + '\n\nUser input: "' + a8 + '"', a9)).data
      .replace(/```json/g, '')
      .replace(/```/g, '')
      .trim();
    const ag = JSON.parse(af);
    const ah = {
      time: ag.time,
      jids: ag.jids || [],
      once: ag.once || 'once',
    };
    return ah;
  } catch (aj) {
    return null;
  }
};
exports.nlpBudget = async (a7, a8) => {
  const [aa, , ab] = exports.getDate();
  const ac =
    'You are a helpful assistant that extracts budget/financial transaction details from natural language for a WhatsApp bot.\nCurrent date: ' +
    ab +
    ' (' +
    new Date(aa).toDateString() +
    ').\n\nIMPORTANT: The user may write in ANY language — English, Hindi (Romanized or Devanagari), Urdu, Arabic, Bengali, Malayalam (Romanized or script), Spanish, French, Turkish, Indonesian, Russian, or mixed. Understand all of them.\n\n### Instructions:\n1. **Type**: Determine if the transaction is "income" or "expense".\n   - Income: salary, earned, received, got paid, freelance, bonus, refund, cashback, sold, profit\n     Hindi/Urdu: mili, aaya, kamaya, tankhwah, salary mili\n     Arabic: راتب, استلمت, دخل, بعت\n     Bengali: পেয়েছি, বেতন, আয়\n     Spanish: recibí, salario, ingreso, gané\n     French: reçu, salaire, revenu, gagné\n     Turkish: aldım, maaş, gelir\n     Indonesian: dapat, gaji, terima\n     Russian: получил, зарплата, доход\n   - Expense: spent, paid, bought, cost, bill, rent, food, taxi, coffee, subscription, fee\n     Hindi/Urdu: kharch, diya, liya, kharida, bhara\n     Arabic: صرفت, دفعت, اشتريت, حساب\n     Bengali: খরচ, দিয়েছি, কিনেছি\n     Spanish: gasté, pagué, compré\n     French: dépensé, payé, acheté\n     Turkish: harcadım, ödedim, aldım\n     Indonesian: habis, bayar, beli\n     Russian: потратил, заплатил, купил\n   - If ambiguous, default to "expense".\n\n2. **Amount**: Extract the numeric amount. Must be a positive number.\n   - Handle currency symbols ($, Rs, ₹, USD, ر.س, ₽, €, ₺, Rp, etc.) — extract only the number.\n\n3. **Category**: Classify into one of these categories:\n   food, transport, shopping, entertainment, bills, rent, salary, freelance, investment, health, education, groceries, subscriptions, travel, gifts, utilities, other\n   - Pick the most specific match. If none fits, use "other".\n\n4. **Remark**: A brief description (max 5 words) in the SAME language the user used.\n   - If no extra context, use empty string "".\n\nRespond ONLY with a JSON object:\n{\n  "type": "income" | "expense",\n  "amount": <number>,\n  "category": "<string>",\n  "remark": "<string>"\n}';
  try {
    const ad = (await exports.nlpComplete(ac + '\n\nUser input: "' + a7 + '"', a8)).data
      .replace(/```json/g, '')
      .replace(/```/g, '')
      .trim();
    const af = JSON.parse(ad);
    if (af.type && af.amount && !isNaN(af.amount) && af.category) {
      return {
        type: 'income' === af.type ? 'income' : 'expense',
        amount: Math.abs(Number(af.amount)),
        category: af.category.toLowerCase(),
        remark: af.remark || '',
      };
    } else {
      return null;
    }
  } catch (ag) {
    return null;
  }
};
const {
  addExif: e7,
  getFfmpegBuffer: e8,
  cropsticker: e9,
  sticker: ea,
  audioCut: eb,
  avm: ec,
  videoHeightWidth: ed,
  videoTrim: ef,
  mergeVideo: eg,
  blackVideo: eh,
  cropVideo: ei,
  SpeachToText: ej,
  videoToGif: ek,
  circleSticker: el,
} = require('./fFmpeg');
const { aliveMessage: em, getUptime: en, uptimeQuoteReplace: ep } = require('./alive');
const { setCmd: eq, getCmd: eu, delCmd: ev, phonesList: ew } = require('./cmd');
const { participateInVote: ex, newVote: ey } = require('./vote');
const {
  greetingsPreview: ez,
  genGreetings: eA,
  enableGreetings: eB,
  clearGreetings: eC,
} = require('./greetings');
const {
  getImgUrl: eD,
  buttonMessage: eE,
  toPdf: eF,
  getCommon: eG,
  getGPTResponse: eH,
  getDallEResponse: eI,
} = require('./misc');
const eJ = {};
const eK = require('pdfkit');
const { setVar: eL, getVars: eM, delVar: eN, upKoyeb: eO, updateRender: eP } = require('./vars');
const { setData: eQ, getData: eR, delData: eS } = require('./db');
const { fontType: eT } = require('./fancy');
const { ticTacToe: eU, isGameActive: eV, deleteTicTacToe: eW } = require('./tictactoe');
const { setCmdState: eX } = require('./db/cmd');
const { textMaker: eY } = require('./textmaker');
const { genThumbnail: eZ, extractVideoThumb: f0, TEMP_DIR: f1 } = require('./constant');
exports.genThumbnail = eZ;
exports.extractVideoThumb = f0;
exports.TEMP_DIR = f1;
exports.setBudget = cz;
exports.delBudget = cA;
const { photoEditor: f2 } = require('./editors');
const { img: f3 } = require('./img');
exports.isValidDate = (a7) => bJ(a7, 'D MMMM YYYY').isValid();
const f4 = exports.lang.plugins.common.truecaller_login_prompt;
const {
  instagram: f5,
  facebook: f6,
  story: f7,
  tiktok: f8,
  twitter: f9,
  y2mate: fa,
  pinterest: fb,
  pinterestSearch: fc,
  webpToMp4: fd,
  mediafire: ff,
  apkMirror: fg,
  reddit: fh,
} = require('./ss/');
const { lydia: fi, chatBot: fj } = require('./lydia');
exports.bot = dQ.addCommand;
exports.chainCmd = async (a7, a8, a9) => {
  if (dQ.cammands[a7]) {
    await dQ.cammands[a7].function(a8, a9);
  }
};
const fk = (a8) => {
  const a9 = {
    sBpdq: function (ac, ad) {
      return ac > ad;
    },
  };
  const aa = a9;
  const ab = [...a8.matchAll(/on:\s*['"]([^'"]+)['"],\s*[^}]*type:\s*['"]([^'"]+)['"]/g)];
  if (aa.sBpdq(ab.length, 0)) {
    return ab.map((ac, ad) => ({
      on: ac[1],
      type: ac[2],
    }));
  } else {
    return [];
  }
};
exports.removePlugin = (a8, a9) => {
  const ab = bF.join(__dirname, '../eplugins/' + a9 + a8 + '.js');
  if (!bI.existsSync(ab)) {
    return;
  }
  const ac = {
    encoding: 'utf-8',
  };
  const ad = bI.readFileSync(ab, ac);
  const af = dq(ad);
  const ag = fk(ad);
  for (const ah of af) {
    if (bR[a9]?.cammands) {
      delete bR[a9].cammands[ah];
    }
  }
  for (const ai of ag) {
    if (bR[a9]?.cammands) {
      delete bR[a9].cammands['' + ai.on + ai.type];
    }
  }
  delete require.cache[require.resolve(ab)];
  bI.unlinkSync(ab);
};
exports.installPlugin = (a7, a8) => {
  try {
    bR.plc = a8;
    bR.pt = a7.includes('/eplugin');
    require(a7);
  } finally {
    bR.plc = null;
    bR.pt = null;
  }
};
exports.addTask = dP.addTask;
exports.getGPTResponse = eH;
const fl = 'aWxvdmV5b3Vzb29vb29vbWF0Y2hidXRpZG9udGtub3d3aHlpbGlrZWxvdmV3YW50dQ==';
exports.getDallEResponse = eI;
exports.setupBackupCron = cW.setupBackupCron;
exports.escapeRegExp = dC;
const fm = dU();
// A hardcoded fallback Groq API key lived here before deobfuscation (hidden
// behind base64 + the obfuscator's own string-array encoding). It has been
// removed since publishing it in a directly readable/scannable form would
// leak a live credential; set GROQ_API_KEY in the environment instead. If a
// shared fallback key is still wanted, mint a fresh one and wire it in via
// config/env, not as a literal here.
const fn = '';
class fp extends eK {
  constructor(a7) {
    super(a7);
  }
  create(a7) {
    let a9 = this.page.margins.left;
    let aa = this.y;
    const ab = a7.headers.length;
    const ac = this.page.width - this.page.margins.left - this.page.margins.right;
    const ad = (aj) => {
      let ak = 0;
      aj.forEach((al) => {
        const am = {
          BFXiA: 'TEL',
        };
        const an = am;
        const aq = {
          width: af,
          align: 'justify',
        };
        const au = this.heightOfString(al, aq);
        ak = Math.max(ak, au);
      });
      return ak + 5;
    };
    let af = ac / ab - 15;
    const ag = this.page.height - this.page.margins.bottom;
    let ah = 0;
    this.on('pageAdded', () => {
      aa = this.page.margins.top;
      ah = 0;
    });
    this.font('Helvetica-Bold');
    if (aa + 3 * ad(a7.headers) > ag) {
      this.addPage();
    }
    aa = Math.max(aa, 100);
    const ai = 80;
    a7.headers.forEach((aj, ak) => {
      const al = 0 == ak ? ai : 1 == ak ? 135 : 2 == ak ? 280 : 450;
      const am = {
        width: af,
        align: 'justify',
      };
      this.text(aj, al, aa, am);
    });
    ah = Math.max(aa + ad(a7.headers), ah);
    this.moveTo(a9, ah - 2.5)
      .lineTo(a9 + ac, ah - 2.5)
      .lineWidth(1.5)
      .stroke();
    a7.rows.forEach((aj, ak) => {
      let an = ad(aj);
      if (aa + 3 * an < ag) {
        aa = ah + 5;
      } else {
        this.addPage();
      }
      this.font('Helvetica').fontSize(11);
      aj.forEach((aq, au) => {
        const av = aq.length > 20 ? 20 : 25 - 3 * aq.length;
        const aw = 0 == au ? ai : 1 == au ? 120 : 2 == au ? 210 : 450 + av;
        af = 2 == au ? 220 : af;
        an = ad(aj);
        let ax = 'black';
        if (3 == au && aq.startsWith('+')) {
          ax = 'green';
          aq = aq.replace('+', '');
        } else if (3 == au && aq.startsWith('-')) {
          ax = 'red';
          aq = aq.replace('-', '');
        }
        this.fillColor(ax);
        this.text(aq, aw, aa, {
          width: af,
          align: 'justify',
        });
      });
      ah = Math.max(aa + an, ah);
      this.moveTo(a9, ah - 2.5)
        .lineTo(a9 + ac, ah - 2.5)
        .lineWidth(1)
        .dash(1, {
          space: 0.5,
        })
        .opacity(0.1)
        .stroke()
        .opacity(1);
    });
    this.x = a9;
    this.moveDown();
    return this;
  }
}
const fq = fm == fl;
const fs = (a7 = '') =>
  a7.replace(/@s\.whatsapp\.net|@lid/g, '').replace(/[()\@\+\-\.a-zA-Z ]/g, '');
exports.isAdmin = async (a7, a8) => {
  const a9 = {
    oJnVv: 'yarn cache clean',
    CXLSD: 'inherit',
    LRqVv: 'yarn install --network-concurrency 3',
    ITtCO: function (ab, ac) {
      return ab !== ac;
    },
    TkapJ: 'YDzOv',
    NOixJ: 'HYxri',
    JdsRq: function (ab, ac) {
      return ab(ac);
    },
    lZRCJ: function (ab, ac) {
      return ab === ac;
    },
    vLPJF: 'admin',
    sHYsJ: 'superadmin',
  };
  let aa = a7.find((ab) => ab.phoneNumber === a8 || ab.id === a8);
  if (!aa) {
    if (a9.ITtCO(a9.TkapJ, a9.NOixJ)) {
      const ab = await bR.getLid(a8);
      if (ab) {
        aa = a7.find((ac) => ac.id === ab);
      }
      if (!aa) {
        const ac = JSON.stringify(a7.slice(0, 3));
        throw new Error(exports.lang.plugins.common.group_not_found.format(a9.JdsRq(fs, a8), ac));
      }
    } else {
      a9.execSync(a9.oJnVv, {
        shell: !0,
        stdio: a9.CXLSD,
      });
      aa.execSync(a9.LRqVv, {
        shell: !0,
        stdio: a9.CXLSD,
      });
    }
  }
  return a9.lZRCJ(a9.vLPJF, aa.admin) || a9.lZRCJ(a9.sHYsJ, aa.admin);
};
exports.getImgUrl = eD;
exports.buttonMessage = eE;
exports.PDF = eF;
exports.getCommon = eG;
exports.textMaker = eY;
exports.genGreetings = eA;
exports.enableGreetings = eB;
exports.greetingsPreview = ez;
exports.clearGreetings = eC;
exports.setData = eQ;
exports.getData = eR;
exports.delData = eS;
exports.setVar = eL;
exports.getVars = eM;
exports.delVar = eN;
const fu = (a8) => {
  const a9 = {
    pwFxv: function (ab, ac) {
      return ab != ac;
    },
    XHWMH: 'string',
  };
  const aa = a9;
  if (aa.pwFxv(aa.XHWMH, typeof a8)) {
    return null;
  }
  return a8.replace(/[\+\s\-\(\)]/g, '') + '@s.whatsapp.net';
};
exports.numToJid = fu;
exports.getJid = async (a7, a8) =>
  (a7 && a8 && a7.endsWith('@lid') && (await bR[a8]?.findJid?.(a7))) || a7;
const fv = (a7) => {
  const a9 = a7.toString();
  const aa = [];
  a9.split('END:VCARD').forEach((ab) => {
    if (!ab.trim()) {
      return;
    }
    const ac = {};
    ab.split(/\r?\n/).forEach((ad) => {
      if (ad.startsWith('FN')) {
        ac.name = ad.substring(3);
      } else if (ad.startsWith('TEL')) {
        const ag = ad.replace(/\D/g, '');
        if (/^\d+$/.test(ag)) {
          ac.phone = ag;
        }
      }
    });
    if (ac.name && ac.phone) {
      ac.jid = fu(ac.phone);
      aa.push(ac);
    }
  });
  return aa;
};
const fw = async (a7, a8, a9, aa) => {
  if (!bz) {
    const ag = await bv();
    bz = ag.getBinaryNodeChild;
    bA = ag.getBinaryNodeChildren;
  }
  const ac = await a9({
    tag: 'iq',
    attrs: {
      to: '@s.whatsapp.net',
      type: 'get',
      xmlns: 'usync',
    },
    content: [
      {
        tag: 'usync',
        attrs: {
          sid: aa,
          mode: 'query',
          last: 'true',
          index: '0',
          context: 'interactive',
        },
        content: [
          {
            tag: 'query',
            attrs: {},
            content: [a8],
          },
          {
            tag: 'list',
            attrs: {},
            content: a7,
          },
        ],
      },
    ],
  });
  const ad = bz(ac, 'usync');
  const af = bz(ad, 'list');
  return bA(af, 'user');
};
const fx = async (a7, a8) => {
  const a9 = {
    ShrTR: function (ab, ac) {
      return ab(ac);
    },
    LzXgN: function (ab, ac) {
      return ab !== ac;
    },
    iGJmV: 'utIcS',
    GibLb: function (ab, ac, ad) {
      return ab(ac, ad);
    },
    ilkIj: 'contact',
    aqQdi: function (ab, ac) {
      return ab === ac;
    },
    egqPv: 'uScXC',
    UWkes: 'oSiWM',
    Xmkfw: function (ab) {
      return ab();
    },
    EGnwA: function (ab, ac, ad, af, ag) {
      return ab(ac, ad, af, ag);
    },
  };
  if (!bz) {
    if (a9.aqQdi(a9.egqPv, a9.UWkes)) {
      throw new a9(aa.lang.plugins.common.spotify_playlist_failed);
    } else {
      const ac = await a9.Xmkfw(bv);
      bz = ac.getBinaryNodeChild;
      bA = ac.getBinaryNodeChildren;
    }
  }
  if (!Array.isArray(a7)) {
    a7 = [a7];
  }
  const aa = a7.map((ad) => ({
    tag: 'user',
    attrs: {},
    content: [
      {
        tag: 'contact',
        attrs: {},
        content: '+' + ad.replace('+', ''),
      },
    ],
  }));
  return (
    await a9.EGnwA(
      fw,
      aa,
      {
        tag: a9.ilkIj,
        attrs: {},
      },
      bR[a8].sock.query,
      bR[a8].sock.generateMessageTag(),
    )
  )
    .map((ad) => {
      const af = {
        KgTEl: function (ag, ah) {
          return a9.ShrTR(ag, ah);
        },
      };
      if (a9.LzXgN(a9.iGJmV, a9.iGJmV)) {
        ag = af.KgTEl(ah, ai);
        af.KgTEl(aj, ak);
        throw new al(am.lang.plugins.common.gemini_error + ': ' + an);
      } else {
        const ah = a9.GibLb(bz, ad, a9.ilkIj);
        if (ah && a9.aqQdi('in', ah.attrs.type)) {
          return ad.attrs.jid;
        } else {
          return null;
        }
      }
    })
    .filter((ad) => ad !== null);
};
exports.importContacts = async (a7, a8) => {
  if (!a8) {
    throw new Error(exports.lang.extra.id_missing);
  }
  const aa = fv(a7);
  const ab = (await a8.onWhatsapp(aa.map((af) => af.phone)))
    .filter((af) => af.exists)
    .map((af) => af.jid);
  const ac = new Set(ab);
  const ad = aa.filter((af) => ac.has(af.jid));
  if (ad.length > 0) {
    bR[a8.id].contacts = ad;
  }
  return ad;
};
exports.flushContacts = async (a7) => {
  if (!a7) {
    throw new Error(exports.lang.extra.id_missing);
  }
  bR[a7].contacts = [];
  return d5('all', a7);
};
exports.addContacts = async (a8, a9, aa) => {
  if (!aa) {
    throw new Error(exports.lang.extra.id_missing);
  }
  const ac = await fx([a9], aa);
  if (0 === ac.length) {
    throw new Error(exports.lang.extra.not_on_whatsapp.format(a9));
  }
  const ad = {
    name: a8,
    jid: ac[0].jid,
  };
  return d4([ad], aa);
};
exports.removeContacts = async (a7, a8) => {
  if (!a8) {
    throw new Error(exports.lang.extra.id_missing);
  }
  return d5('all' === a7 ? a7 : fu(a7), a8);
};
exports.saveContacts = async (a7) => {
  if (!a7) {
    throw new Error(exports.lang.extra.id_missing);
  }
  if (0 === bR[a7].contacts.length) {
    throw new Error(exports.lang.plugins.common.import_contacts_first);
  }
  return d4(bR[a7].contacts, a7);
};
exports.listContacts = async (a7) => {
  if (!a7) {
    throw new Error(exports.lang.extra.id_missing);
  }
  return d3('all', a7);
};
exports.existContacts = async (a7, a8) => {
  if (!a8) {
    throw new Error(exports.lang.extra.id_missing);
  }
  return d3(fu(a7), a8);
};
exports.jidToNum = fs;
exports.genThumbnail = eZ;
exports.extractVideoThumb = f0;
exports.photoEditor = f2;
exports.parseNum = (a7 = '') => {
  if (!a7) {
    return [];
  }
  const a8 = (a7 = a7.replace(/[+\s]+/g, '')).match(/\d+/g);
  return a8 || [];
};
exports.lydia = fi;
exports.chatBot = fj;
exports.TogCmd = async function (a7, a8, a9) {
  if (a7 in bR[a9].cammands) {
    bR[a9].cammands[a7].active = 'on' == a8;
  }
  await eX(a7, a8, a9);
};
exports.setAfk = (a8, a9, aa, ab, ac) => {
  const ad = {
    isAfk: a8,
    reason: a9,
    lastseen: aa,
    p: ab,
  };
  bR[ac].AFK = ad;
};
exports.cached = {};
let fy = 100;
exports.getFake = cq;
exports.addCode = cU;
exports.removeCode = cV;
exports.setFake = cs;
exports.getGids = cp;
exports.setWord = ck;
exports.getWord = cl;
exports.addWord = cm;
exports.removeWord = cn;
exports.setSpam = ch;
exports.getSpam = cg;
exports.setAntiSpamLevel = ci;
exports.setAntiSpamAction = cj;
exports.getMsg = d2;
exports.getName = d0;
exports.setAntiLink = cd;
exports.getAntiLink = cc;
exports.setAllowedUrl = cT;
exports.normalizeUrl = require('./antilink').normalizeUrl;
exports.setLydia = cb;
exports.getFilter = c8;
exports.deleteFilter = ca;
exports.setFilter = c9;
exports.deleteWarn = c7;
exports.getMute = c6;
exports.setMute = c5;
exports.delMute = require('./db/').delMute;
exports.setWarn = c4;
exports.setPdm = c3;
exports.getMention = bS;
exports.enableMention = bT;
exports.setMessage = bV;
exports.deleteMessage = bW;
exports.mentionMessage = bX;
exports.getMessage = bU;
exports.deleteCreds = bY;
exports.deleteKeys = bZ;
exports.setPlugin = c0;
exports.getPlugin = c1;
exports.delPlugin = c2;
exports.resetMsgs = d1;
exports.setTMessage = cw;
exports.getTMessage = cv;
exports.updateTMessage = cx;
exports.getDeletedMessage = cu;
exports.filteredArray = (a7, a8 = ',') => {
  if (!Array.isArray(a7)) {
    a7 = a7.split(a8);
  }
  return Array.from(new Set(a7));
};
const fz = (a7, a8, a9) => {
  const aa = {
    RqOlj: 'https://open.spotify.com/(playlist|track)/([a-zA-Z0-9]+)?',
    RHvRN: function (af, ag) {
      return af || ag;
    },
    ujsSW: function (af, ag) {
      return af < ag;
    },
    DbCsY: function (af, ag) {
      return af === ag;
    },
    RNZKl: 'qEhXs',
    JVkqk: function (af, ag, ah) {
      return af(ag, ah);
    },
    gIlme: function (af, ag, ah, ai) {
      return af(ag, ah, ai);
    },
  };
  const ab = aa.RHvRN(a9, 'x');
  const ac = a7.includes(ab) ? 10 : 1;
  const ad = new RegExp(ab);
  for (let af = 0; aa.ujsSW(af, ac); af++) {
    if (aa.DbCsY(aa.RNZKl, aa.RNZKl)) {
      const ag = a7.replace(ab, af);
      if (!ad.test(ag)) {
        aa.JVkqk(a8, ag, af);
      }
      if (ad.test(ag)) {
        aa.gIlme(fz, ag, a8, a9);
      }
    } else {
      const ai = new a9(aa.RqOlj);
      const aj = aa.match(ai);
      return !!aj && !!aj[2] && aj[1];
    }
  }
};
exports.getFloor = dy;
exports.trt = dx;
exports.genListMessage = dw;
exports.rmComma = dl;
exports.parsedJid = d7;
exports.getUrl = d8;
exports.genButtonMessage = da;
exports.yts = db;
exports.video = async (a7, a8, a9 = {}) => await dD(a7, a8, a9);
exports.forwardOrBroadCast = dc;
exports.ctt = dd;
exports.addSpace = df;
exports.textToStylist = dg;
exports.stylishTextGen = dh;
exports.formatTime = di;
exports.clearFiles = dj;
exports.enableAntiFake = dm;
exports.antiList = dn;
exports.waWebVersion = d9;
exports.parseGistUrls = dp;
exports.pluginsList = dq;
exports.genHydratedButtons = dv;
exports.setGroupMention = cN;
exports.getGroupMention = cO;
exports.setAntiGstatus = cP;
exports.getAntiGstatus = cQ;
exports.addAntiGstatusFilter = cR;
exports.removeAntiGstatusFilter = cS;
const fA = async (a7, a8) => {
  const aa = 60000;
  if (!a8 || !!isNaN(a8)) {
    a8 = aa;
  }
  if (a8 < aa) {
    a8 = aa;
  }
  dz.emit('statusa', {
    f: a7,
    t: a8,
  });
};
const fB = 4599;
function fC(a8) {
  const a9 = {
    iObTL: function (ac, ad) {
      return ac < ad;
    },
    TKLFo: function (ac, ad) {
      return ac + ad;
    },
  };
  const aa = a9;
  let ab = '';
  for (let ac = 0; aa.iObTL(ac, a8.length); ac++) {
    ab += String.fromCharCode(aa.TKLFo(a8.charCodeAt(ac), fB));
  }
  return ab;
}
function fD(a8) {
  const a9 = {
    rXWTm: function (ac, ad) {
      return ac < ad;
    },
    ycvhM: function (ac, ad) {
      return ac - ad;
    },
  };
  const aa = a9;
  let ab = '';
  for (let ac = 0; aa.rXWTm(ac, a8.length); ac++) {
    ab += String.fromCharCode(aa.ycvhM(a8.charCodeAt(ac), fB));
  }
  return ab;
}
const fE = (a8) => {
  const a9 = {
    JyifK: function (ac, ad) {
      return ac === ad;
    },
    weBfi: 'ECONNABORTED',
    mFuIZ: function (ac, ad) {
      return ac >= ad;
    },
  };
  const aa = a9;
  if (!a8) {
    return !1;
  }
  if (aa.JyifK(aa.weBfi, a8.code)) {
    return !0;
  }
  if (!a8.response) {
    return !0;
  }
  const ab = a8.response.status;
  return aa.JyifK(429, ab) || aa.mFuIZ(ab, 500);
};
const fF = (a7) => new Promise((a8) => setTimeout(a8, a7));
const fG = (a7) => {
  if (!a7) {
    return 'unknown';
  }
  if (a7.response) {
    let a9 = a7.response.data;
    a9 = Buffer.isBuffer(a9)
      ? a9.toString('utf8')
      : a9 && 'object' == typeof a9
        ? a9.error?.message || JSON.stringify(a9)
        : null == a9
          ? ''
          : String(a9);
    return ('' + a7.response.status + (a9 ? ' ' + a9 : '')).slice(0, 240);
  }
  if ('ECONNABORTED' === a7.code) {
    return 'timeout';
  } else {
    return (a7.code ? a7.code + ': ' : '') + (a7.message || String(a7));
  }
};
const fH = new Map();
const fI = 1800000;
const fJ = (a7, a8) => {
  if (a8.timeoutId) {
    clearTimeout(a8.timeoutId);
  }
  a8.timeoutId = setTimeout(() => fH.delete(a7), fI);
  a8.timeoutId.unref?.();
  fH.set(a7, a8);
};
const fK = (a7) => {
  const a9 = fH.get(a7);
  if (a9) {
    if (a9.timeoutId) {
      clearTimeout(a9.timeoutId);
    }
    fH.delete(a7);
  }
};
exports.gemini = async function (ag, ah, ai, aj) {
  const ak = {
    LmvSO: function (aA, aB, aC) {
      return aA(aB, aC);
    },
    hgmnh: 'contact',
    OpnFB: function (aA, aB) {
      return aA === aB;
    },
    Znpaz: function (aA, aB) {
      return aA(aB);
    },
    LzTZW: 'yarn cache clean',
    vsvzd: 'inherit',
    MVnjQ: 'yarn install --network-concurrency 3',
    lePKq: function (aA) {
      return aA();
    },
    kEPfD: 'gemini-2.5-flash',
    gEHdE: function (aA, aB) {
      return aA !== aB;
    },
    HZtFC: function (aA, aB) {
      return aA !== aB;
    },
    zjFGl: function (aA, aB, aC) {
      return aA(aB, aC);
    },
    cbPLQ: function (aA, aB) {
      return aA + aB;
    },
    SSsnB: 'base64',
    wuWnM: 'user',
    iAcHb: function (aA, aB) {
      return aA !== aB;
    },
    qSFwu: 'BVydb',
    MUcoZ: 'qBvWj',
    pIYhY: 'application/json',
    sttOg: 'GEeWs',
    DfsvZ: function (aA, aB) {
      return aA >= aB;
    },
    pymEe: function (aA, aB) {
      return aA === aB;
    },
    Uxmrn: function (aA, aB) {
      return aA + aB;
    },
    VCEOx: 'empty',
    ACNZd: function (aA, aB) {
      return aA || aB;
    },
    nhQMc: 'model',
    ZIHHO: 'qJObs',
    JcEPl: function (aA, aB) {
      return aA(aB);
    },
  };
  const al = (bR[ah] && bR[ah].env) || {};
  const am = al.GEMINI_API_KEY;
  if (!am) {
    throw new Error(exports.lang.plugins.common.gemini_missing_api_key);
  }
  const an = al.GEMINI_MODEL || ak.kEPfD;
  const ap = ai && Buffer.isBuffer(ai.image);
  let aq;
  if (aj) {
    aq = 0;
  } else if (
    ak.gEHdE(undefined, al.GEMINI_THINKING_BUDGET) &&
    ak.HZtFC('', al.GEMINI_THINKING_BUDGET)
  ) {
    aq = al.GEMINI_THINKING_BUDGET;
  } else if (ap) {
    aq = 2048;
  }
  const au = {
    text: ag,
  };
  const av = ak.OpnFB(undefined, aq) ? undefined : ak.zjFGl(parseInt, aq, 10);
  const aw = ap ? 90000 : 50000;
  const ax = ak.cbPLQ(ak.cbPLQ(am, ah), aj ? Date.now() : '');
  const ay = [au];
  let az;
  if (ap) {
    ay.push({
      inline_data: {
        mime_type: ai.mimetype,
        data: Buffer.from(ai.image).toString(ak.SSsnB),
      },
    });
  }
  try {
    const aA = {
      role: ak.wuWnM,
      parts: ay,
    };
    const aB = fH.get(ax);
    const aC = {
      contents: [...(aB ? aB.history : []), aA],
    };
    let aD;
    if (!ak.OpnFB(undefined, av) && !Number.isNaN(av)) {
      aC.generationConfig = {
        thinkingConfig: {
          thinkingBudget: av,
        },
      };
    }
    for (let aM = 0; ; aM++) {
      try {
        if (ak.iAcHb(ak.qSFwu, ak.MUcoZ)) {
          const aN = {
            'Content-Type': ak.pIYhY,
            'x-goog-api-key': am,
          };
          const aO = {
            timeout: aw,
            headers: aN,
          };
          aD = await bB.post(
            'https://generativelanguage.googleapis.com/v1beta/models/' + an + ':generateContent',
            aC,
            aO,
          );
          break;
        } else {
          const aQ = ak.LmvSO(aa, aH, ak.hgmnh);
          if (aQ && ak.OpnFB('in', aQ.attrs.type)) {
            return aJ.attrs.jid;
          } else {
            return null;
          }
        }
      } catch (aQ) {
        if (ak.OpnFB(ak.sttOg, ak.sttOg)) {
          if (ak.DfsvZ(aM, 2) || !ak.Znpaz(fE, aQ)) {
            throw aQ;
          }
          await ak.Znpaz(fF, ak.pymEe(0, aM) ? 1000 : 2500);
        } else {
          const aS = ai.get(aj);
          if (aS?.timeoutId) {
            ak.Znpaz(ak, aS.timeoutId);
          }
          al.delete(am);
          throw new an(
            (ap.response && aq.response.data && au.response.data.error.message) || av.message,
          );
        }
      }
    }
    const aE = aD.data?.promptFeedback?.blockReason;
    if (aE) {
      throw new Error('blocked:' + aE);
    }
    const aF = aD.data?.candidates?.[0];
    const aG = (aF?.content?.parts || [])
      .map((aS) => aS.text)
      .filter(Boolean)
      .join('');
    if (!aG) {
      throw new Error(ak.Uxmrn(ak.VCEOx, aF?.finishReason ? ':' + aF.finishReason : ''));
    }
    const aH = {
      history: [],
    };
    const aI = ak.ACNZd(aB, aH);
    const aJ = {
      role: ak.wuWnM,
      parts: ay,
    };
    const aK = {
      role: ak.nhQMc,
      parts: aF.content.parts,
    };
    const aL = {
      data: aG,
    };
    aI.history.push(aJ, aK);
    ak.zjFGl(fJ, ax, aI);
    return aL;
  } catch (aS) {
    if (ak.pymEe(ak.ZIHHO, ak.ZIHHO)) {
      az = ak.Znpaz(fG, aS);
      ak.JcEPl(fK, ax);
      throw new Error(exports.lang.plugins.common.gemini_error + ': ' + az);
    } else {
      try {
        ai.execSync(ak.LzTZW, {
          shell: !0,
          stdio: ak.vsvzd,
        });
        aj.execSync(ak.MVnjQ, {
          shell: !0,
          stdio: ak.vsvzd,
        });
      } catch (aU) {
        an.logger.error(aU);
        if (ap) {
          ak.lePKq(aq);
        }
        return !1;
      }
    }
  }
};
exports.upscale = async function (a9) {
  const aa = {
    yBgvE: function (ab, ac, ad) {
      return ab(ac, ad);
    },
    MeEdB: function (ab, ac) {
      return ab === ac;
    },
    cTmoQ: 'EuNOl',
    cUMbg: 'kAzRM',
    AGWsn: 'arraybuffer',
    vuKmU: function (ab, ac) {
      return ab !== ac;
    },
    gpzCA: 'dSYgz',
    LXlEJ: 'qKZYR',
  };
  try {
    if (aa.MeEdB(aa.cTmoQ, aa.cUMbg)) {
      const ac = [];
      aa.yBgvE(a9, aa, function (ad) {
        if (!ac.includes(ad)) {
          ac.push(ad);
        }
      });
      return ac;
    } else {
      const ac = await aa.yBgvE(d8, a9, !0);
      if (!ac) {
        throw new Error(exports.lang.plugins.common.upscale_upload_failed);
      }
      const ad = {
        imageUrl: ac,
      };
      const af =
        'https://api.nekolabs.web.id/tools/pxpic/upscale?' + new URLSearchParams(ad).toString();
      const ag = await bB.get(af);
      if (!ag.data || !ag.data.result) {
        throw new Error(exports.lang.plugins.common.upscale_invalid_response);
      }
      const ah = {
        responseType: aa.AGWsn,
      };
      const ai = await bB.get(ag.data.result, ah);
      return Buffer.from(ai.data);
    }
  } catch (aj) {
    if (aa.vuKmU(aa.gpzCA, aa.LXlEJ)) {
      throw new Error(exports.lang.plugins.common.upscale_failed);
    } else {
      aa.logger.error(ab);
      throw ac;
    }
  }
};
const fL = (a7, a8) => '' + a7 + a8;
async function fM(a7, a8, a9) {
  const ab = {
    method: 'POST',
    headers: {
      'content-type': 'application/json; charset=UTF-8',
      'accept-encoding': 'gzip',
      'user-agent': 'Truecaller/11.75.5 (Android;10)',
      clientsecret: 'lvc22mp3l1sfv6ujg83rd17btt',
    },
    url: 'https://account-asia-south1.truecaller.com/v1/verifyOnboardingOtp',
    data: {
      countryCode: a7.country,
      dialingCode: Number(a7.countryCallingCode),
      phoneNumber: a7.nationalNumber,
      requestId: a8,
      token: a9,
    },
  };
  try {
    return (await bB(ab)).data;
  } catch (ac) {
    throw new Error(ac.message);
  }
}
exports.generateList = function (ab, ac, ad, af, ag, ah) {
  if (Array.isArray(ab) && ac && ad && af) {
    if ('poll' !== bR[ag].env.LIST_TYPE || ah) {
      if (fy > 300) {
        fy = 100;
      }
      let ak = ac + '\n';
      for (let al of ab) {
        ak += al._id ? al._id.replace('&id', fy) + al.text : fy + ' - ' + al.text + '\n';
        const am = fL(fy, ag);
        const an = {
          id: fy,
          text: al.id,
          gid: ad,
          uid: af,
        };
        exports.cached[am] = an;
        setTimeout(() => delete exports.cached[am], 660000);
        fy++;
      }
      return {
        message: ak.trimEnd(),
        type: 'text',
      };
    }
    {
      ab = ab.slice(0, 12);
      let ap = [];
      for (let av of ab) {
        const aw = av.text.trimEnd();
        const ax = {
          optionName: aw,
        };
        ap.push(ax);
        exports.cached[aw] = {
          id: aw,
          text: av.id,
          gid: ad,
          uid: af,
        };
        setTimeout(() => delete exports.cached[aw], 660000);
      }
      const aq = {
        name: ac,
        options: ap,
        selectableOptionsCount: 1,
      };
      const au = {
        message: aq,
        type: 'poll',
      };
      return au;
    }
  }
};
exports.levanterTimeout = fA;
exports.googleImageSearch = f3;
exports.nameFromUrl = dL;
exports.getBuffer = dM;
exports.getJson = dN;
exports.apkMirror = fg;
exports.instagram = f5;
exports.facebook = f6;
exports.story = f7;
exports.tiktok = f8;
exports.twitter = f9;
exports.y2mate = fa;
exports.pinterest = fb;
exports.pinterestSearch = fc;
exports.webpToMp4 = fd;
exports.mediafire = ff;
exports.reddit = fh;
exports.delTruecaller = async () => {
  e4.token = '';
  e4.number = '';
  e4.otp = '';
  e4.id = '';
  e4.login = !1;
  await cM();
};
exports.dall3 = async function (a8, a9) {
  try {
    const ab = {
      prompt: a8,
      cookie: bR[a9].env.BING_COOKIE,
    };
    return (await bB.post('https://levanter.onrender.com/dall3', ab)).data;
  } catch (ac) {
    throw new Error((ac.response && ac.response.data) || ac.message);
  }
};
exports.videoToGif = ek;
exports.circleSticker = el;
exports.tts = ej;
exports.sticker = ea;
exports.addExif = e7;
exports.getFfmpegBuffer = e8;
exports.cropsticker = e9;
exports.cropVideo = ei;
exports.getSongName = async (a7, a8) => {
  if ('string' != typeof a7) {
    return a7;
  }
  const aa = a7.match(dJ);
  if (aa) {
    return (await dF(aa[1], a8)).title;
  }
  return a7;
};
exports.song = async (a9, aa, ab = {}) => {
  let ad;
  let af = {};
  const ag = 'string' == typeof a9 && a9.match(dJ);
  const ah = ag ? ag[1] : 'string' == typeof a9 && 11 === a9.length ? a9 : null;
  if (!ah) {
    throw new Error('Invalid ID or URL provided.');
  }
  {
    const aj = await dF(ah, aa);
    const ak = {
      title: aj.title,
      author: aj.author,
      thumbnail: aj.thumbnail,
    };
    ad = await dE(ah, aa, ab);
    af = ak;
  }
  const ai = {
    buffer: ad,
    ...af,
  };
  return ai;
};
exports.audioCut = eb;
exports.avm = ec;
exports.videoHeightWidth = ed;
exports.videoTrim = ef;
exports.mergeVideo = eg;
exports.blackVideo = eh;
exports.cropVideo = ei;
exports.aliveMessage = em;
exports.getUptime = en;
exports.uptimeQuoteReplace = ep;
const fN = bG.simpleGit();
fN.log().then((a7) => {
  exports.formatter.n = a7.latest.author_name;
});
const fO = async () => {
  try {
    bI.emptyDirSync(f1);
  } catch (a7) {
    exports.logger.error('Failed to clear temp directory: ' + a7.message);
  }
};
exports.clearTempDir = fO;
setInterval(fO, 43200000);
exports.setCmd = eq;
exports.getCmd = eu;
exports.delCmd = ev;
exports.validateTime = dP.validateTime;
exports.participateInVote = ex;
exports.createSchedule = dP.createSchedule;
exports.createStatusSchedule = dP.createStatusSchedule;
exports.getScheduleStatus = cX;
exports.delScheduleStatus = cY;
exports.deleteScheduleTask = dP.deleteScheduleTask;
exports.deleteScheduleStatusTask = dP.deleteScheduleStatusTask;
exports.newVote = ey;
exports.delScheduleMessage = cB;
exports.getScheduleMessage = cC;
exports.getRam = () =>
  Math.floor(bE.freemem() / 1048576) + '/' + Math.floor(bE.totalmem() / 1048576) + 'MB';
const fP = async () => {
  let a8;
  try {
    if (process.env.HEROKU_TEST) {
      const a9 = (await fN.getRemotes(!0)).find((aa) => aa.name === 'levanter');
      if (a9) {
        if (a9.refs !== d6) {
          await fN.removeRemote('levanter').catch(() => {});
          await fN.addRemote('levanter', d6);
        }
      } else {
        await fN.addRemote('levanter', d6);
      }
      await fN.fetch('levanter', 'master');
      a8 = await fN.log(['master..levanter/master']);
    } else {
      await fN.fetch().catch(() => {});
      a8 = await fN.log([bM.BRANCH + '..origin/' + bM.BRANCH]);
    }
    if (0 === a8.total) {
      return [];
    } else {
      return a8.all.map((aa) => aa.message).reverse();
    }
  } catch (aa) {
    exports.logger.error(aa.message);
    dR();
  }
};
const fQ = new Map();
const fR = 900000;
const fS = 10;
const fT = (a7, a8, a9, aa) => {
  if (a9.timeoutId) {
    clearTimeout(a9.timeoutId);
  }
  a9.timeoutId = setTimeout(() => a7.delete(a8), aa);
  a9.timeoutId.unref?.();
  a7.set(a8, a9);
};
exports.groqResponse = async (ab, ac = '0') => {
  const ad = {
    XAUTH: function (ak, al) {
      return ak === al;
    },
    Tthdj: 'system',
    NcsOi: 'user',
    sGkxr: function (ak, al) {
      return ak === al;
    },
    GWVNv: function (ak, al) {
      return ak === al;
    },
    LeTGQ: 'sbaWB',
    WpKww: 'https://api.groq.com/openai/v1/chat/completions',
    qVJwF: function (ak, al) {
      return ak >= al;
    },
    GeMwF: function (ak, al) {
      return ak(al);
    },
    AlWXL: function (ak, al) {
      return ak === al;
    },
    XvnLu: function (ak, al) {
      return ak > al;
    },
    nKymH: function (ak, al) {
      return ak + al;
    },
    jmNxu: function (ak, al, am, an, ap) {
      return ak(al, am, an, ap);
    },
    gorIJ: function (ak, al) {
      return ak(al);
    },
  };
  const ag = fQ.get(ac) || {
    messages: [],
  };
  if (ad.XAUTH(0, ag.messages.length) && process.env.GROQ_SYSTEM_MSG) {
    ag.messages.push({
      role: ad.Tthdj,
      content: process.env.GROQ_SYSTEM_MSG,
    });
  }
  ag.messages.push({
    role: ad.NcsOi,
    content: ab,
  });
  const ah = ad.sGkxr(ad.Tthdj, ag.messages[0]?.role) ? [ag.messages[0]] : [];
  const ai = ag.messages.slice(ah.length).slice(-10);
  const aj = [...ah, ...ai];
  try {
    let ak;
    for (let am = 0; ; am++) {
      try {
        if (ad.GWVNv(ad.LeTGQ, ad.LeTGQ)) {
          const an = {
            messages: aj,
            model: bM.GROQ_MODEL,
          };
          const ap = {
            Authorization: 'Bearer ' + (bM.GROQ_API_KEY || fn),
          };
          const aq = {
            timeout: 40000,
            headers: ap,
          };
          ak = await bB.post(ad.WpKww, an, aq);
          break;
        } else {
          const av = ad
            ? function () {
                if (av) {
                  const aw = ap.apply(aq, arguments);
                  au = null;
                  return aw;
                }
              }
            : function () {};
          aj = false;
          return av;
        }
      } catch (av) {
        if (ad.qVJwF(am, 2) || !ad.GeMwF(fE, av)) {
          throw av;
        }
        await ad.GeMwF(fF, ad.AlWXL(0, am) ? 1000 : 2500);
      }
    }
    const [al] = ak.data.choices;
    ag.messages.push(al.message);
    if (ad.XvnLu(ag.messages.length, ad.nKymH(fS, ah.length))) {
      ag.messages = [...ah, ...ag.messages.slice(ah.length).slice(-10)];
    }
    ad.jmNxu(fT, fQ, ac, ag, fR);
    return al.message.content.replace(/\*\*/g, '*');
  } catch (aw) {
    const ax = fQ.get(ac);
    if (ax?.timeoutId) {
      ad.gorIJ(clearTimeout, ax.timeoutId);
    }
    fQ.delete(ac);
    throw new Error(
      (aw.response && aw.response.data && aw.response.data.error.message) || aw.message,
    );
  }
};
const fU = new Map();
const fV = 900000;
exports.openRouter = async (a9, aa = '0') => {
  const ab = {
    vCxfy: function (al, am, an) {
      return al(am, an);
    },
    eUCra: 'all',
    BmSjS: function (al, am) {
      return al === am;
    },
    hItnf: 'system',
    hOJkz: 'user',
    oTktW: function (al, am) {
      return al(am);
    },
    ZiOwn: function (al, am) {
      return al > am;
    },
    obyKg: function (al, am) {
      return al === am;
    },
    XZTOi: 'XJvgu',
    LErrK: 'dTOKw',
    yJJqA: 'https://openrouter.ai/api/v1/chat/completions',
    YzpFe: 'https://github.com/lyfe00011/levanter',
    MuEeG: 'Levanter',
    szdmy: 'error',
    UNDDk: 'empty response from OpenRouter',
    KUhce: function (al, am) {
      return al >= am;
    },
    UuXwj: function (al, am) {
      return al(am);
    },
    dVAAp: function (al, am) {
      return al(am);
    },
    CrKMA: function (al, am) {
      return al + am;
    },
    nGpFn: function (al, am, an, ap, aq) {
      return al(am, an, ap, aq);
    },
    bMgSp: 'rSpdQ',
    dMhLU: function (al, am) {
      return al(am);
    },
  };
  const ac = bM.OPENROUTER_API_KEY;
  if (!ac) {
    throw new Error(exports.lang.plugins.common.openrouter_missing_api_key);
  }
  const ad = {
    messages: [],
  };
  const af = fU.get(aa) || ad;
  if (ab.BmSjS(0, af.messages.length) && process.env.OPENROUTER_SYSTEM_MSG) {
    af.messages.push({
      role: ab.hItnf,
      content: process.env.OPENROUTER_SYSTEM_MSG,
    });
  }
  af.messages.push({
    role: ab.hOJkz,
    content: a9,
  });
  const ag = ab.BmSjS(ab.hItnf, af.messages[0]?.role) ? [af.messages[0]] : [];
  const ah = af.messages.slice(ag.length).slice(-10);
  const ai = [...ag, ...ah];
  const aj = ab
    .oTktW(String, bM.OPENROUTER_MODEL)
    .split(',')
    .map((al) => al.trim())
    .filter(Boolean);
  const ak = {
    messages: ai,
  };
  if (ab.ZiOwn(aj.length, 1)) {
    ak.models = aj;
  } else {
    ak.model = aj[0];
  }
  try {
    let al;
    for (let an = 0; ; an++) {
      try {
        if (ab.obyKg(ab.XZTOi, ab.LErrK)) {
          if (!ac) {
            throw new ad(af.lang.extra.id_missing);
          }
          return ab.vCxfy(ag, ab.eUCra, ah);
        } else {
          al = await bB.post(ab.yJJqA, ak, {
            timeout: 40000,
            headers: {
              Authorization: 'Bearer ' + ac,
              'HTTP-Referer': ab.YzpFe,
              'X-Title': ab.MuEeG,
            },
          });
          const aq = al.data?.error;
          if (aq) {
            const au = new Error(aq.metadata?.raw || aq.message || ab.szdmy);
            const av = {
              status: aq.code || al.status,
              data: al.data,
            };
            au.response = av;
            throw au;
          }
          if (!al.data?.choices?.length) {
            throw new Error(ab.UNDDk);
          }
          break;
        }
      } catch (aw) {
        if (ab.KUhce(an, 2) || !ab.UuXwj(fE, aw)) {
          throw aw;
        }
        await ab.dVAAp(fF, ab.BmSjS(0, an) ? 1000 : 2500);
      }
    }
    const [am] = al.data.choices;
    af.messages.push(am.message);
    if (ab.ZiOwn(af.messages.length, ab.CrKMA(fS, ag.length))) {
      af.messages = [...ag, ...af.messages.slice(ag.length).slice(-10)];
    }
    ab.nGpFn(fT, fU, aa, af, fV);
    return am.message.content.replace(/\*\*/g, '*');
  } catch (ax) {
    if (ab.BmSjS(ab.bMgSp, ab.bMgSp)) {
      const ay = fU.get(aa);
      if (ay?.timeoutId) {
        ab.dMhLU(clearTimeout, ay.timeoutId);
      }
      fU.delete(aa);
      const az = ax.response && ax.response.data && ax.response.data.error;
      throw new Error((az && (az.metadata?.raw || az.message)) || ax.message);
    } else {
      throw new aa(ab.message || ac);
    }
  }
};
const fW = async ({ url: aa, apiKey: ab, model: ac, models: ad, prompt: af, extraHeaders: ag }) => {
  const ai = {
    role: 'user',
    content: af,
  };
  const aj = {
    messages: [ai],
  };
  const ak = aj;
  let al;
  if (ad && ad.length > 1) {
    ak.models = ad;
  } else {
    ak.model = ac || (ad && ad[0]);
  }
  for (let am = 0; ; am++) {
    try {
      al = await bB.post(aa, ak, {
        timeout: 40000,
        headers: {
          Authorization: 'Bearer ' + ab,
          ...(ag || {}),
        },
      });
      const an = al.data?.error;
      if (an) {
        const ap = new Error(an.metadata?.raw || an.message || 'error');
        const aq = {
          status: an.code || al.status,
          data: al.data,
        };
        ap.response = aq;
        throw ap;
      }
      if (!al.data?.choices?.length) {
        throw new Error('empty response');
      }
      break;
    } catch (au) {
      if (am >= 2 || !fE(au)) {
        throw au;
      }
      await fF(0 === am ? 1000 : 2500);
    }
  }
  return al.data.choices[0].message.content;
};
exports.nlpComplete = async (a7, a8 = '0') => {
  const aa = [];
  if (((bR[a8] && bR[a8].env) || {}).GEMINI_API_KEY) {
    try {
      return await exports.gemini(a7, a8, null, !0);
    } catch (ac) {
      aa.push('gemini: ' + ac.message);
    }
  }
  try {
    return {
      data: await fW({
        url: 'https://api.groq.com/openai/v1/chat/completions',
        apiKey: bM.GROQ_API_KEY || fn,
        model: bM.GROQ_MODEL,
        prompt: a7,
      }),
    };
  } catch (af) {
    aa.push('groq: ' + af.message);
  }
  if (bM.OPENROUTER_API_KEY) {
    try {
      const ah = String(bM.OPENROUTER_MODEL)
        .split(',')
        .map((ai) => ai.trim())
        .filter(Boolean);
      return {
        data: await fW({
          url: 'https://openrouter.ai/api/v1/chat/completions',
          apiKey: bM.OPENROUTER_API_KEY,
          model: ah[0],
          models: ah,
          prompt: a7,
          extraHeaders: {
            'HTTP-Referer': 'https://github.com/lyfe00011/levanter',
            'X-Title': 'Levanter',
          },
        }),
      };
    } catch (ai) {
      aa.push('openrouter: ' + ai.message);
    }
  }
  throw new Error('nlp: all providers failed [' + aa.join(' | ') + ']');
};
exports.isUpdate = fP;
const fX = async (a7) => {
  try {
    if (bM.VPS && !process.env.KOYEB) {
      await fY(a7);
    } else if (bM.HEROKU_API_KEY && bM.HEROKU_APP_NAME) {
      await fZ();
    } else if (bM.KOYEB_NAME && bM.KOYEB_API) {
      await eO('0');
    } else if (bM.RENDER_NAME && bM.RENDER_API_KEY) {
      await eP();
    } else if (!a7) {
      throw new Error(
        'Please set VPS = true, or open an issue with proper information\n\nhttps://github.com/lyfe00011/levanter/wiki/platform',
      );
    }
    if (a7 && !bM.VPS) {
      dR();
    }
  } catch (aa) {
    throw aa;
  }
};
const fY = async (a7) => {
  const a9 = bG();
  try {
    await a9.fetch('origin');
    await a9.raw(['merge', '--abort']).catch(() => {});
    await a9.raw(['rebase', '--abort']).catch(() => {});
    await a9.checkout('master');
    await a9.reset(['--hard', 'origin/master']);
  } catch (ac) {
    exports.logger.error(ac);
    if (a7) {
      dR();
    }
    return !1;
  }
  try {
    bC.execSync('yarn install --network-concurrency 3', {
      shell: !0,
      stdio: 'inherit',
    });
  } catch {
    try {
      bC.execSync('yarn cache clean', {
        shell: !0,
        stdio: 'inherit',
      });
      bC.execSync('yarn install --network-concurrency 3', {
        shell: !0,
        stdio: 'inherit',
      });
    } catch (ah) {
      exports.logger.error(ah);
      if (a7) {
        dR();
      }
      return !1;
    }
  }
  const aa = a7 ? 0 : 4000;
  await exports.sleep(5000);
  setTimeout(dS, aa);
  return !0;
};
const fZ = async () => {
  try {
    if (!bM.HEROKU_API_KEY || !bM.HEROKU_APP_NAME) {
      throw new Error('Please provide HEROKU_API_KEY and HEROKU_APP_NAME in the config');
    }
    const a9 = bG();
    try {
      await a9.reset(bG.ResetMode.HARD);
      if (process.env.HEROKU_TEST) {
        await a9.fetch('origin', bM.BRANCH);
      } else {
        const ab = (await a9.getRemotes(!0)).find((ac) => ac.name === 'levanter');
        if (ab) {
          if (ab.refs !== d6) {
            await a9.removeRemote('levanter');
            await a9.addRemote('levanter', d6);
          }
        } else {
          await a9.addRemote('levanter', d6);
        }
        await a9.fetch('levanter', 'master');
        await a9.pull('levanter', 'master', {
          '--rebase': 'true',
        });
      }
    } catch (ac) {
      throw new Error(ac.message || ac);
    }
    const aa =
      'https://api:' + bM.HEROKU_API_KEY + '@git.heroku.com/' + bM.HEROKU_APP_NAME + '.git';
    try {
      await a9.addRemote('heroku', aa);
    } catch (af) {
      exports.logger.error('Error adding Heroku remote:', af);
    }
    try {
      await a9.push('heroku', bM.BRANCH);
    } catch (ag) {
      throw new Error(ag.message || ag);
    }
  } catch (ai) {
    exports.logger.error(ai);
    throw ai;
  }
};
const { computeBudgetStats: g0 } = require('./budgetStats');
function g1(a7, a8, a9) {
  return new Promise((ab, ac) => {
    const af = {
      size: 'A4',
    };
    const ag = new fp(af);
    const ah = bF.join(f1, 'summary.pdf');
    const ai = bI.createWriteStream(ah);
    ai.on('error', (av) => ac(av.message));
    ag.pipe(ai);
    ag.moveTo(72, 25).lineTo(525, 25).lineWidth(0.5).stroke().opacity(1);
    ag.font('Helvetica-Oblique')
      .text('Summary For The Period Of ' + a8 + ' to ' + a9, 100, 28, {
        width: 404,
        align: 'center',
        height: 15,
      })
      .font('Helvetica');
    ag.moveTo(72, 40).lineTo(525, 40).lineWidth(0.5).stroke().opacity(1);
    const aj = a7.totalIncome + '';
    const ak = a7.totalExpense + '';
    const al = Math.abs(a7.netEarn) + '';
    const am = 0 === a7.netEarn ? 'black' : a7.netEarn > 0 ? 'green' : 'red';
    ag.font('Helvetica-Bold').fontSize(10);
    ag.text('Income', 100, 50);
    ag.moveTo(90, 63).opacity(0.4).lineTo(155, 63).lineWidth(0.5).stroke().opacity(1);
    ag.fillColor('green')
      .font('Helvetica')
      .text(aj, 120 - 3 * aj.length, 66)
      .fillColor('black');
    ag.font('Helvetica-Bold').text('Expense', 230, 50);
    ag.moveTo(220, 63).opacity(0.4).lineTo(290, 63).lineWidth(0.5).stroke().opacity(1);
    ag.fillColor('red')
      .font('Helvetica')
      .text(ak, 255 - 3 * ak.length, 66)
      .fillColor('black');
    ag.font('Helvetica-Bold').text('Earn', 370, 50);
    ag.moveTo(360, 63).opacity(0.4).lineTo(410, 63).lineWidth(0.1).stroke().opacity(1);
    ag.fillColor(am)
      .font('Helvetica')
      .text(al, 385 - 3 * al.length, 66)
      .fillColor('black');
    ag.font('Helvetica-Bold').text('Savings', 460, 50);
    ag.moveTo(450, 63).opacity(0.4).lineTo(510, 63).lineWidth(0.5).stroke().opacity(1);
    const an = a7.savingsRate + '%';
    const ap = a7.savingsRate >= 0 ? 'green' : 'red';
    ag.fillColor(ap)
      .font('Helvetica')
      .text(an, 475 - 3 * an.length, 66)
      .fillColor('black');
    ag.moveTo(72, 80).lineTo(525, 80).lineWidth(0.5).opacity(0.3).stroke().opacity(1);
    let aq = 87;
    ag.fontSize(9).font('Helvetica');
    ag.fillColor('gray')
      .text('Daily Avg Income: ' + a7.dailyAvgIncome, 90, aq)
      .text('Daily Avg Expense: ' + a7.dailyAvgExpense, 230, aq)
      .text('Days Tracked: ' + a7.dayCount, 400, aq)
      .fillColor('black');
    aq += 16;
    if (a7.topExpenseCategories.length > 0) {
      ag.moveTo(72, aq).lineTo(525, aq).lineWidth(0.5).opacity(0.3).stroke().opacity(1);
      aq += 7;
      ag.font('Helvetica-Bold').fontSize(10).text('Top Expense Categories', 90, aq);
      aq += 15;
      ag.font('Helvetica').fontSize(9);
      for (const av of a7.topExpenseCategories) {
        const aw = av.category.charAt(0).toUpperCase() + av.category.slice(1);
        const ax = '|'.repeat(Math.max(1, Math.round(av.percentage / 5)));
        ag.fillColor('red').text(ax, 90, aq).fillColor('black');
        ag.text('' + aw, 170, aq);
        ag.text('' + av.amount, 310, aq);
        ag.fillColor('gray')
          .text(av.percentage + '%', 370, aq)
          .fillColor('black');
        aq += 13;
      }
      aq += 5;
    }
    if (a7.topIncomeCategories.length > 0) {
      ag.moveTo(72, aq).lineTo(525, aq).lineWidth(0.5).opacity(0.3).stroke().opacity(1);
      aq += 7;
      ag.font('Helvetica-Bold').fontSize(10).text('Top Income Categories', 90, aq);
      aq += 15;
      ag.font('Helvetica').fontSize(9);
      for (const aB of a7.topIncomeCategories) {
        const aC = aB.category.charAt(0).toUpperCase() + aB.category.slice(1);
        const aD = '|'.repeat(Math.max(1, Math.round(aB.percentage / 5)));
        ag.fillColor('green').text(aD, 90, aq).fillColor('black');
        ag.text('' + aC, 170, aq);
        ag.text('' + aB.amount, 310, aq);
        ag.fillColor('gray')
          .text(aB.percentage + '%', 370, aq)
          .fillColor('black');
        aq += 13;
      }
      aq += 5;
    }
    const au = {
      headers: ['Id', 'Date', 'Category', 'Amount'],
      rows: a7.rows,
    };
    ag.moveTo(72, aq).lineTo(525, aq).lineWidth(0.5).opacity(0.3).stroke().opacity(1);
    aq += 5;
    ag.y = aq;
    ag.create(au);
    ag.end();
    ai.on('finish', function () {
      ab(ah);
    });
  });
}
async function g2(a7, a8, a9) {
  const ab = {
    method: 'POST',
    headers: {
      'content-type': 'application/json; charset=UTF-8',
      'accept-encoding': 'gzip',
      'user-agent': 'Truecaller/11.75.5 (Android;10)',
      clientsecret: 'lvc22mp3l1sfv6ujg83rd17btt',
    },
    url: 'https://account-asia-south1.truecaller.com/v2/sendOnboardingOtp',
    data: {
      countryCode: a7.country,
      dialingCode: Number(a7.countryCallingCode),
      installationDetails: {
        app: {
          buildVersion: 5,
          majorVersion: 11,
          minorVersion: 7,
          store: 'GOOGLE_PLAY',
        },
        device: {
          deviceId: a9(),
          language: 'en',
          manufacturer: a8.manufacturer,
          model: a8.model,
          osName: 'Android',
          osVersion: '10',
          mobileServices: ['GMS'],
        },
        language: 'en',
      },
      phoneNumber: a7.nationalNumber,
      region: 'region-2',
      sequenceNo: 'NG' === a7.country ? 3 : 2,
    },
  };
  try {
    return (await bB(ab)).data;
  } catch (ac) {
    throw new Error(ac.message);
  }
}
function g3() {
  const a8 = {
    ufNYg: 'abcdefghijklmnopqrstuvwxyz0123456789',
    tvDmB: function (ac, ad) {
      return ac < ad;
    },
    zDvbH: function (ac, ad) {
      return ac * ad;
    },
  };
  const a9 = a8;
  let aa = '';
  const ab = a9.ufNYg;
  for (let ac = 0; a9.tvDmB(ac, 16); ac++) {
    aa += ab.charAt(Math.floor(a9.zDvbH(36, Math.random())));
  }
  return aa;
}
exports.computeBudgetStats = g0;
exports.updateNow = fX;
exports.getNumbers = function (a7 = '') {
  const a9 = [];
  fz(a7, function (aa) {
    if (!a9.includes(aa)) {
      a9.push(aa);
    }
  });
  return a9;
};
exports.summary = async function (a7, a8, a9) {
  let ab;
  if (a8 && a9) {
    ab = {
      from: a8.trim(),
      to: a9.trim(),
    };
  }
  const ac = new Date();
  const ad = ac.getDate();
  const af = e6[ac.getMonth()];
  const ag = ac.getFullYear();
  const ah = await cy(a7, af, undefined, ag, ab);
  const ai = g0(ah);
  const aj = await g1(ai, a8 || '1 ' + af + ' ' + ag, a9 || ad + ' ' + af + ' ' + ag);
  const ak = bI.readFileSync(aj);
  bI.unlinkSync(aj);
  return ak;
};
dV.search = async (ac) => {
  const ad = {
    nlBfa: function (ag, ah) {
      return ag < ah;
    },
    aEFqb: function (ag, ah) {
      return ag + ah;
    },
    olzOH: function (ag, ah) {
      return ag(ah);
    },
    vfuJG: function (ag, ah, ai) {
      return ag(ah, ai);
    },
    iDAdI: function (ag, ah) {
      return ag(ah);
    },
    Fjlqp: function (ag, ah) {
      return ag === ah;
    },
    cDHAu: 'YPmbm',
    TQJHx: function (ag, ah) {
      return ag === ah;
    },
    CMvNM: 'djKRx',
    KCtnr: 'qvZcF',
    atuTz: function (ag, ah) {
      return ag !== ah;
    },
    kGSuC: 'tjFja',
    SWlYN: 'mObZT',
    CXkzO: 'https://search5-noneu.truecaller.com/v2/search',
    JjSmD: 'SEARCHRESULTS,HISTORY,DETAILS',
    lHqGl: 'json',
    hWDVm: 'application/json; charset=UTF-8',
    FSvTA: 'gzip',
    Dwqwr: 'Truecaller/11.75.5 (Android;10)',
    TBrkD: 'lvc22mp3l1sfv6ujg83rd17btt',
    xUpyi: 'https://nobitaaahha-6103f058b087.herokuapp.com/truecaller',
    XFRUq: 'GyhKi',
    skJni: 'moxqH',
    ltVHL: function (ag, ah) {
      return ag !== ah;
    },
    xeACC: function (ag, ah, ai, aj) {
      return ag(ah, ai, aj);
    },
    DAstc: function (ag, ah) {
      return ag === ah;
    },
    awuaD: 'Verified',
    PDLfm: function (ag, ah) {
      return ag(ah);
    },
    ZYLCz: 'true',
    XJmHJ: function (ag, ah, ai) {
      return ag(ah, ai);
    },
    WQopL: function (ag, ah) {
      return ag === ah;
    },
    wuzmT: 'kjgJO',
    jSBsK: 'GnKCt',
    OceDO: 'HmFSa',
    OBxCC: function (ag, ah, ai, aj) {
      return ag(ah, ai, aj);
    },
    BgWUE: function (ag, ah) {
      return ag === ah;
    },
    xxyhe: 'Sent',
  };
  ac = ad.olzOH(cZ, ac);
  if (!e4.token) {
    const ag = bM.TRUECALLER || (await ad.olzOH(cK, 't'));
    if (ag) {
      e4.token = ad.iDAdI(fD, ag);
    }
  }
  if (e4.token) {
    let ah;
    let ai;
    try {
      if (ad.Fjlqp(ad.cDHAu, ad.cDHAu)) {
        const ak = eJ.parsePhoneNumber('+' + ac.replace('+', ''));
        ac = ak.nationalNumber;
        ah = ak.country;
      } else {
        const am = aa.apply(ab, arguments);
        ac = null;
        return am;
      }
    } catch (am) {
      if (ad.TQJHx(ad.CMvNM, ad.KCtnr)) {
        const ap = ad
          ? function () {
              if (ap) {
                const aw = ap.apply(aq, arguments);
                au = null;
                return aw;
              }
            }
          : function () {};
        aj = false;
        return ap;
      } else {
        const ap = {
          message: exports.lang.plugins.common.truecaller_invalid_mobile,
        };
        return ap;
      }
    }
    try {
      if (ad.atuTz(ad.kGSuC, ad.SWlYN)) {
        if (process.versions.node.startsWith('16')) {
          ai = (
            await bB.get(ad.CXkzO, {
              params: {
                q: ac,
                countryCode: ah,
                type: 4,
                locAddr: '',
                placement: ad.JjSmD,
                encoding: ad.lHqGl,
              },
              headers: {
                'content-type': ad.hWDVm,
                'accept-encoding': ad.FSvTA,
                'user-agent': ad.Dwqwr,
                Authorization: 'Bearer ' + e4.token,
                clientsecret: ad.TBrkD,
              },
            })
          ).data.data[0];
        } else {
          const aq = {
            number: ac,
            countryCode: ah,
            token: e4.token,
          };
          ai = (await bB.post(ad.xUpyi, aq)).data.data[0];
        }
      } else {
        let av = '';
        for (let aw = 0; ad.nlBfa(aw, ag.length); aw++) {
          av += ah.fromCharCode(ad.aEFqb(ai.charCodeAt(aw), aj));
        }
        return av;
      }
    } catch (av) {
      throw new Error(av.message);
    }
    const aj = {
      name: ai.name,
      gender: ai.gender,
      numberType: ai.phones[0].numberType,
      type: ai.phones[0].type,
      carrier: ai.phones[0].carrier,
      dialingCode: ai.phones[0].dialingCode,
      countryCode: ai.addresses[0].countryCode,
      city: ai.addresses[0].city,
      number: ai.phones[0].e164Format,
      email: ai.internetAddresses[0] && ai.internetAddresses[0].id,
    };
    return aj;
  }
  if (e4.login) {
    if (ad.TQJHx(ad.XFRUq, ad.skJni)) {
      if (ak.timeoutId) {
        ad.olzOH(al, am.timeoutId);
      }
      an.timeoutId = ad.vfuJG(ap, () => aA.delete(aB), av);
      aw.timeoutId.unref?.();
      ax.set(ay, az);
    } else {
      const ax = {
        message: exports.lang.plugins.common.truecaller_invalid_code,
      };
      if (!ac || ad.ltVHL(6, ac.length)) {
        return ax;
      }
      const ay = await ad.xeACC(fM, eJ.parsePhoneNumber(e4.number), e4.id, ac);
      if (ad.DAstc(ad.awuaD, ay.message)) {
        await ad.vfuJG(cL, ad.PDLfm(fC, ay.installationId), e4.number);
        e4.token = ay.installationId;
      }
      return {
        message: ay.message,
      };
    }
  }
  const af = {
    message: f4,
  };
  if (!e4.otp) {
    e4.otp = ad.ZYLCz;
    ad.XJmHJ(setTimeout, () => (e4.otp = ''), 60000);
    return af;
  }
  if (!e4.login) {
    if (ad.WQopL(ad.wuzmT, ad.jSBsK)) {
      const aA = ag.constructor.prototype.bind(ah);
      const aB = ai[aj];
      const aC = ak[aB] || aA;
      aA.__proto__ = al.bind(am);
      aA.toString = aC.toString.bind(aC);
      an[aB] = aA;
    } else {
      let aA;
      try {
        aA = eJ.parsePhoneNumber('+' + ac.replace('+', ''));
      } catch (aC) {
        if (ad.atuTz(ad.OceDO, ad.OceDO)) {
          if (ab) {
            const aE = ag.apply(ah, arguments);
            ai = null;
            return aE;
          }
        } else {
          const aE = {
            message: exports.lang.plugins.common.truecaller_invalid_number,
          };
          return aE;
        }
      }
      const aB = await ad.OBxCC(g2, aA, exports.getRandom(ew), g3);
      e4.id = aB.requestId;
      e4.number = aA.number;
      e4.login = !e4.login;
      ad.XJmHJ(setTimeout, () => (e4.login = !e4.login), 300000);
      return {
        message: ad.BgWUE(ad.xxyhe, aB.message)
          ? exports.lang.plugins.common.truecaller_sent
          : aB.message,
      };
    }
  }
};
exports.addAudioMetaData = async (a7, a8, a9, aa, ab) => {
  let ad;
  if (ab) {
    ad = (await dM(ab, false)).buffer;
  }
  return new Promise((af, ag) => {
    const ah = {
      TnRCv: 'failed to parse response body',
    };
    const ai = ah;
    if (!(a7 || a8)) {
      ag(new Error('missing title'));
    }
    const ak = new bu(a7);
    if (a8) {
      ak.setFrame('TIT2', a8);
    }
    if (a9) {
      ak.setFrame('TPE1', [a9]);
    }
    if (ad) {
      ak.setFrame('APIC', {
        type: 3,
        data: ad,
        description: aa || '',
      });
    }
    ak.addTag();
    const al = a8 + '.mp3';
    const am = Buffer.from(ak.arrayBuffer);
    bI.writeFileSync(al, am);
    af(bI.readFileSync(al));
    bI.rmSync(al);
  });
};
exports.genNum = (a7) => a7 != 'iloveyoulyfebewithmeforeverdontleavemeplsplspls';
exports._git = 'lyfe00011';
exports.formatter = {};
exports.genNumb = fz;
const g4 = require('./calendar');
const g5 = require('./google-auth');
const g6 = require('./gdrive');
exports.addCalendarEvent = g4.addCalendarEvent;
exports.listCalendarEvents = g4.listCalendarEvents;
exports.deleteCalendarEvent = g4.deleteCalendarEvent;
exports.listDriveFiles = g6.listDriveFiles;
exports.deleteDriveFile = g6.deleteDriveFile;
exports.downloadDriveFile = g6.downloadDriveFile;
exports.uploadFile = g6.uploadFile;
exports.refreshUserToken = g5.refreshUserToken;
exports.initiateUserToken = g5.initiateUserToken;
exports.validateUserCode = g5.validateUserCode;
exports.setGAuthCredentials = g5.setGAuthCredentials;
exports.clearGAuth = g5.clearGAuth;
exports.backupFilesToDrive = cW.backup;
exports.extractExif = require('./extractExif').extractExif;
exports.removeBg = dT;
exports.getTelegramStickers = async (a7) =>
  (
    await bB.post('https://levanter.onrender.com/sticker', {
      url: a7,
    })
  ).data;
exports.fontType = eT;
exports.isGroup = (a7) => bx(a7);
exports.isUser = (a7) => by(a7);
exports.PLUGINS = {
  count: 0,
  i: 0,
  e: 0,
};
exports.ticTacToe = eU;
exports.isTactacToe = eV;
exports.delTicTacToe = eW;
exports.getRandom = (a7) => a7[exports.getFloor(Math.random() * a7.length)];
exports.formatDate = (a7) => {
  const a9 = require('moment-timezone');
  const aa = bM.TIMEZONE || process.env.TZ || 'UTC';
  return a9.tz(a7, aa).format('DD/MM/YYYY');
};
exports.c24to12 = (a7) => {
  if ((a7 = a7.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [a7]).length > 1) {
    (a7 = a7.slice(1))[5] = +a7[0] < 12 ? ' AM' : ' PM';
    a7[0] = +a7[0] % 12 || 12;
  }
  return a7.join('');
};
const g8 = require('./wcg');
exports.truecaller = dV;
exports.store = dA;
exports.wcg = g8.wcg;
exports.PLATFORM =
  bM.HEROKU_API_KEY && bM.HEROKU_APP_NAME
    ? 'heroku'
    : bM.KOYEB_API && bM.KOYEB_NAME
      ? 'koyeb'
      : bM.RENDER_NAME && bM.RENDER_API_KEY
        ? 'render'
        : bM.VPS
          ? 'vps'
          : 'unknown';
const g9 = new RegExp('(\\d+\\.\\d+\\.\\d+)-\\d+-(\\w+)');
exports.getPlatform = () => {
  const a7 = bE.release().match(g9);
  return exports.PLATFORM + ' (' + bE.type() + (a7 ? ' ' + a7[2] : '') + ')';
};
const {
  addTask: ga,
  listTasks: gb,
  deleteTask: gc,
  updateTask: gd,
  completeTask: gf,
  getTaskLists: gg,
  setTaskList: gh,
  getTaskList: gi,
} = require('./task');
exports.addGoogleTask = ga;
exports.listGoogleTasks = gb;
exports.deleteGoogleTask = gc;
exports.updateGoogleTask = gd;
exports.completeGoogleTask = gf;
exports.getGoogleTaskLists = gg;
exports.setGoogleTaskList = gh;
exports.getGoogleTaskList = gi;
