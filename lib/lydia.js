const K = require('./config');
const { getLydia: L } = require('./db/lydia');
const { getJson: M } = require('./fetch');
const N = async (l, m, n) => {
  if (!l) {
    return;
  }
  const p = n ? '' + m + n : m;
  try {
    const q = {
      message: l,
      id: p,
    };
    const s = await fetch('https://levanter.onrender.com/chat', {
      method: 'post',
      body: JSON.stringify(q),
      headers: {
        'content-type': 'application/json',
      },
    });
    return (await s.json()).result;
  } catch (v) {
    throw new Error(v.message);
  }
};
const O = async (k) => {
  if (!((k.isGroup && k.reply_message && k.reply_message.jid == k.client.user.jid) || !k.isGroup)) {
    return;
  }
  let m = await L(k.jid, k.id);
  m || (m = await L(k.jid, k.id, k.participant));
  if (!m) {
    return;
  }
  return await N(k.text, k.jid, k.isGroup && k.participant);
};
exports.chatBot = O;
exports.lydia = async (k) => {
  const m =
    (k.isGroup && k.reply_message && k.reply_message.jid == k.client.user.jid) || !k.isGroup;
  if (!m) {
    return m;
  }
  let q = false;
  q = await L(k.jid, k.id);
  q || (q = await L(k.jid, k.id, k.participant));
  if (!q) {
    return false;
  }
  /<% RGI_Emoji %>|\p{Emoji_Presentation}|\p{Emoji}\uFE0F|\p{Emoji_Modifier_Base}/gu.test(k.text) &&
    (k.text = k.text.replace(
      /<% RGI_Emoji %>|\p{Emoji_Presentation}|\p{Emoji}\uFE0F|\p{Emoji_Modifier_Base}/gu,
      '',
    ));
  const [u, v] = K[k.id].env.BRAINSHOP.split(',');
  let w = await M(
    'http://api.brainshop.ai/get?bid=' +
      u +
      '&key=' +
      v +
      '&uid=[' +
      k.participant +
      ']&msg=[' +
      k.text +
      ']',
  );
  return !!w && w.cnt;
};
