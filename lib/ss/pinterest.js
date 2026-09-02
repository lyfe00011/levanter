const O = require('axios');
const P = require('cheerio');
const Q = 'aWxvdmV5b3Vzb29vb29vbWF0Y2hidXRpZG9udGtub3d3aHlpbGlrZWxvdmV3YW50dQ==';
const { iChecker: R } = require('../test/test');
const S = R();
const T = S == Q;
if (T) {
  exports.pinterest = async (l) => {
    try {
      if (!l.includes('www.pinterest.com/pin/')) {
        l = (await O.get(l)).request.res.responseUrl || l;
      }
    } catch (y) {}
    const n = {
      url: l,
    };
    const p = [];
    const q = await O.post('https://pinterestvideodownloader.com/', new URLSearchParams(n), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'User-Agent':
          'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4209.3 Mobile Safari/537.36',
        Accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
      },
      maxRedirects: 5,
    });
    const u = P.load(q.data);
    u('div.col-sm-12 > a').each(function () {
      const z = u(this).attr('href');
      if (z && z.startsWith('http')) {
        p.push(z);
      }
    });
    const v = {};
    u('table > tbody > tr').each(function (z, A) {
      if ('' != u(u(A).find('td')[0]).text()) {
        const E = u(u(A).find('td')[0]).find('a').attr('href');
        const F = E.split('/').pop();
        if (!(F in v) && E.startsWith('http')) {
          v[F] = E;
        }
      }
    });
    for (const z in v) {
      if (!p.find((A) => A == v[z])) {
        p.push(v[z]);
      }
    }
    return p;
  };
  exports.pinterestSearch = async (m) => {
    try {
      const q = (
        await O.get('https://www.pinterest.com/', {
          headers: {
            'User-Agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
          },
        })
      ).headers['set-cookie'];
      let u = [];
      if (q) {
        q.forEach((C) => {
          u.push(C.split(';')[0]);
        });
      }
      let v = u.join('; ');
      const w = {
        article: null,
        appliedProductFilters: '---',
        rs: 'typed',
        scope: 'pins',
        query: m,
      };
      const x = {
        options: w,
        context: {},
      };
      const y = x;
      const z = '/search/pins/?q=' + encodeURIComponent(m) + '&rs=typed';
      const A = 'https://www.pinterest.com/resource/BaseSearchResource/get/';
      let B = await O.get(A, {
        params: {
          source_url: z,
          data: JSON.stringify(y),
          _: Date.now(),
        },
        headers: {
          accept: 'application/json, text/javascript, */*, q=0.01',
          'accept-language': 'en-GB,en;q=0.9',
          'cache-control': 'no-cache',
          pragma: 'no-cache',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-origin',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
          'x-pinterest-appstate': 'active',
          'x-pinterest-pws-handler': 'www/search/[scope].js',
          'x-pinterest-source-url': z,
          'x-requested-with': 'XMLHttpRequest',
          Cookie: v,
          Referer: 'https://www.pinterest.com/',
        },
      });
      return B.data.resource_response.data.results.map((C) => C.images?.orig?.url).filter(Boolean);
    } catch (C) {
      return [];
    }
  };
}
