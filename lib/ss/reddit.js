const I = require('axios');
const J = require('cheerio');
const K = async (j) => {
  let m = '';
  try {
    const n = await I.get('https://savemp4.red/backend.php?url=' + j);
    m = J.load(n.data)('.card-body > a').attr('href');
  } catch (p) {}
  return m;
};
exports.reddit = async (i) => {
  let k = await K(i);
  if (!k) {
    try {
      k = (await I.get('https://levanter.onrender.com/xreddit?url=' + i)).data.url;
    } catch (l) {}
  }
  return k;
};
