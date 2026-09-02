const { DataTypes: a9 } = require('sequelize');
const aa = require('../../config');
const ab = require('../config');
const ac = aa.DATABASE.define('nr', {
  uid: {
    type: a9.STRING,
    allowNull: !1,
  },
  cmd: {
    type: a9.TEXT,
    allowNull: !1,
  },
  session: {
    type: a9.STRING,
    allowNull: !1,
    defaultValue: '0',
  },
});
const ad = new RegExp('\\b\\w+\\b', 'g');
const ae = parseInt(process.env.NR_CACHE_SIZE) || 1000;
const af = parseInt(process.env.NR_CACHE_TTL) || 3600000;
class ag {
  constructor(v, w) {
    this.maxSize = v;
    this.ttl = w;
    this.cache = new Map();
    this.stats = {
      hits: 0,
      misses: 0,
      evictions: 0,
    };
  }
  get(v) {
    const w = {
      iOgLk: function (z, A) {
        return z > A;
      },
      DUNDo: function (z, A) {
        return z - A;
      },
    };
    const x = w;
    const y = this.cache.get(v);
    if (y) {
      if (x.iOgLk(x.DUNDo(Date.now(), y.timestamp), this.ttl)) {
        this.cache.delete(v);
        this.stats.misses++;
        return;
      } else {
        this.cache.delete(v);
        this.cache.set(v, y);
        this.stats.hits++;
        return y.value;
      }
    }
    this.stats.misses++;
  }
  set(v, w) {
    const x = {
      SivDi: function (z, A) {
        return z >= A;
      },
    };
    const y = x;
    if (this.cache.has(v)) {
      this.cache.delete(v);
    }
    if (y.SivDi(this.cache.size, this.maxSize)) {
      const z = this.cache.keys().next().value;
      this.cache.delete(z);
      this.stats.evictions++;
    }
    this.cache.set(v, {
      value: w,
      timestamp: Date.now(),
    });
  }
  delete(q) {
    return this.cache.delete(q);
  }
  size() {
    return this.cache.size;
  }
  getStats() {
    const v = {
      bJsPc: function (z, A) {
        return z / A;
      },
      GSzVZ: function (z, A) {
        return z + A;
      },
    };
    const w = v;
    return {
      ...this.stats,
      size: this.cache.size,
      hitRate: w.bJsPc(this.stats.hits, w.GSzVZ(this.stats.hits, this.stats.misses)) || 0,
    };
  }
  cleanup() {
    const v = {
      agDMA: function (z, A) {
        return z > A;
      },
      ZCMJQ: function (z, A) {
        return z - A;
      },
    };
    const w = v;
    const x = Date.now();
    for (const [y, z] of this.cache.entries()) {
      if (w.agDMA(w.ZCMJQ(x, z.timestamp), this.ttl)) {
        this.cache.delete(y);
      }
    }
  }
}
const ah = new ag(ae, af);
setInterval(() => ah.cleanup(), 600000);
const ai = {
  valid: !1,
  error: 'Command string too long (max 5000 characters)',
};
const aj = {
  valid: !0,
};
const ak = {
  valid: !1,
  error: 'Session must be a non-empty string',
};
const al = {
  valid: !1,
  error: 'UID must be a non-empty string',
};
const am = {
  valid: !1,
  error: 'Command must be a non-empty string',
};
const an = (q, v) => q + '-' + v;
const ao = (q, v, w) =>
  q && typeof q == 'string' && q.trim().length !== 0
    ? v && typeof v == 'string' && v.trim().length !== 0
      ? w && typeof w == 'string'
        ? q.length > 5000
          ? ai
          : aj
        : ak
      : al
    : am;
