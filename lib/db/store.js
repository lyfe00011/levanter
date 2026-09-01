(function (m, p) {
  const q = m();
  while (true) {
    try {
      const u =
        (parseInt(k(679, -0x121)) / 1) * (parseInt(k(658, -0x7e)) / 2) +
        (parseInt(k(568, 0x67)) / 3) * (parseInt(j(703, "(sEC")) / 4) +
        -parseInt(k(633, 0x274)) / 5 +
        parseInt(j(608, "P80&")) / 6 +
        (parseInt(j(655, "R$v4")) / 7) * (-parseInt(j(416, ")%8D")) / 8) +
        -parseInt(k(651, 0x4e5)) / 9 +
        (-parseInt(j(583, "p%w3")) / 10) * (parseInt(j(348, "rk)P")) / 11);
      if (u === p) {
        break;
      } else {
        q.push(q.shift());
      }
    } catch (v) {
      q.push(q.shift());
    }
  }
})(h, 799486);
const a5 = (function () {
  let u = true;
  return function (v, w) {
    const z = u
      ? function () {
          if (w) {
            const A = w.apply(v, arguments);
            w = null;
            return A;
          }
        }
      : function () {};
    u = false;
    return z;
  };
})();
const a6 = a5(this, function () {
  return a6
    .toString()
    .search("(((.+)+)+)+$")
    .toString()
    .constructor(a6)
    .search("(((.+)+)+)+$");
});
a6();
const a7 = (function () {
  let m = true;
  return function (p, q) {
    const u = m
      ? function () {
          if (q) {
            const v = q.apply(p, arguments);
            q = null;
            return v;
          }
        }
      : function () {};
    m = false;
    return u;
  };
})();
const a8 = a7(this, function () {
  const p = function () {
    let w;
    try {
      w = Function('return (function() {}.constructor("return this")( ));')();
    } catch (x) {
      w = window;
    }
    return w;
  };
  const q = p();
  const u = (q.console = q.console || {});
  const v = ["log", "warn", "info", "error", "exception", "table", "trace"];
  for (let w = 0; w < v.length; w++) {
    const x = a7.constructor.prototype.bind(a7);
    const y = v[w];
    const z = u[y] || x;
    x.__proto__ = a7.bind(a7);
    x.toString = z.toString.bind(z);
    u[y] = x;
  }
});
a8();
const { DataTypes: a9 } = require("sequelize");
const aa = require("../../config");
const ac = require("../config");
const ad = aa.DATABASE.define("db", {
  db: {
    type: a9.TEXT,
    defaultValue: "{}",
  },
  session: {
    type: a9.STRING,
    allowNull: false,
    defaultValue: "0",
  },
});
exports.setDb = async (q) => {
  const u = {
    session: q,
  };
  const v = {
    where: u,
  };
  const w = await ad.findOne(v);
  if (w) {
    await w.update({
      db: JSON.stringify(ac[q].db),
      session: q,
    });
  } else {
    await ad.create({
      db: JSON.stringify(ac[q].db),
      session: q,
    });
  }
};
exports.getDb = async (q) => {
  const u = {
    session: q,
  };
  const v = {
    where: u,
  };
  const w = await ad.findOne(v);
  if (w) {
    ac[q].db = JSON.parse(w.db);
  }
  return ac[q].db;
};
function by(m, p) {
  return j(p - 0x311, m);
}
const ae = {
  type: a9.STRING,
  allowNull: false,
};
function bC(m, p) {
  return k(m + 0x21d, p);
}
const af = {
  type: a9.STRING,
  allowNull: false,
};
const ag = {
  type: a9.TEXT,
  allowNull: false,
  defaultValue: "{}",
};
function h() {
  const dw = [
    "vsRcKG",
    "vevy",
    "aSkNya",
    "zefS",
    "WQFcIXq",
    "zCoMWR8",
    "se03",
    "W6rDEq",
    "xsRdJG",
    "W45HFq",
    "c8kMW6u",
    "W4D1WRq",
    "BIb0",
    "WOr+WO8",
    "ChjV",
    "B3iO",
    "WP8CWRO",
    "vMzN",
    "mXBcSa",
    "yMLU",
    "B8oBEa",
    "B05N",
    "W5mHW7a",
    "mJm5mJa1ou9yywnuwq",
    "vMzG",
    "zgvM",
    "C8keW78",
    "Dw5J",
    "uJpdJW",
    "BhvL",
    "WO3cGLu",
    "W43dPg8",
    "zxjY",
    "BK1S",
    "Ce1L",
    "grCc",
    "bsTz",
    "ibZcQG",
    "W4bwWQddQ8kDWRivqa",
    "ExbL",
    "WOG6WRS",
    "W6XAWOG",
    "BCovqa",
    "W6SYWRq",
    "DhvY",
    "n1xcJW",
    "CgfY",
    "Aw9U",
    "fhldIgbrW4GWe8k4uXpcMZS",
    "WRhdNCo9",
    "z3rO",
    "WRDeWQ0",
    "lI4V",
    "mSkBW5m",
    "D2HL",
    "WPBcIGq",
    "W6FdNCo3",
    "fSkrCW",
    "uwP5",
    "Dwn0",
    "gfDM",
    "zMLU",
    "W7nwyq",
    "hdaIfgZdP20GD2hdI0RcOW",
    "a8kDWPm",
    "uh44",
    "zw5K",
    "W6pdTSoj",
    "WR1TW5O",
    "vCoIWOS",
    "hvldKG",
    "iIKO",
    "WOKBW7O",
    "abJcUa",
    "n8kwrG",
    "A8o1yW",
    "W7y9iq",
    "z2LU",
    "W6dcK8od",
    "WQ3cGLG",
    "Bg9N",
    "WP1UW5S",
    "WPJcJL0",
    "WOzRWQq",
    "W6ddISo5",
    "ctiV",
    "WRtcIs8",
    "o8k6wa",
    "mJe1nZeZnxPhv0jVAa",
    "fmk9W68",
    "W6tdH8o9",
    "yxrL",
    "DNny",
    "WOyFWQq",
    "DeDv",
    "AfvY",
    "cs7cLG",
    "dKTM",
    "AvbY",
    "abJcSq",
    "W5RdNSou",
    "Dgv4",
    "WQtdHSoS",
    "CM90",
    "FmoBDG",
    "WOtcNGi",
    "mJm2ote3ohPvAurXEG",
    "y3jL",
    "C2vX",
    "AwrI",
    "vCoWiqRdQwFdKSopW7/dRG",
    "qKTJ",
    "CMvK",
    "mKfvtMPdqW",
    "W7ldG8o0",
    "WRSUW4/dJX3dMmkPCSoEW4RdUmkiW4i",
    "DxrP",
    "WO/cJKC",
    "CM91",
    "BIGP",
    "DfzH",
    "DgfJ",
    "WPdcIYC",
    "ze9U",
    "zuD0",
    "WP5PW4m",
    "dKxdQq",
    "qSogWPq",
    "ugbG",
    "W6hcHmoq",
    "u1rs",
    "qsldNG",
    "WOJcJKe",
    "t3bg",
    "nZq1mZuZAhHmv3Lg",
    "WQ3cNLa",
    "Aw5M",
    "gLhcLq",
    "Aw5L",
    "vs7dHa",
    "W51IWQu",
    "B1DK",
    "kSkZwa",
    "C8koW7i",
    "DwXS",
    "C2v0",
    "WQNdGCoG",
    "C3vI",
    "sNbj",
    "W598WRu",
    "istcSa",
    "f3hdIgqyWRnKdCkvAG",
    "WO7cGhC",
    "csax",
    "DwLK",
    "WRZcOvO",
    "W6P0WOO",
    "gmkmWOi",
    "s1FcIK1UWOFcPW",
    "WRpcI00",
    "cCk3WQ8",
    "W51+WRK",
    "dCkaWPG",
    "Be1t",
    "yxbW",
    "ofzTs1rMwq",
    "gNVcGG",
    "W6lcLCof",
    "DhjV",
    "qcldMq",
    "WRpcOCk7",
    "cCoWW7e",
    "B3Do",
    "EfvP",
    "ksSK",
    "dmkaWPG",
    "WR8sWOa",
    "txnN",
    "WOFcIW8",
    "yxvS",
    "W49NWQy",
    "WORcImkcW7tcPWnVxaxcSaJcNCop",
    "wLPj",
    "DhLW",
    "WP12WQq",
    "W57dQSot",
    "vwTo",
    "zxH0",
    "wwPk",
    "eM3cIW",
    "cmkHW6y",
    "rmoUWR4",
    "m8kQuq",
    "l8k1Ea",
    "CMvZ",
    "csKR",
    "W4tdLLW",
    "ufrb",
    "WOXVW74",
    "BMfT",
    "W6S6WRK",
    "q29U",
    "C29S",
    "kcGO",
    "fSkHFa",
    "txzz",
    "kSk9Fa",
    "W6WFWO8",
    "A2v5",
    "WRldKmoP",
    "ALT+",
    "DwzL",
    "WO/cGWW",
    "z2v0",
    "uwHK",
    "pdVcUq",
    "e8ojW6C",
    "W4yGW6W",
    "vCocWPm",
    "zgf0",
    "sCoRWO0",
    "W7hdRCkE",
    "AMLf",
    "AxrL",
    "WPO/WRG",
    "uSoMWOa",
    "WPL7WQG",
    "su5h",
    "WPXpW4m",
    "WPejWRO",
    "WQfZWRu",
    "WQ1SW60eWOhdR23dPCo9WPpcUG",
    "W6ddKSot",
    "W4LTWQW",
    "kYKR",
    "De5h",
    "a8kRCa",
    "W5P2Ba",
    "W5ldGmob",
    "sLnA",
    "W6FcV0C",
    "WO9MWQi",
    "tgrg",
    "W4dcHey",
    "WOhcQW8",
    "WO1PW4K",
    "FJ7dGW",
    "AwDU",
    "B19F",
    "n8kfkSo+WRRcMW4fsbPz",
    "DmkoW40",
    "W6vyWRa",
    "C2LV",
    "Aw5N",
    "t8krW5G",
    "rttdSG",
    "AhPI",
    "C2vH",
    "qCopWPi",
    "omk2ua",
    "DxbK",
    "ywXS",
    "EZpdNq",
    "bZFcHq",
    "W7y7WRO",
    "ftiX",
    "uwXh",
    "oXBcQa",
    "zMLN",
    "rwHn",
    "W7pcLmoo",
    "W4WmWRy",
    "zK5N",
    "F2TW",
    "tmo8wW",
    "Dg9t",
    "Awz5",
    "b2dcGW",
    "lHxcSa",
    "vwLM",
    "ahxcLq",
    "WRJdVSoQ",
    "CSkcW7y",
    "ucVdHW",
    "dJ4X",
    "AtRdHq",
    "CgX1",
    "W6/dOmoe",
    "W5CXWOi",
    "EMH0",
    "yvvZ",
    "lXpcOa",
    "DmkoW6O",
    "WOedWQC",
    "q3vj",
    "BhjY",
    "u0DZ",
    "orOw",
    "WQ1RWPu",
    "kmo5W4i",
    "amoRW64",
    "hcTo",
    "W5XRBq",
    "W4WOWR4",
    "W59HWQC",
    "y29U",
    "z3Dl",
    "C29Y",
    "zKfz",
    "uJldHG",
    "s3DS",
    "fszQ",
    "Dg90",
    "gt4K",
    "DhjH",
    "W5u3W7C",
    "W5D8WQG",
    "WPHuWOe",
    "y8ktW7S",
    "z2LK",
    "DgLV",
    "W5joWRi",
    "wMHK",
    "qSogWOy",
    "qujb",
    "r2P6",
    "FSojxa",
    "WOTLW54",
    "WPBcHSkw",
    "WO17WRu",
    "qwzN",
    "dw/dLq",
    "t1HQ",
    "fCo8W64",
    "W7j8WOS",
    "lISP",
    "W4HTWRq",
    "WPpcMmox",
    "kmk3uq",
    "WOHHW58",
    "wvz5",
    "WOesWQy",
    "WQLXWQ8",
    "WP9SWQ8",
    "W6zsWPC",
    "C2vZ",
    "fZ/cJW",
    "WR3dLCki",
    "b27cTa",
    "BxnN",
    "vSoYyhtdUghdNSoE",
    "eSk7W7m",
    "uvPy",
    "WQnOWR4",
    "wfzj",
    "zvDi",
    "orxcQG",
    "W7Coeq",
    "DhjP",
    "W5hcUha",
    "WPBcHSkC",
    "W451WQO",
    "AMLK",
    "cvzT",
    "iSkGW68",
    "h8kmWPO",
    "qIBcMW",
    "W5/dHCou",
    "zxrn",
    "a0PM",
    "W4VdHeW",
    "zgvZ",
    "Dwfe",
    "iNjL",
    "yuja",
    "C3rY",
    "ymovsG",
    "D2fY",
  ];
  h = function () {
    return dw;
  };
  return h();
}
const ah = {
  gid: ae,
  uid: af,
  data: ag,
};
const ai = aa.DATABASE.define("msg", ah);
const aj = (m) => {
  const p = {};
  const q = Object.keys(m).sort((u, v) => m[v].total - m[u].total);
  for (const u of q) p[u] = m[u];
  return p;
};
function j(a, b) {
  const c = h();
  j = function (d, e) {
    d = d - 339;
    let f = c[d];
    if (j.TCFQfy === undefined) {
      var g = function (n) {
        let p = "";
        let q = "";
        let r = p + g;
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
        n = g(n);
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
      j.ibVEdQ = m;
      a = arguments;
      j.TCFQfy = true;
    }
    const i = c[0];
    const k = d + i;
    const l = a[k];
    if (!l) {
      if (j.kUAxAd === undefined) {
        const n = function (o) {
          this.SHuYFv = o;
          this.LeWeoY = [1, 0, 0];
          this.DDThgp = function () {
            return "newState";
          };
          this.sEeQyS = "\\w+ *\\(\\) *{\\w+ *";
          this.mfgxWr = "['|\"].+['|\"];? *}";
        };
        n.prototype.ExXobJ = function () {
          const o = new RegExp(this.sEeQyS + this.mfgxWr);
          const p = o.test(this.DDThgp.toString())
            ? --this.LeWeoY[1]
            : --this.LeWeoY[0];
          return this.gXqbMm(p);
        };
        n.prototype.gXqbMm = function (o) {
          if (!Boolean(~o)) {
            return o;
          }
          return this.BLwQyG(this.SHuYFv);
        };
        n.prototype.BLwQyG = function (o) {
          let p = 0;
          for (let q = this.LeWeoY.length; p < q; p++) {
            this.LeWeoY.push(Math.round(Math.random()));
            q = this.LeWeoY.length;
          }
          return o(this.LeWeoY[0]);
        };
        new n(j).ExXobJ();
        j.kUAxAd = true;
      }
      f = j.ibVEdQ(f, e);
      a[k] = f;
    } else {
      f = l;
    }
    return f;
  };
  return j(a, b);
}
function ak(q, u, v, w) {
  const x = {
    SGsHC: function (C, D) {
      return C === D;
    },
  };
  x.gwKem = "extended";
  x.OpFIJ = "text";
  x.iPrgS = function (C, D) {
    return C + D;
  };
  v = x.gwKem === v ? x.OpFIJ : v;
  const z = Date.now();
  const A = {
    name: w,
    time: z,
    total: 0x0,
    items: {},
  };
  let B = A;
  if (u) {
    B = {
      ...B,
      ...JSON.parse(u),
    };
  }
  B.time = z;
  B.name = w;
  B.items[v] = x.iPrgS(B.items[v] || 0, 1);
  B.total++;
  Object.assign(q, B);
}
exports.setMsgs = async function (q, u, v, w) {
  const y = {
    gid: q,
  };
  y.uid = u;
  const z = {
    where: y,
  };
  const A = await ai.findOne(z);
  const B = {};
  ak(B, A?.["data"], v, w);
  if (A) {
    await A.update({
      gid: q,
      uid: u,
      data: JSON.stringify(B),
    });
  } else {
    await ai.create({
      gid: q,
      uid: u,
      data: JSON.stringify(B),
    });
  }
};
exports.getMsgs = async function (v, w) {
  if (v && !w) {
    const B = {
      gid: v,
    };
    const C = {
      where: B,
    };
    const D = await ai.findAll(C);
    if (D.length < 1) {
      return false;
    }
    const E = D.reduce(
      (F, { uid: G, data: H }) => ((F[G] = JSON.parse(H)), F),
      {},
    );
    return aj(E);
  }
  const y = {
    gid: v,
    uid: w,
  };
  const z = {
    where: y,
  };
  const A = await ai.findOne(z);
  return !!A && JSON.parse(A.data);
};
exports.delMsgs = async function (q, u) {
  const v = {
    gid: q,
  };
  v.uid = u;
  const w = {
    where: v,
  };
  const x = await ai.findOne(w);
  return !!x && (await x.destroy());
};
exports.getName = async (q, u, v) => {
  if (!q && !u) {
    return "";
  }
  if (!u && q) {
    return (await ac[v].fetchGroupMetadata(q)).subject;
  }
  if (u && !q) {
    const x = {
      uid: u,
    };
    const y = {
      where: x,
    };
    const z = await ai.findOne(y);
    return z ? JSON.parse(z.data).name : "";
  }
  return (await exports.getMsgs(q, u)).name;
};
exports.resetMsgs = async (w, x) => {
  if (w && !x) {
    const D = {
      gid: w,
    };
    const E = {
      where: D,
    };
    const F = await ai.findAll(E);
    for (const G of F) await G.destroy();
    return 1;
  }
  const A = {
    gid: w,
    uid: x,
  };
  const B = {
    where: A,
  };
  const C = await ai.findOne(B);
  if (!C) {
    return false;
  }
  await C.destroy();
};
const al = {};
function bw(m, p) {
  return k(m - 0x271, p);
}
al.type = a9.TEXT;
function bA(m, p) {
  return j(p + 0x25, m);
}
al.defaultValue = "{}";
function bv(m, p) {
  return j(p + 0x144, m);
}
const am = {
  type: a9.TEXT,
  allowNull: false,
  defaultValue: "{}",
};
function bu(m, p) {
  return j(p - 0x21, m);
}
function bx(m, p) {
  return j(m + 0x39f, p);
}
const an = {
  type: a9.STRING,
  allowNull: false,
  defaultValue: "0",
};
function bz(m, p) {
  return k(p + 0x383, m);
}
const ao = {
  env: al,
  plugins: am,
  session: an,
};
const ap = aa.DATABASE.define("config", ao);
exports.setConfig = async (v) => {
  const w = {
    session: v,
  };
  const x = {
    where: w,
  };
  const y = await ap.findOne(x);
  const z = {
    session: v,
    plugins: "{}",
  };
  const A = {
    session: v,
    plugins: "{}",
  };
  return y ? await y.update(z) : (await ap.create(A), false);
};
exports.getConfig = async (m) =>
  !!(await ap.findOne({
    where: {
      session: m,
    },
  }));
const aq = {
  type: a9.STRING,
};
const ar = {
  type: a9.STRING,
};
function bt(m, p) {
  return k(m - 0x353, p);
}
ar.allowNull = false;
function bB(m, p) {
  return k(m - 0x133, p);
}
const as = {};
function k(a, b) {
  const c = h();
  k = function (d, e) {
    d = d - 339;
    let f = c[d];
    if (k.fbxLHq === undefined) {
      var g = function (m) {
        let o = "";
        let p = "";
        let q = o + g;
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
      k.zWaWur = g;
      a = arguments;
      k.fbxLHq = true;
    }
    const i = c[0];
    const j = d + i;
    const l = a[j];
    if (!l) {
      const m = function (n) {
        this.SZOVxk = n;
        this.LzwbRi = [1, 0, 0];
        this.zAumJC = function () {
          return "newState";
        };
        this.WPmLkV = "\\w+ *\\(\\) *{\\w+ *";
        this.nZTCXa = "['|\"].+['|\"];? *}";
      };
      m.prototype.OcCTbS = function () {
        const n = new RegExp(this.WPmLkV + this.nZTCXa);
        const o = n.test(this.zAumJC.toString())
          ? --this.LzwbRi[1]
          : --this.LzwbRi[0];
        return this.BINMha(o);
      };
      m.prototype.BINMha = function (n) {
        if (!Boolean(~n)) {
          return n;
        }
        return this.LgJzFz(this.SZOVxk);
      };
      m.prototype.LgJzFz = function (n) {
        let o = 0;
        for (let p = this.LzwbRi.length; o < p; o++) {
          this.LzwbRi.push(Math.round(Math.random()));
          p = this.LzwbRi.length;
        }
        return n(this.LzwbRi[0]);
      };
      new m(k).OcCTbS();
      f = k.zWaWur(f);
      a[j] = f;
    } else {
      f = l;
    }
    return f;
  };
  return k(a, b);
}
as.type = a9.STRING;
as.allowNull = false;
as.defaultValue = "0";
const at = {
  name: aq,
  jid: ar,
  session: as,
};
const au = aa.DATABASE.define("vcf", at);
exports.setContact = async (q, u) => {
  for (const v of q) {
    const { name: w, jid: x } = v;
    const y = await au.findOne({
      where: {
        jid: x,
        session: u,
      },
    });
    const z = {
      name: w,
      jid: x,
      session: u,
    };
    const A = {
      name: w,
      jid: x,
      session: u,
    };
    if (y) {
      await y.update(z);
    } else {
      await au.create(A);
    }
  }
  return q;
};
exports.getContact = async (w, x) => {
  if (w && "all" !== w) {
    const C = {
      jid: w,
      session: x,
    };
    const D = {
      where: C,
    };
    return await au.findOne(D);
  }
  const A = {
    session: x,
  };
  const B = {
    where: A,
  };
  return await au.findAll(B);
};
exports.delContact = async (w, x) => {
  const A = {
    session: x,
  };
  const B = {
    where: A,
  };
  if ("all" === w) {
    await au.destroy(B);
    return true;
  }
  const C = {
    jid: w,
    session: x,
  };
  const D = {
    where: C,
  };
  const E = await au.findOne(D);
  return !!E && (await E.destroy(), true);
};
