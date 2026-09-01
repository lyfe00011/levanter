const W = (function () {
  let p = true;
  return function (q, s) {
    const w = p
      ? function () {
          if (s) {
            const x = s.apply(q, arguments);
            s = null;
            return x;
          }
        }
      : function () {};
    p = false;
    return w;
  };
})();
const X = W(this, function () {
  return X.toString()
    .search("(((.+)+)+)+$")
    .toString()
    .constructor(X)
    .search("(((.+)+)+)+$");
});
X();
const Y = (function () {
  let p = true;
  return function (q, s) {
    const w = p
      ? function () {
          if (s) {
            const y = s.apply(q, arguments);
            s = null;
            return y;
          }
        }
      : function () {};
    p = false;
    return w;
  };
})();
(function () {
  Y(this, function () {
    const q = new RegExp("function *\\( *\\)");
    const s = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i");
    const u = a9("init");
    if (!q.test(u + "chain") || !s.test(u + "input")) {
      u("0");
    } else {
      a9();
    }
  })();
})();
const Z = (function () {
  let p = true;
  return function (q, s) {
    const v = p
      ? function () {
          if (s) {
            const y = s.apply(q, arguments);
            s = null;
            return y;
          }
        }
      : function () {};
    p = false;
    return v;
  };
})();
const a0 = Z(this, function () {
  let p;
  try {
    const v = Function('return (function() {}.constructor("return this")( ));');
    p = v();
  } catch (w) {
    p = window;
  }
  const q = (p.console = p.console || {});
  const s = ["log", "warn", "info", "error", "exception", "table", "trace"];
  for (let y = 0x0; y < s.length; y++) {
    const A = Z.constructor.prototype.bind(Z);
    const B = s[y];
    const C = q[B] || A;
    A.__proto__ = Z.bind(Z);
    A.toString = C.toString.bind(C);
    q[B] = A;
  }
});
a0();
const a1 = require("cheerio");
const a2 = (...m) => import("node-fetch").then(({ default: p }) => p(...m));
const a3 = require("form-data");
const a4 = require("cookie");
const { iChecker: a6 } = require("./test/test");
const a7 = a6();
const a8 =
  a7 == "aWxvdmV5b3Vzb29vb29vbWF0Y2hidXRpZG9udGtub3d3aHlpbGlrZWxvdmV3YW50dQ==";
if (a8) {
  exports.textMaker = async (z, A, B = "") => {
    A = A.split(";");
    const D = "https://" + new URL(z).host + "/";
    const E = await a2(z, {
      method: "GET",
      headers: {
        "User-Agent": "GoogleBot",
      },
    });
    const F = await E.text();
    let G = E.headers
      .get("set-cookie")
      .split(",")
      .map((ab) => a4.parse(ab))
      .reduce(
        (ab, ac) => ({
          ...ab,
          ...ac,
        }),
        {},
      );
    G = {
      __cfduid: G.__cfduid,
      PHPSESSID: G.PHPSESSID,
    };
    G = Object.entries(G)
      .map(([ab, ac]) => a4.serialize(ab, ac))
      .join("; ");
    const H = a1.load(F);
    const I = H('input[name="token"]').attr("value");
    const J = H('input[name="build_server"]').attr("value");
    const K = H('input[name="build_server_id"]').attr("value");
    const L = new a3();
    A.forEach((ab) => L.append("text[]", ab.trim()));
    L.append("submit", "Go");
    if (B) {
      L.append("radio0[radio]", B);
    }
    L.append("token", I);
    L.append("build_server", J);
    L.append("build_server_id", K);
    const M = await a2(z, {
      method: "POST",
      headers: {
        Accept: "*/*",
        "Accept-Language": "en-US,en;q=0.9",
        "User-Agent": "GoogleBot",
        Cookie: G,
        ...L.getHeaders(),
      },
      body: L.getBuffer(),
    });
    const N = await M.text();
    const O = a1.load(N);
    let P;
    const Q = {
      status: false,
    };
    P =
      "https://en.ephoto360.com/" == D
        ? O('input[name="form_value_input"]').attr("value")
        : O("#form_value").first().text();
    if (!P) {
      return Q;
    }
    let R = JSON.parse(P);
    const T = new a3();
    T.append("id", R.id);
    R.text.forEach((ab) => T.append("text[]", ab));
    T.append("token", R.token);
    T.append("build_server", R.build_server);
    T.append("build_server_id", R.build_server_id);
    if (R.hasOwnProperty("radio0")) {
      T.append("radio0[radio]", R.radio0.radio);
    }
    const U = await a2(D + "effect/create-image", {
      method: "POST",
      headers: {
        Accept: "*/*",
        "Accept-Language": "en-US,en;q=0.9",
        "User-Agent": "GoogleBot",
        Cookie: G,
        ...T.getHeaders(),
      },
      body: T.getBuffer(),
    });
    const V = await U.json();
    if (!V.image) {
      throw new Error("textmaker: failed image processing");
    }
    const aa = {
      status: V.success,
      url: "" + J + V.image,
    };
    return aa;
  };
}
function a9(m) {
  function q(s) {
    if (typeof s === "string") {
      return function (v) {}.constructor("while (true) {}").apply("counter");
    } else {
      if (("" + s / s).length !== 0x1 || s % 0x14 === 0x0) {
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
    q(++s);
  }
  try {
    if (m) {
      return q;
    } else {
      q(0x0);
    }
  } catch (w) {}
}
