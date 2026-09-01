(function (a7, a8) {
  const a9 = a7();
  while (true) {
    try {
      const aa =
        (-parseInt(a6(1209, 0x7db)) / 1) * (-parseInt(a5(1280, ")yQp")) / 2) +
        (-parseInt(a6(2356, 0xc57)) / 3) * (parseInt(a5(3352, "jBWO")) / 4) +
        -parseInt(a5(6911, "KO$]")) / 5 +
        (parseInt(a6(4170, 0xadc)) / 6) * (-parseInt(a6(4804, 0xb07)) / 7) +
        (parseInt(a6(4592, 0xf63)) / 8) * (parseInt(a5(1574, "dI!i")) / 9) +
        -parseInt(a5(1281, "g]id")) / 10 +
        (-parseInt(a5(3491, "LiH[")) / 11) * (-parseInt(a5(2735, "GxEY")) / 12);
      if (aa === a8) {
        break;
      } else {
        a9.push(a9.shift());
      }
    } catch (ab) {
      a9.push(a9.shift());
    }
  }
})(a4, 219372);
const bf = (function () {
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
const bg = bf(this, function () {
  return bg
    .toString()
    .search("(((.+)+)+)+$")
    .toString()
    .constructor(bg)
    .search("(((.+)+)+)+$");
});
bg();
const bh = (function () {
  const a8 = {
    FyIFn: function (ab, ac) {
      return ab === ac;
    },
  };
  a8.gtPeG = "true";
  a8.oWQhU = function (ab, ac) {
    return ab + ac;
  };
  a8.LOjpX = " PLUGIN INSTALL Err: ";
  a8.PcqTn = function (ab, ac) {
    return ab !== ac;
  };
  a8.smqye = "gbGEM";
  a8.AgAer = "pJgrn";
  a8.xJfYr = "APAoe";
  a8.saUGo = "LQptM";
  let aa = true;
  return function (ab, ac) {
    const ad = {
      LhBnB: function (af, ag) {
        return a8.oWQhU(af, ag);
      },
      iLibJ: function (af, ag) {
        return a8.oWQhU(af, ag);
      },
      khxyj: a8.LOjpX,
      XPeYB: function (af, ag) {
        return a8.PcqTn(af, ag);
      },
      PWYpn: a8.smqye,
      GAAaF: a8.AgAer,
      pvHQl: a8.xJfYr,
    };
    if (a8.saUGo === a8.saUGo) {
      const af = aa
        ? function () {
            if (a8.PcqTn(ad.PWYpn, ad.GAAaF)) {
              if (ac) {
                if (a8.PcqTn(ad.pvHQl, ad.pvHQl)) {
                  aa.logger.error(a8.oWQhU(a8.oWQhU(ab, ad.khxyj), ac));
                } else {
                  const ah = ac.apply(ab, arguments);
                  ac = null;
                  return ah;
                }
              }
            } else {
              this.sessions[a8].connect(() => ab());
            }
          }
        : function () {};
      aa = false;
      return af;
    } else {
      return void (
        a8.gtPeG === ab.env.DEBUG_RESTART &&
        ac.logger.warn(
          "[" +
            this.session_name +
            "] findLid error for " +
            ad +
            ": " +
            af.message,
        )
      );
    }
  };
})();
const bi = bh(this, function () {
  const a8 = function () {
    let ad;
    try {
      ad = Function('return (function() {}.constructor("return this")( ));')();
    } catch (ag) {
      ad = window;
    }
    return ad;
  };
  const a9 = a8();
  const aa = (a9.console = a9.console || {});
  const ab = ["log", "warn", "info", "error", "exception", "table", "trace"];
  for (let ac = 0; ac < ab.length; ac++) {
    const ad = bh.constructor.prototype.bind(bh);
    const af = ab[ac];
    const ag = aa[af] || ad;
    ad.__proto__ = bh.bind(bh);
    ad.toString = ag.toString.bind(ag);
    aa[af] = ad;
  }
});
bi();
String.prototype.format = function (...a7) {
  return this.replace(/{(\d+)}/g, (a8, a9) =>
    undefined !== a7[a9] ? a7[a9] : a8,
  );
};
const { loadBaileys: bj } = require("./baileys");
let bk;
let bl;
let bm;
let bn;
let bo;
let bp;
let bq;
let br;
let bs;
let bt;
let bu;
const { default: bv } = require("axios");
const bw = require("cron");
const bx = require("./config");
const by = require("pino-pretty");
const { Boom: bz } = require("@hapi/boom");
const { NodeCache: bA } = require("@cacheable/node-cache");
const bB = require("./index");
const bC = require("../config");
const { restartInstance: bD, stopInstance: bE } = require("./pm2");
const bF = require("./auth");
const bG = require("simple-git");
let bH = false;
const { writeStream: bI, chats: bJ } = require("./constant");
const bK = require("pino");
const bL = require("util");
const { getCmdState: bM } = require("./db/cmd");
const {
  readdirSync: bN,
  existsSync: bO,
  writeFileSync: bP,
  readFileSync: bQ,
  unlinkSync: bR,
  mkdir: bS,
  emptyDir: bT,
  ensureDirSync: bU,
  emptyDirSync: bV,
} = require("fs-extra");
const bW = (a7) => a7.replace(/\+/g, "");
const bX = require("path");
const bY = require("net");
const {
  Chats: bZ,
  MemoryStore: c0,
  Plugins: c1,
  Message: c2,
  Lydia: c3,
  Warn: c4,
  Mute: c5,
  Spam: c6,
  Word: c7,
  Filter: c8,
  Schedule: c9,
  Fake: ca,
  Truecaller: cb,
  GroupMention: cc,
  Budget: cd,
  AllowedUrl: cf,
} = require("./db/");
const { getGAuth: cg, setGAuth: ch } = require("./db/");
const { getUptime: ci, logger: cj, TEMP_DIR: ck } = require("./index");
const { getDb: cl, getConfig: cm, setConfig: cn } = require("./db/store");
bU(ck);
bV(ck);
const cq = (a7, a8) => {
  if (!a8 || "function" != typeof bn) {
    return null;
  }
  const aa = a7?.["session"]?.["user"];
  if (!aa?.["id"] || !aa?.["lid"]) {
    return null;
  }
  let ab;
  let ac;
  let ad;
  try {
    ab = bn(aa.id);
    ac = bn(aa.lid);
    ad = bn(a8);
  } catch (af) {
    return null;
  }
  return ab && ac && ad === ab
    ? (a7.lipMap && "function" == typeof a7.lipMap.set && a7.lipMap.set(ab, ac),
      ac)
    : null;
};
const cr = (a7, a8) => {
  if (!a8 || "function" != typeof bn) {
    return null;
  }
  const aa = a7?.["session"]?.["user"];
  if (!aa?.["id"] || !aa?.["lid"]) {
    return null;
  }
  let ab;
  let ac;
  let ad;
  try {
    ab = bn(aa.id);
    ac = bn(aa.lid);
    ad = bn(a8);
  } catch (af) {
    return null;
  }
  return ab && ac && ad === ac
    ? (a7.lipMap && "function" == typeof a7.lipMap.set && a7.lipMap.set(ac, ab),
      ab)
    : null;
};
const {
  groupMuteTask: ct,
  scheduleMessageTask: cu,
  scheduleMessageStatusTask: cv,
} = require("./mute");
const cw = require("./handle");
const { participantUpdate: cx } = require("./participantUpdate");
const { prepareMessage: cy } = require("./sendMessage");
const cB = bX.join(__dirname, "../pdf");
const cC = require("./db/pdm");
const cD = require("./utils");
const { getSubscription: cE, delSubscription: cF } = require("./db/antilink");
const cH = function (a7) {
  try {
    bH = a7.E;
    shift = bH;
  } catch (a8) {}
};
const cI = (a7, a8) => (
  (a7 = Math.ceil(a7)),
  (a8 = Math.floor(a8)),
  Math.floor(Math.random() * (a8 - a7 + 1)) + a7
);
const cN = (a7, a8) => {
  const aa = a7.AUTO_STATUS_VIEW.includes("only-view")
    ? "only-view"
    : a7.AUTO_STATUS_VIEW.includes("no-dl")
      ? "no-dl"
      : a7.AUTO_STATUS_VIEW.includes("expect-view")
        ? "expect-view"
        : "all";
  const ab = bB.lang.extra.labels;
  return (
    ab.sudo +
    "      : " +
    (0 == bx[a8].SUDO_MAP.length ? "0" : bx[a8].SUDO_MAP.join(", ")) +
    "\n" +
    ab.auto_read +
    "    : " +
    ("true" === a7.SEND_READ ? "✅" : "❎") +
    "\n" +
    ab.auto_status +
    " : " +
    ("false" !== a7.AUTO_STATUS_VIEW ? "✅ (" + aa + ")" : "❎") +
    "\n" +
    ab.auto_reject +
    " : " +
    ("true" === a7.REJECT_CALL ? "✅" : "❎") +
    "\n" +
    ab.always_online +
    "    : " +
    ("true" === a7.ALWAYS_ONLINE ? "✅" : "❎") +
    "\n" +
    ab.anti_delete +
    "  : " +
    ("false" === a7.ANTI_DELETE || "null" === a7.ANTI_DELETE
      ? "❎"
      : "✅ (" + a7.ANTI_DELETE + ")") +
    "\n" +
    ab.auto_update +
    "  : " +
    ("false" !== a7.AUTO_UPDATE ? "✅" : "❎") +
    "\n\n\nTelegram : https://t.me/+TYpRg-AoN4gzNzNl\n\nChannel : https://whatsapp.com/channel/0029Va92msU59PwYuplVMH2L\n\nPlugins : https://levanter.site/\n\nFAQ : https://levanter.site/"
  );
};
const cO = bX.join(__dirname, "../eplugins");
const cP = bO(cO);
if (!cP) {
  bS(cO);
}
const cQ = bO(cB);
function a5(a, b) {
  const c = a4();
  a5 = function (d, e) {
    d = d - 166;
    let f = c[d];
    if (a5.tVfrTd === undefined) {
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
      a5.PaHQqH = k;
      a = arguments;
      a5.tVfrTd = true;
    }
    const h = c[0];
    const i = d + h;
    const j = a[i];
    if (!j) {
      if (a5.iXBLXG === undefined) {
        const l = function (m) {
          this.lPhJUt = m;
          this.PrsXlp = [1, 0, 0];
          this.bcXQAt = function () {
            return "newState";
          };
          this.GZeZDK = "\\w+ *\\(\\) *{\\w+ *";
          this.vJQUmA = "['|\"].+['|\"];? *}";
        };
        l.prototype.wmwHyl = function () {
          const m = new RegExp(this.GZeZDK + this.vJQUmA);
          const n = m.test(this.bcXQAt.toString())
            ? --this.PrsXlp[1]
            : --this.PrsXlp[0];
          return this.IHXiAU(n);
        };
        l.prototype.IHXiAU = function (m) {
          if (!Boolean(~m)) {
            return m;
          }
          return this.TtRNHj(this.lPhJUt);
        };
        l.prototype.TtRNHj = function (m) {
          let n = 0;
          for (let o = this.PrsXlp.length; n < o; n++) {
            this.PrsXlp.push(Math.round(Math.random()));
            o = this.PrsXlp.length;
          }
          return m(this.PrsXlp[0]);
        };
        new l(a5).wmwHyl();
        a5.iXBLXG = true;
      }
      f = a5.PaHQqH(f, e);
      a[i] = f;
    } else {
      f = j;
    }
    return f;
  };
  return a5(a, b);
}
if (cQ) {
  bT(cB);
} else {
  bS(cB);
}
exports.logger = bB.logger;
const cS = {
  data: {},
  get: function (a7) {
    return this.data[a7];
  },
  set: function (a7, a8) {
    this.data[a7] = a8;
  },
};
function fn(a7, a8) {
  return a5(a7 - 0x8e, a8);
}
cS.flushAll = function () {
  this.data = {};
};
const cT = {
  colorize: true,
};
function fu(a7, a8) {
  return a5(a7 + 0x301, a8);
}
cT.levelFirst = true;
function fr(a7, a8) {
  return a6(a8 + 0x2, a7);
}
cT.translateTime = "SYS:yy-mm-dd HH:MM:ss";
cT.ignore = "pid,hostname";
const cU = {
  level: bC.BAILEYS_LOG_LVL,
};
const cW = (a7) => {
  if (a7) {
    return a7.replace(/:\d+/, "");
  }
};
const cY = async (a8) => {
  try {
    const ab = "" + a8.remoteJid + a8.id;
    const ac = bJ.get(ab);
    if (ac) {
      return ac.message;
    }
    const ad = await cC.getTMessage(a8.id);
    if (ad) {
      return ad.message;
    }
  } catch (ag) {}
};
const cZ = by(cT);
const d0 = bK["default"](cU, cZ);
if (
  "koyeb" === bB.PLATFORM ||
  "render" === bB.PLATFORM ||
  process.env.PORT ||
  bC.API_ENABLED
) {
  if (!bx.server) {
    require("./bing");
    if (bC.API_ENABLED) {
      require("./api").subscribe(bB.levanter);
      bB.logger.info(
        "API enabled (mode: " +
          bC.MODE +
          ") — /api routes on port " +
          (process.env.PORT || 3000),
      );
    }
  }
}
const d1 = {
  timeout: 0x7530,
  handler: "_handleMute",
};
const d2 = {
  timeout: 0x7530,
  handler: "_handleUnmute",
};
function ft(a7, a8) {
  return a5(a8 + 0x247, a7);
}
function fm(a7, a8) {
  return a5(a7 + 0x190, a8);
}
const d3 = {
  timeout: 0x3a98,
  handler: "_handlePresence",
};
function fq(a7, a8) {
  return a6(a8 + 0x2ca, a7);
}
const d4 = {
  timeout: 0x7530,
  handler: "_handleRelay",
};
const d5 = {};
function a6(a, b) {
  const c = a4();
  a6 = function (d, e) {
    d = d - 166;
    let f = c[d];
    if (a6.FDUCiw === undefined) {
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
      a6.padQGL = g;
      a = arguments;
      a6.FDUCiw = true;
    }
    const h = c[0];
    const i = d + h;
    const j = a[i];
    if (!j) {
      const k = function (l) {
        this.WNVgEy = l;
        this.NZdZMk = [1, 0, 0];
        this.OUXcjv = function () {
          return "newState";
        };
        this.OvFGvI = "\\w+ *\\(\\) *{\\w+ *";
        this.FjpDNF = "['|\"].+['|\"];? *}";
      };
      k.prototype.fdwTCM = function () {
        const l = new RegExp(this.OvFGvI + this.FjpDNF);
        const m = l.test(this.OUXcjv.toString())
          ? --this.NZdZMk[1]
          : --this.NZdZMk[0];
        return this.sOSpVW(m);
      };
      k.prototype.sOSpVW = function (l) {
        if (!Boolean(~l)) {
          return l;
        }
        return this.SBBuOU(this.WNVgEy);
      };
      k.prototype.SBBuOU = function (l) {
        let m = 0;
        for (let n = this.NZdZMk.length; m < n; m++) {
          this.NZdZMk.push(Math.round(Math.random()));
          n = this.NZdZMk.length;
        }
        return l(this.NZdZMk[0]);
      };
      new k(a6).fdwTCM();
      f = a6.padQGL(f);
      a[i] = f;
    } else {
      f = j;
    }
    return f;
  };
  return a6(a, b);
}
d5.timeout = 0xea60;
d5.handler = "_handleSendMessage";
const d6 = {
  timeout: 0x7530,
  handler: "_handleForward",
};
const d7 = {
  timeout: 0x2710,
  handler: "_handleEnd",
};
const d8 = {
  timeout: 0x3a98,
  handler: "_handleRead",
};
const d9 = {};
function fk(a7, a8) {
  return a6(a8 - 0x319, a7);
}
d9.timeout = 0x3a98;
d9.handler = "_handleCall";
const da = {
  timeout: 0xea60,
};
function a4() {
  const ui = [
    "f8oAW7a",
    "W5y0WO4",
    "E8kGhG",
    "bmkfAG",
    "umopWPm",
    "uCkAW6W",
    "WOBdUSoC",
    "Awni",
    "bWZcSq",
    "ywrK",
    "W63dI2a",
    "W6pcJfO",
    "WP54rq",
    "fmoVdq",
    "EGZdMq",
    "ufrp",
    "yw5U",
    "W6BcKhy",
    "EmkiW7O",
    "CmkZfW",
    "tfzm",
    "B3CG",
    "zxjY",
    "kCo0hW",
    "W7ldKCoD",
    "tu9e",
    "vSodWOS",
    "B1Dr",
    "W68/WR4",
    "eCoFWQm",
    "WPBdQmki",
    "B25J",
    "W4Tlja",
    "hCkjEG",
    "WRhdP2u",
    "W4BcPmob",
    "zCkdeq",
    "W5JcL8og",
    "A2vK",
    "krBcQa",
    "wKLU",
    "wND0",
    "A2fN",
    "zxvL",
    "WOHUW7a",
    "BwuG",
    "zv9P",
    "yCkPbW",
    "z09e",
    "mmkWWQ4",
    "lI4V",
    "FhzP",
    "wmk2W48",
    "W7dcHhy",
    "t8kIW4q",
    "BCoWia",
    "xSoayq",
    "ACkoW6S",
    "wNvf",
    "W7BdIhC",
    "A2H4",
    "kmo6ea",
    "zK9l",
    "WORdR2O",
    "mIKG",
    "ysbS",
    "rNjo",
    "W6HNaq",
    "u1vc",
    "W57cO20",
    "gSkumW",
    "ASkUva",
    "DmkMW4G",
    "umopWOe",
    "wSkOyq",
    "gGRdVa",
    "qK9u",
    "C8k5kG",
    "zuLK",
    "aSk1sa",
    "Cvrx",
    "fJZdIa",
    "vmopWQG",
    "BCktW7C",
    "jSkJWR8",
    "naddOq",
    "CcbZ",
    "uK9v",
    "WO0SW40",
    "v2L0",
    "ihjL",
    "WQZdT8kd",
    "WOxdH0i",
    "W7FcLgS",
    "ms8Z",
    "FSkala",
    "nwFdOa",
    "mCoSWOC",
    "bSoRWPS",
    "BMzV",
    "ESoeWOe",
    "uCkScG",
    "A8kwW68",
    "B3jm",
    "C8oyiG",
    "W7bBxG",
    "uCoGWO0",
    "uCk6gG",
    "tL9o",
    "lMpdUG",
    "sxqG",
    "ESklW7m",
    "yuat",
    "WPfWW7W",
    "C2fN",
    "ASowpq",
    "BYb5",
    "W4RcIW0",
    "W7iqqG",
    "vSoyW7O",
    "A1PA",
    "sCoDfG",
    "eSo6ha",
    "W5/cRmoB",
    "fSkhWPy",
    "q2fS",
    "if3cNCosASkzhc/dUSonWOiQEa",
    "u05z",
    "lCoHhG",
    "W6dcKJ0",
    "m2X0",
    "WQTEmG",
    "W4FcUh0",
    "hCkSzG",
    "W7ddJCox",
    "AurA",
    "w8kYgG",
    "WQTpmG",
    "yCk+vq",
    "W6JcLcu",
    "Eg1S",
    "B3j0",
    "W7pdNsO",
    "qujo",
    "B8kffG",
    "F8oDoW",
    "D8oilG",
    "ESkeda",
    "WObhwG",
    "CmknW40",
    "fJ/cNW",
    "yCo4WOC",
    "W7Pzva",
    "yxjq",
    "W7S7WRq",
    "ESoona",
    "W6Pkkq",
    "WOfuW6W",
    "zSopWRu",
    "gCoBWQK",
    "BwfS",
    "WRPIBG",
    "jmo3WPu",
    "WOnwwW",
    "bSk4WO4",
    "W7HvrW",
    "yxCU",
    "umkJgG",
    "zxqG",
    "Dwv1",
    "BCowpa",
    "uKHT",
    "ySkbW7W",
    "uKvt",
    "W7fvsG",
    "tSk1zW",
    "W6nfW48",
    "DsbO",
    "W4LdyW",
    "W5VcJhO",
    "BwjO",
    "zSktfW",
    "m8kpWO4",
    "AvnJ",
    "WOnEW6S",
    "WO1KW6S",
    "wmkYFW",
    "ySk/aa",
    "e8o0ha",
    "zMfU",
    "WPLdzG",
    "BK0k",
    "WOrDW7S",
    "W5pcQh0",
    "W4OOWQ4",
    "zNvU",
    "W4xcUmoe",
    "B8oHWQO",
    "W6RdNLC",
    "WR56mq",
    "w2zL",
    "dgXT",
    "CSodWPK",
    "oSkuWPm",
    "abtdTa",
    "W45llq",
    "fq3dKa",
    "W4j8W4e",
    "W5pcKWm",
    "DSk/fW",
    "WQ9IEq",
    "u8oOWOC",
    "oexdVW",
    "ig9U",
    "W6RcSMO",
    "oCkzWRu",
    "WOCqCW",
    "W7hcKZW",
    "lMpdPW",
    "WOXdrW",
    "wmopWQm",
    "W6bGW7u",
    "x21H",
    "idOG",
    "fmo1da",
    "W492dG",
    "zfvZ",
    "u19m",
    "WRRdQ3u",
    "D1L0",
    "qvGO",
    "n8k0WQK",
    "W6XUqq",
    "BhrI",
    "tSkeW5W",
    "FSkoW7G",
    "WPnYsa",
    "W78EWPq",
    "WOPorG",
    "WQtcKgy",
    "x0rp",
    "zSkvW4u",
    "xWZdMG",
    "lwDP",
    "pmoYgq",
    "WPNdU8oP",
    "CI4G",
    "WQhdIfK",
    "fCkKvW",
    "tvnh",
    "Awv3",
    "WR9Wla",
    "DWpdNa",
    "mCkWWR0",
    "W5tdJmoz",
    "FSoiWPK",
    "qCopWQO",
    "peldMG",
    "WQ56nG",
    "WQbVtq",
    "WRHnka",
    "FSkfba",
    "W4FdGxy",
    "WQ9niG",
    "sCoUWPm",
    "eMXQ",
    "WPXpeq",
    "W6xINAXJ",
    "W4lcUSob",
    "ChZdOq",
    "8j+uHcaQ",
    "igDV",
    "x0Tf",
    "lIbj",
    "zfbR",
    "W77dO2m",
    "t8oTW48",
    "Bw90",
    "EmkcW7e",
    "CmoKWPW",
    "DKPb",
    "g8oiWRu",
    "W7HeEW",
    "yLbK",
    "lwqG",
    "W55KW7y",
    "WOf/ta",
    "y8kkW7W",
    "WOZcJmo5",
    "A2uG",
    "aSoVbW",
    "WQpcNJu",
    "WOvzW5K",
    "l8oPaG",
    "CSodWOS",
    "A1ns",
    "xCkSca",
    "F8oimW",
    "W7DmgW",
    "W7GlWQG",
    "q2r2",
    "W7tcG2a",
    "qudcGG",
    "hCkqna",
    "vfb0",
    "Awrc",
    "ANb5",
    "yMXL",
    "WO9vW7i",
    "WODfW7C",
    "W7dcItG",
    "W5ldOMa",
    "yNBdQG",
    "mCkpWPW",
    "BgLU",
    "twrb",
    "F3dcRW",
    "mJLw",
    "BwvK",
    "bCooBq",
    "W5juaa",
    "qLLg",
    "sNrK",
    "f8oqWQq",
    "tgHZ",
    "zCkKha",
    "WPHiqW",
    "WQ96la",
    "rwn3",
    "W7mPWPm",
    "W6xcN3e",
    "W7mfWRm",
    "WOlcHCo5",
    "DWpdJG",
    "bSorWPK",
    "WRzDW6S",
    "B3jJ",
    "qwzS",
    "uMvW",
    "fSorWR0",
    "vSomma",
    "ihvZ",
    "Auv6",
    "w8kMW5O",
    "vujm",
    "CMDP",
    "u3Df",
    "rKPg",
    "W7LXgW",
    "bGhcPa",
    "ACoena",
    "WQxcS8kk",
    "W4L7lq",
    "Dw1I",
    "ySoHW4G",
    "WQDbsG",
    "z8ocWP0",
    "W7dcG2W",
    "yMfU",
    "WQBdO2m",
    "u8oUWRC",
    "E8ocWOG",
    "nI1B",
    "Cf9Y",
    "WQ1VnW",
    "WOnpsW",
    "WP9vuq",
    "xvVcIq",
    "thzT",
    "W4RdVK0",
    "gmoPgW",
    "y2u5",
    "WRT6pq",
    "kSkEaa",
    "W4SOWO4",
    "e2b8",
    "e8oAWRq",
    "iq3cMW",
    "qSkIW4C",
    "yxrL",
    "WO7dLWm",
    "BNqT",
    "f8ouWRu",
    "q2lcRG",
    "suhcHG",
    "rgf0",
    "wKtcLa",
    "W7bNgq",
    "ANnV",
    "DuLU",
    "lCo4ha",
    "uSklwa",
    "DMvt",
    "qfFcGG",
    "BgvU",
    "EmoDWOO",
    "s8o0WOa",
    "W7nqW7u",
    "AwvU",
    "ACoelW",
    "zcbO",
    "smkHW4y",
    "WRzyqq",
    "WRKwAq",
    "W6pcHw0",
    "zmocWOW",
    "WRRcVmoy",
    "W6FcHc4",
    "WQddPCol",
    "qSkjmq",
    "fXFcOq",
    "zCoiWOS",
    "jmk5gW",
    "ogJdSa",
    "D8k/W5W",
    "W6O/WRe",
    "yvjj",
    "W4HLW5a",
    "W5DarW",
    "DSkSfq",
    "WPNdGea",
    "zw1H",
    "WPv+Eq",
    "iSkNqq",
    "x3jL",
    "hGZdPG",
    "hSkumG",
    "WObosq",
    "pCkuEG",
    "WPvjxa",
    "t0Tj",
    "W75rua",
    "W7tcP3a",
    "z8kgW7S",
    "t19v",
    "z3jH",
    "WOHvW7i",
    "pHBcRa",
    "qSkWW4W",
    "WOz2xa",
    "W6RcKJC",
    "Emkyaa",
    "CMvT",
    "W6FcHmok",
    "WORdJKG",
    "WRirW40",
    "WQL+pa",
    "C21H",
    "r1RcHa",
    "W5RcU8ki",
    "yxzL",
    "dLZcKW",
    "WRnBW4q",
    "zw1P",
    "CxDc",
    "W49flq",
    "hbZcUa",
    "W7FcNCo8",
    "FCkAW6S",
    "WRXDnq",
    "BgXF",
    "o8kuWP4",
    "q0LI",
    "DwLK",
    "EfbU",
    "lMNdTW",
    "ESkzuW",
    "WR/dPhK",
    "W5JcU2C",
    "x8k+W4G",
    "CIbT",
    "WPRdGSoC",
    "WQL2oW",
    "l8k6WR0",
    "wmocja",
    "nJqW",
    "nWze",
    "AgT1",
    "ENRdUq",
    "BwvZ",
    "rMfP",
    "kSkccG",
    "auldUW",
    "zmkxeq",
    "W4rpcG",
    "zsb1",
    "bSoSzG",
    "rCkyiG",
    "aSo6dW",
    "w8oJWOW",
    "BSkkW4a",
    "FrNcIG",
    "B3rL",
    "W4hcVX0",
    "yCkNkq",
    "W5NcUx0",
    "AmoelW",
    "uSoeWQO",
    "oCkPWRC",
    "zCoRWPS",
    "AhrT",
    "WR/cRwi",
    "WQBdRwi",
    "paVcSG",
    "vuLi",
    "WQ5IyW",
    "gLxcUW",
    "rmoFjq",
    "CcbI",
    "y2LW",
    "BmkbW6S",
    "ruHQ",
    "W69UbG",
    "b8oVWOS",
    "W7/cOJW",
    "BmoDkW",
    "W7jZW6a",
    "WOqCca",
    "lCo4ga",
    "ywXZ",
    "jmo6va",
    "qCoJgG",
    "wCo5WOa",
    "xsbr",
    "BgWG",
    "CKrL",
    "AmkQbW",
    "CSkmWQG",
    "FudcHG",
    "haZcSq",
    "W59DW7a",
    "rCoOWQe",
    "EmoKWO8",
    "W4xcOCoh",
    "gSkAzq",
    "CgvY",
    "W7FcLhy",
    "Dvfz",
    "y8kBW6W",
    "WOPurW",
    "shLv",
    "bmo3oW",
    "W4JdHh0",
    "iezp",
    "c8knmW",
    "uLtdPq",
    "yCozWOC",
    "hCo7WQO",
    "AmociW",
    "Dgu9",
    "xsbJ",
    "W5jxjG",
    "WRZcUSoF",
    "CNrP",
    "c8osnq",
    "WQL2na",
    "A8kdaq",
    "WQ9EiW",
    "W7JcKL0",
    "yCoJW4C",
    "CKLU",
    "sCoLWRy",
    "ESosoW",
    "uCoJra",
    "BCk0fW",
    "B0fw",
    "fmkVWRi",
    "uCoDca",
    "tL9m",
    "wmkYBq",
    "W6ddIhC",
    "qSkJW44",
    "y2vL",
    "ACkDxq",
    "sgv5",
    "vfjH",
    "W79EqW",
    "WRtdHKi",
    "WRrXpG",
    "EgdcQa",
    "Ahr0",
    "W6/dHCoA",
    "xsbB",
    "h8oBWQm",
    "WQrikG",
    "sMLQ",
    "u2nH",
    "WPFcPwS",
    "rCo3kG",
    "uKf4",
    "W6ZdKCom",
    "xSk6W5S",
    "W4nxpq",
    "DNNdVa",
    "WQxdQN4",
    "s8odkW",
    "hCk7hW",
    "wmkBbG",
    "u2nO",
    "WQ97rq",
    "FSo4W4G",
    "uKHp",
    "CqJdHW",
    "oGNdTW",
    "kqtdOa",
    "W63dG30",
    "ESkmW7i",
    "W6XuW78",
    "W7nSaq",
    "Awfv",
    "aSkAia",
    "W681WQ8",
    "CYaO",
    "ue9t",
    "CSodWPa",
    "xLJdHG",
    "W6retq",
    "bHFdTG",
    "mWPR",
    "WQL0tq",
    "iMz3",
    "aGRcVq",
    "Evn0",
    "dCkiW7O",
    "twvZ",
    "nCoolW",
    "Bxv0",
    "BNvS",
    "xsbY",
    "bXhcVW",
    "fSo+ha",
    "ver5",
    "bb3cPG",
    "Amk7gG",
    "Cffw",
    "mqng",
    "xCkaW6i",
    "W7hcGNe",
    "WP7dOCoF",
    "vezp",
    "t0DF",
    "yrNdIW",
    "WP7dV8oy",
    "hmkqna",
    "pmkEWPK",
    "BM9K",
    "zSoDWOK",
    "y2Hh",
    "WPjzW7S",
    "WQ/dJ10",
    "FSo6WPW",
    "vSopWO4",
    "r05b",
    "WPzltq",
    "ESoVWPe",
    "sgDd",
    "teLd",
    "ySkceq",
    "WQL+cq",
    "q2HL",
    "WP3dT8oE",
    "DhjH",
    "WO9aqG",
    "aCkfCG",
    "iCokWRe",
    "Bgv0",
    "BmkEW6y",
    "pSoLca",
    "W78QhW",
    "WO7dGuq",
    "W5bthW",
    "AfVcLq",
    "wmkmzW",
    "W4pcVmon",
    "WO1VW7a",
    "wSoeWRm",
    "wL3cHa",
    "icSG",
    "jCkFWQ0",
    "yCkUfq",
    "dCoraG",
    "y2f0",
    "W6/cId0",
    "As1R",
    "l8kfWPG",
    "CSoFWP0",
    "Dw5P",
    "W5b8W44",
    "uMvH",
    "r8kNhq",
    "WQRdH2O",
    "W4xcV1e",
    "W4HGW7e",
    "W4XIW7e",
    "l8oLhG",
    "ywz0",
    "FSkFbG",
    "obxdOG",
    "W6LgW54",
    "bCoQoW",
    "ChddVq",
    "r8otWQO",
    "EgFdQG",
    "oCkBWQa",
    "WP3dPSoD",
    "Dmo+WPW",
    "zZtdIW",
    "ohtcTa",
    "W5/cU8oa",
    "W7HUcG",
    "sxPd",
    "z3NdUG",
    "r8odWQW",
    "WOrRcG",
    "WR0zdW",
    "wSkuW6K",
    "W4tcQhO",
    "CNzH",
    "rNddRq",
    "zSoeWRy",
    "kmkfWO4",
    "FxZdQW",
    "DeHX",
    "WRXYrG",
    "hHhdPa",
    "W6XYsa",
    "B2ny",
    "ECkFcG",
    "bmkfCa",
    "WO9CW78",
    "B3b0",
    "W6/cKJ4",
    "zmkCW7C",
    "W5/cPgO",
    "A2LW",
    "W6rvsq",
    "CMvJ",
    "A8ommG",
    "xsbZ",
    "ignV",
    "WQ1uuG",
    "zwDY",
    "sSk+W4i",
    "DtxdRG",
    "rIZdVG",
    "jSoUWPG",
    "u09t",
    "dCkgW7O",
    "W7nSgW",
    "W4bbnW",
    "W5VdHxG",
    "EsbO",
    "CKxdVq",
    "WRX7wW",
    "F8oxhq",
    "ntXE",
    "mKldIW",
    "ESoajq",
    "W4zjjG",
    "CNBdUW",
    "W7jqW7a",
    "DCkAW6i",
    "W6hdNJC",
    "W4meia",
    "WOmrW70",
    "WOnDW7S",
    "DhnL",
    "uSo8ca",
    "W69Raa",
    "FGJdHa",
    "CMvX",
    "B2rL",
    "zufY",
    "ihbS",
    "ACkeaa",
    "W6znW5y",
    "yw1L",
    "EhqG",
    "F8oemW",
    "W49lgG",
    "W7OUWRu",
    "WRpdISo7",
    "d205",
    "W7iPWRq",
    "W4v/DW",
    "mJ/dHa",
    "umkYWQe",
    "FSkgW7a",
    "nCkOuq",
    "jaPz",
    "ntq2",
    "WQzweG",
    "y29S",
    "W7tcMcu",
    "FCoaW4e",
    "AmklyG",
    "g8kfpG",
    "umk0Fa",
    "WQtdNxu",
    "zw91",
    "zhj4",
    "W5faW7q",
    "WR7cT8ol",
    "EmorWRe",
    "AmkDW60",
    "F8o5WPW",
    "cCovoa",
    "W4FcI00",
    "mmkizG",
    "W7ddGCow",
    "WPJdKuW",
    "hIfI",
    "W7G1WQG",
    "W4xcPfe",
    "W67dI8om",
    "rIxdNG",
    "WPxdOmon",
    "W6XAW7y",
    "B3uN",
    "y291",
    "yxnV",
    "ySoNWPK",
    "serf",
    "AmoWWQa",
    "lCoKta",
    "CCocWP0",
    "W5JcU8oM",
    "icb0",
    "zf9T",
    "CSoEka",
    "DCoyWPS",
    "A8kUeq",
    "AmklW5W",
    "W7L6gW",
    "sg9W",
    "g8kqna",
    "W6n3W4G",
    "W5DrrW",
    "W7n2cG",
    "ywHz",
    "y0jz",
    "pdTl",
    "gmkCiW",
    "D05x",
    "BIbS",
    "A2vV",
    "FGJdNa",
    "ChjP",
    "DNFdOW",
    "jhxdTq",
    "ufjf",
    "oMpdPG",
    "ifbm",
    "sxfz",
    "smofWO4",
    "u8oRWOe",
    "bmkbEq",
    "W4vLya",
    "C3rY",
    "kSkgWRK",
    "rSoiWR4",
    "FSkRcG",
    "hmkNWR8",
    "uSoBWOO",
    "W5BcQ3O",
    "WR9/wG",
    "u1jb",
    "W6pcJw0",
    "Dw5T",
    "W6ddI8ol",
    "vcaG",
    "W6RcIZW",
    "mCkWWOu",
    "lI9W",
    "k13cMG",
    "iSk5WRy",
    "W7S/W60",
    "FmoFlW",
    "W7fJgW",
    "jCkOua",
    "y3qG",
    "FSo9WQe",
    "WPzfxa",
    "jSk7WQW",
    "vSkkWRS",
    "vSoJWRm",
    "4PQG77Ipiee",
    "qvb5",
    "zCk8dq",
    "ufDz",
    "W6hdG28",
    "W63dKmoD",
    "y2Tk",
    "zu3dNG",
    "W7pcVSon",
    "nbH+",
    "CMWG",
    "x8o6bG",
    "D8kjW5G",
    "bSolWQm",
    "W4VcHq0",
    "zwv0",
    "WPlcJSoF",
    "vfL5",
    "W741WRa",
    "WQHlsq",
    "jSo4WP8",
    "W4bnlq",
    "W7LGW60",
    "DwDP",
    "iWPo",
    "wSkOW54",
    "lCoYqG",
    "x0hcGG",
    "yxLn",
    "laJdPG",
    "CZOG",
    "C8kYfq",
    "pSobjG",
    "Cmkhpa",
    "W5JcRCoC",
    "DMLZ",
    "l2X5",
    "zMzS",
    "BCktoW",
    "CXtcOW",
    "WProrW",
    "Esb0",
    "W63cLsu",
    "WO7dKuG",
    "WRJdTMi",
    "ySolWQW",
    "bSomWQK",
    "WQZcNgO",
    "qLVcGa",
    "WPldVCol",
    "r2P1",
    "uSoLWP0",
    "WP1pua",
    "phtdGa",
    "tCkVba",
    "v1fJ",
    "eXtcUa",
    "WPRdUCoB",
    "CMvW",
    "hSkwEW",
    "WPBdOSoC",
    "pSosBW",
    "ywL0",
    "W4fcmq",
    "nXTc",
    "pSktBW",
    "a8kAmW",
    "kCoJga",
    "W7q1WRm",
    "FCkFWRe",
    "BwvY",
    "WRJcONy",
    "WQ9uW6e",
    "ze9Q",
    "cLbm",
    "EhjZ",
    "ig1Z",
    "zw5K",
    "CMLJ",
    "q19v",
    "W7O/WQ8",
    "EmkAW7m",
    "WQTwsq",
    "WPBcQ8oy",
    "r3zn",
    "n8kDBW",
    "CCockq",
    "AxnP",
    "uCkhaa",
    "W5nKyq",
    "xv3cIa",
    "BSoaW60",
    "iCk6WQ4",
    "W6FcNNa",
    "wmkZFa",
    "W7vVcG",
    "dmkAmW",
    "C2vH",
    "W7W0WR4",
    "u29J",
    "Dgf0",
    "WRXlBq",
    "mmk8WRu",
    "WRjTmq",
    "zxbg",
    "CgfY",
    "WPRcQ8ol",
    "juXl",
    "WQbfiG",
    "ASoBkG",
    "WQ1jna",
    "bCo0gG",
    "DahdHq",
    "DgzV",
    "WQyIhW",
    "W6FdKSos",
    "WODhwG",
    "WOjvtq",
    "W7BcMcO",
    "W44UWRW",
    "ksNcOq",
    "CSoMWOC",
    "y8kBW7O",
    "yw50",
    "t05O",
    "EKZdOW",
    "uSooWRu",
    "DxnL",
    "dLxcGq",
    "EsdIGjm",
    "ncdcOa",
    "DgHL",
    "ymk/aG",
    "zJeY",
    "WRJdKuW",
    "W71ElG",
    "yNKG",
    "aqJcUa",
    "C21X",
    "p8o/WPG",
    "CM91",
    "W4NdQK0",
    "teLe",
    "rvqG",
    "mbBdLa",
    "BKjP",
    "WQtcHSog",
    "yqJdMq",
    "W71tW4a",
    "WRPamW",
    "iWPz",
    "WPhcKSoV",
    "j8ozaa",
    "W4v5AW",
    "r1Lw",
    "A8kvdq",
    "igrL",
    "jmoHaG",
    "twn3",
    "ivVcMq",
    "wmkpBa",
    "vKxdHG",
    "W5BcU28",
    "y8ouWP8",
    "WRrRiq",
    "CgXH",
    "zMzL",
    "uSo6da",
    "W6O7WRq",
    "D2fY",
    "ogJdSq",
    "dgXQ",
    "y2FdPG",
    "mH7dJW",
    "WPBcRmop",
    "W6DbW7K",
    "y8oeWOe",
    "CCoakG",
    "W6ruW6u",
    "BgLW",
    "bIzV",
    "cLjL",
    "W47dHCoi",
    "Cmk/da",
    "zCoNWPu",
    "CIbI",
    "qCoKka",
    "WOHqra",
    "W6FcMxq",
    "yxv0",
    "W4r0W4u",
    "Aw9Y",
    "W6DqW6m",
    "FSkoW4O",
    "WOfeBW",
    "tSk/W58",
    "Dhj1",
    "EmoKWP0",
    "w8k4W50",
    "WQbQcq",
    "nSk4WRG",
    "WPntW7i",
    "WOJcISo+",
    "x8oabq",
    "CmkuWP4",
    "WR5yiW",
    "msXc",
    "ihn0",
    "vMLf",
    "BMzP",
    "C29J",
    "ignS",
    "WR91ra",
    "oZldGa",
    "cmkYWRC",
    "g8krWQm",
    "W4rdW7S",
    "zxiS",
    "zvDh",
    "ANlcSq",
    "bSo6aq",
    "u2vU",
    "vfj3",
    "ztOG",
    "AGBdJW",
    "uKvu",
    "sf3cIq",
    "W59UW7a",
    "CmoMWRK",
    "W4zkjW",
    "W607WQ8",
    "WRRdQ3i",
    "refu",
    "t03dMa",
    "zCojWQS",
    "n8ozWOa",
    "W61qW6i",
    "v0fs",
    "uLHq",
    "tCk5W4W",
    "WOntwW",
    "WPbsqa",
    "w8k/W4a",
    "xCoEWQK",
    "zNff",
    "qw92",
    "W4nWcG",
    "BfLf",
    "W6jvvG",
    "zwWG",
    "W4tdQmoC",
    "ECkWhq",
    "omkoWP8",
    "rLv2",
    "chL4",
    "mmkYWR8",
    "qSoUWPe",
    "Amoziq",
    "uCkScW",
    "CMfS",
    "EmoZWOe",
    "BNfY",
    "y8oVW4G",
    "tmklW6a",
    "Cmo6eG",
    "u1rM",
    "W7L2cG",
    "wmoYfq",
    "W4jxnW",
    "jmkqWP4",
    "zwnV",
    "WP3dOmoq",
    "W61uW6u",
    "rCkpia",
    "B3xIGjK",
    "cGOk",
    "W5VcRCom",
    "eSoaFW",
    "kt/dTW",
    "CgDb",
    "zgvT",
    "q0zq",
    "b8kBja",
    "BxzH",
    "W7tdGwW",
    "WODrma",
    "W5BcUGy",
    "D8o7WO0",
    "fCokWOa",
    "W6/dI8oF",
    "bCoJWOC",
    "B2Tg",
    "vSoSka",
    "WRHssq",
    "zxn1",
    "mJHwq1nVu0m",
    "qM9c",
    "W7RdOCo8",
    "eCkIWOG",
    "nqbF",
    "x0nb",
    "WOzora",
    "WRhdP2m",
    "W4ldQmoC",
    "icG0",
    "WQfZDG",
    "W5rbjW",
    "qgXP",
    "W7qOWQ4",
    "BCohkG",
    "s0ZcKW",
    "w8k1gG",
    "mmkWW7O",
    "W7GIWQK",
    "veLn",
    "DNldQG",
    "zu11",
    "WOnFW6G",
    "W4ThW4G",
    "exP8",
    "W4tcQCoC",
    "DMLJ",
    "qSoYWPa",
    "tSkzlG",
    "v2PY",
    "wCodWR4",
    "FSoEna",
    "WPOYWRC",
    "WPJdIKm",
    "t1vu",
    "vGldQW",
    "W4dcVgu",
    "WQLxkq",
    "qrNdIW",
    "e8oqWRq",
    "W7buW6m",
    "uCogWRm",
    "aMf8",
    "WQ3cSmod",
    "WOrhtW",
    "bCkTW4y",
    "BmkiW7O",
    "mNtdTW",
    "cCoYoa",
    "WRiTbG",
    "rCkwBW",
    "smkMxW",
    "BmkwW64",
    "WRrVoq",
    "emo5bW",
    "FNVdRa",
    "W7ZdP38",
    "nmkwWP4",
    "WPpdIee",
    "zKzn",
    "y2fU",
    "sSoTW5O",
    "WQdcTSoy",
    "vSoyWRC",
    "WQPEW7i",
    "W5FcPSoC",
    "ECkDoa",
    "xmkYBq",
    "W79KW7u",
    "AmkGta",
    "WRvfW78",
    "BflcOKPcsgjCW4BcUa",
    "WQXPW6rWeYq6W7CIbKFcKa",
    "W50VWO8",
    "kSkLWRS",
    "WPZdQ3u",
    "AxjL",
    "Dw1L",
    "w1vW",
    "WOjGW7u",
    "cM/dOa",
    "zgvS",
    "hSoTcq",
    "WRFdRgu",
    "nMqX",
    "zuzV",
    "jSkMW7O",
    "tKDm",
    "qmoEBG",
    "CI5Z",
    "C2Dj",
    "hsZdGq",
    "W70PbW",
    "CmkrW68",
    "WPjyW7a",
    "u8kbW6W",
    "FSkeda",
    "CgXd",
    "mJjK",
    "kSk7WRK",
    "AmopW6W",
    "umoGWRq",
    "CgrH",
    "A8knW6G",
    "ECojWOm",
    "W7hdGCky",
    "s0dcHG",
    "DMvK",
    "WPbRW7q",
    "WRJdPN0",
    "BgLR",
    "gGzo",
    "WOtdU8oy",
    "u8kZFq",
    "zwXL",
    "vSkFjW",
    "WQr7wG",
    "C3vg",
    "pmkAWR4",
    "zgLs",
    "yKLx",
    "ESowiW",
    "C1DP",
    "WRvNW6G",
    "gWJcTq",
    "yqJdNG",
    "igXL",
    "Esb2",
    "igzY",
    "Ahvu",
    "ze1H",
    "jaDp",
    "nu9t",
    "E8kdaa",
    "lZaW",
    "Ew1Q",
    "ECkxaG",
    "mmkWWQK",
    "W4jhla",
    "dthdNG",
    "WPJdIuG",
    "BCoAia",
    "A8ocnW",
    "DhjV",
    "dcldJq",
    "q2Td",
    "WQtcVSoE",
    "u8ofWPO",
    "m8kuWRu",
    "W5VcRga",
    "uMvZ",
    "W7ddJhi",
    "zNjV",
    "W4HiW6W",
    "uKvk",
    "CK5S",
    "BeLH",
    "WP9Usa",
    "W7FcKgi",
    "pCoHWP0",
    "ASkkW60",
    "gSoxWQm",
    "DX7dMq",
    "FSkniq",
    "W4pcQ8oC",
    "x8kXoG",
    "WPZdQSoa",
    "eSkvEW",
    "WRJdTha",
    "bCkfCW",
    "CKPP",
    "W5NcQI4",
    "WO96la",
    "BCkqW7q",
    "DGJdHG",
    "z3jV",
    "umk9Fq",
    "Dmk+fq",
    "W7Dcua",
    "F8kkWR8",
    "tSkOAa",
    "sNLH",
    "WP3dGh4",
    "ASkkW6S",
    "wCkcba",
    "EmocWQu",
    "WQXpvW",
    "W75TgW",
    "uSk9Bq",
    "AuXr",
    "C2HV",
    "vvrv",
    "gW7cSq",
    "qwX0",
    "f8oFWRS",
    "qCoKWQO",
    "mdKY",
    "ACo1fW",
    "WPvyW7e",
    "ChjL",
    "pmkdWO8",
    "CCoHnq",
    "jejy",
    "zxnd",
    "CmoxiW",
    "WPz4sW",
    "AmomjW",
    "WPFdM0i",
    "uLnj",
    "B3qG",
    "iKnV",
    "g8kjEG",
    "W65CW6y",
    "ueXb",
    "w8kSW4q",
    "AxnO",
    "eN14",
    "gmkJWQ8",
    "vCkXgG",
    "W6ldGmoD",
    "rujF",
    "WQFdO8om",
    "bMXT",
    "WQG2cq",
    "zwnH",
    "W7hdK3K",
    "emkHWRS",
    "vmkYEG",
    "WO5hrW",
    "igL0",
    "zxrY",
    "DSkrW6i",
    "WRj+pa",
    "C3rH",
    "z2L0",
    "C1fT",
    "wCo6eG",
    "WORdHLK",
    "W67cIc0",
    "erHh",
    "CSosiq",
    "qf3cKa",
    "WPzeW60",
    "wvnn",
    "rmkJha",
    "ueTy",
    "sgBdUW",
    "mGddQW",
    "y2TL",
    "CNDH",
    "cCoRWPC",
    "W4y6cq",
    "DgfU",
    "W6r6WR8",
    "C8o9WPK",
    "qCopWQK",
    "WORdI0K",
    "q8kOW40",
    "zgv2",
    "wNrL",
    "DxrL",
    "jSk5WR8",
    "W6xcNga",
    "v0eG",
    "ugrj",
    "yMBdUW",
    "A8kfdG",
    "jCoLga",
    "WOnbW78",
    "AM95",
    "WOJcNCoM",
    "qmkHWO0",
    "z8kAW6W",
    "W6NcLhy",
    "W6X8zW",
    "WRddRMq",
    "q291",
    "WPjixG",
    "DNvy",
    "l3qU",
    "W6ldICoD",
    "zSk1W70",
    "W6ldG8oD",
    "WQrssq",
    "W5dcPga",
    "uMLq",
    "W6vZsW",
    "WRL6kG",
    "ihDH",
    "WQrUxq",
    "W4HZWQu",
    "W5lcVNO",
    "WORdI1K",
    "EtxdVq",
    "WOTNlW",
    "BMC6",
    "ueKG",
    "WPurW7q",
    "W7neqq",
    "l8kGWR4",
    "jSk4xa",
    "WOzuyW",
    "B2X2",
    "CSogkW",
    "W55KW7q",
    "zwnR",
    "lIbt",
    "zurc",
    "WPBcP8og",
    "W7PNcG",
    "ywrL",
    "tmkbpG",
    "FSkznG",
    "W6dcGCoT",
    "jSk2WRe",
    "W6RdLmoz",
    "WPzixa",
    "qCktha",
    "DmouWQa",
    "yNv0",
    "q0XJ",
    "sCkKW4C",
    "W5ldOGq",
    "tLuG",
    "BmkAW7i",
    "FSocnq",
    "ueXv",
    "vMfY",
    "Fmkjxq",
    "nmondW",
    "DgfY",
    "ywjV",
    "BCkcdq",
    "AmoUlW",
    "B2zM",
    "W5FdV8oC",
    "z8oSWPu",
    "B1rq",
    "W6FcHfe",
    "zCoVWPO",
    "W5JcUhO",
    "EmkBW4S",
    "A8omlG",
    "WPjqtq",
    "kCkKW5a",
    "hCoYga",
    "CmkJba",
    "W59ZEW",
    "W5FdJCov",
    "AxLJ",
    "WRykba",
    "W4zxW7e",
    "D2f5",
    "mCoRWOy",
    "mrGf",
    "W5jrtG",
    "kSk7WR0",
    "t2Ts",
    "W7NcL8o7",
    "W5zLW4i",
    "i1JdRG",
    "WPhcRmki",
    "nJmG",
    "gXZcGq",
    "u1nb",
    "gWZdLCkakbldRM8lWPNdOu8",
    "zmorW4W",
    "W4P1W60",
    "EColWOy",
    "yKTg",
    "vefu",
    "WPLcwW",
    "nW/cHa",
    "BhvK",
    "xmkOAa",
    "W59Waa",
    "y8k/bG",
    "DgvT",
    "W7BdUhu",
    "hCowWP0",
    "W48naG",
    "Emo6WPW",
    "WQznpW",
    "W4HTW4m",
    "xsbx",
    "DwuG",
    "jmk/uG",
    "W4nblW",
    "jSkwkq",
    "F8oNWPO",
    "hmoPaq",
    "W4BcUgS",
    "CZOV",
    "FCoEWOa",
    "zunO",
    "fCoppq",
    "BNrF",
    "qvbj",
    "AmkZba",
    "zYbJ",
    "yGhdGW",
    "WQLekq",
    "WQBdV8on",
    "WPjvwW",
    "Es12",
    "FmkhW5e",
    "l8kfWOG",
    "abRdIa",
    "hSkpCa",
    "wmkOBa",
    "WQOgrq",
    "W5nUWRO",
    "smk1eW",
    "qmo1WOW",
    "FaJdNG",
    "WPJdJeO",
    "WQ06sG",
    "r8kOW4C",
    "WQtdQgS",
    "q8ogWQ8",
    "zMfR",
    "hSkoEW",
    "gtX7",
    "fmoVgG",
    "WPHwxa",
    "WPPamW",
    "WOxdH04",
    "B8kYW6q",
    "CY4G",
    "xCk3nW",
    "u8kDbW",
    "W57cVmoC",
    "W6L2iW",
    "quvs",
    "Cg5Y",
    "BfZdGG",
    "hmk9WRS",
    "ECkqW7m",
    "mSoKgG",
    "DgLH",
    "W6Heaa",
    "DgvY",
    "y8oVW7O",
    "zW7dIq",
    "tSo/gG",
    "ALbV",
    "CSodjG",
    "C2XL",
    "W7fXca",
    "oqfj",
    "wxHp",
    "bSo6gG",
    "DcbY",
    "y2HF",
    "z1Pw",
    "Bmo6iq",
    "amkakG",
    "r8kNgG",
    "suXU",
    "W6VcHhe",
    "wSozWOy",
    "v2To",
    "CNL0",
    "i8otjG",
    "FW5A",
    "aYzL",
    "W7PUgG",
    "W6FcKtW",
    "xxZdQW",
    "WOFdKeK",
    "t1vq",
    "WQ7cUSoE",
    "xmkrWR0",
    "x3RdVW",
    "qfdcIW",
    "Avnr",
    "W69Jca",
    "B8oimG",
    "DCkmW64",
    "A8ksBW",
    "W6KJWQ0",
    "x1bv",
    "WQ96pa",
    "CgXP",
    "Aw5P",
    "bsH1",
    "fCkpAG",
    "jmknha",
    "Bujc",
    "z8k2dW",
    "W5VcVCoV",
    "BSkzwG",
    "WP9bvW",
    "W6pcR0O",
    "vmoKWPC",
    "zgLV",
    "CM5L",
    "aSolWQm",
    "WO5tsq",
    "zg9T",
    "emocbG",
    "jmkWWQG",
    "Ag91",
    "WR9nqa",
    "umkNaG",
    "CxP2",
    "CK1k",
    "b8k8cq",
    "bCoYcW",
    "WQxdO3y",
    "WOldQ3W",
    "q3jV",
    "A8owoG",
    "F8oilW",
    "lCkXWRy",
    "WPJdHeO",
    "W7ddICoz",
    "WPXiBa",
    "fCoBWQq",
    "W6HJaW",
    "n8oHWOm",
    "W7dcNd4",
    "wKhcLq",
    "Cfuk",
    "tfPe",
    "Dmo1WOu",
    "vmo1WPK",
    "z2vY",
    "WRpdGxK",
    "Dcb0",
    "p8kxW6q",
    "ueZdMq",
    "W5rnla",
    "sCknW5a",
    "lCkmW6y",
    "WQnajW",
    "r8odWRS",
    "BSo4iq",
    "CNLj",
    "W4BcUSob",
    "zCoiWO4",
    "WRNcRCof",
    "tfjK",
    "g8kqmG",
    "Emo6WOK",
    "qMLU",
    "WOjuW6G",
    "s0dcGG",
    "WPJdKmoM",
    "ntGYmJKXENr3tMHS",
    "q8ofWQ0",
    "Egj4",
    "ytKY",
    "W73dN8o2",
    "qSk9W4G",
    "ymkZgW",
    "jrTR",
    "xSk3nW",
    "k2FdUG",
    "WR9ZuW",
    "zKjX",
    "W7vBW6u",
    "W6K7WRe",
    "z8k2hq",
    "C8kAW68",
    "cKjb",
    "uSo1WRS",
    "D8k7eW",
    "W5/cU8oC",
    "W7iVWQK",
    "pq5E",
    "a8o+ga",
    "pXNcPa",
    "EgxdUW",
    "DwzY",
    "ihDP",
    "W63dGmou",
    "WOjMW5u",
    "BNrL",
    "xmkdW4W",
    "tCo2WPi",
    "Efj0",
    "WPNdVmo3",
    "WQRdNMq",
    "W751W6q",
    "v2LZ",
    "wmkKW4y",
    "ywnO",
    "W4tcPge",
    "BmktW6G",
    "lIbd",
    "WRRdTva",
    "igfU",
    "mCkWWRS",
    "lNnP",
    "tg9S",
    "B8oEiq",
    "WRRcVSon",
    "qKhdMW",
    "W7uZWQ4",
    "W63cGwq",
    "CgXm",
    "wfH1",
    "ySklta",
    "WRHYpq",
    "BmoAla",
    "j8k5WR8",
    "lCknW6y",
    "B8oFnq",
    "ucbc",
    "svnr",
    "zSo4WPy",
    "BMzu",
    "F8o5WQy",
    "hmoBWQq",
    "W4vlnW",
    "y2fT",
    "bh05",
    "mca4",
    "fKb3",
    "W6BcJZO",
    "Eu5n",
    "WRhdOmol",
    "tCkHW7K",
    "tM8G",
    "wSk9za",
    "WODhla",
    "l2fW",
    "FmkCpW",
    "uCoMWOe",
    "w8k6W4m",
    "CmkZgq",
    "zvDb",
    "Ag9W",
    "gSoFWR4",
    "tevd",
    "xsbi",
    "WQhcVSoC",
    "W4jWfG",
    "W7LtgG",
    "W6BdL8ol",
    "yxrP",
    "iSk4WR8",
    "aSoPca",
    "WOXfsW",
    "Dg9j",
    "AguG",
    "D2HH",
    "q8kmcW",
    "WQlcUSot",
    "lY9N",
    "wKXA",
    "r3L0",
    "t04G",
    "hSo1WRK",
    "tYbg",
    "sCoKWOC",
    "dCkuWPy",
    "WOFdHem",
    "WPVcRmki",
    "t090",
    "WQFdNgS",
    "u8oOWOa",
    "uCkQea",
    "zgvM",
    "FCkaW60",
    "xSocWOC",
    "vgfw",
    "eSkoEG",
    "eCknya",
    "txnW",
    "bCoHha",
    "BmkdW6W",
    "k1rz",
    "rCkQWOK",
    "WORdGKG",
    "BhzJ",
    "W6xdJNe",
    "zuvU",
    "wmkRhG",
    "AM9P",
    "qSkKWR8",
    "yv0G",
    "W55KW7C",
    "xSkRW5q",
    "hCkaiW",
    "FSoajq",
    "WPBdJmoq",
    "BwfU",
    "W5rqmq",
    "zs5Q",
    "pCkAja",
    "WRtdOgm",
    "c8kbjG",
    "CM1P",
    "W73cI1C",
    "CguG",
    "fWZcSq",
    "C8ospW",
    "W5JdTCon",
    "W63dU8ow",
    "E3tdRa",
    "WPLcqq",
    "BgvY",
    "s0dcJW",
    "A2vW",
    "FmktW64",
    "ymkgW7G",
    "qvbb",
    "p2NdOa",
    "lI9Z",
    "WQTiiG",
    "DxjU",
    "Dg9Y",
    "v8oTWPe",
    "ihnL",
    "W6vvvW",
    "igHH",
    "Awnc",
    "zSouWRa",
    "nmkzWPG",
    "qmkHWOW",
    "Cg9Y",
    "Cg/cSG",
    "WQHdmG",
    "CfLt",
    "W6RcKZ8",
    "WPruW7m",
    "Bmoija",
    "xCowWRu",
    "W7i0W7i",
    "W4NcOKi",
    "vCoUWPy",
    "W7hcNZa",
    "ENxcSW",
    "iSkoW68",
    "y2XV",
    "yI9J",
    "BmkdW5i",
    "Bxfn",
    "WPhdQKe",
    "C8kvWOS",
    "g8kpFq",
    "Ccb8",
    "x1vs",
    "z8oyWPW",
    "DLNdUW",
    "BNLJ",
    "umocWRS",
    "bmoOdq",
    "W7dcUg4",
    "WQvUua",
    "CghdPW",
    "W4Lqma",
    "WPvYW7e",
    "W5uauq",
    "xCkYdW",
    "CSowoq",
    "CLbj",
    "svhcLq",
    "W6ZdJhC",
    "E3RdQa",
    "n8oPjG",
    "kmkqWRy",
    "zsb5",
    "yxLZ",
    "DSkrW7u",
    "WRldKxS",
    "Ag9K",
    "DYtdJG",
    "BSodjG",
    "WQxcJva",
    "y8kyaG",
    "CNnP",
    "WPWaqW",
    "WOddH0m",
    "iN0N",
    "tNfW",
    "wLz1",
    "i8kpva",
    "W7FdIhC",
    "tg5R",
    "tMXI",
    "r2Dk",
    "Dxbt",
    "WQdcSCoj",
    "W6BcHLm",
    "jmoGva",
    "pJbe",
    "v8oXW4O",
    "yNVdUW",
    "lSkfWO8",
    "WPFdGui",
    "rCoUWPa",
    "lNldSa",
    "WRnhW5S",
    "ifn0",
    "y0vX",
    "WPJdJei",
    "rvzb",
    "W656WRi",
    "q3RdHq",
    "eSk9Eq",
    "zgXL",
    "W4lcUti",
    "D8oiW4q",
    "CSoEWPS",
    "smkIW40",
    "W4nJcq",
    "W4RcRH4",
    "uCk7sa",
    "W6ddI8ow",
    "WQtcNNC",
    "nmkpAW",
    "lSoLxa",
    "t8kFma",
    "tmk5W4e",
    "fMH6",
    "W4xcRCoB",
    "W7fjzG",
    "W4nEW6S",
    "A0zJ",
    "DmoljG",
    "lSkxWR4",
    "vWpdJG",
    "cLjr",
    "WQClWO8",
    "ywr4",
    "D8kEW7i",
    "hmkJWP8",
    "WRruW78",
    "ugnX",
    "DhNdOa",
    "DhLr",
    "FSoYlq",
    "fmk1bW",
    "fxb6",
    "zgddQW",
    "zgvU",
    "DmkRW5i",
    "dSkTWOm",
    "WP9jwW",
    "wSk5Fq",
    "kxHC",
    "WOPpvW",
    "WR7cJ20",
    "pHTI",
    "W5VcG2a",
    "DCkEpa",
    "W73cPgO",
    "hH3cPG",
    "BwvU",
    "x8ofWR0",
    "cSkqkW",
    "e2X4",
    "ChvZ",
    "FCobW7W",
    "BMnL",
    "C29T",
    "DMvY",
    "WPzDW6S",
    "rhjX",
    "W7vuW6a",
    "qCkXcW",
    "ymkcW7a",
    "WOa/hG",
    "sfpdGa",
    "mdaX",
    "wMvK",
    "qvb0",
    "W4xcVmoj",
    "CMLV",
    "vCoSWQy",
    "W7pdJgS",
    "suqG",
    "sfz3",
    "sLdcGG",
    "WO/dGf4",
    "W4zSgW",
    "W5VcPh4",
    "DCownG",
    "W4fGW7e",
    "F8oboW",
    "W71RBq",
    "rvrj",
    "yZDH",
    "fmo3bW",
    "gSkAzW",
    "uhbp",
    "sSkPW5O",
    "s1VcKG",
    "W4rcDW",
    "W40yWRu",
    "W7GOWRa",
    "icaG",
    "Axn0",
    "WRn7mq",
    "Dxru",
    "xfBdUW",
    "e8ojWRu",
    "W7jJha",
    "x19W",
    "ymoEWRS",
    "zhddVa",
    "hHFcSW",
    "WR5vrW",
    "W7e2WRi",
    "uMjS",
    "nmkoW5u",
    "vmoAkW",
    "zxnL",
    "yxrH",
    "uCkGW4G",
    "WPTsvW",
    "WOTftG",
    "s3DT",
    "DgLU",
    "EuBcLq",
    "nszd",
    "zSkzaG",
    "aHtcOq",
    "WRFdOh4",
    "W55YbG",
    "omo1hW",
    "W6VdGCou",
    "x2LU",
    "pmoAiq",
    "CMvQ",
    "W7vScq",
    "lI4U",
    "W6zeW5W",
    "W5jWW4i",
    "zcbZ",
    "W7nzW7G",
    "x8k/W5a",
    "hfJcOa",
    "wmovWQW",
    "DgvU",
    "zev4",
    "W65bW7q",
    "p8kaiG",
    "tCoOWOa",
    "fwH1",
    "zM5A",
    "b8oTWO0",
    "DSkCW6O",
    "b8kbzW",
    "WO5Yra",
    "FSodWOW",
    "yhb1",
    "cCkfW7u",
    "ie5p",
    "iSkHW7O",
    "DK9r",
    "W5tcPw8",
    "jmkHWRi",
    "smoFWOO",
    "WQ5imq",
    "B25L",
    "wmk0W4C",
    "W4pcPmoe",
    "wvjR",
    "uLJdTa",
    "ChbP",
    "4OczCYa",
    "WRnSfG",
    "y8kzfW",
    "lCkfFa",
    "gWVcIW",
    "W6qQWRG",
    "uSoyWR0",
    "jmo7WOi",
    "DhrP",
    "WPjcAW",
    "w8olWQa",
    "zYbN",
    "DxbK",
    "Fmoina",
    "W67dQCo3",
    "DsbJ",
    "ExvI",
    "BxnN",
    "e1NdMa",
    "l8kLdG",
    "y8kUha",
    "wCkNhq",
    "mGbE",
    "zcbS",
    "imoVhG",
    "WP5Lra",
    "WOThxq",
    "edpdOW",
    "W65rW70",
    "W6JdP8ot",
    "ihbY",
    "BCkOfq",
    "amk5WRu",
    "bCoZsa",
    "W6BcItW",
    "yNr5",
    "DCoVWPS",
    "W6xdGhW",
    "WRfLBq",
    "l8kEWPG",
    "E30U",
    "eN12",
    "iens",
    "W4ukWRG",
    "WP/dNhW",
    "Bg9Z",
    "BNrZ",
    "gXVcGG",
    "DgHZ",
    "lSoooG",
    "W7dcLdy",
    "AYbK",
    "WPpcJSoO",
    "W51xoW",
    "u8oYWOu",
    "xfxcIq",
    "zsbK",
    "imo7WOm",
    "Chv0",
    "zX3dUq",
    "W7FdKCol",
    "CgLe",
    "tSovFq",
    "CMFdUq",
    "sCkUAa",
    "tefZ",
    "W6VcJr4",
    "vg8G",
    "z3rO",
    "lCoxWQm",
    "twv0",
    "ChaU",
    "u8oKWOO",
    "W7PTpq",
    "ihj4",
    "jSoFaG",
    "WOldI0O",
    "ACkTW5G",
    "x8okWRy",
    "veTQ",
    "v0Tl",
    "DZ3dMa",
    "CmkwgW",
    "y8oiWP0",
    "a8kqmW",
    "W6uQca",
    "Amk/W74",
    "k27dVG",
    "aZX8",
    "WQXyW7O",
    "r29t",
    "g8ksWOG",
    "wmk3cG",
    "jmkuFW",
    "v8opWQW",
    "W4rqkG",
    "ugXb",
    "WQ97xq",
    "W5JcRMu",
    "kL/cVq",
    "W6vuW7u",
    "F8omWOe",
    "W67cMge",
    "ihLV",
    "WRjZlG",
    "C0fW",
    "rfj2",
    "W4lcRCki",
    "s0vz",
    "EmobWP8",
    "DezV",
    "Emktcq",
    "Ew91",
    "WQnNFa",
    "vmoYdq",
    "WQPVrW",
    "W7LlbG",
    "FMBcRW",
    "zmocWOi",
    "BIbW",
    "W5VdL8oD",
    "W6jFDW",
    "W7BcJrq",
    "zxLZ",
    "vevt",
    "WQnUcq",
    "nqfo",
    "lYtcUG",
    "WPFcOgC",
    "W6vAW6q",
    "z2HM",
    "zYbO",
    "zsbT",
    "s2HY",
    "CMnL",
    "q0Xp",
    "WPJdPSkg",
    "D8k/bW",
    "tmkPBa",
    "uerb",
    "DxiG",
    "x2XV",
    "CfddVW",
    "maVdTa",
    "zfjL",
    "yrNdJW",
    "rMLp",
    "hCkmrq",
    "CSo4WOe",
    "Cg9Z",
    "zhddQW",
    "wmkKFq",
    "ASoGWPq",
    "zxrF",
    "q2H2",
    "hmorWQq",
    "W45wiG",
    "v2HV",
    "hmkpmW",
    "WOZcHCoL",
    "WRn4yG",
    "W6hcIcO",
    "ywXg",
    "zMv0",
    "amoaWRi",
    "mCoMWQy",
    "W4VcGgO",
    "W61bpW",
    "zCkxaq",
    "uhfU",
    "W6xcGxu",
    "ms85",
    "l2xdSq",
    "x2LZ",
    "D2vI",
    "DCkVW64",
    "dSkWWQK",
    "WRLUqa",
    "ywrZ",
    "DSoVWPO",
    "WRjRpq",
    "o8o+bq",
    "mCoBAq",
    "m2HhDwzVzG",
    "B8kyrq",
    "xCk/W4K",
    "WQtcJsm",
    "Def1",
    "WOvqW70",
    "l8o0ba",
    "lY9S",
    "W6vyAa",
    "q8ktda",
    "ymkxpq",
    "ECkwW68",
    "W6BdLSok",
    "gCo0dW",
    "W7q0WR4",
    "C3m6",
    "W5jgjq",
    "zxbO",
    "wLv5",
    "WO5wrW",
    "AvfW",
    "uCk5FW",
    "A0rj",
    "AmkubW",
    "g8kpEq",
    "W68UWRq",
    "eSkXAW",
    "vmoGWOm",
    "C8o6gG",
    "u1Dp",
    "DmoLWP0",
    "t0TF",
    "W5BcUxS",
    "EwBdGq",
    "W6XlW6C",
    "h8o+gG",
    "Aw1W",
    "WOtdQSok",
    "W5Dvxq",
    "BNqG",
    "b8kbBa",
    "xCkTaa",
    "W7mUWPu",
    "WQ12nG",
    "c8kdzW",
    "xmkYAG",
    "rSo0WPC",
    "v8oapG",
    "qwXS",
    "BSkisa",
    "W5RcRCog",
    "FSktfW",
    "zwn0",
    "W6BdISoE",
    "te9Q",
    "Dmoyya",
    "W5pdRCoN",
    "tufj",
    "W5VcRCoB",
    "mxpdSa",
    "uKrF",
    "fSkgWOu",
    "v8ktaq",
    "ar3cPW",
    "ymo6aW",
    "q8odWR4",
    "EmkBW7O",
    "Dcb2",
    "iX7cSW",
    "WPXDfa",
    "EwT5",
    "AwXK",
    "txv5",
    "W5FcUmoy",
    "BvLS",
    "ic1i",
    "iSk8aW",
    "Cgu6",
    "vuPZ",
    "xmk3Ba",
    "WQHfEq",
    "vYRdRq",
    "W5DBW4G",
    "nCkbWPu",
    "y3Hq",
    "eXBcSa",
    "B8kveq",
    "W7W3WRG",
    "wSk5EW",
    "kMxdSq",
    "FSo6WO0",
    "yvLr",
    "EmoPWOu",
    "yxvS",
    "rGZdPW",
    "hr/cVq",
    "zMuW",
    "tmksga",
    "kIaQ",
    "dCotta",
    "W6XJhq",
    "WQ7dNmo3",
    "DhjP",
    "pCoTga",
    "W5HYW6a",
    "WO9FW60",
    "zwXV",
    "CvnH",
    "vfzt",
    "WRLjnq",
    "W49fma",
    "D8ocjW",
    "DhvA",
    "lubx",
    "qSoZWPy",
    "mCokna",
    "qSovWRe",
    "cGPb",
    "r2vQ",
    "W7dcIfq",
    "BLbR",
    "a8osbG",
    "DxaT",
    "WQ52la",
    "u2zc",
    "WOHfua",
    "Cmo+WP0",
    "BxmG",
    "DYb5",
    "z8o+WPy",
    "W6/cMdC",
    "w0rL",
    "WRFdNwi",
    "ihrV",
    "mCoqW6a",
    "bh94",
    "CMeG",
    "wmoKWOW",
    "qvLt",
    "iSoVbq",
    "W5NcNZS",
    "Bwv0",
    "B3jP",
    "o8oDmG",
    "W6zrvG",
    "xmkAW7O",
    "D8oqja",
    "Dmo4WPO",
    "W4lcUui",
    "y8kfdq",
    "gXBcSG",
    "fCkOW4q",
    "WPOhua",
    "iCoZjG",
    "iCk+WPG",
    "Dmo/WO0",
    "W6hdN2S",
    "Dg9t",
    "icj4",
    "ymkkW6W",
    "a8o4aa",
    "yMjI",
    "WPFdOc4",
    "DxrO",
    "W7RcRh4",
    "FNldOq",
    "zwfU",
    "ymkRaW",
    "cwNdMG",
    "C0nV",
    "dNldTq",
    "W6fvsa",
    "rmk7W4W",
    "W5NdQmoB",
    "CM9P",
    "F8oxkW",
    "WQbuwG",
    "EwXQ",
    "BSkniq",
    "WProsq",
    "C2uG",
    "zhZdQa",
    "WQZcQ8oz",
    "D8kEW7u",
    "BwLZ",
    "vhLW",
    "lZm6",
    "e8okWRu",
    "vCk1ja",
    "ESk8W6a",
    "iNjL",
    "W7FdIgS",
    "CM9J",
    "WPVdOmoA",
    "BM90",
    "e1NdMG",
    "C2v0",
    "a8kfzG",
    "d3ldGq",
    "WPjEW40",
    "DwLR",
    "DZJdHa",
    "zCkAka",
    "W6xdI8ok",
    "zwxIGjK",
    "yexdNW",
    "EseG",
    "svnA",
    "W7FcKHa",
    "mmksCq",
    "uhjV",
    "vMrh",
    "WOzoqq",
    "sIddRW",
    "suXf",
    "BSkOAa",
    "W4z1fq",
    "BSkoW6S",
    "nmkcla",
    "W5NcKMa",
    "WOPsua",
    "pSkiWPO",
    "EmoCpq",
    "WP53Fa",
    "vCodWRy",
    "pSodkG",
    "qu9P",
    "DCoeWRC",
    "qMHN",
    "ueLF",
    "W65/W74",
    "r2Ls",
    "rxvK",
    "kwFdSW",
    "FKbp",
    "CmknWPy",
    "zxjH",
    "WQ4BWR4",
    "W5Plqq",
    "B3DL",
    "F8kvW6S",
    "vSk3iq",
    "C2L6",
    "y3ji",
    "BSkSW4O",
    "EuXf",
    "W6PfmW",
    "fmoQaa",
    "q8oYWQi",
    "W4rmiG",
    "zCoPWOK",
    "B0Xl",
    "p8kGkW",
    "C0PM",
    "D05L",
    "DgLJ",
    "ewHR",
    "DmoJia",
    "W4pcPg0",
    "CMv0",
    "qSoIWPa",
    "lwZdTG",
    "qwDb",
    "Axb5",
    "k8oOdq",
    "zCoyta",
    "qSkKW4a",
    "WPZdULa",
    "bmkjCq",
    "vLbt",
    "W6ldKmoD",
    "WOFdI8oi",
    "BwVcSG",
    "WRz+sW",
    "B8oxWPm",
    "vMzI",
    "WRFdR3q",
    "WR9FiW",
    "W6BcKIW",
    "A8kgW7m",
    "C29U",
    "qu1L",
    "nWPy",
    "hCooWRu",
    "ExtdOW",
    "W73cGwa",
    "W718na",
    "FSkgW7e",
    "rvDF",
    "BCoCiW",
    "WR5ZnW",
    "DSo0WOe",
    "sSknWQC",
    "tevz",
    "pCkaWPS",
    "ntCWmKrSDxzUrG",
    "W7ddJCoF",
    "oIbO",
    "icHZ",
    "rvfK",
    "eSkGWR8",
    "W44UW7C",
    "DgfK",
    "A1FdTG",
    "BMvY",
    "WP1fqW",
    "cHhdSW",
    "zxjP",
    "amkenq",
    "WQ/cSmoK",
    "WQL6ia",
    "W4xcRga",
    "ig1V",
    "W7ddGCol",
    "oG3dTW",
    "rSoKWRe",
    "E8kAW7i",
    "W6VcKM4",
    "tgLK",
    "m0Xk",
    "gCkjAq",
    "W6pcLhe",
    "WQDkxq",
    "b8oFpW",
    "xSk0Ba",
    "WRpdRgC",
    "zxH0",
    "W5pcRhO",
    "h8o8sa",
    "kSowrq",
    "paRdPW",
    "ys9l",
    "Dw5Z",
    "ChddUW",
    "Bg9H",
    "WOLstq",
    "W7pcMcS",
    "vCk1qq",
    "q0i6",
    "vmocWPO",
    "W71UtW",
    "C3nH",
    "CYaG",
    "m8kpWOW",
    "l2XL",
    "W64/WQK",
    "b8kvBq",
    "FCoela",
    "C3ru",
    "W6qcAq",
    "W7pcN8o3",
    "W7nufa",
    "W6RcJtG",
    "zcbW",
    "WOrBEW",
    "zYbH",
    "WQznja",
    "rColWRW",
    "BwjL",
    "CM90",
    "WQRcR8kn",
    "WOLbW6O",
    "ieTy",
    "FSktrq",
    "W68CWRG",
    "uSk2WQe",
    "BCk/Ea",
    "CvL2",
    "AMzr",
    "CNtdVa",
    "WRldP30",
    "C2vo",
    "fSkdFq",
    "igXV",
    "W65ZW6a",
    "CwDk",
    "ESkmW7u",
    "i0zn",
    "WO9FW7K",
    "W4/cVSklW6RcU8oNW5VcQNFcTa",
    "W6LdW7q",
    "DYbP",
    "grBcVa",
    "zYbZ",
    "maVdTq",
    "W4hdRLe",
    "emoiiq",
    "EeXM",
    "zxbH",
    "lI9I",
    "zSkzbG",
    "DmojWOO",
    "kSkcdq",
    "zw1L",
    "vg9k",
    "h8oebG",
    "vg5f",
    "B8oilG",
    "CZ/dOW",
    "BePX",
    "ig91",
    "WOldV8oD",
    "vK9t",
    "CMnV",
    "EcbY",
    "mCkWWRC",
    "qKje",
    "WR9jmW",
    "W4dcMhy",
    "swyG",
    "AvPY",
    "D2vS",
    "C2LT",
    "W7ddJhu",
    "vCk1zW",
    "A2ns",
    "l2PP",
    "amkQkq",
    "mdbT",
    "WOPdvG",
    "e8osWRW",
    "BIbr",
    "z0v4",
    "t29o",
    "WRL0tq",
    "mCk5WQW",
    "zmkkW6K",
    "qSoLWRe",
    "W4FdHxW",
    "igvU",
    "lCkGWRC",
    "ruvz",
    "mrFcOq",
    "AwvZ",
    "jmo1ca",
    "zmkbW7K",
    "w8kSaG",
    "B3jH",
    "CKDo",
    "aSkoAG",
    "CmoOWOq",
    "Df9Z",
    "WQBcTmoS",
    "W4lcP8ki",
    "y3ddQW",
    "khmP",
    "gCkxBG",
    "WOrdwW",
    "qH/dHq",
    "ywnL",
    "CIbW",
    "A8kraa",
    "mwFdRq",
    "vgTd",
    "wwrq",
    "aCoYbG",
    "ANrO",
    "n8k0WRK",
    "c8khmW",
    "yNVdRG",
    "W5VcU8op",
    "W4pdPfC",
    "bMXR",
    "umolWQ4",
    "WRPqrG",
    "os9Y",
    "DgLS",
    "D8k4oG",
    "WOzZtq",
    "fSkEWRm",
    "W7BcIxK",
    "W65ciq",
    "b8o2WOu",
    "rNPP",
    "mJmX",
    "ms9J",
    "zw9W",
    "igjY",
    "mSo3aq",
    "t19n",
    "W7FdHxW",
    "eCkqWOK",
    "WO9AcW",
    "BgLK",
    "ExddUW",
    "f8omWQi",
    "WQpdImor",
    "W7TvvW",
    "W6hcKI0",
    "jSo0iG",
    "WO9cW5a",
    "ySoDW4i",
    "W4nlW6O",
    "hCoqWR4",
    "ChHu",
    "DhtdUW",
    "qLvh",
    "W6BcMrO",
    "qCkPaa",
    "a8kumW",
    "W47dO8oS",
    "oK1n",
    "W4rHCa",
    "umofWRq",
    "W69vbG",
    "vuDF",
    "W67dIfS",
    "e2b6",
    "nCkHWQ8",
    "lufV",
    "lI9J",
    "wGXF",
    "BhmG",
    "CSoIWQK",
    "qurR",
    "CMfU",
    "WRrXlq",
    "acBdLW",
    "shZdOq",
    "W55OW6G",
    "WO/dGea",
    "W6TJhq",
    "W4lcOCol",
    "C1bj",
    "CSoclG",
    "fCo+ba",
    "FCoAW5S",
    "zde2",
    "lCkWWQ4",
    "WRXXla",
    "r8k2cG",
    "omksWO8",
    "zeDl",
    "rmkJW74",
    "vSkTaG",
    "WRHVla",
    "reLt",
    "DMHQ",
    "oCkjWPu",
    "f8okWQi",
    "uCk4wq",
    "WPZdHLW",
    "ywL3",
    "CgXw",
    "zsbW",
    "WR9mvW",
    "BmowkW",
    "ag58",
    "W6lcKdW",
    "rIZdUa",
    "FwFdUG",
    "AxbH",
    "hcFcUG",
    "C8kBWQe",
    "yCk5aa",
    "W6NdIgO",
    "v3rS",
    "W4CtWRm",
    "W6BcHmoP",
    "W6ZcKhm",
    "z8ktfG",
    "De1U",
    "qSkHWOu",
    "aGPA",
    "ECkAW6W",
    "WPNdIqm",
    "xCkOW4u",
    "WOqmdW",
    "Aw5K",
    "quzT",
    "W4verq",
    "yxddOW",
    "uCoFW4G",
    "WPP0tW",
    "WRNcRCod",
    "ieLM",
    "rghdRG",
    "nSkMvq",
    "zSoTWPm",
    "CwHU",
    "BSkxeq",
    "a8kecG",
    "zmoiWPW",
    "mSo0hq",
    "W5xcQwG",
    "AgvS",
    "vgLT",
    "zmo6WPS",
    "m8k9WRu",
    "W5ZdLSoD",
    "W5ZcGMa",
    "W647WRO",
    "D8kYnq",
    "rmoUWOO",
    "WRNcU8ol",
    "r3vM",
    "W6hdMhW",
    "vmoKWPa",
    "pghdSq",
    "yNzk",
    "kHxdVG",
    "smoaWO4",
    "umo6jW",
    "zmoiWPS",
    "kGddPG",
    "W7b3cW",
    "WOzorq",
    "wCk8W4q",
    "W7KVWQG",
    "yqJdHa",
    "sKLe",
    "C2HL",
    "hmogiW",
    "iff1",
    "k8oRjq",
    "W5pcOwS",
    "DfjL",
    "mwpdUG",
    "W6pdIgS",
    "rgvS",
    "zcaO",
    "zgvZ",
    "WOXiBq",
    "zfbY",
    "jaPy",
    "W4BdS8oN",
    "W5ldNNa",
    "gCkvCW",
    "B8kxW64",
    "4PQHiee",
    "jCoHaG",
    "rezw",
    "vuHO",
    "Dhbx",
    "WODHmq",
    "WQldQ3W",
    "CSodmW",
    "ihrH",
    "t8k3ta",
    "vCoQWRe",
    "DKzu",
    "B3vU",
    "WRX+sa",
    "xsa0",
    "iSkZqq",
    "B20G",
    "W4BdHCoB",
    "BmkecG",
    "ms/dPW",
    "yw5K",
    "vCkVeq",
    "WRzrba",
    "A29S",
    "Cvr2",
    "BgXL",
    "WOBdJem",
    "fSkqBG",
    "dSk0WQO",
    "D8o5WQC",
    "nrPp",
    "y2nV",
    "FmoJWPS",
    "paPE",
    "wmk4W5K",
    "WQyqdG",
    "omkZWP4",
    "W4HZW6a",
    "WRXWfW",
    "W70/Ea",
    "WP7dOCoA",
    "W67dNNy",
    "ifLV",
    "C3vI",
    "WQ9yzG",
    "zMX1",
    "CMvH",
    "WP9TrW",
    "mH/dUG",
    "CYb3",
    "WR1ejW",
    "FmkqxG",
    "rg9y",
    "CKfK",
    "lCksWP4",
    "W7jNda",
    "a2zT",
    "FmkxcW",
    "eSoVsa",
    "v1zp",
    "W71xea",
    "W7FdHgm",
    "twfW",
    "nmkqWPO",
    "x05b",
    "q0RdGG",
    "WRP6la",
    "l2jV",
    "W781WQK",
    "W7DZta",
    "W6HWbG",
    "W6LwW7q",
    "r8k3W6u",
    "nCkWWRq",
    "BL9U",
    "fmk7eq",
    "D3zT",
    "WPVdO2e",
    "m8kLW7q",
    "wxDW",
    "W6LYcW",
    "WR0kWRe",
    "W7jLtW",
    "pgxdOa",
    "zsbP",
    "y21K",
    "W7FcPSom",
    "FSkkW6W",
    "n8kjWP8",
    "CCovkq",
    "C2vU",
    "WRPEiW",
    "WOeHW6e",
    "EuLm",
    "c8kBmq",
    "B2Do",
    "DXtcKa",
    "W6BcUwW",
    "C8oLWPW",
    "feNdMG",
    "WRNdSMu",
    "q8kMW5e",
    "ySopW6O",
    "B8kcba",
    "WODbvG",
    "z25H",
    "yqtdKa",
    "W55KW6S",
    "Aw5Z",
    "rK9s",
    "lNDO",
    "BgX5",
    "WPTdrG",
    "uNjt",
    "bSohWQa",
    "uSoEWPS",
    "W6hdNxu",
    "C8ocnq",
    "WQzkAa",
    "ACoakq",
    "W5vkjG",
    "AKz5",
    "C2fv",
    "sw50",
    "AgLU",
    "o8oevq",
    "b8kglW",
    "WQtdMSo9",
    "WPvuW6O",
    "WQG6ba",
    "CmouDq",
    "W7hcLha",
    "WQT/xq",
    "WRJdRwy",
    "sSkGW4W",
    "s2v5",
    "W4rpkG",
    "F8oLW4G",
    "W6BcJYS",
    "Ac1V",
    "y8kaWRi",
    "fwb0",
    "tK9F",
    "xsbd",
    "WRTTnW",
    "tmo2ha",
    "AxPL",
    "pSoNWOK",
    "e8oZyq",
    "qSkUWO4",
    "B8kyeW",
    "mcaW",
    "wSo9ea",
    "W4/cP8oD",
    "Df9L",
    "WODskG",
    "amkbdW",
    "iCkhya",
    "vvnF",
    "umk5EG",
    "th9W",
    "tSk9BG",
    "EX3dIW",
    "W7y/WQK",
    "WQLjbW",
    "kcGO",
    "xh/dTG",
    "W59TcW",
    "WPNdNui",
    "WQtdP3a",
    "W7GIWQ0",
    "zgnH",
    "W4rVW6i",
    "umk0la",
    "qx9W",
    "mCkfWPu",
    "nZpcLq",
    "rmopWRy",
    "w8k+WPm",
    "WQFdM2C",
    "dNTW",
    "FCkPWO8",
    "DhrL",
    "tcbU",
    "W5pcGgS",
    "k8kHWQ4",
    "zsbH",
    "DwLW",
    "ymkdpa",
    "q29S",
    "WOnHW6W",
    "W5/cRhO",
    "tCohlG",
    "W6nJDa",
    "WRtdQ38",
    "cHZdMq",
    "cg1p",
    "W5pcUSkg",
    "W5BcPKq",
    "W7iqrG",
    "iZP/",
    "WQFcQ8op",
    "WRJdMSoT",
    "y2TP",
    "DMddUW",
    "pabn",
    "lCojbq",
    "DEkaMxi",
    "WRbvW5K",
    "ALvI",
    "j8kzWRm",
    "WQjfuq",
    "mSk3WQO",
    "WQ9xsG",
    "WQhcTmoD",
    "vNLU",
    "WRzvvG",
    "tSkUW50",
    "sKrH",
    "z8ojWO4",
    "W4hcPLO",
    "BgLZ",
    "l8ooWRK",
    "W6FdNLa",
    "WQj/xG",
    "vSoeWR4",
    "W4HUW7a",
    "B3jL",
    "amk0da",
    "W7DNhq",
    "W6K/WRm",
    "wCozoG",
    "W4RdQCoX",
    "xSk9W40",
    "WQnAiW",
    "Chm6",
    "DxRdUW",
    "WQVcSmoE",
    "WO9Ena",
    "igfZ",
    "z2BcTq",
    "c8oSeq",
    "W4FcRhW",
    "v8ohBW",
    "igeG",
    "bYLQ",
    "hmoYbG",
    "y2HV",
    "aSkyWRm",
    "sSkabq",
    "zX3dJG",
    "zvbH",
    "nr1y",
    "A8kkW7i",
    "igLU",
    "uKuG",
    "rhtdUG",
    "Emoilq",
    "WP/dUKG",
    "aSoYbW",
    "vSkTgG",
    "iezv",
    "igH0",
    "vmkSpa",
    "BIb5",
    "uCkNea",
    "CMfP",
    "mvNdPG",
    "pCkSdG",
    "y8omWO0",
    "W6tdHSo/",
    "W7BcJJW",
    "aSk2WRi",
    "yMXP",
    "CfHV",
    "ihn1",
    "yMBdQG",
    "DmookW",
    "WRpcKmog",
    "W6SZWPK",
    "Dmk/bG",
    "pmkMdG",
    "nmkoWPW",
    "j8k2WPW",
    "fSoVaa",
    "yLvR",
    "D2fR",
    "zCkQba",
    "WPFcONW",
    "W4pcQhW",
    "WRHeEG",
    "AxhcVq",
    "CmoiWP0",
    "y3ddVq",
    "W4jknq",
    "eWVcSq",
    "CNLW",
    "nSo+aG",
    "WRfQpa",
    "lbxdNW",
    "fJRdNW",
    "e8kooq",
    "ywX3",
    "qvBcJq",
    "fCk7aa",
    "iSkYWR8",
    "twLN",
    "lJGU",
    "BxbS",
    "CSkAW6u",
    "WO5FkW",
    "t2DO",
    "WO9sW5y",
    "W6RcRMS",
    "ESooWOq",
    "W7pdHCok",
    "ugX1",
    "W6xcRCog",
    "W5hcTLO",
    "Bwf5",
    "u8oLWOu",
    "E8kSkq",
    "igLK",
    "W7vYdG",
    "wSkDaa",
    "AmojiG",
    "BmkAW7u",
    "c8kgmW",
    "WR9xBq",
    "irPp",
    "CCofkG",
    "b2H1",
    "WPVdOmoE",
    "y8ooWO0",
    "WQLMka",
    "W7ZdOvW",
    "aGPl",
    "W57dNrO",
    "W7dcVJy",
    "W4jFba",
    "BKnV",
    "lmkMWRm",
    "W7CIbW",
    "r1RdNq",
    "tg9J",
    "oMpdOa",
    "W4ddOSoO",
    "4Ocuig4",
    "vmoZEG",
    "WRddP2u",
    "WOFcKmo+",
    "o8oXsG",
    "lSkGWP0",
    "W6LSgW",
    "BhzL",
    "fxbi",
    "q0Pj",
    "cKzb",
    "WQjXxq",
    "WQpcNJG",
    "q3Pu",
    "W57cR+kcRq",
    "uKvF",
    "ECozWOO",
    "rxn0",
    "zf7dLq",
    "qmkWbW",
    "W5CcWQFdIHNcIh1NiG7dTJH2",
    "cCk8WR4",
    "sv9l",
    "eNPW",
    "AuXP",
    "wmkAW4a",
    "WPBcP8oA",
    "aCkbzW",
    "W7JdRCkA",
    "w1ddLG",
    "W5NcUSob",
    "ECoEWR4",
    "W63cOJC",
    "C29S",
    "fmo/kW",
    "Egzk",
    "CaldNG",
    "WPJdHfS",
    "W5hcRgi",
    "te9d",
    "WRTpaG",
    "AfjV",
    "isDT",
    "W7HpdG",
    "zMLN",
    "ngddVq",
    "W7Leqq",
    "WOhcTSoA",
    "WRL0xq",
    "rCkIWOq",
    "ihzP",
    "WPJdGf4",
    "W4nQdG",
    "phldTq",
    "W7nJcW",
    "hH3cOG",
    "AxzL",
    "u8k9za",
    "sv9q",
    "z1RcKW",
    "WRL0qG",
    "sgLh",
    "WQ13ta",
    "eSksBa",
    "obTE",
    "v8opWRy",
    "BCkPmW",
    "kWddVW",
    "CxrV",
    "Bg9W",
    "WRNcRmkq",
    "zvbY",
    "lgHV",
    "WQL5xq",
    "pGPg",
    "lhr5",
    "W4nMWQu",
    "W55jkq",
    "W4XLW6G",
    "WQzLjW",
    "lMPZ",
    "Bwf0",
    "WPBdPmoC",
    "BmoCpq",
    "W6vBW6C",
    "u3vZ",
    "W7vbW7C",
    "whPH",
    "W7baW6i",
    "sghdVq",
    "WODveG",
    "sSkJW40",
    "v8oYW54",
    "FCkHsW",
    "WQ91rW",
    "eCowWPC",
    "a8oVsa",
    "jMrL",
    "ksdIGjq",
    "zNmT",
    "BSkdW6y",
    "WRPznq",
    "DgLK",
    "WO9EW7a",
    "WQ57wG",
    "tKfY",
    "tSk+W5O",
    "W71GaW",
    "tM93",
    "uCkWha",
    "FCkqW7u",
    "tfvA",
    "u0Lp",
    "zwru",
    "yw5V",
    "rKLy",
    "ertcUW",
    "WRfpna",
    "W5xcUSob",
    "yxr0",
    "aSoFWQq",
    "W4RdSLu",
    "iokaLca",
    "W6XTaq",
    "ywrs",
    "xsbq",
    "W4BcVmkaW6FdVCk7W5/cT0NcH8kfWQC",
    "zghdRG",
    "eSkyBG",
    "WQ52nW",
    "tMjf",
    "W7hcJZy",
    "C1Hi",
    "vmkXBa",
    "DgGG",
    "W4X8W58",
    "BMvS",
    "kmkWWQm",
    "f8o3bW",
    "W6pcR3W",
    "F1Wd",
    "WQHisq",
    "WPDeW7S",
    "WPfqW6W",
    "FKZcIG",
    "ENddOa",
    "w8kaW4W",
    "WR5WnG",
    "AmoJaW",
    "W4BcVCoB",
    "W7e/WRm",
    "z3tdVq",
    "WOboaG",
    "u8k7kq",
    "WP5jwG",
    "hmokWPG",
    "W4tcQh0",
    "suqO",
    "fbVdIa",
    "WQ02vWFdM8kMfmkwpYi5",
    "iGby",
    "igXP",
    "Amkzeq",
    "W5vsiG",
    "g8o9WPG",
    "W65Jlq",
    "WR5hpG",
    "xSkCW7a",
    "W5uwWR4",
    "WO5Pba",
    "ieKG",
    "W6zCqq",
    "b8oBWQm",
    "fwzR",
    "WOnvrG",
    "BNvT",
    "eSkoAa",
    "EMDr",
    "CmkrW6C",
    "FmoimG",
    "A03dIW",
    "W7/cLdq",
    "hmoAWRu",
    "gXBcOq",
    "WQ9EgW",
    "C3nP",
    "igrV",
    "WRrPpq",
    "tvVcIG",
    "wSk4W4W",
    "wSk5Bq",
    "WRFdTNa",
    "igHL",
    "lGOk",
    "yI9Z",
    "WOLMka",
    "WR1OsG",
    "nMmX",
    "W7nerq",
    "WPxdO8oq",
    "fmktBW",
    "t25h",
    "lSkWWQ4",
    "vent",
    "BgLJ",
    "ignH",
    "E8kJcG",
    "CmoKW4G",
    "AgvJ",
    "rCkIoG",
    "W5r7kG",
    "FmkdWPO",
    "DxLr",
    "a8o0cW",
    "aCoxWR8",
    "ueft",
    "W4Tbnq",
    "t8oQWR0",
    "f8ooWRW",
    "zwfM",
    "W5xcHga",
    "W6GWWOS",
    "bWZdTa",
    "oYbY",
    "x1Df",
    "t8o1WOW",
    "Cmk/bG",
    "WQtcJtK",
    "aSoRba",
    "WPXjtq",
    "zuDb",
    "qstdPq",
    "w8kmgG",
    "WRvQta",
    "vwjO",
    "n8kfW6u",
    "pSkfWRi",
    "WQHosq",
    "pefq",
    "W6fBW7u",
    "lI9K",
    "Axng",
    "W688WQ0",
    "ESkdfG",
    "fI7cLq",
    "W6DKW4m",
    "wmotWRa",
    "v8kUfq",
    "uK9w",
    "WQtdN3W",
    "w8ksW5S",
    "vK9l",
    "A2v0",
    "k8oRWRy",
    "ywVcQG",
    "beP4",
    "W5JcRCol",
    "xmonWRK",
    "ig1L",
    "v25z",
    "sCkSEG",
    "EmoKWO4",
    "W6xcNmof",
    "ywXq",
    "rwzX",
    "wCkIW4a",
    "Dun3",
    "igjL",
    "jSkGwW",
    "WPfFW7C",
    "b8ofWRy",
    "ECo/WRW",
    "rwfJ",
    "CaJdMa",
    "W65Naq",
    "qmkwW7i",
    "phxdVW",
    "B8oiya",
    "W7FdUNa",
    "ACkzcW",
    "hSkoEa",
    "W7pcJZy",
    "zsVdNW",
    "x0Xp",
    "WPzera",
    "quXm",
    "y3jL",
    "WRz6iq",
    "tv9q",
    "WQndra",
    "vgPk",
    "Bg9N",
    "bHdcSq",
    "DcbT",
    "W7KIhq",
    "WOfpvq",
    "FSoKWOq",
    "B25S",
    "khDP",
    "WPNdQ8ov",
    "jmodca",
    "WP1EFW",
    "ar3cTq",
    "W65UW7a",
    "W6hdN3G",
    "WOTqW7a",
    "r8ofWQ4",
    "WQTZrW",
    "WQHsW64",
    "nCkWWR4",
    "umk0W6S",
    "umoGWPy",
    "nJ3cLG",
    "WOPtvG",
    "ExmU",
    "FtVdNq",
    "FCoLWO8",
    "ia5y",
    "BIa6",
    "WR9IBq",
    "n8krWQ4",
    "W6FdImoD",
    "C3vW",
    "e8kkW7O",
    "W5tdPh8",
    "rCkxaq",
    "WQnCjW",
    "Bfb6",
    "Cmo5ia",
    "BMCS",
    "WQtdQLK",
    "W7HTW6G",
    "W7vSdq",
    "BIaO",
    "DmoUWQS",
    "W5nrma",
    "ue4O",
    "W7ddImor",
    "DMfp",
    "WR/dRhi",
    "BNrq",
    "WQtdP2i",
    "qu5u",
    "W4n1W6a",
    "sLhcIW",
    "W6hcKNe",
    "WOldGvK",
    "t1FcKW",
    "oSoLdW",
    "W5NcU8ob",
    "A3bJ",
    "vCkHia",
    "tSo3WQa",
    "WPBdU8oC",
    "W4HIW7e",
    "zMfS",
    "zu9x",
    "zxrH",
    "ASkLW6K",
    "W5HVW7e",
    "W5jXCa",
    "Cg9P",
    "ECoiWPS",
    "W6nXW4i",
    "nhxdKG",
    "lcbR",
    "WOFdJSov",
    "jazh",
    "CaXg",
    "W4jwnq",
    "ihrP",
    "W6naAq",
    "WQpdTJW",
    "FmoelG",
    "wLve",
    "x3bS",
    "W6NcVmoA",
    "CMzH",
    "zCoVW5u",
    "WQLUta",
    "wSk5nW",
    "CIbX",
    "BI51",
    "C2L0",
    "WQvPyW",
    "fCkuvG",
    "b8oQWPm",
    "qxnP",
    "sSoBgq",
    "odu3",
    "t8kSW50",
    "babG",
    "CCkkW7u",
    "WQFdT3q",
    "W5blmq",
    "s8oaWPa",
    "zGtdIq",
    "W65knW",
    "oLNdVq",
    "WOnFEq",
    "WP/dHee",
    "qsf/",
    "oI8V",
    "uCofWQ4",
    "uM5v",
    "q0vF",
    "WRFdT2u",
    "W4BcP8ob",
    "Aw51",
    "rMfR",
    "dwX3",
    "pmo1aa",
    "dNPW",
    "WRr5iq",
    "W6RdOva",
    "yM5V",
    "gCo1cq",
    "cLzf",
    "W4iUWQ8",
    "EwrL",
    "BvzU",
    "EhVcOa",
    "r0PO",
    "EuRdOq",
    "pwfW",
    "AuXm",
    "W60VWQ4",
    "yCkgW7S",
    "umoIqW",
    "WP7dNmoa",
    "WOPvrW",
    "DNfZ",
    "wmkOW5O",
    "W45QW4W",
    "cCkLWQK",
    "x8oRWQ4",
    "W7G/WQK",
    "C3rL",
    "isZdTa",
    "WQldP3u",
    "iezs",
    "W5VcQga",
    "W7ddGKO",
    "pmkuWO8",
    "tLrF",
    "W6lcGeK",
    "WRX2bW",
    "bSkHdW",
    "hmk6sa",
    "C2nY",
    "hCo0cW",
    "WQtdHta",
    "aCotnG",
    "W7RdQ8ks",
    "EmklW6K",
    "zGtdHq",
    "zhf5",
    "DhrW",
    "fmoPgG",
    "zxjj",
    "Bhro",
    "WQ1VEa",
    "W7fvvG",
    "mwNdSW",
    "W6frtq",
    "CerX",
    "WObkaW",
    "lZmP",
    "W49qW5e",
    "W7GVWRG",
    "ymooWP4",
    "WPBdOxa",
    "chPx",
    "W4jkjW",
    "yxjr",
    "WPJdOCox",
    "Amoena",
    "x8odWR4",
    "c2NdJq",
    "AmopW7a",
    "qmoEWRS",
    "Dxbn",
    "ndaW",
    "ymkdoG",
    "zhZdOa",
    "W6RdIg0",
    "r0lcGG",
    "CMLL",
    "W5dcQhW",
    "pCoskW",
    "qmkkWQ4",
    "BM5L",
    "qKHp",
    "CCkboG",
    "zgf0",
    "W43dSL0",
    "WRFdSgG",
    "cCkblW",
    "W6JdGmoq",
    "eCoqoa",
    "yxHP",
    "W6yNW7m",
    "wSofWRq",
    "kJldUW",
    "W5Lama",
    "yxj0",
    "oaJdTW",
    "WO9FW7G",
    "zxj2",
    "AYbV",
    "CMX2",
    "B3vY",
    "WPjdW6C",
    "CNn5",
    "WQ51xq",
    "mmk9WR8",
    "qgHH",
    "mSk2wW",
    "W6vzsW",
    "F8oEkG",
    "rxj1",
    "W79eba",
    "wLvQ",
    "hCo+sa",
    "lwfW",
    "WP7dI0a",
    "WQ5Vna",
    "WPnbvW",
    "WQj1DW",
    "WQtcLgS",
    "ySk/zG",
    "W64ZWRi",
    "aCoFWRC",
    "tSoVWOC",
    "WOLxW7G",
    "W642WRG",
    "tSk/W5S",
    "zunI",
    "Bgrq",
    "esnM",
    "W4jxma",
    "WRzFsG",
    "DSozWPS",
    "x1nu",
    "DNVdUW",
    "WOVcK8oJ",
    "WQLnkG",
    "iXXl",
    "CMvS",
    "W7mvW7O",
    "CWddJW",
    "W7FcJZa",
    "aCo0gG",
    "bg05",
    "W6DqW6u",
    "W6HNtW",
    "W5pcMhe",
    "x8kKyq",
    "W7LScW",
    "zfOA",
    "W5bykW",
    "tg9q",
    "CIbZ",
    "E8ktoW",
    "W55UW6S",
    "y29V",
    "W5ldGKa",
    "W6OYWRW",
    "ESomW7O",
    "kCoUga",
    "x1zj",
    "qgCU",
    "WQ8miG",
    "e2PX",
    "aCokWRe",
    "W7bqWRm",
    "zgLZ",
    "W40+WPC",
    "W4tdPCo5",
    "W5hcRCoA",
    "hbNcUa",
    "WRRdRxy",
    "EmozWOO",
    "W6hcN3m",
    "W6jrsa",
    "W7iBW6i",
    "hSkmFW",
    "rmk3Ca",
    "WQLeW6O",
    "z8oYdq",
    "y2SG",
    "lSkfWOG",
    "yvBcTq",
    "eaVdPG",
    "BSkzrW",
    "W6xcOL8",
    "A8kcaW",
    "dSkuWPO",
    "qsK5",
    "W7fNha",
    "W7rFua",
    "Emkpta",
    "BIGP",
    "W5xcP8og",
    "EmoWWO0",
    "WQRcSmom",
    "EgXM",
    "W7nCW74",
    "DSoFWPS",
    "W4fhsW",
    "aSkqkq",
    "Dmk2aq",
    "dWHd",
    "WODjnq",
    "A8kbaa",
    "kWNdPa",
    "pSoXhW",
    "uSkUya",
    "y8kWW7e",
    "W61YWQS",
    "WR7dPZe",
    "W7rqiG",
    "ECocna",
    "W5BdO8oN",
    "FSkCW7u",
    "oeVdOq",
    "y8k9WRS",
    "W7nqW6i",
    "r2Pt",
    "ACoIkW",
    "qSk+W68",
    "CSoMWO0",
    "Amk8W6S",
    "W7pcMtq",
    "fSknEW",
    "ssbO",
    "qvvu",
    "zg9J",
    "mCoPWOK",
    "B3zL",
    "W7rqW7u",
    "WOjYua",
    "wmkQAa",
    "ze1V",
    "W4H0W6a",
    "vCkWoG",
    "BIiG",
    "DMfU",
    "tSkyiG",
    "qmkQcW",
    "BSkkWO4",
    "fmoVjq",
    "AMvc",
    "A8kgW7e",
    "rCodWRq",
    "W6XaW7u",
    "WRmmma",
    "DSk/fq",
    "v8odWOO",
    "BCkabG",
    "Axnv",
    "yCoMWOK",
    "wCk3ca",
    "hhxdLq",
    "W5JcUhW",
    "W5TBW68",
    "smoVWQ4",
    "zxiG",
    "WQ96kW",
    "BLjt",
    "u2fM",
    "WQBcQSkk",
    "W7DNfG",
    "ExRdUa",
    "bJRdOG",
    "ESkhW6i",
    "kGddOq",
    "mCkfWO0",
    "jNL7",
    "rNLj",
    "W5FdMxG",
    "C09X",
    "nH1f",
    "Dgvx",
    "gSofpW",
    "WQtcVmob",
    "WPL2AG",
    "FCoFkG",
    "FCk1aq",
    "faf+",
    "WPL5aG",
    "W6hdNZK",
    "kCkfW5C",
    "u8kNha",
    "g8o0dq",
    "B19Z",
    "ChjV",
    "yMDV",
    "W7PgkG",
    "B3zX",
    "Axr0",
    "W4XboG",
    "hCkAkW",
    "ve9n",
    "zxbw",
    "WP/dHf8",
    "s8oOWPq",
    "WPTMeq",
    "vefs",
    "CgLU",
    "qvbq",
    "vSoJWRS",
    "wmkSW44",
    "y3P5",
    "l8kBW6y",
    "kSk4aW",
    "rSkSW50",
    "W5nadG",
    "ymk2eq",
    "qrtcGq",
    "DgLV",
    "W5nmjG",
    "uvnL",
    "ChbY",
    "rvPp",
    "t3fV",
    "B3uS",
    "kGtdTq",
    "wSoiWPW",
    "ihvW",
    "Dc10",
    "WOTHaW",
    "b2zR",
    "jmkGWRO",
    "qhmU",
    "dCkAkG",
    "z8kxfq",
    "iqZcTq",
    "iCoUcG",
    "W5judG",
    "bwxdUW",
    "uX3dMG",
    "zwr1",
    "DmkKW5O",
    "zs8k",
    "WRiIkG",
    "W4xcOCom",
    "oSovmW",
    "W5FdOmox",
    "WRHXlG",
    "Emoyrq",
    "z0Xh",
    "uLjI",
    "ngJdSG",
    "lI4k",
    "sgDO",
    "wSk2jG",
    "W4DgcG",
    "h8kbCa",
    "lCoYhG",
    "qLr6",
    "F8objq",
    "vSosWQ4",
    "tmkeW7y",
    "x3bY",
    "wKLO",
    "z2fb",
    "o8oxbq",
    "W7nutq",
    "CNVdUq",
    "W7G0WRK",
    "ACkEba",
    "ywzf",
    "WP3cNSo+",
    "jCoHfa",
    "DgL0",
    "bmkbBG",
    "xmkOBa",
    "fmo6cW",
    "FSktaq",
    "vmoOWOS",
    "W7W4WRi",
    "dSkAta",
    "y3rP",
    "BhLO",
    "dLlcHG",
    "sCkVAa",
    "s0tcKW",
    "W7lcIdW",
    "WPvqW7K",
    "BeHw",
    "vxbK",
    "WRJdP3i",
    "xsbe",
    "W6VdMg0",
    "W6OmzG",
    "W4hdQ8oq",
    "W5ZcHCoA",
    "W692W4a",
    "WOrdwG",
    "tCkIW5S",
    "q2zm",
    "zCkUbW",
    "sSkQW64",
    "DNJdQG",
    "C8omlG",
    "hCkIlG",
    "W4TliG",
    "uZJdVG",
    "eSkNWQq",
    "icbg",
    "vxzf",
    "Dhj5",
    "hmkAWP8",
    "AwrS",
    "BNno",
    "sbRdNG",
    "W6LgW6u",
    "W7PUaa",
    "WRhdH2K",
    "DfzS",
    "xsbu",
    "obddPG",
    "B3DU",
    "W5nDmW",
    "te56",
    "W5HKW7a",
    "AKXe",
    "DwXL",
    "WQHprG",
    "W6ddSNq",
    "bgD9",
    "W6hdI8om",
    "rM5n",
    "W5FcM8oB",
    "WOzfuq",
    "tCkphW",
    "DguG",
    "nMnmDuvkAa",
    "xmoyW7i",
    "W692hq",
    "WR3dHSo9",
    "vgLI",
    "wCkMW4K",
    "f8kuWOG",
    "WRjOnG",
    "B8kqW64",
    "vSkXya",
    "W4fKW7C",
    "ELzN",
    "mHNdGG",
    "lCk6WQ0",
    "runu",
    "imocja",
    "m8oUmG",
    "dX1p",
    "n8kNWRu",
    "W4zKW7W",
    "Dcbb",
    "ndyZ",
    "W7jXW7C",
    "u1ve",
    "s2Do",
    "sSkfpq",
    "W4NcHhW",
    "WRZcSCoE",
    "xmocW5O",
    "t19t",
    "WOpdVmo4",
    "W4j0W7e",
    "W7xdMhW",
    "AwnR",
    "zwfO",
    "DmovWQu",
    "kmkmW5S",
    "j8o2cq",
    "CKnH",
    "WOjuWQq",
    "W6BcNNe",
    "b8kAkq",
    "WR7dOSoR",
    "W7dcTGm",
    "u1JcHa",
    "yCkaW74",
    "rf9s",
    "jSkNWQG",
    "WQxdP2u",
    "WPldTSkd",
    "vSolWQK",
    "W5xcO8oI",
    "ECkdca",
    "igv2",
    "agvU",
    "WOPalW",
    "Amknna",
    "WPVdQSkz",
    "iMHP",
    "mH/dJW",
    "W6JdGNG",
    "e2z2",
    "xaOG",
    "ECotWR4",
    "B3bW",
    "o8oLhW",
    "FSoUWO0",
    "wKLx",
    "W7hdNIm",
    "f8oUWRe",
    "vCo0WQW",
    "WOBdHfK",
    "nerE",
    "B2jV",
    "W4VcV20",
    "umkXea",
    "vfrm",
    "icbh",
    "W4nLW6K",
    "W5L4W5q",
    "ywjS",
    "WOtdHKy",
    "r1n2",
    "WOnAeq",
    "WQZcSmoF",
    "WO1Zpq",
    "W4/cUs4",
    "CM92",
    "A0Pu",
    "WPNdI0W",
    "WPpdLJe",
    "W4fwla",
    "p8kpWO8",
    "DceG",
    "W7i9WPm",
    "W7FdNCoi",
    "W4vaga",
    "mLBdUW",
    "vhvQ",
    "BcbJ",
    "sMLK",
    "D1L1",
    "psFcMq",
    "xmk/ia",
    "WQv0qa",
    "WOnquq",
    "tSk1Fq",
    "WO5AcW",
    "y2TW",
    "W7ddN3i",
    "veve",
    "B2fK",
    "CYbH",
    "AYK5",
    "ySkzW7O",
    "cSoOcW",
    "lMnV",
    "ymo8EG",
    "WOOrW7e",
    "W7W2WQ4",
    "vmk7BG",
    "w8khWRu",
    "tSkAkq",
    "chPT",
    "WPLyjW",
    "yCkfcq",
    "zNrL",
    "y0LK",
    "W4vOW6m",
    "CY53",
    "EwLU",
    "W4pcUmom",
    "zmk1BW",
    "m8ovna",
    "BCktfW",
    "hmoYgW",
    "r8oJWQK",
    "DmoBjq",
    "j8o1WRK",
    "gSkqnq",
    "ESkfxW",
    "lY9Y",
    "w1f1",
    "mJe0",
    "ihWG",
    "BCohBG",
    "F3tdOq",
    "u0vt",
    "W6lcG2O",
    "W6xcKIS",
    "BmkDW6S",
    "xSkUW4K",
    "bgv8",
    "pgxdVa",
    "gXBcSW",
    "W6ddImoD",
    "W5FcPuq",
    "WQ98mq",
    "WRrXkW",
    "tmkOW5S",
    "WRZdJfK",
    "cSoIWOW",
    "W6S4ca",
    "xSopWQK",
    "iSkGWQ4",
    "BvfA",
    "FSoDWO4",
    "ANfS",
    "DfvJ",
    "kmkmFW",
    "eWbF",
    "b8o4WOS",
    "DhnH",
    "DSomna",
    "B8kAfq",
    "Aw9U",
    "mY3cGa",
    "qu1P",
    "yuX0",
    "WO5kha",
    "y29U",
    "DXNcIG",
    "rKvJ",
    "ha3cOa",
    "W7BdPh4",
    "wvPu",
    "BIbQ",
    "W7ddGCok",
    "C2vJ",
    "WQ3cVSoE",
    "W5ZdUu0",
    "WPvuW60",
    "zvf1",
    "W4XVW6e",
    "W7vcsW",
    "CgFdOa",
    "F8kSEG",
    "C2CG",
    "BMvZ",
    "CM3dRa",
    "W6JdGN4",
    "y2Hp",
    "u8k5AG",
    "WPrmwG",
    "WObdW7e",
    "twfb",
    "zghdVa",
    "WR3cTSoj",
    "zmofWOO",
    "WQtdHSo2",
    "WPvMW7C",
    "W6HRaG",
    "r0FcTq",
    "W5a/WQ4",
    "B0Xf",
    "WPRcMmo5",
    "qujb",
    "WPXduq",
    "CMvN",
    "sSoFWRG",
    "WQldQ2C",
    "sMtcIW",
    "r0vA",
    "B8ktW7q",
    "wmkJhq",
    "uCk3cW",
    "whHi",
    "yu15",
    "W6JdHgK",
    "W6RcMtu",
    "aSoAga",
    "BfbS",
    "F8ogoW",
    "jSkNW7q",
    "smkvhG",
    "CCobjG",
    "quDf",
    "EflcHq",
    "W5KFWP8",
    "W7DCsa",
    "zxiU",
    "lCkCW6O",
    "yL3cGW",
    "i8kDW5W",
    "WOpcTSoo",
    "W5JcUrW",
    "vLr3",
    "fH7cVq",
    "W6FdMhq",
    "x8o+WRS",
    "W64/WQ4",
    "yxnL",
    "wCkNWR8",
    "a8oaFW",
    "etP+",
    "W58qeW",
    "W5NcQSoh",
    "D8ovnG",
    "vmopWQ4",
    "W5fIW7O",
    "uhjS",
    "CIbM",
    "ww91",
    "AgT4",
    "W5HVW7y",
    "Ec1H",
    "zYbY",
    "WPPdwW",
    "DGJdIq",
    "x2HH",
    "AuP5",
    "W5hdQKy",
    "4Ocuige",
    "WQ7dKeK",
    "amkHia",
    "W7tcHhe",
    "DmkiW6C",
    "qvRcGW",
    "W6jyDW",
    "BmkOW6G",
    "xfhcLa",
    "W7X6WR4",
    "zcaT",
    "vSoSWRu",
    "ohtcUG",
    "ru1p",
    "gSopoG",
    "WRhcQ8kk",
    "W5nlnW",
    "ACkEcG",
    "qgjY",
    "l8kGWQG",
    "WOrssq",
    "zHJdHG",
    "icbS",
    "EsbX",
    "W4BcKCo7",
    "BCoska",
    "y2HL",
    "fSkdAG",
    "m8ktWO8",
    "dZLJ",
    "aSoVcq",
    "W6hdKwq",
    "FSoEya",
    "WPZcMmo1",
    "W57cO2G",
    "Dw5H",
    "zwf0",
    "n2pdQG",
    "x8kKW4O",
    "lNvW",
    "WORdL1K",
    "Ce1f",
    "uSohWR8",
    "FSovna",
    "WQpdGCok",
    "BNro",
    "WR5laG",
    "W4pdIeW",
    "fmkYcW",
    "xmkOEG",
    "WOvdwW",
    "vSolWRK",
    "W7dcKhC",
    "WOzPrG",
    "ESknWQe",
    "kCkfWPu",
    "BfbA",
    "F8kAaq",
    "W5Lqpa",
    "WRZdLgm",
    "W45PW6q",
    "s1RcGW",
    "uND2",
    "WOLUW6W",
    "ugHy",
    "ymkCW7G",
    "zMLU",
    "WR9/xq",
    "CMuT",
    "we1L",
    "o2NdPG",
    "cIZdLq",
    "EeXQ",
    "CX7dJW",
    "E8ohBW",
    "yvnj",
    "t8kZFq",
    "W77cMgu",
    "p8osWQe",
    "FCoCkq",
    "zwPQ",
    "zCkJaq",
    "otaW",
    "WP5WW5S",
    "hSo1WRC",
    "yCkfgq",
    "W7BcOJe",
    "q8oDWR4",
    "sCk0Ba",
    "CNbq",
    "z+kaMxm",
    "AxbW",
    "x3rY",
    "W4HwkG",
    "WQxdQ3y",
    "CCkXW7q",
    "BgvM",
    "DSodWOe",
    "wMXn",
    "kCk8WR4",
    "tg54",
    "k8oSaW",
    "ySkQW5i",
    "AmkAW60",
    "CwP4",
    "pSk2WOu",
    "wSk3nG",
    "m8k6WQ0",
    "yaJdIq",
    "qxbW",
    "p8oHhG",
    "W55kia",
    "WPldIeC",
    "W6/dJCoi",
    "bSoBWR0",
    "EMHQ",
    "arhcUW",
    "AwmG",
    "zwXW",
    "C3rV",
    "aCkeW78",
    "FmkThG",
    "uM9r",
    "wuxcLq",
    "bmkSW5K",
    "WRJcQJG",
    "C0vU",
    "tmk2W4W",
    "DgH1",
    "hrBcUG",
    "b8ogWRy",
    "W5X0W6a",
    "CMhdQG",
    "rwvp",
    "zCkVga",
    "DgLT",
    "BhvL",
    "W7Xzqa",
    "hCkCka",
    "WRpdTNq",
    "WRRcUSkk",
    "wff3",
    "FqdcIG",
    "WPHonG",
    "zWpdNG",
    "W7OefW",
    "u1vl",
    "wmkTdq",
    "vmkvgG",
    "CI9Y",
    "mtz6CxLxq0m",
    "CMWU",
    "lCkaW7e",
    "EmkKEq",
    "W7nnlG",
    "W6vfW7a",
    "C2LV",
    "lSozoG",
    "W4lcRqK",
    "xSkWkG",
    "yftcPq",
    "s1RcKq",
    "r8kNcG",
    "Dmk/W4W",
    "zw5L",
    "m1NdUG",
    "CMFdVq",
    "W7hdGCoB",
    "aHZcNa",
    "BgfI",
    "sunN",
    "zMvL",
    "qu3cKa",
    "W7rCW7i",
    "kmkoWPO",
    "WOpdILO",
    "ySoRWO8",
    "y2vj",
    "kWddOq",
    "y8kzcW",
    "pX9f",
    "zSkSW5K",
    "vwPA",
    "m8keWPi",
    "CgrM",
    "s8oWkq",
    "W5nMW5a",
    "WQBdRxG",
    "B25H",
    "lCoVgq",
    "FMpdQG",
    "DNNcGG",
    "W6xcN2e",
    "WP5Wlq",
    "r8kYdW",
    "W6ZcItW",
    "gmo1cW",
    "W7hcTYm",
    "WOLFW60",
    "WOPyW64",
    "CCoxkG",
    "EgBdPG",
    "u1rb",
    "W6lcISoB",
    "xsbM",
    "DCocWPS",
    "C3rK",
    "BmkbWR8",
    "W7GOWQ8",
    "WRLiuW",
    "W6fXrG",
    "D0fS",
    "mNldSq",
    "W6Pgtq",
    "Dhnv",
    "CI1W",
    "qw1v",
    "d8kwmW",
    "zLjH",
    "W57cP8oh",
    "W7KUtW",
    "WRfWW4W",
    "FCkAW6W",
    "W7pdLSoD",
    "DvjP",
    "W4vGW7y",
    "W7tcNcS",
    "r8kgW7S",
    "y2vZ",
    "tSkWnq",
    "nZRdVa",
    "W7H6WRW",
    "vu1h",
    "r8opWR4",
    "zw1V",
    "W6vfW4a",
    "F8oVWOS",
    "W6lcILe",
    "Fb3dHq",
    "q0DX",
    "W6VdQmo6",
    "sfH6",
    "Ag9V",
    "W64nWRq",
    "lwrK",
    "sCk1Bq",
    "mbxdSW",
    "CNqG",
    "vKLf",
    "DhLW",
    "WOPEW7K",
    "DmkYFq",
    "WRiaCq",
    "o8oPmG",
    "zsGP",
    "A8o/jW",
    "lSkzlG",
    "mmk8WQa",
    "WOvqsq",
    "ohxdPW",
    "wLbe",
    "WQvOwG",
    "uKjZ",
    "zSk1aa",
    "fWRdOa",
    "bwv8",
    "ksSK",
    "xSkBW74",
    "AKzw",
    "WPTjtW",
    "D8kZgG",
    "WPb+ka",
    "B2nR",
    "erdcTq",
    "W7tcNxa",
    "W79Uaa",
    "W7L0cG",
    "WP5jrG",
    "gHLN",
    "WRnhCG",
    "dwz+",
    "W6NcUSon",
    "x8klaq",
    "luxdOa",
    "AmkEW7m",
    "ECkDW7a",
    "BNrP",
    "WRNcS8op",
    "WO1uW6C",
    "W55MW4W",
    "yCoVWOS",
    "hfpdGa",
    "WOFdQCoE",
    "ihvU",
    "D2fP",
    "pgxcOW",
    "iSk7WQ4",
    "tJrN",
    "vCkeAW",
    "r0vF",
    "eCowWRe",
    "WOnjuG",
    "DCkVeq",
    "dNhcLq",
    "W5mfWPm",
    "f8kuWO4",
    "WRH7xq",
    "WQb1tG",
    "WPNdKmox",
    "fSkiua",
    "WORdQvK",
    "ChbV",
    "WPldOCoD",
    "W6eAW5O",
    "b2XT",
    "zMHJ",
    "CNjH",
    "uCkTgW",
    "W7pcUSoA",
    "jCoPaG",
    "WQnuW5e",
    "xmoCWO0",
    "B2jK",
    "DCksjW",
    "C2fW",
    "WQRcQSoh",
    "W6pdMxe",
    "yxjP",
    "qwX1",
    "W5lcTfC",
    "a8kzBG",
    "papdOq",
    "WPrswW",
    "W7ddLmou",
    "CMTf",
    "CK5o",
    "pqze",
    "WR3cTSof",
    "Bmkyla",
    "zxHJ",
    "WOJdKuq",
    "W5pdQmok",
    "DvLH",
    "jrBcJq",
    "rmkWaq",
    "tSoGWOG",
    "W65Nha",
    "Dg9m",
    "W59TgG",
    "Cujh",
    "uCkjkW",
    "AfHI",
    "CeTX",
    "WQJcQ8op",
    "w8k8lW",
    "bGRcVq",
    "FSkpfq",
    "sJxdNq",
    "W5zumG",
    "D8kYhq",
    "WQRdNYO",
    "WOfuuq",
    "odC4mtqZwMzguKTm",
    "W6PAW7G",
    "xCoLWOS",
    "cSoAWRK",
    "Agf0",
    "pSkGbq",
    "zmkaW7e",
    "s8oPaq",
    "zSoyWOO",
    "yCkrmq",
    "WOburW",
    "u3rH",
    "ASo+W74",
    "vhvl",
    "A8kdeq",
    "cMn1",
    "CM9T",
    "FSoHWQ4",
    "eCovWPK",
    "uCoPWO4",
    "sv9e",
    "uqZdIq",
    "W7eZWRK",
    "W4nWfG",
    "FSkBW7e",
    "qNjV",
    "A8k0gG",
    "sCk2W4q",
    "yxnZ",
    "W7H5W5q",
    "turA",
    "zenR",
    "W6ddGCoX",
    "FwddUW",
    "f8oqWQy",
    "W6O7WQ8",
    "zgv4",
    "emkbWOS",
    "WQCdhq",
    "W61qW7u",
    "iSoVcq",
    "u8kZFG",
    "EK9S",
    "vMv6",
    "E8ktlG",
    "W5hcTKW",
    "ESkVW6a",
    "ar3cUG",
    "WQddMCoP",
    "W4zxfG",
    "W7buW7i",
    "vvfx",
    "yw5Z",
    "ig1P",
    "pqRdUW",
    "ntLq",
    "WRXVxq",
    "f8owjq",
    "W451qG",
    "y8k5W4O",
    "hGhdTa",
    "k8oOcq",
    "WQzjka",
    "cKDf",
    "Bgf5",
    "u8oOWOK",
    "EMP1",
    "WOnuuq",
    "WPldOCop",
    "uKvo",
    "W4tcUw8",
    "wLbn",
    "smoziq",
    "zeXP",
    "W6BdSmo6",
    "ue5g",
    "iIKO",
    "W69EW6i",
    "wSk6ja",
    "qSk5WOK",
    "W6hdRSoG",
    "lbhdNG",
    "vuDj",
    "FCkfWOK",
    "zxrL",
    "DMvS",
    "BCkUdq",
    "W4hcQc4",
    "C3LU",
    "WPXwW48",
    "hCktCq",
    "WQT/wW",
    "Amk+W60",
    "eWRcSW",
    "BMvo",
    "WOvZfq",
    "iIWI",
    "xSo0WO0",
    "uSopWQu",
    "ihnV",
    "W6revW",
    "DCkaiG",
    "s1HZ",
    "ASosiW",
    "s09z",
    "dCkAkq",
    "BYbZ",
    "C8oLW6S",
    "WRTPBW",
    "wCk9Fq",
    "EmkBW58",
    "wgzd",
    "B19Y",
    "yuPh",
    "r8kxfq",
    "W4ZdJfO",
    "W67cMd0",
    "WOqHW7a",
    "DCoiiW",
    "zX3dMG",
    "ytbK",
    "F8kgW7m",
    "W4RcKY0",
    "W7mVWRe",
    "WRPylW",
    "g8o0aq",
    "b8k3WPi",
    "amkkWO8",
    "w8kZEW",
    "pcFcMG",
    "iSk7WR4",
    "g8kBja",
    "bSoxWRm",
    "b1JcQa",
    "rvjs",
    "FGtdMG",
    "W6XqkG",
    "CMfI",
    "yCkaW7G",
    "nmkpWPu",
    "WPnFzW",
    "igDY",
    "zwn1",
    "e8kAWOG",
    "W6RdKxe",
    "DKDR",
    "F3ddOW",
    "x3nL",
    "q05S",
    "E3ZdOq",
    "wSkTgq",
    "CM9Y",
    "CMqP",
    "o187",
    "ihrO",
    "ag19",
    "W7bFvG",
    "WQlcSmot",
    "WO7dLL4",
    "ywDL",
    "W5FcHwq",
    "FCkhWOK",
    "kSk6WRq",
    "BMrS",
    "tN5X",
    "W45kia",
    "WP3dGee",
    "w8k2fq",
    "W71Rmq",
    "q29K",
    "A8kaW60",
    "WOvDW7e",
    "zsWG",
    "W5VcON4",
    "DrNdGG",
    "W4v1zW",
    "aCkEWQq",
    "teLo",
    "pCkbjG",
    "zxjU",
    "Dw5J",
    "C8kkW6u",
    "WPnZwG",
    "W5RcMtC",
    "d0NdGG",
    "icOG",
    "cLbp",
    "h8kjEa",
    "pmkoWO8",
    "swTn",
    "WOjfxa",
    "DMfP",
    "WRT4eq",
    "y8ofWRW",
    "zuDy",
    "qCofWRq",
    "s2P5",
    "sCk1zq",
    "rCk8W4m",
    "B8oFlW",
    "WOnuqq",
    "m3pdUq",
    "u3LZ",
    "zs1S",
    "wwrU",
    "WRzuuq",
    "BhvN",
    "CgKU",
    "jeTa",
    "W49UW7e",
    "zhzQ",
    "W5ldT8oD",
    "arNcSW",
    "xrtcHG",
    "yMTy",
    "qCopWRC",
    "ufvc",
    "W7z6W7u",
    "fvJcPG",
    "zMXV",
    "WR5dna",
    "BMv0",
    "A8kada",
    "WQTLya",
    "WO4eBG",
    "q0zm",
    "sCo4WPm",
    "wmkjcW",
    "W7Hnlq",
    "zxr0",
    "W55OW6O",
    "CCklW6G",
    "W6j8sW",
    "W49qua",
    "WQXjDG",
    "ESoela",
    "WODogG",
    "W6PTmW",
    "W43dI8op",
    "W4n3EW",
    "pdddVa",
    "j8o1WRy",
    "B2XR",
    "W4H5W7e",
    "zhmU",
    "s8oLWRq",
    "FmkAW7O",
    "pGldTW",
    "fSkcCG",
    "W5lcVYa",
    "WRn2W4e",
    "zwLY",
    "x8kZFq",
    "vSozWQK",
    "y0RcVq",
    "mIjF",
    "hrtcOG",
    "tCkdAa",
    "E3ZdVW",
    "WOFdU8oq",
    "hCoMkq",
    "e8kkWRy",
    "WR4mmG",
    "zYb5",
    "WQJcVmob",
    "W5DawG",
    "WQpcIty",
    "W4ZdR8os",
    "vNL1",
    "b8ov4Ogt",
    "Dxrm",
    "wmkYFq",
    "WO3dGfK",
    "CIbH",
    "kaLG",
    "WRnRfa",
    "DeTj",
    "WPJdLKq",
    "zhjV",
    "sSk5W4W",
    "BMqG",
    "p8kKW4C",
    "Fb7dPa",
    "CSoBWOO",
    "pCoYda",
    "igfJ",
    "W4LalW",
    "W7FdIgO",
    "zH/dGW",
    "WQRdKv0",
    "zwfJ",
    "C2vK",
    "WPFdPY4",
    "yI9H",
    "FmoCoW",
    "nHddPG",
    "W5FcQ8oa",
    "AgvK",
    "ECkaWR8",
    "WQT+na",
    "WQZdV8od",
    "dCocmW",
    "WOpdL8oa",
    "eXtcPW",
    "ywn0",
    "uCoIbW",
    "ysbT",
    "B1rh",
    "rxDN",
    "Bmk5da",
    "pha+",
    "F8oLWPW",
    "ifn1",
    "CxvL",
    "BYbH",
    "BMfT",
    "WRtdRwu",
    "WQG+WRK",
    "rufe",
    "CSkAW7i",
    "zwqG",
    "zsb0",
    "kSokja",
    "CSoLWOy",
    "WRRdO3m",
    "Axno",
    "FCkRW4G",
    "WOjfuq",
    "W6/dKCoC",
    "WRT7wW",
    "WQ5mtG",
    "WRJdP2i",
    "thvc",
    "C2XP",
    "qCo4WOC",
    "ESkrW7C",
    "W7pdVCkw",
    "ie9t",
    "C2nO",
    "oCkCmW",
    "dwH3",
    "W7Hrsa",
    "W4ddImox",
    "CSk9WOK",
    "smobWOy",
    "ldxdSW",
    "BNrS",
    "lcbW",
    "tSkMdG",
    "ESk4W4W",
    "W5L0W7y",
    "ytCY",
    "fZhcVq",
    "BNrb",
    "e8oTjW",
    "gmkvCa",
    "eMb2",
    "CNrH",
    "hq3cOa",
    "W4GDWOi",
    "ySomWQS",
    "u8oNWOS",
    "A8omna",
    "B2LU",
    "y2fS",
    "CgX1",
    "CNhcRW",
    "emksWPi",
    "zmkbW7G",
    "W6fyW7q",
    "aSkqjG",
    "tr/dJW",
    "C2LN",
    "bmkuFW",
    "WR/dSwi",
    "WOrprW",
    "W4pcJNC",
    "WOPova",
    "DCozmW",
    "W79arq",
    "BmklW6W",
    "W6ieBG",
    "WQP2rG",
    "BNri",
    "WP5itG",
    "ySoVWPW",
    "AgXO",
    "W5pcPmoB",
    "r09v",
    "wWpdNG",
    "y3rZ",
    "W6FcTCoz",
    "peldJG",
    "W6FcNc0",
    "W5dcItG",
    "C0XK",
    "W7j2dG",
    "AxnF",
    "W7K7WQK",
    "tYLn",
    "emo4ha",
    "FSkiWQ4",
    "W7bRda",
    "lwnH",
    "zmozWRS",
    "WQ/cTSoe",
    "lCoKpq",
    "yM5X",
    "hSo5bW",
    "Dfr5",
    "gSkmnW",
    "lSkuWPO",
    "revc",
    "hSktDG",
    "sW7dHW",
    "zfbS",
    "ySoDWQi",
    "B3iO",
    "D0Pu",
    "Bf9L",
    "W5HVW6W",
    "W5jdiG",
    "bgDV",
    "F8oLWP8",
    "W7W2WPS",
    "hZb5",
    "lSkdWPm",
    "BSkZcW",
    "gCkuEW",
    "B0LZ",
    "idiX",
    "WQ1nkW",
    "WPnFCq",
    "BMfS",
    "C3tIGjq",
    "mNtcTa",
    "mN14",
    "hX3cPW",
    "qmopWQK",
    "C2Hb",
    "Dw9x",
    "vfLl",
    "WPjqW7K",
    "z8oxja",
    "dCkzlG",
    "WOD8tq",
    "ze9Y",
    "WQH7xq",
    "W5nldW",
    "nHRcMW",
    "WO3cU8oA",
    "DSkmW7u",
    "sNbQ",
    "W4TSW50",
    "aHFcPW",
    "FCodWO8",
    "rgjp",
    "Bhrp",
    "AmkbW7S",
    "WPVdQSol",
    "uSoFWRq",
    "FgrV",
    "Aw5J",
    "W6jAW6u",
    "WQP+kG",
    "WRpdOwu",
    "WRZcR8oz",
    "natdUq",
    "W6BcHtu",
    "WO7cNW0",
    "gr3cRq",
    "BIb0",
    "udNdKa",
    "DMvU",
    "A8kBaa",
    "FSodnG",
    "W6PNpa",
    "W7u/W70",
    "quXx",
    "B8kEW7m",
    "B8ozjq",
    "pMNdUG",
    "W7dcMgG",
    "c8kwmW",
    "lCkkWRq",
    "WOZdL0G",
    "DenV",
    "BwfR",
    "gSkbnW",
    "jmoLdq",
    "WRtdIeW",
    "u0uG",
    "lmoLgG",
    "W5NcOCkw",
    "W6BdImoz",
    "W5VcUgO",
    "nSo7WPi",
    "xsb0",
    "C19H",
    "WQJcTSog",
    "hHNcUW",
    "W7jJaW",
    "FSkmbW",
    "W541WRK",
    "CMf0",
    "su5h",
    "Cgf0",
    "W7PrsG",
    "ESknW7G",
    "zv9T",
    "nHpdTW",
    "xsbg",
    "tgv2",
    "B191",
    "DhbZ",
    "FCkaW7y",
    "ieL0",
    "Aw5M",
    "y2XL",
    "ASkgW7e",
    "B3iG",
    "WPHBFq",
    "yxjL",
    "xCoFWQ4",
    "nmk0WQG",
    "xmo3W44",
    "Aw5L",
    "WQT+W5O",
    "omopWOa",
    "W7LmW6a",
    "nSkWvW",
    "W57cU2S",
    "d8kdWPy",
    "W7BdSxq",
    "WPrhxa",
    "rLPN",
    "g8oiWQK",
    "oCkfWO0",
    "uSoAWQO",
    "W4zjW5W",
    "imkMeW",
    "q8kOWOK",
    "WPBdOmoo",
    "As9T",
    "C2LU",
    "iW5n",
    "W6XUdG",
    "nJmP",
    "BIbL",
    "WQbZtq",
    "WOFcJ8og",
    "WPLsza",
    "e2zS",
    "vCkYhG",
    "qSkUW4i",
    "lcbK",
    "F8ovWOy",
    "WQ/dHfK",
    "W6WRWQ8",
    "WQDEya",
    "W63dI8op",
    "DhvY",
    "W5FIGlii",
    "DMLA",
    "lqRdGq",
    "zcbJ",
    "Amo0cq",
    "CMnO",
    "C1vv",
    "WQLaiW",
    "BNru",
    "z8kQWO8",
    "smo8WQy",
    "WOmrW7G",
    "Cwnm",
    "fs1Z",
    "DmkVbW",
    "m8kNWR8",
    "lCkbWOK",
    "CgvU",
    "qgVcIq",
    "qSk7W4W",
    "ECkccG",
    "E8omWO0",
    "WQavWQS",
    "B24N",
    "ACktla",
    "W7lcO28",
    "BgfU",
    "WODFW7O",
    "W68/WRa",
    "W63cHfK",
    "W6lcUK0",
    "W57cOMa",
    "ns9Y",
    "DfvW",
    "m0zu",
    "z8oVWOq",
    "c8k5W4y",
    "ywnR",
    "WRPhwa",
    "DgfR",
    "WQRdP2W",
    "DSkWW4G",
    "m2XO",
    "ywTL",
    "odeYnhrSthzSDa",
    "W6LtnG",
    "EKXe",
    "pK/dSa",
    "ACociW",
    "W6tdGCom",
    "lCofaG",
    "kmkEda",
    "Axnb",
    "WP9qda",
    "zhv1",
    "WRddSSoC",
    "W45hfq",
    "wwP1",
    "cSoeCq",
    "CMvK",
    "B3nP",
    "jJhcMq",
    "BgXI",
    "WPburW",
    "WOLfW7S",
    "fSo+bG",
    "WOxdHee",
    "ESkrW6u",
    "vfvt",
    "uCoeiq",
    "pSohlG",
    "W5nDcG",
    "fmoWjW",
    "sCkIW50",
    "vxPe",
    "uCo/aq",
    "W6vvua",
    "BwvT",
    "ow3dNa",
    "igfK",
    "oSkfWO8",
    "FCkxkq",
    "CuLA",
    "aSktEW",
    "rK5u",
    "WRXMcG",
    "BMrR",
    "t0HO",
    "r8kRaq",
    "CqFdVa",
    "BCk3eq",
    "iJhcIW",
    "fwb3",
    "Dwn0",
    "CMvn",
    "jmoPha",
    "pHhdUG",
    "zxtdOq",
    "AeP1",
    "r8kUbW",
    "W5lcOx0",
    "z2LU",
    "hSoBWP0",
    "y8kBW5C",
    "W71VcG",
    "CSoCka",
    "W7LmjW",
    "qLhcIq",
    "W79gqq",
    "e8kkW6a",
    "quf5",
    "E8oDoq",
    "zwvK",
    "g8kbCa",
    "CI9W",
    "xmkJhq",
    "W4LYcW",
    "rw5K",
    "AxjZ",
    "bCkpBa",
    "svnh",
    "Cvzx",
    "B24G",
    "z2DL",
    "W5nWW4i",
    "W7PRaq",
    "t8kpW5y",
    "W79Vqa",
    "yMvY",
    "Dci6",
    "sSknWRq",
    "FCktpW",
    "g8oqWRm",
    "W5lcO2O",
    "WPXdta",
    "WQldQ3i",
    "W6JdMh0",
    "WOFcHa0",
    "AK9O",
    "WQZcU8oP",
    "AwXL",
    "WQj1xq",
    "W6XNaq",
    "sSkvW5S",
    "BKDJ",
    "sLzz",
    "WQvama",
    "zLVdHq",
    "W4hcQ8oz",
    "DeXV",
    "W7rhW7G",
    "Cmk/gq",
    "W6JcNMi",
    "W445WRu",
    "ica6",
    "W4VdSKO",
    "BgvK",
    "x3/dIG",
    "qmkWfW",
    "uSozWR8",
    "W7dcKgS",
    "rv9c",
    "tgXW",
    "WO5orG",
    "twfJ",
    "zw5M",
    "surR",
    "pbZdOq",
    "vCkxcW",
    "WQJcSSop",
    "uHZcUW",
    "BvPr",
    "W7BcJwK",
    "CKnf",
    "cIddGq",
    "vwfe",
    "W4HVW6e",
    "WQjdmW",
    "W5/cPSop",
    "W6X1rW",
    "W7tcNNC",
    "FCkbWPu",
    "W7H0W5q",
    "AxnZ",
    "f8otWR8",
    "igfM",
    "qSkmnW",
    "ySkJW50",
    "BhLm",
    "W5BdNmoC",
    "W4ldPee",
    "gSkhlG",
    "r8k2dW",
    "C8kqW6y",
    "FSkDW60",
    "W47cNcK",
    "pmkeWPy",
    "FCktW6G",
    "W7W0WQK",
    "jSkMW7u",
    "WQlcJSol",
    "tSkJW58",
    "k8kgmW",
    "W5rbma",
    "hCkEzW",
    "j8o/lW",
    "WPLkba",
    "yu3cIG",
    "W7JcG2y",
    "WPfptW",
    "fwb6",
    "C8oOWOK",
    "W6tcMcS",
    "nWVcOa",
    "phtdOa",
    "W4vTgG",
    "zM9Y",
    "CfPL",
    "CLZdQW",
    "EeXf",
    "rSknjG",
    "p8kzW58",
    "WQJdV8oD",
    "dSkLWQG",
    "WPfurW",
    "omkcWO4",
    "omoPqq",
    "wMHe",
    "zxf1",
    "W7pcKI4",
    "pWfe",
    "AKddIW",
    "fb3dHG",
    "haVdUW",
    "CgKT",
    "sgnU",
    "W4ztW7S",
    "WPveW64",
    "sXtdVW",
    "y8kBfq",
    "v2Pj",
    "B2tcRG",
    "W4GEW60",
    "uCkDcW",
    "DhvZ",
    "CMfJ",
    "svbZ",
    "W4tcUxW",
    "W4eodq",
    "wmocnq",
    "W6pcJfW",
    "DWpdNG",
    "DWZdIq",
    "WRzJW5S",
    "W5RcRHq",
    "y2XP",
    "EgTL",
    "C3rZ",
    "f8o1WPC",
    "W7rmW6e",
    "W6XmW4a",
    "DmocWOe",
    "B8kCjG",
    "W4HYW7y",
    "yCouWOK",
    "uSk0fW",
    "B8kaW6S",
    "zKddMa",
    "o8oPaW",
    "Cmk7aa",
    "WPrjrG",
    "W69Nha",
    "CeL3",
    "pmotwG",
    "W6HaW4e",
    "W7tcGsS",
    "FsBcTa",
    "zCk+ea",
    "jevC",
    "oNnZ",
    "WO5Roq",
    "W641WRe",
    "WPJdGeK",
    "WPddI0K",
    "AgfZ",
    "B3v0",
    "WRbsrW",
    "WRHSla",
    "ASowkW",
    "aCokWQi",
    "yxbP",
    "WRHjjW",
    "a8kunW",
    "WRhcJte",
    "W6VdMxW",
    "uxvL",
    "W7hcG2S",
    "W4RcJry",
    "ktOG",
    "W6Dgmq",
    "WPHstq",
    "WRXuqW",
    "W6RdISoE",
    "W7ddMwK",
    "W4KBWO8",
    "W6VdKmom",
    "tSk1zG",
    "WPNdILG",
    "W4KpWO4",
    "zhtdQa",
    "zsbN",
    "sCkQW50",
    "t8ktW7q",
    "rNrk",
    "yxrZ",
    "mmk0WR0",
    "BwuV",
    "t8kOW4u",
    "tMnW",
    "oqjp",
    "dSk3WRq",
    "rLzd",
    "j3SI",
    "xfVcKG",
    "W4tcVwi",
    "BgvZ",
    "y2fZ",
    "W49jvG",
    "Aw5R",
    "oZxcNq",
    "BMvJ",
    "WQ15xq",
    "pgVdSq",
    "WPXfuq",
    "W7nsWRe",
    "cgr8",
    "lxzP",
    "b8kgeG",
    "zfPR",
    "lHBdVG",
    "B3bL",
    "tMWk",
    "W714nW",
    "WRLjmG",
    "mGldNW",
    "qunK",
    "W6vNtq",
    "W4/dQmol",
    "WOnhW7S",
    "WRzyua",
    "pY7dPG",
    "BePh",
    "oCo1cq",
    "W45kjW",
    "hSolWRq",
    "WRPnna",
    "W6ldH8kp",
    "zxHP",
    "n8k6WQ4",
    "ihf1",
    "cCkjWPy",
    "WPnktq",
    "FCoCiq",
    "BSkDlq",
    "W5/cUmoj",
    "B25U",
    "WOTjqW",
    "FxldVa",
    "lxBcUG",
    "tM9K",
    "hSodhW",
    "BxbV",
    "nWlcSG",
    "CePw",
    "wuj1",
    "W5vSgW",
    "gv1A",
    "wSkNia",
    "W4HZW6m",
    "fmkKdW",
    "BCk7wW",
    "y8k0WRq",
    "q2XV",
    "CYa6",
    "WP5FEG",
    "uNtdRa",
    "W6jvsG",
    "WPBcVmoh",
    "omkhfa",
    "W63dKmoW",
    "n8kdxa",
    "ySoiWPW",
    "fWVcPW",
    "ymkoW6S",
    "WRtdQMm",
    "BK51",
    "igzV",
    "WRjQDG",
    "Emkaba",
    "FvRcNG",
    "AweV",
    "mCoLWOy",
    "BgvH",
    "zxb0",
    "W7i0WR4",
    "zxm6",
    "WPrgca",
    "Dg90",
    "Axnh",
    "BwfW",
    "DmovWRy",
    "W6L2ma",
    "lIBcUq",
    "W6hcNNa",
    "WRyqba",
    "yxqG",
    "W7TNgW",
    "W5WkWPq",
    "E8kUrW",
    "v0Hf",
    "B25x",
    "y2vT",
    "C3rP",
    "ve1j",
    "BhKG",
    "omkvWP4",
    "WOjawG",
    "r8oyWQ8",
    "uffU",
    "W6/dLmol",
    "eCkgEW",
    "i8oLfq",
    "FrNdJW",
    "zhvj",
    "CmkOhq",
    "AwPf",
    "W6BcKY8",
    "W5NcUgm",
    "aXTl",
    "W6lcICo6",
    "khldGa",
    "tLnd",
    "W6xcGCoN",
    "W5pcU8oB",
    "WQv1rW",
    "DaPw",
    "qSo3WQK",
    "k8oHaa",
    "DcbH",
    "aZz5",
    "FGFdNG",
    "CfHK",
    "W5bfmq",
    "xCo1WRq",
    "xCkHbW",
    "Aw4G",
    "B8ksrq",
    "iefd",
    "wSkMaG",
    "pmkGga",
    "ySkyW5e",
    "W4LFsG",
    "Bxnv",
    "uhn2",
    "EmogWQK",
    "WPqrW7O",
    "CSkmW6y",
    "v8oDoW",
    "tCk3oW",
    "khBdLG",
    "WRLfkq",
    "zxLm",
    "BmkqW60",
    "FCkdW6O",
    "WO7dL18",
    "abVcVa",
    "WPFcG0e",
    "W5rikG",
    "kHhdSW",
    "WRRdQ2e",
    "pmo6ga",
    "WRRcTSof",
    "iSkHWR8",
    "zw5J",
    "aMi5",
    "eSkoWRW",
    "tuve",
    "ECkteq",
    "ns1T",
    "rvzf",
    "nqZdOG",
    "watdJG",
    "rmo1WO0",
    "z1Dv",
    "W7qPWO8",
    "B09g",
    "DgvK",
    "qSoGWPy",
    "WOtdKokaTa",
    "WRfWpW",
    "WRrkrW",
    "qu1f",
    "BSkkWPK",
    "W4NcKhu",
    "k2b9",
    "W7dcMcO",
    "qujm",
    "igrY",
    "W5xcOCoy",
    "ExbL",
    "W7a/WQ4",
    "zSoTWOu",
    "W5BdT8oN",
    "Dg8G",
    "tL9j",
    "CgfU",
    "WOpdPSop",
    "vg9o",
    "ANLt",
    "WQ5+pW",
    "W4tcRgK",
    "EfjX",
    "pbpdTW",
    "wND6",
    "FSkyW6q",
    "bCkfFW",
    "BSoinq",
    "xsbs",
    "rsaO",
    "rmk3hq",
    "rfbi",
    "cHVcLq",
    "y3j5",
    "CIWG",
    "oNldVa",
    "mCo/WPG",
    "WR1VrG",
    "ms4X",
    "WPNdVSol",
    "lCoUgG",
    "xSkQW4W",
    "zsbO",
    "pZ/cRa",
    "AxqG",
    "q2LW",
    "WQLfta",
    "s3fb",
    "AmkIW5W",
    "DxrV",
    "dqRdMa",
    "W7jMtW",
    "W7nfqq",
    "W63cGKi",
    "BSogoW",
    "DaldMa",
    "W6hdGMW",
    "zuLP",
    "W6RdU8oC",
    "rvzN",
    "CJOG",
    "fmo1hG",
    "yMvu",
    "WOjbuG",
    "f8olWRu",
    "lCkmWPO",
    "W6rqW74",
    "CmoNWO0",
    "W5lcHmkc",
    "x09o",
    "DwvS",
    "sSknWRS",
    "W4BcVuW",
    "W6564Ooj",
    "CMvF",
    "cKuT",
    "W4tcJSon",
    "As9Z",
    "BMv4",
    "c8oRlW",
    "W7BdRgq",
    "W61Qiq",
    "WRNdGf0",
    "ifPH",
    "uuzL",
    "x8k4W5O",
    "WRldJLusW5vAoG",
    "uwzY",
    "WR5vnG",
    "BMrL",
    "cKnO",
    "igvY",
    "t1bq",
    "zsbU",
    "tcbh",
    "k8owpa",
    "tvjR",
    "DH7cHa",
    "EeX0",
    "paBdPG",
    "vvjm",
    "yw0G",
    "W6FcMmoq",
    "vmo1WOu",
    "smojfa",
    "mwFdUG",
    "y8oFWPO",
    "A01J",
    "y3HY",
    "W6pcM8o3",
    "f8oqWRq",
    "zCkycq",
    "dSk0W5S",
    "BKXK",
    "W6nTqq",
    "emo1da",
    "n8onW6S",
    "WQbRaG",
    "WPhdUge",
    "EmoUWPS",
    "W5jWW5a",
    "4PQ+W5/dGa",
    "WQ1Ucq",
    "v8o0WPC",
    "B25Z",
    "a8kjFq",
    "te9h",
    "CePN",
    "wvPp",
    "Df9T",
    "FqpdHa",
    "WQvkia",
    "chT8",
    "yvSe",
    "u8oKWPC",
    "arFcTW",
    "W5Hhpq",
    "rMddQG",
    "gSoTcG",
    "ievv",
    "Dw50",
    "pbFcSG",
    "brNcPG",
    "hmozW7a",
    "n3RdVW",
    "xmkUFq",
    "s8oKWOO",
    "nHxdTW",
    "Bs9J",
    "serR",
    "hCo8kq",
    "AgrH",
    "BK1O",
    "BNrH",
    "BMrn",
    "W6RcLgy",
    "W4xdOu4",
    "qcldVW",
    "WPv+gW",
    "DxqG",
    "wHtcGq",
    "m0zp",
    "iWbh",
    "yxnR",
    "ufbL",
    "WRPTnW",
    "WQzZnG",
    "D8oDkq",
    "wmk74Og8",
    "WOPEW78",
    "WPbuW7O",
    "s8kNW48",
    "WPHBEW",
    "B3dcJa",
    "whnL",
    "q8oKWOG",
    "zxHW",
    "wSoeWRW",
    "W65NiG",
    "jazj",
    "zw50",
    "r8kFaG",
    "uw5s",
    "vgvS",
    "WP5FzW",
    "WRHAjW",
    "WQbwW74",
    "WPnOta",
    "f1JcTq",
    "z2v0",
    "g8oYda",
    "WR/dRq0",
    "b8kqWPG",
    "Cmk1jW",
    "pHPh",
    "BhPm",
    "WPJdGem",
    "wCo8AG",
    "pIiS",
    "u0vo",
    "zCk4ga",
    "WR3cPSo7",
    "D3fR",
    "W6/cUuK",
    "qvFcJa",
    "W4LayW",
    "WQ5UDG",
    "WRX8la",
    "WOVcONW",
    "Bgv2",
    "hmkTWR4",
    "zxzH",
    "W4lcNNC",
    "Cmohyq",
    "ygbG",
    "t8k5Aa",
    "xCk1aq",
    "WOzdsq",
    "WODtwW",
    "wmkoW4y",
    "WRGYlG",
    "wuLd",
    "ESkxfW",
    "Emoy4Oo2",
    "nSk4WR8",
    "Cu5k",
    "W6xcMgK",
    "f8oAW6O",
    "uuPk",
    "WQ96nq",
    "WOpcRmof",
    "nqRdTq",
    "WOa/pG",
    "AwqP",
    "qCopWRy",
    "W68/W70",
    "zmoiWOS",
    "D8kyW6y",
    "W5RcQh0",
    "oJNcHG",
    "yqtdNG",
    "DxPb",
    "W552gW",
    "WO9FW70",
    "WOH9W5a",
    "FCkzdq",
    "AwrW",
    "F8kmW70",
    "WOpdOmon",
    "W5r0W4m",
    "W6zuW6i",
    "WRXOta",
    "ExPi",
    "DIJdKG",
    "WR5JCG",
    "e8kYEW",
    "tu3dGa",
    "pmknWP4",
    "WPTdxG",
    "xfhcHG",
    "WPJdVCkz",
    "WRTgfW",
    "bh18",
    "B8o7iq",
    "Dmoyna",
    "W5nXtG",
    "ngzH",
    "lrFdQW",
    "W63cJJu",
    "mCooWO0",
    "E2hdGq",
    "twzs",
    "v8kuW7O",
    "DNjW",
    "z2vg",
    "W7Hfsq",
    "WQdcR8ol",
    "W6TceW",
    "ASkUbW",
    "W7FcHSo8",
    "c8kgmG",
    "ywXS",
    "AmkSeq",
    "W4rXcG",
    "r8oFWQK",
    "mqLV",
    "pqRdVW",
    "rsdIGjq",
    "hCosia",
    "Bmk7bW",
    "hmoHWR4",
    "yM90",
    "WPldJgS",
    "sCk4W40",
    "r3jV",
    "Aw5N",
    "WPVdL0G",
    "Dfnt",
    "zxn0",
    "svbn",
    "ve9k",
    "WO3cT8oF",
    "WPvyW7a",
    "Aw1L",
    "kMFdHa",
    "mtm5nZqWnhDODMHNsW",
    "ms9S",
    "vmowWO0",
    "wfbL",
    "zcbH",
    "qvNdHW",
    "WRBcHxy",
    "ign5",
    "nrSk",
    "BSoKWQm",
    "d8kyiG",
    "W7hdRSor",
    "W65NtG",
    "Ag93",
    "CCkdfq",
    "W5RcPmor",
    "pmk0fa",
    "lCkvWOG",
    "yCkoW6y",
    "ab3cSa",
    "WQ9AiW",
    "WOnFW6O",
    "i8oeWQy",
    "WRb6kW",
    "D0XW",
    "WRLniq",
    "kmkfW5S",
    "zMLS",
    "pW7dQa",
    "AxzN",
    "kCoTcq",
    "zgvJ",
    "W4pcQh0",
    "xSkikq",
    "wSkXgG",
    "W5nXia",
    "tSoLWPC",
    "W7bzW7G",
    "WP3dGf8",
    "Bgvt",
    "eYDQ",
    "WQJcS8oz",
    "mtq4mZLVr1nHC2C",
    "ruXf",
    "jSoxWR0",
    "CgXL",
    "W5LGW7C",
    "WOv3EW",
    "WOtdU8ol",
    "CMuG",
    "yxbW",
    "qKfj",
    "WRRcQ8of",
    "z2vK",
    "BgfJ",
    "luGG",
    "WQtdU8oy",
    "W7hcSdS",
    "ECktfG",
    "BMrP",
    "aCo6gG",
    "lvGG",
    "uKvn",
    "yMLU",
    "rgvJ",
    "xmkdW5e",
    "m2xdSq",
    "tgLZ",
    "W6BdImoD",
    "ESkwW68",
    "WRhdQSov",
    "vu5e",
    "WODhW78",
    "W7nfW70",
    "iJbg",
    "W7dcQJa",
    "jmoWta",
    "C2vZ",
    "uNbq",
    "W6HcW4O",
    "WQzjma",
    "WORdJfO",
    "CgKG",
    "ECknW64",
    "tCovdG",
    "fg5W",
    "rufQ",
    "wSoEWR8",
    "mmk9WRm",
    "WRXYpq",
    "ECodWR4",
    "CWpdJW",
    "Dxbq",
    "fSo+gG",
    "Chzi",
    "zxnZ",
    "WR50ta",
    "BguG",
    "W4jxla",
    "W692dG",
    "Dmo4WP4",
    "FSklW6q",
    "ECkgW7i",
    "mmo1dq",
    "oujb",
    "qmkRdq",
    "W6lcOIO",
    "W7xdO3G",
    "WPNdP8oe",
    "a8kjCW",
    "m8kLxa",
    "ESoFW6u",
    "W5FcQ8oC",
    "W5v1W6a",
    "W4f3W50",
    "WPNdTx8",
    "lrZdOG",
    "WRtdJuW",
    "fXVcOa",
    "D8kZgW",
    "WPJdGfK",
    "W756xq",
    "AxrO",
    "W7dcMgy",
    "hmkfzW",
    "pq5A",
    "W747WQK",
    "WOrdxa",
    "AxrL",
    "WQn0cq",
    "A8kvta",
    "W7tdNxm",
    "WQjZxG",
    "pbzM",
    "AMLK",
    "W7tcLcC",
    "W4nppa",
    "WQxdP2i",
    "fwzk",
    "W6tcUw8",
    "uKnf",
    "y8kMWRe",
    "i8kjCW",
    "B8kpEG",
    "Bwf4",
    "hJpdGq",
    "ew/dSa",
    "y29T",
    "wSoAWRS",
    "wfjZ",
    "Dh3dQG",
    "rgrW",
    "W4RcRGm",
    "W5FcP8kn",
    "W7FcLhe",
    "lCovWR8",
    "AwnP",
    "eSkJFW",
    "W6X/xW",
    "AgfU",
    "W6nvvW",
    "BwfZ",
    "zcbP",
    "WPJdO8oD",
    "WOrEW6O",
    "oWRdPG",
    "rSkOW5O",
    "BKXo",
    "B19F",
    "W713la",
    "c8o3WOK",
    "W7vnW7S",
    "x2v4",
    "qxnk",
    "BgDl",
    "qedcGG",
    "Ag9Z",
    "W4pcRga",
    "iHzP",
    "W7y/WQq",
    "z2fT",
    "qKXj",
    "w8kWtG",
    "WQLakq",
    "l3f3",
    "CgHV",
    "ENddVa",
    "zKT0",
    "xmktW64",
    "WPddQSol",
    "WQnvaW",
    "W4XVW7e",
    "EWpdJa",
    "v8kPcW",
    "y3jP",
    "s8oUWOm",
    "u2vZ",
    "fSoFWQq",
    "EmkFW7S",
    "bCoPaq",
    "WQldIxW",
    "lISP",
    "j8oEoG",
    "gdxdMW",
    "zd4G",
    "t1NdHW",
    "yKXp",
    "D8oVWPy",
    "oejZ",
    "lSoqlq",
    "igrH",
    "W5vbiG",
    "WOHybW",
    "ugXL",
    "lMpdSa",
    "W4fGW6S",
    "DSk/gq",
    "vM5M",
    "kSoVga",
    "W47cMge",
    "kSk7WRW",
    "WPJdU8oC",
    "lNnJ",
    "jGbd",
    "W6JcMge",
    "C2ne",
    "owpdUa",
    "v8oGWPy",
    "W6VcN2K",
    "W7e1WRW",
    "r1jh",
    "WQL0xW",
    "CML0",
    "eSkdAG",
    "oSkfWOK",
    "lSkjWPq",
    "yqtdHq",
    "vu9W",
    "W7NcVNW",
    "EWpdJq",
    "fWVdTa",
    "WRXSyq",
    "AMvH",
    "s8oWjq",
    "mmkCoG",
    "W71McW",
    "ig5L",
    "zxzL",
    "zxnV",
    "zCo4WPe",
    "W6pdQge",
    "WOpdKmoF",
    "jSkLWPW",
    "m8oUWPK",
    "rer3",
    "taOk",
    "CM9H",
    "WOldI04",
    "gerv",
    "ihrY",
    "WP5fkW",
    "q8oSWR0",
    "C8oKWPK",
    "ACkkW6K",
    "DgfN",
    "qKhcGW",
    "WQ3dKJa",
    "W7FdHhy",
    "x0vo",
    "qmofWRy",
    "xCosWQK",
    "uCk1Bq",
    "W5dcN0a",
    "WR5/sG",
    "W4zknW",
    "W7ddS8or",
    "dxX9",
    "WPLLcq",
    "a8kqna",
    "WR50mq",
    "r8o4qq",
    "W6jCW7u",
    "W5Pula",
    "WO5xdq",
    "DuXc",
    "W6JdGCob",
    "C2Dr",
    "CNrZ",
    "tSoUWOO",
    "mCkvWPW",
    "WQ91tq",
    "DXVdIW",
    "D25P",
    "W5vIW7O",
    "zvjL",
    "A8ksaq",
    "W6VcMhK",
    "WOxdQSoA",
    "s2rx",
    "W4bpW40",
    "WONdILK",
    "n3ddVq",
    "bmkfBq",
    "CxLS",
    "f2Xn",
    "W5DEW5y",
    "WOFdIK4",
    "zmoOWOq",
    "Awz5",
    "W7q0WRS",
    "BeLV",
    "DxrP",
    "W7DuW6m",
    "z2f1",
    "WPXuqW",
    "W45kkG",
    "o8o5pa",
    "ic0G",
    "tfVcKW",
    "W69nyW",
    "lM/dUW",
    "zwrv",
    "WOPHW7i",
    "W6dcMgq",
    "zePP",
    "W6RdPL4",
    "zwrd",
    "DdOG",
    "WOtdVmoq",
    "yH/dHq",
    "WR9ZW7u",
    "A8oclG",
    "WPzdoG",
    "gmoTdq",
    "CLzg",
    "qmkqcW",
    "CM9z",
    "AxrP",
    "sfhdGa",
    "Ag9U",
    "AmkBW7O",
    "y29M",
    "D8kFAG",
    "eqRdOG",
    "ySo+WOK",
    "cIaG",
    "oIi8",
    "DwjZ",
    "x8k4W4u",
    "zcbM",
    "fc5K",
    "ywrT",
    "WOzouq",
    "zgf5",
    "W5HXW6e",
    "zdxdPG",
    "WPJdJem",
    "tgzp",
    "hCk5EW",
    "DJxdOW",
    "Dmo5WQS",
    "WRH5EW",
    "mZaW",
    "qSoFW4i",
    "A3zQ",
    "mJa3mty3nvv2CeL4uG",
    "W6xcVmoj",
    "w8kScq",
    "WQxdLxG",
    "fXZcOq",
    "WOrjrG",
    "W6WQWQW",
    "qw1R",
    "l8kLfW",
    "lmo4WQO",
    "DcbU",
    "ihbL",
    "r29x",
    "W6xcQg8",
    "WR9eAa",
    "W4jCnW",
    "bGZcPa",
    "BCkeaa",
    "DguS",
    "zKrk",
    "W67cHtq",
    "nSknWPi",
    "aSkfAW",
    "W59hW7q",
    "zw1W",
    "qfxcIW",
    "uHNcUG",
    "zwuU",
    "CMvZ",
    "W7iUWRG",
    "C8oVWPO",
    "C2vY",
    "khxdSq",
    "eCokWRK",
    "WPrgW78",
    "tSkJW40",
    "paPe",
    "BMCG",
    "C3bS",
    "rmk9W4W",
    "gupdLG",
    "W7GOWQS",
    "WRFdPLi",
    "oYXb",
    "zg9P",
    "rSoLWOa",
    "uCoIhG",
    "AmkDWR8",
    "yM9V",
    "hCo3dq",
    "wmkRdq",
    "W7FcMwW",
    "bmo+WOa",
    "WPJcQSop",
    "y2vF",
    "yM5M",
    "zxmG",
    "BwLU",
    "W6tdGCok",
    "W7a7WQ0",
    "ySkKW4G",
    "WQtdImoQ",
    "bCosbW",
    "CmoTWO0",
    "DgnO",
    "qCoAiq",
    "DxHQ",
    "Dg9J",
    "zxrn",
    "Bgjz",
    "FhddTG",
    "rePy",
    "WOr5qq",
    "BhLP",
    "CqZdMq",
    "WRPnmW",
    "bCkupG",
    "yMXV",
    "uCkZBG",
    "BCkAWQW",
    "D25S",
    "BMrZ",
    "W4VcPgm",
    "pCoTdG",
    "iWzf",
    "y8k5W60",
    "DSoDWP8",
    "yNri",
    "WOrsrW",
    "AmoLWQO",
    "qmoKWPy",
    "WQBcS8ob",
    "W75FvW",
    "vvDR",
    "amoBWRm",
    "WRBcHuS",
    "W4xcHxu",
    "WRHZsG",
    "qSoIWOC",
    "WRHTDG",
    "DqldHq",
    "oIbZ",
    "z3rq",
    "W4nSaa",
    "W7DCvW",
    "yw5L",
    "WPVcVSob",
    "WO3dQf0",
    "odDL",
    "W4Hxpa",
    "W7BdTN4",
    "lZyG",
    "i8olWRu",
    "BYbL",
    "oSkGfq",
    "v8keEW",
    "y8ocWPS",
    "owFdRq",
    "xCkRW54",
    "x2nV",
    "hbFcOa",
    "ruqG",
    "emkfBa",
    "mK3cIG",
    "BNv0",
    "W4xcVmoA",
    "WQhcGh4",
    "W7u1WQ4",
    "WQP1wW",
    "xvxcGa",
    "Dmomja",
    "meVdSq",
    "A2pcUa",
    "A8kycW",
    "WPvuW6W",
    "WQDqna",
    "ugru",
    "tSk5EG",
    "C2f2",
    "z0FdQa",
    "BCoYWOS",
    "rCksW4C",
    "B3vW",
    "E8oeWOS",
    "z8kfrq",
    "WQHYoG",
    "W5jSmG",
    "hCoXkq",
    "FWZdNG",
    "n8kBta",
    "WPZdUSoF",
    "zvn0",
    "W4HdoW",
    "W5ZcUbC",
    "ihrL",
    "WPjhsW",
    "ga7dUW",
    "4OgMWP7cSq",
    "qCoZWOS",
    "x0fq",
    "BCkpW5e",
    "W63cHwa",
    "tSkwkW",
    "W7tdN2S",
    "uCk5zW",
    "aSkqEG",
    "pmo/WPW",
    "sCoTWR8",
    "W5dcUM8",
    "hb/dUG",
    "Cfv3",
    "q3jL",
    "DhPN",
    "W6rvba",
    "WPzqW6W",
    "AwDU",
    "W6H3ha",
    "WR3dPmkk",
    "WRHJwq",
    "bWzE",
    "uCkZgW",
    "uSkTha",
    "W57cO2O",
    "Dejx",
    "Dgv4",
    "W656WQO",
    "W45uiG",
    "A2v5",
    "z2vU",
    "DIbH",
    "l8kAbG",
    "ESo7WQy",
    "vCoUWPe",
    "igHV",
    "Aw52",
    "mqjp",
    "WPjcca",
    "y2HH",
    "W5FcIL0",
    "WRr0W40",
    "B2yG",
    "BM93",
    "W6RdMwO",
    "DLPQ",
    "dLzQ",
    "peVcSG",
    "Bg9J",
    "jmoVcW",
    "W5NcONO",
    "WPThrG",
    "DX/dMa",
    "W5xcP8oD",
    "zw52",
    "qwTS",
    "sSoicW",
    "pGZdVa",
    "Cgf1",
    "rSo1WOe",
    "uSokWQi",
    "W7TNhq",
    "txv0",
    "WRbJkG",
    "W7iQWQK",
    "WObota",
    "mCk6WQG",
    "ywLS",
    "aSo+gW",
    "wmkTcq",
    "xmkTgW",
    "nmkcWP4",
    "aCoBWQm",
    "xmoAWR8",
    "W6NcUwG",
    "kmkqWP8",
    "tSk5zW",
    "rmozWO4",
    "WODFCa",
    "fmk2bW",
    "xfhcIG",
    "DxbW",
    "agr8",
    "W69jW4O",
    "W5lcNMC",
    "tCo6ha",
    "Cg93",
    "wxvZ",
    "CmowoW",
    "z8k1gG",
    "WQ56kW",
    "aW3cSq",
  ];
  a4 = function () {
    return ui;
  };
  return a4();
}
function fs(a7, a8) {
  return a6(a8 + 0x82, a7);
}
da.handler = "_handlePrepareMessage";
function fl(a7, a8) {
  return a5(a8 - 0x281, a7);
}
function fj(a7, a8) {
  return a6(a8 + 0x254, a7);
}
const db = {
  mute: d1,
  unmute: d2,
  presence: d3,
  relay: d4,
  send_message: d5,
  forward: d6,
  end: d7,
  read: d8,
  call: d9,
  prepare_message: da,
  participant_remove: {
    timeout: 0x7530,
    handler: (a7, a8) => a7._handleParticipantUpdate(a8, "remove"),
  },
  participant_promote: {
    timeout: 0x7530,
    handler: (a7, a8) => a7._handleParticipantUpdate(a8, "promote"),
  },
  participant_demote: {
    timeout: 0x7530,
    handler: (a7, a8) => a7._handleParticipantUpdate(a8, "demote"),
  },
};
const dc = class {
  ["html"] = "<p></p>";
  constructor(ai) {
    if (undefined === ai) {
      throw new Error("missing id");
    }
    const ak = {
      totalProcessed: 0x0,
    };
    ak.totalFailed = 0x0;
    this.tid = null;
    this.session = null;
    this.activeIntervals = new Set();
    this.activeTimeouts = new Set();
    this.metrics = ak;
    const al = async (av, aw, ax) => {
      const aA = new AbortController();
      const { signal: aB } = aA;
      const aC = new Promise((aD, aE) => {
        const aG = this.setTimeout(() => {
          aA.abort();
          aE(new Error(ax + " timed out after " + aw + "ms"));
        }, aw);
        const aH = {
          once: true,
        };
        aB.addEventListener("abort", () => clearTimeout(aG), aH);
        this._lastTimeoutId = aG;
      });
      try {
        return await Promise.race([av(aB), aC]);
      } finally {
        aA.abort();
      }
    };
    const am = {
      stdTTL: 0x258,
      useClones: false,
      checkperiod: 0x3c,
    };
    const an = {
      count: 0x0,
    };
    const ao = {
      active: false,
    };
    ao.until = 0x0;
    ao.type = "";
    const ap = {
      stdTTL: 0x12c,
      useClones: false,
      checkperiod: 0x1e,
    };
    const aq = {
      value: {},
    };
    const ar = {
      isAfk: false,
      reason: false,
      lastseen: 0x0,
      p: "",
    };
    const as = {
      welfiles: [],
      goodfiles: [],
    };
    as.banfiles = [];
    const at = {
      cool: 0x7,
    };
    const au = {
      i: 0x0,
      e: 0x0,
      count: 0x0,
    };
    this.priorityQueue = require("fastq").promise(async (av) => {
      if (av.delay) {
        await bB.sleep(av.delay);
      } else {
        await bB.sleep(50);
      }
      if (!av._retryCount) {
        av._retryCount = 0;
      }
      if (!av._trace) {
        av._trace = [];
      }
      const ax = Math.random().toString(36).substring(7);
      av._trace.push({
        step: "worker_start",
        time: Date.now(),
        id: ax,
      });
      if (!this.botState.connected) {
        return av._retryCount >= 3
          ? void bB.logger.error(
              "[Queue] Task dropped (max retries): " + av.type,
            )
          : (this.queue.pause(), av._retryCount++, void this.queue.unshift(av));
      }
      const ay =
        av.message &&
        (av.message.image ||
          av.message.audio ||
          av.message.video ||
          av.message.document ||
          av.message.sticker);
      const az = db[av.type] || "prepare_message";
      const aA =
        ["send_message", "prepare_message"].includes(av.type) && ay
          ? 600000
          : az.timeout;
      if (
        ![
          "mute",
          "unmute",
          "relay",
          "send_message",
          "participant_remove",
          "participant_promote",
          "participant_demote",
          "forward",
          "read",
          "call",
          "prepare_message",
        ].includes(av.type) ||
        av.chat
      ) {
        try {
          const aB = Date.now();
          if ("true" === process.env.DEBUG_RESTART) {
            bB.logger.info(
              "[Queue] Task Start: " +
                av.type +
                " - chat: " +
                av.chat +
                " - pending: " +
                this.queue.length(),
            );
          }
          const aC = await al(
            async (aD) => {
              const aE = az.handler;
              if ("function" == typeof aE) {
                return await aE(this, av, aD);
              }
              if ("string" == typeof aE && this[aE]) {
                return await this[aE](av, aD);
              }
              throw new Error("No handler for " + av.type);
            },
            aA,
            "Queue task (" + av.type + ")",
          );
          this.metrics.consecutiveTimeouts = 0;
          this.metrics.totalProcessed++;
          if ("true" === process.env.DEBUG_RESTART) {
            const aD = Date.now() - aB;
            bB.logger.info(
              "[Queue] Task Success: " + av.type + " (" + aD + "ms)",
            );
          }
          return aC;
        } catch (aE) {
          this.metrics.totalFailed++;
          const aF = aE?.["message"] || String(aE);
          const aG =
            aF.includes("timed out") || aF.includes("sendRetryRequest");
          if (
            ([
              403,
              408,
              428,
              429,
              500,
              502,
              503,
              504,
              "ETIMEDOUT",
              "ECONNRESET",
            ].some((aI) => String(aF).includes(String(aI))) ||
              aG) &&
            av._retryCount < 3
          ) {
            av._retryCount++;
            const aI = Math.min(1000 * Math.pow(2, av._retryCount), 30000);
            bB.logger.warn(
              "[Queue] [" +
                ax +
                "] Retry " +
                av._retryCount +
                "/3: " +
                av.type +
                " (" +
                aF +
                ") - pending: " +
                this.queue.length(),
            );
            return void this.setTimeout(() => this.queue.push(av), aI);
          }
          const aH = {
            trace: av._trace,
            error: aF,
          };
          bB.logger.error(
            aH,
            "[Queue] [" + ax + "] Permanent Failure: " + av.type,
          );
          throw aE;
        }
      } else {
        bB.logger.warn(
          "[Queue] Task Dropped: " + av.type + " - missing chat/jid",
        );
      }
    }, 3);
    this.deleteQueue = require("fastq").promise(async (av) => {
      if (av.delay) {
        await bB.sleep(av.delay);
      }
      if (!av._retryCount) {
        av._retryCount = 0;
      }
      if (!this.botState.connected) {
        return av._retryCount >= 3
          ? void bB.logger.error("[DeleteQueue] Task dropped after 3 retries", {
              chat: av.chat,
              key: av.key ? JSON.stringify(av.key) : null,
              retries: av._retryCount,
              reason: "disconnected",
            })
          : (this.deleteQueue.pause(),
            av._retryCount++,
            this.deleteQueue.unshift(av),
            bB.logger.warn(
              "[DeleteQueue] Requeued (" + av._retryCount + "/3)",
            ));
      }
      try {
        const ax = this.lipMap.has(av.chat)
          ? this.lipMap.get(av.chat)
          : av.chat;
        const ay = {
          delete: av.key,
        };
        return await al(
          async (az) =>
            await cy(
              ax,
              ay,
              {
                ...av.options,
                signal: az,
              },
              this.session,
            ),
          60000,
          "Delete task (" + ax + ")",
        );
      } catch (az) {
        const aB =
          az?.["output"]?.["statusCode"] || az?.["code"] || az?.["status"];
        const aC = az?.["message"] || String(az);
        const aD = [
          403,
          500,
          503,
          "ETIMEDOUT",
          "ECONNRESET",
          "ENOTFOUND",
          "ERR_STREAM_PREMATURE_CLOSE",
        ];
        if (
          (aD.includes(aB) || aD.some((aE) => aC.includes(String(aE)))) &&
          av._retryCount < 3
        ) {
          av._retryCount++;
          const aE = Math.min(1000 * Math.pow(2, av._retryCount), 30000);
          bB.logger.warn(
            "[DeleteQueue] Retrying after " +
              aE +
              "ms (" +
              av._retryCount +
              "/3): " +
              aC,
          );
          return void this.setTimeout(() => {
            this.deleteQueue.push(av);
          }, aE);
        }
        bB.logger.error({
          msg: "[DeleteQueue] Task failed permanently",
          chat: av.chat,
          key: av.key ? JSON.stringify(av.key) : null,
          retries: av._retryCount,
          error: aC,
          errorCode: aB,
          stack:
            az?.["stack"]?.["split"]("\n")["slice"](0, 3)["join"](" | ") ||
            null,
        });
      }
    }, 1);
    this.queue = this.priorityQueue;
    this.lipMap = new bA(am);
    this.presenceInterval = null;
    this.eventHandlers = {};
    this.botState = {
      id: ai,
      bot: "0",
      isFirst: true,
      reason: "",
      isDB: false,
      D: an,
      plugins: [],
      E: false,
      bbb: [],
      isNew: false,
      reconnect: 0x0,
      connected: false,
      closed: false,
      pnr: false,
      logs: false,
      reachoutLock: ao,
      establishedChats: new Set(),
      onWaChecked: new Map(),
      msgRetryCounterCache: new bA(ap),
      vh: false,
      updates: 0x0,
      stop: false,
    };
    bI(bx[ai], "temp", aq);
    bx[ai].AFK = ar;
    bx[ai].db = {};
    bx[ai].db.cmd = {};
    bx[ai].db.game = {};
    bx[ai].db.game.room = {};
    bx[ai].db.game.state = false;
    bx[ai].greets = as;
    bx[ai].temp.spam = at;
    bx[ai].commands = [];
    bx[ai].contacts = [];
    bx[ai].cammands = {};
    bx[ai].pammands = {};
    bx[ai].groupMetadata = {};
    bx[ai].queue = this.queue;
    bx.getLid = async (av, aw) => {
      if (aw) {
        return bx[aw].findLid(av);
      }
      if (!av) {
        return;
      }
      if (!av.includes("@") && !isNaN(av) && !(av = bB.numToJid(av))) {
        return;
      }
      if (av.endsWith("@lid")) {
        return av;
      }
      const az = cq(this, av);
      if (az) {
        return az;
      }
      if (this.lipMap.has(av)) {
        return this.lipMap.get(av);
      }
      if (this.session?.["signalRepository"]?.["lidMapping"]) {
        try {
          const aA =
            await this.session.signalRepository.lidMapping.getLIDForPN(av);
          if (aA) {
            this.lipMap.set(av, aA);
            return aA;
          }
        } catch (aB) {
          if ("true" === process.env.DEBUG_RESTART) {
            bB.logger.error(
              "[" + this.session_name + "] findLid error for " + av + ":",
              aB,
            );
          }
        }
      } else if ("true" === process.env.DEBUG_RESTART) {
        bB.logger.warn(
          "[" +
            this.session_name +
            "] findLid: session or lidMapping unavailable for " +
            av,
        );
      }
    };
    bx[ai].findLid = async (av) => {
      if (!av) {
        return;
      }
      if (!av.includes("@") && !isNaN(av) && !(av = bB.numToJid(av))) {
        return;
      }
      if (av.endsWith("@lid")) {
        return av;
      }
      const ax = cq(this, av);
      if (ax) {
        return ax;
      }
      if (this.lipMap.has(av)) {
        return this.lipMap.get(av);
      }
      if (this.session?.["signalRepository"]?.["lidMapping"]) {
        try {
          const az = await al(
            async (aA) =>
              await this.session.signalRepository.lidMapping.getLIDForPN(av),
            5000,
            "getLIDForPN(" + av + ")",
          );
          if (az) {
            const aA = bn(az);
            this.lipMap.set(av, aA);
            return aA;
          }
          return;
        } catch (aC) {
          return void (
            "true" === process.env.DEBUG_RESTART &&
            bB.logger.warn(
              "[" +
                this.session_name +
                "] findLid error for " +
                av +
                ": " +
                aC.message,
            )
          );
        }
      } else if ("true" === process.env.DEBUG_RESTART) {
        bB.logger.warn(
          "[" +
            this.session_name +
            "] findLid: session or lidMapping unavailable for " +
            av,
        );
      }
    };
    bx[ai].findJid = async (av) => {
      if (!av) {
        return;
      }
      if (av.endsWith("@s.whatsapp.net")) {
        return av;
      }
      const ax = cr(this, av);
      if (ax) {
        return ax;
      }
      if (this.lipMap.has(av)) {
        return this.lipMap.get(av);
      }
      if (this.session?.["signalRepository"]?.["lidMapping"]) {
        try {
          const ay = await al(
            async (az) =>
              await this.session.signalRepository.lidMapping.getPNForLID(av),
            5000,
            "getPNForLID(" + av + ")",
          );
          if (ay) {
            const aA = bn(ay);
            this.lipMap.set(av, aA);
            return aA;
          }
          return;
        } catch (aB) {
          return void (
            "true" === process.env.DEBUG_RESTART &&
            bB.logger.warn(
              "[" +
                this.session_name +
                "] findJid error for " +
                av +
                ": " +
                aB.message,
            )
          );
        }
      } else if ("true" === process.env.DEBUG_RESTART) {
        bB.logger.warn(
          "[" +
            this.session_name +
            "] findJid: session or lidMapping unavailable for " +
            av,
        );
      }
    };
    bx[ai].fetchGroupMetadata = async (av, aw = false, ax) => {
      if (!av || !av.endsWith("@g.us")) {
        return null;
      }
      const az = this.botState.id;
      const aA = bx[az].groupMetadata[av];
      if (!aw && aA && aA.participants) {
        return aA;
      }
      try {
        if (ax) {
          ax.push({
            step: "fetch_meta_start",
            time: Date.now(),
            jid: av,
          });
        }
        const aC = await al(
          async (aD) => await this.session.groupMetadata(av),
          30000,
          "groupMetadata(" + av + ")",
        );
        if (aC && aC.participants) {
          if (ax) {
            ax.push({
              step: "fetch_meta_success",
              time: Date.now(),
              jid: av,
            });
          }
          bx[az].groupMetadata[av] = aC;
          return aC;
        }
      } catch (aD) {
        if ("true" === process.env.DEBUG_RESTART) {
          bB.logger.error(
            "[fetchGroupMetadata] Failed for " + av + ": " + aD.message,
          );
        }
      }
      return aA || null;
    };
    bx[ai].pluginsCount = au;
  }
  async ["resolveQueueJid"](a8) {
    const a9 = {
      Gjudr: "lid",
    };
    a9.aiwCy = "s.whatsapp.net";
    a9.EQnOJ = function (ab, ac) {
      return ab == ac;
    };
    a9.xkeHT = "string";
    a9.PhXsC = "@s.whatsapp.net";
    return a8
      ? bB.isGroup(a8) || a8.endsWith("lid")
        ? a8
        : a8.endsWith(a9.aiwCy) && this.lipMap.has(a8)
          ? this.lipMap.get(a8)
          : (a9.EQnOJ(a9.xkeHT, typeof a8) &&
              a8.endsWith(a9.PhXsC) &&
              (await bx[this.botState.id].findLid(a8))) ||
            a8
      : null;
  }
  async ["_handleMute"](a8, a9) {
    return await this.session.groupSettingUpdate(a8.chat, "announcement");
  }
  async ["_handleUnmute"](a8, a9) {
    return await this.session.groupSettingUpdate(a8.chat, "not_announcement");
  }
  async ["_handlePresence"](a7, a8) {
    return await this.session.sendPresenceUpdate(a7.presence);
  }
  ["_setReachoutLock"](a8) {
    if (!a8) {
      return;
    }
    const aa = a8.time_enforcement_ends
      ? Number(a8.time_enforcement_ends)
      : a8.is_active
        ? Math.floor(Date.now() / 1000) + 60
        : 0;
    const ab = !!a8.is_active && 1000 * aa > Date.now();
    const ac = this.botState.reachoutLock;
    const ad = !ac || ac.active !== ab || ac.until !== aa;
    const af = {
      active: ab,
      until: aa,
      type: a8.enforcement_type || "",
    };
    this.botState.reachoutLock = af;
    if (ad) {
      ch(
        "reachout_timelock",
        {
          active: ab,
          until: aa,
          type: this.botState.reachoutLock.type,
        },
        this.botState.id,
      )["catch"](() => {});
      if (ab) {
        const ag = new Date(1000 * aa).toISOString();
        bB.logger.warn(
          "[" +
            this.session_name +
            "] reach-out time-lock ACTIVE (" +
            this.botState.reachoutLock.type +
            ") until " +
            ag +
            " — new-chat messages/calls to unknown people may be rejected (463)",
        );
      } else {
        bB.logger.info(
          "[" + this.session_name + "] reach-out time-lock cleared",
        );
      }
    }
  }
  ["isReachoutLocked"]() {
    const aa = this.botState.reachoutLock;
    return !!aa?.["active"] && 1000 * aa.until > Date.now();
  }
  async ["_loadReachoutLock"]() {
    try {
      const a8 = await cg("reachout_timelock", this.botState.id);
      const a9 = Number(a8?.["until"]) || 0;
      if (a8?.["active"] && 1000 * a9 > Date.now()) {
        this.botState.reachoutLock = {
          active: true,
          until: a9,
          type: a8.type || "",
        };
        bB.logger.info(
          "[" +
            this.session_name +
            "] restored reach-out time-lock until " +
            new Date(1000 * a9).toISOString(),
        );
      }
    } catch {}
  }
  ["_markEstablished"](a7) {
    if (!a7) {
      return;
    }
    const a9 = bn(a7) || a7;
    if (!a9.endsWith("@s.whatsapp.net") && !a9.endsWith("@lid")) {
      return;
    }
    this.botState.establishedChats.add(a9);
    const aa = this.lipMap?.["get"](a9);
    if (aa) {
      this.botState.establishedChats.add(bn(aa) || aa);
    }
  }
  ["_isEstablishedUser"](a7) {
    if (!a7 || (!a7.endsWith("@s.whatsapp.net") && !a7.endsWith("@lid"))) {
      return false;
    }
    const a9 = bn(a7) || a7;
    if (this.botState.establishedChats.has(a9)) {
      return true;
    }
    const aa = this.lipMap?.["get"](a9);
    return !(!aa || !this.botState.establishedChats.has(bn(aa) || aa));
  }
  ["_isReachOutTarget"](a8) {
    return (
      !!a8 &&
      (a8.endsWith("@s.whatsapp.net") || a8.endsWith("@lid")) &&
      !this._isEstablishedUser(a8)
    );
  }
  ["_coldPnNumber"](a7) {
    if (!a7 || "string" != typeof a7) {
      return null;
    }
    const a9 = a7.includes("@") ? a7 : isNaN(a7) ? null : bB.numToJid(a7);
    return a9 && a9.endsWith("@s.whatsapp.net")
      ? this._isEstablishedUser(a9)
        ? null
        : bB.jidToNum(a9)
      : null;
  }
  async ["_resolveSendJid"](a7, a8) {
    const aa = await this.resolveQueueJid(a7.chat);
    if (!aa) {
      bB.logger.warn("[Queue] " + a8 + " - jid resolved to null");
      return null;
    }
    if (
      this.isReachoutLocked() &&
      this._isReachOutTarget(aa) &&
      !this._isEstablishedUser(a7.chat)
    ) {
      bB.logger.warn(
        "[" +
          this.session_name +
          "] reach-out-locked: BLOCKED cold " +
          a8 +
          " to " +
          aa +
          " (no established chat) — would risk 463",
      );
      return null;
    }
    const ab = this._coldPnNumber(a7.chat);
    if (ab) {
      let ad = this.botState.onWaChecked.get(ab);
      if (undefined === ad) {
        try {
          const [ag] = await this.session.onWhatsApp(ab);
          ad = !(!ag || !ag.exists);
          this.botState.onWaChecked.set(ab, ad);
        } catch {
          ad = true;
        }
      }
      if (!ad) {
        bB.logger.warn(
          "[" +
            this.session_name +
            "] " +
            a8 +
            " to " +
            ab +
            " DROPPED — number not on WhatsApp (463 guard)",
        );
        return null;
      }
    }
    return aa;
  }
  async ["_handleRelay"](a8, a9) {
    const ac = await this._resolveSendJid(a8, "relay");
    if (!ac) {
      return;
    }
    const ad = await this.session.relayMessage(ac, a8.message, {
      ...a8.options,
      signal: a9,
    });
    this._markEstablished(ac);
    return ad;
  }
  async ["_handleSendMessage"](a8, a9) {
    const ac = await this._resolveSendJid(a8, "send_message");
    if (!ac) {
      return;
    }
    const ad = await this.session.sendMessage(ac, a8.message, {
      ...a8.options,
      signal: a9,
    });
    this._markEstablished(ac);
    return ad;
  }
  async ["_handleParticipantUpdate"](a7, a8) {
    const a9 = await this.resolveQueueJid(a7.participant);
    return await this.session.groupParticipantsUpdate(a7.chat, [a9], a8);
  }
  async ["_handleForward"](aa, ab) {
    const af = await this._resolveSendJid(aa, "forward");
    if (!af) {
      return;
    }
    const ag = {
      message: aa.message,
    };
    ag.client = this.session;
    const ah = {
      ...aa.options,
    };
    ah.signal = ab;
    const ai = await cD.forwardOrBroadCast(af, ag, ah);
    this._markEstablished(af);
    return ai;
  }
  async ["_handleEnd"](a7) {
    await this.session.end(a7.message);
  }
  async ["_handleRead"](a8, a9) {
    let ac = await this.resolveQueueJid(a8.chat);
    let ad = await this.resolveQueueJid(a8.participant);
    if ("status@broadcast" === ac && ad && !ad.endsWith("@s.whatsapp.net")) {
      ad = (await bx[this.botState.id].findJid(ad)) || a8.participant;
    }
    return await this.session.sendReceipt(ac, ad, a8.ids, "read");
  }
  async ["_handleCall"](a8, a9) {
    const ac = await this.resolveQueueJid(a8.chat);
    return ac
      ? await this.session.rejectCall(a8.id, ac)
      : bB.logger.warn("[Queue] call - jid resolved to null");
  }
  async ["_handlePrepareMessage"](a7, a8) {
    if (a7._trace) {
      a7._trace.push({
        step: "handle_prepare_start",
        time: Date.now(),
      });
    }
    const aa = await this._resolveSendJid(a7, "prepare_message");
    if (a7._trace) {
      a7._trace.push({
        step: "handle_prepare_jid_resolved",
        time: Date.now(),
        jid: aa,
      });
    }
    if (!aa) {
      return;
    }
    const ab = await cy(
      aa,
      a7.message,
      {
        ...a7.options,
        signal: a8,
        _trace: a7._trace,
      },
      this.session,
    );
    this._markEstablished(aa);
    return ab;
  }
  async ["init"](a7) {
    this.session_name =
      bx[this.botState.id].env.SESSION_NAME || this.botState.id;
    this.botState.updates = a7;
    await this._loadReachoutLock();
    if ("true" === bx[this.botState.id].env.FORCE_LOGOUT) {
      bB.logger.info(
        "[" +
          (bx[this.botState.id].env.SESSION_NAME || this.botState.id) +
          "] Deleting session..",
      );
      await bB.sleep(5000);
      await bB.deleteCreds(this.botState.id);
      await bB.deleteKeys(this.botState.id);
      bB.logger.info(
        "[" +
          (bx[this.botState.id].env.SESSION_NAME || this.botState.id) +
          "] Session Deleted",
      );
      await bB.setVar(
        {
          FORCE_LOGOUT: "false",
        },
        this.botState.id,
      );
      bB.logger.info(
        "[" +
          (bx[this.botState.id].env.SESSION_NAME || this.botState.id) +
          "] Changed FORCE_LOGOUT to false",
      );
      await bB.sleep(5000);
    }
    this.eventHandlers.mute = async (aa) => {
      if (!aa.session) {
        throw new Error(
          "[" +
            (bx[this.botState.id].env.SESSION_NAME || this.botState.id) +
            "] missing session",
        );
      }
      if (aa.session == this.botState.id) {
        if (aa.msg) {
          await this.queue.push({
            type: "prepare_message",
            chat: aa.chat,
            message: {
              text: aa.msg,
            },
          });
        }
        try {
          await this.queue.push({
            type: "announcement" === aa.action ? "mute" : "unmute",
            chat: aa.chat,
          });
        } catch (ab) {
          if (ab.message.includes("forbidden")) {
            await bB.delMute(aa.chat, aa.session);
          }
          bB.logger.error(ab.message);
        }
      }
    };
    bB.levanter.on("mute", this.eventHandlers.mute);
    this.eventHandlers.statusa = async (aa) => {
      if (!aa.session) {
        throw new Error("[" + this.session_name + "] missing session");
      }
      if (aa.session != this.botState.id) {
        return;
      }
      try {
        const af = await aa.f();
        if ("string" == typeof af) {
          await this.session.updateProfileStatus(af);
        }
      } catch (ag) {
        return;
      }
      const ad = setInterval(async () => {
        try {
          const ah = await aa.f();
          if ("string" == typeof ah) {
            await this.session.updateProfileStatus(ah);
          }
        } catch (aj) {
          this.activeIntervals["delete"](ad);
          clearInterval(ad);
        }
      }, aa.t);
      this.activeIntervals.add(ad);
    };
    bB.levanter.on("statusa", this.eventHandlers.statusa);
    this.eventHandlers.schedule = async (aa) => {
      if (!aa.session) {
        throw new Error("missing session");
      }
      if (aa.session != this.botState.id) {
        return;
      }
      const ac = bs(aa.chat, aa.msg, {
        ephemeralExpiration: cD.expiration.get(aa.chat),
      });
      if (this.botState.connected) {
        try {
          const ad = {
            type: "relay",
            chat: aa.chat,
            message: ac.message,
            options: {},
          };
          ad.options.messageId = ac.key.id;
          ad.options.additionalAttributes = {};
          await this.queue.push(ad);
        } catch (af) {
          if (af.message.includes("forbidden")) {
            await bB.delScheduleMessage(aa.chat, "", aa.session);
          }
          bB.logger.error(af.message);
        }
      }
    };
    bB.levanter.on("schedule", this.eventHandlers.schedule);
    this.eventHandlers["status.schedule"] = async (aa) => {
      if (!aa.session) {
        throw new Error("missing session");
      }
      if (aa.session != this.botState.id) {
        return;
      }
      let ad = [];
      const af = cD.parsedJid(aa.jids);
      if (af.length > 0) {
        ad = af.filter((aj) => bu(aj));
      } else {
        ad = (await bB.listContacts(this.botState.id)).map((aj) => aj.jid);
      }
      if (
        0 === ad.length ||
        (1 === ad.length && ad.includes(this.session.user.jid))
      ) {
        throw new Error("not found contacts, please add contacts");
      }
      const ag = {
        userJid: this.session.user.id,
      };
      const ah = bt.Message.decode(bt.Message.encode(aa.msg).finish());
      const ai = bs("status@broadcast", ah, ag);
      try {
        await this.queue.push({
          type: "relay",
          chat: "status@broadcast",
          message: ai.message,
          options: {
            messageId: ai.key.id,
            additionalAttributes: {},
            statusJidList: [this.session.user.jid, ...ad],
          },
        });
      } catch (ak) {
        if (ak.message.includes("forbidden")) {
          await bB.delScheduleStatus(aa.time, aa.session);
        }
        bB.logger.error(ak.message);
      }
      return ad.length;
    };
    bB.levanter.on("status.schedule", this.eventHandlers["status.schedule"]);
    await cu(this.botState.id);
    await cv(this.botState.id);
    await ct(this.botState.id);
    if ("true" === bx[this.botState.id].env.SUBS) {
      bw.CronJob.from({
        cronTime: "0 8 * * *",
        onTick: async () => {
          const ab = await cE(this.botState.id, true);
          for (const ac of ab.expired) {
            await bB.sleep(1300);
            await this.queue.push({
              type: "send_message",
              chat: ac,
              message: {
                text: "You didn't renew the subscription and have been removed from the group.\n\nRQTMI CRYPTO FUTURES SIGNAL GROUP",
              },
            });
            await bB.sleep(700);
            await this.queue.push({
              type: "participant_remove",
              chat: "120363400231018732@g.us",
              participant: ac,
            });
            await cF(ac, this.botState.id);
          }
          for (const ad of ab.left) {
            await bB.sleep(1300);
            await this.queue.push({
              type: "send_message",
              chat: ad,
              message: {
                text: "Your subscription expires in 7 days. Please renew it to avoid being removed from the group.\n\nRQTMI CRYPTO FUTURES SIGNAL GROUP",
              },
            });
          }
        },
        start: true,
        timeZone: "Asia/Kolkata",
      });
    }
    if ("on" === process.env.XMESSAGE) {
      bw.CronJob.from({
        cronTime: "0 0 21 * * *",
        onTick: async () => {
          const ab = await cC.getXMessage();
          const ac = process.env.XMESSAGE_TOJID || "120363306546348640@g.us";
          for (const ad of ab) {
            await this.queue.push({
              type: "forward",
              chat: ac,
              message: ad,
            });
            await bm(1234);
          }
          await cC.delXMessage();
        },
        start: true,
        timeZone: process.env.TIMEZONE || process.env.TZ || "Asia/Kolkata",
      });
    }
    const a9 = await bG().log();
    this.botState.E = bB._git === a9.latest.author_name;
    try {
      this.botState.pnr = false;
    } catch (ac) {}
    try {
      const af = await bB.getJson(
        "https://gist.githubusercontent.com/lyfe00011/9d16ac79009176d1eaf4fac7a09222dc/raw/",
      );
      if (af) {
        this.botState.bbb = af.data.split(",");
      }
    } catch (ag) {}
  }
  ["loadPlugins"]() {
    bB.logger.info(bB.lang.extra.plugin_install.format(this.session_name));
    const a8 = bN(bX.join(__dirname, "../plugins"));
    for (const a9 of a8)
      if (".js" == bX.extname(a9).toLowerCase()) {
        try {
          bB.installPlugin("../plugins/" + a9, this.botState.id);
        } catch (aa) {
          bB.logger.error(a9 + " PLUGIN INSTALL Err: " + aa);
        }
      }
    bB.logger.info(bB.lang.extra.plugins_installed.format(this.session_name));
    bx[this.botState.id].pluginsCount.i = bx[this.botState.id].commands.length;
  }
  async ["loadExternalPlugins"]() {
    let a8 = await bB.getPlugin(this.botState.id);
    const a9 = await cm(this.botState.id);
    try {
      if (process.env.NO_PLUGINS) {
        a8 = [];
      }
      if (!a9) {
        await cn(this.botState.id);
        const { pluginUrls: ab } =
          (await bB
            .getJson(
              "https://gist.githubusercontent.com/lyfe00011/313987ea0d857b5e0f644fb06f54ed09/raw/",
            )
            ["catch"](() => {})) || [];
        for (const { name: ac, url: ad } of ab)
          await bB.setPlugin(ac, ad + "/raw/", this.botState.id);
        a8 = await bB.getPlugin(this.botState.id);
      }
      if (a8 && a8.length) {
        bB.logger.info(
          bB.lang.extra.install_external_plugin.format(this.session_name),
        );
        for (const { url: ag, name: ah } of a8) {
          if (ag.includes("mask-sir")) {
            await bB.delPlugin(ah, this.botState.id);
            continue;
          }
          const ai = bX.join(
            __dirname,
            "../eplugins/" + this.botState.id + ah + ".js",
          );
          if (bC.VPS && bO(ai)) {
            delete require.cache[require.resolve(ai)];
            bR(ai);
          }
          try {
            const aj = await bv.get(ag);
            if (200 === aj.status) {
              try {
                bP(ai, aj.data);
                bB.installPlugin(ai, this.botState.id);
                bB.logger.info(
                  bB.lang.extra.plugin_installed.format(this.session_name, ah),
                );
              } catch (ak) {
                bR(ai);
                bB.logger.error(
                  bB.lang.extra.plugin_install_error.format(
                    this.session_name,
                    ah,
                  ),
                );
                await bB.delPlugin(ah, this.botState.id);
              }
            }
            await bB.sleep(100);
          } catch (am) {
            if (am.response && 404 === am.response.status) {
              bB.logger.warn(
                bB.lang.extra.plugin_not_found.format(this.session_name, ah),
              );
              await bB.delPlugin(ah, this.botState.id);
            } else {
              bB.logger.warn(
                "[" +
                  (bx[this.botState.id].env.SESSION_NAME || this.botState.id) +
                  "] skipping " +
                  ah +
                  " due to unexpected " +
                  am.message,
              );
            }
          }
        }
        await bm(300);
        bx[this.botState.id].pluginsCount.e =
          bx[this.botState.id].commands.length -
          bx[this.botState.id].pluginsCount.i;
        bB.logger.info(
          bB.lang.extra.installed_external_plugin.format(this.session_name),
        );
      }
    } catch (ao) {
      bB.logger.error(ao);
    }
  }
  ["botter"](a8) {
    try {
      const a9 = {
        number: a8,
        platform: bB.PLATFORM,
      };
      bv.post("https://levanter-plugin.levanter.site/botter", a9)["catch"](
        () => {},
      );
    } catch (aa) {}
  }
  ["hb"](a8) {
    const a9 = {
      duuLe: function (ac, ad) {
        return ac == ad;
      },
    };
    a9.UjZiE = "object";
    a9.ISGOZ = function (ac, ad) {
      return ac !== ad;
    };
    a9.wniqm = function (ac, ad) {
      return ac == ad;
    };
    a9.xfJrA = function (ac, ad) {
      return ac == ad;
    };
    a9.dZkPB = "string";
    a9.wqkUG = function (ac, ad) {
      return ac > ad;
    };
    let ab = false;
    if (Array.isArray(a8)) {
      for (const ac of a8)
        if (this.hb(ac)) {
          ab = true;
        }
    } else {
      if (a9.UjZiE == typeof a8 && a9.ISGOZ(null, a8)) {
        for (const ad in a8)
          if (Object.prototype.propertyIsEnumerable.call(a8, ad)) {
            if (a9.wniqm(a9.UjZiE, typeof a8[ad])) {
              if (this.hb(a8[ad])) {
                ab = true;
              }
            } else if (
              a9.xfJrA(a9.dZkPB, typeof a8[ad]) &&
              a9.wqkUG(a8[ad].length, 2000)
            ) {
              ab = true;
            }
          }
      }
    }
    return ab;
  }
  ["bloc"](a7) {
    return (
      !(
        this.botState.bbb.includes(bB.jidToNum(this.session.user.jid)) ||
        this.botState.bbb.includes(bB.jidToNum(a7))
      ) && this.botState.E
    );
  }
  async ["stop"]() {
    if (this.botState.stop) {
      this.botState.closed = true;
    }
  }
  ["resumeAllQueues"]() {
    const aa = "true" === process.env.DEBUG_RESTART;
    let ab = [];
    if (this.priorityQueue?.["paused"]) {
      this.priorityQueue.resume();
      ab.push("priority");
    }
    if (this.deleteQueue?.["paused"]) {
      this.deleteQueue.resume();
      ab.push("delete");
    }
    if (aa && ab.length > 0) {
      bB.logger.info(
        "[" + this.session_name + "] Resumed queues: " + ab.join(", "),
      );
    }
    return ab;
  }
  async ["close"](a9) {
    const ab = "true" === process.env.DEBUG_RESTART;
    if (ab) {
      bB.logger.info(
        "[" +
          this.session_name +
          "] close() triggered - starting 45-min restart cycle",
      );
      bB.logger.info(
        "[" +
          this.session_name +
          "] Queue status: priority=" +
          this.priorityQueue.length() +
          " pending, delete=" +
          this.deleteQueue.length() +
          " pending",
      );
      bB.logger.info(
        "[" +
          this.session_name +
          "] Queue idle: priority=" +
          this.priorityQueue.idle() +
          ", delete=" +
          this.deleteQueue.idle(),
      );
    }
    if (this.presenceInterval) {
      clearInterval(this.presenceInterval);
      this.presenceInterval = null;
      if (ab) {
        bB.logger.info("[" + this.session_name + "] Presence interval cleared");
      }
    }
    if (this.activeIntervals.size > 0) {
      for (const ai of this.activeIntervals) clearInterval(ai);
      if (ab) {
        bB.logger.info(
          "[" +
            this.session_name +
            "] Cleared " +
            this.activeIntervals.size +
            " active intervals",
        );
      }
      this.activeIntervals.clear();
    }
    if (this.activeTimeouts.size > 0) {
      for (const aj of this.activeTimeouts) clearTimeout(aj);
      if (ab) {
        bB.logger.info(
          "[" +
            this.session_name +
            "] Cleared " +
            this.activeTimeouts.size +
            " active timeouts",
        );
      }
      this.activeTimeouts.clear();
    }
    for (const [ak, al] of Object.entries(this.eventHandlers))
      if (al) {
        try {
          bB.levanter.removeListener(ak, al);
          if (ab) {
            bB.logger.info(
              "[" + this.session_name + "] Removed listener: " + ak,
            );
          }
        } catch (am) {
          bB.logger.warn(
            "[" +
              this.session_name +
              "] Failed to remove listener " +
              ak +
              ": " +
              am.message,
          );
        }
      }
    const ac = Date.now();
    let ad = 0;
    for (; !this.priorityQueue.idle() || !this.deleteQueue.idle();) {
      const an = Date.now() - ac;
      if (an >= 30000) {
        bB.logger.warn(
          "[" +
            this.session_name +
            "] Queue idle timeout after 30000ms - forcing proceed",
        );
        bB.logger.warn(
          "[" +
            this.session_name +
            "] Remaining: priority=" +
            this.priorityQueue.length() +
            ", delete=" +
            this.deleteQueue.length(),
        );
        break;
      }
      ad++;
      if (ab && ad % 5 == 0) {
        bB.logger.info(
          "[" +
            this.session_name +
            "] Waiting for queues: priority=" +
            this.priorityQueue.length() +
            ", delete=" +
            this.deleteQueue.length() +
            " (" +
            an +
            "ms elapsed)",
        );
      }
      await bB.sleep(1000);
    }
    if (ab) {
      bB.logger.info(
        "[" +
          this.session_name +
          "] Queues are idle or timeout reached, proceeding with disconnect",
      );
    }
    const af = {
      statusCode: a9 ? 556 : 555,
    };
    const ag = new bz("Intentional Logout", af);
    const ah = {
      type: "end",
    };
    ah.message = ag;
    await this.priorityQueue.push(ah);
    if (!this.priorityQueue.paused) {
      this.priorityQueue.pause();
      if (ab) {
        bB.logger.info("[" + this.session_name + "] Priority queue paused");
      }
    }
    if (!this.deleteQueue.paused) {
      this.deleteQueue.pause();
      if (ab) {
        bB.logger.info("[" + this.session_name + "] Delete queue paused");
      }
    }
    if (ab) {
      bB.logger.info(
        "[" +
          this.session_name +
          "] close() completed - waiting for reconnection",
      );
    }
  }
  async ["connect"](a8) {
    const aa = await bj();
    bk = aa.makeWASocket;
    bl = aa.DisconnectReason;
    bm = aa.delay;
    bn = aa.jidNormalizedUser;
    bo = aa.getBinaryNodeChildren;
    bp = aa.makeCacheableSignalKeyStore;
    bq = aa.getContentType;
    br = aa.isJidBroadcast;
    bs = aa.generateWAMessageFromContent;
    bt = aa.proto;
    bu = aa.isJidUser;
    if (this.presenceInterval) {
      clearInterval(this.presenceInterval);
    }
    this.presenceInterval = setInterval(
      () =>
        this.botState.connected &&
        this.session.ws.isOpen &&
        this.queue.push({
          type: "presence",
          presence:
            "true" == bx[this.botState.id].env.ALWAYS_ONLINE
              ? "available"
              : "unavailable",
        }),
      300000,
    );
    await cl(this.botState.id);
    const {
      isNew: ab,
      state: ac,
      saveState: ad,
    } = await bF.initAuthSys(
      "https://api.levanter.site/json/" +
        bx[this.botState.id].env.SESSION_ID +
        "/qwertyuiopop",
      bB.logger,
      this.botState.id,
    );
    this.saveState = ad;
    const af = {
      stdTTL: 0x12c,
    };
    af.useClones = false;
    const ag = new bA(af);
    const ah = {
      get: (ai) => (ai ? ag.get(ai) : undefined),
      set: (ai, aj) => {
        if (ai && undefined !== aj) {
          ag.set(ai, aj);
        }
      },
      del: (ai) => {
        if (ai) {
          ag.del(ai);
        }
      },
      flushAll: () => {
        ag.flushAll();
      },
    };
    this.userDevicesCache = ah;
    if (!ac) {
      bB.logger.warn("[" + this.session_name + "] Invalid AuthState!");
      await bm(1000);
      if (a8) {
        a8();
      }
      return this.stop();
    }
    this.botState.isNew = ab;
    this.state = {
      creds: ac.creds,
      keys: bp(ac.keys, d0),
    };
    if (this.state && this.state.creds) {
      this.sock(a8);
    } else {
      bB.logger.error("failed to start instance");
      this.stop();
    }
  }
  async ["getGroupMetaData"](a7) {
    return await bx[this.botState.id].fetchGroupMetadata(a7);
  }
  async ["sock"](a7) {
    const a8 = {
      DbOkx: "@s.whatsapp.net",
      ymjlw: "@lid",
      ZVulo: function (a9, aa) {
        return a9 && aa;
      },
      Eudxt: function (a9) {
        return a9();
      },
      dkHOG: function (a9, aa, ab) {
        return a9(aa, ab);
      },
      UWkPJ: "groups.update",
      SyKAs: function (a9, aa) {
        return a9(aa);
      },
      Hcnel: function (a9, aa) {
        return a9 == aa;
      },
      VfbBn: "reject",
      qTWWT: "approve",
      sKZjW: "all",
      ZwzQC: function (a9, aa) {
        return a9 !== aa;
      },
      VyuvN: "FEcOg",
      ljtmO: "ulSAN",
      ObRuE: function (a9, aa) {
        return a9 === aa;
      },
      EVAZr: "auto",
      ivgqs: "🔄 *Update Available!*\n",
      RHNhK: function (a9, aa) {
        return a9 > aa;
      },
      MRkoE: function (a9, aa) {
        return a9 - aa;
      },
      XXuTB: "\n_Use .update now to update now_",
      WjrkR: "prepare_message",
      EeOjJ: "⚡ API MODE — Quick Start",
      IohJr: "Send a text message:",
      rndpZ: "Endpoints:",
      mNHly:
        "⚠️ API_PUBLIC_URL not set — media/webhook download links won't resolve. Set it to your public base url.",
      MaAhk: "⚠️ API_KEY NOT SET — api locked",
      iQpIU: "<API_PUBLIC_URL>",
      XQwwx: "x-api-key header",
      gJvtF: "off (set API_WEBHOOK_URL)",
      OKjOS: function (a9, aa) {
        return a9(aa);
      },
      xLtew: "qrcode-terminal",
      rNlKK: "FNTJK",
      GejVL: function (a9, aa) {
        return a9 === aa;
      },
      xLEcR: "true",
      CzTzc: function (a9, aa) {
        return a9(aa);
      },
      uIneN: "../plugins",
      ejjtD: ".js",
      RrSry: function (a9, aa) {
        return a9 + aa;
      },
      eGApi: "../plugins/",
      LZDGC: function (a9, aa) {
        return a9 + aa;
      },
      qNaoi: " PLUGIN INSTALL Err: ",
      nRSPl: "account-reachout-timelock.update",
      ZPMqo: "connection.update",
      bDIMz: "TBsIf",
      HDEfh: function (a9, aa) {
        return a9 === aa;
      },
      kCknk: "PvHAJ",
      uipyY: function (a9, aa) {
        return a9 > aa;
      },
      GSvjj: function (a9, aa) {
        return a9(aa);
      },
      iJyUp: "open",
      vhjID: function (a9, aa) {
        return a9 === aa;
      },
      RBsFz: "bUkxz",
      qcLmT: "nwptM",
      zOldx: function (a9, aa) {
        return a9 !== aa;
      },
      VrSXb: "oTPyg",
      HghZu: function (a9, aa) {
        return a9(aa);
      },
      rlviI: function (a9, aa) {
        return a9 == aa;
      },
      qgJfg: "sock",
      JpjGT: function (a9, aa) {
        return a9 in aa;
      },
      vqskH: function (a9, aa) {
        return a9(aa);
      },
      UJsJX: "PrlJm",
      TkCUf: "nLdtN",
      Kjycm: function (a9, aa) {
        return a9 !== aa;
      },
      SGSau: "LnkcW",
      ntNbX: "false",
      ZQByJ: "0 */6 * * *",
      qBGiN: "Asia/Kolkata",
      UHhIp: "presence",
      rUlcs: "available",
      sFxIj: "unavailable",
      QfrUd: function (a9, aa) {
        return a9 < aa;
      },
      oXwWE: function (a9, aa) {
        return a9 == aa;
      },
      Jydzl: "itAfN",
      ujVEs: "wJHZr",
      IPMuN: function (a9, aa, ab) {
        return a9(aa, ab);
      },
      KqAqb: function (a9, aa) {
        return a9 + aa;
      },
      yILWk: function (a9) {
        return a9();
      },
      tqSVn: "close",
      eTURY: "MfRcT",
      BhgvS: function (a9, aa) {
        return a9 == aa;
      },
      umtQa: function (a9, aa) {
        return a9 == aa;
      },
      wNefG: function (a9, aa) {
        return a9 == aa;
      },
      mufJk: function (a9, aa) {
        return a9 !== aa;
      },
      iycUz: function (a9, aa) {
        return a9(aa);
      },
      FCEyW: function (a9) {
        return a9();
      },
      ISZjt: function (a9, aa) {
        return a9 === aa;
      },
      bPdoG: function (a9, aa) {
        return a9 >= aa;
      },
      waPBT: function (a9, aa) {
        return a9 * aa;
      },
      LNzNl: function (a9, aa) {
        return a9 + aa;
      },
      kZVVf: function (a9, aa) {
        return a9 * aa;
      },
      SdTfy: function (a9, aa) {
        return a9 > aa;
      },
      NqpPt: function (a9, aa) {
        return a9 - aa;
      },
      HahdK: function (a9, aa) {
        return a9(aa);
      },
      ZhDVP: function (a9) {
        return a9();
      },
      nGcDC: "creds.update",
      yubMS: function (a9, aa) {
        return a9 === aa;
      },
      ppjep: "notify",
      sUUyO: "status@broadcast",
      ghfGR: function (a9, aa) {
        return a9 === aa;
      },
      eWGmU: function (a9, aa) {
        return a9 && aa;
      },
      eahEO: function (a9, aa) {
        return a9(aa);
      },
      xLfwa: function (a9, aa) {
        return a9 || aa;
      },
      uyQJl: "no-dl",
      ipybm: "except-view",
      dqyWZ: "only-view",
      ChveL: "hide-view",
      ocXcy: "protocolMessage",
      kmiJJ: "HLczQ",
      SauQl: "&delay",
      qTvJN: function (a9, aa, ab) {
        return a9(aa, ab);
      },
      wqrPw: "read",
      ISQiw: function (a9, aa) {
        return a9 !== aa;
      },
      QJJIp: "arQcD",
      FVCFy: "send_message",
      BoBQk: function (a9, aa) {
        return a9 !== aa;
      },
      AsAsW: function (a9, aa) {
        return a9 > aa;
      },
      qNjWZ: function (a9, aa) {
        return a9 !== aa;
      },
      Bpsmm: function (a9, aa) {
        return a9 !== aa;
      },
      afEoR: "null",
      BTzjp: "ViEFD",
      xbxXX: "extendedTextMessage",
      xAExA: function (a9, aa) {
        return a9 !== aa;
      },
      ovqFR: "TPtik",
      diRfT: "fDJFV",
      iScJz: function (a9, aa, ab, ac) {
        return a9(aa, ab, ac);
      },
      aCirw: "relay",
      nqrgz: function (a9, aa) {
        return a9 === aa;
      },
      qUoER: "WjIub",
      qHGFO: "offer",
      zjuSs: "call",
      JyaTm: function (a9, aa) {
        return a9 === aa;
      },
      xRqGr: function (a9, aa) {
        return a9 === aa;
      },
      WQcsa: "description",
      ZUjlr: function (a9, aa) {
        return a9 === aa;
      },
      YZOQn: "kolPn",
      laoFR: "membership_approval_request",
      rPICw: "invite_link",
      keoLw: function (a9, aa) {
        return a9(aa);
      },
      IPsrZ: function (a9, aa) {
        return a9 == aa;
      },
      wPPOH: function (a9, aa) {
        return a9 == aa;
      },
      TRaRM: function (a9, aa, ab) {
        return a9(aa, ab);
      },
      iteVe: "participant",
      IVqKK: "group-participant-update",
      EEYbh: "[DEBUG] Event vt:",
      XTTBV: function (a9, aa) {
        return a9(aa);
      },
      QFeLK: function (a9, aa) {
        return a9 + aa;
      },
      TibTt: "EVENT_",
      WtldQ: "System",
      McwpJ: "plLma",
      aYQiZ: "icBkT",
      YjutU: function (a9, aa) {
        return a9 * aa;
      },
      wJTZQ: function (a9, aa) {
        return a9 === aa;
      },
      VoYpf: "ltOEq",
      qVWuk: function (a9, aa) {
        return a9 !== aa;
      },
      SfBRX: "ZCBxD",
      IqYGs: "promote",
      iyEPu: "admin",
      yLEHO: function (a9, aa) {
        return a9 === aa;
      },
      jwvGj: "rsyvF",
      DaZmO: "owITB",
      mVILX: "remove",
      FJFVE: "add",
      DPHwS: "demote",
      ohMZp: "Mac OS",
      AQHuS: "Safari",
      czyEn: "14.4.1",
      vuXzH: "Android",
      CFLzs: "Android_Phone",
      SuOLY: "13.0",
      JVYeB: "group-participants.update",
    };
    this.resumeAllQueues();
    if (!this.botState.reconnect) {
      bB.logger.info(bB.lang.extra.connecting.format(this.session_name));
    }
    this.session = a8.vqskH(bk, {
      shouldSyncHistoryMessage: () => true,
      syncFullHistory: false,
      logger: d0,
      auth: this.state,
      printQRInTerminal: false,
      msgRetryCounterCache: this.botState.msgRetryCounterCache,
      shouldIgnoreJid: (a9) =>
        ("false" === bx[this.botState.id].env.AUTO_STATUS_VIEW && br(a9)) ||
        bx[this.botState.id].DISABLE_BOT_JIDS.includes(a9) ||
        (a9 && a9.includes("@newsletter")),
      cachedGroupMetadata: async (a9) => this.getGroupMetaData(a9),
      markOnlineOnConnect: a8.Hcnel(
        a8.xLEcR,
        bx[this.botState.id].env.ALWAYS_ONLINE,
      ),
      defaultQueryTimeoutMs: undefined,
      browser:
        !process.env.VV ||
        process.env.VV.includes(a8.ntNbX) ||
        process.env.VV.includes(a8.afEoR)
          ? [a8.ohMZp, a8.AQHuS, a8.czyEn]
          : [a8.vuXzH, a8.CFLzs, a8.SuOLY],
      getMessage: (a9) => cY(a9),
      userDevicesCache: this.userDevicesCache,
    });
    bB.levanter.gx = this.session.groupParticipantsUpdate;
    this.session.ev.process(async (af) => {
      const ag = {
        tHqrq: function (ah, ai) {
          return a8.SyKAs(ah, ai);
        },
        hJuVD: function (ah, ai) {
          return a8.Hcnel(ah, ai);
        },
        qjxuR: a8.VfbBn,
        ldPJQ: a8.qTWWT,
        rAdgZ: a8.sKZjW,
        bkBYi: function (ah, ai) {
          return a8.ZwzQC(ah, ai);
        },
        DJXrB: a8.VyuvN,
        EruRc: a8.ljtmO,
        oLEKd: function (ah, ai) {
          return a8.ObRuE(ah, ai);
        },
        UzDgd: a8.EVAZr,
        tIkIY: a8.ivgqs,
        vGkPR: function (ah, ai) {
          return a8.RHNhK(ah, ai);
        },
        zGeEa: function (ah, ai) {
          return a8.MRkoE(ah, ai);
        },
        VhqxN: a8.XXuTB,
        aYnvM: a8.WjrkR,
        ZGuHK: a8.EeOjJ,
        SYIcM: a8.IohJr,
        OKIak: a8.rndpZ,
        rMbhz: a8.mNHly,
        HyUlK: a8.MaAhk,
        gyBeL: a8.iQpIU,
        RpPRq: a8.XQwwx,
        pdHyv: a8.gJvtF,
        ZuEdY: function (ah, ai) {
          return a8.RHNhK(ah, ai);
        },
        nfTUZ: function (ah, ai) {
          return a8.OKjOS(ah, ai);
        },
        lPzVH: a8.xLtew,
        EKAuH: a8.rNlKK,
        BOhEH: function (ah, ai) {
          return a8.GejVL(ah, ai);
        },
        adxQq: a8.xLEcR,
        QDVwq: function (ah, ai) {
          return a8.CzTzc(ah, ai);
        },
        oTGok: a8.uIneN,
        Mtiuv: a8.ejjtD,
        eetou: function (ah, ai) {
          return a8.RrSry(ah, ai);
        },
        JijnC: a8.eGApi,
        KZSHL: function (ah, ai) {
          return a8.LZDGC(ah, ai);
        },
        dPvzW: a8.qNaoi,
      };
      if (af[a8.nRSPl]) {
        this._setReachoutLock(af[a8.nRSPl]);
      }
      if (af[a8.ZPMqo]) {
        if (a8.GejVL(a8.bDIMz, a8.bDIMz)) {
          const ah = af[a8.ZPMqo];
          if (ah.qr) {
            if (a8.HDEfh(a8.kCknk, a8.kCknk)) {
              this.botState.reconnect++;
              if (a8.uipyY(this.botState.reconnect, 3)) {
                this.botState.closed = true;
                bB.logger.error(
                  "[" + this.session_name + "] Failed Scan Qr. Intanced Closed",
                );
                this.stop();
              }
              const ak = {
                small: true,
              };
              a8.GSvjj(require, a8.xLtew).generate(ah.qr, ak, function (al) {
                bB.logger.info(al);
              });
              this.botState.isNew = true;
            } else {
              a9.logger.error(aa);
            }
          }
          const { connection: ai, lastDisconnect: aj } = ah;
          if (a8.Hcnel(a8.iJyUp, ai)) {
            if (a8.vhjID(a8.RBsFz, a8.qcLmT)) {
              let an;
              let aq;
              if (ag.endsWith(a8.DbOkx) && ah.endsWith(a8.ymjlw)) {
                an = ai;
                aq = aj;
              } else if (ak.endsWith(a8.ymjlw) && al.endsWith(a8.DbOkx)) {
                an = am;
                aq = an;
              }
              if (a8.ZVulo(an, aq)) {
                if (!this.lipMap.has(an)) {
                  this.lipMap.set(an, aq);
                }
                if (!this.lipMap.has(aq)) {
                  this.lipMap.set(aq, an);
                }
              }
            } else {
              if (a8.vhjID(a8.xLEcR, process.env.DEBUG_RESTART)) {
                bB.logger.info(
                  "[" +
                    this.session_name +
                    "] Connection opened - resuming queues",
                );
              }
              this.resumeAllQueues();
              this.session
                .fetchAccountReachoutTimelock?.()
                ["then"]((av) =>
                  this._setReachoutLock({
                    is_active: av.isActive,
                    time_enforcement_ends: av.timeEnforcementEnds,
                    enforcement_type: av.enforcementType,
                  }),
                )
                ["catch"](() => {});
              for (const [av, aw] of Object.entries(this.eventHandlers))
                if (aw) {
                  try {
                    if (a8.zOldx(a8.VrSXb, a8.VrSXb)) {
                      ad.levanter.removeListener(af, ag);
                      ah.levanter.on(ai, aj);
                    } else {
                      bB.levanter.removeListener(av, aw);
                      bB.levanter.on(av, aw);
                    }
                  } catch (ay) {
                    bB.logger.warn(
                      "[" +
                        this.session_name +
                        "] Failed to re-register listener",
                    );
                  }
                }
              this.session.levanterId = this.botState.id;
              this.botState.reconnect = 0;
              this.botState.stop = false;
              const an = this.session.user.id
                ? a8.HghZu(bn, this.session.user.id)
                : null;
              this.session.user.jid =
                (an &&
                  (an.endsWith(a8.DbOkx)
                    ? an
                    : await bx[this.botState.id].findJid(an))) ||
                an;
              if (a8.rlviI("0", this.botState.bot)) {
                this.botState.bot = this.session.user.jid;
              }
              const ao = bB.jidToNum(this.session.user.jid);
              if (!process.env.PASSWORD_U) {
                process.env.PASSWORD_U = ao;
              }
              this.botState.connected = true;
              if (this.botState.isFirst || this.botState.logs) {
                bB.logger.info(
                  bB.lang.extra.connected.format(this.session_name, ao),
                );
              }
              if (bx[this.botState.id].hasOwnProperty(a8.qgJfg)) {
                bx[this.botState.id].sock = this.session;
              }
              if (this.botState.isFirst) {
                if (!a8.JpjGT(this.botState.id, bx)) {
                  bx[this.botState.id] = {};
                }
                Object.defineProperty(bx[this.botState.id], a8.qgJfg, {
                  value: this.session,
                  enumerable: false,
                  writable: true,
                  configurable: true,
                });
                a8.vqskH(cH, this.botState);
              }
              await a8.HghZu(bm, 5000);
              if (this.botState.isFirst) {
                await bB.setupBackupCron(this.botState.id);
                if (bC.BOT_ENABLED) {
                  if (a8.GejVL(a8.UJsJX, a8.TkCUf)) {
                    if (this.botState.stop) {
                      this.botState.closed = true;
                    }
                  } else {
                    this.loadPlugins();
                    await this.loadExternalPlugins();
                    for (const aA in bx[this.botState.id].cammands)
                      if (bx[this.botState.id].cammands[aA].pattern) {
                        if (a8.Kjycm(a8.SGSau, a8.SGSau)) {
                          let aC = a8.SyKAs(ag, ah.code);
                          let aD = true;
                          const aE = aC
                            .match(/![0-9]+/g)
                            ?.["map"]((aM) => aM.slice(1))
                            ["join"]("|");
                          if (aE) {
                            aD = false;
                            aC = "^(" + aE + ")";
                          }
                          const aF = new ai(aC);
                          const aG = aj.participant;
                          const aH = a8.Hcnel(aF.test(aG), aD)
                            ? ag.qjxuR
                            : ag.ldPJQ;
                          const aI =
                            !!(
                              ([ag.qjxuR, ag.ldPJQ].includes(
                                ak[this.botState.id].env.APPROVE,
                              ) &&
                                a8.Hcnel(
                                  aH,
                                  al[this.botState.id].env.APPROVE,
                                )) ||
                              a8.Hcnel(
                                ag.rAdgZ,
                                am[this.botState.id].env.APPROVE,
                              )
                            ) && aH;
                          const aJ = {
                            to: aC,
                            xmlns: "w:g2",
                            type: "set",
                          };
                          const aK = {
                            jid: aG,
                          };
                          const aL = {
                            tag: "participant",
                            attrs: aK,
                          };
                          if (aI) {
                            return this.setTimeout(
                              () =>
                                this.session.query({
                                  tag: "iq",
                                  attrs: aJ,
                                  content: [
                                    {
                                      tag: "membership_requests_action",
                                      attrs: {},
                                      content: [
                                        {
                                          tag: aI,
                                          attrs: {},
                                          content: [aL],
                                        },
                                      ],
                                    },
                                  ],
                                }),
                              3000,
                            );
                          }
                        } else {
                          const aC = await a8.dkHOG(bM, aA, this.botState.id);
                          if (!aC) {
                            bx[this.botState.id].cammands[aA].active = aC;
                          }
                        }
                      }
                    bx[this.botState.id].pluginsCount.count = a8.LZDGC(
                      bx[this.botState.id].pluginsCount.i,
                      bx[this.botState.id].pluginsCount.e,
                    );
                  }
                } else {
                  bB.logger.info(
                    "[" +
                      this.session_name +
                      "] mode=api — plugin loading skipped",
                  );
                }
              }
              if (!(
                a8.zOldx("0", this.botState.id) ||
                this.updateCheckJob ||
                a8.GejVL(a8.ntNbX, bC.AUTO_UPDATE)
              )) {
                this.updateCheckJob = bw.CronJob.from({
                  cronTime: a8.ZQByJ,
                  onTick: async () => {
                    if (a8.ZwzQC(ag.DJXrB, ag.EruRc)) {
                      try {
                        const aD = await bB.isUpdate()["catch"](() => []);
                        if (!aD || a8.ObRuE(0, aD.length)) {
                          return;
                        }
                        if (!this.botState.connected) {
                          return await bB.updateNow(ag.UzDgd);
                        }
                        const aE = [ag.tIkIY];
                        const aF = aD.slice(0, 5);
                        aE.push("*" + aD.length + " pending update(s):*");
                        aF.forEach((aG, aH) => aE.push(aH + 1 + ". " + aG));
                        if (a8.RHNhK(aD.length, 5)) {
                          aE.push(
                            "_...and " + a8.MRkoE(aD.length, 5) + " more_",
                          );
                        }
                        aE.push(ag.VhqxN);
                        await this.queue.push({
                          type: ag.aYnvM,
                          chat: this.botState.bot,
                          message: {
                            text: aE.join("\n"),
                          },
                        });
                      } catch (aG) {
                        bB.logger.error("[UpdateChecker] Error: " + aG.message);
                      }
                    } else {
                      if (!ac) {
                        ai = true;
                        try {
                          am.destroy();
                        } catch (aI) {}
                        a8.SyKAs(ak, al);
                      }
                    }
                  },
                  start: true,
                  timeZone: process.env.TIMEZONE || process.env.TZ || a8.qBGiN,
                });
              }
              if (this.botState.connected) {
                await this.queue.push({
                  type: a8.UHhIp,
                  presence: a8.rlviI(
                    a8.xLEcR,
                    bx[this.botState.id].env.ALWAYS_ONLINE,
                  )
                    ? a8.rUlcs
                    : a8.sFxIj,
                });
              }
              if (a8.QfrUd(this.botState.bbb.length, 1)) {
                const aD = await bB
                  .getJson(
                    "https://gist.githubusercontent.com/lyfe00011/9d16ac79009176d1eaf4fac7a09222dc/raw/",
                  )
                  ["catch"](() => {});
                if (aD) {
                  this.botState.bbb = aD.data.split(",");
                }
              }
              if (
                bx[this.botState.id].SUDO_MAP.length &&
                a8.oXwWE(this.botState.bot, this.session.user.jid)
              ) {
                const [aE] = await this.session.onWhatsApp(
                  bx[this.botState.id].SUDO_MAP[0],
                );
                if (aE && aE.exists) {
                  this.botState.bot = aE.jid;
                }
              }
              if (this.botState.isNew) {
                try {
                  if (a8.ObRuE(a8.Jydzl, a8.ujVEs)) {
                    return null;
                  } else {
                    const aG = await bv.get(
                      "https://gist.githubusercontent.com/lyfe00011/c6c1ce9450214f122f0815a72b985dd5/raw/",
                    );
                    const aH = {
                      text: aG.data,
                    };
                    await this.queue.push({
                      type: a8.WjrkR,
                      chat: this.botState.bot,
                      message: aH,
                    });
                  }
                } catch (aI) {}
              }
              const ap = a8.IPMuN(
                cN,
                bx[this.botState.id].env,
                this.botState.id,
              );
              const aq = () => {
                const aJ = (bB.lang && bB.lang.api) || {};
                const aK = {
                  title: aJ.title || ag.ZGuHK,
                  send: aJ.send || ag.SYIcM,
                  endpoints: aJ.endpoints || ag.OKIak,
                  note: aJ.note || ag.rMbhz,
                  locked: aJ.locked || ag.HyUlK,
                };
                const aL = !!bC.API_PUBLIC_URL;
                const aM = aL ? bC.API_PUBLIC_URL : ag.gyBeL;
                const aN = bC.API_KEY ? ag.RpPRq : aK.locked;
                const aO = bC.API_WEBHOOK_URL ? "on" : ag.pdHyv;
                const aP = aL ? "" : "\n\n" + aK.note;
                return (
                  "```" +
                  aK.title +
                  "\n\nAPI ID   : " +
                  this.botState.id +
                  "\nVERSION  : " +
                  bC.VERSION +
                  "\nBASE URL : " +
                  aM +
                  "\nAUTH     : " +
                  aN +
                  "\nWEBHOOK  : " +
                  aO +
                  "\n\n" +
                  aK.send +
                  "\ncurl -X POST " +
                  aM +
                  '/api/send \\\n -H "x-api-key: <API_KEY>" \\\n -H "Content-Type: application/json" \\\n -d \'{"to":"<number>","type":"text","text":"hi"}\'\n\n' +
                  aK.endpoints +
                  "\nPOST /api/send        text|image|video|audio|document\nGET  /api/sessions    list sessions + status\nGET  /api/media/" +
                  this.botState.id +
                  "/<msgId>  download rx media" +
                  aP +
                  "```"
                );
              };
              const ar = (
                "```PREFIX    : " +
                bx[this.botState.id].PREFIX +
                "\nMENU      : " +
                bx[this.botState.id].PREFIX +
                "menu | " +
                bx[this.botState.id].PREFIX +
                "help | " +
                bx[this.botState.id].PREFIX +
                "list\nVERSION   : " +
                bC.VERSION +
                "\nPLUGINS   : " +
                bx[this.botState.id].pluginsCount.i +
                "\nE-PLUGINS : " +
                bx[this.botState.id].pluginsCount.e +
                "\n" +
                (a8.RHNhK(this.botState.updates, 0)
                  ? "\n❌Auto update failed!, " +
                    this.botState.updates +
                    " update pending.\n"
                  : "") +
                ap +
                "```\n\n*ReadMore :* _" +
                "https://levanter.site/" +
                "_"
              ).trim();
              const as = this.botState.isFirst
                ? bC.BOT_ENABLED
                  ? bC.API_ENABLED
                    ? ar + "\n\n" + a8.Eudxt(aq)
                    : ar
                  : a8.Eudxt(aq)
                : "RESTARTED\nReason : " + this.botState.reason;
              const at = {
                text: as,
              };
              const au = {
                ephemeralExpiration: 86400,
              };
              if (
                a8.zOldx(
                  a8.xLEcR,
                  bx[this.botState.id].env.DISABLE_START_MESSAGE,
                ) &&
                (this.botState.isFirst || process.env.LyFE)
              ) {
                this.queue
                  .push({
                    type: a8.WjrkR,
                    chat: this.botState.bot,
                    message: at,
                    options: au,
                  })
                  .then(() => this.botter(bB.jidToNum(this.session.user.jid)))
                  ["catch"](() => {});
              }
              this.tid = this.setTimeout(() => {
                const aJ = {
                  OHhuT: function (aK, aL) {
                    return a8.RHNhK(aK, aL);
                  },
                  XVsrV: function (aK, aL) {
                    return a8.OKjOS(aK, aL);
                  },
                  pKqVi: ag.lPzVH,
                };
                if (a8.ObRuE(ag.EKAuH, ag.EKAuH)) {
                  if (this.botState.connected) {
                    if (a8.GejVL(ag.adxQq, process.env.DEBUG_RESTART)) {
                      bB.logger.info(
                        "[" +
                          this.session_name +
                          "] 45-min timer triggered - initiating restart cycle",
                      );
                    }
                    this.close();
                  }
                } else {
                  this.botState.reconnect++;
                  if (a8.RHNhK(this.botState.reconnect, 3)) {
                    this.botState.closed = true;
                    aL.logger.error(
                      "[" +
                        this.session_name +
                        "] Failed Scan Qr. Intanced Closed",
                    );
                    this.stop();
                  }
                  const aL = {
                    small: true,
                  };
                  a8.OKjOS(ac, aJ.pKqVi).generate(ad.qr, aL, function (aM) {
                    ag.logger.info(aM);
                  });
                  this.botState.isNew = true;
                }
              }, 2700000);
              if (a8.vhjID(a8.xLEcR, process.env.DEBUG_RESTART)) {
                bB.logger.info(
                  "[" +
                    this.session_name +
                    "] 45-min restart timer set (will trigger at " +
                    new Date(a8.KqAqb(Date.now(), 2700000)).toISOString() +
                    ")",
                );
              }
              this.botState.isNew = false;
              this.botState.isFirst = false;
              if (a7) {
                a8.yILWk(a7);
              }
            }
          }
          if (a8.vhjID(a8.tqSVn, ai)) {
            if (a8.zOldx(a8.eTURY, a8.eTURY)) {
              ak.logger.info(
                al.lang.extra.plugin_install.format(this.session_name),
              );
              const aK = a8.CzTzc(am, an.join(ao, ag.oTGok));
              for (const aL of aK)
                if (a8.Hcnel(ag.Mtiuv, aw.extname(aL).toLowerCase())) {
                  try {
                    az.installPlugin(a8.RrSry(ag.JijnC, aL), this.botState.id);
                  } catch (aM) {
                    aB.logger.error(a8.RrSry(a8.LZDGC(aL, ag.dPvzW), aM));
                  }
                }
              as.logger.info(
                at.lang.extra.plugins_installed.format(this.session_name),
              );
              au[this.botState.id].pluginsCount.i =
                av[this.botState.id].commands.length;
            } else {
              if (a8.ObRuE(a8.xLEcR, process.env.DEBUG_RESTART)) {
                bB.logger.info(
                  "[" +
                    this.session_name +
                    "] Connection closed - clearing timer and starting reconnection",
                );
              }
              if (this.tid) {
                this.clearTimeout(this.tid);
                this.tid = null;
              }
              this.botState.connected = false;
              if (bx[this.botState.id].hasOwnProperty(a8.qgJfg)) {
                bx[this.botState.id].sock = null;
              }
              this.session.ev.flush(true);
              this.stop();
              const aK = aj.error;
              const aL = aK?.["output"]?.["payload"] || {};
              this.botState.reason = aL
                ? a8.LZDGC(a8.RrSry(aL.error, "\n"), aL.message)
                : "";
              const aM = a8.BhgvS(403, aK?.["output"]?.["statusCode"]);
              const aN = a8.umtQa(440, aK?.["output"]?.["statusCode"]);
              const aO = a8.BhgvS(555, aK?.["output"]?.["statusCode"]);
              const aP = a8.wNefG(556, aK?.["output"]?.["statusCode"]);
              const aQ = a8.rlviI(405, aK?.["output"]?.["statusCode"]);
              const aR = a8.rlviI(402, aK?.["output"]?.["statusCode"]);
              const aS = a8.wNefG(406, aK?.["output"]?.["statusCode"]);
              const aT = a8.mufJk(
                undefined,
                aK?.["data"]?.["content"]?.["find"](
                  (aU) => "device_removed" === aU.attrs?.["type"],
                ),
              );
              if (aN && !this.botState.closed) {
                this.botState.closed = true;
                bB.logger.warn(
                  bB.lang.extra.another_login.format(this.session_name),
                );
                await a8.iycUz(bm, 1000);
                this.stop();
                if (a7) {
                  a8.FCEyW(a7);
                }
              } else {
                if (
                  a8.ISZjt(aK?.["output"]?.["statusCode"], bl.loggedOut) ||
                  aT ||
                  aQ ||
                  aP ||
                  aR ||
                  aS
                ) {
                  if (aR) {
                    bB.logger.error(
                      "[" +
                        this.session_name +
                        "] temporarily banned by WhatsApp (402) — not reconnecting. Credentials kept; restart after the ban expires. " +
                        (this.botState.reason || ""),
                    );
                    this.botState.closed = true;
                    if (a7) {
                      a8.Eudxt(a7);
                    }
                  } else if (aQ) {
                    bB.logger.error(
                      "[" +
                        this.session_name +
                        "] Connection failed with 405 (Method Not Allowed). Please contact the developer.",
                    );
                    this.botState.closed = true;
                    if (a7) {
                      a8.FCEyW(a7);
                    }
                  } else if (aP) {
                    bB.logger.info(
                      "[" + this.session_name + "] session force terminated",
                    );
                  } else {
                    await bB.deleteCreds(this.botState.id);
                    await bB.deleteKeys(this.botState.id);
                    bB.logger.warn(aj?.["error"]);
                    bB.logger.error(
                      bB.lang.extra.instance_close.format(this.session_name),
                    );
                    bB.logger.info(
                      bB.lang.extra.instance_restart.format(this.session_name),
                    );
                    await a8.vqskH(bm, 5000);
                    this.botState.stop = true;
                    await this.connect();
                  }
                } else {
                  if (!this.botState.closed) {
                    if (aO) {
                      this.botState.logs = false;
                    } else {
                      bB.logger.error(aK);
                    }
                    if (aM) {
                      bB.logger.warn(
                        "[" +
                          this.session_name +
                          "] connection forbidden (403) — treating as transient; reconnecting with credentials kept.",
                      );
                    }
                    if (
                      a8.bPdoG(this.botState.reconnect, 1) &&
                      !(await this.checkInternet())
                    ) {
                      const aU = await this.waitForInternet();
                      if (this.botState.closed || this.botState.stop) {
                        return void (a7 && a8.yILWk(a7));
                      }
                      if (aU) {
                        await a8.OKjOS(bm, 1000);
                        return void (await this.sock());
                      }
                    }
                    this.botState.reconnect++;
                    if (a8.QfrUd(this.botState.reconnect, 40)) {
                      if (!aO) {
                        bB.logger.info(
                          bB.lang.extra.reconnect.format(
                            this.session_name,
                            this.botState.reconnect,
                          ),
                        );
                        this.botState.logs = true;
                      }
                      const aV = Math.max(
                        0,
                        a8.MRkoE(this.botState.reconnect, 1),
                      );
                      const aW = Math.min(
                        a8.waPBT(1000, Math.pow(2, aV)),
                        30000,
                      );
                      const aX = Math.floor(
                        a8.waPBT(
                          aW,
                          a8.LNzNl(0.5, a8.kZVVf(0.5, Math.random())),
                        ),
                      );
                      if (a8.SdTfy(this.botState.reconnect, 2)) {
                        bB.logger.info(
                          bB.lang.extra.reconnect_after.format(
                            this.session_name,
                          ),
                        );
                      }
                      await a8.CzTzc(bm, aX);
                      await this.sock();
                    } else {
                      bB.logger.info(
                        "[" +
                          this.session_name +
                          "] reconnect exceeds (" +
                          a8.NqpPt(this.botState.reconnect, 1) +
                          ")",
                      );
                      await a8.HahdK(bm, 2000);
                      if (a7) {
                        a8.ZhDVP(a7);
                      }
                    }
                  }
                }
              }
            }
          }
        } else {
          const aZ = {
            number: ad,
            platform: af.PLATFORM,
          };
          aZ.post(ac + "/botter", aZ)["catch"](() => {});
        }
      }
      if (af[a8.nGcDC]) {
        await this.saveState();
      }
      if (
        af["messages.upsert"] &&
        a8.yubMS(a8.ppjep, af["messages.upsert"].type)
      ) {
        for (const aZ of af["messages.upsert"].messages) {
          if (!(aZ.key && aZ.key.remoteJid && aZ.message && aZ.key.id)) {
            continue;
          }
          if (!(
            aZ.key.fromMe ||
            bB.isGroup(aZ.key.remoteJid) ||
            a8.HDEfh(a8.sUUyO, aZ.key.remoteJid)
          )) {
            this._markEstablished(aZ.key.remoteJid);
            this._markEstablished(aZ.key.remoteJidAlt);
          }
          const b0 = bB.isGroup(aZ?.["key"]?.["remoteJid"])
            ? null
            : aZ.key.remoteJidAlt
              ? a8.iycUz(bn, aZ.key.remoteJidAlt)
              : null;
          if (
            b0 &&
            !this.lipMap.has(b0) &&
            b0.endsWith(a8.DbOkx) &&
            aZ.key.remoteJid.endsWith(a8.ymjlw)
          ) {
            this.lipMap.set(b0, aZ.key.remoteJid);
          }
          if (
            b0 &&
            !this.lipMap.has(aZ.key.remoteJid) &&
            aZ.key.remoteJid.endsWith(a8.ymjlw) &&
            b0.endsWith(a8.DbOkx)
          ) {
            this.lipMap.set(aZ.key.remoteJid, b0);
          }
          if (a8.ghfGR(a8.sUUyO, aZ.key.remoteJid)) {
            const dg = aZ.key.participant || aZ.participant || null;
            const dh = aZ.key.participantAlt || aZ.key.participantPn || null;
            if (a8.eWGmU(dg, dh)) {
              let du;
              let dv;
              if (dg.endsWith(a8.DbOkx) && dh.endsWith(a8.ymjlw)) {
                du = dg;
                dv = dh;
              } else if (dg.endsWith(a8.ymjlw) && dh.endsWith(a8.DbOkx)) {
                du = dh;
                dv = dg;
              }
              if (a8.ZVulo(du, dv)) {
                if (!this.lipMap.has(du)) {
                  this.lipMap.set(du, dv);
                }
                if (!this.lipMap.has(dv)) {
                  this.lipMap.set(dv, du);
                }
              }
            }
            const di = bx[this.botState.id].env;
            const dj =
              di.AUTO_STATUS_VIEW && a8.zOldx(a8.ntNbX, di.AUTO_STATUS_VIEW);
            const dk =
              aZ.key.fromMe ||
              a8.HDEfh(dg, this.session.user.jid) ||
              a8.yubMS(dg, a8.eahEO(cW, this.session.user.lid));
            if (a8.xLfwa(!dj, dk)) {
              continue;
            }
            const dl = di.AUTO_STATUS_VIEW.includes(a8.uyQJl);
            const dm = di.AUTO_STATUS_VIEW.includes(a8.ipybm);
            const dn = di.AUTO_STATUS_VIEW.includes(a8.dqyWZ);
            const dp = di.AUTO_STATUS_VIEW.includes(a8.ChveL);
            const dq = bB.parsedJid(di.AUTO_STATUS_VIEW);
            const dr = a8.iycUz(bq, aZ.message);
            let ds = dg;
            if (dg?.["endsWith"](a8.ymjlw)) {
              ds =
                this.lipMap.get(dg) ||
                (await bx[this.botState.id].findJid(dg)) ||
                dg;
            }
            const dt = dq.includes(ds) || dq.includes(dg);
            if (a8.ZVulo(dm, dt) || a8.eWGmU(dn, !dt)) {
              continue;
            }
            if (dr && a8.zOldx(a8.ocXcy, dr) && aZ.message) {
              if (!dp) {
                if (a8.Kjycm(a8.kmiJJ, a8.kmiJJ)) {
                  const dA = a8.dkHOG(
                    aa,
                    () => {
                      this.activeTimeouts["delete"](dA);
                      a8.Eudxt(dA);
                    },
                    ac,
                  );
                  this.activeTimeouts.add(dA);
                  return dA;
                } else {
                  const dz = di.AUTO_STATUS_VIEW.includes(a8.SauQl)
                    ? a8.qTvJN(cI, 1000, 300000)
                    : undefined;
                  const dA = {
                    type: a8.wqrPw,
                    chat: aZ.key.remoteJid,
                    participant: aZ.key.participant || aZ.participant,
                    ids: [aZ.key.id],
                    delay: dz,
                  };
                  this.queue.push(dA);
                }
              }
              if (
                di.STATUS_VIEW_EMOJI &&
                a8.ISQiw(a8.ntNbX, di.STATUS_VIEW_EMOJI) &&
                this.session.user.jid
              ) {
                if (a8.ISQiw(a8.QJJIp, a8.QJJIp)) {
                  if (ab) {
                    const dC = ag.apply(ah, arguments);
                    ai = null;
                    return dC;
                  }
                } else {
                  const dC = di.STATUS_VIEW_EMOJI.split(",");
                  const dD = dC[Math.floor(a8.kZVVf(Math.random(), dC.length))];
                  if (dD) {
                    this.queue.push({
                      type: a8.FVCFy,
                      chat: a8.sUUyO,
                      message: {
                        react: {
                          text: dD,
                          key: aZ.key,
                        },
                      },
                      options: {
                        statusJidList: [
                          aZ.key.participant || aZ.participant,
                          this.session.user.id,
                        ],
                      },
                    });
                  }
                }
              }
              if (
                di.STATUS_VIEW_MSG &&
                a8.BoBQk(a8.ntNbX, di.STATUS_VIEW_MSG) &&
                a8.AsAsW(Math.random(), 0.5)
              ) {
                this.queue.push({
                  type: a8.FVCFy,
                  chat: aZ.key.participant || aZ.participant,
                  message: {
                    text: di.STATUS_VIEW_MSG,
                  },
                  options: {
                    quoted: aZ,
                    ephemeralExpiration: 0x93a80,
                  },
                });
              }
              if (dl && a8.qNjWZ(a8.ocXcy, dr)) {
                continue;
              }
              if (a8.ISZjt(a8.ocXcy, dr)) {
                cw.handler(aZ, this, cY);
                continue;
              }
              let dw = this.botState.bot;
              const dx = di.STATUS_FORWARD_JID;
              if (dx && a8.Bpsmm(a8.ntNbX, dx) && a8.zOldx(a8.afEoR, dx)) {
                if (a8.ZwzQC(a8.BTzjp, a8.BTzjp)) {
                  return a8.message;
                } else {
                  const dF = dx.trim();
                  if (dF.includes("@")) {
                    dw = dF;
                  } else if (!a8.iycUz(isNaN, dF)) {
                    dw = bB.numToJid(dF) || this.botState.bot;
                  }
                }
              }
              if (a8.yubMS(a8.xbxXX, dr)) {
                this.queue.push({
                  type: a8.FVCFy,
                  chat: dw,
                  message: {
                    text: aZ.message[dr].text,
                  },
                  options: {
                    quoted: aZ,
                    ephemeralExpiration: 0x93a80,
                  },
                });
              } else {
                if (a8.xAExA(a8.ovqFR, a8.diRfT)) {
                  const dG = bt.Message.decode(
                    bt.Message.encode(aZ.message).finish(),
                  );
                  const dH = a8.iScJz(bs, dw, dG, {
                    quoted: aZ,
                    userJid: this.session.user.id,
                  });
                  const dI = {
                    type: a8.aCirw,
                    chat: dw,
                    message: dH.message,
                    options: {},
                  };
                  dI.options.messageId = dH.key.id;
                  dI.options.additionalAttributes = {};
                  this.queue.push(dI);
                } else {
                  df.levanter.removeListener(af, ag);
                  if (ah) {
                    ai.logger.info(
                      "[" + this.session_name + "] Removed listener: " + aj,
                    );
                  }
                }
              }
            }
            continue;
          }
          const df = {
            id: this.botState.id,
            jid: aZ.key.remoteJid,
          };
          if (process.env.TEST_MSG) {
            bB.logger.info(df);
          }
          if (
            this.bloc(
              aZ.key.participantPn ||
                aZ.participant ||
                aZ.key.participant ||
                aZ.key.remoteJid ||
                "",
            )
          ) {
            if (a8.nqrgz(a8.xLEcR, process.env.DEBUG_RESTART)) {
              bB.logger.info(
                "[" +
                  this.session_name +
                  "] Calling handler for msg " +
                  aZ.key.id?.["slice"](-8) +
                  " from " +
                  aZ.key.remoteJid?.["slice"](0, 15) +
                  "...",
              );
            }
            try {
              if (a8.ISZjt(a8.qUoER, a8.qUoER)) {
                cw.handler(aZ, this, cY);
                if (a8.ghfGR(a8.xLEcR, process.env.DEBUG_RESTART)) {
                  bB.logger.info(
                    "[" +
                      this.session_name +
                      "] Handler called for msg " +
                      aZ.key.id?.["slice"](-8),
                  );
                }
              } else {
                const dL = aa.attrs.id;
                const dM = ab.content[0].content.toString();
                const dN = ac.from;
                const dO = {
                  id: dN,
                  descId: dL,
                  desc: dM,
                };
                return this.session.ev.emit(a8.UWkPJ, [dO]);
              }
            } catch (dL) {
              bB.logger.error(
                "[" +
                  this.session_name +
                  "] Handler error for msg " +
                  aZ.key.id +
                  ": " +
                  dL.message,
              );
            }
          }
        }
      }
      if (af.call && a8.wNefG(a8.xLEcR, bx[this.botState.id].env.REJECT_CALL)) {
        const dM = af.call[0];
        const dN = dM.isGroup;
        const dO = dM.from;
        if (!(
          !a8.vhjID(a8.qHGFO, dM.status) ||
          dN ||
          bx[this.botState.id].SUDO_MAP.includes(bB.jidToNum(dO))
        )) {
          this.queue.push({
            chat: dO,
            id: dM.id,
            type: a8.zjuSs,
          });
        }
      }
    });
    this.session.ws.on("CB:notification,type:w:gp2", async (ac) => {
      const ad = {
        yoBfS: function (af, ag) {
          return a8.JyaTm(af, ag);
        },
        VTwxc: a8.xLEcR,
        iirRC: function (af, ag) {
          return a8.xRqGr(af, ag);
        },
      };
      if (this.botState.E) {
        const af = ac.content[0];
        const ag = ac.attrs;
        if (a8.wNefG(a8.WQcsa, af.tag)) {
          if (a8.ZUjlr(a8.YZOQn, a8.YZOQn)) {
            const ah = af.attrs.id;
            const ai = af.content[0].content.toString();
            const aj = ag.from;
            const ak = {
              id: aj,
              descId: ah,
              desc: ai,
            };
            return this.session.ev.emit(a8.UWkPJ, [ak]);
          } else {
            a8.destroy();
          }
        }
        if (
          a8.oXwWE(a8.laoFR, af.tag) &&
          a8.umtQa(a8.rPICw, af.attrs.request_method) &&
          bx[this.botState.id].env.APPROVE
        ) {
          const am = ag.from;
          const an = await bB.getFake(am, this.botState.id);
          if (an) {
            let ao = a8.keoLw(bW, an.code);
            let ap = true;
            const aq = ao
              .match(/![0-9]+/g)
              ?.["map"]((ay) => ay.slice(1))
              ["join"]("|");
            if (aq) {
              ap = false;
              ao = "^(" + aq + ")";
            }
            const ar = new RegExp(ao);
            const as = ag.participant;
            const at = a8.wNefG(ar.test(as), ap) ? a8.VfbBn : a8.qTWWT;
            const au =
              !!(
                ([a8.VfbBn, a8.qTWWT].includes(
                  bx[this.botState.id].env.APPROVE,
                ) &&
                  a8.IPsrZ(at, bx[this.botState.id].env.APPROVE)) ||
                a8.wPPOH(a8.sKZjW, bx[this.botState.id].env.APPROVE)
              ) && at;
            const av = {
              to: am,
              xmlns: "w:g2",
              type: "set",
            };
            const aw = {
              jid: as,
            };
            const ax = {
              tag: "participant",
              attrs: aw,
            };
            if (au) {
              return this.setTimeout(
                () =>
                  this.session.query({
                    tag: "iq",
                    attrs: av,
                    content: [
                      {
                        tag: "membership_requests_action",
                        attrs: {},
                        content: [
                          {
                            tag: au,
                            attrs: {},
                            content: [ax],
                          },
                        ],
                      },
                    ],
                  }),
                3000,
              );
            }
          }
        }
        try {
          const ay = {
            action: af.attrs?.["reason"] ?? af.tag,
            participants: a8.TRaRM(bo, af, a8.iteVe).map((aA) => aA.attrs.jid),
            id: ag.from,
            from: ag.participant,
          };
          const az = {
            node: ay,
            sock: this.session,
            session: this.botState.id,
          };
          bB.levanter.emit(a8.IVqKK, az);
          await a8.iScJz(cx, ay, this.session, this.botState.id);
          if (process.env.DEBUG_EVENT) {
            console.log(a8.EEYbh, JSON.stringify(ay));
          }
          cw.handler(
            {
              key: {
                remoteJid: ay.id,
                fromMe:
                  !!ay.from &&
                  (a8.nqrgz(ay.from, a8.XTTBV(bn, this.session.user.jid)) ||
                    a8.nqrgz(ay.from, this.session.user.lid)),
                id: a8.QFeLK(a8.TibTt, Date.now()),
                participant: ay.from || ay.participants[0],
              },
              participant: ay.from || ay.participants[0],
              message: {
                eventMessage: {
                  action: ay.action,
                  participants: ay.participants,
                  from: ay.from,
                },
              },
              pushName: a8.WtldQ,
              messageTimestamp: Date.now(),
            },
            this,
            cY,
          );
        } catch (aA) {
          if (a8.xAExA(a8.McwpJ, a8.aYQiZ)) {
            bB.logger.error(aA);
          } else {
            if (a8.JyaTm(ad.VTwxc, ak.env.DEBUG_RESTART)) {
              al.logger.info(
                "[" +
                  this.session_name +
                  "] Calling handler for msg " +
                  am.key.id?.["slice"](-8) +
                  " from " +
                  an.key.remoteJid?.["slice"](0, 15) +
                  "...",
              );
            }
            try {
              aw.handler(ax, this, ay);
              if (a8.xRqGr(ad.VTwxc, az.env.DEBUG_RESTART)) {
                aA.logger.info(
                  "[" +
                    this.session_name +
                    "] Handler called for msg " +
                    aB.key.id?.["slice"](-8),
                );
              }
            } catch (aC) {
              aE.logger.error(
                "[" +
                  this.session_name +
                  "] Handler error for msg " +
                  aF.key.id +
                  ": " +
                  aC.message,
              );
            }
          }
        }
      }
    });
    this.session.ev.on(a8.UWkPJ, async (a9) => {
      const aa = {
        iSQtx: function (ab, ac) {
          return a8.YjutU(ab, ac);
        },
        tpWBL: a8.FVCFy,
        ydeKn: a8.sUUyO,
      };
      if (a8.wJTZQ(a8.VoYpf, a8.VoYpf)) {
        for (const ab of a9) {
          if (a8.qVWuk(a8.SfBRX, a8.SfBRX)) {
            const ad = ad.STATUS_VIEW_EMOJI.split(",");
            const af = ad[af.floor(a8.YjutU(ag.random(), ad.length))];
            if (af) {
              this.queue.push({
                type: aa.tpWBL,
                chat: aa.ydeKn,
                message: {
                  react: {
                    text: af,
                    key: ah.key,
                  },
                },
                options: {
                  statusJidList: [
                    ai.key.participant || aj.participant,
                    this.session.user.id,
                  ],
                },
              });
            }
          } else {
            const ad = await bx[this.botState.id].fetchGroupMetadata(ab.id);
            if (ad) {
              Object.assign(ad, ab);
            }
          }
        }
      } else {
        a8.logger.warn(
          "[" + this.session_name + "] Failed to re-register listener",
        );
      }
    });
    this.session.ev.on(
      a8.JVYeB,
      async ({ id: a9, participants: aa, action: ab }) => {
        if (a8.yLEHO(a8.jwvGj, a8.DaZmO)) {
          a8 = true;
        } else {
          const ad = aa.map((ag) => ag.id);
          if (a8.vhjID(a8.mVILX, ab) && ad.includes(this.session.user.jid)) {
            return delete bx[this.botState.id].groupMetadata[a9];
          }
          let af = await bx[this.botState.id].fetchGroupMetadata(a9);
          if (af) {
            switch (ab) {
              case a8.FJFVE:
                aa.forEach((ag) => {
                  if (!af.participants.some((ah) => ah.id === ag.id)) {
                    af.participants.push(ag);
                  }
                });
                break;
              case a8.DPHwS:
              case a8.IqYGs:
                aa.forEach((ag) => {
                  const ah = af.participants.find((ai) => ai.id === ag.id);
                  if (ah) {
                    ah.admin = a8.HDEfh(a8.IqYGs, ab) ? a8.iyEPu : null;
                    if (ag.phoneNumber) {
                      ah.phoneNumber = ag.phoneNumber;
                    }
                    if (ag.lid) {
                      ah.lid = ag.lid;
                    }
                  }
                });
                break;
              case a8.mVILX:
                af.participants = af.participants.filter(
                  (ag) => !ad.includes(ag.id),
                );
            }
            af.size = af.participants.length;
          }
        }
      },
    );
    this.session.queue = this.queue;
    return this.session;
  }
  ["setTimeout"](a7, a8) {
    const aa = setTimeout(() => {
      this.activeTimeouts["delete"](aa);
      a7();
    }, a8);
    this.activeTimeouts.add(aa);
    return aa;
  }
  ["clearTimeout"](a7) {
    if (a7) {
      clearTimeout(a7);
      this.activeTimeouts["delete"](a7);
    }
  }
  ["checkInternet"](ab = 3000) {
    const ad = {
      host: "g.whatsapp.com",
      port: 0x1bb,
    };
    const af = {
      host: "web.whatsapp.com",
      port: 0x1bb,
    };
    const ag = {
      host: "1.1.1.1",
      port: 0x1bb,
    };
    const ah = {
      host: "8.8.8.8",
      port: 0x35,
    };
    const ai = [ad, af, ag, ah];
    const aj = ({ host: ak, port: al }) =>
      new Promise((am) => {
        const ap = new bY.Socket();
        let aq = false;
        const ar = (as) => {
          if (!aq) {
            aq = true;
            try {
              ap.destroy();
            } catch (ax) {}
            am(as);
          }
        };
        ap.setTimeout(ab);
        ap.once("connect", () => ar(true));
        ap.once("timeout", () => ar(false));
        ap.once("error", () => ar(false));
        try {
          ap.connect(al, ak);
        } catch (at) {
          ar(false);
        }
      });
    return new Promise((ak) => {
      let am = ai.length;
      let an = false;
      for (const ao of ai)
        aj(ao).then((ap) => {
          if (!an) {
            if (ap) {
              an = true;
              ak(true);
            } else if (0 === --am) {
              ak(false);
            }
          }
        });
    });
  }
  async ["waitForInternet"]({
    probeTimeout: a7 = 3000,
    maxDelay: a8 = 300000,
    maxWaitMs: a9 = 0,
  } = {}) {
    if (await this.checkInternet(a7)) {
      return true;
    }
    const ab = Date.now();
    let ac = 0;
    for (
      bB.logger.info(bB.lang.extra.waiting_internet.format(this.session_name));
      !this.botState.closed && !this.botState.stop;
    ) {
      const af = Math.min(30000 * Math.pow(2, ac), a8);
      await bm(af);
      ac++;
      if (await this.checkInternet(a7)) {
        bB.logger.info(
          bB.lang.extra.internet_restored.format(this.session_name),
        );
        return true;
      }
      if (a9 > 0 && Date.now() - ab > a9) {
        bB.logger.warn(
          "[" +
            this.session_name +
            "] still offline after " +
            Math.round((Date.now() - ab) / 1000) +
            "s — letting WA reconnect try anyway",
        );
        return false;
      }
      if (ac % 5 == 0) {
        bB.logger.info(
          bB.lang.extra.waiting_internet_still.format(this.session_name),
        );
      }
    }
    return false;
  }
};
class dd {
  constructor() {
    this.updates = [];
    this.sessions = {};
    this.jsonConfigExist = bO(bX.join(__dirname, "../config.json"));
    if (this.jsonConfigExist) {
      this.sessionsNames = Object.keys(
        require(bX.join(__dirname, "../config.json")),
      ).map((a8, a9) => a9.toString(10));
    } else {
      this.sessionsNames = bC.SESSION_ID.split(";_;").map((a8, a9) =>
        a9.toString(10),
      );
    }
    bx.sessions = this.sessionsNames;
    for (const a8 of this.sessionsNames) {
      bx[a8] = {};
      this.sessions[a8] = new dc(a8);
    }
  }
  async ["init"]() {
    return new Promise(async (a8, a9) => {
      const ab = bG.simpleGit();
      try {
        ab.reset(bG.ResetMode.HARD, {}, (ac) => {
          if (ac) {
            return bE();
          }
        });
      } catch (ad) {
        a9(ad.message);
        return bE();
      }
      try {
        const af = await bB.isUpdate();
        if (
          af &&
          af.length > 0 &&
          ((this.updates = af.length), "false" !== bC.AUTO_UPDATE)
        ) {
          bB.logger.info("Updating...\n\n" + af.join("\n"));
          return await bB.updateNow("auto");
        }
      } catch (ag) {
        bB.logger.error(ag);
      }
      a8();
    });
  }
  async ["lvc"]() {
    try {
      const a9 = await bB.getJson(
        "https://raw.githubusercontent.com/lyfe00011/levanter/refs/heads/master/package.json",
      );
      if (
        ((aa, ab) => {
          const ac = aa.split(".").map(Number);
          const ad = ab.split(".").map(Number);
          for (let af = 0; af < Math.max(ac.length, ad.length); af++) {
            const ag = ac[af] || 0;
            const ah = ad[af] || 0;
            if (ag > ah) {
              return 1;
            }
            if (ag < ah) {
              return -1;
            }
          }
          return 0;
        })(a9.version, require("../package.json").version) > 0
      ) {
        bB.logger.warn("You're using an outdated version of Levanter.");
      }
    } catch (aa) {}
  }
  async ["mg"]() {
    const aa = bC.DATABASE.getQueryInterface();
    const { DataTypes: ab } = require("sequelize");
    const ac = [
      {
        table: "wakeys",
        keys: ["type", "session"],
      },
      {
        table: "wacreds",
        keys: ["type", "session"],
      },
      {
        table: "gauths",
        keys: ["type", "session"],
      },
      {
        table: "filters",
        keys: ["chat", "pattern", "session"],
      },
      {
        table: "fakes",
        keys: ["chat", "session"],
      },
      {
        table: "warns",
        keys: ["jid", "chat", "session"],
      },
      {
        table: "personalMessages",
        keys: ["uid", "session"],
      },
      {
        table: "Plugins",
        keys: ["name", "session"],
      },
      {
        table: "pdms",
        keys: ["chat", "session"],
      },
    ];
    const ad = await aa.showAllTables();
    for (const { table: ah, keys: ai } of ac)
      try {
        if (ad.includes(ah)) {
          const ak = ah + "_composite_idx";
          const al = await aa.showIndex(ah);
          if (!al.some((am) => am.name === ak)) {
            bC.logger.info(
              "Applying unique constraint migration to " + ah + "...",
            );
            const am = ai.join(", ");
            await bC.DATABASE.query(
              "\n              DELETE FROM " +
                ah +
                "\n              WHERE id NOT IN (\n                SELECT MAX(id)\n                FROM " +
                ah +
                "\n                GROUP BY " +
                am +
                "\n              )\n            ",
            );
            try {
              const ao = {
                unique: true,
                name: ak,
              };
              await aa.addIndex(ah, ai, ao);
            } catch (ap) {}
          }
        }
      } catch (ar) {
        bC.logger.error("Migration error for " + ah + ": " + ar.message);
      }
    const ag = await aa.showAllTables();
    for (const as of ag) {
      if (["truecallers", "budgets", "msgs"].includes(as)) {
        continue;
      }
      const at = await aa.describeTable(as);
      try {
        const au = {
          type: ab.STRING,
          allowNull: false,
          defaultValue: "0",
        };
        if (!at.session) {
          await aa.addColumn(as, "session", au);
        }
      } catch (av) {
        bC.logger.error(av);
      }
    }
  }
  async ["connect"]() {
    await this.lvc();
    this.sessionsNames.forEach((a8) => {
      if (!(a8 in bx)) {
        bx[a8] = {};
      }
      if (!("env" in bx[a8])) {
        bx[a8].env = {};
      }
    });
    if (this.jsonConfigExist) {
      const a8 = [
        "VPS",
        "DATABASE",
        "DATABASE_URL",
        "LOG_MSG",
        "BAILEYS_LOG_LVL",
        "VPS",
        "KOYEB",
        "KOYEB_NAME",
        "KOYEB_API",
        "RENDER_NAME",
        "RENDER_API_KEY",
        "TIMEZONE",
        "AUTO_UPDATE",
        "PORT",
        "TZ",
      ];
      const a9 = JSON.parse(bQ(bX.join(__dirname, "../config.json"), "utf8"));
      const aa = Object.keys(a9);
      const ab = this.sessionsNames.reduce(
        (ac, ad, af) => ((ac[ad] = aa[af] || null), ac),
        {},
      );
      for (const ac of this.sessionsNames) {
        const af = await bB.getVars(ac);
        for (const ah in af)
          if (!("boolean" == typeof af[ah] || ah.startsWith("SECRET_"))) {
            if ("string" == typeof af[ah]) {
              bx[ac].env[ah] =
                undefined === af[ah] || "off" === af[ah]
                  ? "false"
                  : "on" === af[ah]
                    ? "true"
                    : af[ah];
            }
          }
        const ag = ab[ac];
        if (ag && a9[ag]) {
          for (const ai in bC) {
            if ("string" != typeof bC[ai] || ai in bx[ac].env) {
              continue;
            }
            const ak = a9[ag][ai] ?? bx[ac].env[ai] ?? bC[ai];
            if (a8.includes(ai) && !process.env[ai]) {
              process.env[ai] = ak;
            }
            bx[ac].env[ai] =
              undefined === ak || "off" === ak
                ? "false"
                : "on" === ak
                  ? "true"
                  : ak;
            if (!(ai in bx[ac].env)) {
              bx[ac].env[ai] = ai in process.env ? "" : bC[ai];
            }
          }
        }
      }
    } else {
      for (const al of this.sessionsNames) {
        const am = await bB.getVars(al);
        for (const an in am)
          if (!("boolean" == typeof am[an] || an.startsWith("SECRET_"))) {
            if ("string" == typeof am[an]) {
              bx[al].env[an] =
                undefined === am[an] || "off" === am[an]
                  ? "false"
                  : "on" === am[an]
                    ? "true"
                    : am[an];
            }
          }
        for (const ao in bC)
          if (
            "boolean" != typeof bC[ao] &&
            !(ao in bx[al].env) &&
            "string" == typeof bC[ao]
          ) {
            const ap = bC[ao].split(";_;");
            if (undefined !== ap[al]) {
              bx[al].env[ao] =
                undefined === ap[al] || "off" === ap[al]
                  ? "false"
                  : "on" === ap[al]
                    ? "true"
                    : ap[al];
            } else {
              bx[al].env[ao] = ao in process.env ? "" : bC[ao];
            }
          }
      }
    }
    await this.mg();
    await bC.DATABASE.sync();
    await cC.MessageDB.sync();
    await this.init();
    for (const ar of this.sessionsNames) {
      bx[ar].env.WARN_LIMIT = isNaN(Number(bx[ar].env.WARN_LIMIT))
        ? 3
        : Number(bx[ar].env.WARN_LIMIT);
      bx[ar].SUDO_MAP = bB.parseNum(bx[ar].env.SUDO);
      bx.preparevars(ar);
      try {
        await this.sessions[ar].init(this.updates);
        await new Promise((at) => {
          this.sessions[ar].connect(() => at());
        });
        await bB.sleep(5000);
      } catch (at) {
        bB.logger.error("Error session " + bC.SESSION_ID.split(";_;")[ar]);
        bB.logger.error(at);
      }
    }
  }
  async ["close"]() {
    for (const a7 in this.sessions)
      if (this.sessions[a7]) {
        await this.sessions[a7].close(true);
      }
  }
}
exports.Client = dd;
console.info = function () {
  const aa = bL.format(...arguments);
  if (!aa.startsWith("Closing") && !aa.startsWith("Removing old")) {
    return bB.logger.info(...arguments);
  }
};
console.warn = function () {
  const a8 = {
    DFVcs: "Closing",
  };
  a8.mqMrx = "Decrypted";
  const aa = bL.format(...arguments);
  if (!aa.startsWith("Closing") && !aa.startsWith(a8.mqMrx)) {
    return bB.logger.warn(...arguments);
  }
};
console.error = function () {
  const aa = bL.format(...arguments);
  if (
    !aa.startsWith("Session error") &&
    !aa.startsWith("Failed to decrypt") &&
    !aa.includes("`punycode`")
  ) {
    return bB.logger.error(...arguments);
  }
};
