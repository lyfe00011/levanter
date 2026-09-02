const T = require('../../config');
const { DataTypes: U } = require('sequelize');
const V = T.DATABASE.define('cmdd', {
  cmd: {
    type: U.STRING,
    allowNull: false,
  },
  session: {
    type: U.STRING,
    allowNull: false,
    defaultValue: '0',
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
  if (v || 'off' != n) {
    'off' != n && v && v.destroy();
  } else {
    await V.create(w);
  }
};
