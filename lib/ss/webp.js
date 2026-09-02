const N = require('axios');
const O = require('form-data');
const P = require('cheerio');
const Q = require('fs-extra');
const R = 'aWxvdmV5b3Vzb29vb29vbWF0Y2hidXRpZG9udGtub3d3aHlpbGlrZWxvdmV3YW50dQ==';
const { iChecker: S } = require('../test/test');
const T = S();
const U = T == R;
U &&
  (exports.webpToMp4 = async (k) => {
    const q = new O();
    q.append('new-image-url', '');
    q.append('new-image', Q.createReadStream(k));
    let { data: v } = await N({
      method: 'post',
      url: 'https://ezgif.com/webp-to-mp4',
      data: q,
      headers: {
        ...q.getHeaders(),
      },
    });
    const w = new O();
    let x = P.load(v);
    const y = x('input[name="file"]').attr('value');
    const z = x('input[name="token"]').attr('value');
    const A = {
      file: y,
      token: z,
      convert: x('input[name="file"]').attr('value'),
    };
    w.append('file', A.file);
    z && w.append('token', A.token);
    w.append('convert', A.convert);
    let B = await N({
      method: 'post',
      url: 'https://ezgif.com/webp-to-mp4/' + A.file,
      data: w,
      headers: {
        ...w.getHeaders(),
      },
    });
    x = P.load(B.data);
    return 'https:' + x('div#output > p.outfile > video > source').attr('src');
  });
