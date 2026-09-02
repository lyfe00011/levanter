const a1 = require('cheerio');
const a2 = (...m) => import('node-fetch').then(({ default: p }) => p(...m));
const a3 = require('form-data');
const a4 = require('cookie');
const a5 = 'aWxvdmV5b3Vzb29vb29vbWF0Y2hidXRpZG9udGtub3d3aHlpbGlrZWxvdmV3YW50dQ==';
const { iChecker: a6 } = require('./test/test');
const a7 = a6();
const a8 = a7 == a5;
a8 &&
  (exports.textMaker = async (z, A, B = '') => {
    A = A.split(';');
    const D = 'https://' + new URL(z).host + '/';
    const E = await a2(z, {
      method: 'GET',
      headers: {
        'User-Agent': 'GoogleBot',
      },
    });
    const F = await E.text();
    let G = E.headers
      .get('set-cookie')
      .split(',')
      .map((ab) => a4.parse(ab))
      .reduce(
        (ab, ac) => ({
          ...ab,
          ...ac,
        }),
        {},
      );
    G = {
      __cfduid: G.__cfduid,
      PHPSESSID: G.PHPSESSID,
    };
    G = Object.entries(G)
      .map(([ab, ac]) => a4.serialize(ab, ac))
      .join('; ');
    const H = a1.load(F);
    const I = H('input[name="token"]').attr('value');
    const J = H('input[name="build_server"]').attr('value');
    const K = H('input[name="build_server_id"]').attr('value');
    const L = new a3();
    A.forEach((ab) => L.append('text[]', ab.trim()));
    L.append('submit', 'Go');
    B && L.append('radio0[radio]', B);
    L.append('token', I);
    L.append('build_server', J);
    L.append('build_server_id', K);
    const M = await a2(z, {
      method: 'POST',
      headers: {
        Accept: '*/*',
        'Accept-Language': 'en-US,en;q=0.9',
        'User-Agent': 'GoogleBot',
        Cookie: G,
        ...L.getHeaders(),
      },
      body: L.getBuffer(),
    });
    const N = await M.text();
    const O = a1.load(N);
    let P;
    const Q = {
      status: false,
    };
    P =
      'https://en.ephoto360.com/' == D
        ? O('input[name="form_value_input"]').attr('value')
        : O('#form_value').first().text();
    if (!P) {
      return Q;
    }
    let R = JSON.parse(P);
    const T = new a3();
    T.append('id', R.id);
    R.text.forEach((ab) => T.append('text[]', ab));
    T.append('token', R.token);
    T.append('build_server', R.build_server);
    T.append('build_server_id', R.build_server_id);
    R.hasOwnProperty('radio0') && T.append('radio0[radio]', R.radio0.radio);
    const U = await a2(D + 'effect/create-image', {
      method: 'POST',
      headers: {
        Accept: '*/*',
        'Accept-Language': 'en-US,en;q=0.9',
        'User-Agent': 'GoogleBot',
        Cookie: G,
        ...T.getHeaders(),
      },
      body: T.getBuffer(),
    });
    const V = await U.json();
    if (!V.image) {
      throw new Error('textmaker: failed image processing');
    }
    const aa = {
      status: V.success,
      url: '' + J + V.image,
    };
    return aa;
  });
