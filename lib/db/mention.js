(function (k, m) {
  const p = k();
  while (true) {
    try {
      const q =
        parseInt(h(449, "63v(")) / 1 +
        (-parseInt(h(367, "rDiK")) / 2) * (parseInt(j(307, 0x392)) / 3) +
        (parseInt(j(385, 0x377)) / 4) * (-parseInt(j(240, 0x2d4)) / 5) +
        -parseInt(j(248, -0x18)) / 6 +
        parseInt(h(346, "gO8J")) / 7 +
        parseInt(j(275, 0x309)) / 8 +
        (-parseInt(h(457, "#w$!")) / 9) * (-parseInt(j(383, 0x4eb)) / 10);
      if (q === m) {
        break;
      } else {
        p.push(p.shift());
      }
    } catch (v) {
      p.push(p.shift());
    }
  }
})(g, 610365);
const a0 = (function () {
  let q = true;
  return function (v, w) {
    const x = q
      ? function () {
          if (w) {
            const z = w.apply(v, arguments);
            w = null;
            return z;
          }
        }
      : function () {};
    q = false;
    return x;
  };
})();
const a1 = a0(this, function () {
  return a1
    .toString()
    .search("(((.+)+)+)+$")
    .toString()
    .constructor(a1)
    .search("(((.+)+)+)+$");
});
function bg(k, m) {
  return h(m - 0x157, k);
}
a1();
function h(a, b) {
  const c = g();
  h = function (d, e) {
    d = d - 229;
    let f = c[d];
    if (h.bldcGC === undefined) {
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
      h.cwGsGy = m;
      a = arguments;
      h.bldcGC = true;
    }
    const j = c[0];
    const k = d + j;
    const l = a[k];
    if (!l) {
      if (h.VTSXBk === undefined) {
        const n = function (o) {
          this.BJaXvk = o;
          this.rnzJfN = [1, 0, 0];
          this.SKpLZj = function () {
            return "newState";
          };
          this.bEGici = "\\w+ *\\(\\) *{\\w+ *";
          this.ttrVUD = "['|\"].+['|\"];? *}";
        };
        n.prototype.cZZdJz = function () {
          const o = new RegExp(this.bEGici + this.ttrVUD);
          const p = o.test(this.SKpLZj.toString())
            ? --this.rnzJfN[1]
            : --this.rnzJfN[0];
          return this.zspXaW(p);
        };
        n.prototype.zspXaW = function (o) {
          if (!Boolean(~o)) {
            return o;
          }
          return this.zSDGmz(this.BJaXvk);
        };
        n.prototype.zSDGmz = function (o) {
          let p = 0;
          for (let q = this.rnzJfN.length; p < q; p++) {
            this.rnzJfN.push(Math.round(Math.random()));
            q = this.rnzJfN.length;
          }
          return o(this.rnzJfN[0]);
        };
        new n(h).cZZdJz();
        h.VTSXBk = true;
      }
      f = h.cwGsGy(f, e);
      a[k] = f;
    } else {
      f = l;
    }
    return f;
  };
  return h(a, b);
}
const a2 = (function () {
  let q = true;
  return function (v, w) {
    const y = q
      ? function () {
          if (w) {
            const A = w.apply(v, arguments);
            w = null;
            return A;
          }
        }
      : function () {};
    q = false;
    return y;
  };
})();
const a3 = a2(this, function () {
  let m;
  try {
    const v = Function('return (function() {}.constructor("return this")( ));');
    m = v();
  } catch (w) {
    m = window;
  }
  const p = (m.console = m.console || {});
  const q = ["log", "warn", "info", "error", "exception", "table", "trace"];
  for (let y = 0; y < q.length; y++) {
    const z = a2.constructor.prototype.bind(a2);
    const A = q[y];
    const B = p[A] || z;
    z.__proto__ = a2.bind(a2);
    z.toString = B.toString.bind(B);
    p[A] = z;
  }
});
a3();
const { DataTypes: a4 } = require("sequelize");
const a5 = require("../../config");
const a6 = require("fs-extra");
const { join: a7 } = require("path");
const a8 = a5.DATABASE.define("men", {
  enabled: {
    type: a4.BOOLEAN,
  },
  text: {
    type: a4.TEXT,
  },
  session: {
    type: a4.STRING,
    allowNull: false,
    defaultValue: "0",
  },
});
const a9 = {};
const aa = async (q) => {
  if (q in a9) {
    return a9[q];
  }
  const x = {
    session: q,
  };
  const y = {
    where: x,
  };
  const z = await a8.findOne(y);
  return z ? ((a9[q] = z.dataValues), z.dataValues) : ((a9[q] = false), false);
};
function g() {
  const bK = [
    "W7JdO2y",
    "WOHiWQC",
    "sapcTa",
    "refu",
    "WOHNla",
    "nwrNCxDIAG",
    "DhjP",
    "Dg90",
    "twvU",
    "yLL0",
    "pSk3lG",
    "yMXL",
    "BIGP",
    "mJyXotC1mfPqEu1uzq",
    "BKre",
    "C2vH",
    "B19F",
    "WORcRCk4",
    "WPDToa",
    "ox7cTq",
    "uI7cJG",
    "mmkZW7i",
    "WR0GW64",
    "W5uPDG",
    "u1rs",
    "lenZ",
    "DgLV",
    "C2LV",
    "ksSK",
    "qujb",
    "EezR",
    "CxvL",
    "ouRdQG",
    "q2Tz",
    "e8oLxq",
    "pmoAva",
    "WQ4/W6e",
    "s8oSiW",
    "EtRcSW",
    "usJcKW",
    "nJy3mJy5nLzYsMjdsa",
    "y8kFtG",
    "zgf0",
    "rgrW",
    "pNlcOG",
    "u1Ly",
    "iNjL",
    "l8kctq",
    "nwhcIq",
    "Dgv4",
    "tGpcUq",
    "ywzq",
    "C2vZ",
    "gSokW5u",
    "WRFdRSkz",
    "ymoSzq",
    "oJm3",
    "bSoMqW",
    "Dg9t",
    "WPGsuq",
    "sCorW5O",
    "zxnZ",
    "AxPL",
    "Aw5M",
    "cGur",
    "WRP+WPq",
    "W7NdPwu",
    "Dw5J",
    "WOTNlq",
    "Cgf0",
    "W6GVza",
    "cxTy",
    "mJDOrwf3uMy",
    "W51nvq",
    "W4LCW5G",
    "hhVcHG",
    "cXme",
    "C2vX",
    "rMre",
    "p2hcMa",
    "rdtcNq",
    "e8k7W4W",
    "lmkPW4y",
    "odyZotnfwMLUtKu",
    "FmoWkW",
    "EKjQ",
    "rGpcUq",
    "h2bF",
    "mMlcMW",
    "WRO2W60",
    "tr7cSG",
    "W4LbW6i",
    "y3jL",
    "EdNdMG",
    "yxbW",
    "W4lcQYW",
    "D2HL",
    "WQ8OW7G",
    "WRpcTxS",
    "W6DjW6C",
    "WO97gW",
    "zgvM",
    "W7O8CW",
    "WPKusG",
    "WQa8W4K",
    "W7fpW7m",
    "WPzCWOm",
    "ywTv",
    "l2/cSW",
    "scJcRW",
    "WOBcJMq",
    "yqBdSSk3k8oai2xcTbVdOmoWfW",
    "CMnO",
    "gW8l",
    "BmoNla",
    "nexcHG",
    "hHni",
    "W5LTwG",
    "W5lcQJa",
    "W4HqxW",
    "WRO9W7m",
    "n8oin05doh3cUCkzW5VdSYy",
    "rHNcUW",
    "W7JdJga",
    "W4ddSmo2",
    "W4/cGCkB",
    "WRC6W78",
    "WOq+WPi",
    "BhvL",
    "W7ziW6u",
    "C3rY",
    "fmkXW6W",
    "A8oqas7cQZH1W74ADSoKW6S",
    "WO97lW",
    "BwvK",
    "W5RdGYm",
    "WRuGW4K",
    "W6ldKKO",
    "WR8WW7W",
    "mtG1mtuZnw1dB2X4Eq",
    "zxb0",
    "W6tdI2e",
    "oSowta",
    "qK9p",
    "WQW4W7K",
    "vevy",
    "ywXS",
    "tIhcVq",
    "otKWnJCWAM9quNbH",
    "W6ldN0npFc3cH8k5W5u",
    "mZu3odu2ng5mr0vVvW",
    "ASkaW7O",
    "BCo5iq",
    "h8oWW5C",
    "WQmjWQG",
    "WOKsua",
    "icHM",
    "DxbK",
    "lI4V",
    "su5h",
    "cbik",
    "zLz4",
    "o8krsq",
    "W4NcIZK",
    "W7fowa",
    "B8oCW4q",
    "y29T",
    "zSkwW7W",
    "rKDA",
    "WOn5WO4",
    "hrix",
    "WOpcSmkU",
    "WOjmWRa",
    "i1VcPG",
    "tqqcWOXIg8kJ",
    "vKDo",
    "W4HoW6q",
    "vLnk",
    "z2v0",
    "veHw",
    "xmo+aG",
    "DgfI",
    "W5/dUJK",
    "mte4mduWALbrv0jb",
    "W5muW70",
    "W5ZcGCkr",
    "W5dcOSkZ",
    "W6X4yW",
    "WPKcW5O",
    "WOdcN2u",
    "CdBdSG",
    "D2fY",
    "W5TAW6u",
    "mMNdSG",
    "sw9X",
    "sSowW4m",
    "CcJcHq",
    "dquj",
    "yLfM",
    "CwLi",
    "W4NdPIG",
    "tbJcSG",
    "BwvU",
    "Dwn0",
    "C29S",
    "Duz6",
    "W5ZdGJS",
    "ytNdRW",
    "AxrL",
    "iaWZ",
    "sw5K",
    "y29U",
    "C3rZ",
    "BgvU",
    "nCkdWPNdS8obWPfSECkHW6Cn",
    "W51rsa",
    "zCkhW7e",
    "BgLN",
    "C29U",
    "p0ZdRq",
    "ze9U",
    "CtFdRW",
    "WPpdVmoWW4VdHhr+qqS",
    "v3PA",
    "W4xdLxG",
    "yMLU",
    "zd/dVG",
    "WPLtoq",
    "BtVdGW",
    "B3iO",
    "ExbL",
    "W6ZdS2u",
    "W55mxW",
    "W5XnxG",
    "WR9dcW",
    "WOHzWQe",
    "DNvO",
    "W6v1CG",
    "zw5H",
    "ss/dOG",
    "E30U",
    "W4PRtG",
    "WOj4WPa",
  ];
  g = function () {
    return bK;
  };
  return g();
}
exports.getMention = aa;
exports.mentionMessage = async (k) => (await aa(k))?.["text"];
exports.enableMention = async (p, q, v) => {
  const x = a7(__dirname, "../../media/mention");
  if (a6.existsSync(x)) {
    a6.emptyDirSync(x);
  }
  delete a9[q];
  if ("string" == typeof p) {
    const B = await aa(q);
    v = p;
    p = B?.["enabled"] ?? true;
  }
  const y = {
    session: q,
  };
  const z = {
    where: y,
  };
  const A = await a8.findOne(z);
  return A
    ? await A.update({
        session: q,
        enabled: p,
        text: v || A.dataValues.text,
      })
    : await a8.create({
        enabled: p,
        text: v || "Hi",
        session: q,
      });
};
const ab = {
  type: a4.STRING,
};
function ba(k, m) {
  return j(m + 0x321, k);
}
function bd(k, m) {
  return h(k - 0x15, m);
}
ab.allowNull = false;
ab.unique = "compositeIndex";
const ac = {
  type: a4.STRING,
};
function bf(k, m) {
  return h(k + 0x221, m);
}
function b7(k, m) {
  return j(m + 0x1e3, k);
}
ac.allowNull = false;
ac.defaultValue = "0";
function j(a, b) {
  const c = g();
  j = function (d, e) {
    d = d - 229;
    let f = c[d];
    if (j.Pubmnj === undefined) {
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
      j.pBFdfX = h;
      a = arguments;
      j.Pubmnj = true;
    }
    const i = c[0];
    const k = d + i;
    const l = a[k];
    if (!l) {
      const m = function (n) {
        this.FnsfIj = n;
        this.LhQaon = [1, 0, 0];
        this.FRbiTJ = function () {
          return "newState";
        };
        this.PvkeRJ = "\\w+ *\\(\\) *{\\w+ *";
        this.vmKqRB = "['|\"].+['|\"];? *}";
      };
      m.prototype.vepVez = function () {
        const n = new RegExp(this.PvkeRJ + this.vmKqRB);
        const o = n.test(this.FRbiTJ.toString())
          ? --this.LhQaon[1]
          : --this.LhQaon[0];
        return this.kpyuvq(o);
      };
      m.prototype.kpyuvq = function (n) {
        if (!Boolean(~n)) {
          return n;
        }
        return this.cYWQWq(this.FnsfIj);
      };
      m.prototype.cYWQWq = function (n) {
        let o = 0;
        for (let p = this.LhQaon.length; o < p; o++) {
          this.LhQaon.push(Math.round(Math.random()));
          p = this.LhQaon.length;
        }
        return n(this.LhQaon[0]);
      };
      new m(j).vepVez();
      f = j.pBFdfX(f);
      a[k] = f;
    } else {
      f = l;
    }
    return f;
  };
  return j(a, b);
}
function bb(k, m) {
  return j(m - 0xc4, k);
}
ac.unique = "compositeIndex";
const ad = {
  uid: ab,
};
function bc(k, m) {
  return j(m + 0xbe, k);
}
ad.session = ac;
function b8(k, m) {
  return h(k + 0x2a5, m);
}
function be(k, m) {
  return h(m + 0x226, k);
}
const ae = a5.DATABASE.define("personalMessage", ad);
const af = async (k, m) =>
  !!(await ae.findOne({
    where: {
      uid: k,
      session: m,
    },
  }));
const ag = async (q, v) => {
  const w = {
    uid: q,
    session: v,
  };
  const x = {
    where: w,
  };
  const y = {
    uid: q,
  };
  y.session = v;
  if (!(await ae.findOne(x))) {
    await ae.create(y);
  }
};
function b9(k, m) {
  return j(k - 0x284, m);
}
exports.getPmMessage = af;
exports.setPmMessage = ag;
