const P = (function () {
  let k = true;
  return function (l, m) {
    const o = k
      ? function () {
          if (m) {
            const q = m.apply(l, arguments);
            m = null;
            return q;
          }
        }
      : function () {};
    k = false;
    return o;
  };
})();
const Q = P(this, function () {
  return Q.toString()
    .search("(((.+)+)+)+$")
    .toString()
    .constructor(Q)
    .search("(((.+)+)+)+$");
});
Q();
const R = (function () {
  let i = true;
  return function (j, k) {
    const n = i
      ? function () {
          if (k) {
            const p = k.apply(j, arguments);
            k = null;
            return p;
          }
        }
      : function () {};
    i = false;
    return n;
  };
})();
const S = R(this, function () {
  let i;
  try {
    const m = Function('return (function() {}.constructor("return this")( ));');
    i = m();
  } catch (n) {
    i = window;
  }
  const j = (i.console = i.console || {});
  const k = ["log", "warn", "info", "error", "exception", "table", "trace"];
  for (let p = 0x0; p < k.length; p++) {
    const r = R.constructor.prototype.bind(R);
    const u = k[p];
    const v = j[u] || r;
    r.__proto__ = R.bind(R);
    r.toString = v.toString.bind(v);
    j[u] = r;
  }
});
S();
const T = require("../../config");
const { DataTypes: U } = require("sequelize");
const V = T.DATABASE.define("cmdd", {
  cmd: {
    type: U.STRING,
    allowNull: false,
  },
  session: {
    type: U.STRING,
    allowNull: false,
    defaultValue: "0",
  },
});
exports.getCmdState = async (h, i) =>
  !(await V.findOne({
    where: {
      cmd: h,
      session: i,
    },
  }));
exports.setCmdState = async (m, n, o) => {
  const r = {
    cmd: m,
    session: o,
  };
  const u = {
    where: r,
  };
  const v = await V.findOne(u);
  const w = {
    cmd: m,
    session: o,
  };
  if (v || "off" != n) {
    if ("off" != n && v) {
      v.destroy();
    }
  } else {
    await V.create(w);
  }
};
