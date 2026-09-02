const { loadBaileys: Z } = require('./baileys');
let a0;
const a1 = require('fs-extra');
const a2 = require('path');
const a3 = require('./config');
const { getMessage: a4, setMessage: a5 } = require('./db');
const { getBuffer: a6 } = require('./fetch');
const { isUrl: a7, genHydratedButtons: a8, store: a9 } = require('./utils');
const aa = 'aWxvdmV5b3Vzb29vb29vbWF0Y2hidXRpZG9udGtub3d3aHlpbGlrZWxvdmV3YW50dQ==';
const { iChecker: ab } = require('./test/test');
const ac = ab();
const ad = ac == aa;
if (ad) {
  const ae = (z) =>
    (z.match(/#button\\(.|\n)*?#/gm) || []).map((A) => A.split('\\')[1].replace(/#/, ''));
  exports.getButtons = ae;
  const af = (z) =>
    (z.match(/#ubutton\\(.|\n)*?#/gm) || []).map((A) => A.split('\\')[1].replace('#', ''));
  exports.getUrlButtons = af;
  const ag = (z) =>
    (z.match(/#cbutton\\(.|\n)*?#/gm) || []).map((A) => A.split('\\')[1].replace('#', ''));
  exports.getCallButtons = ag;
  const ah = (z) =>
    (z.match(/#num\\(.|\n)*?#/gm) || []).map((A) => A.split('\\')[1].replace('#', ''));
  exports.getBunNums = ah;
  const ai = (z) =>
    (z.match(/#url\\(.|\n)*?#/gm) || []).map((A) => A.split('\\')[1].replace('#', ''));
  exports.getBunUrls = ai;
  const aj = (z) =>
    (z.match(/#header\\(.|\n)*?#/gm) || []).map((A) => A.split('\\')[1].replace('#', ''));
  exports.getHeader = aj;
  const ak = async (D, E, F, G, H) => {
    let J = !1;
    let K = '';
    let L = '';
    let N = {};
    const O = [];
    const P = {};
    const Q = {
      mentionedJid: [F],
    };
    a0 ||= (await Z()).prepareWAMessageMedia;
    if (/&mention/.test(E)) {
      P.contextInfo = Q;
      E = E.replace(/&mention/g, '@' + F.split('@')[0]);
    }
    const R = ae(E);
    const S = aj(E);
    const T = af(E);
    const an = ai(E);
    const ao = ag(E);
    const ap = ah(E);
    if ((T.length > 0 && an.length > 0) || (ao.length > 0 && ap.length > 0)) {
      J = !0;
      const aq = [];
      for (let ar = 0; ar < T.length; ar++) {
        E = E.replace('#ubutton\\' + T[ar] + '#', '')
          .trim()
          .replace('#url\\' + an[ar] + '#', '')
          .trim();
        aq.push({
          urlButton: {
            text: T[ar],
            url: an[ar],
          },
        });
      }
      for (let as = 0; as < ao.length; as++) {
        E = E.replace('#cbutton\\' + ao[as] + '#', '')
          .trim()
          .replace('#num\\' + ap[as] + '#', '')
          .trim();
        aq.push({
          callButton: {
            text: ao[as],
            number: ap[as],
          },
        });
      }
      for (let at = 0; at < R.length; at++) {
        E = E.replace('#button\\' + R[at] + '#', '').trim();
        aq.push({
          button: {
            text: R[at],
            id: R[at],
          },
        });
      }
      if (S.length > 0) {
        E = E.replace('#header\\' + S[0] + '#', '').trim();
      }
      L = await a8(aq, E, S);
      K = 'template';
      if (/image|video/.test(G)) {
        const au = {
          upload: H.waUploadToServer,
        };
        const av = await a0(
          {
            [G]: D,
            gifPlayback: 'video' == G,
          },
          au,
        );
        N = av.videoMessage || av.imageMessage;
        if (av.videoMessage) {
          L.videoMessage = N;
        } else {
          L.imageMessage = N;
        }
      }
    } else if (R.length > 0 && S.length > 0) {
      K = 'button';
      J = !0;
      R.forEach((ax) =>
        O.push({
          buttonId: ax,
          buttonText: {
            displayText: ax,
          },
          type: 1,
        }),
      );
      for (const ax of R) {
        E = E.replace('#button\\' + ax + '#', '').trim();
      }
      const aw = {
        contentText: (E = E.replace('#header\\' + S[0] + '#', '').trim()).trim(),
        footerText: S[0],
        buttons: O,
        headerType: 'image' == G ? 4 : 'video' == G ? 5 : 1,
      };
      if (/image|video/.test(G)) {
        const ay = {
          upload: H.waUploadToServer,
        };
        const az = await a0(
          {
            [G]: D,
            gifPlayback: 'video' == G,
          },
          ay,
        );
        N = az.videoMessage || az.imageMessage;
        if (az.videoMessage) {
          aw.videoMessage = N;
        } else {
          aw.imageMessage = N;
        }
      }
      L = aw;
    }
    P.gifPlayback = 'video' == G;
    if (!J && /image|video/.test(G)) {
      L = D;
      K = G;
      P.caption = E.trim();
    }
    L ||= E.trim();
    return {
      msg: L,
      options: P,
      type: K,
    };
  };
  exports.genGreetings = ak;
  exports.greetingsPreview = async (z, A, B) => {
    const D = await a4(z.jid, A, B);
    if (!D) {
      return !1;
    }
    let E = D.message;
    let F = a7(E);
    const G = /&pp/.test(E);
    F = !(G || !F) && !!F.startsWith('http') && F;
    if (/&desc|&name|&size/.test(E)) {
      const J = await a3[B].fetchGroupMetadata(z.jid);
      if (J) {
        const { participants: K, subject: L, desc: M } = J;
        E = E.replace('&desc', M?.toString() || '')
          .replace('&name', L)
          .replace('&size', K.length);
      }
    }
    if (G) {
      E = E.replace('&pp', '');
      try {
        F = await z.client.profilePictureUrl(z.participant, 'image');
      } catch (N) {}
    }
    const H = F && (await a6(F));
    if (!A && H?.buffer) {
      await a5(D.chat, H?.type || 'text', D.message, D.enabled);
    }
    if (['video', 'image'].includes(H?.type)) {
      E = E.replace(F, '');
    }
    return await ak(H?.buffer, E, z.participant, H?.type || 'text', z.client);
  };
  exports.enableGreetings = async (z, A, B, C) => {
    const { message: E, type: F } = await a4(z, A, C);
    return await a5(z, F, E, 'on' == B, C);
  };
  const am = {
    welcome: 'welFolder',
    goodbye: 'goodFolder',
    banbye: 'banFolder',
  };
  exports.clearGreetings = (B, C) => {
    const D = {
      kmyhQ: '../media',
      kKXkM: function (H, I) {
        return H !== I;
      },
      WfESl: 'hhmkj',
    };
    const E = D;
    const F = a2.join(__dirname, E.kmyhQ, am[C]);
    const G = a1.readdirSync(F).find((H) => H.startsWith(B));
    if (G) {
      if (E.kKXkM(E.WfESl, E.WfESl)) {
        const I = H.join(I, E.kmyhQ, J[K]);
        const J = L.readdirSync(I).find((an) => an.startsWith(P));
        if (J) {
          const K = P.join(I, J);
          const L = {
            force: !0,
          };
          Q.rmSync(K, L);
        }
      } else {
        const I = a2.join(F, G);
        const J = {
          force: !0,
        };
        a1.rmSync(I, J);
      }
    }
  };
}
