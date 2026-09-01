(function (a7, a8) {
  const a9 = a7();
  while (true) {
    try {
      const aa =
        (parseInt(a5(336, "5$86")) / 1) * (-parseInt(a6(508, -0x6)) / 2) +
        parseInt(a6(334, 0x410)) / 3 +
        parseInt(a6(668, 0xb1)) / 4 +
        parseInt(a6(647, 0xc0)) / 5 +
        (parseInt(a5(468, "bzj5")) / 6) * (parseInt(a6(326, 0x38e)) / 7) +
        parseInt(a6(623, 0x167)) / 8 +
        (-parseInt(a5(307, "^SY3")) / 9) * (parseInt(a5(629, "UpxK")) / 10);
      if (aa === a8) {
        break;
      } else {
        a9.push(a9.shift());
      }
    } catch (ab) {
      a9.push(a9.shift());
    }
  }
})(a4, 930426);
function hF(a7, a8) {
  return a5(a8 - 0xc7, a7);
}
const eV = (function () {
  let a8 = true;
  return function (a9, aa) {
    const ac = a8
      ? function () {
          if (aa) {
            const af = aa.apply(a9, arguments);
            aa = null;
            return af;
          }
        }
      : function () {};
    a8 = false;
    return ac;
  };
})();
const eW = eV(this, function () {
  return eW
    .toString()
    .search("(((.+)+)+)+$")
    .toString()
    .constructor(eW)
    .search("(((.+)+)+)+$");
});
function hx(a7, a8) {
  return a6(a7 - 0x189, a8);
}
function a6(a, b) {
  const c = a4();
  a6 = function (d, e) {
    d = d - 287;
    let f = c[d];
    if (a6.cUUAZZ === undefined) {
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
      a6.VakxXJ = g;
      a = arguments;
      a6.cUUAZZ = true;
    }
    const h = c[0];
    const i = d + h;
    const j = a[i];
    if (!j) {
      const k = function (l) {
        this.esBSCM = l;
        this.zZEnpc = [1, 0, 0];
        this.VRuLRE = function () {
          return "newState";
        };
        this.QQQdEW = "\\w+ *\\(\\) *{\\w+ *";
        this.btqTGH = "['|\"].+['|\"];? *}";
      };
      k.prototype.KQJZWM = function () {
        const l = new RegExp(this.QQQdEW + this.btqTGH);
        const m = l.test(this.VRuLRE.toString())
          ? --this.zZEnpc[1]
          : --this.zZEnpc[0];
        return this.TUXNNa(m);
      };
      k.prototype.TUXNNa = function (l) {
        if (!Boolean(~l)) {
          return l;
        }
        return this.gZhuNj(this.esBSCM);
      };
      k.prototype.gZhuNj = function (l) {
        let m = 0;
        for (let n = this.zZEnpc.length; m < n; m++) {
          this.zZEnpc.push(Math.round(Math.random()));
          n = this.zZEnpc.length;
        }
        return l(this.zZEnpc[0]);
      };
      new k(a6).KQJZWM();
      f = a6.VakxXJ(f);
      a[i] = f;
    } else {
      f = j;
    }
    return f;
  };
  return a6(a, b);
}
function hE(a7, a8) {
  return a5(a8 + 0x2de, a7);
}
function hD(a7, a8) {
  return a6(a7 + 0xcf, a8);
}
eW();
const eX = (function () {
  const a8 = {
    uZvmT: function (ab, ac) {
      return ab === ac;
    },
  };
  a8.mMBCJ = "iYLpV";
  a8.glogY = "VdYzr";
  let aa = true;
  return function (ab, ac) {
    const ad = aa
      ? function () {
          if (ac) {
            if (a8.mMBCJ === a8.glogY) {
              const ag = ad
                ? function () {
                    if (ag) {
                      const as = ao.apply(ap, arguments);
                      aq = null;
                      return as;
                    }
                  }
                : function () {};
              aj = false;
              return ag;
            } else {
              const ag = ac.apply(ab, arguments);
              ac = null;
              return ag;
            }
          }
        }
      : function () {};
    aa = false;
    return ad;
  };
})();
function hC(a7, a8) {
  return a5(a8 - 0x1ea, a7);
}
const eY = eX(this, function () {
  const a8 = function () {
    let ac;
    try {
      ac = Function('return (function() {}.constructor("return this")( ));')();
    } catch (ad) {
      ac = window;
    }
    return ac;
  };
  const a9 = a8();
  const aa = (a9.console = a9.console || {});
  const ab = ["log", "warn", "info", "error", "exception", "table", "trace"];
  for (let ac = 0; ac < ab.length; ac++) {
    const ad = eX.constructor.prototype.bind(eX);
    const af = ab[ac];
    const ag = aa[af] || ad;
    ad.__proto__ = eX.bind(eX);
    ad.toString = ag.toString.bind(ag);
    aa[af] = ad;
  }
});
function a4() {
  const hH = [
    "B3DL",
    "WQlcUeK",
    "y8o5WRa",
    "gSorW7H1W7dcPdvnBSoT",
    "zw5H",
    "W4FcM2C",
    "C8oUWQe",
    "icqn",
    "WR5+yG",
    "u3bH",
    "W4lcJbu",
    "W4PHkG",
    "j8kAECoOfCoxguqoW7GLpMi",
    "ymkBW4a",
    "bCk1aG",
    "WPK1xa",
    "WPVcUmkD",
    "z2v0",
    "rMfR",
    "uCkrdq",
    "ug1n",
    "Dgf0",
    "BgXL",
    "W5BcNrm",
    "DGz6",
    "kMOn",
    "vM11",
    "z8ogpa",
    "WO0HeW",
    "WPWIW58",
    "qmkpWQa",
    "WPP6WPK",
    "zxpdQq",
    "W4BcGSod",
    "bmotnq",
    "kmkJW7O",
    "Dwn0",
    "rgf0",
    "nsOm",
    "W5ZcLtuRpfqFcwu",
    "W5e6la",
    "W7lcHSok",
    "xmkZeG",
    "jgqI",
    "CMvZ",
    "AgLZ",
    "lgGP",
    "C3nH",
    "W7hdUHG",
    "keqp",
    "W5eyna",
    "W4tdLK8",
    "iNjL",
    "WQDtzW",
    "W4FdTCoc",
    "BgvU",
    "WPdcQmo3",
    "WOyeW4S",
    "zCkLjq",
    "lfT9",
    "WRFcKmkR",
    "quHm",
    "v29Y",
    "WR5gWQy",
    "jmohgq",
    "zxnZ",
    "DMrT",
    "zgv0",
    "sgXW",
    "WOaGxa",
    "cCk+ga",
    "WPb9eq",
    "v8kKea",
    "e8oUWR8",
    "WO9sFq",
    "BIGP",
    "W4ddRSoJ",
    "W5aNuSkkmJBcMvO0W57dTmkuWOa",
    "WO3cSCoL",
    "W6ddS8of",
    "WQtcKmkS",
    "y3rP",
    "WPmCnW",
    "vfng",
    "WQqrkW",
    "Dxbn",
    "ctSh",
    "iCoBpa",
    "W7pdUWG",
    "rNDK",
    "B3bL",
    "ySkpWOK",
    "dSkIyG",
    "B33dSW",
    "mmkYgq",
    "WOmLga",
    "DgvY",
    "CCoKWQe",
    "qNvK",
    "zhLl",
    "WOzlBIfYoSkqDey3",
    "Dg9Y",
    "rmoXW7e",
    "WPmcFq",
    "WR3cPCo3",
    "aSojWQK",
    "fMKF",
    "W43cV8oh",
    "vmkKca",
    "bSoyWOC",
    "db8i",
    "u2nO",
    "W4ldSqe",
    "W5pcRZi",
    "uSociW",
    "BvyZ",
    "kcGO",
    "nJC2nM1QuM5OvG",
    "v2fY",
    "hCoUcW",
    "smkRWQS",
    "icHM",
    "W6xcMxi",
    "DgfI",
    "f8kGWPG",
    "x8oIWQC",
    "xSoQWO0",
    "hSkYyG",
    "WPWMW4W",
    "lISP",
    "WQTeAG",
    "hN3cVW",
    "C0Xs",
    "DhjH",
    "wSkeW7W",
    "Dc90",
    "WPf3eq",
    "WOG5rG",
    "lI9H",
    "WOP7fG",
    "zw9l",
    "q0HJ",
    "aWy4",
    "mJu3mtKYngXgtMfZua",
    "WRTozW",
    "v1rv",
    "B8kyW4JcN8ocA8ogWO/cGJxcSYyAbq",
    "W5JcTa4",
    "wfrP",
    "WQ9mEq",
    "yxrL",
    "DvP2",
    "g8o0WR4",
    "vJvI",
    "WO9rAa",
    "zCkhW5O",
    "WQxcN8k9",
    "WQSIW4W",
    "rgHO",
    "DxbK",
    "W4Lmlq",
    "yMXL",
    "Dw50",
    "BSodWO4",
    "C2fN",
    "CCoxWRS",
    "jCoyWPe",
    "wmkoWOO",
    "DhjP",
    "l8k3uq",
    "amoRWR8",
    "WRFcMSkl",
    "mte0mtC0q2LeCwzd",
    "h8o0WPi",
    "s2v5",
    "WOPZeG",
    "BNrP",
    "ve1L",
    "DgLU",
    "EwfT",
    "C2v0",
    "cSkPaq",
    "lI9T",
    "zxzL",
    "y29U",
    "WRO5hq",
    "WRXzza",
    "zxjY",
    "BLrs",
    "nCkiWPK",
    "mSogWP0",
    "WO3cQ8oq",
    "WODxzW",
    "qw50",
    "W77cNhe",
    "imkHWOe",
    "WPHAha",
    "W5/dP8ok",
    "WO1Gtq",
    "Exvu",
    "CMv0",
    "ywDL",
    "W6iPdq",
    "W5FdSrG",
    "W4BcKCok",
    "z2LU",
    "WQBcM8kU",
    "WPdcL8oZ",
    "peX4",
    "oIW4",
    "WQpcPf4",
    "W5hdPbW",
    "E30U",
    "fwiT",
    "n2uO",
    "q3jL",
    "D2Hy",
    "W5dcRX8",
    "hSoTW4u",
    "AwX0",
    "Dg90",
    "WPlcLSkn",
    "yCosWPO",
    "lI9M",
    "yxbW",
    "q29K",
    "yw1b",
    "mSoNqG",
    "DxjU",
    "m8k3WOK",
    "cSkEWOi",
    "lI9S",
    "mteYmtG3odr5DKznsfe",
    "WOyTW4S",
    "WPZdPvy",
    "txv0",
    "iIKO",
    "W5JdRCov",
    "W4HQbeZdHq7cIatdMYG",
    "BK1L",
    "qw1L",
    "twvU",
    "Dxng",
    "lSktWOm",
    "WQTCFq",
    "zxb0",
    "W4xcKqG",
    "B3iO",
    "v8ooWRe",
    "WPjhWRe",
    "WORcOCo3",
    "CMnO",
    "we1L",
    "W6hcIMm",
    "C2vH",
    "iMm0",
    "ote3mta5mhH3teLZsa",
    "zwr1",
    "zgvS",
    "etGF",
    "FSkFW5K",
    "rgvS",
    "zhne",
    "WPTspa",
    "aCofWPy",
    "W44aDG",
    "C8kMW6a",
    "emoenG",
    "rMLS",
    "CmkBW5O",
    "vKHT",
    "WOCcFq",
    "z8kdWRC",
    "oxzI",
    "zxrL",
    "W5iunG",
    "B3zL",
    "ntqYmty2ohv3AK9qsW",
    "twvZ",
    "W7lcL8ow",
    "W5ldKWa",
    "uSoaWRG",
    "mgu0",
    "zdnH",
    "fIOk",
    "ywrK",
    "CMvL",
    "BwvU",
    "xCk3eW",
    "drqH",
    "qCo/WRO",
    "r0f1",
    "WRSaqW",
    "CLjK",
    "WQlcKCk8",
    "mmkPhW",
    "m8oXvW",
    "mSkoWOa",
    "WPeYaG",
    "Dg9t",
    "qwXS",
    "ouej",
    "zw50",
    "W4fSW5O",
    "W5VdSCov",
    "jmkKW70",
    "zwnH",
    "wSoGiKRdRMepEYykWQJcMq",
    "WPuboW",
    "W5xdOaK",
    "WQv1yq",
    "u3Lp",
    "gCk7W6G",
    "jmooWO4",
    "mmoQWPu",
    "gCopWPi",
    "yCoOWQe",
    "WPW5rG",
    "lCk0ga",
    "bmkiWOa",
    "A3zq",
    "W5NdMau",
    "lI9Z",
    "W53dRSoE",
    "Aw9U",
    "WOdcJCkB",
    "mtrKuKfhww8",
    "WONcPfK",
    "puCn",
    "BIb0",
    "W4yyla",
    "EhzK",
    "lI90",
    "Dhrd",
    "mZKXndyZnen1wvvqyG",
    "B8k7qG",
    "h8osW7CmW6FcOYreDW",
    "DhvY",
    "gLXW",
    "C3rY",
    "Awry",
    "D2fY",
    "yKPW",
    "hXbH",
    "DgLV",
    "C29S",
    "nL19",
    "AuDZ",
    "eCo4vG",
    "bWaB",
    "A3VdUa",
    "v8k4nW",
    "W7hcIZe",
    "Bgvn",
    "WQ0sFq",
    "cYqq",
    "x8kZcG",
    "sSkLfq",
    "EmomlW",
    "jCoXtW",
    "wmkhWRO",
    "vvzM",
    "gmk0yG",
    "W6pcJhy",
    "jCobuq",
    "lI9W",
    "BhvN",
    "WOyVW4W",
    "u1nb",
    "Dw5J",
    "b8opW6u",
    "WP3cSKW",
    "BSkTW4q",
    "yMLU",
    "nGyB",
    "Bg13",
    "nmkjWOq",
    "i8kFWOK",
    "jSoDAq",
    "z2XV",
    "ihuZ",
    "CSkqW5C",
    "wtjO",
    "vhj1",
    "zSogjq",
    "bmk3WOu",
    "Aw5M",
    "pmoFW5K",
    "z3n0",
    "WO1xFq",
    "uSk1cq",
  ];
  a4 = function () {
    return hH;
  };
  return a4();
}
eY();
function hA(a7, a8) {
  return a6(a7 - 0x341, a8);
}
function hy(a7, a8) {
  return a5(a7 - 0x13e, a8);
}
function hz(a7, a8) {
  return a6(a7 - 0x194, a8);
}
function a5(a, b) {
  const c = a4();
  a5 = function (d, e) {
    d = d - 287;
    let f = c[d];
    if (a5.FrgYuL === undefined) {
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
      a5.OcZnLq = k;
      a = arguments;
      a5.FrgYuL = true;
    }
    const h = c[0];
    const i = d + h;
    const j = a[i];
    if (!j) {
      if (a5.BNHzZt === undefined) {
        const l = function (m) {
          this.oGDUrA = m;
          this.DvSYfW = [1, 0, 0];
          this.lWAboV = function () {
            return "newState";
          };
          this.YNGusE = "\\w+ *\\(\\) *{\\w+ *";
          this.irBzyQ = "['|\"].+['|\"];? *}";
        };
        l.prototype.kKZIyL = function () {
          const m = new RegExp(this.YNGusE + this.irBzyQ);
          const n = m.test(this.lWAboV.toString())
            ? --this.DvSYfW[1]
            : --this.DvSYfW[0];
          return this.bnpWhQ(n);
        };
        l.prototype.bnpWhQ = function (m) {
          if (!Boolean(~m)) {
            return m;
          }
          return this.XnPlcY(this.oGDUrA);
        };
        l.prototype.XnPlcY = function (m) {
          let n = 0;
          for (let o = this.DvSYfW.length; n < o; n++) {
            this.DvSYfW.push(Math.round(Math.random()));
            o = this.DvSYfW.length;
          }
          return m(this.DvSYfW[0]);
        };
        new l(a5).kKZIyL();
        a5.BNHzZt = true;
      }
      f = a5.OcZnLq(f, e);
      a[i] = f;
    } else {
      f = j;
    }
    return f;
  };
  return a5(a, b);
}
function hG(a7, a8) {
  return a5(a7 + 0x2c7, a8);
}
function hB(a7, a8) {
  return a6(a8 - 0x0, a7);
}
const {
  getFake: eZ,
  setFake: f0,
  addCode: f1,
  removeCode: f2,
} = require("./fake");
const {
  getMention: f3,
  enableMention: f4,
  mentionMessage: f5,
  setPmMessage: f6,
  getPmMessage: f7,
} = require("./mention");
const { iChecker: f9 } = require("../test/test");
const fa = f9();
const fb =
  fa == "aWxvdmV5b3Vzb29vb29vbWF0Y2hidXRpZG9udGtub3d3aHlpbGlrZWxvdmV3YW50dQ==";
