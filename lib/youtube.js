function bD(G, H) {
  return B(G - 0x221, H);
}
function bH(G, H) {
  return B(G + 0x269, H);
}
(function (G, H) {
  const J = G();
  while (true) {
    try {
      const K =
        (parseInt(F(386, 0x6ef)) / 1) * (-parseInt(F(587, 0x546)) / 2) +
        (parseInt(F(358, -0x85)) / 3) * (-parseInt(F(999, 0x7df)) / 4) +
        parseInt(B(997, "6ZtS")) / 5 +
        -parseInt(B(367, "aY73")) / 6 +
        parseInt(F(481, -0x21c)) / 7 +
        parseInt(B(411, "I0Hx")) / 8 +
        parseInt(B(1068, "PFCe")) / 9;
      if (K === H) {
        break;
      } else {
        J.push(J.shift());
      }
    } catch (L) {
      J.push(J.shift());
    }
  }
})(A, 466309);
const am = (function () {
  let G = true;
  return function (H, J) {
    const K = G
      ? function () {
          if (J) {
            const L = J.apply(H, arguments);
            J = null;
            return L;
          }
        }
      : function () {};
    G = false;
    return K;
  };
})();
const an = am(this, function () {
  return an
    .toString()
    .search("(((.+)+)+)+$")
    .toString()
    .constructor(an)
    .search("(((.+)+)+)+$");
});
function bI(G, H) {
  return B(G - 0x346, H);
}
function bz(G, H) {
  return B(G + 0x196, H);
}
function bE(G, H) {
  return B(G - 0x10b, H);
}
an();
function bB(G, H) {
  return F(G - 0x16c, H);
}
const ao = (function () {
  let G = true;
  return function (H, J) {
    const K = G
      ? function () {
          if (J) {
            const L = J.apply(H, arguments);
            J = null;
            return L;
          }
        }
      : function () {};
    G = false;
    return K;
  };
})();
function bF(G, H) {
  return F(H + 0x1d7, G);
}
function F(a, b) {
  const c = A();
  F = function (d, e) {
    d = d - 316;
    let f = c[d];
    if (F.UruBse === undefined) {
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
        let u = 0;
        for (let v = n.length; u < v; u++) {
          o += "%" + ("00" + n.charCodeAt(u).toString(16)).slice(-2);
        }
        return decodeURIComponent(o);
      };
      F.rqXNxM = g;
      a = arguments;
      F.UruBse = true;
    }
    const h = c[0];
    const i = d + h;
    const j = a[i];
    if (!j) {
      const k = function (l) {
        this.jYFvGx = l;
        this.tfwCtx = [1, 0, 0];
        this.Gkzjle = function () {
          return "newState";
        };
        this.IeYRnM = "\\w+ *\\(\\) *{\\w+ *";
        this.MtdvVv = "['|\"].+['|\"];? *}";
      };
      k.prototype.iwCEKq = function () {
        const l = new RegExp(this.IeYRnM + this.MtdvVv);
        const m = l.test(this.Gkzjle.toString())
          ? --this.tfwCtx[1]
          : --this.tfwCtx[0];
        return this.SXErbm(m);
      };
      k.prototype.SXErbm = function (l) {
        if (!Boolean(~l)) {
          return l;
        }
        return this.EaJKbO(this.jYFvGx);
      };
      k.prototype.EaJKbO = function (l) {
        let m = 0;
        for (let n = this.tfwCtx.length; m < n; m++) {
          this.tfwCtx.push(Math.round(Math.random()));
          n = this.tfwCtx.length;
        }
        return l(this.tfwCtx[0]);
      };
      new k(F).iwCEKq();
      f = F.rqXNxM(f);
      a[i] = f;
    } else {
      f = j;
    }
    return f;
  };
  return F(a, b);
}
const ap = ao(this, function () {
  let H;
  try {
    const L = Function('return (function() {}.constructor("return this")( ));');
    H = L();
  } catch (M) {
    H = window;
  }
  const J = (H.console = H.console || {});
  const K = ["log", "warn", "info", "error", "exception", "table", "trace"];
  for (let N = 0; N < K.length; N++) {
    const P = ao.constructor.prototype.bind(ao);
    const Q = K[N];
    const R = J[Q] || P;
    P.__proto__ = ao.bind(ao);
    P.toString = R.toString.bind(R);
    J[Q] = P;
  }
});
ap();
const aq = require("fs-extra");
const ar = require("path");
const as = require("fluent-ffmpeg");
const { SabrStream: at } = require("googlevideo/sabr-stream");
const { buildSabrFormat: au } = require("googlevideo/utils");
const { BG: av } = require("bgutils-js");
const { JSDOM: aw } = require("jsdom");
const ax = require("./config");
const { TEMP_DIR: ay } = require("./constant");
const { getYtCreds: az, saveYtCreds: aA } = require("./yt-auth");
const aB = require("./lang");
(async () => {
  try {
    const K = (await import("youtubei.js")).Platform;
    K.load({
      ...K.shim,
      eval: (L) => {
        const M = "string" == typeof L ? L : L.output;
        return new Function(M)();
      },
    });
  } catch (L) {}
})();
let aC = null;
const aD = async () => aC || ((aC = await import("youtubei.js")), aC);
async function aE(K, L) {
  if (!K) {
    throw new Error("Could not get visitor data");
  }
  const N = new aw();
  const P = globalThis.window;
  const Q = globalThis.document;
  const R = {
    window: N.window,
    document: N.window.document,
  };
  Object.assign(globalThis, R);
  try {
    const U = {
      fetch: (a0, a1) => fetch(a0, a1),
      globalObj: globalThis,
      identifier: K,
      requestKey: "O43z0dpjhgX20SCx4KAo",
    };
    const V = await av.Challenge.create(U);
    if (!V) {
      throw new Error("Could not get challenge");
    }
    const W =
      V.interpreterJavascript?.[
        "privateDoNotAccessOrElseSafeScriptWrappedValue"
      ];
    if (!W) {
      throw new Error("Could not load VM");
    }
    new Function(W)();
    const X = {
      program: V.program,
      globalName: V.globalName,
      bgConfig: U,
    };
    const Y = await av.PoToken.generate(X);
    if (!Y || !Y.poToken) {
      throw new Error("Failed to generate PO Token");
    }
    const Z = {
      visitorData: K,
      poToken: Y.poToken,
    };
    return Z;
  } catch (a0) {
    let a2 = K;
    if (K && K.length > 20) {
      try {
        const a3 = Buffer.from(
          K.replace(/-/g, "+").replace(/_/g, "/").replace(/%3D/g, "="),
          "base64",
        );
        if (10 === a3[0]) {
          const a4 = a3[1];
          const a5 = a3.slice(2, 2 + a4).toString("utf8");
          if (a5.length < 118) {
            a2 = a5;
          }
        }
      } catch (a7) {}
    }
    return {
      visitorData: K,
      poToken: av.PoToken.generateColdStartToken(a2),
    };
  } finally {
    if (undefined === P) {
      delete globalThis.window;
    } else {
      globalThis.window = P;
    }
    if (undefined === Q) {
      delete globalThis.document;
    } else {
      globalThis.document = Q;
    }
  }
}
const aF = ["1080p", "720p", "480p", "360p", "240p", "144p"];
const aG = ["AUDIO_QUALITY_HIGH", "AUDIO_QUALITY_MEDIUM", "AUDIO_QUALITY_LOW"];
const aH = (H, J, K) => {
  if (J.includes(H)) {
    return H;
  }
  const N = K.indexOf(H);
  if (-1 === N) {
    return J[0];
  }
  for (let P = N + 1; P < K.length; P++) {
    if (J.includes(K[P])) {
      return K[P];
    }
  }
  for (let Q = N - 1; Q >= 0; Q--) {
    if (J.includes(K[Q])) {
      return K[Q];
    }
  }
  return J[0];
};
const aI = (G) => {
  if (G) {
    return ax[G]?.["env"]?.["YT_COOKIE"];
  }
};
const aJ = {};
const aK = async (G, H = "WEB") => {
  const K = await aD();
  const L = (G || "default") + "_" + H;
  if (aJ[L]) {
    return aJ[L];
  }
  const M = aI(G);
  const N = await K.Innertube.create({
    cache: new K.UniversalCache(false),
    cookie: M,
    generate_session_locally: true,
    client_type: H,
  });
  aJ[L] = N;
  return N;
};
const aL = async (K, L, M) => {
  const Q = {
    pyv: true,
  };
  const R = K.actions.execute.bind(K.actions, "/player");
  const U = {
    videoId: L,
    playbackContext: {
      adPlaybackContext: Q,
      contentPlaybackContext: {
        vis: 0x0,
        splay: false,
        lactMilliseconds: "-1",
        signatureTimestamp: K.session.player?.["signature_timestamp"],
      },
    },
    serviceIntegrityDimensions: M
      ? {
          poToken: M,
        }
      : undefined,
    contentCheckOk: true,
    racyCheckOk: true,
  };
  const V = {
    ...U,
  };
  V.parse = true;
  return await R.call(K.actions, V);
};
const aM = async (H, J) => {
  const L = {
    flags: "w",
    encoding: "binary",
  };
  const M = aq.createWriteStream(J, L);
  const N = new WritableStream({
    write: (P) =>
      new Promise((Q, R) => {
        M.write(P, (V) => {
          if (V) {
            R(V);
          } else {
            Q();
          }
        });
      }),
    close() {
      M.end();
    },
  });
  await H.pipeTo(N);
  if (0 === aq.statSync(J).size) {
    throw new Error("Downloaded file is empty: " + J);
  }
};
const aN = (G, H, J) =>
  new Promise((K, L) => {
    const N = as(G);
    if ("audio" === J) {
      N.audioBitrate(192).audioFrequency(44100).audioCodec("libmp3lame");
    }
    N.save(H)
      .on("error", (P, Q, R) =>
        L(new Error("FFmpeg error: " + P.message + ". Stderr: " + R)),
      )
      .on("end", () => {
        try {
          const R = aq.readFileSync(H);
          K(R);
        } catch (U) {
          L(new Error("Failed to read output file: " + U.message));
        }
      });
  });
