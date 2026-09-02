const R = require('../../config');
const { DataTypes: S, Op: T } = require('sequelize');
const U = R.DATABASE.define('antiLink', {
  chat: {
    type: S.STRING,
    allowNull: !1,
  },
  context: {
    type: S.TEXT,
    allowNull: !1,
  },
  session: {
    type: S.STRING,
    allowNull: !1,
    defaultValue: '0',
  },
});
const V = R.DATABASE.define('antiWord', {
  chat: {
    type: S.STRING,
    allowNull: !1,
  },
  context: {
    type: S.TEXT,
    allowNull: !1,
  },
  session: {
    type: S.STRING,
    allowNull: !1,
    defaultValue: '0',
  },
});
const W = R.DATABASE.define('antiSpam', {
  chat: {
    type: S.STRING,
    allowNull: !1,
  },
  context: {
    type: S.TEXT,
    allowNull: !1,
  },
  session: {
    type: S.STRING,
    allowNull: !1,
    defaultValue: '0',
  },
});
const X = {
  antilink: {},
  spam: {},
  word: {},
};
const Y = (m) =>
  m
    .split(',')
    .map((p) => p.trim())
    .join(',');
function Z(p, q) {
  const u = {
    ngTpp: function (w, z) {
      return w || z;
    },
  };
  const v = u;
  return p + '-' + v.ngTpp(q, '0');
}
const a0 = (m) =>
  String(m.getDate()).padStart(2, '0') +
  '-' +
  String(m.getMonth() + 1).padStart(2, '0') +
  '-' +
  m.getFullYear();
