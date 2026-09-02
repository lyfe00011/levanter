const { lang: ai } = require('.');
const { setVotes: aj, getVotes: ak } = require('./db/vote');
const al = /[0-9]+(-[0-9]+|)(@g\.us|@s\.whatsapp\.net)/g;
const am = (m) => [...m].map((p) => p.codePointAt(0).toString(16)).join('-');
const an = (p) => {
  const w = new Set();
  return (p = p.toLowerCase()).split('\n').reduce((x, y) => {
    if (y.startsWith('o')) {
      const [, z, A] = y.split('|');
      z &&
        A &&
        !w.has(z.trim()) &&
        (x.push({
          emoji: z.trim(),
          option: A.trim(),
        }),
        w.add(z.trim()));
    }
    return x;
  }, []);
};
const ao = (m) => {
  const q = {};
  for (const v of m)
    q[am(v.emoji)] = {
      v: [],
      e: v.emoji,
      o: v.option,
    };
  return q;
};
const ap = (m, p, q, v) => ({
  question: m,
  options: p,
  voted: ao(p),
  msg: q,
  force: v,
  total: [],
});
const aq = (m) => {
  const p = (m = m.toLowerCase()).split('\n').find((v) => v.startsWith('q|'));
  if (!p) {
    throw new Error(ai.plugins.vote.question_required);
  }
  const [, q] = p.split('|');
  return q.trim();
};
const ar = (m) => {
  const q = m.total.length;
  let v = m.question + '\n';
  for (const w in m.voted) {
    const { e: x, v: y, o: z } = m.voted[w];
    v += z + ' (' + x + ') *' + ((y.length / q) * 100).toFixed(0) + '%*\n';
  }
  v += '\n' + ai.plugins.vote.total_vote.format(q) + '\n\n' + ai.plugins.vote.vote;
  return v;
};
let as;
exports.newVote = async function (m, q) {
  let w;
  as = await ak(m.id);
  if (al.test(q)) {
    const x = q.match(al);
    if (x.length > 1) {
      w = x;
    } else {
      m.jid = x[0];
    }
  }
  if (m.jid in as && !q) {
    return [as[m.jid].msg];
  }
  if (q.startsWith('result')) {
    if (!(m.jid in as)) {
      return [ai.plugins.vote.no_vote];
    }
    const y = as[m.jid].total.length;
    if (0 === y) {
      return [ai.plugins.vote.total_vote.format(0)];
    }
    let z = as[m.jid].question + '\n';
    for (const A in as[m.jid].voted) {
      const { e: B, v: C } = as[m.jid].voted[A];
      const D = as[m.jid].options.find((F) => F.emoji === B);
      const E = C.length;
      z += D.option + '(' + E + ') *' + ((E / y) * 100).toFixed(0) + '%*\n';
    }
    z += '\n' + ai.plugins.vote.total_vote.format(y);
    return [z];
  }
  if (q.startsWith('delete')) {
    if (al.test(q)) {
      const H = q.match(al);
      for (const I of H) delete as[I];
    } else {
      if (!as[m.jid]) {
        return [ai.plugins.vote.no_vote];
      }
      delete as[m.jid];
    }
    await aj(as, m.id);
    return [ai.plugins.vote.vote_deleted];
  }
  if (m.jid in as) {
    return [ai.plugins.vote.delete_vote];
  }
  {
    if (!q) {
      return [ai.plugins.vote.usage];
    }
    const J = an(q);
    if (J.length < 2) {
      throw new Error(ai.plugins.vote.option_required);
    }
    const K = aq(q);
    if (!K) {
      throw new Error(ai.plugins.vote.question_required);
    }
    const L =
      K +
      '\n\n' +
      J.map((N) => N.emoji + ' - ' + N.option).join('\n') +
      '\n\n*' +
      ai.plugins.vote.vote +
      '*';
    const M = q.includes('--force');
    if (w && w.length > 1) {
      for (const N of w) as[N] = ap(K, J, L, M);
    } else {
      as[m.jid] = ap(K, J, L, M);
    }
    await aj(as, m.id);
    return [L, w];
  }
};
exports.participateInVote = async (x, y, z, A, B) => {
  if (A) {
    as || (as = await ak(B));
    if (!(x in as) || !y || as[x].total.includes(z)) {
      return;
    }
    y = am(y);
    if (!as[x].voted[y] || as[x].voted[y].v.includes(z)) {
      return;
    }
    as[x].voted[y].v.push(z);
    as[x].total.push(z);
    await aj(as, B);
    return ar(as[x]);
  }
  const D = x;
  x = D.jid;
  z = D.participant;
  B = D.id;
  as || (as = await ak(B));
  if (!D.isGroup || !(D.jid in as) || as[x].total.includes(z)) {
    return;
  }
  if (!(
    (D.reply_message &&
      D.reply_message.text &&
      D.text &&
      D.reply_message.text.includes(as[x].question)) ||
    as[x].force
  )) {
    return;
  }
  y = am(D.text);
  let E = as[x].voted[y];
  if (!E) {
    const M = D.text.toLowerCase();
    const N = as[x].options.find((O) => O.option === M);
    N && ((D.text = N.emoji), (y = am(D.text)), (E = as[x].voted[y]));
  }
  const F = {
    quoted: null,
  };
  if (!E) {
    return as[x].force
      ? {
          text: as[x].msg,
          option: F,
        }
      : void 0;
  }
  as[x].voted[y].v = E.v.concat(z);
  as[x].total.push(z);
  await aj(as, B);
  const G = {
    mentionedJid: [D.participant],
  };
  const H = {
    contextInfo: G,
  };
  const I = ar(as[x]);
  const J = H;
  return {
    text: ai.plugins.vote.voted.format(D.participant.replace('@s.whatsapp.net', ''), D.text, I),
    option: J,
  };
};
