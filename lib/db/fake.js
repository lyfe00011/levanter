const W = require('../../config');
const { DataTypes: X } = require('sequelize');
const Y = W.DATABASE.define('fake', {
  chat: {
    type: X.STRING,
    allowNull: false,
    unique: 'compositeIndex',
  },
  enabled: {
    type: X.BOOLEAN,
    allowNull: false,
  },
  code: {
    type: X.TEXT,
    allowNull: false,
    defaultValue: '^(1|9944|64|62|7|44|92|48|52|36|60|65|972|33|56|49|38|51)',
  },
  session: {
    type: X.STRING,
    allowNull: false,
    defaultValue: '0',
    unique: 'compositeIndex',
  },
});
const Z = {};
const a0 = (j, k) => 'fake-' + j + '-' + k;
exports.getFake = async function (l, m) {
  const q = a0(l, m);
  if (Z.hasOwnProperty(q)) {
    return Z[q];
  }
  const r = {
    chat: l,
    session: m,
  };
  const u = {
    where: r,
  };
  const v = await Y.findOne(u);
  if (v) {
    const w = v.dataValues;
    Z[q] = w;
    return w;
  }
  Z[q] = false;
  return false;
};
exports.setFake = async function (p, q, r, u) {
  try {
    const x = {
      chat: p,
      session: u,
    };
    const y = {
      where: x,
    };
    const z = await Y.findOne(y);
    if (!z) {
      const B = {
        chat: p,
        enabled: q,
        code: r,
        session: u,
      };
      const C = await Y.create(B);
      Z[a0(p, u)] = C.dataValues;
      return C;
    }
    const A = await z.update({
      chat: p,
      enabled: q,
      code: void 0 !== r ? r : z.dataValues.code,
      session: u,
    });
    Z[a0(p, u)] = A.dataValues;
    return A;
  } catch (D) {
    console.error(D);
  }
};
exports.addCode = async function (v, x, y) {
  const A = {
    chat: v,
    session: y,
  };
  const B = {
    where: A,
  };
  const C = await Y.findOne(B);
  let D = '^(1|9944|64|62|7|44|92|48|52|36|60|65|972|33|56|49|38|51)';
  let E = false;
  C && ((D = C.code), (E = C.enabled));
  let F = [];
  const G = D.match(/\^\((.*)\)/);
  G && (F = G[1].split('|'));
  const H = x
    .split(',')
    .map((M) => M.trim())
    .filter((M) => M);
  const I = F.some((M) => M.startsWith('!'));
  const J = H.some((M) => M.startsWith('!'));
  const K = H.some((M) => !M.startsWith('!'));
  if (F.length > 0) {
    if (I && K) {
      return null;
    }
    if (!I && J) {
      return null;
    }
  }
  const L = '^(' + [...new Set([...F, ...H])].join('|') + ')';
  if (C) {
    const O = {
      code: L,
    };
    const P = await C.update(O);
    Z[a0(v, y)] = P.dataValues;
    return P;
  }
  {
    const R = {
      chat: v,
      enabled: E,
      code: L,
      session: y,
    };
    const a1 = await Y.create(R);
    Z[a0(v, y)] = a1.dataValues;
    return a1;
  }
};
exports.removeCode = async function (m, p, q) {
  const w = {
    chat: m,
    session: q,
  };
  const x = {
    where: w,
  };
  const y = await Y.findOne(x);
  if (!y) {
    return;
  }
  let z = [];
  const A = y.code.match(/\^\((.*)\)/);
  A && (z = A[1].split('|'));
  const B = p.split(',').map((F) => F.trim());
  const C = z.filter((F) => !B.includes(F));
  const D = C.length > 0 ? '^(' + C.join('|') + ')' : '';
  const E = await y.update({
    code: D,
  });
  Z[a0(m, q)] = E.dataValues;
  return E;
};
