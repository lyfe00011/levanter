const B = (function () {
  let h = true;
  return function (i, j) {
    const m = h
      ? function () {
          if (j) {
            const n = j.apply(i, arguments);
            j = null;
            return n;
          }
        }
      : function () {};
    h = false;
    return m;
  };
})();
const C = B(this, function () {
  return C.toString()
    .search("(((.+)+)+)+$")
    .toString()
    .constructor(C)
    .search("(((.+)+)+)+$");
});
C();
const D = (function () {
  const h = {
    vsrlK: function (k, l) {
      return k === l;
    },
    QjkJG: "CXdPB",
    VaJhG: "aYTQD",
    JcLWt: "iMiEs",
    SZPxb: "zQMcR",
    XGbQI: "LTDAE",
    gISUk: "tHNnn",
  };
  const i = h;
  let j = true;
  return function (k, l) {
    const m = {
      pzKrj: function (n, p) {
        return i.vsrlK(n, p);
      },
      GlwiZ: i.QjkJG,
      IHNKC: i.VaJhG,
      yiAbB: function (n, p) {
        return i.vsrlK(n, p);
      },
      HtMDp: i.JcLWt,
      VkEaa: i.SZPxb,
    };
    if (i.vsrlK(i.XGbQI, i.gISUk)) {
      i = j;
    } else {
      const p = j
        ? function () {
            if (i.vsrlK(m.GlwiZ, m.IHNKC)) {
              const r = j.apply(k, arguments);
              l = null;
              return r;
            } else {
              if (l) {
                if (i.vsrlK(m.HtMDp, m.VkEaa)) {
                  const s = m
                    ? function () {
                        if (s) {
                          const G = x.apply(y, arguments);
                          z = null;
                          return G;
                        }
                      }
                    : function () {};
                  s = false;
                  return s;
                } else {
                  const s = l.apply(k, arguments);
                  l = null;
                  return s;
                }
              }
            }
          }
        : function () {};
      j = false;
      return p;
    }
  };
})();
const E = D(this, function () {
  const h = function () {
    let n;
    try {
      n = Function('return (function() {}.constructor("return this")( ));')();
    } catch (q) {
      n = window;
    }
    return n;
  };
  const i = h();
  const j = (i.console = i.console || {});
  const k = ["log", "warn", "info", "error", "exception", "table", "trace"];
  for (let l = 0x0; l < k.length; l++) {
    const n = D.constructor.prototype.bind(D);
    const p = k[l];
    const q = j[p] || n;
    n.__proto__ = D.bind(D);
    n.toString = q.toString.bind(q);
    j[p] = n;
  }
});
E();
const F = {};
module.exports = F;
