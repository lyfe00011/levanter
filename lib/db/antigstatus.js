const { DataTypes: Z } = require('sequelize');
const a0 = require('../../config');
const a1 = a0.DATABASE.define('groupstatus', {
  enabled: {
    type: Z.BOOLEAN,
    allowNull: false,
  },
  filter: {
    type: Z.STRING,
    allowNull: false,
  },
});
const a2 = (k) =>
  (k || '')
    .split(',')
    .map((m) => m.trim())
    .filter(Boolean);
const a3 = async ({ enabled: m, filter: o }) => {
  let u = await a1.findOne();
  if (u) {
    void 0 !== m && (u.enabled = m);
    void 0 !== o && (u.filter = o);
    await u.save();
  } else {
    u = await a1.create({
      enabled: void 0 === m || m,
      filter: o || '',
    });
  }
  return u;
};
const a4 = async () => {
  const o = {
    enabled: false,
    filter: '',
  };
  const p = (await a1.findOne()) || o;
  const q = p.dataValues || p;
  return {
    ...q,
    jids: a2(q.filter),
  };
};
const a5 = async (k) => {
  const o = a2(k);
  const p = await a4();
  const q = a2(p.filter);
  const u = Array.from(new Set([...q, ...o]));
  return await a3({
    filter: u.join(','),
  });
};
const a6 = async (k) => {
  const o = new Set(a2(k));
  const p = await a4();
  const q = a2(p.filter).filter((u) => !o.has(u));
  return await a3({
    filter: q.join(','),
  });
};
exports.setAntiGstatus = a3;
exports.getAntiGstatus = a4;
exports.addAntiGstatusFilter = a5;
exports.removeAntiGstatusFilter = a6;
