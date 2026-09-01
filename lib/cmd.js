const a0 = (function () {
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
const a1 = a0(this, function () {
  return a1
    .toString()
    .search("(((.+)+)+)+$")
    .toString()
    .constructor(a1)
    .search("(((.+)+)+)+$");
});
a1();
const a2 = (function () {
  let k = true;
  return function (l, n) {
    const q = k
      ? function () {
          if (n) {
            const v = n.apply(l, arguments);
            n = null;
            return v;
          }
        }
      : function () {};
    k = false;
    return q;
  };
})();
const a3 = a2(this, function () {
  let k;
  try {
    const o = Function('return (function() {}.constructor("return this")( ));');
    k = o();
  } catch (q) {
    k = window;
  }
  const l = (k.console = k.console || {});
  const n = ["log", "warn", "info", "error", "exception", "table", "trace"];
  for (let v = 0x0; v < n.length; v++) {
    const w = a2.constructor.prototype.bind(a2);
    const x = n[v];
    const y = l[x] || w;
    w.__proto__ = a2.bind(a2);
    w.toString = y.toString.bind(y);
    l[x] = w;
  }
});
a3();
const { setDb: a4, getDb: a5 } = require("./db/store");
const a6 = require("./config");
const { iChecker: a8 } = require("./test/test");
const a9 = a8();
const aa =
  a9 == "aWxvdmV5b3Vzb29vb29vbWF0Y2hidXRpZG9udGtub3d3aHlpbGlrZWxvdmV3YW50dQ==";
const ab = {
  manufacturer: "Xiaomi",
  model: "POCO F1",
};
const ac = {
  manufacturer: "Xiaomi",
  model: "Redmi 9A",
};
const ad = {
  manufacturer: "Xiaomi",
  model: "Xiaomi Mi 4",
};
const ae = {
  manufacturer: "Vivo",
  model: "Vivo Y20T",
};
const af = {
  manufacturer: "OnePlus",
  model: "OnePlus 8T",
};
const ag = {
  manufacturer: "Realme",
  model: "Realme 8 5G",
};
const ah = {
  manufacturer: "Samsung",
  model: "Samsung Galaxy M51",
};
if (aa) {
  exports.setCmd = async (j, { message: k, type: l }, n) => {
    const { fileSha256: p } = k.message[l];
    const q = p?.["toString"]("base64");
    if (!q) {
      return -0x1;
    }
    a6[n].db.cmd = {
      ...a6[n].db.cmd,
      [q]: j,
    };
    await a4(n);
  };
  exports.getCmd = async (j) => {
    await a5(j);
    const l = [];
    for (const n in a6[j].db.cmd) l.push(a6[j].db.cmd[n]);
    return l;
  };
  exports.delCmd = async (j, k) => {
    if ("string" == typeof j) {
      const n = Object.keys(a6[k].db.cmd).filter((o) => a6[k].db.cmd[o] === j);
      if (!n.length) {
        return -0x1;
      }
      n.forEach((o) => delete a6[k].db.cmd[o]);
    } else {
      const p =
        j?.["message"]?.["message"]?.[j.type]?.["fileSha256"]?.["toString"](
          "base64",
        );
      if (!p) {
        return -0x1;
      }
      delete a6[k].db.cmd[p];
    }
    await a4(k);
  };
}
exports.phonesList = [ab, ac, ad, ae, af, ag, ah];
