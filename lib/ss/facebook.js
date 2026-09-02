const ax = require('cheerio');
const ay = 'aWxvdmV5b3Vzb29vb29vbWF0Y2hidXRpZG9udGtub3d3aHlpbGlrZWxvdmV3YW50dQ==';
const { iChecker: az } = require('../test/test');
const { default: aA } = require('axios');
const aB = az();
const aC = aB == ay;
if (aC) {
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
      for (let y = 0, z = p.length; y < z; y++) {
        let A = '';
        while (p[y] !== u[w]) {
          A += p[y];
          y++;
        }
        for (let B = 0; B < u.length; B++) {
          A = A.replace(new RegExp(u[B], 'g'), B.toString());
        }
        x += String.fromCharCode(m(A, w, 10) - v);
      }
      return decodeURIComponent(encodeURIComponent(x));
    })(...k);
  }
  const aE = {
    fget: async (l) => {
      try {
        const p = new URLSearchParams();
        p.append('id', l);
        p.append('locale', 'en');
        const q = await aA.post('https://fget.io/process', p, {
          headers: {
            accept: '*/*',
            'content-type': 'application/x-www-form-urlencoded',
            'hx-current-url': 'https://fget.io/',
            'hx-request': 'true',
            'hx-target': 'target',
            'hx-trigger': 'form',
            referer: 'https://fget.io/',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36',
          },
        });
        const u = ax.load(q.data);
        const v = [];
        let w;
        u('a[class*="download-result"]').each((x, y) => {
          const z = u(y).attr('href');
          const A = u(y).attr('class') || '';
          if (z && /^https?:\/\//.test(z)) {
            if (/\bhd\b/.test(A)) {
              v.push({
                url: z,
                quality: 'HD',
              });
            } else if (/\bsd\b/.test(A)) {
              v.push({
                url: z,
                quality: 'SD',
              });
            } else if (/\bmp3\b/.test(A)) {
              w = y;
            }
          }
        });
        if (w) {
          try {
            const y = u(w).attr('data-id');
            const z = u(w).attr('href');
            if (y && z) {
              const A = {
                id: y,
                video: z,
              };
              const B = Buffer.from(JSON.stringify(A)).toString('base64');
              const C = (
                await aA.post('https://r.ssstik.top/fb_mp3.sh', 'url=' + encodeURIComponent(B), {
                  headers: {
                    accept: '*/*',
                    'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
                    'hx-current-url': 'https://fget.io',
                    'hx-request': 'true',
                    'hx-target': 'fb_convert',
                    'hx-trigger': 'fb_convert',
                    origin: 'https://fget.io',
                    referer: 'https://fget.io/',
                    'user-agent':
                      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36',
                  },
                  timeout: 30000,
                  validateStatus: () => !0,
                })
              ).headers['hx-redirect'];
              if (C) {
                v.push({
                  url: C,
                  quality: 'Audio',
                });
              }
            }
          } catch (E) {}
        }
        return v;
      } catch (F) {
        return [];
      }
    },
    fbdown: async (k) => {
      const m = {
        IKsYp: function (q, u) {
          return q(u);
        },
        sjmfg: 'a[href]',
        zxMvz: 'href',
        qCOkL: function (q, u) {
          return q(u);
        },
        HFwmj: 'class',
        UYErX: function (q, u) {
          return q !== u;
        },
        QNNAy: 'VuHWn',
        KNmHe: function (q, u) {
          return q(u);
        },
        xDNAT: function (q, u) {
          return q < u;
        },
        WBzjK: 'a.download-link-fb',
        MNBco: function (q, u) {
          return q !== u;
        },
        JIbNl: 'EUGLY',
        uWbFt: 'https://fbdown.to/',
        bdSMV:
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36',
        MgaiV: function (q, u) {
          return q || u;
        },
        vfTLm: function (q, u) {
          return q(u);
        },
        cUemg: 'https://fbdown.to/api/ajaxSearch',
        mQKLC: '*/*',
        MvGZz: 'application/x-www-form-urlencoded; charset=UTF-8',
        FhOjo: 'XMLHttpRequest',
        NPQgb: function (q, u) {
          return q !== u;
        },
        qBYMn: 'table tr',
        LdCAF: function (q, u) {
          return q === u;
        },
        leOHH: 'UiMiW',
      };
      try {
        if (m.MNBco(m.JIbNl, m.JIbNl)) {
          const x = m.IKsYp(m, this).find('td');
          if (/tidak|no/i.test(x.eq(1).text())) {
            const y = x.eq(0).text().split('(')?.[0]?.trim();
            const z = x.eq(2).find(m.sjmfg).attr(m.zxMvz);
            if (z) {
              q.push({
                quality: y,
                url: z,
              });
            }
          }
        } else {
          const u = await aA.get(m.uWbFt, {
            headers: {
              'user-agent': m.bdSMV,
            },
          });
          const v = u.data.match(/k_token\s*=\s*['"]([a-f0-9]{32,})['"]/);
          const w = u.data.match(/k_exp\s*=\s*['"](\d{10})['"]/);
          if (m.MgaiV(!v, !w)) {
            return [];
          }
          const x = v[1];
          const y =
            'k_exp=' +
            w[1] +
            '&k_token=' +
            x +
            '&p=home&q=' +
            m.vfTLm(encodeURIComponent, k) +
            '&lang=en&v=v2&w=';
          const z = await aA.post(m.cUemg, y, {
            headers: {
              accept: m.mQKLC,
              'content-type': m.MvGZz,
              'x-requested-with': m.FhOjo,
              referer: m.uWbFt,
              'user-agent': m.bdSMV,
            },
          });
          if (!z.data || m.NPQgb('ok', z.data.status) || !z.data.data) {
            return [];
          }
          const A = ax.load(z.data.data);
          const B = [];
          m.IKsYp(A, m.qBYMn).each((C, D) => {
            if (m.UYErX(m.QNNAy, m.QNNAy)) {
              const H = m.qCOkL(x, y).attr(m.zxMvz);
              const I = m.IKsYp(z, A).attr(m.HFwmj) || '';
              if (H && /^https?:\/\//.test(H)) {
                if (/\bhd\b/.test(I)) {
                  B.push({
                    url: H,
                    quality: 'HD',
                  });
                } else if (/\bsd\b/.test(I)) {
                  C.push({
                    url: H,
                    quality: 'SD',
                  });
                } else if (/\bmp3\b/.test(I)) {
                  D = E;
                }
              }
            } else {
              const F = m.KNmHe(A, D).find('td');
              if (m.xDNAT(F.length, 3)) {
                return;
              }
              const G = m.qCOkL(A, F[0]).text().trim();
              const H = m.IKsYp(A, F[2]).find(m.WBzjK).first().attr(m.zxMvz);
              if (!H || !/^https?:\/\//.test(H)) {
                return;
              }
              let I = G;
              if (/HD/i.test(G)) {
                I = 'HD';
              } else if (/SD/i.test(G)) {
                I = 'SD';
              }
              B.push({
                url: H,
                quality: I,
              });
            }
          });
          return B;
        }
      } catch (C) {
        if (m.LdCAF(m.leOHH, m.leOHH)) {
          return [];
        } else if (q) {
          const E = x.apply(y, arguments);
          z = null;
          return E;
        }
      }
    },
    dl1: async (k) => {
      try {
        const m = new URLSearchParams();
        m.append('lang', 'en');
        m.append('url', encodeURI(k));
        const q = (
          await aA.post('https://snapsave.app/action.php', m, {
            headers: {
              accept:
                'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
              'accept-encoding': 'gzip, deflate, br',
              'accept-language': 'en-US,en;q=0.9',
              'content-type': 'application/x-www-form-urlencoded',
              origin: 'https://snapsave.app',
              referer: 'https://snapsave.app/',
              'user-agent':
                'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML,like Gecko) Chrome/96.0.4664.110 Safari/537.36',
            },
          })
        ).data;
        const u = q
          .split('decodeURIComponent(escape(r))}("')[1]
          ?.split(',')
          ?.map((y) => y.replace(/^"/, '').replace(/"$/, '').trim());
        let v;
        if (Array.isArray(u) && 6 === u.length) {
          const z = aD(...u);
          v = z.split('</style>')[1]?.replace(/\\(\\)?/g, '');
        } else {
          v = ('string' == typeof q ? JSON.parse(q) : q)?.data;
        }
        const w = [];
        if (!v) {
          return w;
        }
        const x = ax.load(v);
        x('table.table > tbody > tr').each(function () {
          const A = x(this).find('td');
          if (/tidak|no/i.test(A.eq(1).text())) {
            const B = A.eq(0).text().split('(')?.[0]?.trim();
            const C = A.eq(2).find('a[href]').attr('href');
            if (C) {
              w.push({
                quality: B,
                url: C,
              });
            }
          }
        });
        return w;
      } catch (B) {
        return [];
      }
    },
  };
  exports.facebook = async (k) => {
    let m = [];
    for (const p in aE) {
      const u = await aE[p](k);
      if (u.length > 0) {
        m = u;
        break;
      }
    }
    return m;
  };
}
