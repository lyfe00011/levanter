const { DataTypes: Z, Op: a0 } = require('sequelize');
const a1 = require('../../config');
const a2 = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const a3 = a1.DATABASE.define('budget', {
  uid: {
    allowNull: !1,
    type: Z.STRING,
  },
  year: {
    allowNull: !1,
    type: Z.STRING,
  },
  month: {
    allowNull: !1,
    type: Z.STRING,
  },
  day: {
    allowNull: !1,
    type: Z.STRING,
  },
  type: {
    allowNull: !1,
    type: Z.STRING,
  },
  amount: {
    allowNull: !1,
    type: Z.FLOAT,
  },
  category: {
    allowNull: !1,
    type: Z.STRING,
  },
  remark: {
    allowNull: !1,
    type: Z.TEXT,
  },
});
let a4 = !1;
async function a5() {
  const m = {
    jmDmO: function (q, s) {
      return q !== s;
    },
    eZFFX: 'Dkfza',
    fzFql: 'CEWhY',
    tMuqT: 'budgets',
    NcjWd: function (q, s) {
      return q !== s;
    },
    hiOba: 'FLOAT',
    bHehN: function (q, s) {
      return q !== s;
    },
    uWYoU: 'REAL',
    MMDEG: 'DOUBLE PRECISION',
    uwmQB: 'amount',
  };
  const p = m;
  if (!a4) {
    if (p.jmDmO(p.eZFFX, p.fzFql)) {
      a4 = !0;
      try {
        const q = a1.DATABASE.getQueryInterface();
        const s = await q.describeTable(p.tMuqT);
        const v = {
          type: Z.FLOAT,
          allowNull: !1,
        };
        if (
          s.amount &&
          p.NcjWd(p.hiOba, s.amount.type) &&
          p.bHehN(p.uWYoU, s.amount.type) &&
          p.NcjWd(p.MMDEG, s.amount.type)
        ) {
          await q.changeColumn(p.tMuqT, p.uwmQB, v);
        }
      } catch (w) {}
    } else if (q) {
      const y = x.apply(y, arguments);
      z = null;
      return y;
    }
  }
}
async function a6(j, k) {
  const m = new Date();
  const p = a2[m.getMonth()];
  const q = m.getFullYear();
  const s = await a3.findAll({
    where: {
      uid: j,
      type: k,
      month: p,
      year: q,
    },
  });
  let v = 0;
  for (const w of s) {
    v += w.amount;
  }
  return v;
}
a3.afterSync(a5);
exports.detBudget = async function (m, p) {
  const q = {
    uid: m,
    id: p,
  };
  const s = {
    where: q,
  };
  const v = await a3.findAll(s);
  return !!v.length && (await v[0].destroy(), !0);
};
exports.setBudget = async function (k, m, q, v, w, x, z) {
  w = w ?? '';
  const B = new Date();
  const C = B.getDate();
  const D = x ?? a2[B.getMonth()];
  const E = z ?? B.getFullYear();
  const F = {
    uid: k,
    year: E,
    category: q,
    month: D,
    type: m,
    amount: v,
    day: C,
    remark: w,
  };
  await a3.create(F);
  return await a6(k, m);
};
exports.getBudget = async function (x, z, A, B, C) {
  const D = {
    DnNQI: function (H, I) {
      return H != I;
    },
    YEIaK: function (H, I) {
      return H + I;
    },
    XgjZz: function (H, I) {
      return H == I;
    },
    ERbzF: function (H, I) {
      return H >= I;
    },
    MEQiM: function (H, I) {
      return H == I;
    },
    Curar: function (H, I) {
      return H <= I;
    },
    GOyWk: function (H, I) {
      return H > I;
    },
    wxMBI: function (H, I) {
      return H != I;
    },
    MWhuK: function (H, I) {
      return H == I;
    },
    WQpeQ: function (H, I) {
      return H && I;
    },
    lYHEZ: function (H, I) {
      return H || I;
    },
    BQVEp: function (H, I) {
      return H + I;
    },
    ZpFII: function (H, I) {
      return H > I;
    },
    Kyloy: function (H, I) {
      return H - I;
    },
    kgzZO: function (H, I) {
      return H !== I;
    },
    BJNzw: 'ZxjWv',
    HMRQA: function (H, I) {
      return H == I;
    },
    boDaX: function (H, I) {
      return H < I;
    },
  };
  const E = D;
  const F = {};
  if (x) {
    F.uid = x;
  }
  if (C) {
    const [H, I, J] = C.from.split(' ');
    const [K, L, M] = C.to.split(' ');
    const N = E.BQVEp(I.charAt(0).toUpperCase(), I.slice(1));
    const O = E.BQVEp(L.charAt(0).toUpperCase(), L.slice(1));
    const P = a2.indexOf(N);
    const Q = a2.indexOf(O);
    let R = E.ZpFII(P, Q) ? E.Kyloy(P, Q) : E.Kyloy(Q, P);
    const S = R;
    if (E.GOyWk(R, 1)) {
      if (E.kgzZO(E.BJNzw, E.BJNzw)) {
        let a8 = G;
        const a9 = [];
        while (E.DnNQI(a8, E.YEIaK(U, 1))) {
          const ab = B[a8];
          if (ab) {
            a9.push(ab);
            a8++;
            C--;
          } else {
            a8 = 0;
          }
        }
        const aa = {
          [A.or]: a9,
        };
        z.month = aa;
      } else {
        let a8 = P;
        const a9 = [];
        while (E.wxMBI(a8, E.BQVEp(Q, 1))) {
          const ab = a2[a8];
          if (ab) {
            a9.push(ab);
            a8++;
            R--;
          } else {
            a8 = 0;
          }
        }
        const aa = {
          [a0.or]: a9,
        };
        F.month = aa;
      }
    } else {
      F.month = E.MWhuK(N, O)
        ? N
        : {
            [a0.or]: [N, O],
          };
    }
    F.year = E.HMRQA(J, M)
      ? M
      : {
          [a0.or]: [J, M],
        };
    const T = {
      where: F,
    };
    const U = await a3.findAll(T);
    if (E.boDaX(U.length, 1)) {
      return [];
    } else {
      return U.filter(function (ac) {
        const ad = E.XgjZz(ac.month, N) && E.ERbzF(ac.day, H);
        const ae = E.MEQiM(ac.month, O) && E.Curar(ac.day, K);
        if (E.GOyWk(S, 1)) {
          return E.wxMBI(ac.month, N) && E.DnNQI(ac.month, O);
        } else if (E.MWhuK(N, O)) {
          return E.WQpeQ(ad, ae);
        } else {
          return E.lYHEZ(ad, ae);
        }
      });
    }
  }
  if (z) {
    F.month = z;
  }
  if (A) {
    F.type = A;
  }
  if (B) {
    F.year = B;
  }
  const G = {
    where: F,
  };
  return await a3.findAll(G);
};
