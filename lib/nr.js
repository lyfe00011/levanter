const { DataTypes: a0 } = require('sequelize');
const a1 = require('../../config');
const a2 = require('../config');
const a3 = a1.DATABASE.define('nr', {
  uid: {
    type: a0.STRING,
    allowNull: false,
  },
  cmd: {
    type: a0.TEXT,
    allowNull: false,
  },
  session: {
    type: a0.STRING,
    allowNull: false,
    defaultValue: '0',
  },
});
const a4 = new RegExp('\\b\\w+\\b', 'g');
const a5 = (k, m, o) => k + '-' + m;
const a6 = {};
const a7 = (k) => {
  const m = k.match(a4) || [];
  return Array.from(new Set(m));
};
const a8 = (k, m) => k.filter((o) => !!a2[m].cammands[o]);
exports.zushi = async (p, q, v) => {
  const x = {
    uid: q,
    session: v,
  };
  const y = {
    where: x,
  };
  const z = await a3.findOne(y);
  delete a6[a5(v, q)];
  p = p.toLowerCase();
  if (!z) {
    p = a7(p);
    p = a8(p, v);
    await a3.create({
      uid: q,
      cmd: p.join(','),
      session: v,
    });
    return p;
  }
  const A = z.dataValues.cmd.split(',');
  const B = new RegExp('(' + A.join('|') + ')', 'i');
  if (A.length > 1 && B.test(p)) {
    return null;
  } else {
    p = z.dataValues.cmd + (',' + p);
    p = a7(p);
    p = a8(p, v);
    await z.update({
      uid: q,
      cmd: p.join(','),
      session: v,
    });
    return p;
  }
};
exports.yami = async (q, v, w, x) => {
  const z = a5(v, q);
  const A = a5(v, x);
  if (!(A in a6) && x) {
    const B = {
      uid: x,
      session: v,
    };
    const C = {
      where: B,
    };
    const D = await a3.findOne(C);
    const E = D && D.dataValues.cmd.length ? a7(D.dataValues.cmd) : null;
    a6[A] = E;
  }
  if (!(z in a6)) {
    const G = {
      uid: q,
      session: v,
    };
    const H = {
      where: G,
    };
    const I = await a3.findOne(H);
    const J = I && I.dataValues.cmd.length ? a7(I.dataValues.cmd) : null;
    a6[z] = J;
  }
  if (w) {
    let K = [];
    a6[z] && (K = [...a6[z]]);
    x && x !== q && a6[A] && a6[A] && (K = [...K, ...a6[A]]);
    return K.length ? new Set(K) : null;
  }
  return a6[z];
};
exports.ope = async (p, q, v) => {
  delete a6[a5(v, p)];
  q = q.toLowerCase();
  const x = {
    uid: p,
    session: v,
  };
  const y = {
    where: x,
  };
  const z = await a3.findOne(y);
  if (!z) {
    return false;
  }
  if ('all' === q) {
    await z.destroy();
    return 'all';
  }
  const A = z.dataValues.cmd.split(',');
  const B = new Set(a7(q));
  const C = A.filter((E) => !B.has(E));
  const D = A.filter((E) => B.has(E));
  if (0 === D.length) {
    return null;
  } else {
    await z.update({
      uid: p,
      cmd: C.join(','),
      session: v,
    });
    return D;
  }
};
