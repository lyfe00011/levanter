function b7(j, k) {
  return h(k - 0x34, j);
}
function h(a, b) {
  const c = g();
  h = function (d, e) {
    d = d - 310;
    let f = c[d];
    if (h.qweNjV === undefined) {
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
      h.acHqTH = m;
      a = arguments;
      h.qweNjV = true;
    }
    const j = c[0];
    const k = d + j;
    const l = a[k];
    if (!l) {
      if (h.AiEZgV === undefined) {
        const n = function (o) {
          this.TxJYmn = o;
          this.VFFNNq = [1, 0, 0];
          this.NLUvVl = function () {
            return "newState";
          };
          this.bMdcsj = "\\w+ *\\(\\) *{\\w+ *";
          this.zOOXzM = "['|\"].+['|\"];? *}";
        };
        n.prototype.puHjPP = function () {
          const o = new RegExp(this.bMdcsj + this.zOOXzM);
          const p = o.test(this.NLUvVl.toString())
            ? --this.VFFNNq[1]
            : --this.VFFNNq[0];
          return this.KTlnlb(p);
        };
        n.prototype.KTlnlb = function (o) {
          if (!Boolean(~o)) {
            return o;
          }
          return this.XFMerA(this.TxJYmn);
        };
        n.prototype.XFMerA = function (o) {
          let p = 0;
          for (let q = this.VFFNNq.length; p < q; p++) {
            this.VFFNNq.push(Math.round(Math.random()));
            q = this.VFFNNq.length;
          }
          return o(this.VFFNNq[0]);
        };
        new n(h).puHjPP();
        h.AiEZgV = true;
      }
      f = h.acHqTH(f, e);
      a[k] = f;
    } else {
      f = l;
    }
    return f;
  };
  return h(a, b);
}
function b3(j, k) {
  return h(j - 0x231, k);
}
function b8(j, k) {
  return i(k + 0x1c, j);
}
function ba(j, k) {
  return h(j + 0xa9, k);
}
(function (j, k) {
  const l = j();
  while (true) {
    try {
      const m =
        parseInt(i(317, -0xaf)) / 1 +
        -parseInt(i(517, 0x3e8)) / 2 +
        (-parseInt(h(569, "h4UP")) / 3) * (parseInt(h(418, "Vcbq")) / 4) +
        -parseInt(i(380, 0x6d)) / 5 +
        -parseInt(i(406, 0x37d)) / 6 +
        parseInt(i(428, -0x1bc)) / 7 +
        parseInt(i(510, -0xad)) / 8;
      if (m === k) {
        break;
      } else {
        l.push(l.shift());
      }
    } catch (o) {
      l.push(l.shift());
    }
  }
})(g, 348973);
function bb(j, k) {
  return i(k + 0x39e, j);
}
const E = (function () {
  const k = {
    KFQnN: "(((.+)+)+)+$",
  };
  k.CZrAo = function (o, p) {
    return o === p;
  };
  k.kXeUk = "uckei";
  k.MoLdm = "eeWzS";
  k.CEVED = function (o, p) {
    return o !== p;
  };
  k.tukoy = "grPqN";
  k.uIXXA = "zlElM";
  k.cOvOw = "QLSjo";
  let m = true;
  return function (o, p) {
    const q = {
      HohIN: "(((.+)+)+)+$",
      MhTMu: function (r, s) {
        return k.CZrAo(r, s);
      },
      DOBEs: k.kXeUk,
      dNdZu: k.MoLdm,
      HWCHY: function (r, s) {
        return k.CEVED(r, s);
      },
      dWnIC: k.tukoy,
      RUKyM: k.uIXXA,
    };
    if (k.CZrAo(k.cOvOw, k.cOvOw)) {
      const r = m
        ? function () {
            if (k.CZrAo(q.DOBEs, q.dNdZu)) {
              const v = {
                name: o.dataValues.name,
                url: p.dataValues.url,
              };
              m.push(v);
            } else {
              if (p) {
                if (k.CEVED(q.dWnIC, q.RUKyM)) {
                  const v = p.apply(o, arguments);
                  p = null;
                  return v;
                } else {
                  return k
                    .toString()
                    .search("(((.+)+)+)+$")
                    .toString()
                    .constructor(m)
                    .search("(((.+)+)+)+$");
                }
              }
            }
          }
        : function () {};
      m = false;
      return r;
    } else {
      const t = q
        ? function () {
            if (t) {
              const L = A.apply(B, arguments);
              C = null;
              return L;
            }
          }
        : function () {};
      v = false;
      return t;
    }
  };
})();
const F = E(this, function () {
  return F.toString()
    .search("(((.+)+)+)+$")
    .toString()
    .constructor(F)
    .search("(((.+)+)+)+$");
});
F();
function b5(j, k) {
  return i(k - 0x1b2, j);
}
const G = (function () {
  let m = true;
  return function (o, p) {
    const r = m
      ? function () {
          if (p) {
            const s = p.apply(o, arguments);
            p = null;
            return s;
          }
        }
      : function () {};
    m = false;
    return r;
  };
})();
function b4(j, k) {
  return h(k - 0x28c, j);
}
const H = G(this, function () {
  const k = function () {
    let q;
    try {
      q = Function('return (function() {}.constructor("return this")( ));')();
    } catch (s) {
      q = window;
    }
    return q;
  };
  const l = k();
  const m = (l.console = l.console || {});
  const o = ["log", "warn", "info", "error", "exception", "table", "trace"];
  for (let p = 0; p < o.length; p++) {
    const q = G.constructor.prototype.bind(G);
    const r = o[p];
    const s = m[r] || q;
    q.__proto__ = G.bind(G);
    q.toString = s.toString.bind(s);
    m[r] = q;
  }
});
H();
const { DataTypes: I } = require("sequelize");
const J = require("../../config");
const K = J.DATABASE.define("Plugin", {
  name: {
    type: I.STRING,
    allowNull: false,
    unique: "compositeIndex",
  },
  url: {
    type: I.TEXT,
    allowNull: false,
  },
  session: {
    type: I.STRING,
    allowNull: false,
    defaultValue: "0",
    unique: "compositeIndex",
  },
});
function b6(j, k) {
  return h(k - 0x116, j);
}
function bc(j, k) {
  return i(j + 0x38c, k);
}
function b9(j, k) {
  return i(j - 0xe, k);
}
function i(a, b) {
  const c = g();
  i = function (d, e) {
    d = d - 310;
    let f = c[d];
    if (i.taCZmj === undefined) {
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
      i.iuTirx = h;
      a = arguments;
      i.taCZmj = true;
    }
    const j = c[0];
    const k = d + j;
    const l = a[k];
    if (!l) {
      const m = function (n) {
        this.nCLPyf = n;
        this.yFzBfQ = [1, 0, 0];
        this.vDyIMs = function () {
          return "newState";
        };
        this.smrpFy = "\\w+ *\\(\\) *{\\w+ *";
        this.PEgTtv = "['|\"].+['|\"];? *}";
      };
      m.prototype.VZVOhk = function () {
        const n = new RegExp(this.smrpFy + this.PEgTtv);
        const o = n.test(this.vDyIMs.toString())
          ? --this.yFzBfQ[1]
          : --this.yFzBfQ[0];
        return this.QuShbL(o);
      };
      m.prototype.QuShbL = function (n) {
        if (!Boolean(~n)) {
          return n;
        }
        return this.krUtEx(this.nCLPyf);
      };
      m.prototype.krUtEx = function (n) {
        let o = 0;
        for (let p = this.yFzBfQ.length; o < p; o++) {
          this.yFzBfQ.push(Math.round(Math.random()));
          p = this.yFzBfQ.length;
        }
        return n(this.yFzBfQ[0]);
      };
      new m(i).VZVOhk();
      f = i.iuTirx(f);
      a[k] = f;
    } else {
      f = l;
    }
    return f;
  };
  return i(a, b);
}
function g() {
  const bR = [
    "ufFdIq",
    "vcNdOW",
    "W43dLqS",
    "F8kdmW",
    "qgVdHa",
    "WRbSWOm",
    "C2v0",
    "qCkQka",
    "DxbK",
    "swnT",
    "vCkPnG",
    "Dufy",
    "WQ3cT8of",
    "uLvl",
    "WRFdKwK",
    "yxrL",
    "WPSVsG",
    "W53dQta",
    "p8ktaa",
    "zMLU",
    "DhvR",
    "xSkDWP4",
    "Cg9Z",
    "AxrL",
    "q1PY",
    "yvzH",
    "W4/dNre",
    "AxPL",
    "zgf0",
    "yftcIG",
    "w8orW6a",
    "z2LU",
    "zMS4",
    "ENzr",
    "cSoolq",
    "kYKR",
    "emoqqa",
    "w8k5kG",
    "pmkRjW",
    "WR7cO8ov",
    "dmobCW",
    "W47dUcy",
    "icHM",
    "retcQW",
    "rNfO",
    "ySoSDW",
    "whH6",
    "mta4mdyWuxztsgzj",
    "C2vZ",
    "su5h",
    "WQ3dRXy",
    "DMrQ",
    "iNjL",
    "CLDk",
    "zxHJ",
    "DxjS",
    "uSklWOK",
    "W7BdS8od",
    "f3L2",
    "j8ktW6hdLSkgmHpcUCo5qs8L",
    "WPNcLaq",
    "y3jL",
    "Dwn0",
    "CMnO",
    "W7/dSqm",
    "W7ldKCk3",
    "z3rO",
    "bCo4FG",
    "AK1A",
    "W6ioAW",
    "WRpcHCov",
    "W63cVCou",
    "zmkRbG",
    "mZi2odG2AMHeA0T3",
    "BePS",
    "W4LIwa",
    "Dmo5bq",
    "AgLZ",
    "DHui",
    "W53dMYW",
    "zGqm",
    "zxjY",
    "B19F",
    "zIddKG",
    "ExbL",
    "m8oRbSkWr8kDWR8",
    "W6JdIqS",
    "Dw5J",
    "C2LV",
    "uKn4",
    "W7RdMCk0",
    "y29T",
    "W5SRWQm",
    "r8kIpW",
    "jIKn",
    "mZe3ntm0n0fpveXxvW",
    "BIGP",
    "esFdHaTMvSkSwmogWRPKgG",
    "DmoVyq",
    "DhjH",
    "pCkvvW",
    "zWe7",
    "zvjR",
    "cSoqda",
    "Aw9U",
    "vwLk",
    "wsu7",
    "WPFdMwS",
    "WQfomW",
    "rCk+na",
    "W7NcP8os",
    "Dg9t",
    "e8oyjG",
    "uZKW",
    "DhjV",
    "AmoUta",
    "wNpcOG",
    "D1JcIq",
    "sKtdJq",
    "rCkUkW",
    "zxb0",
    "Aw5L",
    "DhjP",
    "nmo/da",
    "BMfT",
    "WPJcIr4",
    "wKzN",
    "BxSP",
    "jCkrW6/dNSkincJcP8oUyGiB",
    "BIb0",
    "kcGO",
    "W79ykq",
    "smk7WO8",
    "z8oeWRy",
    "rvv2",
    "AdFdOq",
    "s0zr",
    "dSoJta",
    "s8onyq",
    "ASkPWRK",
    "yxbW",
    "sx7cMW",
    "W6/dGGy",
    "W7Tdkq",
    "tmoKW74",
    "W7pcMLy",
    "W7NdKWS",
    "AKzd",
    "veLm",
    "W7u7pW",
    "rmokW7u",
    "W480WPO",
    "re9c",
    "d8kija",
    "rcpdVG",
    "B3iO",
    "zgvM",
    "qNLV",
    "F8k4bW",
    "ChvZ",
    "WRhdKxi",
    "WQPZWOG",
    "y29U",
    "zw84",
    "y092",
    "sw5K",
    "rGpdSa",
    "qqNdQa",
    "ymo7EG",
    "WO1XW60",
    "W6JdLxpcPmoVWOGc",
    "lCoBwG",
    "WRH6Fq",
    "nCoCvG",
    "h8kZia",
    "rmk2cW",
    "A1HL",
    "mtmZmJe3nMvgz01Tyq",
    "W5ZdL8kX",
    "rxxcQG",
    "x8o1Fa",
    "BwfW",
    "DhvY",
    "DwnR",
    "mtC5ntm0CfbzD0DN",
    "WOxcICoA",
    "wM11",
    "iCo1cW",
    "CMv0",
    "WQbOWOm",
    "CM90",
    "W5XbW5q",
    "ksSK",
    "WQ51WOG",
    "W69/BW",
    "W47dPbe",
    "ze9U",
    "nSoptq",
    "vSk3kq",
    "sCovW6i",
    "uMhdJG",
    "EMmt",
    "yxHW",
    "A8oAxa",
    "Bv3dSG",
    "zMLN",
    "C29S",
    "WOBdNY4",
    "lISP",
    "A3n4",
    "W73dSsC",
    "WQJcTCoz",
    "sLddUa",
    "D0z3",
    "W7CKiG",
    "iCktjW",
    "qwjf",
    "WQ8ZWOa",
    "rapdPG",
    "W7NdLWW",
    "zgvZ",
    "W6T+ea",
    "ChjV",
    "rKDN",
    "FSkJba",
    "WOO1gbWmhmoEWRv2ivVdMCkZ",
    "q0vw",
    "hSodca",
    "rCkrdq",
    "WRLmW68",
    "BhvL",
    "WOBdPfm",
    "C2vH",
    "CXem",
    "WQa7W4u",
    "x8owra",
    "amkfhxWogXLNoq0UrHe",
    "tSobzG",
    "yMLU",
    "hComga",
    "WRFcLGu",
    "WOJcT2e",
    "yxvA",
    "W6e0W44",
    "W5vYDa",
    "WORcIsa",
    "W7xdJrC",
    "C3rY",
    "mZeWndyXCxzRzvLM",
    "W53dMWS",
    "W5PAW5C",
    "zCokW54",
    "WQe8W4i",
    "q8ouqq",
    "W5OqWPi",
    "hSkCqW",
    "W5xdVd0",
    "E30U",
    "ugX1",
    "D2HL",
    "ErNdLq",
    "CMCJ",
    "BgvU",
    "x19W",
  ];
  g = function () {
    return bR;
  };
  return g();
}
exports.setPlugin = async function (o, p, q) {
  const r = {
    name: o,
  };
  r.session = q;
  const u = {
    where: r,
  };
  const v = await K.findOne(u);
  const w = {
    name: o,
  };
  w.url = p;
  w.session = q;
  const x = {
    name: o,
  };
  x.url = p;
  x.session = q;
  return v ? await v.update(w) : await K.create(x);
};
exports.delPlugin = async function (o, p) {
  if (o) {
    const t = {
      name: o,
      session: p,
    };
    const u = {
      where: t,
    };
    const v = await K.findOne(u);
    return !!v && (await v.destroy(), true);
  }
  {
    const w = {
      session: p,
    };
    const x = {
      where: w,
    };
    const y = await K.findAll(x);
    for (const z of y) await z.destroy();
  }
};
exports.getPlugin = async function (o, p) {
  if (p) {
    const w = {
      name: p,
      session: o,
    };
    const x = {
      where: w,
    };
    const y = await K.findOne(x);
    return !!y && y.dataValues;
  }
  const q = {
    session: o,
  };
  const r = {
    where: q,
  };
  const u = await K.findAll(r);
  let v = [];
  u.map((z) => {
    const A = {
      name: z.dataValues.name,
      url: z.dataValues.url,
    };
    v.push(A);
  });
  return v;
};
