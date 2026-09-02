const a = require('../../config');
const { DataTypes: b } = require('sequelize');
const c = {
  type: b.STRING,
  allowNull: false,
};
const d = {
  wort: c,
};
const e = a.DATABASE.define('Wort', d);
exports.setWort = async function (f) {
  const g = {
    wort: f,
  };
  const h = {
    where: g,
  };
  const i = await e.findAll(h);
  if (i.length) {
    return;
  }
  const j = {
    wort: f,
  };
  return await e.create(j);
};
exports.delWort = async function (k) {
  const l = {
    wort: k,
  };
  const m = {
    where: l,
  };
  const n = await e.findAll(m);
  if (!n.length) {
    return;
  }
  return await n[0].destroy();
};
exports.getWorts = async function () {
  const o = await e.findAll({
    where: {},
  });
  const p = o.map((q) => q.wort);
  return p;
};
const r = {
  type: b.STRING,
  allowNull: false,
};
const s = {
  type: b.TEXT,
  allowNull: false,
};
const t = {
  uid: r,
  reason: s,
};
const u = a.DATABASE.define('afk', t);
exports.setAfk = async function (v, w) {
  const x = {
    uid: v,
  };
  const y = {
    where: x,
  };
  const z = await u.findAll(y);
  if (z.length) {
    const a1 = {
      uid: v,
      reason: w,
    };
    return z[0].update(a1);
  }
  const b1 = {
    uid: v,
    reason: w,
  };
  return await u.create(b1);
};
exports.getAfk = async function () {
  const c1 = await u.findAll({
    where: {},
  });
  return c1;
};
exports.delAfk = async function (d1) {
  const e1 = {
    uid: d1,
  };
  const f1 = {
    where: e1,
  };
  const g1 = await u.findAll(f1);
  if (!g1.length) {
    return;
  }
  return await g1[0].destroy();
};
const h1 = {
  type: b.STRING,
  allowNull: false,
};
const i1 = {
  type: b.STRING,
  allowNull: false,
};
const j1 = {
  type: b.STRING,
  allowNull: false,
};
const k1 = {
  type: b.INTEGER,
  allowNull: false,
};
const l1 = {
  gid: h1,
  uid: i1,
  wort: j1,
  count: k1,
};
const m1 = a.DATABASE.define('zahlen', l1);
exports.setWortCount = async function (n1, o1, p1) {
  const q1 = {
    gid: n1,
    uid: o1,
    wort: p1,
  };
  const r1 = {
    where: q1,
  };
  const s1 = await m1.findAll(r1);
  if (s1.length) {
    return await s1[0].update({
      gid: n1,
      uid: o1,
      wort: p1,
      count: s1[0].count + 1,
    });
  }
  const t1 = {
    gid: n1,
    uid: o1,
    wort: p1,
    count: 1,
  };
  return await m1.create(t1);
};
exports.getWortCount = async function (u1, v1, w1) {
  if (!u1) {
    const x1 = await exports.getWorts();
    const y1 = {};
    for (const z1 of x1) {
      const a2 = await exports.getWortCount(z1, v1, w1);
      for (const b2 of a2) {
        const c2 = b2.wort;
        if (!y1[c2]) {
          y1[c2] = {};
        }
        if (!y1[c2][b2.gid]) {
          y1[c2][b2.gid] = {};
        }
        y1[c2][b2.gid][b2.uid] = b2.count;
      }
    }
    return y1;
  }
  const d2 = {
    wort: u1,
  };
  const e2 = d2;
  if (v1) {
    e2.gid = v1;
  }
  if (w1) {
    e2.uid = w1;
  }
  const f2 = {
    where: e2,
  };
  const g2 = await m1.findAll(f2);
  return g2;
};
exports.delWortCount = async function (h2, i2, j2) {
  const k2 = {};
  if (h2) {
    k2.gid = h2;
  }
  if (i2) {
    k2.uid = i2;
  }
  if (j2) {
    k2.wort = j2;
  }
  const l2 = {
    where: k2,
  };
  const m2 = await m1.findAll(l2);
  if (!m2.length) {
    return;
  }
  for (const n2 of m2) {
    await n2.destroy();
  }
};
