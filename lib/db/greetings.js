const J = require('../../config');
const { DataTypes: K } = require('sequelize');
const L = {};
const M = J.DATABASE.define('Greeting', {
  chat: {
    type: K.STRING,
    allowNull: false,
  },
  type: {
    type: K.STRING,
    defaultValue: 'welcome',
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
    defaultValue: '0',
  },
});
const N = (i, j, k) => i + '-' + j + '-' + k;
exports.getMessage = async function (m, p, q) {
  const u = N(m, p, q);
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
  if (x) {
    L[u] = x.dataValues;
    return x.dataValues;
  } else {
    L[u] = false;
    return false;
  }
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
    L[N(q, r, w)] = {
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
  v && (await v.destroy(), delete L[N(k, m, p)]);
};
