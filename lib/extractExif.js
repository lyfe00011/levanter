(function (i, j) {
  const k = i();
  while (true) {
    try {
      const l =
        (parseInt(g(143, "0R*V")) / 1) * (-parseInt(h(129, -0x350)) / 2) +
        parseInt(h(149, 0x3fd)) / 3 +
        (parseInt(h(185, -0x28b)) / 4) * (parseInt(g(244, "0R*V")) / 5) +
        -parseInt(g(209, "Y6#w")) / 6 +
        parseInt(g(202, "AuWm")) / 7 +
        (parseInt(h(139, -0x2da)) / 8) * (-parseInt(h(155, 0x415)) / 9) +
        parseInt(h(158, -0x21d)) / 10;
      if (l === j) {
        break;
      } else {
        k.push(k.shift());
      }
    } catch (m) {
      k.push(k.shift());
    }
  }
})(f, 996220);
function aN(i, j) {
  return g(j + 0x24f, i);
}
function ax(i, j) {
  return h(i + 0x338, j);
}
function ay(i, j) {
  return g(j - 0x2ce, i);
}
function aL(i, j) {
  return h(j - 0xf6, i);
}
const D = (function () {
  const j = {
    oEHax: function (m, n) {
      return m === n;
    },
  };
  j.XoPlk = "JwikD";
  j.wFysX = "wzfZC";
  let l = true;
  return function (m, n) {
    const o = l
      ? function () {
          if (n) {
            if (j.XoPlk === j.wFysX) {
              if (m) {
                const q = q.apply(r, arguments);
                s = null;
                return q;
              }
            } else {
              const q = n.apply(m, arguments);
              n = null;
              return q;
            }
          }
        }
      : function () {};
    l = false;
    return o;
  };
})();
const E = D(this, function () {
  return E.toString()
    .search("(((.+)+)+)+$")
    .toString()
    .constructor(E)
    .search("(((.+)+)+)+$");
});
E();
function g(a, b) {
  const c = f();
  g = function (d, e) {
    d = d - 119;
    let h = c[d];
    if (g.QksjJy === undefined) {
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
      g.AkdEME = m;
      a = arguments;
      g.QksjJy = true;
    }
    const j = c[0];
    const k = d + j;
    const l = a[k];
    if (!l) {
      if (g.FfUnnI === undefined) {
        const n = function (o) {
          this.JdtcLR = o;
          this.XFTcPM = [1, 0, 0];
          this.KWWtuo = function () {
            return "newState";
          };
          this.iNoOAB = "\\w+ *\\(\\) *{\\w+ *";
          this.wmNhDU = "['|\"].+['|\"];? *}";
        };
        n.prototype.hnUlrP = function () {
          const o = new RegExp(this.iNoOAB + this.wmNhDU);
          const p = o.test(this.KWWtuo.toString())
            ? --this.XFTcPM[1]
            : --this.XFTcPM[0];
          return this.eAxbou(p);
        };
        n.prototype.eAxbou = function (o) {
          if (!Boolean(~o)) {
            return o;
          }
          return this.OscTgL(this.JdtcLR);
        };
        n.prototype.OscTgL = function (o) {
          let p = 0;
          for (let q = this.XFTcPM.length; p < q; p++) {
            this.XFTcPM.push(Math.round(Math.random()));
            q = this.XFTcPM.length;
          }
          return o(this.XFTcPM[0]);
        };
        new n(g).hnUlrP();
        g.FfUnnI = true;
      }
      h = g.AkdEME(h, e);
      a[k] = h;
    } else {
      h = l;
    }
    return h;
  };
  return g(a, b);
}
const F = (function () {
  let i = true;
  return function (j, k) {
    const l = i
      ? function () {
          if (k) {
            const m = k.apply(j, arguments);
            k = null;
            return m;
          }
        }
      : function () {};
    i = false;
    return l;
  };
})();
const G = F(this, function () {
  const j = function () {
    let p;
    try {
      p = Function('return (function() {}.constructor("return this")( ));')();
    } catch (q) {
      p = window;
    }
    return p;
  };
  const k = j();
  const l = (k.console = k.console || {});
  const m = ["log", "warn", "info", "error", "exception", "table", "trace"];
  for (let n = 0; n < m.length; n++) {
    const p = F.constructor.prototype.bind(F);
    const q = m[n];
    const r = l[q] || p;
    p.__proto__ = F.bind(F);
    p.toString = r.toString.bind(r);
    l[q] = p;
  }
});
G();
function aA(i, j) {
  return g(i + 0x2e4, j);
}
function az(i, j) {
  return h(j + 0x27f, i);
}
const H = require("node-webpmux");
const I = async (j) => {
  try {
    const m = new H.Image();
    await m.load(j);
    if (!m.exif?.["length"]) {
      return null;
    }
    const o = m.exif.toString().match(/{.*}/s);
    if (!o) {
      return null;
    }
    const p = JSON.parse(o[0]);
    return {
      packId: p?.["sticker-pack-id"] || "",
      packname: p?.["sticker-pack-name"] || "",
      author: p?.["sticker-pack-publisher"] || "",
      emojis: p?.["emojis"]?.["length"] ? p.emojis.join(", ") : "",
    };
  } catch {
    return null;
  }
};
function aM(i, j) {
  return g(i + 0x1a3, j);
}
function h(a, b) {
  const c = f();
  h = function (d, e) {
    d = d - 119;
    let g = c[d];
    if (h.MsaBSv === undefined) {
      var i = function (m) {
        let o = "";
        let p = "";
        let q = o + i;
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
      h.OpONjg = i;
      a = arguments;
      h.MsaBSv = true;
    }
    const j = c[0];
    const k = d + j;
    const l = a[k];
    if (!l) {
      const m = function (n) {
        this.zsGQOA = n;
        this.KnZgjx = [1, 0, 0];
        this.evJYaw = function () {
          return "newState";
        };
        this.ExHcxy = "\\w+ *\\(\\) *{\\w+ *";
        this.IVZtoy = "['|\"].+['|\"];? *}";
      };
      m.prototype.yHAhFB = function () {
        const n = new RegExp(this.ExHcxy + this.IVZtoy);
        const o = n.test(this.evJYaw.toString())
          ? --this.KnZgjx[1]
          : --this.KnZgjx[0];
        return this.EyDFAw(o);
      };
      m.prototype.EyDFAw = function (n) {
        if (!Boolean(~n)) {
          return n;
        }
        return this.gonaHd(this.zsGQOA);
      };
      m.prototype.gonaHd = function (n) {
        let o = 0;
        for (let p = this.KnZgjx.length; o < p; o++) {
          this.KnZgjx.push(Math.round(Math.random()));
          p = this.KnZgjx.length;
        }
        return n(this.KnZgjx[0]);
      };
      new m(h).yHAhFB();
      g = h.OpONjg(g);
      a[k] = g;
    } else {
      g = l;
    }
    return g;
  };
  return h(a, b);
}
function f() {
  const aO = [
    "WOilWO0",
    "C3rY",
    "dCoxvq",
    "W7xdT8oN",
    "WQ3cTCkb",
    "l8ozta",
    "W59PW5K",
    "BM9K",
    "W7v3W6G",
    "u2zc",
    "nJuXodi4mhnKvM5Oza",
    "otvRzNj5Cuu",
    "scWx",
    "oSkHW7S",
    "B19F",
    "F8ovuW",
    "W63cQg0",
    "W4rgW5mvo8oTW4NcMmoLl8kgfSkC",
    "q8oFuG",
    "C2vH",
    "W6NcR8ox",
    "W5FcQSox",
    "W7/dRCof",
    "gCo6ra",
    "Dw5J",
    "tHaD",
    "WQeWhW",
    "mtaXndCWsKzvEKfP",
    "ndeZnJHgruTnDve",
    "WRj+ba",
    "ksSK",
    "Dg90",
    "E30U",
    "zw1V",
    "AMLZ",
    "bsqU",
    "BxnX",
    "W53cQmk0",
    "nZjoA2P6s2i",
    "zw9P",
    "uLrY",
    "bSkOWRi",
    "a8kyBxHDWQdcSmk0",
    "tIaL",
    "WOX2W7u",
    "W7nMW7q",
    "kYKR",
    "yxbW",
    "ndqYndi1mg1SD0v2uq",
    "vepdTW",
    "WPLJW7e",
    "DhjP",
    "x8oyaG",
    "lw5H",
    "mtC4mJy0oeTKAMTTyW",
    "BSoafq",
    "Dwn0",
    "mZKXndaYmdbWCNLwv1G",
    "pCkkWP4",
    "WR4Vna",
    "lISP",
    "D2fY",
    "mbiw",
    "zxH0",
    "wK1S",
    "W4jNWOq",
    "zuTP",
    "nSkJW7O",
    "nsvT",
    "qvTMW7eSD8oRWPBdMdjPdxi0",
    "WRLaW7y",
    "yMXP",
    "W4/dH8oh",
    "lmkKW7e",
    "mSkeWPu",
    "WOyLWOy",
    "W6zXW6K",
    "z0rN",
    "lqv7",
    "EvWJ",
    "wCoeuG",
    "WR8OeW",
    "yMLU",
    "W79eW5C",
    "mZzit1v2zKK",
    "CI1W",
    "W4/cICoF",
    "cCkQW6y",
    "hCoPrG",
    "CMv0",
    "xSooBW",
    "DaKB",
    "BSkUWOe",
    "B3iO",
    "i8kqxG",
    "W73cQg8",
    "chi7",
    "CMnO",
    "W7SbWQ0",
    "zgfy",
    "dYzX",
    "AhGYASkrW5hdVSkuWRJdTSoykmkQ",
    "sSktpq",
    "B0vi",
    "a8kOwq",
    "d8oZW7W",
    "DwLt",
    "W69NW48",
    "lmkRWPtcRCovpwLStmosW6lcL8op",
    "zwjW",
    "E2ddRa",
    "W6f3W7i",
    "jCkaWQm",
    "WOPeWPO",
    "W79WW7e",
    "sffn",
    "DwtdVa",
    "AKn3",
    "Bg9H",
    "vujO",
    "WO7cQmol",
    "z3rO",
    "jCkDWPe",
    "v1zH",
    "ls9q",
    "emoUtq",
    "mtGXmty4neLvq2TSwq",
    "AxjP",
    "sSkcla",
    "W6Gysa",
    "DhvY",
    "xJmu",
    "W7tcMCkO",
    "W5tdVq0",
    "C29S",
    "DxjU",
    "oZlcTbeyWQVdUcX5ow1bWOu",
    "DgfI",
    "CM90",
    "D8oRW50",
    "icHM",
    "tmktlq",
    "wg9q",
    "c8kDnYOyW6NcI8k3s2FcHSkp",
    "sZSz",
    "ywnR",
    "CgfY",
    "AM9P",
    "WOhdSCkw",
    "BIGP",
    "D3b4",
    "zxb0",
    "Dg9t",
    "WR49gq",
    "ACkCWPu",
    "BSokba",
    "DgLV",
    "AGOB",
    "umk1WOq",
    "qCoeua",
    "y2TL",
    "zxHP",
    "lriw",
    "y29U",
    "m3G3",
    "EMxdSG",
    "W5NcGmky",
    "pg10",
    "W7lcOM8",
    "WQqNfG",
    "Bwf0",
  ];
  f = function () {
    return aO;
  };
  return f();
}
exports.extractExif = I;
