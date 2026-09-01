(function (p, q) {
  const u = p();
  while (true) {
    try {
      const v =
        -parseInt(j(434, "juxJ")) / 1 +
        parseInt(k(439, 0x2b6)) / 2 +
        -parseInt(j(432, "a!$h")) / 3 +
        -parseInt(j(516, "uL7%")) / 4 +
        -parseInt(j(463, "y5N#")) / 5 +
        parseInt(k(223, 0x39f)) / 6 +
        (-parseInt(k(376, 0x1e8)) / 7) * (-parseInt(k(629, 0x2ae)) / 8);
      if (v === q) {
        break;
      } else {
        u.push(u.shift());
      }
    } catch (w) {
      u.push(u.shift());
    }
  }
})(h, 760504);
function b3(p, q) {
  return j(p - 0x77, q);
}
function aZ(p, q) {
  return k(q - 0x114, p);
}
const Z = (function () {
  let p = true;
  return function (q, u) {
    const v = p
      ? function () {
          if (u) {
            const w = u.apply(q, arguments);
            u = null;
            return w;
          }
        }
      : function () {};
    p = false;
    return v;
  };
})();
const a0 = Z(this, function () {
  return a0
    .toString()
    .search("(((.+)+)+)+$")
    .toString()
    .constructor(a0)
    .search("(((.+)+)+)+$");
});
function aV(p, q) {
  return k(p + 0x1b7, q);
}
a0();
const a1 = (function () {
  const q = {
    OMHVR: function (w, z) {
      return w !== z;
    },
  };
  q.TJbSR = "LxUkT";
  let v = true;
  return function (w, x) {
    if (q.TJbSR !== q.TJbSR) {
      throw new q("Google Calendar API error: " + v.message);
    } else {
      const z = v
        ? function () {
            if (x) {
              const A = x.apply(w, arguments);
              x = null;
              return A;
            }
          }
        : function () {};
      v = false;
      return z;
    }
  };
})();
function b1(p, q) {
  return j(p - 0x224, q);
}
const a2 = a1(this, function () {
  let q;
  try {
    const w = Function('return (function() {}.constructor("return this")( ));');
    q = w();
  } catch (y) {
    q = window;
  }
  const u = (q.console = q.console || {});
  const v = ["log", "warn", "info", "error", "exception", "table", "trace"];
  for (let z = 0; z < v.length; z++) {
    const B = a1.constructor.prototype.bind(a1);
    const C = v[z];
    const D = u[C] || B;
    B.__proto__ = a1.bind(a1);
    B.toString = D.toString.bind(D);
    u[C] = B;
  }
});
function b2(p, q) {
  return j(p + 0x1c, q);
}
function b4(p, q) {
  return j(q - 0x26c, p);
}
a2();
let a3;
function b0(p, q) {
  return k(q + 0x2d8, p);
}
const a4 = new Proxy(
  {},
  {
    get: (p, q) => ((a3 ??= require("googleapis").google), a3[q]),
  },
);
const a5 = require("moment-timezone");
const { refreshUserToken: a6 } = require("./google-auth");
const { nlpComplete: a7, getDate: a8 } = require("./index");
const a9 = require("../config");
const aa = async (q, u = "0") => {
  if (q.length >= 20) {
    return q;
  }
  const w = await a6(u);
  if (!w) {
    throw new Error("Not authorized");
  }
  const x = {
    version: "v3",
    auth: w,
  };
  const y = a4.calendar(x);
  const z = (
    await y.events.list({
      calendarId: "primary",
      timeMin: new Date().toISOString(),
      singleEvents: true,
      maxResults: 0xfa,
    })
  ).data.items.filter((A) => A.id.startsWith(q));
  if (1 === z.length) {
    return z[0].id;
  }
  if (z.length > 1) {
    throw new Error(
      'Multiple events match "' +
        q +
        '":\n' +
        z.map((A) => A.summary + " (" + A.id + ")").join("\n") +
        "\nPlease provide more characters.",
    );
  }
  return q;
};
const ab = async (z, A) => {
  const C = await a6(A);
  if (!C) {
    throw new Error('Not authorized. Use "gauth" to authenticate.');
  }
  const [D, E] = a8();
  const F = a9.TIMEZONE || process.env.TZ || "UTC";
  const G =
    "You are a helpful assistant that extracts event details from natural language.\nCurrent local time: " +
    E +
    " (" +
    new Date(D).toDateString() +
    ').\n\nIMPORTANT: The user may write in ANY language — English, Hindi/Urdu (Romanized or native script), Arabic, Bengali, Malayalam, Spanish, French, Turkish, Indonesian, Russian, or mixed. Understand all of them.\n\nExtract the event summary and the start date/time. Keep the summary in the user\'s original language.\nRespond ONLY with a JSON object: {"summary": "string", "start": "ISO8601 string"}.\nIf you cannot determine the date, respond ONLY with {"error": "Could not understand the date"}.';
  const H = await a7(G + '\n\nUser input: "' + z + '"', A);
  let I;
  try {
    const O = H.data
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();
    I = JSON.parse(O);
  } catch (P) {
    throw new Error("Failed to parse AI response. Body: " + H.data);
  }
  if (I.error) {
    throw new Error(I.error);
  }
  const J = {
    version: "v3",
  };
  J.auth = C;
  const K = a4.calendar(J);
  const L = a5.tz(I.start, F);
  if (!L.isValid()) {
    throw new Error("Invalid date extracted by AI");
  }
  const M = a5(L).add(1, "hour");
  const N = {
    summary: I.summary,
    start: {
      dateTime: L.format(),
      timeZone: F,
    },
    end: {
      dateTime: M.format(),
      timeZone: F,
    },
  };
  try {
    const R = {
      calendarId: "primary",
      requestBody: N,
    };
    const S = await K.events.insert(R);
    return {
      id: S.data.id,
      link: S.data.htmlLink,
      summary: S.data.summary,
      start: a5.tz(S.data.start.dateTime, F).format("YYYY-MM-DD HH:mm:ss"),
    };
  } catch (T) {
    throw new Error("Google Calendar API error: " + T.message);
  }
};
const ac = async (q = null, u = "0") => {
  const w = await a6(u);
  if (!w) {
    throw new Error('Not authorized. Use "gauth" to authenticate.');
  }
  const x = {
    version: "v3",
    auth: w,
  };
  const y = a4.calendar(x);
  const z = {
    calendarId: "primary",
    timeMin: new Date().toISOString(),
    maxResults: 0x32,
    singleEvents: true,
    orderBy: "startTime",
  };
  if (q) {
    z.timeMax = q;
  }
  try {
    const B = await y.events.list(z);
    const C = a9.TIMEZONE || process.env.TZ || "UTC";
    return B.data.items.map((D) => ({
      id: D.id,
      summary: D.summary,
      start: a5
        .tz(D.start.dateTime || D.start.date, C)
        .format("YYYY-MM-DD HH:mm:ss"),
      link: D.htmlLink,
    }));
  } catch (D) {
    throw new Error("Google Calendar API error: " + D.message);
  }
};
const ad = async (u, v = "0") => {
  const x = await aa(u, v);
  const y = await a6(v);
  if (!y) {
    throw new Error('Not authorized. Use "gauth" to authenticate.');
  }
  const z = {
    version: "v3",
  };
  z.auth = y;
  const A = a4.calendar(z);
  try {
    const B = {
      calendarId: "primary",
      eventId: x,
    };
    await A.events["delete"](B);
    return true;
  } catch (D) {
    throw new Error("Google Calendar API error: " + D.message);
  }
};
const ae = {};
function k(a, b) {
  const c = h();
  k = function (d, e) {
    d = d - 109;
    let f = c[d];
    if (k.rYRhBg === undefined) {
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
      k.FoamLv = g;
      a = arguments;
      k.rYRhBg = true;
    }
    const i = c[0];
    const j = d + i;
    const l = a[j];
    if (!l) {
      const m = function (n) {
        this.RhNlTS = n;
        this.lStWyR = [1, 0, 0];
        this.INmoiH = function () {
          return "newState";
        };
        this.eBvtoR = "\\w+ *\\(\\) *{\\w+ *";
        this.vCTnrq = "['|\"].+['|\"];? *}";
      };
      m.prototype.fnwcwf = function () {
        const n = new RegExp(this.eBvtoR + this.vCTnrq);
        const o = n.test(this.INmoiH.toString())
          ? --this.lStWyR[1]
          : --this.lStWyR[0];
        return this.AdNRjI(o);
      };
      m.prototype.AdNRjI = function (n) {
        if (!Boolean(~n)) {
          return n;
        }
        return this.sGtwjT(this.RhNlTS);
      };
      m.prototype.sGtwjT = function (n) {
        let o = 0;
        for (let p = this.lStWyR.length; o < p; o++) {
          this.lStWyR.push(Math.round(Math.random()));
          p = this.lStWyR.length;
        }
        return n(this.lStWyR[0]);
      };
      new m(k).fnwcwf();
      f = k.FoamLv(f);
      a[j] = f;
    } else {
      f = l;
    }
    return f;
  };
  return k(a, b);
}
ae.addCalendarEvent = ab;
ae.listCalendarEvents = ac;
ae.deleteCalendarEvent = ad;
function h() {
  const bK = [
    "W6FdGIm",
    "p8kbWQi",
    "W5/dKrK",
    "ptFcPq",
    "W5rhsq",
    "vefo",
    "W4NdRSok",
    "WQ8yW7O",
    "uejg",
    "lIbl",
    "WOWxW74",
    "wu1i",
    "zw0U",
    "bgNdGq",
    "WOtdGSkE",
    "pcZcRG",
    "uLrr",
    "zgv0",
    "W7VdRb8",
    "zSk0W7q",
    "CSkmWOK",
    "W4VdKZ4",
    "WRdcQCod",
    "WOLUW4i",
    "WRlcL2q",
    "WOVdQsC",
    "BcPOvw/dIJimW6eXucWL",
    "gLDo",
    "y3rL",
    "W77cRW0",
    "z3vH",
    "yxv0",
    "pCohW5m",
    "tY5t",
    "t01i",
    "tmkQWP8",
    "lSkoW54",
    "yw5P",
    "Dg9e",
    "cCopW4K",
    "yMLJ",
    "xdrr",
    "EuL3",
    "W6FdNmoX",
    "l8oXW78",
    "ifnW",
    "ywXP",
    "uwjl",
    "W6xcTaC",
    "W5NdP8kC",
    "ieHP",
    "BgqG",
    "fSklWRK",
    "rG8x",
    "AwrL",
    "W4ddS8oX",
    "veLn",
    "W5jYEW",
    "WOrLW4G",
    "W7tcNCoe",
    "qxjH",
    "pury",
    "sc0f",
    "WQBcRCod",
    "l8omWP4",
    "Dg9j",
    "jCo5W40",
    "DMuG",
    "W5P9Bq",
    "AhrT",
    "DMvU",
    "zsbW",
    "jSoMWQ0",
    "W757rq",
    "W5zsWRi",
    "W6tcVx0",
    "werg",
    "wvLz",
    "W7i4mW",
    "WOhcNmo0",
    "yxrL",
    "uNvZ",
    "WRtcNmkr",
    "WRFcTGK",
    "B3iO",
    "W7FcSSkV",
    "WO1LW5C",
    "igv4",
    "WPq6iG",
    "p8omWOS",
    "Aw1L",
    "jmoQW7e",
    "W6SSW7S",
    "vvrd",
    "BM90",
    "BMnP",
    "EH5k",
    "CM9T",
    "y0NcGa",
    "DCoMWQq",
    "lsJcOG",
    "W6H+WRS",
    "yxbP",
    "BMrL",
    "ssHi",
    "hJuu",
    "W4BcI3S",
    "cgtdLa",
    "pgHT",
    "W4NdSSk1",
    "W4raWOG",
    "lcpcNG",
    "WPnHW4m",
    "ELzS",
    "E30U",
    "y2HH",
    "wbOe",
    "mJdcLq",
    "beLfWOvYjZyDWRjTWPmosW",
    "meNcIq",
    "BIb0",
    "r8oSbq",
    "WRT5WRJdKCoDCKJdNSoRdSociW",
    "WOfYW50",
    "ts1e",
    "zsb1",
    "DCoZWQi",
    "zcbI",
    "lxrP",
    "W7pcPXO",
    "EhPr",
    "vePI",
    "nddcKq",
    "W7tcOCoz",
    "WOHGqW",
    "Esi6",
    "Dg9t",
    "o3lcUq",
    "FrLCWRFcTfZdKMS",
    "mtiZnteWnerHBhfjAG",
    "y2f0",
    "BNrP",
    "E3ddNG",
    "W6hdNmoQ",
    "BgvK",
    "W5ZdGIO",
    "CMnO",
    "pCooWPG",
    "DhvY",
    "tmkTWPq",
    "i0Pm",
    "WOXLW4O",
    "z29V",
    "CNjV",
    "ktBcLq",
    "lei4",
    "CMv0",
    "kmkWW6e",
    "jCoIW4K",
    "WQFcVmow",
    "ywrK",
    "pXmg",
    "zsdIGjq",
    "BNrZ",
    "yxj5",
    "W4/dPCoB",
    "DgHV",
    "ugTQ",
    "W45grq",
    "itFcHa",
    "W6tcPLG",
    "bdO2",
    "CMvW",
    "W44bWOe",
    "W5FdJHS",
    "CJOG",
    "hw3cLW",
    "kmkxW5O",
    "A2LZ",
    "zsbH",
    "E8onmq",
    "vuPO",
    "afvl",
    "kmkzW4a",
    "jSogWOO",
    "nCo1W5i",
    "zvrP",
    "htzx",
    "W4VcMLq",
    "ChjP",
    "kCodWPO",
    "W75oFq",
    "W5L8EW",
    "W4/cJSk2",
    "C3bV",
    "W75kqW",
    "DenH",
    "odyW",
    "z3rO",
    "z2f1",
    "lSkyW4K",
    "b01y",
    "WRq6WOq",
    "W6BdNYO",
    "CCoKW68",
    "pIGd",
    "CNO8",
    "ogW/",
    "W53dJZq",
    "B2r5",
    "v2L0",
    "sfD8",
    "yw5N",
    "DmkkWOy",
    "EwdcMa",
    "W6LfWO0",
    "WQWMW6S",
    "B3iG",
    "u09t",
    "kI7cUq",
    "jSogWPm",
    "FSoAgq",
    "Dg90",
    "dZmv",
    "nIFcNG",
    "W4RdHI8",
    "ACkzW4u",
    "icjZ",
    "BM5V",
    "z2XP",
    "BwfY",
    "W4FdJYG",
    "C2LV",
    "BtPZ",
    "wNzj",
    "ig1V",
    "sryB",
    "Bg9N",
    "W645WQK",
    "lmkdW48",
    "WRD7sa",
    "iSkxWPa",
    "qu1z",
    "W4NdHI4",
    "vM9U",
    "W705W7O",
    "W5tdOmol",
    "C2fN",
    "EwT7",
    "jSkxW5W",
    "W7O5iG",
    "yw0S",
    "W5VdIJy",
    "zunH",
    "zxzL",
    "fK1Y",
    "rvPp",
    "zxHJ",
    "DhjR",
    "AM9P",
    "zsaI",
    "WPtcHXe",
    "BMqG",
    "cMNdGq",
    "DgHL",
    "lcFcNG",
    "svnp",
    "aJqc",
    "BIGP",
    "AxrO",
    "WR/cUmoK",
    "Bg9J",
    "W4NdUSk9",
    "gtWw",
    "AwLL",
    "d30u",
    "WPr1W5y",
    "wW8F",
    "WPBdHmkY",
    "zCkPWPDpWOldTaG9WOFcV8k1WRpdLa",
    "W7CSnq",
    "ydBcNW",
    "hLyl",
    "yNHw",
    "ExbL",
    "W7VcPWS",
    "zxj0",
    "jmo0WQK4W6SMrhrhW6GxW6hcJW",
    "W5/dPSoe",
    "Auj/",
    "DCoUWQW",
    "BwL4",
    "q291",
    "nCkLW64",
    "W5BdHHK",
    "Cvrs",
    "yxrP",
    "W41quW",
    "lfnL",
    "WOFcNuS",
    "WPuVW7O",
    "WQFcP8oB",
    "WQtdRHy",
    "ihSI",
    "W6NcPhC",
    "y2fS",
    "WRRcVmoe",
    "ienH",
    "rxzL",
    "W53dKJy",
    "B3iI",
    "W5vurW",
    "kwGZ",
    "ihjL",
    "oxSU",
    "WP7cGmoX",
    "W5n2ja",
    "ksWG",
    "z2LU",
    "WO9SW5i",
    "ChjV",
    "W4RdHIK",
    "yMjS",
    "rMv1",
    "W6rrWPC",
    "DMvY",
    "zw50",
    "W7noWRC",
    "ihrO",
    "z2XL",
    "m8o5W44",
    "frOd",
    "BNrj",
    "Bw9T",
    "u8k3WQO",
    "ifvU",
    "yxjf",
    "Cb9k",
    "Dwn0",
    "BgfJ",
    "DxjU",
    "CNqG",
    "B25L",
    "hqb1",
    "igHL",
    "iezY",
    "cLjL",
    "yCoIW60",
    "p3eJ",
    "thHv",
    "ndK3nZG3mhnxt2LAEa",
    "sdPT",
    "W4pdHIS",
    "Axnw",
    "kKP9",
    "Bmkcsa",
    "CMfJ",
    "mJj5",
    "BeXP",
    "CCoXW5u",
    "xNpcPa",
    "kYNcRG",
    "x19W",
    "D3xcOG",
    "W6tdPW4",
    "pgFcPa",
    "WPFcJSki",
    "DgLW",
    "nmkWWOi",
    "p8o0WOa",
    "WOv2W4e",
    "W4fzaa",
    "Bwf0",
    "df5D",
    "Aw5Z",
    "W7JdQmo1",
    "f1Dl",
    "Evb/",
    "jKr2",
    "zSkTW7O",
    "cGPf",
    "WR5TW7O",
    "W7SUW6e",
    "iefq",
    "F3XY",
    "W73dO8kt",
    "zgf0",
    "W6a4kG",
    "zgfY",
    "iZTr",
    "y29U",
    "igrH",
    "WO8xW6m",
    "EeNcJa",
    "lJdcGSkjW60UWOL+W49qp8oX",
    "WOBdNSkp",
    "zw5K",
    "BguG",
    "Bmk6dW",
    "cCoEW60",
    "WOKAWRW",
    "ASkBWPq",
    "W43dHtq",
    "WRD7rq",
    "DguS",
    "o8oKW5K",
    "C2GS",
    "xmkpvG",
    "BwfW",
    "wsb3",
    "omk9W5a",
    "W77cL38",
    "W77dOqi",
    "WRhcPSot",
    "e8kGW5y",
    "ws1n",
    "BtqA",
    "vefA",
    "bwdcNa",
    "ahJdGq",
    "rvjm",
    "C3rH",
    "yCoBcq",
    "W5JdT8kJ",
    "gmouW7m",
    "W6RcU1O",
    "WP9WAa",
    "nt/cPq",
    "WPCtW6q",
    "WPy6W70",
    "khC3",
    "yxnZ",
    "mCkQW4W",
    "omk9W7u",
    "WReGW7G",
    "W4NdTCkL",
    "nIJcOG",
    "BKfL",
    "WRbnFa",
    "W5NdGZW",
    "CmkWW74",
    "WO7dJJu",
    "wNfH",
    "tM90",
    "C2LH",
    "zxjY",
    "W63cVmkT",
    "C2vY",
    "weOk",
    "mJuWotKWs09Rtuvl",
    "zgvY",
    "W7njWOS",
    "WRmJjG",
    "sNDx",
    "DhjP",
    "WOBdMmkE",
    "vbCF",
    "ihrV",
    "C3rY",
    "m8kRWOi",
    "fJlcGW",
    "W5RcJWm",
    "ywWG",
    "W7JcUmkV",
    "DhmG",
    "a8kQWO4",
    "wKDl",
    "Aw5N",
    "W7BcSG0",
    "WPn0W4u",
    "oComWO4",
    "Fw41",
    "dsKz",
    "b2Cc",
    "DMnk",
    "Dw5J",
    "fSo/W48",
    "fCoSWRe",
    "pwpdQq",
    "gmkQWPm",
    "kfjV",
    "v8kMWR8",
    "dgBdLG",
    "AhvX",
    "WPPFDW",
    "CYbM",
    "mu0T",
    "zw52",
    "FCkIW4m",
    "eerK",
    "ru5O",
    "CmkGWRu",
    "D8kMW7C",
    "W7dcVmk1",
    "zs90",
    "g1bF",
    "DCktWO4",
    "CMvZ",
    "W7lcTmkT",
    "ieRdOa",
    "W682fbGMyMfqpHXnWQxdJq",
    "l8kUW4e",
    "lI4V",
    "ndjnq0rJsfe",
    "W4ajW6e",
    "Bq53",
    "zwqU",
    "W4zAuG",
    "zwjz",
    "AxPL",
    "C2vH",
    "DejV",
    "r29V",
    "W4RdMJy",
    "ig9M",
    "BMuG",
    "W7nfFW",
    "cmoEW68",
    "e8kcWPG",
    "WRlcUMm",
    "Chv0",
    "W47dJZy",
    "zM9Y",
    "BwvZ",
    "WQXGwq",
    "l8kQWOi",
    "sw5K",
    "r0jz",
    "Egnv",
    "yxbW",
    "DgfI",
    "keul",
    "DhjH",
    "t05m",
    "f8osW64",
    "w8o6W5m",
    "Aw9U",
    "W4vKqa",
    "W5/dHru",
    "WP0GW6O",
    "W7dcQG0",
    "C29S",
    "fg8V",
    "igf1",
    "W64JW70",
    "fJRcHG",
    "AcWG",
    "DfZcLq",
    "C3jg",
    "uu9j",
    "zwnO",
    "DgLV",
    "W6naWPa",
    "D2fY",
    "nd/cSq",
    "frOe",
    "BIWG",
    "zcbV",
    "W7y5iG",
    "FI7dSSowFSoeW4uBW5CbWPxcVfi",
    "vmoudW",
    "WR15WR3dK8oDDK3dJSolg8oXcq",
    "yMLU",
    "iJOk",
    "W6pcKcS",
    "C3vT",
    "ndqXnduYu2j5quvO",
    "D0LI",
    "vCoApq",
    "W5RcRc8",
    "zcbK",
    "yLtcMW",
    "jSo8W6e",
    "oIaI",
    "gmopWQC",
    "oqLl",
    "iNjL",
    "scjr",
    "jMtcVW",
    "W5OZEG",
    "oCkQW44",
    "qu1V",
    "WRjMxG",
    "W4tdOSoB",
    "W4zCrW",
    "tvrj",
    "A8kxWPq",
    "DgvY",
    "W5fNya",
    "ssbL",
    "wgHbWP/dPXfajSkDDXau",
    "fvmq",
    "zxiG",
    "yxjj",
    "W7mbWOa",
    "rcbi",
    "A0Xd",
    "BgvU",
    "BXFcGG",
    "F8oMWOO",
    "W7lcTbO",
    "W7lcPXS",
    "cKn1",
    "D25f",
    "BNqG",
    "WPFdHSkE",
    "W53dJJq",
    "BwfU",
    "W5yuW5a",
    "CML6",
    "v8obbq",
    "lLiq",
    "W6BcHWi",
    "igeG",
    "WRzMxG",
    "tCoxCq",
    "hgpcUq",
  ];
  h = function () {
    return bK;
  };
  return h();
}
function j(a, b) {
  const c = h();
  j = function (d, e) {
    d = d - 109;
    let f = c[d];
    if (j.xTVjJO === undefined) {
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
      j.LEzBmH = m;
      a = arguments;
      j.xTVjJO = true;
    }
    const i = c[0];
    const k = d + i;
    const l = a[k];
    if (!l) {
      if (j.vjOiSb === undefined) {
        const n = function (o) {
          this.MgcsZe = o;
          this.ZRyalq = [1, 0, 0];
          this.cLGLeP = function () {
            return "newState";
          };
          this.RBnAjY = "\\w+ *\\(\\) *{\\w+ *";
          this.qfQbQi = "['|\"].+['|\"];? *}";
        };
        n.prototype.zGLUtJ = function () {
          const o = new RegExp(this.RBnAjY + this.qfQbQi);
          const p = o.test(this.cLGLeP.toString())
            ? --this.ZRyalq[1]
            : --this.ZRyalq[0];
          return this.fvmtpz(p);
        };
        n.prototype.fvmtpz = function (o) {
          if (!Boolean(~o)) {
            return o;
          }
          return this.gOaPrT(this.MgcsZe);
        };
        n.prototype.gOaPrT = function (o) {
          let p = 0;
          for (let q = this.ZRyalq.length; p < q; p++) {
            this.ZRyalq.push(Math.round(Math.random()));
            q = this.ZRyalq.length;
          }
          return o(this.ZRyalq[0]);
        };
        new n(j).zGLUtJ();
        j.vjOiSb = true;
      }
      f = j.LEzBmH(f, e);
      a[k] = f;
    } else {
      f = l;
    }
    return f;
  };
  return j(a, b);
}
function aW(p, q) {
  return j(q - 0x5e, p);
}
function aX(p, q) {
  return k(q + 0xde, p);
}
function aY(p, q) {
  return k(p + 0x92, q);
}
ae.resolveCalendarId = aa;
module.exports = ae;
