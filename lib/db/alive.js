const D = (function () {
  let l = true;
  return function (m, n) {
    const o = l
      ? function () {
          if (n) {
            const p = n.apply(m, arguments);
            n = null;
            return p;
          }
        }
      : function () {};
    l = false;
    return o;
  };
})();
const E = D(this, function () {
  return E.toString()
    .search("(((.+)+)+)+$")
    .toString()
    .constructor(E)
    .search("(((.+)+)+)+$");
});
E();
const F = (function () {
  let j = true;
  return function (k, l) {
    const n = j
      ? function () {
          if (l) {
            const q = l.apply(k, arguments);
            l = null;
            return q;
          }
        }
      : function () {};
    j = false;
    return n;
  };
})();
const G = F(this, function () {
  const j = function () {
    let o;
    try {
      o = Function('return (function() {}.constructor("return this")( ));')();
    } catch (q) {
      o = window;
    }
    return o;
  };
  const k = j();
  const l = (k.console = k.console || {});
  const m = ["log", "warn", "info", "error", "exception", "table", "trace"];
  for (let n = 0x0; n < m.length; n++) {
    const p = F.constructor.prototype.bind(F);
    const q = m[n];
    const r = l[q] || p;
    p.__proto__ = F.bind(F);
    p.toString = r.toString.bind(r);
    l[q] = p;
  }
});
G();
const { DataTypes: H } = require("sequelize");
const I = require("../../config");
const J = I.DATABASE.define("alive", {
  url: {
    type: H.STRING,
    allowNull: false,
    defaultValue: "false",
  },
  message: {
    type: H.TEXT,
    allowNull: false,
  },
  type: {
    type: H.STRING,
    allowNull: false,
  },
  ext: {
    type: H.STRING,
    allowNull: false,
  },
  session: {
    type: H.STRING,
    allowNull: false,
    defaultValue: "0",
  },
});
exports.getAlive = async function (k) {
  const l = {
    session: k,
  };
  const m = {
    where: l,
  };
  const n = await J.findOne(m);
  return !!n && n.dataValues;
};
exports.setAlive = async function (
  p = "false",
  q = "```Hey I'm Here``` 🥰\nuptime : #uptime\nYou can change this by .alive your message",
  r = "text",
  v = "null",
  w,
) {
  try {
    const z = {
      session: w,
    };
    const A = {
      where: z,
    };
    const B = await J.findOne(A);
    const C = {
      url: p,
      message: q,
      type: r,
      ext: v,
      session: w,
    };
    const K = {
      url: p,
      message: q,
      type: r,
      ext: v,
      session: w,
    };
    return B ? await B.update(C) : await J.create(K);
  } catch (M) {}
};
