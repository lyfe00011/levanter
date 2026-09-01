(function (m, p) {
  const q = m();
  while (true) {
    try {
      const u =
        (parseInt(j(308, "me*I")) / 1) * (parseInt(k(680, 0x95)) / 2) +
        (parseInt(k(281, 0x15)) / 3) * (-parseInt(k(368, 0x126)) / 4) +
        -parseInt(k(296, -0x5f)) / 5 +
        parseInt(j(440, ")B[Y")) / 6 +
        -parseInt(j(257, "sbUb")) / 7 +
        parseInt(j(332, "Bs)v")) / 8 +
        (parseInt(k(412, 0x4fa)) / 9) * (parseInt(k(316, -0x16)) / 10);
      if (u === p) {
        break;
      } else {
        q.push(q.shift());
      }
    } catch (v) {
      q.push(q.shift());
    }
  }
})(h, 159792);
function bm(m, p) {
  return k(m - 0x26, p);
}
const Z = (function () {
  let p = true;
  return function (q, u) {
    const x = p
      ? function () {
          if (u) {
            const A = u.apply(q, arguments);
            u = null;
            return A;
          }
        }
      : function () {};
    p = false;
    return x;
  };
})();
function bo(m, p) {
  return k(p + 0x262, m);
}
function bl(m, p) {
  return k(m + 0xb0, p);
}
const a0 = Z(this, function () {
  return a0
    .toString()
    .search("(((.+)+)+)+$")
    .toString()
    .constructor(a0)
    .search("(((.+)+)+)+$");
});
a0();
function bp(m, p) {
  return k(p + 0x70, m);
}
const a1 = (function () {
  let m = true;
  return function (p, q) {
    const u = m
      ? function () {
          if (q) {
            const v = q.apply(p, arguments);
            q = null;
            return v;
          }
        }
      : function () {};
    m = false;
    return u;
  };
})();
function bt(m, p) {
  return j(p - 0xf4, m);
}
const a2 = a1(this, function () {
  let p;
  try {
    const v = Function('return (function() {}.constructor("return this")( ));');
    p = v();
  } catch (y) {
    p = window;
  }
  const q = (p.console = p.console || {});
  const u = ["log", "warn", "info", "error", "exception", "table", "trace"];
  for (let z = 0; z < u.length; z++) {
    const A = a1.constructor.prototype.bind(a1);
    const B = u[z];
    const C = q[B] || A;
    A.__proto__ = a1.bind(a1);
    A.toString = C.toString.bind(C);
    q[B] = A;
  }
});
a2();
function k(a, b) {
  const c = h();
  k = function (d, e) {
    d = d - 244;
    let f = c[d];
    if (k.CnTodE === undefined) {
      var g = function (m) {
        let o = "";
        let p = "";
        let q = o + g;
        let r = 0;
        let s;
        let t;
        for (
          let u = 0;
          (t = m.charAt(u++));
          ~t && ((s = r % 4 ? s * 64 + t : t), r++ % 4)
            ? (o +=
                q.charCodeAt(u + 10) - 10 !== 0
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
        for (let w = o.length; v < w; v++) {
          p += "%" + ("00" + o.charCodeAt(v).toString(16)).slice(-2);
        }
        return decodeURIComponent(p);
      };
      k.lBQmfH = g;
      a = arguments;
      k.CnTodE = true;
    }
    const i = c[0];
    const j = d + i;
    const l = a[j];
    if (!l) {
      const m = function (n) {
        this.irzeiA = n;
        this.UQHnQF = [1, 0, 0];
        this.ANmGgA = function () {
          return "newState";
        };
        this.wVDNhh = "\\w+ *\\(\\) *{\\w+ *";
        this.xmbkCs = "['|\"].+['|\"];? *}";
      };
      m.prototype.EArSff = function () {
        const n = new RegExp(this.wVDNhh + this.xmbkCs);
        const o = n.test(this.ANmGgA.toString())
          ? --this.UQHnQF[1]
          : --this.UQHnQF[0];
        return this.qLfGav(o);
      };
      m.prototype.qLfGav = function (n) {
        if (!Boolean(~n)) {
          return n;
        }
        return this.WSxzMT(this.irzeiA);
      };
      m.prototype.WSxzMT = function (n) {
        let o = 0;
        for (let p = this.UQHnQF.length; o < p; o++) {
          this.UQHnQF.push(Math.round(Math.random()));
          p = this.UQHnQF.length;
        }
        return n(this.UQHnQF[0]);
      };
      new m(k).EArSff();
      f = k.lBQmfH(f);
      a[j] = f;
    } else {
      f = l;
    }
    return f;
  };
  return k(a, b);
}
function bs(m, p) {
  return j(p + 0xae, m);
}
let a3;
function j(a, b) {
  const c = h();
  j = function (d, e) {
    d = d - 244;
    let f = c[d];
    if (j.VQySms === undefined) {
      var g = function (n) {
        let p = "";
        let q = "";
        let r = p + g;
        let s = 0;
        let t;
        let u;
        for (
          let v = 0;
          (u = n.charAt(v++));
          ~u && ((t = s % 4 ? t * 64 + u : u), s++ % 4)
            ? (p +=
                r.charCodeAt(v + 10) - 10 !== 0
                  ? String.fromCharCode(255 & (t >> ((-2 * s) & 6)))
                  : s)
            : 0
        ) {
          u =
            "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(
              u,
            );
        }
        let w = 0;
        for (let x = p.length; w < x; w++) {
          q += "%" + ("00" + p.charCodeAt(w).toString(16)).slice(-2);
        }
        return decodeURIComponent(q);
      };
      const m = function (n, o) {
        let p = [];
        let q = 0;
        let r;
        let t = "";
        n = g(n);
        let u;
        for (u = 0; u < 256; u++) {
          p[u] = u;
        }
        for (u = 0; u < 256; u++) {
          q = (q + p[u] + o.charCodeAt(u % o.length)) % 256;
          r = p[u];
          p[u] = p[q];
          p[q] = r;
        }
        u = 0;
        q = 0;
        for (let v = 0; v < n.length; v++) {
          u = (u + 1) % 256;
          q = (q + p[u]) % 256;
          r = p[u];
          p[u] = p[q];
          p[q] = r;
          t += String.fromCharCode(n.charCodeAt(v) ^ p[(p[u] + p[q]) % 256]);
        }
        return t;
      };
      j.ZOQwZm = m;
      a = arguments;
      j.VQySms = true;
    }
    const i = c[0];
    const k = d + i;
    const l = a[k];
    if (!l) {
      if (j.ryYhuG === undefined) {
        const n = function (o) {
          this.EEYhnf = o;
          this.yMMgGl = [1, 0, 0];
          this.aTSEOo = function () {
            return "newState";
          };
          this.LwVvoS = "\\w+ *\\(\\) *{\\w+ *";
          this.TOQdbD = "['|\"].+['|\"];? *}";
        };
        n.prototype.dQsxJG = function () {
          const o = new RegExp(this.LwVvoS + this.TOQdbD);
          const p = o.test(this.aTSEOo.toString())
            ? --this.yMMgGl[1]
            : --this.yMMgGl[0];
          return this.MQOJmQ(p);
        };
        n.prototype.MQOJmQ = function (o) {
          if (!Boolean(~o)) {
            return o;
          }
          return this.AOtKHu(this.EEYhnf);
        };
        n.prototype.AOtKHu = function (o) {
          let p = 0;
          for (let q = this.yMMgGl.length; p < q; p++) {
            this.yMMgGl.push(Math.round(Math.random()));
            q = this.yMMgGl.length;
          }
          return o(this.yMMgGl[0]);
        };
        new n(j).dQsxJG();
        j.ryYhuG = true;
      }
      f = j.ZOQwZm(f, e);
      a[k] = f;
    } else {
      f = l;
    }
    return f;
  };
  return j(a, b);
}
const a4 = {};
function bq(m, p) {
  return j(m - 0x1be, p);
}
function br(m, p) {
  return j(p - 0x2e1, m);
}
function bn(m, p) {
  return j(m + 0x11, p);
}
a4.access_type = "offline";
a4.scope = [
  "https://www.googleapis.com/auth/drive.file",
  "https://www.googleapis.com/auth/calendar.events",
  "https://www.googleapis.com/auth/tasks",
  "https://www.googleapis.com/auth/youtube",
];
a4.prompt = "consent";
const a5 = new Proxy(
  {},
  {
    get: (m, p) => ((a3 ??= require("googleapis").google), a3[p]),
  },
);
const { getGAuth: a6, setGAuth: a7, deleteGAuth: a8 } = require("./db");
const a9 = async (m = "0") => {
  let q = await a6("google_creds", m);
  if (!q) {
    throw new Error(
      "missing google credentials. use .gauth import to add them.",
    );
  }
  const u = q.installed ? "installed" : q.web ? "web" : null;
  if (!u) {
    throw new Error(
      'Invalid Google credentials: Missing "installed" or "web" key.',
    );
  }
  const v = q[u];
  return new a5.auth.OAuth2(
    v.client_id,
    v.client_secret,
    Array.isArray(v.redirect_uris) ? v.redirect_uris[0] : v.redirect_uris,
  );
};
const aa = async (m = "0") => {
  try {
    const u = await a9(m);
    let v = await a6("google_token", m);
    if (v) {
      u.setCredentials(v);
      const x = await u.getAccessToken();
      if (x && x.token) {
        v.access_token = x.token;
        u.setCredentials(v);
        await a7("google_token", u.credentials, m);
      }
      return u;
    }
  } catch (y) {
    return null;
  }
  return null;
};
const ab = async (m = "0") => (await a9(m)).generateAuthUrl(a4);
const ac = async (m, p = "0") => {
  const q = {
    figpl: "code=",
    dwGVI: function (v, z) {
      return v !== z;
    },
    wJwUv: "gUcOL",
    BpkXy: "vYzUE",
    XoAqG: "code",
    eaCHK: function (v, z) {
      return v !== z;
    },
    IXBtg: "TSCBu",
    HusbZ: "mOYxV",
    GnKmT: "code ",
    gJoFY: function (v, z) {
      return v === z;
    },
    YaFwt: "ZmzVM",
    ztpTx: "VfrDJ",
    yiUfL: function (v, x) {
      return v(x);
    },
    nXMGJ: function (v, x, y, z) {
      return v(x, y, z);
    },
    QYvAo: "google_token",
  };
  let u = m;
  if (m.includes(q.figpl)) {
    try {
      if (q.dwGVI(q.wJwUv, q.BpkXy)) {
        u = new URL(m).searchParams.get(q.XoAqG) || u;
      } else {
        q = u;
      }
    } catch (x) {
      if (q.eaCHK(q.IXBtg, q.HusbZ)) {
        const y = m.match(/[?&]code=([^&]+)/);
        if (y) {
          u = y[1];
        }
      } else {
        const A = y
          ? function () {
              if (A) {
                const M = I.apply(J, arguments);
                K = null;
                return M;
              }
            }
          : function () {};
        D = false;
        return A;
      }
    }
  } else if (m.startsWith(q.GnKmT)) {
    u = m.replace(q.GnKmT, "").trim();
  }
  try {
    if (q.gJoFY(q.YaFwt, q.ztpTx)) {
      if (v) {
        const B = A.apply(B, arguments);
        C = null;
        return B;
      }
    } else {
      const B = await q.yiUfL(a9, p);
      const { tokens: C } = await B.getToken(u);
      B.setCredentials(C);
      await q.nXMGJ(a7, q.QYvAo, C, p);
      return true;
    }
  } catch (D) {
    throw new Error(D.response?.["data"]?.["error_description"] || D.message);
  }
};
const ad = async (m, p = "0") => {
  if (!(m.installed ? "installed" : m.web ? "web" : null)) {
    throw new Error("Invalid credentials format");
  }
  await a7("google_creds", m, p);
};
const ae = async (m = "0") => {
  await a8("google_creds", m);
  await a8("google_token", m);
  await a8("task_pref", m);
};
function bk(m, p) {
  return k(m + 0x230, p);
}
module.exports = {
  getOAuth2Client: a9,
  refreshUserToken: aa,
  initiateUserToken: ab,
  validateUserCode: ac,
  getTaskPref: async (m) => (await a6("task_pref", m)) || "@default",
  setTaskPref: async (m, p) => await a7("task_pref", m, p),
  setGAuthCredentials: ad,
  clearGAuth: ae,
  isGAuthTokenActive: async (m = "0") => !!(await a6("google_token", m)),
};
function h() {
  const cj = [
    "dCoCpa",
    "BIb0",
    "W7BdRSo7",
    "DgfZ",
    "Dg90",
    "W6ddRmoZ",
    "DgfI",
    "pmoDhG",
    "W5BdS8kw",
    "DgGG",
    "zwrZ",
    "qgrL",
    "W7NdPg4",
    "W5ZdJSkR",
    "W6RdS8o6",
    "CMvK",
    "BhmU",
    "BdDf",
    "W4O7W7q",
    "ywnJ",
    "W58sW4C",
    "WO4BW7m",
    "Chm6",
    "yu1p",
    "s8k+W54",
    "vfnd",
    "Ac9K",
    "qNbR",
    "Bfzu",
    "zMf1",
    "dSo1pa",
    "CujQ",
    "tCkngG",
    "W48ala",
    "x3nL",
    "DCkOhW",
    "W5hcSgq",
    "sCkwgG",
    "DSknW5m",
    "W6fsqa",
    "Aw5Z",
    "CY5J",
    "W4BcO3i",
    "WOusW6G",
    "cYtcGW",
    "WPiLW5y",
    "W5ngqW",
    "igfK",
    "iIKO",
    "zw50",
    "W5JcUmo6",
    "tfHp",
    "pConEq",
    "Bxb0",
    "W6ZdSSo1",
    "z0PV",
    "e24K",
    "DuLY",
    "icHM",
    "B8ohja",
    "CSkbpa",
    "x3r5",
    "Dmohoq",
    "Dg9R",
    "dCoFlW",
    "W6PRqq",
    "WO92yq",
    "W7CqW5a",
    "y3jL",
    "W43dKCk1",
    "W7VcRhC",
    "W7ZcUIW",
    "zwfd",
    "W4Keoq",
    "z2f1",
    "B20V",
    "k2VcPq",
    "WQnMWPm",
    "ymk8Ca",
    "uLHu",
    "W5uVW7K",
    "W4JdHCkk",
    "sgrN",
    "W4/dJCkS",
    "WRWKW48",
    "ChjV",
    "WRzKWRm",
    "kKuO",
    "DLL6",
    "B3v0",
    "CNrZ",
    "mmovwq",
    "dgqM",
    "WQaPW4a",
    "E30U",
    "xmk7WOq",
    "zxnZ",
    "zgf0",
    "yCk9oG",
    "Bunm",
    "D2vI",
    "C2vU",
    "W5NcMcy",
    "Chfj",
    "WPeSwG",
    "CMv0",
    "W7xcLqW",
    "wmkxbq",
    "mqBcGG",
    "WPHGxW",
    "WRGPwq",
    "ySofka",
    "WRj4W5O",
    "WOKfBq",
    "zmkvW6e",
    "yxv0",
    "WPxdNJe",
    "BguG",
    "DgLH",
    "drCU",
    "kcGO",
    "Dg9t",
    "zsaU",
    "W4yNW6u",
    "W4dcSga",
    "serx",
    "ihrV",
    "W47cGmoN",
    "WPy+W6y",
    "zxjY",
    "y3rF",
    "AXjw",
    "WOGQdIzOW5fGpfpdI8ohWOuC",
    "WQFcRLu",
    "BgLU",
    "CMvW",
    "WPybW7O",
    "nNLcqxjjBa",
    "ELzi",
    "CYbM",
    "CfjZ",
    "a24S",
    "rrdcLa",
    "b2q8",
    "DgfS",
    "BNrY",
    "qxnQ",
    "oGWQ",
    "W6BdJW8",
    "y3jP",
    "B19F",
    "Dwn0",
    "W4tdLCkX",
    "W5aHW7S",
    "WObixeiaWQaB",
    "z1vJ",
    "q3jL",
    "zuLz",
    "BIGP",
    "mJyYmtHlEujNzeO",
    "W4nJtq",
    "ur1I",
    "WP/dJ8od",
    "CgHU",
    "D3CU",
    "WQNdLCk8",
    "DMvU",
    "Dw5J",
    "W5yila",
    "BgXL",
    "W5a4W70",
    "mCoamW",
    "rbFcOq",
    "zgvU",
    "WRLnuG",
    "WOy/d1ZdP0Pbxtyomb0",
    "WPpdNtS",
    "wxHS",
    "d8o9W4qLWOuFW4BcSCk2W53cKCkhWRS",
    "s1zf",
    "WPNcK8o2W6KWdqn8pmolmHC",
    "WQHqxq",
    "DhjP",
    "WRNdGCkq",
    "W5C2W70",
    "ELnS",
    "y29K",
    "W5hcRw8",
    "WR94aW",
    "y8kIWRu",
    "CMvZ",
    "x19W",
    "rMzd",
    "CM90",
    "sxDX",
    "twKD",
    "dmoBla",
    "WP4NWPu",
    "a8oDma",
    "mti5z3LSt2rS",
    "rKPu",
    "W5qDW6y",
    "W4JdO8oy",
    "W5iamW",
    "wwfg",
    "zciG",
    "W41TuG",
    "EhtcLq",
    "BMrH",
    "dMZcGa",
    "W5OcW4a",
    "rZxcPq",
    "W7xcPsK",
    "WQn7WOK",
    "ntiZnJqWEwLIy3j5",
    "W4tcJJi",
    "sgjH",
    "v2zu",
    "W44tnG",
    "vhDO",
    "WQCLWOy",
    "zhRcHW",
    "BhvK",
    "Dgvb",
    "yNLW",
    "A19W",
    "W7VdISk7WPVdGCk1W78",
    "W47cTmo4",
    "tHLW",
    "AGZcVG",
    "yxbP",
    "BgvK",
    "W5ddR8kf",
    "CwTs",
    "mtu1mJKZmg1vuurvBG",
    "WPhdNJa",
    "W4T6xq",
    "W7pdLCkQ",
    "WP8RWRi",
    "WRjfyG",
    "rmkAoq",
    "E3Oe",
    "WQnqdG",
    "WQvIfW",
    "A8ogDW",
    "WPRcNIO",
    "zK5A",
    "DhjH",
    "W5VdTmks",
    "lSokW6i",
    "WOLeWOaKybdcRmo9W5JcPYq5DW",
    "z3rO",
    "CffX",
    "ECkYW7a",
    "W6ldQYm",
    "f8kItq",
    "z2XL",
    "pmogyW",
    "BgDi",
    "W6tcQtm",
    "wg3cNW",
    "WOnUFW",
    "W5BdK8ox",
    "ASk6Ca",
    "W77dQYG",
    "W6xdTIy",
    "ugfY",
    "A2vU",
    "At9d",
    "W55ZxG",
    "zhDh",
    "W7fRrW",
    "BgvU",
    "aCoIW6q",
    "DhvY",
    "ihvZ",
    "W6VdUCoI",
    "ywXP",
    "WODOCa",
    "zcb0",
    "E8oFCG",
    "hLpcNa",
    "lY93",
    "s3FcNa",
    "W7lcVZq",
    "WQSsWQS",
    "mJmXndb0B2XwquS",
    "WRjYkG",
    "a8oEoG",
    "vCoHWPm",
    "sKvb",
    "t09b",
    "Chrd",
    "vKry",
    "WQ9kqa",
    "d14x",
    "AxjL",
    "W4lcSbi",
    "W6RdUCo3",
    "W6fWwW",
    "W5JcOSon",
    "W6BdKmo7",
    "AdLs",
    "x2LK",
    "BgTR",
    "tCkzWRC",
    "vu9q",
    "lCozyG",
    "W7DRxq",
    "b8obW4u",
    "WOz8qa",
    "rwPo",
    "W5WsW4a",
    "z29V",
    "tunX",
    "qwnJ",
    "ugHx",
    "tr8K",
    "wxtcKq",
    "EMTe",
    "mrFcMa",
    "WQOvW4K",
    "imoFza",
    "C3rH",
    "WOpcJfS",
    "svHc",
    "BKHu",
    "yMLU",
    "W4hdTWWfhmk7W7VdMCojhKC",
    "C2LU",
    "ovDNvLfcsW",
    "wCkBgG",
    "jWS4",
    "nXBcNW",
    "p8onW5G",
    "Dwz3",
    "W7DTwW",
    "aYKEkSklW7VcKCo2WRbkbG",
    "W4JdHcu",
    "lgBcUa",
    "v0X5",
    "rCkxaa",
    "n8oFwq",
    "WP/cOf0",
    "y29U",
    "a8kMra",
    "s0rg",
    "CI5L",
    "yCk5CG",
    "W7zWzG",
    "C2v0",
    "W6z8sq",
    "D2fY",
    "qur6",
    "BwTV",
    "A2v5",
    "WRNdNmkQ",
    "WO0rW74",
    "nCoJl8kGW5XinCoyWR7cMSom",
    "C2nV",
    "FCkOoq",
    "vvzy",
    "dSo6dW",
    "bstcHq",
    "W5PTxG",
    "FSk5W6m",
    "hCocoG",
    "lISP",
    "iNjL",
    "W6BdUtK",
    "z2v0",
    "x3rV",
    "BwvZ",
    "CMnO",
    "W5ddMda",
    "CgPu",
    "W5C4W6u",
    "AgLZ",
    "W5bJvG",
    "WQSjWPO",
    "mtm2odKYrhvwu2rl",
    "zcbh",
    "omooW6q",
    "WO0KWQm",
    "rhzh",
    "FwZcKG",
    "W51RwG",
    "eWZcGG",
    "W7JcMHS",
    "emkXqW",
    "WRKWsq",
    "FSkLvq",
    "sCkVWPi",
    "DgLV",
    "C3rY",
    "B3iO",
    "B29N",
    "yxnR",
    "n8k0xG",
    "Dcrh",
    "ksSK",
    "DtXC",
    "W6ddOCoy",
    "y2XP",
    "ChrP",
    "WQ1vvG",
    "WQj+vW",
    "WOrHEW",
    "W5/cPCoN",
    "nMC6",
    "zxHJ",
    "W51aWQq4tCofWO8sDG",
    "WPCWtW",
    "nGRcGG",
    "wvrp",
    "o8onW5K",
    "iGOS",
    "AdxdPq",
    "W4ddHmkH",
    "oSohEq",
    "Bhm6",
    "yxbW",
    "W4/dJSkH",
    "twVcSa",
    "xxpcJa",
    "v3nd",
    "WOqxW7a",
    "WPdcSgq",
    "C2vH",
    "Bxig",
    "W4lcOSoU",
    "zxjH",
    "DxjP",
    "vb1M",
    "W6VdJtS",
    "s0Dx",
    "WPNdNmks",
    "W5qhoq",
    "tg5i",
  ];
  h = function () {
    return cj;
  };
  return h();
}
