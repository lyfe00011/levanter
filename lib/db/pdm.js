const { DataTypes: al, Sequelize: am, Op: an } = require('sequelize');
const ao = require('path');
const ap = require('../../config');
const { existsSync: aq, rmSync: ar } = require('fs');
const as = {};
const at = ap.DATABASE.define('pdm', {
  chat: {
    type: al.STRING,
    allowNull: !1,
    unique: 'compositeIndex',
  },
  enabled: {
    type: al.BOOLEAN,
    allowNull: !1,
  },
  session: {
    type: al.STRING,
    allowNull: !1,
    defaultValue: '0',
    unique: 'compositeIndex',
  },
});
const au = (x, z) => 'pdm-' + x + z;
exports.getPdm = async function (A, B) {
  const D = au(A, B);
  if (as.hasOwnProperty(D)) {
    return as[D];
  }
  const E = {
    chat: A,
    session: B,
  };
  const F = {
    where: E,
  };
  const G = await at.findOne(F);
  const H = !!G && G.dataValues?.enabled;
  as[D] = H;
  return H;
};
exports.setPdm = async function (A, B, C) {
  const E = {
    chat: A,
    session: C,
  };
  const F = {
    where: E,
  };
  const G = await at.findOne(F);
  if (G) {
    await G.update({
      chat: A,
      enabled: 'on' == B,
      session: C,
    });
  } else {
    await at.create({
      chat: A,
      enabled: 'on' == B,
      session: C,
    });
  }
  as[au(A, C)] = 'on' == B;
};
const av = ao.join(__dirname, '../../messages.db');
if (aq(av)) {
  ar(av);
}
const aw = {
  dialect: 'sqlite',
  storage: av,
  logging: !1,
};
const ax = {
  type: al.STRING,
  allowNull: !1,
};
const ay = {
  type: al.TEXT,
  allowNull: !1,
};
const az = {
  type: al.BOOLEAN,
  defaultValue: !1,
};
const aA = {
  mid: ax,
  m: ay,
  delete: az,
};
const aB = new am(aw);
const aC = aB.define('message', aA);
exports.setTMessage = async function (C, D, E) {
  const F = {
    SGicC: function (K, L) {
      return K !== L;
    },
    CrTxN: 'QwyNv',
  };
  const G = F;
  const H = {
    mid: C,
  };
  const I = {
    where: H,
  };
  const J = await aC.findOne(I);
  if (E) {
    if (J) {
      await J.destroy();
    }
  } else if (!J) {
    if (G.SGicC(G.CrTxN, G.CrTxN)) {
      if (C) {
        const L = G.apply(H, arguments);
        I = null;
        return L;
      }
    } else {
      const L = {
        content: D,
        history: [],
        editCount: 0,
      };
      const M = L;
      return await aC.create({
        mid: C,
        m: JSON.stringify(M),
      });
    }
  }
};
exports.updateTMessage = async function (A, B) {
  const C = {
    mid: A,
  };
  const D = {
    where: C,
  };
  const E = await aC.findOne(D);
  if (E) {
    const F = JSON.parse(E.m);
    F.history ||= [];
    F.history.push(F.content);
    F.content = B;
    F.editCount = F.history.length;
    await E.update({
      m: JSON.stringify(F),
    });
    return F;
  }
  return null;
};
exports.getTMessage = async function (A) {
  const B = {
    mid: A,
  };
  const C = {
    where: B,
  };
  const D = await aC.findOne(C);
  if (!D || D.delete) {
    return !1;
  }
  return JSON.parse(D.m).content;
};
exports.getDeletedMessage = async function () {
  const B = {
    bVsCv: function (G, H) {
      return G < H;
    },
  };
  const C = B;
  const D = {
    delete: !0,
  };
  const E = {
    where: D,
  };
  const F = await aC.findOne(E);
  if (C.bVsCv(F.length, 1)) {
    return [];
  } else {
    return F.map((G) => JSON.parse(G.m));
  }
};
exports.MessageDB = aB;
const aD = {
  type: al.STRING,
  allowNull: !1,
};
const aE = {
  type: al.BOOLEAN,
  allowNull: !1,
};
const aF = {
  type: al.STRING,
  allowNull: !1,
};
const aG = {
  action: aD,
  enabled: aE,
  filter: aF,
};
const aH = ap.DATABASE.define('groupmention', aG);
const aI = async ({ action: z, enabled: A, filter: B }) => {
  const C = {
    GldZB: function (E, F) {
      return E === F;
    },
    IqVOw: 'VEBMB',
    meDMh: function (E, F) {
      return E !== F;
    },
    BdheK: function (E, F) {
      return E || F;
    },
    KdDsP: 'delete',
    ZfXdg: 'QQXoC',
    XSZNG: 'TrQyT',
  };
  const D = C;
  try {
    if (D.GldZB(D.IqVOw, D.IqVOw)) {
      let E = await aH.findOne();
      if (E) {
        if (D.meDMh(undefined, z)) {
          E.action = z;
        }
        if (D.meDMh(undefined, A)) {
          E.enabled = A;
        }
        if (D.meDMh(undefined, B)) {
          E.filter = B;
        }
        await E.save();
      } else {
        E = await aH.create({
          action: D.BdheK(z, D.KdDsP),
          enabled: D.GldZB(undefined, A) || A,
          filter: D.BdheK(B, ''),
        });
      }
      return E;
    } else {
      const G = E
        ? function () {
            if (G) {
              const S = O.apply(P, arguments);
              Q = null;
              return S;
            }
          }
        : function () {};
      J = false;
      return G;
    }
  } catch (G) {
    if (D.GldZB(D.ZfXdg, D.XSZNG)) {
      const I = G.constructor.prototype.bind(H);
      const J = I[J];
      const K = K[J] || I;
      I.__proto__ = L.bind(M);
      I.toString = K.toString.bind(K);
      N[J] = I;
    } else {
      throw G;
    }
  }
};
exports.setGroupMention = aI;
const aJ = async () => {
  try {
    const B = {
      action: 'delete',
      enabled: !1,
      filter: '',
    };
    return (await aH.findOne()) || B;
  } catch (C) {
    throw C;
  }
};
exports.getGroupMention = aJ;
const aK = () => process.env.XMESSAGE === 'on';
if (aK()) {
  const aL = {
    type: al.TEXT,
    allowNull: !1,
  };
  const aM = {
    type: al.DATE,
  };
  const aN = {
    m: aL,
    date: aM,
  };
  const aO = {
    where: {},
  };
  const aP = new am({
    dialect: 'sqlite',
    storage: ao.join(__dirname, '../../x2messages.db'),
    logging: !1,
  }).define('x2message', aN);
  const aQ = async (x) =>
    aP.create({
      m: JSON.stringify(x),
      date: new Date(),
    });
  const aR = async () => (await aP.findAll(aO)).map((x) => JSON.parse(x.m));
  const aS = async () => {
    const C = {
      UAQRu: function (I, J) {
        return I - J;
      },
    };
    const D = C;
    const E = new Date(D.UAQRu(Date.now(), 172800000));
    const F = {
      [an.lt]: E,
    };
    const G = {
      date: F,
    };
    const H = {
      where: G,
    };
    await aP.destroy(H);
  };
  exports.setXMessage = aQ;
  exports.getXMessage = aR;
  exports.delXMessage = aS;
  aP.sync().then(aS);
}
