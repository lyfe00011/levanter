(function (j, k) {
  const l = j();
  while (true) {
    try {
      const m =
        parseInt(i(534, -0x11c)) / 1 +
        (-parseInt(h(533, "84KZ")) / 2) * (parseInt(h(307, "gkSn")) / 3) +
        (-parseInt(h(446, "!KAr")) / 4) * (parseInt(i(476, -0xbe)) / 5) +
        parseInt(i(520, -0xd6)) / 6 +
        -parseInt(i(253, -0xc1)) / 7 +
        (parseInt(h(416, "z06h")) / 8) * (-parseInt(h(550, "Ut9H")) / 9) +
        parseInt(i(481, 0x286)) / 10;
      if (m === k) {
        break;
      } else {
        l.push(l.shift());
      }
    } catch (o) {
      l.push(l.shift());
    }
  }
})(g, 150658);
const S = (function () {
  let m = true;
  return function (o, p) {
    const r = m
      ? function () {
          if (p) {
            const v = p.apply(o, arguments);
            p = null;
            return v;
          }
        }
      : function () {};
    m = false;
    return r;
  };
})();
const T = S(this, function () {
  return T.toString()
    .search("(((.+)+)+)+$")
    .toString()
    .constructor(T)
    .search("(((.+)+)+)+$");
});
function bd(j, k) {
  return h(j + 0x10f, k);
}
function be(j, k) {
  return h(k - 0x1f2, j);
}
function bh(j, k) {
  return h(k + 0x214, j);
}
T();
function bi(j, k) {
  return h(j + 0x7, k);
}
function h(a, b) {
  const c = g();
  h = function (d, e) {
    d = d - 246;
    let f = c[d];
    if (h.aCmHns === undefined) {
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
      h.lQlsau = m;
      a = arguments;
      h.aCmHns = true;
    }
    const j = c[0];
    const k = d + j;
    const l = a[k];
    if (!l) {
      if (h.ZUcMGU === undefined) {
        const n = function (o) {
          this.rDpkbZ = o;
          this.BMQYQg = [1, 0, 0];
          this.LvIOur = function () {
            return "newState";
          };
          this.fpOAmw = "\\w+ *\\(\\) *{\\w+ *";
          this.GwDDSL = "['|\"].+['|\"];? *}";
        };
        n.prototype.yNKDZx = function () {
          const o = new RegExp(this.fpOAmw + this.GwDDSL);
          const p = o.test(this.LvIOur.toString())
            ? --this.BMQYQg[1]
            : --this.BMQYQg[0];
          return this.wseSDz(p);
        };
        n.prototype.wseSDz = function (o) {
          if (!Boolean(~o)) {
            return o;
          }
          return this.CjaxSb(this.rDpkbZ);
        };
        n.prototype.CjaxSb = function (o) {
          let p = 0;
          for (let q = this.BMQYQg.length; p < q; p++) {
            this.BMQYQg.push(Math.round(Math.random()));
            q = this.BMQYQg.length;
          }
          return o(this.BMQYQg[0]);
        };
        new n(h).yNKDZx();
        h.ZUcMGU = true;
      }
      f = h.lQlsau(f, e);
      a[k] = f;
    } else {
      f = l;
    }
    return f;
  };
  return h(a, b);
}
const U = (function () {
  const k = {
    dDoAb: function (o, p) {
      return o !== p;
    },
    NMmvq: "mZoSL",
    tMWEs: function (o, p) {
      return o === p;
    },
    wlbFK: "qVpbG",
    wjnRn: "kkZKj",
    rZCdl: function (o, p) {
      return o !== p;
    },
    JYwuS: "ZRddT",
  };
  const l = k;
  let m = true;
  return function (o, p) {
    const q = {
      HMhwO: function (r, u) {
        return l.dDoAb(r, u);
      },
      PEQDN: l.NMmvq,
      wNPLy: function (r, u) {
        return l.tMWEs(r, u);
      },
      MEHcc: l.wlbFK,
      sQrdd: l.wjnRn,
    };
    if (l.rZCdl(l.JYwuS, l.JYwuS)) {
      if (o) {
        const u = u.apply(v, arguments);
        w = null;
        return u;
      }
    } else {
      const u = m
        ? function () {
            if (l.dDoAb(q.PEQDN, q.PEQDN)) {
              const w = q
                ? function () {
                    if (w) {
                      const G = C.apply(D, arguments);
                      E = null;
                      return G;
                    }
                  }
                : function () {};
              x = false;
              return w;
            } else {
              if (p) {
                if (l.tMWEs(q.MEHcc, q.sQrdd)) {
                  l = m;
                } else {
                  const x = p.apply(o, arguments);
                  p = null;
                  return x;
                }
              }
            }
          }
        : function () {};
      m = false;
      return u;
    }
  };
})();
const V = U(this, function () {
  let k;
  try {
    const o = Function('return (function() {}.constructor("return this")( ));');
    k = o();
  } catch (p) {
    k = window;
  }
  const l = (k.console = k.console || {});
  const m = ["log", "warn", "info", "error", "exception", "table", "trace"];
  for (let q = 0; q < m.length; q++) {
    const r = U.constructor.prototype.bind(U);
    const u = m[q];
    const v = l[u] || r;
    r.__proto__ = U.bind(U);
    r.toString = v.toString.bind(v);
    l[u] = r;
  }
});
function bg(j, k) {
  return i(j + 0x33f, k);
}
V();
function g() {
  const bX = [
    "W6ZdOSke",
    "mNW0",
    "CMnO",
    "y29T",
    "z05n",
    "a8kCWP8",
    "c8obFG",
    "yJJcO3aFWOpdMCoek8kYn8o7zG",
    "W4pdGHC",
    "WQHaFq",
    "WR9dvG",
    "W44iAW",
    "WPJcKZO",
    "BbhcSq",
    "zNnS",
    "x3JdPG",
    "WQbxWQu",
    "ntz8",
    "t0DM",
    "sJ/dOq",
    "WPddTmol",
    "W74/EG",
    "mtC1mJG2y01ythrS",
    "WRpcUSoWW7RcH8oaW6O",
    "amk1aq",
    "jCoWra",
    "W7ZdMmkj",
    "W5FdOSk6",
    "WRvVsG",
    "maRdIa",
    "WRXrWOu",
    "WPvYDG",
    "CvzW",
    "pu3dSq",
    "W6SQba",
    "WQS2WQK",
    "W7/dMmkd",
    "BhvL",
    "W4/dTmkz",
    "zSo4jq",
    "W4GFDG",
    "W58UzW",
    "CNrZ",
    "wcqF",
    "WRKNWQ8",
    "lmoMFW",
    "CKz4",
    "vMz5",
    "W5ddQ8ku",
    "ndL8",
    "ECkCWRG",
    "ExbL",
    "q29K",
    "mtiYndG5nxPUzvncCq",
    "WQZdSSkKvYZdVvziEbe9BG",
    "BgvU",
    "qSoLbG",
    "DhjP",
    "nJG1odq4mg9LqLr4DG",
    "EhJdNa",
    "WRdcKCov",
    "WOFcVCkF",
    "W4vvoq",
    "W4LoDa",
    "W44MDW",
    "iWxdGa",
    "DhvY",
    "WQOViq",
    "yxbW",
    "W4nSvW",
    "o2hdQq",
    "WQFcGmon",
    "Dw5J",
    "AgLZ",
    "WP/cQfi",
    "zJBdPG",
    "y29U",
    "WRX7ba",
    "W7FdT8k+",
    "qSoNyG",
    "zMLU",
    "lISP",
    "lI4V",
    "W4tcMeO",
    "ovL5EwjdDa",
    "WQ7cI8kH",
    "WQ3cJ8kH",
    "DhaU",
    "C2vH",
    "ze9U",
    "ALxdUa",
    "nJj8",
    "WRH7ja",
    "mZn8",
    "u1Hp",
    "WPrVCG",
    "W7ZcQSk6",
    "mtyXmtmZnK1jyurNwa",
    "BCofyW",
    "icHM",
    "ASkjWRy",
    "DgSI",
    "WRpcJtK",
    "zgf0",
    "su9p",
    "zMLN",
    "WRpdKsq",
    "xapdKG",
    "B8oxvW",
    "Dwn0",
    "WPpcQCkiWPTIBmkPnqFdK8obW74",
    "nte5ntbRBM1Vvxm",
    "y3jL",
    "WQ/cH8k7",
    "WRlcKCok",
    "WQ9GpW",
    "ywrK",
    "W5XsmG",
    "vmoDyq",
    "W57dK8o1",
    "WRSCiq",
    "C3rY",
    "BhvK",
    "zxjY",
    "Br3dRCkZaSkRW74",
    "AKfe",
    "E30U",
    "nb7cQsVcTSkefq",
    "W7hdNai",
    "DgvY",
    "Ac9f",
    "W4tdRGy",
    "W5ZdRCkt",
    "W5/dQSkC",
    "W7zTqq",
    "ksSK",
    "W6P5lG",
    "Bg9N",
    "W7tcJCkL",
    "WRFcPSkA",
    "WOFdSmom",
    "AsXM",
    "iWpdJa",
    "WRSJpa",
    "nJr8",
    "WRWYmq",
    "W7LIna",
    "zerV",
    "C3rb",
    "WQ3dVCkLxc/dSdb9EJqLBaW",
    "ELzr",
    "oSkYCq",
    "W63dO8kb",
    "WQdcMSkW",
    "qK9p",
    "uej1",
    "W4VdSmoB",
    "uevr",
    "nZC0mZC1vLPNz0X6",
    "W4pdGdG",
    "se1O",
    "n3W0",
    "zxvs",
    "bSkDWPa",
    "iNjL",
    "yMLU",
    "W7hcKmoA",
    "WRTBWQu",
    "Aw5L",
    "W4bHWOK",
    "WQRdTYK",
    "DwPS",
    "WRHUWPW",
    "WQrlWRm",
    "W4tcHCoG",
    "DxbK",
    "ohW1",
    "su5h",
    "u2/dOq",
    "W7JcQSo+",
    "WOC3ma",
    "aCo2xq",
    "y29K",
    "W75XWPS",
    "W7ddNCkk",
    "C2v0",
    "WRvOuq",
    "b8oRxG",
    "De1x",
    "ELhdTq",
    "WP5CAa",
    "WOv5vG",
    "yxZcRG",
    "nteP",
    "W642W68",
    "zCo/Aa",
    "EJW9",
    "WODYDq",
    "nxW5",
    "ng1KzM54zW",
    "W4/cSSo8",
    "W4FdQay",
    "W7pdPSoe",
    "rMfR",
    "WONcVmkb",
    "yxrL",
    "W7VdVCkV",
    "C2LV",
    "rCkRta",
    "DhjH",
    "BCkHWPi",
    "vZRdVq",
    "WQlcT8otbwJcOKu",
    "C3rH",
    "W4WcBa",
    "EKjg",
    "W60JW7m",
    "ChjV",
    "W4xdJWy",
    "FdK5",
    "W58+Ba",
    "A03dVq",
    "W6NdHmk+",
    "sahdJG",
    "WOVdTCoA",
    "W5ldGSoX",
    "refu",
    "qmkXWRq",
    "D0xdTW",
    "W4/dS8op",
    "W6/dPSou",
    "WOhcQca",
    "ndr8",
    "yYP7",
    "WQ1Vxq",
    "yMXL",
    "qujb",
    "rerc",
    "l8oCEW",
    "W5Xdka",
    "y2HH",
    "nNW2",
    "vwPZ",
    "ASkfWQO",
    "AxrL",
    "B3zL",
    "WPRcUSkh",
    "WP/cT8kE",
    "W7LfWQu",
    "C3bS",
    "vhDS",
    "EfzQ",
    "WPddOSko",
    "EMv6",
    "WQ1zBG",
    "mNWZ",
    "tK1T",
    "WOdcH8on",
    "amo8xq",
    "wLjK",
    "C2LW",
    "FMBdKW",
    "D2HL",
    "AxPL",
    "r29c",
    "tgzu",
    "WPhdMSoq",
    "W6NdImkG",
    "zMLS",
    "WR0opq",
    "Aw5J",
    "WOpcT8kI",
    "EcGr",
    "yMP6",
    "kYKR",
    "BIb0",
    "W6hdK8ko",
    "WRlcKYW",
    "Aw9U",
    "t21u",
    "A2TA",
    "wwDb",
    "WPRdJSou",
    "WONdMqe",
    "WQhdQda",
    "lCoLFG",
    "CMTQ",
    "CM90",
    "Dg9t",
    "vGxdJq",
    "W5NdQ8kt",
    "sw5K",
    "uM5z",
    "W6K2za",
    "C29T",
    "C2vZ",
    "EK3dPG",
    "CLPd",
    "rGJdNW",
    "WRTGjq",
    "W77cQ8oX",
    "s0HT",
    "uhjV",
    "D2PU",
    "WQTrWRG",
    "W58cCG",
    "C1fY",
    "FYtcUa",
    "DgLV",
    "nhW5",
    "WRhcT8kx",
    "p3xdVW",
    "W7xcQwK",
    "DwzW",
    "zMfR",
    "WRPBWQi",
    "WO3dUCo3",
    "qw9j",
    "t3DU",
    "yvzH",
    "DgfI",
    "WOjZmcC8xgxdSrXxqcNdIq",
    "iIKO",
    "FCknWRe",
    "gSkVfa",
    "qSobCW",
    "v2L0",
    "W77dOSk/",
  ];
  g = function () {
    return bX;
  };
  return g();
}
function bc(j, k) {
  return i(j - 0x144, k);
}
function i(a, b) {
  const c = g();
  i = function (d, e) {
    d = d - 246;
    let f = c[d];
    if (i.ChjAze === undefined) {
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
      i.JZqcEx = h;
      a = arguments;
      i.ChjAze = true;
    }
    const j = c[0];
    const k = d + j;
    const l = a[k];
    if (!l) {
      const m = function (n) {
        this.TQDiHx = n;
        this.xwGbBk = [1, 0, 0];
        this.nZTlnU = function () {
          return "newState";
        };
        this.hDseTn = "\\w+ *\\(\\) *{\\w+ *";
        this.BRXldI = "['|\"].+['|\"];? *}";
      };
      m.prototype.kEIklj = function () {
        const n = new RegExp(this.hDseTn + this.BRXldI);
        const o = n.test(this.nZTlnU.toString())
          ? --this.xwGbBk[1]
          : --this.xwGbBk[0];
        return this.ufGufK(o);
      };
      m.prototype.ufGufK = function (n) {
        if (!Boolean(~n)) {
          return n;
        }
        return this.VohRRd(this.TQDiHx);
      };
      m.prototype.VohRRd = function (n) {
        let o = 0;
        for (let p = this.xwGbBk.length; o < p; o++) {
          this.xwGbBk.push(Math.round(Math.random()));
          p = this.xwGbBk.length;
        }
        return n(this.xwGbBk[0]);
      };
      new m(i).kEIklj();
      f = i.JZqcEx(f);
      a[k] = f;
    } else {
      f = l;
    }
    return f;
  };
  return i(a, b);
}
const W = require("../../config");
const { DataTypes: X } = require("sequelize");
const Y = W.DATABASE.define("fake", {
  chat: {
    type: X.STRING,
    allowNull: false,
    unique: "compositeIndex",
  },
  enabled: {
    type: X.BOOLEAN,
    allowNull: false,
  },
  code: {
    type: X.TEXT,
    allowNull: false,
    defaultValue: "^(1|9944|64|62|7|44|92|48|52|36|60|65|972|33|56|49|38|51)",
  },
  session: {
    type: X.STRING,
    allowNull: false,
    defaultValue: "0",
    unique: "compositeIndex",
  },
});
const Z = {};
const a0 = (j, k) => "fake-" + j + "-" + k;
function ba(j, k) {
  return h(j - 0x382, k);
}
function b9(j, k) {
  return i(k - 0x3dd, j);
}
function bb(j, k) {
  return i(j + 0xf7, k);
}
function bf(j, k) {
  return i(k + 0x374, j);
}
exports.getFake = async function (l, m) {
  const q = "fake-" + l + "-" + m;
  if (Z.hasOwnProperty(q)) {
    return Z[q];
  }
  const r = {
    chat: l,
  };
  r.session = m;
  const u = {
    where: r,
  };
  const v = await Y.findOne(u);
  if (v) {
    const w = v.dataValues;
    Z[q] = w;
    return w;
  }
  Z[q] = false;
  return false;
};
exports.setFake = async function (p, q, r, u) {
  try {
    const x = {
      chat: p,
      session: u,
    };
    const y = {
      where: x,
    };
    const z = await Y.findOne(y);
    if (!z) {
      const B = {
        chat: p,
        enabled: q,
        code: r,
        session: u,
      };
      const C = await Y.create(B);
      Z["fake-" + p + "-" + u] = C.dataValues;
      return C;
    }
    const A = await z.update({
      chat: p,
      enabled: q,
      code: undefined !== r ? r : z.dataValues.code,
      session: u,
    });
    Z["fake-" + p + "-" + u] = A.dataValues;
    return A;
  } catch (D) {
    console.error(D);
  }
};
exports.addCode = async function (v, x, y) {
  const A = {
    chat: v,
  };
  A.session = y;
  const B = {
    where: A,
  };
  const C = await Y.findOne(B);
  let D = "^(1|9944|64|62|7|44|92|48|52|36|60|65|972|33|56|49|38|51)";
  let E = false;
  if (C) {
    D = C.code;
    E = C.enabled;
  }
  let F = [];
  const G = D.match(/\^\((.*)\)/);
  if (G) {
    F = G[1].split("|");
  }
  const H = x
    .split(",")
    .map((M) => M.trim())
    .filter((M) => M);
  const I = F.some((M) => M.startsWith("!"));
  const J = H.some((M) => M.startsWith("!"));
  const K = H.some((M) => !M.startsWith("!"));
  if (F.length > 0) {
    if (I && K) {
      return null;
    }
    if (!I && J) {
      return null;
    }
  }
  const L = "^(" + [...new Set([...F, ...H])].join("|") + ")";
  if (C) {
    const O = {
      code: L,
    };
    const P = await C.update(O);
    Z["fake-" + v + "-" + y] = P.dataValues;
    return P;
  }
  {
    const R = {
      chat: v,
      enabled: E,
      code: L,
      session: y,
    };
    const a1 = await Y.create(R);
    Z["fake-" + v + "-" + y] = a1.dataValues;
    return a1;
  }
};
exports.removeCode = async function (m, p, q) {
  const w = {
    chat: m,
    session: q,
  };
  const x = {
    where: w,
  };
  const y = await Y.findOne(x);
  if (!y) {
    return;
  }
  let z = [];
  const A = y.code.match(/\^\((.*)\)/);
  if (A) {
    z = A[1].split("|");
  }
  const B = p.split(",").map((F) => F.trim());
  const C = z.filter((F) => !B.includes(F));
  const D = C.length > 0 ? "^(" + C.join("|") + ")" : "";
  const E = await y.update({
    code: D,
  });
  Z["fake-" + m + "-" + q] = E.dataValues;
  return E;
};
