const aP = require('../config');
const aQ = 'bcm4hlrvglw2lxi483o9n4l3piy23jh6d7ekqzhk583tukhqk04tpl6qpnrrdswd';
const { default: aR } = require('axios');
const aS = require('fs-extra');
const aT = require('path');
const aU = require('dotenv');
const aV = require('heroku-client');
const aW = require('./config');
const aX = require('./lang');
const aY = new aV({
  token: aP.HEROKU_API_KEY,
});
const aZ = [
  'VPS',
  'DATABASE',
  'DATABASE_URL',
  'LOG_MSG',
  'BAILEYS_LOG_LVL',
  'VPS',
  'KOYEB',
  'KOYEB_NAME',
  'KOYEB_API',
  'RENDER_NAME',
  'RENDER_API_KEY',
  'TIMEZONE',
  'AUTO_UPDATE',
  'PORT',
  'TZ',
  'GROQ_API_KEY',
  'GROQ_MODEL',
  'GROQ_SYSTEM_MSG',
  'OPENROUTER_API_KEY',
  'OPENROUTER_MODEL',
  'OPENROUTER_SYSTEM_MSG',
  'API_MODE',
  'API_KEY',
  'API_WEBHOOK_URL',
  'API_PUBLIC_URL',
];
const b0 = [
  'VV',
  'STATUS_VIEW_MSG',
  'STATUS_VIEW_EMOJI',
  'STATUS_FORWARD_JID',
  'AREACT',
  'ANTI_BROADCAST_MSG',
  'IGNORE_WEB',
];
const b1 = ';_;';
const b2 = aS.existsSync(aT.join(__dirname, '..', 'config.json'));
const b3 = (F, G, H, I) => {
  if (aZ.includes(F)) {
    return H;
  }
  const J = G.split(b1);
  J[I] = H;
  return J.join(b1);
};
const b4 = (F, G, H) => {
  if (aZ.includes(H)) {
    return F;
  }
  return F.split(b1)[G] || '';
};
const b5 = (F, G) => {
  const H = F.split(b1);
  H[G] = '';
  return H.join(b1);
};
const b6 = (F) => (void 0 === F || 'off' === F ? 'false' : 'on' === F ? 'true' : F);
const b7 = (F, G, H) => {
  H in aW &&
    (F.startsWith('SECRET_') || aZ.includes(F)
      ? (process.env[F] = G)
      : ((aW[H].env[F] = b6(G)),
        'LANGUAG' === F && (aW[H].env.LANG = G),
        'PREFIX' === F ? aW.patchPrefix(H) : aW.preparevars(H)));
};
const b8 = (F, G, H) => (
  Object.entries(F).forEach(([I, J]) => {
    let L = false;
    G.env = G.env.map((M) => {
      if (M.key === I) {
        L = true;
        const P = b3(I, M.value, J, H);
        if (P !== M.value) {
          M.value = P;
          b7(I, J, H);
        }
      }
      return M;
    });
    L ||
      (b7(I, J, H),
      G.env.push({
        key: I,
        value: b3(I, '', J, H),
      }));
  }),
  G
);
const b9 = {
  render: {
    serviceId: '',
    headers: {
      headers: {
        Authorization: 'Bearer ' + aP.RENDER_API_KEY,
      },
    },
    getRenderServices: async () => {
      if (b9.render.serviceId) {
        return b9.render.serviceId;
      }
      try {
        const K = {
          Authorization: 'Bearer ' + aP.RENDER_API_KEY,
        };
        const L = {
          headers: K,
        };
        const M = await aR.get('https://api.render.com/v1/services', L);
        const P =
          1 === M.data.length
            ? M.data[0]
            : M.data.find(
                (Q) => Q.service.name === aP.RENDER_NAME || Q.service.name === process.env.name,
              );
        if (P && P.service.id) {
          b9.render.serviceId = P.service.id;
          return P.service.id;
        }
      } catch (T) {
        if (T.response && 401 === T.response.status) {
          throw new Error(
            'render : invalid api_key, https://dashboard.render.com/u/settings#api-keys update RENDER_API_KEY',
          );
        }
        throw new Error('render : ' + (T.response && T.response.statusText));
      }
    },
    getVars: async (F, G) => {
      if (!F && !G) {
        throw new Error('missing id');
      }
      const I = await b9.render.getRenderServices();
      if (!I) {
        throw new Error('render: ' + aP.RENDER_NAME + ' app not found, please update RENDER_NAME');
      }
      try {
        const J = await aR.get(
          'https://api.render.com/v1/services/' + I + '/env-vars',
          b9.render.headers,
        );
        const K = {};
        for (const L of J.data)
          K[L.envVar.key] = G ? L.envVar.value : b4(L.envVar.value, F, L.envVar.key);
        return K;
      } catch (M) {
        throw new Error(M.message);
      }
    },
    setVar: async (G, H) => {
      if (!H) {
        throw new Error('missing id');
      }
      const J = await b9.render.getRenderServices();
      if (!J) {
        throw new Error('render: ' + aP.RENDER_NAME + ' app not found, please update RENDER_NAME');
      }
      try {
        const K = Object.entries(G);
        const L = await b9.render.getVars(H);
        const M = Object.entries(L);
        const P = [];
        for (const [Q, T] of K)
          if (!L[Q]) {
            const U = b3(Q, '', T, H);
            const W = {
              key: Q,
              value: U,
            };
            P.push(W);
            b7(Q, T, H);
          }
        for (const [X, Y] of M) {
          const Z = K.find(([a0]) => a0 === X);
          if (Z) {
            const [, a0] = Z;
            const a1 = b3(X, '', a0, H);
            a1 !== Y && b7(X, a0, H);
            P.push({
              key: X,
              value: a1,
            });
          } else {
            P.push({
              key: X,
              value: Y,
            });
          }
        }
        await aR.put(
          'https://api.render.com/v1/services/' + J + '/env-vars/',
          P,
          b9.render.headers,
        );
        await exports.updateRender('do_not_clear');
      } catch (a3) {
        throw new Error(a3.message);
      }
    },
    delVar: async (G, H) => {
      if (!H) {
        throw new Error('missing id');
      }
      const J = [];
      const K = await b9.render.getVars(H);
      const L = Object.entries(K);
      for (const P of L) {
        const Q = P[0];
        if (Q === G) {
          b7(G, '', H);
          P[1] = b5(P[1], H);
          J.push({
            key: Q,
            value: P[1],
          });
        }
      }
      const M = await b9.render.getRenderServices();
      if (!M) {
        throw new Error('render: ' + aP.RENDER_NAME + ' app not found, please update RENDER_NAME');
      }
      try {
        const U = {
          value: J[0].value,
        };
        await aR.put(
          'https://api.render.com/v1/services/' + M + '/env-vars/' + G.toUpperCase(),
          U,
          b9.render.headers,
        );
        await exports.updateRender('do_not_clear');
      } catch (W) {
        throw new Error(W.message);
      }
    },
  },
  koyeb: {
    headers: {
      'content-type': 'application/json',
      authorization: 'Bearer ' + aP.KOYEB_API,
    },
    getVars: async (F, G, H) => {
      if (!F && !G) {
        throw new Error('missing id');
      }
      const J = await ba();
      const K = await bb(J.did);
      const L = {
        def: K,
        id: J.id,
        env: {},
      };
      if (H) {
        for (const P of K.env) {
          H && (L.env.scopes = P.scopes);
          L.env[P.key] = P.value;
        }
        return L;
      }
      for (const Q of K.env) {
        H && (L.scopes = Q.scopes);
        L[Q.key] = G ? Q.value : b4(Q.value, F, Q.key);
      }
      return L;
    },
    setVar: async (G, H) => {
      if (!H) {
        throw new Error('missing id');
      }
      const J = {
        headers: b9.koyeb.headers,
      };
      const K = await ba();
      const L = await aR.get('https://app.koyeb.com/v1/deployments/' + K.did, J);
      const M = b8(G, L.data.deployment.definition, H);
      await bc(M, K.id, true);
    },
    delVar: async (F, G) => {
      if (!G) {
        throw new Error('missing id');
      }
      const I = await b9.koyeb.getVars(G, false, true);
      const J = [];
      for (const K in I.env)
        if ('scopes' != K) {
          F === K && (I.env[F] = b5(I.env[F], G));
          const L = {
            scopes: I.env.scopes,
            key: K,
            value: I.env[K],
          };
          J.push(L);
        }
      I.def.env = J;
      await bc(I.def, I.id, true);
      return J;
    },
  },
  heroku: {
    base: '/apps/' + aP.HEROKU_APP_NAME + '/config-vars',
    setVar: async (G, H) => {
      if (!H) {
        throw new Error('missing id');
      }
      try {
        const J = {
          body: G,
        };
        await aY.patch(b9.heroku.base, J);
      } catch (K) {
        throw new Error(aX.plugins.heroku.error_prefix.format(K.message));
      }
    },
    getVars: async (F) => {
      if (!F) {
        throw new Error('missing id');
      }
      try {
        return await aY.get(b9.heroku.base);
      } catch (H) {
        throw new Error(aX.plugins.heroku.error_prefix.format(H.message));
      }
    },
    delVar: async (F, G) => {
      if (!G) {
        throw new Error('missing id');
      }
      try {
        const I = await aY.get(b9.heroku.base);
        const J = F.trim().toUpperCase();
        I[J] &&
          (await aY.patch(b9.heroku.base, {
            body: {
              [J]: null,
            },
          }));
      } catch (L) {
        throw new Error(aX.plugins.heroku.error_prefix.format(L.message));
      }
    },
  },
  vps: {
    getVars: async function (F, G) {
      if (!F && !G) {
        throw new Error('missing id');
      }
      if (!aS.existsSync(aT.join(__dirname, '../config.env'))) {
        aS.writeFileSync(aT.join(__dirname, '../config.env'), '{}');
        return {};
      }
      if (b2) {
        const J = aT.join(__dirname, '../config.json');
        const K = JSON.parse(aS.readFileSync(J, 'utf8'));
        if (G) {
          return K;
        }
        const L = Object.fromEntries(Object.entries(K).filter(([M]) => !M.startsWith('SECRET_')));
        return L[Object.keys(L)[F]];
      }
      {
        const M = aU.parse(aS.readFileSync(aT.join(__dirname, '../config.env')));
        if (G) {
          return M;
        }
        const P = {};
        for (const Q in M) {
          if (Q.startsWith('SECRET_')) {
            continue;
          }
          const T = b4(M[Q], F, Q);
          T && (P[Q] = T);
        }
        return P;
      }
    },
    setVar: async function (F, G) {
      if (!G) {
        throw new Error('missing id');
      }
      const I = Object.entries(F);
      const J = await b9.vps.getVars(G, true);
      if (b2) {
        const L = Object.keys(J);
        void 0 === L[G] && L.push('session' + (parseInt(G) + 1));
        J[L[G]] || (J[L[G]] = {});
        I.forEach(([M, P]) => {
          J[M] !== P && b7(M, P, G);
          const T = F[M] ?? J[L[G]][M];
          T !== J[L[G]][M] && (J[L[G]][M] = T);
        });
        aS.writeFileSync(aT.join(__dirname, '../config.json'), JSON.stringify(J, null, 2));
      } else {
        I.forEach(([Q, T]) => {
          if (J[Q] !== T) {
            b7(Q, T, G);
            const W = b3(Q, J[Q] || '', T, G);
            J[Q] = W ?? J[Q];
          }
        });
        let P = '';
        for (const [Q, T] of Object.entries(J)) P += Q + ' = "' + T + '"\n';
        aS.writeFileSync(aT.join(__dirname, '../config.env'), P.trim());
      }
    },
    delVar: async function (F, G) {
      if (!G) {
        throw new Error('missing id');
      }
      if (b2) {
        const J = await b9.vps.getVars(G);
        const K = Object.keys(J);
        J[F] = b5(J[K[G]][F], G);
        b7(F, '', G);
        aS.writeFileSync(aT.join(__dirname, '../config.json'), JSON.stringify(J, null, 2));
      } else {
        const L = await b9.vps.getVars(G);
        if (L[F]) {
          b7(F, '', G);
          L[F] = b5(L[F], G);
          let M = '';
          for (const P in L) M += P + ' = "' + L[P] + '"\n';
          aS.writeFileSync(aT.join(__dirname, '../config.env'), M.trim());
        }
      }
    },
  },
  fake_vps: {
    setVar: async function (F, G) {
      const I = Object.entries(F);
      const J = await b9.fake_vps.getVars(G, true);
      I.forEach(([K, L]) => {
        J[K] !== L && b7(K, L, G);
      });
    },
    getVars: async function (F, G) {
      aP.logger.warn(
        "You're on a fake VPS environment; data gets erased on reboot. So update envs on your platform settings.",
      );
      const I = Object.keys(process.env).reduce((J, K) => {
        const M = process.env[K];
        if (K in aP || b0.includes(K)) {
          J[K] = M;
        } else {
          K.startsWith('LEVANTER_') && (J[K.replace('LEVANTER_', '')] = M);
        }
        return J;
      }, {});
      return G
        ? I
        : Object.keys(I).reduce((J, K) => {
            const L = b4(I[K], F, K);
            L && (J[K] = L);
            return J;
          }, {});
    },
    delVar: async function (F, G) {
      b7(F, '', G);
    },
  },
  false: {
    message:
      'Failed detect the Platform, Please enter Heroku or Koyeb or VPS config respectively\nhttps://github.com/lyfe00011/levanter/wiki/platform',
    setVar: () => {
      throw new Error(b9.false.message);
    },
    delVar: () => {
      throw new Error(b9.false.message);
    },
    getVars: () => {
      throw new Error(b9.false.message);
    },
  },
};
async function ba() {
  try {
    const K = {
      headers: b9.koyeb.headers,
    };
    const L = (await aR.get('https://app.koyeb.com/v1/services', K)).data.services.filter(
      (T) => 'DATABASE' !== T.type,
    );
    const M =
      1 === L.length
        ? L[0]
        : L.find((T) => T.name === aP.KOYEB_NAME || T.name === process.env.KOYEB_SERVICE_NAME);
    if (!M) {
      throw new Error('koyeb: app *' + aP.KOYEB_NAME + '* not found, please update KOYEB_NAME');
    }
    const P = M.id;
    const Q = {
      id: P,
      did: M.active_deployment_id,
    };
    return Q;
  } catch (T) {
    if (T.response && 401 === T.response.status) {
      throw new Error('koyeb: invalid api_key, please update KOYEB_API');
    }
    throw new Error(T.message);
  }
}
async function bb(I) {
  try {
    const L = {
      headers: b9.koyeb.headers,
    };
    const M = await aR.get('https://app.koyeb.com/v1/deployments/' + I, L);
    return M.data.deployment.definition;
  } catch (P) {
    const T = {
      env: [],
    };
    aP.logger.error('koyeb: ' + P.message);
    return T;
  }
}
async function bc(I, J, K) {
  try {
    const P = {
      definition: I,
      skip_build: K,
    };
    const Q = {
      headers: b9.koyeb.headers,
    };
    await aR.patch('https://app.koyeb.com/v1/services/' + J, P, Q);
  } catch (T) {
    throw new Error(T?.response?.data?.code || 'koyeb');
  }
}
const bd =
  aP.HEROKU_API_KEY && aP.HEROKU_APP_NAME
    ? 'heroku'
    : aP.KOYEB_API && aP.KOYEB_NAME
      ? 'koyeb'
      : aP.RENDER_NAME && aP.RENDER_API_KEY
        ? 'render'
        : aP.VPS
          ? aS.existsSync(aT.join(__dirname, '../config.env'))
            ? 'vps'
            : 'fake_vps'
          : 'false';
