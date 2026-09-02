const U = require('../../config');
const { DataTypes: V } = require('sequelize');
const W = U.DATABASE.define('warn', {
  jid: {
    type: V.STRING,
    allowNull: false,
    unique: 'compositeIndex',
  },
  chat: {
    type: V.STRING,
    allowNull: false,
    unique: 'compositeIndex',
  },
  count: {
    type: V.INTEGER,
  },
  session: {
    type: V.STRING,
    allowNull: false,
    defaultValue: '0',
    unique: 'compositeIndex',
  },
});
exports.getWarnCount = async (k, l, m) => {
  const o = {
    jid: k,
    chat: l,
    session: m,
  };
  const p = {
    where: o,
  };
  const q = await W.findOne(p);
  return !!q && q.count;
};
exports.setWarn = async (l, m, p, q, r = 1) => {
  const v = {
    jid: l,
    chat: m,
    session: p,
  };
  const w = {
    where: v,
  };
  const x = await W.findOne(w);
  if (x) {
    r = isNaN(r) ? 1 : r;
    q - (r = Math.max(x.count + r, 0)) >= 0 &&
      (await x.update({
        count: r,
        session: p,
      }));
    return r;
  } else {
    await W.create({
      jid: l,
      chat: m,
      count: 1,
      session: p,
    });
    return 1;
  }
};
exports.deleteWarn = async (k, l, m) => {
  const o = {
    jid: k,
    chat: l,
    session: m,
  };
  const p = {
    where: o,
  };
  await W.destroy(p);
};
