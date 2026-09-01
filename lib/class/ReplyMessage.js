(function (l, n) {
  const o = l();
  while (true) {
    try {
      const p =
        (-parseInt(j(704, "A)TG")) / 1) * (parseInt(k(427, 0x4f1)) / 2) +
        (-parseInt(j(706, "eU85")) / 3) * (parseInt(k(491, 0x4ce)) / 4) +
        (parseInt(k(655, -0x56)) / 5) * (parseInt(j(381, "2O2a")) / 6) +
        (-parseInt(k(667, 0x619)) / 7) * (-parseInt(j(720, "kx1X")) / 8) +
        parseInt(k(393, 0x448)) / 9 +
        (parseInt(j(699, "UrlU")) / 10) * (-parseInt(k(502, -0xaa)) / 11) +
        -parseInt(k(608, 0x3c8)) / 12;
      if (p === n) {
        break;
      } else {
        o.push(o.shift());
      }
    } catch (q) {
      o.push(o.shift());
    }
  }
})(g, 635702);
const U = (function () {
  let p = true;
  return function (q, r) {
    const w = p
      ? function () {
          if (r) {
            const y = r.apply(q, arguments);
            r = null;
            return y;
          }
        }
      : function () {};
    p = false;
    return w;
  };
})();
function bH(l, n) {
  return j(l + 0x324, n);
}
const V = U(this, function () {
  return V.toString()
    .search("(((.+)+)+)+$")
    .toString()
    .constructor(V)
    .search("(((.+)+)+)+$");
});
function bV(l, n) {
  return j(n - 0x104, l);
}
V();
const W = (function () {
  let n = true;
  return function (o, p) {
    const r = n
      ? function () {
          if (p) {
            const v = p.apply(o, arguments);
            p = null;
            return v;
          }
        }
      : function () {};
    n = false;
    return r;
  };
})();
const X = W(this, function () {
  let n;
  try {
    const r = Function('return (function() {}.constructor("return this")( ));');
    n = r();
  } catch (u) {
    n = window;
  }
  const o = (n.console = n.console || {});
  const p = ["log", "warn", "info", "error", "exception", "table", "trace"];
  for (let w = 0; w < p.length; w++) {
    const x = W.constructor.prototype.bind(W);
    const y = p[w];
    const z = o[y] || x;
    x.__proto__ = W.bind(W);
    x.toString = z.toString.bind(z);
    o[y] = x;
  }
});
function bD(l, n) {
  return k(l + 0x353, n);
}
X();
function bA(l, n) {
  return k(n - 0x11e, l);
}
function j(a, b) {
  const c = g();
  j = function (d, e) {
    d = d - 297;
    let f = c[d];
    if (j.ggllVS === undefined) {
      var h = function (n) {
        let p = "";
        let q = "";
        let r = p + h;
        let s = 0;
        let t;
        let u;
        for (
          let v = 0;
          (u = n.charAt(v++));
          ~u && ((t = s % 4 ? t * 64 + u : u), s++ % 4)
            ? (p +=
                r.charCodeAt(v + 10) - 10 !== 0
                  ? String.fromCharCode(255 & (t >> ((-2 * s) & 6)))
                  : s)
            : 0
        ) {
          u =
            "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(
              u,
            );
        }
        let w = 0;
        for (let x = p.length; w < x; w++) {
          q += "%" + ("00" + p.charCodeAt(w).toString(16)).slice(-2);
        }
        return decodeURIComponent(q);
      };
      const m = function (n, o) {
        let p = [];
        let q = 0;
        let r;
        let t = "";
        n = h(n);
        let u;
        for (u = 0; u < 256; u++) {
          p[u] = u;
        }
        for (u = 0; u < 256; u++) {
          q = (q + p[u] + o.charCodeAt(u % o.length)) % 256;
          r = p[u];
          p[u] = p[q];
          p[q] = r;
        }
        u = 0;
        q = 0;
        for (let v = 0; v < n.length; v++) {
          u = (u + 1) % 256;
          q = (q + p[u]) % 256;
          r = p[u];
          p[u] = p[q];
          p[q] = r;
          t += String.fromCharCode(n.charCodeAt(v) ^ p[(p[u] + p[q]) % 256]);
        }
        return t;
      };
      j.VQvKrA = m;
      a = arguments;
      j.ggllVS = true;
    }
    const i = c[0];
    const k = d + i;
    const l = a[k];
    if (!l) {
      if (j.AEYSby === undefined) {
        const n = function (o) {
          this.JZHCTi = o;
          this.BjLeuP = [1, 0, 0];
          this.dXHOGy = function () {
            return "newState";
          };
          this.hRADwW = "\\w+ *\\(\\) *{\\w+ *";
          this.NUkWLl = "['|\"].+['|\"];? *}";
        };
        n.prototype.EdTXeK = function () {
          const o = new RegExp(this.hRADwW + this.NUkWLl);
          const p = o.test(this.dXHOGy.toString())
            ? --this.BjLeuP[1]
            : --this.BjLeuP[0];
          return this.JdRMFN(p);
        };
        n.prototype.JdRMFN = function (o) {
          if (!Boolean(~o)) {
            return o;
          }
          return this.wzvgZo(this.JZHCTi);
        };
        n.prototype.wzvgZo = function (o) {
          let p = 0;
          for (let q = this.BjLeuP.length; p < q; p++) {
            this.BjLeuP.push(Math.round(Math.random()));
            q = this.BjLeuP.length;
          }
          return o(this.BjLeuP[0]);
        };
        new n(j).EdTXeK();
        j.AEYSby = true;
      }
      f = j.VQvKrA(f, e);
      a[k] = f;
    } else {
      f = l;
    }
    return f;
  };
  return j(a, b);
}
function bF(l, n) {
  return k(l + 0x248, n);
}
const { loadBaileys: Y } = require("../baileys");
function bC(l, n) {
  return k(l + 0xc2, n);
}
function bE(l, n) {
  return j(n - 0x1d3, l);
}
let Z;
function bG(l, n) {
  return k(l + 0xa3, n);
}
function k(a, b) {
  const c = g();
  k = function (d, e) {
    d = d - 297;
    let f = c[d];
    if (k.eMmJbD === undefined) {
      var h = function (m) {
        let o = "";
        let p = "";
        let q = o + h;
        let r = 0;
        let s;
        let t;
        for (
          let u = 0;
          (t = m.charAt(u++));
          ~t && ((s = r % 4 ? s * 64 + t : t), r++ % 4)
            ? (o +=
                q.charCodeAt(u + 10) - 10 !== 0
                  ? String.fromCharCode(255 & (s >> ((-2 * r) & 6)))
                  : r)
            : 0
        ) {
          t =
            "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(
              t,
            );
        }
        let v = 0;
        for (let w = o.length; v < w; v++) {
          p += "%" + ("00" + o.charCodeAt(v).toString(16)).slice(-2);
        }
        return decodeURIComponent(p);
      };
      k.jCBjhF = h;
      a = arguments;
      k.eMmJbD = true;
    }
    const i = c[0];
    const j = d + i;
    const l = a[j];
    if (!l) {
      const m = function (n) {
        this.ponLhc = n;
        this.FToDEP = [1, 0, 0];
        this.qpMxwx = function () {
          return "newState";
        };
        this.DhrOPL = "\\w+ *\\(\\) *{\\w+ *";
        this.AAuxBd = "['|\"].+['|\"];? *}";
      };
      m.prototype.SfiAFg = function () {
        const n = new RegExp(this.DhrOPL + this.AAuxBd);
        const o = n.test(this.qpMxwx.toString())
          ? --this.FToDEP[1]
          : --this.FToDEP[0];
        return this.WJrQGC(o);
      };
      m.prototype.WJrQGC = function (n) {
        if (!Boolean(~n)) {
          return n;
        }
        return this.wQEkzv(this.ponLhc);
      };
      m.prototype.wQEkzv = function (n) {
        let o = 0;
        for (let p = this.FToDEP.length; o < p; o++) {
          this.FToDEP.push(Math.round(Math.random()));
          p = this.FToDEP.length;
        }
        return n(this.FToDEP[0]);
      };
      new m(k).SfiAFg();
      f = k.jCBjhF(f);
      a[j] = f;
    } else {
      f = l;
    }
    return f;
  };
  return k(a, b);
}
const a0 = require("./Base");
const { createWriteStream: a1 } = require("fs-extra");
const { join: a2 } = require("path");
const { TEMP_DIR: a3 } = require("../constant");
function g() {
  const cv = [
    "WR/cOCoj",
    "DufM",
    "W6Sgoq",
    "WRlcQSom",
    "euddNW",
    "vCoWmW",
    "DMLK",
    "r1vb",
    "CMnO",
    "AKPH",
    "AgvP",
    "yJhdUq",
    "zK9x",
    "D2Pn",
    "W6JdPsK",
    "z2vn",
    "zMLS",
    "WRxcSmop",
    "DgnO",
    "W5qqW5i",
    "W6/dVI8",
    "mtG0otzbrfLgD2y",
    "ycpcGG",
    "WQRdRCou",
    "hCkPW79gcutdJt4T",
    "jHSa",
    "aqaL",
    "E8ogza",
    "WRhdL8o4",
    "e1/dGq",
    "WQlcLZm",
    "tCovCa",
    "mtfrDKDKsMy",
    "Axnb",
    "Dw1L",
    "W61iWRZcVCouBmokW4/cNSk/WPW3WOC",
    "ndK5BvbWvfD5",
    "tCkhWOC",
    "feBdNq",
    "q8k/W7u",
    "Dgv4",
    "W57dKHS",
    "WRJdJtm",
    "yM1I",
    "wmoKWRG",
    "yrlcLa",
    "EKnj",
    "WRPvxa",
    "WRBdK8oS",
    "Cgz4",
    "W7CtWQLRWOhdNmkGbSkTW5O",
    "DvbV",
    "z3rO",
    "imoLWPa",
    "zNrI",
    "mXia",
    "W4qlW50",
    "wmoLWPq",
    "WQHyAG",
    "twvZ",
    "W73dT8o3",
    "iSouWPK",
    "uCo4WRK",
    "xSk3W78",
    "WRZdGSoU",
    "W4G2W78",
    "W73dHZG",
    "BwLT",
    "Aw1H",
    "WRSRWRe",
    "WRZcGtu",
    "C2fN",
    "BMD0",
    "vmoFua",
    "wgnk",
    "WRXosW",
    "zNmT",
    "WRldMmog",
    "DKv1",
    "AmoPrW",
    "WPSJWQ8",
    "DgLV",
    "WR7dJ8kL",
    "Bg9N",
    "ESo/CW",
    "WRtdKd8",
    "DNLK",
    "eCk6W6qBn3qJyCo9W5/cHq",
    "WRFcP8oP",
    "W4VdJqS",
    "W6xdSCoW",
    "BmoYWOy",
    "DgvZ",
    "WQpcKtO",
    "Dg90",
    "WPBdGCo8",
    "W7/dPSks",
    "lxdcLG",
    "uZma",
    "BqhdUq",
    "W4JdJau",
    "EYpcMa",
    "o8oeWOm",
    "BIGP",
    "lI4V",
    "rg3cGW",
    "BLbI",
    "WRZcLmkd",
    "WRDiyq",
    "WRhdVmkt",
    "CMv0",
    "r8oXhW",
    "CgfY",
    "W7VdTCoK",
    "Eezn",
    "W6nSBW",
    "Amo9za",
    "e0JdLa",
    "D2LK",
    "W7j1Da",
    "kKxcJq",
    "pWSD",
    "s3LW",
    "D2fY",
    "mq0E",
    "WORcUH0",
    "xCkTW7u",
    "BgvU",
    "WPqMWQe",
    "W6tdSCoT",
    "WOdcUH0",
    "Dhbh",
    "C29S",
    "rmo8pa",
    "WQtcKmkD",
    "Burp",
    "FtxcNa",
    "sSkdWPm",
    "nda3odm0nez0tvLTrq",
    "WP7cRWK",
    "yu1L",
    "FYxcIa",
    "f1ZdGG",
    "yLzL",
    "t1fl",
    "WPdcTSky",
    "Dg9t",
    "q8oMiq",
    "rSk7W6a",
    "WOLUW4u",
    "EuPV",
    "WR/dKIy",
    "D0rn",
    "khZcHG",
    "m0VcPG",
    "WO/cQLa",
    "vCo0jG",
    "guRdIa",
    "hSkira",
    "WRbCDa",
    "kCoeWRm",
    "CLru",
    "qg8y",
    "FmkRzq",
    "zuXL",
    "A2v5",
    "m03cJa",
    "B19F",
    "C3rY",
    "wCosCG",
    "WQxcKSks",
    "Chr0",
    "DhH0",
    "zCoaWQm",
    "WOW3WQO",
    "zwru",
    "WPm3WQS",
    "WQ3dSHi",
    "WQtcVIm",
    "BNrn",
    "W7OzeW",
    "tfvL",
    "iSkzvq",
    "WOvoDG",
    "W7y/gG",
    "mtG1uuTTvwnY",
    "wCksWOG",
    "WQGFW7W",
    "W6SfmW",
    "AgLZ",
    "wCoyqW",
    "EHFdQW",
    "CqZdQW",
    "wg4E",
    "W7Kzfa",
    "WO88WP8",
    "Da3dUG",
    "ntm4ntHRDwzLAKK",
    "yxD6",
    "W51IeG",
    "W5fzma",
    "DxjU",
    "zSoKWPy",
    "B8oHWOa",
    "CM90",
    "W6mvDq",
    "yMLU",
    "ugnK",
    "W7ZdSCoW",
    "y2fW",
    "Aw9U",
    "W70tiq",
    "WPddUCks",
    "phRcJa",
    "WRhdNCoy",
    "WRPquq",
    "dCkBwW",
    "W5DzoG",
    "B3j0",
    "WRv7W7a",
    "W74elW",
    "WPZcNmkB",
    "WQGBW6y",
    "WOiUsG",
    "nXac",
    "vmozBa",
    "j8kGka",
    "WQNdHI8",
    "l0/cQG",
    "W5pdTXS9dCkLy8k2W5ddSmoZW4xdRq",
    "w2S7",
    "WQZdGSoQ",
    "W4TvjW",
    "FrldTa",
    "rHBcImo2ySoUW63cOmkc",
    "vCoMmW",
    "h8kIWPPVbhZdSda",
    "qMFcOG",
    "BWpcUW",
    "h1ZdLG",
    "zg9J",
    "gmkLuq",
    "g8kawa",
    "BerV",
    "WQznCG",
    "D1L3",
    "BhfO",
    "iNjL",
    "W6RdRCkm",
    "dSkiuW",
    "W61kWRdcT8k3lSkpW6pcUCkq",
    "WRtdPSke",
    "zxH0",
    "yxvK",
    "tSoWoW",
    "WRldP8kl",
    "WQFcMmkk",
    "x19W",
    "E30U",
    "W7TbBW",
    "iqmx",
    "W6Wxkq",
    "r8o0WRm",
    "uConWPi",
    "C2vH",
    "W61sbq",
    "WRxcQSof",
    "CSklyq",
    "W4VdRqm",
    "WRveEG",
    "WQ7dMNC",
    "cr0X",
    "FWRdUq",
    "W6ddVmoK",
    "zxjY",
    "W7pdSCk4",
    "W5BdMHC",
    "EhHS",
    "tsW6",
    "qMVcVa",
    "y29U",
    "WOmkW6u",
    "BdJcLq",
    "W5fWbG",
    "Dwn0",
    "C3bS",
    "yxbW",
    "DhLW",
    "u3jw",
    "x3bH",
    "s29b",
    "W4RdPWS",
    "C2vJ",
    "u3n3",
    "W7NdQSkR",
    "icHM",
    "ywDL",
    "Eg93",
    "tCkvWOe",
    "BMXV",
    "W4tdJmku",
    "D0H3",
    "t8o7WRi",
    "WQ3dKcm",
    "zMvY",
    "sgBcUW",
    "WQ89WQi",
    "o2RdLa",
    "WRdcPCog",
    "WPddP8k9",
    "Bgv5",
    "zxHJ",
    "rLPf",
    "DKldUq",
    "WQOaW5i",
    "vMLS",
    "Dw5J",
    "W6RdVCoT",
    "W63dOmo6",
    "WRdcNdS",
    "W4zPbq",
    "vN7cQG",
    "pMxcKG",
    "v09X",
    "WQylW6a",
    "Awfn",
    "WO3dH2K",
    "CCoSdW",
    "W54yW5e",
    "C3rP",
    "q8oHkW",
    "BxnN",
    "WR/dHSo8",
    "WO3cRSkf",
    "s8ovEG",
    "WQldM0K",
    "hWGV",
    "WQTqW7O",
    "bIxdQW",
    "qwDN",
    "t8ockW",
    "y3zk",
    "sSkuWOK",
    "AgHN",
    "W55lBW",
    "zwfT",
    "WQdcHCoL",
    "W6tdG8olWOXQW7XeW7hdQ8kRW7m",
    "WOFcT1m",
    "vg9Q",
    "BCovzW",
    "DhjP",
    "xSo7WP4",
    "WRRdLZ8",
    "tgeq",
    "WQfRzG",
    "WORcTMC",
    "zmo1ea",
    "xCk3W78",
    "mti4mJCZngDws1zKtG",
    "W5nJha",
    "tCodza",
    "WQBcP8o3",
    "lI9c",
    "kcGO",
    "W7pdQ8kY",
    "BwvZ",
    "Exrb",
    "WQ/cVSk9",
    "ALjb",
    "BcBcSM/cS2C4kq",
    "WPBcVui",
    "x8kbWOu",
    "EhBcGW",
    "W50EW5e",
    "WQddHSoY",
    "FCoLWQe",
    "WONcS8kt",
    "WRdcQSoB",
    "b0xdGa",
    "DhjH",
    "WO/cVb8",
    "WOlcGaq",
    "ExbL",
    "qmo8pa",
    "W5XGDW",
    "sCkhWPi",
    "bKRdIq",
    "iCovWRK",
    "WQtdHSoU",
    "WRm9WRK",
    "wLv6",
    "DeLL",
    "ntm2qwvWsvbL",
    "zxr5",
    "WRRcGSkD",
    "W5xdRte",
    "B25K",
    "W6ZcM29UWQNcMYdcT8ozWQ4ZhY4",
    "jvhcIG",
    "zmkiBq",
    "zSomdW",
    "WQrvzW",
    "zmo5WPu",
    "lCohWRa",
    "Fa3dUG",
    "WRtdJbO",
    "CgrM",
    "FCoUEq",
    "iIKO",
    "WQFdP8kp",
    "Amo5WPC",
    "zg93",
    "sCoEzq",
    "WQlcTXu",
    "EhHv",
    "Cgf0",
    "xhRcVq",
    "zxnZ",
    "W7hdRY4",
    "q0Hy",
    "ueHL",
    "Dg5j",
    "y2TL",
    "lISP",
    "tCksWOe",
    "ywrb",
    "WORcTam",
    "zwrP",
    "WRejW6m",
    "W7ykaq",
    "wmk7W7S",
    "WOdcPK0",
    "yXpdMW",
    "WRjcW78",
    "WRHRBq",
  ];
  g = function () {
    return cv;
  };
  return g();
}
function bB(l, n) {
  return j(n + 0x112, l);
}
class a4 extends a0 {
  constructor(l, n) {
    super(l);
    if (n) {
      this._patch(n);
    }
  }
  ["_patch"](u) {
    this.key = u.key;
    this.id = u.key.id;
    this.jid = u.participant;
    this.msg = u.message[u.type];
    switch (u.type) {
      case "imageMessage":
        const w = {
          key: u.key,
          message: u.message,
        };
        this.message = w;
        this.text = null !== this.msg.caption ? this.msg.caption : "";
        this.mimetype = this.msg.mimetype;
        this.height = this.msg.height;
        this.width = this.msg.width;
        this.image = true;
        break;
      case "videoMessage":
        const x = {
          key: u.key,
          message: u.message,
        };
        this.message = x;
        this.text = null !== this.msg.caption ? this.msg.caption : "";
        this.mimetype = this.msg.mimetype;
        this.height = this.msg.height;
        this.width = this.msg.width;
        this.seconds = this.msg.seconds;
        this.length = this.msg.fileLength
          ? isNaN(this.msg.fileLength)
            ? this.msg.fileLength.low / 1000000
            : this.msg.fileLength
          : 0;
        this.video = true;
        this.ptt = true;
        break;
      case "stickerMessage":
        const y = {
          key: u.key,
          message: u.message,
        };
        this.message = y;
        this.animated = this.msg.isAnimated;
        this.mimetype = this.msg.mimetype;
        this.sticker = true;
        break;
      case "audioMessage":
        const z = {
          key: u.key,
          message: u.message,
        };
        this.message = z;
        this.mimetype = this.msg.mimetype;
        this.seconds = this.msg.seconds;
        this.ptt = this.msg.ptt;
        this.audio = true;
        break;
      case "documentMessage":
        const A = {
          key: u.key,
          message: u.message,
        };
        this.message = A;
        this.mimetype = this.msg.mimetype;
        this.image =
          /image/.test(this.msg.mimetype) &&
          !/image\/gif/.test(this.msg.mimetype);
        this.video =
          /video/.test(this.msg.mimetype) ||
          /image\/gif/.test(this.msg.mimetype);
        this.audio = /audio/.test(this.msg.mimetype);
        this.pdf = /application\/pdf/.test(this.msg.mimetype);
        break;
      case "conversation":
      case "extendedTextMessage":
        const B = {
          key: u.key,
          message: u.message,
        };
        this.message = B;
        this.text = u.text ? u.text : "";
        this.txt = true;
        break;
      default:
        this.text = u.text || "";
        this.message = {
          key: u.key,
          message: u.message,
        };
    }
    delete this.msg;
    this.type = u.type;
    return super._patch(u);
  }
  async ["downloadMediaMessage"]() {
    if (!Z) {
      Z = (await Y()).downloadMediaMessage;
    }
    return await Z(this.message, "buffer");
  }
  async ["downloadAndSaveMediaMessage"](l) {
    const o = {
      sEGKQ: function (q, r) {
        return q !== r;
      },
      GUAkZ: "tpGhE",
      jJaJv: "ftbAl",
      xIZdP: function (q, r) {
        return q(r);
      },
      SrViD: "woTVH",
      LUewc: "finish",
      lUZOI: "error",
      uAfWK: function (q) {
        return q();
      },
      wjMIb: function (q, r, u) {
        return q(r, u);
      },
      vzVtx: "stream",
      nPbYu: function (q, r) {
        return q !== r;
      },
      bmbox: "wzzbr",
    };
    try {
      if (!Z) {
        Z = (await o.uAfWK(Y)).downloadMediaMessage;
      }
      const q = await o.wjMIb(Z, this.message, o.vzVtx);
      const r = this.mimetype?.["split"](";")[0]["split"]("/")[1];
      const u = o.wjMIb(a2, a3, l + "." + r);
      const v = o.xIZdP(a1, u);
      return new Promise((w, x) => {
        if (o.sEGKQ(o.SrViD, o.SrViD)) {
          const z = w.constructor.prototype.bind(x);
          const A = y[z];
          const B = A[A] || z;
          z.__proto__ = B.bind(C);
          z.toString = B.toString.bind(B);
          D[A] = z;
        } else {
          q.pipe(v);
          v.on(o.LUewc, () => w(u));
          v.on(o.lUZOI, (z) => {
            if (o.sEGKQ(o.GUAkZ, o.jJaJv)) {
              o.xIZdP(x, z);
            } else {
              const B = v.apply(q, arguments);
              r = null;
              return B;
            }
          });
        }
      });
    } catch (w) {
      if (o.nPbYu(o.bmbox, o.bmbox)) {
        o = p;
      } else {
        throw w;
      }
    }
  }
}
function bK(l, n) {
  return j(n - 0x384, l);
}
module.exports = a4;
