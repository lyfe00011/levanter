function p(a, b) {
  const c = k();
  p = function (d, e) {
    d = d - 249;
    let f = c[d];
    if (p.UPWMlF === undefined) {
      var g = function (l) {
        let n = "";
        let o = "";
        let q = n + g;
        let r = 0;
        let s;
        let t;
        for (
          let u = 0;
          (t = l.charAt(u++));
          ~t && ((s = r % 4 ? s * 64 + t : t), r++ % 4)
            ? (n +=
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
        let k = 0;
        for (let v = n.length; k < v; k++) {
          o += "%" + ("00" + n.charCodeAt(k).toString(16)).slice(-2);
        }
        return decodeURIComponent(o);
      };
      p.YVxlKf = g;
      a = arguments;
      p.UPWMlF = true;
    }
    const h = c[0];
    const i = d + h;
    const j = a[i];
    if (!j) {
      const l = function (m) {
        this.dfuTdO = m;
        this.wvvEoN = [1, 0, 0];
        this.jMttzA = function () {
          return "newState";
        };
        this.abfLIU = "\\w+ *\\(\\) *{\\w+ *";
        this.bxKcha = "['|\"].+['|\"];? *}";
      };
      l.prototype.PdRimU = function () {
        const m = new RegExp(this.abfLIU + this.bxKcha);
        const n = m.test(this.jMttzA.toString())
          ? --this.wvvEoN[1]
          : --this.wvvEoN[0];
        return this.cPzYlz(n);
      };
      l.prototype.cPzYlz = function (m) {
        if (!Boolean(~m)) {
          return m;
        }
        return this.XIBUcD(this.dfuTdO);
      };
      l.prototype.XIBUcD = function (m) {
        let n = 0;
        for (let o = this.wvvEoN.length; n < o; n++) {
          this.wvvEoN.push(Math.round(Math.random()));
          o = this.wvvEoN.length;
        }
        return m(this.wvvEoN[0]);
      };
      new l(p).PdRimU();
      f = p.YVxlKf(f);
      a[i] = f;
    } else {
      f = j;
    }
    return f;
  };
  return p(a, b);
}
(function (q, v) {
  const w = q();
  while (true) {
    try {
      const x =
        (-parseInt(m(485, "wX3o")) / 1) * (-parseInt(p(444, 0xbe)) / 2) +
        (parseInt(m(794, "Kc&M")) / 3) * (parseInt(p(317, 0x5c)) / 4) +
        -parseInt(m(641, "C0Ll")) / 5 +
        -parseInt(p(554, 0x615)) / 6 +
        (-parseInt(m(717, "i^5u")) / 7) * (parseInt(m(380, "[Qd5")) / 8) +
        -parseInt(p(818, 0x39f)) / 9 +
        (parseInt(m(643, "wX3o")) / 10) * (parseInt(p(270, 0x357)) / 11);
      if (x === v) {
        break;
      } else {
        w.push(w.shift());
      }
    } catch (y) {
      w.push(w.shift());
    }
  }
})(k, 651774);
function bx(q, v) {
  return m(v + 0x25d, q);
}
function bz(q, v) {
  return p(q + 0x10e, v);
}
const a5 = (function () {
  let q = true;
  return function (v, w) {
    const x = q
      ? function () {
          if (w) {
            const y = w.apply(v, arguments);
            w = null;
            return y;
          }
        }
      : function () {};
    q = false;
    return x;
  };
})();
function bw(q, v) {
  return m(v - 0x2f2, q);
}
function bt(q, v) {
  return p(q - 0x50, v);
}
const a6 = a5(this, function () {
  return a6
    .toString()
    .search("(((.+)+)+)+$")
    .toString()
    .constructor(a6)
    .search("(((.+)+)+)+$");
});
function bB(q, v) {
  return p(v + 0x65, q);
}
a6();
const a7 = (function () {
  const v = {
    KuDAF: "[NR DB] Error in zushi:",
    wraPm: function (z, A) {
      return z + A;
    },
  };
  v.rfNPo = "Database error: ";
  v.MpWDA = function (z, A) {
    return z !== A;
  };
  v.ixazK = "Bdcsv";
  v.iBYlw = "zOPKh";
  v.RztVy = function (z, A) {
    return z >= A;
  };
  v.cCzrJ = function (z, A) {
    return z !== A;
  };
  v.sfiVQ = "dInCY";
  let x = true;
  return function (y, z) {
    const A = {
      chyPE: function (B, C) {
        return v.RztVy(B, C);
      },
    };
    if (v.cCzrJ(v.sfiVQ, v.sfiVQ)) {
      if (this.cache.has(z)) {
        this.cache["delete"](A);
      }
      if (v.RztVy(this.cache.size, this.maxSize)) {
        const C = this.cache.keys().next().value;
        this.cache["delete"](C);
        this.stats.evictions++;
      }
      this.cache.set(B, {
        value: C,
        timestamp: D.now(),
      });
    } else {
      const C = x
        ? function () {
            const D = {
              HemLT: "[NR DB] Error in zushi:",
              gUzvG: function (E, F) {
                return E + F;
              },
              UDAQk: v.rfNPo,
            };
            if (z) {
              if (v.MpWDA(v.ixazK, v.iBYlw)) {
                const E = z.apply(y, arguments);
                z = null;
                return E;
              } else {
                x.error("[NR DB] Error in zushi:", y.message);
                return {
                  error: D.UDAQk + z.message,
                };
              }
            }
          }
        : function () {};
      x = false;
      return C;
    }
  };
})();
const a8 = a7(this, function () {
  let v;
  try {
    const y = Function('return (function() {}.constructor("return this")( ));');
    v = y();
  } catch (A) {
    v = window;
  }
  const w = (v.console = v.console || {});
  const x = ["log", "warn", "info", "error", "exception", "table", "trace"];
  for (let C = 0; C < x.length; C++) {
    const D = a7.constructor.prototype.bind(a7);
    const E = x[C];
    const F = w[E] || D;
    D.__proto__ = a7.bind(a7);
    D.toString = F.toString.bind(F);
    w[E] = D;
  }
});
a8();
function bs(q, v) {
  return p(q - 0x82, v);
}
const { DataTypes: a9 } = require("sequelize");
const aa = require("../../config");
const ab = require("../config");
const ac = aa.DATABASE.define("nr", {
  uid: {
    type: a9.STRING,
    allowNull: false,
  },
  cmd: {
    type: a9.TEXT,
    allowNull: false,
  },
  session: {
    type: a9.STRING,
    allowNull: false,
    defaultValue: "0",
  },
});
const ad = new RegExp("\\b\\w+\\b", "g");
const ae = parseInt(process.env.NR_CACHE_SIZE) || 1000;
const af = parseInt(process.env.NR_CACHE_TTL) || 3600000;
class ag {
  constructor(v, w) {
    const x = {
      hits: 0x0,
      misses: 0x0,
      evictions: 0x0,
    };
    this.maxSize = v;
    this.ttl = w;
    this.cache = new Map();
    this.stats = x;
  }
  ["get"](v) {
    const y = this.cache.get(v);
    if (y) {
      return Date.now() - y.timestamp > this.ttl
        ? (this.cache["delete"](v), void this.stats.misses++)
        : (this.cache["delete"](v),
          this.cache.set(v, y),
          this.stats.hits++,
          y.value);
    }
    this.stats.misses++;
  }
  ["set"](v, w) {
    if (this.cache.has(v)) {
      this.cache["delete"](v);
    }
    if (this.cache.size >= this.maxSize) {
      const z = this.cache.keys().next().value;
      this.cache["delete"](z);
      this.stats.evictions++;
    }
    this.cache.set(v, {
      value: w,
      timestamp: Date.now(),
    });
  }
  ["delete"](q) {
    return this.cache["delete"](q);
  }
  ["size"]() {
    return this.cache.size;
  }
  ["getStats"]() {
    return {
      ...this.stats,
      size: this.cache.size,
      hitRate: this.stats.hits / (this.stats.hits + this.stats.misses) || 0,
    };
  }
  ["cleanup"]() {
    const x = Date.now();
    for (const [y, z] of this.cache.entries())
      if (x - z.timestamp > this.ttl) {
        this.cache["delete"](y);
      }
  }
}
const ah = new ag(ae, af);
setInterval(() => ah.cleanup(), 600000);
const ai = {
  valid: false,
  error: "Command string too long (max 5000 characters)",
};
function bv(q, v) {
  return p(v + 0x29, q);
}
const aj = {
  valid: true,
};
const ak = {
  valid: false,
  error: "Session must be a non-empty string",
};
const al = {};
function by(q, v) {
  return m(v + 0x7c, q);
}
function bA(q, v) {
  return m(v - 0x139, q);
}
function m(a, b) {
  const c = k();
  m = function (d, e) {
    d = d - 249;
    let f = c[d];
    if (m.pSLaMg === undefined) {
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
        let k = 0;
        for (let w = p.length; k < w; k++) {
          q += "%" + ("00" + p.charCodeAt(k).toString(16)).slice(-2);
        }
        return decodeURIComponent(q);
      };
      const l = function (n, o) {
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
      m.flExDg = l;
      a = arguments;
      m.pSLaMg = true;
    }
    const h = c[0];
    const i = d + h;
    const j = a[i];
    if (!j) {
      if (m.tepRaj === undefined) {
        const n = function (o) {
          this.gjnoBn = o;
          this.DHodrj = [1, 0, 0];
          this.ZRublU = function () {
            return "newState";
          };
          this.sfRDDn = "\\w+ *\\(\\) *{\\w+ *";
          this.uldiFa = "['|\"].+['|\"];? *}";
        };
        n.prototype.BUExjc = function () {
          const o = new RegExp(this.sfRDDn + this.uldiFa);
          const p = o.test(this.ZRublU.toString())
            ? --this.DHodrj[1]
            : --this.DHodrj[0];
          return this.pGJJLt(p);
        };
        n.prototype.pGJJLt = function (o) {
          if (!Boolean(~o)) {
            return o;
          }
          return this.bHbWak(this.gjnoBn);
        };
        n.prototype.bHbWak = function (o) {
          let p = 0;
          for (let q = this.DHodrj.length; p < q; p++) {
            this.DHodrj.push(Math.round(Math.random()));
            q = this.DHodrj.length;
          }
          return o(this.DHodrj[0]);
        };
        new n(m).BUExjc();
        m.tepRaj = true;
      }
      f = m.flExDg(f, e);
      a[i] = f;
    } else {
      f = j;
    }
    return f;
  };
  return m(a, b);
}
al.valid = false;
al.error = "UID must be a non-empty string";
const am = {
  valid: false,
  error: "Command must be a non-empty string",
};
const an = (q, v) => q + "-" + v;
const ao = (q, v, w) =>
  q && "string" == typeof q && 0 !== q.trim().length
    ? v && "string" == typeof v && 0 !== v.trim().length
      ? w && "string" == typeof w
        ? q.length > 5000
          ? ai
          : aj
        : ak
      : al
    : am;
const ap = (q) => {
  const v = q.match(ad) || [];
  return Array.from(new Set(v));
};
const aq = (q, v) =>
  ab[v] && ab[v].cammands ? q.filter((w) => !!ab[v].cammands[w]) : [];
function bu(q, v) {
  return m(v - 0xf9, q);
}
exports.zushi = async (x, y, z) => {
  try {
    const C =
      x && "string" == typeof x && 0 !== x.trim().length
        ? y && "string" == typeof y && 0 !== y.trim().length
          ? z && "string" == typeof z
            ? x.length > 5000
              ? ai
              : aj
            : ak
          : al
        : am;
    if (!C.valid) {
      return {
        error: C.error,
      };
    }
    ah["delete"](z + "-" + y);
    x = x.toLowerCase().trim();
    const D = {
      uid: y,
      session: z,
    };
    const E = {
      uid: y,
      cmd: "",
      session: z,
    };
    const F = {
      where: D,
      defaults: E,
    };
    const [G, H] = await ac.findOrCreate(F);
    let I = ap(x);
    I = aq(I, z);
    if (0 === I.length) {
      return {
        error: "No valid commands provided",
        invalidCommands: ap(x),
      };
    }
    if (H) {
      await G.update({
        cmd: I.join(","),
      });
      return I;
    }
    const J = G.dataValues.cmd.split(",").filter(Boolean);
    const K = I.filter((M) => J.includes(M));
    if (K.length > 0) {
      return {
        error: "Commands already allowed",
        duplicates: K,
        existing: J,
      };
    }
    const L = [...J, ...I];
    await G.update({
      cmd: L.join(","),
    });
    return I;
  } catch (M) {
    console.error("[NR DB] Error in zushi:", M.message);
    return {
      error: "Database error: " + M.message,
    };
  }
};
exports.yami = async (y, z, A, B) => {
  try {
    if (!y || !z) {
      return null;
    }
    const D = z + "-" + y;
    const E = B ? z + "-" + B : null;
    if (E && undefined === ah.get(E) && B) {
      const F = {
        uid: B,
        session: z,
      };
      const G = {
        where: F,
      };
      const H = await ac.findOne(G);
      const I = H && H.dataValues.cmd.length ? ap(H.dataValues.cmd) : null;
      ah.set(E, I);
    }
    if (undefined === ah.get(D)) {
      const K = {
        uid: y,
        session: z,
      };
      const L = {
        where: K,
      };
      const M = await ac.findOne(L);
      const N = M && M.dataValues.cmd.length ? ap(M.dataValues.cmd) : null;
      ah.set(D, N);
    }
    if (A) {
      let O = [];
      const P = ah.get(D);
      const Q = E ? ah.get(E) : null;
      if (P) {
        O = [...P];
      }
      if (B && B !== y && Q) {
        O = [...O, ...Q];
      }
      return O.length ? new Set(O) : null;
    }
    return ah.get(D);
  } catch (R) {
    console.error("[NR DB] Error in yami:", R.message);
    return null;
  }
};
exports.ope = async (x, y, z) => {
  try {
    const C =
      y && "string" == typeof y && 0 !== y.trim().length
        ? x && "string" == typeof x && 0 !== x.trim().length
          ? z && "string" == typeof z
            ? y.length > 5000
              ? ai
              : aj
            : ak
          : al
        : am;
    if (!C.valid) {
      return {
        error: C.error,
      };
    }
    ah["delete"](z + "-" + x);
    y = y.toLowerCase().trim();
    const D = {
      uid: x,
      session: z,
    };
    const E = {
      where: D,
    };
    const F = await ac.findOne(E);
    const G = {
      error: "No commands found for this user/group",
    };
    if (!F) {
      return G;
    }
    if ("all" === y) {
      await F.destroy();
      return "all";
    }
    const H = F.dataValues.cmd.split(",").filter(Boolean);
    const I = new Set(ap(y));
    const J = H.filter((L) => !I.has(L));
    const K = H.filter((L) => I.has(L));
    return 0 === K.length
      ? {
          error: "Command not found",
          notFound: Array.from(I),
          existing: H,
        }
      : (0 === J.length
          ? await F.destroy()
          : await F.update({
              cmd: J.join(","),
            }),
        K);
  } catch (L) {
    console.error("[NR DB] Error in ope:", L.message);
    return {
      error: "Database error: " + L.message,
    };
  }
};
exports.getCacheStats = () => ah.getStats();
exports.LRUCache = ag;
function k() {
  const d2 = [
    "WQWkWRu",
    "hCoxW4W",
    "y2fJ",
    "WRv+W7a",
    "aXVcOG",
    "ymoZlq",
    "sevF",
    "jCkqW5C",
    "WQTWCa",
    "AgL0",
    "sWpdJa",
    "B24T",
    "Bwf0",
    "vwfo",
    "B19F",
    "nxKs",
    "tXuG",
    "whPJ",
    "Dg9t",
    "wdBdIq",
    "W57cVCoh",
    "jmk2FXfnWRSdC38U",
    "rgf0",
    "gmoNWOS",
    "tmkGxa",
    "sIFdNq",
    "DgvY",
    "lXbD",
    "bJCw",
    "d8orwW",
    "zeLU",
    "WOGOW64",
    "rSofqq",
    "W5VdTCoo",
    "BIb5",
    "p3VcLa",
    "W4ddOCkW",
    "D2HL",
    "mJy2ndm3nxv0BMjQra",
    "Agvt",
    "C2vX",
    "CJldUW",
    "WQf7aa",
    "W5JcQIm",
    "zu5c",
    "gCo0WPq",
    "ywXS",
    "xWtdJG",
    "zffg",
    "C2vH",
    "W7XDFG",
    "FXFdUW",
    "px4o",
    "fmorWOm",
    "W4RdVCos",
    "ywXY",
    "AgfZ",
    "bSoHBq",
    "Eca1",
    "WRFcLSkr",
    "C29S",
    "WQXGbG",
    "jgCy",
    "W6nbvG",
    "cg/dGq",
    "WR9HAW",
    "W5xcS8oB",
    "sCkXma",
    "amoXAW",
    "WPBcN28",
    "WRL/ba",
    "aCoXBa",
    "omoyDW",
    "EhDV",
    "WQe9W6y",
    "c8k3FG",
    "W5jZyq",
    "yMLU",
    "WQDOeq",
    "iu1W",
    "f8oMBq",
    "DhjH",
    "W4FdP8oy",
    "igXV",
    "gN/cPW",
    "fmo8WPm",
    "W4BdV8ot",
    "dxVcPW",
    "lM1E",
    "W6ToDa",
    "nti4ndKZohn2zeLYva",
    "cgdcRW",
    "iSk7WQy",
    "ysbU",
    "W51GtW",
    "BIb6",
    "WQuXga",
    "yKPZ",
    "hSoWWPe",
    "CM91",
    "D8ozvG",
    "aZBcLq",
    "gcLb",
    "wM5Z",
    "WOXmlq",
    "zxjY",
    "W4NcGmoh",
    "A2v5",
    "WO1dBa",
    "DCoBja",
    "dxFcVa",
    "u2L6",
    "nsSu",
    "WRrcW6a",
    "amofWRK",
    "WRlcUmke",
    "CCoOia",
    "b8oCWQC",
    "B3i6",
    "cvZcIa",
    "ew/dUG",
    "W6VdSCoE",
    "WQKtW7i",
    "xsbf",
    "mSoYWQO",
    "oa7cUa",
    "DtRdSW",
    "WQaHW6W",
    "DNVcLq",
    "y3rL",
    "bYax",
    "igeG",
    "W5VdGSkv",
    "ExbL",
    "rSocW7u",
    "EK9q",
    "z8ozuq",
    "fSo9W50",
    "WO43W7G",
    "WQ5oW7W",
    "DhFcNG",
    "Esyu",
    "oKfW",
    "g8o2WPm",
    "ierc",
    "B3qG",
    "FqyC",
    "kYKR",
    "DgfI",
    "wSoRWPG",
    "Dg9m",
    "WOvzBa",
    "grhcUa",
    "W5VcS8ow",
    "tM8G",
    "f0BcMq",
    "C8oisG",
    "Bgrw",
    "WQiXdW",
    "sGhdJa",
    "c8oAWQa",
    "bJCj",
    "W7H3zG",
    "E30U",
    "WOmnWOG",
    "F3/cJq",
    "ywRcMa",
    "zmoOnG",
    "Aw5M",
    "WRObWQi",
    "xIVdKG",
    "W6lcLCkb",
    "ksSK",
    "W5/dUmoy",
    "nColWPi",
    "ufD0",
    "rr7dIW",
    "u8kdW7/cUwldKSkIW53cQSkQbs3cQq",
    "pMrm",
    "jSkXoMbgWPOpBq",
    "DxbK",
    "C1r2",
    "cqvB",
    "WRJcNei",
    "yxjH",
    "WQP2AW",
    "EwfT",
    "mMNdHa",
    "ugT3",
    "rfvo",
    "cmoTWOq",
    "WPCQca",
    "AwqG",
    "ovrf",
    "hxnC",
    "fmoaWRK",
    "W5jQBq",
    "WQHWfa",
    "W5BdSSob",
    "WQb2W6C",
    "iSohWQW",
    "zgHn",
    "ASkbBG",
    "AgLZ",
    "W7P4WQW",
    "zcbT",
    "tuTW",
    "kcGO",
    "CCoirW",
    "CMnO",
    "mSonCq",
    "W4NcSru",
    "zs3dTG",
    "icHM",
    "W4VdSCoE",
    "W7nCCW",
    "z1v6",
    "vLvK",
    "EX8B",
    "zMLU",
    "WQ7cG8kv",
    "gCoPWO0",
    "gcrw",
    "m24p",
    "BYtdSG",
    "WQXNAG",
    "C1Ps",
    "Dvnd",
    "tJddKW",
    "v2fL",
    "Cw5r",
    "W5LHyG",
    "d0WZ",
    "zZNdPW",
    "yMuG",
    "D0Tv",
    "prbz",
    "yJ7dUa",
    "vevy",
    "w05s",
    "WRm5hW",
    "CNjV",
    "jSk/mW",
    "x19W",
    "EwjY",
    "D2BcMG",
    "txbx",
    "W4VdV8ot",
    "vuLe",
    "W6TvCa",
    "W5/cSva",
    "WR4tW4y",
    "WRKYW6S",
    "zmklifCbqCoKr8oeg8kjlmoR",
    "B25Z",
    "fIam",
    "d8klAq",
    "ze9Z",
    "W5/dPCkQ",
    "WRL4CW",
    "WP4ZW6y",
    "W5PJyG",
    "WRf6fW",
    "DhjV",
    "WRKpW7q",
    "iNjL",
    "WQOhWP0",
    "f8oDW4G",
    "uNP0",
    "WRNdRSka",
    "W4ldRvK",
    "sNv5",
    "DYTC",
    "C2v0",
    "WRb/uq",
    "WObywG",
    "WRyPgW",
    "ihrO",
    "o8krma",
    "ou3cQq",
    "WO1hnq",
    "Dgf0",
    "WRldVCkr",
    "W7xcGCkJ",
    "u2vZ",
    "W4VdSCoq",
    "WRpcGCkQ",
    "WRu5aq",
    "q0fd",
    "C3rH",
    "sNPn",
    "eIyC",
    "wmopCq",
    "WPCieq",
    "C3rY",
    "WRikWQC",
    "aJGD",
    "WPxdLSkU",
    "W49MyG",
    "WRyTWO0",
    "xY3dJW",
    "v2vv",
    "vfrm",
    "WRJdP8kP",
    "m3Ku",
    "s2rS",
    "yw51",
    "W4VdV8oq",
    "sSo2uW",
    "zfji",
    "zM91",
    "aSoAWQC",
    "jgOE",
    "rvaW",
    "w8kdW6y",
    "oSoxAG",
    "jMKC",
    "zNjV",
    "W4f+yG",
    "e8kwqq",
    "iIKO",
    "mCoyBq",
    "ENfm",
    "omoCAG",
    "owTN",
    "lmkRmW",
    "ofve",
    "cWtcVa",
    "CKOt",
    "srJdKG",
    "W61LWRZdUCk3emkSFXKBiCoA",
    "dg3dHq",
    "jeLO",
    "bHhcOG",
    "fHev",
    "WOTHyG",
    "zZ7dSW",
    "igjL",
    "y0n6",
    "A2nt",
    "zwfK",
    "v8klpq",
    "ALLN",
    "oHzt",
    "u1nL",
    "seDo",
    "nvXS",
    "p27dNa",
    "bmohWRS",
    "lISP",
    "qCouW6K",
    "qMrJ",
    "W7VdUCoh",
    "ySoYoa",
    "nJG4nZu4m1rSA25lCG",
    "W5BdOCkO",
    "WP8ZW7K",
    "AM9P",
    "C8kghq",
    "mGhcHW",
    "Bwf4",
    "frvo",
    "BM93",
    "C8krbG",
    "Bmo3ta",
    "hSoAWRKUm1m4W6eHdmoHW4ZdGW",
    "CMLU",
    "W7/cHmkw",
    "D2fY",
    "W6tcG8km",
    "dCoRWPm",
    "DbuB",
    "iwit",
    "ESkfFG",
    "B3iO",
    "W6HHEW",
    "W5RcPbW",
    "WQRdSCkn",
    "WRT5zG",
    "CComvG",
    "mJiXnZm1ntHezwjRwMC",
    "BwLZ",
    "WPSoWQa",
    "zSkbdG",
    "DwvS",
    "rmoYtq",
    "zMZcLG",
    "dCkHWRy",
    "xHldIa",
    "WQ/dSCkg",
    "WReHW7C",
    "zMLS",
    "tcZdOSoTW4rGENW6WOddKCk1fCo4",
    "WPy+yq",
    "WP/dJmkD",
    "zcbZ",
    "WRrGzW",
    "m0zX",
    "BwfU",
    "Dxn0",
    "W55sqa",
    "bcD5",
    "WRnsW4i",
    "zgvM",
    "BwvZ",
    "y29U",
    "ExjI",
    "W7PoBW",
    "Dmkxhq",
    "WRRcG8ka",
    "WQZcImkv",
    "ACkbjW",
    "W7/cSbW",
    "dICa",
    "WQX0W5a",
    "WQbSuG",
    "t095",
    "WR3cLmki",
    "oty5ndCXrKXZtMfX",
    "tmkwkW",
    "ed0r",
    "C3bS",
    "zxn0",
    "WPNcOSkeWPxdOmoSWOeZW6ZcJwONWRy",
    "C8kmgW",
    "wKnn",
    "y29T",
    "mtjVCxrsD1K",
    "C2fN",
    "DgLV",
    "ChjV",
    "AXes",
    "W4/cPbm",
    "rXtdKG",
    "tfjv",
    "umkbW6m",
    "z2v0",
    "cCouWRO",
    "W4VcOaq",
    "W4vZDa",
    "W7VcISkc",
    "WQ8+hG",
    "jSoCoq",
    "EwjM",
    "WOC5W5G",
    "Aw5N",
    "Au9N",
    "WQRcKSki",
    "CKHS",
    "W6xdSSoW",
    "u1fk",
    "yxvS",
    "wxrK",
    "pmkQEG",
    "ivHO",
    "hmo7Cq",
    "BgXV",
    "q29T",
    "CxpcNq",
    "WRfCpW",
    "z3rO",
    "W7XtCW",
    "zw52",
    "W79HzG",
    "bH/cGq",
    "W4xdTSkL",
    "l8k9zW",
    "y2H5",
    "C2zP",
    "pN7cUq",
    "WQuKeG",
    "WOCIeq",
    "WQjKuW",
    "ignO",
    "fCo4WPm",
    "DhrS",
    "WP3dTX8im21IxG",
    "W7BcGmoQ",
    "z3bN",
    "ze9U",
    "W4xdOCkG",
    "yCkkaq",
    "fblcLG",
    "yvzH",
    "WOqHWOy",
    "lW1g",
    "WP4ZW7m",
    "lI4V",
    "zhmG",
    "t09p",
    "kNJcMKPQW7nF",
    "WOddVCoC",
    "CMzo",
    "Chjx",
    "vNnb",
    "WRVdO8kz",
    "qwRcMa",
    "WRmNW60",
    "uwX0",
    "zgvS",
    "WO7dHmkF",
    "DxjU",
    "WQ/dRmki",
    "W5ZdOCk8",
    "DhjP",
    "dKpcMa",
    "ogzJyuLXzW",
    "cgTj",
    "W712ya",
    "u2L2",
    "u1rs",
    "bJmr",
    "Dg9V",
    "C2vZ",
    "FWqD",
    "WRb9hG",
    "DMfS",
    "yxrL",
    "AxHH",
    "wMHc",
    "zxrL",
    "WOJdImkm",
    "WOvMha",
    "CIbP",
    "ywDe",
    "C8ozvG",
    "vKfU",
    "yw1W",
    "y21K",
    "W75CzG",
    "qCkyW6q",
    "DwLK",
    "W6yuoq",
    "fepcMq",
    "cqdcPq",
    "iSo0WOO",
    "ESotvq",
    "BCkmbG",
    "Aw5J",
    "fYen",
    "c8o8WPW",
    "seXZ",
    "Dwn0",
    "aCoZsq",
    "k8oaWRa",
    "W6HuEa",
    "D1bt",
    "dtWw",
    "mZCZm21IAhrira",
    "CcVdUG",
    "bSoqWR0",
    "WPe4hW",
    "WOrZW5y",
    "C2uG",
    "mtzpBNjouwC",
    "zgf0",
    "jSonAW",
    "C2LV",
    "Amk1zG",
    "BhvL",
    "DhKG",
    "tCk0Aa",
    "hKhcJG",
    "CNmP",
    "EsbH",
    "zMLN",
    "BgvU",
    "qJ7cNq",
    "mtb2qMzdzgO",
    "FCoeCW",
    "CSoZpG",
    "eqDO",
    "WRi6W6K",
    "ihn0",
  ];
  k = function () {
    return d2;
  };
  return k();
}
