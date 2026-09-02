const { DataTypes: K } = require('sequelize');
const L = require('../../config');
const M = L.DATABASE.define('store_data', {
  key: {
    type: K.STRING,
    allowNull: false,
    unique: 'compositeIndex',
  },
  value: {
    type: K.TEXT,
    allowNull: false,
  },
  session: {
    type: K.STRING,
    allowNull: false,
    defaultValue: '0',
    unique: 'compositeIndex',
  },
});
const N = {};
function O(j) {
  try {
    return JSON.parse(j);
  } catch {
    return j;
  }
}
exports.setData = async function (o, p, q = '0') {
  const u = {
    key: o,
    session: q,
  };
  const v = {
    where: u,
  };
  const w = JSON.stringify(p);
  const x = await M.findOne(v);
  const y = {
    value: w,
  };
  const z = {
    key: o,
    value: w,
    session: q,
  };
  if (x) {
    await x.update(y);
  } else {
    await M.create(z);
  }
  N[q] || (N[q] = {});
  N[q][o] = p;
};
exports.getData = async function (o, p = '0') {
  if (o) {
    if (N[p] && void 0 !== N[p][o]) {
      return N[p][o];
    }
    const z = {
      key: o,
      session: p,
    };
    const A = {
      where: z,
    };
    const B = await M.findOne(A);
    if (B) {
      const C = O(B.value);
      N[p] || (N[p] = {});
      N[p][o] = C;
      return C;
    }
    return false;
  }
  if (N[p]) {
    return N[p];
  }
  const u = {
    session: p,
  };
  const v = {
    where: u,
  };
  const w = await M.findAll(v);
  const x = {};
  N[p] || (N[p] = {});
  w.forEach((D) => {
    const E = O(D.value);
    x[D.key] = E;
    N[p][D.key] = E;
  });
  return x;
};
exports.delData = async function (l, m = '0') {
  const o = {
    key: l,
    session: m,
  };
  const p = {
    where: o,
  };
  const q = await M.findOne(p);
  return !!q && (await q.destroy(), N[m] && delete N[m][l], true);
};
exports.StoreDB = M;
