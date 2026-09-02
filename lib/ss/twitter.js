const Z = require('cheerio');
const a0 = 'aWxvdmV5b3Vzb29vb29vbWF0Y2hidXRpZG9udGtub3d3aHlpbGlrZWxvdmV3YW50dQ==';
const a1 = (...l) => import('node-fetch').then(({ default: m }) => m(...l));
const { iChecker: a2 } = require('../test/test');
const a3 = a2();
const a4 = a3 == a0;
const a5 = require('form-data');
const { default: a6 } = require('axios');
if (a4) {
  const a7 = {
    dl7: async (m) => {
      try {
        return [
          {
            url: (await a6.get('https://levanter.onrender.com/xtwitter?url=' + m)).data.url,
            quality: 'sd',
          },
        ];
      } catch (u) {}
    },
    dl: async (l) => {
      const p = [];
      try {
        const q = await a1('https://www.squidlr.com/download?url=' + l);
        const s = await q.text();
        const u = Z.load(s);
        u('div.col-md-8').each(function (v) {
          const w = u(this).find('.list-group').find('a').attr('href');
          if (w) {
            const x = u(this)
              .find('.list-group')
              .find('a:nth-child(1)')
              .find('p')
              .text()
              .split('x')[0]
              .trim();
            const y = {
              url: w,
              quality: '' + x,
            };
            p.push(y);
          }
        });
        return p;
      } catch (w) {
        return [];
      }
    },
    dl0: async (q) => {
      try {
        const w = await a1('https://snaptwitter.com/');
        const x = await w.text();
        const y = Z.load(x)('#get_video > input[type=hidden]:nth-child(2)').val();
        const z = new a5();
        z.append('url', q);
        z.append('token', y);
        const A = z.getHeaders();
        const B = z.getBuffer();
        const C = await a1('https://snaptwitter.com/action.php', {
          method: 'POST',
          headers: {
            ...A,
            'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-origin',
            Referer: 'https://snaptwitter.com/',
            'Referrer-Policy': 'strict-origin-when-cross-origin',
          },
          body: B,
        });
        const D = await C.json();
        if (D.error) {
          return [];
        }
        const E = Z.load(D.data);
        const F = E('.abuttons.mb-0 > a')?.attr('href');
        const G = E('.abuttons.mb-0 > a')?.text();
        const H = G && G.replace('Download Video (', '').replace(')', '').split('x')[0].trim();
        if (F) {
          return [
            {
              url: 'https://snaptwitter.com' + F,
              quality: H,
            },
          ];
        }
      } catch (I) {
        return [];
      }
    },
  };
  exports.twitter = async (l) => {
    let p = [];
    for (const q in a7)
      try {
        const s = await a7[q](l);
        if (s.length > 0) {
          p = s;
          break;
        }
      } catch (v) {}
    return p;
  };
}
