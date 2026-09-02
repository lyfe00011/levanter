const W = {
  scoreThreshold: 15,
  messageThreshold: 10,
  timeWindow: 20,
  repeatPenalty: 3,
  description: 'Relaxed - Good for active groups',
};
const X = {
  scoreThreshold: 10,
  messageThreshold: 6,
  timeWindow: 30,
  repeatPenalty: 4.5,
  description: 'Balanced - Default, recommended',
};
const Y = {
  scoreThreshold: 7,
  messageThreshold: 5,
  timeWindow: 40,
  repeatPenalty: 6,
  description: 'Strict - For problem groups',
};
const Z = {
  low: W,
  medium: X,
  high: Y,
};
const a0 = {
  textShort: 0.5,
  textMedium: 1,
  textLong: 300,
  sticker: 3,
  image: 2,
  video: 2,
  document: 1.5,
  audio: 2.5,
};
const a1 = {
  allCaps: 1.3,
  mentions: 1.5,
  manyEmojis: 1.2,
  hasUrls: 1.4,
};
const a2 = require('crypto');
const a3 = Z;
const a4 = ['low', 'medium', 'high'];
const a5 = ['warn', 'delete', 'kick'];
const a6 = 'medium';
const a7 = 'kick';
const a8 = a0;
const a9 = a1;
const aa = (q = {}) => {
  const u = [10, a2.randomInt(256), a2.randomInt(256), a2.randomInt(256)].join('.');
  const v = {};
  v['x-forwarded-for'] = u;
  v['x-real-ip'] = u;
  v['client-ip'] = u;
  v['x-client-ip'] = u;
  v['x-cluster-client-ip'] = u;
  v['x-original-forwarded-for'] = u;
  const w = {
    ...v,
    ...q,
  };
  return w;
};
const ab = () => ({
  'User-Agent':
    'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Mobile Safari/537.36',
  Accept: 'application/json',
  'Accept-Language': 'en,ms;q=0.9,en;q=0.8',
  'Accept-Encoding': 'gzip, deflate, br, zstd',
  Origin: 'https://copilot.microsoft.com',
  Referer: 'https://copilot.microsoft.com/',
  'Sec-Ch-Ua': '"Chromium";v="140", "Not=A?Brand";v="24", "Google Chrome";v="140"',
  'Sec-Ch-Ua-Mobile': '?1',
  'Sec-Ch-Ua-Platform': '"Android"',
  'Sec-Fetch-Dest': 'empty',
  'Sec-Fetch-Mode': 'cors',
  'Sec-Fetch-Site': 'same-origin',
  ...aa(),
});
const ac = {
  SPAM_LEVELS: a3,
  VALID_LEVELS: a4,
  VALID_ACTIONS: a5,
  DEFAULT_LEVEL: a6,
  DEFAULT_ACTION: a7,
  BASE_SCORES: a8,
  SCORE_MODIFIERS: a9,
  genHeader: ab,
};
module.exports = ac;