exports.setSubscription = async (m, p, q = !0) => {
  const v = '120363400231018732@g.us-' + m;
  const w = await U.findOne({
    where: {
      chat: v,
      session: p,
    },
  });
  const x = 2592000000;
  let y;
  if (w) {
    if (!q) {
      return;
    }
    const z = JSON.parse(w.dataValues.context);
    const A = new Date(z.date);
    y = new Date(A.getTime() + x);
    await w.update({
      context: JSON.stringify({
        p: m,
        date: y.toISOString(),
      }),
    });
    return a0(y);
  }
  y = new Date(Date.now() + x);
  await U.create({
    chat: v,
    session: p,
    context: JSON.stringify({
      p: m,
      date: y.toISOString(),
    }),
  });
  return a0(y);
};
exports.delSubscription = async (m, p) => {
  const q = '120363400231018732@g.us-' + m;
  const u = await U.findOne({
    where: {
      chat: q,
      session: p,
    },
  });
  return !!u && (await u.destroy(), !0);
};
exports.getSubscription = async (v, w) => {
  const x = {
    bpYVq: '120363400231018732@g.us-%',
    FCkFS: function (D, E) {
      return D < E;
    },
  };
  const y = x;
  const z = {
    [T.like]: y.bpYVq,
  };
  const A = {
    session: v,
    chat: z,
  };
  const B = {
    where: A,
  };
  const C = await U.findAll(B);
  if (w) {
    const D = [];
    for (const E of C) {
      const F = JSON.parse(E.dataValues.context);
      if (y.FCkFS(new Date(F.date), new Date())) {
        D.push(E.dataValues.chat.split('-')[1]);
      }
    }
    return D;
  }
  return C;
};
exports.setAntiLink = async (u, v, w = '0', x = '1') => {
  const y = {
    gAWdF: function (H, I) {
      return H == I;
    },
    yYauq: 'boolean',
    Qeddz: function (H, I) {
      return H == I;
    },
    FxxaD: function (H, I) {
      return H === I;
    },
    WetOn: 'xJZgK',
    ZAKBy: 'null',
    IHDUC: function (H, I) {
      return H ?? I;
    },
    pfcbJ: function (H, I) {
      return H ?? I;
    },
  };
  const z = y;
  const A = w + '-' + x;
  delete X.antilink[A];
  const B = {
    chat: x,
    session: w,
  };
  const C = {
    where: B,
  };
  const D = await U.findOne(C);
  const E = z.gAWdF(z.yYauq, typeof v) ? v : undefined;
  const F = z.Qeddz(null, E) ? v : undefined;
  let G = {};
  if (D) {
    try {
      G = JSON.parse(D.context);
    } catch (H) {
      if (z.FxxaD(z.WetOn, z.WetOn)) {
        G = {};
      } else {
        v.antilink[w] = x.parse(y.context);
      }
    }
  }
  if (D) {
    Object.assign(G, {
      [u]: {
        enabled: E ?? G[u]?.enabled ?? false,
        action: F ?? G[u]?.action ?? z.ZAKBy,
        allowedUrls: G[u]?.allowedUrls ?? z.ZAKBy,
      },
    });
    return await D.update({
      chat: x,
      context: JSON.stringify(G),
      session: w,
    });
  } else {
    G = {
      [u]: {
        enabled: z.IHDUC(E, false),
        action: z.pfcbJ(F, z.ZAKBy),
        allowedUrls: z.ZAKBy,
      },
    };
    return await U.create({
      chat: x,
      session: w,
      context: JSON.stringify(G),
    });
  }
};
exports.getAntiLink = async (q, u = '0', v = '1') => {
  const x = u + '-' + v;
  if (!X.antilink[x]) {
    const z = {
      chat: v,
      session: u,
    };
    const A = {
      where: z,
    };
    const B = await U.findOne(A);
    if (!B) {
      X.antilink[x] = {};
      return !1;
    }
    try {
      X.antilink[x] = JSON.parse(B.context);
    } catch (C) {
      X.antilink[x] = {};
      return !1;
    }
  }
  return X.antilink[x][q] || !1;
};
exports.setAllowedUrl = async (x, y, z = '0', A = '1') => {
  const B = {
    ZivGY: function (H, I) {
      return H === I;
    },
    wbozZ: 'BvmDD',
    fOxmp: 'ITASg',
    dTZzH: function (H, I) {
      return H !== I;
    },
    ovuAD: 'TElKV',
    tPTyh: function (H, I) {
      return H !== I;
    },
    zXFOQ: 'ONTTF',
    emFnW: 'null',
  };
  const C = B;
  const D = z + '-' + A;
  delete X.antilink[D];
  const E = {
    chat: A,
    session: z,
  };
  const F = {
    where: E,
  };
  const G = await U.findOne(F);
  if (G) {
    if (C.ZivGY(C.wbozZ, C.fOxmp)) {
      u = v.parse(w.context);
    } else {
      let I = {};
      try {
        if (C.dTZzH(C.ovuAD, C.ovuAD)) {
          const a2 = x
            ? function () {
                if (a2) {
                  const a3 = H.apply(I, arguments);
                  J = null;
                  return a3;
                }
              }
            : function () {};
          C = false;
          return a2;
        } else {
          I = JSON.parse(G.context);
        }
      } catch (a2) {
        if (C.tPTyh(C.zXFOQ, C.zXFOQ)) {
          E = {};
        } else {
          I = {};
        }
      }
      const J = {
        enabled: !1,
        action: C.emFnW,
        allowedUrls: C.emFnW,
      };
      const K = I[x] || J;
      K.allowedUrls = y;
      I[x] = K;
      return await G.update({
        chat: A,
        context: JSON.stringify(I),
        session: z,
      });
    }
  }
  {
    const a4 = {
      enabled: !1,
      action: C.emFnW,
      allowedUrls: y,
    };
    const a5 = {
      [x]: a4,
    };
    const a6 = a5;
    return await U.create({
      chat: A,
      session: z,
      context: JSON.stringify(a6),
    });
  }
};
exports.setWord = async (w, x, y = '0', z = '1') => {
  const A = {
    yFJto: function (J, K) {
      return J == K;
    },
    mZEFU: 'boolean',
    xFJCn: function (J, K) {
      return J == K;
    },
    UcSRd: 'null',
    FGplt: function (J, K) {
      return J ?? K;
    },
    NsWpY: function (J, K) {
      return J ?? K;
    },
  };
  const B = A;
  const C = y + '-' + z;
  delete X.word[C];
  const D = {
    chat: z,
    session: y,
  };
  const E = {
    where: D,
  };
  const F = await V.findOne(E);
  const G = B.yFJto(B.mZEFU, typeof x) ? x : undefined;
  const H = B.xFJCn(null, G) ? x : undefined;
  let I = {};
  if (F) {
    try {
      I = JSON.parse(F.context);
    } catch (J) {
      I = {};
    }
  }
  if (F) {
    const K = {
      enabled: !1,
      action: B.UcSRd,
      words: '',
    };
    const a1 = I[w] || K;
    const a2 = {
      enabled: G ?? a1.enabled ?? !1,
      action: H ?? a1.action ?? B.UcSRd,
      words: a1.words ?? '',
    };
    I[w] = a2;
    return await F.update({
      chat: z,
      context: JSON.stringify(I),
      session: y,
    });
  }
  I = {
    [w]: {
      enabled: B.FGplt(G, !1),
      action: B.NsWpY(H, B.UcSRd),
      words: '',
    },
  };
  return await V.create({
    chat: z,
    session: y,
    context: JSON.stringify(I),
  });
};
exports.addWord = async (x, y, z = '0', A = '1') => {
  const C = z + '-' + A;
  delete X.word[C];
  const D = {
    chat: A,
    session: z,
  };
  const E = {
    where: D,
  };
  const F = await V.findOne(E);
  let G = {};
  if (F) {
    try {
      G = JSON.parse(F.context);
    } catch (a4) {
      G = {};
    }
  }
  const H = {
    enabled: !1,
    action: 'null',
    words: '',
  };
  const I = G[x] || H;
  const J = I.words ? I.words.split(',') : [];
  const K = y
    .split(',')
    .map((a5) => a5.trim())
    .filter((a5) => a5);
  const a1 = [...new Set([...J, ...K])].join(',');
  const a2 = {
    ...I,
  };
  a2.words = a1;
  G[x] = a2;
  if (F) {
    return await F.update({
      chat: A,
      context: JSON.stringify(G),
      session: z,
    });
  } else {
    return await V.create({
      chat: A,
      session: z,
      context: JSON.stringify(G),
    });
  }
};
exports.removeWord = async (x, y, z = '0', A = '1') => {
  const B = {
    ZvEOe: function (a3, a4) {
      return a3 !== a4;
    },
    woAtZ: 'pTetd',
    Ublhe: 'Ipjmg',
    DnQnG: function (a3, a4) {
      return a3 !== a4;
    },
    PmQjF: 'WqCtc',
    VAGOX: 'IRBsR',
  };
  const C = B;
  const D = z + '-' + A;
  delete X.word[D];
  const E = {
    chat: A,
    session: z,
  };
  const F = {
    where: E,
  };
  const G = await V.findOne(F);
  if (!G) {
    return;
  }
  let H = {};
  try {
    if (C.ZvEOe(C.woAtZ, C.Ublhe)) {
      H = JSON.parse(G.context);
    } else {
      E = {};
    }
  } catch (a4) {
    if (C.DnQnG(C.PmQjF, C.VAGOX)) {
      return;
    } else {
      K = a2.parse(a1.context);
    }
  }
  const I = H[x];
  if (!I) {
    return;
  }
  const J = I.words ? I.words.split(',') : [];
  const K = y.split(',').map((a6) => a6.trim());
  const a1 = J.filter((a6) => !K.includes(a6)).join(',');
  const a2 = {
    ...I,
  };
  a2.words = a1;
  H[x] = a2;
  return await G.update({
    chat: A,
    context: JSON.stringify(H),
    session: z,
  });
};
exports.getWord = async (u, v = '0', w = '1') => {
  const x = {
    heNlq: function (A, B) {
      return A || B;
    },
    lWgTo: function (A, B) {
      return A === B;
    },
    qgyBF: 'IAKcC',
    nQiNm: 'Qlheg',
  };
  const y = x;
  const z = v + '-' + w;
  if (!X.word[z]) {
    const A = {
      chat: w,
      session: v,
    };
    const B = {
      where: A,
    };
    const C = await V.findOne(B);
    if (!C) {
      X.word[z] = {};
      return !1;
    }
    try {
      if (y.lWgTo(y.qgyBF, y.nQiNm)) {
        return B + '-' + y.heNlq(u, '0');
      } else {
        X.word[z] = JSON.parse(C.context);
      }
    } catch (E) {
      X.word[z] = {};
      return !1;
    }
  }
  return X.word[z][u] || !1;
};
exports.setAntiSpam = async (w, x, y, z, A = '0', B = '1') => {
  const C = {
    GHvco: function (K, a1) {
      return K < a1;
    },
    CYbev: function (K, a1) {
      return K == a1;
    },
    xLGqs: 'boolean',
    ePaEG: function (K, a1) {
      return K === a1;
    },
    mcvQu: 'UGDWM',
    PHvse: 'YpXyG',
    qlApg: function (K, a1) {
      return K === a1;
    },
    zKRgN: 'nuXkB',
    hriTj: 'jXcAd',
    GTktL: 'medium',
    RQVUc: 'kick',
    Omjhw: function (K, a1) {
      return K !== a1;
    },
    EnCta: function (K, a1) {
      return K ?? a1;
    },
    XOZmI: function (K, a1) {
      return K || a1;
    },
    GfuPD: function (K, a1) {
      return K || a1;
    },
  };
  const D = C;
  const E = A + '-' + B;
  delete X.spam[E];
  const F = {
    chat: B,
    session: A,
  };
  const G = {
    where: F,
  };
  const H = await W.findOne(G);
  const I = D.CYbev(D.xLGqs, typeof x) ? x : undefined;
  let J = {};
  if (H) {
    try {
      if (D.ePaEG(D.mcvQu, D.PHvse)) {
        J = v.parse(w.context);
      } else {
        J = JSON.parse(H.context);
      }
    } catch (a1) {
      if (D.qlApg(D.zKRgN, D.hriTj)) {
        const a3 = x.parse(y.dataValues.context);
        if (D.GHvco(new z(a3.date), new A())) {
          B.push(C.dataValues.chat.split('-')[1]);
        }
      } else {
        J = {};
      }
    }
  }
  if (H) {
    const a3 = {
      enabled: !1,
      level: D.GTktL,
      action: D.RQVUc,
    };
    const a4 = J[w] || a3;
    Object.assign(J, {
      [w]: {
        enabled: D.Omjhw(undefined, I) ? I : a4.enabled,
        level: y || a4.level || D.GTktL,
        action: z || a4.action || D.RQVUc,
      },
    });
    return await H.update({
      chat: B,
      context: JSON.stringify(J),
      session: A,
    });
  }
  J = {
    [w]: {
      enabled: D.EnCta(I, !1),
      level: D.XOZmI(y, D.GTktL),
      action: D.GfuPD(z, D.RQVUc),
    },
  };
  return await W.create({
    chat: B,
    session: A,
    context: JSON.stringify(J),
  });
};
exports.getAntiSpam = async (w, x = '0', y = '1') => {
  const z = {
    JPMHP: function (D, E) {
      return D !== E;
    },
    sRHGh: 'xNixk',
    Jdkes: 'RsqJt',
    XkUMl: 'HmGYG',
    hucDj: 'zVKQr',
    qqnea: 'medium',
    XcWSE: 'kick',
    sAhak: 'yDXMv',
    GqfzZ: 'xlcdC',
    MPlxU: function (D, E) {
      return D || E;
    },
  };
  const A = z;
  const B = x + '-' + y;
  if (!X.spam[B]) {
    const D = {
      chat: y,
      session: x,
    };
    const E = {
      where: D,
    };
    const F = await W.findOne(E);
    if (!F) {
      X.spam[B] = {};
      return !1;
    }
    try {
      if (A.JPMHP(A.sRHGh, A.Jdkes)) {
        X.spam[B] = JSON.parse(F.context);
      } else if (v) {
        const H = z.apply(A, arguments);
        B = null;
        return H;
      }
    } catch (H) {
      if (A.JPMHP(A.XkUMl, A.hucDj)) {
        X.spam[B] = {};
        return !1;
      } else {
        D = {};
      }
    }
  }
  let C = X.spam[B][w];
  if (C && !C.level) {
    C = {
      enabled: C.enabled || !1,
      level: A.qqnea,
      action: A.XcWSE,
    };
    X.spam[B][w] = C;
    try {
      if (A.JPMHP(A.sAhak, A.GqfzZ)) {
        const J = {
          chat: y,
          session: x,
        };
        const K = {
          where: J,
        };
        const a1 = await W.findOne(K);
        if (a1) {
          await a1.update({
            context: JSON.stringify(X.spam[B]),
          });
        }
      } else {
        u = v.parse(w.context);
      }
    } catch (a3) {}
  }
  return A.MPlxU(C, !1);
};
exports.setAntiSpamLevel = async (v, w, x = '0', y = '1') => {
  const z = {
    vsLmA: function (I, J) {
      return I === J;
    },
    Uemxt: 'AcVVG',
    HMuyj: 'medium',
    kUnEN: 'kick',
    HeBIt: function (I, J) {
      return I || J;
    },
  };
  const A = z;
  const B = x + '-' + y;
  delete X.spam[B];
  const C = {
    chat: y,
    session: x,
  };
  const D = {
    where: C,
  };
  const E = await W.findOne(D);
  if (!E) {
    return await exports.setAntiSpam(v, !0, w, null, x, y);
  }
  let F = {};
  try {
    if (A.vsLmA(A.Uemxt, A.Uemxt)) {
      F = JSON.parse(E.context);
    } else {
      const J = x
        ? function () {
            if (J) {
              const a1 = H.apply(I, arguments);
              J = null;
              return a1;
            }
          }
        : function () {};
      C = false;
      return J;
    }
  } catch (J) {
    F = {};
  }
  const G = {
    enabled: !0,
    level: A.HMuyj,
    action: A.kUnEN,
  };
  const H = F[v] || G;
  F[v] = {
    ...H,
    level: A.HeBIt(w, A.HMuyj),
  };
  return await E.update({
    chat: y,
    context: JSON.stringify(F),
    session: x,
  });
};
exports.setAntiSpamAction = async (v, w, x = '0', y = '1') => {
  const z = {
    yEZbi: function (I, J) {
      return I !== J;
    },
    QUyQf: 'McvOX',
    qrdiY: 'BmWSy',
    mYkYI: 'medium',
    dkVKz: 'kick',
    Pzvcs: function (I, J) {
      return I || J;
    },
  };
  const A = z;
  const B = x + '-' + y;
  delete X.spam[B];
  const C = {
    chat: y,
    session: x,
  };
  const D = {
    where: C,
  };
  const E = await W.findOne(D);
  if (!E) {
    return await exports.setAntiSpam(v, !0, null, w, x, y);
  }
  let F = {};
  try {
    if (A.yEZbi(A.QUyQf, A.QUyQf)) {
      const K = z.constructor.prototype.bind(A);
      const a1 = B[C];
      const a2 = D[a1] || K;
      K.__proto__ = E.bind(F);
      K.toString = a2.toString.bind(a2);
      G[a1] = K;
    } else {
      F = JSON.parse(E.context);
    }
  } catch (J) {
    if (A.yEZbi(A.qrdiY, A.qrdiY)) {
      G = v.parse(w.context);
    } else {
      F = {};
    }
  }
  const G = {
    enabled: !0,
    level: A.mYkYI,
    action: A.dkVKz,
  };
  const H = F[v] || G;
  F[v] = {
    ...H,
    action: A.Pzvcs(w, A.dkVKz),
  };
  return await E.update({
    chat: y,
    context: JSON.stringify(F),
    session: x,
  });
};
exports.setSubscription = async (w, x = '0', y = !0) => {
  const z = {
    PlVuZ: function (I, J) {
      return I + J;
    },
    CNlMK: 'en-GB',
  };
  const A = z;
  const B = {
    chat: w,
    session: x,
  };
  const C = {
    where: B,
  };
  const D = await subscriptionDB.findOne(C);
  const E = new Date();
  E.setDate(A.PlVuZ(E.getDate(), 30));
  const F = E.toLocaleDateString(A.CNlMK);
  const G = {
    chat: w,
    message: F,
    session: x,
  };
  const H = {
    chat: w,
    session: x,
    message: F,
  };
  if (D) {
    return (await D.update(G)).message;
  } else {
    return (await subscriptionDB.create(H)).message;
  }
};
exports.getSubscription = async (q, u = '0') => {
  const v = {
    chat: q,
    session: u,
  };
  const w = {
    where: v,
  };
  const x = await subscriptionDB.findOne(w);
  return !!x && x.message;
};
