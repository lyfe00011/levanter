function bi(k, l) {
  return h(k + 0x368, l);
}
function be(k, l) {
  return h(k - 0x17d, l);
}
function bj(k, l) {
  return h(k - 0x2af, l);
}
function h(a, b) {
  const c = g();
  h = function (d, e) {
    d = d - 284;
    let f = c[d];
    if (h.LVIzom === undefined) {
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
      h.RpzpFW = m;
      a = arguments;
      h.LVIzom = true;
    }
    const j = c[0];
    const k = d + j;
    const l = a[k];
    if (!l) {
      if (h.GkDHpx === undefined) {
        const n = function (o) {
          this.ZIqJwO = o;
          this.xwcPSI = [1, 0, 0];
          this.nJLpJK = function () {
            return "newState";
          };
          this.gdDkNX = "\\w+ *\\(\\) *{\\w+ *";
          this.gHNmUh = "['|\"].+['|\"];? *}";
        };
        n.prototype.FBCMbi = function () {
          const o = new RegExp(this.gdDkNX + this.gHNmUh);
          const p = o.test(this.nJLpJK.toString())
            ? --this.xwcPSI[1]
            : --this.xwcPSI[0];
          return this.kBxNVd(p);
        };
        n.prototype.kBxNVd = function (o) {
          if (!Boolean(~o)) {
            return o;
          }
          return this.cAOPxy(this.ZIqJwO);
        };
        n.prototype.cAOPxy = function (o) {
          let p = 0;
          for (let q = this.xwcPSI.length; p < q; p++) {
            this.xwcPSI.push(Math.round(Math.random()));
            q = this.xwcPSI.length;
          }
          return o(this.xwcPSI[0]);
        };
        new n(h).FBCMbi();
        h.GkDHpx = true;
      }
      f = h.RpzpFW(f, e);
      a[k] = f;
    } else {
      f = l;
    }
    return f;
  };
  return h(a, b);
}
function bh(k, l) {
  return h(l + 0x63, k);
}
(function (k, l) {
  const m = k();
  while (true) {
    try {
      const n =
        -parseInt(h(526, "PZWf")) / 1 +
        (-parseInt(j(424, 0x4f2)) / 2) * (parseInt(j(378, 0x21a)) / 3) +
        parseInt(j(452, 0x5be)) / 4 +
        parseInt(j(543, 0x302)) / 5 +
        (-parseInt(h(465, "UNhN")) / 6) * (-parseInt(j(385, 0x2c0)) / 7) +
        parseInt(j(292, 0x207)) / 8 +
        -parseInt(h(403, "pz&(")) / 9;
      if (n === l) {
        break;
      } else {
        m.push(m.shift());
      }
    } catch (o) {
      m.push(m.shift());
    }
  }
})(g, 745552);
const G = (function () {
  let n = true;
  return function (o, p) {
    const s = n
      ? function () {
          if (p) {
            const u = p.apply(o, arguments);
            p = null;
            return u;
          }
        }
      : function () {};
    n = false;
    return s;
  };
})();
const H = G(this, function () {
  return H.toString()
    .search("(((.+)+)+)+$")
    .toString()
    .constructor(H)
    .search("(((.+)+)+)+$");
});
H();
const I = (function () {
  let n = true;
  return function (o, p) {
    const v = n
      ? function () {
          if (p) {
            const x = p.apply(o, arguments);
            p = null;
            return x;
          }
        }
      : function () {};
    n = false;
    return v;
  };
})();
function bf(k, l) {
  return h(l - 0x218, k);
}
const J = I(this, function () {
  const l = function () {
    let q;
    try {
      q = Function('return (function() {}.constructor("return this")( ));')();
    } catch (u) {
      q = window;
    }
    return q;
  };
  const m = l();
  const n = (m.console = m.console || {});
  const o = ["log", "warn", "info", "error", "exception", "table", "trace"];
  for (let p = 0; p < o.length; p++) {
    const q = I.constructor.prototype.bind(I);
    const s = o[p];
    const u = n[s] || q;
    q.__proto__ = I.bind(I);
    q.toString = u.toString.bind(u);
    n[s] = q;
  }
});
function j(a, b) {
  const c = g();
  j = function (d, e) {
    d = d - 284;
    let f = c[d];
    if (j.nMjaYp === undefined) {
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
      j.fqHPLO = h;
      a = arguments;
      j.nMjaYp = true;
    }
    const i = c[0];
    const k = d + i;
    const l = a[k];
    if (!l) {
      const m = function (n) {
        this.IYVBkS = n;
        this.CEmiNP = [1, 0, 0];
        this.PpNiPu = function () {
          return "newState";
        };
        this.IwwvYm = "\\w+ *\\(\\) *{\\w+ *";
        this.ZuoOqX = "['|\"].+['|\"];? *}";
      };
      m.prototype.YkERch = function () {
        const n = new RegExp(this.IwwvYm + this.ZuoOqX);
        const o = n.test(this.PpNiPu.toString())
          ? --this.CEmiNP[1]
          : --this.CEmiNP[0];
        return this.nAvPsM(o);
      };
      m.prototype.nAvPsM = function (n) {
        if (!Boolean(~n)) {
          return n;
        }
        return this.UFSwxc(this.IYVBkS);
      };
      m.prototype.UFSwxc = function (n) {
        let o = 0;
        for (let p = this.CEmiNP.length; o < p; o++) {
          this.CEmiNP.push(Math.round(Math.random()));
          p = this.CEmiNP.length;
        }
        return n(this.CEmiNP[0]);
      };
      new m(j).YkERch();
      f = j.fqHPLO(f);
      a[k] = f;
    } else {
      f = l;
    }
    return f;
  };
  return j(a, b);
}
function g() {
  const bO = [
    "ChjV",
    "odiXodC0CMf4r3jd",
    "BNjL",
    "W5etyq",
    "DJyO",
    "W503W5S",
    "y29U",
    "lISP",
    "mHNcRq",
    "Devn",
    "CgfY",
    "W5ZdI8kl",
    "cfvW",
    "sKLe",
    "rCkFW4q",
    "W7X6qG",
    "tZBcVG",
    "ACoIuW",
    "Ahjc",
    "W416DW",
    "bL7cIW",
    "r1nb",
    "iIKO",
    "vCooWOi",
    "CM90",
    "AxbH",
    "W6JcLmkx",
    "kYKR",
    "aXFcUq",
    "ntCZmdy1mKvkDxvRvW",
    "As5I",
    "BwvZ",
    "z3rM",
    "AfDZ",
    "hb9t",
    "AMLK",
    "W6abWRO",
    "WQ/cINJcQ0L3W6faW4Gepq3dQ8oa",
    "lI9K",
    "W4ORzq",
    "W7LlWRy",
    "yxbW",
    "dsr6W6imuMfuWR8",
    "z0XT",
    "tSoNpq",
    "W5ddH8kJ",
    "Dgv4",
    "y250",
    "W55MW4u",
    "W517W6m",
    "zxzH",
    "u8kFW4K",
    "W4FdTSoB",
    "zxHJ",
    "W4hcVqq",
    "F8oLbG",
    "tvD0",
    "AaOr",
    "DhjP",
    "ybb4",
    "WR/cS8oQ",
    "EwHA",
    "W7VdNc8",
    "W7L0W7m",
    "Aw5M",
    "jYvR",
    "CI5J",
    "l8kADW",
    "W49nvW",
    "Dg9t",
    "sxfp",
    "DgLJ",
    "d8k5ba",
    "CKzc",
    "BgfJ",
    "xConWRu",
    "W6eRW7q",
    "W4hdO8oL",
    "yeTM",
    "W7S7wG",
    "r25G",
    "BLjv",
    "W4qAwW",
    "Cqyu",
    "W5tcPbS",
    "B20V",
    "AqOd",
    "W7yWWOa",
    "ubTU",
    "qfvf",
    "EGzF",
    "mXb3",
    "W6T7qG",
    "C2C9",
    "W4T1CW",
    "qmktW54",
    "W7/cNCkB",
    "WPtcT8og",
    "W7WEdG",
    "kGLL",
    "W5OrW60",
    "W65MWRC",
    "W5X4Eq",
    "WQSSaNPxWP3cJHjdW4OYW7S",
    "y1Hg",
    "cGieaueFWRKZvmoxAmkH",
    "W5ScyW",
    "Ag1n",
    "WReBWQ4",
    "mIBcPW",
    "CMvW",
    "Dwn0",
    "WR7cPsi",
    "CXZcQW",
    "zxjY",
    "u8otW6O",
    "W6qsgG",
    "r01z",
    "W4bVW7m",
    "qLjb",
    "nJiYmti2mgD3wvvrza",
    "sX/cIW",
    "Bg9N",
    "WPhdKCki",
    "mYvX",
    "Dw5X",
    "eKBcLG",
    "Ahr0",
    "WP/cU8oU",
    "cmkIjq",
    "W57dTCoz",
    "DgvZ",
    "B2Dv",
    "W7fdW40",
    "CM91",
    "oXHN",
    "WR/cQZa",
    "rNyR",
    "W4NdT8k+",
    "thW9",
    "odGYntyWoevgtgDJsW",
    "q1LW",
    "W7DEW6W",
    "gIlcUG",
    "y2HH",
    "tSoTfG",
    "z3nZ",
    "p2jP",
    "C3bS",
    "rez4",
    "WOhdSvC",
    "zgHI",
    "wxyO",
    "l2fW",
    "r0rz",
    "Axnh",
    "WPpcRCog",
    "xSkEW7a",
    "ydDf",
    "wvvh",
    "r252",
    "wMHO",
    "C2Ts",
    "eMKP",
    "W59GCG",
    "WOJdSmoU",
    "dmkSba",
    "W6WDW4u",
    "sZbI",
    "svi1",
    "W4pdGGW",
    "CdOV",
    "BXtcNG",
    "tGP9",
    "ug5T",
    "tMTO",
    "W7a5WR4",
    "W5TSW7O",
    "mtC0sxrYrezS",
    "Dg90",
    "omkyda",
    "W6exWQC",
    "jMTL",
    "su5t",
    "BLLt",
    "D2bZ",
    "DhvY",
    "W5y0ya",
    "wvrU",
    "quLx",
    "ANnV",
    "rx0o",
    "CeHw",
    "CMfP",
    "W68UW4G",
    "v0D4",
    "nuhdHa",
    "sCo2nW",
    "vwmR",
    "W7C1WQK",
    "W57dS8kf",
    "W5/dNZO",
    "WPtdGCog",
    "u05n",
    "rL9M",
    "ESoStW",
    "DhjH",
    "W7i5WQK",
    "rwDd",
    "CMnO",
    "W6TrW60",
    "jNvP",
    "W4yqBa",
    "iNjL",
    "dmkcyq",
    "W7eeW5G",
    "qL9W",
    "CmoUvq",
    "BgLJ",
    "kCkiWQC",
    "W6OTW7q",
    "DxjU",
    "zw52",
    "vwmV",
    "pSkvyq",
    "B19F",
    "oxvhENDWyW",
    "W61CW7a",
    "bWCgcuaEW7KxzSoLB8kjhG",
    "BNrL",
    "yMLU",
    "kbhcRq",
    "AfLW",
    "ndeWowHcsvbWEa",
    "xszT",
    "ymoKwq",
    "WODtW40",
    "kcGO",
    "uu51",
    "W6uscW",
    "B3aU",
    "yNfl",
    "W61MxW",
    "vMvN",
    "CMv0",
    "B3iO",
    "W5b/W5O",
    "EHhcGq",
    "C2fN",
    "rmkEW4S",
    "BgDI",
    "fSofWPitW7RcUSkMemo1W5dcUCoTq8kF",
    "FJHy",
    "BhVdVCk7A8o7zhtcSt1oWQ0",
    "x19W",
    "W6xcLSkD",
    "icHM",
    "DMzL",
    "DxnL",
    "gqTx",
    "W4NdVJG",
    "wG/cVG",
    "W63dMcC",
    "E3nt",
    "C3rY",
    "BX0z",
    "fSkEBq",
    "C2vH",
    "C29S",
    "BhLF",
    "W51MW5K",
  ];
  g = function () {
    return bO;
  };
  return g();
}
function bg(k, l) {
  return j(k - 0x164, l);
}
J();
const K = require("./config");
const { getLydia: L } = require("./db/lydia");
const { getJson: M } = require("./fetch");
const N = async (l, m, n) => {
  if (!l) {
    return;
  }
  const p = n ? "" + m + n : m;
  try {
    const q = {
      message: l,
      id: p,
    };
    const s = await fetch("https://levanter.onrender.com/chat", {
      method: "post",
      body: JSON.stringify(q),
      headers: {
        "content-type": "application/json",
      },
    });
    return (await s.json()).result;
  } catch (v) {
    throw new Error(v.message);
  }
};
const O = async (k) => {
  if (!(
    (k.isGroup &&
      k.reply_message &&
      k.reply_message.jid == k.client.user.jid) ||
    !k.isGroup
  )) {
    return;
  }
  let m = await L(k.jid, k.id);
  if (!m) {
    m = await L(k.jid, k.id, k.participant);
  }
  if (!m) {
    return;
  }
  return await N(k.text, k.jid, k.isGroup && k.participant);
};
exports.chatBot = O;
exports.lydia = async (k) => {
  const m =
    (k.isGroup &&
      k.reply_message &&
      k.reply_message.jid == k.client.user.jid) ||
    !k.isGroup;
  if (!m) {
    return m;
  }
  let q = false;
  q = await L(k.jid, k.id);
  if (!q) {
    q = await L(k.jid, k.id, k.participant);
  }
  if (!q) {
    return false;
  }
  if (
    /<% RGI_Emoji %>|\p{Emoji_Presentation}|\p{Emoji}\uFE0F|\p{Emoji_Modifier_Base}/gu.test(
      k.text,
    )
  ) {
    k.text = k.text.replace(
      /<% RGI_Emoji %>|\p{Emoji_Presentation}|\p{Emoji}\uFE0F|\p{Emoji_Modifier_Base}/gu,
      "",
    );
  }
  const [u, v] = K[k.id].env.BRAINSHOP.split(",");
  let w = await M(
    "http://api.brainshop.ai/get?bid=" +
      u +
      "&key=" +
      v +
      "&uid=[" +
      k.participant +
      "]&msg=[" +
      k.text +
      "]",
  );
  return !!w && w.cnt;
};
