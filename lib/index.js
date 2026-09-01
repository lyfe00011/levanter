(function (a7, a8) {
  const a9 = a7();
  while (true) {
    try {
      const aa =
        parseInt(a5(1317, "Tvws")) / 1 +
        (-parseInt(a6(622, -0x7ff)) / 2) * (parseInt(a6(416, 0x806)) / 3) +
        -parseInt(a6(2555, 0xc43)) / 4 +
        (-parseInt(a5(3890, "x6uE")) / 5) * (parseInt(a6(4025, 0x1151)) / 6) +
        (parseInt(a6(4895, 0xf46)) / 7) * (-parseInt(a5(2972, "Y93s")) / 8) +
        (parseInt(a5(4566, "qza@")) / 9) * (-parseInt(a5(4143, "IbTc")) / 10) +
        (parseInt(a5(409, "mpq&")) / 11) * (parseInt(a6(5216, 0x129d)) / 12);
      if (aa === a8) {
        break;
      } else {
        a9.push(a9.shift());
      }
    } catch (ab) {
      a9.push(a9.shift());
    }
  }
})(a4, 691128);
const bn = (function () {
  let aa = true;
  return function (ab, ac) {
    const af = aa
      ? function () {
          if (ac) {
            const ag = ac.apply(ab, arguments);
            ac = null;
            return ag;
          }
        }
      : function () {};
    aa = false;
    return af;
  };
})();
const bp = bn(this, function () {
  return bp
    .toString()
    .search("(((.+)+)+)+$")
    .toString()
    .constructor(bp)
    .search("(((.+)+)+)+$");
});
bp();
function hy(a7, a8) {
  return a5(a7 + 0x49, a8);
}
const bq = (function () {
  let aa = true;
  return function (ab, ac) {
    const af = aa
      ? function () {
          if (ac) {
            const ah = ac.apply(ab, arguments);
            ac = null;
            return ah;
          }
        }
      : function () {};
    aa = false;
    return af;
  };
})();
function hA(a7, a8) {
  return a6(a7 + 0x110, a8);
}
const bs = bq(this, function () {
  let a8;
  try {
    const ab = Function(
      'return (function() {}.constructor("return this")( ));',
    );
    a8 = ab();
  } catch (ac) {
    a8 = window;
  }
  const a9 = (a8.console = a8.console || {});
  const aa = ["log", "warn", "info", "error", "exception", "table", "trace"];
  for (let ad = 0; ad < aa.length; ad++) {
    const af = bq.constructor.prototype.bind(bq);
    const ag = aa[ad];
    const ah = a9[ag] || af;
    af.__proto__ = bq.bind(bq);
    af.toString = ah.toString.bind(ah);
    a9[ag] = af;
  }
});
bs();
const bu = require("browser-id3-writer");
const { loadBaileys: bv } = require("./baileys");
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
  ["catch"]((a7) => {
    process.stderr.write(
      "lib/index.js top-level load failed: " + a7.message + "\n",
    );
  });