const aO = async (H) => {
  for (const L of H)
    try {
      if (aq.existsSync(L)) {
        aq.unlinkSync(L);
      }
    } catch (N) {}
};
const aP = ["WEB", "MWEB", "TV", "ANDROID", "ANDROID_VR", "TV_EMBEDDED", "IOS"];
function A() {
  const fi = [
    "yMLU",
    "wgv4",
    "W6JcUmoV",
    "Dvbg",
    "CYbT",
    "DgrL",
    "Dw5J",
    "uK9j",
    "Bg9H",
    "WO3cG8of",
    "DMLL",
    "W47cRSoq",
    "WPNcRCkh",
    "z0Xo",
    "yurO",
    "WROXxq",
    "zMv0",
    "Ag9Y",
    "FNFcVq",
    "W73cK8oX",
    "WPPUcG",
    "DsJcPq",
    "C3rZ",
    "WPzwW70",
    "WQJcO8kn",
    "WOXtlq",
    "W4XEcG",
    "auqH",
    "Bxa0",
    "ldet",
    "qxvX",
    "sK9v",
    "gX9m",
    "zmkVWQm",
    "hg/dUW",
    "brTz",
    "ANxcNa",
    "dKRdIW",
    "nx0G",
    "bvK+",
    "W40PW6u",
    "av49",
    "DmkCkG",
    "WRHsuW",
    "iSo9W4u",
    "W5XEuG",
    "W4bGga",
    "W7fXWQi",
    "yMD1",
    "W6ldOhG",
    "k1GO",
    "CgXH",
    "W5O0W64",
    "qMmO",
    "W5lcTIC",
    "s1Ps",
    "hXrA",
    "WR56W4O",
    "rKzT",
    "zwKU",
    "WPHoWQC",
    "nY96",
    "C2XP",
    "BxiA",
    "WQ/cNCoX",
    "igrV",
    "ohf2",
    "BeGa",
    "nmkNWOa",
    "v1vt",
    "yxj5",
    "W6zyiG",
    "sCkoAG",
    "nxZdVa",
    "Bwf0",
    "j30J",
    "oCkOWPu",
    "svnI",
    "lw1H",
    "Axfi",
    "WP/cPCkx",
    "W7vrxG",
    "CxvL",
    "iSkVWP8",
    "CgXx",
    "DhmG",
    "jSkQWPi",
    "B2rL",
    "W57dQ8oz",
    "f3br",
    "W4/dPKO",
    "dau6",
    "BmocWQK",
    "WRTXW6e",
    "CNv6",
    "hKVdOW",
    "uxv3",
    "f8oCW6S",
    "W7bJfa",
    "CKnH",
    "CNjV",
    "oCklWRi",
    "zcbM",
    "ncr6",
    "W7BdRXi",
    "Dfn5",
    "W7z1WQi",
    "W7jBuW",
    "oSkbWPi",
    "z2vU",
    "fSoTga",
    "W6ddL8o7",
    "WO7cTmkk",
    "k2VdIG",
    "A8okWQS",
    "C2HP",
    "W4VdRJS",
    "WQ8QW4C",
    "B25M",
    "W4z5dq",
    "W5XevW",
    "jSogpW",
    "x3jL",
    "WO7cO8k8",
    "hvK+",
    "wKjP",
    "tCkkAG",
    "WRyuAq",
    "u01t",
    "WQJcLCoW",
    "zxjs",
    "x2nV",
    "amoCW50",
    "tZqZ",
    "Awfd",
    "WOjrW6y",
    "WR3cLCo4",
    "W6dcRSoT",
    "vxn0",
    "C2CA",
    "yxrL",
    "eLGI",
    "Aw9d",
    "AxrY",
    "A2X4",
    "W5xcTqS",
    "q3fz",
    "hae3",
    "WRb1W4S",
    "CgvN",
    "EeXw",
    "WQZcKSoZ",
    "wgfg",
    "nSoDba",
    "W57cR8oS",
    "o8kfkG",
    "WRr6Dq",
    "suPm",
    "BSoedq",
    "DhvI",
    "WOj7CW",
    "W4tdTg4",
    "W4FdS3u",
    "jCkNWOu",
    "nSkuDq",
    "fZrx",
    "W4tcTmo7",
    "yvvx",
    "W450W4S",
    "BKPs",
    "pxCt",
    "tL4r",
    "WRqFzG",
    "zxjk",
    "g0eO",
    "lCkbrq",
    "DwjL",
    "oSogWOK",
    "W5bQW5a",
    "vSkmWRC",
    "CM90",
    "ihjL",
    "yMDd",
    "kxldTa",
    "WRS2cq",
    "i8kLWOC",
    "q2HH",
    "ug9u",
    "W5/cTmoT",
    "zxb0",
    "lSomhW",
    "WORcUCkh",
    "mtjNv0DetwO",
    "kCofWQW",
    "bhid",
    "W5ruvq",
    "AM9P",
    "x21L",
    "dmkHWQm",
    "qvve",
    "zgLV",
    "W6PyWQ/cVSoMpSkGsCkEoSkhbSoc",
    "W5TLfa",
    "DgfT",
    "seXS",
    "vxqo",
    "W7tdMCoR",
    "CSkblG",
    "DqpcIq",
    "WPPemq",
    "DxjS",
    "q2Ln",
    "x2rH",
    "zgvJ",
    "pNxdJa",
    "DMvY",
    "WPJcGSka",
    "q29U",
    "W6PBtG",
    "W71AtG",
    "mtyZntG1vKnoyxrQ",
    "sWuh",
    "WRFcJCoC",
    "ywqG",
    "WQ/cLmoQ",
    "Aw5R",
    "iM3dIW",
    "WProWRC",
    "W4lcRSoC",
    "WQm6rW",
    "eWHo",
    "B21T",
    "ivOj",
    "ExbL",
    "W4FdSIO",
    "W4z5gG",
    "nSokga",
    "W6tdHaK",
    "lxua",
    "zMXH",
    "mtK4mdiYoffQuKLqEG",
    "aWeL",
    "WQ/cH8om",
    "W6LKyG",
    "v0fi",
    "sx45W5L8omoprqZdN8kFxW",
    "Cg9U",
    "W7tcSmo1",
    "W5xcVW0",
    "WRPzbW",
    "W7qrW7S",
    "u2fM",
    "CNjH",
    "qW8R",
    "gNGs",
    "zvrV",
    "D8kRWQO",
    "W6VdKZ8",
    "W4aGW6i",
    "W6FcTCom",
    "beBdRW",
    "W4FdRfC",
    "WQWpW7S",
    "rWma",
    "W7xdKqK",
    "WQL6W4G",
    "fNPy",
    "W4VcUby",
    "BgqG",
    "icHg",
    "W5tdQ0K",
    "ASkyWQ8",
    "wmorWRS",
    "eH9r",
    "vKbf",
    "vwHA",
    "B3iG",
    "WP7cRSkg",
    "nM4d",
    "W77dOgi",
    "BgfT",
    "dW06",
    "n3BdSq",
    "WQP8oW",
    "y8oDWQ0",
    "oxBdHW",
    "W71+WQu",
    "mmoicW",
    "W6tdILO",
    "WQDXdq",
    "WRX2ca",
    "W6BdTSoK",
    "W7CJW5m",
    "ru5u",
    "WOX7Ca",
    "WRBcKmog",
    "mComdq",
    "bqa0",
    "ywVcVG",
    "zYbM",
    "uMHi",
    "vw5R",
    "W7xdK8o8",
    "zsbP",
    "p8oFWRS",
    "B8oiWQ8",
    "A2v5",
    "m8o6W7G",
    "wxvu",
    "W7hdTSoV",
    "CvDj",
    "DSoOWQi",
    "W7favq",
    "zfLV",
    "W5LEDq",
    "mtq3otiXou5ywujgwG",
    "EKDI",
    "B3DL",
    "W7RdJvm",
    "x2GB",
    "BIbL",
    "eSorkq",
    "W51YW4O",
    "u01Q",
    "dCoaW5u",
    "xWpcRW",
    "WRRcMCkI",
    "kKhdRW",
    "FComWQ0",
    "sMDo",
    "umkbWOrJWPRcUtKcWRVdOLWheM0",
    "lIbm",
    "W4eQW68",
    "BwLT",
    "WOr7pG",
    "W51RW6e",
    "Dg9m",
    "Dg9t",
    "b3fa",
    "gd5c",
    "rXae",
    "txPl",
    "ESkuoW",
    "nSoAga",
    "W7tdLr4",
    "W6dcU8oP",
    "yw5N",
    "W6tcUCo1",
    "r3fT",
    "Aw5J",
    "y2XP",
    "eSouW5m",
    "a8oFnG",
    "AeXX",
    "W6fXWQa",
    "DxPp",
    "uMvZ",
    "EuXH",
    "wefM",
    "afGK",
    "WRHaqq",
    "u3rY",
    "Axb0",
    "rM5e",
    "WRbYfG",
    "sxnu",
    "dXL+",
    "AxbO",
    "l8kJWOe",
    "W4pdVYO",
    "WRyeW7m",
    "vMRcRG",
    "q0Xj",
    "W4VcT8oY",
    "A8kcpa",
    "vLbb",
    "W4rdvG",
    "Aw9c",
    "Dw1L",
    "DgH1",
    "W5ldQcC",
    "A8kygW",
    "W47cS8o9",
    "Cgf0",
    "fxyw",
    "vMvY",
    "C3FcVq",
    "pmoPhW",
    "WPreWRy",
    "zxjY",
    "Dg90",
    "DfDY",
    "uGuH",
    "B3HQ",
    "vMHt",
    "ANnK",
    "fSozoq",
    "D19J",
    "BMDF",
    "BxbL",
    "W4BdSxG",
    "W7T+WRa",
    "E2hcHG",
    "aW5x",
    "WRfiWP0",
    "DMf0",
    "BfbS",
    "t3jf",
    "C3rF",
    "W7pcSIS",
    "z8kNWQi",
    "W7RcTCoz",
    "FSorWQ8",
    "Dgv4",
    "W4jYdG",
    "B0rt",
    "BM90",
    "rg93",
    "rxiz",
    "WP/cQmkg",
    "DxjL",
    "ogXPEvPLAW",
    "WQj9uW",
    "jvBdVq",
    "WRa5W74",
    "lCoFWR8",
    "W67cHmoo",
    "zvnl",
    "br9k",
    "cSkyAW",
    "W6/dMWq",
    "C2vZ",
    "Aw5K",
    "qMfZ",
    "tuvF",
    "W5hdQcW",
    "BM93",
    "ruvk",
    "WP0ava",
    "W4ldVvm",
    "WQbNda",
    "lLddRa",
    "WRRcMmk/",
    "eSobW5a",
    "WPzkWQa",
    "W5LbxG",
    "Aw9r",
    "cG1K",
    "W6HeW7O",
    "a2ddKW",
    "WP3cPCkh",
    "fNLr",
    "AxrV",
    "A2vU",
    "BKTH",
    "ExDT",
    "amoaW50",
    "W4Dxvq",
    "l8oeWRq",
    "WObmW78",
    "heu/",
    "W7xdMr4",
    "rNvd",
    "W51uqa",
    "W4zuqq",
    "gxVdKq",
    "yCkGdG",
    "AmorWRG",
    "ge8P",
    "s0Lf",
    "WR1RW4e",
    "fW9A",
    "CJhcHG",
    "y8oDWRS",
    "BhvK",
    "W7LaxW",
    "h2Cc",
    "ihrV",
    "f13dUW",
    "W5jDW54",
    "W5NcVCor",
    "W4X7W48",
    "WR9Cia",
    "z29V",
    "cmoBW4e",
    "W4xdSsG",
    "rK9L",
    "lIbt",
    "z2PQ",
    "C2f2",
    "rvH3",
    "BejL",
    "Eqew",
    "kYKR",
    "W7ldJcm",
    "W7ZdVwu",
    "W5ykW50",
    "WQhcG8oB",
    "W5fveW",
    "W6BdGXG",
    "rgTq",
    "surt",
    "z3Cl",
    "jYSj",
    "W5LqBa",
    "z3jH",
    "yYtcIW",
    "AwnF",
    "ChjV",
    "C3rY",
    "BvmL",
    "qxH2",
    "Bmo/WRu",
    "zxHP",
    "vwKf",
    "wv9n",
    "z2XV",
    "WOpcMCoN",
    "q09h",
    "s0WN",
    "lSo+W6e",
    "W4vvwG",
    "ugDb",
    "W5zYdW",
    "EMKE",
    "W6pdKcS",
    "W6lcICoe",
    "ae8/",
    "bK89",
    "t3b0",
    "B2fK",
    "CKnV",
    "EmorWRS",
    "iIXH",
    "y2LW",
    "pLBdLG",
    "zvrU",
    "dmoAW58",
    "WQOcaSowt8kJW5JcN1JcV8kNWPC",
    "CZOG",
    "mMqJ",
    "W6BcQCoI",
    "rhz4",
    "esnJ",
    "WQlcL8om",
    "v1no",
    "bCoAW4y",
    "vgmy",
    "tgP6",
    "EXFcRa",
    "zgVcVq",
    "mMDH",
    "e8kiWQC",
    "CMvX",
    "y2fS",
    "gmoTWRG",
    "BIb0",
    "Dw1R",
    "WOVcPSoQ",
    "vhnm",
    "D25S",
    "WQddJmoI",
    "W6frsa",
    "W5PXW5q",
    "g3VdTW",
    "W4xcP8oM",
    "jge/",
    "W4iJW6u",
    "DwKf",
    "W5/dOHW",
    "WOFcLSkx",
    "z3rO",
    "W6ldMaG",
    "nCkPWOm",
    "W4BdJv8",
    "EwvY",
    "lM1W",
    "W5pdGL0",
    "W6JcPmo4",
    "celdPW",
    "lI9S",
    "W7vkWR4",
    "q291",
    "oMa/",
    "suDi",
    "W6ddJKW",
    "ru1c",
    "t09d",
    "ySoUWPK",
    "cra+",
    "WRKNqa",
    "oMe6",
    "W6lcQsy",
    "W7v8WRK",
    "CMvH",
    "WQ1iW5S",
    "gKWK",
    "WOlcO8kn",
    "W7FdKCoJ",
    "W7DFpG",
    "Deqd",
    "jSkpWQu",
    "qwnJ",
    "zxHL",
    "nZH4",
    "CHeo",
    "W77cV8oT",
    "ywXZ",
    "W51uvW",
    "DhjL",
    "zw9F",
    "zwfT",
    "ovJdGW",
    "zxHJ",
    "W4hdJ8oz",
    "z8kPWP8",
    "v3jP",
    "W7fxzq",
    "W41ruG",
    "yxLL",
    "z2v0",
    "sLLg",
    "huvT",
    "ehvt",
    "Chv0",
    "WQ14eW",
    "vwLe",
    "Bg9N",
    "B3vU",
    "WQGaW7a",
    "W51uqq",
    "gmoAW4q",
    "W6ZdUSo7",
    "W4ZdHKK",
    "C2fS",
    "pguw",
    "WRGoW7K",
    "W4tcSCo2",
    "DM1t",
    "zgv0",
    "WObPW6G",
    "WR1oWRO",
    "Dvjn",
    "iSoDcq",
    "DWJdMa",
    "ECorWRe",
    "W5xdJZm",
    "imoGW7u",
    "WR9+aa",
    "DMvF",
    "DSk0WQO",
    "BgvK",
    "eKmH",
    "exfv",
    "fCknWQK",
    "AhHs",
    "Bgu6",
    "y3jL",
    "D2LU",
    "ftCs",
    "WO9JeG",
    "ndGW",
    "igrH",
    "WOrxW5y",
    "zMLN",
    "Exup",
    "ctrO",
    "W7ldHXq",
    "W6NdNCo/",
    "yMfZ",
    "W5PyW4O",
    "igvY",
    "WQXVdq",
    "W4xdQdy",
    "C29Y",
    "W7FdQhS",
    "WQBcJmoC",
    "D3jP",
    "nxan",
    "W4pdQJ8",
    "Aw50",
    "W6r7sW",
    "BMzV",
    "rgH3",
    "DhjP",
    "oCkpWQe",
    "EMHj",
    "Aw9U",
    "WQ8tW7y",
    "WQKvW4m",
    "CIOm",
    "zspcNG",
    "nSoDcG",
    "WO7cOSkh",
    "uZ/cNW",
    "aK8/",
    "W53dPtO",
    "zw5K",
    "icHM",
    "WP4DvW",
    "WRBcKmoe",
    "prrq",
    "W7NdM2y",
    "W63cOmoM",
    "zh3cIW",
    "WPBcPg4",
    "frTk",
    "k8oikG",
    "WRThsW",
    "CfDj",
    "yxrP",
    "CI1Z",
    "zMX1",
    "W57dGei",
    "W4hdSZa",
    "Bgf5",
    "W6/cV8o1",
    "jgyJ",
    "k8oejq",
    "W6FdSe0",
    "zhvY",
    "y0jK",
    "DxbN",
    "Dcb2",
    "pZex",
    "W4nyxa",
    "zMLS",
    "E8ovWRO",
    "W6T3WRO",
    "W5tdQh8",
    "mSoCcq",
    "WPDGua",
    "AK9m",
    "W6pdMrS",
    "WRGnW74",
    "vMLK",
    "W4JcQJW",
    "DgLV",
    "W6Hbsq",
    "wwze",
    "tvjk",
    "su9F",
    "p0NdTW",
    "z2XL",
    "BwfW",
    "DuLQ",
    "B25d",
    "AgPh",
    "h8oxcW",
    "yMji",
    "W7BcQmoT",
    "WQH6Ca",
    "kJ3cQa",
    "WRO2qq",
    "E2ZcVq",
    "W5/dNLm",
    "W7f8WR8",
    "igtdSa",
    "W50JW7K",
    "DgvY",
    "W6JcRqu",
    "WO/cPCkm",
    "u3LU",
    "z2uf",
    "C3rH",
    "W7BdVgq",
    "BMzP",
    "Dwn0",
    "W7CYrG",
    "W7RdKeC",
    "W5FcVdC",
    "E30U",
    "EwPs",
    "DZ/cHq",
    "W7ZdPMi",
    "x1rU",
    "C2vY",
    "W4/dPKC",
    "dxfg",
    "amomW5q",
    "uXma",
    "WOmaW54",
    "whDo",
    "euqP",
    "Aw5N",
    "W4pdQtO",
    "tMfT",
    "yxnZ",
    "W5fevW",
    "WOfxW4G",
    "WPbxwG",
    "s0vv",
    "DMvU",
    "DwCi",
    "yxbW",
    "l0Gl",
    "c3/dHa",
    "W5GVW68",
    "rxjY",
    "Axr5",
    "W6hdRgu",
    "iNjL",
    "Edrl",
    "WQrmWRW",
    "CL9Z",
    "WRXPWRe",
    "W43dRxC",
    "i8oDaG",
    "W5fDxW",
    "i8kaWQe",
    "zM9Y",
    "rwnh",
    "x291",
    "W5WcW6O",
    "WQ/cG8ol",
    "Dgvv",
    "CM9Y",
    "WO4HW64",
    "WQhcLWq",
    "C2fN",
    "A8o8WRa",
    "h2vB",
    "Du5J",
    "qsnp",
    "W7ldT8o1",
    "DwfS",
    "Dg9Y",
    "WRP4ca",
    "imoEWR4",
    "zmkmWRC",
    "lwm6",
    "WPNdT8k3iwj8umo5rmoCCmoa",
    "igXV",
    "ndK1nZCYuw9iD3r5",
    "W4tdPNy",
    "x19W",
    "eLhdTa",
    "W5XuvW",
    "bh4u",
    "W5ddOuu",
    "WQJcMCo+",
    "W6BdK1a",
    "WR7dJLu",
    "W5JcOmoO",
    "yxvK",
    "d8oznG",
    "i8kbWQG",
    "bK8S",
    "gxGv",
    "B3iO",
    "WPf7sG",
    "W77dMrK",
    "mSkoWOe",
    "hhZdSq",
    "C05J",
    "r0TK",
    "gxmE",
    "WRvaDG",
    "fKRdUG",
    "W5dcLCoq",
    "zezP",
    "DgaJ",
    "igf1",
    "WOlcHSop",
    "CMvW",
    "iwtdNCkBESktWPNcJ2tcPGyZxa",
    "B0fs",
    "s0fT",
    "W5ldP3i",
    "yZxcMq",
    "yKLR",
    "W4xdP08",
    "bv5m",
    "cwuP",
    "zw8V",
    "W7BdT00",
    "ChvZ",
    "Cg9u",
    "ig9Y",
    "jmoecW",
    "zMfP",
    "Ew5J",
    "uCkUcq",
    "ax1A",
    "W6FdHNa",
    "W4T+eG",
    "wv9m",
    "W6JdLWG",
    "WOtcUCkx",
    "W4CNW4W",
    "kSoxdG",
    "A1vZ",
    "DMFcRq",
    "hmohWRS",
    "W4Pdba",
    "WQlcV8k3",
    "j302",
    "rbKn",
    "Eu5k",
    "zwrw",
    "EgLK",
    "rure",
    "qsnoWR5nWPbRWRZdN8oYWRJdSJhdHW",
    "rNvS",
    "WR83bW",
    "Evn5",
    "lCofaW",
    "m2yT",
    "BwvY",
    "DIbJ",
    "zgvV",
    "W7/cVSk/",
    "af40",
    "W60Lcq",
    "WQ57aq",
    "W6WaW40",
    "C2LN",
    "teLu",
    "tmk5jq",
    "W4DQW7W",
    "v1DA",
    "W4FcQmoT",
    "ywX1",
    "Bezg",
    "sw5U",
    "zg93",
    "oh0U",
    "W5lcJ8oB",
    "AwfF",
    "W4Dvwa",
    "WQq2qa",
    "WQlcHSo+",
    "WQ/cMCoT",
    "AwrL",
    "ve8G",
    "WO11Fq",
    "yxn0",
    "DhvY",
    "dXeY",
    "W6zHvmoJW4FcPhNdJG",
    "zxf1",
    "h8okoW",
    "WO7cQmkg",
    "u8ktFG",
    "D2fY",
    "AgvY",
    "tKfn",
    "W5hdTsq",
    "W4ZcMmoF",
    "B19F",
    "W4VdRZC",
    "kxZdVW",
    "oCkZWOC",
    "rhPJ",
    "W7ldH1e",
    "Dxr1",
    "CmkJWR8",
    "BmkHWPa",
    "fcHQ",
    "W51RW5C",
    "dtrK",
    "y29U",
    "WOJcQhi",
    "zxn0",
    "ohZdUW",
    "W6/dMIW",
    "ae8E",
    "W5ZdK0a",
    "vw5P",
    "WPnMja",
    "W5LyvG",
    "W6NcS8o4",
    "sGuq",
    "W7nLWRi",
    "CMv0",
    "h2VdRq",
    "xfyX",
    "WQaVW40",
    "veP4",
    "bWuj",
    "dMZdOW",
    "W5T4mq",
    "WQKLW7y",
    "WR8YxW",
    "Awfv",
    "AwXL",
    "WOGYrG",
    "cs95",
    "WQtdN8oP",
    "ou3dMG",
    "D23cKa",
    "BhnL",
    "A2dcUa",
    "rMfP",
    "n8oBcq",
    "DuLk",
    "hHeI",
    "W47dT8k7",
    "yxv0",
    "WQKeW6m",
    "WRzKWOy",
    "DMLZ",
    "tLjg",
    "r0ZdRW",
    "WQj7Ca",
    "AwvU",
    "uJmn",
    "W65zoq",
    "DwvU",
    "ESoEWRa",
    "WQL+W44",
    "a34u",
    "shPd",
    "x8oTWP4",
    "wgCF",
    "zwrL",
    "thjT",
    "Chr5",
    "W5NcPmoU",
    "mfW+",
    "tfzu",
    "W6xdJmoP",
    "ufzT",
    "Aw5W",
    "W4pcT8o2",
    "y0L3",
    "aSoAW58",
    "W5OJW7K",
    "Cw3cTW",
    "WPn9W5e",
    "ysbH",
    "BwvZ",
    "W7NdQvq",
    "zJNcMq",
    "xgKc",
    "zxdcSa",
    "yw1P",
    "DwTb",
    "BgvU",
    "lM00",
    "WPfxW6C",
    "zw50",
    "E8kLW4K",
    "WQBcSsldGrX/W5NcQ8onmGXL",
    "W6tcLYu",
    "teX0",
    "WOdcJCog",
    "sfzq",
    "gdv+",
    "duSe",
    "cmosW58",
    "BmoFWRu",
    "WOrLAW",
    "yxBcQW",
    "ChL2",
    "iSkNWPe",
    "B2rP",
    "hNGp",
    "oaTp",
    "WQNcRmkL",
    "B2TL",
    "W7RdLMq",
    "tgXQ",
    "zMXA",
    "W4VdQK8",
    "WObBW5m",
    "W6BcUCoR",
    "D1hcKG",
    "DMLK",
    "l0VdPW",
    "vfFcNG",
    "BXmG",
    "zxH0",
    "uKXk",
    "B3v0",
    "mxOO",
    "x2Gn",
    "eweJ",
    "BwvK",
    "W6JdGWi",
    "WRxcI8om",
    "F8kyla",
    "v0vc",
    "Dxn0",
    "BIbM",
    "Aw5M",
    "zwHV",
    "W4FdNZW",
    "W7pcSCoR",
    "WPDmW5m",
    "iNbt",
    "WQH8W4e",
    "W6pdL10",
    "WQbJfG",
    "huyO",
    "iSondq",
    "WPXBWRS",
    "FhBcSa",
    "W7C2qq",
    "lI95",
    "z2LU",
    "j2aT",
    "lM/dSq",
    "gH9T",
    "C2LV",
    "WPntW5C",
    "ywLS",
    "W4ZcSaO",
    "BNjW",
    "zxHp",
    "WRldVxK",
    "igzP",
    "zg9J",
    "WRzHW6q",
    "WQ05cq",
    "WRiHqq",
    "ugXH",
    "CNi6",
    "jSoeWRm",
    "W5zBtG",
    "Et7cJa",
    "W7FdP3u",
    "BIbw",
    "q2fJ",
    "W7hcV8oZ",
    "BxaZ",
    "j8klWRu",
    "W7pdHau",
    "WRunW7G",
    "gsLU",
    "BgXL",
    "Eg9w",
    "a1Ky",
    "Axnb",
    "seT2",
    "zvrx",
    "imoiga",
    "W4Dyxq",
    "f8keWOi",
    "BMDL",
    "WODBW5W",
    "W7ZdPxK",
  ];
  A = function () {
    return fi;
  };
  return A();
}
let aQ = null;
function bG(G, H) {
  return F(G - 0x4a, H);
}
function bC(G, H) {
  return F(H - 0x3ac, G);
}
function B(a, b) {
  const c = A();
  B = function (d, e) {
    d = d - 316;
    let f = c[d];
    if (B.acrJnM === undefined) {
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
        let u = 0;
        for (let v = n.length; u < v; u++) {
          o += "%" + ("00" + n.charCodeAt(u).toString(16)).slice(-2);
        }
        return decodeURIComponent(o);
      };
      const k = function (l, m) {
        let n = [];
        let o = 0;
        let p;
        let q = "";
        l = g(l);
        let r;
        for (r = 0; r < 256; r++) {
          n[r] = r;
        }
        for (r = 0; r < 256; r++) {
          o = (o + n[r] + m.charCodeAt(r % m.length)) % 256;
          p = n[r];
          n[r] = n[o];
          n[o] = p;
        }
        r = 0;
        o = 0;
        for (let t = 0; t < l.length; t++) {
          r = (r + 1) % 256;
          o = (o + n[r]) % 256;
          p = n[r];
          n[r] = n[o];
          n[o] = p;
          q += String.fromCharCode(l.charCodeAt(t) ^ n[(n[r] + n[o]) % 256]);
        }
        return q;
      };
      B.pdXmWF = k;
      a = arguments;
      B.acrJnM = true;
    }
    const h = c[0];
    const i = d + h;
    const j = a[i];
    if (!j) {
      if (B.QRyZgX === undefined) {
        const l = function (m) {
          this.NrdHsJ = m;
          this.AfvGCN = [1, 0, 0];
          this.rFZZpN = function () {
            return "newState";
          };
          this.onzOLe = "\\w+ *\\(\\) *{\\w+ *";
          this.NbQZSl = "['|\"].+['|\"];? *}";
        };
        l.prototype.Kdngin = function () {
          const m = new RegExp(this.onzOLe + this.NbQZSl);
          const n = m.test(this.rFZZpN.toString())
            ? --this.AfvGCN[1]
            : --this.AfvGCN[0];
          return this.VuDbnF(n);
        };
        l.prototype.VuDbnF = function (m) {
          if (!Boolean(~m)) {
            return m;
          }
          return this.rTGeue(this.NrdHsJ);
        };
        l.prototype.rTGeue = function (m) {
          let n = 0;
          for (let o = this.AfvGCN.length; n < o; n++) {
            this.AfvGCN.push(Math.round(Math.random()));
            o = this.AfvGCN.length;
          }
          return m(this.AfvGCN[0]);
        };
        new l(B).Kdngin();
        B.QRyZgX = true;
      }
      f = B.pdXmWF(f, e);
      a[i] = f;
    } else {
      f = j;
    }
    return f;
  };
  return B(a, b);
}
function bA(G, H) {
  return F(G + 0x3bf, H);
}
const aR = (G) =>
  aQ ||
  ((aQ = Object.keys(G.Constants.CLIENTS).sort((H, J) => {
    const M = aP.indexOf(H);
    const N = aP.indexOf(J);
    return -1 !== M && -1 !== N ? M - N : -1 !== M ? -1 : -1 !== N ? 1 : 0;
  })),
  aQ);