const ap = (q) => {
  const v = q.match(ad) || [];
  return Array.from(new Set(v));
};
const aq = (q, v) => (ab[v] && ab[v].cammands ? q.filter((w) => !!ab[v].cammands[w]) : []);
exports.zushi = async (x, y, z) => {
  const A = {
    qnQFU: function (B, C) {
      return B === C;
    },
    QTqNR: 'udJAf',
    ybrhu: 'Xzcjs',
    sZRNj: function (B, C, D, E) {
      return B(C, D, E);
    },
    ldVQH: function (B, C, D) {
      return B(C, D);
    },
    WeUHX: function (B, C) {
      return B(C);
    },
    uhIWW: function (B, C, D) {
      return B(C, D);
    },
    zgKWy: function (B, C) {
      return B === C;
    },
    uLJje: 'No valid commands provided',
    uupYE: function (B, C) {
      return B > C;
    },
    bdFAD: 'Commands already allowed',
    SSeGG: function (B, C) {
      return B === C;
    },
    kcSbh: 'MKpcd',
    wKULH: '[NR DB] Error in zushi:',
    SQJHH: function (B, C) {
      return B + C;
    },
    Ytddy: 'Database error: ',
  };
  try {
    if (A.qnQFU(A.QTqNR, A.ybrhu)) {
      w = x;
    } else {
      const C = A.sZRNj(ao, x, y, z);
      if (!C.valid) {
        return {
          error: C.error,
        };
      }
      ah.delete(A.ldVQH(an, z, y));
      x = x.toLowerCase().trim();
      const D = {
        uid: y,
        session: z,
      };
      const E = {
        uid: y,
        cmd: '',
        session: z,
      };
      const F = {
        where: D,
        defaults: E,
      };
      const [G, H] = await ac.findOrCreate(F);
      let I = A.WeUHX(ap, x);
      I = A.uhIWW(aq, I, z);
      if (A.zgKWy(0, I.length)) {
        return {
          error: A.uLJje,
          invalidCommands: A.WeUHX(ap, x),
        };
      }
      if (H) {
        await G.update({
          cmd: I.join(','),
        });
        return I;
      }
      const J = G.dataValues.cmd.split(',').filter(Boolean);
      const K = I.filter((M) => J.includes(M));
      if (A.uupYE(K.length, 0)) {
        return {
          error: A.bdFAD,
          duplicates: K,
          existing: J,
        };
      }
      const L = [...J, ...I];
      await G.update({
        cmd: L.join(','),
      });
      return I;
    }
  } catch (M) {
    if (A.SSeGG(A.kcSbh, A.kcSbh)) {
      console.error(A.wKULH, M.message);
      return {
        error: A.SQJHH(A.Ytddy, M.message),
      };
    } else {
      const O = A
        ? function () {
            if (O) {
              const P = K.apply(L, arguments);
              M = null;
              return P;
            }
          }
        : function () {};
      F = false;
      return O;
    }
  }
};
exports.yami = async (y, z, A, B) => {
  try {
    if (!y || !z) {
      return null;
    }
    const D = an(z, y);
    const E = B ? an(z, B) : null;
    if (E && undefined === ah.get(E) && B) {
      const F = {
        uid: B,
        session: z,
      };
      const G = {
        where: F,
      };
      const H = await ac.findOne(G);
      const I = H && H.dataValues.cmd.length ? ap(H.dataValues.cmd) : null;
      ah.set(E, I);
    }
    if (undefined === ah.get(D)) {
      const K = {
        uid: y,
        session: z,
      };
      const L = {
        where: K,
      };
      const M = await ac.findOne(L);
      const N = M && M.dataValues.cmd.length ? ap(M.dataValues.cmd) : null;
      ah.set(D, N);
    }
    if (A) {
      let O = [];
      const P = ah.get(D);
      const Q = E ? ah.get(E) : null;
      if (P) {
        O = [...P];
      }
      if (B && B !== y && Q) {
        O = [...O, ...Q];
      }
      if (O.length) {
        return new Set(O);
      } else {
        return null;
      }
    }
    return ah.get(D);
  } catch (R) {
    console.error('[NR DB] Error in yami:', R.message);
    return null;
  }
};
exports.ope = async (x, y, z) => {
  try {
    const C = ao(y, x, z);
    if (!C.valid) {
      return {
        error: C.error,
      };
    }
    ah.delete(an(z, x));
    y = y.toLowerCase().trim();
    const D = {
      uid: x,
      session: z,
    };
    const E = {
      where: D,
    };
    const F = await ac.findOne(E);
    const G = {
      error: 'No commands found for this user/group',
    };
    if (!F) {
      return G;
    }
    if ('all' === y) {
      await F.destroy();
      return 'all';
    }
    const H = F.dataValues.cmd.split(',').filter(Boolean);
    const I = new Set(ap(y));
    const J = H.filter((L) => !I.has(L));
    const K = H.filter((L) => I.has(L));
    if (0 === K.length) {
      return {
        error: 'Command not found',
        notFound: Array.from(I),
        existing: H,
      };
    } else {
      if (0 === J.length) {
        await F.destroy();
      } else {
        await F.update({
          cmd: J.join(','),
        });
      }
      return K;
    }
  } catch (L) {
    console.error('[NR DB] Error in ope:', L.message);
    return {
      error: 'Database error: ' + L.message,
    };
  }
};
exports.getCacheStats = () => ah.getStats();
exports.LRUCache = ag;
