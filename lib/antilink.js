function d0(v, x) {
  return k(x + 0x315, v);
}
function co(v, x) {
  return q(x - 0x1e4, v);
}
(function (v, x) {
  const y = v();
  while (true) {
    try {
      const z =
        -parseInt(q(533, 0x66b)) / 1 +
        -parseInt(k(708, "meK)")) / 2 +
        parseInt(k(705, "GTRv")) / 3 +
        (parseInt(k(500, "Zr3r")) / 4) * (-parseInt(q(858, 0x7a8)) / 5) +
        parseInt(k(667, ")3Ay")) / 6 +
        -parseInt(k(576, "X#af")) / 7 +
        (parseInt(q(472, 0x48b)) / 8) * (parseInt(k(651, "^k35")) / 9);
      if (z === x) {
        break;
      } else {
        y.push(y.shift());
      }
    } catch (A) {
      y.push(y.shift());
    }
  }
})(j, 997275);
function cZ(v, x) {
  return k(v - 0x2fa, x);
}
function k(a, b) {
  const c = j();
  k = function (d, e) {
    d = d - 451;
    let f = c[d];
    if (k.uvYaaR === undefined) {
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
        let j = 0;
        let q;
        let r = "";
        n = g(n);
        let t;
        for (t = 0; t < 256; t++) {
          p[t] = t;
        }
        for (t = 0; t < 256; t++) {
          j = (j + p[t] + o.charCodeAt(t % o.length)) % 256;
          q = p[t];
          p[t] = p[j];
          p[j] = q;
        }
        t = 0;
        j = 0;
        for (let u = 0; u < n.length; u++) {
          t = (t + 1) % 256;
          j = (j + p[t]) % 256;
          q = p[t];
          p[t] = p[j];
          p[j] = q;
          r += String.fromCharCode(n.charCodeAt(u) ^ p[(p[t] + p[j]) % 256]);
        }
        return r;
      };
      k.GobPqb = m;
      a = arguments;
      k.uvYaaR = true;
    }
    const h = c[0];
    const i = d + h;
    const l = a[i];
    if (!l) {
      if (k.UgsKdD === undefined) {
        const n = function (o) {
          this.AIvmce = o;
          this.jsyiIl = [1, 0, 0];
          this.QvlpVM = function () {
            return "newState";
          };
          this.fIJnSX = "\\w+ *\\(\\) *{\\w+ *";
          this.iPGrzG = "['|\"].+['|\"];? *}";
        };
        n.prototype.dMqLYI = function () {
          const o = new RegExp(this.fIJnSX + this.iPGrzG);
          const p = o.test(this.QvlpVM.toString())
            ? --this.jsyiIl[1]
            : --this.jsyiIl[0];
          return this.xDlyqe(p);
        };
        n.prototype.xDlyqe = function (o) {
          if (!Boolean(~o)) {
            return o;
          }
          return this.AyIeDf(this.AIvmce);
        };
        n.prototype.AyIeDf = function (o) {
          let p = 0;
          for (let q = this.jsyiIl.length; p < q; p++) {
            this.jsyiIl.push(Math.round(Math.random()));
            q = this.jsyiIl.length;
          }
          return o(this.jsyiIl[0]);
        };
        new n(k).dMqLYI();
        k.UgsKdD = true;
      }
      f = k.GobPqb(f, e);
      a[i] = f;
    } else {
      f = l;
    }
    return f;
  };
  return k(a, b);
}
function cn(v, x) {
  return q(v - 0x62, x);
}
function q(a, b) {
  const c = j();
  q = function (d, e) {
    d = d - 451;
    let f = c[d];
    if (q.CPiEnI === undefined) {
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
        for (let w = n.length; v < w; v++) {
          o += "%" + ("00" + n.charCodeAt(v).toString(16)).slice(-2);
        }
        return decodeURIComponent(o);
      };
      q.BnZQBt = g;
      a = arguments;
      q.CPiEnI = true;
    }
    const h = c[0];
    const i = d + h;
    const k = a[i];
    if (!k) {
      const l = function (m) {
        this.bEqTMC = m;
        this.fmBpql = [1, 0, 0];
        this.IiKTEp = function () {
          return "newState";
        };
        this.yTcswz = "\\w+ *\\(\\) *{\\w+ *";
        this.tJmVnV = "['|\"].+['|\"];? *}";
      };
      l.prototype.iZQEYG = function () {
        const m = new RegExp(this.yTcswz + this.tJmVnV);
        const n = m.test(this.IiKTEp.toString())
          ? --this.fmBpql[1]
          : --this.fmBpql[0];
        return this.vGNdQT(n);
      };
      l.prototype.vGNdQT = function (m) {
        if (!Boolean(~m)) {
          return m;
        }
        return this.AtEaks(this.bEqTMC);
      };
      l.prototype.AtEaks = function (m) {
        let n = 0;
        for (let o = this.fmBpql.length; n < o; n++) {
          this.fmBpql.push(Math.round(Math.random()));
          o = this.fmBpql.length;
        }
        return m(this.fmBpql[0]);
      };
      new l(q).iZQEYG();
      f = q.BnZQBt(f);
      a[i] = f;
    } else {
      f = k;
    }
    return f;
  };
  return q(a, b);
}
const aZ = (function () {
  let z = true;
  return function (A, B) {
    const D = z
      ? function () {
          if (B) {
            const E = B.apply(A, arguments);
            B = null;
            return E;
          }
        }
      : function () {};
    z = false;
    return D;
  };
})();
function cX(v, x) {
  return q(x - 0x2e2, v);
}
const b0 = aZ(this, function () {
  return b0
    .toString()
    .search("(((.+)+)+)+$")
    .toString()
    .constructor(b0)
    .search("(((.+)+)+)+$");
});
function cY(v, x) {
  return k(v + 0x297, x);
}
b0();
const b1 = (function () {
  const x = {
    uIuNe: function (A, B) {
      return A > B;
    },
    QInEW: function (A, B) {
      return A !== B;
    },
    wePQh: "kRZEX",
  };
  x.goegn = "NHsMQ";
  let z = true;
  return function (A, B) {
    const C = {
      lZZXw: function (E, F) {
        return E > F;
      },
      DZWoj: function (E, F) {
        return E !== F;
      },
      cBPEa: "kRZEX",
      hMdgE: x.goegn,
    };
    const D = z
      ? function () {
          if (B) {
            if (C.DZWoj(C.cBPEa, C.hMdgE)) {
              const E = B.apply(A, arguments);
              B = null;
              return E;
            } else {
              const G = A.split(",")
                .map((H) => H.trim())
                .filter((H) => H);
              B = G.filter((H) => !H.startsWith("!"));
              C = G.filter((H) => H.startsWith("!")).map((H) => H.slice(1));
              D = C.lZZXw(G.length, 0);
            }
          }
        }
      : function () {};
    z = false;
    return D;
  };
})();
const b2 = b1(this, function () {
  const x = function () {
    let C;
    try {
      C = Function('return (function() {}.constructor("return this")( ));')();
    } catch (E) {
      C = window;
    }
    return C;
  };
  const y = x();
  const z = (y.console = y.console || {});
  const A = ["log", "warn", "info", "error", "exception", "table", "trace"];
  for (let B = 0; B < A.length; B++) {
    const C = b1.constructor.prototype.bind(b1);
    const D = A[B];
    const E = z[D] || C;
    C.__proto__ = b1.bind(b1);
    C.toString = E.toString.bind(E);
    z[D] = C;
  }
});
b2();
function d1(v, x) {
  return q(v + 0x3ce, x);
}
const { getAntiLink: b3, getWord: b4 } = require("./db");
const b5 = require("./config");
const b6 = require("axios");
const b7 =
  /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|ftp:\/\/[a-zA-Z0-9]+\.[^\s]{2,}|[a-zA-Z0-9-]+\.[a-zA-Z]{2,})/gi;
