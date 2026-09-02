const Y = {
  accept: 'text/html',
};
Y['accept-encoding'] = 'gzip, deflate';
Y['accept-language'] = 'en-US,en';
Y.referer = 'https://www.google.com/';
Y['upgrade-insecure-requests'] = 1;
Y['user-agent'] =
  'Mozilla/5.0 (Linux; Android 12; SAMSUNG SM-S908B) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/17.0 Chrome/96.0.4664.104 Mobile Safari/537.36';
const Z = require('cheerio');
const a0 = 'http://images.google.com/search';
const a1 = ['.jpg', '.jpeg', '.png'];
const a2 =
  /\["https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)"/gm;
const a3 = (b) => b.replace(/\"|\[/g, '');
const a4 = 'aWxvdmV5b3Vzb29vb29vbWF0Y2hidXRpZG9udGtub3d3aHlpbGlrZWxvdmV3YW50dQ==';
const a5 = (b) => /\.\w{3,4}($|\?)/.test(b) && !b.includes('.html') && !b.includes('.svg');
const { iChecker: a6 } = require('./test/test');
const { default: a7 } = require('axios');
const a8 = a6();
const a9 = a8 == a4;
const aa = Y;
if (a9) {
  async function ab(v) {
    const x = (function () {
      let A = true;
      return function (B, C) {
        const E = A
          ? function () {
              if (C) {
                const G = C.apply(B, arguments);
                C = null;
                return G;
              }
            }
          : function () {};
        A = false;
        return E;
      };
    })();
    if (!v) {
      throw new TypeError('searchTerm is missing.');
    }
    try {
      const A = {
        accept: 'text/html',
        referer: 'https://www.google.com/',
      };
      A['accept-encoding'] = 'gzip, deflate';
      A['accept-language'] = 'en-US,en';
      A['upgrade-insecure-requests'] = 1;
      A['user-agent'] =
        'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.0.0 Safari/537.36';
      const B = {
        headers: A,
      };
      const C = a0 + '?tbm=isch&q=' + v;
      const { data: D } = await a7.get(C, B).catch(() => {});
      const E = Z.load(D)('script');
      const F = [];
      const G = [];
      for (const H of E)
        if (H.children?.length) {
          const I = H.children[0].data;
          a1.some((J) => I.toLowerCase().includes(J)) && F.push(I);
        }
      for (const J of F)
        J.match(a2)?.map((K) => {
          const L = a3(K);
          L && a5(L) && !/gstatic\.com|encrypted-/.test(L) && G.push(L);
        });
      return G;
    } catch (K) {
      throw new Error(K);
    }
  }
  async function ac(q) {
    const w = (function () {
      let A = true;
      return function (B, C) {
        const E = A
          ? function () {
              if (C) {
                const G = C.apply(B, arguments);
                C = null;
                return G;
              }
            }
          : function () {};
        A = false;
        return E;
      };
    })();
    try {
      const z = {
        headers: aa,
      };
      const A = await a7.get('https://www.google.com/searchbyimage?image_url=' + q, z);
      const B = Z.load(
        A.data
          .replace(/N6jJud MUxGbd lyLwlc/g, '')
          .replace(/YjtGef ExmHv MUxGbd/g, '')
          .replace(/MUxGbd lyLwlc aLF0Z/g, '')
          .replace(/yDYNvb lEBKkf/g, 'yDYNvb')
          .replace(/VwiC3b MUxGbd yDYNvb/g, 'MUxGbd yDYNvb')
          .replace(/cz3goc BmP5tf/g, 'C8nzq BmP5tf')
          .replace(/yUTMj MBeuO ynAwRc PpBGzd YcUVQe/g, 'yUTMj MBeuO ynAwRc gsrt PpBGzd YcUVQe')
          .replace(/oewGkc LeUQr/g, 'PpBGzd YcUVQe')
          .replace(/q8U8x MBeuO/g, 'yUTMj MBeuO')
          .replace(/ynAwRc PpBGzd/g, 'ynAwRc gsrt PpBGzd'),
      );
      return B('a.C8nzq.BmP5tf')
        .map((C, D) => B(D).attr('href'))
        .get();
    } catch (C) {
      return [];
    }
  }
  exports.img = async (b, f) => (f ? await ac(b) : await ab(b));
}