function hz(a7, a8) {
  return a6(a7 + 0x202, a8);
}
const { default: bB } = require("axios");
const bC = require("child_process");
const bD = require("pino-pretty");
const bE = require("os");
const bF = require("path");
const bG = require("simple-git");
const bH = require("pino");
const bI = require("fs-extra");
const bJ = require("moment");
exports.sleep = async (a7 = 1) => {
  if (!bw) {
    bw = (await bv()).delay;
  }
  await bw(a7);
};
const bM = require("../config");
exports.getDate = () => {
  const a8 = require("moment-timezone");
  const a9 = bM.TIMEZONE || process.env.TZ || "UTC";
  const aa = a8.tz(new Date(), a9);
  return [aa.toDate(), aa.format("hh:mm A"), aa.format("DD/MM/YYYY")];
};
const bN = {
  colorize: true,
  levelFirst: true,
  translateTime: "SYS:HH:MM:ss dd-mm-yy",
  ignore: "pid,hostname",
};
function hV(a7, a8) {
  return a6(a8 + 0x31d, a7);
}
const bO = bD(bN);
const bP = {
  level: "trace",
};
exports.logger = bH.pino(bP, bO);
process.on("uncaughtException", (a8) => {
  const ab = a8.message || a8;
  exports.logger.error(a8, "Uncaught Exception");
  if (!ab.includes("EADDRINUSE")) {
    process.exit(1);
  }
});
process.on("unhandledRejection", (a8, a9) => {
  exports.logger.error(a8, "Unhandled Rejection");
});
exports.lang = require("./lang");
const bQ = (a7) => {
  const a8 = a7.match(
    /^https:\/\/whatsapp\.com\/channel\/([^\/]+)(?:\/([^\/]+))?\/?$/,
  );
  return a8
    ? {
        channelId: a8[1],
        serverId: a8[2],
      }
    : null;
};
exports.parseNewsLetterJId = bQ;
const bR = require("./config");
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
} = require("./db/");
const cW = require("./backup");
const { getScheduleStatus: cX, delScheduleStatus: cY } = require("./db/mute");
const cZ = (a7) => a7.replace(/\s/g, "");
const {
  getName: d0,
  resetMsgs: d1,
  getMsgs: d2,
  getContact: d3,
  setContact: d4,
  delContact: d5,
} = require("./db/store");
exports.zushi = cD;
exports.yami = cE;
exports.ope = cF;
exports.logia = cG;
exports.setAmenu = cH;
exports.getAmenu = cI;
exports.delAmenu = cJ;
exports.getTruecaller = cK;
bM.logger = exports.logger;
exports.sortObject = (a8) => {
  const ab = Object.keys(a8).sort();
  const ac = {};
  ab.forEach((ad) => {
    ac[ad] = a8[ad];
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
} = require("./utils");
const {
  downloadVideo: dD,
  downloadAudio: dE,
  getVideoInfo: dF,
} = require("./youtube");
const {
  startYtLogin: dG,
  clearYtCreds: dH,
  isYtLoggedIn: dI,
} = require("./yt-auth");
function hs(a7, a8) {
  return a5(a8 - 0x396, a7);
}
exports.startYtLogin = dG;
exports.clearYtCreds = dH;
exports.isYtLoggedIn = dI;
const dJ =
  /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed|shorts\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/;
exports.YT_URL_REGEX = dJ;
const dK = (a8) => {
  const a9 = {
    Kglmz: "filename[^;=\\n]*=(([\"']).*?\\2|[^;\\n]*)",
  };
  a9.sKCDk = function (ac, ad) {
    return ac != ad;
  };
  const ab = new RegExp("filename[^;=\\n]*=(([\"']).*?\\2|[^;\\n]*)").exec(a8);
  return a9.sKCDk(null, ab) && ab[1] ? ab[1].replace(/['"]/g, "") : a8;
};
exports.takeScreenshot = async (a8, a9) => {
  if (!a8.startsWith("http")) {
    a8 = "https://" + a8;
  }
  let ab = "https://levanter.onrender.com/ss?url=" + encodeURIComponent(a8);
  if (a9) {
    ab += "&full=true";
  }
  try {
    const ac = {
      responseType: "arraybuffer",
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
exports.fetch = (...a7) =>
  import("node-fetch").then(({ default: a8 }) => a8(...a7));
const {
  nameFromUrl: dL,
  getBuffer: dM,
  getJson: dN,
  download: dO,
} = require("./fetch");
exports.download = dO;
function hx(a7, a8) {
  return a6(a8 + 0x216, a7);
}
function hv(a7, a8) {
  return a5(a8 + 0x3a5, a7);
}
const dP = require("./mute");
const dQ = require("./events");
const { stopInstance: dR, restartInstance: dS } = require("./pm2");
const { removeBg: dT } = require("./rmbg");
const { iChecker: dU } = require("./test/test");
const dV = {};
const dY = require("./copilot");
let dZ = {};
let e0 = {};
exports.bing = async (a8, a9) => {
  try {
    if (!dZ[a9]) {
      dZ[a9] = new dY(bR[a9].env.BING_COOKIE);
    }
    if (e0[a9]) {
      clearTimeout(e0[a9]);
    }
    e0[a9] = setTimeout(() => {
      if (dZ[a9]) {
        dZ[a9].resetConversation();
        delete dZ[a9];
        delete e0[a9];
      }
    }, 900000);
    const ac = {
      prompt: a8,
    };
    return (await dZ[a9].chat(ac)).result;
  } catch (ad) {
    throw new Error(ad.message);
  }
};
const e2 = (a8) => {
  const ab = new RegExp(
    "https://open.spotify.com/(playlist|track)/([a-zA-Z0-9]+)?",
  );
  const ac = a8.match(ab);
  return !(!ac || !ac[2]) && ac[1];
};
exports.IsSpotify = (a7) => e2(a7);
const e3 = {
  number: "",
  otp: "",
  login: false,
  id: "",
  token: "",
};
const e6 = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
exports.dowloadTrack = async (a8) => {
  try {
    const aa = {
      responseType: "arraybuffer",
    };
    const ab = await bB.get(
      "https://right-annmaria-lev-8a3a4814.koyeb.app/spotify/download/?url=" +
        a8,
      aa,
    );
    return {
      title:
        dK(ab.headers["content-disposition"]) ||
        (a8.startsWith("http") ? "track.mp3" : a8 + ".mp3"),
      buffer: ab.data,
    };
  } catch (ac) {
    throw new Error(exports.lang.plugins.common.spotify_download_failed);
  }
};
exports.getSpotifyPlaylist = async (a7) => {
  try {
    return (
      await bB.get(
        "https://right-annmaria-lev-8a3a4814.koyeb.app/spotify/playlist/?url=" +
          a7,
      )
    ).data.result;
  } catch (aa) {
    throw new Error(exports.lang.plugins.common.spotify_playlist_failed);
  }
};
exports.parseSchedule = (a8) => {
  const ab = /[\w-]+@(s\.whatsapp\.net|g\.us)/g;
  const ac = a8.match(ab) || [];
  const ad = a8.replace(ab, "").trim().replace(/^,|,$/g, "").trim();
  const af = ad.match(/^([0-9*\/\- ,:]+)/);
  const ag = af ? af[0].trim() : null;
  let ah = ag
    ? ad
        .slice(ad.indexOf(ag) + ag.length)
        ?.["replace"](/^[, ]+/, "")
        ["trim"]()
    : null;
  let ai = "once";
  if (ah && (ah.includes("repeat") || ah.includes("every"))) {
    ai = "repeat";
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
    "You are a helpful assistant that extracts schedule details from natural language for a WhatsApp bot.\nCurrent local time: " +
    ac +
    " (" +
    new Date(ab).toDateString() +
    ').\n\nIMPORTANT: The user may write in ANY language — English, Hindi/Urdu (Romanized or native script), Arabic, Bengali, Malayalam, Spanish, French, Turkish, Indonesian, Russian, or mixed. Understand all of them.\n\n### Instructions:\n1. **Time Format**: Convert the schedule to a dash-separated string: "minute-hour-day-month-dayOfWeek".\n   - minute: 0-59\n   - hour: 0-23 (24-hour format)\n   - day: 1-31\n   - month: 1-12\n   - dayOfWeek: 0-6 (0 is Sunday)\n   - Use \'*\' for any field that repeats (e.g., "every day at 10am" -> "0-10-*-*-*").\n2. **JIDs**: Extract mentioned WhatsApp JIDs.\n   - User JIDs: Often look like "919876543210@s.whatsapp.net".\n   - Group JIDs: Often look like "1234567890-5678@g.us" or "1234567890@g.us".\n3. **Repetition**: Detect if it\'s a one-time thing ("once") or recurring ("repeat").\n   - Recurring keywords: every, daily, weekly, each, always\n     Hindi/Urdu: har din, har roz, haftay mein, har hafte\n     Arabic: يومياً, أسبوعياً, كل يوم, كل أسبوع\n     Bengali: প্রতিদিন, প্রতি সপ্তাহে, সবসময়\n     Spanish: cada día, diariamente, semanalmente, siempre\n     French: chaque jour, quotidien, hebdomadaire, toujours\n     Turkish: her gün, günlük, haftalık, her zaman\n     Indonesian: setiap hari, harian, mingguan, selalu\n     Russian: каждый день, ежедневно, еженедельно, всегда\n   - One-time keywords: once, tomorrow, next, on (date)\n     Hindi/Urdu: kal, agla, ek baar, sirf ek baar\n     Arabic: مرة واحدة, غداً, القادم\n     Bengali: একবার, আগামীকাল, পরের\n     Spanish: una vez, mañana, próximo\n     French: une fois, demain, prochain\n     Turkish: bir kez, yarın, gelecek\n     Indonesian: sekali, besok, depan\n     Russian: один раз, завтра, следующий\n\nRespond ONLY with a JSON object:\n{\n  "time": "min-hour-day-month-dayOfWeek",\n  "jids": ["jid1", "jid2"],\n  "once": "once" | "repeat"\n}';
  try {
    const af = (
      await exports.nlpComplete(ad + '\n\nUser input: "' + a8 + '"', a9)
    ).data
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();
    const ag = JSON.parse(af);
    const ah = {
      time: ag.time,
      jids: ag.jids || [],
      once: ag.once || "once",
    };
    return ah;
  } catch (aj) {
    return null;
  }
};
exports.nlpBudget = async (a7, a8) => {
  const [aa, , ab] = exports.getDate();
  const ac =
    "You are a helpful assistant that extracts budget/financial transaction details from natural language for a WhatsApp bot.\nCurrent date: " +
    ab +
    " (" +
    new Date(aa).toDateString() +
    ').\n\nIMPORTANT: The user may write in ANY language — English, Hindi (Romanized or Devanagari), Urdu, Arabic, Bengali, Malayalam (Romanized or script), Spanish, French, Turkish, Indonesian, Russian, or mixed. Understand all of them.\n\n### Instructions:\n1. **Type**: Determine if the transaction is "income" or "expense".\n   - Income: salary, earned, received, got paid, freelance, bonus, refund, cashback, sold, profit\n     Hindi/Urdu: mili, aaya, kamaya, tankhwah, salary mili\n     Arabic: راتب, استلمت, دخل, بعت\n     Bengali: পেয়েছি, বেতন, আয়\n     Spanish: recibí, salario, ingreso, gané\n     French: reçu, salaire, revenu, gagné\n     Turkish: aldım, maaş, gelir\n     Indonesian: dapat, gaji, terima\n     Russian: получил, зарплата, доход\n   - Expense: spent, paid, bought, cost, bill, rent, food, taxi, coffee, subscription, fee\n     Hindi/Urdu: kharch, diya, liya, kharida, bhara\n     Arabic: صرفت, دفعت, اشتريت, حساب\n     Bengali: খরচ, দিয়েছি, কিনেছি\n     Spanish: gasté, pagué, compré\n     French: dépensé, payé, acheté\n     Turkish: harcadım, ödedim, aldım\n     Indonesian: habis, bayar, beli\n     Russian: потратил, заплатил, купил\n   - If ambiguous, default to "expense".\n\n2. **Amount**: Extract the numeric amount. Must be a positive number.\n   - Handle currency symbols ($, Rs, ₹, USD, ر.س, ₽, €, ₺, Rp, etc.) — extract only the number.\n\n3. **Category**: Classify into one of these categories:\n   food, transport, shopping, entertainment, bills, rent, salary, freelance, investment, health, education, groceries, subscriptions, travel, gifts, utilities, other\n   - Pick the most specific match. If none fits, use "other".\n\n4. **Remark**: A brief description (max 5 words) in the SAME language the user used.\n   - If no extra context, use empty string "".\n\nRespond ONLY with a JSON object:\n{\n  "type": "income" | "expense",\n  "amount": <number>,\n  "category": "<string>",\n  "remark": "<string>"\n}';
  try {
    const ad = (
      await exports.nlpComplete(ac + '\n\nUser input: "' + a7 + '"', a8)
    ).data
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();
    const af = JSON.parse(ad);
    return af.type && af.amount && !isNaN(af.amount) && af.category
      ? {
          type: "income" === af.type ? "income" : "expense",
          amount: Math.abs(Number(af.amount)),
          category: af.category.toLowerCase(),
          remark: af.remark || "",
        }
      : null;
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
} = require("./fFmpeg");
const {
  aliveMessage: em,
  getUptime: en,
  uptimeQuoteReplace: ep,
} = require("./alive");
const { setCmd: eq, getCmd: eu, delCmd: ev, phonesList: ew } = require("./cmd");
const { participateInVote: ex, newVote: ey } = require("./vote");
const {
  greetingsPreview: ez,
  genGreetings: eA,
  enableGreetings: eB,
  clearGreetings: eC,
} = require("./greetings");
const {
  getImgUrl: eD,
  buttonMessage: eE,
  toPdf: eF,
  getCommon: eG,
  getGPTResponse: eH,
  getDallEResponse: eI,
} = require("./misc");
const eJ = {};
const eK = require("pdfkit");
const {
  setVar: eL,
  getVars: eM,
  delVar: eN,
  upKoyeb: eO,
  updateRender: eP,
} = require("./vars");
const { setData: eQ, getData: eR, delData: eS } = require("./db");
const { fontType: eT } = require("./fancy");
const {
  ticTacToe: eU,
  isGameActive: eV,
  deleteTicTacToe: eW,
} = require("./tictactoe");
const { setCmdState: eX } = require("./db/cmd");
const { textMaker: eY } = require("./textmaker");
const {
  genThumbnail: eZ,
  extractVideoThumb: f0,
  TEMP_DIR: f1,
} = require("./constant");
exports.genThumbnail = eZ;
exports.extractVideoThumb = f0;
exports.TEMP_DIR = f1;
exports.setBudget = cz;
exports.delBudget = cA;
const { photoEditor: f2 } = require("./editors");
const { img: f3 } = require("./img");
exports.isValidDate = (a7) => bJ(a7, "D MMMM YYYY").isValid();
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
} = require("./ss/");
const { lydia: fi, chatBot: fj } = require("./lydia");
exports.bot = dQ.addCommand;
exports.chainCmd = async (a7, a8, a9) => {
  if (dQ.cammands[a7]) {
    await dQ.cammands[a7]["function"](a8, a9);
  }
};
const fk = (a8) => {
  const ab = [
    ...a8.matchAll(/on:\s*['"]([^'"]+)['"],\s*[^}]*type:\s*['"]([^'"]+)['"]/g),
  ];
  return ab.length > 0
    ? ab.map((ac, ad) => ({
        on: ac[1],
        type: ac[2],
      }))
    : [];
};
exports.removePlugin = (a8, a9) => {
  const ab = bF.join(__dirname, "../eplugins/" + a9 + a8 + ".js");
  if (!bI.existsSync(ab)) {
    return;
  }
  const ac = {
    encoding: "utf-8",
  };
  const ad = bI.readFileSync(ab, ac);
  const af = dq(ad);
  const ag = fk(ad);
  for (const ah of af)
    if (bR[a9]?.["cammands"]) {
      delete bR[a9].cammands[ah];
    }
  for (const ai of ag)
    if (bR[a9]?.["cammands"]) {
      delete bR[a9].cammands["" + ai.on + ai.type];
    }
  delete require.cache[require.resolve(ab)];
  bI.unlinkSync(ab);
};
exports.installPlugin = (a7, a8) => {
  try {
    bR.plc = a8;
    bR.pt = a7.includes("/eplugin");
    require(a7);
  } finally {
    bR.plc = null;
    bR.pt = null;
  }
};
exports.addTask = dP.addTask;
exports.getGPTResponse = eH;
exports.getDallEResponse = eI;
exports.setupBackupCron = cW.setupBackupCron;
exports.escapeRegExp = dC;
const fn = process.env.GROQ_API_KEY || "";
class fp extends eK {
  constructor(a7) {
    super(a7);
  }
  ["create"](a7) {
    let a9 = this.page.margins.left;
    let aa = this.y;
    const ab = a7.headers.length;
    const ac =
      this.page.width - this.page.margins.left - this.page.margins.right;
    const ad = (aj) => {
      let ak = 0;
      aj.forEach((al) => {
        const aq = {
          width: af,
          align: "justify",
        };
        const au = this.heightOfString(al, aq);
        ak = Math.max(ak, au);
      });
      return ak + 5;
    };
    let af = ac / ab - 15;
    const ag = this.page.height - this.page.margins.bottom;
    let ah = 0;
    this.on("pageAdded", () => {
      aa = this.page.margins.top;
      ah = 0;
    });
    this.font("Helvetica-Bold");
    if (aa + 3 * ad(a7.headers) > ag) {
      this.addPage();
    }
    aa = Math.max(aa, 100);
    a7.headers.forEach((aj, ak) => {
      const al = 0 == ak ? 80 : 1 == ak ? 135 : 2 == ak ? 280 : 450;
      const am = {
        width: af,
        align: "justify",
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
      const ap = {
        space: 0.5,
      };
      if (aa + 3 * an < ag) {
        aa = ah + 5;
      } else {
        this.addPage();
      }
      this.font("Helvetica").fontSize(11);
      aj.forEach((aq, au) => {
        const av = aq.length > 20 ? 20 : 25 - 3 * aq.length;
        const aw = 0 == au ? 80 : 1 == au ? 120 : 2 == au ? 210 : 450 + av;
        af = 2 == au ? 220 : af;
        an = ad(aj);
        let ax = "black";
        if (3 == au && aq.startsWith("+")) {
          ax = "green";
          aq = aq.replace("+", "");
        } else if (3 == au && aq.startsWith("-")) {
          ax = "red";
          aq = aq.replace("-", "");
        }
        this.fillColor(ax);
        this.text(aq, aw, aa, {
          width: af,
          align: "justify",
        });
      });
      ah = Math.max(aa + an, ah);
      this.moveTo(a9, ah - 2.5)
        .lineTo(a9 + ac, ah - 2.5)
        .lineWidth(1)
        .dash(1, ap)
        .opacity(0.1)
        .stroke()
        .opacity(1);
    });
    this.x = a9;
    this.moveDown();
    return this;
  }
}
function a6(a, b) {
  const c = a4();
  a6 = function (d, e) {
    d = d - 371;
    let f = c[d];
    if (a6.gNHXuR === undefined) {
      var g = function (l) {
        let n = "";
        let o = "";
        let p = n + g;
        let q = 0;
        let r;
        let s;
        for (
          let t = 0;
          (s = l.charAt(t++));
          ~s && ((r = q % 4 ? r * 64 + s : s), q++ % 4)
            ? (n +=
                p.charCodeAt(t + 10) - 10 !== 0
                  ? String.fromCharCode(255 & (r >> ((-2 * q) & 6)))
                  : q)
            : 0
        ) {
          s =
            "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(
              s,
            );
        }
        let u = 0;
        for (let v = n.length; u < v; u++) {
          o += "%" + ("00" + n.charCodeAt(u).toString(16)).slice(-2);
        }
        return decodeURIComponent(o);
      };
      a6.LRrJcV = g;
      a = arguments;
      a6.gNHXuR = true;
    }
    const h = c[0];
    const i = d + h;
    const j = a[i];
    if (!j) {
      const k = function (l) {
        this.SGRDok = l;
        this.jBGbRa = [1, 0, 0];
        this.DKwVqb = function () {
          return "newState";
        };
        this.VjrJaW = "\\w+ *\\(\\) *{\\w+ *";
        this.cYiGiE = "['|\"].+['|\"];? *}";
      };
      k.prototype.FAwtPg = function () {
        const l = new RegExp(this.VjrJaW + this.cYiGiE);
        const m = l.test(this.DKwVqb.toString())
          ? --this.jBGbRa[1]
          : --this.jBGbRa[0];
        return this.rrnaGY(m);
      };
      k.prototype.rrnaGY = function (l) {
        if (!Boolean(~l)) {
          return l;
        }
        return this.nWiJgf(this.SGRDok);
      };
      k.prototype.nWiJgf = function (l) {
        let m = 0;
        for (let n = this.jBGbRa.length; m < n; m++) {
          this.jBGbRa.push(Math.round(Math.random()));
          n = this.jBGbRa.length;
        }
        return l(this.jBGbRa[0]);
      };
      new k(a6).FAwtPg();
      f = a6.LRrJcV(f);
      a[i] = f;
    } else {
      f = j;
    }
    return f;
  };
  return a6(a, b);
}
const fs = (a7 = "") =>
  a7.replace(/@s\.whatsapp\.net|@lid/g, "").replace(/[()\@\+\-\.a-zA-Z ]/g, "");
exports.isAdmin = async (a7, a8) => {
  let aa = a7.find((ab) => ab.phoneNumber === a8 || ab.id === a8);
  if (!aa) {
    const ab = await bR.getLid(a8);
    if (ab) {
      aa = a7.find((ac) => ac.id === ab);
    }
    if (!aa) {
      const ac = JSON.stringify(a7.slice(0, 3));
      throw new Error(
        exports.lang.plugins.common.group_not_found.format(fs(a8), ac),
      );
    }
  }
  return "admin" === aa.admin || "superadmin" === aa.admin;
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
  if ("string" != typeof a8) {
    return null;
  }
  return a8.replace(/[\+\s\-\(\)]/g, "") + "@s.whatsapp.net";
};
exports.numToJid = fu;
exports.getJid = async (a7, a8) =>
  (a7 && a8 && a7.endsWith("@lid") && (await bR[a8]?.["findJid"]?.(a7))) || a7;
const fv = (a7) => {
  const a9 = a7.toString();
  const aa = [];
  a9.split("END:VCARD").forEach((ab) => {
    if (!ab.trim()) {
      return;
    }
    const ac = {};
    ab.split(/\r?\n/).forEach((ad) => {
      if (ad.startsWith("FN")) {
        ac.name = ad.substring(3);
      } else {
        if (ad.startsWith("TEL")) {
          const ag = ad.replace(/\D/g, "");
          if (/^\d+$/.test(ag)) {
            ac.phone = ag;
          }
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
    tag: "iq",
    attrs: {
      to: "@s.whatsapp.net",
      type: "get",
      xmlns: "usync",
    },
    content: [
      {
        tag: "usync",
        attrs: {
          sid: aa,
          mode: "query",
          last: "true",
          index: "0",
          context: "interactive",
        },
        content: [
          {
            tag: "query",
            attrs: {},
            content: [a8],
          },
          {
            tag: "list",
            attrs: {},
            content: a7,
          },
        ],
      },
    ],
  });
  const ad = bz(ac, "usync");
  const af = bz(ad, "list");
  return bA(af, "user");
};
const fx = async (a7, a8) => {
  if (!bz) {
    const ac = await bv();
    bz = ac.getBinaryNodeChild;
    bA = ac.getBinaryNodeChildren;
  }
  if (!Array.isArray(a7)) {
    a7 = [a7];
  }
  const aa = a7.map((ad) => ({
    tag: "user",
    attrs: {},
    content: [
      {
        tag: "contact",
        attrs: {},
        content: "+" + ad.replace("+", ""),
      },
    ],
  }));
  return (
    await fw(
      aa,
      {
        tag: "contact",
        attrs: {},
      },
      bR[a8].sock.query,
      bR[a8].sock.generateMessageTag(),
    )
  )
    .map((ad) => {
      const ah = bz(ad, "contact");
      return ah && "in" === ah.attrs.type ? ad.attrs.jid : null;
    })
    .filter((ad) => null !== ad);
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
  return d5("all", a7);
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
  return d5("all" === a7 ? a7 : fu(a7), a8);
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
  return d3("all", a7);
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
exports.parseNum = (a7 = "") => {
  if (!a7) {
    return [];
  }
  const a8 = (a7 = a7.replace(/[+\s]+/g, "")).match(/\d+/g);
  return a8 || [];
};
exports.lydia = fi;
exports.chatBot = fj;
exports.TogCmd = async function (a7, a8, a9) {
  if (a7 in bR[a9].cammands) {
    bR[a9].cammands[a7].active = "on" == a8;
  }
  await eX(a7, a8, a9);
};
exports.setAfk = (a8, a9, aa, ab, ac) => {
  const ad = {
    isAfk: a8,
    reason: a9,
  };
  ad.lastseen = aa;
  ad.p = ab;
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
exports.normalizeUrl = require("./antilink").normalizeUrl;
exports.setLydia = cb;
exports.getFilter = c8;
exports.deleteFilter = ca;
exports.setFilter = c9;
exports.deleteWarn = c7;
exports.getMute = c6;
exports.setMute = c5;
exports.delMute = require("./db/").delMute;
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
exports.filteredArray = (a7, a8 = ",") => (
  Array.isArray(a7) || (a7 = a7.split(a8)),
  Array.from(new Set(a7))
);
const fz = (a7, a8, a9) => {
  const ab = a9 || "x";
  const ac = a7.includes(ab) ? 10 : 1;
  const ad = new RegExp(ab);
  for (let af = 0; af < ac; af++) {
    const ag = a7.replace(ab, af);
    if (!ad.test(ag)) {
      a8(ag, af);
    }
    if (ad.test(ag)) {
      fz(ag, a8, a9);
    }
  }
};
function a4() {
  const vG = [
    "rLjT",
    "nt1N",
    "WRC5AG",
    "zxL3",
    "x3DO",
    "W54QFq",
    "u1Lt",
    "zHfN",
    "fs58",
    "W5BcO8k8",
    "Fmk+ma",
    "lSosW7S",
    "W5ZcGrG",
    "ACkLwa",
    "lI91",
    "kdqh",
    "aXFcUa",
    "W5rxwq",
    "W5qVWOi",
    "q3jL",
    "0jVdHh8",
    "WOOSrq",
    "W63cPGO",
    "ms43",
    "WQ04WRm",
    "zNvU",
    "EKhdIW",
    "CI5J",
    "W5GkWOe",
    "AetdVq",
    "x2LK",
    "WO7cKWC",
    "j2D0",
    "pmoeoW",
    "CgvU",
    "WOpcNIK",
    "qLjy",
    "B21T",
    "D2fT",
    "C1Dn",
    "W4VcSWe",
    "AJJcHa",
    "W47cQKq",
    "WOujW6K",
    "W54iWOK",
    "W40Gqa",
    "W5OtWOe",
    "W5/dK10",
    "W7ifga",
    "W4RcOCk6",
    "cGPO",
    "W73cKqu",
    "uaGW",
    "W4lcSbm",
    "dCoLW78",
    "wurK",
    "v1fV",
    "smoVfG",
    "ue9t",
    "AtpdMa",
    "BCo4W44",
    "jSkMjG",
    "rhDX",
    "Dgvg",
    "E17cMq",
    "WOW8Fa",
    "W4pcTX4",
    "BgvU",
    "r1Pq",
    "DhKG",
    "AwnR",
    "cGPs",
    "W7C3WRe",
    "emoXWP0",
    "zgeS",
    "B2j5",
    "y1tcMa",
    "D2vL",
    "q8k3xa",
    "ywre",
    "WPCFEq",
    "WPpcK8oY",
    "AgvH",
    "DhnH",
    "s1Dw",
    "W545ya",
    "vCoZfG",
    "t8o0eG",
    "hIG9",
    "u0HQ",
    "W5FdTJ0",
    "tKni",
    "zwiU",
    "W74Huq",
    "C2HV",
    "Ef/cNq",
    "q8kzfW",
    "t8ogW5i",
    "W6hdSsO",
    "W7tdHs0",
    "W5dcG2a",
    "e8o2WOC",
    "lwuO",
    "FCoQWP8",
    "W5mBEW",
    "CMvZ",
    "WR3dG8on",
    "wCoiW40",
    "Dxnu",
    "wvbf",
    "D1Li",
    "tSoiW5K",
    "CL9T",
    "eSo1W7W",
    "WQZdKSof",
    "bmoBW4e",
    "DSohtW",
    "WRmzAG",
    "C1tcHW",
    "igTO",
    "bmoTWOG",
    "t8omW5O",
    "W5eJxa",
    "WRpdNfq",
    "yxzL",
    "caRcOW",
    "W5fKDq",
    "WQOfEa",
    "fmo8WP0",
    "hJ5G",
    "W5hcRCkG",
    "CLb5",
    "W78xaW",
    "W5JcSmkH",
    "B20V",
    "s8oYea",
    "C3nH",
    "BSo7WPK",
    "q2fj",
    "WOZcS8or",
    "24RzV8oY",
    "ig1H",
    "W4eSWQO",
    "nSkJjG",
    "W4u2oW",
    "WOBdQHy",
    "r8o9eW",
    "Aw5J",
    "xmozW44",
    "WQtdHeG",
    "qwzR",
    "FSoyWP4",
    "F8obmW",
    "n0Tw",
    "ELdcMW",
    "4kAj4kwg4kEK",
    "qKzS",
    "WQhcKgNcImo8kL/dQ0hdKNvq",
    "lCotW4i",
    "txa0",
    "b2mJ",
    "WOyTFa",
    "WQCsqq",
    "AxmS",
    "WP4Yma",
    "bCoWWQ0",
    "w8kNkW",
    "sfz6",
    "DhLe",
    "W53cGdu",
    "DGtcJa",
    "rMPS",
    "W6fjW50",
    "oIbY",
    "xCkKAG",
    "h2LE",
    "W41Mza",
    "WQWFBa",
    "BNn0",
    "sNLP",
    "WPZdSfy",
    "z17cHq",
    "W6ddGtG",
    "W6BdLY8",
    "ymorha",
    "zfrp",
    "BXX1",
    "WQOXW60",
    "jmkUnq",
    "W6yyca",
    "W7hdGd0",
    "gmoRWOe",
    "W7ZdGtC",
    "CYbM",
    "W4ZdLvm",
    "W5aUjW",
    "W4S7rW",
    "W6hcVhC",
    "BgK6",
    "EX8R",
    "cmoqWQy",
    "D3jP",
    "refZ",
    "A1rp",
    "WPJcI8kk",
    "yxjK",
    "WOlcGSoY",
    "i8oBna",
    "W4/cRCkG",
    "BNnL",
    "zgfP",
    "wvrF",
    "W4hdSt0",
    "DcaX",
    "W7hcGrO",
    "W7xcHbO",
    "ywz0",
    "cImJ",
    "DSoXWOu",
    "y3rP",
    "Dgvt",
    "kIPs",
    "W4hcNfu",
    "W6/cPKq",
    "W4S7qa",
    "Dgvn",
    "WQGrFW",
    "zxn0",
    "lmoFW5G",
    "ou11",
    "qK11",
    "lIHF",
    "WQ/cVCol",
    "mmoXWP0",
    "BeHX",
    "ldWn",
    "W6GoBq",
    "W5e6hq",
    "W6CYFa",
    "W63cP8kJ",
    "DgLV",
    "WOaHyG",
    "cmo1W6y",
    "odTk",
    "WQuujq",
    "cZGk",
    "Awrh",
    "ksbP",
    "cCoBW5G",
    "zhuG",
    "Au9I",
    "kmo4W6W",
    "W4VcP8k8",
    "BMv1",
    "B0DP",
    "FSo+fa",
    "pmkGWR4",
    "mZyp",
    "jtq+",
    "WOW8Fq",
    "WP/dNu8",
    "FH1S",
    "iCo0W6O",
    "WOeNyW",
    "D2nN",
    "BMrH",
    "WRmixq",
    "W77dSJy",
    "W4pdTI0",
    "mSoiW4S",
    "vSkIpW",
    "wuHk",
    "gSkvFq",
    "CwXQ",
    "WOldLvC",
    "smotW70",
    "j8oSbG",
    "CXGw",
    "W4RcP8kT",
    "r0Lo",
    "ncO6",
    "zNL6",
    "sshcKW",
    "jJmM",
    "CMv2",
    "AxnJ",
    "r8oOeW",
    "dYnC",
    "Aw4k",
    "ofrM",
    "W4hcKKC",
    "t8o6DW",
    "Dg90",
    "W6BcG2i",
    "mCkAba",
    "yxjz",
    "W69nuq",
    "jYzg",
    "ASoaW4O",
    "ldVcNW",
    "AhqS",
    "WQb9WRO",
    "W7hdIJ0",
    "ww91",
    "Dhzl",
    "WQBcS8oq",
    "vgH1",
    "cKLn",
    "W5urWOK",
    "W58YzW",
    "lMfP",
    "caFdTG",
    "W5qSWPO",
    "ywXf",
    "W53dSYW",
    "bZbJ",
    "W4NdKv0",
    "W4e7WQC",
    "su5l",
    "W409xa",
    "ec3cVW",
    "umoSW5a",
    "W4qqra",
    "zgv4",
    "lwfW",
    "bXhcUW",
    "jmkGna",
    "vw5O",
    "BIbJ",
    "a8oNW7S",
    "W7a0WRK",
    "W7xcOL4",
    "W5JdUIG",
    "lSo/W7S",
    "DerY",
    "cSoPW6e",
    "y2Tw",
    "t3rW",
    "Bu1K",
    "W6j6WRO",
    "W5LMEa",
    "E1tcIG",
    "fmoJW70",
    "FdVcGW",
    "4kAW4kAK4kA/",
    "BwfZ",
    "eSomWPa",
    "thHA",
    "WR/dLCoG",
    "W4fXWRW",
    "wCkLra",
    "W6ldPge",
    "xSkHua",
    "W73cICkF",
    "WPpdSvu",
    "lIKG",
    "f8ojmG",
    "WRmvFW",
    "lmkQbG",
    "s8kGua",
    "iJeY",
    "BvPg",
    "C2fN",
    "W53dUYG",
    "p0PY",
    "zgLY",
    "W4bOCG",
    "wSoDW5y",
    "W6RcGua",
    "WOpdTfi",
    "ze9Y",
    "Bhbf",
    "jCoJW64",
    "Bgvn",
    "WPbZEq",
    "Dw5R",
    "W7FcSmk4",
    "WP3dKf5YFCkQWQ/cP8k5FCkKDSkneW",
    "x21V",
    "f8kMW4u",
    "C3bS",
    "ic4t",
    "q8kqza",
    "yvD4",
    "mtvLAMzct2q",
    "bCoMWPK",
    "W6XCWQC",
    "ld4Q",
    "lcdqTa",
    "zvtcJW",
    "WRZcK8kb",
    "hCojma",
    "WPpdNfq",
    "CWG8",
    "kMWZ",
    "fc04",
    "W5TLW78",
    "W7y/WQS",
    "svjs",
    "W6ddIcW",
    "eSoTW7q",
    "o8kHAa",
    "iefY",
    "W5tcONa",
    "nmo8W78",
    "fa3dRa",
    "wxvA",
    "W7mHWRC",
    "W4pcHGy",
    "hsnF",
    "qNvK",
    "sw1H",
    "Emk4EG",
    "imohma",
    "ChjV",
    "BNvT",
    "ysWG",
    "eIvD",
    "W4qnWPK",
    "W4pcTam",
    "W5WTWQS",
    "nHVcUW",
    "WOZdQSov",
    "cSkSvq",
    "WQOGW6O",
    "rwrh",
    "W4NcGqu",
    "AIfk",
    "W6jSW6y",
    "tLLT",
    "W7yxgq",
    "jYbM",
    "qtpcPW",
    "AuldUq",
    "dsn+",
    "wmoWkW",
    "xSkWWO4",
    "W6xcO2a",
    "y2f0",
    "yxbP",
    "BenV",
    "CMvT",
    "Bg9Y",
    "zxnW",
    "va49",
    "rSkyEW",
    "W7NdLJW",
    "W7BcQbW",
    "W7dcHSkl",
    "C1NdSG",
    "CM90",
    "As92",
    "hCo2WOC",
    "yxLS",
    "ruDU",
    "BMDF",
    "ignV",
    "WOuRza",
    "CgrM",
    "W4qLWPe",
    "z2XP",
    "W6NcR2K",
    "r3f6",
    "zxKT",
    "qxPs",
    "E1dcMa",
    "FZ/dJa",
    "x2yt",
    "W43cIWy",
    "WP/dNv0",
    "W5JcVWm",
    "whHq",
    "cczA",
    "imoknG",
    "oCkQna",
    "BNeL",
    "a8o7WPW",
    "WRxdVMy",
    "W5K/WRe",
    "veLn",
    "lIXh",
    "E8kxEG",
    "W58Aqa",
    "W5RcGrO",
    "DgtdTW",
    "WRueBG",
    "4kEW4kwS4kEo",
    "pSopW7e",
    "W5NcVWy",
    "W4tdUIC",
    "zry2",
    "W5WrWOq",
    "W67dMvW",
    "WPeTFa",
    "W5W5Ea",
    "DMv5",
    "oIdySq",
    "yxvS",
    "lSoiW4y",
    "DhzW",
    "pCoLgW",
    "xSkjuq",
    "DsbY",
    "W4a3Fq",
    "su5j",
    "zw5N",
    "z1dcMq",
    "W6WWWRG",
    "bmkUrW",
    "WOxdNLq",
    "ufni",
    "AwvU",
    "WQimW5e",
    "av7cSa",
    "tmk2wW",
    "weP2",
    "z0vW",
    "amkjW4O",
    "BIbP",
    "iYmG",
    "C2uG",
    "j8kQmW",
    "WRSXW6S",
    "W4ZdGHG",
    "eN07",
    "Ag9U",
    "C2vY",
    "W6ZdM1C",
    "W6RdS3u",
    "C2Hg",
    "W5bZWQ0",
    "cSoJW7W",
    "Ehrh",
    "CLFcJa",
    "W67cQ1e",
    "ot1k",
    "BCo0WRq",
    "sw1N",
    "rgvJ",
    "DwfN",
    "2yhyUDIQ",
    "ysb2",
    "AxzL",
    "W43cSmkV",
    "vmoPBa",
    "j8oFW58",
    "zw1I",
    "smoNbG",
    "BSkLqa",
    "AWOU",
    "BM93",
    "zxj5",
    "zM9V",
    "i8ooW4q",
    "cSoEna",
    "EXSQ",
    "cmoVW7y",
    "fCoJW78",
    "0iJrSDcq",
    "csnw",
    "WQRdHCob",
    "WPtcMCoW",
    "W7CtbW",
    "W5VcTSkM",
    "W5maWO0",
    "WOi0W6q",
    "ie9M",
    "iYDy",
    "lI9H",
    "amooiW",
    "W5TQDq",
    "esvA",
    "WOtcNSk4",
    "uCkSWR4",
    "Fmo3WPK",
    "AxnO",
    "W6NcPL4",
    "WOpdH1G",
    "CNLW",
    "W7StdW",
    "WQCvEq",
    "wNHf",
    "yuvg",
    "BguG",
    "AWXN",
    "W47cSam",
    "qSo6cq",
    "wSkSwW",
    "zwfS",
    "lmoIna",
    "mtqWntC4D0fuBfr5",
    "yxjP",
    "svzX",
    "A3NcUG",
    "yIhcLW",
    "qJuv",
    "qNvN",
    "z2vU",
    "zxb0",
    "ywZeSq",
    "lY9H",
    "W4DIDq",
    "nCoima",
    "ACo/WPa",
    "W7hdJtu",
    "DmoVzW",
    "CgvY",
    "AMKl",
    "aSoGWQ8",
    "tfbv",
    "B3rL",
    "C8o7W7e",
    "fcDM",
    "BMXc",
    "ChldQq",
    "gCoWWPS",
    "WRZdHCoa",
    "W73dIZC",
    "igrL",
    "q1Hm",
    "q1HR",
    "w2Hw",
    "q8khyG",
    "u2vU",
    "W4X3yG",
    "g8oikq",
    "EdlcHa",
    "g8kHfa",
    "sg12",
    "lcdqSG",
    "A0XP",
    "ySojWPO",
    "CMLT",
    "yM90",
    "W59Iya",
    "vmoHEW",
    "zwWS",
    "EwrU",
    "W7lcHti",
    "emoqW4C",
    "uKni",
    "iNJcLq",
    "sw5J",
    "W5FdNmk+",
    "ndyM",
    "Burz",
    "AgfI",
    "zqOG",
    "qx3dPG",
    "D3fy",
    "Aw5Z",
    "kComoG",
    "WQZdJ8o/",
    "u0vf",
    "WO7cHSoX",
    "eq7cPq",
    "DMvY",
    "W6uYWQO",
    "lCofmG",
    "WRxdSmkF",
    "W7JdGxK",
    "W4m/na",
    "y3jL",
    "W5JdSc4",
    "fmkMW5S",
    "v2ri",
    "W5pdQYe",
    "DfnP",
    "WQ0rEa",
    "aSosW6a",
    "W57cPry",
    "r1Dw",
    "zM9Y",
    "W5RcRmk9",
    "AdBcGG",
    "BmoIoW",
    "WP4CW40",
    "wSkCva",
    "fYvu",
    "iCkQlG",
    "CMvU",
    "CI5V",
    "u3r5",
    "DenH",
    "C2vq",
    "W57cQbO",
    "W6ldVJa",
    "BGOR",
    "cGPv",
    "AdlcMG",
    "yJ7cJa",
    "W7BdOtq",
    "BL9W",
    "x2FcKq",
    "zKzH",
    "CL9S",
    "WQbJW6G",
    "pSoiW4u",
    "r2L0",
    "W4RcLfW",
    "DfzP",
    "2ONBU9Qs",
    "A3xdUa",
    "ixRcLW",
    "vLbt",
    "q8oGFa",
    "w2HC",
    "icbc",
    "eWnS",
    "AwzP",
    "B3vU",
    "W4hcIHS",
    "l1vY",
    "bsnc",
    "CMv0",
    "W61CWQa",
    "W4hcVHa",
    "lvb6",
    "W6RcS18",
    "veLu",
    "j8k7iW",
    "FctdJa",
    "mJGE",
    "W5xdUY0",
    "W6vPWQK",
    "W70xbG",
    "AgjH",
    "W5K7WRe",
    "DgLT",
    "W5VdLSoZ",
    "AWOG",
    "W6RdU2S",
    "FJlcHq",
    "WRFdSwG",
    "Bs90",
    "u3LU",
    "smoHDG",
    "W4pcJfq",
    "W50/hG",
    "WP7cNSoQ",
    "z2vT",
    "WR3dKSon",
    "iWKi",
    "AwqS",
    "CMfU",
    "W4tdSZW",
    "z0jH",
    "BslcGG",
    "Dc4G",
    "W4NcTa8",
    "WOC8AW",
    "y2fT",
    "y3NdOG",
    "WRFcUCol",
    "4kwo4ksXWRG",
    "4kAg4kAV4kA8",
    "ySkeiq",
    "qvbj",
    "W5lcOmkR",
    "WQPgrG",
    "DgLJ",
    "ifbn",
    "u8oYeG",
    "zsaI",
    "mCkRzW",
    "WQBcQmox",
    "mSoiWRG",
    "W7yega",
    "W5/dJIG",
    "W5f+AG",
    "4kAOlca",
    "vcnD",
    "W4jlWPW",
    "W5mXWRe",
    "rSkhwW",
    "WOeGBW",
    "WPSMBq",
    "DgL0",
    "lI4V",
    "BwvB",
    "EHrH",
    "DgvU",
    "CZOk",
    "BgrF",
    "zhFcLW",
    "WPNdUca",
    "WPNdGe0",
    "q05A",
    "ENjL",
    "Ahrf",
    "Agnq",
    "Ea08",
    "Dgvs",
    "WPSMW7i",
    "W683W7e",
    "W6NdPJ4",
    "iJG2",
    "sg1Z",
    "2yukia",
    "AMvJ",
    "CfzP",
    "W5xdQYW",
    "DwPV",
    "W5q8WP0",
    "bmoSWOS",
    "zv7cNG",
    "k8oooa",
    "cmo+W4u",
    "C2v0",
    "W6nWWQW",
    "zMzL",
    "cr/cUa",
    "W7PzWRO",
    "BIbS",
    "W5eXWRi",
    "W5C3uW",
    "CKnV",
    "DgvY",
    "W5e/WQS",
    "ywX3",
    "W4lcVWq",
    "Awry",
    "B3jP",
    "CKNcGG",
    "WO3cGXi",
    "WO/dHmoK",
    "DxjY",
    "Cg90",
    "W4anWO8",
    "kmoLW7a",
    "iIzE",
    "C2ldVW",
    "W5NdN0W",
    "W6VcGf8",
    "vNjf",
    "cWJcVW",
    "WRXzcG",
    "z3jH",
    "zdnH",
    "W6RcSmkI",
    "W5ikWQ8",
    "W5JcSSk0",
    "W6K2WRS",
    "DxiT",
    "u2LN",
    "WPtdLLu",
    "rSkrxW",
    "W5ikWOi",
    "W6ecta",
    "W7hcRLO",
    "yKvy",
    "W6ldVJS",
    "zgfW",
    "DMLK",
    "WRKaBG",
    "gSokjW",
    "yw5K",
    "W7xdIXe",
    "WPybAG",
    "C2LU",
    "E8obla",
    "CMLJ",
    "cLzU",
    "p8o5WRi",
    "bmoXiq",
    "zw5Z",
    "W4ZcP8k6",
    "n8o/WOq",
    "qwHe",
    "EHDJ",
    "cJeU",
    "wtjO",
    "E3lcHa",
    "W5RcHq8",
    "qM1t",
    "W6ygia",
    "r8kHrW",
    "WPlcGSoz",
    "2lpyQnMi",
    "ltLD",
    "kJWp",
    "W6BcQ3C",
    "zbLG",
    "W6eNWPK",
    "WPb7va",
    "k8kHxW",
    "yIlcMW",
    "kxKV",
    "WOFcMSoH",
    "vg12",
    "t8oDW40",
    "ySoala",
    "laOG",
    "Dcbw",
    "wt5A",
    "Efvt",
    "Bwv6",
    "z0LS",
    "fY9x",
    "iIXz",
    "BhjZ",
    "FCorna",
    "wSomW4O",
    "tLjS",
    "zxHp",
    "WOFcHCkU",
    "sNnV",
    "Dgvj",
    "DMfS",
    "WPNcK8oN",
    "W7BdRKa",
    "AguG",
    "WPNdNv4",
    "W6RcUbu",
    "W47dMvu",
    "p8oFjW",
    "B2X6",
    "W5ykWOi",
    "WQKCBW",
    "aSoOWQC",
    "BMDZ",
    "smozW40",
    "wCkWvq",
    "xSoPWOW",
    "rMXV",
    "xCo6lq",
    "cYv8",
    "lqSG",
    "lw1V",
    "W53dQsi",
    "dmooma",
    "o1zP",
    "W5z4eG",
    "C3m/",
    "BgTv",
    "igvK",
    "DxnL",
    "EgnL",
    "l3Ww",
    "l3yX",
    "wCkvxa",
    "smkRlq",
    "u14W",
    "e8kJWOW",
    "CM9U",
    "rKtdSW",
    "WQuQW7O",
    "BhLK",
    "C1DP",
    "W4pcPXi",
    "4kEG4kAo4kAe",
    "W48xWPK",
    "iZa8",
    "W7xdKdW",
    "W7xcRei",
    "EwfY",
    "x19W",
    "W61+WRe",
    "E8kuWPS",
    "WPDfWOu",
    "W4JcTqi",
    "kYKR",
    "mmkQnq",
    "tvnh",
    "WOFcG8oN",
    "B24G",
    "0ApqMJC",
    "AwnH",
    "jti5",
    "E1JcHq",
    "zgzn",
    "omkUpG",
    "omkGWR4",
    "BwvU",
    "W7qWqq",
    "WRNcILm",
    "W608WRm",
    "W5FcHqu",
    "quno",
    "lZep",
    "C2XP",
    "E8kSlW",
    "vgz4",
    "yNFdPW",
    "j0LRW6OuE21PW5lcN8kg",
    "uef6",
    "lw5V",
    "EXeV",
    "wmoWeq",
    "CNvL",
    "W6D6WRW",
    "ySk7kW",
    "W5VcPgC",
    "aDQS2yW",
    "vfDR",
    "Bu1h",
    "vxnL",
    "AxLZ",
    "Bw9T",
    "y29U",
    "W681WQS",
    "n8oLW70",
    "W7rWWRO",
    "W7aGWQ0",
    "revs",
    "eCkStG",
    "Cfjn",
    "DvnX",
    "u3rH",
    "icGI",
    "WQyFEq",
    "BNrP",
    "iIWk",
    "wSobca",
    "zxHL",
    "WONcK1G",
    "W6X+WRe",
    "zSovlG",
    "CSkhza",
    "veve",
    "twfZ",
    "emoYWOy",
    "W5/cNfy",
    "WOpdN1a",
    "C3rY",
    "D29Y",
    "W4H8WOy",
    "uv9n",
    "Awvx",
    "cmk8CG",
    "smkRkW",
    "W7FdIY0",
    "BfbS",
    "W4LfWOe",
    "vNrX",
    "x8oBdG",
    "aCoTea",
    "f8oNW70",
    "qmoMfW",
    "mdaX",
    "k8ouW5u",
    "p8oogW",
    "s2v5",
    "C3NdSG",
    "ywnR",
    "WRRdJmoj",
    "vtLe",
    "ySohaq",
    "BMvo",
    "W4PNyG",
    "WQ3dKSoc",
    "WRdcJ8oV",
    "DhjP",
    "WRGMW5W",
    "heim",
    "pxK1",
    "W5qZjG",
    "kLz6",
    "t8kQqG",
    "ywvK",
    "W4tcVri",
    "W7BdIYS",
    "e8oQWO0",
    "wSkvsq",
    "W7/cSbK",
    "vSoVFa",
    "BhLb",
    "oLzd",
    "W5VcTrO",
    "W6y6WRa",
    "Awr0",
    "kY8d",
    "W4tcVbi",
    "W5ZcJq0",
    "xSkyEq",
    "t8omW5S",
    "EMX0",
    "W7BcUNy",
    "EZVcNG",
    "W6RdRMW",
    "WR7dICoa",
    "W5y7WRe",
    "rM9Y",
    "zNKU",
    "lcbV",
    "W556hG",
    "hSoikG",
    "B8Aflq",
    "W6ddHIe",
    "yxnL",
    "rcWG",
    "lwLF",
    "zunH",
    "oIdzHq",
    "DgHP",
    "oSo1WPi",
    "fCozW6y",
    "W4BdTca",
    "W6yfcq",
    "WR3dKSoE",
    "s0JdMa",
    "q012",
    "B3rW",
    "gSkUpq",
    "W5a5WRa",
    "W4z/Ea",
    "ywrF",
    "rhrt",
    "y2vY",
    "qNfy",
    "W7W3WQm",
    "u8kVea",
    "W7ivdG",
    "ihrP",
    "W7i9Fa",
    "zSorya",
    "qur5",
    "W7idda",
    "CL7cNG",
    "zte2",
    "WRiFya",
    "r29V",
    "WPuRWQW",
    "ChrP",
    "W5KUWRK",
    "AwjV",
    "BmkrxG",
    "zMxdOG",
    "C2vK",
    "yKDk",
    "qLjb",
    "qSkHvq",
    "AvPj",
    "tM9K",
    "vg9k",
    "W63cVuC",
    "emoMW4a",
    "W5mKrG",
    "qwxdUG",
    "W7ZcOfu",
    "yJlcGG",
    "Buz1",
    "xCoRBq",
    "B2zP",
    "B25J",
    "yHSn",
    "BHLG",
    "mI5f",
    "BhvN",
    "cd5b",
    "ESkAgG",
    "W5NcOX4",
    "B3rP",
    "AmoBlG",
    "y8oUWPi",
    "x8ogW4O",
    "y2vZ",
    "FSoSxa",
    "DwiZ",
    "W7qHWQK",
    "W5n3yW",
    "Dfnp",
    "lCoPW7a",
    "nCkHAW",
    "4kA/cIa",
    "bmoYWOS",
    "l3nW",
    "zMLS",
    "CIbU",
    "W7RcRsu",
    "W680WQy",
    "rMvI",
    "lMPZ",
    "WPO4AW",
    "ywXH",
    "W44Nca",
    "w8o7eG",
    "W4JcOGq",
    "vmoHBq",
    "W7DJyW",
    "BgfS",
    "oNnZ",
    "pmo+W7S",
    "W6VcRga",
    "CMJcSW",
    "W57cNfW",
    "iZ49",
    "odGy",
    "ihWG",
    "DJz1",
    "jYWl",
    "zwPY",
    "zxjZ",
    "W4tcOIe",
    "WPlcHmoM",
    "qNvM",
    "Ev9K",
    "B2DS",
    "yxLc",
    "ihnJ",
    "Axnk",
    "C2LH",
    "W547WQ0",
    "W4GqWOK",
    "w8kzeW",
    "W6yozG",
    "kmkhDq",
    "z3PP",
    "BwfW",
    "W6LXWRS",
    "W4SvW4i",
    "AKv5",
    "WPe8BW",
    "xL7dTa",
    "CvnN",
    "W6DlWQu",
    "osHm",
    "zgf0",
    "WQmrFW",
    "dmoojW",
    "qwr6",
    "ktWn",
    "W5RcU8k9",
    "qxzN",
    "bgOs",
    "W4PGEq",
    "fmoXWO0",
    "wComW5O",
    "fXVcHG",
    "W7LCWRS",
    "CNjL",
    "AmorxG",
    "A1L4",
    "inc10ly",
    "BSoDWPG",
    "zNjV",
    "lNad",
    "cu1V",
    "DCoTAW",
    "xdj8",
    "z29Y",
    "ywnO",
    "W5b+FW",
    "WOO7W70",
    "W5ObpW",
    "aCoLDG",
    "W4tcIWe",
    "WQSIW6O",
    "W4ZcI1C",
    "y8orja",
    "pZTz",
    "ihbH",
    "dYHz",
    "Dw5S",
    "y3xdUG",
    "cKn1",
    "nve1",
    "zMddSW",
    "WRpcTCoA",
    "cvzY",
    "uNfp",
    "hqRcPq",
    "rxHW",
    "W5RdOSkV",
    "lu9I",
    "Br1G",
    "WQ3cQmoP",
    "B2rP",
    "CgLW",
    "B09c",
    "DtOG",
    "WR7cIZ4",
    "tfKG",
    "pMqJ",
    "sSk6oG",
    "BhLM",
    "AZlcGG",
    "W4ZdUmoU",
    "Chv0",
    "e8oPW7i",
    "r8osnG",
    "FmkBza",
    "iePt",
    "aSoUfG",
    "pteK",
    "gCo3daTGW6/cMbXtW5/cSCk5",
    "05NqI9gj",
    "oSovW4i",
    "kYK/",
    "Dhj0",
    "W7ldT2G",
    "lcbO",
    "ANnV",
    "W77cUYy",
    "kKfT",
    "C2u6",
    "z2H0",
    "zq5X",
    "Eu9M",
    "yCwFla",
    "W7ifdG",
    "W7uzbq",
    "Aw1H",
    "WPtGPkFGP6m",
    "Dg8X",
    "W7pcQLq",
    "h8oUWQ0",
    "BNa7",
    "W5VcP8k9",
    "ndu2",
    "W5OrWOK",
    "W5dcKgq",
    "lI9T",
    "u8oAW70",
    "igjP",
    "igzV",
    "A0PP",
    "q2f0",
    "vffv",
    "B3j5",
    "otKF",
    "t8kUWQC",
    "WO3cLHG",
    "zxrP",
    "D1br",
    "BSoSWP4",
    "W6u7Cq",
    "mZyO",
    "W6dcQMq",
    "W4FdVI4",
    "WRNdLmoj",
    "n30i",
    "v8oVBW",
    "sCoIDG",
    "pmkQjG",
    "F8oBeW",
    "a8kMmW",
    "zgfS",
    "jSotW4i",
    "xmoeWPi",
    "qw50",
    "vv9b",
    "W5lcO8k8",
    "oIbI",
    "WQO1WRm",
    "l2qR",
    "zvrV",
    "CgLU",
    "WRtcOKm",
    "W7CJvq",
    "WOm6BW",
    "eSkMkW",
    "iMWK",
    "iYzf",
    "W5aWWR4",
    "uCo6zG",
    "W5tdIGK",
    "c8ogiW",
    "osXz",
    "ve1L",
    "dmoEW6a",
    "WPaPBq",
    "jMz1",
    "W7NcKdK",
    "inIV2k4",
    "DxjL",
    "lWnN",
    "W7hcQgm",
    "rNzP",
    "kmoFW54",
    "WP/cV8oG",
    "vmoiW5m",
    "sCkBvG",
    "WQGPya",
    "bmoVW7S",
    "W5RcR8k+",
    "pSoFW4i",
    "omoFW44",
    "lcbh",
    "wLLb",
    "W4iHya",
    "uerg",
    "WPtdLLy",
    "AsWG",
    "W4RcPr8",
    "2ylyP9IV",
    "WRlcUCoX",
    "wmoxWRK",
    "DKBcNG",
    "sgXy",
    "ic0G",
    "wSkXrW",
    "rwvi",
    "xGC9",
    "lsXF",
    "W5hcPLW",
    "CuTA",
    "WQSMW7i",
    "WO3tQ9gh",
    "W6VcGKq",
    "Df9M",
    "ifj1",
    "h8olW5S",
    "W4FcQsm",
    "rcbV",
    "W5NcOWi",
    "yw7dQq",
    "igXP",
    "Dw5K",
    "BIb0",
    "W6Ccga",
    "rfLc",
    "oUcKKEcLOG",
    "WQyPzW",
    "WP7cKmoT",
    "ucNdTW",
    "W6P6zq",
    "WQ4VW7C",
    "tCoCW40",
    "W4y9EG",
    "tM92",
    "AN3cTG",
    "amk2nW",
    "2ypzHca",
    "DwX0",
    "W5BcTSkM",
    "f8k7jG",
    "B2fK",
    "fXFcRa",
    "jmk8Fq",
    "W5lcHMK",
    "W6uNW7a",
    "ihrL",
    "eXOi",
    "W4VcVGu",
    "a8oCWOG",
    "AXXq",
    "B19F",
    "Axnb",
    "lY93",
    "whBdUq",
    "zqO2",
    "WRW3W7e",
    "BmokDq",
    "Dt7dUq",
    "wCkyuG",
    "mtqU",
    "CmozzW",
    "FHeR",
    "pSoipq",
    "amoVW6e",
    "imk8jG",
    "W69QWQy",
    "lmotW4a",
    "kCouW4a",
    "Axnu",
    "BMpdKq",
    "ze1L",
    "mSk6kq",
    "l3nL",
    "kteQ",
    "hCojmG",
    "WQdcVSot",
    "uNmS",
    "B3iO",
    "W7yOW4m",
    "xmofW5i",
    "igXV",
    "igzY",
    "hc9h",
    "DgLH",
    "W67cRaC",
    "zMLN",
    "jhG0",
    "ASoqja",
    "zgKV",
    "jgec",
    "sv9l",
    "W5/cTaq",
    "kY0O",
    "uK5A",
    "W5NcUbO",
    "W50Xxa",
    "E8ohEG",
    "2lhzGDIQ",
    "A2L0",
    "BKnV",
    "dCkH4kE5",
    "lJS7",
    "l8oeoa",
    "Aw5K",
    "vg9L",
    "cblcSW",
    "pCoPiW",
    "W7K6Eq",
    "ywD1",
    "v2L0",
    "W7D8yW",
    "vgTH",
    "sevs",
    "WRyMxa",
    "W4C5Bq",
    "W6hcUga",
    "deSF",
    "qw1L",
    "C8okBa",
    "Bw9K",
    "BgLU",
    "4kEa4kAv4kA+",
    "e8ogpa",
    "jCoamG",
    "W6WkWP4",
    "l2nO",
    "gbLf",
    "yhxdOG",
    "aCogAa",
    "EqWR",
    "igDL",
    "W646WRO",
    "WPtcV2K",
    "oGP7",
    "s8oOuW",
    "mNnP",
    "yxvK",
    "FWO8",
    "C2vu",
    "BwfU",
    "CXz3",
    "wmo1mq",
    "A2v5",
    "W6O6dq",
    "k0j6",
    "uKNcNW",
    "4kAx4kA+4kAU",
    "W5NcSba",
    "WPv+WOS",
    "W6hcLay",
    "W54tga",
    "dhGJ",
    "WQhdVve",
    "x8oQAG",
    "iYDa",
    "i8kMW4i",
    "W7/dLdG",
    "W6acaG",
    "p8o7W6e",
    "fmojWOW",
    "W6dcG8kE",
    "A2vY",
    "W4pcPWa",
    "smoRBW",
    "W58YrW",
    "rSoKcW",
    "s8kAtW",
    "AwvZ",
    "W5rEWOy",
    "fHVcUG",
    "W5SNqq",
    "BSkbEa",
    "CgXH",
    "WQ1/W7m",
    "h8oWWPS",
    "WQ/cR8oA",
    "W6ZcR0q",
    "pCoGeG",
    "W4yQWQ0",
    "C0pdVW",
    "vmo5W70",
    "mSovW6q",
    "zsbL",
    "WPtcK1y",
    "W7yshG",
    "W5/cPqq",
    "drdcTq",
    "WQxcV8o8",
    "WQ99WQ4",
    "BmorlG",
    "W6FcPbS",
    "dSo1W5O",
    "W7JdJtW",
    "zxnZ",
    "qKLo",
    "vvLL",
    "W7xdOSod",
    "jSkMiG",
    "WQCcBG",
    "CMLL",
    "W4/cKae",
    "uCoYWOW",
    "W7j2WQ8",
    "WR9uWO0",
    "W5H9uW",
    "fCoJW7W",
    "W7BcQ3y",
    "iqJcSW",
    "WRxcG8oz",
    "B3vN",
    "W50/WQS",
    "W44Hqq",
    "Bbf4",
    "AwXP",
    "W7FcT1u",
    "dY9l",
    "oIvi",
    "B2yG",
    "yMldPa",
    "r8kvqW",
    "sg1g",
    "es0l",
    "yCkSWRW",
    "W6VcOXy",
    "rSk4oG",
    "tvzU",
    "W63cH8kD",
    "B8orla",
    "quDx",
    "yM1v",
    "AwrL",
    "q29K",
    "uCoaW4G",
    "FSk5xG",
    "ydJcHa",
    "x29U",
    "t8kAtW",
    "zxrJ",
    "WRhdHmoj",
    "4ksg4kE64kAD",
    "WRFcI8oR",
    "W6iWWRS",
    "W5VcOqq",
    "z2vS",
    "lK11",
    "vg9R",
    "DhnL",
    "eSo0W70",
    "x25H",
    "W54XDq",
    "ub8Y",
    "ot8f",
    "W4GcrW",
    "pbfJ",
    "WQyVW7u",
    "WPhdRSoL",
    "dCoRW6m",
    "BSomjq",
    "AxnW",
    "rgf5",
    "fYTq",
    "i8owW4G",
    "fIvD",
    "W7NcJrW",
    "tgvu",
    "DwLK",
    "W4e7WQO",
    "ArL5",
    "jtWy",
    "W7ieka",
    "W5NcUbG",
    "s0vz",
    "l8oTW70",
    "y3r1",
    "ef7cOG",
    "vCosfG",
    "zezc",
    "W4aXCa",
    "C0nI",
    "WOW9iG",
    "W4KqzG",
    "sxrn",
    "WQ7cSSom",
    "BNjL",
    "BMDd",
    "mKTP",
    "A3hdUa",
    "W4VcO8kT",
    "W4ZdKeW",
    "igDH",
    "Bg9N",
    "wvfo",
    "CmoZWRK",
    "W4iGWRO",
    "iJXZ",
    "q8kHlq",
    "Dgvv",
    "W6D6WP0",
    "W74tdW",
    "a8oMW4m",
    "W7aNWRe",
    "WPScWO0",
    "fmogjW",
    "nblcOW",
    "aGvD",
    "zgL0",
    "ECoXWPO",
    "s8kDvW",
    "zgvS",
    "AgXq",
    "Awru",
    "WOuTEG",
    "WRlcHSk+",
    "AMC4",
    "vKnf",
    "C0jW",
    "E8oRyG",
    "2lRcS8oj",
    "mKH+",
    "BSomna",
    "E8kkWP8",
    "x8oHAG",
    "xJS9",
    "W5RdM8o8",
    "s1hcPa",
    "WO4KAW",
    "WQJcRmoE",
    "BNrH",
    "WRqvCW",
    "W5qvWPG",
    "fSkDza",
    "ifbL",
    "AcbH",
    "ywXP",
    "zYb0",
    "A3/dTW",
    "WPZcN8oN",
    "W73cHWa",
    "icOQ",
    "yxLH",
    "uComWPm",
    "vfHs",
    "WRVdJ8oc",
    "C2Tk",
    "o2z3",
    "u3bH",
    "C3hdVq",
    "oebN",
    "W7xdOJa",
    "zs5N",
    "W6K3Ca",
    "zMXV",
    "x8keEa",
    "W7WQWPi",
    "CdnS",
    "CbC1",
    "iCoXeW",
    "BwvM",
    "BSo3WPO",
    "yxbR",
    "W64Fuq",
    "ywjJ",
    "D2L0",
    "B3vS",
    "w147",
    "jsDi",
    "ydBcMa",
    "W7fCma",
    "C3r5",
    "WRhcVCon",
    "WOtdNMm",
    "WOegBa",
    "vvjm",
    "B8oUWRu",
    "EaS0",
    "EwrP",
    "jJa7",
    "x2nV",
    "ihjL",
    "WOu0Bq",
    "WQ0VW78",
    "sCk2uq",
    "e8kgW5C",
    "W5xdSYW",
    "lcbn",
    "qabo",
    "zxHJ",
    "AYWG",
    "y8oana",
    "W7xdLIO",
    "eCoula",
    "smobWRy",
    "ig1P",
    "W6ldPZG",
    "BwvY",
    "mZ/cGW",
    "W53cOri",
    "WPRdHCon",
    "CeLz",
    "gmoGW78",
    "y2HL",
    "EsbZ",
    "WQ0aoa",
    "csf/",
    "WOCIvq",
    "lsbK",
    "zg93",
    "ksuS",
    "ksKS",
    "W73dIY8",
    "WRWMWR4",
    "u1fJ",
    "kbqo",
    "W5K3zG",
    "Bmkdfa",
    "CK5t",
    "C3hdSq",
    "0l7qTnc4",
    "sMDv",
    "W6OeDW",
    "W59+Eq",
    "W7RdG8on",
    "t8omW40",
    "DgfS",
    "i8o5W7C",
    "BI1M",
    "zhZdSW",
    "BMnL",
    "c8ocza",
    "pSodW64",
    "BNrY",
    "psbp",
    "omoLW6a",
    "WRxdJ8oc",
    "WQldVwm",
    "EcxcKW",
    "W5y/WQS",
    "BMXV",
    "o8k9lG",
    "eCo0na",
    "zg5Z",
    "W6pdHt4",
    "BH14",
    "Bwv0",
    "l8o5W4q",
    "CcbI",
    "zNKV",
    "zxrn",
    "W6iWWQW",
    "B2rL",
    "vfbA",
    "W7GRWQS",
    "W57cIa0",
    "tfHS",
    "o1DO",
    "WQFcS8on",
    "umoNWP4",
    "W58MDW",
    "zCotW4i",
    "z8o7ea",
    "W6C/dW",
    "W5JcSmkV",
    "W7SchW",
    "D1j5",
    "r0LP",
    "W4fTWQK",
    "WRlcR8ow",
    "zxzH",
    "AwvT",
    "WQuCEa",
    "f8oNW6e",
    "yqOG",
    "DenY",
    "zCk3CW",
    "zwf0",
    "kCoiW4u",
    "W4ddK0S",
    "z3jL",
    "n8o+WOa",
    "tZrq",
    "ebVcPa",
    "WO4Hya",
    "W7hdVIO",
    "ihnH",
    "aZjk",
    "qxv0",
    "DMv0",
    "DhLW",
    "yw50",
    "DNn2",
    "xNlcJq",
    "WPlcSmom",
    "wCoeW4S",
    "ywHO",
    "iSkQkq",
    "cSocia",
    "BunO",
    "W6xcQMe",
    "sSoNmq",
    "tSo1gG",
    "W5RcTWe",
    "ihvZ",
    "mSo6W7S",
    "cIaG",
    "W7FdGtC",
    "mvr6",
    "W5/dTvK",
    "w8oQEW",
    "rKfw",
    "ag8w",
    "iXHj",
    "mtDI",
    "yfxdNG",
    "fXVcTq",
    "W6xdHt4",
    "BMf0",
    "W68mWOe",
    "lczf",
    "WQq0AG",
    "W6acBG",
    "wW9D",
    "jWX9",
    "oIbB",
    "ldaU",
    "WQeuAG",
    "DMvg",
    "yw46",
    "WRW3WRe",
    "lI9W",
    "CrGw",
    "WQbRWQ0",
    "W54YWOu",
    "WQmIW70",
    "W45HkG",
    "tXL3",
    "yu5Y",
    "igLU",
    "zw0U",
    "WPBcLmo9",
    "Eun5",
    "DgvK",
    "zvrH",
    "hYTh",
    "WPhdN1a",
    "rSkRrG",
    "ntqZ",
    "BMvY",
    "pYTh",
    "t8o1fW",
    "BwvW",
    "lsbh",
    "qxfh",
    "BnkC0Au",
    "iCoFW5u",
    "W7aGkG",
    "W6CNWRS",
    "DgLS",
    "WOC6BW",
    "iocMLEcMVW",
    "27ByIDQ5",
    "W54rWOK",
    "r1jp",
    "C0Td",
    "W6BdKvq",
    "pSo0W6O",
    "AM91",
    "W43cO8kT",
    "WOpdH0S",
    "inIN2yq",
    "iocMPUcMVW",
    "4kEA4kAv4kwv",
    "he11",
    "yZi0",
    "v8oHEW",
    "zgvY",
    "fsjo",
    "ic0T",
    "ECkyya",
    "b2mK",
    "CM1d",
    "W5KMxq",
    "W59rWOK",
    "vMLe",
    "WR8XW7e",
    "W5CkWOS",
    "oe13",
    "thPu",
    "WQFdSvC",
    "p1b+",
    "CSkmyW",
    "zgv0",
    "zgrz",
    "W53cHq8",
    "W5JcP8k6",
    "eJLa",
    "vgLJ",
    "icaI",
    "BMDY",
    "tMnZ",
    "W5yXWRa",
    "ywjb",
    "FSoOgW",
    "zH16",
    "u01u",
    "nIlcNa",
    "hmoBW54",
    "BYX7",
    "zMvY",
    "W7VcO8k6",
    "oLbZ",
    "weHx",
    "BSkvDq",
    "y29T",
    "Dgvm",
    "CXa9",
    "hJHC",
    "rbDW",
    "fCoyWP0",
    "WQiiuq",
    "cSozgW",
    "AKns",
    "W57cPCkR",
    "j8khhG",
    "DmkUjG",
    "Dg9e",
    "omoJW7O",
    "smoRBa",
    "z2D1",
    "BMXO",
    "DeLK",
    "yMXH",
    "hSoXWOO",
    "pwqQ",
    "q29T",
    "mdin",
    "l3r1",
    "AcWG",
    "tSkXwa",
    "zxDZ",
    "W4pcGrS",
    "AxiG",
    "W4ddK2m",
    "BgWS",
    "y2fY",
    "W54lWOG",
    "wghcRG",
    "WPC4Eq",
    "WO4HAG",
    "W5xdSt0",
    "ir/cTq",
    "0ltrG9go",
    "W5ZcQSkp",
    "ECkvDW",
    "ywn0",
    "WQ4XW7u",
    "W5SNrG",
    "WReXya",
    "z3rO",
    "zsdIGjq",
    "mavQ",
    "p8oPW7i",
    "sCoaW5m",
    "W48eWOa",
    "h8oVW6i",
    "kmo3W4S",
    "Dmoasa",
    "W5mXxa",
    "WPq9rq",
    "WRZcRmoo",
    "CLPx",
    "CMKS",
    "ECoPla",
    "rNjL",
    "BhnW",
    "WP7dGam",
    "W6unFW",
    "lY9Z",
    "gCollq",
    "W7vFDG",
    "WOldHcO",
    "t2Lb",
    "Eg1e",
    "ChaU",
    "qNPT",
    "W4jIna",
    "W7pdIZq",
    "mMDk",
    "WRmrBa",
    "emocia",
    "yNv0",
    "zunO",
    "WQRcKSoo",
    "lsvh",
    "ru5j",
    "zxiU",
    "icjP",
    "CM9Y",
    "zdeI",
    "lcbP",
    "wvLz",
    "WPtdHCoA",
    "W6/cPKi",
    "yxjf",
    "WRlcMcO",
    "zwjK",
    "ArrX",
    "zg9T",
    "d3GZ",
    "DgfJ",
    "zHiS",
    "Axno",
    "WOpdKL4",
    "s8kawa",
    "wSkGna",
    "0lJqUYW",
    "WQWrAa",
    "W7NdIJa",
    "oMqQ",
    "fSo6WP0",
    "BgvY",
    "hsbF",
    "BSoXWPW",
    "W5FdIZy",
    "WPbsBW",
    "W5qMpW",
    "WOOTEG",
    "W4BdUI8",
    "sCo6mW",
    "pMqP",
    "E8oBmW",
    "oZeW",
    "CMfJ",
    "zhrO",
    "pCo4W5W",
    "W7tcQ2S",
    "s2Hj",
    "WQGXW7S",
    "WRyBW5q",
    "uNvZ",
    "amoJW5K",
    "lcb0",
    "u2nO",
    "rCkVuq",
    "ecSB",
    "CMvW",
    "W6y0WR0",
    "Emoriq",
    "W7dcPem",
    "qMLU",
    "zvnJ",
    "WRmdAG",
    "uf9o",
    "W6afaG",
    "DfrV",
    "FmozW4W",
    "W5NcVIq",
    "r8kzgW",
    "W4nWWQu",
    "W5jOrW",
    "W5BcQ2y",
    "nmodaq",
    "W6CbWOW",
    "bCkxva",
    "y2TV",
    "BgLJ",
    "kJOG",
    "xmoSWPy",
    "W6mzbq",
    "DConWP4",
    "tCkWxa",
    "W7pdHs0",
    "h3r4",
    "W4W7xG",
    "Bwf4",
    "fCoinW",
    "C2G6",
    "bSoYW6O",
    "WQeNW7C",
    "WRFdKSoj",
    "EvdcHG",
    "ywrT",
    "CuzU",
    "WQxcH3u",
    "kmojW4q",
    "mY4G",
    "Dc1K",
    "W5JcVqm",
    "W6xcN0W",
    "wmokjq",
    "zwqG",
    "W6tdIY0",
    "iIiU",
    "y3hdOG",
    "DxnI",
    "zbSQ",
    "Dhj1",
    "z2XL",
    "W5NcGGm",
    "sMPt",
    "DxbK",
    "CNvJ",
    "bCo6WRW",
    "W7NcUmkH",
    "WQKVyG",
    "zsbJ",
    "WOyPEG",
    "W7tcPKm",
    "c8oqW6G",
    "icaT",
    "WO3cSHG",
    "zwSG",
    "W5SdEW",
    "W5pcP8k4",
    "l21H",
    "ywldSW",
    "ocHi",
    "tmoCW5e",
    "W6BcOtO",
    "W7tcPKq",
    "W57dML0",
    "oufV",
    "igzH",
    "CgKU",
    "W482CW",
    "bqRcSW",
    "2PpBLgu",
    "BKddLq",
    "lI9S",
    "ESkGoW",
    "igeG",
    "CMvN",
    "uvz5",
    "WRNcMCoW",
    "W4/cQ8kG",
    "Dhze",
    "Dwn0",
    "WQxcMCo2",
    "DwXL",
    "DgLR",
    "W6VcVhy",
    "zwnL",
    "BNjV",
    "W5FcLMm",
    "omokna",
    "C3PK",
    "Dgvh",
    "A2LZ",
    "rSovoq",
    "zwnH",
    "yxr1",
    "uMnm",
    "DhHH",
    "nsKp",
    "CLHx",
    "pSonW7O",
    "WQj6WR4",
    "vCoLEG",
    "AmoEna",
    "bCo3WOW",
    "iNr5",
    "qCkRtq",
    "2yxyQIW",
    "omoolq",
    "twvf",
    "xmkTlq",
    "WO4Pya",
    "WP3dLKO",
    "W5iXzG",
    "W5i9vG",
    "WQuZAG",
    "l2XL",
    "yL/cMq",
    "WQFcPCkr",
    "WOtdLM0",
    "hbpcSG",
    "fITd",
    "BK1L",
    "W7r+WQq",
    "yxqG",
    "vCo0da",
    "wblcSG",
    "yx/dUa",
    "B3zL",
    "mSkzhG",
    "lcbI",
    "rCoKdq",
    "WQVdMCoF",
    "AwldSW",
    "vwDi",
    "W4RcOXG",
    "BMC+",
    "WPj02Be",
    "t8omW50",
    "Emoaiq",
    "m8o6WOC",
    "Ah/dVq",
    "W7xdHmon",
    "t8kvsq",
    "Cs5J",
    "ugrT",
    "W7/cQL4",
    "CXWp",
    "z1Lr",
    "Dxn5",
    "iev4",
    "Aw50",
    "pCk8AW",
    "W5NdK1S",
    "BwjU",
    "WQKFzq",
    "2kFyQaO",
    "Axnc",
    "uuPc",
    "oKqJ",
    "WOqmW4C",
    "W4qRCq",
    "o0D6",
    "hmkkfq",
    "DmkHka",
    "wmkxuW",
    "DxLU",
    "D2HH",
    "W5qHqq",
    "qSoPhG",
    "EmoMWQ0",
    "W4y7W78",
    "Dd1v",
    "mJeW",
    "W600WQO",
    "vJvI",
    "fCoJW6K",
    "A2PN",
    "xSoaW4O",
    "iefo",
    "DgLM",
    "vfbf",
    "W6XZWPG",
    "rgzZ",
    "W4W3oW",
    "WOCMAG",
    "EunH",
    "xCkHvG",
    "WRdcMCo7",
    "brpcUq",
    "CxvL",
    "W6BcNI4",
    "dqZcHq",
    "igWZ",
    "zCoBnW",
    "W58aWOa",
    "ExOW",
    "fZjF",
    "wCkcdW",
    "CCoEoW",
    "pgG3",
    "W409EG",
    "EfRcJG",
    "D2LK",
    "WRVcM8oI",
    "zNrZ",
    "AfPV",
    "WQmMW7a",
    "qSkHkq",
    "W4yRza",
    "BNnW",
    "cSkfrG",
    "uMfU",
    "W5NdSr4",
    "C8omW44",
    "W6tdJdW",
    "iNFdNa",
    "0RtrOnoL",
    "CJOG",
    "AgBdSW",
    "W5BcRmkT",
    "vf9u",
    "aCovcG",
    "WRm+aG",
    "d8oEW6S",
    "w8oTDW",
    "z2v0",
    "CMf3",
    "W5VdLSog",
    "W5TQza",
    "yxr0",
    "tCkDvq",
    "dmopFG",
    "yxP1",
    "w8ogW4W",
    "yxrZ",
    "W5ZcO8k6",
    "AwnL",
    "WQOxW7e",
    "lCojla",
    "WP4LW4y",
    "WPZdRSoD",
    "fsSb",
    "WQ8HFa",
    "W4CXWRi",
    "y2fZ",
    "BMCG",
    "ruzK",
    "l8ocW5G",
    "E8kleq",
    "yxv0",
    "ELtcMa",
    "E8oTWOq",
    "y29K",
    "W65RWRO",
    "CIbv",
    "d8oHdq",
    "BfPs",
    "WOldLKK",
    "zre6",
    "FZ7cMa",
    "4kAM4kA/4kAO",
    "Bwf0",
    "yYFcKW",
    "WPSvWP4",
    "W4WDWRa",
    "gmofbW",
    "u8oHCq",
    "W413Cq",
    "n8oLW7a",
    "cY5s",
    "igv4",
    "xSoena",
    "yxqP",
    "E8o7Ea",
    "dJPh",
    "W4uYWQO",
    "BMHr",
    "W5b2ma",
    "q21K",
    "wadcNq",
    "ccTu",
    "oSk6kG",
    "W58GvW",
    "0BZsNhK",
    "W4ZcVrS",
    "yMfJ",
    "w8kNmq",
    "W6JcQ3m",
    "m8oCW50",
    "DmkGkq",
    "XlfTla",
    "W401vq",
    "txzU",
    "ihrH",
    "W5a+ma",
    "D2vI",
    "WQmQW60",
    "dIWb",
    "BSkGkW",
    "WOOSEW",
    "W5BcQ2G",
    "wMLp",
    "W7hdLIS",
    "u29U",
    "C8oTWP8",
    "aSk3ja",
    "CgXJ",
    "jCoyfa",
    "Dev4",
    "WPGgzq",
    "ifvt",
    "W6pdKc0",
    "WOhcLLW",
    "fCoWWOq",
    "BxaG",
    "oSo8W64",
    "CMLM",
    "WPWlW7q",
    "oIbJ",
    "y1n5",
    "Dxrj",
    "r2vn",
    "pSkCbq",
    "zXLM",
    "W5CaWPO",
    "W6hcVCon",
    "W6firW",
    "DwzM",
    "BwvZ",
    "qMJdPG",
    "x2zP",
    "WOOMya",
    "CMzK",
    "CWO8",
    "y1rT",
    "lujV",
    "W45LvG",
    "BN9J",
    "zwDY",
    "vuHQ",
    "uhjK",
    "nCoOW4y",
    "nrH8",
    "W4m8W60",
    "iIKO",
    "B3pdHG",
    "W7ddU8ko",
    "ihjV",
    "uKH2",
    "lcdyPW",
    "rSkDvq",
    "BwLU",
    "CY3dGW",
    "aG0i",
    "v0P2",
    "f8ovpq",
    "W4ddMvu",
    "fMKO",
    "ANxdPq",
    "W7WLvq",
    "W7lcT8k6",
    "EmoiW4W",
    "z0nV",
    "W5JcTSkM",
    "W6VcUMa",
    "s8oOgW",
    "W4GeWOS",
    "y3JcJW",
    "zh/dUW",
    "y2TL",
    "W54cWOm",
    "kcGy",
    "ruvv",
    "WOC6EG",
    "igrP",
    "W65BtW",
    "z2vY",
    "BNzL",
    "2OxdSmkF",
    "nSoPW60",
    "CNn0",
    "nde5nJCWoeP2AKLjwa",
    "kfv3",
    "omkUja",
    "zwr1",
    "AuDk",
    "kmoooq",
    "W7GMuW",
    "W5StbW",
    "Ec7dLG",
    "WOG7yq",
    "W5FdLSk0",
    "W73dUwK",
    "W5D7WOa",
    "sSk9la",
    "gSkUpW",
    "p8okW7C",
    "W553W7a",
    "W6f8WRW",
    "W5aNvW",
    "Dxn0",
    "qKDl",
    "Chm6",
    "W6ddRKW",
    "AuXP",
    "W6y6WQW",
    "W5a1xW",
    "W6r+WRW",
    "DK1X",
    "W4JdMeW",
    "hIHy",
    "Dez3",
    "p0P1",
    "u3rP",
    "k8o7W5G",
    "ze1O",
    "W7yohW",
    "0ANtU9cm",
    "tSoDW58",
    "B20G",
    "EsWG",
    "vvnl",
    "sCkvwa",
    "WPBdRsW",
    "WPyNEG",
    "DgvZ",
    "fSonWOC",
    "cc9h",
    "rufe",
    "W6ldGsK",
    "bSoKya",
    "zb05",
    "WQaVW78",
    "EHe+",
    "zu51",
    "CMvH",
    "vefo",
    "W4ZcOZe",
    "iI4k",
    "tCogW5a",
    "W7VdJsO",
    "zXLG",
    "t2nL",
    "W407xa",
    "BwfR",
    "tM9U",
    "y2HH",
    "BWOG",
    "inc30la",
    "iSoEWQq",
    "mHyt",
    "nCo7FW",
    "vCoKdq",
    "Aurb",
    "aCorW4G",
    "wg1R",
    "W5NcLCo7",
    "WP/dOSoU",
    "W6pdHYS",
    "Aw16",
    "D3v6",
    "WQhdGCoa",
    "sCkvnmoXWQaYWRFdTG",
    "Dw5L",
    "bt4Q",
    "W5CmWOi",
    "Dg9U",
    "WP/dPCoH",
    "qmk+pG",
    "amoJW7S",
    "jSoRW6O",
    "tdCp",
    "zwuk",
    "W7aYWRO",
    "zePP",
    "W6hcRZ0",
    "oCoJW7i",
    "W5JdMCo6",
    "0OdtP9kk",
    "WOqHyG",
    "Aw5O",
    "WQ0zEa",
    "oIaI",
    "BgfJ",
    "A2jQ",
    "Bw5V",
    "C1jH",
    "ChjL",
    "W7OyaG",
    "WR7cUmoF",
    "ywXT",
    "DgzV",
    "cYro",
    "0lxqVDc1",
    "WRtdMKS",
    "W45ZDW",
    "lY9V",
    "rgv2",
    "W5T9zq",
    "rMfR",
    "B2DP",
    "0ltqSaO",
    "W48kWR8",
    "xmorjq",
    "W63cIxy",
    "W7tdSKi",
    "W7TAsW",
    "DxbZ",
    "W4FcS2K",
    "r0vL",
    "bmoBqG",
    "ydlcMa",
    "WRqMW7RcGW3dV8kdCvTIWP0",
    "r0f1",
    "pNqQ",
    "W4iRBW",
    "u8oAW5i",
    "fX/cSq",
    "ocTL",
    "CKnH",
    "W7yegq",
    "kIO6",
    "zstcNG",
    "WQxcUCon",
    "y2LY",
    "zLRdLq",
    "W4KiWR8",
    "ig4O",
    "CYbt",
    "vgLT",
    "u8oygW",
    "AMng",
    "z3b4",
    "hI5g",
    "yMXL",
    "WQ4ryG",
    "qKTd",
    "WONdKe8",
    "gv1Z",
    "t8o5W6G",
    "CY5J",
    "W73dIZ0",
    "WPaNya",
    "W53cVri",
    "thPy",
    "tmoGcW",
    "uSoPuW",
    "zcbp",
    "W5hcOCkR",
    "W4pdMu8",
    "WPqIxG",
    "jaxdNG",
    "W5C4vW",
    "WRtdJ8ol",
    "twvU",
    "m1r3",
    "hYnx",
    "EhbL",
    "mtGz",
    "u3jo",
    "yayq",
    "fCoYW58",
    "WPiY0kO",
    "W6mvWOm",
    "A8omW7K",
    "W5dcK3e",
    "WR0GW7y",
    "lcbM",
    "pZiF",
    "WQdcRSo8",
    "ywXj",
    "r8kHfG",
    "o0PT",
    "W4GjWOu",
    "W6qtkq",
    "WPyBzW",
    "W77dGKO",
    "W5fGza",
    "h8o7WOW",
    "y2fJ",
    "CMLV",
    "W43cJa0",
    "mCkHmW",
    "BWPM",
    "Cg9Z",
    "jSkAW4a",
    "W5NcTSkm",
    "ywrd",
    "zhjP",
    "WPlcLCo1",
    "yM9H",
    "wCoHCq",
    "y1tcKW",
    "WQWhzW",
    "jY8X",
    "nCoOW6W",
    "DmoYWOC",
    "WOFdQNe",
    "Ac1Z",
    "WRtdICoc",
    "C3rZ",
    "zCoGkW",
    "W6CehG",
    "z0tcNW",
    "s8o6EG",
    "W6WoWRi",
    "WPmtyW",
    "xmoDWPe",
    "W5ubdG",
    "zxjH",
    "lcdIGR0",
    "tmkDvW",
    "WQJdKSod",
    "W47cSbS",
    "EhrY",
    "WQxcG8oz",
    "q1nk",
    "W6j6DG",
    "W4CXWRm",
    "W4lcIXO",
    "CezW",
    "lI95",
    "W4JcVWe",
    "DMLL",
    "W6X6WQW",
    "W6XWWRO",
    "tvLd",
    "W7dcP2m",
    "ms9J",
    "wePT",
    "Aujy",
    "yZOG",
    "B3bP",
    "W4iSya",
    "zwDV",
    "DftcHq",
    "EYTZ",
    "s09z",
    "C2TZ",
    "ywfY",
    "lI9N",
    "yXXl",
    "tmkRwG",
    "AwfM",
    "AwXR",
    "B25Z",
    "vfPp",
    "W7uzra",
    "WOuHya",
    "E8o/W78",
    "W7ZcNeu",
    "W5FcRfq",
    "ss/cUa",
    "W7excG",
    "yvPk",
    "W7ZcQaO",
    "W6tdPZG",
    "nIaO",
    "rhfN",
    "Ahr0",
    "W4y9Ca",
    "BMnO",
    "C29U",
    "gdmV",
    "wmkhwW",
    "AgtdVW",
    "BMpdLW",
    "uMvQ",
    "Dru8",
    "W6K0WQ4",
    "wgPL",
    "vKTx",
    "BNzH",
    "t8oMWPO",
    "a8oLW6C",
    "WPvkWOG",
    "ydJcKq",
    "WOaTFa",
    "isae",
    "ifjL",
    "0lxqVDgm",
    "W4RdGLa",
    "rbS0",
    "C3nP",
    "WRFdI8oj",
    "BxrK",
    "n3lcHa",
    "j1/dMa",
    "2BpcSmkm",
    "W74zhq",
    "WR3dHmoF",
    "jIXf",
    "zhu6",
    "lCotW4G",
    "WO0+AW",
    "kmo4W6S",
    "WQNdO1K",
    "Dmk7ka",
    "W4pcJrS",
    "WQ4WW7S",
    "o0DV",
    "d8oSdW",
    "kCopW7e",
    "WQJcUmoE",
    "W43cPhO",
    "kfTH",
    "muPO",
    "x05b",
    "ChLT",
    "yMfZ",
    "W77dGdu",
    "f8oPW6e",
    "oCoFW5G",
    "WRxcUCon",
    "W4WXqq",
    "CqOX",
    "yxj5",
    "BM90",
    "W6yydW",
    "WQVdOwq",
    "zxzL",
    "CMvL",
    "Ebf7",
    "lta/",
    "emo+ca",
    "gJLy",
    "W4O7qa",
    "W6NcSCoE",
    "WOhcLKS",
    "BNnO",
    "Bgvq",
    "WQKkAG",
    "W4FdRYu",
    "WPlcHmoN",
    "omoeeq",
    "zttcLW",
    "WO4KlG",
    "tMDp",
    "qu1f",
    "AfDe",
    "twXw",
    "ugX1",
    "CuT3",
    "l8owW40",
    "W4/cTau",
    "W7KMWQm",
    "DhfX",
    "W7VdLbW",
    "fmo6WOC",
    "WPFdLMO",
    "t09l",
    "C2vH",
    "WPL+WRa",
    "C3/dPG",
    "WO/dSvO",
    "W4JdJKW",
    "W5G9za",
    "lY7cGW",
    "gSoljq",
    "WRRcU8oz",
    "DmkJW7i",
    "WRPxWOa",
    "Bgf0",
    "fJPh",
    "W6W6WRK",
    "rhm6",
    "B3iG",
    "wSoflG",
    "W6PCWPO",
    "W6RcPKq",
    "q3bO",
    "wCkUCG",
    "Bwu6",
    "W5hdIYy",
    "WRpcUCoC",
    "WOpcN8oY",
    "W4pcVga",
    "iM90",
    "kMG1",
    "qLr6",
    "WRhcRSoq",
    "kduP",
    "BMnV",
    "BgvK",
    "hrKt",
    "kKTW",
    "f8ojiG",
    "W4tdScC",
    "WP7dKfW",
    "ywXo",
    "WRnkja",
    "W440WRm",
    "W5emWOG",
    "4kAW4kAAla",
    "a8oSWOW",
    "WPaTFG",
    "zwrc",
    "zw50",
    "y8okW48QW4iPW4W",
    "h8opma",
    "v0L3",
    "W7qCWRO",
    "Emobtq",
    "rsbS",
    "ndaA",
    "WQmIW7a",
    "ig51",
    "lI92",
    "marV",
    "W5FdRsy",
    "cmoXlq",
    "nZG5",
    "lwrH",
    "aCkHxW",
    "WPddHCoa",
    "wCoiW4O",
    "nt4U",
    "4Ocuigu",
    "W6atuq",
    "ChvZ",
    "mSooWOa",
    "rvKG",
    "W4O8vW",
    "t8kWuq",
    "W6JcP2S",
    "EWtcMW",
    "ANhdOG",
    "eIqF",
    "dJGE",
    "ofFcGG",
    "DgGG",
    "sCkSdG",
    "AgvY",
    "DwDP",
    "yxjR",
    "Duz3",
    "W7m0WRK",
    "oWTY",
    "B3bL",
    "W7ZcL18",
    "CfrV",
    "W4xdNGi",
    "Dg9v",
    "WQW/WRS",
    "kt0M",
    "EHD6",
    "z3jV",
    "ExbL",
    "DetcMq",
    "rSoOeq",
    "AfrL",
    "W4ieW4a",
    "C2nH",
    "B3rO",
    "W4ldGKG",
    "W7yvhW",
    "mc0Y",
    "yKFdVW",
    "zsbH",
    "fCogma",
    "y2L0",
    "W7mGWRW",
    "xSkgwG",
    "W5ddVJa",
    "rgvS",
    "0O/cLwK",
    "Dgf5",
    "jGVcSa",
    "C1bJ",
    "CmoDW4K",
    "tCkrtW",
    "ocWh",
    "W5DLAa",
    "4ksFWPOy",
    "lwvR",
    "q3jl",
    "vhvY",
    "ks0S",
    "AZ/cNW",
    "osvc",
    "AxzO",
    "CMLU",
    "FGrG",
    "lcdqTq",
    "WPKyEG",
    "sCoaW5W",
    "BhKS",
    "sgvS",
    "DhrW",
    "t8k7xW",
    "l2X5",
    "quzl",
    "W4ZdIHO",
    "xSkBsW",
    "fCoYda",
    "zuzP",
    "DhjH",
    "CMf2",
    "0l3qTDcY",
    "AgfM",
    "rxvo",
    "W6FdTW8",
    "AgfY",
    "rNjH",
    "C3vT",
    "BJFcMW",
    "W47cVHK",
    "rc3cPG",
    "jmokiq",
    "CrC3",
    "yM9U",
    "AIzF",
    "jSoBW4i",
    "A0f6",
    "W7JcGmkm",
    "W4JcPri",
    "wCoiW4C",
    "W5NdIKW",
    "WRZdGCoy",
    "BJ7cLq",
    "hJqe",
    "W7NcSHm",
    "x8k0wa",
    "cuii",
    "fd0t",
    "WQOSW4O",
    "DcbT",
    "DhNdUa",
    "t8oMhG",
    "xCoRCG",
    "WQmaW7e",
    "naaS",
    "W7JdICoF",
    "fJ3cJG",
    "pW4C",
    "CL9P",
    "W6CFbG",
    "W6VdR2O",
    "WRNdMmof",
    "y1dcJa",
    "W7/dKdW",
    "smkTwG",
    "W5rMWRG",
    "qa3cUG",
    "gJHx",
    "lcbY",
    "dJLr",
    "lY9S",
    "W4lcQgG",
    "tmoOeq",
    "zxbL",
    "tmkHmG",
    "kcqA",
    "d8kHmq",
    "mSkQnq",
    "yxnR",
    "kZWh",
    "0laSia",
    "WOKZW4W",
    "ihrV",
    "rSkBxa",
    "W64MWRS",
    "xSkLqa",
    "WOSMAq",
    "EtNcGG",
    "W5C3WRW",
    "yXG/",
    "W5D2tW",
    "l8o+W7C",
    "sstdPG",
    "WRtcM8oW",
    "qKzy",
    "sLhcSG",
    "W50nra",
    "l2PJ",
    "WPaqwq",
    "ihbV",
    "W7aQWRu",
    "W74EwW",
    "oZGE",
    "WRqrBa",
    "D2fY",
    "fmosW6a",
    "C3hdLW",
    "iSomDq",
    "zcbB",
    "WOxcGXG",
    "w8omW4O",
    "W6ddIZC",
    "zvtcHq",
    "W4xdK1e",
    "zSkA2OS",
    "07tsR9cl",
    "W4e7WQ0",
    "W7ZdGrq",
    "BNqS",
    "W5C7xa",
    "WRtdHCkt",
    "f8khkW",
    "zMrO",
    "W4VcP8kG",
    "W4fsWO0",
    "AMLK",
    "q2fS",
    "lcb1",
    "BSo2W4y",
    "W4yebW",
    "CML2",
    "DSoRWPm",
    "k2eb",
    "qrS8",
    "yxrL",
    "WQ/dICoi",
    "iSojna",
    "zbOW",
    "W4WXqG",
    "ksbF",
    "WPZdVHq",
    "W7VdTGG",
    "FYpcHq",
    "C8oKeG",
    "WPTuW78",
    "B3qU",
    "mgrr",
    "WRhdJSol",
    "W4i9ya",
    "W5q9WRS",
    "WRpcP8oL",
    "W57dRHS",
    "BgLY",
    "uhrs",
    "W49BWO0",
    "WQfunG",
    "d3GJ",
    "lI0S",
    "bXhcUG",
    "E8kEga",
    "zhzm",
    "A2fR",
    "CtOG",
    "W5hdSsW",
    "BwLZ",
    "uKrU",
    "twvZ",
    "WO7cKmoX",
    "W5dcQCkR",
    "l3KU",
    "rwfJ",
    "W6yXzW",
    "W5ehWP8",
    "CgLJ",
    "hJjw",
    "ySoyna",
    "w8oNya",
    "W4ZdKLW",
    "W5L7FG",
    "W4O4vW",
    "C291",
    "yJDE",
    "CLGW",
    "lwHV",
    "p04J",
    "WO3dSvC",
    "B8oUWRq",
    "WRC1W7O",
    "zM5I",
    "WQaTWRe",
    "WRmeEq",
    "jdOM",
    "W57cIWy",
    "WQ4ZW64",
    "Br1M",
    "DejV",
    "B8oWWPq",
    "bWqe",
    "zSovoa",
    "puT2",
    "BMvR",
    "u3/cOG",
    "lNnW",
    "bCoJW70",
    "u8onW5C",
    "C2nY",
    "sgLU",
    "c8ocma",
    "tvvJ",
    "hmo+WPK",
    "WR8WWQq",
    "AsKS",
    "E8o+W7S",
    "ugfN",
    "B21L",
    "zw1V",
    "DgfI",
    "nqrY",
    "C3bV",
    "WRtdGCop",
    "W6hcM28",
    "mYSO",
    "kSkVW4y",
    "W6fSW6G",
    "AtOG",
    "yYxdLG",
    "B3jK",
    "W4NcKqK",
    "DgnN",
    "DwfY",
    "o0PV",
    "DeXV",
    "zMLU",
    "sCoRAW",
    "wWSt",
    "kSo1W6G",
    "W4yQWR4",
    "4kAB4kA/la",
    "W5VdK1y",
    "W6PAmq",
    "gtHA",
    "x0fq",
    "BgLI",
    "y1nH",
    "B3bH",
    "WQuxza",
    "DenV",
    "CrST",
    "BmocoW",
    "WRucEq",
    "aqXY",
    "W6uIWPS",
    "wmkfqa",
    "iZON",
    "qfBcRW",
    "mmo1fa",
    "uuPu",
    "sw52",
    "qSo1fG",
    "W50kWOi",
    "WP7cLCoX",
    "y2HP",
    "W6CtpG",
    "W54XEq",
    "o8oqkW",
    "0O/rVnkL",
    "WQtdVmol",
    "W7bSW7i",
    "W5ddHKO",
    "zxrb",
    "W63cOgm",
    "WRqFrW",
    "W51fWOK",
    "igLZ",
    "W5JcGH0",
    "4kE+b2C",
    "W5K/zW",
    "WQ4HW7C",
    "W5JcGrW",
    "xmkIqq",
    "W4JdHvC",
    "W6itkq",
    "oSo1WPy",
    "y3jV",
    "ns41",
    "WOZdIMi",
    "q2HI",
    "x8ksxq",
    "W6Oxgq",
    "iocMQUcNJq",
    "W4OXvq",
    "fmoinG",
    "hSoTW4K",
    "sSoWoq",
    "m8kUkW",
    "iZ9o",
    "WO3cOqu",
    "vezp",
    "BwuI",
    "oIbe",
    "A2vw",
    "orGQ",
    "4kAQ4kAW4kEh",
    "CMvK",
    "BhzJ",
    "sezW",
    "W4C7WQ8",
    "Dw5O",
    "AwXK",
    "DKxcJG",
    "Chj1",
    "vSoRAq",
    "0ldrGTcW",
    "tSkRqW",
    "W4FdVsG",
    "brddRa",
    "kMiW",
    "lNvZ",
    "W5TnEq",
    "A295",
    "fComWRa",
    "W73cOKq",
    "WPiKyq",
    "W74tga",
    "DhZdVW",
    "luTP",
    "WQVdLmon",
    "d8k6ma",
    "W5RcObO",
    "vmo6Ba",
    "W6jZWQ0",
    "W6utgq",
    "W7JcRIi",
    "qNjV",
    "BgfU",
    "xMFcMG",
    "ot4E",
    "Ec1N",
    "mtiZ",
    "ideT",
    "r8oUW6O",
    "pCo2WO0",
    "v3bl",
    "yxLI",
    "WPRcK8oN",
    "hSouAq",
    "rmkHqa",
    "imkgiW",
    "W6ldJtq",
    "bKGv",
    "w8osma",
    "W4pcMHG",
    "l8oFjG",
    "C2fJ",
    "Bcb0",
    "z2DL",
    "W547WQu",
    "W5m1xG",
    "lda7",
    "igzP",
    "EepcJG",
    "fIOW",
    "cmoDWRG",
    "y1JcJq",
    "zw5J",
    "qmkJCa",
    "W4SLga",
    "lI93",
    "fs9x",
    "WONdHIO",
    "E8kSWR4",
    "WPJcQCol",
    "s8knsa",
    "vCoOgq",
    "l3b4",
    "sSk6jG",
    "o0TU",
    "bCoWWRO",
    "W63cRgu",
    "kXOz",
    "iSoFW40",
    "WPxcJCo1",
    "ievU",
    "B3jT",
    "zwXZ",
    "sCo1cW",
    "CSoaW78",
    "AYb0",
    "f8oxjq",
    "mSooia",
    "w2Ot",
    "z2uG",
    "DwvZ",
    "ldNcQq",
    "aSo1WQm",
    "r8kraq",
    "yxqV",
    "s8k7zq",
    "qNrs",
    "EmoV2Aq",
    "ierL",
    "W4u8Cq",
    "q2f5",
    "s1nZ",
    "whhdPG",
    "rxHP",
    "Dg9T",
    "W6etga",
    "W5DWW70",
    "W6hdIci",
    "DMDf",
    "W4BdUZO",
    "zw52",
    "AgLZ",
    "W5WTWOO",
    "s8kHka",
    "v29Y",
    "W6pdLdy",
    "yXbF",
    "WQmrAa",
    "gSogjW",
    "W6RdOIu",
    "wmorWQu",
    "igDP",
    "dbeR",
    "wmohW58",
    "mSo/W5q",
    "BMfT",
    "yhCB",
    "WRxdGCoy",
    "DSo/WPq",
    "WReTBW",
    "BZZcKW",
    "smkVmW",
    "tKfn",
    "sNvU",
    "qvje",
    "WQZcMSok",
    "CKny",
    "W5JcOJe",
    "x8o2BW",
    "wMTr",
    "hY9C",
    "mYKp",
    "we/dPG",
    "WPBdNeS",
    "WP7cL8o8",
    "W6fYWOq",
    "rCo5WP4",
    "wmoNCq",
    "bCkzva",
    "W4y9rW",
    "WQ0dwW",
    "fmosia",
    "yxrH",
    "WRddGJG",
    "vvrf",
    "ihFBMq",
    "CNjH",
    "Awrv",
    "W5jaWPS",
    "pHPc",
    "A2vK",
    "x2zV",
    "zxnu",
    "WR7cQCoF",
    "xmkVoa",
    "oCosW68",
    "igtdQq",
    "DcbI",
    "fCo6WPS",
    "C3H1",
    "Eq48",
    "ue9s",
    "l8o1W64",
    "xCk/4Ogf",
    "n0BcJG",
    "BZT8",
    "WOtcGSo1",
    "tmkRrG",
    "zrST",
    "v8oekW",
    "u3tcUq",
    "rhmQ",
    "CgXL",
    "W5qSWQy",
    "WRyjrW",
    "yNFdUq",
    "nJ92",
    "Dmosna",
    "WPZdLXu",
    "0QNcHngT",
    "tSkJFG",
    "W5FcHSo1",
    "WRddUZm",
    "W4atgW",
    "zwzp",
    "W7dcGSod",
    "DMvU",
    "pZie",
    "uL9b",
    "zwzN",
    "DgGX",
    "ACoUWPS",
    "WRhcUCor",
    "BgLR",
    "DWWG",
    "dYTu",
    "W5XGFW",
    "zwXK",
    "W7u4WRW",
    "lcXL",
    "W4SwWPG",
    "v8oyla",
    "igjO",
    "zw9u",
    "y1fM",
    "zxiG",
    "D8o7WO0",
    "W7BcR2G",
    "rKDh",
    "WO0mFa",
    "gCoVoq",
    "CNFdVW",
    "W5f2Dq",
    "W4ZdMfe",
    "yX04",
    "sSo+mq",
    "r8oNW6m",
    "ufb3",
    "u2HY",
    "wmkLvW",
    "Cgf0",
    "W5ldTIu",
    "f8oPW7W",
    "ic0J",
    "Bfnp",
    "ieHP",
    "AwrF",
    "WPyqW4O",
    "oeT1",
    "CYaO",
    "xCkHlq",
    "BuvU",
    "jSoHtq",
    "BgXL",
    "W5WTWP4",
    "DxjR",
    "zY5J",
    "rxjo",
    "W7ycdG",
    "hWWB",
    "ksWG",
    "W47dNG0",
    "BJOG",
    "oIbp",
    "W57cPY8",
    "W5ZdQZ0",
    "W7FcR2i",
    "Cg9U",
    "kCopia",
    "ArfG",
    "W519FG",
    "W69TWQe",
    "wM5W",
    "q8oygW",
    "EqXX",
    "WOK+ta",
    "qvrQ",
    "W7n+WQ8",
    "zHq0",
    "W7hcSc0",
    "vgPy",
    "W7FdL8of",
    "C3bH",
    "W67cTga",
    "W70xaG",
    "W43cHqq",
    "zgfY",
    "y2jq",
    "BSoXWOC",
    "p1bY",
    "yw1t",
    "dmoUia",
    "rKrb",
    "zWH4",
    "BmoDlG",
    "rMLS",
    "umoiW40",
    "wmoFW58",
    "W6pdJtC",
    "aCkYWOu",
    "jCoAWQu",
    "yuD3",
    "DMj0",
    "mJqT",
    "W5RdUJ0",
    "DhDP",
    "pmoPW6O",
    "WPNdLSo3",
    "W6VcH8kk",
    "wmkHra",
    "WRWRWRi",
    "mZap",
    "aCoZgG",
    "BIWG",
    "emoRWOa",
    "W6VdO1G",
    "WRVcL8ox",
    "tu0V",
    "umomW40",
    "CM93",
    "qNv0",
    "yxjJ",
    "thnw",
    "W5VcLbS",
    "r8kRpG",
    "zwfJ",
    "drJcVW",
    "W7xdVmoi",
    "yMLS",
    "d2az",
    "Dw50",
    "aCoHoG",
    "W5BcGmkw",
    "WQ3cUCoS",
    "W5mXqq",
    "W6asWOS",
    "AYiU",
    "WR3dT8of",
    "kLrP",
    "D0rA",
    "WRq7rq",
    "WOpdMLC",
    "B250",
    "zw5K",
    "dCoxcq",
    "t8oeW60",
    "rSkFsa",
    "WOxcK8oN",
    "aSk9aG",
    "W53cKcS",
    "mxnM",
    "W57dK0W",
    "W7OqeG",
    "reqV",
    "zxjP",
    "zhmI",
    "BSoTWRy",
    "WQNcJgO",
    "W4mXEa",
    "DgHL",
    "yHLM",
    "su5h",
    "AxPL",
    "W7RdLXa",
    "W4WHvW",
    "whbV",
    "W5abWRK",
    "Df9L",
    "WQ0FCW",
    "zgeG",
    "vg5e",
    "x8o+CW",
    "ldGe",
    "W6VcICkc",
    "wMvL",
    "C3vW",
    "W7JdHsO",
    "W4GmWOi",
    "wMrJ",
    "W5NcUbq",
    "C8o5sW",
    "y2nc",
    "lI9Z",
    "jda+",
    "2zdBLTQY",
    "WQJcK8oa",
    "zxH0",
    "WR0cW6O",
    "CxrL",
    "pSoIW60",
    "DxjS",
    "bsCA",
    "W74Fga",
    "W6NcQ3y",
    "hxK1",
    "ELjS",
    "rhbp",
    "WRWMW6O",
    "cGOJ",
    "W6D6WRO",
    "WRWuW5m",
    "4kEezHm",
    "k8ooW4K",
    "zb9N",
    "W58HrG",
    "ECo/WPK",
    "W7qAaG",
    "C2LT",
    "W48QzG",
    "ErLZ",
    "WQtcQSoE",
    "DxrL",
    "wvnu",
    "WPpdJmk0",
    "s05L",
    "uComW5a",
    "g8keeG",
    "C2XL",
    "mKL+",
    "yu9r",
    "W6FcRwO",
    "DgfN",
    "i8oQWPO",
    "W5NcTaq",
    "ihnV",
    "lI9M",
    "WR/cS8og",
    "W5m1qG",
    "Dg9t",
    "WPJdNeS",
    "zNrL",
    "WPlcMmoG",
    "BtVcNW",
    "i8odW50",
    "rCkvxW",
    "hSoQWP0",
    "zY9J",
    "thLK",
    "EmoZWQ4",
    "W6ldSLC",
    "WPFdSri",
    "WO3cTr4",
    "WPxcTmoA",
    "sLtdQq",
    "W7dcP28",
    "BgLZ",
    "mvr+",
    "W7qWWQy",
    "2kJyUDIQ",
    "sxnt",
    "W6etgW",
    "CHVdGq",
    "zg1P",
    "yxjd",
    "C2vZ",
    "B2T1",
    "sefs",
    "Aczf",
    "DSkSW4S",
    "yw1V",
    "Ewn2",
    "lZeQ",
    "WOuJia",
    "lNrY",
    "WOC7EG",
    "W5hcHxu",
    "ywDL",
    "yMXV",
    "yMvZ",
    "jZmS",
    "W7CxhW",
    "uv9t",
    "W4KeWOi",
    "EbT8",
    "Dg93",
    "tLjp",
    "iNjL",
    "ztaW",
    "imokoW",
    "iCkIiG",
    "y1zq",
    "zg9U",
    "DxrM",
    "W7lcIZq",
    "zwrb",
    "BSo7WOu",
    "BeL3",
    "fCoOjG",
    "WO3dMSk0",
    "AwDO",
    "zeLU",
    "DCoZcG",
    "BgvH",
    "W7tcOwS",
    "y2fS",
    "fIHw",
    "WQG3W7y",
    "t0rV",
    "2BNcIDQD",
    "W7NdGZC",
    "WQBdO2O",
    "0yZqVDc+",
    "CI8X",
    "z2uU",
    "W7FcOfG",
    "FcOd",
    "WQtdSCoz",
    "BhKG",
    "z2LU",
    "sCkYWR8",
    "AtJcGW",
    "W6Czgq",
    "WRW3W78",
    "smoNEG",
    "BNrO",
    "zxju",
    "BL7dTG",
    "W4hcIuC",
    "hYTA",
    "AeL0",
    "oZGy",
    "WRffW4W",
    "reDf",
    "rwfY",
    "l3yY",
    "4kEYb2C",
    "W6tcHY0",
    "Bmo8AW",
    "2BVAK8km",
    "W5dcRvm",
    "pgGQ",
    "emognq",
    "hSoRWOW",
    "wY7cKG",
    "iNJcMG",
    "mJWh",
    "uKvo",
    "WRpcUCom",
    "eJjw",
    "CMvY",
    "W5ldSZW",
    "teXf",
    "WP3dKLC",
    "FdlcMa",
    "lcdGPQO",
    "ieLM",
    "zxjY",
    "W750WQZcMuZdQSoLWPlcGmo2hG",
    "lalcHa",
    "vd5w",
    "W7RcQ1e",
    "owWQ",
    "W77dGs4",
    "WOtdKNG",
    "W6CWWQO",
    "W7BdIX8",
    "W616WRS",
    "BbD6",
    "lWPd",
    "uMvZ",
    "W73dMLK",
    "Fbup",
    "bCo6WQ8",
    "zX1M",
    "W69MWR0",
    "ACoiW40",
    "W7ffBSoElI1Owa",
    "yxrP",
    "w8k4gW",
    "D8o3WOq",
    "BwjL",
    "W47cSbq",
    "d8kNmq",
    "W4pdRqq",
    "FSkcgq",
    "W67cVwO",
    "DgGS",
    "CSo6WP8",
    "emoRWOW",
    "WO4Tya",
    "0jFtTxm",
    "dMOU",
    "WPyTDG",
    "B2LK",
    "d8kQpG",
    "vhj1",
    "W5ddM1G",
    "p8oRaq",
    "WQn1WPC",
    "W6OqWOm",
    "icjL",
    "WQRcTmoi",
    "W4NcU3y",
    "oSoGW7i",
    "C2pdLW",
    "W4ZcP8kE",
    "W5WnWPG",
    "WRqjEW",
    "yMLU",
    "W5G9xG",
    "y3xdLW",
    "Dc1u",
    "W6eSWPe",
    "WO7dRIu",
    "idaT",
    "d3WF",
    "kKfJ",
    "yZNcHq",
    "ACkWWOm",
    "AgvK",
    "W6tdGse",
    "jczC",
    "oCkTkq",
    "gCoRWP0",
    "uCoWW5S",
    "WPaTyW",
    "u8kAwa",
    "W7StcG",
    "Bgvu",
    "Ev9W",
    "wSogW5e",
    "pg51",
    "W58RDG",
    "zhrz",
    "W6K0WRa",
    "uunU",
    "hSo/W5S",
    "WPb42ke",
    "omoBW48",
    "Bgvt",
    "fCoPW7O",
    "ys02",
    "u8oKda",
    "qr8R",
    "l2DP",
    "ys1S",
    "W6tdL3K",
    "wCkLuW",
    "WRuDAq",
    "WPJdNeK",
    "qw5K",
    "W719FG",
    "sSk6pa",
    "cSk2xG",
    "x8kRpa",
    "y37cIq",
    "W5CWBq",
    "W7ZdJtC",
    "tfvR",
    "tN7dSG",
    "W4RcPby",
    "W7ZdO+kaPa",
    "eZ5K",
    "zxjU",
    "CNFcMq",
    "W4RcQX4",
    "W652WRi",
    "z0Tb",
    "lrGc",
    "vCkDjq",
    "e1fV",
    "p8oCW4O",
    "x8oGFG",
    "DLRdMq",
    "W61+WRG",
    "fNzn",
    "zbSP",
    "jCoZW5G",
    "c8oNW6W",
    "W6xcOKS",
    "Dg9W",
    "Dfr5",
    "s1jx",
    "ixKI",
    "Bw92",
    "tSkDtW",
    "W5mXWQ0",
    "F8oMWPi",
    "lZLF",
    "WRykFa",
    "BgLK",
    "W6KXWR8",
    "nZH6BvP1B3q",
    "WRxdO1i",
    "W7hcGCkg",
    "WQVdPNu",
    "WQ4UW7e",
    "erdcOG",
    "wSkgva",
    "tNvT",
    "yxn0",
    "c8oxka",
    "WQtcSSoj",
    "W57dGLK",
    "mdeX",
    "Bh/IG7m",
    "l2vW",
    "Eg9i",
    "0O3sGnko",
    "CmkTEW",
    "wSkSCq",
    "0OJrODcg",
    "w8kcwG",
    "CMXe",
    "jmoEW4a",
    "vvrd",
    "W6RcLc8",
    "WOGLW44",
    "cmosnW",
    "r8kRqG",
    "rMlcPq",
    "zuj1",
    "WRxcS8ou",
    "tfjX",
    "u8o8Ba",
    "ENvZ",
    "W4/dN1y",
    "C3vI",
    "W41ZDW",
    "W6OkWPC",
    "yciI",
    "W6mAhG",
    "DXi4",
    "W5ipWRq",
    "ExDV",
    "kszg",
    "ru1F",
    "W4lcUbm",
    "dCoPea",
    "FCkSvq",
    "C8oTWQe",
    "WP/cTSk8",
    "BgLX",
    "W58KqG",
    "yw5H",
    "W59Mpa",
    "d8o5W6W",
    "ywGS",
    "lYKl",
    "W4VcGcu",
    "p0DV",
    "W5NcP8o+",
    "BMrP",
    "jCoRW5W",
    "o8ooma",
    "zxnP",
    "emkuW4u",
    "WQpdSSoC",
    "W496oG",
    "aHLE",
    "iMPP",
    "iIKG",
    "omokiq",
    "yd4N",
    "WQ7cRmoA",
    "BZ04",
    "rhjP",
    "W47dN0W",
    "WOeHEG",
    "ANvZ",
    "DgH1",
    "Dxbl",
    "CgX1",
    "WQyuyW",
    "W4TMba",
    "WOeGyq",
    "iCkQja",
    "Cv7cHq",
    "WP7dLK0",
    "rMnt",
    "jN8G",
    "xmoHCq",
    "W5b0uq",
    "s8kMW78",
    "eSo0W6q",
    "W6Czaa",
    "t8onW40",
    "WOtdNhW",
    "W6hdUCoZ",
    "bX/cPa",
    "etWg",
    "C3rT",
    "yNHA",
    "WRtcRSon",
    "WOtdULm",
    "mXhcPa",
    "Fmo3WPS",
    "WRxdICoF",
    "bCoJW7G",
    "W70hWRW",
    "pY8d",
    "j1dcHG",
    "W4hdK04",
    "runb",
    "W7FdRI0",
    "W4CYiW",
    "B3b0",
    "W5yeWPG",
    "BmoPma",
    "W68rWOq",
    "WQjhuHe6z0VcI3xdHq",
    "WOWSW7a",
    "W63dVmon",
    "C2LY",
    "WQNdS8oQ",
    "vSoBWOu",
    "W7jRWRS",
    "W7xdIIO",
    "xSoyxG",
    "rmoygW",
    "amoTW5q",
    "W4tcOIi",
    "iJOG",
    "oIKO",
    "y3xdUq",
    "sCkTqa",
    "W7eYyq",
    "W456FW",
    "Dxbc",
    "rKXe",
    "ke1/",
    "rmoIhG",
    "x1ri",
    "AfvZ",
    "WOS4EG",
    "W7ZcRvm",
    "ueHj",
    "W68RW78",
    "rLn2",
    "DgNdPq",
    "nJC4",
    "W4NdL0W",
    "asFcOa",
    "zwLN",
    "hYWP",
    "o34t",
    "bCo6WPS",
    "AwX0",
    "ChaG",
    "oqKf",
    "lITk",
    "Eei0",
    "nHW2",
    "bWZcSW",
    "AweT",
    "2lpyQTMe",
    "uCoOWPS",
    "zwvU",
    "os8S",
    "jIvo",
    "d8k5lq",
    "zGSQ",
    "wCk1sW",
    "zsbU",
    "W7aGdW",
    "Bgf5",
    "AWHK",
    "W5NdMCoW",
    "W5KFdW",
    "ktfM",
    "pSo4jq",
    "W6q0WQC",
    "W6/cMmkv",
    "zCoblq",
    "ove+",
    "2kFyQTIO",
    "WPpdNf0",
    "xgqR",
    "brRcSG",
    "W5THyW",
    "gSoOBq",
    "WOP1na",
    "jSkQnW",
    "WRWIW7K",
    "sNDA",
    "t0j4",
    "0lBqTngl",
    "mSoVW7S",
    "zMv0",
    "ywrK",
    "zMHf",
    "nCk8la",
    "qvbJ",
    "W5q6WR4",
    "y3KG",
    "A0LX",
    "W5ZcQSkV",
    "Aw5P",
    "W4RcHrW",
    "ntmj",
    "W7FdHsS",
    "yw5N",
    "hCovjq",
    "EfHr",
    "pIbe",
    "zty0",
    "s8kQxq",
    "AgHI",
    "BMuG",
    "W5ixxq",
    "WOr3ya",
    "wmoQpG",
    "j10P",
    "Evjz",
    "W63dVmok",
    "mcO6",
    "Amo7WOy",
    "WQqHyG",
    "W6hdSCkF",
    "Ag9Y",
    "ogeZ",
    "fY9D",
    "zcWG",
    "zw91",
    "Bs4k",
    "umoslG",
    "W4xdGKW",
    "ywLU",
    "W4WNvW",
    "W7xdIYW",
    "uWxcSW",
    "hSo0W7C",
    "WRBdLmoj",
    "vxjS",
    "Dgv4",
    "zwn0",
    "qhmU",
    "Bw9U",
    "iezY",
    "W4yXEG",
    "sSoAW5S",
    "AdOG",
    "W4pdPum",
    "W53dUH4",
    "zxnJ",
    "h8ocma",
    "BwL4",
    "uMvT",
    "l2aO",
    "yMvY",
    "WOuTFa",
    "DCopWR0",
    "WOieCa",
    "fWRcPa",
    "DwuG",
    "nmoHWRe",
    "CSkata",
    "W6utjG",
    "De1H",
    "aCo4na",
    "zgvb",
    "B2TL",
    "WQJcJCoa",
    "ncKE",
    "W5pdSYW",
    "mdiy",
    "jSkUmW",
    "DcDZ",
    "iIbV",
    "W4tcSbS",
    "W7FcQ3C",
    "Axjt",
    "zftcNW",
    "WQ1DBW",
    "odCU",
    "ebVcRG",
    "lcbs",
    "o1XV",
    "zcSP",
    "jepcJW",
    "lcWB",
    "W6WWWRa",
    "zgvK",
    "BbSm",
    "lI5V",
    "zxrd",
    "WP/dQSkO",
    "jNKZ",
    "CMvM",
    "uCk/W4K",
    "ltmX",
    "lI9I",
    "W5JcVYu",
    "ECoagq",
    "sK1P",
    "amoQW6O",
    "pCoKcW",
    "kIlcUa",
    "pN0I",
    "oJXy",
    "W4ddTZW",
    "W4u2WRa",
    "FSosjG",
    "v0fv",
    "WP/dJ8od",
    "oIbH",
    "zNKG",
    "w8oIDG",
    "WR3dG8oy",
    "CaW2",
    "BNrL",
    "WP/cOmkH",
    "zhnz",
    "WQWRW78",
    "mJjT",
    "zgfZ",
    "sSkVlq",
    "WP/cSCkR",
    "o8kKzW",
    "W5e5hq",
    "zvvN",
    "WQ/cVmo5",
    "kYbh",
    "uMfT",
    "W5pdUJS",
    "WQ3dOCoH",
    "DwjL",
    "eSk9iG",
    "lI90",
    "yXO+",
    "W61+WQy",
    "EvbS",
    "BMrL",
    "rCoKxW",
    "W6LyWRS",
    "vCoKeq",
    "jZON",
    "xmkdqW",
    "zgPC",
    "zL7dPa",
    "FHbX",
    "W5FcRw0",
    "W5FdLSk5",
    "kgqP",
    "WRZdGCov",
    "vmoDWR8",
    "WPGHW4G",
    "wmougq",
    "W5X3yG",
    "jSovW5G",
    "u8ofW44",
    "AwfS",
    "WQa0WR0",
    "Axn0",
    "n1ddIW",
    "W5OvWPW",
    "W5FdScC",
    "sfrH",
    "E30U",
    "yMLJ",
    "W5y0na",
    "WQNdUZW",
    "zM9U",
    "W6fwba",
    "W7JcRum",
    "jIbf",
    "ArDH",
    "wmo9W5e",
    "WP4GvW",
    "CNnL",
    "pcbp",
    "Fe5H",
    "ASokW40",
    "lCozla",
    "W5i7WQS",
    "BNKO",
    "zbS3",
    "AgvP",
    "lmk6lG",
    "BJSG",
    "WRlcTCol",
    "qxjH",
    "rCkWxq",
    "k0PV",
    "WP3cMXi",
    "lxrP",
    "W7FdUra",
    "jNxdNW",
    "tuz2",
    "W6vTWRS",
    "pSogpa",
    "W7yodG",
    "C3rU",
    "eColia",
    "W7LbmG",
    "uwzw",
    "kZ1o",
    "qmkIkq",
    "DKn4",
    "t8k8qa",
    "Aw5d",
    "vg9W",
    "jMLK",
    "qK9s",
    "qgKl",
    "W5S5qG",
    "BmoeW5i",
    "W4WMxq",
    "B2qS",
    "q8kItq",
    "r2LK",
    "W4GXeG",
    "eSocW5u",
    "W5SXWQS",
    "AwXZ",
    "Ac4G",
    "gcjs",
    "fbhcUa",
    "W4dcGrS",
    "W5BdVJO",
    "yw5P",
    "qSkrrW",
    "kqOG",
    "WOmsrW",
    "zvDP",
    "zxrL",
    "eq3dUG",
    "ofdcIG",
    "WRSXW7C",
    "zurV",
    "zfrY",
    "AwXL",
    "r3jV",
    "oYKc",
    "ySohaG",
    "WOP1W74",
    "BMXW",
    "qw5z",
    "tmkHmq",
    "W6/cOL4",
    "y2nV",
    "s1vO",
    "B3DL",
    "ldel",
    "wMv0",
    "jSovW4S",
    "lM1W",
    "W6KaWOe",
    "rgf0",
    "e8kgW5O",
    "DwWG",
    "W6VcPKa",
    "W6RcONu",
    "lCozpG",
    "W4O7zW",
    "W4ldQhK",
    "WOxcN8oZ",
    "wSkGmW",
    "jI0M",
    "ifnW",
    "fmoTWPS",
    "uv9b",
    "gCo6WO0",
    "W7xdLIS",
    "uNbA",
    "BCoBmG",
    "EsaZ",
    "A3vW",
    "iePj",
    "r8kvtW",
    "p3vY",
    "AxtdPa",
    "svPr",
    "w8ogW5a",
    "WRSIW6O",
    "W449Ea",
    "BLLX",
    "WQiMW60",
    "jCoiW4u",
    "rCkQvW",
    "WP/cL8kG",
    "WOtdML8",
    "WQKeyW",
    "DhrL",
    "qMvH",
    "ocbo",
    "W53cKbO",
    "W4yedW",
    "DgfU",
    "hSo/zK7dTM3cG1dcKCkz",
    "W6H6WQW",
    "W5/cSve",
    "W53dKXO",
    "n0P8",
    "W6SRtG",
    "Cu54",
    "0y3rOTof",
    "W4lcOWm",
    "DhmG",
    "W5JcOHi",
    "DCo+Cq",
    "WPhdRSoU",
    "E8oUW78",
    "vgfN",
    "igHL",
    "B3v0",
    "t0n6",
    "Dgf0",
    "FXzM",
    "W7dcRvC",
    "0l0G0ya",
    "hJHb",
    "vMzk",
    "mZW7",
    "WQ/dSmkF",
    "wKLi",
    "zr8+",
    "WP3dNfC",
    "zw1P",
    "W7NcVHi",
    "E1dcMq",
    "ECormW",
    "DhvZ",
    "icHb",
    "W7FdGCoC",
    "yM9Y",
    "ySoZmW",
    "i3JcKq",
    "drzO",
    "lSocmG",
    "EHS3",
    "zwvS",
    "W7rwWQW",
    "mYNcPmoOoSonxamplKG",
    "gmonlq",
    "pCoTW7C",
    "Fd/cMq",
    "oK1n",
    "l3rV",
    "x01p",
    "W71/Da",
    "AJPo",
    "mdm8",
    "u8ooW58",
    "gIzA",
    "y1JcHG",
    "rmkTrW",
    "WPpdKLq",
    "Aw5N",
    "W5pdUIC",
    "yt7cHq",
    "zvtcIG",
    "iCoojG",
    "yxjY",
    "zgLH",
    "W7TZCW",
    "A2v2",
    "t1bf",
    "omkUkG",
    "s8kNlq",
    "qmoVga",
    "sSk+pG",
    "Dg9Y",
    "hSk0W6i",
    "amoskq",
    "W5NdV1W",
    "jmkJmG",
    "arlcVW",
    "A2fS",
    "WOldLLq",
    "kZTc",
    "zmoymW",
    "rMfP",
    "j2iP",
    "W57cIb0",
    "ig9Y",
    "jGPe",
    "r3jL",
    "h8oRWOW",
    "lCofiq",
    "C8oQWP4",
    "CgfN",
    "W4qCyG",
    "Bgv2",
    "WPFdH1e",
    "w8o6AW",
    "mZ4U",
    "ySo9W7y",
    "W73dGsO",
    "iokcUsW",
    "wY5x",
    "W7tcGmov",
    "WOtcL8oZ",
    "t8ogdW",
    "CM9S",
    "ignS",
    "WO4HFq",
    "zsbM",
    "CM91",
    "kgeO",
    "gSoZW7m",
    "tSkhWRq",
    "CMf0",
    "tHLG",
    "FKv2",
    "m0TT",
    "zgrY",
    "W7n+WRW",
    "nCkeia",
    "kYDF",
    "icaG",
    "r0vn",
    "zKvJ",
    "CgHV",
    "q0xcGW",
    "oSo3WPK",
    "zxfp",
    "DwjZ",
    "mWvn",
    "W5ZcK1e",
    "W798za",
    "W4JdPqW",
    "i8o9WOO",
    "ASoBW54",
    "DvrR",
    "W4dcTaq",
    "WQGnW78",
    "WQuZyW",
    "lsbi",
    "DKhcMW",
    "y3r0",
    "WRqvEa",
    "W53cIae",
    "DLlcNW",
    "CNqG",
    "W50mWOa",
    "AXfW",
    "uKrO",
    "AWLf",
    "AgG6",
    "zxHW",
    "hCoZkW",
    "WO0yWO5ch8kiWOS",
    "ySoOW64",
    "t3bU",
    "vSkboq",
    "q3nx",
    "W4m2CW",
    "0l/qU9cW",
    "n8oGW7S",
    "F8oBkW",
    "sNHA",
    "W7qthW",
    "DfdcHW",
    "W7JcHtq",
    "W6fwdq",
    "W7tcOKq",
    "x1bm",
    "WRS2W60",
    "2k/yQsW",
    "DwldUq",
    "s8oCEG",
    "pmoPW6W",
    "EfvW",
    "CI5N",
    "B3CS",
    "zgPl",
    "WPxdG1u",
    "itST",
    "l8oxW40",
    "bqFcLa",
    "W4K5Ea",
    "WQ4vkW",
    "y0ri",
    "BgXP",
    "ot47",
    "lY8O",
    "WOxcL8o3",
    "W5FdIeG",
    "zr/cIa",
    "yxleSq",
    "yI0o",
    "zxHP",
    "DxjZ",
    "W5CBua",
    "zaW4",
    "0OdqKDcm",
    "uMvN",
    "pSokiG",
    "W5/dTIW",
    "WPCdzW",
    "imoemG",
    "W6/dPYO",
    "ztOG",
    "DCkxeW",
    "ugLJ",
    "oIdGPPy",
    "AY1J",
    "lZWn",
    "W5RcUmoI",
    "WRtcR8oA",
    "FHf6",
    "uMvH",
    "o0P6",
    "W4SmW4i",
    "W47dNNK",
    "FHSR",
    "q29U",
    "sSk8cW",
    "lcbZ",
    "k8ooiq",
    "W7q1WQK",
    "W5JdM1O",
    "tePT",
    "lY9N",
    "W6H4WQu",
    "ms9S",
    "W6hcMCoh",
    "r33cQG",
    "W6hcVfe",
    "dILh",
    "BM5T",
    "tSkrvW",
    "zw1W",
    "cZKj",
    "hded",
    "fmoNW6G",
    "W73dL18",
    "y8oolq",
    "Dg9R",
    "W57cTam",
    "WP7dKSon",
    "AwtdPa",
    "W58eWPG",
    "W5VcGIy",
    "BgW9",
    "lCozea",
    "yw5J",
    "kMiQ",
    "p1f8",
    "CftcNW",
    "W5RcRmk4",
    "BgfY",
    "jSoaoq",
    "t1vR",
    "Du/dPq",
    "hx0M",
    "wCkMwG",
    "omo+W7S",
    "WOm7EG",
    "yKDS",
    "C29S",
    "W57cPCkI",
    "sKLK",
    "l8o4la",
    "C3tdQq",
    "W6zmWPW",
    "W7iWWR8",
    "wsbS",
    "fmoCW68",
    "B24V",
    "vevn",
    "B2jQ",
    "lYrB",
    "B8oYkq",
    "W6m+WOW",
    "r19d",
    "W5iecG",
    "EaG4",
    "W4RdHfC",
    "2ltyQTIX",
    "W7r6WRa",
    "W6ldIYW",
    "CgfY",
    "DxbS",
    "BSoJkq",
    "lCohpa",
    "sCoKdq",
    "W5RdRr0",
    "hIzB",
    "Aw9U",
    "s2Du",
    "cSogmW",
    "bSoQW6m",
    "W7SFWPi",
    "AM9P",
    "ASoyla",
    "W517za",
    "WQyPyG",
    "kdGz",
    "B25L",
    "WP3dKKS",
    "weLy",
    "rmkxuW",
    "p3SD",
    "zLDB",
    "WQm7yW",
    "tmoGeq",
    "W5pcO8k9",
    "C2vT",
    "wmorW4O",
    "dmkRW6W",
    "z1tcMq",
    "tCkICa",
    "W413ra",
    "A2uG",
    "iefn",
    "EuPk",
    "etGe",
    "lJGz",
    "WOldM0K",
    "xJSl",
    "gsHD",
    "WO3cKri",
    "uhjL",
    "v0Te",
    "W5ZcKCk3",
    "y1dcIa",
    "W4RdK0W",
    "ywjZ",
    "vfzX",
    "lIaQ",
    "oIfe",
    "CfJcHq",
    "W6hcTam",
    "WPdcR8of",
    "CM7cJq",
    "W4z7pa",
    "jIWl",
    "swjq",
    "omoooa",
    "Awn0",
    "W40NuW",
    "WQWrzq",
    "cbqN",
    "yXz3",
    "WOS1uG",
    "qCkQnG",
    "WQtcNxu",
    "zwfY",
    "d8o/W6e",
    "W6NcU2m",
    "x0jv",
    "lmoiW4K",
    "ANP5",
    "nCkIka",
    "W4ZcTrm",
    "pu81",
    "m8oPW6W",
    "W4XZCW",
    "As1R",
    "q291",
    "DhhdOG",
    "oCotW4i",
    "C2f2",
    "WOr0ea",
    "C29J",
    "cH47",
    "WPBcGSk0",
    "y2uI",
    "W4hcTbK",
    "W7tdPwW",
    "ndKWoti0n1zqzLzMAW",
    "WQZcUCom",
    "WRNdHmkd",
    "qwXS",
    "mmolna",
    "W5/dT0W",
    "AuzH",
    "ufbF",
    "W5ubWP0",
    "yxjZ",
    "sevb",
    "2yRyP9Ml",
    "CHSR",
    "W5JcVbG",
    "4kAL4kEe4kEt",
    "WQFcLHG",
    "wCoVFa",
    "Bbf6",
    "BMjV",
    "umkVDG",
    "W7JcQLW",
    "W5NdUJm",
    "WRayza",
    "vgfJ",
    "B21H",
    "g8offa",
    "vgfZ",
    "Ew5J",
    "tLvu",
    "EXe9",
    "vevm",
    "rCoKeW",
    "yMlcIa",
    "AwtcTG",
    "lCoXWRq",
    "amoEaq",
    "jSoFW4i",
    "Bmoana",
    "mJ4f",
    "qfNcIG",
    "WR7dRKa",
    "nGW8",
    "ms44",
    "WPaNyG",
    "W45+Dq",
    "werb",
    "sSo/Bq",
    "CI9T",
    "W5JcP8kG",
    "W5KGwG",
    "p2j1",
    "uerm",
    "s0n0",
    "ihrO",
    "zKz1",
    "W6K1qa",
    "i8ofaG",
    "khhdPG",
    "gCkFfG",
    "tK/dNq",
    "kteU",
    "uxvV",
    "WQ8aAG",
    "y291",
    "D2fx",
    "uSkABa",
    "Bmorna",
    "sComW5a",
    "ig9M",
    "lsvo",
    "EMPg",
    "DcbZ",
    "WQOzBW",
    "W7Oyda",
    "DgvT",
    "BhbM",
    "r1Lx",
    "mb4f",
    "W44vWOG",
    "WOO8lG",
    "umoaW40",
    "kbj9",
    "ecDB",
    "W5CxaG",
    "W7X/qW",
    "a8oQWOG",
    "ksHg",
    "eqRcOG",
    "W5dcSSkV",
    "ywXK",
    "W5JcRCk8",
    "WPhdNv0",
    "4kAS4kA+4kAW",
    "hJLd",
    "W6hcOgy",
    "W4xcUaq",
    "zMuW",
    "D1j3",
    "W6ldLZW",
    "aXVcOG",
    "W7axhW",
    "ACoQWPy",
    "uCo+WOq",
    "W74xbq",
    "0l/qVTgc",
    "WOFcMCo4",
    "l3vW",
    "W5pdUJ0",
    "W4y0Cq",
    "WPWsW70",
    "DCkJW70",
    "ieLU",
    "xs5a",
    "icHs",
    "tK5b",
    "Ed7cMq",
    "WRhdRmof",
    "BwfP",
    "kZddPq",
    "wSkgW4G",
    "yNvM",
    "WQFdMYi",
    "WRdsM9gN",
    "Emohkq",
    "W4/cIxO",
    "yxbW",
    "kc8d",
    "tSkSla",
    "xg5D",
    "W5/dK0G",
    "W4pcLbW",
    "Aw1W",
    "kJ0O",
    "W6hdVmkF",
    "ydBcHa",
    "inI62k8",
    "oSomha",
    "zmozjq",
    "Bwf5",
    "j2eI",
    "W4xcHSk4",
    "tM93",
    "qSoumG",
    "Fdml",
    "WO84EG",
    "FCoHCa",
    "W6WGWRO",
    "W5RdQYG",
    "ncXG",
    "W5JcOtO",
    "WQtcLCo8",
    "sfL4",
    "z8o2fq",
    "CcWG",
    "WP3dQ8oG",
    "t8oTea",
    "s8kWxq",
    "pSoojG",
    "dvr6",
    "WQC6Fa",
    "vM1t",
    "WOVcI8oh",
    "W4y5EG",
    "vg9N",
    "zsWG",
    "nCkJzW",
    "W74gsW",
    "AmoCW6y",
    "bs94",
    "ct5a",
    "ydBcLq",
    "Ag91",
    "g8omaG",
    "C3fQ",
    "iocMUocMRa",
    "AxrS",
    "W4NcTbe",
    "B3j0",
    "W7FcUNC",
    "q8kdrW",
    "WPZdGuO",
    "W6X2WQy",
    "jszm",
    "r8krsa",
    "yXD6",
    "jcrg",
    "WP/cGSoG",
    "W6OvdG",
    "WQ/dG8ol",
    "tZuj",
    "CIb1",
    "emoYWQG",
    "WQ4VW7i",
    "W6C8WRa",
    "kKfo",
    "W6NcHey",
    "fYvs",
    "g8klaG",
    "WPVdPvK",
    "CM1H",
    "qCoUnG",
    "D3CU",
    "v2Pt",
    "pZqE",
    "nJqk",
    "Esbg",
    "0yNqUnc5",
    "y8osWPe",
    "DaOG",
    "suTT",
    "WRNcJh4",
    "DCkgxG",
    "W4ODvG",
    "gCovkW",
    "aXW6",
    "rmoQeW",
    "W6mgdG",
    "jsro",
    "W6e4oa",
    "W4NcKaa",
    "W4P3Aa",
    "W7ZcJuu",
    "qLny",
    "CgldVW",
    "sCkHlq",
    "utiG",
    "4kEM4kw94ksi",
    "W5pcP8kD",
    "W6v+WRW",
    "lhRdLG",
    "W4/dGsS",
    "DXO9",
    "lYTq",
    "zmsXBq",
    "Dwzo",
    "zLDL",
    "C2vh",
    "zdOG",
    "W50kWP4",
    "ihPH",
    "dmovlq",
    "W4pcPri",
    "W6yqdq",
    "BMvZ",
    "Dwrb",
    "C3rH",
    "W4T3CW",
    "BSogya",
    "WRNcTCoC",
    "zhrc",
    "ECoBlq",
    "BwjN",
    "sCoCW40",
    "W43cUKa",
    "WONdSv4",
    "m0T1",
    "sCodoq",
    "FZBcKq",
    "W6CRWQW",
    "W6LZWQC",
    "B2jP",
    "W63cIu8",
    "W6Lhia",
    "WPpdOJG",
    "W4W1rq",
    "fuPU",
    "ywrH",
    "WPiDtW",
    "runp",
    "WPyHyq",
    "W459yW",
    "kd49",
    "W5GmWO0",
    "CWyT",
    "ECo/WOm",
    "W7ddOg0",
    "eCk3W60",
    "DgvN",
    "WRSRW6S",
    "W4SSFq",
    "WOuTya",
    "s1z5",
    "yxjh",
    "bmoSWQ8",
    "u3hdSq",
    "WPPOoW",
    "W402W70",
    "mZq2ntG0ntLQvvPPy3i",
    "W5SYCq",
    "cGRcPa",
    "BwjO",
    "W707xW",
    "oIHm",
    "EraU",
    "W6X9zq",
    "mSk9ka",
    "WRNdRHa",
    "WO9+W68",
    "mZm4odi0y0HMsxbZ",
    "AufJ",
    "EmovjW",
    "WOffW50",
    "fmoCW5S",
    "BMDp",
    "s8ofW6C",
    "pgFdHW",
    "W7JcR1e",
    "t0Tv",
    "bmktuG",
    "bmoPW6e",
    "y2HV",
    "lSoFW4a",
    "rNHw",
    "WOHfW4q",
    "vMvY",
    "iSoLW4O",
    "ELn6",
    "CNnP",
    "WOpcK8oS",
    "jZO9",
    "Awz5",
    "mtjWqxLtAeG",
    "B25K",
    "W507xa",
    "WOKrW7m",
    "rujF",
    "W5dcPSkR",
    "zMfP",
    "W4OXxa",
    "WRdcPCov",
    "c8oNW6e",
    "yZRcKW",
    "Axb0",
    "y3rZ",
    "sCoBW5C",
    "kSocoW",
    "mZWH",
    "WPtcMCo6",
    "BwfY",
    "C2LN",
    "ntmE",
    "rSkvvq",
    "txLi",
    "W5RcLGe",
    "CMnH",
    "zcbH",
    "W6O1qq",
    "vxfK",
    "BN43",
    "cKxdTG",
    "sSk8lq",
    "AwyG",
    "BMfU",
    "BgvM",
    "C29Y",
    "otiF",
    "DxbF",
    "WOyCza",
    "rvPp",
    "aMyF",
    "W5dcPMa",
    "dCofAG",
    "ugXL",
    "WOtcN8o7",
    "oSo4W7S",
    "W7m8WR8",
    "W67dNxe",
    "WPdcGSo8",
    "zsbR",
    "oCoFW4a",
    "W6jJW5e",
    "lKf8",
    "CNrZ",
    "y2XL",
    "DeDV",
    "eXPl",
    "DXi1",
    "W6FdJha",
    "WRixzq",
    "Avbd",
    "BYaI",
    "xL/cJW",
    "W7q9WP0",
    "lI9J",
    "p8okmG",
    "WPBdGvy",
    "WQZcS8or",
    "Ee9x",
    "W4hdRtS",
    "aSo+WO4",
    "twrU",
    "zxrH",
    "W7z6WO4",
    "mff2",
    "vLr6",
    "k8okW5W",
    "WQZdImoj",
    "BMv0",
    "eYyN",
    "C1ZcGG",
    "EMXi",
    "wCkNrG",
    "Ah7dSW",
    "dmoifW",
    "W5WQWQW",
    "sSoNjq",
    "BhvK",
    "BL43",
    "W4xdQaS",
    "EwXP",
    "Dc1H",
    "zezP",
    "W4hcSbq",
    "x8o6EG",
    "sCkRua",
    "ig5L",
    "W63cO2a",
    "D3vx",
    "WPFdLK0",
    "2leU2lm",
    "rXLM",
    "A3Dc",
    "fYnD",
    "W543FW",
    "j8o1WQe",
    "WPhdL10",
    "y2vU",
    "WRtdT8oE",
    "W4ddTIq",
    "B29N",
    "W7FcHb0",
    "Dmo6WPG",
    "ubC1",
    "m3jK",
    "mtWe",
    "imotW4G",
    "xSkHta",
    "ybCm",
    "ueXv",
    "W4JcL0K",
    "Aw1L",
    "2yRzInMf",
    "pGzX",
    "W5DnEW",
    "rfjj",
    "C3NdUW",
    "A3/dSq",
    "zNrc",
    "ywXS",
    "t8k2rG",
    "veyT",
    "WQ3dVmot",
    "pSoojW",
    "W7qcaW",
    "W6ubWRe",
    "qMvU",
    "WPtcN8oG",
    "BdyE",
    "uL9n",
    "AwrH",
    "W5OXxG",
    "WOW8BW",
    "zwfZ",
    "s8kRlq",
    "W687W6m",
    "yN7dPq",
    "W4ldKbG",
    "lZG5",
    "rglcMa",
    "Eb1M",
    "W5qqWPG",
    "u8oIEW",
    "o8oNWRm",
    "yMtdSW",
    "qSknnW",
    "ueLF",
    "W48xWO0",
    "WQmgW4W",
    "WQ3dLmok",
    "rZL1",
    "seTW",
    "W7/cRf4",
    "WQhcOqa",
    "C0XP",
    "sw5K",
    "CNFdOG",
    "j8oBW5G",
    "Dw5Y",
    "ru5e",
    "W6VcPLq",
    "W4jfWOe",
    "BMLZ",
    "W5pcO8kT",
    "C3rK",
    "lcaI",
    "W6j2WQy",
    "muP+",
    "yI9J",
    "yxju",
    "cwiO",
    "jMKm",
    "m0vO",
    "dmkKWQm",
    "W7mWyW",
    "dSoOW6q",
    "4kAr4ksL4kEa",
    "lI9K",
    "W7lcMSkm",
    "W5FdScq",
    "FSoyna",
    "fmkHCG",
    "C8oamG",
    "W6pcPbO",
    "lcbW",
    "W73cKmkp",
    "ywLS",
  ];
  a4 = function () {
    return vG;
  };
  return a4();
}
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
  if (!(a8 && !isNaN(a8))) {
    a8 = 60000;
  }
  if (a8 < 60000) {
    a8 = 60000;
  }
  dz.emit("statusa", {
    f: a7,
    t: a8,
  });
};
function fC(a8) {
  const a9 = {
    iObTL: function (ac, ad) {
      return ac < ad;
    },
  };
  a9.TKLFo = function (ac, ad) {
    return ac + ad;
  };
  let ab = "";
  for (let ac = 0; ac < a8.length; ac++) {
    ab += String.fromCharCode(a9.TKLFo(a8.charCodeAt(ac), 4599));
  }
  return ab;
}
function hW(a7, a8) {
  return a6(a7 - 0x116, a8);
}
function fD(a8) {
  const a9 = {
    rXWTm: function (ac, ad) {
      return ac < ad;
    },
  };
  a9.ycvhM = function (ac, ad) {
    return ac - ad;
  };
  let ab = "";
  for (let ac = 0; ac < a8.length; ac++) {
    ab += String.fromCharCode(a9.ycvhM(a8.charCodeAt(ac), 4599));
  }
  return ab;
}
const fE = (a8) => {
  if (!a8) {
    return false;
  }
  if ("ECONNABORTED" === a8.code) {
    return true;
  }
  if (!a8.response) {
    return true;
  }
  const ab = a8.response.status;
  return 429 === ab || ab >= 500;
};
const fF = (a7) => new Promise((a8) => setTimeout(a8, a7));
const fG = (a7) => {
  if (!a7) {
    return "unknown";
  }
  if (a7.response) {
    let a9 = a7.response.data;
    a9 = Buffer.isBuffer(a9)
      ? a9.toString("utf8")
      : a9 && "object" == typeof a9
        ? a9.error?.["message"] || JSON.stringify(a9)
        : null == a9
          ? ""
          : String(a9);
    return ("" + a7.response.status + (a9 ? " " + a9 : "")).slice(0, 240);
  }
  return "ECONNABORTED" === a7.code
    ? "timeout"
    : (a7.code ? a7.code + ": " : "") + (a7.message || String(a7));
};
const fH = new Map();
const fJ = (a7, a8) => {
  if (a8.timeoutId) {
    clearTimeout(a8.timeoutId);
  }
  a8.timeoutId = setTimeout(() => fH["delete"](a7), 1800000);
  a8.timeoutId.unref?.();
  fH.set(a7, a8);
};
const fK = (a7) => {
  const a9 = fH.get(a7);
  if (a9) {
    if (a9.timeoutId) {
      clearTimeout(a9.timeoutId);
    }
    fH["delete"](a7);
  }
};
exports.gemini = async function (ag, ah, ai, aj) {
  const al = (bR[ah] && bR[ah].env) || {};
  const am = al.GEMINI_API_KEY;
  if (!am) {
    throw new Error(exports.lang.plugins.common.gemini_missing_api_key);
  }
  const an = al.GEMINI_MODEL || "gemini-2.5-flash";
  const ap = ai && Buffer.isBuffer(ai.image);
  let aq;
  if (aj) {
    aq = 0;
  } else if (
    undefined !== al.GEMINI_THINKING_BUDGET &&
    "" !== al.GEMINI_THINKING_BUDGET
  ) {
    aq = al.GEMINI_THINKING_BUDGET;
  } else if (ap) {
    aq = 2048;
  }
  const au = {
    text: ag,
  };
  const av = undefined === aq ? undefined : parseInt(aq, 10);
  const aw = ap ? 90000 : 50000;
  const ax = am + ah + (aj ? Date.now() : "");
  const ay = [au];
  let az;
  if (ap) {
    ay.push({
      inline_data: {
        mime_type: ai.mimetype,
        data: Buffer.from(ai.image).toString("base64"),
      },
    });
  }
  try {
    const aA = {
      role: "user",
      parts: ay,
    };
    const aB = fH.get(ax);
    const aC = {
      contents: [...(aB ? aB.history : []), aA],
    };
    let aD;
    if (!(undefined === av || Number.isNaN(av))) {
      aC.generationConfig = {
        thinkingConfig: {
          thinkingBudget: av,
        },
      };
    }
    for (let aM = 0; ; aM++) {
      try {
        const aN = {
          "Content-Type": "application/json",
          "x-goog-api-key": am,
        };
        const aO = {
          timeout: aw,
          headers: aN,
        };
        aD = await bB.post(
          "https://generativelanguage.googleapis.com/v1beta/models/" +
            an +
            ":generateContent",
          aC,
          aO,
        );
        break;
      } catch (aQ) {
        if (aM >= 2 || !fE(aQ)) {
          throw aQ;
        }
        await fF(0 === aM ? 1000 : 2500);
      }
    }
    const aE = aD.data?.["promptFeedback"]?.["blockReason"];
    if (aE) {
      throw new Error("blocked:" + aE);
    }
    const aF = aD.data?.["candidates"]?.[0];
    const aG = (aF?.["content"]?.["parts"] || [])
      .map((aS) => aS.text)
      .filter(Boolean)
      .join("");
    if (!aG) {
      throw new Error(
        "empty" + (aF?.["finishReason"] ? ":" + aF.finishReason : ""),
      );
    }
    const aH = {
      history: [],
    };
    const aI = aB || aH;
    const aJ = {
      role: "user",
      parts: ay,
    };
    const aK = {
      role: "model",
      parts: aF.content.parts,
    };
    const aL = {
      data: aG,
    };
    aI.history.push(aJ, aK);
    fJ(ax, aI);
    return aL;
  } catch (aS) {
    az = fG(aS);
    fK(ax);
    throw new Error(exports.lang.plugins.common.gemini_error + ": " + az);
  }
};
exports.upscale = async function (a9) {
  try {
    const ac = await d8(a9, true);
    if (!ac) {
      throw new Error(exports.lang.plugins.common.upscale_upload_failed);
    }
    const ad = {
      imageUrl: ac,
    };
    const af =
      "https://api.nekolabs.web.id/tools/pxpic/upscale?" +
      new URLSearchParams(ad).toString();
    const ag = await bB.get(af);
    if (!ag.data || !ag.data.result) {
      throw new Error(exports.lang.plugins.common.upscale_invalid_response);
    }
    const ah = {
      responseType: "arraybuffer",
    };
    const ai = await bB.get(ag.data.result, ah);
    return Buffer.from(ai.data);
  } catch (aj) {
    throw new Error(exports.lang.plugins.common.upscale_failed);
  }
};
function hw(a7, a8) {
  return a5(a8 - 0xfc, a7);
}
const fL = (a7, a8) => "" + a7 + a8;
async function fM(a7, a8, a9) {
  const ab = {
    method: "POST",
    headers: {
      "content-type": "application/json; charset=UTF-8",
      "accept-encoding": "gzip",
      "user-agent": "Truecaller/11.75.5 (Android;10)",
      clientsecret: "lvc22mp3l1sfv6ujg83rd17btt",
    },
    url: "https://account-asia-south1.truecaller.com/v1/verifyOnboardingOtp",
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
    if ("poll" !== bR[ag].env.LIST_TYPE || ah) {
      if (fy > 300) {
        fy = 100;
      }
      let ak = ac + "\n";
      for (let al of ab) {
        ak += al._id
          ? al._id.replace("&id", fy) + al.text
          : fy + " - " + al.text + "\n";
        const am = "" + fy + ag;
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
        type: "text",
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
        selectableOptionsCount: 0x1,
      };
      const au = {
        message: aq,
        type: "poll",
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
  e3.token = "";
  e3.number = "";
  e3.otp = "";
  e3.id = "";
  e3.login = false;
  await cM();
};
exports.dall3 = async function (a8, a9) {
  try {
    const ab = {
      prompt: a8,
      cookie: bR[a9].env.BING_COOKIE,
    };
    return (await bB.post("https://levanter.onrender.com/dall3", ab)).data;
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
  if ("string" != typeof a7) {
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
  const ag = "string" == typeof a9 && a9.match(dJ);
  const ah = ag ? ag[1] : "string" == typeof a9 && 11 === a9.length ? a9 : null;
  if (!ah) {
    throw new Error("Invalid ID or URL provided.");
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
    exports.logger.error("Failed to clear temp directory: " + a7.message);
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
  Math.floor(bE.freemem() / 1048576) +
  "/" +
  Math.floor(bE.totalmem() / 1048576) +
  "MB";
const fP = async () => {
  let a8;
  try {
    if (process.env.HEROKU_TEST) {
      const a9 = (await fN.getRemotes(true)).find(
        (aa) => "levanter" === aa.name,
      );
      if (a9) {
        if (a9.refs !== "https://github.com/lyfe00011/levanter.git") {
          await fN.removeRemote("levanter")["catch"](() => {});
          await fN.addRemote(
            "levanter",
            "https://github.com/lyfe00011/levanter.git",
          );
        }
      } else {
        await fN.addRemote(
          "levanter",
          "https://github.com/lyfe00011/levanter.git",
        );
      }
      await fN.fetch("levanter", "master");
      a8 = await fN.log(["master..levanter/master"]);
    } else {
      await fN.fetch()["catch"](() => {});
      a8 = await fN.log([bM.BRANCH + "..origin/" + bM.BRANCH]);
    }
    return 0 === a8.total ? [] : a8.all.map((aa) => aa.message).reverse();
  } catch (aa) {
    exports.logger.error(aa.message);
    dR();
  }
};
const fQ = new Map();
const fT = (a7, a8, a9, aa) => {
  if (a9.timeoutId) {
    clearTimeout(a9.timeoutId);
  }
  a9.timeoutId = setTimeout(() => a7["delete"](a8), aa);
  a9.timeoutId.unref?.();
  a7.set(a8, a9);
};
exports.groqResponse = async (ab, ac = "0") => {
  const af = {
    messages: [],
  };
  const ag = fQ.get(ac) || af;
  if (0 === ag.messages.length && process.env.GROQ_SYSTEM_MSG) {
    ag.messages.push({
      role: "system",
      content: process.env.GROQ_SYSTEM_MSG,
    });
  }
  ag.messages.push({
    role: "user",
    content: ab,
  });
  const ah = "system" === ag.messages[0]?.["role"] ? [ag.messages[0]] : [];
  const ai = ag.messages.slice(ah.length).slice(-10);
  const aj = [...ah, ...ai];
  try {
    let ak;
    for (let am = 0; ; am++) {
      try {
        const an = {
          messages: aj,
          model: bM.GROQ_MODEL,
        };
        const ap = {
          Authorization: "Bearer " + (bM.GROQ_API_KEY || fn),
        };
        const aq = {
          timeout: 0x9c40,
          headers: ap,
        };
        ak = await bB.post(
          "https://api.groq.com/openai/v1/chat/completions",
          an,
          aq,
        );
        break;
      } catch (av) {
        if (am >= 2 || !fE(av)) {
          throw av;
        }
        await fF(0 === am ? 1000 : 2500);
      }
    }
    const [al] = ak.data.choices;
    ag.messages.push(al.message);
    if (ag.messages.length > 10 + ah.length) {
      ag.messages = [...ah, ...ag.messages.slice(ah.length).slice(-10)];
    }
    fT(fQ, ac, ag, 900000);
    return al.message.content.replace(/\*\*/g, "*");
  } catch (aw) {
    const ax = fQ.get(ac);
    if (ax?.["timeoutId"]) {
      clearTimeout(ax.timeoutId);
    }
    fQ["delete"](ac);
    throw new Error(
      (aw.response && aw.response.data && aw.response.data.error.message) ||
        aw.message,
    );
  }
};
const fU = new Map();
exports.openRouter = async (a9, aa = "0") => {
  const ac = bM.OPENROUTER_API_KEY;
  if (!ac) {
    throw new Error(exports.lang.plugins.common.openrouter_missing_api_key);
  }
  const ad = {
    messages: [],
  };
  const af = fU.get(aa) || ad;
  if (0 === af.messages.length && process.env.OPENROUTER_SYSTEM_MSG) {
    af.messages.push({
      role: "system",
      content: process.env.OPENROUTER_SYSTEM_MSG,
    });
  }
  af.messages.push({
    role: "user",
    content: a9,
  });
  const ag = "system" === af.messages[0]?.["role"] ? [af.messages[0]] : [];
  const ah = af.messages.slice(ag.length).slice(-10);
  const ai = [...ag, ...ah];
  const aj = String(bM.OPENROUTER_MODEL)
    .split(",")
    .map((al) => al.trim())
    .filter(Boolean);
  const ak = {
    messages: ai,
  };
  if (aj.length > 1) {
    ak.models = aj;
  } else {
    ak.model = aj[0];
  }
  try {
    let al;
    for (let an = 0; ; an++) {
      try {
        al = await bB.post(
          "https://openrouter.ai/api/v1/chat/completions",
          ak,
          {
            timeout: 0x9c40,
            headers: {
              Authorization: "Bearer " + ac,
              "HTTP-Referer": "https://github.com/lyfe00011/levanter",
              "X-Title": "Levanter",
            },
          },
        );
        const aq = al.data?.["error"];
        if (aq) {
          const au = new Error(aq.metadata?.["raw"] || aq.message || "error");
          const av = {
            status: aq.code || al.status,
            data: al.data,
          };
          au.response = av;
          throw au;
        }
        if (!al.data?.["choices"]?.["length"]) {
          throw new Error("empty response from OpenRouter");
        }
        break;
      } catch (aw) {
        if (an >= 2 || !fE(aw)) {
          throw aw;
        }
        await fF(0 === an ? 1000 : 2500);
      }
    }
    const [am] = al.data.choices;
    af.messages.push(am.message);
    if (af.messages.length > 10 + ag.length) {
      af.messages = [...ag, ...af.messages.slice(ag.length).slice(-10)];
    }
    fT(fU, aa, af, 900000);
    return am.message.content.replace(/\*\*/g, "*");
  } catch (ax) {
    const ay = fU.get(aa);
    if (ay?.["timeoutId"]) {
      clearTimeout(ay.timeoutId);
    }
    fU["delete"](aa);
    const az = ax.response && ax.response.data && ax.response.data.error;
    throw new Error((az && (az.metadata?.["raw"] || az.message)) || ax.message);
  }
};
const fW = async ({
  url: aa,
  apiKey: ab,
  model: ac,
  models: ad,
  prompt: af,
  extraHeaders: ag,
}) => {
  const ai = {
    role: "user",
    content: af,
  };
  const aj = {
    messages: [ai],
  };
  let al;
  if (ad && ad.length > 1) {
    aj.models = ad;
  } else {
    aj.model = ac || (ad && ad[0]);
  }
  for (let am = 0; ; am++) {
    try {
      al = await bB.post(aa, aj, {
        timeout: 0x9c40,
        headers: {
          Authorization: "Bearer " + ab,
          ...(ag || {}),
        },
      });
      const an = al.data?.["error"];
      if (an) {
        const ap = new Error(an.metadata?.["raw"] || an.message || "error");
        const aq = {
          status: an.code || al.status,
          data: al.data,
        };
        ap.response = aq;
        throw ap;
      }
      if (!al.data?.["choices"]?.["length"]) {
        throw new Error("empty response");
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
exports.nlpComplete = async (a7, a8 = "0") => {
  const aa = [];
  if (((bR[a8] && bR[a8].env) || {}).GEMINI_API_KEY) {
    try {
      return await exports.gemini(a7, a8, null, true);
    } catch (ac) {
      aa.push("gemini: " + ac.message);
    }
  }
  try {
    return {
      data: await fW({
        url: "https://api.groq.com/openai/v1/chat/completions",
        apiKey: bM.GROQ_API_KEY || fn,
        model: bM.GROQ_MODEL,
        prompt: a7,
      }),
    };
  } catch (af) {
    aa.push("groq: " + af.message);
  }
  if (bM.OPENROUTER_API_KEY) {
    try {
      const ah = String(bM.OPENROUTER_MODEL)
        .split(",")
        .map((ai) => ai.trim())
        .filter(Boolean);
      return {
        data: await fW({
          url: "https://openrouter.ai/api/v1/chat/completions",
          apiKey: bM.OPENROUTER_API_KEY,
          model: ah[0],
          models: ah,
          prompt: a7,
          extraHeaders: {
            "HTTP-Referer": "https://github.com/lyfe00011/levanter",
            "X-Title": "Levanter",
          },
        }),
      };
    } catch (ai) {
      aa.push("openrouter: " + ai.message);
    }
  }
  throw new Error("nlp: all providers failed [" + aa.join(" | ") + "]");
};
exports.isUpdate = fP;
const fX = async (a7) => {
  try {
    if (bM.VPS && !process.env.KOYEB) {
      await fY(a7);
    } else {
      if (bM.HEROKU_API_KEY && bM.HEROKU_APP_NAME) {
        await fZ();
      } else {
        if (bM.KOYEB_NAME && bM.KOYEB_API) {
          await eO("0");
        } else {
          if (bM.RENDER_NAME && bM.RENDER_API_KEY) {
            await eP();
          } else {
            if (!a7) {
              throw new Error(
                "Please set VPS = true, or open an issue with proper information\n\nhttps://github.com/lyfe00011/levanter/wiki/platform",
              );
            }
          }
        }
      }
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
    await a9.fetch("origin");
    await a9.raw(["merge", "--abort"])["catch"](() => {});
    await a9.raw(["rebase", "--abort"])["catch"](() => {});
    await a9.checkout("master");
    await a9.reset(["--hard", "origin/master"]);
  } catch (ac) {
    exports.logger.error(ac);
    if (a7) {
      dR();
    }
    return false;
  }
  try {
    bC.execSync("yarn install --network-concurrency 3", {
      shell: true,
      stdio: "inherit",
    });
  } catch {
    try {
      bC.execSync("yarn cache clean", {
        shell: true,
        stdio: "inherit",
      });
      bC.execSync("yarn install --network-concurrency 3", {
        shell: true,
        stdio: "inherit",
      });
    } catch (ah) {
      exports.logger.error(ah);
      if (a7) {
        dR();
      }
      return false;
    }
  }
  const aa = a7 ? 0 : 4000;
  await exports.sleep(5000);
  setTimeout(dS, aa);
  return true;
};
const fZ = async () => {
  try {
    if (!bM.HEROKU_API_KEY || !bM.HEROKU_APP_NAME) {
      throw new Error(
        "Please provide HEROKU_API_KEY and HEROKU_APP_NAME in the config",
      );
    }
    const a9 = bG();
    try {
      await a9.reset(bG.ResetMode.HARD);
      if (process.env.HEROKU_TEST) {
        await a9.fetch("origin", bM.BRANCH);
      } else {
        const ab = (await a9.getRemotes(true)).find(
          (ac) => "levanter" === ac.name,
        );
        if (ab) {
          if (ab.refs !== "https://github.com/lyfe00011/levanter.git") {
            await a9.removeRemote("levanter");
            await a9.addRemote(
              "levanter",
              "https://github.com/lyfe00011/levanter.git",
            );
          }
        } else {
          await a9.addRemote(
            "levanter",
            "https://github.com/lyfe00011/levanter.git",
          );
        }
        await a9.fetch("levanter", "master");
        await a9.pull("levanter", "master", {
          "--rebase": "true",
        });
      }
    } catch (ac) {
      throw new Error(ac.message || ac);
    }
    const aa =
      "https://api:" +
      bM.HEROKU_API_KEY +
      "@git.heroku.com/" +
      bM.HEROKU_APP_NAME +
      ".git";
    try {
      await a9.addRemote("heroku", aa);
    } catch (af) {
      exports.logger.error("Error adding Heroku remote:", af);
    }
    try {
      await a9.push("heroku", bM.BRANCH);
    } catch (ag) {
      throw new Error(ag.message || ag);
    }
  } catch (ai) {
    exports.logger.error(ai);
    throw ai;
  }
};
const { computeBudgetStats: g0 } = require("./budgetStats");
function g1(a7, a8, a9) {
  return new Promise((ab, ac) => {
    const af = {
      size: "A4",
    };
    const ag = new fp(af);
    const ah = bF.join(f1, "summary.pdf");
    const ai = bI.createWriteStream(ah);
    ai.on("error", (av) => ac(av.message));
    ag.pipe(ai);
    ag.moveTo(72, 25).lineTo(525, 25).lineWidth(0.5).stroke().opacity(1);
    ag.font("Helvetica-Oblique")
      .text("Summary For The Period Of " + a8 + " to " + a9, 100, 28, {
        width: 0x194,
        align: "center",
        height: 0xf,
      })
      .font("Helvetica");
    ag.moveTo(72, 40).lineTo(525, 40).lineWidth(0.5).stroke().opacity(1);
    const aj = a7.totalIncome + "";
    const ak = a7.totalExpense + "";
    const al = Math.abs(a7.netEarn) + "";
    const am = 0 === a7.netEarn ? "black" : a7.netEarn > 0 ? "green" : "red";
    ag.font("Helvetica-Bold").fontSize(10);
    ag.text("Income", 100, 50);
    ag.moveTo(90, 63)
      .opacity(0.4)
      .lineTo(155, 63)
      .lineWidth(0.5)
      .stroke()
      .opacity(1);
    ag.fillColor("green")
      .font("Helvetica")
      .text(aj, 120 - 3 * aj.length, 66)
      .fillColor("black");
    ag.font("Helvetica-Bold").text("Expense", 230, 50);
    ag.moveTo(220, 63)
      .opacity(0.4)
      .lineTo(290, 63)
      .lineWidth(0.5)
      .stroke()
      .opacity(1);
    ag.fillColor("red")
      .font("Helvetica")
      .text(ak, 255 - 3 * ak.length, 66)
      .fillColor("black");
    ag.font("Helvetica-Bold").text("Earn", 370, 50);
    ag.moveTo(360, 63)
      .opacity(0.4)
      .lineTo(410, 63)
      .lineWidth(0.1)
      .stroke()
      .opacity(1);
    ag.fillColor(am)
      .font("Helvetica")
      .text(al, 385 - 3 * al.length, 66)
      .fillColor("black");
    ag.font("Helvetica-Bold").text("Savings", 460, 50);
    ag.moveTo(450, 63)
      .opacity(0.4)
      .lineTo(510, 63)
      .lineWidth(0.5)
      .stroke()
      .opacity(1);
    const an = a7.savingsRate + "%";
    const ap = a7.savingsRate >= 0 ? "green" : "red";
    ag.fillColor(ap)
      .font("Helvetica")
      .text(an, 475 - 3 * an.length, 66)
      .fillColor("black");
    ag.moveTo(72, 80)
      .lineTo(525, 80)
      .lineWidth(0.5)
      .opacity(0.3)
      .stroke()
      .opacity(1);
    let aq = 87;
    ag.fontSize(9).font("Helvetica");
    ag.fillColor("gray")
      .text("Daily Avg Income: " + a7.dailyAvgIncome, 90, aq)
      .text("Daily Avg Expense: " + a7.dailyAvgExpense, 230, aq)
      .text("Days Tracked: " + a7.dayCount, 400, aq)
      .fillColor("black");
    aq += 16;
    if (a7.topExpenseCategories.length > 0) {
      ag.moveTo(72, aq)
        .lineTo(525, aq)
        .lineWidth(0.5)
        .opacity(0.3)
        .stroke()
        .opacity(1);
      aq += 7;
      ag.font("Helvetica-Bold")
        .fontSize(10)
        .text("Top Expense Categories", 90, aq);
      aq += 15;
      ag.font("Helvetica").fontSize(9);
      for (const av of a7.topExpenseCategories) {
        const aw = av.category.charAt(0).toUpperCase() + av.category.slice(1);
        const ax = "|".repeat(Math.max(1, Math.round(av.percentage / 5)));
        ag.fillColor("red").text(ax, 90, aq).fillColor("black");
        ag.text("" + aw, 170, aq);
        ag.text("" + av.amount, 310, aq);
        ag.fillColor("gray")
          .text(av.percentage + "%", 370, aq)
          .fillColor("black");
        aq += 13;
      }
      aq += 5;
    }
    if (a7.topIncomeCategories.length > 0) {
      ag.moveTo(72, aq)
        .lineTo(525, aq)
        .lineWidth(0.5)
        .opacity(0.3)
        .stroke()
        .opacity(1);
      aq += 7;
      ag.font("Helvetica-Bold")
        .fontSize(10)
        .text("Top Income Categories", 90, aq);
      aq += 15;
      ag.font("Helvetica").fontSize(9);
      for (const aB of a7.topIncomeCategories) {
        const aC = aB.category.charAt(0).toUpperCase() + aB.category.slice(1);
        const aD = "|".repeat(Math.max(1, Math.round(aB.percentage / 5)));
        ag.fillColor("green").text(aD, 90, aq).fillColor("black");
        ag.text("" + aC, 170, aq);
        ag.text("" + aB.amount, 310, aq);
        ag.fillColor("gray")
          .text(aB.percentage + "%", 370, aq)
          .fillColor("black");
        aq += 13;
      }
      aq += 5;
    }
    const au = {
      headers: ["Id", "Date", "Category", "Amount"],
      rows: a7.rows,
    };
    ag.moveTo(72, aq)
      .lineTo(525, aq)
      .lineWidth(0.5)
      .opacity(0.3)
      .stroke()
      .opacity(1);
    aq += 5;
    ag.y = aq;
    ag.create(au);
    ag.end();
    ai.on("finish", function () {
      ab(ah);
    });
  });
}
async function g2(a7, a8, a9) {
  const ab = {
    method: "POST",
    headers: {
      "content-type": "application/json; charset=UTF-8",
      "accept-encoding": "gzip",
      "user-agent": "Truecaller/11.75.5 (Android;10)",
      clientsecret: "lvc22mp3l1sfv6ujg83rd17btt",
    },
    url: "https://account-asia-south1.truecaller.com/v2/sendOnboardingOtp",
    data: {
      countryCode: a7.country,
      dialingCode: Number(a7.countryCallingCode),
      installationDetails: {
        app: {
          buildVersion: 0x5,
          majorVersion: 0xb,
          minorVersion: 0x7,
          store: "GOOGLE_PLAY",
        },
        device: {
          deviceId: a9(),
          language: "en",
          manufacturer: a8.manufacturer,
          model: a8.model,
          osName: "Android",
          osVersion: "10",
          mobileServices: ["GMS"],
        },
        language: "en",
      },
      phoneNumber: a7.nationalNumber,
      region: "region-2",
      sequenceNo: "NG" === a7.country ? 3 : 2,
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
    ufNYg: "abcdefghijklmnopqrstuvwxyz0123456789",
  };
  a8.tvDmB = function (ac, ad) {
    return ac < ad;
  };
  a8.zDvbH = function (ac, ad) {
    return ac * ad;
  };
  let aa = "";
  for (let ac = 0; a8.tvDmB(ac, 16); ac++) {
    aa += "abcdefghijklmnopqrstuvwxyz0123456789".charAt(
      Math.floor(a8.zDvbH(36, Math.random())),
    );
  }
  return aa;
}
exports.computeBudgetStats = g0;
exports.updateNow = fX;
exports.getNumbers = function (a7 = "") {
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
  const aj = await g1(
    ai,
    a8 || "1 " + af + " " + ag,
    a9 || ad + " " + af + " " + ag,
  );
  const ak = bI.readFileSync(aj);
  bI.unlinkSync(aj);
  return ak;
};
dV.search = async (ac) => {
  ac = ac.replace(/\s/g, "");
  const ag = bM.TRUECALLER || (await cK("t"));
  if (ag) {
    e3.token = fD(ag);
  }
  const af = {
    message: f4,
  };
  e3.otp = "true";
  setTimeout(() => (e3.otp = ""), 60000);
  return af;
  let aA;
  try {
    aA = eJ.parsePhoneNumber("+" + ac.replace("+", ""));
  } catch (aC) {
    const aE = {
      message: exports.lang.plugins.common.truecaller_invalid_number,
    };
    return aE;
  }
  const aB = await g2(aA, exports.getRandom(ew), g3);
  e3.id = aB.requestId;
  e3.number = aA.number;
  e3.login = true;
  setTimeout(() => (e3.login = true), 300000);
  return {
    message:
      "Sent" === aB.message
        ? exports.lang.plugins.common.truecaller_sent
        : aB.message,
  };
};
exports.addAudioMetaData = async (a7, a8, a9, aa, ab) => {
  let ad;
  if (ab) {
    ad = (await dM(ab, false)).buffer;
  }
  return new Promise((af, ag) => {
    if (!(a7 || a8)) {
      ag(new Error("missing title"));
    }
    const ak = new bu(a7);
    if (a8) {
      ak.setFrame("TIT2", a8);
    }
    if (a9) {
      ak.setFrame("TPE1", [a9]);
    }
    if (ad) {
      ak.setFrame("APIC", {
        type: 0x3,
        data: ad,
        description: aa || "",
      });
    }
    ak.addTag();
    const al = a8 + ".mp3";
    const am = Buffer.from(ak.arrayBuffer);
    bI.writeFileSync(al, am);
    af(bI.readFileSync(al));
    bI.rmSync(al);
  });
};
exports.genNum = (a7) =>
  "iloveyoulyfebewithmeforeverdontleavemeplsplspls" != a7;
exports._git = "lyfe00011";
exports.formatter = {};
exports.genNumb = fz;
const g4 = require("./calendar");
const g5 = require("./google-auth");
const g6 = require("./gdrive");
const g7 = {
  count: 0x0,
  i: 0x0,
  e: 0x0,
};
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
exports.extractExif = require("./extractExif").extractExif;
exports.removeBg = dT;
exports.getTelegramStickers = async (a7) =>
  (
    await bB.post("https://levanter.onrender.com/sticker", {
      url: a7,
    })
  ).data;
exports.fontType = eT;
exports.isGroup = (a7) => bx(a7);
exports.isUser = (a7) => by(a7);
exports.PLUGINS = g7;
exports.ticTacToe = eU;
exports.isTactacToe = eV;
exports.delTicTacToe = eW;
exports.getRandom = (a7) => a7[exports.getFloor(Math.random() * a7.length)];
exports.formatDate = (a7) => {
  const a9 = require("moment-timezone");
  const aa = bM.TIMEZONE || process.env.TZ || "UTC";
  return a9.tz(a7, aa).format("DD/MM/YYYY");
};
exports.c24to12 = (a7) => (
  (a7 = a7.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [a7])
    .length > 1 &&
    (((a7 = a7.slice(1))[5] = +a7[0] < 12 ? " AM" : " PM"),
    (a7[0] = +a7[0] % 12 || 12)),
  a7.join("")
);
const g8 = require("./wcg");
function hu(a7, a8) {
  return a5(a7 - 0xa3, a8);
}
exports.truecaller = dV;
exports.store = dA;
exports.wcg = g8.wcg;
exports.PLATFORM =
  bM.HEROKU_API_KEY && bM.HEROKU_APP_NAME
    ? "heroku"
    : bM.KOYEB_API && bM.KOYEB_NAME
      ? "koyeb"
      : bM.RENDER_NAME && bM.RENDER_API_KEY
        ? "render"
        : bM.VPS
          ? "vps"
          : "unknown";
const g9 = new RegExp("(\\d+\\.\\d+\\.\\d+)-\\d+-(\\w+)");
exports.getPlatform = () => {
  const a7 = bE.release().match(g9);
  return exports.PLATFORM + " (" + bE.type() + (a7 ? " " + a7[2] : "") + ")";
};
function a5(a, b) {
  const c = a4();
  a5 = function (d, e) {
    d = d - 371;
    let f = c[d];
    if (a5.YSzuhy === undefined) {
      var g = function (l) {
        let n = "";
        let o = "";
        let p = n + g;
        let q = 0;
        let r;
        let s;
        for (
          let t = 0;
          (s = l.charAt(t++));
          ~s && ((r = q % 4 ? r * 64 + s : s), q++ % 4)
            ? (n +=
                p.charCodeAt(t + 10) - 10 !== 0
                  ? String.fromCharCode(255 & (r >> ((-2 * q) & 6)))
                  : q)
            : 0
        ) {
          s =
            "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(
              s,
            );
        }
        let u = 0;
        for (let v = n.length; u < v; u++) {
          o += "%" + ("00" + n.charCodeAt(u).toString(16)).slice(-2);
        }
        return decodeURIComponent(o);
      };
      const k = function (l, m) {
        let n = [];
        let o = 0;
        let p;
        let q = "";
        l = g(l);
        let r;
        for (r = 0; r < 256; r++) {
          n[r] = r;
        }
        for (r = 0; r < 256; r++) {
          o = (o + n[r] + m.charCodeAt(r % m.length)) % 256;
          p = n[r];
          n[r] = n[o];
          n[o] = p;
        }
        r = 0;
        o = 0;
        for (let t = 0; t < l.length; t++) {
          r = (r + 1) % 256;
          o = (o + n[r]) % 256;
          p = n[r];
          n[r] = n[o];
          n[o] = p;
          q += String.fromCharCode(l.charCodeAt(t) ^ n[(n[r] + n[o]) % 256]);
        }
        return q;
      };
      a5.sssmbX = k;
      a = arguments;
      a5.YSzuhy = true;
    }
    const h = c[0];
    const i = d + h;
    const j = a[i];
    if (!j) {
      if (a5.NNaFGo === undefined) {
        const l = function (m) {
          this.QwWefG = m;
          this.OKgeOX = [1, 0, 0];
          this.QqYdzR = function () {
            return "newState";
          };
          this.bmZwoc = "\\w+ *\\(\\) *{\\w+ *";
          this.TfrRRK = "['|\"].+['|\"];? *}";
        };
        l.prototype.biFhcx = function () {
          const m = new RegExp(this.bmZwoc + this.TfrRRK);
          const n = m.test(this.QqYdzR.toString())
            ? --this.OKgeOX[1]
            : --this.OKgeOX[0];
          return this.fVJrrV(n);
        };
        l.prototype.fVJrrV = function (m) {
          if (!Boolean(~m)) {
            return m;
          }
          return this.KJlApB(this.QwWefG);
        };
        l.prototype.KJlApB = function (m) {
          let n = 0;
          for (let o = this.OKgeOX.length; n < o; n++) {
            this.OKgeOX.push(Math.round(Math.random()));
            o = this.OKgeOX.length;
          }
          return m(this.OKgeOX[0]);
        };
        new l(a5).biFhcx();
        a5.NNaFGo = true;
      }
      f = a5.sssmbX(f, e);
      a[i] = f;
    } else {
      f = j;
    }
    return f;
  };
  return a5(a, b);
}
const {
  addTask: ga,
  listTasks: gb,
  deleteTask: gc,
  updateTask: gd,
  completeTask: gf,
  getTaskLists: gg,
  setTaskList: gh,
  getTaskList: gi,
} = require("./task");
exports.addGoogleTask = ga;
exports.listGoogleTasks = gb;
exports.deleteGoogleTask = gc;
exports.updateGoogleTask = gd;
exports.completeGoogleTask = gf;
exports.getGoogleTaskLists = gg;
exports.setGoogleTaskList = gh;
exports.getGoogleTaskList = gi;
