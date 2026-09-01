function y(a, b) {
  const c = v();
  y = function (d, e) {
    d = d - 260;
    let f = c[d];
    if (y.SzqrMn === undefined) {
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
        for (let w = n.length; u < w; u++) {
          o += "%" + ("00" + n.charCodeAt(u).toString(16)).slice(-2);
        }
        return decodeURIComponent(o);
      };
      y.bDxuzA = g;
      a = arguments;
      y.SzqrMn = true;
    }
    const h = c[0];
    const i = d + h;
    const j = a[i];
    if (!j) {
      const k = function (l) {
        this.iPlcWw = l;
        this.DEnZYm = [1, 0, 0];
        this.vFfAhj = function () {
          return "newState";
        };
        this.IPwMTR = "\\w+ *\\(\\) *{\\w+ *";
        this.JrdIce = "['|\"].+['|\"];? *}";
      };
      k.prototype.jyeAbT = function () {
        const l = new RegExp(this.IPwMTR + this.JrdIce);
        const m = l.test(this.vFfAhj.toString())
          ? --this.DEnZYm[1]
          : --this.DEnZYm[0];
        return this.VMuOwv(m);
      };
      k.prototype.VMuOwv = function (l) {
        if (!Boolean(~l)) {
          return l;
        }
        return this.mbCOTR(this.iPlcWw);
      };
      k.prototype.mbCOTR = function (l) {
        let m = 0;
        for (let n = this.DEnZYm.length; m < n; m++) {
          this.DEnZYm.push(Math.round(Math.random()));
          n = this.DEnZYm.length;
        }
        return l(this.DEnZYm[0]);
      };
      new k(y).jyeAbT();
      f = y.bDxuzA(f);
      a[i] = f;
    } else {
      f = j;
    }
    return f;
  };
  return y(a, b);
}
(function (z, A) {
  const B = z();
  while (true) {
    try {
      const C =
        -parseInt(y(953, 0x3dd)) / 1 +
        -parseInt(x(358, "bTFU")) / 2 +
        -parseInt(x(320, "!f%%")) / 3 +
        -parseInt(y(764, 0x48a)) / 4 +
        -parseInt(x(330, "Uj4]")) / 5 +
        (parseInt(y(680, 0x5f3)) / 6) * (-parseInt(x(473, "l*TH")) / 7) +
        parseInt(x(930, "hrnr")) / 8;
      if (C === A) {
        break;
      } else {
        B.push(B.shift());
      }
    } catch (D) {
      B.push(B.shift());
    }
  }
})(v, 387809);
const a5 = (function () {
  let A = true;
  return function (B, C) {
    const E = A
      ? function () {
          if (C) {
            const H = C.apply(B, arguments);
            C = null;
            return H;
          }
        }
      : function () {};
    A = false;
    return E;
  };
})();
function bA(z, A) {
  return x(z - 0x183, A);
}
const a6 = a5(this, function () {
  return a6
    .toString()
    .search("(((.+)+)+)+$")
    .toString()
    .constructor(a6)
    .search("(((.+)+)+)+$");
});
a6();
const a7 = (function () {
  let z = true;
  return function (A, B) {
    const C = z
      ? function () {
          if (B) {
            const D = B.apply(A, arguments);
            B = null;
            return D;
          }
        }
      : function () {};
    z = false;
    return C;
  };
})();
const a8 = a7(this, function () {
  const A = function () {
    let F;
    try {
      F = Function('return (function() {}.constructor("return this")( ));')();
    } catch (G) {
      F = window;
    }
    return F;
  };
  const B = A();
  const C = (B.console = B.console || {});
  const D = ["log", "warn", "info", "error", "exception", "table", "trace"];
  for (let E = 0; E < D.length; E++) {
    const F = a7.constructor.prototype.bind(a7);
    const G = D[E];
    const H = C[G] || F;
    F.__proto__ = a7.bind(a7);
    F.toString = H.toString.bind(H);
    C[G] = F;
  }
});
function bH(z, A) {
  return x(A - 0x182, z);
}
a8();
function bz(z, A) {
  return y(z + 0x366, A);
}
function bE(z, A) {
  return y(z - 0xa3, A);
}
function bC(z, A) {
  return y(A + 0x260, z);
}
function x(a, b) {
  const c = v();
  x = function (d, e) {
    d = d - 260;
    let f = c[d];
    if (x.mwARvB === undefined) {
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
        for (let w = n.length; u < w; u++) {
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
      x.yASYBt = k;
      a = arguments;
      x.mwARvB = true;
    }
    const h = c[0];
    const i = d + h;
    const j = a[i];
    if (!j) {
      if (x.prUWHY === undefined) {
        const l = function (m) {
          this.PzVtVP = m;
          this.nOVREu = [1, 0, 0];
          this.kCvvsz = function () {
            return "newState";
          };
          this.lTcBfD = "\\w+ *\\(\\) *{\\w+ *";
          this.makKyF = "['|\"].+['|\"];? *}";
        };
        l.prototype.SNHolt = function () {
          const m = new RegExp(this.lTcBfD + this.makKyF);
          const n = m.test(this.kCvvsz.toString())
            ? --this.nOVREu[1]
            : --this.nOVREu[0];
          return this.biUfmr(n);
        };
        l.prototype.biUfmr = function (m) {
          if (!Boolean(~m)) {
            return m;
          }
          return this.fusOPl(this.PzVtVP);
        };
        l.prototype.fusOPl = function (m) {
          let n = 0;
          for (let o = this.nOVREu.length; n < o; n++) {
            this.nOVREu.push(Math.round(Math.random()));
            o = this.nOVREu.length;
          }
          return m(this.nOVREu[0]);
        };
        new l(x).SNHolt();
        x.prUWHY = true;
      }
      f = x.yASYBt(f, e);
      a[i] = f;
    } else {
      f = j;
    }
    return f;
  };
  return x(a, b);
}
const { loadBaileys: a9 } = require("./baileys");
const aa = require("path");
const {
  existsSync: ab,
  writeFileSync: ac,
  readFileSync: ad,
} = require("fs-extra");
const ae = require("./class/Wcg");
const { getBuffer: af } = require("./fetch");
let ag;
function v() {
  const dZ = [
    "W4tdK8kk",
    "ESk6cq",
    "W7hcUmky",
    "CMv0",
    "E30U",
    "WQBcVMS",
    "r8oKjq",
    "WQtdPhe",
    "zvLS",
    "yxrL",
    "s2XJ",
    "WQtcKx8",
    "DhjP",
    "or/cJa",
    "uSo3nG",
    "h0xdLG",
    "WRlcTuu",
    "W4ldTdi",
    "eCobWRa",
    "k0pcGW",
    "W454tq",
    "WRhcK34",
    "W4H/Fq",
    "uerd",
    "WRFcIhG",
    "C2v0",
    "WOW6pW",
    "Cgf1",
    "rG3dKa",
    "pvJcHq",
    "zcbS",
    "WRtdUxC",
    "s8ktna",
    "zLbn",
    "lmkLva",
    "wXXw",
    "lI9J",
    "uCoUAq",
    "CMvU",
    "B3vU",
    "rCk2WQK",
    "rNLl",
    "r1fX",
    "xXLm",
    "BNrZ",
    "WQZdRce",
    "BSk6fa",
    "wvnl",
    "txfJ",
    "s8odAW",
    "zhHr",
    "xwDZ",
    "WPLocW",
    "WR3cPty",
    "C1zT",
    "tfL2",
    "B2fK",
    "F2zB",
    "EMfN",
    "ody2odC0BvHwuKPL",
    "W4qwFW",
    "y0ne",
    "E8kHbW",
    "thrS",
    "D2fw",
    "ihrV",
    "W4GuWQq",
    "WQj0nq",
    "ze1L",
    "Dg9t",
    "rKPR",
    "W5qqFq",
    "nSkKva",
    "luJcKW",
    "kXW8",
    "WRCbxW",
    "sfbH",
    "C3bS",
    "zxjY",
    "AgLZ",
    "W7DXWQa",
    "WOrffa",
    "WPWlwG",
    "qwDW",
    "yL7cMG",
    "W6DZWOm",
    "qmkHWQy",
    "DhPM",
    "W7hdK8kz",
    "md53",
    "W4WbWR4",
    "kKJcHq",
    "A1Dc",
    "Cg9t",
    "uSo7jW",
    "oIrR",
    "W7ddQSkH",
    "W77cOSke",
    "C3rY",
    "WPxdLva",
    "WPhdRCod",
    "BfWm",
    "WPWNwa",
    "CvrQ",
    "otaZnJCYC1bks3n0",
    "x2vU",
    "W5CADq",
    "Bg9U",
    "AxjH",
    "WPJcR1q",
    "uu1L",
    "uHNcNW",
    "W5fHWR8",
    "W4rWWQ4",
    "WR3dIuS",
    "q1zc",
    "WOO6CW",
    "zv91",
    "rW3dNa",
    "BwL0",
    "CMf3",
    "EMXZ",
    "Euvy",
    "C2HP",
    "W7PKWOK",
    "W5qbWQi",
    "mhyK",
    "W5mCDG",
    "kHeV",
    "sXPu",
    "oKJcMW",
    "vXRcPG",
    "WQ3dNfu",
    "lY9N",
    "WQRcOMK",
    "W5pcRhq",
    "kSkaWOe",
    "CuvRWQhdVCoqht/dSCoEb8knvq",
    "nwe1",
    "W4GfWR4",
    "x21H",
    "yxbW",
    "z2LU",
    "r8oeuW",
    "WQddQhS",
    "Aw5J",
    "zgvS",
    "BL9P",
    "C29J",
    "WOTDW7W",
    "FKT5",
    "g8ohxq",
    "Dvfw",
    "vCo7pG",
    "oCk5rW",
    "WQRcQuW",
    "d8k2W6q",
    "zMyQ",
    "B0TY",
    "W4XMW7O",
    "gmkHW78",
    "ihvU",
    "lfpdJW",
    "wCkYWRu",
    "BIb0",
    "j0iw",
    "hSkWW7q",
    "WRaBuW",
    "DgvY",
    "W59zWRO",
    "WQ8nxa",
    "zMfP",
    "pJHB",
    "g8ohtG",
    "WRpcLgq",
    "Dw5J",
    "W5a+WOe",
    "bCossa",
    "lI4V",
    "W6ddSwu",
    "C3vY",
    "q3LH",
    "W77cQmke",
    "CY9x",
    "B3DL",
    "B25M",
    "W5HLWR8",
    "zxb0",
    "otG0otG0r2TxBvjk",
    "Dw50",
    "WRZdQ8oc",
    "WQtdPx4",
    "W65FWRG",
    "t1L3",
    "dCk1W6O",
    "DMfS",
    "kcGO",
    "peJdIG",
    "W5C8WPS",
    "WQFdKf0",
    "W6dcOSkf",
    "C3i7",
    "sSo3kG",
    "nsr3",
    "p0tcMq",
    "W7BdLCkx",
    "sSkOW7/cR01jlq",
    "gSoCuW",
    "W7HoWRq",
    "WPddG8kn",
    "Fmk8cq",
    "nXuU",
    "ieddSa",
    "W57dVtm",
    "wLbr",
    "xXrm",
    "CK1b",
    "s8obAW",
    "ywrI",
    "wvH0",
    "F2Pp",
    "cSkFWR3dUmkDmx/dK8orW459W6a",
    "zg9T",
    "v1Hl",
    "yMuy",
    "yNvM",
    "Efbt",
    "W4XkWP8",
    "Aw9U",
    "yxj0",
    "lWtcIG",
    "lCkbWPO",
    "BMvK",
    "whfk",
    "y29V",
    "b8k9W4W",
    "C3nH",
    "rgrw",
    "ntRcHW",
    "dmo+wq",
    "W4/dPua",
    "CxzQ",
    "W4ldN0u",
    "WR7dLK4",
    "lutcMq",
    "Chm6",
    "W4mwFa",
    "FMXA",
    "WRn8AG",
    "svu7",
    "W7/dLXC",
    "zMvY",
    "WQzVAq",
    "ywLS",
    "l8k6qa",
    "wHzn",
    "EwvY",
    "rgrc",
    "WQhdJN4",
    "x2LU",
    "WQRdOca",
    "W7jBWQ4",
    "Dwn0",
    "BKrO",
    "Dxnz",
    "Egzh",
    "zf9J",
    "AgLZ",
    "ESoZBW",
    "ueft",
    "C29S",
    "W5pcPNu",
    "sCozhG",
    "eZrb",
    "uwrg",
    "WQ8juq",
    "umk2WRu",
    "W4BdI8kw",
    "WQFcKMK",
    "y3vY",
    "W5uksW",
    "CM1h",
    "iNjL",
    "WQFcIwS",
    "CgrH",
    "rrPq",
    "WO7dKCky",
    "ywzL",
    "WQBdLKG",
    "kYKR",
    "AMjv",
    "W4VdVtu",
    "hSkXW6O",
    "W48xzG",
    "CKnV",
    "FwnV",
    "q0zs",
    "WPrpaq",
    "WRmjqa",
    "C3rH",
    "DML2",
    "tb1y",
    "wLDz",
    "WRhcIwK",
    "vSoyzW",
    "vSo+jq",
    "WRpdKeK",
    "Dg9j",
    "vLrQ",
    "aHTV",
    "qhmU",
    "sgfY",
    "zc50",
    "zNn5",
    "rHTA",
    "qgXP",
    "W7ZcUCkz",
    "tmovEq",
    "WQxdNSkB",
    "CMfU",
    "WPFdN8kG",
    "WR3dTJ0",
    "W6f/WO4",
    "muGe",
    "xmoEW70",
    "WQaVua",
    "zw91",
    "W6hcMCkb",
    "WOSDvq",
    "W58nWQi",
    "W5FdISks",
    "AuzL",
    "yxSY",
    "W5xcOhC",
    "kZjD",
    "xmkHWQK",
    "WP49EG",
    "WQVcS3G",
    "wvnh",
    "mruZ",
    "Cgf0",
    "W5PHWQm",
    "W5euWQ0",
    "oqlcNq",
    "WO3cH8olW6HxW4pdSZddLCkRWRSN",
    "W7dcLCkb",
    "BhvK",
    "A8kGfa",
    "Bgv0",
    "BMv4",
    "f3RdIa",
    "vLDw",
    "W418WR0",
    "DhjH",
    "W7STpYyqW6D8jJRcQGZdSmkqW4K",
    "DhvY",
    "zMiV",
    "W4uyyq",
    "BIGP",
    "AxbH",
    "rNLL",
    "W4ddLSkC",
    "b8kPWRO",
    "CKf0",
    "DgLT",
    "W6pdRcy",
    "W6XrWQu",
    "rbddKa",
    "ECoXkW",
    "rKHr",
    "WRtdQIK",
    "C2XP",
    "WRCbxq",
    "W5RdPvW",
    "zxHW",
    "dCk1W74",
    "WQtdRNG",
    "mZKWndi3vMz6Evb6",
    "C1vs",
    "W4HJyG",
    "wvm8",
    "i0Sv",
    "AM9P",
    "vgLT",
    "C3vI",
    "nHKY",
    "WOmRyW",
    "yNvZ",
    "iIKO",
    "CCkZaW",
    "WPHmWQO",
    "d0JdUW",
    "D3jT",
    "tSofW6O",
    "W6fZWP8",
    "W6BcLCkm",
    "x2nV",
    "zMXV",
    "CM9V",
    "F3KC",
    "W7CiwW",
    "W5RdI8km",
    "lMnV",
    "W6dcK8ka",
    "WQFcPvm",
    "zIJcJa",
    "WPeltW",
    "CMvH",
    "s0rO",
    "W4tdRxu",
    "CMqU",
    "W4BdRfm",
    "yKHb",
    "Dgv4",
    "W6VdJSkh",
    "W6fbgG",
    "WO7dGea",
    "W5C4WPS",
    "dmkZvG",
    "lKhcLG",
    "DhnH",
    "WRb4FW",
    "gSoYsa",
    "s8odW7K",
    "WQZcR1q",
    "rGvy",
    "WRJdMfq",
    "vCodW6m",
    "cSoaWRK",
    "W7n5WP8",
    "WQ3dPIS",
    "WOrsbq",
    "W5mkCW",
    "mfqk",
    "qabx",
    "W5SlWQi",
    "qmkJWQy",
    "C2vU",
    "WOSmsq",
    "zNmT",
    "WQKkua",
    "thry",
    "zxjJ",
    "W7ZdQmkg",
    "CgX1",
    "WR3dVt4",
    "sKzY",
    "W4a0WP8",
    "q21j",
    "qMno",
    "pSowWP0",
    "W4ldSKC",
    "W6D5WPK",
    "W6fKWPq",
    "omkhWPS",
    "WQddONW",
    "lCk5wG",
    "WRTYyG",
    "sCoGBa",
    "DMnh",
    "W4BdSsG",
    "WRlcRmkn",
    "WQ7dQmoL",
    "BblcNq",
    "W6a8WOy",
    "cKpdLW",
    "d8kpxq",
    "CKvn",
    "Dvbv",
    "y29U",
    "WRFcLMm",
    "W418WQ4",
    "W4tcRhy",
    "gupdMG",
    "W6hcImko",
    "rLHp",
    "Dx85",
    "zguK",
    "h8kWW6u",
    "kI53",
    "W4ddTYG",
    "WPddV2a",
    "kXJcLG",
    "it5a",
    "CKnH",
    "ESk6eW",
    "uMrs",
    "fLOI",
    "nYrO",
    "W4ldR2e",
    "x2XP",
    "W4tcMCka",
    "sCkTfG",
    "zYlcHW",
    "W7hdN8kg",
    "BgvU",
    "yMXL",
    "qCo3ma",
    "W5mnCW",
    "bhCi",
    "nJK4mZKWqxLrvLLV",
    "W5FdHYi",
    "W6xdQq4",
    "WPqxvq",
    "a0/dNq",
    "B19F",
    "jYrq",
    "rCk2WRm",
    "oXlcNW",
    "DgLV",
    "icHM",
    "W5jsWRq",
    "pmkJrW",
    "z2v0",
    "k8khWPO",
    "A2v5",
    "W57cICkx",
    "BgfJ",
    "WObsW7RdICknW6H/pXS8W6tcNW",
    "kZ5a",
    "r0jb",
    "WP0asW",
    "W7TmWOG",
    "CM91",
    "W6dcQmke",
    "zwuN",
    "ErpdNa",
    "WOtcOwa",
    "WQ0lW7ZcISoJy8kzWOtcPLhcJrnq",
    "W7JcJtG",
    "BMv0",
    "A8kGiW",
    "xCk6WQq",
    "W4mmya",
    "WOtdKCkb",
    "W45Vyq",
    "CgfY",
    "WOjfaG",
    "WQPOFW",
    "WOFdJ8oj",
    "z2vZ",
    "nLNcGW",
    "bmk8W7K",
    "mK4w",
    "ls5L",
    "pJHb",
    "rwfZ",
    "k8khwG",
    "Cx4J",
    "omkIxq",
    "vmo9kW",
    "DgfI",
    "WQddG0K",
    "WRP4Aq",
    "W7FcLCkk",
    "W5ldL3C",
    "WPFdScldR1atrCo0WQzWxNC",
    "zwfK",
    "WPu/za",
    "WOKdFG",
    "W7fjWQ8",
    "amk1wG",
    "W4XMEG",
    "D2nN",
    "tmofEq",
    "gH93",
    "WRZcGgm",
    "WQKQtq",
    "W5qbWRG",
    "sePl",
    "WRZdK8kd",
    "W53cPSk4",
    "W7pIGPK/",
    "WOOxva",
    "zYbZ",
    "W4BcRg4",
    "WP5gaW",
    "W7ZcImkC",
    "W61nWQS",
    "W5ldUgm",
    "igXH",
    "ps5H",
    "xbby",
    "W77cQmkE",
    "B25K",
    "nt5N",
    "mJzK",
    "mmo3ua",
    "W516FW",
    "WRRdJvq",
    "r8kNWRq",
    "WQNcM2q",
    "ksSK",
    "k8k/wq",
    "W6FcKSkB",
    "g8oAWQq",
    "DxjU",
    "W6NdN8ka",
    "W5bVyq",
    "uvDf",
    "y2nU",
    "q1bk",
    "tfDm",
    "W4OlWQm",
    "WRRcGea",
    "zYJcHG",
    "wffp",
    "W45RWR8",
    "kSk1qq",
    "DhH0",
    "WPhdN8kd",
    "yM5H",
    "zMLS",
    "mJaYmtm5mJbKzurIAgO",
    "Dhj1",
    "W6xdKhu",
    "nmk5WRC",
    "CMvW",
    "lvNcHq",
    "vKHz",
    "W7zSWP4",
    "ue9s",
    "oc7cJW",
    "y3PZ",
    "BwfP",
    "WQxdICkj",
    "W5v5EW",
    "Dg90",
    "WPpdSSoj",
    "CNrZ",
    "puBcNG",
    "xCoRW6G",
    "wrRdTW",
    "W4FdMSkr",
    "cLNdKW",
    "WRehxq",
    "yxvi",
    "cmodWRC",
    "W4ddJCkk",
    "h8okWQi",
    "gmoFxq",
    "WR3cJwS",
    "WQRdQIe",
    "W7hdU8kp",
    "F2Xw",
    "lbuV",
    "WQJdPdW",
    "WPtdLCoG",
    "u0Hf",
    "mmkJwW",
    "CMvK",
    "BM90",
    "htnO",
    "rwDU",
    "WOTYWPy",
    "WQZcR04",
    "trj0",
    "W7ZcOSkE",
    "W5PRWQi",
    "WP4RDq",
    "lI91",
    "DxnL",
    "ywXY",
    "eYrA",
    "WQ3dIui",
    "zurP",
    "tfPy",
    "W4BcVxi",
    "yNOQ",
    "B8kHdG",
    "DgH1",
    "W6NcSvuVWR9OoW",
    "WOrjdW",
    "Bw9K",
    "WRlcPvu",
    "W4tdR10",
    "CMnO",
    "vSotW6m",
    "WOi8mW",
    "DgLJ",
    "C2vK",
    "m2tcPG",
    "W4CnEG",
    "zwfZ",
    "CCkWfa",
    "fHddMG",
    "B3iO",
    "W6hcOSkj",
    "zxbI",
    "WQFcLha",
    "ChvZ",
    "jI8+",
    "W4hdR0a",
    "umk6WP0",
    "Cfn5",
    "W53dPuS",
    "W6hcMCko",
    "zM9Y",
    "Bs9S",
    "yMmM",
    "W5TRWQ4",
    "WQZcPu8",
    "guxdRa",
    "WRFcKMq",
    "C2L6",
    "Bwf0",
    "lYjC",
    "yCkNbW",
    "B3jK",
    "vbRcIIJdRXxcVcZdHmorW5BcKq",
    "WQhdONa",
    "WQ7cOvq",
    "vmo3kG",
    "WRVcGxG",
    "WQbVBa",
    "x3DP",
    "weDp",
    "DhPU",
    "au/dLW",
    "yMLU",
    "ChaU",
    "A0Hm",
    "WOjpaW",
    "iGDV",
    "wmoHEW",
    "uCocAW",
    "D25S",
    "Dg9m",
    "WQ7cRea",
    "W6K1AW",
    "dCobWRu",
    "q0me",
    "W4xdPvW",
    "WR5+AG",
    "WO0mxq",
    "CgXH",
    "WPddN8kp",
    "u09t",
    "W6hdMCom",
    "cG9H",
    "D2fY",
    "Fd3cIq",
    "wXddMW",
    "WPeiwG",
    "WOvodW",
    "WR/dQgS",
    "D29Y",
    "z3rO",
    "twfl",
    "uCopW74",
    "uCoEAq",
    "sG1j",
    "oJTK",
    "WRtdOca",
    "WP8HDa",
    "xrPw",
    "r8oOzG",
    "rbldMG",
    "BwLZ",
    "WQBcKMu",
    "nLig",
    "AMP9",
    "Fhzg",
    "WRxdGCk7",
    "Df93",
    "W7xcPmke",
    "WQpdRg0",
    "lISP",
    "WOZcThq",
    "WOygvW",
    "WONdRCof",
    "WO/dLCky",
    "WPpdO8oE",
    "umoEzq",
  ];
  v = function () {
    return dZ;
  };
  return v();
}
const ah = "QWERTYUIOPASDFGHJKLZXCVBNM".split("");
const ai = (z = "") => z.replace("@s.whatsapp.net", "").replace("@lid", "");
const aj = require("./utils");
const ak = require("./config");
const { lang: al } = require(".");
function an(A) {
  const B = {
    id: A,
    longest_word: "",
    word_count: 0x0,
    letter_count: 0x0,
  };
  return B;
}
function ao(A) {
  for (let D = A.length - 1; D > 0; D--) {
    const F = Math.floor(Math.random() * (D + 1));
    const G = A[D];
    A[D] = A[F];
    A[F] = G;
  }
  return A;
}
function bB(z, A) {
  return y(z - 0xa2, A);
}
const ap = (z) => (z ? "hard" : "easy");
function by(z, A) {
  return x(A + 0x74, z);
}
function bG(z, A) {
  return y(A + 0x1c3, z);
}
function bF(z, A) {
  return x(z - 0xd6, A);
}
function bD(z, A) {
  return x(A - 0x1c6, z);
}
function aq(z) {
  const A = new Date(null);
  A.setSeconds(z);
  return A.toISOString().slice(11, 19);
}
exports.wcg = {
  ie: "",
  room: {},
  _ensureDict: async function () {
    if (this.ie) {
      return this.ie;
    }
    const A = aa.join(__dirname, "../word.txt");
    if (!ab(A)) {
      const B = await af(
        "https://gist.githubusercontent.com/lyfe00011/dc86b4db7c6eafe5a57c3390adb26dfb/raw/word.txt",
      );
      if (!B || !B.buffer) {
        throw new Error("failed to download word.txt");
      }
      ac(A, B.buffer, "utf8");
    }
    this.ie = new ae(ad(A, "utf8"));
    return this.ie;
  },
  end: async function (A, B, C) {
    if (!ak[C]) {
      throw new Error("missing session");
    }
    const E = {
      text: al.plugins.wcg.game_ends,
    };
    if (!ak[C].sock) {
      if (!ag) {
        ag = await a9();
      }
      await ag.delay(10000);
    }
    if (this.room[A] && this.room[A].c === B) {
      this.room[A].state = -1;
      delete this.room[A];
      await ak[C].sock.sendMessage(A, E, {
        ephemeralExpiration: aj.expiration.get(A),
      });
    }
  },
  quit: async function (A, B, C) {
    if (0 === this.room[A].state && this.room[A].players[B]) {
      delete this.room[A].players[B];
      this.room[A].participants = this.room[A].participants.filter(
        (F) => F != B,
      );
    }
  },
  get_char: function (A, B) {
    const E =
      "random" === this.room[A].mode
        ? ah[Math.round(Math.random() * ah.length)] || "L"
        : B.charAt(B.length - 1).toUpperCase();
    this.room[A].current.letter = E;
  },
  start_game: async function (C, D, E, F, G = "easy") {
    if (C in this.room) {
      if (0 == this.room[C].state) {
        this.room[C].m = "hard" === G.toLowerCase();
        const J = this.room[C].m ? "Hard" : "Easy";
        return await ak[F].sock.sendMessage(C, {
          text: al.plugins.wcg.mode_update.format(J),
        });
      }
    } else {
      try {
        await this._ensureDict();
      } catch (M) {
        const N = {
          text: "word list unavailable — try again later",
        };
        return void (ak[F]?.["sock"] && (await ak[F].sock.sendMessage(C, N)));
      }
      const L = {
        player: "",
        size: 0x3,
        time: 0x28,
        next: "",
        letter: "",
      };
      this.room[C] = {
        m: "hard" === G.toLowerCase(),
        mode: E,
        c: D,
        start: 0x0,
        state: 0x0,
        paused: false,
        used: [],
        players: {},
        joined: 0x0,
        time: 0x3b,
        words: 0x0,
        round: 0x0,
        i: 0x0,
        cool: 0x28,
        participants: [],
        current: L,
      };
      await this.main(C, D, F);
    }
  },
  exist: function (z) {
    return this.ie.isWord(z.toLowerCase());
  },
  start: async function (A, B) {
    if (A in this.room && 0 == this.room[A].state && this.room[A].c === B) {
      this.room[A].time = 0;
    }
  },
  isWord: async function (D, E, F, G, H) {
    if (
      !(D in this.room) ||
      1 != this.room[D].state ||
      this.room[D].current.player != E ||
      !this.room[D].participants.includes(E)
    ) {
      return false;
    }
    if (this.room[D].paused) {
      return;
    }
    const J = {
      text: al.plugins.wcg.already_used,
    };
    F = F.toLowerCase();
    if (this.room[D].used.includes(F)) {
      return await ak[H].sock.sendMessage(D, J, {
        ephemeralExpiration: aj.expiration.get(D),
        quoted: G,
      });
    }
    if (F.charAt(0).toUpperCase() != this.room[D].current.letter) {
      return await ak[H].sock.sendMessage(
        D,
        {
          text: al.plugins.wcg.not_starting_with.format(
            this.room[D].current.letter,
          ),
        },
        {
          ephemeralExpiration: aj.expiration.get(D),
          quoted: G,
        },
      );
    }
    if (F.length < this.room[D].current.size) {
      return await ak[H].sock.sendMessage(
        D,
        {
          text: al.plugins.wcg.length_limit.format(this.room[D].current.size),
        },
        {
          ephemeralExpiration: aj.expiration.get(D),
          quoted: G,
        },
      );
    }
    const K = {
      text: al.plugins.wcg.not_in_list,
    };
    if (!this.ie.isWord(F)) {
      return await ak[H].sock.sendMessage(D, K, {
        ephemeralExpiration: aj.expiration.get(D),
        quoted: G,
      });
    }
    this.room[D].paused = true;
    this.room[D].current.time = this.room[D].cool;
    this.room[D].used.push(F);
    this.room[D].words++;
    const L = {
      text: "✅",
      key: G.key,
    };
    const M = {
      react: L,
    };
    this.get_char(D, F);
    this.room[D].players[E].word_count++;
    if (F.length > this.room[D].players[E].letter_count) {
      this.room[D].players[E].longest_word = F;
      this.room[D].players[E].letter_count = F.length;
    }
    await this.trun(D, H);
    if (!ag) {
      ag = await a9();
    }
    await ag.delay(200);
    await ak[H].sock.sendMessage(D, M, {
      ephemeralExpiration: aj.expiration.get(D),
    });
    return true;
  },
  trun: async function (z, A) {
    if (this.room[z]) {
      if (this.room[z].i <= 0) {
        this.room[z].i = this.room[z].participants.length;
        if (
          (this.room[z].m && this.room[z].current.size < 13) ||
          (this.room[z].round % 3 == 0 && this.room[z].current.size < 13)
        ) {
          this.room[z].current.size++;
        }
        if (
          (this.room[z].m && this.room[z].cool > 20) ||
          (this.room[z].cool > 20 && this.room[z].round % 4 == 0)
        ) {
          this.room[z].cool -= 5;
        }
        this.room[z].round++;
      }
      this.room[z].i--;
      this.room[z].current.time = this.room[z].cool;
      this.room[z].current.player = this.room[z].participants[0];
      this.room[z].current.next = this.room[z].participants[1];
      this.room[z].participants.push(this.room[z].participants.shift());
      await ak[A].sock.sendMessage(
        z,
        {
          text: al.plugins.wcg.turn_info.format(
            ai(this.room[z].current.player),
            ai(this.room[z].current.next),
            this.room[z].current.letter,
            this.room[z].current.size,
            this.room[z].participants.length,
            this.room[z].joined,
            this.room[z].current.time,
            this.room[z].words,
          ),
          mentions: [this.room[z].current.player, this.room[z].current.next],
        },
        {
          ephemeralExpiration: aj.expiration.get(z),
        },
      );
      this.room[z].paused = false;
    }
  },
  sub_main: async function (z, A) {
    if (this.room[z]) {
      this.room[z].start = new Date().getTime();
      this.room[z].participants = ao(this.room[z].participants);
      this.room[z].current.letter =
        ah[Math.round(Math.random() * ah.length)] || "L";
      this.room[z].i = this.room[z].participants.length;
      for (await this.trun(z, A); 1 == this.room[z].state;) {
        if (!ag) {
          ag = await a9();
        }
        await ag.delay(1000);
        if (!ak[A].sock) {
          continue;
        }
        this.room[z].current.time--;
        const C = this.room[z].participants.length;
        const D = this.room[z].current.player;
        const E = this.room[z].current.next;
        if (this.room[z].current.time < 0) {
          this.room[z].participants = this.room[z].participants.filter(
            (F) => F != D,
          );
          await ak[A].sock.sendMessage(
            z,
            {
              text: al.plugins.wcg.timeout.format(ai(D)),
              mentions: [D],
            },
            {
              ephemeralExpiration: aj.expiration.get(z),
            },
          );
          if (2 == C) {
            const F = new Date().getTime() / 1000 - this.room[z].start / 1000;
            const G = Object.values(this.room[z].players).reduce((H, I) =>
              I.letter_count > H.letter_count ? I : H,
            );
            this.room[z].state = -1;
            await ak[A].sock.sendMessage(
              z,
              {
                text: al.plugins.wcg.winner.format(
                  ai(E),
                  this.room[z].words,
                  G.longest_word,
                  G.letter_count,
                  ai(G.id),
                  aq(F),
                ),
                mentions: [E, G.id],
              },
              {
                ephemeralExpiration: aj.expiration.get(z),
              },
            );
            return delete this.room[z];
          }
          await this.trun(z, A);
        }
      }
    }
  },
  join: async function (z, A, B) {
    return (
      z in this.room &&
      !(A in this.room[z].players) &&
      0 == this.room[z].state &&
      !this.room[z].paused &&
      ((this.room[z].players[A] = an(A)),
      this.room[z].participants.push(A),
      this.room[z].joined++,
      await ak[B].sock.sendMessage(
        z,
        {
          text: al.plugins.wcg.joined.format(ai(A)),
          mentions: [A],
        },
        {
          ephemeralExpiration: aj.expiration.get(z),
        },
      ),
      true)
    );
  },
  main: async function (A, B, C) {
    await ak[C].sock.sendMessage(
      A,
      {
        text: al.plugins.wcg.starting.format(this.room[A].m ? "hard" : "easy"),
      },
      {
        ephemeralExpiration: aj.expiration.get(A),
      },
    );
    if (!ag) {
      ag = await a9();
    }
    await ag.delay(200);
    for (await this.join(A, B, C); this.room[A] && 0 == this.room[A].state;) {
      if (!this.room[A]) {
        return;
      }
      if (!ag) {
        ag = await a9();
      }
      await ag.delay(1000);
      if (ak[C].sock) {
        const G = {
          text: al.plugins.wcg.terminated,
        };
        if (!(this.room[A].time > 0)) {
          return this.room[A].participants.length < 2
            ? ((this.room[A].paused = true),
              await ak[C].sock.sendMessage(A, G, {
                ephemeralExpiration: aj.expiration.get(A),
              }),
              void delete this.room[A])
            : ((this.room[A].state = 1), void this.sub_main(A, C));
        }
        this.room[A].time--;
        if ([15, 30, 44].includes(this.room[A].time)) {
          await ak[C].sock.sendMessage(
            A,
            {
              text: al.plugins.wcg.starts_in.format(
                this.room[A].time,
                this.room[A].m ? "hard" : "easy",
                this.room[A].participants.length > 1
                  ? al.plugins.wcg.players_count.format(
                      this.room[A].participants.length,
                    )
                  : "",
              ),
            },
            {
              ephemeralExpiration: aj.expiration.get(A),
            },
          );
        }
      }
    }
  },
};
