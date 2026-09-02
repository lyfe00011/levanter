const { DataTypes: H } = require('sequelize');
const I = require('../../config');
const J = I.DATABASE.define('alive', {
  url: {
    type: H.STRING,
    allowNull: false,
    defaultValue: 'false',
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
    defaultValue: '0',
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
  p = 'false',
  q = "```Hey I'm Here``` \uD83E\uDD70\nuptime : #uptime\nYou can change this by .alive your message",
  r = 'text',
  v = 'null',
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