if (fb) {
  require("./team");
  const fc = require("./budget");
  const {
    getCreds: fd,
    setCreds: fe,
    setKeys: ff,
    restoreKeys: fg,
    deleteCreds: fh,
    deleteKeys: fi,
    getGAuth: fj,
    setGAuth: fk,
    deleteGAuth: fl,
    GAuthDB: fm,
    KeysDB: fn,
    CredsDB: fo,
  } = require("./session");
  const {
    getMessage: fp,
    deleteMessage: fq,
    setMessage: fr,
  } = require("./greetings");
  const { getPlugin: fs, setPlugin: ft, delPlugin: fu } = require("./plugins");
  const fv = require("./nr");
  exports.zushi = fv.zushi;
  exports.yami = fv.yami;
  exports.ope = fv.ope;
  exports.logia = fv.logia;
  const { setAmenu: fw, getAmenu: fx, delAmenu: fy } = require("./amenu");
  exports.setAmenu = fw;
  exports.getAmenu = fx;
  exports.delAmenu = fy;
  const {
    setAntiLink: fz,
    getAntiLink: fA,
    setAntiSpam: fB,
    getAntiSpam: fC,
    setAntiSpamLevel: fD,
    setAntiSpamAction: fE,
    getWord: fF,
    setWord: fG,
    setAllowedUrl: fH,
    addWord: fI,
    removeWord: fJ,
  } = require("./antilink");
  exports.setAntiLink = fz;
  exports.getAntiLink = fA;
  exports.setSpam = fB;
  exports.getSpam = fC;
  exports.setAntiSpamLevel = fD;
  exports.setAntiSpamAction = fE;
  exports.setWord = fG;
  exports.getWord = fF;
  exports.setAllowedUrl = fH;
  exports.addWord = fI;
  exports.removeWord = fJ;
  const {
    setLydia: fK,
    getTruecaller: fL,
    setTruecaller: fM,
    delTruecaller: fN,
  } = require("./lydia");
  exports.setLydia = fK;
  exports.getTruecaller = fL;
  exports.setTruecaller = fM;
  exports.delTruecaller = fN;
  const {
    getPdm: fO,
    setPdm: fP,
    getTMessage: fQ,
    setTMessage: fR,
    updateTMessage: fS,
    getDeletedMessage: fT,
    setGroupMention: fU,
    getGroupMention: fV,
  } = require("./pdm");
  const { getData: fW, setData: fX, delData: fY } = require("./data");
  const { getFilter: fZ, setFilter: g0, delFilter: g1 } = require("./filter");
  const { deleteWarn: g2, getWarnCount: g3, setWarn: g4 } = require("./warn");
  const {
    getMute: g5,
    setMute: g6,
    delScheduleMessage: g7,
    getScheduleMessage: g8,
    delMute: g9,
  } = require("./mute");
  exports.setTMessage = fR;
  exports.getTMessage = fQ;
  exports.updateTMessage = fS;
  if ("on" === process.env.XMESSAGE) {
    const {
      setXMessage: gf,
      getXMessage: gg,
      delXMessage: gh,
      initXTime: gi,
      getXTime: gj,
    } = require("./pdm");
    exports.setXMessage = gf;
    exports.getXMessage = gg;
    exports.delXMessage = gh;
    exports.initXTime = gi;
    exports.getXTime = gj;
  }
  exports.getDeletedMessage = fT;
  exports.getFilter = fZ;
  exports.setFilter = g0;
  exports.deleteFilter = g1;
  exports.deleteWarn = g2;
  exports.getMute = g5;
  exports.setMute = g6;
  exports.delMute = g9;
  exports.getWarnCount = g3;
  exports.setWarn = g4;
  exports.setPdm = fP;
  exports.getPdm = fO;
  exports.delScheduleMessage = g7;
  exports.getScheduleMessage = g8;
  exports.getCreds = fd;
  exports.getMention = f3;
  exports.setCreds = fe;
  exports.setKeys = ff;
  exports.restoreKeys = fg;
  exports.deleteCreds = fh;
  exports.deleteKeys = fi;
  exports.getGAuth = fj;
  exports.setGAuth = fk;
  exports.deleteGAuth = fl;
  exports.GAuthDB = fm;
  exports.KeysDB = fn;
  exports.CredsDB = fo;
  exports.enableMention = f4;
  exports.mentionMessage = f5;
  exports.deleteMessage = fq;
  exports.setMessage = fr;
  exports.getMessage = fp;
  exports.getFake = eZ;
  exports.setFake = f0;
  exports.addCode = f1;
  exports.removeCode = f2;
  exports.getPlugin = fs;
  exports.setPlugin = ft;
  exports.delPlugin = fu;
  exports.setBudget = fc.setBudget;
  exports.getBudget = fc.getBudget;
  exports.delBudget = fc.detBudget;
  exports.setPmMessage = f6;
  exports.getPmMessage = f7;
  exports.setGroupMention = fU;
  exports.getGroupMention = fV;
  const {
    setAntiGstatus: ga,
    getAntiGstatus: gb,
    addAntiGstatusFilter: gc,
    removeAntiGstatusFilter: gd,
  } = require("./antigstatus");
  exports.setAntiGstatus = ga;
  exports.getAntiGstatus = gb;
  exports.addAntiGstatusFilter = gc;
  exports.removeAntiGstatusFilter = gd;
  exports.getData = fW;
  exports.setData = fX;
  exports.delData = fY;
}