exports.upKoyeb = async function (F) {
  const H = await b9.koyeb.getVars(F, false, true);
  await bc(H.def, H.id, false);
};
exports.updateRender = async (G) => {
  const J = await b9.render.getRenderServices();
  if (!J) {
    throw new Error('render: ' + aP.RENDER_NAME + ' app not found, please update RENDER_NAME');
  }
  try {
    await aR.post(
      'https://api.render.com/v1/services/' + J + '/deploys',
      {
        clearCache: G || 'clear',
      },
      b9.render.headers,
    );
  } catch (L) {}
};
const be = ['ANTI_DELETE', 'ANTI_EDIT'];
const bf = ['AUTO_STATUS_VIEW', 'ANTI_BOT'];
const bg = ['ANTI_BOT_MESSAGE', 'ANTISPAM_MSG'];
const bh = (G) => {
  if (!G || 'object' != typeof G) {
    return G;
  }
  const I = {
    ...G,
  };
  const J = I;
  for (const K of be)
    if (K in J) {
      const L = String(J[K] ?? '')
        .trim()
        .toLowerCase();
      ('off' !== L && 'false' !== L && '' !== L) || (J[K] = 'null');
    }
  for (const M of bf)
    if (M in J) {
      const P = String(J[M] ?? '')
        .trim()
        .toLowerCase();
      if ('on' === P || 'true' === P) {
        J[M] = 'true';
      } else {
        ('off' !== P && 'null' !== P && '' !== P && 'false' !== P) || (J[M] = 'false');
      }
    }
  for (const Q of bg)
    if (Q in J) {
      const U = String(J[Q] ?? '')
        .trim()
        .toLowerCase();
      ('off' !== U && 'null' !== U && '' !== U && 'false' !== U) || (J[Q] = 'false');
    }
  return J;
};
exports.normalizeFeatureVars = bh;
const bi = b9[bd].setVar;
exports.setVar = async (F, G) => bi(bh(F), G);
exports.getVars = b9[bd].getVars;
exports.delVar = b9[bd].delVar;
