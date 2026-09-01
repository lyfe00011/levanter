(function (x, y) {
  const z = x();
  while (true) {
    try {
      const A =
        parseInt(u(729, 0x57f)) / 1 +
        (-parseInt(u(1344, 0x5d6)) / 2) * (-parseInt(q(2377, "@nkG")) / 3) +
        parseInt(u(2144, 0x7df)) / 4 +
        (-parseInt(q(1995, "8ANe")) / 5) * (-parseInt(u(2072, 0x857)) / 6) +
        -parseInt(u(571, 0x1c6)) / 7 +
        -parseInt(u(1622, 0xbc1)) / 8 +
        -parseInt(q(692, "xJ*V")) / 9;
      if (A === y) {
        break;
      } else {
        z.push(z.shift());
      }
    } catch (B) {
      z.push(z.shift());
    }
  }
})(k, 148324);
function u(a, b) {
  const c = k();
  u = function (d, e) {
    d = d - 415;
    let f = c[d];
    if (u.ySTaII === undefined) {
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
        let k = 0;
        for (let v = n.length; k < v; k++) {
          o += "%" + ("00" + n.charCodeAt(k).toString(16)).slice(-2);
        }
        return decodeURIComponent(o);
      };
      u.EBfeMT = g;
      a = arguments;
      u.ySTaII = true;
    }
    const h = c[0];
    const i = d + h;
    const j = a[i];
    if (!j) {
      const l = function (m) {
        this.aKZkFl = m;
        this.XCMFQw = [1, 0, 0];
        this.meQLSf = function () {
          return "newState";
        };
        this.dNklnf = "\\w+ *\\(\\) *{\\w+ *";
        this.QBhEtU = "['|\"].+['|\"];? *}";
      };
      l.prototype.NOekHI = function () {
        const m = new RegExp(this.dNklnf + this.QBhEtU);
        const n = m.test(this.meQLSf.toString())
          ? --this.XCMFQw[1]
          : --this.XCMFQw[0];
        return this.drdOFJ(n);
      };
      l.prototype.drdOFJ = function (m) {
        if (!Boolean(~m)) {
          return m;
        }
        return this.lMdYox(this.aKZkFl);
      };
      l.prototype.lMdYox = function (m) {
        let n = 0;
        for (let o = this.XCMFQw.length; n < o; n++) {
          this.XCMFQw.push(Math.round(Math.random()));
          o = this.XCMFQw.length;
        }
        return m(this.XCMFQw[0]);
      };
      new l(u).NOekHI();
      f = u.EBfeMT(f);
      a[i] = f;
    } else {
      f = j;
    }
    return f;
  };
  return u(a, b);
}
function dA(x, y) {
  return u(x + 0x132, y);
}
function dw(x, y) {
  return q(y + 0x24c, x);
}
const aM = (function () {
  let y = true;
  return function (z, A) {
    const C = y
      ? function () {
          if (A) {
            const E = A.apply(z, arguments);
            A = null;
            return E;
          }
        }
      : function () {};
    y = false;
    return C;
  };
})();
function dv(x, y) {
  return q(y + 0x2aa, x);
}
const aN = aM(this, function () {
  return aN
    .toString()
    .search("(((.+)+)+)+$")
    .toString()
    .constructor(aN)
    .search("(((.+)+)+)+$");
});
aN();
const aO = (function () {
  let y = true;
  return function (z, A) {
    const D = y
      ? function () {
          if (A) {
            const F = A.apply(z, arguments);
            A = null;
            return F;
          }
        }
      : function () {};
    y = false;
    return D;
  };
})();
const aP = aO(this, function () {
  let y;
  try {
    const B = Function('return (function() {}.constructor("return this")( ));');
    y = B();
  } catch (C) {
    y = window;
  }
  const z = (y.console = y.console || {});
  const A = ["log", "warn", "info", "error", "exception", "table", "trace"];
  for (let D = 0; D < A.length; D++) {
    const E = aO.constructor.prototype.bind(aO);
    const F = A[D];
    const G = z[F] || E;
    E.__proto__ = aO.bind(aO);
    E.toString = G.toString.bind(G);
    z[F] = E;
  }
});
function ds(x, y) {
  return u(y - 0x3c8, x);
}
function dz(x, y) {
  return q(x - 0x289, y);
}
function dt(x, y) {
  return q(y + 0x1c4, x);
}
function dy(x, y) {
  return u(x - 0x23e, y);
}
function dx(x, y) {
  return u(x + 0x232, y);
}
function k() {
  const mF = [
    "WPZdTg8",
    "BMnH",
    "W67cTSka",
    "Aw5M",
    "vhHl",
    "W5FcQve",
    "W7hdKmkT",
    "xmohpa",
    "g8kFW7W",
    "WRBcGmkP",
    "zSoZWOy",
    "mJOO",
    "A3LO",
    "rMzT",
    "uCoOfW",
    "yMHx",
    "W5BdT3a",
    "W6ddTsC",
    "W7TJoW",
    "Bxa0",
    "o8k6WRG",
    "CMDI",
    "nmkbWOq",
    "oMeG",
    "BNrY",
    "FmoKtW",
    "W7zYiW",
    "W7BdV8k2",
    "lxbP",
    "vCk/WOK",
    "BgfN",
    "Aef1",
    "p8kPW7q",
    "W7iNvq",
    "DJqY",
    "DhLe",
    "BKDS",
    "x3ZcHq",
    "W7b7nq",
    "Bt1P",
    "btBdGa",
    "cmkQtG",
    "kIyu",
    "ytqY",
    "W6RcQSkB",
    "lxDP",
    "lxr1",
    "Emo4fa",
    "WOhcQZm",
    "W4tcQc1AgCo+phzD",
    "cmo4yq",
    "kmoTsa",
    "Aw4O",
    "W5lcOvG",
    "c8orWQa",
    "DxrM",
    "WQzQW4m",
    "WOr1WO4",
    "ncmx",
    "WQVcM8kZ",
    "WQZdUCkI",
    "gSkmW4u",
    "ndiW",
    "W7TZgG",
    "culdSa",
    "gIC2",
    "WRH6W6O",
    "WO4KxW",
    "CZ1S",
    "lwnY",
    "zgvV",
    "B0DP",
    "ic1T",
    "ESo6W5G",
    "WQj9oW",
    "lxzU",
    "z2Pt",
    "WRRcKmkx",
    "A25P",
    "BhrL",
    "WR5TW6O",
    "WPpdU8oe",
    "b8kUWQi",
    "WRJdSby",
    "WO0qDW",
    "mSkOWRa",
    "uL9q",
    "rujN",
    "WRRcKCkr",
    "zSoPW60",
    "W7r5ba",
    "WPVdVNu",
    "BwXU",
    "exldGW",
    "ax/dSq",
    "zxH0",
    "zSoZWOe",
    "vwDn",
    "q0ry",
    "vmkbWOO",
    "f8ksWR0",
    "BgfU",
    "D0H1",
    "mtj4",
    "ms4Z",
    "WOldU8oJ",
    "WQWkFW",
    "WPBdNGK",
    "WRvWbq",
    "hmoLEW",
    "BCoSWQ8",
    "mJLL",
    "W61iia",
    "WPuRCW",
    "W79wha",
    "W53cVCoN",
    "t1zv",
    "WQDeWPK",
    "b3ldJG",
    "WQbSW60",
    "wZa6",
    "ah/cUq",
    "W6ZdQSkI",
    "BgLI",
    "zxn0",
    "WQpcI8o2",
    "ymk5ea",
    "FCosoa",
    "zMXP",
    "gM/dNW",
    "r090",
    "EfrA",
    "WRu4DW",
    "j8oiqq",
    "BCo4mG",
    "DhfX",
    "lIbt",
    "zxnL",
    "WP3dQZC",
    "BwvY",
    "WRb9W6C",
    "W6hcH8kT",
    "vfPV",
    "ldFdNq",
    "WPNdVq0",
    "y8o0WP0",
    "WQ8oWR8",
    "r0jq",
    "W6tcKCkH",
    "W7ZdS24",
    "WOtdT3O",
    "W69YnG",
    "uufl",
    "W7RdNmk2",
    "ic1P",
    "v1b6",
    "WPlcTSkj",
    "qCoqj2nMWPnWvYKIWPS",
    "zwmY",
    "lZi6",
    "ASo8WRG",
    "WQFcJCo9",
    "Cwzh",
    "AgL0",
    "gtxdJa",
    "W7hdLSkX",
    "BMuG",
    "WRPkdq",
    "WRioW74",
    "WP7cTCoK",
    "vCkPxW",
    "jYXZ",
    "Eevk",
    "WRTiWOO",
    "CMzd",
    "W4HlWP4",
    "ysbH",
    "q2Xb",
    "W5VdImk1",
    "lxnO",
    "WONcRK4",
    "WRDkmq",
    "gSkQW5C",
    "W7v6W6W",
    "Bg93",
    "z8k/WOq",
    "AwXL",
    "FCoPW7i",
    "Dg9c",
    "p2yt",
    "W7v0cq",
    "svjc",
    "WRzfWQe",
    "B21W",
    "gSkjWRa",
    "W7ldPJu",
    "smo4bG",
    "vmobWQq",
    "W5/dOSoA",
    "s292",
    "nciG",
    "ldGC",
    "WQFcM8oq",
    "i8kPWRa",
    "tmk1oa",
    "ktfU",
    "hmk9ta",
    "zMzW",
    "W5a4ta",
    "W4SVtW",
    "W6xdQSk3",
    "wSoVaa",
    "W7JdT8km",
    "iSouyW",
    "DwDm",
    "W6SbFG",
    "dYRdIa",
    "xSochG",
    "W6ZdKCku",
    "pSk8cq",
    "a8ovW54",
    "wmoIra",
    "h8o4mW",
    "rKLb",
    "BNnW",
    "aSkzW44",
    "WQvKW64",
    "B25M",
    "lwi6",
    "W457fG",
    "WOK9pa",
    "Dvrn",
    "dwRdLa",
    "m8kayW",
    "eSo9jq",
    "rSkIWRC",
    "eSkJBa",
    "WQ0yW60",
    "C3bS",
    "qunl",
    "WRFcMSow",
    "WQLQhG",
    "AmoowW",
    "Dw1o",
    "BwfN",
    "smoyWOq",
    "WR94W58",
    "z2PI",
    "i0FdVq",
    "d8kqsa",
    "aHBcGG",
    "rSo6AG",
    "lhnL",
    "mteW",
    "EuDX",
    "C2XL",
    "WQ7cHmkt",
    "W4lcULm",
    "BM9K",
    "nJGZotbTAMXdv04",
    "BKzJ",
    "cCknW4a",
    "W7RcU8kD",
    "q8oCjq",
    "W5j3fq",
    "j8ogqa",
    "vvrh",
    "ssVcIG",
    "pmkFW5m",
    "mhpdGW",
    "ihrV",
    "W6tdGCop",
    "B8olWP4",
    "WOq9W6W",
    "Dvn3",
    "W5/dVSkj",
    "ahpdKW",
    "psDT",
    "tCoanW",
    "WQn7W64",
    "zmkLdW",
    "cqddHa",
    "W6P6WRS",
    "EmkBWO8",
    "qSoqWOa",
    "sfnV",
    "WObXWOq",
    "DmkDWOu",
    "DMyG",
    "sLvZ",
    "ACogsG",
    "W6T0bq",
    "WQJcOmoJ",
    "gblcIq",
    "umknWOa",
    "WQ4TW5q",
    "W7/dMSop",
    "mdaW",
    "W6Gwbq",
    "Dgno",
    "W4dcJLu",
    "lmk6kq",
    "ywXL",
    "ELnx",
    "WRTIW60",
    "e8kUFq",
    "ELbQ",
    "ngiY",
    "WQn7WOG",
    "vMne",
    "WOztpq",
    "D2fY",
    "W6NdUmoy",
    "Ehbg",
    "Cd13",
    "B2TL",
    "iIaI",
    "hXNdJG",
    "mwDJ",
    "g8owWQu",
    "g3pdKW",
    "tgH6",
    "pSk5WQ0",
    "W7rAWQ0",
    "nvNdUa",
    "jSoZWQ0",
    "W6OIbG",
    "WOZcMZy",
    "teRdGG",
    "WQnOW48",
    "BZ1K",
    "Aw5J",
    "C0r4",
    "WR7cLSku",
    "kYSs",
    "DSkJWQe",
    "sgLi",
    "wCkLWRS",
    "WRVcMSki",
    "DuLx",
    "vCoioq",
    "BhHf",
    "WRfmFa",
    "WPpcGmkM",
    "WPZcOSo6",
    "WQK/Aq",
    "WR/cLCk2",
    "t0r4",
    "Cgu9",
    "rg9v",
    "Be5o",
    "mda2",
    "mY5V",
    "exNdSa",
    "pwrL",
    "zsaT",
    "W5zbBa",
    "rmksWQW",
    "CM9Y",
    "WOnTWP8",
    "W68GW40",
    "vCkmWPu",
    "z2Lq",
    "y29U",
    "ihL1",
    "WOFcOSo+",
    "iSoixG",
    "W6tdOmkf",
    "vwj3",
    "psiY",
    "W7j+WPy",
    "W7ekWQ8",
    "iIb2",
    "Dg9t",
    "iNZdMa",
    "kNDe",
    "ChjV",
    "aCklW5W",
    "zsaX",
    "DY1P",
    "tSofW7hcPYOkWQhdJaalW6bY",
    "hCkHsq",
    "WQP/W5K",
    "WQ/dQmot",
    "u1rj",
    "kmossa",
    "rCoqWQy",
    "D2L0",
    "fSkCFq",
    "yMXH",
    "W4pcTmkl",
    "W4/cO8oA",
    "AdP3",
    "uxbN",
    "rM5Q",
    "DwnL",
    "WOdcTCoJ",
    "y2SG",
    "mc45",
    "DMvJ",
    "ALfH",
    "W5pcSt4",
    "WRTZFW",
    "WQzRva",
    "CxvH",
    "rKzT",
    "W45kWPO",
    "W4dcQ10",
    "g8k6wq",
    "W4m/ea",
    "zuLU",
    "kWddGa",
    "sw50",
    "ze56",
    "tvbR",
    "sCo9fW",
    "W7pdQCoS",
    "otG4otfuzxD2CNq",
    "W7VdNmkg",
    "W7iNxW",
    "CJ0J",
    "w3zD",
    "WPNcO8kj",
    "mtaS",
    "B3b1",
    "W7pdQmkZ",
    "ycy4",
    "u21A",
    "W7RdRcm",
    "CMLT",
    "gSkHha",
    "WRnpW6y",
    "Cgvk",
    "CMvH",
    "W5i3ia",
    "C2vH",
    "zw1J",
    "W7ldJSkB",
    "yxzL",
    "vCo9aq",
    "quTn",
    "W68bjq",
    "CgXL",
    "WRmFW4S",
    "EM9Z",
    "cSkFWQG",
    "W6XUaW",
    "BgvU",
    "zMX1",
    "ngxdGW",
    "WQFcVSkl",
    "gmkYW5i",
    "qw9y",
    "ogVdNa",
    "tML4",
    "EvLs",
    "W5FcVCk1",
    "oSk0gG",
    "cmkyWRa",
    "kcGO",
    "zgvM",
    "kYKR",
    "W5xdVSk4",
    "DguG",
    "AuvW",
    "yxvS",
    "jZ/dNG",
    "C3rZ",
    "WQDvWP0",
    "W6TLaa",
    "W7ldPxS",
    "DhvY",
    "W7ZcRmkB",
    "Dd15",
    "W7D/WRi",
    "yYbJ",
    "W4/cTCoc",
    "y8ocWQG",
    "lxbY",
    "rxHP",
    "ic1H",
    "yMXL",
    "q29K",
    "WQzJW5S",
    "t3v0",
    "DwX0",
    "w8oijG",
    "W6/dHSox",
    "W6lcR8oJ",
    "qmowWQK",
    "WRz+nW",
    "W6hdJCkS",
    "s1L3",
    "W65Blq",
    "ic1J",
    "W5ZdP38",
    "E8oZWOe",
    "Dw5J",
    "nH05",
    "tSkUiq",
    "rt/cOq",
    "ignY",
    "DIbL",
    "WOJcQCkx",
    "W47cUfS",
    "nSoitG",
    "WOJdMJW",
    "mGWq",
    "vZqn",
    "CNjV",
    "yxn0",
    "B3jT",
    "zbf/",
    "D1n5",
    "W7DPhG",
    "B3v0",
    "ysXW",
    "WOJdJZ8",
    "emkowa",
    "W6HPgq",
    "ESklWRS",
    "Dd1Y",
    "dSkLDq",
    "AcKV",
    "wMj3",
    "W61lWQ8",
    "reJdJG",
    "lgL3",
    "W43cRCkp",
    "C2fY",
    "rLvk",
    "yxq9",
    "WQvGW6i",
    "lw1V",
    "adBcNG",
    "zJ0W",
    "osyq",
    "ic1W",
    "kSkgW5W",
    "WQNdUYK",
    "kg93",
    "n8ouqa",
    "svHP",
    "ysGX",
    "mdPY",
    "qKD3",
    "BevI",
    "W4lcQSkG",
    "u8kHWRe",
    "y3jV",
    "yKr6",
    "WRDSmG",
    "W6hdMmk4",
    "u8o4WRK",
    "DYKV",
    "Dd1Z",
    "qxDG",
    "pNddMG",
    "ksSK",
    "WQlcQ8oj",
    "vLr0",
    "DcaT",
    "lCktfa",
    "W4NcOCkR",
    "W7POW70",
    "zs13",
    "i8orkq",
    "otrJ",
    "CCk/WRW",
    "y2H5",
    "rmk3WPu",
    "WPeGbW",
    "zd0Y",
    "vSorWQ4",
    "v1HH",
    "W6ddU8k4",
    "oNyG",
    "xmkwWQ0",
    "WQ9poa",
    "W5xdVSox",
    "DxjU",
    "vCo4WQe",
    "zmo1WRO",
    "WQBdNmou",
    "smkUia",
    "W57dJqC",
    "WOhcSs0",
    "D8oJWOe",
    "l3D3",
    "rCkpW40",
    "zwfZ",
    "cSkQsq",
    "qmkPlq",
    "hSkCWQS",
    "DY53",
    "feLJ",
    "WR5MxW",
    "WPBdKJG",
    "W75VrW",
    "z2zi",
    "mCk2WQe",
    "qLLX",
    "jSkUW7m",
    "Beji",
    "mSoosa",
    "W6BcTmkm",
    "DhnH",
    "DwXd",
    "mJO1",
    "CMfU",
    "igHL",
    "wxVdMq",
    "WQlcRSkp",
    "wuPV",
    "icTM",
    "WPZdQIW",
    "WPddOwW",
    "WRrMW6e",
    "gComW7e",
    "y29T",
    "Efzx",
    "WQPlWRi",
    "vuHY",
    "jNz8",
    "WQrlWP0",
    "fCkJqW",
    "AgrH",
    "W4RcVmkj",
    "W47dV8kL",
    "hL8U",
    "W5dcRwK",
    "pwXH",
    "sevW",
    "tmk7pa",
    "W4/cO8oy",
    "WQWoW6W",
    "W75vWP8",
    "DhjL",
    "WOFcJmkC",
    "BgvM",
    "m8kDzG",
    "b8kCW5a",
    "ANbQ",
    "oMH8",
    "zgu9",
    "pgnP",
    "BwvU",
    "W5u0zG",
    "W6ZdGCoi",
    "BMfS",
    "WQFcMSkD",
    "sg1P",
    "A8kiwa",
    "e2RdHa",
    "WOVcVmkP",
    "WONcVeK",
    "zty0",
    "WPCTW64",
    "CZ03",
    "fCk/hG",
    "A8osnG",
    "WRnaWQ4",
    "WPuEEW",
    "WRnroa",
    "DYaT",
    "EKP2",
    "g8ksWP8",
    "DMzS",
    "WOVdR8or",
    "W7FcMCoV",
    "ySosnW",
    "BgfJ",
    "rCoBWOG",
    "W7pcMCk+",
    "WPaVuW",
    "WPldRtm",
    "rSo4mW",
    "DgfU",
    "CgHV",
    "W4dcQSkC",
    "BgXP",
    "W4RdT8kT",
    "mtKY",
    "FmodkG",
    "WRH8W6q",
    "cmkRCq",
    "W4b+WPu",
    "iIaT",
    "lwfM",
    "BhDA",
    "Dgvg",
    "WPBcVCos",
    "wmk2wa",
    "W4ZdO8koWRBcOCksW4BcUq",
    "umkMqW",
    "ENPJ",
    "imk+WRC",
    "oMDM",
    "W5ZdShi",
    "wvDs",
    "EmkSWQi",
    "WOiPva",
    "v0PV",
    "Dw5S",
    "WQZcKCkq",
    "Ag93",
    "zCoZWPe",
    "dINdGW",
    "s2Dy",
    "A0jZ",
    "WQuYW6u",
    "x2fZ",
    "nmkAtW",
    "CJ0X",
    "heZdQa",
    "sev0",
    "A3ZcIG",
    "Chm6",
    "hhlcIG",
    "WOG6ma",
    "W6tdVCkI",
    "amkJiG",
    "WRdcKCkr",
    "aCkkWQu",
    "rCo4la",
    "BgfT",
    "uwzL",
    "weTH",
    "W6Ofwq",
    "WQbhWPO",
    "WOZcU8kv",
    "y2fS",
    "BM9U",
    "ideG",
    "ltiS",
    "WRzJW4G",
    "s2BdQq",
    "W5FcPmkN",
    "eX82",
    "y2TL",
    "W4ZcQ8kw",
    "zwnY",
    "W7xcKCkq",
    "mti6",
    "v8o3jq",
    "Cwz6",
    "W63dQSkc",
    "rCkNWO0",
    "W6KqFW",
    "W5hcVgW",
    "WRm1FW",
    "WQNdOmkM",
    "Cvv4",
    "W5hcPsq",
    "zKvl",
    "WQi9W4K",
    "WQeXAW",
    "ywmG",
    "lgCC",
    "CM9M",
    "B3a9",
    "Dv5N",
    "WQNcK8ky",
    "W6BdNCk6",
    "zhrO",
    "yvHu",
    "BL9O",
    "W6HSwG",
    "B0zl",
    "W6NcVSke",
    "CfzP",
    "yxPk",
    "W4vMcG",
    "Dw5d",
    "hmkjra",
    "C8keWRK",
    "mYi8",
    "pteW",
    "W6hdICkZ",
    "WRlcJSkW",
    "xKxdJa",
    "W5FdMJW",
    "WPjhWOG",
    "Bg9Z",
    "txnQ",
    "eSkAzG",
    "ymohia",
    "f8kGxW",
    "W7FdK8oe",
    "eSkyWQO",
    "sSkIkW",
    "Exv2",
    "zMfP",
    "rCk4ra",
    "EmouWRC",
    "W7W7WPS",
    "BwvK",
    "ndGW",
    "B3m6",
    "W7WSW6a",
    "qKPF",
    "C8kTWR0",
    "CXe9",
    "W6qqjq",
    "FmkJjG",
    "q3bm",
    "iCoykq",
    "CNX7",
    "W7qdzG",
    "W6X2nq",
    "dmomW7y",
    "W6hcOvO",
    "W6ZdN8kg",
    "W4G+ia",
    "xSoFWPm",
    "Aers",
    "WPldNJm",
    "vmknWOi",
    "y3jM",
    "wKrm",
    "BMv3",
    "DhrZ",
    "h0tdMa",
    "Dgu9",
    "kg9O",
    "WRdcOCoK",
    "F8o3W4O",
    "W7n2jW",
    "FgVdHa",
    "WQ05W6S",
    "W45zlq",
    "WRFcMmkB",
    "pKv/",
    "W7/dNmkS",
    "W6P5EG",
    "surv",
    "z2m9",
    "uSoBW78",
    "WQb0nG",
    "x29Y",
    "y292",
    "WPlcSSkk",
    "CNrL",
    "W6RcTCkz",
    "W7f4dW",
    "WOy1uW",
    "jmk6WQm",
    "WONcUe4",
    "vSotW6S",
    "d3tdLa",
    "bCkzWPC",
    "fSkEWQO",
    "WPeEBG",
    "ve5A",
    "Aw5N",
    "ign4",
    "y8oynG",
    "W6hdRJm",
    "xxBcGq",
    "aSkgW7XFh8kvWPldOCkG",
    "Ce1J",
    "qSosWQm",
    "C2fM",
    "lxzM",
    "W7zAWOW",
    "zw90",
    "Dg9N",
    "zw9u",
    "C3nS",
    "WPtdSCoJ",
    "WPRdUuu",
    "x3jH",
    "yZ1J",
    "txLI",
    "neBdJW",
    "eSoijq",
    "x19W",
    "WPtdPbW",
    "k2zH",
    "W5GCW4y",
    "pta6",
    "WRldL8kA",
    "Aw9U",
    "u3rP",
    "W6Gpza",
    "Df9Y",
    "WRG3W4G",
    "WPDnW4u",
    "W7xcKhC",
    "WRmTiG",
    "cqK8",
    "WQfOW5W",
    "W4KijG",
    "uCozWQa",
    "WQrQmW",
    "W7xdNmkR",
    "vxVdNW",
    "WP/dLJK",
    "WOpdSCoK",
    "zSowDG",
    "zwfT",
    "yMfZ",
    "W63dQSoS",
    "wmoBWQG",
    "C2XV",
    "WPNdKhq",
    "WO7dUSos",
    "WQyfEa",
    "DMvY",
    "wuz4",
    "W6RcT8kB",
    "gCknna",
    "W6BdMSkx",
    "WQhdUmk4",
    "yxLZ",
    "W67cLmkO",
    "Chvo",
    "WPDpWPK",
    "jCkVWOe",
    "Bgv4",
    "g8kuWOu",
    "WPxdJI4",
    "r2HB",
    "W4NdUCoN",
    "W7lcPCkA",
    "ksC6",
    "DXi8",
    "q1fP",
    "Ac1P",
    "AgLq",
    "W7xdOc8",
    "WQf0mW",
    "mtiP",
    "lmkMga",
    "WRTSW5W",
    "z29V",
    "lI4V",
    "CMnL",
    "W5JcVCk5",
    "ycSk",
    "W53cT8o+",
    "WQnSmW",
    "eSo4Fq",
    "zw52",
    "yvD4",
    "W7r5eG",
    "BxaZ",
    "zYjZ",
    "Aw9c",
    "wwLz",
    "mdyS",
    "W5v2fW",
    "zwjW",
    "WPVcPmoJ",
    "Fh7cKa",
    "B1D0",
    "W5ZdSti",
    "ngjI",
    "yxi9",
    "DuzN",
    "WQG3wq",
    "W7zdaG",
    "AwvZ",
    "u8o5WQq",
    "W5nNgW",
    "DJ1W",
    "Aw5L",
    "aCknzG",
    "teLb",
    "psmW",
    "W6ldJmkS",
    "Dwn0",
    "A8kEWOa",
    "we1f",
    "Cg5M",
    "mJu1",
    "wmo/dq",
    "W6nmEG",
    "yxnW",
    "Cf9T",
    "W4S+ja",
    "BNzT",
    "W68eFG",
    "t2jw",
    "iIaV",
    "z3rO",
    "o04Y",
    "W4hcVw8",
    "W7vDCG",
    "mdP2",
    "W6WnW7y",
    "qKj3",
    "rwfJ",
    "BwfW",
    "WRjNW6S",
    "EcaT",
    "CJP2",
    "vSorWQq",
    "W6WHeW",
    "Bgvt",
    "lhbH",
    "F8koiq",
    "zxb0",
    "zt0Y",
    "mtPH",
    "WRrpWO0",
    "zeDw",
    "dmomWQm",
    "W6xdPaO",
    "WQikW6S",
    "BwLU",
    "kCogsW",
    "ic1I",
    "W7qfAW",
    "zgLV",
    "e8kuW7K",
    "cSkfW4u",
    "CMnO",
    "u1nS",
    "CfDP",
    "xSo2ia",
    "WQWkW6S",
    "o8o7WOq",
    "WRCgW68",
    "oIHV",
    "WQznAW",
    "WOBdUhG",
    "eM7dUW",
    "WPyaW7W",
    "n2JdNG",
    "Exje",
    "ehldGG",
    "mJuZnLvxELrAyq",
    "DguU",
    "W5XlWO0",
    "terR",
    "W5lcPCkj",
    "Ahr0",
    "ALP+",
    "WR5MW6e",
    "WQNcSSkJ",
    "W6j8BW",
    "WPvRyW",
    "y2SU",
    "b8kzWOq",
    "ksW1",
    "oSo/WO0",
    "WQe6oa",
    "fN/dSa",
    "zw5K",
    "kSkNeG",
    "W5FcGSkF",
    "yxaG",
    "WOGbtG",
    "WP7dUGW",
    "W5hcKNe",
    "bmoPWRC",
    "FmoLsIfOs8ogeCoMWP4M",
    "C3rP",
    "WP3cV8k7",
    "uCo1ja",
    "vgLT",
    "yKHP",
    "ywnU",
    "W6H0eG",
    "B3j0",
    "Ag9H",
    "W5FdMwa",
    "r2zU",
    "zxjY",
    "W7RdR24",
    "xSkmoG",
    "W6dcTCou",
    "qCo4jG",
    "C3bL",
    "vJvI",
    "a0NdIq",
    "qKDP",
    "zIbS",
    "pSk0W6G",
    "W7ZdPCoC",
    "W4upBG",
    "WRX9zW",
    "ywDZ",
    "A8kbWOG",
    "yCkAWRC",
    "WQHKW4u",
    "vg9u",
    "re9I",
    "FCoOoG",
    "W4PpWOS",
    "WPFdOCoJ",
    "rwLM",
    "DcXY",
    "DMLK",
    "sgJdQW",
    "B2BdMG",
    "W7ZdRdy",
    "g8kbDG",
    "zMvW",
    "WP7cQrW",
    "ttxdMq",
    "WQXcWOW",
    "vLPe",
    "W7dcG8kB",
    "W7pdQSkW",
    "nhpdJG",
    "AYaI",
    "swldGG",
    "W6tdR8k2",
    "tSkoWQO",
    "dmkGxW",
    "tM8G",
    "WQ5NW6W",
    "o8oIWPa",
    "dg/dGq",
    "Bg9V",
    "b8kjCa",
    "W7hcR8oG",
    "aSk5CG",
    "DhjH",
    "kMtdNG",
    "z2vw",
    "qCk+WQ8",
    "W41vcW",
    "qvrM",
    "wCkkWP8",
    "W7DlhG",
    "W6pdPce",
    "zxjQ",
    "Awz5",
    "WOhdSmk6",
    "hSoGkq",
    "FSoZWOW",
    "W7XAaW",
    "lwzP",
    "z0rP",
    "s2jY",
    "WQfRuq",
    "Avrb",
    "DMvm",
    "oMjM",
    "ywnO",
    "WOtdTCo0",
    "BxmG",
    "rSkWpW",
    "y3jL",
    "WR1Ucq",
    "WPldTmoi",
    "Awv3",
    "iJBdMq",
    "y29W",
    "vCkJqG",
    "DMCI",
    "zxqG",
    "ide4",
    "wCoMWPe",
    "CZ0I",
    "o8kpAq",
    "WPRdS8ol",
    "idi1",
    "WP7dVtm",
    "zsfU",
    "WR5Vzq",
    "FmkyW6S",
    "kdGq",
    "bCoDW4u",
    "Et0I",
    "CZ0X",
    "WRbYEa",
    "DvHK",
    "C2uS",
    "u1zq",
    "oSk6WQe",
    "WR5TnG",
    "se9m",
    "mJu2",
    "W45QeG",
    "uSksW74",
    "WPFcLSo+",
    "lxe6",
    "AwDO",
    "yuXz",
    "WONcVLi",
    "Ew5J",
    "WPmmDa",
    "twVdGa",
    "oNnJ",
    "Chv0",
    "mwy2",
    "EhLo",
    "zMLS",
    "W7xcHCk3",
    "ALDb",
    "Bd0I",
    "WORdTSou",
    "W5dcOvm",
    "C8kPW64",
    "rSknjW",
    "WQ3dGqa",
    "AY5H",
    "jCoksq",
    "WOGQsW",
    "r0nl",
    "DwiZ",
    "yNGY",
    "FCoPjW",
    "s0ldMW",
    "jZPO",
    "kI8u",
    "pIOV",
    "u3LU",
    "fxJcJq",
    "mdPI",
    "WPJdLZS",
    "D8kxdq",
    "W68Oba",
    "pxL1",
    "svzV",
    "cgBcGa",
    "BxqG",
    "x8kgWPq",
    "lNv7",
    "Aw5H",
    "p8kfWQG",
    "WRHIW4i",
    "mSoNWRC",
    "W6WDW7W",
    "s8o5hq",
    "kgL3",
    "dmkaW4S",
    "t09k",
    "yw1L",
    "vCklWOi",
    "WP/cTCoV",
    "w8kfWPq",
    "B3zL",
    "W4BcI8kj",
    "s0Dh",
    "zrfV",
    "ExbL",
    "q0He",
    "W797da",
    "q8kiWPG",
    "AxPL",
    "Cevm",
    "r2n4",
    "l3rL",
    "WOpdTh0",
    "mIi+",
    "y2HP",
    "zCo+WOO",
    "B3nL",
    "W4GiEW",
    "DgLV",
    "ymkVWQ8",
    "yxjL",
    "WRVcVmoN",
    "dCoEwq",
    "AgfU",
    "DvFdGG",
    "Dg9I",
    "ECkbWQS",
    "W4HAWQS",
    "xKPR",
    "whjX",
    "zMnP",
    "w3Hf",
    "WQfCqq",
    "WQ1XlG",
    "mdaQ",
    "CcaX",
    "B29Y",
    "p8keha",
    "W7tdRmkL",
    "ANpdJW",
    "W5vZeq",
    "ymotpa",
    "yujf",
    "CgvN",
    "WRXSW4W",
    "cbWM",
    "W4pdV8oK",
    "zxHP",
    "zwn0",
    "oJuX",
    "WP3cS8oT",
    "ENPA",
    "nJOY",
    "n8kmW4O",
    "vxVcUW",
    "WO4bW4y",
    "dSkgDW",
    "CM1H",
    "lgHL",
    "CMvZ",
    "ntq1",
    "rZyb",
    "WOxdTCoK",
    "WQtdSSo+",
    "WPpdVIO",
    "WQ3cLCkz",
    "c8kdWQ0",
    "Cw12",
    "zu9X",
    "W7uPWQi",
    "WPNdUra",
    "W68LEG",
    "ddldHa",
    "qmonWQq",
    "mJmWndy0mgTWALPRDq",
    "bSkAW4e",
    "zSkxoa",
    "W7ZcUCko",
    "ASkZlG",
    "W4apnq",
    "WQ3dPSkM",
    "omk/WRa",
    "W7ZdUrW",
    "CMLN",
    "CcbM",
    "uuHu",
    "W5hcOtW",
    "kJiN",
    "W6BdQCkA",
    "tSkFW68",
    "WQZcI8odW7xdJv89WQLwW6XRWOC",
    "y3jw",
    "WQdcRCoI",
    "qSorWQe",
    "W5pcRCkC",
    "WPesAq",
    "f8ksWQ8",
    "qmkvkW",
    "W5VdLmk+",
    "DIKQ",
    "suD4",
    "WRfIkG",
    "WRXSW50",
    "yKPR",
    "W7xdTSkB",
    "WRzXgG",
    "zgvJ",
    "W6bHla",
    "v8oOFG",
    "WQ3cKCkk",
    "ic1S",
    "k8kaWOS",
    "C3qG",
    "WO8yW50",
    "W5BcL18",
    "WQSMW4W",
    "oSkLeq",
    "icHM",
    "emkdW6W",
    "D3jP",
    "CgPb",
    "xHyd",
    "WPtdLhm",
    "zCkAWRe",
    "x3pcNI8PASkoWQZcIZ4",
    "W5FcG2K",
    "W59bW5e",
    "lwfU",
    "WQSdma",
    "WRrqoG",
    "WRtdRCo5",
    "DMDR",
    "yxnL",
    "qmoNla",
    "ySoQW74",
    "zJq3",
    "d8o/wW",
    "iNjL",
    "WQuHW6y",
    "nwjK",
    "iduX",
    "W7ddM8kf",
    "WOJdQIa",
    "y8otbG",
    "C2HV",
    "WOldShS",
    "Dvbt",
    "xePT",
    "W7FcL8kt",
    "x3CV",
    "yZP2",
    "W5xdTSkR",
    "W7/dJSkc",
    "CIaT",
    "WRBdT8oN",
    "a8kADq",
    "WRTOtG",
    "WRpdTI8",
    "W7HhW4K",
    "W5LmlG",
    "zwqY",
    "z2H0",
    "aMldTG",
    "d8kMsq",
    "W4j4jq",
    "zsXM",
    "EmkxDa",
    "uSkjW7K",
    "q058",
    "W5OruW",
    "yNrJ",
    "yYbS",
    "WRS7W7u",
    "W7H5iG",
    "zt0I",
    "ymoWW4u",
    "WRZcLCkn",
    "WRXVfG",
    "WR1OW4O",
    "ignZ",
    "ASklWOi",
    "yL5H",
    "CM9I",
    "W6lcVmkC",
    "lw1H",
    "WPqxza",
    "psi1",
    "W6aJha",
    "WQiQAq",
    "Bxv4",
    "xSonW4m",
    "W71YhG",
    "q2z3",
    "z8omWPq",
    "zwXP",
    "fmkjEa",
    "CCo+WPe",
    "WOFdPmko",
    "WPxdS8o1",
    "qLDb",
    "Aw1L",
    "W7BcTSkk",
    "W6P/aG",
    "w8kIpa",
    "W6ZdM8kt",
    "WQf+ra",
    "pxa9",
    "DMub",
    "WORdNJ0",
    "oNjJ",
    "xKhdIG",
    "uSobW4S",
    "WPRcVCkE",
    "gSkxWQu",
    "W5FcOCkz",
    "B3jJ",
    "kgLU",
    "W6nzWQO",
    "qe3dHq",
    "DCkUWRe",
    "W4VcQ8kw",
    "WOH1WR0",
    "W4hdVmoi",
    "egFdRq",
    "W7BdSZq",
    "qmo2iW",
    "W5DlWOW",
    "WRhcV8oV",
    "Ftq+",
    "DIbS",
    "x3n0",
    "WQOjyG",
    "ALjx",
    "WQpcR8o8",
    "wuvY",
    "wmkEia",
    "WQ96mq",
    "F8kWWQa",
    "FYGP",
    "sLPS",
    "AgvP",
    "B0nG",
    "WONdLvq",
    "yw5P",
    "whHI",
    "W7FcR8kl",
    "W7VdMSk0",
    "o8k4ha",
    "wmo+fq",
    "CNi6",
    "uLP6",
    "l8ouia",
    "W5tdHSkH",
    "zuDV",
    "W7DYiG",
    "W5BdV8op",
    "W7uukG",
    "qNDy",
    "WQ9dWRy",
    "AxHF",
    "B3CT",
    "CMv2",
    "W6SCba",
    "W57dOMO",
    "x2HP",
    "mwzH",
    "WONdTCoU",
    "WQbVvW",
    "W5vMja",
    "WOb9W58",
    "rCkQlW",
    "WPlcT8oK",
    "Bfbx",
    "iCottq",
    "lwm6",
    "C2XH",
    "uLvg",
    "oMnV",
    "mmoixG",
    "WR7dRcK",
    "W7BdNmk5",
    "lcaW",
    "ywfJ",
    "gs/dGG",
    "h3VdNq",
    "zCkRW4C",
    "CMf0",
    "WORcVSk0",
    "WOJcSmkm",
    "mJaW",
    "lwLO",
    "s2LO",
    "EmouwG",
    "rvvu",
    "W57cPSoX",
    "lISP",
    "ptiS",
    "WOZcJ2G",
    "W7hcH1S",
    "WRhcTCk2",
    "ESk9WQC",
    "W6fgW68",
    "teDA",
    "DMPI",
    "wLnI",
    "zKrP",
    "AgLZ",
    "W7fYjG",
    "WORdSCoK",
    "W7PMW6K",
    "DZ1S",
    "ohldQq",
    "WQvMW7S",
    "W6RdKCkH",
    "W7feW6W",
    "WOv2iW",
    "zNjV",
    "B2GT",
    "WQSbAq",
    "WPVdKJy",
    "yxzT",
    "CIHP",
    "B8oYWOG",
    "Cg9Z",
    "WOP1W4i",
    "D2LK",
    "oJaG",
    "wxnO",
    "mCofWQe",
    "Axnb",
    "ww7dHa",
    "BLH4",
    "v8oTmG",
    "W7/dJCkg",
    "Chm9",
    "W4JcRvG",
    "WONdP8oN",
    "zuaW",
    "iIbJ",
    "CMDL",
    "BvyZ",
    "W7hdRsC",
    "iSk1WRK",
    "W51cWPO",
    "W6ZdRSkH",
    "eCkhW4C",
    "W6FdNSkR",
    "DhjP",
    "hx3dVq",
    "WOldM3y",
    "WRdcGmkG",
    "yNHj",
    "Affv",
    "W6jUWPe",
    "C2X6",
    "FSkgWPG",
    "W7lcKSko",
    "CNru",
    "kJeS",
    "EuPi",
    "mdPH",
    "C29S",
    "B2XV",
    "Fmodoa",
    "r8k4WOK",
    "AxHC",
    "iNZdJq",
    "WPHlnq",
    "sCkOjW",
    "DmkmW6K",
    "AwDP",
    "WRLQcq",
    "mJbW",
    "B2rL",
    "zLLO",
    "zwLN",
    "iIKO",
    "x2XH",
    "rsBdUG",
    "pwC9",
    "W4OynW",
    "WRqIBq",
    "kgJdUq",
    "WQmZvq",
    "WOOAFq",
    "Dw9n",
    "bcJcHq",
    "C2vS",
    "WPtcUmoJ",
    "vhrq",
    "Aw5R",
    "xCk/oW",
    "WPfByq",
    "WPn8W70",
    "WRxcG8k3",
    "Ewr5",
    "WPq6rW",
    "z2XL",
    "WORcVmk3",
    "W6JdQ8k0",
    "WO4BW6S",
    "CmkCWRe",
    "W5ZcQSkB",
    "W5tcOuG",
    "swnN",
    "W7JdLSk2",
    "ECoLxq",
    "WR4reG",
    "DJOW",
    "WRpcSwy",
    "WPtdO24",
    "amkqsW",
    "B3jP",
    "hmkdWQS",
    "WOhdSCoN",
    "W5/cVSkF",
    "DMiY",
    "W43dO8kc",
    "BM9Y",
    "WQ4nWR8",
    "a1LQ",
    "W7/dUay",
    "W69fW5m",
    "W6FdI8kX",
    "W5OQsa",
    "lwfJ",
    "W5HGdq",
    "WQhcT3i",
    "vhzn",
    "mhZdOG",
    "ida6",
    "Aw5W",
    "WRdcG8oN",
    "bmknya",
    "WRiOW4K",
    "wwHZ",
    "W7ldRmkW",
    "yci6",
    "mZyW",
    "WQFcJCk2",
    "A0Li",
    "ACoEoW",
    "tmoqmq",
    "WRFdQmot",
    "ywXF",
    "Dxy0",
    "zM9Y",
    "W4RdO8onW4FdGSkvW7FcL8oKWQid",
    "W57cUCoG",
    "W4qTnq",
    "W6ZcS8oj",
    "WPhcOmkL",
    "ymkJhq",
    "n8oxqa",
    "WOi6W7y",
    "g8knrW",
    "D2vI",
    "WQj5lG",
    "W71YdG",
    "W4LpWPG",
    "tKfn",
    "AxCP",
    "yMeO",
    "rKPM",
    "WReEyq",
    "WRfSmW",
    "W7NdVmkx",
    "kd8b",
    "uMvK",
    "zv9V",
    "DmoYea",
    "WOJcPCkB",
    "WOasAW",
    "q8k/gW",
    "WPJdTgS",
    "lMnV",
    "Agq0",
    "aCkona",
    "EJmR",
    "zw1W",
    "Axjt",
    "W6ddLSkT",
    "C2v0",
    "Efbl",
    "W4nobq",
    "bZNdVq",
    "W4lcP04",
    "WOm/xG",
    "isqw",
    "mJy0",
    "wmo3WOW",
    "W6ORWR8",
    "WOpcRLa",
    "CtddHG",
    "DmkLWOG",
    "W7ldRSkN",
    "oMzV",
    "vYFcJq",
    "r1HM",
    "ptu6",
    "rSkfWPC",
    "zYb4",
    "a8khzG",
    "xrNdNa",
    "W7RcOwS",
    "p8oVtq",
    "W61Jja",
    "B8o5WPa",
    "CmkgWRe",
    "y2XL",
    "DunM",
    "W4VdP8oY",
    "W5NdRcO",
    "W6RcOwS",
    "z8oXWRa",
    "W6Xecq",
    "B1L+",
    "CwjY",
    "W7m0rW",
    "WQRcKCod",
    "W6tdVmoX",
    "zMzT",
    "w0hdPW",
    "ExLY",
    "mZb0rLngrMe",
    "zxnZ",
    "WOZcKCkA",
    "y0zk",
    "W6OiBW",
    "W7ZcUCkB",
    "W61+nq",
    "iCo8W74",
    "b8k2W7S",
    "W5lcSSki",
    "yxbW",
    "zSoPW68",
    "z8koWRq",
    "qCkfW70",
    "tgLN",
    "W6iWWRS",
    "WRZcPmkT",
    "y2Tw",
    "W4JcKNa",
    "lxzJ",
    "W4RdSSo+",
    "Dg90",
    "W4pdUCom",
    "lwXV",
    "C3rY",
    "WO4uyW",
    "WPFdGCoc",
    "igXP",
    "W7VdI8km",
    "cNxdKq",
    "zgf0",
    "DmkeWRe",
    "d8o3iq",
    "CMXH",
    "W6tdNSk0",
    "WO0oqW",
    "t1bl",
    "AfzP",
    "A2f2",
    "dqNdKG",
    "W6CeBG",
    "W6RdUmkk",
    "WQ3cLCki",
    "WQ85BG",
    "C2f2",
    "iMnY",
    "WPe0yG",
    "ivVdQa",
    "WONcVmk+",
    "Dw1U",
    "fCkQxW",
    "zers",
    "zvH6",
    "fMtdQW",
    "mtq1ndC2q3bjDMHI",
    "WR3dOJK",
    "mcaI",
    "WRW1Cq",
    "bSknW6q",
    "tu1w",
    "vhrf",
    "z0jL",
    "hmkcWRi",
    "W6ddVmk0",
    "yYaY",
    "WRPOW7S",
    "FCkCWR0",
    "rhnd",
    "W6ZcQSkg",
    "W7CIW6K",
    "yv1H",
    "W4SdjG",
    "mJuXnti0yurxC3jp",
    "zMfS",
    "WRvnW7u",
    "h8kNyG",
    "WR7cMCoV",
    "y2LY",
    "q2vP",
    "WPpdNdi",
    "Aw9d",
    "tZtdIG",
    "oSkWha",
    "u3rH",
    "xCoRla",
    "nZrK",
    "ufnZ",
    "AsaI",
    "WQJdMSo1",
    "C2nV",
    "W77cHSod",
    "q2zP",
    "WRpcRcu",
    "lZiP",
    "z2v0",
    "CMfT",
    "WOOYbW",
    "WR9Jwa",
    "W5lcVSkB",
    "bSkdEW",
    "DhrM",
    "ESozoG",
    "EKLB",
    "W7ddV8k8",
    "W7OSFa",
    "BIb0",
    "rvLb",
    "mtiI",
    "qxvK",
    "W4hcUK8",
    "Bg9Y",
    "DgvZ",
    "WR7dOCoB",
    "iYv4",
    "q0XA",
    "zxjZ",
    "WO7dItS",
    "v1LJ",
    "WQbnW6C",
    "WRnRFG",
    "WODmWOm",
    "wg9H",
    "W4m0iq",
    "l8kcAa",
    "nJrR",
    "B29W",
    "z2jH",
    "FZiQ",
    "E30U",
    "WOfGW60",
    "ysaT",
    "WQ5dWOC",
    "z2uU",
    "AwGP",
    "Chn0",
    "Dd0I",
    "nteY",
    "vLHi",
    "W67dHmoo",
    "D8kKWQO",
    "Bwf0",
    "zdnH",
    "c8kuWOi",
    "twldRG",
    "EgXU",
    "gmkWWR4",
    "y0Te",
    "dmkqWRi",
    "fSkfCq",
    "tLddTa",
    "wmkxWOK",
    "f8oCWQ0",
    "W6lcSCkh",
    "yNDH",
    "W7fYFa",
    "WRrSW7W",
    "WRmKCwNdKa/dONHCqmoHq3i",
    "W5C6jW",
    "jHW4",
    "W6PijW",
    "suP4",
    "veTh",
    "AhbT",
    "msXM",
    "i8oEW6W",
    "WQrdWPK",
    "zezP",
    "W7DWkG",
    "EsaT",
    "shVdSa",
    "W4BdQSkp",
    "C2PU",
    "W53dUhq",
    "WPTIW70",
    "DgvY",
    "yxvK",
    "uLL6",
    "lmkNdW",
    "CMv0",
    "xmkmWRu",
    "WQ1bWO4",
    "W5FcRva",
    "bCkzWPa",
    "WPDyWPe",
    "Awj4",
    "mJPM",
    "v3vM",
    "rCkbWPG",
    "nJqG",
    "zYm/",
    "WOOlAa",
    "WRVcKmom",
    "C2nH",
    "zSkhaq",
    "tNrf",
    "CMfM",
    "sSo6BW",
    "v8oRmW",
    "W4S+pW",
    "iNJdNG",
    "r2Tf",
    "WQ0oW4W",
    "WOK9va",
    "C2fN",
    "s11+",
    "nsWG",
    "W7pdJCk2",
    "yMLU",
    "c8kiW5a",
    "smo/gW",
    "idaG",
    "lM1W",
    "lwzM",
    "ic15",
    "ywrK",
    "Cvvn",
    "eh/dIa",
    "wSkllG",
    "W6pdQ8kg",
    "cGK8",
    "W51MCq",
    "WOZdR8oC",
    "W5XbWO0",
    "iNnJ",
    "ELr5",
    "Bezr",
    "C2nY",
    "pCojtW",
    "v0yW",
    "Awj3",
    "WP4vBG",
    "ANbN",
    "W5rlW58",
    "WPr7W7y",
    "oYuf",
    "zw9i",
    "WPddVa0",
    "zwqX",
    "DNP7",
    "C8oYW5q",
    "WRvQda",
    "BgvK",
    "WOFdPmkk",
    "WRv+ua",
    "rw3dSa",
    "d8kYlq",
    "WQZdRSkY",
    "arpdRG",
    "CMCV",
    "dCkSwq",
    "W7WLvq",
    "CNjH",
    "oMjJ",
    "W6bIjq",
    "mSkVW7u",
    "BwvZ",
  ];
  k = function () {
    return mF;
  };
  return k();
}
aP();
const aQ = require("fluent-ffmpeg");
const aR = require("fs-extra");
const { exec: aS } = require("child_process");
const aT = require("node-webpmux");
const { join: aU, basename: aV } = require("path");
const aW = require("./config");
const { iChecker: aY } = require("./test/test");
const aZ = aY();
const b0 = require("google-tts-api");
const b1 = require("sharp");
b1.cache(false);
b1.concurrency(1);
const { TEMP_DIR: b2 } = require("./constant");
const b3 =
  aZ == "aWxvdmV5b3Vzb29vb29vbWF0Y2hidXRpZG9udGtub3d3aHlpbGlrZWxvdmV3YW50dQ==";
