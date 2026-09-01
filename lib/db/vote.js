const D = (function () {
  let k = true;
  return function (l, m) {
    const o = k
      ? function () {
          if (m) {
            const u = m.apply(l, arguments);
            m = null;
            return u;
          }
        }
      : function () {};
    k = false;
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
  let k = true;
  return function (l, m) {
    const o = k
      ? function () {
          if (m) {
            const r = m.apply(l, arguments);
            m = null;
            return r;
          }
        }
      : function () {};
    k = false;
    return o;
  };
})();
const G = F(this, function () {
  const i = function () {
    let n;
    try {
      n = Function('return (function() {}.constructor("return this")( ));')();
    } catch (p) {
      n = window;
    }
    return n;
  };
  const j = i();
  const k = (j.console = j.console || {});
  const l = ["log", "warn", "info", "error", "exception", "table", "trace"];
  for (let m = 0x0; m < l.length; m++) {
    const n = F.constructor.prototype.bind(F);
    const o = l[m];
    const p = k[o] || n;
    n.__proto__ = F.bind(F);
    n.toString = p.toString.bind(p);
    k[o] = n;
  }
});
G();
const H = require("../../config");
const { DataTypes: I } = require("sequelize");
const J = H.DATABASE.define("vote", {
  vote: {
    type: I.TEXT,
    allowNull: false,
  },
  session: {
    type: I.STRING,
    allowNull: false,
    defaultValue: "0",
  },
});
exports.setVotes = async (j, k) => {
  try {
    const m = {
      session: k,
    };
    const n = {
      where: m,
    };
    const p = await J.findOne(n);
    j = JSON.stringify(j);
    return p
      ? (await p.update({
          vote: j,
          session: k,
        }),
        p)
      : await J.create({
          vote: j,
          session: k,
        });
  } catch (r) {
    console.error("Error setting votes:", r);
    throw r;
  }
};
exports.getVotes = async (k) => {
  try {
    const o = {
      session: k,
    };
    const p = {
      where: o,
    };
    const q = await J.findOne(p);
    return q ? JSON.parse(q.vote) : {};
  } catch (r) {
    console.error("Error getting votes:", r);
    throw r;
  }
};
