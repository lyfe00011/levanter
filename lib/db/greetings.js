const F = (function () {
  let j = true;
  return function (k, l) {
    const o = j
      ? function () {
          if (l) {
            const q = l.apply(k, arguments);
            l = null;
            return q;
          }
        }
      : function () {};
    j = false;
    return o;
  };
})();
const G = F(this, function () {
  return G.toString()
    .search("(((.+)+)+)+$")
    .toString()
    .constructor(G)
    .search("(((.+)+)+)+$");
});
G();
const H = (function () {
  const j = {
    FKBLr: "(((.+)+)+)+$",
    wPwxa: function (m, o) {
      return m === o;
    },
    xCBAg: "cIImo",
    kBnCh: "DzZfw",
    BuXmf: function (m, o) {
      return m !== o;
    },
    KCeUw: "dEKbW",
    tvocq: function (m, o) {
      return m === o;
    },
    ebhmh: "KVOhY",
    LmFYX: "JUmWQ",
  };
  const k = j;
  let l = true;
  return function (m, o) {
    if (k.tvocq(k.ebhmh, k.LmFYX)) {
      if (m) {
        const q = r.apply(u, arguments);
        v = null;
        return q;
      }
    } else {
      const q = l
        ? function () {
            const r = {
              qJcCe: k.FKBLr,
            };
            if (k.wPwxa(k.xCBAg, k.kBnCh)) {
              k = l;
            } else {
              if (o) {
                if (k.BuXmf(k.KCeUw, k.KCeUw)) {
                  return k
                    .toString()
                    .search(r.qJcCe)
                    .toString()
                    .constructor(l)
                    .search(r.qJcCe);
                } else {
                  const x = o.apply(m, arguments);
                  o = null;
                  return x;
                }
              }
            }
          }
        : function () {};
      l = false;
      return q;
    }
  };
})();
const I = H(this, function () {
  const j = function () {
    let p;
    try {
      p = Function('return (function() {}.constructor("return this")( ));')();
    } catch (r) {
      p = window;
    }
    return p;
  };
  const k = j();
  const l = (k.console = k.console || {});
  const m = ["log", "warn", "info", "error", "exception", "table", "trace"];
  for (let o = 0x0; o < m.length; o++) {
    const p = H.constructor.prototype.bind(H);
    const q = m[o];
    const r = l[q] || p;
    p.__proto__ = H.bind(H);
    p.toString = r.toString.bind(r);
    l[q] = p;
  }
});
I();
const J = require("../../config");
const { DataTypes: K } = require("sequelize");
const L = {};
const M = J.DATABASE.define("Greeting", {
  chat: {
    type: K.STRING,
    allowNull: false,
  },
  type: {
    type: K.STRING,
    defaultValue: "welcome",
  },
  message: {
    type: K.TEXT,
    allowNull: false,
  },
  enabled: {
    type: K.BOOLEAN,
    allowNull: false,
  },
  session: {
    type: K.STRING,
    allowNull: false,
    defaultValue: "0",
  },
});
exports.getMessage = async function (m, p, q) {
  const u = m + "-" + p + "-" + q;
  if (L.hasOwnProperty(u)) {
    return L[u];
  }
  const v = {
    chat: m,
    type: p,
    session: q,
  };
  const w = {
    where: v,
  };
  const x = await M.findOne(w);
  return x ? ((L[u] = x.dataValues), x.dataValues) : ((L[u] = false), false);
};
exports.setMessage = async function (q, r, u, v = true, w) {
  try {
    const y = {
      chat: q,
      type: r,
      session: w,
    };
    const z = {
      where: y,
    };
    const A = await M.findOne(z);
    const B = {
      chat: q,
      type: r,
      message: u,
      enabled: v,
      session: w,
    };
    const C = {
      chat: q,
      type: r,
      message: u,
      enabled: v,
      session: w,
    };
    if (A) {
      await A.update(B);
    } else {
      await M.create(C);
    }
    L[q + "-" + r + "-" + w] = {
      chat: q,
      type: r,
      message: u,
      enabled: v,
      session: w,
    };
  } catch (E) {
    console.error(E);
  }
};
exports.deleteMessage = async function (k, m, p) {
  const r = {
    chat: k,
    type: m,
    session: p,
  };
  const u = {
    where: r,
  };
  const v = await M.findOne(u);
  if (v) {
    await v.destroy();
    delete L[k + "-" + m + "-" + p];
  }
};
