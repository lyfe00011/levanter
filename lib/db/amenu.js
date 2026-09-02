const { DataTypes: X } = require('sequelize');
const Y = require('../../config');
const Z = require('../config');
const { LRUCache: a0 } = require('./nr');
const a1 = Y.DATABASE.define('amenu', {
  chat: {
    type: X.STRING,
    allowNull: !1,
  },
  cmd: {
    type: X.TEXT,
    allowNull: !1,
  },
  session: {
    type: X.STRING,
    allowNull: !1,
    defaultValue: '0',
  },
});
const a2 = new RegExp('\\b\\w+\\b', 'g');
const a3 = parseInt(process.env.AMENU_CACHE_SIZE) || 1000;
const a4 = parseInt(process.env.AMENU_CACHE_TTL) || 3600000;
const a5 = new a0(a3, a4);
setInterval(() => a5.cleanup(), 600000);
const a6 = {
  valid: !1,
  error: 'Command string too long (max 5000 characters)',
};
const a7 = {
  valid: !0,
};
const a8 = {
  valid: !1,
  error: 'Session must be a non-empty string',
};
const a9 = {
  valid: !1,
  error: 'Chat must be a non-empty string',
};
const aa = {
  valid: !1,
  error: 'Command must be a non-empty string',
};
const ab = (q, v) => q + '-' + v;
const ac = (q, v, w) =>
  q && typeof q == 'string' && q.trim().length !== 0
    ? v && typeof v == 'string' && v.trim().length !== 0
      ? w && typeof w == 'string'
        ? q.length > 5000
          ? a6
          : a7
        : a8
      : a9
    : aa;
const ad = (q) => {
  const v = q.match(a2) || [];
  return Array.from(new Set(v));
};
const ae = (q, v) => (Z[v] && Z[v].cammands ? q.filter((w) => !!Z[v].cammands[w]) : []);
exports.setAmenu = async (x, y, z) => {
  try {
    const B = ac(y, x, z);
    if (!B.valid) {
      return {
        error: B.error,
      };
    }
    a5.delete(ab(z, x));
    y = y.toLowerCase().trim();
    const C = {
      chat: x,
      session: z,
    };
    const D = {
      chat: x,
      cmd: '',
      session: z,
    };
    const E = {
      where: C,
      defaults: D,
    };
    const [F, G] = await a1.findOrCreate(E);
    let H = ad(y);
    H = ae(H, z);
    if (0 === H.length) {
      return {
        error: 'No valid commands provided',
        invalidCommands: ad(y),
      };
    }
    if (G) {
      await F.update({
        cmd: H.join(','),
      });
      return H;
    }
    const I = F.dataValues.cmd.split(',').filter(Boolean);
    const J = H.filter((L) => I.includes(L));
    if (J.length > 0) {
      return {
        error: 'Commands already added',
        duplicates: J,
        existing: I,
      };
    }
    const K = [...I, ...H];
    await F.update({
      cmd: K.join(','),
    });
    return H;
  } catch (L) {
    console.error('[AMENU DB] Error in setAmenu:', L.message);
    return {
      error: 'Database error: ' + L.message,
    };
  }
};
exports.delAmenu = async (x, y, z) => {
  try {
    const B = ac(y, x, z);
    if (!B.valid) {
      return {
        error: B.error,
      };
    }
    a5.delete(ab(z, x));
    y = y.toLowerCase().trim();
    const C = {
      chat: x,
      session: z,
    };
    const D = {
      where: C,
    };
    const E = await a1.findOne(D);
    const F = {
      error: 'No menu found for this group',
    };
    if (!E) {
      return F;
    }
    if ('all' === y || 'clear' === y) {
      await E.destroy();
      return 'all';
    }
    const G = E.dataValues.cmd.split(',').filter(Boolean);
    const H = new Set(ad(y));
    const I = G.filter((K) => !H.has(K));
    const J = G.filter((K) => H.has(K));
    if (0 === J.length) {
      return {
        error: 'Command not found',
        notFound: Array.from(H),
        existing: G,
      };
    } else {
      if (0 === I.length) {
        await E.destroy();
      } else {
        await E.update({
          cmd: I.join(','),
        });
      }
      return J;
    }
  } catch (K) {
    console.error('[AMENU DB] Error in delAmenu:', K.message);
    return {
      error: 'Database error: ' + K.message,
    };
  }
};
exports.getAmenu = async (w, x) => {
  const y = {
    eUnlo: function (z, A) {
      return z(A);
    },
    lrZed: function (z, A) {
      return z + A;
    },
    GovIV: 'return (function() ',
    BXJoK: '{}.constructor("return this")( )',
    frcoy: function (z, A) {
      return z !== A;
    },
    fInpP: 'fAwwt',
    AzfYE: 'IqtlZ',
    CrSaj: function (z, A) {
      return z || A;
    },
    aIswF: function (z, A, B) {
      return z(A, B);
    },
    qUews: function (z, A) {
      return z === A;
    },
    VKkBi: function (z, A) {
      return z === A;
    },
    LMDiv: 'VbBRK',
    QRNeG: function (z, A) {
      return z(A);
    },
    GrRla: function (z, A, B) {
      return z(A, B);
    },
    ShOBg: function (z, A) {
      return z !== A;
    },
    urNhS: 'hCeWe',
    yQdqh: 'neXVX',
    diECZ: '[AMENU DB] Error in getAmenu:',
  };
  try {
    if (y.frcoy(y.fInpP, y.AzfYE)) {
      if (y.CrSaj(!w, !x)) {
        return null;
      }
      const z = y.aIswF(ab, x, w);
      if (y.qUews(undefined, a5.get(z))) {
        if (y.VKkBi(y.LMDiv, y.LMDiv)) {
          const B = {
            chat: w,
            session: x,
          };
          const C = {
            where: B,
          };
          const D = await a1.findOne(C);
          const E = D && D.dataValues.cmd.length ? y.QRNeG(ad, D.dataValues.cmd) : null;
          a5.set(z, E);
        } else if (y) {
          const G = C.apply(D, arguments);
          E = null;
          return G;
        }
      }
      const A = a5.get(z);
      if (A && A.length) {
        return y.GrRla(ae, A, x);
      } else {
        return null;
      }
    } else {
      const H = C.constructor.prototype.bind(D);
      const I = E[F];
      const J = G[I] || H;
      H.__proto__ = H.bind(I);
      H.toString = J.toString.bind(J);
      J[I] = H;
    }
  } catch (H) {
    if (y.ShOBg(y.urNhS, y.yQdqh)) {
      console.error(y.diECZ, H.message);
      return null;
    } else {
      w = xZWUXc.eUnlo(x, xZWUXc.lrZed(xZWUXc.lrZed(xZWUXc.GovIV, xZWUXc.BXJoK), ');'))();
    }
  }
};
