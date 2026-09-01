(function (k, l) {
  const m = k();
  while (true) {
    try {
      const q =
        (-parseInt(i(376, "k9Oi")) / 1) * (-parseInt(j(539, 0x58c)) / 2) +
        parseInt(j(428, -0xfc)) / 3 +
        parseInt(i(554, "gvvP")) / 4 +
        parseInt(i(401, "H*nt")) / 5 +
        (parseInt(i(597, "0]#%")) / 6) * (parseInt(i(615, "!lJ7")) / 7) +
        parseInt(j(567, 0x57b)) / 8 +
        (parseInt(i(579, "WHXP")) / 9) * (-parseInt(i(366, "kUz)")) / 10);
      if (q === l) {
        break;
      } else {
        m.push(m.shift());
      }
    } catch (s) {
      m.push(m.shift());
    }
  }
})(h, 993665);
function bj(k, l) {
  return i(l - 0x301, k);
}
function j(a, b) {
  const c = h();
  j = function (d, e) {
    d = d - 363;
    let f = c[d];
    if (j.woesMq === undefined) {
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
      j.pQrbxY = g;
      a = arguments;
      j.woesMq = true;
    }
    const i = c[0];
    const k = d + i;
    const l = a[k];
    if (!l) {
      const m = function (n) {
        this.jkXAcT = n;
        this.bZyfAz = [1, 0, 0];
        this.hnOrWI = function () {
          return "newState";
        };
        this.rRkAcs = "\\w+ *\\(\\) *{\\w+ *";
        this.hTfJod = "['|\"].+['|\"];? *}";
      };
      m.prototype.TpYQNW = function () {
        const n = new RegExp(this.rRkAcs + this.hTfJod);
        const o = n.test(this.hnOrWI.toString())
          ? --this.bZyfAz[1]
          : --this.bZyfAz[0];
        return this.DOlzIm(o);
      };
      m.prototype.DOlzIm = function (n) {
        if (!Boolean(~n)) {
          return n;
        }
        return this.Seqdvn(this.jkXAcT);
      };
      m.prototype.Seqdvn = function (n) {
        let o = 0;
        for (let p = this.bZyfAz.length; o < p; o++) {
          this.bZyfAz.push(Math.round(Math.random()));
          p = this.bZyfAz.length;
        }
        return n(this.bZyfAz[0]);
      };
      new m(j).TpYQNW();
      f = j.pQrbxY(f);
      a[k] = f;
    } else {
      f = l;
    }
    return f;
  };
  return j(a, b);
}
function bk(k, l) {
  return i(l - 0x2b3, k);
}
const J = (function () {
  let q = true;
  return function (s, u) {
    const v = q
      ? function () {
          if (u) {
            const w = u.apply(s, arguments);
            u = null;
            return w;
          }
        }
      : function () {};
    q = false;
    return v;
  };
})();
const K = J(this, function () {
  return K.toString()
    .search("(((.+)+)+)+$")
    .toString()
    .constructor(K)
    .search("(((.+)+)+)+$");
});
function bf(k, l) {
  return j(k - 0x29a, l);
}
function bh(k, l) {
  return i(k - 0x357, l);
}
K();
const L = (function () {
  const l = {
    bWNJr: function (s, u) {
      return s !== u;
    },
    MFeGy: "AVnMv",
  };
  l.tkiKW = "mLnlp";
  l.oCGli = function (s, u) {
    return s === u;
  };
  l.djwKo = "sRyVU";
  let q = true;
  return function (s, u) {
    if (l.oCGli(l.djwKo, l.djwKo)) {
      const v = q
        ? function () {
            if (u) {
              if ("AVnMv" !== l.tkiKW) {
                const w = u.apply(s, arguments);
                u = null;
                return w;
              } else {
                const y = q.apply(s, arguments);
                u = null;
                return y;
              }
            }
          }
        : function () {};
      q = false;
      return v;
    } else {
      const x = v
        ? function () {
            if (x) {
              const V = F.apply(G, arguments);
              H = null;
              return V;
            }
          }
        : function () {};
      A = false;
      return x;
    }
  };
})();
const M = L(this, function () {
  const l = function () {
    let v;
    try {
      v = Function('return (function() {}.constructor("return this")( ));')();
    } catch (x) {
      v = window;
    }
    return v;
  };
  const m = l();
  const q = (m.console = m.console || {});
  const s = ["log", "warn", "info", "error", "exception", "table", "trace"];
  for (let u = 0; u < s.length; u++) {
    const v = L.constructor.prototype.bind(L);
    const w = s[u];
    const x = q[w] || v;
    v.__proto__ = L.bind(L);
    v.toString = x.toString.bind(x);
    q[w] = v;
  }
});
function bg(k, l) {
  return i(l + 0x161, k);
}
function bi(k, l) {
  return j(l - 0xd8, k);
}
function h() {
  const bx = [
    "W6NcKSki",
    "W51hW7u",
    "WOP2ka",
    "WPtdM8kX",
    "WORdVCoa",
    "uw91",
    "W6dcIWS",
    "Cc10",
    "DhjP",
    "WQDTla",
    "q3bY",
    "CM90",
    "WONdJvu",
    "W7PYWPu",
    "DgvZ",
    "WOtdHCkcWR7cMNVdNue/W49MWQro",
    "id4G",
    "W7nzfa",
    "W4Wwya",
    "EHRdJG",
    "B0nh",
    "bvKc",
    "DxjU",
    "W6JcVmkt",
    "DgLV",
    "FCooW7C",
    "lwLT",
    "W77cUmkZ",
    "W5fzW5G",
    "Dhb1",
    "v8kkWOm",
    "jYFdPG",
    "yNjO",
    "ACoDW7m",
    "fZ89",
    "BY1T",
    "smonW6y",
    "W40rma",
    "wuLc",
    "zxjP",
    "gSkjW54",
    "Dwn0",
    "ntCXmdK3n2fSuMDwta",
    "oJXQ",
    "W5NcIvy",
    "DMvY",
    "kYjg",
    "WQSzqq",
    "Dg9R",
    "EwTx",
    "qLLr",
    "WPFdU0W",
    "W4nmnW",
    "mSoTW5u2aIRdRa",
    "zgvY",
    "E30U",
    "uNbA",
    "ndldTW",
    "sSkmBG",
    "qMLR",
    "rmkjlW",
    "WPNdISk2",
    "W6mJzW",
    "iquA",
    "W4GHW5W",
    "oSoGW40",
    "WRNcLZO",
    "qmk5WP8",
    "W6/cTmoY",
    "hmk/WO0",
    "C096",
    "W5z5sa",
    "yMLU",
    "BxPK",
    "umkcua",
    "W57dVCkU",
    "WRddNLO",
    "BMfT",
    "oW0b",
    "W4TnsG",
    "oYny",
    "zM9Y",
    "WR80ha",
    "pJeA",
    "zsjD",
    "WRxcOaa",
    "rNxcPW",
    "WPfRW4S",
    "ef8B",
    "EKrI",
    "W4pcJ8oP",
    "WO7cICoQ",
    "D2vI",
    "x8ozW5K",
    "W51/vq",
    "W5dcJSkD",
    "kYKR",
    "WOqVia",
    "btb6",
    "CdqV",
    "W4VdI8kSoae8ASkVW6BcSqi",
    "Dca+",
    "ffum",
    "lY9L",
    "ChPN",
    "W5rMvG",
    "BIGP",
    "W5BcJ8kf",
    "lmkRWPe",
    "W5JcMmoh",
    "s8oyW58",
    "DXBdJG",
    "z3rO",
    "DuLT",
    "De54",
    "y29U",
    "W78sxG",
    "ksSK",
    "Aw9U",
    "wKvg",
    "CmobW7y",
    "vSkZea",
    "ye3dOq",
    "mtBdPa",
    "W4WnvW",
    "ChjV",
    "WPVcJmoO",
    "W4HNW58",
    "wSoqxa",
    "vJvI",
    "WQpdPCos",
    "lJyy",
    "ghq9",
    "W7X0W4C",
    "lISP",
    "qdy8eMhcHSku",
    "tuzL",
    "WRNcKde",
    "W541WP0",
    "Bs1K",
    "kcGO",
    "Bg9H",
    "W7HJW7S",
    "v0yW",
    "W6z7qYtcSXRdGmkiWOHkW7RdNmkB",
    "WPHenG",
    "W4tcQ8kG",
    "dvuz",
    "z2v0",
    "vSkCpG",
    "yKDS",
    "WO1ygq",
    "WODMbG",
    "mKnqsK5HBW",
    "bmkeW54",
    "mgrr",
    "r2rR",
    "zGxdKW",
    "acG3",
    "sgvH",
    "WQ/dGhq",
    "yb/cRq",
    "DxLs",
    "W75kW5q",
    "W4xcMmor",
    "Dw5J",
    "W4LQW4m",
    "WOXNba",
    "W7uGDbZcOxCtW68SW6FcVCk/Aa",
    "zeD0",
    "W78MWRC",
    "WPddPKK",
    "C3rY",
    "Dhfr",
    "DuHb",
    "W4/cVSkn",
    "DwiZ",
    "WPXueG",
    "W4fcW4C",
    "rZL1",
    "WP0NgW",
    "nteXmtqYnff0vgLYtG",
    "yLjH",
    "W5/cK8ow",
    "WQ/cNcS",
    "i291",
    "Dg9t",
    "oCoyW6C",
    "EgXe",
    "EhzK",
    "CMnO",
    "WR3dR3y",
    "WOXWeG",
    "WQ5KW4iPx3RdHmopmCoFxW",
    "yxHP",
    "Dxjz",
    "qvzU",
    "W5yBnq",
    "Chm6",
    "WRePWOq",
    "WRVdT2O",
    "WRVcJ8oA",
    "yxr0",
    "W4/cUSkj",
    "mtm3mJGZmJneDgvosMS",
    "W4dcMCoD",
    "b8kpWPW",
    "zgf0",
    "Du12",
    "de0G",
    "DKD0",
    "rtCboMhcGqW",
    "WRJcNqO",
    "ihaU",
    "zw5K",
    "cvGI",
    "W4hcKSkW",
    "WQPefG",
    "b0ew",
    "W7jMW7W",
    "v3rA",
    "zgP3",
    "BgvU",
    "zMLS",
    "mJGYmZC3mfPPve9kBW",
    "tePT",
    "agTJ",
    "Ahr0",
    "WR/dQ8ox",
    "W6/cSY/dK8oPWQOiW48tb8kZW7SpWOK",
    "vCkkzq",
    "WOzKmG",
    "Dg90",
    "rLxcVq",
    "CLPx",
    "C2vH",
    "WONdJSk7",
    "CCo0W5a",
    "Aw5W",
    "AvddSG",
    "yxrL",
    "W6L5bW",
    "WRTsgG",
    "qLzr",
    "W4DPwq",
    "WQeTeq",
    "W77cKCoa",
    "WQ5yta",
    "W7z+WQq",
    "zt0I",
    "x19W",
    "kXbw",
    "t0Lj",
    "vWrEF8k6WOdcQcVdQmojW7BcTW",
    "ywDL",
    "W602WPu",
    "yxbW",
    "y3jL",
    "C29S",
    "qufq",
    "uMvH",
    "WPqCWOxdS3xcQmoVWOXfrG4",
    "DNDb",
    "yLDo",
    "W4nQjW",
    "W7pcS8kUW4dcISonW4CLlvZcNG",
    "iNjL",
    "xCknta",
    "gmohW4i",
    "lI4V",
    "CfrV",
    "W7VdICklWOr/W4xcOLxdPmoCWQTI",
    "WPhdQK0",
    "uu5x",
    "icHM",
    "w8knwq",
    "WRScxq",
    "qxjV",
    "BZ5y",
    "W58hjG",
    "WOJcMCoS",
  ];
  h = function () {
    return bx;
  };
  return h();
}
function be(k, l) {
  return j(k - 0x302, l);
}
M();
function bd(k, l) {
  return j(k - 0x222, l);
}
function i(a, b) {
  const c = h();
  i = function (d, e) {
    d = d - 363;
    let f = c[d];
    if (i.SicbcE === undefined) {
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
      i.YscQYl = m;
      a = arguments;
      i.SicbcE = true;
    }
    const j = c[0];
    const k = d + j;
    const l = a[k];
    if (!l) {
      if (i.EnXOAS === undefined) {
        const n = function (o) {
          this.xLPuQl = o;
          this.vexHmk = [1, 0, 0];
          this.gukWjh = function () {
            return "newState";
          };
          this.msimOv = "\\w+ *\\(\\) *{\\w+ *";
          this.wgVjlI = "['|\"].+['|\"];? *}";
        };
        n.prototype.sbfMeJ = function () {
          const o = new RegExp(this.msimOv + this.wgVjlI);
          const p = o.test(this.gukWjh.toString())
            ? --this.vexHmk[1]
            : --this.vexHmk[0];
          return this.haCFjS(p);
        };
        n.prototype.haCFjS = function (o) {
          if (!Boolean(~o)) {
            return o;
          }
          return this.RNjoBs(this.xLPuQl);
        };
        n.prototype.RNjoBs = function (o) {
          let p = 0;
          for (let q = this.vexHmk.length; p < q; p++) {
            this.vexHmk.push(Math.round(Math.random()));
            q = this.vexHmk.length;
          }
          return o(this.vexHmk[0]);
        };
        new n(i).sbfMeJ();
        i.EnXOAS = true;
      }
      f = i.YscQYl(f, e);
      a[k] = f;
    } else {
      f = l;
    }
    return f;
  };
  return i(a, b);
}
function bm(k, l) {
  return j(k - 0x3cb, l);
}
const N = require("axios");
const O = require("form-data");
const P = require("cheerio");
const Q = require("fs-extra");
const { iChecker: S } = require("../test/test");
const T = S();
const U =
  T == "aWxvdmV5b3Vzb29vb29vbWF0Y2hidXRpZG9udGtub3d3aHlpbGlrZWxvdmV3YW50dQ==";
function bl(k, l) {
  return i(l - 0x1a0, k);
}
if (U) {
  exports.webpToMp4 = async (k) => {
    const q = new O();
    q.append("new-image-url", "");
    q.append("new-image", Q.createReadStream(k));
    let { data: v } = await N({
      method: "post",
      url: "https://ezgif.com/webp-to-mp4",
      data: q,
      headers: {
        ...q.getHeaders(),
      },
    });
    const w = new O();
    let x = P.load(v);
    const y = x('input[name="file"]').attr("value");
    const z = x('input[name="token"]').attr("value");
    const A = {
      file: y,
      token: z,
      convert: x('input[name="file"]').attr("value"),
    };
    w.append("file", A.file);
    if (z) {
      w.append("token", A.token);
    }
    w.append("convert", A.convert);
    let B = await N({
      method: "post",
      url: "https://ezgif.com/webp-to-mp4/" + A.file,
      data: w,
      headers: {
        ...w.getHeaders(),
      },
    });
    x = P.load(B.data);
    return "https:" + x("div#output > p.outfile > video > source").attr("src");
  };
}
