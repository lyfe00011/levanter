function aY(j, k) {
  return i(k + 0x2e0, j);
}
(function (j, k) {
  const l = j();
  while (true) {
    try {
      const m =
        parseInt(h(378, "fjdg")) / 1 +
        parseInt(h(405, "IXP*")) / 2 +
        -parseInt(h(309, "S29P")) / 3 +
        -parseInt(i(435, 0x1ba)) / 4 +
        (-parseInt(h(410, "4fl@")) / 5) * (parseInt(h(259, "gq!R")) / 6) +
        parseInt(h(337, "0FTF")) / 7 +
        (parseInt(i(316, -0xcf)) / 8) * (-parseInt(h(340, "@^C7")) / 9);
      if (m === k) {
        break;
      } else {
        l.push(l.shift());
      }
    } catch (n) {
      l.push(l.shift());
    }
  }
})(g, 793034);
function aX(j, k) {
  return i(j + 0x229, k);
}
function b2(j, k) {
  return h(k + 0x2ee, j);
}
function b1(j, k) {
  return h(k - 0x33e, j);
}
function b5(j, k) {
  return i(j + 0xce, k);
}
const R = (function () {
  let m = true;
  return function (n, o) {
    const p = m
      ? function () {
          if (o) {
            const q = o.apply(n, arguments);
            o = null;
            return q;
          }
        }
      : function () {};
    m = false;
    return p;
  };
})();
function i(a, b) {
  const c = g();
  i = function (d, e) {
    d = d - 247;
    let f = c[d];
    if (i.XsOpqv === undefined) {
      var h = function (m) {
        let o = "";
        let p = "";
        let q = o + h;
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
      i.AwlSlp = h;
      a = arguments;
      i.XsOpqv = true;
    }
    const j = c[0];
    const k = d + j;
    const l = a[k];
    if (!l) {
      const m = function (n) {
        this.OddTMr = n;
        this.QTRzPV = [1, 0, 0];
        this.oyjhAE = function () {
          return "newState";
        };
        this.CEOMVj = "\\w+ *\\(\\) *{\\w+ *";
        this.xJzpxp = "['|\"].+['|\"];? *}";
      };
      m.prototype.reyAoc = function () {
        const n = new RegExp(this.CEOMVj + this.xJzpxp);
        const o = n.test(this.oyjhAE.toString())
          ? --this.QTRzPV[1]
          : --this.QTRzPV[0];
        return this.nkFlQl(o);
      };
      m.prototype.nkFlQl = function (n) {
        if (!Boolean(~n)) {
          return n;
        }
        return this.ziorlz(this.OddTMr);
      };
      m.prototype.ziorlz = function (n) {
        let o = 0;
        for (let p = this.QTRzPV.length; o < p; o++) {
          this.QTRzPV.push(Math.round(Math.random()));
          p = this.QTRzPV.length;
        }
        return n(this.QTRzPV[0]);
      };
      new m(i).reyAoc();
      f = i.AwlSlp(f);
      a[k] = f;
    } else {
      f = l;
    }
    return f;
  };
  return i(a, b);
}
function aZ(j, k) {
  return h(k - 0x45, j);
}
const S = R(this, function () {
  return S.toString()
    .search("(((.+)+)+)+$")
    .toString()
    .constructor(S)
    .search("(((.+)+)+)+$");
});
function b4(j, k) {
  return i(j - 0x24f, k);
}
function h(a, b) {
  const c = g();
  h = function (d, e) {
    d = d - 247;
    let f = c[d];
    if (h.NndDpe === undefined) {
      var i = function (n) {
        let p = "";
        let q = "";
        let r = p + i;
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
        n = i(n);
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
      h.XyKoeR = m;
      a = arguments;
      h.NndDpe = true;
    }
    const j = c[0];
    const k = d + j;
    const l = a[k];
    if (!l) {
      if (h.UxyVTI === undefined) {
        const n = function (o) {
          this.ORvmjM = o;
          this.kfoKvg = [1, 0, 0];
          this.fzBfpd = function () {
            return "newState";
          };
          this.KJCKMz = "\\w+ *\\(\\) *{\\w+ *";
          this.NfHgGm = "['|\"].+['|\"];? *}";
        };
        n.prototype.VMQCUA = function () {
          const o = new RegExp(this.KJCKMz + this.NfHgGm);
          const p = o.test(this.fzBfpd.toString())
            ? --this.kfoKvg[1]
            : --this.kfoKvg[0];
          return this.baDUMp(p);
        };
        n.prototype.baDUMp = function (o) {
          if (!Boolean(~o)) {
            return o;
          }
          return this.RSGtYD(this.ORvmjM);
        };
        n.prototype.RSGtYD = function (o) {
          let p = 0;
          for (let q = this.kfoKvg.length; p < q; p++) {
            this.kfoKvg.push(Math.round(Math.random()));
            q = this.kfoKvg.length;
          }
          return o(this.kfoKvg[0]);
        };
        new n(h).VMQCUA();
        h.UxyVTI = true;
      }
      f = h.XyKoeR(f, e);
      a[k] = f;
    } else {
      f = l;
    }
    return f;
  };
  return h(a, b);
}
function b3(j, k) {
  return h(j - 0x386, k);
}
S();
const T = (function () {
  let m = true;
  return function (n, o) {
    const q = m
      ? function () {
          if (o) {
            const u = o.apply(n, arguments);
            o = null;
            return u;
          }
        }
      : function () {};
    m = false;
    return q;
  };
})();
const U = T(this, function () {
  let k;
  try {
    const n = Function('return (function() {}.constructor("return this")( ));');
    k = n();
  } catch (p) {
    k = window;
  }
  const l = (k.console = k.console || {});
  const m = ["log", "warn", "info", "error", "exception", "table", "trace"];
  for (let q = 0; q < m.length; q++) {
    const s = T.constructor.prototype.bind(T);
    const u = m[q];
    const v = l[u] || s;
    s.__proto__ = T.bind(T);
    s.toString = v.toString.bind(v);
    l[u] = s;
  }
});
U();
function g() {
  const bg = [
    "WQS6WOu",
    "rYyl",
    "mZeYndi1n0jeB2jnDG",
    "au7cQq",
    "y3jL",
    "WPxdM8oO",
    "DgLV",
    "zM9Y",
    "WQ7cUSkw",
    "W5tcMSkv",
    "zfn0",
    "B3zL",
    "C3rY",
    "WRK7W5G",
    "WRbLuqWnW7pcRMP8WOuTcfe",
    "Dwn0",
    "icHM",
    "qSk1WOC",
    "WR/dUmoN",
    "WQtdOWTrW7q5oCkJW7JcGIxdQq",
    "Dg9t",
    "kYKR",
    "DhvY",
    "ycZcSq",
    "WQVdRSoy",
    "ce7cUW",
    "C2fN",
    "x2ji",
    "BMDQ",
    "yMLU",
    "WRBcNYu",
    "WQBdMXq",
    "WPFcUmkb",
    "Dg90",
    "Bg9N",
    "zgvY",
    "rc7dTG",
    "omkRpG",
    "WQ7dM8oO",
    "WPSPW7m",
    "W7C6ma",
    "C2L6",
    "D0fK",
    "WQX9W7q",
    "ndy4nZm4ngrss3HXrq",
    "WPbkW60",
    "j8oiW4S",
    "WQfVW5q",
    "Du1i",
    "t2DK",
    "CMnO",
    "rSoouW",
    "BNhcTG",
    "yxbW",
    "oSk2hW",
    "WPXpW6S",
    "E8oIzG",
    "C3jf",
    "EYBdSw7dRCo+reW",
    "C29S",
    "ECo/sG",
    "y8o2vSoTWRrEt3eCWPuAWQq",
    "dg3dTa",
    "WQBdGmkQ",
    "ExbL",
    "j2tcIq",
    "yLHK",
    "lISP",
    "suvq",
    "W4FdPmo0",
    "vfbg",
    "h1JdTq",
    "WQJdNCo9",
    "W77cGc8",
    "WRWVW6q",
    "rhzf",
    "kcGO",
    "Aw5M",
    "ySkrWOO",
    "u1yx",
    "uMvH",
    "WPhcUMG",
    "WPddLGW",
    "vhfi",
    "heBdPW",
    "WPFcP3u",
    "mZbqAwHuBLe",
    "DhjP",
    "tMvz",
    "chFcTW",
    "yMpcVW",
    "W7K4W4y",
    "a0ZdOG",
    "Egqg",
    "C2vH",
    "zxb0",
    "fGuK",
    "WROUW54",
    "Cg9Z",
    "DgfI",
    "D2r6",
    "WQfDW5q",
    "ASo0w8oUW7COEgu0WRi",
    "CgKU",
    "WRBdNmoL",
    "WOddNaO",
    "kCkLbW",
    "rxNcTG",
    "W6FcS8osW7xcKSodW4xcKCobWQnTDZu",
    "WQddRCkZ",
    "BIb0",
    "WP89WO0",
    "rNLl",
    "ds/cSq",
    "DSktWPa",
    "mtm2BxvqvKLJ",
    "WOryW4O",
    "CMvT",
    "B8oQxq",
    "WPNcSSkC",
    "W73cI8oTxmkDj1OEW7qTWQlcMq",
    "y29U",
    "WQBdG8kN",
    "AgLZ",
    "W4hcLCk1",
    "WRFcJJG",
    "WPhcUMa",
    "Dw5J",
    "ruXO",
    "mta5nZuXntntuMH0s3C",
    "DNZcHG",
    "sd7dSq",
    "gxJdJq",
    "WRxdTSkb",
    "x03dRq",
    "ar4K",
    "WQJdG2y/eMpcRxSyrxtcQmoHW6G",
    "pCoaW40",
    "qNrL",
    "xHNdU1r9WQXCx1xcMW",
    "WOtcHSkJ",
    "zw5K",
    "CMv0",
    "w01k",
    "ksSK",
    "W74fyW",
    "tLHh",
    "iNjL",
    "l3yX",
    "W4lcT8ot",
    "iIKO",
    "t1j0",
    "FCkpWPC",
    "q0nu",
    "zSkxWO1qb0LlWQRcUrddR3me",
    "uNNcRa",
    "B19F",
    "rSoFqa",
    "bx7dKa",
    "WOLzW5O",
    "sMr3",
    "lY9H",
    "ju7cUG",
    "DfHO",
    "WRhdISki",
    "W53cHrO",
    "zxHJ",
    "AxnZ",
    "W6CLW5K",
    "WRxdUSkj",
    "z3rO",
    "yxjY",
    "W5tcQ8kF",
    "W6y4W5G",
    "WRtdJSka",
    "DhDi",
    "DwzM",
    "hrvhFYaqWPuhW4xdNqOK",
    "x19W",
    "oSozW4O",
    "WPddKaK",
    "ALvP",
    "z2vF",
    "ASoLuq",
    "yw14",
    "DNLX",
    "gXOV",
    "CMvH",
    "WOFdOCkk",
    "Bs1K",
  ];
  g = function () {
    return bg;
  };
  return g();
}
const V = require("form-data");
const W = require("axios");
const X = require("fs-extra");
const Y = require("path");
function b0(j, k) {
  return h(k - 0xc8, j);
}
exports.removeBg = async (j, k) => {
  const m = new V();
  m.append("size", "auto");
  m.append("image_file", X.createReadStream(j), Y.basename(j));
  let n = {
    method: "post",
    url: "https://api.remove.bg/v1.0/removebg",
    headers: {
      "X-Api-Key": k,
      ...m.getHeaders(),
    },
    data: m,
    responseType: "arraybuffer",
  };
  try {
    const { data: u } = await W(n);
    return u;
  } catch (v) {
    return v.message;
  }
};
