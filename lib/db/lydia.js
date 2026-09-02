const J = require('../../config');
const { DataTypes: K } = require('sequelize');
const L = J.DATABASE.define('lydia', {
  chat: {
    type: K.STRING,
    allowNull: false,
  },
  context: {
    type: K.TEXT,
    allowNull: false,
  },
  session: {
    type: K.STRING,
    allowNull: false,
    defaultValue: '0',
  },
});
const M = J.DATABASE.define('truecaller', {
  token: {
    type: K.STRING,
    allowNull: false,
  },
  num: {
    type: K.STRING,
    allowNull: false,
  },
});
const N = new Map();
exports.setLydia = async (q, u, v, w) => {
  const z = v || q;
  const A = q + '-' + z + '-' + w;
  N.delete(A);
  const B = {
    chat: q,
    session: w,
  };
  const C = {
    where: B,
  };
  let D = await L.findOne(C);
  const E = {
    chat: q,
    context: '{}',
    session: w,
  };
  D || (D = await L.create(E));
  const O = JSON.parse(D.context);
  if (false === u && (void 0 === O[z] || false === O[z])) {
    throw new Error('lydia not active on ' + z + '\n');
  }
  if (true === u && true === O[z]) {
    throw new Error('lydia already active on ' + z + '\n');
  }
  O[z] = u;
  await D.update({
    context: JSON.stringify(O),
    session: w,
  });
};
exports.getLydia = async (p, q, u) => {
  const x = u || p;
  const y = p + '-' + x + '-' + q;
  if (N.has(y)) {
    return N.get(y);
  }
  const z = {
    chat: p,
    session: q,
  };
  const A = {
    where: z,
  };
  const B = await L.findOne(A);
  if (!B) {
    N.set(y, false);
    return false;
  }
  const C = JSON.parse(B.context)[x] ?? false;
  N.set(y, C);
  return C;
};
exports.setTruecaller = async (k, l) => {
  const m = await M.findOne();
  const p = {
    token: k,
    num: l,
  };
  const q = {
    token: k,
    num: l,
  };
  if (m) {
    m.update(p);
  } else {
    await M.create(q);
  }
};
exports.getTruecaller = async (i) => {
  const j = await M.findOne();
  return i ? j && j.token : j && 'number : ' + j.num + '\ntoken : ' + j.token;
};
exports.delTruecaller = async () => {
  const i = await M.findOne();
  if (i) {
    await i.destroy();
    return true;
  } else {
    return i;
  }
};
