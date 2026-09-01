function aY(j, k) {
  return h(k - 0xa, j);
}
function aZ(j, k) {
  return i(j - 0x281, k);
}
function aW(j, k) {
  return i(k - 0xb4, j);
}
(function (j, k) {
  const l = j();
  while (true) {
    try {
      const m =
        (parseInt(i(523, 0x211)) / 1) * (parseInt(h(549, "zqor")) / 2) +
        parseInt(h(520, "zqor")) / 3 +
        parseInt(h(499, "JpSS")) / 4 +
        -parseInt(i(505, 0x333)) / 5 +
        -parseInt(i(593, 0x62)) / 6 +
        parseInt(h(577, "7#uf")) / 7 +
        -parseInt(i(502, 0x1ab)) / 8;
      if (m === k) {
        break;
      } else {
        l.push(l.shift());
      }
    } catch (o) {
      l.push(l.shift());
    }
  }
})(g, 946085);
const G = (function () {
  let k = true;
  return function (l, m) {
    const p = k
      ? function () {
          if (m) {
            const u = m.apply(l, arguments);
            m = null;
            return u;
          }
        }
      : function () {};
    k = false;
    return p;
  };
})();
function aX(j, k) {
  return i(j + 0x245, k);
}
function b0(j, k) {
  return h(k - 0x306, j);
}
const H = G(this, function () {
  return H.toString()
    .search("(((.+)+)+)+$")
    .toString()
    .constructor(H)
    .search("(((.+)+)+)+$");
});
function i(a, b) {
  const c = g();
  i = function (d, e) {
    d = d - 429;
    let f = c[d];
    if (i.mnyKZR === undefined) {
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
      i.doBNzd = h;
      a = arguments;
      i.mnyKZR = true;
    }
    const j = c[0];
    const k = d + j;
    const l = a[k];
    if (!l) {
      const m = function (n) {
        this.ZmiezI = n;
        this.wScczz = [1, 0, 0];
        this.RhviYE = function () {
          return "newState";
        };
        this.hbNakk = "\\w+ *\\(\\) *{\\w+ *";
        this.FQiYAD = "['|\"].+['|\"];? *}";
      };
      m.prototype.xeqqll = function () {
        const n = new RegExp(this.hbNakk + this.FQiYAD);
        const o = n.test(this.RhviYE.toString())
          ? --this.wScczz[1]
          : --this.wScczz[0];
        return this.wntUKW(o);
      };
      m.prototype.wntUKW = function (n) {
        if (!Boolean(~n)) {
          return n;
        }
        return this.YTJAcM(this.ZmiezI);
      };
      m.prototype.YTJAcM = function (n) {
        let o = 0;
        for (let p = this.wScczz.length; o < p; o++) {
          this.wScczz.push(Math.round(Math.random()));
          p = this.wScczz.length;
        }
        return n(this.wScczz[0]);
      };
      new m(i).xeqqll();
      f = i.doBNzd(f);
      a[k] = f;
    } else {
      f = l;
    }
    return f;
  };
  return i(a, b);
}
function b1(j, k) {
  return i(k + 0x3b1, j);
}
function aT(j, k) {
  return h(k - 0x2c7, j);
}
H();
function h(a, b) {
  const c = g();
  h = function (d, e) {
    d = d - 429;
    let f = c[d];
    if (h.HOFYVA === undefined) {
      var i = function (n) {
        let p = "";
        let q = "";
        let r = p + i;
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
        n = i(n);
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
      h.vGxWwX = m;
      a = arguments;
      h.HOFYVA = true;
    }
    const j = c[0];
    const k = d + j;
    const l = a[k];
    if (!l) {
      if (h.JdrLQL === undefined) {
        const n = function (o) {
          this.yaVjrs = o;
          this.NSABTg = [1, 0, 0];
          this.hLLJcj = function () {
            return "newState";
          };
          this.HoZIgM = "\\w+ *\\(\\) *{\\w+ *";
          this.eLypxR = "['|\"].+['|\"];? *}";
        };
        n.prototype.UHUZxt = function () {
          const o = new RegExp(this.HoZIgM + this.eLypxR);
          const p = o.test(this.hLLJcj.toString())
            ? --this.NSABTg[1]
            : --this.NSABTg[0];
          return this.feELaU(p);
        };
        n.prototype.feELaU = function (o) {
          if (!Boolean(~o)) {
            return o;
          }
          return this.ymmjWC(this.yaVjrs);
        };
        n.prototype.ymmjWC = function (o) {
          let p = 0;
          for (let q = this.NSABTg.length; p < q; p++) {
            this.NSABTg.push(Math.round(Math.random()));
            q = this.NSABTg.length;
          }
          return o(this.NSABTg[0]);
        };
        new n(h).UHUZxt();
        h.JdrLQL = true;
      }
      f = h.vGxWwX(f, e);
      a[k] = f;
    } else {
      f = l;
    }
    return f;
  };
  return h(a, b);
}
function aU(j, k) {
  return h(j + 0x14, k);
}
function g() {
  const bG = [
    "EgfQ",
    "odKWmtC5mMLbDhPfwa",
    "y29T",
    "lCoFqq",
    "nJq4nZC3nvHAALnoBq",
    "W4BcHSkL",
    "bSkIWQe",
    "xmktW58",
    "W5VcRru",
    "W7pcRqq",
    "AxqD",
    "WRm6uG",
    "B3iO",
    "W7GQtCoFB2SSFh9/W5NcOYy",
    "fCkJnG",
    "CMnO",
    "iK1i",
    "e8kFWP4",
    "WPJcNmon",
    "WRVdNNJcKSoMW6iyWO1/mCk5pmk+",
    "s8k0W7O",
    "W5upoa",
    "mtKXndnZrevmsfO",
    "WR3dPSkS",
    "iIKO",
    "WQC+rG",
    "Dw5J",
    "D0n3",
    "FmoGWQ8",
    "W5PqaG",
    "icHM",
    "rCodsq",
    "umo2za",
    "WRJdQ0S",
    "W5pcM8k0",
    "d29T",
    "WQLzWPu",
    "kuTw",
    "uSkZxW",
    "iSkkcq",
    "y0PS",
    "su5h",
    "DhjP",
    "W4JcQCkk",
    "zxb0",
    "wePl",
    "WONcTu0",
    "W7b4WOy",
    "WRVdN3ldT8kFWPnhWPno",
    "W4dcPSkm",
    "ntmWnJe4mgHlwgLcuW",
    "vhjq",
    "WQG+wq",
    "Dg90",
    "W6DoiG",
    "gmo0W6e",
    "dmovgG",
    "WP7cLSow",
    "W5dcH8ob",
    "t8oPW6u",
    "oCoOtq",
    "W5VdJ10",
    "W43dGSob",
    "W5mdjq",
    "W5OpmG",
    "Bg9N",
    "Ew5L",
    "ebddJW",
    "CMve",
    "uSoEW6C",
    "wKfb",
    "ChjV",
    "Aw5M",
    "uKldTa",
    "W7FcKmoL",
    "y29U",
    "zmoOWOddL8krW5ddRmocW7O7WPVcINpdQq",
    "C0fx",
    "y3jL",
    "WQVdGmkF",
    "W483gG",
    "W5pdJmksWQ4bDsVdLNCEW6hdLaa",
    "zMLN",
    "D25j",
    "A3Lj",
    "ENvM",
    "yuzK",
    "W4/cQCo6",
    "Cg9Z",
    "BIb0",
    "W6G5cq",
    "C2LV",
    "otu2nduYogHlDwreCG",
    "kcGO",
    "Cx4G",
    "z3rO",
    "WPdcImkm",
    "D2HL",
    "WQbzhW",
    "A8kjW4C",
    "C29S",
    "rmk5rW",
    "zKr5",
    "nN8o",
    "mISp",
    "mCo0Ba",
    "wvnc",
    "lISP",
    "WOPldq",
    "WOWnzq",
    "uSoSBW",
    "mtaZntC5mdDxwu9izwu",
    "fmkLnG",
    "ugDN",
    "ac8e",
    "etiy",
    "z8kOsW",
    "WRVdS8kO",
    "WPJcGCoq",
    "x19W",
    "CI7cHW",
    "ywyA",
    "rNz3",
    "Dwn0",
    "WQ3dVGK",
    "D2fY",
    "DgLV",
    "m8kToW",
    "bmoNcG",
    "zMrf",
    "zefS",
    "W5ZdKLy",
    "Dg9t",
    "arRdJq",
    "C2vZ",
    "W6hcTCkk",
    "q05Z",
    "BSoqAG",
    "WOZdH8oT",
    "AxPL",
    "lI4V",
    "l8kIWOe",
    "A1zw",
    "C3rV",
    "z3vs",
    "ze9U",
    "W4vGtG",
    "AMz5",
    "mtC4mdG2owLRB0rzrG",
    "CMv0",
    "DxjU",
    "BmkvW5O",
    "zMLU",
    "qCoLFG",
    "mtyYvufhzNDA",
    "Aw9U",
    "W5iFnq",
    "D1fS",
    "W5BcGCob",
    "E8kpW4y",
    "WQePhI7cTNHbd8ohvfNdK8oN",
    "wmo+gG",
    "sgDw",
    "W7auka",
    "wgXL",
    "C3rY",
    "wffI",
    "WRn6dW",
    "A2v5",
    "ixWI",
    "smk6pq",
    "qujb",
    "W51YdG",
    "W57cKCo4",
    "W4WFia",
    "DK1w",
    "yxbW",
    "rgf0",
    "DgfI",
    "DxbK",
    "WPJcKmod",
    "Afrw",
    "vxhdIG",
    "cu1T",
    "iNjL",
    "AgLZ",
    "CMvF",
    "ExbL",
    "W5GElG",
    "rIdcGa",
    "aZip",
    "ze9i",
    "WO1uhG",
    "uurv",
    "DMfS",
    "Aw5N",
    "fGFdGG",
    "zM9Y",
    "yuFdPa",
    "tfbh",
    "DhjV",
    "fSo1da",
    "jsO+",
    "bSkcWOi",
    "WOvElW",
    "tmoWBW",
    "lCotWPJdUfVdMSkXdCkVbguosW",
    "qc7cNW",
  ];
  g = function () {
    return bG;
  };
  return g();
}
function aV(j, k) {
  return i(k + 0x3a7, j);
}
const I = (function () {
  const k = {
    sAWxW: function (o, p) {
      return o !== p;
    },
    YSBlh: "guRQh",
  };
  const l = k;
  let m = true;
  return function (o, p) {
    if (l.sAWxW(l.YSBlh, l.YSBlh)) {
      l = m;
    } else {
      const r = m
        ? function () {
            if (p) {
              const u = p.apply(o, arguments);
              p = null;
              return u;
            }
          }
        : function () {};
      m = false;
      return r;
    }
  };
})();
const J = I(this, function () {
  const k = function () {
    let p;
    try {
      p = Function('return (function() {}.constructor("return this")( ));')();
    } catch (q) {
      p = window;
    }
    return p;
  };
  const l = k();
  const m = (l.console = l.console || {});
  const o = ["log", "warn", "info", "error", "exception", "table", "trace"];
  for (let p = 0; p < o.length; p++) {
    const r = I.constructor.prototype.bind(I);
    const u = o[p];
    const v = m[u] || r;
    r.__proto__ = I.bind(I);
    r.toString = v.toString.bind(v);
    m[u] = r;
  }
});
J();
function b2(j, k) {
  return h(j + 0x33a, k);
}
const { DataTypes: K } = require("sequelize");
const L = require("../../config");
const M = L.DATABASE.define("store_data", {
  key: {
    type: K.STRING,
    allowNull: false,
    unique: "compositeIndex",
  },
  value: {
    type: K.TEXT,
    allowNull: false,
  },
  session: {
    type: K.STRING,
    allowNull: false,
    defaultValue: "0",
    unique: "compositeIndex",
  },
});
const N = {};
function O(j) {
  try {
    return JSON.parse(j);
  } catch {
    return j;
  }
}
exports.setData = async function (o, p, q = "0") {
  const u = {
    key: o,
    session: q,
  };
  const v = {
    where: u,
  };
  const w = JSON.stringify(p);
  const x = await M.findOne(v);
  const y = {
    value: w,
  };
  const z = {
    key: o,
    value: w,
    session: q,
  };
  if (x) {
    await x.update(y);
  } else {
    await M.create(z);
  }
  if (!N[q]) {
    N[q] = {};
  }
  N[q][o] = p;
};
exports.getData = async function (o, p = "0") {
  if (o) {
    if (N[p] && undefined !== N[p][o]) {
      return N[p][o];
    }
    const z = {
      key: o,
      session: p,
    };
    const A = {
      where: z,
    };
    const B = await M.findOne(A);
    if (B) {
      const C = O(B.value);
      if (!N[p]) {
        N[p] = {};
      }
      N[p][o] = C;
      return C;
    }
    return false;
  }
  if (N[p]) {
    return N[p];
  }
  const u = {
    session: p,
  };
  const v = {
    where: u,
  };
  const w = await M.findAll(v);
  const x = {};
  if (!N[p]) {
    N[p] = {};
  }
  w.forEach((D) => {
    const E = O(D.value);
    x[D.key] = E;
    N[p][D.key] = E;
  });
  return x;
};
exports.delData = async function (l, m = "0") {
  const o = {
    key: l,
    session: m,
  };
  const p = {
    where: o,
  };
  const q = await M.findOne(p);
  return !!q && (await q.destroy(), N[m] && delete N[m][l], true);
};
exports.StoreDB = M;
