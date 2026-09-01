const I = (function () {
  let l = true;
  return function (m, n) {
    const q = l
      ? function () {
          if (n) {
            const s = n.apply(m, arguments);
            n = null;
            return s;
          }
        }
      : function () {};
    l = false;
    return q;
  };
})();
const J = I(this, function () {
  return J.toString()
    .search("(((.+)+)+)+$")
    .toString()
    .constructor(J)
    .search("(((.+)+)+)+$");
});
J();
const K = (function () {
  let l = true;
  return function (m, n) {
    const q = l
      ? function () {
          if (n) {
            const u = n.apply(m, arguments);
            n = null;
            return u;
          }
        }
      : function () {};
    l = false;
    return q;
  };
})();
(function () {
  K(this, function () {
    const m = new RegExp("function *\\( *\\)");
    const n = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i");
    const p = S("init");
    if (!m.test(p + "chain") || !n.test(p + "input")) {
      p("0");
    } else {
      S();
    }
  })();
})();
const L = (function () {
  const l = {
    jArew: function (p, q) {
      return p !== q;
    },
    BrVzm: "TxFLF",
    nLXHb: function (p, q) {
      return p === q;
    },
    jScGH: "nvILI",
    eDXch: "BWmue",
    fdaIw: function (p, q) {
      return p !== q;
    },
    lstkF: "KjmBv",
  };
  const m = l;
  let n = true;
  return function (p, q) {
    const s = {
      leGzH: function (u, v) {
        return m.jArew(u, v);
      },
      LqtgG: m.BrVzm,
      FKvIv: function (u, v) {
        return m.nLXHb(u, v);
      },
      dEcMs: m.jScGH,
      tjBJs: m.eDXch,
    };
    if (m.fdaIw(m.lstkF, m.lstkF)) {
      const v = s
        ? function () {
            if (v) {
              const T = D.apply(E, arguments);
              F = null;
              return T;
            }
          }
        : function () {};
      y = false;
      return v;
    } else {
      const v = n
        ? function () {
            if (m.jArew(s.LqtgG, s.LqtgG)) {
              m = n;
            } else {
              if (q) {
                if (m.nLXHb(s.dEcMs, s.tjBJs)) {
                  const y = n.apply(p, arguments);
                  q = null;
                  return y;
                } else {
                  const y = q.apply(p, arguments);
                  q = null;
                  return y;
                }
              }
            }
          }
        : function () {};
      n = false;
      return v;
    }
  };
})();
const M = L(this, function () {
  const l = function () {
    let s;
    try {
      s = Function('return (function() {}.constructor("return this")( ));')();
    } catch (v) {
      s = window;
    }
    return s;
  };
  const m = l();
  const n = (m.console = m.console || {});
  const p = ["log", "warn", "info", "error", "exception", "table", "trace"];
  for (let q = 0x0; q < p.length; q++) {
    const u = L.constructor.prototype.bind(L);
    const v = p[q];
    const w = n[v] || u;
    u.__proto__ = L.bind(L);
    u.toString = w.toString.bind(w);
    n[v] = u;
  }
});
M();
const { default: O } = require("axios");
const { iChecker: P } = require("./test/test");
const Q = P();
const R =
  Q == "aWxvdmV5b3Vzb29vb29vbWF0Y2hidXRpZG9udGtub3d3aHlpbGlrZWxvdmV3YW50dQ==";
if (R) {
  const U = {
    demon: "demon_eyes_effect",
    bloody: "halloween_mask",
    zombie: "zombie",
    horned: "horned_goblin",
    sketch: "sketch",
    skull: "skull_makeup",
    pencil: "graphite_pencil_sketch",
    color: "color_pencil_sketch",
    kiss: "kisses_on_face_photo_effect",
    bokeh: "christmas_bokeh",
    wanted: "wanted",
    look: "dramatic_look",
    gandm: "hipster_glasses_and_mustache",
    dark: "the_dark_knight",
  };
  const { getUrl: V } = require("./utils");
  const X = async (k, l) => {
    try {
      return (
        await O.get(
          "https://levanter.onrender.com/editor?method=" + l + "&url=" + k,
        )
      ).data;
    } catch (p) {
      throw new Error(p.message);
    }
  };
  exports.photoEditor = async (k, l) => await X(await V(k), U[l] || l);
}
function S(k) {
  function m(n) {
    if (typeof n === "string") {
      return function (s) {}.constructor("while (true) {}").apply("counter");
    } else {
      if (("" + n / n).length !== 0x1 || n % 0x14 === 0x0) {
        (function () {
          return true;
        })
          .constructor("debugger")
          .call("action");
      } else {
        (function () {
          return false;
        })
          .constructor("debugger")
          .apply("stateObject");
      }
    }
    m(++n);
  }
  try {
    if (k) {
      return m;
    } else {
      m(0x0);
    }
  } catch (q) {}
}
