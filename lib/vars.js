function D(a, b) {
  const c = B();
  D = function (d, e) {
    d = d - 348;
    let f = c[d];
    if (D.HzBJGs === undefined) {
      var g = function (l) {
        let n = "";
        let o = "";
        let p = n + g;
        let q = 0;
        let r;
        let s;
        for (
          let t = 0;
          (s = l.charAt(t++));
          ~s && ((r = q % 4 ? r * 64 + s : s), q++ % 4)
            ? (n +=
                p.charCodeAt(t + 10) - 10 !== 0
                  ? String.fromCharCode(255 & (r >> ((-2 * q) & 6)))
                  : q)
            : 0
        ) {
          s =
            "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(
              s,
            );
        }
        let u = 0;
        for (let v = n.length; u < v; u++) {
          o += "%" + ("00" + n.charCodeAt(u).toString(16)).slice(-2);
        }
        return decodeURIComponent(o);
      };
      D.aYmpud = g;
      a = arguments;
      D.HzBJGs = true;
    }
    const h = c[0];
    const i = d + h;
    const j = a[i];
    if (!j) {
      const k = function (l) {
        this.BDsBQI = l;
        this.hHzAyy = [1, 0, 0];
        this.CWDqDD = function () {
          return "newState";
        };
        this.SxtyUl = "\\w+ *\\(\\) *{\\w+ *";
        this.pbAHLC = "['|\"].+['|\"];? *}";
      };
      k.prototype.YemyIC = function () {
        const l = new RegExp(this.SxtyUl + this.pbAHLC);
        const m = l.test(this.CWDqDD.toString())
          ? --this.hHzAyy[1]
          : --this.hHzAyy[0];
        return this.vZvkSW(m);
      };
      k.prototype.vZvkSW = function (l) {
        if (!Boolean(~l)) {
          return l;
        }
        return this.aEwKvT(this.BDsBQI);
      };
      k.prototype.aEwKvT = function (l) {
        let m = 0;
        for (let n = this.hHzAyy.length; m < n; m++) {
          this.hHzAyy.push(Math.round(Math.random()));
          n = this.hHzAyy.length;
        }
        return l(this.hHzAyy[0]);
      };
      new k(D).YemyIC();
      f = D.aYmpud(f);
      a[i] = f;
    } else {
      f = j;
    }
    return f;
  };
  return D(a, b);
}
function cS(F, G) {
  return C(F + 0x3c3, G);
}
(function (F, G) {
  const H = F();
  while (true) {
    try {
      const I =
        parseInt(C(855, "O%h)")) / 1 +
        (parseInt(D(1680, 0x812)) / 2) * (parseInt(D(1136, 0x55c)) / 3) +
        parseInt(D(967, 0x7ef)) / 4 +
        (parseInt(D(830, 0x3fe)) / 5) * (-parseInt(C(1316, "cZm*")) / 6) +
        parseInt(D(1256, 0x127)) / 7 +
        parseInt(C(634, "cZm*")) / 8 +
        (-parseInt(C(518, "wOaH")) / 9) * (parseInt(D(367, 0x3ca)) / 10);
      if (I === G) {
        break;
      } else {
        H.push(H.shift());
      }
    } catch (J) {
      H.push(H.shift());
    }
  }
})(B, 669627);
function cL(F, G) {
  return D(F + 0x60, G);
}
const aL = (function () {
  let G = true;
  return function (H, I) {
    const K = G
      ? function () {
          if (I) {
            const L = I.apply(H, arguments);
            I = null;
            return L;
          }
        }
      : function () {};
    G = false;
    return K;
  };
})();
function cP(F, G) {
  return D(G + 0x160, F);
}
const aM = aL(this, function () {
  return aM
    .toString()
    .search("(((.+)+)+)+$")
    .toString()
    .constructor(aM)
    .search("(((.+)+)+)+$");
});
aM();
function cN(F, G) {
  return C(F - 0x36d, G);
}
const aN = (function () {
  let G = true;
  return function (H, I) {
    const K = G
      ? function () {
          if (I) {
            const M = I.apply(H, arguments);
            I = null;
            return M;
          }
        }
      : function () {};
    G = false;
    return K;
  };
})();
function cQ(F, G) {
  return D(F - 0x39c, G);
}
const aO = aN(this, function () {
  const G = function () {
    let L;
    try {
      L = Function('return (function() {}.constructor("return this")( ));')();
    } catch (M) {
      L = window;
    }
    return L;
  };
  const H = G();
  const I = (H.console = H.console || {});
  const J = ["log", "warn", "info", "error", "exception", "table", "trace"];
  for (let K = 0; K < J.length; K++) {
    const L = aN.constructor.prototype.bind(aN);
    const M = J[K];
    const P = I[M] || L;
    L.__proto__ = aN.bind(aN);
    L.toString = P.toString.bind(P);
    I[M] = L;
  }
});
aO();
function cK(F, G) {
  return C(F + 0x387, G);
}
function cT(F, G) {
  return D(F + 0x202, G);
}
function cO(F, G) {
  return C(G - 0x2df, F);
}
const aP = require("../config");
const { default: aR } = require("axios");
const aS = require("fs-extra");
const aT = require("path");
const aU = require("dotenv");
const aV = require("heroku-client");
const aW = require("./config");
const aX = require("./lang");
const aY = new aV({
  token: aP.HEROKU_API_KEY,
});
const aZ = [
  "VPS",
  "DATABASE",
  "DATABASE_URL",
  "LOG_MSG",
  "BAILEYS_LOG_LVL",
  "VPS",
  "KOYEB",
  "KOYEB_NAME",
  "KOYEB_API",
  "RENDER_NAME",
  "RENDER_API_KEY",
  "TIMEZONE",
  "AUTO_UPDATE",
  "PORT",
  "TZ",
  "GROQ_API_KEY",
  "GROQ_MODEL",
  "GROQ_SYSTEM_MSG",
  "OPENROUTER_API_KEY",
  "OPENROUTER_MODEL",
  "OPENROUTER_SYSTEM_MSG",
  "API_MODE",
  "API_KEY",
  "API_WEBHOOK_URL",
  "API_PUBLIC_URL",
];
const b0 = [
  "VV",
  "STATUS_VIEW_MSG",
  "STATUS_VIEW_EMOJI",
  "STATUS_FORWARD_JID",
  "AREACT",
  "ANTI_BROADCAST_MSG",
  "IGNORE_WEB",
];
const b2 = aS.existsSync(aT.join(__dirname, "..", "config.json"));
const b3 = (F, G, H, I) => {
  if (aZ.includes(F)) {
    return H;
  }
  const J = G.split(";_;");
  J[I] = H;
  return J.join(";_;");
};
const b4 = (F, G, H) => {
  if (aZ.includes(H)) {
    return F;
  }
  return F.split(";_;")[G] || "";
};
const b5 = (F, G) => {
  const H = F.split(";_;");
  H[G] = "";
  return H.join(";_;");
};
const b6 = (F) =>
  undefined === F || "off" === F ? "false" : "on" === F ? "true" : F;
