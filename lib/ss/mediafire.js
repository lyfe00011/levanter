const L = require('axios');
const M = require('cheerio');
const N = 'aWxvdmV5b3Vzb29vb29vbWF0Y2hidXRpZG9udGtub3d3aHlpbGlrZWxvdmV3YW50dQ==';
const { iChecker: O } = require('../test/test');
const P = O();
const Q = P === N;
if (Q) {
  const R = async (l) => {
    if (/https?:\/\/(www\.)?mediafire\.com/.test(l)) {
      try {
        const o = await L.get(l);
        const p = M.load(o.data);
        return (p('#downloadButton').attr('href') || '').trim();
      } catch (q) {
        return null;
      }
    }
  };
  exports.mediafire = async (l) => {
    let n = await R(l).catch(() => {});
    if (!n) {
      try {
        n = (await L.get('https://levanter.onrender.com/xmediafire?url=' + l)).data.url;
      } catch (p) {}
    }
    return n;
  };
}
