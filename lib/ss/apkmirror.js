const a6 = (...p) => import('node-fetch').then(({ default: q }) => q(...p));
const a7 = require('cheerio');
const a8 = 'aWxvdmV5b3Vzb29vb29vbWF0Y2hidXRpZG9udGtub3d3aHlpbGlrZWxvdmV3YW50dQ==';
const a9 = {
  headers: {
    'User-Agent': 'APKUpdater-v1',
    Authorization: 'Basic YXBpLWFwa3VwZGF0ZXI6cm01cmNmcnVVakt5MDRzTXB5TVBKWFc4',
    'Content-Type': 'application/json',
  },
};
const { iChecker: aa } = require('../test/test');
const ab = aa();
const ac = ab == a8;
const ad = 'https://www.apkmirror.com';
const ae = async (p, q) => {
  p = p.trim();
  const v = [];
  const w = await a6(
    q
      ? ad + '/?post_type=app_release&searchtype=apk&s=' + p
      : ad + '/?post_type=app_release&searchtype=apk&s=' + p + '&bundles%5B%5D=apk_files',
    a9,
  );
  if (!w.ok) {
    throw new Error('Failed to fetch data: ' + w.statusText);
  }
  const x = await w.text();
  const y = a7.load(x);
  y(
    'div.appRow > div.table-row > div.table-cell:nth-child(2) > div > h5.appRowTitle.wrapText.marginZero.block-on-mobile',
  ).each((z, A) => {
    const B = y(A).find('a').attr('href');
    const C = {
      title: y(A).attr('title'),
      url: ad + B,
    };
    v.push(C);
  });
  return {
    result: v,
    status: 405,
  };
};
const af = async (q) => {
  const v = await a6(q, a9);
  if (!v.ok) {
    throw new Error('Failed to fetch data: ' + v.statusText);
  }
  const w = await v.text();
  const x = a7.load(w);
  const y = {};
  const z = x('div.table-cell.rowheight.addseparator.expand.pad.dowrap:nth-child(2)');
  const A = x(
    '#content > div.card-with-tabs.unroll > div.tab-content.unroll > div.tab-pane.noPadding > div > div > div:nth-child(2) > div:nth-child(1)',
  );
  A.each((C, D) => {
    const E = x(z[C]).text();
    const F = x(D).find('a').attr('href');
    const G = x(D).find('.apkm-badge:first').text();
    if (!(E in y) && G) {
      y[E] = {
        title: E + ' [' + G + ']',
        url: ad + F,
      };
    }
  });
  if (0 === A.length) {
    const C = await a6(q, a9);
    y.noarch = {
      title: 'noarch',
      url: C.url + 'download',
    };
  }
  const B = {
    result: y,
    status: 301,
  };
  return B;
};
const ag = async (p, q) => {
  if (p.endsWith('-download/')) {
    const A = await a6(p, a9);
    const B = await A.text();
    const C = a7.load(B);
    p = ad + C('.center.f-sm-50 > div > a').attr('href');
  }
  const v = await a6(p, a9).catch((D) => console.log(D.message));
  const w = await v.text();
  const x = a7.load(w);
  let y = x('.center.f-sm-50 > div > a').attr('href');
  y ||= x('#download-link').attr('href');
  y ||= x('a[rel="nofollow"]').attr('href');
  const z = ad + y;
  if (z.includes('download.php?id=') || !z.includes('download/?key=') || q) {
    return {
      result: z,
      status: 200,
    };
  } else {
    return ag(z, 1);
  }
};
if (ac) {
  exports.apkMirror = async (p, q) => {
    const [v, w] = p.split(';;');
    if (!w && v) {
      return await ae(v, q);
    } else if ('405' == v) {
      return await af(w);
    } else if ('301' == v) {
      return await ag(w);
    } else {
      return undefined;
    }
  };
}
