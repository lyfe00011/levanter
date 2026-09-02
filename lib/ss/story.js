const ax = require('axios');
const ay = require('cheerio');
const az = 'aWxvdmV5b3Vzb29vb29vbWF0Y2hidXRpZG9udGtub3d3aHlpbGlrZWxvdmV3YW50dQ==';
const { iChecker: aA } = require('../test/test');
const aB = aA();
const aC = aB == az;
const aD = require('form-data');
function aE(...l) {
  function o(p, q, u) {
    const w = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ+/'.split('');
    const x = w.slice(0, q);
    const y = w.slice(0, u);
    let z = p
      .split('')
      .reverse()
      .reduce(function (B, C, D) {
        if (-1 !== x.indexOf(C)) {
          return B + x.indexOf(C) * Math.pow(q, D);
        }
      }, 0);
    let A = '';
    while (z > 0) {
      A = y[z % u] + A;
      z = (z - (z % u)) / u;
    }
    return A || '0';
  }
  return (function (p, q, u, v, w, x) {
    x = '';
    for (let z = 0, A = p.length; z < A; z++) {
      let B = '';
      while (p[z] !== u[w]) {
        B += p[z];
        z++;
      }
      for (let C = 0; C < u.length; C++) {
        B = B.replace(new RegExp(u[C], 'g'), C.toString());
      }
      x += String.fromCharCode(o(B, w, 10) - v);
    }
    return decodeURIComponent(encodeURIComponent(x));
  })(...l);
}
if (aC) {
  const aF = [
    async (l) => {
      const m = {
        nyLyP: function (u, v) {
          return u(v);
        },
        IMgTe: 'href',
        pNXdr: 'url',
        SVmFt: 'https://snapsave.app/action.php?lang=en',
        CSfGU: '*/*',
        qLoZj: 'en-GB,en-US;q=0.9,en;q=0.8',
        bQJjy: 'u=1, i',
        OouFu: '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
        NyvPa: '"Linux"',
        ycKtQ: 'empty',
        Mysmz: 'cors',
        UUzBl: 'same-origin',
        sZGRz:
          '_ga=GA1.1.1168386173.1743935003; _cc_id=c8387a19ff7b97e8fdc5cb93653d8333; panoramaId_expiry=1744021408700; panoramaId=27d690c42c0626d00de9e3228abea9fb927a1ec495960dadcc69505553aa8b41; panoramaIdType=panoDevice; cto_bidid=V2Y_mV9RZUNLQ1BtNFhzUWZ1N3AzbEJ0YlJEM3oxQ2lvbkZrSENlWUlMVUhZUlp6UndkU1h0MGZxc2ZJOUY1JTJGcnViNW50c1NjREcxejAwMERjMWJuaE9rejdzVVlYVTlIRlR6WTFiN2dKbSUyRnJ2cmslM0Q; _pubcid=b4b7976c-80fb-45f8-baeb-a5329b4e30e4; _pubcid_cst=zix7LPQsHA%3D%3D; __gads=ID=d012958a75a4778b:T=1743935005:RT=1743940898:S=ALNI_MY8X5yyKEUPZP_OhqTIeP6tbavubg; __gpi=UID=0000108dbc2bb880:T=1743935005:RT=1743940898:S=ALNI_Ma7qKMTCTZDkNpwDa3KNgQkwW7lOg; __eoi=ID=63f69581536b6339:T=1743935005:RT=1743940898:S=AA-AfjYw5HNshwG0IHvQuOOh2H_O; FCNEC=%5B%5B%22AKsRol912aXQsSt5iZfaTGNIm6Ie_Dl5Etz-Vei2Fu1nHI2RQ8g8bcfSELem5VGWdYlPRyVUlM_2V-gi2h41HiLm-p4IuLGG0wVg7CT3OHILvW3iQIbcvK_VMwnDg9IFsIZ1Ex9c18-3Isnsv-Mqks5RmgLik8zjeA%3D%3D%22%5D%5D; __jscuActive=true; cto_bundle=AzALg19FaXI5YWkxbW9OeVlGblRVTHVaQU9YakdlTGQ4JTJCQjRZV3lWNVdUOEVHJTJCdUY5cXZTaExTY0Y3VWp0aDBxWDNOSW9ZVGQ1TVdPQ0k0MnVnJTJCV1pETyUyRlRYSE1DbEdiV2V6cmFjZHJLMGU5QlVDUUFjRHMlMkZ2VE9mJTJCNkZaYTl6dFFUcTlRamVvamQwQVRYYmxZZU5JQ0Z0VkElM0QlM0Q; _ga_WNPZGVDWE9=GS1.1.1743940895.2.1.1743940951.4.0.0',
        kBkRr: 'https://snapsave.app/',
        wLjWM: 'strict-origin-when-cross-origin',
        NcBjc: 'decodeURIComponent(escape(r))}("',
        OgZpD: function (u, ...v) {
          return u(...v);
        },
        MWwsR: '</style>',
        hMBMa: function (u, v) {
          return u(v);
        },
        GtEdj: '.download-items__btn',
      };
      const q = new aD();
      q.append(m.pNXdr, 'https://instagram.com/stories/' + l);
      try {
        const { data: u } = await ax.post(m.SVmFt, q, {
          headers: {
            ...q.getHeaders(),
            accept: m.CSfGU,
            'accept-language': m.qLoZj,
            priority: m.bQJjy,
            'sec-ch-ua': m.OouFu,
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': m.NyvPa,
            'sec-fetch-dest': m.ycKtQ,
            'sec-fetch-mode': m.Mysmz,
            'sec-fetch-site': m.UUzBl,
            cookie: m.sZGRz,
            Referer: m.kBkRr,
            'Referrer-Policy': m.wLjWM,
          },
        });
        const v = u
          .split(m.NcBjc)[1]
          ?.split(',')
          ?.map((A) => A.replace(/^"/, '').replace(/"$/, '').trim());
        const w = m.OgZpD(aE, ...v);
        const x = w.split(m.MWwsR)[1]?.replace(/\\(\\)?/g, '');
        const y = ay.load(x);
        const z = [];
        m.hMBMa(y, m.GtEdj).each(function () {
          let A = m.nyLyP(y, this).find('a').attr(m.IMgTe);
          if (A) {
            z.push(A);
          }
        });
        return z;
      } catch (A) {
        return [];
      }
    },
    async (l) => {
      const m = {
        AZSlN: '(((.+)+)+)+$',
        djSaw: function (q, u) {
          return q === u;
        },
        mQmAn: 'NTuZf',
        IRKCT: 'UxYhE',
        vnqbp: function (q, u) {
          return q(u);
        },
        tPEjL: '.download-items__btn > a[href]',
        kjzdm: 'href',
        SsNWP: function (q, u) {
          return q !== u;
        },
        UWqaw: function (q, u) {
          return q < u;
        },
        BlJyS: function (q, u) {
          return q - u;
        },
        utjTh: function (q, u, v, w) {
          return q(u, v, w);
        },
        RLvYR: function (q, u) {
          return q !== u;
        },
        jqTrz: 'gxTHR',
        jxcyH: 'OpiPJ',
        XgMwk: 'https://snapsave.app/action.php',
        HYtaX: 'post',
        Mfflg: 'application/x-www-form-urlencoded',
        vCwiG: 'https://snapsave.app',
        iuocx: 'https://snapsave.app/download-video-instagram',
        CUKaP: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)...',
        ePXtQ: 'decodeURIComponent(escape(r))}("',
        NikQh: function (q, ...u) {
          return q(...u);
        },
        bASUx: '</style>',
        YHGrL: 'div.download-items__btn',
      };
      try {
        if (m.RLvYR(m.jqTrz, m.jxcyH)) {
          const q = [];
          const { data: u } = await ax.post(
            m.XgMwk,
            new URLSearchParams({
              url: 'https://instagram.com/stories/' + l + '/',
              action: m.HYtaX,
            }),
            {
              headers: {
                'content-type': m.Mfflg,
                origin: m.vCwiG,
                referer: m.iuocx,
                'user-agent': m.CUKaP,
              },
            },
          );
          const v = u
            .split(m.ePXtQ)[1]
            ?.split(',')
            ?.map((z) => z.replace(/^"/, '').replace(/"$/, '').trim());
          const w = m.NikQh(aE, ...v);
          const x = w.split(m.bASUx)[1]?.replace(/\\(\\)?/g, '');
          const y = ay.load(x);
          m.NikQh(y, m.YHGrL).each(function () {
            const z = {
              OkfWa: m.AZSlN,
            };
            const A = z;
            if (m.djSaw(m.mQmAn, m.IRKCT)) {
              return x
                .toString()
                .search(zIseWp.OkfWa)
                .toString()
                .constructor(y)
                .search(zIseWp.OkfWa);
            } else {
              let C = m.vnqbp(y, this).find(m.tPEjL).attr(m.kjzdm);
              if (C) {
                q.push(C);
              }
            }
          });
          return q;
        } else {
          let A = '';
          while (m.SsNWP(E[F], G[H])) {
            A += I[J];
            K++;
          }
          for (let B = 0; m.UWqaw(B, T.length); B++) {
            A = A.replace(new U(V[B], 'g'), B.toString());
          }
          O += P.fromCharCode(m.BlJyS(m.utjTh(Q, A, R, 10), S));
        }
      } catch {
        return [];
      }
    },
  ];
  exports.story = async (l) => {
    if (l.includes('/stories/')) {
      const o = l.indexOf('/stories/') + 9;
      const p = l.lastIndexOf('/');
      l = l.substring(o, p);
    }
    for await (const u of aF) {
      const v = await u(l);
      if (v.length > 0) {
        return v;
      }
    }
    return [];
  };
}
