const aB = require('cheerio');
const { default: aC } = require('axios');
const aD = require('crypto-js');
const aE = 'aWxvdmV5b3Vzb29vb29vbWF0Y2hidXRpZG9udGtub3d3aHlpbGlrZWxvdmV3YW50dQ==';
const { iChecker: aF } = require('../test/test');
const aG = aF();
const aH = aG == aE;
if (aH) {
  const aI = 'qwertyuioplkjhgf';
  function aJ(q) {
    const u = aD.enc.Utf8.parse(aI);
    const v = aD.enc.Utf8.parse(q);
    return aD.AES.encrypt(v, u, {
      mode: aD.mode.ECB,
      padding: aD.pad.Pkcs7,
    }).ciphertext.toString(aD.enc.Hex);
  }
  function aK(...q) {
    function v(w, x, y) {
      const A = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ+/'.split('');
      const B = A.slice(0, x);
      const C = A.slice(0, y);
      let D = w
        .split('')
        .reverse()
        .reduce(function (F, G, H) {
          if (-1 !== B.indexOf(G)) {
            return F + B.indexOf(G) * Math.pow(x, H);
          }
        }, 0);
      let E = '';
      while (D > 0) {
        E = C[D % y] + E;
        D = (D - (D % y)) / y;
      }
      return E || '0';
    }
    return (function (w, x, y, z, A, B) {
      B = '';
      for (let C = 0, D = w.length; C < D; C++) {
        let E = '';
        while (w[C] !== y[A]) {
          E += w[C];
          C++;
        }
        for (let F = 0; F < y.length; F++) {
          E = E.replace(new RegExp(y[F], 'g'), F.toString());
        }
        B += String.fromCharCode(v(E, A, 10) - z);
      }
      return decodeURIComponent(encodeURIComponent(B));
    })(...q);
  }
  const aL = {
    dl13: async (q) => {
      try {
        const { data: v } = await aC.get('https://api.videodropper.app/allinone', {
          headers: {
            accept: '*/*',
            'accept-language': 'en-GB,en;q=0.9',
            priority: 'u=1, i',
            'sec-ch-ua': '"Not)A;Brand";v="99", "Google Chrome";v="127", "Chromium";v="127"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'cross-site',
            url: aJ(q),
            Referer: 'https://instavideosave.net/',
            'Referrer-Policy': 'strict-origin-when-cross-origin',
          },
        });
        const w = [];
        if ('image' in v) {
          for (const x of v.image) {
            w.push(x);
          }
        }
        if ('video' in v) {
          for (const y of v.video) {
            w.push(y.video);
          }
        }
        return w;
      } catch (z) {
        return [];
      }
    },
    dl1: async (q) => {
      const u = {
        RuQMO: function (v, w) {
          return v(w);
        },
        gLuVO: '.download-items__btn > a[href]',
        xpQTJ: 'href',
        SFXWL: 'url',
        jJWyU: 'action',
        LTPky: 'post',
        CgFGl: 'https://snapsave.app/action.php?lang=en',
        NeuTM: 'application/x-www-form-urlencoded',
        AvsoL: 'https://snapsave.app',
        oiknk: 'https://snapsave.app/',
        mfaLX:
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36',
        uAMPJ: function (v, ...w) {
          return v(...w);
        },
        NsmWH: '))</script>',
        fwlTx: 'decodeURIComponent(escape(r))}(',
        QJsHo: '("download-section").innerHTML = "',
        xLvoS: '"; parent.document.getElementById("inputData").remove();',
        RlLtO: '</style><section class=\\"section\\">',
        rLqlf: '</section>',
        ccrCD: 'div.download-items__btn',
      };
      try {
        const v = [];
        const w = new URLSearchParams();
        w.append(u.SFXWL, q);
        w.append(u.jJWyU, u.LTPky);
        const { data: x } = await aC.post(u.CgFGl, w, {
          headers: {
            'content-type': u.NeuTM,
            origin: u.AvsoL,
            referer: u.oiknk,
            'user-agent': u.mfaLX,
          },
        });
        const y = u.uAMPJ(
          aK,
          ...x
            .split(u.NsmWH)[0]
            .split(u.fwlTx)[1]
            .split(',')
            .map((B) => B.replace(/^"/, '').replace(/"$/, '').trim()),
        );
        const z =
          y
            .split(u.QJsHo)[1]
            ?.split(u.xLvoS)[0]
            ?.split(u.RlLtO)[1]
            ?.split(u.rLqlf)[0]
            ?.replace(/\\(\\)?/g, '') || '';
        const A = aB.load(z);
        u.RuQMO(A, u.ccrCD).each(function () {
          let B = u.RuQMO(A, this).find(u.gLuVO).attr(u.xpQTJ);
          if (B) {
            v.push(B);
          }
        });
        return v;
      } catch (B) {
        return [];
      }
    },
    dl2: async (q) => {
      try {
        const v = encodeURIComponent(q);
        const { data: w } = await aC.post(
          'https://api.downloadgram.org/media',
          'url=' + v + '&v=3&lang=en',
          {
            headers: {
              accept: '*/*',
              'accept-language': 'en-GB,en;q=0.9',
              'cache-control': 'no-cache',
              'content-type': 'application/x-www-form-urlencoded',
              pragma: 'no-cache',
              priority: 'u=1, i',
              'sec-ch-ua': '"Chromium";v="146", "Not-A.Brand";v="24", "Google Chrome";v="146"',
              'sec-ch-ua-mobile': '?0',
              'sec-ch-ua-platform': '"Windows"',
              'sec-fetch-dest': 'empty',
              'sec-fetch-mode': 'cors',
              'sec-fetch-site': 'same-site',
              Referer: 'https://downloadgram.org/',
            },
          },
        );
        const x = (w.split("['innerHTML']='")[1]?.split("',downloadMore()")[0] || '')
          .replace(/\\x20/g, ' ')
          .replace(/\\x22/g, '"')
          .replace(/\\'/g, "'");
        const y = aB.load(x);
        const z = [];
        y('a').each(function () {
          const A = y(this).attr('href');
          if (A && A.startsWith('http')) {
            z.push(A);
          }
        });
        return z;
      } catch (B) {
        return [];
      }
    },
    dl4: async (q) => {
      try {
        const v = encodeURIComponent(q);
        const { data: w } = await aC.post(
          'https://api.downloadgram.app/media',
          'url=' + v + '&lang=en',
          {
            headers: {
              'content-type': 'application/x-www-form-urlencoded',
              'sec-ch-ua': '"Chromium";v="146", "Not-A.Brand";v="24", "Google Chrome";v="146"',
              'sec-ch-ua-mobile': '?0',
              'sec-ch-ua-platform': '"Windows"',
              Referer: 'https://www.downloadgram.app/',
            },
          },
        );
        let x = w.split("['innerHTML']='")[1] || '';
        if (x.includes("',document[")) {
          x = x.split("',document[")[0];
        } else if (x.includes("',downloadMore(")) {
          x = x.split("',downloadMore(")[0];
        } else if (x.includes("',showAd(")) {
          x = x.split("',showAd(")[0];
        }
        const y = x.replace(/\\x20/g, ' ').replace(/\\x22/g, '"').replace(/\\'/g, "'");
        const z = aB.load(y);
        const A = [];
        z('a').each(function () {
          const D = z(this).attr('href');
          if (D && D.startsWith('http')) {
            A.push(D);
          }
        });
        return A;
      } catch (B) {
        return [];
      }
    },
  };
  const aM = /(https?:\/\/(?:www\.)?instagram\.com\/(?:.*\/|)(reel|p|tv)\/([-_0-9A-Za-z]+))/;
  exports.instagram = async (u) => {
    const v = {
      VACRz: function (z, A) {
        return z > A;
      },
      kJiRC: function (z, A) {
        return z > A;
      },
    };
    const w = v;
    u = u.split('?')[0];
    const x = aM.exec(u);
    if (!x) {
      return [];
    }
    if (w.VACRz(x[3].length, 11)) {
      return 301;
    }
    u = 'https://www.instagram.com/' + x[2] + '/' + x[3] + '/';
    for (const y in aL) {
      try {
        const z = await aL[y](u);
        if (z && w.kJiRC(z.length, 0)) {
          return z;
        }
      } catch (A) {}
    }
    return [];
  };
}