const b7 = (F, G, H) => {
  if (H in aW) {
    if (F.startsWith("SECRET_") || aZ.includes(F)) {
      process.env[F] = G;
    } else {
      aW[H].env[F] =
        undefined === G || "off" === G ? "false" : "on" === G ? "true" : G;
      if ("LANGUAG" === F) {
        aW[H].env.LANG = G;
      }
      if ("PREFIX" === F) {
        aW.patchPrefix(H);
      } else {
        aW.preparevars(H);
      }
    }
  }
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
    if (!L) {
      b7(I, J, H);
      G.env.push({
        key: I,
        value: b3(I, "", J, H),
      });
    }
  }),
  G
);
const b9 = {
  render: {
    serviceId: "",
    headers: {
      headers: {
        Authorization: "Bearer " + aP.RENDER_API_KEY,
      },
    },
    getRenderServices: async () => {
      const I = {
        aZbmC: function (K, L) {
          return K in L;
        },
      };
      I.NIxxo = "LEVANTER_";
      I.bcULY = function (K, L) {
        return K !== L;
      };
      I.gvQwS = "rPSJy";
      I.ErWoz = "PolVu";
      I.RUqYP = "https://api.render.com/v1/services";
      I.XCaJd = function (K, L) {
        return K === L;
      };
      I.QvyIg =
        "render : invalid api_key, https://dashboard.render.com/u/settings#api-keys update RENDER_API_KEY";
      if (b9.render.serviceId) {
        return b9.render.serviceId;
      }
      try {
        if (I.bcULY(I.gvQwS, I.ErWoz)) {
          const K = {
            Authorization: "Bearer " + aP.RENDER_API_KEY,
          };
          const L = {
            headers: K,
          };
          const M = await aR.get(I.RUqYP, L);
          const P = I.XCaJd(1, M.data.length)
            ? M.data[0]
            : M.data.find(
                (Q) =>
                  Q.service.name === aP.RENDER_NAME ||
                  Q.service.name === process.env.name,
              );
          if (P && P.service.id) {
            b9.render.serviceId = P.service.id;
            return P.service.id;
          }
        } else {
          const T = W.env[X];
          if (Y in Z || a0.includes(a1)) {
            a2[a3] = T;
          } else if (a4.startsWith(I.NIxxo)) {
            a8[a9.replace(I.NIxxo, "")] = T;
          }
          return a7;
        }
      } catch (T) {
        if (T.response && I.XCaJd(401, T.response.status)) {
          throw new Error(I.QvyIg);
        }
        throw new Error("render : " + (T.response && T.response.statusText));
      }
    },
    getVars: async (F, G) => {
      if (!F && !G) {
        throw new Error("missing id");
      }
      const I = await b9.render.getRenderServices();
      if (!I) {
        throw new Error(
          "render: " +
            aP.RENDER_NAME +
            " app not found, please update RENDER_NAME",
        );
      }
      try {
        const J = await aR.get(
          "https://api.render.com/v1/services/" + I + "/env-vars",
          b9.render.headers,
        );
        const K = {};
        for (const L of J.data)
          K[L.envVar.key] = G
            ? L.envVar.value
            : b4(L.envVar.value, F, L.envVar.key);
        return K;
      } catch (M) {
        throw new Error(M.message);
      }
    },
    setVar: async (G, H) => {
      if (!H) {
        throw new Error("missing id");
      }
      const J = await b9.render.getRenderServices();
      if (!J) {
        throw new Error(
          "render: " +
            aP.RENDER_NAME +
            " app not found, please update RENDER_NAME",
        );
      }
      try {
        const K = Object.entries(G);
        const L = await b9.render.getVars(H);
        const M = Object.entries(L);
        const P = [];
        for (const [Q, T] of K)
          if (!L[Q]) {
            const U = b3(Q, "", T, H);
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
            const a1 = b3(X, "", a0, H);
            if (a1 !== Y) {
              b7(X, a0, H);
            }
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
          "https://api.render.com/v1/services/" + J + "/env-vars/",
          P,
          b9.render.headers,
        );
        await exports.updateRender("do_not_clear");
      } catch (a3) {
        throw new Error(a3.message);
      }
    },
    delVar: async (G, H) => {
      if (!H) {
        throw new Error("missing id");
      }
      const J = [];
      const K = await b9.render.getVars(H);
      const L = Object.entries(K);
      for (const P of L) {
        const Q = P[0];
        if (Q === G) {
          b7(G, "", H);
          P[1] = b5(P[1], H);
          J.push({
            key: Q,
            value: P[1],
          });
        }
      }
      const M = await b9.render.getRenderServices();
      if (!M) {
        throw new Error(
          "render: " +
            aP.RENDER_NAME +
            " app not found, please update RENDER_NAME",
        );
      }
      try {
        const U = {
          value: J[0].value,
        };
        await aR.put(
          "https://api.render.com/v1/services/" +
            M +
            "/env-vars/" +
            G.toUpperCase(),
          U,
          b9.render.headers,
        );
        await exports.updateRender("do_not_clear");
      } catch (W) {
        throw new Error(W.message);
      }
    },
  },
  koyeb: {
    headers: {
      "content-type": "application/json",
      authorization: "Bearer " + aP.KOYEB_API,
    },
    getVars: async (F, G, H) => {
      if (!F && !G) {
        throw new Error("missing id");
      }
      const J = await ba();
      const K = await bb(J.did);
      const L = {};
      if (H) {
        L.def = K;
        L.id = J.id;
        L.env = {};
        for (const P of K.env) {
          if (H) {
            L.env.scopes = P.scopes;
          }
          L.env[P.key] = P.value;
        }
        return L;
      }
      for (const Q of K.env) {
        if (H) {
          L.scopes = Q.scopes;
        }
        L[Q.key] = G ? Q.value : b4(Q.value, F, Q.key);
      }
      return L;
    },
    setVar: async (G, H) => {
      if (!H) {
        throw new Error("missing id");
      }
      const J = {
        headers: b9.koyeb.headers,
      };
      const K = await ba();
      const L = await aR.get(
        "https://app.koyeb.com/v1/deployments/" + K.did,
        J,
      );
      const M = b8(G, L.data.deployment.definition, H);
      await bc(M, K.id, true);
    },
    delVar: async (F, G) => {
      const H = {
        PUxow: function (K, L) {
          return K(L);
        },
        wjZSD: function (K, L) {
          return K + L;
        },
        XwzbP: function (K, L) {
          return K + L;
        },
        KJhlo: "return (function() ",
        nSKlw: '{}.constructor("return this")( )',
        VgExV: "missing id",
        XHesQ: function (K, L) {
          return K != L;
        },
        ctenc: "scopes",
        Rgyjw: function (K, L) {
          return K !== L;
        },
        pFOSy: "dQWXF",
        vGaeF: "DVFhs",
        EiYez: function (K, L) {
          return K === L;
        },
        jfXIp: function (K, L, M) {
          return K(L, M);
        },
        LcQez: function (K, L, M, P) {
          return K(L, M, P);
        },
      };
      if (!G) {
        throw new Error(H.VgExV);
      }
      const I = await b9.koyeb.getVars(G, false, true);
      const J = [];
      for (const K in I.env)
        if (H.XHesQ(H.ctenc, K)) {
          if (H.Rgyjw(H.pFOSy, H.vGaeF)) {
            if (H.EiYez(F, K)) {
              I.env[F] = H.jfXIp(b5, I.env[F], G);
            }
            const L = {
              scopes: I.env.scopes,
              key: K,
              value: I.env[K],
            };
            J.push(L);
          } else {
            H = NwnLKN.PUxow(
              I,
              NwnLKN.wjZSD(NwnLKN.XwzbP(NwnLKN.KJhlo, NwnLKN.nSKlw), ");"),
            )();
          }
        }
      I.def.env = J;
      await H.LcQez(bc, I.def, I.id, true);
      return J;
    },
  },
  heroku: {
    base: "/apps/" + aP.HEROKU_APP_NAME + "/config-vars",
    setVar: async (G, H) => {
      if (!H) {
        throw new Error("missing id");
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
        throw new Error("missing id");
      }
      try {
        return await aY.get(b9.heroku.base);
      } catch (H) {
        throw new Error(aX.plugins.heroku.error_prefix.format(H.message));
      }
    },
    delVar: async (F, G) => {
      if (!G) {
        throw new Error("missing id");
      }
      try {
        const I = await aY.get(b9.heroku.base);
        const J = F.trim().toUpperCase();
        if (I[J]) {
          await aY.patch(b9.heroku.base, {
            body: {
              [J]: null,
            },
          });
        }
      } catch (L) {
        throw new Error(aX.plugins.heroku.error_prefix.format(L.message));
      }
    },
  },
  vps: {
    getVars: async function (F, G) {
      const H = {
        jwGOb: function (I, J) {
          return I && J;
        },
        pdyOe: "missing id",
        lCzEF: "../config.env",
        LbGio: function (I, J) {
          return I === J;
        },
        hoPRD: "LSiWH",
        fUTjK: "kGSht",
        MnERt: "../config.json",
        bBOcQ: "utf8",
        eQcmS: function (I, J) {
          return I !== J;
        },
        JAIym: "VqlQB",
        oHGqi: "CnMgt",
        uUtaK: "lnXdE",
        aeLYw: "SECRET_",
        aVrhe: function (I, J, K, L) {
          return I(J, K, L);
        },
      };
      if (H.jwGOb(!F, !G)) {
        throw new Error(H.pdyOe);
      }
      if (!aS.existsSync(aT.join(__dirname, H.lCzEF))) {
        aS.writeFileSync(aT.join(__dirname, H.lCzEF), "{}");
        return {};
      }
      if (b2) {
        if (H.LbGio(H.hoPRD, H.fUTjK)) {
          if (L.includes(M)) {
            return P;
          }
          return Q.split(T)[U] || "";
        } else {
          const J = aT.join(__dirname, H.MnERt);
          const K = JSON.parse(aS.readFileSync(J, H.bBOcQ));
          if (G) {
            return K;
          }
          const L = Object.fromEntries(
            Object.entries(K).filter(([M]) => !M.startsWith("SECRET_")),
          );
          return L[Object.keys(L)[F]];
        }
      }
      {
        if (H.eQcmS(H.JAIym, H.oHGqi)) {
          const M = aU.parse(aS.readFileSync(aT.join(__dirname, H.lCzEF)));
          if (G) {
            return M;
          }
          const P = {};
          for (const Q in M) {
            if (H.LbGio(H.uUtaK, H.uUtaK)) {
              if (Q.startsWith(H.aeLYw)) {
                continue;
              }
              const T = H.aVrhe(b4, M[Q], F, Q);
              if (T) {
                P[Q] = T;
              }
            } else {
              H = I;
            }
          }
          return P;
        } else {
          throw new H(I["false"].message);
        }
      }
    },
    setVar: async function (F, G) {
      if (!G) {
        throw new Error("missing id");
      }
      const I = Object.entries(F);
      const J = await b9.vps.getVars(G, true);
      if (b2) {
        const L = Object.keys(J);
        if (undefined === L[G]) {
          L.push("session" + (parseInt(G) + 1));
        }
        if (!J[L[G]]) {
          J[L[G]] = {};
        }
        I.forEach(([M, P]) => {
          if (J[M] !== P) {
            b7(M, P, G);
          }
          const T = F[M] ?? J[L[G]][M];
          if (T !== J[L[G]][M]) {
            J[L[G]][M] = T;
          }
        });
        aS.writeFileSync(
          aT.join(__dirname, "../config.json"),
          JSON.stringify(J, null, 2),
        );
      } else {
        I.forEach(([Q, T]) => {
          if (J[Q] !== T) {
            b7(Q, T, G);
            const W = b3(Q, J[Q] || "", T, G);
            J[Q] = W ?? J[Q];
          }
        });
        let P = "";
        for (const [Q, T] of Object.entries(J)) P += Q + ' = "' + T + '"\n';
        aS.writeFileSync(aT.join(__dirname, "../config.env"), P.trim());
      }
    },
    delVar: async function (F, G) {
      if (!G) {
        throw new Error("missing id");
      }
      if (b2) {
        const J = await b9.vps.getVars(G);
        const K = Object.keys(J);
        J[F] = b5(J[K[G]][F], G);
        b7(F, "", G);
        aS.writeFileSync(
          aT.join(__dirname, "../config.json"),
          JSON.stringify(J, null, 2),
        );
      } else {
        const L = await b9.vps.getVars(G);
        if (L[F]) {
          b7(F, "", G);
          L[F] = b5(L[F], G);
          let M = "";
          for (const P in L) M += P + ' = "' + L[P] + '"\n';
          aS.writeFileSync(aT.join(__dirname, "../config.env"), M.trim());
        }
      }
    },
  },
  fake_vps: {
    setVar: async function (F, G) {
      const I = Object.entries(F);
      const J = await b9.fake_vps.getVars(G, true);
      I.forEach(([K, L]) => {
        if (J[K] !== L) {
          b7(K, L, G);
        }
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
        } else if (K.startsWith("LEVANTER_")) {
          J[K.replace("LEVANTER_", "")] = M;
        }
        return J;
      }, {});
      return G
        ? I
        : Object.keys(I).reduce((J, K) => {
            const L = b4(I[K], F, K);
            if (L) {
              J[K] = L;
            }
            return J;
          }, {});
    },
    delVar: async function (F, G) {
      b7(F, "", G);
    },
  },
  false: {
    message:
      "Failed detect the Platform, Please enter Heroku or Koyeb or VPS config respectively\nhttps://github.com/lyfe00011/levanter/wiki/platform",
    setVar: () => {
      throw new Error(b9["false"].message);
    },
    delVar: () => {
      throw new Error(b9["false"].message);
    },
    getVars: () => {
      throw new Error(b9["false"].message);
    },
  },
};
function B() {
  const hA = [
    "WRtdQmot",
    "WQ8apW",
    "W6q2W4i",
    "WOBdMda",
    "zSkRfG",
    "qNPR",
    "zxb0",
    "kb1M",
    "cmocWOC",
    "BgLJ",
    "WOddUsu",
    "W4G/wW",
    "jCk5WQq",
    "u1rb",
    "WRdcS8om",
    "nGzx",
    "W57cUmol",
    "gJP7",
    "W4XnaG",
    "r0xdLG",
    "W53cOmko",
    "u2vY",
    "u1eI",
    "CgL5",
    "W4FdLwC",
    "ywXP",
    "zgvY",
    "DfrM",
    "DgLV",
    "W5lcGmo1",
    "lISP",
    "jCkNW7W",
    "W4FcUcy",
    "WPhdS0C",
    "W63cGCkL",
    "WQ9Ywa",
    "zMLU",
    "y09M",
    "l3nL",
    "zxj2",
    "WRimiW",
    "nvtcVW",
    "W7PZtq",
    "CwvK",
    "ywvm",
    "q00G",
    "W5KvWPG",
    "qmkAW4y",
    "qujb",
    "W6tcOSoa",
    "igrL",
    "C2v0",
    "wvpdUq",
    "BK5p",
    "W4FdTeW",
    "ySkxBa",
    "z0TM",
    "WReMwG",
    "mqXx",
    "WPztxW",
    "D8kRWOm",
    "zg9F",
    "tNjQ",
    "Amo9W5a",
    "zwi6",
    "tNvY",
    "s0Pl",
    "kCoiiG",
    "uL9n",
    "Cavz",
    "zxjY",
    "CI93",
    "lSkYWQG",
    "meXy",
    "eLtcTa",
    "W5XpWPC",
    "BgfJ",
    "kSkCkW",
    "C0He",
    "rG7dPq",
    "AwvU",
    "W4XbWOi",
    "zubr",
    "W6mwW6q",
    "C3H4",
    "CNzN",
    "CXVdHG",
    "msj4",
    "WQfhlG",
    "CGVdMa",
    "yLLl",
    "jSksW5K",
    "FHFcKW",
    "vZpdLa",
    "i2pcOa",
    "WP3cRSoa",
    "zSklBG",
    "W5RdO08",
    "uaJdVq",
    "DxrM",
    "mKTeD1vhzW",
    "w8kiwG",
    "W7qUgq",
    "W7OPWPu",
    "BM1c",
    "CmkanG",
    "uv0O",
    "CLbt",
    "WO9YW4y",
    "W63dHCkQ",
    "eupdSG",
    "w8otwG",
    "qMne",
    "u1rF",
    "shpdQG",
    "Ew5Q",
    "tevw",
    "W4tcNSoU",
    "WPX8bG",
    "WR1DoW",
    "W4tcTsq",
    "sCoWW40",
    "D3jP",
    "hc5R",
    "bbrq",
    "W4lcSci",
    "z3fA",
    "AwTP",
    "zfv5",
    "m8k2WRG",
    "fSofCa",
    "WPjPWOS",
    "W7FcQNG",
    "WP4Gfa",
    "WO10W5a",
    "CSoSW5e",
    "W7JdTfe",
    "le4x",
    "CYbV",
    "W5GvWPK",
    "BCknEq",
    "W77dLSoX",
    "DhvZ",
    "W4RcVCkq",
    "x05b",
    "u3L6",
    "Dx3dOq",
    "vvrf",
    "Aw5P",
    "B3qG",
    "B01m",
    "W7mzW6q",
    "C00b",
    "sevS",
    "W77cTCox",
    "DgvY",
    "W4GoWOy",
    "s2HU",
    "xCoDW74",
    "WRHMiG",
    "lcbO",
    "W5/dQ8kA",
    "uLvX",
    "W67dLSoK",
    "DMfS",
    "CNrZ",
    "WRhdJ24",
    "DNbZ",
    "WPzfya",
    "AmoXW5q",
    "revs",
    "vvS0",
    "CMvZ",
    "vZVdVG",
    "uJ/dQW",
    "t1bf",
    "B2ldIG",
    "qhpdVq",
    "WPToyG",
    "W77dPey",
    "yCkFvW",
    "W7dcHSk8",
    "eSk2W7e",
    "Cgf0",
    "W5NcPGy",
    "C3bS",
    "B8k/WOm",
    "W5pcIXK",
    "pSoqjq",
    "BM90",
    "C3rZ",
    "tffu",
    "WRreW6e",
    "whD6",
    "CMv0",
    "rmkpDa",
    "W4y4W6m",
    "kf/cQG",
    "s3NdSG",
    "aCogW5G",
    "lIbt",
    "ru1p",
    "rmkCzq",
    "wwzz",
    "ChvZ",
    "amk3WRS",
    "W4O7WOK",
    "WR7dOcK",
    "WP5Kda",
    "l2rL",
    "wKNdLG",
    "qd95",
    "mtC5mde5nJbrzwXvDhq",
    "aSk5WR0",
    "W4y1xW",
    "B25M",
    "CxPO",
    "W5C5W4y",
    "WQFdTuO",
    "u19m",
    "C2jJ",
    "ACo+WOe",
    "BInc",
    "xSkEW4S",
    "mmovzG",
    "ASosW44",
    "WRddHgO",
    "CCo8WOm",
    "Dwn0",
    "f1dcQW",
    "WRRcJ8kRWOZdItxcPmovDJSoW6RcLq",
    "sMPe",
    "DKDH",
    "W7JdQ3O",
    "tKfn",
    "tcf1",
    "o8oeW4O",
    "lw7dGa",
    "W7NdNCo8",
    "rfni",
    "ufv4",
    "F8oOW5e",
    "uhpdVW",
    "WO9+W40",
    "Aw5J",
    "FmoMW5e",
    "B2PA",
    "W77dT3q",
    "DNrR",
    "rwfJ",
    "oWPw",
    "uv9n",
    "WPWEeW",
    "WPiSaW",
    "ruHV",
    "W4GnWQ8",
    "Bg5y",
    "ChaU",
    "Cg9U",
    "ASk/WOG",
    "B2ldMq",
    "d8kJWQG",
    "cr9f",
    "r2i/",
    "zxbI",
    "t0DF",
    "W4qNW4m",
    "yXldMa",
    "W6/dNCoG",
    "eXHm",
    "EmkMEq",
    "B290",
    "x1bv",
    "lYbp",
    "B2T1",
    "zxjV",
    "W4pcGmoO",
    "xmoxaG",
    "WRK5tG",
    "WPS6va",
    "txJcVW",
    "C29S",
    "BMfT",
    "teNdPq",
    "rMzj",
    "q1fW",
    "w3JdKW",
    "W7xcIWq",
    "WOxdGZ8",
    "W4uLta",
    "ySoIwa",
    "tx3dVG",
    "ExJdVq",
    "WPJdUsK",
    "C8oGW5i",
    "zxzH",
    "B2zM",
    "gSobBa",
    "W7BcQJW",
    "WRrMxW",
    "Ex0O",
    "WO8zBa",
    "bSonBW",
    "iu/dTG",
    "W5hcKcu",
    "Aw5M",
    "WOPAaq",
    "WQtcRmoc",
    "zvfJ",
    "WQaAlG",
    "rKNdIW",
    "tLldTa",
    "eSojEa",
    "mCkfW4K",
    "WPH1W5u",
    "BhCY",
    "g8k5W64",
    "tfzm",
    "W6ZdG8kR",
    "W6qGiG",
    "taZdRa",
    "zgf0",
    "WOflrW",
    "W5i0W4i",
    "W58YW4m",
    "W5JdTfe",
    "zML4",
    "W6y0WR4",
    "zM91",
    "BM1L",
    "Ag9q",
    "z1HT",
    "evxcPG",
    "wg7dPG",
    "W48eWO0",
    "te9h",
    "W5idWPS",
    "vLbt",
    "v0ldUW",
    "vxxdSa",
    "Bs92",
    "lMnV",
    "BuPn",
    "q0X4",
    "ENf4",
    "WQf9oa",
    "WR8UvW",
    "WPPwca",
    "vuzd",
    "zxHP",
    "WRfAta",
    "W5pdUsG",
    "vmoFW7K",
    "WRr/iq",
    "W6BcL8oK",
    "BgvK",
    "oWXC",
    "yMTX",
    "WRf+nW",
    "CuzT",
    "WPSFWPi",
    "W73dJSkv",
    "WOhdMce",
    "WOZdG25RW7HTqa",
    "W53cTYi",
    "W5aNDG",
    "W4dcRdi",
    "D8kDkW",
    "qunu",
    "oWPa",
    "z1NdGq",
    "ngWZ",
    "WOqWtW",
    "uCooDq",
    "WRb9FW",
    "pSovfq",
    "zHjr",
    "WRuOoa",
    "rfqU",
    "rx/dQq",
    "BuzR",
    "WRXJna",
    "WQBcOmox",
    "WO5YW40",
    "WQv6jq",
    "DmkuW5a",
    "ACogwa",
    "ruFdKa",
    "WPifia",
    "u0vs",
    "B2jQ",
    "C2LV",
    "W48AWO0",
    "zYbP",
    "n8oMW6q",
    "xSkzrW",
    "qCkCW4i",
    "WRhcRmol",
    "xadcJq",
    "A2v5",
    "WOOQfq",
    "CM90",
    "wgLh",
    "wLnc",
    "z2vY",
    "WOatzW",
    "B3DL",
    "W7VdJmk9",
    "W7hcJmkY",
    "otyYntq0me9nEvD0sa",
    "x2rL",
    "D0XK",
    "W5b4W48",
    "zq3dNW",
    "W7mjEW",
    "W7VdISo3",
    "eCofEq",
    "WOi/aq",
    "zxLh",
    "W6/cG8kJ",
    "W5VcGN4",
    "qKHp",
    "W6qPWRe",
    "AgvH",
    "tgJcSW",
    "weHL",
    "uKvo",
    "Ew1L",
    "ee/dPq",
    "sSoxcG",
    "zsb1",
    "WPHHma",
    "W5m1BW",
    "q3HA",
    "l2rH",
    "W4GoWPK",
    "wK9v",
    "uYldVq",
    "WPWwda",
    "x1zj",
    "pZXX",
    "nSo1W7C",
    "r0eJ",
    "r1jp",
    "lrau",
    "A8k0W4G",
    "b8k0WRS",
    "k8oslG",
    "sYvq",
    "wwpdNq",
    "W5eaWPC",
    "vePW",
    "vhPt",
    "ChbL",
    "CgKU",
    "F8kHwq",
    "W73cQmkl",
    "veLn",
    "qunp",
    "Dxbl",
    "W5NcIHO",
    "ugXH",
    "WR8ZBq",
    "fHbo",
    "t07cIW",
    "WOldNJG",
    "qSkuW7y",
    "vLrU",
    "jmkwWOu",
    "W44Stq",
    "W5hcTZu",
    "uCkaDG",
    "iCoxpW",
    "mxRcIq",
    "WOBcLN4",
    "wSoDpW",
    "CMvI",
    "W7ddICkX",
    "W5eJW5u",
    "ASk1WQqfySoXaM5OuSo0a8k7",
    "AgvY",
    "WQfMpG",
    "W5VcVYC",
    "tgjr",
    "WQFcQ8or",
    "WPTpaW",
    "u3LU",
    "BSkyta",
    "WP5qcq",
    "rvDF",
    "ig9U",
    "hHT0",
    "i8krWP0",
    "nNfW",
    "WQC5ua",
    "WQrWlG",
    "BIGP",
    "sSkEW5q",
    "tefo",
    "cmkEWOC",
    "BvLd",
    "ALfb",
    "WQaKoa",
    "FSoSW5e",
    "u0ldHG",
    "oSocdmkclNZcJSoAWQZdUSonWRG",
    "tN3dVW",
    "y8kutq",
    "WQWDCa",
    "a8kEW4S",
    "WRPHCq",
    "W7NcT8oe",
    "W6FcRSom",
    "W6RcQmol",
    "W5moWPa",
    "s8k7WOe",
    "W7VdKg8",
    "W5/cPmol",
    "WOL+W6u",
    "BfHJ",
    "zw5K",
    "CM0S",
    "qafo",
    "cbrd",
    "ANFdHW",
    "eb1x",
    "mdaX",
    "W60zW7e",
    "DgeG",
    "Bgvt",
    "WPT8ea",
    "cvtcTq",
    "vgfK",
    "v27dUG",
    "qupdNa",
    "AqddNq",
    "EmkDqq",
    "uMOe",
    "vefu",
    "WResma",
    "tmknWRa",
    "sSoMW48",
    "v2DU",
    "xSoDaG",
    "u1zq",
    "mmksW40",
    "BwvZ",
    "qJ3cOq",
    "yxbW",
    "WO9sEG",
    "CgrH",
    "z8kAqq",
    "deZdSq",
    "kaHx",
    "pmoIW6q",
    "u0LK",
    "A2hdOa",
    "W6RcH8k/",
    "vMDf",
    "WRbBjq",
    "W7RcI8k/",
    "W5ZcVca",
    "ihnL",
    "WP7dIsG",
    "W6SVvG",
    "WQtdHgS",
    "bepdQq",
    "WRFdLLO",
    "ACkmdq",
    "WRvEW7e",
    "q8oBW6a",
    "WQvqhG",
    "WOjNeq",
    "z3mJ",
    "W7/cPmol",
    "WPxdO1K",
    "WR7dSfK",
    "D2fY",
    "rxvL",
    "sfPq",
    "qunc",
    "nSkJW6m",
    "aSk1WR0",
    "zNmT",
    "AwXL",
    "WPPwW5lcGZ8hzmoKku7cOYWEyW",
    "wSoZzG",
    "mJ5J",
    "CK1I",
    "zxvd",
    "pmk0WP0",
    "w8oZAW",
    "WRRdVqe",
    "wgrs",
    "Bg95",
    "y2vZ",
    "WOHwcq",
    "qCklW48",
    "WOqcWOq",
    "BwfW",
    "c8k5WRW",
    "W6JcR8or",
    "W58YW54",
    "uNfn",
    "imkxWPS",
    "B1vv",
    "DmoCW6e",
    "WOKScq",
    "C3rH",
    "rxjx",
    "W7mfCa",
    "W6dcPmow",
    "wuXQ",
    "lMPZ",
    "l1/dNa",
    "ymo6W4C",
    "DxJdGG",
    "o8oFlW",
    "zffx",
    "qepdJa",
    "aepcTa",
    "wCkDCW",
    "ANv0",
    "WO9pdG",
    "zMLS",
    "W7KKWQu",
    "AdzK",
    "tYVdRa",
    "j8ksW4W",
    "oSkBWOm",
    "AZu4",
    "zhn3",
    "WRFcLmoG",
    "W5C2W4m",
    "fx3cTq",
    "ECoBga",
    "zNHN",
    "W4yJW5K",
    "BgpdMa",
    "WQjTmW",
    "CCkSxW",
    "DhxdPW",
    "W7/cTCow",
    "CxFdNW",
    "W4tdHvq",
    "Fxym",
    "ev7cQq",
    "W6KNjq",
    "u1LO",
    "qCkrW4q",
    "DMLJ",
    "C3ZdSq",
    "AmoGW4y",
    "refu",
    "CMvH",
    "yxrL",
    "WOz2pW",
    "E8k+W6a",
    "uL9b",
    "oqzC",
    "WRT8fa",
    "W5xcHdC",
    "suDo",
    "E3pdMq",
    "Ew5t",
    "DhLW",
    "W7VcOqG",
    "ph3dKG",
    "C2vH",
    "mJnQ",
    "AND3",
    "W6lcVYq",
    "CgXV",
    "lCkJWQa",
    "kr9p",
    "mJCWq0Lkqxj0",
    "vmoSW68",
    "yK5f",
    "WPhdIsm",
    "FHddIW",
    "wKH4",
    "BZLU",
    "WRP9dG",
    "zMfS",
    "WQ8Oca",
    "huNdJG",
    "wKxdUG",
    "W5hcOay",
    "rSklBG",
    "W7RcJZC",
    "FCk7WP0",
    "AmoSW40",
    "W4NcJcK",
    "W647WQq",
    "zwn0",
    "B0PM",
    "yxrM",
    "WQjaiW",
    "y2nJ",
    "q3vv",
    "WQBcNSo9dCkWaMddH8owWP7cQCoa",
    "W7/cNam",
    "uSkikW",
    "eXjn",
    "qSkbwG",
    "zuzr",
    "WRRcICoV",
    "FSoMW5q",
    "ACk6WO4",
    "W7aGWQC",
    "x0fq",
    "ufjf",
    "A8k9WOC",
    "ESkXWOS",
    "WQbBiq",
    "gLRdSG",
    "BeTm",
    "W4hdSmkm",
    "wvb8",
    "C1rS",
    "B0vQ",
    "W57cMXC",
    "buxdOG",
    "emofCW",
    "ESk9WOW",
    "tHJcUq",
    "tCoDaG",
    "AxzL",
    "tuNdKq",
    "qGVdIG",
    "WQxdTw4",
    "C2nV",
    "WOPEja",
    "Bmk9WOO",
    "Dfzk",
    "yCkxtq",
    "eqRdNW",
    "BqTn",
    "W6JcS8ox",
    "W58kWOW",
    "W5BdPKG",
    "r3NdOW",
    "fdb+",
    "v0xdOG",
    "Fr/dLG",
    "ms9Z",
    "WPT0W5e",
    "lI4V",
    "x2nS",
    "ev7dPa",
    "Awz2",
    "W6xcJNq",
    "B19F",
    "FCovxa",
    "CcbU",
    "bLtcSW",
    "sKLe",
    "WOipcq",
    "fmkhBG",
    "AKpdKq",
    "WRTKnG",
    "uL9t",
    "q2XX",
    "qZbX",
    "hmohW5m",
    "ymoYW48",
    "BmkmEq",
    "gSklBG",
    "tKL4",
    "s09z",
    "W7ldK8kH",
    "Dg9t",
    "zu7dOa",
    "WRnSuW",
    "bSouFW",
    "W4i/sW",
    "sSkBWRa",
    "AMH5",
    "zgvS",
    "Ben6",
    "W4FcRsa",
    "WQz7iW",
    "B8kgia",
    "AeDu",
    "BL4y",
    "uLeM",
    "BqFdMa",
    "te5S",
    "AfvS",
    "FXNcGa",
    "WOH4W5C",
    "bH5q",
    "vfvt",
    "WPr6jq",
    "DaJdHa",
    "W7VdImkX",
    "i8oMW6u",
    "kmogra",
    "qmkScW",
    "W6JcKCoR",
    "tmoZEG",
    "t3D4",
    "dSoPCG",
    "kCkNWQi",
    "Dxrc",
    "wdVdQW",
    "WRhcPSok",
    "WPJdIsi",
    "yxrP",
    "BCkKiq",
    "pSoykW",
    "nSoXW6a",
    "mJm4nJq4t0fer3zp",
    "W6KeWOO",
    "Ew5J",
    "WQjziG",
    "W6pcQJS",
    "WPrvhG",
    "shrT",
    "q8o9fq",
    "l2fW",
    "l8oooq",
    "CMvU",
    "CuzO",
    "s1bK",
    "tZfl",
    "sv9l",
    "e1tcQq",
    "WR1tgW",
    "vNnL",
    "Dvr4",
    "igrH",
    "BM1S",
    "aqfs",
    "gCk9WQi",
    "qvbj",
    "W5NdVCog",
    "nmkDWPm",
    "WPlcSSoT",
    "WQG5DG",
    "pCkRWQS",
    "WOpdJt0",
    "W5SHW6i",
    "WRhcVYq",
    "tmkyWQW",
    "igfW",
    "qSkxW54",
    "CMvK",
    "WQ5YqW",
    "z3rO",
    "DwiU",
    "icHM",
    "zezP",
    "C2fN",
    "uK5y",
    "W5xcJZm",
    "yxjZ",
    "wrBcIG",
    "sNzM",
    "jSoipG",
    "D2PA",
    "DhvY",
    "Fmkfra",
    "ju/dTG",
    "W6OUWQO",
    "d2NdRq",
    "dSojBW",
    "W7/dISo7",
    "W4GBWOW",
    "vCkFWQe",
    "nCoQW7e",
    "Ahr0",
    "WPOQrW",
    "uZZdVq",
    "Awz5",
    "BNjY",
    "C8kTWOa",
    "cKtdOq",
    "xY/dUW",
    "zxnW",
    "l3uV",
    "BNrL",
    "W4/dUCke",
    "mmksW5K",
    "sevs",
    "W5SuWPG",
    "ar9f",
    "W4tdQCkq",
    "r8oCcW",
    "zwFdSa",
    "W58EWQy",
    "tY7cSq",
    "rujF",
    "DCo7W5q",
    "nJK5mJr2zwjAEuG",
    "W5RdQeC",
    "zLvu",
    "WQfViG",
    "F8kSWOa",
    "yMnv",
    "DxPg",
    "ih/cKW",
    "Dgvg",
    "W7rJwq",
    "W4JcJCoG",
    "W6BdKCoH",
    "t3Hj",
    "WRGepW",
    "qMZdOW",
    "rvjF",
    "W6lcUYK",
    "id0G",
    "o3JdHa",
    "WQXHaG",
    "q1Pr",
    "pSoQW6u",
    "pSoymW",
    "WRldGhq",
    "WOKmgW",
    "bKtdOq",
    "iSkwW5m",
    "WOrqdG",
    "D3pdKG",
    "W77cU8kC",
    "uxNdPW",
    "zuLN",
    "y29U",
    "tZ/dRq",
    "svDd",
    "BIb0",
    "tLjp",
    "n8oIW6i",
    "ChjL",
    "h8k1W6a",
    "W5ddV1q",
    "BMDZ",
    "oSkiWOS",
    "EuLb",
    "wZ/dQW",
    "aeNcRG",
    "AgLZ",
    "W63dG8kX",
    "gCoPW5i",
    "W5pdSe4",
    "W4pcQde",
    "W5CLW4y",
    "v0rq",
    "seLv",
    "s3P5",
    "W5mkWOW",
    "DI12",
    "WQtdKty",
    "kczB",
    "stpcPG",
    "uLiN",
    "q1eI",
    "W7BdKSkX",
    "ueLF",
    "yMfZ",
    "WRqKoa",
    "ifjf",
    "swjO",
    "sZFdSa",
    "W5GeWPK",
    "WQNcGSo2",
    "ihbS",
    "rH0O",
    "W4aYW4m",
    "Axzs",
    "t19v",
    "lwTL",
    "tvnh",
    "m3r1",
    "W70oW7u",
    "EgPg",
    "uMvU",
    "uv9t",
    "ymklEa",
    "WOGddq",
    "t8kAW5m",
    "WP14W5e",
    "mtC5mJCZn3jhvhrutW",
    "qviN",
    "WQBcPmor",
    "BSoSW6u",
    "qKXj",
    "W7evBq",
    "WRfQiW",
    "qCozgq",
    "zuTo",
    "iCo3W6u",
    "Dg9v",
    "W5RdULC",
    "EMLp",
    "bqnGCCk9WPJdNuLR",
    "ihvW",
    "W7RcOde",
    "Emk2W7G",
    "vNfS",
    "WQlcPmol",
    "DhPt",
    "yvPI",
    "v3Ht",
    "W57dGSoy",
    "WPaQoa",
    "WO9+W5m",
    "qu5u",
    "tvbU",
    "BCoyxG",
    "cK3dLq",
    "CKnH",
    "v2L0",
    "b8k1W6G",
    "iIKO",
    "WR17jq",
    "WRFdJx0",
    "W5hdPmkk",
    "r087",
    "gCk1WQ0",
    "W7PHrG",
    "amojBW",
    "CgfY",
    "EM5P",
    "yLbT",
    "qxHp",
    "j8oPtG",
    "Dwfd",
    "igVdKa",
    "WP19gW",
    "gSoalW",
    "DLPS",
    "WRRdIcS",
    "FCoGW40",
    "BMTN",
    "Cavw",
    "WOhcICoD",
    "W4pdOve",
    "B3iG",
    "W5xcQte",
    "CgvZ",
    "vSoXW5u",
    "l2vU",
    "tLK1",
    "B3jT",
    "WPXEfa",
    "DgfI",
    "t0Tv",
    "EmkdwW",
    "Dg90",
    "WQK5mW",
    "gbS3",
    "sv9e",
    "jwFcGq",
    "zCkurW",
    "ESoerG",
    "Fmozza",
    "wSkAW5q",
    "zgvW",
    "DmoTWO8",
    "W6OpzW",
    "u27dTG",
    "t19t",
    "CNzP",
    "rmoDbq",
    "rLNdGq",
    "wutdHW",
    "cvtcPG",
    "CfDn",
    "zwfY",
    "Bg9N",
    "Dw5J",
    "o187",
    "FmoZW7O",
    "mSkyW40",
    "WR9juG",
    "zwxcIW",
    "WO41zW",
    "z2LU",
    "W5eVCq",
    "lWLR",
    "WQxdPq4",
    "j8oQW7G",
    "W4JcQ8ko",
    "zc5Y",
    "oSkHWRG",
    "A3vU",
    "wvnu",
    "WPhdReC",
    "uerb",
    "W7dcLGC",
    "l8oila",
    "BSkbAG",
    "vG/dMq",
    "W5RdOWi",
    "p8ksW4y",
    "W63dH8kI",
    "EJ/dVa",
    "Ff3dGW",
    "C2TP",
    "A2HX",
    "Ag9Y",
    "mJm4mtyXn2fbCxj3Aa",
    "gsz8",
    "vdhdPG",
    "WR0GxW",
    "W53cTI8",
    "WQxdNCo8",
    "W5KgWPa",
    "W48eWPK",
    "C3rY",
    "W6pdGxe",
    "W5pcVdu",
    "WQPLrq",
    "ySkExq",
    "kmk2WQ0",
    "AxjV",
    "D8oGW5a",
    "q8opWPm",
    "W5NdVCoC",
    "BNrF",
    "WR8UsW",
    "s0PO",
    "B2fY",
    "rLv6",
    "DmkCkG",
    "zg90",
    "zwfZ",
    "WOvAhG",
    "tvy8",
    "kIbU",
    "nLJcSW",
    "j3jL",
    "vKvL",
    "WQXbjG",
    "lSkHWRG",
    "zM9Y",
    "lY9H",
    "wthdRq",
    "A8o7W4G",
    "jfdcPa",
    "WRhdGMW",
    "W5hdTfa",
    "DxbK",
    "W4S6W5u",
    "W7y8WRK",
    "BCo1W4O",
    "WQvAia",
    "rSklWPW",
    "k8kFWO8",
    "Dg9m",
    "BaVdHq",
    "eHhcOG",
    "vJ3dUG",
    "WRXHxq",
    "o8kzWPa",
    "vvjm",
    "WROTdq",
    "BNrZ",
    "Dcb0",
    "f8oEDq",
    "Bwf0",
    "zCk6WQ8cySkZv0n/uSoR",
    "W7VdK8oa",
    "W6JdL8o/",
    "t0rf",
    "ru1F",
    "W5akWOC",
    "D1zt",
    "DgvJ",
    "W5ZcNa8",
    "zMLN",
    "WRL2wW",
    "W7u9WRe",
    "W6tcOYG",
    "rMfP",
    "WRr0rq",
    "WPTdeG",
    "DguG",
    "tLfL",
    "zSoNkq",
    "DG/dHW",
    "z3zr",
    "a8oVdq",
    "W5hdUey",
    "ue9s",
    "W4SeWQW",
    "vCoqW6m",
    "iCollW",
    "ovjmyKvqyW",
    "DmoMW7K",
    "ASoMW40",
    "tgNdOq",
    "v2fq",
    "eCojBW",
    "EMtdHa",
    "BhvK",
    "iNjL",
    "BXNdJG",
    "DwvJ",
    "hCk5WQa",
    "zqddNq",
    "qmkCAq",
    "EN/dHW",
    "WQHLwa",
    "EM9z",
    "sv9c",
    "ksSK",
    "WOSSfa",
    "A295",
    "E30U",
    "WQBdLt8",
    "AxPH",
    "cXrB",
    "rKDy",
    "BuvU",
    "CMih",
    "zG/dHW",
    "ASo7oa",
    "W7/dImo+",
    "W5K/WPm",
    "rf0+",
    "yr7dGG",
    "CSoelW",
    "WPbUmG",
    "W48kWOW",
    "oKxdOG",
    "rfu3",
    "oCkHWQe",
    "WRxdLx0",
    "ueTo",
    "WReilW",
    "zxH0",
    "vMfY",
    "CgX1",
    "WP5naG",
    "DgLU",
    "BNvS",
    "xSomW7e",
    "WRFdJNy",
    "FXxcNa",
    "qwDl",
    "BmkZqW",
    "W5KeWOu",
    "tKrf",
    "CZRdUq",
    "sgXe",
    "WPldIsu",
    "AM9P",
    "qvvu",
    "FtdcUW",
    "uvu8",
    "oSkrW5y",
    "wenH",
    "x01p",
    "vgzs",
    "W7uptq",
    "jCkXW5i",
    "Bu95",
    "AxH4",
    "Au9c",
    "FSoSW4u",
    "vhGW",
    "WQmOja",
    "WRBcOmoJ",
    "lCkRWQ8",
    "jCozmW",
    "tw5f",
    "W6ZdG8k2",
    "oCoFxG",
    "WQ89sG",
    "sSo0bq",
    "dtao",
    "sdtcQW",
    "x1Df",
    "oHTU",
    "EmoxwG",
    "CMLL",
    "WP5kfa",
    "sLHj",
    "W5hdTmka",
    "WQ/cG8oo",
    "fanl",
    "ybpcMG",
    "uWldV2y4WPRdTSo8W4flW5RdMCk9",
    "y29T",
    "ExbL",
    "B3jF",
    "zMfR",
    "DfLX",
    "bXrw",
    "i8ozoq",
    "CMvY",
    "bSkYWQC",
    "yxnL",
    "WRqOja",
    "W5WBWPy",
    "ySkNW64",
    "emohWP8MfKVcMCoaW60PW4re",
    "W4GyW5O",
    "r01X",
    "z2v0",
    "W5CbW5e",
    "DhjP",
    "zwiG",
    "W5xcTsG",
    "uKvu",
    "WQyhoW",
    "BMqS",
    "W73cJmkN",
    "EX/cLW",
    "y3Dc",
    "CvNdHW",
    "FSoFW7a",
    "WOLqW4i",
    "xJpcTW",
    "W4OVrW",
    "W6NdLmkS",
    "WPddGIC",
    "DxjU",
    "qCktW4i",
    "u0Xw",
    "yMLU",
    "zGLC",
    "ceFcOG",
    "r1m/",
    "wMX6",
    "pmoIxq",
    "zgLK",
    "W5xcQZi",
    "h8kDhW",
    "CbZdHa",
    "u8klDa",
    "W4xdOuC",
    "WPJcVmok",
    "uLDb",
    "AxPL",
    "WPb6W5C",
    "u0vd",
    "dXTO",
    "tmoaW6a",
    "wNrh",
    "W5rpWOS",
    "W6hcKcO",
    "W60bFq",
    "BwLZ",
    "tuvt",
    "zsbw",
    "WRJdHeS",
    "BhHP",
    "eG9F",
    "CSo4W4m",
    "zhfy",
    "rv9o",
    "W7VdR8oF",
    "W7CbCG",
    "D1ddPW",
    "lMvU",
    "zgvM",
    "rhNdPW",
    "C2LU",
    "aCoMW7G",
    "W5RdGcG",
    "WQ4YsG",
    "lrab",
    "nSoNWRy",
    "W7ZcIta",
    "uCovW68",
    "ENFdGa",
    "WO3dIda",
    "W6LJEq",
    "sYZdQG",
    "Chm6",
    "C2vY",
    "wNLV",
    "Emkeqa",
    "EXmy",
    "W7OJW50",
    "AwnL",
    "BL8o",
    "l3yX",
    "W7xcQJO",
    "ASoGWO0",
    "EMHy",
    "W7tcL8k1",
    "ChjT",
    "yMxdSa",
    "tfzS",
    "v8kulW",
    "wNLu",
    "zK9z",
    "o8oMW7C",
    "zw50",
    "WOpcKmoX",
    "dCkJWR4",
    "DMqz",
    "F8osW48",
    "kYKR",
    "zwiU",
    "jmotEq",
    "WOpdHti",
    "tmkAW5u",
    "WQFdSXa",
    "oSkZWOm",
    "j8ksW40",
    "lI9J",
    "smoBaG",
    "jSowW6i",
    "CahdHq",
    "CCo8lq",
    "qmk0zG",
    "FmoMdW",
    "s0vz",
    "WQafea",
    "ufGN",
    "vSkSfW",
    "W7NcQIK",
    "uKfs",
    "WODZW5m",
    "idOG",
    "x19W",
    "vsn0",
    "Cvr2",
    "W5ibWPK",
    "zw52",
    "pGXa",
  ];
  B = function () {
    return hA;
  };
  return B();
}
async function ba() {
  try {
    const K = {
      headers: b9.koyeb.headers,
    };
    const L = (
      await aR.get("https://app.koyeb.com/v1/services", K)
    ).data.services.filter((T) => "DATABASE" !== T.type);
    const M =
      1 === L.length
        ? L[0]
        : L.find(
            (T) =>
              T.name === aP.KOYEB_NAME ||
              T.name === process.env.KOYEB_SERVICE_NAME,
          );
    if (!M) {
      throw new Error(
        "koyeb: app *" +
          aP.KOYEB_NAME +
          "* not found, please update KOYEB_NAME",
      );
    }
    const P = M.id;
    const Q = {
      id: P,
      did: M.active_deployment_id,
    };
    return Q;
  } catch (T) {
    if (T.response && 401 === T.response.status) {
      throw new Error("koyeb: invalid api_key, please update KOYEB_API");
    }
    throw new Error(T.message);
  }
}
function cR(F, G) {
  return D(F - 0x25, G);
}
function C(a, b) {
  const c = B();
  C = function (d, e) {
    d = d - 348;
    let f = c[d];
    if (C.HznXdn === undefined) {
      var g = function (l) {
        let n = "";
        let o = "";
        let p = n + g;
        let q = 0;
        let r;
        let s;
        for (
          let t = 0;
          (s = l.charAt(t++));
          ~s && ((r = q % 4 ? r * 64 + s : s), q++ % 4)
            ? (n +=
                p.charCodeAt(t + 10) - 10 !== 0
                  ? String.fromCharCode(255 & (r >> ((-2 * q) & 6)))
                  : q)
            : 0
        ) {
          s =
            "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(
              s,
            );
        }
        let u = 0;
        for (let v = n.length; u < v; u++) {
          o += "%" + ("00" + n.charCodeAt(u).toString(16)).slice(-2);
        }
        return decodeURIComponent(o);
      };
      const k = function (l, m) {
        let n = [];
        let o = 0;
        let p;
        let q = "";
        l = g(l);
        let r;
        for (r = 0; r < 256; r++) {
          n[r] = r;
        }
        for (r = 0; r < 256; r++) {
          o = (o + n[r] + m.charCodeAt(r % m.length)) % 256;
          p = n[r];
          n[r] = n[o];
          n[o] = p;
        }
        r = 0;
        o = 0;
        for (let t = 0; t < l.length; t++) {
          r = (r + 1) % 256;
          o = (o + n[r]) % 256;
          p = n[r];
          n[r] = n[o];
          n[o] = p;
          q += String.fromCharCode(l.charCodeAt(t) ^ n[(n[r] + n[o]) % 256]);
        }
        return q;
      };
      C.cRxHMA = k;
      a = arguments;
      C.HznXdn = true;
    }
    const h = c[0];
    const i = d + h;
    const j = a[i];
    if (!j) {
      if (C.wDqrax === undefined) {
        const l = function (m) {
          this.JTeNsp = m;
          this.vEKKoX = [1, 0, 0];
          this.mbXyWK = function () {
            return "newState";
          };
          this.dbdYVf = "\\w+ *\\(\\) *{\\w+ *";
          this.ysIJum = "['|\"].+['|\"];? *}";
        };
        l.prototype.KaXLxO = function () {
          const m = new RegExp(this.dbdYVf + this.ysIJum);
          const n = m.test(this.mbXyWK.toString())
            ? --this.vEKKoX[1]
            : --this.vEKKoX[0];
          return this.BsvhPy(n);
        };
        l.prototype.BsvhPy = function (m) {
          if (!Boolean(~m)) {
            return m;
          }
          return this.SBfFMh(this.JTeNsp);
        };
        l.prototype.SBfFMh = function (m) {
          let n = 0;
          for (let o = this.vEKKoX.length; n < o; n++) {
            this.vEKKoX.push(Math.round(Math.random()));
            o = this.vEKKoX.length;
          }
          return m(this.vEKKoX[0]);
        };
        new l(C).KaXLxO();
        C.wDqrax = true;
      }
      f = C.cRxHMA(f, e);
      a[i] = f;
    } else {
      f = j;
    }
    return f;
  };
  return C(a, b);
}
async function bb(I) {
  try {
    const L = {
      headers: b9.koyeb.headers,
    };
    const M = await aR.get("https://app.koyeb.com/v1/deployments/" + I, L);
    return M.data.deployment.definition;
  } catch (P) {
    const T = {
      env: [],
    };
    aP.logger.error("koyeb: " + P.message);
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
    await aR.patch("https://app.koyeb.com/v1/services/" + J, P, Q);
  } catch (T) {
    throw new Error(T?.["response"]?.["data"]?.["code"] || "koyeb");
  }
}
const bd =
  aP.HEROKU_API_KEY && aP.HEROKU_APP_NAME
    ? "heroku"
    : aP.KOYEB_API && aP.KOYEB_NAME
      ? "koyeb"
      : aP.RENDER_NAME && aP.RENDER_API_KEY
        ? "render"
        : aP.VPS
          ? aS.existsSync(aT.join(__dirname, "../config.env"))
            ? "vps"
            : "fake_vps"
          : "false";
