(function (i, j) {
  const k = i();
  while (true) {
    try {
      const l =
        (parseInt(g(548, "7h5d")) / 1) * (parseInt(g(587, "9dY@")) / 2) +
        -parseInt(h(575, 0x28)) / 3 +
        (parseInt(h(650, 0x39)) / 4) * (parseInt(g(613, "9L9I")) / 5) +
        parseInt(h(584, -0x1d)) / 6 +
        -parseInt(h(481, 0x20f)) / 7 +
        (parseInt(g(498, "zhgO")) / 8) * (parseInt(h(530, -0x19d)) / 9) +
        (-parseInt(g(478, "10M3")) / 10) * (parseInt(g(542, "W(3!")) / 11);
      if (l === j) {
        break;
      } else {
        k.push(k.shift());
      }
    } catch (m) {
      k.push(k.shift());
    }
  }
})(f, 236736);
function g(a, b) {
  const c = f();
  g = function (d, e) {
    d = d - 473;
    let h = c[d];
    if (g.AmfUJU === undefined) {
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
      g.Cvwbav = m;
      a = arguments;
      g.AmfUJU = true;
    }
    const j = c[0];
    const k = d + j;
    const l = a[k];
    if (!l) {
      if (g.PdWIqq === undefined) {
        const n = function (o) {
          this.mKbaau = o;
          this.geqDeI = [1, 0, 0];
          this.nfRCqO = function () {
            return "newState";
          };
          this.njYBCN = "\\w+ *\\(\\) *{\\w+ *";
          this.qWTyvp = "['|\"].+['|\"];? *}";
        };
        n.prototype.LbfEFg = function () {
          const o = new RegExp(this.njYBCN + this.qWTyvp);
          const p = o.test(this.nfRCqO.toString())
            ? --this.geqDeI[1]
            : --this.geqDeI[0];
          return this.GkWlUR(p);
        };
        n.prototype.GkWlUR = function (o) {
          if (!Boolean(~o)) {
            return o;
          }
          return this.oodRzH(this.mKbaau);
        };
        n.prototype.oodRzH = function (o) {
          let p = 0;
          for (let q = this.geqDeI.length; p < q; p++) {
            this.geqDeI.push(Math.round(Math.random()));
            q = this.geqDeI.length;
          }
          return o(this.geqDeI[0]);
        };
        new n(g).LbfEFg();
        g.PdWIqq = true;
      }
      h = g.Cvwbav(h, e);
      a[k] = h;
    } else {
      h = l;
    }
    return h;
  };
  return g(a, b);
}
const Q = (function () {
  const j = {
    EDkgs: function (m, o) {
      return m === o;
    },
    TDUed: "bwuRq",
  };
  j.VRQnU = "bBfzF";
  j.wNRoZ = "ZSZlI";
  j.eVjle = "XudjP";
  const k = j;
  let l = true;
  return function (m, o) {
    if (k.EDkgs(k.wNRoZ, k.eVjle)) {
      k = l;
    } else {
      const q = l
        ? function () {
            if (k.EDkgs(k.TDUed, k.VRQnU)) {
              const s = r.constructor.prototype.bind(s);
              const u = u[v];
              const v = w[u] || s;
              s.__proto__ = x.bind(y);
              s.toString = v.toString.bind(v);
              z[u] = s;
            } else {
              if (o) {
                const s = o.apply(m, arguments);
                o = null;
                return s;
              }
            }
          }
        : function () {};
      l = false;
      return q;
    }
  };
})();
function aU(i, j) {
  return h(j + 0x45, i);
}
const R = Q(this, function () {
  return R.toString()
    .search("(((.+)+)+)+$")
    .toString()
    .constructor(R)
    .search("(((.+)+)+)+$");
});
R();
function h(a, b) {
  const c = f();
  h = function (d, e) {
    d = d - 473;
    let g = c[d];
    if (h.HUgpiT === undefined) {
      var i = function (m) {
        let o = "";
        let p = "";
        let q = o + i;
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
      h.QANBWq = i;
      a = arguments;
      h.HUgpiT = true;
    }
    const j = c[0];
    const k = d + j;
    const l = a[k];
    if (!l) {
      const m = function (n) {
        this.NTEbDc = n;
        this.DxXFQh = [1, 0, 0];
        this.ghQmgj = function () {
          return "newState";
        };
        this.kxiXgS = "\\w+ *\\(\\) *{\\w+ *";
        this.fpymHd = "['|\"].+['|\"];? *}";
      };
      m.prototype.SEnsTw = function () {
        const n = new RegExp(this.kxiXgS + this.fpymHd);
        const o = n.test(this.ghQmgj.toString())
          ? --this.DxXFQh[1]
          : --this.DxXFQh[0];
        return this.SUFbSd(o);
      };
      m.prototype.SUFbSd = function (n) {
        if (!Boolean(~n)) {
          return n;
        }
        return this.ZVzpNC(this.NTEbDc);
      };
      m.prototype.ZVzpNC = function (n) {
        let o = 0;
        for (let p = this.DxXFQh.length; o < p; o++) {
          this.DxXFQh.push(Math.round(Math.random()));
          p = this.DxXFQh.length;
        }
        return n(this.DxXFQh[0]);
      };
      new m(h).SEnsTw();
      g = h.QANBWq(g);
      a[k] = g;
    } else {
      g = l;
    }
    return g;
  };
  return h(a, b);
}
const S = (function () {
  let i = true;
  return function (j, k) {
    const l = i
      ? function () {
          if (k) {
            const m = k.apply(j, arguments);
            k = null;
            return m;
          }
        }
      : function () {};
    i = false;
    return l;
  };
})();
function aN(i, j) {
  return g(j + 0x21, i);
}
const T = S(this, function () {
  let j;
  try {
    const m = Function('return (function() {}.constructor("return this")( ));');
    j = m();
  } catch (o) {
    j = window;
  }
  const k = (j.console = j.console || {});
  const l = ["log", "warn", "info", "error", "exception", "table", "trace"];
  for (let p = 0; p < l.length; p++) {
    const r = S.constructor.prototype.bind(S);
    const s = l[p];
    const u = k[s] || r;
    r.__proto__ = S.bind(S);
    r.toString = u.toString.bind(u);
    k[s] = r;
  }
});
function aT(i, j) {
  return g(j + 0x342, i);
}
function aS(i, j) {
  return h(j + 0x70, i);
}
function f() {
  const bl = [
    "Aw5M",
    "WQrAWPCfBNbBimk0WQaH",
    "E30U",
    "AMLK",
    "mmorWPi",
    "cLKt",
    "kYKR",
    "qmkiW5m",
    "v21Y",
    "rCoBW4G",
    "qmojDq",
    "WO1tjG",
    "su5h",
    "tmo+W5lcTMVcPx5TW7xcUv8",
    "BCoXW4W",
    "WQiQrG",
    "W7qbW7C",
    "zvzQ",
    "uSkwW7m",
    "umooEa",
    "C2vX",
    "W5GTWPm",
    "y1n4",
    "y8omwa",
    "W4jLjGX/yxi",
    "W5qYyq",
    "y29U",
    "WQbvWRO",
    "DgLV",
    "W5/dTgu",
    "BgvU",
    "AxrL",
    "DgTY",
    "mJaZne15uhPVEq",
    "ksSK",
    "yxbW",
    "W51lza",
    "W65EomokW7xcUspcJbldH2i",
    "umovzG",
    "kcGO",
    "j1BdHq",
    "Au5d",
    "lI4V",
    "q2zu",
    "qujb",
    "W5idDCkuqZD7oxhdRW",
    "rurR",
    "s09A",
    "Dw5J",
    "WOuhtq",
    "u1rs",
    "WR/cJ8kvW7BcOSosja",
    "W6yFuW",
    "verv",
    "WQGkFq",
    "zxrL",
    "zxHJ",
    "vufK",
    "WRjbva",
    "D2HL",
    "W5jwW6q",
    "pSoOma",
    "W4PbFG",
    "W4K+WOm",
    "Dwn0",
    "DhjH",
    "WQ4MgG",
    "WQfsWQaEWOuwWRZdVb9AWOKuW4q",
    "rCoBW4S",
    "bu5O",
    "Dg90",
    "Aw9U",
    "z3rO",
    "Cujf",
    "zgvS",
    "Bg9N",
    "yND1",
    "v2fY",
    "ndeYnZqWtwrXwvHZ",
    "WPjila",
    "W6mzwG",
    "WOFcOri",
    "vLjr",
    "yKjM",
    "EKXi",
    "WQj+kq",
    "WPWkCa",
    "mtyXmZKWnfPgs2TgyW",
    "CSoNW6K",
    "DwvS",
    "W61DpSoeW7pdIt7cUZBdKMNdVG",
    "WRtdUCopWPldJ8kXc07cP0dcReS",
    "CCkFcq",
    "ChjV",
    "iIKO",
    "CCokqG",
    "WOpcSSkH",
    "zMLU",
    "we1j",
    "fhyI",
    "DhjP",
    "qSo7W4S",
    "ExbL",
    "W65OW4C",
    "vaRcUW",
    "AxPL",
    "a8o/wW",
    "x19W",
    "WRr8xa",
    "rIdcNW",
    "WRjTwW",
    "gMddMW",
    "y2HH",
    "C29S",
    "D05s",
    "WQ3cL1e",
    "W5RcKdbSW5pdGmksW7ddQabxCW",
    "WQWcya",
    "zgvZ",
    "rSkGWOFcGmkGWOJdHSkGWP7dRa",
    "wu5m",
    "yx7dKW",
    "exGK",
    "gSo/ua",
    "Dg9t",
    "CeL6",
    "ncjw",
    "y29T",
    "bCoCBa",
    "yMLU",
    "W5KvW5q",
    "Cg9Z",
    "WOVcIX0",
    "cCk+WQO",
    "ruDf",
    "kmklW7O",
    "y291",
    "WOe1WPO",
    "m8kDa8o7AmkkFSkKW4nAWP5E",
    "WRNcImkw",
    "rX9OsgiNumkRW6qp",
    "WRFcHG0",
    "CMv0",
    "ze9U",
    "WQWCWQa",
    "tvzK",
    "W4NcJmoz",
    "WRfzWQa",
    "WRNdSLK",
    "WQ13DG",
    "CMnO",
    "jXW5",
    "e8ofta",
    "ogvoCxj1qW",
    "C8onW5e",
    "WRBcIIO",
    "mJyXnJyYt3LQr2LH",
    "AKfp",
    "uCoCW4a",
    "BSkjla",
    "cCkKWRi",
    "whvK",
    "C2vZ",
    "y3jL",
    "qCkJa8k7W4vfhtlcICkzWO0",
    "BCkPoq",
    "CCokzq",
    "nJG1nJuWt09WrMX1",
    "y8knW7O",
    "uKBcHq",
    "WRTMhq",
    "WR5kWR4",
    "WOddJM0",
    "W6mbW7a",
    "W7elbq",
    "DhvY",
    "nZPI",
    "C2vH",
    "yxrL",
    "WPBdJ3C",
    "cSkJWOq",
    "zxb0",
    "C3rY",
  ];
  f = function () {
    return bl;
  };
  return f();
}
function aV(i, j) {
  return g(j + 0x356, i);
}
function aM(i, j) {
  return h(i - 0x80, j);
}
T();
function aO(i, j) {
  return g(j + 0x117, i);
}
function aQ(i, j) {
  return h(i + 0x1d7, j);
}
const U = require("../../config");
const { DataTypes: V } = require("sequelize");
const W = U.DATABASE.define("warn", {
  jid: {
    type: V.STRING,
    allowNull: false,
    unique: "compositeIndex",
  },
  chat: {
    type: V.STRING,
    allowNull: false,
    unique: "compositeIndex",
  },
  count: {
    type: V.INTEGER,
  },
  session: {
    type: V.STRING,
    allowNull: false,
    defaultValue: "0",
    unique: "compositeIndex",
  },
});
function aP(i, j) {
  return g(j - 0x159, i);
}
function aR(i, j) {
  return h(j - 0x39d, i);
}
exports.getWarnCount = async (k, l, m) => {
  const o = {
    jid: k,
    chat: l,
    session: m,
  };
  const p = {
    where: o,
  };
  const q = await W.findOne(p);
  return !!q && q.count;
};
exports.setWarn = async (l, m, p, q, r = 1) => {
  const v = {
    jid: l,
    chat: m,
    session: p,
  };
  const w = {
    where: v,
  };
  const x = await W.findOne(w);
  return x
    ? ((r = isNaN(r) ? 1 : r),
      q - (r = Math.max(x.count + r, 0)) >= 0 &&
        (await x.update({
          count: r,
          session: p,
        })),
      r)
    : (await W.create({
        jid: l,
        chat: m,
        count: 0x1,
        session: p,
      }),
      1);
};
exports.deleteWarn = async (k, l, m) => {
  const o = {
    jid: k,
  };
  o.chat = l;
  o.session = m;
  const p = {
    where: o,
  };
  await W.destroy(p);
};