const b5 = (y) => {
  if (y && !y.includes("mention")) {
    aR.unlink(y, () => {});
  }
};
function dB(x, y) {
  return q(y - 0x24a, x);
}
function q(a, b) {
  const c = k();
  q = function (d, e) {
    d = d - 415;
    let f = c[d];
    if (q.hkQnYk === undefined) {
      var g = function (m) {
        let o = "";
        let p = "";
        let r = o + g;
        let s = 0;
        let t;
        let u;
        for (
          let v = 0;
          (u = m.charAt(v++));
          ~u && ((t = s % 4 ? t * 64 + u : u), s++ % 4)
            ? (o +=
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
        for (let w = o.length; k < w; k++) {
          p += "%" + ("00" + o.charCodeAt(k).toString(16)).slice(-2);
        }
        return decodeURIComponent(p);
      };
      const l = function (m, n) {
        let o = [];
        let p = 0;
        let r;
        let t = "";
        m = g(m);
        let u;
        for (u = 0; u < 256; u++) {
          o[u] = u;
        }
        for (u = 0; u < 256; u++) {
          p = (p + o[u] + n.charCodeAt(u % n.length)) % 256;
          r = o[u];
          o[u] = o[p];
          o[p] = r;
        }
        u = 0;
        p = 0;
        for (let v = 0; v < m.length; v++) {
          u = (u + 1) % 256;
          p = (p + o[u]) % 256;
          r = o[u];
          o[u] = o[p];
          o[p] = r;
          t += String.fromCharCode(m.charCodeAt(v) ^ o[(o[u] + o[p]) % 256]);
        }
        return t;
      };
      q.IcaaGS = l;
      a = arguments;
      q.hkQnYk = true;
    }
    const h = c[0];
    const i = d + h;
    const j = a[i];
    if (!j) {
      if (q.cGCZGa === undefined) {
        const m = function (n) {
          this.nhGUjQ = n;
          this.ZCiiPS = [1, 0, 0];
          this.fcawBH = function () {
            return "newState";
          };
          this.TZYstj = "\\w+ *\\(\\) *{\\w+ *";
          this.fOLKGU = "['|\"].+['|\"];? *}";
        };
        m.prototype.AXBiyb = function () {
          const n = new RegExp(this.TZYstj + this.fOLKGU);
          const o = n.test(this.fcawBH.toString())
            ? --this.ZCiiPS[1]
            : --this.ZCiiPS[0];
          return this.VORbMT(o);
        };
        m.prototype.VORbMT = function (n) {
          if (!Boolean(~n)) {
            return n;
          }
          return this.pyMAgv(this.nhGUjQ);
        };
        m.prototype.pyMAgv = function (n) {
          let o = 0;
          for (let p = this.ZCiiPS.length; o < p; o++) {
            this.ZCiiPS.push(Math.round(Math.random()));
            p = this.ZCiiPS.length;
          }
          return n(this.ZCiiPS[0]);
        };
        new m(q).AXBiyb();
        q.cGCZGa = true;
      }
      f = q.IcaaGS(f, e);
      a[i] = f;
    } else {
      f = j;
    }
    return f;
  };
  return q(a, b);
}
function du(x, y) {
  return u(y - 0x272, x);
}
if (b3) {
  const b6 = async function (y, z, A, B, C = ["🥰"], D = {}) {
    const [F, G] =
      "false" == aW[A].env.STICKER_PACKNAME
        ? []
        : aW[A].env.STICKER_PACKNAME.split(",");
    B = B || G;
    if (!Array.isArray(C)) {
      C = [C];
    }
    if (z) {
      const [N, O, P] = z.split(",");
      z = N;
      B = O;
      C = P;
    } else {
      z = F;
    }
    let H = new aT.Image();
    const I = {
      "sticker-pack-id":
        "a855bd1fa49c0a05940f8ec2f47dca0b64bbd801e3b2d29e1f654574d4b294c5",
      "sticker-pack-name": z,
      "sticker-pack-publisher": B,
      emojis: C,
      ...D,
    };
    let K = Buffer.from([
      73, 73, 42, 0, 8, 0, 0, 0, 1, 0, 65, 87, 7, 0, 0, 0, 0, 0, 22, 0, 0, 0,
    ]);
    let L = Buffer.from(JSON.stringify(I), "utf8");
    let M = Buffer.concat([K, L]);
    M.writeUIntLE(L.length, 14, 4);
    await H.load(y);
    H.exif = M;
    return await H.save(null);
  };
  exports.addExif = b6;
  const b7 = {
    nonanimated: [
      "-y",
      "-vcodec libwebp",
      "-vf",
      "scale=2006:2006:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=2006:2006:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1",
    ],
    newnonanimated: [
      "-vcodec",
      "libwebp",
      "-vf",
      "crop=w='min(min(iw,ih),512)':h='min(min(iw,ih),512)',scale=2006:2006,setsar=1",
    ],
    animated2: [
      "-t",
      "15",
      "-vf",
      "scale=512:512:force_original_aspect_ratio=decrease,pad=512:512:(ow-iw)/2:(oh-ih)/2:color=white@0,fps=15",
      "-c:v",
      "libwebp",
      "-lossless",
      "0",
      "-loop",
      "1",
      "-preset",
      "default",
      "-an",
      "-pix_fmt",
      "yuva420p",
    ],
    animated1: [
      "-y",
      "-vf",
      "scale=512:512:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=512:512:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1,fps=20",
      "-lossless 0",
      "-preset default",
      "-loop 0",
      "-an",
      "-vsync 0",
      "-s 512:512",
    ],
    newanimated1: [
      "-vcodec",
      "libwebp",
      "-vf",
      "crop=w='min(min(iw,ih),512)':h='min(min(iw,ih),512)',scale=512:512,setsar=1",
      "-loop",
      "0",
      "-lossless 1",
      "-preset",
      "default",
      "-an",
      "-vsync",
      "0",
      "-s",
      "512:512",
    ],
    newanimated2: [
      "-vcodec",
      "libwebp",
      "-vf",
      "crop=w='min(min(iw,ih),512)':h='min(min(iw,ih),512)',scale=512:512,setsar=1,fps=20",
      "-loop",
      "0",
      "-lossless 0",
      "-preset",
      "default",
      "-an",
      "-vsync",
      "0",
      "-s",
      "512:512",
    ],
    left: ["-vf", "transpose=2"],
    right: ["-vf", "transpose=1"],
    flip: ["-vf", "transpose=2,transpose=2"],
    videor: ["-y", "-vf", "reverse", "-af", "areverse"],
    audior: ["-y", "-af", "areverse"],
    compress: ["-vcodec", "libx265", "-crf", "28"],
    mp3: ["-vn", "-acodec", "libmp3lame", "-q:a", "2"],
    wamp4: ["-c:v", "copy", "-c:a", "aac", "-movflags", "+faststart"],
    opus: [
      "-vn",
      "-map_metadata",
      "-1",
      "-acodec",
      "libopus",
      "-ac",
      "1",
      "-ar",
      "48000",
      "-b:a",
      "64k",
      "-f",
      "ogg",
    ],
    m4a: ["-vn", "-c:a", "copy"],
    mp3_high: ["-vn", "-acodec", "libmp3lame", "-b:a", "256k"],
    tts: ["-vn", "-acodec", "libopus"],
    photo: [],
    lowmp3: [
      "-y",
      "-af",
      "asetrate=44100*1.3",
      "-c:a",
      "libmp3lame",
      "-q:a",
      "2",
    ],
    avec: [
      "-y",
      "-filter_complex",
      "[0:a]avectorscope=s=720x1280:rf=5:gf=25:bf=5:draw=line,format=yuv420p[v]",
      "-map",
      "[v]",
      "-map 0:a",
    ],
    pitch: [
      "-y",
      "-af",
      "asetrate=44100*0.9",
      "-c:a",
      "libmp3lame",
      "-q:a",
      "2",
    ],
    bass: ["-y", "-af", "bass=g=10"],
    treble: ["-y", "-af", "treble=g=10"],
    histo: [
      "-filter_complex",
      "[0:a]ahistogram=s=hd480:slide=scroll:scale=log,format=yuv420p[v]",
      "-map",
      "[v]",
      "-map",
      "0:a",
      "-b:a",
      "360k",
    ],
    vector: [
      "-filter_complex",
      "[0:a]avectorscope=s=512x512:zoom=1.5:rc=0:gc=200:bc=0:rf=0:gf=40:bf=0,format=yuv420p[v]",
      "-map",
      "[v]",
      "-map",
      "0:a",
      "-b:v",
      "700k",
      "-b:a",
      "360k",
    ],
    crop: ["-y", "-vf", "crop=cw:ch:w:h"],
  };
  exports.getFfmpegBuffer = async (x, y, z) => {
    const A = {
      nXxdt: function (G, H) {
        return G(H);
      },
      FIAgA: function (G, H) {
        return G + H;
      },
      PSsIy: function (G, H) {
        return G + H;
      },
      hoabl: "return (function() ",
      VQpIt: '{}.constructor("return this")( )',
      twdPC: function (G) {
        return G();
      },
      KLXwf: function (G, H) {
        return G(H);
      },
      RedRl: function (G, H) {
        return G(H);
      },
      OVUIt: function (G, H) {
        return G !== H;
      },
      KYwGV: "RkseO",
      JUswI: "DWQwK",
      BWmfo: function (G, H) {
        return G(H);
      },
      BGwbH: function (G, H) {
        return G(H);
      },
      yYRCM: function (G, H) {
        return G === H;
      },
      WJoKr: "BYqpr",
      yJHSa: "error",
      tJSvQ: "end",
      xpFxT: "false",
      OOJoo: function (G, H) {
        return G != H;
      },
      TtPLz: function (G, H, I) {
        return G(H, I);
      },
    };
    let B = A.xpFxT;
    let C = A.xpFxT;
    if (/bass,/.test(z)) {
      B = z.split(",")[1];
      z = z.split(",")[0];
    }
    if (/treble,/.test(z)) {
      C = z.split(",")[1];
      z = z.split(",")[0];
    }
    let D = [...b7[z]];
    if (A.OOJoo(A.xpFxT, B)) {
      D[2] = "bass=g=" + B;
    }
    if (A.OOJoo(A.xpFxT, C)) {
      D[2] = "treble=g=" + C;
    }
    let E = A.RedRl(aQ, x);
    const F = A.TtPLz(aU, b2, y);
    return await new Promise(function (G, H) {
      const I = {
        gPmeS: function (J, K) {
          return A.nXxdt(J, K);
        },
        tcHkc: function (J, K) {
          return A.KLXwf(J, K);
        },
        zzZBj: function (J, K) {
          return A.RedRl(J, K);
        },
        vQaNi: function (J, K) {
          return A.OVUIt(J, K);
        },
        DhwCo: A.KYwGV,
        XBWsv: A.JUswI,
        aXTFP: function (J, K) {
          return A.BWmfo(J, K);
        },
        IyueV: function (J, K) {
          return A.BGwbH(J, K);
        },
      };
      if (A.yYRCM(A.WJoKr, A.WJoKr)) {
        E.outputOptions(D)
          .save(F)
          .on(A.yJHSa, (J, K, L) => {
            A.nXxdt(b5, x);
            A.KLXwf(b5, F);
            A.KLXwf(
              H,
              new Error("FFmpeg error: " + J.message + ". Stderr: " + L),
            );
          })
          .on(A.tJSvQ, async () => {
            if (A.OVUIt(I.DhwCo, I.XBWsv)) {
              A.BWmfo(b5, x);
              const J = aR.readFileSync(F);
              A.KLXwf(b5, F);
              A.BGwbH(G, J);
            } else {
              A.RedRl(z, A);
            }
          });
      } else {
        const K = JcXvSa.nXxdt(
          z,
          JcXvSa.FIAgA(JcXvSa.PSsIy(JcXvSa.hoabl, JcXvSa.VQpIt), ");"),
        );
        A = JcXvSa.twdPC(K);
      }
    });
  };
  const b9 = (x) =>
    new Promise((y) => {
      aQ.ffprobe(x, (A, B) => {
        y(B);
      });
    });
  exports.cropsticker = (x, y, z = 1, A, B = "🥰") => {
    A = A ?? "0";
    let D = b7.newnonanimated;
    if (2 == z) {
      D = b7.newanimated1;
    }
    if (3 == z) {
      D = b7.newanimated2;
    }
    const E = aU(b2, x + "c.webp");
    return new Promise(function (F, G) {
      aQ(y)
        .outputOptions(D)
        .save(E)
        .on("error", (J) => G(new Error(J.message)))
        .on("end", async () => {
          const J = await b6(E, undefined, A, undefined, [B])["catch"](
            (K) => new Error(K.message),
          );
          b5(y);
          b5(E);
          F(J);
        });
    });
  };
  exports.sticker = (x, y, z = 1, A, B = "🥰") => {
    A = A ?? "0";
    let D = b7.nonanimated;
    if (2 == z) {
      D = b7.animated2;
    }
    if (3 == z) {
      D = b7.animated1;
    }
    const E = aU(b2, x + ".webp");
    return new Promise((F, G) => {
      aQ(y)
        .addOutputOptions(D)
        .save(E)
        .on("error", (I) => G(I.message))
        .toFormat("webp")
        .on("end", async () => {
          const I = await b6(aR.readFileSync(E), undefined, A, undefined, [B])[
            "catch"
          ]((J) => G(J.message));
          b5(y);
          b5(E);
          F(I);
        });
    });
  };
  exports.audioCut = (x, y, z, A = "cut") => {
    const C = aU(b2, A + ".mp3");
    return new Promise(function (D, E) {
      aQ(x)
        .setStartTime(y)
        .setDuration(z)
        .save(C)
        .on("error", (G) => E(new Error(G.message)))
        .on("end", () => {
          const G = aR.readFileSync(C);
          D(G);
          b5(x);
          b5(C);
        });
    });
  };
  exports.avm = (x) => {
    x = x.reverse();
    const z = aU(b2, "audvid.mp4");
    const A = aU(b2, "avm");
    return new Promise(function (B, C) {
      let E = aQ();
      x.forEach((F) => E.input(aU(A, F)));
      E.outputOptions([
        "-map",
        "0:v",
        "-map",
        "1:a",
        "-c:v",
        "copy",
        "-shortest",
      ]);
      E.save(z);
      E.on("error", (F) => C(new Error(F.message)));
      E.on("end", () => {
        aR.emptyDirSync(A);
        B(aR.readFileSync(z));
        b5(z);
      });
    });
  };
  exports.videoHeightWidth = async (y) => {
    const { streams: A } = await b9(y);
    const B = {
      width: A[0].width,
      height: A[0].height,
    };
    return B;
  };
  exports.videoTrim = (x, y, z) => {
    const B = aU(b2, "videotrim.mp4");
    return new Promise(function (C, D) {
      aQ(x)
        .setStartTime(y.trim())
        .setDuration(z.trim())
        .withVideoCodec("copy")
        .withAudioCodec("copy")
        .on("error", (F) => D(new Error(F.message)))
        .save(B)
        .on("end", async () => {
          let F = aR.readFileSync(B);
          b5(B);
          b5(x);
          C(F);
        });
    });
  };
  const ba = (x) =>
    new Promise((y, z) => {
      aS(x, (B, C, D) => {
        if (B) {
          z(new Error(D || B.message));
        } else {
          y(C);
        }
      });
    });
  const bb = async (x) => {
    try {
      return (
        (
          await ba(
            'ffprobe -v error -select_streams a -show_entries stream=index -of csv=p=0 "' +
              x +
              '"',
          )
        ).trim().length > 0
      );
    } catch {
      return false;
    }
  };
  const bc = async (x) => {
    const z = await ba(
      'ffprobe -v error -select_streams v:0 -show_entries stream=width,height,r_frame_rate -of csv=p=0:s=x "' +
        x +
        '"',
    );
    const [A, B, C] = z.trim().split("x");
    const [D, E] = C.split("/").map((I) => parseInt(I, 10));
    const F = E ? D / E : D;
    const G = parseInt(A, 10);
    const H = parseInt(B, 10);
    return {
      width: G - (G % 2),
      height: H - (H % 2),
      fps: F,
    };
  };
  exports.mergeVideo = async () => {
    const y = aU(b2, "video.txt");
    const z = aU(b2, "merge.mp4");
    const A = aU(b2, "merge");
    const B = aR
      .readdirSync(A)
      .sort((H, I) => parseInt(H, 10) - parseInt(I, 10));
    if (0 === B.length) {
      throw new Error("No videos to merge");
    }
    const C = [];
    for (const H of B) C.push(await bc(aU(A, H)));
    const D = C.reduce((I, J) =>
      J.width * J.height > I.width * I.height ? J : I,
    );
    const E = D.width;
    const F = D.height;
    const G =
      "scale=" +
      E +
      ":" +
      F +
      ":force_original_aspect_ratio=decrease,pad=" +
      E +
      ":" +
      F +
      ":(ow-iw)/2:(oh-ih)/2,setsar=1,fps=" +
      Math.round(Math.max(...C.map((I) => I.fps)));
    try {
      const I = [];
      for (let J = 0; J < B.length; J++) {
        const K = aU(A, B[J]);
        const L = aU(A, "norm_" + J + ".mp4");
        const M = (await bb(K))
          ? 'ffmpeg -y -i "' +
            K +
            '" -vf "' +
            G +
            '" -map 0:v:0 -map 0:a:0 -c:v libx264 -preset slow -crf 18 -pix_fmt yuv420p -c:a aac -ar 48000 -ac 2 -b:a 192k "' +
            L +
            '"'
          : 'ffmpeg -y -i "' +
            K +
            '" -f lavfi -i anullsrc=channel_layout=stereo:sample_rate=48000 -vf "' +
            G +
            '" -map 0:v:0 -map 1:a:0 -c:v libx264 -preset slow -crf 18 -pix_fmt yuv420p -c:a aac -ar 48000 -ac 2 -b:a 192k -shortest "' +
            L +
            '"';
        await ba(M);
        I.push(L);
      }
      aR.writeFileSync(y, I.map((N) => "file '" + N + "'").join("\n") + "\n");
      await ba(
        'ffmpeg -y -f concat -safe 0 -i "' + y + '" -c copy "' + z + '"',
      );
      return aR.readFileSync(z);
    } finally {
      aR.emptyDirSync(A);
      if (aR.existsSync(z)) {
        aR.unlinkSync(z);
      }
      if (aR.existsSync(y)) {
        aR.unlinkSync(y);
      }
    }
  };
  exports.blackVideo = (x) => {
    const z = aU(b2, "toblack.aac");
    const A = aU(b2, "black.mp4");
    return new Promise(function (B, C) {
      aS('ffmpeg -y -i "' + x + '" "' + z + '"', () => {
        aS(
          'ffmpeg -y -loop 1 -framerate 1 -i "' +
            aU(__dirname, "../media/black.jpg") +
            '" -i "' +
            z +
            '" -map 0 -map 1:a -c:v libx264 -preset ultrafast -profile:v baseline -tune stillimage -vf "scale=\'min(360,iw)\':-2,format=yuv420p" -c:a copy -shortest "' +
            A +
            '"',
          (G) => {
            if (G) {
              C(new Error("black failed"));
            } else {
              const H = aR.readFileSync(A);
              b5(x);
              b5(A);
              b5(z);
              B(H);
            }
          },
        );
      });
    });
  };
  exports.cropVideo = (x, y, z, A, B) => {
    const D = aU(b2, "croped.mp4");
    return new Promise(function (E, F) {
      aS(
        'ffmpeg -y -i "' +
          x +
          '" -vf "crop=' +
          y +
          ":" +
          z +
          ":" +
          A +
          ":" +
          B +
          '" -c:v libx264 -crf 1 -c:a copy "' +
          D +
          '"',
        (G) => {
          if (G) {
            F(new Error("crop failed"));
          } else {
            const J = aR.readFileSync(D);
            b5(D);
            b5(x);
            E(J);
          }
        },
      );
    });
  };
}
exports.gifToVideo = async (x) => {
  const z = aU(b2, aV(x) + ".mp4");
  return new Promise(function (A, B) {
    aQ(x)
      .save(z)
      .outputOptions([
        "-pix_fmt yuv420p",
        "-c:v libx264",
        "-movflags +faststart",
        "-filter:v crop='floor(in_w/2)*2:floor(in_h/2)*2'",
      ])
      .on("error", (C) => B(new Error(C.message)))
      .on("end", function () {
        const E = aR.readFileSync(z);
        A(E);
        b5(x);
        b5(z);
      });
  });
};
exports.videoToGif = async (x) => {
  const z = aU(b2, aV(x) + ".gif");
  return new Promise(function (A, B) {
    aQ(x)
      .save(z)
      .on("error", (D) => B(new Error(D.message)))
      .on("end", function () {
        const E = aR.readFileSync(z);
        A(E);
        b5(x);
        b5(z);
      });
  });
};
exports.circleSticker = async (y, z, A) => {
  A = A ?? "0";
  const C = z ? await exports.videoToGif(y) : aR.readFileSync(y);
  const D = {
    quality: 0x64,
    lossless: false,
  };
  b5(y);
  return await exports.addExif(
    await b1(C)
      .resize(512, 512, {
        fit: "cover",
      })
      .composite([
        {
          input: Buffer.from(
            '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">\n\t<circle cx="256" cy="256" r="254" fill="rgba(0, 0, 0, 0)"/>\n\t\t\t</svg>',
          ),
          blend: "dest-in",
        },
        {
          input: Buffer.from(
            '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">\n\t\t\t  <circle cx="256" cy="256" r="254" fill="rgba(255, 255, 255, 0)" stroke="rgba(110, 110, 110, 1)" stroke-width="2" />\n\t\t\t</svg>',
          ),
          blend: "over",
        },
      ])
      .webp(D)
      .toBuffer(),
    undefined,
    A,
    undefined,
    [],
  );
};
exports.SpeachToText = async (y, z) => {
  const B = aU(b2, "tts.mp3");
  const C = aU(b2, "tts.opus");
  try {
    const D = {
      lang: y,
      slow: false,
      host: "https://translate.google.com",
    };
    const E = await b0.getAllAudioBase64(z, D);
    aR.writeFileSync(B, Buffer.from(E.map((F) => F.base64).join(), "base64"), {
      encoding: "base64",
    });
    return new Promise(function (F) {
      aQ(B)
        .audioCodec("libopus")
        .save(C)
        .on("end", async () => {
          b5(B);
          F(aR.readFileSync(C));
          b5(C);
        });
    });
  } catch (F) {
    throw new Error(F.message);
  }
};
