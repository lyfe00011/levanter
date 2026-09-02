const K = require('../../config');
const { DataTypes: L } = require('sequelize');
const M = K.DATABASE.define('filter', {
  chat: {
    type: L.STRING,
    allowNull: false,
    unique: 'compositeIndex',
  },
  pattern: {
    type: L.TEXT,
    allowNull: false,
    unique: 'compositeIndex',
  },
  text: {
    type: L.TEXT,
    allowNull: false,
  },
  regex: {
    type: L.BOOLEAN,
    allowNull: false,
  },
  session: {
    type: L.STRING,
    allowNull: false,
    defaultValue: '0',
    unique: 'compositeIndex',
  },
});
const N = {};
const O = (j, k) => 'filter-' + j + '-' + k;
exports.setFilter = async (q, u, v, w, x) => {
  delete N[O(q, x)];
  const z = {
    chat: q,
    pattern: u,
    session: x,
  };
  const A = {
    where: z,
  };
  const B = await M.findOne(A);
  const C = {
    chat: q,
    pattern: u,
    text: v,
    regex: w,
    session: x,
  };
  const D = {
    chat: q,
    pattern: u,
    text: v,
    regex: w,
    session: x,
  };
  return B ? await B.update(C) : await M.create(D);
};
exports.getFilter = async (m, o) => {
  const q = O(m, o);
  if (q in N) {
    return N[q];
  }
  const r = {
    chat: m,
    session: o,
  };
  const u = {
    where: r,
  };
  const v = await M.findAll(u);
  if (v) {
    N[q] = v;
    return v;
  } else {
    N[q] = [];
    return [];
  }
};
exports.delFilter = async (m, o, p) => {
  const u = O(m, p);
  delete N[u];
  const v = {
    chat: m,
    pattern: o,
    session: p,
  };
  const w = {
    where: v,
  };
  const x = await M.findOne(w);
  return !!x && (await x.destroy());
};