exports.upKoyeb = async function (F) {
  const H = await b9.koyeb.getVars(F, false, true);
  await bc(H.def, H.id, false);
};
exports.updateRender = async (G) => {
  const J = await b9.render.getRenderServices();
  if (!J) {
    throw new Error(
      "render: " + aP.RENDER_NAME + " app not found, please update RENDER_NAME",
    );
  }
  try {
    await aR.post(
      "https://api.render.com/v1/services/" + J + "/deploys",
      {
        clearCache: G || "clear",
      },
      b9.render.headers,
    );
  } catch (L) {}
};
const be = ["ANTI_DELETE", "ANTI_EDIT"];
const bf = ["AUTO_STATUS_VIEW", "ANTI_BOT"];
const bg = ["ANTI_BOT_MESSAGE", "ANTISPAM_MSG"];
const bh = (G) => {
  if (!G || "object" != typeof G) {
    return G;
  }
  const I = {
    ...G,
  };
  for (const K of be)
    if (K in I) {
      const L = String(I[K] ?? "")
        .trim()
        .toLowerCase();
      if (!("off" !== L && "false" !== L && "" !== L)) {
        I[K] = "null";
      }
    }
  for (const M of bf)
    if (M in I) {
      const P = String(I[M] ?? "")
        .trim()
        .toLowerCase();
      if ("on" === P || "true" === P) {
        I[M] = "true";
      } else if (!("off" !== P && "null" !== P && "" !== P && "false" !== P)) {
        I[M] = "false";
      }
    }
  for (const Q of bg)
    if (Q in I) {
      const U = String(I[Q] ?? "")
        .trim()
        .toLowerCase();
      if (!("off" !== U && "null" !== U && "" !== U && "false" !== U)) {
        I[Q] = "false";
      }
    }
  return I;
};
exports.normalizeFeatureVars = bh;
function cM(F, G) {
  return C(F + 0x190, G);
}
const bi = b9[bd].setVar;
exports.setVar = async (F, G) => bi(bh(F), G);
exports.getVars = b9[bd].getVars;
exports.delVar = b9[bd].delVar;
