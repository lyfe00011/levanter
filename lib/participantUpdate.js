const { isAdmin: a5, jidToNum: a6, logger: a7, lang: a8 } = require('.');
const a9 = require('./config');
const { getMessage: aa, getFake: ab, getPdm: ac } = require('./db');
const { resetMsgs: ad } = require('./db/store');
const { download: ae, getBuffer: af } = require('./fetch');
const { genGreetings: ag } = require('./greetings');
const { isUrl: ah } = require('./utils');
const ai = require('path');
const aj = require('fs-extra');
const { setSubscription: ak } = require('./db/antilink');
const al = (F) => F.replace(/\+/g, '');
const am = async (G, H, I, J) => {
  if ('120363400231018732@g.us' !== G || 'true' !== a9[J].env.SUBS) {
    return;
  }
  const L =
    'Hello, your subscription has now started and will expire on ' +
    (await ak(H, J, false)) +
    '. Please remember to renew before then to avoid being removed from the group.\n\nRQTMI CRYPTO FUTURES SIGNAL GROUP';
  const M = {
    text: L,
  };
  await I.sendMessage(H, M);
};
exports.participantUpdate = async (F, G, H) => {
  if (0 === F.participants.length) {
    return;
  }
  const J = await a9[H].findJid(F.participants[0]);
  try {
    switch (F.action) {
      case 'add':
        await an(F, G, H, J);
        break;
      case 'invite':
      case 'linked_group_join':
        am(F.id, J, G, H);
        await an(F, G, H, J);
        break;
      case 'remove':
        await ao(F, G, H, J);
        break;
      case 'promote':
      case 'demote':
        await ap(F, G, H);
    }
  } catch (L) {
    a7.error(L);
  }
};
const an = async (G, H, I, J) => {
  const L = await ab(G.id, I);
  if ('add' !== G.action && shift && L?.enabled && true === L.enabled) {
    const M = await aq(G.id, I);
    if (!M) {
      return;
    }
    const { participants: N } = M;
    const O = G.participants[0];
    if (ar(L, J)) {
      if (!(await a5(N, H.user.jid))) {
        return;
      }
      const Q = {
        type: 'participant_remove',
        chat: G.id,
        participant: O,
      };
      return await H.queue.push(Q);
    }
  }
  await as(G, H, I);
};
const ao = async (G, H, I, J) => {
  J = J || G.participants[0];
  ad(G.id, J === H.user.jid ? void 0 : J);
  const L = await aa(G.id, 'goodbye', I);
  if (!L?.enabled) {
    return;
  }
  const M = await aq(G.id, I);
  if (!M) {
    return;
  }
  const { participants: N, subject: O, desc: P } = M;
  let Q = L.message;
  Q = at(Q, P, O, N.length);
  const R = await au(Q, 'goodFolder', L.chat, G.participants[0], H);
  const T = await ag(R.buff, R.text, G.participants[0], R.mtype, H);
  try {
    const W = {
      type: 'prepare_message',
      chat: G.id,
      message: {
        [T.type || 'text']: T.msg,
        ...T.options,
      },
      options: T.options,
    };
    await H.queue.push(W);
  } catch (X) {
    a7.error(X);
  }
};
const ap = async (F, G, H) => {
  if (!(await ac(F.id, H))) {
    return;
  }
  const J = await a9[H].fetchGroupMetadata(F.id);
  if (!(J.announce && !(await a5(J.participants, G.user.jid)))) {
    try {
      await G.queue.push({
        type: 'prepare_message',
        chat: F.id,
        message: {
          text:
            '_@' +
            a6(F.from) +
            ' ' +
            ('demote' === F.action ? a8.extra.demoted : a8.extra.promoted) +
            ' @' +
            a6(F.participants[0]) +
            '_',
          contextInfo: {
            mentionedJid: [F.from, F.participants[0]],
          },
        },
      });
    } catch (K) {
      a7.error(K);
    }
  }
};
const aq = async (G, H) => {
  try {
    let K = await a9[H].fetchGroupMetadata(G);
    K || (K = await a9[H].fetchGroupMetadata(G));
    return K;
  } catch (L) {
    a7.error('error fetching group metadata:', G);
    return null;
  }
};
const ar = (F, G) => {
  let I = al(F.code);
  let J = true;
  const K = I.match(/![0-9]+/g)
    ?.map((M) => M.slice(1))
    .join('|');
  K && ((J = false), (I = '^(' + K + ')'));
  if (!I || '^()' === I) {
    return false;
  }
  const L = new RegExp(I, 'g');
  return F.enabled && L.test(G) === J;
};
exports.shouldRemoveParticipant = ar;
const as = async (G, H, I) => {
  const K = await aa(G.id, 'welcome', I);
  if (!K?.enabled) {
    return;
  }
  const L = await aq(G.id, I);
  if (!L) {
    return;
  }
  const { participants: M, subject: N, desc: O } = L;
  let P = K.message;
  P = at(P, O, N, M.length);
  const Q = await au(P, 'welFolder', K.chat, G.participants[0], H);
  const R = await ag(Q.buff, Q.text, G.participants[0], Q.mtype, H);
  const T = {
    type: 'prepare_message',
    chat: G.id,
    message: {
      [R.type || 'text']: R.msg,
      ...R.options,
    },
    options: R.options,
  };
  shift && (await H.queue.push(T));
};
const at = (F, G, H, I) =>
  F.replace('&desc', G?.toString() || '')
    .replace('&name', H)
    .replace('&size', I);
const au = async (G, H, I, J, K) => {
  let M = aj.readdirSync(ai.join(__dirname, '../media', H)).find((T) => T.startsWith(I));
  let N = null;
  let O = 'text';
  let P = /&pp/.test(G);
  const Q = !P && av(G);
  if (Q) {
    G = G.replace(Q, '');
    if (M) {
      N = aj.readFileSync(ai.join(__dirname, '../media/' + H + '/' + M));
      O = M.endsWith('mp4') ? 'video' : 'image';
    } else {
      const T = await ae(Q, I);
      T.error ||
        ((G = G.replace(Q, '')),
        aj.writeFileSync(ai.join(__dirname, '../media', H, I + '.' + T.ext), T.buffer),
        (O = T.type),
        (N = T.buffer));
    }
  }
  if (P) {
    G = G.replace('&pp', '');
    try {
      const V = await K.profilePictureUrl(J, 'image');
      const { buffer: W } = await af(V);
      W && ((N = W), (O = 'image'));
    } catch (X) {}
  }
  const R = {
    buff: N,
  };
  R.mtype = O;
  R.text = G;
  return R;
};
const av = (F) => {
  let H = ah(F);
  return !(!H || !H.startsWith('http')) && H;
};
const aw = async (F, G) => {
  try {
    const I = await F.profilePictureUrl(G, 'image');
    const { buffer: J } = await af(I);
    return J;
  } catch (K) {
    return null;
  }
};
