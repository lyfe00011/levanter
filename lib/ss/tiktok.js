const ax = 'aWxvdmV5b3Vzb29vb29vbWF0Y2hidXRpZG9udGtub3d3aHlpbGlrZWxvdmV3YW50dQ==';
const ay = require('../test/test');
const az = ay.iChecker();
const aA = az == ax;
const aB = require('cheerio');
const { default: aC } = require('axios');
if (aA) {
  function aD(...k) {
    function m(p, q, u) {
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
        let C = '';
        while (p[z] !== u[w]) {
          C += p[z];
          z++;
        }
        for (let D = 0; D < u.length; D++) {
          C = C.replace(new RegExp(u[D], 'g'), D.toString());
        }
        x += String.fromCharCode(m(C, w, 10) - v);
      }
      return decodeURIComponent(encodeURIComponent(x));
    })(...k);
  }
  const aE = {
    ssstik: async (k) => {
      try {
        const q = await aC.get('https://ssstik.io/en');
        const u = q.headers['set-cookie']?.map((B) => B.split(';')[0]).join('; ');
        const v = q.data.match(/s_tt\s*=\s*['"]([^'"]+)['"]/);
        if (!v) {
          return [];
        }
        const w = v[1];
        const x = new URLSearchParams();
        x.append('id', encodeURI(k));
        x.append('locale', 'en');
        x.append('tt', w);
        const y = await aC.post('https://ssstik.io/abc?url=dl', x, {
          headers: {
            'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
            cookie: u || '',
            'hx-current-url': 'https://ssstik.io/en',
            'hx-request': 'true',
            'hx-target': 'target',
            'hx-trigger': '_gcaptcha_pt',
            origin: 'https://ssstik.io',
            referer: 'https://ssstik.io/en',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.74 Safari/537',
          },
        });
        const z = aB.load(y.data);
        const A = [];
        z('a.pure-button').each((B, C) => {
          const D = z(C).attr('href');
          const E = z(C).attr('class') || '';
          if (D && '#' !== D && /^https?:\/\//.test(D)) {
            if (E.includes('music')) {
              A.push({
                url: D,
                quality: 'Audio',
              });
            } else if (E.includes('without_watermark')) {
              A.push({
                url: D,
                quality: 'SD',
              });
            }
          }
        });
        return A;
      } catch (C) {
        return [];
      }
    },
    snaptik: async (x) => {
      const y = {
        WJSWl: function (z, A) {
          return z(A);
        },
        MIdbO: function (z, A) {
          return z + A;
        },
        xsodN: function (z, A) {
          return z + A;
        },
        Uoeco: 'return (function() ',
        akrMM: '{}.constructor("return this")( )',
        fBJhP: function (z, A) {
          return z === A;
        },
        RPMaW: 'gGPpd',
        qxiGH: 'https://snaptik.app/en2',
        ojPNl:
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36',
        Ehmjj: 'set-cookie',
        uRXHk: 'input[name="token"]',
        OEeBr: 'url',
        boqus: 'lang',
        CXiGp: 'en2',
        OEpxm: 'token',
        hidnC: 'https://snaptik.app/abc2.php',
        IyoxB: 'application/x-www-form-urlencoded; charset=UTF-8',
        vfYCW: function (z, A) {
          return z || A;
        },
        fbzpw: '))</script>',
        MRgfn: 'decodeURIComponent(escape(r))}(',
        nVAlp: function (z, A) {
          return z !== A;
        },
        pxOkN: function (z, ...A) {
          return z(...A);
        },
        NDtdU: '.innerHTML =',
        lcIeu: '$(".contents")',
        JLAaB: 'div.video-links a',
        klTXB: 'href',
        fYHQP: function (z, A) {
          return z !== A;
        },
        qJORC: function (z, A) {
          return z(A);
        },
        ANycs: 'button.btn-download-hd',
        FNMSM: 'data-tokenhd',
        floBR: 'data-backup',
        iJFDx: function (z, A) {
          return z === A;
        },
        etIBP: 'CfgHh',
      };
      try {
        if (y.fBJhP(y.RPMaW, y.RPMaW)) {
          const z = await aC.get(y.qxiGH, {
            headers: {
              'user-agent': y.ojPNl,
            },
          });
          const A = z.headers[y.Ehmjj]?.map((N) => N.split(';')[0]).join('; ');
          const B = aB.load(z.data)(y.uRXHk).val();
          if (!B) {
            return [];
          }
          const C = new URLSearchParams();
          C.append(y.OEeBr, x);
          C.append(y.boqus, y.CXiGp);
          C.append(y.OEpxm, B);
          const D = (
            await aC.post(y.hidnC, C, {
              headers: {
                'content-type': y.IyoxB,
                cookie: y.vfYCW(A, ''),
                referer: y.qxiGH,
                'user-agent': y.ojPNl,
              },
            })
          ).data;
          const E = D.split(y.fbzpw)[0]
            .split(y.MRgfn)[1]
            ?.split(',')
            ?.map((N) => N.replace(/^"/, '').replace(/"$/, '').trim());
          if (!Array.isArray(E) || y.nVAlp(6, E.length)) {
            return [];
          }
          const F = y.pxOkN(aD, ...E);
          const G = F.split(y.NDtdU)?.[1]
            ?.split(y.lcIeu)?.[0]
            ?.replace(/\\(\\)?/g, '');
          if (!G) {
            return [];
          }
          const H = aB.load(G);
          let I = y.WJSWl(H, y.JLAaB).eq(0).attr(y.klTXB);
          if (!y.nVAlp('/', I) || !y.fYHQP('#', I)) {
            I = undefined;
          }
          if (I && !/^https?:\/\//.test(I)) {
            I = 'https://snaptik.app' + I;
          }
          const J = y.qJORC(H, y.ANycs).first();
          const K = J.attr(y.FNMSM);
          const L = J.attr(y.floBR);
          const M = [];
          if (K) {
            try {
              const N = {
                'user-agent': y.ojPNl,
              };
              const O = {
                headers: N,
                timeout: 8000,
              };
              const P = await aC.get(K, O);
              if (P.data && !P.data.error && P.data.url) {
                M.push({
                  url: P.data.url,
                  quality: 'HD',
                });
              } else if (L) {
                M.push({
                  url: L,
                  quality: 'HD',
                });
              }
            } catch (Q) {
              if (L) {
                M.push({
                  url: L,
                  quality: 'HD',
                });
              }
            }
          }
          if (I) {
            M.push({
              url: I,
              quality: 'SD',
            });
          }
          return M;
        } else {
          const S = x.constructor.prototype.bind(y);
          const T = z[A];
          const U = B[T] || S;
          S.__proto__ = C.bind(D);
          S.toString = U.toString.bind(U);
          E[T] = S;
        }
      } catch (S) {
        if (y.iJFDx(y.etIBP, y.etIBP)) {
          return [];
        } else {
          let U;
          try {
            U = caxdFP.WJSWl(q, caxdFP.MIdbO(caxdFP.xsodN(caxdFP.Uoeco, caxdFP.akrMM), ');'))();
          } catch (V) {
            U = v;
          }
          return U;
        }
      }
    },
    tikmate: async (l) => {
      const m = {
        meMqY: function (q, u) {
          return q === u;
        },
        cSwJS: 'dPwUY',
        JdMBJ: 'url',
        MbhhV: 'https://api.tikmate.app/api/lookup',
        JajyT: '*/*',
        VkxIa: 'en-GB,en;q=0.9',
        FGmOa: 'application/x-www-form-urlencoded; charset=UTF-8',
        DIbpb:
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36',
        lJeMq: function (q, u) {
          return q !== u;
        },
        rZicJ: 'KPweP',
      };
      const p = m;
      try {
        if (p.meMqY(p.cSwJS, p.cSwJS)) {
          const q = new URLSearchParams();
          q.append(p.JdMBJ, l);
          const u = (
            await aC.post(p.MbhhV, q, {
              headers: {
                accept: p.JajyT,
                'accept-language': p.VkxIa,
                'content-type': p.FGmOa,
                'user-agent': p.DIbpb,
              },
            })
          ).data;
          if (u && u.success && u.id && u.token) {
            return [
              {
                url: 'https://tikmate.app/download/' + u.token + '/' + u.id + '.mp4',
                quality: 'SD',
              },
            ];
          } else {
            return [];
          }
        } else {
          return [];
        }
      } catch (w) {
        if (p.lJeMq(p.rZicJ, p.rZicJ)) {
          if (q) {
            const y = x.apply(y, arguments);
            z = null;
            return y;
          }
        } else {
          return [];
        }
      }
    },
  };
  exports.tiktok = async (l) => {
    const m = {
      potjM: function (q, u) {
        return q > u;
      },
    };
    const p = m;
    for (const q in aE) {
      const u = await aE[q](l);
      if (u && p.potjM(u.length, 0)) {
        return u;
      }
    }
    return [];
  };
}