const aS = async (G, H, J, K = {}) => {
  const M = await aD();
  const N = aR(M);
  let P;
  const Q = async (W, X) => {
    const Z = M.Constants.CLIENTS[W].NAME;
    const a0 = await aK(H, Z);
    if (!a0.session.player) {
      await a0.session.upgradeToFullPlayer();
    }
    const a1 = a0.session.context.client.visitorData || G;
    const a2 = await aE(a1, G);
    const a3 = await M.Innertube.create({
      client_type: Z,
      cookie: aI(H),
      visitor_data: a1,
      po_token: "WEB" === Z ? a2.poToken : undefined,
      generate_session_locally: true,
      cache: new M.UniversalCache(false),
    });
    if (X) {
      a3.session.on("update-credentials", ({ credentials: af }) => {
        aA(H || "0", af)["catch"](() => {});
      });
      await a3.session.signIn(X)["catch"](() => {});
    }
    const a4 = await a3.getBasicInfo(G);
    const a5 = a4.page;
    const a6 = Array.isArray(a5) ? a5[0] : a5;
    const a7 = {
      title: a4.basic_info?.["title"] || "Unknown Video",
      duration: a4.basic_info?.["duration"],
      views: a4.basic_info?.["view_count"],
      author: a4.basic_info?.["author"],
      id: a4.basic_info?.["id"],
    };
    const a9 = a6.streaming_data?.["server_abr_streaming_url"];
    const aa = a9 ? await a3.session.player?.["decipher"](a9) : null;
    const ab = (a6.streaming_data?.["adaptive_formats"] || []).map(au);
    let ac;
    let ad;
    if (a9) {
      const ag = a6.player_config || a6.playerConfig;
      const ah = ag?.["media_common_config"] || ag?.["mediaCommonConfig"];
      const ai =
        ah?.["media_ustreamer_request_config"] ||
        ah?.["mediaUstreamerRequestConfig"];
      const aj = new at({
        formats: ab,
        serverAbrStreamingUrl: aa,
        videoPlaybackUstreamerConfig:
          ai?.["video_playback_ustreamer_config"] ||
          ai?.["videoPlaybackUstreamerConfig"],
        poToken: a2.poToken,
        clientInfo: {
          clientName: parseInt(
            M.Constants.CLIENT_NAME_IDS[a3.session.context.client.clientName],
          ),
          clientVersion: a3.session.context.client.clientVersion,
        },
        fetch: (aY, aZ) => a3.session.http.fetch(aY, aZ),
      });
      aj.on("reloadPlayerResponse", async (aY) => {
        const aZ = await aL(a3, G, a2.poToken);
        const b0 = aZ.streaming_data?.["server_abr_streaming_url"];
        const b1 = b0 ? await a3.session.player?.["decipher"](b0) : null;
        const b2 =
          aZ.player_config?.["media_common_config"][
            "media_ustreamer_request_config"
          ]?.["video_playback_ustreamer_config"];
        if (b1 && b2) {
          aj.setStreamingURL(b1);
          aj.setUstreamerConfig(b2);
        }
      });
      const ak = [
        ...new Set(
          ab
            .filter((aY) => aY.mimeType?.["includes"]("video"))
            .map((aY) => aY.qualityLabel)
            .filter(Boolean),
        ),
      ];
      const al = [
        ...new Set(
          ab
            .filter((aY) => aY.mimeType?.["includes"]("audio"))
            .map((aY) => aY.audioQuality)
            .filter(Boolean),
        ),
      ];
      const aU = K.videoQuality || "480p";
      const aV = K.audioQuality || "AUDIO_QUALITY_MEDIUM";
      const aW = {
        preferWebM: false,
        preferOpus: false,
        videoQuality: ak.length > 0 ? aH(aU, ak, aF) : aU,
        audioQuality: al.length > 0 ? aH(aV, al, aG) : aV,
        enabledTrackTypes: "audio" === J ? 1 : 0,
      };
      const aX = await aj.start(aW);
      ac = aX.videoStream;
      ad = aX.audioStream;
    } else {
      const aY = {
        type: "audio" === J ? "audio" : "video+audio",
        quality: "best",
        format: "mp4",
      };
      const aZ = await a3.download(G, aY);
      if ("audio" === J) {
        ad = aZ;
      } else {
        ac = aZ;
        ad = null;
      }
    }
    const ae = [];
    if ("audio" === J) {
      const b0 = ar.join(ay, G + "_audio.m4a");
      ae.push(b0);
      await aM(ad, b0);
      return {
        audioPath: b0,
        metadata: a7,
        tempFiles: ae,
      };
    }
    {
      const b2 = ar.join(ay, G + "_video.mp4");
      const b3 = ar.join(ay, G + "_audio.m4a");
      ae.push(b2, b3);
      if (ad) {
        await Promise.all([aM(ac, b2), aM(ad, b3)]);
      } else {
        await aM(ac, b2);
        aq.copySync(b2, b3);
      }
      return {
        videoPath: b2,
        audioPath: b3,
        metadata: a7,
        tempFiles: ae,
      };
    }
  };
  const R = await az(H || "0")["catch"](() => null);
  if (R) {
    const W = ["TV", "TV_EMBEDDED"].filter((X) => M.Constants.CLIENTS[X]);
    for (const X of W)
      try {
        return await Q(X, R);
      } catch (Y) {
        P = Y;
      }
  }
  for (const a0 of N)
    try {
      return await Q(a0, null);
    } catch (a1) {
      P = a1;
    }
  const U = !!aI(H) || !!R;
  const V =
    P?.["message"]?.["toLowerCase"]()["includes"]("decipher") ||
    P?.["message"]?.["toLowerCase"]()["includes"]("cipher") ||
    P?.["message"]?.["toLowerCase"]()["includes"]("n function");
  if (!U && V) {
    throw new Error(
      aB.extra.yt_auth_required.replace("{0}", P?.["message"] || "Unknown"),
    );
  }
  throw new Error(
    "All clients failed to download. Last error: " +
      (P?.["message"] || "Unknown error"),
  );
};
const aT = (G, H, J) =>
  new Promise((K, L) => {
    as()
      .input(G)
      .input(H)
      .outputOptions(["-c:v copy", "-c:a aac", "-map 0:v:0", "-map 1:a:0"])
      .on("end", () => K())
      .on("error", (N, P, Q) =>
        L(new Error("Error merging files: " + N.message + ". Stderr: " + Q)),
      )
      .save(J);
  });
