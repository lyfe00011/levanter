const { DataTypes: aa } = require('sequelize');
let ab;
const ac = {
  type: aa.STRING,
  unique: 'compositeIndex',
};
const ad = {
  type: aa.TEXT,
};
const ae = {
  type: aa.STRING,
  allowNull: !1,
  defaultValue: '0',
  unique: 'compositeIndex',
};
const af = {
  type: ac,
  value: ad,
  session: ae,
};
const ag = {
  type: aa.STRING,
  unique: 'compositeIndex',
};
const ah = {
  type: aa.TEXT,
};
const ai = {
  type: aa.STRING,
  allowNull: !1,
  defaultValue: '0',
  unique: 'compositeIndex',
};
const aj = {
  type: ag,
  value: ah,
  session: ai,
};
const ak = {
  type: aa.STRING,
  unique: 'compositeIndex',
};
const al = {
  type: aa.TEXT,
};
const am = {
  type: aa.STRING,
  allowNull: !1,
  defaultValue: '0',
  unique: 'compositeIndex',
};
const an = {
  type: ak,
  value: al,
  session: am,
};
const ao = require('../../config');
const ap = ao.DATABASE.define('wakey', af);
const aq = ao.DATABASE.define('wacred', aj);
const ar = ao.DATABASE.define('gauth', an);
const as = {
  where: {},
};
exports.getCount = async () => {
  const m = {
    count: 0,
  };
  try {
    m.count = await ap.count();
  } catch (o) {}
  return m;
};
exports.setCreds = async (u, v, w) => {
  ab ||= (await require('../baileys').loadBaileys()).BufferJSON;
  const y = {
    type: 'wacreds',
    session: v,
  };
  const z = {
    where: y,
    transaction: w,
  };
  const A = JSON.stringify(u, ab.replacer);
  const B = await aq.findOne(z);
  const C = {
    value: A,
  };
  const D = {
    transaction: w,
  };
  const E = {
    type: 'wacreds',
    session: v,
    value: A,
  };
  const F = {
    transaction: w,
  };
  if (B) {
    await B.update(C, D);
  } else {
    await aq.create(E, F);
  }
};
exports.getCreds = async (m) => {
  ab ||= (await require('../baileys').loadBaileys()).BufferJSON;
  const p = {
    type: 'wacreds',
    session: m,
  };
  const q = {
    where: p,
  };
  const r = await aq.findOne(q);
  if (r) {
    return JSON.parse(r.dataValues.value, ab.reviver);
  }
};
exports.deleteCreds = async (k) =>
  await aq.destroy({
    where: {
      session: k,
    },
  });
exports.getKeys = async (k, l, m) => {
  ab ||= (await require('../baileys').loadBaileys()).BufferJSON;
  const p = '' + k + l;
  const q = await ap.findOne({
    where: {
      type: p,
      session: m,
    },
  });
  if (q) {
    return JSON.parse(q.dataValues.value, ab.reviver);
  } else {
    return null;
  }
};
exports.setKeys = async (v, w, x, y, z) => {
  ab ||= (await require('../baileys').loadBaileys()).BufferJSON;
  const B = '' + v + w;
  const C = JSON.stringify(x, ab.replacer);
  const D = await ap.findOne({
    where: {
      type: B,
      session: y,
    },
    transaction: z,
  });
  const E = {
    value: C,
  };
  const F = {
    transaction: z,
  };
  const G = {
    type: B,
    session: y,
    value: C,
  };
  const H = {
    transaction: z,
  };
  if (D) {
    await D.update(E, F);
  } else {
    await ap.create(G, H);
  }
};
exports.delKeys = async (k, l, m) => {
  const o = '' + k + l;
  const p = await ap.findOne({
    where: {
      type: o,
      session: m,
    },
  });
  if (p) {
    await p.destroy();
  }
};
exports.deleteKeys = async (k) =>
  await ap.destroy({
    where: {
      session: k,
    },
  });
exports.restoreKeys = async () => await ap.findAll(as);
exports.setGAuth = async (p, q, r) => {
  const u = {
    type: p,
    session: r,
  };
  const v = {
    where: u,
  };
  const w = JSON.stringify(q);
  const x = await ar.findOne(v);
  const y = {
    value: w,
  };
  const z = {
    type: p,
    session: r,
    value: w,
  };
  if (x) {
    await x.update(y);
  } else {
    await ar.create(z);
  }
};
exports.getGAuth = async (m, o) => {
  const p = {
    type: m,
    session: o,
  };
  const q = {
    where: p,
  };
  const r = await ar.findOne(q);
  if (r) {
    return JSON.parse(r.dataValues.value);
  } else {
    return null;
  }
};
exports.deleteGAuth = async (k) =>
  await ar.destroy({
    where: {
      session: k,
    },
  });
exports.KeysDB = ap;
exports.CredsDB = aq;
exports.GAuthDB = ar;
