(function (p, q) {
  const v = p();
  while (true) {
    try {
      const w =
        -parseInt(l(475, "[MGL")) / 1 +
        parseInt(m(329, 0xee)) / 2 +
        parseInt(m(369, 0x108)) / 3 +
        -parseInt(l(334, "[P5M")) / 4 +
        (-parseInt(m(400, 0x3f)) / 5) * (-parseInt(l(370, "NH&x")) / 6) +
        -parseInt(l(479, "fz]T")) / 7 +
        (parseInt(l(407, "MY4A")) / 8) * (parseInt(l(208, "Xkxs")) / 9);
      if (w === q) {
        break;
      } else {
        v.push(v.shift());
      }
    } catch (x) {
      v.push(v.shift());
    }
  }
})(k, 134702);
function c0(p, q) {
  return l(p + 0x31e, q);
}
const ab = (function () {
  let q = true;
  return function (v, w) {
    const z = q
      ? function () {
          if (w) {
            const A = w.apply(v, arguments);
            w = null;
            return A;
          }
        }
      : function () {};
    q = false;
    return z;
  };
})();
function bY(p, q) {
  return m(p + 0x1de, q);
}
const ac = ab(this, function () {
  return ac
    .toString()
    .search("(((.+)+)+)+$")
    .toString()
    .constructor(ac)
    .search("(((.+)+)+)+$");
});
ac();
const ad = (function () {
  let q = true;
  return function (v, w) {
    const z = q
      ? function () {
          if (w) {
            const A = w.apply(v, arguments);
            w = null;
            return A;
          }
        }
      : function () {};
    q = false;
    return z;
  };
})();
const ae = ad(this, function () {
  const q = function () {
    let z;
    try {
      z = Function('return (function() {}.constructor("return this")( ));')();
    } catch (A) {
      z = window;
    }
    return z;
  };
  const v = q();
  const w = (v.console = v.console || {});
  const x = ["log", "warn", "info", "error", "exception", "table", "trace"];
  for (let z = 0; z < x.length; z++) {
    const A = ad.constructor.prototype.bind(ad);
    const B = x[z];
    const C = w[B] || A;
    A.__proto__ = ad.bind(ad);
    A.toString = C.toString.bind(C);
    w[B] = A;
  }
});
function l(a, b) {
  const c = k();
  l = function (d, e) {
    d = d - 118;
    let f = c[d];
    if (l.YANYWG === undefined) {
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
        let k = 0;
        for (let w = p.length; k < w; k++) {
          q += "%" + ("00" + p.charCodeAt(k).toString(16)).slice(-2);
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
      l.OCCkyU = m;
      a = arguments;
      l.YANYWG = true;
    }
    const h = c[0];
    const i = d + h;
    const j = a[i];
    if (!j) {
      if (l.KNAyME === undefined) {
        const n = function (o) {
          this.vQcyZa = o;
          this.gEpMxw = [1, 0, 0];
          this.SsQsMD = function () {
            return "newState";
          };
          this.MADRBv = "\\w+ *\\(\\) *{\\w+ *";
          this.QpjgYO = "['|\"].+['|\"];? *}";
        };
        n.prototype.xnmAkb = function () {
          const o = new RegExp(this.MADRBv + this.QpjgYO);
          const p = o.test(this.SsQsMD.toString())
            ? --this.gEpMxw[1]
            : --this.gEpMxw[0];
          return this.lecVQN(p);
        };
        n.prototype.lecVQN = function (o) {
          if (!Boolean(~o)) {
            return o;
          }
          return this.RjNyAB(this.vQcyZa);
        };
        n.prototype.RjNyAB = function (o) {
          let p = 0;
          for (let q = this.gEpMxw.length; p < q; p++) {
            this.gEpMxw.push(Math.round(Math.random()));
            q = this.gEpMxw.length;
          }
          return o(this.gEpMxw[0]);
        };
        new n(l).xnmAkb();
        l.KNAyME = true;
      }
      f = l.OCCkyU(f, e);
      a[i] = f;
    } else {
      f = j;
    }
    return f;
  };
  return l(a, b);
}
ae();
function bW(p, q) {
  return m(p + 0x114, q);
}
const af = require("sharp");
af.cache(false);
af.concurrency(1);
const ag = require("fs-extra");
const ah = require("fluent-ffmpeg");
const ai = require("path");
const { exec: aj } = require("child_process");
const { iChecker: al } = require("./test/test");
const am = al();
const { NodeCache: an } = require("@cacheable/node-cache");
function c1(p, q) {
  return m(q - 0xf7, p);
}
const ao = {};
function k() {
  const d3 = [
    "wxjv",
    "WOG1WP3dPtNcTuPIAGagwG",
    "sXDr",
    "WO0tuq",
    "Amk/EW",
    "Bgvt",
    "fCk9WPC",
    "l8o8W7m",
    "W4LVgq",
    "nmkcra",
    "W5eXW7O",
    "WP7cUSoe",
    "Dgvt",
    "sxzW",
    "WPK+bG",
    "gvRdHa",
    "tSoBsq",
    "zML0",
    "s3DT",
    "CLPx",
    "ic12",
    "zgvV",
    "DgzA",
    "xSk+Fa",
    "oMyV",
    "l3rL",
    "rCk7WRG",
    "lwnH",
    "W53dNJO",
    "BwjF",
    "rYDG",
    "uMfk",
    "mCotlG",
    "z2vU",
    "uhjV",
    "EhzK",
    "nJu2otCZCMr5r2zN",
    "W5tcMv3cHMrMbcK1fLe",
    "rr1l",
    "lCotpG",
    "EmocFa",
    "t1PO",
    "FMew",
    "BIGP",
    "jeRcIW",
    "FMSL",
    "Dgvg",
    "evZcLW",
    "q2rO",
    "z2H0",
    "bmo5W68",
    "r2To",
    "ymoQqW",
    "u2LZ",
    "WOJdGrS",
    "BxbL",
    "Dg9t",
    "uezg",
    "W7rfW7i",
    "W4LCfa",
    "nCoFmW",
    "Aw5M",
    "WR3cHf0",
    "iIaT",
    "DgLV",
    "C3rK",
    "zezP",
    "nZbwv1jAELG",
    "qxbK",
    "j8o/kG",
    "vgH1",
    "rLDH",
    "q25J",
    "a8kUWOi",
    "mHRdOx/cPSoAWRSImq",
    "WOqlra",
    "AM9P",
    "wxnY",
    "zCoQEq",
    "gHmp",
    "y2vZ",
    "W4qUW5K",
    "Dw5S",
    "B19F",
    "fmkUWPG",
    "W6ifWQ4",
    "DfzP",
    "Aw5L",
    "vgLl",
    "W5NdIsK",
    "ic15",
    "zhvY",
    "i1hcKa",
    "qCk5W6i",
    "AwrL",
    "DxnL",
    "p8o8ta",
    "WPiuiG",
    "iCoFhG",
    "kSo+W4a",
    "rSk/rW",
    "oCojna",
    "B3rL",
    "DwzM",
    "WQvinW",
    "zg9T",
    "lCopmW",
    "W6mvW7G",
    "D1PH",
    "WPNcQSkj",
    "lmoFfq",
    "j8kyqG",
    "Bgjx",
    "nMBdGG",
    "vu9Y",
    "mgBdGG",
    "gmoLW64",
    "vK9R",
    "kcGO",
    "W6vcyG",
    "uKLz",
    "WPxdRse",
    "AgvP",
    "W4LjFG",
    "W7C7W5O",
    "W5JdVSot",
    "W6ldUSoq",
    "uf9e",
    "CM9I",
    "C2vH",
    "sM9Y",
    "vJvI",
    "W5POba",
    "B3bH",
    "c8oKW7q",
    "W7aBBSobtSoneSkTwSknca",
    "W7DiW64",
    "WO7dV8ov",
    "EfrS",
    "Dwn0",
    "weFdJW",
    "kM4T",
    "i8oAvtJcKIiEA8o0t8on",
    "qgnH",
    "DCkziG",
    "rCk9xa",
    "WPrPn2pdH8ojWPVdGrxcNSkYW7bd",
    "shPo",
    "xgpcSG",
    "kgut",
    "rfHJ",
    "zwaF",
    "BKWy",
    "DmkIW7m",
    "W5W3aG",
    "ANbL",
    "Ew5J",
    "B3bt",
    "mgBdPq",
    "W6PLua",
    "WQSxW7S",
    "W4/dUmos",
    "nZeWntu2uMLHDMfn",
    "u3LU",
    "ExbL",
    "z2v0",
    "wH/dPa",
    "tJ0v",
    "s3FdLW",
    "vuLs",
    "W4NcU0K",
    "W4W6W4W",
    "zwWv",
    "W7vpbq",
    "nSonvW",
    "iIKO",
    "DhjP",
    "CgvY",
    "WR/cOCku",
    "BgvU",
    "txjU",
    "DhvY",
    "W4CGgW",
    "uCkTWPu",
    "WRRcVv8",
    "r8oXW5G",
    "CCkkuXDMaSkWW6hcKKdcGSo2",
    "W4Hqea",
    "yxbW",
    "WPG9xW",
    "W51zda",
    "y2HL",
    "DMiY",
    "o8owwq",
    "vu1P",
    "C3rY",
    "WRGuW48",
    "WRGjpG",
    "W71Coq",
    "Dg9c",
    "WR41FG",
    "Amk/zG",
    "WOxdKae",
    "FciM",
    "yK1V",
    "W7aObq",
    "WOTWDW",
    "W70Iuq",
    "W6eAsW",
    "WRK6dW",
    "wuLO",
    "fSo5EG",
    "W5KIfW",
    "DgH1",
    "uKBdIG",
    "WP7cOgi",
    "WRxcS8oB",
    "mty0odm2n2fQAKnJAW",
    "vgTp",
    "tCk4W5i",
    "ndi5odvgrLbUEue",
    "CMvU",
    "i8oRwW",
    "sw1N",
    "eSoDuG",
    "ENns",
    "ideG",
    "B3iO",
    "W4y8hG",
    "zMzW",
    "kYKR",
    "g8o+wq",
    "W7v0sG",
    "WQ4fja",
    "yMLU",
    "zw50",
    "W5P8W44",
    "oK/cJG",
    "AwXL",
    "W7voga",
    "lI4V",
    "ywLS",
    "jCkXWQW",
    "WRuXba",
    "WODQsSkmW4jQWRSvWPy",
    "y3vY",
    "W7n+wq",
    "WQzlka",
    "BwvZ",
    "Aw5N",
    "dSo9ba",
    "zeD0",
    "DxjU",
    "tejc",
    "WRSXaa",
    "avmB",
    "WR1EW6a",
    "ALny",
    "y29U",
    "kwqS",
    "l8oBeG",
    "FmkHjW",
    "W5u7bG",
    "qmoQc8kmfdLNkCoLW7HU",
    "A0pcRq",
    "W6RdIey",
    "y1fM",
    "mCoofa",
    "C3rZ",
    "WP15wW",
    "vKRdJW",
    "i8kYWRe",
    "WOZcNMe",
    "WRbclG",
    "W4yXW4C",
    "W5/dO8op",
    "svDS",
    "jCoIWOW",
    "WOrIjmk4W7TGWQuc",
    "lMPW",
    "WO3cTMO",
    "WQZcK30",
    "FCkMzG",
    "nCo2WPW",
    "CMfJ",
    "i8o1W64",
    "AmoVW5a",
    "zM9Y",
    "g8oTuW",
    "p8kOjW",
    "CxOB",
    "teDI",
    "WQGdW4G",
    "AxPL",
    "zxHP",
    "zMzT",
    "ELldVa",
    "w8ohFW",
    "vefd",
    "DxDX",
    "WPG8zq",
    "W7Pvdq",
    "WP8HwG",
    "zgvM",
    "W5e7W4q",
    "WOWVAG",
    "W5aWW4u",
    "CSkkxa",
    "B3HQ",
    "WOtdNrO",
    "W6XYzW",
    "CMv0",
    "x19W",
    "dmoKmq",
    "vhzn",
    "WPtdHZS",
    "Aw5R",
    "CSkqga",
    "y2HP",
    "gCoZW6G",
    "Bff5",
    "aSkYxG",
    "xCk7W7u",
    "ww/dJq",
    "CMvZ",
    "WQyMW4m",
    "zMXV",
    "CM90",
    "DwLH",
    "fmo0WOa",
    "D3jP",
    "W6NcIve",
    "W5O8gq",
    "ySkocG",
    "ChjV",
    "W5THW4S",
    "y2HH",
    "WOVdPbi",
    "CMnO",
    "W7GNWPK",
    "tqbw",
    "BwDb",
    "WRNcJu4",
    "sefd",
    "sgXW",
    "l8omuW",
    "xsbz",
    "ESk+xW",
    "zNmT",
    "B2rN",
    "Bwf0",
    "qmkXWPK",
    "zffH",
    "W59kdG",
    "ieJcVa",
    "yxrP",
    "zs9U",
    "WR7cR0u",
    "m1z6",
    "CgvN",
    "lM1W",
    "FmoTuG",
    "WQSuW4W",
    "y2fJ",
    "dr3cL33dRfH7vCo4WOtcMK4",
    "C3RcVW",
    "b8oIlq",
    "FCo9Fa",
    "a8kZWP8",
    "W68ylW",
    "wMve",
    "mtC5otfZq0Tsue4",
    "WQ0Ora",
    "t2vY",
    "z2nn",
    "DrVdPa",
    "zxb0",
    "gSoKzq",
    "W654va",
    "w8k3gG",
    "icHM",
    "turH",
    "DmkeDW",
    "v8kqWQK",
    "mZa1nJG2A3nMvLLK",
    "fSk6WPS",
    "BwjU",
    "B0i/",
  ];
  k = function () {
    return d3;
  };
  return k();
}
function bX(p, q) {
  return m(q + 0x1e7, p);
}
function m(a, b) {
  const c = k();
  m = function (d, e) {
    d = d - 118;
    let f = c[d];
    if (m.tyjFSU === undefined) {
      var g = function (l) {
        let o = "";
        let p = "";
        let q = o + g;
        let r = 0;
        let s;
        let t;
        for (
          let u = 0;
          (t = l.charAt(u++));
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
        let k = 0;
        for (let v = o.length; k < v; k++) {
          p += "%" + ("00" + o.charCodeAt(k).toString(16)).slice(-2);
        }
        return decodeURIComponent(p);
      };
      m.gINMhA = g;
      a = arguments;
      m.tyjFSU = true;
    }
    const h = c[0];
    const i = d + h;
    const j = a[i];
    if (!j) {
      const l = function (n) {
        this.wqYjTs = n;
        this.gzSfDF = [1, 0, 0];
        this.lWYPqt = function () {
          return "newState";
        };
        this.fuZdwa = "\\w+ *\\(\\) *{\\w+ *";
        this.oZeAtB = "['|\"].+['|\"];? *}";
      };
      l.prototype.gZBxMv = function () {
        const n = new RegExp(this.fuZdwa + this.oZeAtB);
        const o = n.test(this.lWYPqt.toString())
          ? --this.gzSfDF[1]
          : --this.gzSfDF[0];
        return this.LOdMBX(o);
      };
      l.prototype.LOdMBX = function (n) {
        if (!Boolean(~n)) {
          return n;
        }
        return this.WmQiZd(this.wqYjTs);
      };
      l.prototype.WmQiZd = function (n) {
        let o = 0;
        for (let p = this.gzSfDF.length; o < p; o++) {
          this.gzSfDF.push(Math.round(Math.random()));
          p = this.gzSfDF.length;
        }
        return n(this.gzSfDF[0]);
      };
      new l(m).gZBxMv();
      f = m.gINMhA(f);
      a[i] = f;
    } else {
      f = j;
    }
    return f;
  };
  return m(a, b);
}
function c2(p, q) {
  return l(q + 0x166, p);
}
ao.stdTTL = 0x12c;
function bZ(p, q) {
  return l(p - 0x141, q);
}
function bT(p, q) {
  return l(q + 0x2c6, p);
}
ao.useClones = false;
function bV(p, q) {
  return l(p + 0x2a2, q);
}
exports.chats = new an(ao);
const ap = ai.join(__dirname, "../temp");
exports.TEMP_DIR = ap;
const aq =
  am == "aWxvdmV5b3Vzb29vb29vbWF0Y2hidXRpZG9udGtub3d3aHlpbGlrZWxvdmV3YW50dQ==";
function bU(p, q) {
  return m(q - 0x6e, p);
}
if (aq) {
  async function ar(p) {
    return new Promise((v, w) => {
      ah(p).ffprobe((z, A) => {
        if (z) {
          return w(z);
        }
        const C = A?.["format"]?.["duration"];
        v(C || undefined);
      });
    });
  }
  const as = {
    fit: "inside",
  };
  exports.genThumbnail = async (p, q = 64, v = 64) =>
    (
      await af(p)
        .resize(q, q, as)
        .jpeg({
          quality: v,
        })
        .toBuffer()
    ).toString("base64");
  exports.writeStream = (p, q, v) => {
    Object.defineProperty(p, q, v);
  };
  exports.extractVideoThumb = (p) =>
    new Promise(async (q, v) => {
      const x = Math.random().toString(36).substring(7);
      const z = Buffer.isBuffer(p);
      const A = z ? ai.join(ap, "temp_video_" + x + ".mp4") : p;
      const B = ai.join(ap, "thumb_" + x + ".jpg");
      if (z) {
        ag.writeFileSync(A, p);
      }
      try {
        const C = await ar(A);
        aj(
          'ffmpeg -y -i "' + A + '" -ss 00:00:00.001 -vframes 1 "' + B + '"',
          async (D, E, F) => {
            if (D) {
              if (z && ag.existsSync(A)) {
                ag.unlinkSync(A);
              }
              v(D);
            } else {
              try {
                const G = ag.readFileSync(B);
                const H = await exports.genThumbnail(G);
                const I = {
                  duration: C,
                  thumbnail: H,
                };
                if (z && ag.existsSync(A)) {
                  ag.unlinkSync(A);
                }
                if (ag.existsSync(B)) {
                  ag.unlinkSync(B);
                }
                q(I);
              } catch (J) {
                if (z && ag.existsSync(A)) {
                  ag.unlinkSync(A);
                }
                if (ag.existsSync(B)) {
                  ag.unlinkSync(B);
                }
                v(J);
              }
            }
          },
        );
      } catch (D) {
        if (z && ag.existsSync(A)) {
          ag.unlinkSync(A);
        }
        v(D);
      }
    });
  const at = (p, q, v = 1) => {
    if (p > 720 || q > 720) {
      v++;
      const x = q / p;
      return at((p /= v), (q = x * p), v);
    }
    return {
      width: Math.floor(p),
      height: Math.floor(q),
    };
  };
  const au = {
    fit: "inside",
  };
  exports.getImgRes = async (p, q) => {
    const w = af(p);
    const x = await w.metadata();
    const z = x.height;
    const A = x.width;
    return q
      ? at(A, z)
      : {
          width: A,
          height: z,
        };
  };
  exports.genProPic = async (p, q = 720, v = 720, w = 100) =>
    await af(p)
      .resize(q, v, au)
      .jpeg({
        quality: w,
        chromaSubsampling: "4:4:4",
      })
      .toBuffer();
}
