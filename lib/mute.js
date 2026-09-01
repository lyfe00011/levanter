(function (x, y) {
  const z = x();
  while (true) {
    try {
      const A =
        -parseInt(v(485, "mXMP")) / 1 +
        (parseInt(w(905, -0x3)) / 2) * (parseInt(v(538, "4IpH")) / 3) +
        -parseInt(w(569, 0x5f4)) / 4 +
        -parseInt(v(559, "Ds@3")) / 5 +
        -parseInt(w(563, -0x19b)) / 6 +
        (-parseInt(w(846, 0x664)) / 7) * (parseInt(v(785, "mXMP")) / 8) +
        parseInt(w(700, 0x396)) / 9;
      if (A === y) {
        break;
      } else {
        z.push(z.shift());
      }
    } catch (B) {
      z.push(z.shift());
    }
  }
})(q, 470994);
const bz = (function () {
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
function di(x, y) {
  return v(y + 0x173, x);
}
const bA = bz(this, function () {
  return bA
    .toString()
    .search("(((.+)+)+)+$")
    .toString()
    .constructor(bA)
    .search("(((.+)+)+)+$");
});
bA();
const bB = (function () {
  let y = true;
  return function (z, A) {
    const D = y
      ? function () {
          if (A) {
            const G = A.apply(z, arguments);
            A = null;
            return G;
          }
        }
      : function () {};
    y = false;
    return D;
  };
})();
const bC = bB(this, function () {
  const y = function () {
    let C;
    try {
      C = Function('return (function() {}.constructor("return this")( ));')();
    } catch (D) {
      C = window;
    }
    return C;
  };
  const z = y();
  const A = (z.console = z.console || {});
  const B = ["log", "warn", "info", "error", "exception", "table", "trace"];
  for (let C = 0; C < B.length; C++) {
    const D = bB.constructor.prototype.bind(bB);
    const E = B[C];
    const F = A[E] || D;
    D.__proto__ = bB.bind(bB);
    D.toString = F.toString.bind(F);
    A[E] = D;
  }
});
function w(a, b) {
  const c = q();
  w = function (d, e) {
    d = d - 480;
    let f = c[d];
    if (w.OKbzLb === undefined) {
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
      w.lavWnt = g;
      a = arguments;
      w.OKbzLb = true;
    }
    const h = c[0];
    const i = d + h;
    const j = a[i];
    if (!j) {
      const k = function (l) {
        this.HyZQTU = l;
        this.gffgcv = [1, 0, 0];
        this.gbwOmu = function () {
          return "newState";
        };
        this.YAbotk = "\\w+ *\\(\\) *{\\w+ *";
        this.bAkvcP = "['|\"].+['|\"];? *}";
      };
      k.prototype.lYELbX = function () {
        const l = new RegExp(this.YAbotk + this.bAkvcP);
        const m = l.test(this.gbwOmu.toString())
          ? --this.gffgcv[1]
          : --this.gffgcv[0];
        return this.cskXCM(m);
      };
      k.prototype.cskXCM = function (l) {
        if (!Boolean(~l)) {
          return l;
        }
        return this.boStjo(this.HyZQTU);
      };
      k.prototype.boStjo = function (l) {
        let m = 0;
        for (let n = this.gffgcv.length; m < n; m++) {
          this.gffgcv.push(Math.round(Math.random()));
          n = this.gffgcv.length;
        }
        return l(this.gffgcv[0]);
      };
      new k(w).lYELbX();
      f = w.lavWnt(f);
      a[i] = f;
    } else {
      f = j;
    }
    return f;
  };
  return w(a, b);
}
function dp(x, y) {
  return v(y - 0x1fa, x);
}
bC();
const bD = {
  mute: {},
  unmute: {},
  schedule: {},
};
const bE = require("cron");
const bF = require("../config");
const bG = require("./utils");
const {
  getAllMute: bH,
  getScheduleMessage: bI,
  setScheduleMessage: bJ,
  setScheduleStatus: bK,
  delScheduleStatus: bL,
  getScheduleStatus: bM,
  delScheduleMessage: bN,
} = require("./db/mute");
exports.validateTime = (y, z) => {
  if (!y) {
    return y;
  }
  if (!y.length) {
    return y;
  }
  let C = [];
  C = y.includes(" ") ? y.split(/\s+/).slice(0, 5) : y.split("-");
  const D = [
    (5 * (z ?? 1)) % 60,
    ...["*", "*", "*", "*", "*"].map((E, F) =>
      C[F] ? ((E = C[F].trim()), /^[\d\*\/\-,]+$/.test(E) ? E : "*") : "*",
    ),
  ].join(" ");
  try {
    new bE.CronTime(D);
    return D;
  } catch (E) {
    return false;
  }
};
function dn(x, y) {
  return w(y - 0xf7, x);
}
const bP = (z, A, B, C, D, E) => {
  const F = {
    Vebec: "ing",
    SkzFy: function (J, K) {
      return J != K;
    },
    rrkhZ: "null",
  };
  F.yJLWC = function (J, K) {
    return J == K;
  };
  F.tyBkc = "mute";
  F.qOrav = "announcement";
  F.GrjWD = "not_announcement";
  F.GCUas = function (J, K) {
    return J === K;
  };
  F.CLGgT = "OGyUb";
  F.YOOIS = "lKIfw";
  F.MjEjF = function (J, K) {
    return J != K;
  };
  F.WYGho = function (J, K) {
    return J == K;
  };
  F.bEGQq = function (J, K) {
    return J == K;
  };
  F.ilOlq = "off";
  F.tGQwW = "unmute";
  F.bBGNw = "Asia/Kolkata";
  if (!bD[A][E]) {
    bD[A][E] = {};
  }
  if (F.bEGQq(F.ilOlq, B)) {
    return !!bD[A][E][z] && (bD[A][E][z].task.stop(), delete bD[A][E][z]);
  }
  if (
    !new bE.CronTime("3 " + C + " " + B + " * * *") ||
    (F.MjEjF(F.tyBkc, A) && F.MjEjF(F.tGQwW, A))
  ) {
    return;
  }
  const H = new bE.CronJob(
    "3 " + C + " " + B + " * * *",
    () => {
      const J = {
        XYrDT: "ing",
        DyFtf: function (K, L) {
          return K != L;
        },
        ybpIP: "null",
        KHIsY: function (K, L) {
          return F.yJLWC(K, L);
        },
        RTjPN: F.tyBkc,
        fBTXG: F.qOrav,
        ERNjZ: F.GrjWD,
      };
      if (F.GCUas(F.CLGgT, F.YOOIS)) {
        I.logger.info("[" + J + "] " + K.replace("e", "ing") + " " + L);
        const L = M && "null" != N ? O : undefined;
        const M = F.yJLWC(J.RTjPN, P) ? J.fBTXG : J.ERNjZ;
        const N = {
          chat: R,
          msg: L,
          action: M,
          session: S,
        };
        Q.levanter.emit(J.RTjPN, N);
      } else {
        bF.logger.info("[" + E + "] " + A.replace("e", "ing") + " " + z);
        const L = D && F.MjEjF("null", D) ? D : undefined;
        const M = F.WYGho(F.tyBkc, A) ? F.qOrav : F.GrjWD;
        const N = {
          chat: z,
          msg: L,
          action: M,
          session: E,
        };
        bG.levanter.emit(F.tyBkc, N);
      }
    },
    null,
    true,
    bF.TIMEZONE || process.env.TZ || F.bBGNw,
  );
  const I = {
    task: H,
  };
  if (bD[A][E][z]) {
    bD[A][E][z].task.stop();
    delete bD[A][E][z];
  }
  bD[A][E][z] = I;
  return true;
};
function q() {
  const fk = [
    "oCo/WP1WDudcS05GDWBdUW",
    "y3jV",
    "xmoWWPa",
    "BIb0",
    "BxnN",
    "F2ZcRa",
    "Aw5M",
    "cCkHWRa",
    "ECkWW6C",
    "WR3dK8kQ",
    "hSkqfa",
    "sqlcJa",
    "aCkmhW",
    "zxnZ",
    "qmoyFG",
    "DSoGCq",
    "WR08va",
    "DNHg",
    "vcxdLW",
    "nsVcMG",
    "WR5UWPy",
    "z3jV",
    "rvH6",
    "gSk5sW",
    "rhLg",
    "WRhcS8kW",
    "W55UWOu",
    "WQNcQ8kF",
    "a8oFiq",
    "WQaxqa",
    "WPtcG3i",
    "bCoqW6C",
    "W6xcOSo9",
    "zxHJ",
    "rgTK",
    "DapdIq",
    "ymkPWRy",
    "ksSK",
    "B8klW6i",
    "s0TU",
    "EwjW",
    "WRfPW7e",
    "W4ScWR4",
    "WQNcO8kq",
    "W5VcTau",
    "sMne",
    "WRtcUuW",
    "C3bS",
    "W7iIWQC",
    "WRKgW4C",
    "W6ureG",
    "zdNdKq",
    "WPKplq",
    "ASkGfq",
    "q0P0",
    "tmkOxG",
    "wmkxWO0",
    "zw5H",
    "W6j2WO8",
    "t8kRlW",
    "Bgvu",
    "ndjLtejlAgC",
    "x19W",
    "qCk7WQ0",
    "CgfY",
    "igHO",
    "jSkQWQC",
    "s8kkmq",
    "zexcIq",
    "fmoziG",
    "Dwn0",
    "ywXS",
    "W5XoWOu",
    "W4CmWRK",
    "WOTeWPq",
    "WRRdMmox",
    "kSkCWQG",
    "EwvL",
    "BgvU",
    "BNvS",
    "yMLU",
    "A2hcRa",
    "C29S",
    "WR5fW6C",
    "C2vZ",
    "lISP",
    "zwvv",
    "ELDp",
    "zw50",
    "z3rO",
    "WRDVWQ4",
    "EeDr",
    "W6zwvG",
    "BCoNtG",
    "v3Pl",
    "Bg9N",
    "sgep",
    "nmkLWRK",
    "C8klWQG",
    "uCo9WRy",
    "u0n0",
    "lq9a",
    "EwZcSa",
    "WOCvvq",
    "AwXp",
    "CCo7Aa",
    "W4rGWPu",
    "W6qhjG",
    "W4NcSa0",
    "d8kZAa",
    "W7FcPSoI",
    "AwrH",
    "lgz/",
    "qxnP",
    "W5ffWP8",
    "wfLY",
    "DfeG",
    "y2T2",
    "WO7dJSo8",
    "rKvL",
    "nfvQrwvNyW",
    "rezQ",
    "ALPP",
    "A01S",
    "DgfZ",
    "nmo6WQ8",
    "zCk3WOu",
    "m8kUja",
    "mJi0mZrZuMrjBNG",
    "Dg9g",
    "iSo9WRi",
    "WQu9cW",
    "EmoLCa",
    "mKeEWOCWW5W+",
    "D8oiDq",
    "C2vH",
    "W6GrW5e",
    "jmoXWQy",
    "Bhfc",
    "C3rY",
    "jL1v",
    "BvhdPG",
    "oM1T",
    "zmoGBa",
    "vwz6",
    "y2HH",
    "WROzhq",
    "x2fU",
    "W5SEWQ0",
    "FqlcLa",
    "ox9S",
    "WPXfW7y",
    "W6zgW4W",
    "kIaQ",
    "sLbI",
    "W5FdNLW",
    "W5SEWRa",
    "W50jWQS",
    "r3Hc",
    "rSkagq",
    "t8k3mq",
    "r3Pl",
    "gCogAG",
    "yCkMW4i",
    "ter0",
    "wmo3WPe",
    "Aw5N",
    "AgLZ",
    "rg1q",
    "WOyixW",
    "WQyaWPX+hIyStw1Cx8ov",
    "ys9l",
    "E3/dMq",
    "WPFcUSom",
    "WRxcMwS",
    "y3ab",
    "kSkTWQ4",
    "A8kMmG",
    "CSkFkW",
    "icHM",
    "zmkUBW",
    "gmkUxG",
    "EuZdLG",
    "C2LV",
    "BKPV",
    "W40oWQO",
    "W6Ggjq",
    "W40dlW",
    "cmoztq",
    "nI9m",
    "DgLT",
    "WRxdKmk5",
    "p8o7WPfYCahcKNbdFZ0",
    "i8kKmG",
    "B3iO",
    "W6bxW40",
    "CNjR",
    "BMv4",
    "v1jU",
    "BNSb",
    "WP5hW7S",
    "rvjo",
    "ChjV",
    "Bg5s",
    "yxbW",
    "DerH",
    "vxCC",
    "W5rUEG",
    "W7pcSd4",
    "WPhcQ8oi",
    "WRZcRmkC",
    "BgfJ",
    "BwLU",
    "yXfg",
    "W7PiuG",
    "AM9P",
    "B8kwvG",
    "Dw5T",
    "W4vfWOG",
    "Dxbn",
    "W5vHWRO",
    "B3vU",
    "DhjP",
    "WQ/dUCo+",
    "W4ulWQ8",
    "vvfI",
    "gmkhWOy",
    "DhjH",
    "C21M",
    "z0b8",
    "DaxdTW",
    "WOddGLq",
    "ptFdRSkwwSohvLFcKmkjWQddSKG",
    "WO5IW5e",
    "smktW6O",
    "wu9p",
    "twPf",
    "W6D7WRW",
    "hSoRW4W",
    "WQOHrW",
    "xSkWkG",
    "tNCv",
    "W71gW4G",
    "lI9K",
    "CfrT",
    "W6bcumohss3cP8orkmorW4RcPa",
    "yxrH",
    "Dg90",
    "W5LfWO0",
    "WR3cJSo5",
    "FSkSW4q",
    "lCk2W6a",
    "E30U",
    "nmkXWRK",
    "r3jQ",
    "F8kPmG",
    "WP4vva",
    "BIGP",
    "WPZdGCo4",
    "yr7cTq",
    "WO/dGSoG",
    "WPFcVmof",
    "wezc",
    "C2XP",
    "DhvY",
    "Cu9Y",
    "iCo2W5tdJ8kHg3hcPWaOW6HR",
    "zwyr",
    "W50EWRO",
    "WOBdJ1e",
    "nZa5mtGYzgv5sxPn",
    "Bxv0",
    "rM5p",
    "BMnL",
    "ndy4mteYC1PQzKnm",
    "kCk5WRm",
    "ndqWotuYBuT5rvHx",
    "WRdcRuK",
    "WRdcVK0",
    "tSkYoq",
    "vefl",
    "W7KaWRS",
    "zwr1",
    "t8oHWO8",
    "cmoxAG",
    "yKvh",
    "Esbm",
    "q0Xh",
    "B2XR",
    "W556fW",
    "tgXd",
    "D2fY",
    "yM94",
    "WQBdR00",
    "vmkqW7a",
    "WObcW7C",
    "CMXU",
    "s8oRWQi",
    "v8kzeq",
    "d8oKkG",
    "BM91",
    "CMnO",
    "sx3cTW",
    "Dgv4",
    "W5SjWRC",
    "W7nqW4e",
    "WQNcO8kb",
    "D8oetG",
    "rCkMWPC",
    "ANec",
    "icOG",
    "WQ7cOCkA",
    "r0nv",
    "WQpcUe0",
    "A2PL",
    "hmkVhW",
    "BfddQq",
    "FSoqAq",
    "BenS",
    "sfHe",
    "A8kYmG",
    "BYhcUW",
    "WRjCW40",
    "WQyvaq",
    "ywDL",
    "rvPp",
    "W7DzW4W",
    "ifzo",
    "teFcNa",
    "Dw5f",
    "xSkSWPe",
    "W5jWWO8",
    "xSo2WOK",
    "D0Pr",
    "W4z5WOG",
    "W4tcVmoB",
    "oNnZ",
    "uLP1",
    "BhzN",
    "W7ytW4q",
    "W4nFWOO",
    "W4JcVY4",
    "o8kepq",
    "q3jV",
    "lXddRG",
    "WR5UWQ0",
    "jJza",
    "W40yWQ0",
    "iIKO",
    "WRFcQ8om",
    "DxjU",
    "W5PKWOq",
    "kYKR",
    "tMan",
    "b8ovpq",
    "WQfKWRC",
    "gCkPbq",
    "r8ocFq",
    "Dg9t",
    "v8k3WOe",
    "d3CF",
    "WOeFEq",
    "bSkCmG",
    "bCouoG",
    "o8k5nG",
    "v1Lh",
    "WQyNrq",
    "BeTj",
    "WRRdKCk7",
    "W6XJWQ4",
    "zw52",
    "xNuw",
    "W67cVtu",
    "WQWNua",
    "CmoztG",
    "tvrR",
    "f8oskq",
    "zxrL",
    "d8kPBa",
    "Dfjz",
    "CtFcKa",
    "lI4V",
    "zgqS",
    "WOpdJvu",
    "DgLS",
    "W5W3W7C",
    "WRtcH1y",
    "Aw1L",
    "EJ/cNa",
    "iYtdVa",
    "k8oAWQS",
    "qMKr",
    "sMjS",
    "suj3",
    "BCo5sa",
    "Bgv2",
    "WQeebW",
    "wmkMWPW",
    "yxnR",
    "DhLc",
    "WRxcQ8kb",
    "WQNcQ8kD",
    "FeZdUG",
    "qCk2eW",
    "tYVdOW",
    "W6jvW5C",
    "C3rV",
    "nZG2mdGZnhrNrLHfrW",
    "m8kWWRG",
    "wwjg",
    "C2nO",
    "e8kgW5W",
    "W4qfWRG",
    "tgHH",
    "AHFcIW",
    "iMTY",
    "vMvI",
    "Ff3dUW",
    "WR3dPLW",
    "EuPm",
    "WP4qyq",
    "DcRcLa",
    "u2T6",
    "W5hcTbG",
    "B25J",
    "y29U",
    "vxzR",
    "W7KyW4C",
    "W4z9fq",
    "uCk3WOW",
    "zxSA",
    "jSoGWO4",
    "veLn",
    "u2nO",
    "CMv0",
    "yKjh",
    "WRRdJ8on",
    "WRlcRSkz",
    "dSoxvW",
    "zgvS",
    "WRdcQvW",
    "B2VcRq",
    "WQtcVK0",
    "AcZcLG",
    "dCkYzG",
    "bmoRWQG",
    "ntaXnZe1q2HPCgfT",
    "DxrL",
    "rgNdJq",
    "WRPEqa",
    "qxfZ",
    "Aw9U",
    "zKPL",
    "Bgvn",
    "kSoQWQa",
    "Aw5J",
    "AgvK",
    "BmkWkq",
    "zw1P",
    "DmoWW7OXW68+WOWdmCklW7pdJW",
    "vgfZ",
    "W5jpWOq",
    "aCkKyW",
    "C3BcOq",
    "WQldKCk8",
    "WRVcQ8kv",
    "yM1v",
    "CW/dSG",
    "fSk1WQ8",
    "WRHIWR8",
    "W71ReG",
    "WOFcT8om",
    "yw50",
    "lI91",
    "W4OjWQ0",
    "W70gka",
    "mNzs",
    "WONdJmoN",
    "sLfI",
    "WRXFWRi",
    "W4XJWPK",
    "nLDd",
    "EgD6",
    "WP5NWPG",
    "CMvW",
    "WPKCla",
    "rmoNxq",
    "dLnL",
    "bSklW6S",
    "W7jaWPy",
    "WQ7dICox",
    "W74qW5C",
  ];
  q = function () {
    return fk;
  };
  return q();
}
exports.addTask = bP;
exports.groupMuteTask = async (x) => {
  const z = await bH(x);
  for (const A of z) {
    const { mute: B, unmute: C } = JSON.parse(A.context);
    if (1 == B.enabled) {
      bP(A.chat, "mute", B.hour, B.minute, B.msg, x);
    }
    if (1 == C.enabled) {
      bP(A.chat, "unmute", C.hour, C.minute, C.msg, x);
    }
  }
};
function dm(x, y) {
  return v(y + 0x224, x);
}
function v(a, b) {
  const c = q();
  v = function (d, e) {
    d = d - 480;
    let f = c[d];
    if (v.NyyNvr === undefined) {
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
      v.zHGDOG = k;
      a = arguments;
      v.NyyNvr = true;
    }
    const h = c[0];
    const i = d + h;
    const j = a[i];
    if (!j) {
      if (v.zEcOOk === undefined) {
        const l = function (m) {
          this.PYYERu = m;
          this.ivLkdv = [1, 0, 0];
          this.wlrmTr = function () {
            return "newState";
          };
          this.xrNwSu = "\\w+ *\\(\\) *{\\w+ *";
          this.eTBaBT = "['|\"].+['|\"];? *}";
        };
        l.prototype.GdKoBj = function () {
          const m = new RegExp(this.xrNwSu + this.eTBaBT);
          const n = m.test(this.wlrmTr.toString())
            ? --this.ivLkdv[1]
            : --this.ivLkdv[0];
          return this.SStHcs(n);
        };
        l.prototype.SStHcs = function (m) {
          if (!Boolean(~m)) {
            return m;
          }
          return this.vOtQEQ(this.PYYERu);
        };
        l.prototype.vOtQEQ = function (m) {
          let n = 0;
          for (let o = this.ivLkdv.length; n < o; n++) {
            this.ivLkdv.push(Math.round(Math.random()));
            o = this.ivLkdv.length;
          }
          return m(this.ivLkdv[0]);
        };
        new l(v).GdKoBj();
        v.zEcOOk = true;
      }
      f = v.zHGDOG(f, e);
      a[i] = f;
    } else {
      f = j;
    }
    return f;
  };
  return v(a, b);
}
function dk(x, y) {
  return w(y + 0x1ae, x);
}
function dq(x, y) {
  return w(x - 0x132, y);
}
function dj(x, y) {
  return v(y - 0x87, x);
}
function dl(x, y) {
  return v(y + 0xbb, x);
}
const bQ = (x) => bG.levanter.emit("schedule", x);
const bR = (x) => bG.levanter.emit("status.schedule", x);
const bS = async (x, y, z, A, B, C) => {
  if (A) {
    z = await bJ(x, y, z, B, C);
  }
  if (!bD.schedule[C]) {
    bD.schedule[C] = {};
  }
  const E = new bE.CronJob(
    y,
    () => {
      const F = {
        chat: x,
        msg: z,
        time: y,
        session: C,
      };
      bG.levanter.emit("schedule", F);
      if ("once" === B) {
        E.stop();
        delete bD.schedule[C]["" + x + y];
        bN(x, y, C);
      }
    },
    null,
    true,
    bF.TIMEZONE || process.env.TZ || "Asia/Kolkata",
  );
  bD.schedule[C]["" + x + y] = {
    chat: x,
    time: y,
    task: E,
  };
  return (
    E.nextDate().toFormat("yyyy LLL dd, hh:mm:ss a") +
    (" " + E.cronTime.timeZone)
  );
};
const bT = async (x, y, z, A, B = false) => {
  if (!bD.schedule[A]) {
    bD.schedule[A] = {};
  }
  if (!B) {
    z = z.join(", ");
    y = await bK(x, y, z, A);
  }
  const D = new bE.CronJob(
    x,
    () => {
      const F = {
        time: x,
        msg: y,
        session: A,
        jids: z,
      };
      bG.levanter.emit("status.schedule", F);
      bL(x, A);
      D.stop();
      delete bD.schedule[A][x];
    },
    null,
    true,
    bF.TIMEZONE || process.env.TZ || "Asia/Kolkata",
  );
  bD.schedule[A][x] = {
    time: x,
    task: D,
  };
  return (
    D.nextDate().toFormat("yyyy LLL dd, hh:mm:ss a") +
    (" " + D.cronTime.timeZone)
  );
};
function dh(x, y) {
  return w(y - 0x1ad, x);
}
function dr(x, y) {
  return w(y - 0x2ae, x);
}
exports.createStatusSchedule = bT;
exports.scheduleMessageStatusTask = async (x) => {
  const z = await bM(x, 1);
  for (const A of z) await bT(A.time, JSON.parse(A.msg), A.jids, x, true);
};
exports.scheduleMessageTask = async (x) => {
  const z = await bI(0, x, 1);
  for (const A of z) {
    const B = JSON.parse(A.msg);
    await bS(A.chat, A.time, B, false, B.once, x);
  }
};
exports.deleteScheduleTask = async (y, z, A) => {
  if (!bD.schedule[A]) {
    return;
  }
  if ("all" === y) {
    for (const F in bD.schedule[A]) {
      const G = bD.schedule[A][F];
      if (G.chat) {
        G.task.stop();
        delete bD.schedule[A][F];
      }
    }
    return;
  }
  const D = "" + y + z;
  const E = bD.schedule[A][D];
  if (E) {
    E.task.stop();
    delete bD.schedule[A][D];
  }
};
exports.createSchedule = bS;
exports.deleteScheduleStatusTask = async (x, y) => {
  if (!bD.schedule[y]) {
    return;
  }
  if ("all" === x) {
    for (const B in bD.schedule[y]) {
      const C = bD.schedule[y][B];
      if (!C.chat) {
        C.task.stop();
        delete bD.schedule[y][B];
      }
    }
    return;
  }
  const A = bD.schedule[y][x];
  if (A) {
    A.task.stop();
    delete bD.schedule[y][x];
  }
};
