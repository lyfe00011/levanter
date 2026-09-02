const { DataTypes: a4 } = require('sequelize');
const a5 = require('../../config');
const a6 = require('fs-extra');
const { join: a7 } = require('path');
const a8 = a5.DATABASE.define('men', {
  enabled: {
    type: a4.BOOLEAN,
  },
  text: {
    type: a4.TEXT,
  },
  session: {
    type: a4.STRING,
    allowNull: false,
    defaultValue: '0',
  },
});
const a9 = {};
const aa = async (q) => {
  if (q in a9) {
    return a9[q];
  }
  const x = {
    session: q,
  };
  const y = {
    where: x,
  };
  const z = await a8.findOne(y);
  if (z) {
    a9[q] = z.dataValues;
    return z.dataValues;
  } else {
    a9[q] = false;
    return false;
  }
};
exports.getMention = aa;
exports.mentionMessage = async (k) => (await aa(k))?.text;
exports.enableMention = async (p, q, v) => {
  const x = a7(__dirname, '../../media/mention');
  a6.existsSync(x) && a6.emptyDirSync(x);
  delete a9[q];
  if ('string' == typeof p) {
    const B = await aa(q);
    v = p;
    p = B?.enabled ?? true;
  }
  const y = {
    session: q,
  };
  const z = {
    where: y,
  };
  const A = await a8.findOne(z);
  return A
    ? await A.update({
        session: q,
        enabled: p,
        text: v || A.dataValues.text,
      })
    : await a8.create({
        enabled: p,
        text: v || 'Hi',
        session: q,
      });
};
const ab = {
  type: a4.STRING,
  allowNull: false,
  unique: 'compositeIndex',
};
const ac = {
  type: a4.STRING,
  allowNull: false,
  defaultValue: '0',
  unique: 'compositeIndex',
};
const ad = {
  uid: ab,
  session: ac,
};
const ae = a5.DATABASE.define('personalMessage', ad);
const af = async (k, m) =>
  !!(await ae.findOne({
    where: {
      uid: k,
      session: m,
    },
  }));
const ag = async (q, v) => {
  const w = {
    uid: q,
    session: v,
  };
  const x = {
    where: w,
  };
  const y = {
    uid: q,
    session: v,
  };
  (await ae.findOne(x)) || (await ae.create(y));
};
exports.getPmMessage = af;
exports.setPmMessage = ag;