const b8 = (v, x) => {
  try {
    const z = new URL(v.startsWith("http") ? v : "http://" + v);
    const A = z.hostname.toLowerCase();
    const B = z.pathname + z.search + z.hash;
    const C = x
      .toLowerCase()
      .replace(/^https?:\/\//, "")
      .replace(/^www\./, "");
    if (C.includes("/")) {
      const [D, ...E] = C.split("/");
      const F = "/" + E.join("/");
      return (
        !!(A === D || A === "www." + D || "www." + A === D) &&
        B.toLowerCase().startsWith(F.toLowerCase())
      );
    }
    {
      if (A === C) {
        return true;
      }
      if (C.startsWith("*.")) {
        const I = C.slice(2);
        return A.endsWith(I);
      }
      return A === "www." + C || "www." + A === C;
    }
  } catch (L) {
    return false;
  }
};
const b9 = async (x) => {
  try {
    const A = {
      timeout: 0xbb8,
    };
    const B = await b6.head(x.startsWith("http") ? x : "https://" + x, A);
    return B.status >= 200 && B.status < 404;
  } catch (C) {
    return false;
  }
};
const ba = (x) => {
  try {
    let A = x.trim().toLowerCase();
    A = A.replace(/^https?:\/\//, "");
    A = A.replace(/^ftp:\/\//, "");
    A = A.replace(/^www\./, "");
    if (!A.includes("?") && A.endsWith("/") && 2 === A.split("/").length) {
      A = A.slice(0, -1);
    }
    return A;
  } catch (B) {
    return x.trim().toLowerCase();
  }
};
function cq(v, x) {
  return k(x - 0x4a, v);
}
exports.normalizeUrl = ba;
exports.isAntiLink = async function (v, x, y) {
  const A = v.match(b7);
  if (!A || !A.length) {
    return false;
  }
  const B = await b3(x, y);
  if (!B || !B.enabled) {
    return false;
  }
  const { action: C, allowedUrls: D } = B;
  let E = [];
  let F = [];
  let G = false;
  if (D && "null" !== D) {
    const H = D.split(",")
      .map((I) => I.trim())
      .filter((I) => I);
    E = H.filter((I) => !I.startsWith("!"));
    F = H.filter((I) => I.startsWith("!")).map((I) => I.slice(1));
    G = H.length > 0;
  }
  if (!G && A && A.length > 0) {
    return C;
  }
  for (const I of A) {
    if (!I.match(/^https?:\/\//) && !I.match(/^www\./)) {
      if (!(await b9(I))) {
        continue;
      }
    }
    let J = false;
    for (const L of E)
      if (b8(I, L)) {
        J = true;
        break;
      }
    if (!J) {
      for (const M of F)
        if (b8(I, M)) {
          return C;
        }
      if (E.length > 0) {
        return C;
      }
    }
  }
  return false;
};
exports.isWords = async (v, x, y) => {
  const A = await b4(x, y);
  if (!A || !A.enabled || !A.words) {
    return false;
  }
  const B = A.words
    .split(",")
    .map((C) => C.trim())
    .filter((C) => C);
  if (!B.length) {
    return false;
  }
  for (const C of B) {
    if (new RegExp("\\b" + bc(C) + "\\b", "i").test(v)) {
      return A.action;
    }
  }
  return false;
};
const { getFloor: bb, escapeRegExp: bc } = require("./utils");
const {
  SPAM_LEVELS: bd,
  BASE_SCORES: be,
  SCORE_MODIFIERS: bf,
} = require("./constants/spam");
function cW(v, x) {
  return q(x + 0x31e, v);
}
function j() {
  const dK = [
    "ChvZ",
    "Dt3dVW",
    "B3bs",
    "yvjq",
    "yMLU",
    "mSoSWQm",
    "a8oAWOq",
    "ss/cNa",
    "BKXT",
    "zw5H",
    "C1DP",
    "WQb6ja",
    "W4vPhq",
    "C3rP",
    "jCkRaW",
    "WPxdRGW",
    "W4iXW7G",
    "WQe5nq",
    "WQPXWRa",
    "BM9Y",
    "BhvK",
    "p1RcGW",
    "lCkThW",
    "Ag9Z",
    "uMT1",
    "WO9+oW",
    "y2Lu",
    "ywrx",
    "WOv1sa",
    "zw91",
    "W5XmAa",
    "WRq8oG",
    "wKzw",
    "B2Dd",
    "x8oKxW",
    "uKja",
    "BwvU",
    "WPHGW70",
    "yLrx",
    "lISP",
    "wxn4",
    "Ahr0",
    "W4Drqa",
    "gIxdKq",
    "W5ldI8oZ",
    "WRDCW7u",
    "W5FcP1a",
    "zdZdJG",
    "d0e5",
    "WRXBAq",
    "DgP3",
    "CKnH",
    "qCkOW7G",
    "BwfW",
    "WOSpya",
    "WQCHmq",
    "EeLs",
    "EKvH",
    "hr7cHa",
    "W45rlG",
    "asXL",
    "WRBdOmou",
    "Egrl",
    "lI9J",
    "B3j0",
    "tuHc",
    "rMTt",
    "WPNcPmoy",
    "WPFcQSod",
    "W61KsW",
    "shrv",
    "uNvJ",
    "CHRcSW",
    "omogWRu",
    "kSoIWR0",
    "DNDN",
    "WRxcLSks",
    "WPTqwq",
    "gXTW",
    "hGhdLW",
    "nKVcKq",
    "W586W6W",
    "W6WXW60",
    "C29S",
    "WOHRjW",
    "W7aMsG",
    "WR1pWQW",
    "B2PP",
    "ndtcUW",
    "W6iNpa",
    "BslcUa",
    "ASoXeq",
    "aKNcGa",
    "Bxzh",
    "tgLU",
    "W6NdRmkL",
    "ywX0",
    "W4RdGCoo",
    "DhmV",
    "AhjL",
    "tufg",
    "WQHPW6G",
    "zMLS",
    "W5iDDq",
    "WO9Tiq",
    "WOHVja",
    "Bvbb",
    "yxbW",
    "aHFcGW",
    "a8oZoW",
    "CMvu",
    "d8oaW5W",
    "W5rpkW",
    "W5hcQgS",
    "WQ5SW7q",
    "Aw9U",
    "EaVdHG",
    "WRW+vG",
    "aahcQa",
    "suL5",
    "WOVdPXC",
    "ndy3ndm1mfzLBuLzzW",
    "E30U",
    "WPhdOZm",
    "W4NdK8of",
    "W7hdPSkg",
    "sKLM",
    "sSkJWRa",
    "mJeYmtuZnfjHAur5yq",
    "WRTGW6y",
    "Dwn0",
    "FCkyW5q",
    "W43cPLi",
    "WOzLWRq",
    "BbRcUG",
    "jSk8gq",
    "AxbH",
    "yHtcUW",
    "mtqYndaXmhD2CffmvW",
    "D1zK",
    "WOqfnq",
    "Cfn6",
    "mhFdUa",
    "qNbS",
    "v2L0",
    "W5PvjW",
    "DgfI",
    "B3rH",
    "WQu7pq",
    "CqNcSq",
    "zwf0",
    "WRxcOmkx",
    "W7i+W7y",
    "kYKR",
    "Au5S",
    "thbl",
    "WPBcKCoT",
    "WR80qvWUWRD1WQxcHhldICknWOS",
    "BwfS",
    "zbZdHW",
    "lSoSWPW",
    "a8oZnG",
    "WOGJxa",
    "W4xdI8oo",
    "zMP4",
    "WRC0kW",
    "W6NdU8kR",
    "Aw5K",
    "WQrnW6u",
    "rfbS",
    "laBdLq",
    "fKCJ",
    "ExbL",
    "W6CpgW",
    "WQfVWQa",
    "Dg90",
    "WQjcvW",
    "ywXS",
    "te9X",
    "vSk9WRC",
    "W4FdH8ou",
    "k2xcSG",
    "omoaWPq",
    "W7v9eq",
    "WOHcma",
    "qf5z",
    "B19F",
    "WPVcKmk4",
    "C3rH",
    "Bvfz",
    "Dg9t",
    "B3iO",
    "C3bH",
    "BgfJ",
    "W7tdRmkB",
    "WR0Rya",
    "W7yXuW",
    "r3Pq",
    "ESoJsa",
    "WQ7cJCo9",
    "W7q5W7i",
    "tKHZ",
    "FSkBWRK",
    "wffZ",
    "WO9tpa",
    "q8kFW4m",
    "WPpcGum",
    "zCojsa",
    "WOvLWQW",
    "zw5K",
    "ugDI",
    "jICy",
    "nbpcLa",
    "yuj4",
    "DxDc",
    "WONcV8ow",
    "WQZdRCo3",
    "WQ9yW64",
    "CNrZ",
    "s093",
    "pM/cPa",
    "C2XP",
    "W59uuW",
    "wCksW48",
    "WONcMu0",
    "WRL6lq",
    "WP9ina",
    "zgL1",
    "W7GPhG",
    "n8oIWR8",
    "WQFdNCoR",
    "W6bKha",
    "nepdPq",
    "W5KSCG",
    "kGddKa",
    "q8oHvq",
    "d2VcPW",
    "AMTU",
    "W5ZcOKS",
    "rfPx",
    "qxLk",
    "W67cQKS",
    "W4DdW6i",
    "hmovW5O",
    "oshdGa",
    "WRxcLSkh",
    "kcGO",
    "wLz4",
    "WORcQSof",
    "WOnSxq",
    "W5LdW78",
    "DhjH",
    "WOrRW4y",
    "W6W6qG",
    "hsP4",
    "DhvY",
    "r8kyW7K",
    "y0nm",
    "WQO6ma",
    "rhPq",
    "WQ9syG",
    "dLaK",
    "Dgrj",
    "y2TL",
    "WOjCjW",
    "zxb0",
    "pGBcMG",
    "zhLV",
    "mJrbEwPbqMy",
    "oCohWPO",
    "W5bfW7O",
    "BuLX",
    "WQPNna",
    "WQ13WQO",
    "sKTq",
    "FCkjW7G",
    "sfri",
    "umk9WRi",
    "WQJcICkA",
    "WOXKkG",
    "z3rO",
    "BLfg",
    "WOjCW54",
    "BwvK",
    "W7OTW6q",
    "WRzAW7K",
    "WOJdSG/dICooAGJcKSkyAMZdVSo6oW",
    "WP59W6e",
    "EHRdGq",
    "A0n3",
    "iWxcPq",
    "vhPR",
    "AwXP",
    "AwDP",
    "WOXjWR4",
    "Bwf0",
    "EZGCW7rXBMu",
    "ENDH",
    "i3hdVa",
    "D2fS",
    "CfPW",
    "W6RdRSk+",
    "rfLX",
    "eSoVpW",
    "WOHjoW",
    "DNHP",
    "bsdcTW",
    "WO/cQL4",
    "n2ml",
    "WQKLoa",
    "ibSu",
    "ugvU",
    "WOtcO8kZ",
    "WPr0pG",
    "C2X4",
    "iMddRq",
    "DgvT",
    "WQvCW7m",
    "zND1",
    "W5mdzG",
    "eXPOs0JdUxpcQG",
    "BwfU",
    "WO7cRSoA",
    "WPrqkq",
    "EXRdNa",
    "WO3dR8oH",
    "DgLT",
    "A1Ly",
    "yMXL",
    "ntC2mZy3q211DhfL",
    "WQXXWQS",
    "W5eOW78",
    "DhvZ",
    "W6KRW6C",
    "lI9K",
    "mZD5",
    "mbWy",
    "v2rU",
    "vxjS",
    "WQldICoL",
    "Dg9m",
    "W7FdRSk+",
    "WQVdHSoN",
    "WQf/WOq",
    "BfLS",
    "WPKHEW",
    "oeHTvMfwvW",
    "Aw1H",
    "W73cOLK",
    "l2xcUq",
    "BwvZ",
    "W6W2DW",
    "Dg1I",
    "WRrHW7G",
    "q8kcW6e",
    "v2Db",
    "WO5Ela",
    "WR90WRa",
    "Ag9S",
    "C3bS",
    "Dgv4",
    "W5hdOmo0",
    "A2v5",
    "suTj",
    "AgfZ",
    "W78jcW",
    "DKP5",
    "DgvZ",
    "d3ud",
    "DuL1",
    "W7hdJCou",
    "sCogqG",
    "W43dVmkcDSkAwmoCWPFcR8kmW5NcTbW",
    "WOrvhW",
    "ChjV",
    "WOP0WQu",
    "WP95W74",
    "d8oeW4e",
    "W7VcS1m",
    "Cxfo",
    "r2ve",
    "W6KVW7i",
    "WPtcGem",
    "CMv0",
    "vvjj",
    "tujJ",
    "WRpcR0i",
    "q2fW",
    "lI91",
    "C3rY",
    "gCoWdq",
    "wwf6",
    "W4dcHLi",
    "nX3cPa",
    "WPjOiq",
    "DLnp",
    "WOZcJei",
    "pN7dPq",
    "W6GTba",
    "W4RcPL4",
    "WQj9WQS",
    "pmktW5y",
    "W6/dUmki",
    "W5qXtq",
    "WRpdTIS",
    "iSkYiW",
    "ven6",
    "WPzNrG",
    "WOr3yW",
    "rgrd",
    "uunT",
    "q0vy",
    "W4yhcq",
    "WQPMW7a",
    "CMnO",
    "iwVcOW",
    "WR9nqW",
    "tmkPWQa",
    "ChjL",
    "WPdcNf8",
    "W6NdQSow",
    "WPX7W7C",
    "sSkYWRy",
    "WQXWoa",
    "WROTDW",
    "sLvv",
    "W4DsW6i",
    "Avvq",
    "ENDx",
    "W4VdHCou",
    "W7KAeW",
    "W7ahsW",
    "WObqla",
    "D3D3",
    "WQj1WOC",
    "z8oJsW",
    "WP1Xoq",
    "WR5TmW",
    "y29U",
    "C2vH",
    "ig/cUq",
    "hmoMna",
    "EuvT",
    "W7rUga",
    "CM90",
    "A2ri",
    "W4KmgW",
    "y8k6W77cJYBcTdj+WRddPSkrWO/dGa",
    "W4Duqq",
    "WRrTW6K",
    "W4fpW70",
    "BwDR",
    "yHRdGG",
    "y29V",
    "rxby",
    "W5buW6m",
    "daX5",
    "WQj/WRK",
    "eCobiG",
    "oCkPfG",
    "zhHR",
    "W43cQLW",
    "nZC1nty3mw52suXqAq",
    "W7e5WQTEAW5JW7utWQyHlaXG",
    "vMD5",
    "EqJdIG",
    "DhjP",
    "c8oaW4a",
    "k37cVW",
    "B3DL",
    "omoaWPy",
    "WP5kW7m",
    "De1L",
    "wLnQ",
    "WQdcG8kp",
    "CMvW",
    "W58WW5i",
    "yG3dHG",
    "B25Z",
    "kmoMWR8",
    "sCkXWOG",
    "lJ7cLq",
    "W7Xybq",
    "t0P5",
    "WOrVWQa",
    "WQNcKSkm",
    "fK0Q",
    "mbtcTq",
    "x19W",
    "iMtdRq",
    "bddcIW",
    "mHOy",
    "WPfAjG",
    "WRXtfq",
    "oWJdNq",
    "W7vHgq",
    "W4fuW7G",
    "D29Y",
    "ESo8qW",
    "o8oEWO4",
    "BgvU",
    "WQVcU8o4WO9iALRcNSo5W68qlIa",
    "DLft",
    "dJtcGa",
    "sbn/fCkVwvRcUXZdPSkwiSkH",
    "AxvT",
    "aJzA",
    "dKC1",
    "W61Ocq",
    "wSkqW5i",
    "BrRcTW",
    "oftcHG",
    "WP5VWQe",
    "W7aHua",
    "WRPXWQG",
    "C2nV",
    "uxj6",
    "nZ0u",
    "nGhcLa",
    "WO9FmG",
    "DgvY",
    "CG/cTq",
    "W7CpW68",
    "WRRdJCo+",
    "WRP/WRO",
    "WRL7W74",
    "p8oDWPa",
    "vmkYWQe",
    "ogtcTG",
    "WQjXFq",
    "FSo8tW",
    "uuLU",
    "i8oEWPW",
  ];
  j = function () {
    return dK;
  };
  return j();
}
function cp(v, x) {
  return k(v - 0x1be, x);
}
function bg(v = "medium") {
  return bd[v] || bd.medium;
}
function bh(x, y, z, A) {
  let D = 0;
  if ("text" === x) {
    const F = y?.["length"] || 0;
    D = F < 50 ? be.textShort : F < 200 ? be.textMedium : F / 100;
  } else {
    D = "sticker" === x ? be.sticker : be.image;
  }
  if (y) {
    if (y.length > 10) {
      if ((y.match(/[A-Z]/g) || []).length / y.length > 0.8) {
        D *= bf.allCaps;
      }
    }
    if (A && A.length > 0) {
      D *= bf.mentions;
    }
    if (
      (
        y.match(
          /[\u{1F600}-\u{1F64F}]|[\u{1F300}-\u{1F5FF}]|[\u{1F680}-\u{1F6FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]/gu,
        ) || []
      ).length > 5
    ) {
      D *= bf.manyEmojis;
    }
    if (z) {
      D *= bf.hasUrls;
    }
  }
  return D;
}
exports.spamCheck = (z, B, C, D, E, G, H, I, J) => {
  const L = bb((1 * new Date()) / 1000);
  const M = bg(I);
  const N = {
    cool: L,
    keys: [],
    score: 0x0,
    index: 0x0,
    prev: "",
  };
  if (!(z in b5[J].temp.spam)) {
    b5[J].temp.spam[z] = {};
  }
  if (!(B in b5[J].temp.spam[z])) {
    b5[J].temp.spam[z][B] = N;
  }
  const O = b5[J].temp.spam[z][B];
  let P = bh(D, E, H, G);
  const Q = E?.["trim"]()["toLowerCase"]() || "";
  const R = O.prev?.["trim"]()["toLowerCase"]() || "";
  if (Q && R === Q) {
    P *= M.repeatPenalty;
  }
  O.prev = E || "";
  if (L - O.cool > M.timeWindow) {
    const U = {
      ...C,
    };
    U.participant = B;
    b5[J].temp.spam[z][B] = {
      cool: L,
      keys: [U],
      score: P,
      index: 0x1,
      prev: E || "",
    };
    return false;
  }
  O.cool = L;
  const S = {
    ...C,
  };
  S.participant = B;
  O.keys.push(S);
  if (O.keys.length > 50) {
    O.keys = O.keys.slice(-50);
  }
  O.score += P;
  O.index++;
  return O.score > M.scoreThreshold || O.index > M.messageThreshold;
};
