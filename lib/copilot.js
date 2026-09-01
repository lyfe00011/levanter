function bS(i, j) {
  return g(i + 0x211, j);
}
function g(a, b) {
  const c = f();
  g = function (d, e) {
    d = d - 185;
    let h = c[d];
    if (g.HfcUSo === undefined) {
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
      g.ukTuYD = m;
      a = arguments;
      g.HfcUSo = true;
    }
    const j = c[0];
    const k = d + j;
    const l = a[k];
    if (!l) {
      if (g.bzMLqX === undefined) {
        const n = function (o) {
          this.YOtOnl = o;
          this.OumwYN = [1, 0, 0];
          this.fAUeDI = function () {
            return "newState";
          };
          this.iueWHh = "\\w+ *\\(\\) *{\\w+ *";
          this.qBUKYh = "['|\"].+['|\"];? *}";
        };
        n.prototype.bvUCrw = function () {
          const o = new RegExp(this.iueWHh + this.qBUKYh);
          const p = o.test(this.fAUeDI.toString())
            ? --this.OumwYN[1]
            : --this.OumwYN[0];
          return this.FViKcA(p);
        };
        n.prototype.FViKcA = function (o) {
          if (!Boolean(~o)) {
            return o;
          }
          return this.lGMbFX(this.YOtOnl);
        };
        n.prototype.lGMbFX = function (o) {
          let p = 0;
          for (let q = this.OumwYN.length; p < q; p++) {
            this.OumwYN.push(Math.round(Math.random()));
            q = this.OumwYN.length;
          }
          return o(this.OumwYN[0]);
        };
        new n(g).bvUCrw();
        g.bzMLqX = true;
      }
      h = g.ukTuYD(h, e);
      a[k] = h;
    } else {
      h = l;
    }
    return h;
  };
  return g(a, b);
}
function h(a, b) {
  const c = f();
  h = function (d, e) {
    d = d - 185;
    let g = c[d];
    if (h.vnbHqR === undefined) {
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
      h.NPRpLX = i;
      a = arguments;
      h.vnbHqR = true;
    }
    const j = c[0];
    const k = d + j;
    const l = a[k];
    if (!l) {
      const m = function (n) {
        this.JQIglf = n;
        this.asGmdc = [1, 0, 0];
        this.YLOYie = function () {
          return "newState";
        };
        this.NdWpIA = "\\w+ *\\(\\) *{\\w+ *";
        this.uLvAsg = "['|\"].+['|\"];? *}";
      };
      m.prototype.ooEZnL = function () {
        const n = new RegExp(this.NdWpIA + this.uLvAsg);
        const o = n.test(this.YLOYie.toString())
          ? --this.asGmdc[1]
          : --this.asGmdc[0];
        return this.SbqcXK(o);
      };
      m.prototype.SbqcXK = function (n) {
        if (!Boolean(~n)) {
          return n;
        }
        return this.dwAyZf(this.JQIglf);
      };
      m.prototype.dwAyZf = function (n) {
        let o = 0;
        for (let p = this.asGmdc.length; o < p; o++) {
          this.asGmdc.push(Math.round(Math.random()));
          p = this.asGmdc.length;
        }
        return n(this.asGmdc[0]);
      };
      new m(h).ooEZnL();
      g = h.NPRpLX(g);
      a[k] = g;
    } else {
      g = l;
    }
    return g;
  };
  return h(a, b);
}
(function (i, j) {
  const k = i();
  while (true) {
    try {
      const l =
        parseInt(g(1118, "nh(l")) / 1 +
        -parseInt(h(760, 0x3cf)) / 2 +
        parseInt(h(862, 0x628)) / 3 +
        (-parseInt(h(313, -0x15c)) / 4) * (parseInt(g(435, "l0uL")) / 5) +
        (parseInt(g(652, "P08f")) / 6) * (parseInt(g(340, "JH3Z")) / 7) +
        parseInt(g(190, "ux2z")) / 8 +
        -parseInt(g(434, "EV2A")) / 9;
      if (l === j) {
        break;
      } else {
        k.push(k.shift());
      }
    } catch (m) {
      k.push(k.shift());
    }
  }
})(f, 935526);
const aZ = (function () {
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
function bV(i, j) {
  return g(i - 0x2bc, j);
}
function f() {
  const dR = [
    "yY9H",
    "dSkQW7q",
    "WRpcTw8",
    "WRa2WRe",
    "zxn0",
    "mtm5nJeYnJrQtuXRyvy",
    "WRzeoG",
    "WPXega",
    "WP5pWQu",
    "W648xa",
    "WPHgW7S",
    "W5SphW",
    "DxjS",
    "dxiI",
    "ALJdOW",
    "WO0yW4e",
    "yxqN",
    "WPqqWOq",
    "WQ9UW5y",
    "lsXU",
    "W5BcKSoM",
    "zMXP",
    "WO4dW6q",
    "sxnu",
    "WPCuW74",
    "v2vI",
    "Dg9t",
    "B3iO",
    "Aw5M",
    "ecxcMa",
    "vhjN",
    "juif",
    "svPm",
    "mtmYnZK5mLnqy0znua",
    "te9d",
    "pIPZ",
    "WPn6W7W",
    "x8oDFa",
    "W4ZdM8kU",
    "WOS0W5q",
    "Awz5",
    "ChjV",
    "vLfz",
    "WPLdW5O",
    "C3qG",
    "CwvO",
    "W4ultG",
    "W4qrvW",
    "WP5Smq",
    "tLHL",
    "zMLY",
    "zMzd",
    "W71BW4W",
    "DgvK",
    "C29S",
    "cu9h",
    "WP3dMH0",
    "W6tdQX0",
    "W57dTbC",
    "W5tdKfO",
    "WPWsW54",
    "w1Db",
    "BgLJ",
    "W6JdVse",
    "vxnL",
    "igzH",
    "r3fb",
    "W4pdH04",
    "WOaFya",
    "BM5L",
    "BLNdIa",
    "yxrL",
    "qNDx",
    "nCkUaW",
    "zLLH",
    "v2L0",
    "iIbP",
    "zvvY",
    "wmktBq",
    "W6PQW7e",
    "W4iyqG",
    "W6tdG1q",
    "D0nY",
    "oSkQW7i",
    "W6JcN1C",
    "WO9tCG",
    "yxjY",
    "W6XoBb5RuIK",
    "W4Kcha",
    "CNnH",
    "AvNdHq",
    "CvDgotNcQr8tW7CUWOZcJbC",
    "W7TIW7a",
    "B3tdRq",
    "ChrV",
    "C3qU",
    "W680dW",
    "eYFdPW",
    "mt8b",
    "rSkaW4G",
    "BML0",
    "ue9A",
    "nLJdVG",
    "B20V",
    "W6RdQu0",
    "W7OdW7G",
    "iKrm",
    "W4XAWOW",
    "fMuZ",
    "W4rzra",
    "WQf4aSknW43cHbpdOhBdRqmRsW",
    "s0fI",
    "CMvU",
    "kKfN",
    "WOxcPmoJ",
    "W78scG",
    "WRjfoq",
    "iCkiW7y",
    "W4ibxq",
    "iv8c",
    "vSkKW48",
    "WOChW6m",
    "W7TdW5q",
    "yCkFWRK",
    "ySoAwa",
    "W4hdPCkX",
    "WOqsW78",
    "WOWOW6y",
    "WOmvWOq",
    "z2v0",
    "oezg",
    "WRGeWPa",
    "cCk6mG",
    "AwfJ",
    "WQCcyG",
    "uMvM",
    "WRbssW",
    "W5pcQHe",
    "utVcSa",
    "q29U",
    "W4/cIue",
    "W4upsG",
    "WPJdLGC",
    "C3bS",
    "WQjdcW",
    "zYbK",
    "DCoLsW",
    "CM9Y",
    "fG5v",
    "Bs5Q",
    "W6TTWQe",
    "wM13",
    "w3hdLq",
    "W6SWAa",
    "W7pdLvq",
    "DCoHwa",
    "W4uRbG",
    "ALL1",
    "W4ieaa",
    "W5PCW40",
    "W7/cIaO",
    "WQujW6O",
    "C2nY",
    "CM9J",
    "C3HJ",
    "WQfdW4G",
    "r2L2",
    "W4tcSq4",
    "WOXaW60",
    "BMD1",
    "zejh",
    "W5hdOqa",
    "mfil",
    "Cg9U",
    "zw4T",
    "Dc5J",
    "WRfTW5O",
    "WPisW5q",
    "WPSdlG",
    "ihvW",
    "W5BcG8kN",
    "feOo",
    "igzY",
    "w8kOtG",
    "C3Dr",
    "BuTZ",
    "nLvd",
    "CuXz",
    "CIKU",
    "Bwrj",
    "WPVdMb0",
    "Avn2",
    "W65LBG",
    "sMmV",
    "tLvv",
    "WOFdMCk1",
    "CI1b",
    "zfrp",
    "W4ZcICoP",
    "BMLZ",
    "zmo4Aa",
    "BgvK",
    "W6pdRgi",
    "WOWwWP8",
    "WOaiBW",
    "W5Sveq",
    "WQ9hca",
    "WP85Fa",
    "W7a7DW",
    "BIb0",
    "W5pcRSoJ",
    "kI8Q",
    "mxK3",
    "WO93va",
    "W6xdVd/cI8oIWRb5W5JcQ8kYeuWhWRS",
    "zKFdMq",
    "W5DbWOy",
    "WQb+fG",
    "BMCG",
    "WPFdL8k8",
    "ANbL",
    "EHNcIG",
    "WPdcRCk/",
    "v1b0",
    "ELHA",
    "iezP",
    "FSoHxa",
    "W40ZgW",
    "l0ldHa",
    "W7m9uq",
    "DMvY",
    "ltS1",
    "lM1P",
    "W4/cSSoP",
    "W5Wuua",
    "tCoVWRa",
    "W5P2la",
    "ibmb",
    "hIZcKq",
    "aMvV",
    "zuLK",
    "ftVdVq",
    "bhGU",
    "WQjejq",
    "zxb0",
    "W7PUWQC",
    "DCoLtW",
    "AKxdRG",
    "zxjY",
    "iej1",
    "umkyzG",
    "W4KCgW",
    "nGa6",
    "g8oeva",
    "ySkNW48",
    "zgvY",
    "tCkyka",
    "ksSK",
    "ienH",
    "aJZdUG",
    "C2vU",
    "nSkyW5e",
    "W5eNrG",
    "A3rk",
    "WOFcVCoJ",
    "WQtcVmoI",
    "A2v0",
    "yxrH",
    "BwvU",
    "vvjm",
    "Bg9H",
    "W67cU10",
    "vSkzFG",
    "z2vU",
    "WQGoWP8",
    "W5BcV8oW",
    "nGah",
    "WOKaWRS",
    "W5ilW40",
    "uK5D",
    "W4pdH0W",
    "W7uLea",
    "zuLw",
    "WRyqW7y",
    "WO8lWOy",
    "c3q0",
    "CNrn",
    "W4q1oa",
    "zNjV",
    "W4S1zuVcQeSKvCocW6FcJMSz",
    "BMJcUq",
    "DxjU",
    "mmoQia",
    "otq2",
    "D8oEBq",
    "W6SEua",
    "eqbY",
    "W4WGEa",
    "Aw1H",
    "uSkNW5u",
    "W7jOdW",
    "WPOzWP4",
    "lxzL",
    "odK1",
    "Aw5N",
    "W6BdI0S",
    "W68+vq",
    "shD0",
    "W7VcJKe",
    "C1bO",
    "Cg9Z",
    "wKDr",
    "WPGyWP8",
    "hKldHq",
    "WR/cOxm",
    "Def5",
    "W4BcTrC",
    "qwnJ",
    "W7VcK0G",
    "WOulWPK",
    "W4JcG0K",
    "BNrZ",
    "W4dcVCo0",
    "W6xcKe4",
    "idOG",
    "y3j5",
    "WPSTW6y",
    "WPLSmG",
    "DdpcLG",
    "W7HkW5q",
    "WOCnWOm",
    "C2LV",
    "fZdcKG",
    "WRfpFG",
    "W70fWRS",
    "W4eQpa",
    "j2nO",
    "D2fY",
    "WRhcJwm",
    "W5Wulq",
    "W6i8wq",
    "cmk5W7u",
    "c1pcNG",
    "Axnc",
    "kg11",
    "W5FcSbq",
    "W6XqWPm",
    "W4usaW",
    "W5ixeq",
    "uK9s",
    "zK9P",
    "uM1W",
    "W5vGCW",
    "vSkAka",
    "W59faa",
    "o8kFea",
    "rKfo",
    "ver5",
    "zsbJ",
    "Aw9U",
    "B25Z",
    "WQ7dMaa",
    "C2f0",
    "oSkGW6m",
    "vLLo",
    "cmk3W6q",
    "W5r/WPy",
    "W7yunq",
    "WPHIlW",
    "CM90",
    "CNrZ",
    "W4XrvW",
    "huS2",
    "W67dL1a",
    "Aw5P",
    "CeldJq",
    "As7cKq",
    "icHM",
    "ECo2sq",
    "s3j6",
    "DvPx",
    "zxzL",
    "Agv4",
    "u29J",
    "WPeBza",
    "lcaF",
    "W5/dGvO",
    "y3jV",
    "xqxcJ8odyJHiFL7dPSoaWOdcICoG",
    "W5pdOqO",
    "zMfS",
    "WPT3oq",
    "z3ZdUG",
    "zwvK",
    "WRddQq0",
    "yuPt",
    "mty5mdy1mNr2vufSzW",
    "C21H",
    "mmk3Eq",
    "WQ4OvG",
    "B3bP",
    "BJ3cJa",
    "W4BdObC",
    "bGbp",
    "wSkXW5u",
    "DhvZ",
    "C2vH",
    "r0zI",
    "WQDjW6G",
    "WOLIoW",
    "bvVdLW",
    "W60vWQ4",
    "yMPl",
    "WP8EwW",
    "W5WsrW",
    "C2xdTa",
    "uv5V",
    "BMVdVG",
    "WPCcBW",
    "B19F",
    "WRFcTMi",
    "CvNdNG",
    "W5vgWOq",
    "WQ5fva",
    "zxrd",
    "E07dRa",
    "B2TP",
    "W5WiCq",
    "yMuG",
    "ieLe",
    "Eaa6",
    "W5BcG8o0",
    "W5FcQGK",
    "s3nL",
    "zxiU",
    "BIbP",
    "WPO1W5u",
    "rmk1W5i",
    "CwTM",
    "zwL2",
    "WOpcGCo9",
    "AwnY",
    "Dg9j",
    "hSkUW6q",
    "W7ToW44",
    "WPedW6q",
    "BuLB",
    "Dgf0",
    "thnJ",
    "Bg90",
    "zwqG",
    "zKLM",
    "EuP1",
    "mc4j",
    "B8kxba",
    "Cfny",
    "zKtdNG",
    "bmkLca",
    "DhjP",
    "gmoJxa",
    "ChqG",
    "eINdUG",
    "C2LU",
    "zw5K",
    "Dw5J",
    "oqtcMa",
    "ChbL",
    "txjx",
    "tfxdHa",
    "WPtcUSo/",
    "WQizgq",
    "y055",
    "WPrjba",
    "WOWwW74",
    "yM1W",
    "zxnZ",
    "WPtdMCk1",
    "W4lcJde",
    "WQmBCW",
    "lIxcMa",
    "WOGxta",
    "ndi0",
    "tCoQnG",
    "Chm6",
    "zvr7",
    "rCkXW5C",
    "b8k5cq",
    "WRv0eW",
    "CMvX",
    "WPutW5O",
    "W4CvxG",
    "ygHt",
    "W5tdOrm",
    "y2SG",
    "WO3dJWW",
    "W4dcRmoa",
    "Avfc",
    "ywnO",
    "p8kNW6m",
    "yqqP",
    "W54qda",
    "WOBcILO",
    "zxf1",
    "kCkJcW",
    "vhLW",
    "FJpcLG",
    "DMjt",
    "W6JdQNa",
    "A09c",
    "rmohhq",
    "W7aNtG",
    "nhHHyLDfuG",
    "WOXAgG",
    "WRnzea",
    "yuz1",
    "bwZdOq",
    "CINcNW",
    "uLzV",
    "z2uS",
    "W4irbG",
    "Aw5J",
    "lIbv",
    "a8kQW7m",
    "gSoTAW",
    "ywrL",
    "W4ldG0S",
    "i33dVG",
    "xY9O",
    "iu8g",
    "W67dR3G",
    "Dc1u",
    "W7tdQXe",
    "BsZcNq",
    "lIbq",
    "zLrt",
    "WQSpW4y",
    "rxqO",
    "A0vP",
    "W51zW6FdRCoep8kTW67cH8oIzmobxG",
    "dmoRxq",
    "WP0bza",
    "WPWsW4m",
    "ywXP",
    "W4ZdGtC",
    "vvmS",
    "gCkGW6q",
    "sw5A",
    "W5SAcG",
    "uSkYtq",
    "CgfY",
    "W5fjWOq",
    "zxj2",
    "DgLV",
    "zhbu",
    "icbs",
    "WOVcLGG",
    "C29U",
    "hSkLcG",
    "cSoZyG",
    "bM8P",
    "ExbL",
    "W7SHva",
    "y29V",
    "B3iU",
    "WOKuWOO",
    "WRnQva",
    "BYbZ",
    "zWZcKG",
    "AI/cIW",
    "DxmG",
    "w3b4",
    "W7iVdW",
    "vePm",
    "r8kLla",
    "W6ddHfm",
    "Agj0",
    "DNvp",
    "ndC0",
    "juuF",
    "Cmk3dW",
    "W7ORva",
    "W4aPra",
    "BcbM",
    "DLPH",
    "WQdcOCoK",
    "x2DL",
    "W5qxbG",
    "W5SqsG",
    "AgLZ",
    "W7GlaG",
    "zef0",
    "W6Sqva",
    "WOyqW7i",
    "WQ17hCkqpaNcICoIW5/dJSojWOaA",
    "WOycCW",
    "w0vs",
    "rMfP",
    "BhLs",
    "ksb0",
    "DMr6",
    "WP5Ika",
    "mmoJuG",
    "BwfN",
    "zgjt",
    "vgv4",
    "fddcJW",
    "WQfsfG",
    "xchcKG",
    "C2uG",
    "WPyCW5m",
    "W6StAW",
    "CKXV",
    "umkAAq",
    "B20G",
    "W6ddIe4",
    "wSoeCG",
    "WQvyvW",
    "CMfU",
    "tmkfza",
    "jNu1",
    "zgf0",
    "W7WcdG",
    "W5ldJve",
    "y2HH",
    "h8kQW6e",
    "W5RdSe0",
    "ywDL",
    "W7xcJSop",
    "Dgv4",
    "f3mU",
    "Ahr0",
    "A2ft",
    "WQVdGHZdHIRdLSkbW67cTSk8xSoQhuK",
    "dCobpCowxqKJEIhcKCo9BbO",
    "WOxdMSkY",
    "t25b",
    "W5xcH8o1",
    "W5FcQ8o/",
    "WOZdLaO",
    "WPlcQCoK",
    "gmk5rG",
    "Cg5N",
    "dc4/",
    "lY9J",
    "BwfW",
    "WQBcOxy",
    "WPahW6m",
    "FSo+sq",
    "q3H4",
    "W6yCCq",
    "WRC2WR4",
    "WRaxWRa",
    "Cmk/hG",
    "WPrdeW",
    "BgvJ",
    "Awf0",
    "yufO",
    "WOubWQm",
    "BgjH",
    "WPyqW5e",
    "omkllG",
    "C3rH",
    "WOiuWPS",
    "z2uV",
    "W4GajW",
    "icbq",
    "zuHL",
    "WRVcTMO",
    "BKLK",
    "WRriW74",
    "Dwn0",
    "W59AWOy",
    "WOeAWOm",
    "W69nWPa",
    "W7uHxG",
    "y8oNxa",
    "WQvBvG",
    "DgGG",
    "dmoVva",
    "z2vJ",
    "yxHP",
    "W4mgha",
    "WR5Mnq",
    "txDo",
    "Bw9b",
    "gmkSW6q",
    "W7vfWOi",
    "yCk1bW",
    "W6ZcN1y",
    "s1jc",
    "zw95",
    "sw52",
    "BK3dKq",
    "WRzfgW",
    "lSk8W4u",
    "vmk7W4G",
    "E30U",
    "WQxdNdW",
    "z3rO",
    "W50utq",
    "W6NcJLy",
    "BIGP",
    "W7xcRIi",
    "W5tdR1a",
    "BgfJ",
    "wfnP",
    "AgvH",
    "W7uNqq",
    "W5lcTWK",
    "B3qG",
    "uNju",
    "WPnaW6C",
    "ALNdGG",
    "wxDV",
    "WQemWRm",
    "ig9Y",
    "W7pcLuO",
    "WRBcQ8oZ",
    "q29K",
    "DwvZ",
    "C8kaEa",
    "lSkyW54",
    "CMvJ",
    "DgvU",
    "C2fN",
    "zMzL",
    "luXH",
    "zxjZ",
    "AfPg",
    "iLey",
    "W5yytq",
    "W5pdJry",
    "WQHNvq",
    "WRL0qG",
    "sw1H",
    "fM8H",
    "cSkVca",
    "tfvy",
    "WQ0UW4q",
    "yxbW",
    "W69+W7y",
    "WRpcOsG",
    "lSkDka",
    "vxnP",
    "yxbP",
    "WRfJtW",
    "CSo+uW",
    "rhPU",
    "W5ddLKS",
    "D09e",
    "WRXFwG",
    "WOfjW6G",
    "W5yFza",
    "tenS",
    "DgLH",
    "lISP",
    "C1FdNG",
    "pCoNqW",
    "t8kTfW",
    "WOHSmq",
    "DeLT",
    "eJ7dRa",
    "WQKuWOO",
    "DgfU",
    "Afrj",
    "x19W",
    "CCoWwa",
    "isah",
    "W5Gira",
    "zwzH",
    "q29V",
    "W5OurG",
    "nCkHha",
    "WRXcwW",
    "yCkoaW",
    "W6ueuW",
    "zLDc",
    "uMHZ",
    "W54uta",
    "eIhdPW",
    "W4tdTHC",
    "WPmilG",
    "W7dcRmo4",
    "zguG",
    "D0jV",
    "FSk5W6a",
    "yMLU",
    "W6dcTWG",
    "ieHu",
    "W6/dHKi",
    "W4euea",
    "g8oLva",
    "W57dL0i",
    "tLf1",
    "yLvW",
    "cwKJ",
    "wLrp",
    "WPrEhG",
    "C3rY",
    "CwVdVW",
    "DMPf",
    "xmkQdW",
    "D2vI",
    "WQZdVGW",
    "yKTn",
    "BhvK",
    "CMvZ",
    "sLLy",
    "WPOzWPa",
    "WQGWtSofuNxdQq",
    "WOxcMrO",
    "DSkOaq",
    "W7vgW4e",
    "pfOI",
    "CMXg",
    "q1zT",
    "tIbT",
    "vLPq",
    "Er3cJa",
    "WOnFW6y",
    "y29U",
    "tM9h",
    "exu1",
    "Dvbm",
    "EuvQ",
    "vxfV",
    "w8kDqW",
    "W6ldN0K",
    "CMv0",
    "q1Do",
    "u2Lj",
    "WQLVva",
    "W7uLtG",
    "icbt",
    "uaddNq",
    "ALJdIW",
    "WQDBW5W",
    "W67dNLm",
    "W5rFva",
    "WOfdea",
    "vvrP",
    "eWNcSa",
    "W440Aa",
    "neiE",
    "uefZ",
    "x2XV",
    "svfX",
    "FSoItW",
    "WQfLW7y",
    "z3fO",
    "W4nIkmoOhCozfa",
    "zwfT",
    "qM15",
    "ESkPqa",
    "W6BcICoP",
    "WPFdMCk9",
    "cCkoW6q",
    "us7cKa",
    "kYKR",
    "f8oVwW",
    "FcJdMa",
    "qxPZ",
    "CMvH",
    "WQDqxa",
    "rfP1",
    "WONdPee",
    "A2VdTW",
    "WRaEW7u",
    "yKv0",
    "WRWkW7G",
    "WRydxW",
    "WRlcH8oj",
    "WPldK8kP",
    "DmkvWQu",
    "WQxcGSoD",
    "CMnO",
    "tM8G",
    "WOxdHSod",
    "W4FdH00",
    "DhvY",
    "W4VcMCk4",
    "WPXggG",
    "W4iCvW",
    "WQpcMq8",
    "W7FcIea",
    "De9T",
    "W7/cNKm",
    "Bw9K",
    "WP4jWPa",
    "WOqelG",
    "CffR",
    "q2H1",
    "Dg90",
    "a0xdMq",
    "CgpdUG",
    "z2LM",
    "t0Ti",
    "WOajW7K",
    "yMfZ",
    "WQHJsW",
    "WRm2WRG",
    "ihrV",
    "WOiiCW",
    "o8oOdq",
    "WPedW7q",
    "WRhcQJW",
    "WQ7dPCku",
    "BwvZ",
    "Bxvs",
    "WRq0W6m",
    "WOzplq",
    "zMvH",
    "BtxdLW",
    "W6RcLem",
    "gCoHW7m",
    "y0LH",
    "y29W",
    "zgDL",
    "vefL",
    "zcbP",
    "W7K+sG",
    "W4eDbW",
    "CxvR",
    "nqFdKa",
    "C2vZ",
    "BCkcWQm",
    "uxDf",
    "s8k6yq",
    "CwhdJq",
    "W78HxG",
    "WRC8WQK",
    "WQyPW44",
    "CMPs",
    "fGzo",
    "WOVdLGC",
    "WPejW6u",
    "exiU",
    "WPffva",
    "WRj9W5G",
    "AfrP",
    "udhcTq",
    "CKzS",
    "W6VcMSoK",
    "WQnUW5K",
    "Dfvc",
    "uvbZ",
    "Dg9v",
    "W4uEdq",
    "A1jY",
    "WRvinW",
    "zMHW",
    "WPzfea",
    "CwxdVG",
    "wdlcIa",
    "Ewvt",
    "WQtcTZ0",
    "zLrO",
    "aCkQW74",
    "mJaXoty3mLrmwLv0wa",
    "oSkVba",
    "CNDX",
    "WQBcOxm",
    "A2LL",
    "Ct0W",
    "W6yxgq",
    "AtpcQW",
    "W7KBsG",
    "zxnH",
    "WQ5kW5e",
    "WPCcBa",
    "eSoVva",
    "WRy5wq",
    "z2js",
    "BYJcIW",
    "mICb",
    "WPqCWPm",
    "yMTH",
    "WRDCxW",
    "W69kW5q",
    "WOvEea",
    "z0vY",
    "CKnH",
    "BgvU",
    "vMXY",
    "W5iiWO0",
    "WPunW5u",
    "WPtcP8o+",
    "W5uNmW",
    "yxr0",
    "y3jL",
    "C2v0",
    "yxrP",
    "ywDN",
    "WOSpW5K",
    "f8oOtG",
    "WROHwq",
    "W4BcPmo/",
    "DKfr",
    "EMj4",
    "WPmxeq",
    "Evzb",
    "yxnJ",
    "fs3cKa",
    "q8kRha",
    "DhmV",
    "DeLK",
    "WQrfeq",
    "W4BcLmoI",
    "u0XL",
    "WQvzW6G",
    "WPXoWOi",
    "B1b/",
    "a8oMWPi",
    "WPCPW5K",
    "ig1V",
    "WPfEtq",
    "cSkQW74",
    "uNHc",
    "BgL6",
    "D8oYuW",
    "icaG",
    "nti0",
    "zvTt",
    "W5OyvW",
    "c1pdMa",
    "DwzM",
    "W5TJW6i",
  ];
  f = function () {
    return dR;
  };
  return f();
}
function ci(i, j) {
  return g(j - 0x31b, i);
}
const b0 = aZ(this, function () {
  return b0
    .toString()
    .search("(((.+)+)+)+$")
    .toString()
    .constructor(b0)
    .search("(((.+)+)+)+$");
});
b0();
const b1 = (function () {
  let j = true;
  return function (k, l) {
    const n = j
      ? function () {
          if (l) {
            const p = l.apply(k, arguments);
            l = null;
            return p;
          }
        }
      : function () {};
    j = false;
    return n;
  };
})();
function c6(i, j) {
  return g(i - 0x101, j);
}
function bP(i, j) {
  return h(j - 0x11e, i);
}
const b2 = b1(this, function () {
  let j;
  try {
    const m = Function('return (function() {}.constructor("return this")( ));');
    j = m();
  } catch (n) {
    j = window;
  }
  const k = (j.console = j.console || {});
  const l = ["log", "warn", "info", "error", "exception", "table", "trace"];
  for (let p = 0; p < l.length; p++) {
    const q = b1.constructor.prototype.bind(b1);
    const u = l[p];
    const v = k[u] || q;
    q.__proto__ = b1.bind(b1);
    q.toString = v.toString.bind(v);
    k[u] = q;
  }
});
b2();
const b3 = require("axios");
const b4 = require("ws");
const b5 = require("crypto");
const { genHeader: b6 } = require("./constants/spam.js");
function bQ(i, j) {
  return h(j - 0xb5, i);
}
function bU(i, j) {
  return h(j + 0x199, i);
}
function ch(i, j) {
  return g(j + 0x25, i);
}
function bT(i, j) {
  return h(i - 0x3e7, j);
}
function bR(i, j) {
  return h(j + 0x260, i);
}
class b7 {
  constructor(i) {
    this.axios = b3.create();
    this.baseHeaders = b6();
    this.conversation = null;
    this.cookies = i || "";
  }
  ["_logError"](j, k) {
    if (j.response) {
      console.error("  Status Code: " + j.response.status);
      console.error(
        "  Data       : " + JSON.stringify(j.response.data, null, 2),
      );
    } else if (j.request) {
      console.error("  Request    : No response received from server.");
    } else {
      console.error("  Pesan      : " + j.message);
    }
  }
  ["_getImageType"](j) {
    const k = {
      rlFQC: "hex",
    };
    k.wxGvn = "FFD8FF";
    k.CWNEA = "image/jpeg";
    k.UqoRO = "89504E47";
    k.gqhQa = "image/png";
    k.wBovf = "47494638";
    k.GivIb = "image/gif";
    k.NQuPB = "52494646";
    k.ZTOnt = function (n, p) {
      return n === p;
    };
    k.qkfYF = "WEBP";
    k.HFepf = "ascii";
    k.FANho = "image/webp";
    k.bjKmB = "424D";
    k.LscGF = "image/bmp";
    const m = j.toString("hex", 0, 4).toUpperCase();
    if (m.startsWith(k.wxGvn)) {
      return k.CWNEA;
    }
    if (m.startsWith(k.UqoRO)) {
      return k.gqhQa;
    }
    if (m.startsWith(k.wBovf)) {
      return k.GivIb;
    }
    if (m.startsWith(k.NQuPB)) {
      if (k.ZTOnt(k.qkfYF, j.toString(k.HFepf, 8, 12))) {
        return k.FANho;
      }
    }
    return m.startsWith(k.bjKmB) ? k.LscGF : k.CWNEA;
  }
  async ["genConversation"]() {
    const j = {
      GqAlf: "Invalid imageUrl format (must be URL or Buffer).",
    };
    j.UTiEw = function (l, m) {
      return l === m;
    };
    j.uPLRw = "bkabg";
    j.yEjTT = "LClBS";
    j.POZbK = "https://copilot.microsoft.com/c/api/conversations";
    j.hTiwF = "application/json";
    j.BmyVA = "set-cookie";
    j.fWBEL = "genConversation()";
    j.KseTp = "Failed to create conversation.";
    try {
      if (j.UTiEw(j.uPLRw, j.yEjTT)) {
        if (!q.isBuffer(u)) {
          throw new v("Invalid imageUrl format (must be URL or Buffer).");
        }
        w = x;
        y = this._getImageType(z);
      } else {
        const m = await this.axios.post(j.POZbK, null, {
          headers: {
            ...this.baseHeaders,
            "Content-Type": j.hTiwF,
          },
        });
        const n = m.headers[j.BmyVA];
        if (n) {
          this.cookies = n.map((p) => p.split(";")[0]).join("; ");
        }
        this.conversation = m.data;
        this.conversation;
        return this.conversation;
      }
    } catch (p) {
      this._logError(p, j.fWBEL);
      throw new Error(j.KseTp);
    }
  }
  async ["genImage"](l) {
    if (!this.conversation?.["id"]) {
      throw new Error("Session not initialized. Call genConversation() first.");
    }
    try {
      let p;
      let q = "image/jpeg";
      if ("string" == typeof l && l.startsWith("http")) {
        const w = {
          responseType: "arraybuffer",
        };
        const x = await b3.get(l, w);
        p = Buffer.from(x.data);
        q = x.headers["content-type"] || this._getImageType(p);
      } else {
        if (!Buffer.isBuffer(l)) {
          throw new Error("Invalid imageUrl format (must be URL or Buffer).");
        }
        p = l;
        q = this._getImageType(p);
      }
      const u = {
        "Content-Type": q,
        "User-Agent": this.baseHeaders["User-Agent"],
        Referer: "https://copilot.microsoft.com/chats/" + this.conversation.id,
        Cookie: this.cookies,
        Accept: "*/*",
        "Accept-Language": "en-US,en;q=0.9",
      };
      return (
        await this.axios.post(
          "https://copilot.microsoft.com/c/api/attachments",
          p,
          {
            headers: u,
            maxContentLength: Infinity,
            maxBodyLength: Infinity,
          },
        )
      ).data;
    } catch (z) {
      this._logError(z, "genImage()");
      throw new Error("Failed to upload image.");
    }
  }
  async ["chat"]({ prompt: i, imageUrl: j, mode: k, conversationId: l, ...m }) {
    return new Promise(async (x, y) => {
      try {
        if (l) {
          this.conversation = {
            id: l,
          };
        } else {
          if (!this.conversation?.["id"]) {
            try {
              await this.genConversation();
            } catch (N) {
              const O = b5.randomUUID();
              const P = {
                id: O,
              };
              this.conversation = P;
              console.warn(
                "[WARN] HTTP session initiation failed. Using fallback conversation ID from crypto: " +
                  O,
              );
            }
          }
        }
        let B = "chat";
        if (k && ["chat", "smart", "reasoning"].includes(k)) {
          B = k;
        } else if (k) {
          console.warn(
            '[WARN] Mode "' + k + "\" invalid. Using default mode 'chat'.",
          );
        }
        let C = null;
        if (j) {
          try {
            C = await this.genImage(j);
          } catch (S) {
            console.warn(
              "[WARN] " + S.message + ". Proceeding with text prompt only.",
            );
          }
        }
        const D = new URL("wss://copilot.microsoft.com/c/api/chat");
        const E = {
          "api-version": "2",
          features: "-,ncedge,edgepagecontext",
          setflight: "-,ncedge,edgepagecontext",
          ncedge: "1",
        };
        D.search = new URLSearchParams(E).toString();
        const F = {
          ...this.baseHeaders,
        };
        F.Cookie = this.cookies;
        const H = new b4(D.href, {
          headers: F,
        });
        const I = {
          conversationId: this.conversation.id,
          messageId: null,
          mode: B,
          createdAt: null,
          requestId: null,
          attachment: C,
          events: [],
        };
        let J = false;
        let K = "";
        H.on("message", (T) => {
          try {
            const W = JSON.parse(T.toString());
            I.events.push(W);
            if (!J && "connected" === W.event) {
              J = true;
              I.requestId = W.requestId;
              const Y = [];
              if (C?.["url"]) {
                Y.push({
                  type: "image",
                  url: C.url,
                });
              }
              if (i) {
                Y.push({
                  type: "text",
                  text: i,
                });
              }
              if (0 === Y.length) {
                H.close();
                return y(new Error("No content (prompt or image) to send."));
              }
              const Z = {
                ...m,
              };
              const a0 = {
                event: "send",
                conversationId: this.conversation.id,
                content: Y,
                mode: B,
                context: Z,
              };
              return void H.send(JSON.stringify(a0));
            }
            if (J) {
              if (!("received" !== W.event && "startMessage" !== W.event)) {
                I.messageId = W.messageId;
                I.createdAt = W.createdAt;
              }
              if ("modeSelected" === W.event) {
                I.mode = W.mode;
              }
              const a2 =
                "appendText" === W.event || "chainOfThought" === W.event
                  ? W.text
                  : "";
              K += a2;
              if ("done" === W.event) {
                H.close(1000, "Streaming Finished");
                x({
                  result: K.trim().replaceAll("**", "*"),
                  metadata: {
                    conversationId: I.conversationId,
                    messageId: null,
                    mode: I.mode,
                    createdAt: null,
                    requestId: null,
                    attachment: I.attachment,
                    totalEvents: I.events.length,
                    timestamp: new Date().toISOString(),
                  },
                  raw: {
                    events: I.events,
                  },
                });
              }
            }
          } catch (a4) {
            console.error(
              "[ERROR] Failed to parse JSON message from WebSocket:",
              a4.message,
            );
          }
        });
        H.on("error", (T) => {
          this._logError(T, "WebSocket");
          y(new Error("WebSocket connection error."));
        });
      } catch (U) {
        y(U);
      }
    });
  }
  ["getCurrentConversationId"]() {
    return this.conversation?.["id"] || null;
  }
  ["resetConversation"]() {
    this.conversation = null;
    this.cookies = "";
  }
}
module.exports = b7;
