const H = require('../../config');
const { DataTypes: I } = require('sequelize');
const J = H.DATABASE.define('vote', {
  vote: {
    type: I.TEXT,
    allowNull: false,
  },
  session: {
    type: I.STRING,
    allowNull: false,
    defaultValue: '0',
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
    if (p) {
      await p.update({
        vote: j,
        session: k,
      });
      return p;
    } else {
      return await J.create({
        vote: j,
        session: k,
      });
    }
  } catch (r) {
    console.error('Error setting votes:', r);
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
    console.error('Error getting votes:', r);
    throw r;
  }
};
