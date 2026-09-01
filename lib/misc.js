function bq(D, F) {
  return B(F - 0x1f7, D);
}
function bn(D, F) {
  return C(D - 0x96, F);
}
function br(D, F) {
  return C(F + 0x12a, D);
}
function bm(D, F) {
  return C(D - 0xa7, F);
}
function bl(D, F) {
  return C(F + 0x185, D);
}
(function (D, F) {
  const G = D();
  while (true) {
    try {
      const H =
        (parseInt(B(985, "$#%b")) / 1) * (parseInt(C(934, 0x6d3)) / 2) +
        -parseInt(B(681, "di%C")) / 3 +
        parseInt(C(445, 0x4fc)) / 4 +
        -parseInt(C(759, 0x4b7)) / 5 +
        (parseInt(C(890, 0x7b1)) / 6) * (parseInt(C(599, 0x47a)) / 7) +
        parseInt(B(170, "M%32")) / 8 +
        (parseInt(C(1050, 0x41e)) / 9) * (-parseInt(C(255, 0x3bb)) / 10);
      if (H === F) {
        break;
      } else {
        G.push(G.shift());
      }
    } catch (I) {
      G.push(G.shift());
    }
  }
})(z, 978346);
const af = (function () {
  let D = true;
  return function (F, G) {
    const H = D
      ? function () {
          if (G) {
            const I = G.apply(F, arguments);
            G = null;
            return I;
          }
        }
      : function () {};
    D = false;
    return H;
  };
})();
const ag = af(this, function () {
  return ag
    .toString()
    .search("(((.+)+)+)+$")
    .toString()
    .constructor(ag)
    .search("(((.+)+)+)+$");
});
ag();
function bs(D, F) {
  return C(D + 0x108, F);
}
const ah = (function () {
  let D = true;
  return function (F, G) {
    const H = D
      ? function () {
          if (G) {
            const I = G.apply(F, arguments);
            G = null;
            return I;
          }
        }
      : function () {};
    D = false;
    return H;
  };
})();
const ai = ah(this, function () {
  let F;
  try {
    const I = Function('return (function() {}.constructor("return this")( ));');
    F = I();
  } catch (J) {
    F = window;
  }
  const G = (F.console = F.console || {});
  const H = ["log", "warn", "info", "error", "exception", "table", "trace"];
  for (let K = 0; K < H.length; K++) {
    const L = ah.constructor.prototype.bind(ah);
    const M = H[K];
    const N = G[M] || L;
    L.__proto__ = ah.bind(ah);
    L.toString = N.toString.bind(N);
    G[M] = L;
  }
});
function bo(D, F) {
  return B(F + 0x361, D);
}
function B(a, b) {
  const c = z();
  B = function (d, e) {
    d = d - 126;
    let f = c[d];
    if (B.KlgwNs === undefined) {
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
      B.jUPlAY = k;
      a = arguments;
      B.KlgwNs = true;
    }
    const h = c[0];
    const i = d + h;
    const j = a[i];
    if (!j) {
      if (B.pHMhTD === undefined) {
        const l = function (m) {
          this.bEhqLD = m;
          this.ujrWwe = [1, 0, 0];
          this.MhxILg = function () {
            return "newState";
          };
          this.kxKDya = "\\w+ *\\(\\) *{\\w+ *";
          this.BwBpRD = "['|\"].+['|\"];? *}";
        };
        l.prototype.ZdnoVK = function () {
          const m = new RegExp(this.kxKDya + this.BwBpRD);
          const n = m.test(this.MhxILg.toString())
            ? --this.ujrWwe[1]
            : --this.ujrWwe[0];
          return this.VFGOSz(n);
        };
        l.prototype.VFGOSz = function (m) {
          if (!Boolean(~m)) {
            return m;
          }
          return this.nskvly(this.bEhqLD);
        };
        l.prototype.nskvly = function (m) {
          let n = 0;
          for (let o = this.ujrWwe.length; n < o; n++) {
            this.ujrWwe.push(Math.round(Math.random()));
            o = this.ujrWwe.length;
          }
          return m(this.ujrWwe[0]);
        };
        new l(B).ZdnoVK();
        B.pHMhTD = true;
      }
      f = B.jUPlAY(f, e);
      a[i] = f;
    } else {
      f = j;
    }
    return f;
  };
  return B(a, b);
}
ai();
const aj = (...D) => import("node-fetch").then(({ default: F }) => F(...D));
const ak = require("cheerio");
const { join: al } = require("path");
const am = require("pdfkit");
const {
  readFileSync: an,
  emptyDirSync: ao,
  readdirSync: ap,
  createWriteStream: aq,
  ensureDirSync: ar,
  existsSync: as,
} = require("fs-extra");
const at = require("axios")["default"];
const au = require("ws");
const av = require("./config");
const { genButtonMessage: aw, getUrl: ax } = require("./utils");
const { getSpam: ay } = require("./db");
const { spamCheck: az } = require("./antilink");
const { TEMP_DIR: aA } = require("./constant");
let aD = null;
function C(a, b) {
  const c = z();
  C = function (d, e) {
    d = d - 126;
    let f = c[d];
    if (C.qoPowE === undefined) {
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
      C.fRhgXU = g;
      a = arguments;
      C.qoPowE = true;
    }
    const h = c[0];
    const i = d + h;
    const j = a[i];
    if (!j) {
      const k = function (l) {
        this.mHWMfA = l;
        this.ZYaGOU = [1, 0, 0];
        this.UODjtF = function () {
          return "newState";
        };
        this.eAtvJG = "\\w+ *\\(\\) *{\\w+ *";
        this.wZPjpx = "['|\"].+['|\"];? *}";
      };
      k.prototype.RSGeya = function () {
        const l = new RegExp(this.eAtvJG + this.wZPjpx);
        const m = l.test(this.UODjtF.toString())
          ? --this.ZYaGOU[1]
          : --this.ZYaGOU[0];
        return this.ezWAVZ(m);
      };
      k.prototype.ezWAVZ = function (l) {
        if (!Boolean(~l)) {
          return l;
        }
        return this.pQEeOo(this.mHWMfA);
      };
      k.prototype.pQEeOo = function (l) {
        let m = 0;
        for (let n = this.ZYaGOU.length; m < n; m++) {
          this.ZYaGOU.push(Math.round(Math.random()));
          n = this.ZYaGOU.length;
        }
        return l(this.ZYaGOU[0]);
      };
      new k(C).RSGeya();
      f = C.fRhgXU(f);
      a[i] = f;
    } else {
      f = j;
    }
    return f;
  };
  return C(a, b);
}
function aE() {
  let G;
  for (;;) {
    G =
      Math.floor(256 * Math.random()) +
      "." +
      Math.floor(256 * Math.random()) +
      "." +
      Math.floor(256 * Math.random()) +
      "." +
      Math.floor(256 * Math.random());
    const [H] = G.split(".").map(Number);
    if (!(0 === H || 10 === H || 127 === H || H >= 224)) {
      break;
    }
  }
  return G;
}
exports.getImgUrl = async (D) => {
  const G = await aj(D);
  if (!G.ok) {
    throw new Error("Failed to fetch data: " + G.statusText);
  }
  const H = await G.text();
  return ak.load(H)("#il_fi").attr("src");
};
exports.getCommon = function (F, G) {
  if (G) {
    const J = new Map();
    for (const L of F) for (const M of L) J.set(M, (J.get(M) || 0) + 1);
    const K = [];
    for (const [N, O] of J.entries())
      if (O > 1) {
        K.push(N);
      }
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
    if (D[L].length > 0) {
      I.push({
        id: D[L],
        text: D[L],
      });
    }
  }
  if (F.reply_message && F.reply_message.mimetype) {
    H = {
      [F.reply_message.image
        ? "image"
        : F.reply_message.video
          ? "video"
          : "document"]: F.reply_message.message.message[F.reply_message.type],
    };
  }
  return await aw(I, J, K, H, F);
};
exports.toPdf = async function () {
  const F = al(aA, "pdf");
  ar(F);
  const G = as(F) ? ap(F) : [];
  if (0 == G.length) {
    throw new Error("Not added pages, Use page command");
  }
  const H = al(aA, "pdf.pdf");
  return await new Promise((I) => {
    const J = [841.89, 1190.55];
    const K = new am({
      margin: 0x0,
      size: J,
    });
    for (let L = 0; L < G.length; L++) {
      K.image(al(F, G[L]), 0, 0, {
        fit: J,
        align: "center",
        valign: "center",
      });
      if (G.length != L + 1) {
        K.addPage();
      }
    }
    K.end();
    K.pipe(aq(H)).on("finish", function () {
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
    isSpam: az(D, F, G, H, I, J, K, O || "medium", L),
    action: P || "kick",
  };
};
const aF = {};
function z() {
  const dR = [
    "tg1M",
    "lNbK",
    "n053ChvAza",
    "W6lcVCk/",
    "W6/cGwu",
    "eMxcPa",
    "Dgv4",
    "sSkFBq",
    "kSoXW6O",
    "W6mOxW",
    "zw50",
    "vwfK",
    "x2nS",
    "Awz5",
    "W5amsW",
    "W4BdGJW",
    "W54VW70",
    "WRD9Fa",
    "BNrP",
    "W6ZcRmoP",
    "lmoQW6y",
    "W7vWpG",
    "W5agAG",
    "ks7dJq",
    "W6tcR8oY",
    "W4xcHmo3",
    "FXddQW",
    "B25Z",
    "g8oDda",
    "oSokcG",
    "WOxdHCkQ",
    "vxfu",
    "ANnV",
    "W6pdJYq",
    "WPiNW7C",
    "D3L3",
    "W58NW6m",
    "Bg93",
    "kcGO",
    "DefJ",
    "AxqV",
    "twvZ",
    "zKTN",
    "W40wDq",
    "DgLV",
    "DK5h",
    "mhNcNW",
    "zw5K",
    "W7RdJZ8",
    "lY93",
    "W7Hrlq",
    "CJxcIW",
    "WOtcTSo6",
    "DgfU",
    "y2HV",
    "rfbR",
    "y2TF",
    "BIGP",
    "W4eNW7q",
    "C3jJ",
    "ihrV",
    "bwxdTG",
    "kfDP",
    "lNldHq",
    "C29S",
    "WQxcR8o1",
    "mvZcLW",
    "CgrM",
    "WOVcM8oW",
    "y2HL",
    "W6ikW4G",
    "y2vU",
    "iSkWWRy",
    "WOVcNCk9",
    "WPm2W7m",
    "icHM",
    "Dg1S",
    "WQZcOCoJ",
    "WPldLN8",
    "Bg9H",
    "WOLaWQW",
    "qLnf",
    "f2NdOa",
    "DwXS",
    "W4zkW74LCvFdJSkDkrr9mYe",
    "wJCe",
    "ngFdMW",
    "W5/cS8oL",
    "AcnY",
    "ms4W",
    "vq3dLW",
    "WQi5DG",
    "WQuviW",
    "z2vZ",
    "WQSZgW",
    "kmkYWR4",
    "W6ufW7y",
    "mColfa",
    "x3qF",
    "W7m/WOm",
    "EM1w",
    "W73cRYO",
    "WRfsW5NcK8oPj8kuW6S",
    "Ee5I",
    "lwDL",
    "ycjY",
    "CMnO",
    "W6hdHYa",
    "z3rO",
    "WOzkma",
    "zw4T",
    "W7afW6G",
    "l8k5WQS",
    "EhHk",
    "W6ZcGKG",
    "Dc5J",
    "j8ohaq",
    "pmohha",
    "sHNcSa",
    "AMnL",
    "wbtdJq",
    "lmoTW7W",
    "DgvT",
    "WPOPW6a",
    "tb/cSa",
    "WOldJSo3",
    "W79vmG",
    "E30U",
    "taxcQa",
    "DgvU",
    "WQ3cPCkf",
    "WQZdUCoY",
    "WOpcP8o3",
    "W7euW6O",
    "Dg9U",
    "i8k1WRC",
    "kSoXma",
    "vhHN",
    "Dw5J",
    "D2fY",
    "Cg9Z",
    "ksSK",
    "WOykWQi",
    "lY9S",
    "W7r6pG",
    "W7CFWPW",
    "W6VcUGu",
    "l8kxWRS",
    "y3rd",
    "WRBcUmod",
    "WO/dPSkW",
    "CgjA",
    "iIKO",
    "k2/dKq",
    "WPaODa",
    "BWJcSa",
    "v013",
    "lIbq",
    "fx7cVW",
    "yvHT",
    "WPtdT8kS",
    "W7XgoG",
    "otu1nteXmg1RrhrJEG",
    "wZSc",
    "vxLp",
    "W7qOta",
    "Aw5P",
    "W5NcMCoQ",
    "vqNdGa",
    "W7lcJmoI",
    "W4z2mG",
    "yKPd",
    "yxrL",
    "ALHK",
    "W7THfq",
    "sH3cVG",
    "WQJdOw8",
    "cIFdSW",
    "p3bY",
    "A8kzvq",
    "W7mQWOm",
    "EduX",
    "Dw5Z",
    "WQVdRmkx",
    "W6NdUcu",
    "BM93",
    "Aw1P",
    "sH7cVW",
    "xapcVq",
    "W5WnW4e",
    "whPK",
    "W6dcRmo4",
    "x2HP",
    "tYddLa",
    "W69BoG",
    "hgNcSa",
    "lsBdMG",
    "WOrlFG",
    "W69Cma",
    "uspdNq",
    "n07cSq",
    "zw52",
    "WObwWQq",
    "BMfP",
    "WPRdG8kX",
    "W7SqW70",
    "Aw5M",
    "nCk1WQ8",
    "ewJcUG",
    "WO93WQq",
    "W6LMya",
    "W4OtW48",
    "zsbh",
    "C1jz",
    "W6ydWO8",
    "igfN",
    "zw47",
    "WQ7cJMS",
    "W5hdR1y",
    "WQZcOmk6",
    "mCkUWRy",
    "y212",
    "b8k5WOe",
    "W53cGSkT",
    "scyz",
    "Aw4G",
    "W4lcSCox",
    "sJeF",
    "wGxcOW",
    "pSoBja",
    "W57cN8oX",
    "nteY",
    "oCoblG",
    "g8klWRm",
    "W6hcO8oN",
    "EhDY",
    "BhLF",
    "C2v0",
    "vKLd",
    "WRRdJCkP",
    "WOu2W6S",
    "tM5O",
    "ACkosa",
    "WRRcU8kR",
    "CMvY",
    "W4ZcIe0",
    "x2f1",
    "W7NcUJ0",
    "W4JcM8oX",
    "sfrn",
    "WQmuyW",
    "eSkDCq",
    "Bhjr",
    "ru9v",
    "b0NcHq",
    "u0vs",
    "AM9P",
    "W4/cK8o2",
    "BgfJ",
    "yNmU",
    "m2pdJG",
    "i2pdMG",
    "WPGPW6m",
    "B3v0",
    "W4uxCq",
    "WOinWRG",
    "Bxb0",
    "haJcMq",
    "BgLJ",
    "bg7dSG",
    "WQi0pG",
    "C2vU",
    "WOdcQCo8",
    "gWZcHq",
    "WRJdLCoX",
    "DIpdRa",
    "C1FdRa",
    "rLve",
    "W7T6lG",
    "W7S8wq",
    "hWVcMa",
    "DgvY",
    "W5NcGSoU",
    "A3vH",
    "igDL",
    "zxmV",
    "WPRdOK8",
    "AdFcJW",
    "zMXV",
    "uhbw",
    "sKzl",
    "jIRdJq",
    "tKfw",
    "mteYotG3mZHStuXkwNq",
    "uevs",
    "DeLK",
    "W5H2WQK",
    "W6tcT8k7",
    "wwfc",
    "kHddQW",
    "CKzq",
    "D2nl",
    "z2v0",
    "sclcIq",
    "A2v5",
    "zmkyuW",
    "ihjL",
    "bW/dJa",
    "WRJcTwS",
    "W7vWoW",
    "W4ZdPWe",
    "Bs9J",
    "x19W",
    "B3iO",
    "W7vqda",
    "DwnL",
    "rv9m",
    "WQtcT8oH",
    "WRLGWRW",
    "jLVcMq",
    "wLDt",
    "DhjP",
    "pepcIa",
    "nmo9W64",
    "s2zK",
    "B24V",
    "W7iWWPa",
    "ExbL",
    "sfDV",
    "W4JdGCk+",
    "CmoZWRa",
    "W5VcOgS",
    "nG/cGW",
    "WRpdPY4",
    "nwNdIa",
    "DK55",
    "W616lG",
    "otiZotbPCwHTEgG",
    "gSo9lq",
    "W53cJYu",
    "zxnZ",
    "WOFdSmkd",
    "xtOA",
    "DuH6",
    "zxrJ",
    "vxDp",
    "WQJcLNm",
    "gCoFW6u",
    "kYKR",
    "wHtcSa",
    "DhvZ",
    "WOZcNCka",
    "W5irWQy",
    "mhlcHG",
    "W5xcOmoV",
    "WP1aWQu",
    "DgL2",
    "CZKT",
    "W5ddTmkO",
    "W7HvnW",
    "D01m",
    "uMvt",
    "zIHC",
    "c3pdQW",
    "DhjH",
    "aa/cKq",
    "b8k2rW",
    "oSoqgW",
    "W7ibW78",
    "WQZcVCkd",
    "W551aq",
    "W6tdGYW",
    "W40qBa",
    "W5lcMmkr",
    "tr/cNW",
    "WPZdHCkR",
    "ewlcUG",
    "huxcGG",
    "nmordq",
    "CMf0",
    "eIFdRW",
    "r1bu",
    "i2NdSa",
    "Bw9U",
    "wqldQW",
    "zNjL",
    "wvldOa",
    "zg5o",
    "BCk1WQ4hD8kuWPhcSG",
    "Dcbh",
    "hwNcRq",
    "Df9M",
    "BwLZ",
    "tKzf",
    "WOJcV8k8",
    "ChvZ",
    "W4lcQ8o2",
    "BMvY",
    "WRddU3a",
    "WPRdVKS",
    "W4FdOqu",
    "Cg9U",
    "W4ylW5u",
    "WQVcU8ky",
    "WOxdHCk9",
    "ntm3",
    "zMLU",
    "amkCDG",
    "W6/dJwS",
    "tr7dJq",
    "igLT",
    "Exz1",
    "W54JW70",
    "eSoGka",
    "Amk4BG",
    "fK3dIa",
    "W4q3WPm",
    "W5ShWOm",
    "zxb0",
    "cwtdJa",
    "DcLC",
    "DgjV",
    "pCoGW6W",
    "uGxdHW",
    "W40eWOi",
    "W64dWP8",
    "tcWG",
    "CgKU",
    "z2vU",
    "vMDm",
    "DMLK",
    "D2vI",
    "re15",
    "BmoAja",
    "W7mCqG",
    "y3nP",
    "W6ZdHYm",
    "eIVdUa",
    "W5PMW5i",
    "W616cq",
    "W6pcKg8",
    "te9w",
    "x2fJ",
    "B21W",
    "ufqG",
    "W5FcHSov",
    "WQdcHw8",
    "EGtdLG",
    "quDQ",
    "z8k1W5XXeCkAWOpcQqGiW4S",
    "W4GPWP8",
    "igLU",
    "W7VcQCoP",
    "mJyXrxbUtvLM",
    "wbJdJq",
    "DgnO",
    "W6jgma",
    "lJm2",
    "t0Xf",
    "W7RcT8kV",
    "Aw1N",
    "W6VcO8oV",
    "uM9d",
    "BI9K",
    "WRxcKgm",
    "WPCkWRK",
    "C2uG",
    "iCkgFa",
    "Dg9t",
    "CCk+WQ8",
    "yMLU",
    "WOdcU8o1",
    "W6JcPXW",
    "W4uwW5u",
    "W74mW6a",
    "CmkSW4y",
    "eI3dOW",
    "oI8V",
    "u1jx",
    "W6ZcRZS",
    "DcbY",
    "D1Ld",
    "ispdTG",
    "r8kMDq",
    "WQSsiW",
    "WOiJW48",
    "p0/cMa",
    "WOeqWQi",
    "CMvK",
    "m8oIWPW",
    "rHbt",
    "W57dTWy",
    "igzL",
    "CevJ",
    "lMHV",
    "pmoXmq",
    "quLm",
    "W4WjW40",
    "W6f0ca",
    "ywn0",
    "bY7dKa",
    "CMv0",
    "nmocga",
    "W7ZcUmoT",
    "W5SRW7i",
    "pmo3la",
    "rH/dVG",
    "DYT1",
    "Bu7cRq",
    "WOm0W6S",
    "WRuPEa",
    "yNv0",
    "B3Lk",
    "W7qNDG",
    "ms9J",
    "zYbZ",
    "WRhcOSkl",
    "qxLW",
    "Bevs",
    "Dw1L",
    "q1DT",
    "qKXS",
    "CMvH",
    "yxnZ",
    "WR03WOm",
    "W5dcNSk4",
    "WQ3cVCkg",
    "WQBcO8kn",
    "Ae95",
    "cIFdUq",
    "W4qHW7u",
    "C2L6",
    "W71uEhfxW5/dKCo5ttDCW6LioW",
    "Cmk4WRi",
    "W7FcN3O",
    "WQNcJx4",
    "W7pdIH0",
    "D8k/WQq",
    "W50kW5u",
    "wmk4rq",
    "WQislG",
    "vqNdIG",
    "DJH7",
    "W6/cGN4",
    "W6nSiW",
    "DhLW",
    "AaJcOq",
    "WQ7cJcu",
    "WQeYFa",
    "W7RcU2i",
    "lY9H",
    "WOVcVCo2",
    "n3xcKW",
    "W47cOZS",
    "WOVdMSoW",
    "AwvU",
    "qMvH",
    "W6jggW",
    "ah/dPa",
    "W47cJ8ov",
    "WPddOry",
    "W6/cQsG",
    "hf/cHq",
    "tgf3",
    "s3DX",
    "Bqf1",
    "W6xcHmoy",
    "W53cICoz",
    "pCo5W7W",
    "WR0TDq",
    "kstcGa",
    "W6jIdW",
    "Duj5",
    "W4lcT8oO",
    "WPxcVmoW",
    "WP/dL8o3",
    "W5pcNCos",
    "D3jO",
    "z37cIG",
    "W6ZdNt4",
    "W7TTfG",
    "fCk5WQe",
    "W6pdIIG",
    "BgvU",
    "cSoheq",
    "uMX2",
    "W63cVsO",
    "CM90",
    "z2vF",
    "WPJdSCoN",
    "B21L",
    "zgv0",
    "p8oZWOy",
    "WQNcO8kf",
    "BMrV",
    "W58FWOa",
    "nSoOWPS",
    "W6/cLgO",
    "W74TW5K",
    "quP4",
    "W6G/WPa",
    "C3rY",
    "zwX0",
    "WQJcVmkx",
    "WOaxWQC",
    "whj6",
    "zgvK",
    "tJtcQG",
    "vden",
    "W6CeWRu",
    "mmoHWOa",
    "dYddJq",
    "A3f4",
    "rhvf",
    "Dhj5",
    "x8kbWPu",
    "W5meWRi",
    "nZiZmdCWC0DOELzx",
    "BY95",
    "b0NcGq",
    "qLZdHCkawg1FWRJdPCkvEmkPWPhdMq",
    "W5imWQq",
    "k2NdMW",
    "Aw1H",
    "W7lcQvm",
    "t3bk",
    "BgvH",
    "mCoPWOK",
    "W6ChWOS",
    "C2fN",
    "WPtcR8kp",
    "AgLZ",
    "W4RcPv8",
    "C1vz",
    "CgLW",
    "uMT0",
    "sfZdUq",
    "yw50",
    "BvPg",
    "ymkotG",
    "DxjU",
    "W5pdRIy",
    "WPSmWRK",
    "cWpcTa",
    "W6pcVmk4",
    "gwlcVq",
    "zgf0",
    "AMldQq",
    "Ahr0",
    "WQldJsi",
    "yM90",
    "i2LS",
    "ugfN",
    "AZyM",
    "W4GwFa",
    "mmo9W64",
    "Bfb6",
    "WRlcNmoo",
    "W6VcR8km",
    "CvbL",
    "W5ddRIW",
    "W4Pmeq",
    "W7uwW4C",
    "imkiuW",
    "W74SW5K",
    "W6tdJsq",
    "WONdLmk8",
    "lJaG",
    "WQRcTSok",
    "WQ3dGxS",
    "ASkoua",
    "BMrA",
    "WOtcVv8",
    "WO3dLmo9",
    "W6igWOy",
    "B19F",
    "xa3dHW",
    "mcbt",
    "W7pcPsi",
    "BwvZ",
    "DhvY",
    "quPx",
    "D3nZ",
    "AwXS",
    "zfzO",
    "W5GgW5u",
    "lMLK",
    "WPhcNSoO",
    "f0hcTW",
    "guRdSq",
    "W7JdGc4",
    "DgHL",
    "E17dPG",
    "mCkPWQO",
    "mwJcGG",
    "W5/cUSoU",
    "z3ldKW",
    "ffZcGq",
    "oCoXW6m",
    "y2XV",
    "lCoRW6O",
    "rMfP",
    "Awjr",
    "ig1P",
    "swjk",
    "WPFdUe0",
    "WQZcUSky",
    "lI91",
    "nIhcOW",
    "WRBdI8oj",
    "vLj4",
    "zwnR",
    "WOtdL8oM",
    "ifhdTa",
    "bfpcTW",
    "zxjY",
    "tLPi",
    "CI5J",
    "W4q/WPq",
    "D3n3",
    "DNHQ",
    "WP3dMSo0",
    "kSkayq",
    "yxbW",
    "W618iG",
    "CMvW",
    "C3rV",
    "igXH",
    "W61NmW",
    "DxjS",
    "lmo7gq",
    "icHl",
    "ywLU",
    "k8kWWPu",
    "vgLT",
    "WRX1oq",
    "ndi1mZqZnKTYqxDfqW",
    "W4xcGmkC",
    "ufPV",
    "g23dKG",
    "ex/cQG",
    "zxH0",
    "iCoRdq",
    "W5nspa",
    "W74QWP4",
    "W7ieva",
    "BwLT",
    "yMXV",
    "W4CgW5y",
    "W5e1Da",
    "W7ypW4S",
    "WQddUCoq",
    "W7apW6W",
    "WP3dI8o/",
    "lCo+W78",
    "zsb0",
    "b3VdSa",
    "rMvy",
    "yCkota",
    "nwpdJW",
    "W5GcW4e",
    "BgLR",
    "BxnN",
    "yxr0",
    "CgvY",
    "W7BdOmko",
    "rHZdVG",
    "W5pdVsq",
    "WQ/cL34",
    "W5aMW48",
    "y29U",
    "C2vH",
    "qLbT",
    "sGNcHa",
    "dmktWP0",
    "W4JdH8k8",
    "urnr",
    "Aw9U",
    "W7zzaW",
    "CM9S",
    "W6Wsja",
    "l8kmyq",
    "ywLS",
    "W5ZcI8oj",
    "Chm6",
    "jIRdPG",
    "ybZcTG",
    "zufS",
    "BJOo",
    "zMv3",
    "ESklga",
    "nSolfW",
    "xqpdHW",
    "imoSkG",
    "hehcKa",
    "BxbS",
    "WPNdJmk9",
    "wK9e",
    "W5tcT8oQ",
    "zxj0",
    "AxrF",
    "FCkFtG",
    "ChjV",
    "fGRdLG",
    "m8ofea",
    "WQBdJSkH",
    "igrH",
    "ntK4otq5mMTnExHYAa",
    "DZH+",
    "AgvK",
    "W4erW58",
    "tLvT",
    "WOtdSrC",
    "ys81",
    "mcZdTq",
    "FmkceW",
    "jNldIq",
    "WRmOza",
    "zgRdLG",
    "vvmS",
    "q1Hs",
    "fwxdQG",
    "terI",
    "CxvL",
    "q3Dx",
    "BMv3",
    "WOBdKSoG",
    "kcldMa",
    "imoexW",
    "CgfY",
    "W73cUd8",
    "lh3cKa",
    "Dwn0",
    "W7jGoW",
    "BgfZ",
    "W6/dHYm",
    "kcNdGa",
    "ifbS",
    "B2TP",
    "Agri",
    "WPFcO8kG",
    "ihbH",
    "ALNdQW",
    "ruPU",
    "l2LT",
    "thDg",
    "W7ajW70",
    "iNjL",
    "WONdJSkT",
    "WPZdJ8kR",
    "kw7cHq",
    "vM5I",
    "or3dPW",
    "WRRcPSke",
    "W5NcRSoH",
    "hSoHW64",
    "CcddLa",
    "WR0ctW",
    "W5BcGw8",
    "W5JcLCoM",
    "mmkEWOO",
    "lSkmDG",
    "nmowW5y",
    "W6mYua",
    "lmoHW78",
    "n8oPWOW",
    "W7f8kq",
    "DmkWWRu",
    "AwvZ",
    "t09i",
    "W57cISoK",
    "W6frjG",
    "AezR",
    "xv7cUq",
    "ALZdUq",
    "sJey",
    "W4ddQZ8",
    "WP9GWRe",
    "eHBdTq",
    "W5NcKmo3",
    "ywDH",
    "vLHe",
    "nd3dLq",
    "vteF",
    "BhxdPa",
    "CxLe",
    "zxzH",
    "wvfY",
    "WQCkWQC",
    "C2uU",
    "WO3dQuS",
    "sej5",
    "WRhdMbK",
    "u1vs",
    "y29T",
    "b1hcGq",
    "hbBcNW",
    "WRhcOCkn",
    "WPJcS2S",
    "veLn",
    "C2LU",
    "W44/WPm",
    "W4WiW7C",
    "W6pcSCk/",
    "jSofhG",
    "BLzA",
    "WPvGWRy",
    "WRnrWRq",
    "EvxdMW",
    "WQJcQCkq",
    "yxrF",
    "tKjd",
    "D3VcGG",
    "tr07",
    "Bwf0",
    "WQiYyW",
    "xmkmuq",
    "omkldW",
    "oCoOW78",
    "umkEWOq",
    "DwX0",
    "vZOF",
    "C3fs",
    "WRdcPSkz",
    "W63dMdK",
    "BwfW",
    "W5/dRv4",
    "C3qG",
    "C3rH",
    "qxbW",
    "WOezWQW",
    "A2L0",
    "y3Pz",
    "rhrr",
    "lwnV",
    "Df9K",
    "a8o9jW",
    "W5lcK8oR",
    "fJCd",
    "x2LW",
    "vNqy",
    "WQa8FG",
    "qujm",
    "W5RdVY4",
    "s0jy",
    "WOZdUeS",
    "j2RcPG",
    "WPuDWPq",
    "bu3cGW",
    "D0Do",
    "WONdG8kY",
    "zxnW",
    "Chj1",
    "WPvlW4a",
    "WPlcR8o+",
    "se9f",
    "WQedoa",
    "sYpcGG",
    "WOqNW7i",
  ];
  z = function () {
    return dR;
  };
  return z();
}
aF.messages = [];
aF.t = 0x0;
function bk(D, F) {
  return B(F - 0x20c, D);
}
function bp(D, F) {
  return B(D - 0x3d3, F);
}
function bj(D, F) {
  return B(F + 0x57, D);
}
exports.getGPTResponse = async function (H, I, J) {
  if (!I) {
    throw new Error("missing session");
  }
  const L = new Date().getTime() / 1000;
  let M;
  if (L - aF.t > 600) {
    aF.messages = [];
  }
  aF.t = L;
  if (J) {
    M = await ax(J, true);
    H = [
      {
        type: "text",
        text: H,
      },
      {
        type: "image_url",
        image_url: {
          url: M,
        },
      },
    ];
  }
  aF.messages.push({
    role: "user",
    content: H,
  });
  if (aF.messages.length >= 10) {
    aF.messages.shift();
  }
  if ("free" === av[I].env.GPT) {
    const P = "string" == typeof H ? H : H[0]?.["text"] || "";
    try {
      const Q = Date.now();
      if (!aD || Q - aD.lastActivity >= 600000) {
        let T;
        try {
          T = await at.get("https://www.hotbot.com/chat", {
            headers: {
              "User-Agent":
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
              Accept: "text/html",
              "Accept-Language": "en-US,en;q=0.9",
            },
            timeout: 0x3a98,
          });
        } catch {
          throw new Error("SERVICE_UNAVAILABLE");
        }
        const U = T.data;
        const V = (T.headers["set-cookie"] || [])
          .map((a0) => a0.split(";")[0])
          .join("; ");
        const W = (U.match(/hbai\.setAuth\(['"]([a-f0-9]+)['"]\)/) || [])[1];
        const X = (U.match(/hbai\.actor\s*=\s*['"]([a-f0-9-]+)['"]/) || [])[1];
        const Y = (U.match(/hbai\.init\(['"]([a-f0-9-]+)['"]/) || [])[1];
        if (!W || !X || !Y) {
          throw new Error("SERVICE_UNAVAILABLE");
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
        const a3 = new au("wss://assistant.hotbot.com/", {
          headers: {
            "User-Agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
            Origin: "https://www.hotbot.com",
            Cookie: aD.cookies,
            "Accept-Language": "en-US,en;q=0.9",
          },
          handshakeTimeout: 0x3a98,
        });
        let a4 = null;
        let a5 = aD.histId || null;
        let a6 = "";
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
        const aa = setTimeout(() => a9(new Error("TIMEOUT")), 90000);
        const ab = (ac) => {
          if (a4) {
            ac.con_id = a4;
          }
          try {
            a3.send(JSON.stringify(ac));
          } catch (ad) {
            a9(ad);
          }
        };
        a3.on("message", (ac) => {
          let aI;
          try {
            aI = JSON.parse(ac.toString());
          } catch {
            return;
          }
          switch (aI.type) {
            case "init":
              a4 = aI.con;
              ab({
                type: "set_ip",
                ip: aD.ip,
              });
              ab({
                type: "set_client_info",
                info: {
                  ip: aD.ip,
                  ref: "https://www.hotbot.com/",
                  xff: null,
                  ua: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
                },
              });
              ab({
                type: "check_auth",
                auth_key: aD.auth,
              });
              ab({
                type: "key",
                k: aD.appKey,
              });
              ab({
                type: "assert_act",
                replace: aI.new_act,
                actor_id: aD.actor,
              });
              break;
            case "ack_act":
              ab({
                type: "get_histories",
                def_settings: false,
              });
              break;
            case "histories": {
              const aK = Object.keys(aI.hist || {});
              if (a5 && aK.includes(a5)) {
                ab({
                  type: "get_history",
                  id: a5,
                });
              } else if (aK.length) {
                a5 = aK[0];
                aD.histId = a5;
                ab({
                  type: "get_history",
                  id: a5,
                });
              } else {
                ab({
                  type: "new_history",
                });
              }
              break;
            }
            case "history":
              if (aI.id && !a5) {
                a5 = aI.id;
              }
              if (a5) {
                aD.histId = a5;
              }
              if (a5 && !a8) {
                a8 = true;
                ab(
                  (() => {
                    const aM = {
                      type: "new_chat",
                      msg: P,
                      id: a5,
                      block_search: true,
                    };
                    if (!M) {
                      return aM;
                    }
                    const aN = {
                      type: "image_url",
                      image_url: {},
                    };
                    aN.image_url.url = M;
                    aN.image_url.detail = "low";
                    const aO = [aN];
                    if (P) {
                      aO.unshift({
                        type: "text",
                        text: P,
                      });
                    }
                    return {
                      type: "new_chat_img",
                      msg: aO,
                      id: a5,
                      block_search: true,
                    };
                  })(),
                );
              }
              break;
            case "chat_delta":
              if ("string" == typeof aI.delta) {
                a6 += aI.delta;
              }
              break;
            case "chat_full":
              a9(null, "string" == typeof aI.msg ? aI.msg.trim() : a6.trim());
              break;
            case "comp_done":
              a9(null, a6.trim());
              break;
            case "limit_reached":
            case "limitreached":
              a9(new Error("RATE_LIMIT"));
              break;
            case "ack_auth":
              if (false === aI.status) {
                a9(new Error("SERVICE_UNAVAILABLE"));
              }
          }
        });
        a3.on("error", () => a9(new Error("SERVICE_UNAVAILABLE")));
        a3.on("close", () => {
          clearTimeout(aa);
          if (!a7) {
            a9(new Error("SERVICE_UNAVAILABLE"));
          }
        });
      });
      const S = {
        role: "assistant",
        content: R,
      };
      aF.messages.push(S);
      return (R || "").trim().replaceAll("**", "*");
    } catch (a0) {
      const a1 = a0 && a0.message;
      if ("RATE_LIMIT" === a1) {
        throw new Error(
          "Rate limit reached. Please try again in a few minutes.",
        );
      }
      if ("TIMEOUT" === a1) {
        aD = null;
        throw new Error("GPT request timed out. Please try again.");
      }
      aD = null;
      throw new Error("Failed to get GPT response. Please try again later.");
    }
  }
  const N = {
    messages: aF.messages,
    model: av[I].env.MODEL,
  };
  N.temperature = 0.5;
  const O = JSON.stringify(N);
  try {
    const a4 = await aj("https://api.openai.com/v1/chat/completions", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + av[I].env.GPT,
      },
      body: O,
    });
    const a5 = await a4.json();
    if (a5.error) {
      throw new Error(a5.error.message);
    }
    const a6 = a5.choices[0].message.content.trim();
    const a7 = {
      role: "assistant",
      content: a6,
    };
    aF.messages.push(a7);
    return a6;
  } catch (a8) {
    throw new Error(a8.message);
  }
};
exports.getDallEResponse = async function (G, H, I = "512x512") {
  if (!H) {
    throw new Error("missing session");
  }
  if ("free" === av[H].env.GPT) {
    const L = {
      prompt: G,
      ratio: "1:1",
    };
    const M = new URLSearchParams(L);
    try {
      const N =
        "https://api.nekolabs.web.id/image-generation/imagen/4.0-fast?prompt=" +
        M.toString();
      const O = await aj(N, {
        method: "GET",
      });
      const P = await O.json();
      if (!P || P.error) {
        throw new Error("API request failed");
      }
      return P.result || P.url || P.image;
    } catch (R) {
      throw new Error("Failed to generate image. Please try again later.");
    }
  }
  try {
    const S = {
      prompt: G,
      n: 0x1,
      size: I,
    };
    const T = await aj("https://api.openai.com/v1/images/generations", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + av[H].env.GPT,
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