exports.getVideoInfo = async (H, J) => {
  const L = await aK(J);
  const M = await aL(L, H);
  const N = {
    id: H,
    title: M.video_details?.["title"] || "Unknown",
    duration: M.video_details?.["duration"],
    views: M.video_details?.["view_count"],
    author: M.video_details?.["author"],
    thumbnail: M.video_details?.["thumbnails"]?.[0] || null,
  };
  return N;
};
exports.downloadAudio = async (G, H, J = {}) => {
  try {
    const { audioPath: L, tempFiles: M } = await aS(G, H, "audio", J);
    const N = ar.join(ay, G + ".mp3");
    M.push(N);
    const P = await aN(L, N, "audio");
    await aO(M);
    return P;
  } catch (Q) {
    throw new Error("Failed to download audio: " + Q.message);
  }
};
exports.downloadVideo = async (G, H, J = {}) => {
  try {
    const {
      videoPath: L,
      audioPath: M,
      tempFiles: N,
    } = await aS(G, H, "video", J);
    const P = ar.join(ay, G + "_merged.mp4");
    const Q = ar.join(ay, G + "_out.mp4");
    N.push(P, Q);
    if (!aq.existsSync(L) || 0 === aq.statSync(L).size) {
      throw new Error("Video file is missing or empty: " + L);
    }
    if (!aq.existsSync(M) || 0 === aq.statSync(M).size) {
      throw new Error("Audio file is missing or empty: " + M);
    }
    await aT(L, M, P);
    const R = await aN(P, Q, "video");
    await aO(N);
    return R;
  } catch (V) {
    throw new Error("Failed to download video: " + V.message);
  }
};
exports.loadYoutube = aD;
