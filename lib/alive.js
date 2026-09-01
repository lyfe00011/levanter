(function (x, y) {
  const z = x();
  while (true) {
    try {
      const A =
        -parseInt(v(603, "i%XM")) / 1 +
        (-parseInt(v(572, "cFqz")) / 2) * (-parseInt(w(531, 0xf1)) / 3) +
        parseInt(v(624, "DZiZ")) / 4 +
        parseInt(w(716, 0x22a)) / 5 +
        (-parseInt(w(377, 0x525)) / 6) * (parseInt(w(533, 0x504)) / 7) +
        (-parseInt(w(587, 0x605)) / 8) * (-parseInt(v(510, "lrq!")) / 9) +
        (-parseInt(w(386, 0x24a)) / 10) * (parseInt(v(630, "XsH!")) / 11);
      if (A === y) {
        break;
      } else {
        z.push(z.shift());
      }
    } catch (B) {
      z.push(z.shift());
    }
  }
})(q, 508041);
const W = (function () {
  let y = true;
  return function (z, A) {
    const C = y
      ? function () {
          if (A) {
            const D = A.apply(z, arguments);
            A = null;
            return D;
          }
        }
      : function () {};
    y = false;
    return C;
  };
})();
function bI(x, y) {
  return w(x - 0x10f, y);
}
function w(a, b) {
  const c = q();
  w = function (d, e) {
    d = d - 369;
    let f = c[d];
    if (w.WoMgjP === undefined) {
      var g = function (l) {
        let n = "";
        let o = "";
        let p = n + g;
        let r = 0;
        let s;
        let t;
        for (
          let u = 0;
          (t = l.charAt(u++));
          ~t && ((s = r % 4 ? s * 64 + t : t), r++ % 4)
            ? (n +=
                p.charCodeAt(u + 10) - 10 !== 0
                  ? String.fromCharCode(255 & (s >> ((-2 * r) & 6)))
                  : r)
            : 0
        ) {
          t =
            "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(
              t,
            );
        }
        let v = 0;
        for (let x = n.length; v < x; v++) {
          o += "%" + ("00" + n.charCodeAt(v).toString(16)).slice(-2);
        }
        return decodeURIComponent(o);
      };
      w.DaJWNS = g;
      a = arguments;
      w.WoMgjP = true;
    }
    const h = c[0];
    const i = d + h;
    const j = a[i];
    if (!j) {
      const k = function (l) {
        this.qFkTkZ = l;
        this.nyOfMn = [1, 0, 0];
        this.vcKmuN = function () {
          return "newState";
        };
        this.AZYLPw = "\\w+ *\\(\\) *{\\w+ *";
        this.mcXuBt = "['|\"].+['|\"];? *}";
      };
      k.prototype.vLytvc = function () {
        const l = new RegExp(this.AZYLPw + this.mcXuBt);
        const m = l.test(this.vcKmuN.toString())
          ? --this.nyOfMn[1]
          : --this.nyOfMn[0];
        return this.fZesDA(m);
      };
      k.prototype.fZesDA = function (l) {
        if (!Boolean(~l)) {
          return l;
        }
        return this.gfhxxa(this.qFkTkZ);
      };
      k.prototype.gfhxxa = function (l) {
        let m = 0;
        for (let n = this.nyOfMn.length; m < n; m++) {
          this.nyOfMn.push(Math.round(Math.random()));
          n = this.nyOfMn.length;
        }
        return l(this.nyOfMn[0]);
      };
      new k(w).vLytvc();
      f = w.DaJWNS(f);
      a[i] = f;
    } else {
      f = j;
    }
    return f;
  };
  return w(a, b);
}
const X = W(this, function () {
  return X.toString()
    .search("(((.+)+)+)+$")
    .toString()
    .constructor(X)
    .search("(((.+)+)+)+$");
});
X();
const Y = (function () {
  let A = true;
  return function (B, C) {
    const E = A
      ? function () {
          if (C) {
            const G = C.apply(B, arguments);
            C = null;
            return G;
          }
        }
      : function () {};
    A = false;
    return E;
  };
})();
function bJ(x, y) {
  return w(y - 0x19c, x);
}
function bC(x, y) {
  return w(y + 0xfb, x);
}
const Z = Y(this, function () {
  const y = function () {
    let D;
    try {
      D = Function('return (function() {}.constructor("return this")( ));')();
    } catch (F) {
      D = window;
    }
    return D;
  };
  const z = y();
  const A = (z.console = z.console || {});
  const B = ["log", "warn", "info", "error", "exception", "table", "trace"];
  for (let C = 0; C < B.length; C++) {
    const D = Y.constructor.prototype.bind(Y);
    const E = B[C];
    const F = A[E] || D;
    D.__proto__ = Y.bind(Y);
    D.toString = F.toString.bind(F);
    A[E] = D;
  }
});
Z();
function v(a, b) {
  const c = q();
  v = function (d, e) {
    d = d - 369;
    let f = c[d];
    if (v.zhmsnN === undefined) {
      var g = function (l) {
        let n = "";
        let o = "";
        let p = n + g;
        let r = 0;
        let s;
        let t;
        for (
          let u = 0;
          (t = l.charAt(u++));
          ~t && ((s = r % 4 ? s * 64 + t : t), r++ % 4)
            ? (n +=
                p.charCodeAt(u + 10) - 10 !== 0
                  ? String.fromCharCode(255 & (s >> ((-2 * r) & 6)))
                  : r)
            : 0
        ) {
          t =
            "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(
              t,
            );
        }
        let w = 0;
        for (let x = n.length; w < x; w++) {
          o += "%" + ("00" + n.charCodeAt(w).toString(16)).slice(-2);
        }
        return decodeURIComponent(o);
      };
      const k = function (l, m) {
        let n = [];
        let o = 0;
        let p;
        let r = "";
        l = g(l);
        let t;
        for (t = 0; t < 256; t++) {
          n[t] = t;
        }
        for (t = 0; t < 256; t++) {
          o = (o + n[t] + m.charCodeAt(t % m.length)) % 256;
          p = n[t];
          n[t] = n[o];
          n[o] = p;
        }
        t = 0;
        o = 0;
        for (let u = 0; u < l.length; u++) {
          t = (t + 1) % 256;
          o = (o + n[t]) % 256;
          p = n[t];
          n[t] = n[o];
          n[o] = p;
          r += String.fromCharCode(l.charCodeAt(u) ^ n[(n[t] + n[o]) % 256]);
        }
        return r;
      };
      v.UZcsMv = k;
      a = arguments;
      v.zhmsnN = true;
    }
    const h = c[0];
    const i = d + h;
    const j = a[i];
    if (!j) {
      if (v.PyNdBK === undefined) {
        const l = function (m) {
          this.GuOBqP = m;
          this.yfPStX = [1, 0, 0];
          this.eZanKS = function () {
            return "newState";
          };
          this.ORYzpI = "\\w+ *\\(\\) *{\\w+ *";
          this.IQcaex = "['|\"].+['|\"];? *}";
        };
        l.prototype.eVOWat = function () {
          const m = new RegExp(this.ORYzpI + this.IQcaex);
          const n = m.test(this.eZanKS.toString())
            ? --this.yfPStX[1]
            : --this.yfPStX[0];
          return this.FyQxLY(n);
        };
        l.prototype.FyQxLY = function (m) {
          if (!Boolean(~m)) {
            return m;
          }
          return this.SKPKji(this.GuOBqP);
        };
        l.prototype.SKPKji = function (m) {
          let n = 0;
          for (let o = this.yfPStX.length; n < o; n++) {
            this.yfPStX.push(Math.round(Math.random()));
            o = this.yfPStX.length;
          }
          return m(this.yfPStX[0]);
        };
        new l(v).eVOWat();
        v.PyNdBK = true;
      }
      f = v.UZcsMv(f, e);
      a[i] = f;
    } else {
      f = j;
    }
    return f;
  };
  return v(a, b);
}
function bG(x, y) {
  return v(y + 0x30e, x);
}
function bE(x, y) {
  return v(y + 0x331, x);
}
function bF(x, y) {
  return w(x - 0x4a, y);
}
function bH(x, y) {
  return v(x + 0x2d3, y);
}
const {
  readFileSync: a0,
  existsSync: a1,
  mkdirSync: a2,
  readdirSync: a3,
  writeFileSync: a4,
} = require("fs-extra");
const a5 = require("path");
const { setAlive: a6, getAlive: a7 } = require("./db/alive");
const {
  secondsToHms: a8,
  download: a9,
  getQuote: aa,
  isUrl: ab,
  lang: ac,
} = require("./index");
const ad = a5.join(__dirname, "../media/alive");
function bD(x, y) {
  return w(y - 0x1d0, x);
}
function bV(x, y) {
  return v(y + 0x2bc, x);
}
function bK(x, y) {
  return v(x + 0x3b8, y);
}
if (!a1(ad)) {
  a2(ad);
}
const ae = (x) => {
  if (x) {
    const z = Number(process.uptime());
    const A = Math.floor(z / 3600);
    const B = Math.floor((z % 3600) / 60);
    const C = Math.floor((z % 3600) % 60);
    return (
      (0 == A ? "" : A + "h ") +
      (0 == B ? "" : B + "m ") +
      (0 == C ? "" : C + "s")
    );
  }
  return a8(process.uptime());
};
exports.getUptime = ae;
const af = async (x, y) => {
  if (y) {
    x = x.replace(y, "");
  }
  x = x.replace("#uptime", ae()).trim();
  if (/#quote/.test(x)) {
    const A = await aa();
    x = x.replace("#quote", A || "");
  }
  return x;
};
exports.uptimeQuoteReplace = af;
exports.aliveMessage = async (A, B) => {
  const C = {
    biOZS: function (I, J) {
      return I(J);
    },
    bEmVJ: function (I, J) {
      return I / J;
    },
    mRUoM: function (I, J) {
      return I % J;
    },
    cUAOJ: function (I, J) {
      return I % J;
    },
    tgXhG: function (I, J) {
      return I % J;
    },
    qSwXd: function (I, J) {
      return I + J;
    },
    yfUSb: function (I, J) {
      return I + J;
    },
    EOIdo: function (I, J) {
      return I == J;
    },
    kNQjT: function (I, J) {
      return I + J;
    },
    SASPf: function (I, J) {
      return I == J;
    },
    pZCVl: "text",
    teUbt: function (I, J) {
      return I == J;
    },
    DpBjb: "get",
    nGJEI: function (I, J) {
      return I(J);
    },
    yLJUs: "null",
    vseAT: function (I, J) {
      return I(J);
    },
    DIRyD: "http",
    QLOYN: function (I, J) {
      return I !== J;
    },
    xQdAL: "Nmbaj",
    wkyhc: "SGjVc",
    bWERz: function (I, J, K) {
      return I(J, K);
    },
    eLozA: function (I, J, K) {
      return I(J, K);
    },
    mIOPg: function (I, J, K, L, M, N) {
      return I(J, K, L, M, N);
    },
    ZdMrq: function (I, J, K) {
      return I(J, K);
    },
    pLuPe: function (I, J) {
      return I != J;
    },
    GGhIH: function (I, J) {
      return I === J;
    },
    dXQHa: "dtnNa",
    NCGeP: "tPeqS",
    croGQ: function (I, J, K) {
      return I(J, K);
    },
    BEpZt: "&gif",
  };
  let D = C.pZCVl;
  if (A && (B.sudo || B.fromMe)) {
    if (C.teUbt(C.DpBjb, A)) {
      const K = await C.nGJEI(a7, B.id);
      const L = {
        msg: K?.["message"],
        options: {},
        type: D,
      };
      return L;
    }
    let I = C.yLJUs;
    let J = C.vseAT(ab, A);
    if (J && J.startsWith(C.DIRyD)) {
      if (C.QLOYN(C.xQdAL, C.wkyhc)) {
        const M = await C.bWERz(a9, J, B.id);
        if (M?.["ext"]) {
          C.eLozA(a4, a5.join(ad, B.id + "." + M.ext), M.buffer);
          I = M.ext;
          D = M.type;
        } else {
          J = C.yLJUs;
        }
      } else {
        const O = A.apply(B, arguments);
        C = null;
        return O;
      }
    }
    await C.mIOPg(a6, J, A, D, I, B.id);
  }
  const E = {};
  let F = "";
  const G = await C.biOZS(a7, B.id);
  if (!G) {
    return {
      msg: await C.nGJEI(af, ac.plugins.alive["default"]),
      options: E,
      type: D,
    };
  }
  G.message = await C.ZdMrq(af, G.message, G.url);
  if (C.pLuPe(C.pZCVl, G.type)) {
    if (C.GGhIH(C.dXQHa, C.dXQHa)) {
      const O = C.biOZS(a3, ad).find((Q) => Q.startsWith(B.id));
      if (!O) {
        if (C.QLOYN(C.NCGeP, C.NCGeP)) {
          const R = C.biOZS(C, D.uptime());
          const S = E.floor(C.bEmVJ(R, 3600));
          const T = F.floor(C.bEmVJ(C.mRUoM(R, 3600), 60));
          const U = G.floor(C.cUAOJ(C.tgXhG(R, 3600), 60));
          return C.qSwXd(
            C.yfUSb(
              C.EOIdo(0, S) ? "" : C.kNQjT(S, "h "),
              C.EOIdo(0, T) ? "" : C.yfUSb(T, "m "),
            ),
            C.SASPf(0, U) ? "" : C.kNQjT(U, "s"),
          );
        } else {
          const R = await C.croGQ(a9, G.url, B.id);
          if (R.error) {
            F = G.message;
            D = C.pZCVl;
            return {
              msg: F,
              options: E,
              type: D,
            };
          }
          C.bWERz(a4, a5.join(ad, B.id + "." + R.ext), R.buffer);
        }
      }
      F = C.nGJEI(a0, a5.join(ad, O));
      E.caption = G.message;
      const P = E.caption.includes(C.BEpZt);
      if (P) {
        E.caption = E.caption.replace(C.BEpZt, "");
        E.gifPlayback = P;
      }
      D = G.type;
    } else {
      const T = F.constructor.prototype.bind(G);
      const U = H[I];
      const V = J[U] || T;
      T.__proto__ = K.bind(L);
      T.toString = V.toString.bind(V);
      M[U] = T;
    }
  } else {
    F = G.message;
  }
  const H = {
    msg: F,
    options: E,
    type: D,
  };
  return H;
};
function q() {
  const cg = [
    "qCkmla",
    "ELHe",
    "W6dcOSkjW7CVlaBcVvnXWQC",
    "WPNdOZS",
    "rKRcVa",
    "W7nbyq",
    "dmkAWPy",
    "WRVcSIy",
    "W6XmWQm",
    "WOpdTYCoi31j",
    "iNjL",
    "Dwn0",
    "WRJdOSou",
    "CgX1",
    "BSowDa",
    "B19F",
    "Ahr0",
    "DfbL",
    "W7/dJCoq",
    "WRqhxa",
    "WO8ZEq",
    "WQaDeq",
    "W6RcQIu",
    "W6a2sq",
    "W4f9W6u",
    "pSk6yG",
    "zxH0",
    "C29S",
    "W58euG",
    "WOBcQmkf",
    "mJC5AhHkA3Lg",
    "BwvZ",
    "mJiWntKXzfrXtK16",
    "bSkOWRy",
    "wuH4",
    "W4HfWOK",
    "tmoZEG",
    "W610WOG",
    "WOBcUmkA",
    "DfPO",
    "zgvM",
    "DgLV",
    "aZ0Q",
    "W7/dOwiPWQFcGSobWQZcOCkHWPS",
    "yMLU",
    "lSkEqW",
    "ouFdNq",
    "zfHr",
    "WP/cTmkg",
    "CMv0",
    "DhjP",
    "qMvf",
    "vMtcTW",
    "DxjU",
    "WQ01nq",
    "W4XRWQ8",
    "WPb8WR4",
    "kcGO",
    "BMrL",
    "Dujc",
    "surZ",
    "wfWx",
    "lISP",
    "D0vi",
    "seBcUG",
    "zMvY",
    "fmoxW54",
    "uevO",
    "WP/cNrK",
    "WQVdNCop",
    "u0ft",
    "pqjXW6FdIqpdSWX/ASkk",
    "Ch3cPq",
    "W6tdGSoU",
    "v3Hd",
    "zNjV",
    "vmkzia",
    "B8o7fW",
    "EvOp",
    "W7OIEG",
    "xCoKeG",
    "W50eWRq",
    "ywXP",
    "tM1I",
    "W6FcRZe",
    "W6iOyW",
    "ntuXmJmYofjPBKL5zW",
    "WOdcVSkb",
    "C0D7",
    "qMTW",
    "CMnO",
    "W6RcKSk3",
    "CfPd",
    "W7ddN8oL",
    "D2T5",
    "WQtcO0K",
    "z2dcOG",
    "xfWl",
    "vLLT",
    "WRtcKCk9",
    "yLyj",
    "uxvV",
    "whKIt8klDCodCsFdGCo+W7e",
    "vNfc",
    "z2LU",
    "C3rY",
    "yxbW",
    "x8o3da",
    "EwjH",
    "wK0x",
    "WQW0za",
    "W6KDWODIdCocB8k3W58",
    "DhnA",
    "y2fW",
    "Exrs",
    "zL0S",
    "AM9P",
    "iIKO",
    "Aw1L",
    "eIP6",
    "dsXH",
    "EffK",
    "E30U",
    "v8k7qgfNeY5NWPKMECklpG",
    "Chne",
    "u8o1bq",
    "WOy7DW",
    "WQ1gja",
    "zNmT",
    "hWtdVIqFWOFcMs9yW5C",
    "CMvW",
    "rMzr",
    "tKnh",
    "WOBcTmkg",
    "jmo6W7m",
    "WPaSW5q",
    "W4/dTmkq",
    "WQ3cJSkf",
    "W7SYBG",
    "yMLp",
    "wuhcUG",
    "W6VdNSka",
    "jMDP",
    "tvv0",
    "W6RdImoZ",
    "Aw5J",
    "u0r3",
    "aSoeW4m",
    "W5TKW6e",
    "WRCrCq",
    "W4RdPcq",
    "yLDf",
    "pCo3W5m",
    "WRucWPC",
    "W6XNFa",
    "zMLU",
    "zxjY",
    "WPT1WOK",
    "hYiH",
    "ugfd",
    "WRlcJgq",
    "ChjV",
    "DhjH",
    "BCogaW",
    "CNrZ",
    "F8oymW",
    "zxHJ",
    "W7CfWRy",
    "D8kwWQaWkCkSDqdcTuGSWOe",
    "W5r4vmoOt8k7rx1frXLJWQC",
    "lGPv",
    "WQpcR0C",
    "v2Px",
    "umoAW6W",
    "kYKR",
    "W69Qva",
    "AeBcIW",
    "WRLFW5G",
    "BxnL",
    "W4Leya",
    "EMnY",
    "W53dPCoy",
    "Dgvs",
    "rmockG",
    "C2vH",
    "AgLZ",
    "icHM",
    "W7ryzW",
    "DuHf",
    "lmktWRC",
    "lI4V",
    "W6KZWRy",
    "lKpdUa",
    "rmkLfa",
    "reLs",
    "WQBcHIy",
    "W7HvW5q",
    "g8o1W6O",
    "BNvS",
    "z3rO",
    "WQlcTeq",
    "W6RdOJG",
    "mJq1mdCYogH3q3bPqW",
    "wNPT",
    "WRP3pmoeAg/dU0/cJxq",
    "ySoydG",
    "W6hdImoY",
    "W51ZW7q",
    "WOxcTCkQ",
    "lI9P",
    "DgLT",
    "Dgv4",
    "zMXV",
    "DgDy",
    "W6nwyW",
    "ndeYnJi4nuvwELnSrq",
    "W7GZWO8",
    "uh8H",
    "yMLZ",
    "CeX1",
    "BIb0",
    "WPrOpG",
    "r1PI",
    "wCoKbW",
    "WR3dPCox",
    "WPpcVw8",
    "mtC0AhfAEujU",
    "D1jn",
    "DhLW",
    "kmo2W4u",
    "lI9K",
    "W6RdUmon",
    "zhrU",
    "y8orna",
    "WPmyxW",
    "mJa2ntbUvM9lC2K",
    "WPdcUmkB",
    "yMpcOW",
    "Bu1L",
    "b8o6eW",
    "qKVcIq",
    "cCkMWRS",
    "ASoeyG",
    "Dw5J",
    "v2nO",
    "dmkfWRy",
    "rxfK",
    "DNnL",
    "Ewzv",
    "WPigkG",
    "zKRcOq",
    "vSkrkW",
    "WOXGmG",
    "D3DK",
    "WOBcSmkx",
    "EmovDq",
    "W7tdMCoY",
    "W5rLWP8",
    "WRq+Ea",
    "ySofna",
    "AMDJ",
    "WPJcSmkb",
    "ExbL",
    "BgfJ",
    "fCoRWRa",
    "tumt",
    "WQ1gWQ0",
    "DmoEmW",
    "Aw9U",
    "bhBdPW",
    "WQLpW44",
    "Dxb0",
    "qv3cVG",
    "x3yY",
    "zuXV",
    "W7XkWQO",
    "ChRcVG",
    "AMSn",
    "BwvK",
    "rhbc",
    "WPnGnG",
    "W7LuWQ0",
    "suXN",
    "owfSsvziCa",
    "WRPqWRm",
    "jepcPW",
    "WOFcNte",
    "WPtcTXu",
    "v2L0",
    "y29U",
    "gWm4",
    "kComW7W",
    "B3rL",
    "WOOdna",
    "EgXW",
    "xLhcQq",
    "zxb0",
    "W47dRZS",
    "ANbR",
    "W513WO8",
    "zLj2",
    "lmk0WRi",
    "CeTI",
    "edm9",
    "C3vM",
    "yvrm",
    "WR3cVJO",
    "cJSS",
    "Cxbj",
    "wMrn",
    "CgdcNW",
    "hYiS",
    "CCoSvG",
    "Bg9N",
    "qLvz",
    "D1ry",
    "y3jV",
    "fqtdUcLDW4lcNdrfW59YWRK",
    "whvw",
    "A05r",
    "BgvU",
    "y1vb",
    "D1PS",
    "dc7dTa",
    "AhLm",
    "xNrSW5VdSXpdH8kVWP4",
    "Dg9t",
    "B3iO",
    "WQm0yG",
    "EuXk",
    "ywnL",
    "sejU",
    "z8owW7u",
    "yxvS",
    "xKKt",
    "W5vcqa",
    "o8khEG",
    "AuPp",
    "ECohkq",
    "W5pcUSk6",
    "B3b0",
    "BKDk",
    "WPFdNCo2",
    "W4PKtG",
    "BxnN",
    "WONcPbK",
    "BIGP",
    "ptK7",
    "F8onyG",
    "WPu/da",
  ];
  q = function () {
    return cg;
  };
  return q();
}
