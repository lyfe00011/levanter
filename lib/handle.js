const bU = require('fs-extra');
const { join: bV } = require('path');
const { default: bW } = require('axios');
const { loadBaileys: bX } = require('./baileys');
let bY;
let bZ;
let c0;
let c1;
let c2;
let c3;
let c4;
let c5;
let c6;
const c7 = require('../config');
const c8 = require('./events');
const c9 = require('./index');
const { Message: ca } = require('./class/index');
const cb = {};
const { getPmMessage: cc, setPmMessage: cd } = require('./db');
const { setMsgs: cf } = require('./db/store');
const cg = require('./config');
const {
  secondsToHms: ch,
  getFloor: ci,
  isUrl: cj,
  expiration: ck,
  isFeatureEnabled: cl,
} = require('./utils');
const cm = (a7) => (/type\/(gif|mp4|sticker|image|audio)/.exec(a7) || [])[1];
if (!bU.existsSync(bV(__dirname, '../media/mention/'))) {
  bU.mkdirSync(bV(__dirname, '../media/mention/'));
}
const cn = {
  done: !1,
  path: '',
  message: '',
  type: '',
};
const co = {
  a: !1,
  json: {},
};
const cp = ['⏳', '✅', '❌', ''];
const cq = new RegExp('^(kick|warn|dlt)');
const cr = (a7) =>
  a7.match(/(http|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/g);
const cs = '918136962641';
const ct = '491744813608';
const cu = !0;
const cv = cn;
const cw = [
  '918136962641-1630730584@g.us',
  '918136962641-1635266273@g.us',
  '918136962641-1609228303@g.us',
];
const cx = (a7) => {
  if (a7) {
    return a7.replace(/:\d+/, '');
  }
};
const cy = co;
const cz = new RegExp('afkrey');
async function cA(a8) {
  const a9 = {
    NBqhv: 'processSecurityChecks failed',
    AeInz: function (ab, ac) {
      return ab !== ac;
    },
    bAIHQ: 'SdfCn',
    ZRjJF: function (ab, ac) {
      return ab in ac;
    },
    cuZQb: 'jpegThumbnail',
    KgEKB: function (ab, ac) {
      return ab === ac;
    },
    BCTaL: 'bKvUW',
  };
  const aa = a9;
  if (!a8.linkPreview) {
    return a8;
  }
  if (a8.linkPreview.thumbnail) {
    if (aa.AeInz(aa.bAIHQ, aa.bAIHQ)) {
      a9.logger.error(aa, aa.NBqhv);
    } else {
      const { buffer: ac } = await c9.getBuffer(a8.linkPreview.thumbnail, !0);
      if (ac) {
        a8.linkPreview.thumbnail = ac;
      }
    }
  }
  if (aa.ZRjJF(aa.cuZQb, a8.linkPreview)) {
    if (aa.KgEKB(aa.BCTaL, aa.BCTaL)) {
      const { buffer: ad } = await c9.getBuffer(a8.linkPreview.jpegThumbnail, !0);
      if (ad) {
        a8.linkPreview.jpegThumbnail = await d4.genThumbnail(ad);
      }
    } else {
      delete ab[ac.session].temp.spamLocks[ad.remoteJid][af.participant];
    }
  }
}
const cE = (a7) => a7 + '@lid';
const cF = (a7) =>
  a7 && typeof a7 == 'string'
    ? a7.length > 30
      ? 'android'
      : a7.length != 20 || a7.startsWith('RGNK')
        ? a7.substring(0, 3) === '3EB'
          ? 'web'
          : a7.length == 18
            ? 'win'
            : 'bot'
        : 'ios'
    : a7;
const cG = {};
const cH = {
  gif: 'video',
  mp4: 'video',
  sticker: 'sticker',
  image: 'image',
  audio: 'audio',
};
const cI = {
  gif: 'video/mp4',
  mp4: 'video/mp4',
  sticker: 'image/webp',
  audio: 'audio/ogg; codecs=opus',
  image: 'image/png',
};
const cJ = {
  gif: '.mp4',
  mp4: '.mp4',
  sticker: '.webp',
  audio: '.opus',
  image: '.jpeg',
};
const cK = 'https://levanter-plugin.levanter.site';
const { version: cL } = require('../package.json');
const cM = (a8, a9, aa) => {
  const ab = {
    a: a8 + '-' + cL,
    b: a9,
    c: aa,
  };
  bW.post(cK + '/xerror', ab).catch(() => {});
};
const cN = (a8, a9, aa) => {
  const ab = {
    jid: a8,
    command: a9,
    isGroup: aa,
  };
  bW.post(cK + '/analytics', ab).catch(() => {});
};
const cO = (a8, a9) => {
  let ac = '';
  switch (a9) {
    case 'extendedTextMessage':
      ac = a8.extendedTextMessage.text;
      break;
    case 'imageMessage':
      ac = a8.imageMessage.caption;
      break;
    case 'videoMessage':
      ac = a8.videoMessage.caption;
      break;
    case 'documentMessage':
      ac = a8.documentMessage.caption;
      break;
    case 'listResponseMessage':
      ac = a8.listResponseMessage.singleSelectReply.selectedRowId;
      break;
    case 'buttonsResponseMessage':
      ac = a8.buttonsResponseMessage.selectedButtonId;
      break;
    case 'templateButtonReplyMessage':
      ac = a8.templateButtonReplyMessage.selectedId;
      break;
    case 'eventMessage':
      ac = a8.eventMessage.action;
      break;
    default:
      ac = a8.conversation;
  }
  return ac;
};
const cP = (a9) => {
  const aa = {
    AsOzF: function (af, ag) {
      return af === ag;
    },
    sxhyo: 'null',
    JQgGm: 'false',
    pVnYj: function (af, ag) {
      return af > ag;
    },
  };
  const ab = aa;
  const ac = {
    enabled: !1,
  };
  if (!a9 || ab.AsOzF(ab.sxhyo, a9) || ab.AsOzF(ab.JQgGm, a9)) {
    return ac;
  }
  const ad = a9.trim().split(/\s+/);
  return {
    enabled: !0,
    destination: ad[0],
    scope: ab.pVnYj(ad.length, 1) ? ad[1].toLowerCase() : null,
  };
};
const cQ = (a8, a9) => {
  if (!a8) {
    return !0;
  }
  const ac = a9.endsWith('@g.us');
  switch (a8) {
    case 'pm':
    case 'no-gm':
      return !ac;
    case 'gm':
    case 'no-pm':
      return ac;
    default:
      return !0;
  }
};
const cR = (a7, a8, a9) => (a7 === 'g' ? a8 : a7 === 'p' || a7 === 'on' ? a9 : a7);
const cS = (a8, a9) => {
  const aa = {
    WbWaZ: function (ah, ai) {
      return ah === ai;
    },
    wvRkM: 'false',
    jkguK: 'null',
    rCzuI: 'true',
    FIjPL: '@g.us',
  };
  const ab = aa;
  if (!a8 || ab.WbWaZ(ab.wvRkM, a8) || ab.WbWaZ(ab.jkguK, a8)) {
    return !1;
  }
  if (ab.WbWaZ(ab.rCzuI, a8)) {
    return !0;
  }
  const [ac, ad] = a8.split(/\bignore\b/);
  if (ad && c9.parsedJid(ad).includes(a9)) {
    return !1;
  }
  const af = ac
    .trim()
    .split(/[\s,]+/)
    .filter(Boolean);
  if (!af.length) {
    return !0;
  }
  const ag = a9.endsWith(ab.FIjPL);
  return af.some((ah) => (ah === 'p' ? !ag : ah === 'g' ? ag : ah === a9));
};
const cT = 'aWxvdmV5b3Vzb29vb29vbWF0Y2hidXRpZG9udGtub3d3aHlpbGlrZWxvdmV3YW50dQ==';
const cU = require('./test/test');
const cV = require('./sendMessage');
const { LRUCache: cW } = require('./db/nr');
const cX = new cW(1000, 3600000);
const cY = new cW(1000, 3600000);
const cZ = (a8, a9, aa) => {
  const ab = {
    QupaG: function (ah, ai) {
      return ah !== ai;
    },
  };
  const ac = ab;
  if (!a8) {
    return;
  }
  const ad = cX.get(a8);
  if (ac.QupaG(undefined, ad)) {
    return ad;
  }
  const af = a9.participants.find((ah) => ah.lid === a8);
  if (!af) {
    return;
  }
  const ag = aa.includes(c9.jidToNum(af.phoneNumber));
  cX.set(a8, ag);
  return ag;
};
const d0 = (a8) => {
  const a9 = {
    UhFuZ: function (ag, ah) {
      return ag > ah;
    },
    GezHF: function (ag, ah) {
      return ag === ah;
    },
    sruiW: 'ciQBv',
    MPUqd: 'dwwjT',
  };
  const aa = a9;
  const ab = c9.parseNum(cg[a8].env.WHITE_LIST).map(c9.numToJid);
  let ac = c9.parseNum(cg[a8].env.SUDO).map(c9.numToJid).map(c9.jidToNum);
  let ad = c9.parseNum(cg[a8].env.GROUP_ADMINS).map(c9.numToJid);
  cg[a8].adminsjid = ad;
  cg[a8].sca = aa.UhFuZ(ad.length, 0);
  cg[a8].TEMP_SUDO = ac.slice(0, 20);
  const af = cg[a8].env.ANTIWORDS.split(',')
    .filter(Boolean)
    .map((ag = '') => new RegExp(ag.trim(), 'ui'));
  cg[a8].regexes = af;
  cg[a8].DISABLE_BOT_JIDS = c9.parsedJid(cg[a8].env.DISABLE_BOT);
  cg[a8].WHITE_LIST_MAP = ab;
  if (cg[a8].env.MENTION) {
    try {
      cg[a8].parsedMention = JSON.parse(cg[a8].env.MENTION);
    } catch (ag) {
      if (aa.GezHF(aa.sruiW, aa.MPUqd)) {
        return a8;
      } else {
        cg[a8].parsedMention = null;
      }
    }
  } else {
    cg[a8].parsedMention = null;
  }
};
cg.preparevars = d0;
let d1 = require('./antilink');
let d2 = require('./misc');
const d3 = require('crypto');
const d4 = require('./constant');
const d5 = () => {
  global.sock = d3.randomBytes(3).toString('hex');
};
const d6 = cU.iChecker();
const d7 = d6 == cT;
const d8 = {
  value: !1,
  writable: cu,
};
d4.writeStream(global, 'shift', d8);
const d9 = require('./tictactoe');
const da = require('path');
let db = 0;
const dc = (a7) => {
  let a8 = a7[db];
  if (!a8) {
    db = 0;
    a8 = a7[db];
  }
  db++;
  return a8;
};
const dd = (a7, a8, a9, aa, ab) => ({
  ...a7,
  commands: a8,
  PREFIX: a9,
  ...aa,
  pluginsCount: ab,
});
const df = ['setvar', 'setsudo', 'zushi'];
const dg = async (a7, a8, a9, aa) => {
  const ab = {
    OYSZa: 'handleAntiWordViolation failed',
    XjPvc: function (af, ag) {
      return af + ag;
    },
    GvqXi: function (af, ag, ah) {
      return af(ag, ah);
    },
    hxsVa: function (af, ag) {
      return af(ag);
    },
    CsjNh: function (af, ag, ah) {
      return af(ag, ah);
    },
    KxQWU: function (af, ag) {
      return af === ag;
    },
    cymKq: 'audio',
    xRqkF: function (af, ag) {
      return af !== ag;
    },
    AOCXt: 'tIzFF',
    iYEwA: 'opus',
    AbEYA: function (af, ag) {
      return af === ag;
    },
    jNeYD: 'sticker',
    dBGjV: 'hKHbe',
    cJIRC: 'PuTxF',
    iadHA: '.webp',
    mnYjs: function (af, ag) {
      return af === ag;
    },
    ZvhZe: 'image',
    SmRnu: 'NIgCm',
    qlSrG: 'CmWSg',
  };
  const ac = await c9.getBuffer(a7, !1);
  let ad = ac.buffer;
  if (!ad) {
    return ac.error;
  }
  try {
    const af = ab.GvqXi(bV, d4.TEMP_DIR, ac.name);
    bU.writeFileSync(af, ad);
    const ag = ab.CsjNh(bV, __dirname, '../media/mention/' + aa + a8);
    if (ab.KxQWU(ab.cymKq, a9)) {
      if (ab.xRqkF(ab.AOCXt, ab.AOCXt)) {
        a9.logger.error(aa, ab.OYSZa);
      } else {
        const ai = await c9.getFfmpegBuffer(af, '' + aa + a8, ab.iYEwA);
        bU.writeFileSync(ag, ai);
      }
    } else if (ab.AbEYA(ab.jNeYD, a9)) {
      if (ab.xRqkF(ab.dBGjV, ab.cJIRC)) {
        const aj = await c9.sticker(
          '' + aa + a8.replace(ab.iadHA, ''),
          af,
          ab.mnYjs(ab.ZvhZe, ac.type) ? 1 : 2,
          aa,
        );
        bU.writeFileSync(ag.endsWith(ab.iadHA) ? ag : ab.XjPvc(ag, ab.iadHA), aj);
      } else {
        const am = ad.history[af];
        const an = am.message || am;
        ag += '*#' + ab.XjPvc(ah, 1) + '*\n' + (ab.GvqXi(ai, an, ab.hxsVa(aj, an)) || '') + '\n\n';
      }
    } else {
      bU.writeFileSync(ag, ad);
      if (bU.existsSync(af)) {
        bU.unlinkSync(af);
      }
    }
  } catch (al) {
    if (ab.AbEYA(ab.SmRnu, ab.qlSrG)) {
      const an = aa.apply(ab, arguments);
      ac = null;
      return an;
    } else {
      return al;
    }
  }
};
async function dh(ai, aj, ak, al, am, an) {
  const ao = {
    LAJss: '[TEST] Security check caught error:',
    QjzHb: 'Security check error',
    Mznfk: 'participant_remove',
    wQIBn: function (ar, as) {
      return ar !== as;
    },
    iURra: 'false',
    KLYiX: 'prepare_message',
    gqmHR: '&mention',
    AGlRu: '[TEST] executeWarnAction called:',
    wZqat: function (ar, as) {
      return ar === as;
    },
    IyfDf: 'GXVCz',
    efRQO: function (ar, as) {
      return ar > as;
    },
    jvnwH: 'LRyNl',
    GiytM: function (ar, as) {
      return ar - as;
    },
    CgSSY: '{mention}',
    gPVhm: '&remaining',
    OBJUW: '{remaining}',
    rQfLF: '&warn',
    OwcyO: '{warn}',
    CQOLP: '{0}',
    cOqyN: '{1}',
    DURxl: '{2}',
    NUTPE: 'vqmDZ',
    QDUvO: 'DscpF',
    QyGzk: 'executeWarnAction failed',
  };
  const ap = ao;
  const aq = {
    participant: ai,
    groupJid: aj,
    sessionId: ak,
  };
  console.log(ap.AGlRu, aq);
  try {
    if (ap.wZqat(ap.IyfDf, ap.IyfDf)) {
      const ar = cg[ak];
      const as = ar.env.WARN_LIMIT || 3;
      const at = await c9.setWarn(ai, aj, ak, as);
      if (ap.efRQO(at, as)) {
        if (ap.wZqat(ap.jvnwH, ap.jvnwH)) {
          if (!(await c9.isAdmin(an.participants, am.user.jid))) {
            al.queue.push({
              type: ap.KLYiX,
              chat: aj,
              message: {
                text: c9.lang.plugins.common.not_admin,
              },
            });
            return;
          }
          if (await c9.isAdmin(an.participants, ai)) {
            al.queue.push({
              type: ap.KLYiX,
              chat: aj,
              message: {
                text: c9.lang.plugins.warn.cannot_remove_admin,
              },
            });
            return;
          }
          const au = '@' + c9.jidToNum(ai);
          const av =
            ar.env.WARN_KICK_MESSAGE?.replace(ap.gqmHR, au) ||
            c9.lang.plugins.warn.kick_default.format(au);
          const aw = {
            text: av,
          };
          const ax = {
            mentionedJid: [ai],
          };
          const ay = {
            contextInfo: ax,
          };
          const az = {
            type: ap.KLYiX,
            chat: aj,
            message: aw,
            options: ay,
          };
          al.queue.push(az);
          await c9.deleteWarn(ai, aj, ak);
          al.queue.push({
            type: ap.Mznfk,
            chat: aj,
            participant: ai,
          });
        } else {
          ab.error(ap.LAJss, ac.message);
          ad.logger.error(af, ap.QjzHb);
        }
      } else {
        const aB = '@' + c9.jidToNum(ai);
        const aC = ap.GiytM(as, at);
        const aD = (ar.env.WARN_MESSAGE || c9.lang.plugins.warn.warn_default)
          .replace(ap.gqmHR, aB)
          .replace(ap.CgSSY, aB)
          .replace(ap.gPVhm, aC)
          .replace(ap.OBJUW, aC)
          .replace(ap.rQfLF, as)
          .replace(ap.OwcyO, as)
          .replace(ap.CQOLP, aB)
          .replace(ap.cOqyN, aC)
          .replace(ap.DURxl, as);
        const aE = {
          text: aD,
        };
        const aF = {
          mentionedJid: [ai],
        };
        const aG = {
          contextInfo: aF,
        };
        const aH = {
          type: ap.KLYiX,
          chat: aj,
          message: aE,
          options: aG,
        };
        al.queue.push(aH);
      }
    } else if (ab) {
      const aJ = ag.apply(ah, arguments);
      ai = null;
      return aJ;
    }
  } catch (aJ) {
    if (ap.wZqat(ap.NUTPE, ap.QDUvO)) {
      ar[as.participant] = 1;
      try {
        const aL = {
          type: ap.Mznfk,
        };
        aL.chat = aL.remoteJid;
        aL.participant = aM.participant;
        const aM = {
          mentionedJid: [aV.participant],
        };
        const aN = {
          contextInfo: aM,
        };
        aK.queue.push(aL);
        if (ap.wQIBn(ap.iURra, aN[aO.session].env.ANTISPAM_MSG)) {
          aP.queue.push({
            type: ap.KLYiX,
            chat: aQ.remoteJid,
            message: {
              text: aR[aS.session].env.ANTISPAM_MSG.replace(
                ap.gqmHR,
                '@' + aT.jidToNum(aU.participant),
              ),
            },
            options: aN,
          });
        }
      } catch (aO) {
        aZ.logger.error(
          aO,
          '[ANTISPAM] Failed to kick ' + b0.participant + ' from ' + b1.remoteJid,
        );
      } finally {
        delete b2[b3.participant];
      }
    } else {
      c9.logger.error(aJ, ap.QyGzk);
    }
  }
}
async function di(a7, a8, a9, aa, ab, ac, ad) {
  if ('fulfilled' !== a7.status || !a7.value) {
    return;
  }
  const ag = a7.value;
  if (ag && a8.botIsAdmin) {
    try {
      await c9.setTMessage(a9.id, null, true);
      ab.deleteQueue.push({
        type: 'bulk_delete',
        chat: a9.remoteJid,
        key: a9,
        delay: 300,
        options: {},
      });
      if ('kick' === ag) {
        await ab.queue.push({
          type: 'participant_remove',
          chat: a9.remoteJid,
          participant: a8.participant,
        });
      } else if ('warn' === ag) {
        await dh(a8.participant, a9.remoteJid, a8.session, ab, ac, ad);
      }
    } catch (ai) {
      c9.logger.error(ai, 'handleAntiWordViolation failed');
    }
  }
}
async function dj(a8, a9, aa, ab, ac, ad) {
  if ('fulfilled' !== a8.status || !a8.value) {
    return;
  }
  const ag = a8.value;
  if (!ag.isSpam || !a9.botIsAdmin) {
    console.log('[TEST] handleAntiSpamViolation skipped:', {
      isSpam: ag.isSpam,
      botIsAdmin: a9.botIsAdmin,
    });
    return;
  }
  const { action: ah } = ag;
  cg[a9.session].temp.spamLocks ||= {};
  cg[a9.session].temp.spamLocks[aa.remoteJid] ||= {};
  if (!cg[a9.session].temp.spamLocks[aa.remoteJid][a9.participant]) {
    cg[a9.session].temp.spamLocks[aa.remoteJid][a9.participant] = !0;
    try {
      const aj = (cg[a9.session].temp.spam?.[aa.remoteJid]?.[a9.participant]?.keys || []).filter(
        (ak) => ak.participant === a9.participant,
      );
      for (const ak of aj) {
        await c9.setTMessage(ak.id, null, !0);
        ab.deleteQueue.push({
          type: 'bulk_delete',
          chat: aa.remoteJid,
          key: ak,
          delay: 500 + ci(1000 * Math.random()),
          options: {},
        });
      }
      if ('kick' === ah) {
        if (!(a9.participant in cb)) {
          cb[a9.participant] = 1;
          try {
            const am = {
              type: 'participant_remove',
              chat: aa.remoteJid,
              participant: a9.participant,
            };
            ab.queue.push(am);
            if ('false' !== cg[a9.session].env.ANTISPAM_MSG) {
              ab.queue.push({
                type: 'prepare_message',
                chat: aa.remoteJid,
                message: {
                  text: cg[a9.session].env.ANTISPAM_MSG.replace(
                    '&mention',
                    '@' + c9.jidToNum(a9.participant),
                  ),
                },
                options: {
                  contextInfo: {
                    mentionedJid: [a9.participant],
                  },
                },
              });
            }
          } catch (an) {
            c9.logger.error(
              an,
              '[ANTISPAM] Failed to kick ' + a9.participant + ' from ' + aa.remoteJid,
            );
          } finally {
            delete cb[a9.participant];
          }
        }
      } else if ('warn' === ah) {
        await dh(a9.participant, aa.remoteJid, a9.session, ab, ac, ad);
      }
    } catch (ao) {
      console.error('[TEST] handleAntiSpamViolation ERROR:', ao.message, ao.stack);
      c9.logger.error(ao, 'handleAntiSpamViolation failed');
    } finally {
      delete cg[a9.session].temp.spamLocks[aa.remoteJid][a9.participant];
    }
  }
}
async function dk(a7, a8, a9, aa, ab, ac) {
  if ('fulfilled' !== a7.status || !a7.value) {
    return;
  }
  const af = a7.value;
  if (af && a8.botIsAdmin) {
    try {
      await c9.setTMessage(a9.id, null, !0);
      aa.deleteQueue.push({
        type: 'bulk_delete',
        chat: a9.remoteJid,
        key: a9,
        delay: 300,
        options: {},
      });
      if ('kick' === af) {
        await aa.queue.push({
          type: 'participant_remove',
          chat: a9.remoteJid,
          participant: a8.participant,
        });
      } else if ('warn' === af) {
        await dh(a8.participant, a9.remoteJid, a8.session, aa, ab, ac);
      }
    } catch (ag) {
      c9.logger.error(ag, 'handleAntiLinkViolation failed');
    }
  }
}
let dl = !1;
async function dm(a7, a8, a9, aa, ab, ac, ad, af) {
  if (process.env.LEVANTER_TEST) {
    dl = true;
  }
  if (process.env.LEVANTER_TEST) {
    console.log('[TEST] processSecurityChecks START:', {
      hasUrls: ad,
      is_not_white: af,
      spamFlag: dl,
    });
    console.log('[TEST] Anti-Spam Condition Check:', {
      is_not_white: af,
      spamFlag: dl,
      isGroup: a7.isGroup,
      notBot: !a7.isBot,
      notFromMe: !a7.fromMe,
      notVotes: !a7.votes,
      notAdmin: !a7.admin,
    });
  }
  try {
    const [ai, aj, ak] = await Promise.allSettled([
      a7.text && af && a7.isGroup && !a7.fromMe && !a7.votes && !a7.admin
        ? d1.isWords(a7.text, a8.remoteJid, a7.session)
        : Promise.resolve(!1),
      !(af && dl) || !a7.isGroup || a7.isBot || a7.fromMe || a7.votes || a7.admin
        ? Promise.resolve(!1)
        : d2.isSpam(
            a8.remoteJid,
            a7.participant,
            a8,
            a9.type,
            a7.text || '',
            a7.mentions || [],
            ad,
            a7.session,
          ),
      a7.text && af && a7.isGroup && !a7.fromMe && !a7.votes && !a7.admin
        ? d1.isAntiLink(a7.text, a8.remoteJid, a7.session)
        : Promise.resolve(!1),
    ]);
    const al = async () =>
      a7.isGroup ? ac || (await cg[a7.session].fetchGroupMetadata(a8.remoteJid)) : null;
    await Promise.all([
      di(ai, a7, a8, a9, aa, ab, await al()),
      dj(aj, a7, a8, aa, ab, await al()),
      dk(ak, a7, a8, aa, ab, await al()),
    ]);
  } catch (am) {
    c9.logger.error(am, 'processSecurityChecks failed');
  }
}
if (d7) {
  exports.handler = async (aU, aV, aW) => {
    if (!bY) {
      const b8 = await bX();
      bY = b8.jidNormalizedUser;
      bZ = b8.getContentType;
      c0 = b8.normalizeMessageContent;
      c1 = b8.isJidGroup;
      c2 = b8.delay;
      c3 = b8.downloadMediaMessage;
      c4 = b8.getAggregateVotesInPollMessage;
      c5 = b8.getKeyAuthor;
      c6 = b8.decryptPollVote;
    }
    const aY = aV.session;
    const aZ = aV.botState;
    const b0 = 'true' === process.env.DEBUG_RESTART;
    if (b0) {
      c9.logger.info(
        '[Handler] Entry: msg=' +
          aU.key?.id?.slice(-8) +
          ', connected=' +
          aZ?.connected +
          ', sessionValid=' +
          !!aY,
      );
    }
    if (aZ.id !== aY.levanterId) {
      if (b0) {
        c9.logger.warn('[Handler] Session ID mismatch: ' + aZ.id + ' !== ' + aY.levanterId);
      }
      return;
    }
    const b1 = aZ.bot;
    let b2 = false;
    let b3 = false;
    dl ||= process.uptime() > 60;
    const { key: b4, message: b5, pushName: b6, messageTimestamp: b7 } = aU;
    if (!b5 || (b4 && 'status@broadcast' == b4.remoteJid) || !aZ) {
      if (b0 && !b5) {
        c9.logger.warn('[Handler] No message content for ' + b4?.id?.slice(-8));
      }
    } else {
      try {
        let ba = {
          session: aZ.id,
        };
        if (
          cg[ba.session].DISABLE_BOT_JIDS.includes(b4.participantAlt || b4.participant) ||
          aZ.bbb.includes(b4.participantAlt || b4.participant) ||
          aZ.bbb.includes(b4.remoteJidAlt || b4.remoteJid)
        ) {
          return;
        }
        ba.message = b4.id.startsWith('EVENT_') ? b5 : c0(b5);
        ba.type = bZ(ba.message) || Object.keys(ba.message)[0];
        if (!ba.type) {
          return;
        }
        if ('eventMessage' === ba.type) {
          ba.type = 'event';
          ba.event_action = ba.message.eventMessage.action;
        }
        ba.isGroup = c1(b4.remoteJid);
        let bb = null;
        const bc = ba.isGroup ? cg[ba.session].groupMetadata[b4.remoteJid] : null;
        if (bc && bc.participants) {
          bb = bc;
        }
        const bd = async () =>
          ba.isGroup
            ? bb || ((bb = await cg[ba.session].fetchGroupMetadata(b4.remoteJid)), bb)
            : null;
        const bf = cx(aY.user.lid);
        const bg = aY.user.jid;
        const bh =
          true === b4.fromMe ||
          b4.participant === bf ||
          (!ba.isGroup &&
            (b4.remoteJid === bg ||
              b4.remoteJid === bf ||
              b4.remoteJidAlt === bg ||
              b4.remoteJidAlt === bf));
        let bi;
        if (ba.isGroup) {
          if (b4.participantAlt || b4.participant) {
            const dp =
              bY(b4.participantAlt || b4.participant) || b4.participantAlt || b4.participant;
            bi = (dp && dp.endsWith('lid') && (await cg[ba.session].findJid(dp))) || dp;
          } else {
            bi = bh ? aY.user.jid : aU.participantAlt || aU.participant;
          }
          if (!bi) {
            c9.logger.warn(
              '[Handler] Failed to resolve participant for group message ' +
                b4.id +
                ' in ' +
                b4.remoteJid +
                '. Type: ' +
                ba.type +
                '  Message: ' +
                JSON.stringify(aU) +
                ' ',
            );
          }
        } else if (bh) {
          bi = aY.user.jid;
        } else {
          const dq = b4.remoteJid?.endsWith('@s.whatsapp.net') ? b4.remoteJid : null;
          const dr = b4.remoteJidAlt?.endsWith('@s.whatsapp.net') ? b4.remoteJidAlt : null;
          bi = dq || dr || b4.remoteJidAlt || b4.remoteJid;
        }
        if (b0) {
          c9.logger.info('[Handler] Step 2: _p resolved = ' + bi?.slice(0, 20) + '...');
        }
        if (ba.isGroup) {
          if (bi && bi.endsWith('@s.whatsapp.net')) {
            ba.participant = bi;
          } else {
            const dt = bb || (await bd());
            const du = dt?.participants.find(
              (dv) => dv.id === bi || dv.phoneNumber === bi || dv.lid === bi,
            );
            ba.participant = du?.phoneNumber || du?.id || bi;
          }
        } else {
          ba.participant = bi;
        }
        ba.key = b4;
        ba.mentions = [];
        ba.pushName = (b6 && b6.replace(/\n/g, '')) || '';
        ba.fromMe = ba.participant && (ba.participant == aY.user.jid || ba.participant == bf);
        if (b0) {
          c9.logger.info(
            '[Handler] Step 3: participant=' +
              ba.participant?.slice(0, 20) +
              ', fromMe=' +
              ba.fromMe +
              ', type=' +
              ba.type,
          );
        }
        if ('reactionMessage' === ba.type) {
          if (
            ba.isGroup &&
            ba.message.reactionMessage.key.fromMe &&
            ba.message.reactionMessage.text
          ) {
            const dx = await c9.participateInVote(
              b4.remoteJid,
              ba.message.reactionMessage.text,
              ba.participant,
              'not_reply_message',
              ba.session,
            );
            if (dx) {
              const dy =
                '@' +
                c9.jidToNum(ba.participant) +
                ' voted for ' +
                ba.message.reactionMessage.text +
                '\n\n' +
                dx;
              const dz = {
                contextInfo: {
                  mentionedJid: [ba.participant],
                },
              };
              const dA = {
                text: dy,
              };
              const dB = {
                type: 'prepare_message',
                chat: b4.remoteJid,
                message: dA,
                options: dz,
              };
              aV.queue.push(dB);
              return;
            }
          }
          const dv = {
            user: aY.user,
          };
          ba.text = ba.message.reactionMessage.text || '';
          d5();
          c9.levanter.emit('reaction.message', new ca(dv, ba, false, aY));
          return;
        }
        if ('pollUpdateMessage' === ba.type) {
          const dD = await aW(ba.message.pollUpdateMessage.pollCreationMessageKey);
          if (!dD) {
            return;
          }
          const dE = dD.messageContextInfo?.messageSecret;
          const dF = c5(ba.message.pollUpdateMessage.pollCreationMessageKey, aY.user.jid);
          const dG = c5(b4, aY.user.jid);
          const dH = c6(ba.message.pollUpdateMessage.vote, {
            pollEncKey: dE,
            pollCreatorJid: dF,
            pollMsgId: ba.message.pollUpdateMessage.pollCreationMessageKey.id,
            voterJid: dG,
          });
          const dI = c4({
            message: dD,
            pollUpdates: [
              {
                vote: dH,
                pollUpdateMessageKey: b4,
              },
            ],
          });
          ba.votes = dI;
        }
        let bj = !cg[ba.session].WHITE_LIST_MAP.includes(ba.participant);
        let bk =
          bh ||
          (ba.participant && cg[ba.session].TEMP_SUDO.includes(c9.jidToNum(ba.participant))) ||
          (ba.participant &&
            ba.participant.endsWith('lid') &&
            (await bd()) &&
            cZ(ba.participant, await bd(), cg[ba.session].TEMP_SUDO));
        if (b0) {
          c9.logger.info('[Handler] Step 4: isSudo=' + bk + ', is_not_white=' + bj);
        }
        if (bj && 'groupStatusMentionMessage' === ba.type && !ba.fromMe) {
          const dJ = await c9.getGroupMention();
          if (!dJ.enabled) {
            return;
          }
          if (c9.parsedJid(dJ.filter).includes(b4.remoteJid)) {
            return;
          }
          if (!bb) {
            return;
          }
          if (!(await c9.isAdmin(bb.participants, aY.user.jid))) {
            return;
          }
          if (await c9.isAdmin(bb.participants, ba.participant)) {
            return;
          }
          const dK = {
            type: 'prepare_message',
            chat: b4.remoteJid,
            message: {},
          };
          dK.message.delete = b4;
          aV.queue.push(dK);
          await c2(500);
          if ('kick' === dJ.action) {
            return aV.queue.push({
              type: 'participant_remove',
              chat: b4.remoteJid,
              participant: ba.participant,
            });
          }
          if ('warn' === dJ.action) {
            bk = true;
            ba.text = cg[ba.session].PREFIX + dJ.action + ba.participant;
            ba.mentions = [ba.participant];
          }
        }
        if (bj && 'groupStatusMessageV2' === ba.type && !ba.fromMe) {
          const dM = await c9.getAntiGstatus();
          if (!dM.enabled) {
            return;
          }
          if (dM.jids.includes(b4.remoteJid)) {
            return;
          }
          const dN = bb || (await bd());
          if (!dN) {
            return;
          }
          if (!(await c9.isAdmin(dN.participants, aY.user.jid))) {
            return;
          }
          if (await c9.isAdmin(dN.participants, ba.participant)) {
            return;
          }
          const dO = {
            type: 'prepare_message',
            chat: b4.remoteJid,
            message: {},
          };
          dO.message.delete = b4;
          aV.queue.push(dO);
          return;
        }
        ba.edited = false;
        if (b0) {
          c9.logger.info('[Handler] Step 5: creating ctx...');
        }
        const bl = dd(
          cg[ba.session].env,
          cg[ba.session].commands,
          cg[ba.session].PREFIX,
          cg[ba.session].AFK,
          cg[ba.session].pluginsCount.count,
        );
        if ('protocolMessage' == ba.type) {
          const dP = ba.message[ba.type];
          if (0 !== dP.type && 14 !== dP.type) {
            return;
          }
          if (0 === dP.type) {
            const dQ = ba.message[ba.type];
            d4.chats.del('' + dQ.key.remoteJid + dQ.key.id);
            const { enabled: dR, destination: dS, scope: dT } = cP(cg[ba.session].env.ANTI_DELETE);
            if (!cw.includes(b4.remoteJid) && dR && cQ(dT, b4.remoteJid)) {
              const dU = dQ.key && (await c9.getTMessage(dQ.key.id));
              if (!dU || true === dU.key.fromMe) {
                return;
              }
              await c9.setTMessage(dQ.key.id, null, true);
              const dV = cR(dS, b4.remoteJid, b1);
              const dW = {
                head: c9.lang.extra.deleted_message,
                body: '',
              };
              const dX = {
                type: 'forward',
                chat: dV,
                message: dU,
                options: {},
              };
              dX.options.quoted = dU;
              dX.options.linkPreview = dW;
              await aV.queue.push(dX);
            }
            b2 = true;
            return;
          }
          if (14 === dP.type) {
            const dY = dP.editedMessage;
            const dZ = bZ(dY);
            const e0 = cO(dY, dZ) || '';
            const e1 = await c9.getTMessage(dP.key.id);
            if (!e1) {
              return;
            }
            const e2 =
              e1.message?.messageContextInfo?.messageSecret ||
              ba.message?.messageContextInfo?.messageSecret;
            const e3 = {
              key: e1.key,
              message: e2
                ? {
                    ...dY,
                    messageContextInfo: {
                      ...(dY.messageContextInfo || {}),
                      messageSecret: e2,
                    },
                  }
                : dY,
            };
            const e4 = await c9.updateTMessage(dP.key.id, e3);
            const { enabled: e5, destination: e6, scope: e7 } = cP(cg[ba.session].env.ANTI_EDIT);
            if (e4 && e5 && cQ(e7, b4.remoteJid)) {
              const e8 = e4.history[e4.history.length - 1];
              const e9 = (e8 && e8.message) || e8;
              if ((cO(e9, bZ(e9)) || '') !== e0) {
                const ea = cR(e6, b4.remoteJid, b1);
                let eb = '';
                for (let ef = e4.history.length - 1; ef >= 0; ef--) {
                  const eg = e4.history[ef];
                  const eh = eg.message || eg;
                  eb += '*#' + (ef + 1) + '*\n' + (cO(eh, bZ(eh)) || '') + '\n\n';
                }
                eb = eb.trim();
                const ec = e4.history[0];
                const ed = {
                  text: eb,
                };
                await aV.queue.push({
                  type: 'prepare_message',
                  chat: ea,
                  message: ed,
                  options: {
                    quoted: ec,
                    linkPreview: {
                      head: (
                        c9.lang.extra.edited_message || '           Message edited #{0}'
                      ).replace('{0}', e4.editCount),
                      body: '',
                    },
                  },
                });
              }
            }
            ba.message = dP.editedMessage;
            ba.type = bZ(ba.message);
            ba.edited = true;
          }
        }
        let bm = cO(ba.message, ba.type);
        if ('true' == cg[ba.session].env.AJOIN) {
          if ('groupInviteMessage' == ba.type) {
            await c2(1000);
            const ek = {
              id: ba.key.remoteJid,
              key: ba.key,
              message: ba.message[ba.type],
            };
            const el = ek;
            const em = Math.floor(9000 * Math.random() + 1000);
            const en = {
              key: b4,
              message: b5,
            };
            const eo = {
              quoted: en,
            };
            cG[em] = el;
            return await aV.queue.push({
              type: 'prepare_message',
              chat: b1,
              message: {
                text: 'Send ' + em + ', to join',
              },
              options: eo,
            });
          }
          if (cG[bm] && cG[bm].id == ba.key.remoteJid) {
            await c2(1000);
            try {
              const ep = {
                key: b4,
                message: b5,
              };
              const eq = {
                quoted: ep,
              };
              await aY.groupAcceptInviteV4(cG[bm].key, cG[bm].message);
              await c2(1000);
              await aV.queue.push({
                type: 'prepare_message',
                chat: b1,
                message: {
                  text: '_Joined_',
                },
                options: eq,
              });
            } catch (er) {
              c9.logger.error(er, 'Failed to join group via auto-join');
            } finally {
              delete cG[bm];
            }
            return;
          }
        }
        ba.admin = false;
        ba.botIsAdmin = false;
        if (ba.isGroup) {
          const eu = bb || (await bd());
          if (eu) {
            try {
              ba.admin = await c9.isAdmin(eu.participants, ba.participant);
              ba.botIsAdmin = await c9.isAdmin(eu.participants, aY.user.jid);
            } catch (ev) {}
          }
        }
        ba.SUDO = bk;
        ba.isForwarded = ba.message[ba.type]?.contextInfo?.isForwarded;
        const bn = ba.message[ba.type]?.contextInfo?.expiration;
        if (
          !ba.isGroup &&
          !ba.fromMe &&
          'null' != cg[ba.session].env.PERSONAL_MESSAGE &&
          ((cY[ba.session] ||= new Set()), !cY[ba.session].has(ba.participant))
        ) {
          if (!(await cc(ba.participant, ba.session))) {
            if (!cv.done) {
              const eA = cj(cg[ba.session].env.PERSONAL_MESSAGE);
              if (eA && eA.startsWith('http')) {
                const eC = await c9.getBuffer(eA, false);
                if (eC.buffer && ['image', 'video', 'audio'].includes(eC.type)) {
                  cv.path = da.join(
                    __dirname,
                    '../media/greet.' + eC.mimetype.split('/')[1].split('.').pop(),
                  );
                  bU.writeFileSync(cv.path, eC.buffer);
                  cv.type = eC.mimetype.endsWith('webp') ? 'sticker' : eC.type;
                  cv.message = cg[ba.session].env.PERSONAL_MESSAGE.replace(eA, '').trim();
                }
              }
              cv.done = true;
              cv.message ||= cg[ba.session].env.PERSONAL_MESSAGE;
            }
            const ey = cv.type ? cv.type : 'text';
            const ez = await c9.uptimeQuoteReplace(cv.message);
            try {
              await aV.queue.push({
                type: 'prepare_message',
                chat: ba.participant,
                message: {
                  [ey]: 'text' == ey ? ez : bU.readFileSync(cv.path),
                },
                options: {
                  caption: ez,
                },
              });
              await cd(ba.participant, ba.session);
            } catch (eF) {
              c9.logger.error(eF);
            }
          }
          cY[ba.session].add(ba.participant);
        }
        const bo = cF(b4.id);
        const bp = 'web' === bo;
        const bq = ba.message[ba.type]?.contextInfo?.mentionedJid || [];
        ba.mentions = [];
        if (b0 && bq.length > 0) {
          c9.logger.info(
            '[Handler] Resolving ' + bq.length + ' mentions for msg ' + b4.id?.slice(-8),
          );
        }
        for (const eG of bq) {
          let eH = bY(eG) || eG;
          if (eH.endsWith('lid')) {
            if (b0) {
              c9.logger.info('[Handler] Resolving LID mention: ' + eH?.slice(0, 15) + '...');
            }
            eH = (await cg[ba.session].findJid(eH)) || eH;
            if (b0) {
              c9.logger.info('[Handler] Resolved to: ' + eH?.slice(0, 15) + '...');
            }
          }
          ba.mentions.push(bY(eH));
        }
        ba.isBot =
          'string' == typeof b4.id &&
          ((b4.id.startsWith('3EB0') && 12 === b4.id.length) ||
            (b4.id.startsWith('BAE5') && 16 === b4.id.length));
        ba.isBot ||= 'bot' == bo;
        if (!ba.isBot && !(null == bn)) {
          ck.set(b4.remoteJid, bn);
        }
        if (
          bj &&
          (ba.isBot || (bp && 'true' === cg[ba.session].env.IGNORE_WEB)) &&
          !ba.fromMe &&
          'false' !== cg[ba.session].env.ANTI_BOT &&
          ba.isGroup &&
          !ba.admin
        ) {
          if (ba.SUDO) {
            return;
          }
          const eJ = bb || (await bd());
          if (!eJ) {
            return;
          }
          const eK = eJ.participants;
          if (!eK) {
            return;
          }
          if (!(await c9.isAdmin(eK, aY.user.jid))) {
            return;
          }
          if (await c9.isAdmin(eK, ba.participant)) {
            return;
          }
          if (!('true' === cg[ba.session].env.ANTI_BOT)) {
            if (!c9.parsedJid(cg[ba.session].env.ANTI_BOT).includes(ba.key.remoteJid)) {
              return;
            }
          }
          const eL = {
            type: 'participant_remove',
            chat: b4.remoteJid,
            participant: ba.participant,
          };
          await aV.queue.push(eL);
          await c2(1000);
          if ('false' !== cg[ba.session].env.ANTI_BOT_MESSAGE) {
            await aV.queue.push({
              type: 'prepare_message',
              chat: b4.remoteJid,
              message: {
                text: cg[ba.session].env.ANTI_BOT_MESSAGE.replace(
                  '&mention',
                  '@' + c9.jidToNum(ba.participant),
                ),
              },
              options: {
                contextInfo: {
                  mentionedJid: [ba.participant],
                },
              },
            });
          }
          return;
        }
        if ('stickerMessage' == ba.type) {
          const eN = ba.message[ba.type]?.fileSha256?.toString('base64');
          if ((ba.SUDO || ba.fromMe) && eN && cg[ba.session].db?.cmd && cg[ba.session].db.cmd[eN]) {
            bm = cg[ba.session].PREFIX + cg[ba.session].db.cmd[eN];
          }
        }
        if (!!cS(cg[ba.session].env.SEND_READ, b4.remoteJid) && !ba.isBot && !bh && !ba.votes) {
          if ('audioMessage' === ba.type && ba.message[ba.type].ptt) {
            await aY.sendReceipt(b4.remoteJid, b4.participant, [b4.id], 'played');
          } else {
            await aV.queue.push({
              type: 'read',
              chat: b4.remoteJid,
              participant: b4.participant,
              ids: [b4.id],
            });
          }
        }
        ba.text = bm || '';
        if (!ba.isBot && ba.text) {
          if (
            await c9.wcg.isWord(
              b4.remoteJid,
              ba.participant,
              ba.text,
              {
                key: b4,
                message: b5,
              },
              ba.session,
            )
          ) {
            return;
          }
          if (ba.text.toLowerCase().endsWith('join')) {
            if (await c9.wcg.join(b4.remoteJid, ba.participant, ba.session)) {
              return;
            }
          }
        }
        ba.messageTimestamp = b7;
        ba.quoted = null;
        const br = ba.message[ba.type]?.contextInfo;
        const bs = br?.quotedMessage;
        if (bs) {
          let eR = {
            message: c0(bs),
          };
          const eS = br.participant || br.participantAlt;
          const eT = eS.endsWith('@lid') ? await cg[ba.session].findJid(eS) : eS;
          eR.key = {
            remoteJid: br.remoteJid || b4.remoteJid,
            fromMe: br.participant == aY.user.jid,
            id: br.stanzaId,
            participant: eS,
            participantAlt: bY(eT),
          };
          eR.type = bZ(bs) || Object.keys(bs)[0];
          if (
            [
              'ptvMessage',
              'viewOnceMessageV2Extension',
              'ephemeralMessage',
              'viewOnceMessage',
              'viewOnceMessageV2',
            ].includes(eR.type)
          ) {
            eR.message = c0(bs[eR.type].message);
            eR.type = bZ(eR.message);
          }
          eR.isGroup = c1(eR.key.remoteJid);
          bY(eR.key.participantAlt);
          eR.participant = eR.isGroup
            ? await cg[ba.session].findJid(eR.key.participant)
            : await cg[ba.session].findJid(eR.key.remoteJid);
          eR.fromMe = eR.key.fromMe;
          eR.isBot =
            ('string' == typeof eR.key.id &&
              eR.key.id.startsWith('3EB0') &&
              12 == eR.key.id.length) ||
            ('string' == typeof eR.key.id &&
              eR.key.id.startsWith('BAE5') &&
              16 === eR.key.id.length);
          const eU = eR.message[eR.type];
          eR.text = 'string' == typeof eU ? eU : null;
          eR.text ||=
            eU?.text ||
            eU?.caption ||
            eU?.conversation ||
            eU?.contentText ||
            eU?.selectedDisplayText ||
            eU?.title ||
            '';
          ba.quoted = eR;
          eR = null;
        }
        if (
          c7.API_ENABLED &&
          'event' !== ba.type &&
          !String(ba.key.remoteJid).includes('status@broadcast')
        ) {
          c9.levanter.emit('incoming.message', ba);
        }
        if (!c7.BOT_ENABLED) {
          return;
        }
        const bt =
          'conversation' == ba.type || 'extendedTextMessage' == ba.type
            ? 'text'
            : ba.type.split(ba.type.match(/[A-Z]/) || [])[0];
        if (bt && ba.isGroup && !ba.isBot && '0' === ba.session) {
          if (!ba.key.remoteJid || !ba.participant) {
            c9.logger.warn({
              message: aU,
              error: 'missing gid/uid for ' + ba.type + '. Msg ID: ' + ba.key.id,
            });
            return;
          }
          await cf(ba.key.remoteJid, ba.participant, bt, ba.pushName);
        }
        if ('true' === cg[ba.session].env.LOG_MSG) {
          c9.logger.debug({
            id: ba.key.id,
            remoteJid: b4.remoteJid,
            text: ba.text ? ba.text : ba.type,
            participant: ba.isGroup ? c9.jidToNum(ba.participant) : '',
          });
        }
        if ('text' == bt && !ba.isBot && !ba.votes) {
          const eW = Number(ba.text);
          if (eW >= 1 && eW < 10) {
            const { code: eX, text: eY } = await d9.isTicTacToe(
              ba.text,
              ba.key.remoteJid,
              ba.participant,
              ba.session,
            );
            const eZ = {
              text: eY,
            };
            const f0 = {
              quoted: aU,
            };
            if (process.env.LEVANTER_TEST && eX) {
              console.log('[TEST] TicTacToe move detected, code:', eX);
            }
            if (300 == eX) {
              return await aV.queue.push({
                type: 'prepare_message',
                chat: ba.key.remoteJid,
                message: eZ,
                options: f0,
              });
            }
            const f1 = {
              text: eY[2],
            };
            const f2 = {
              mentionedJid: [eY[0], eY[1]],
            };
            const f3 = {
              contextInfo: f2,
            };
            if (301 == eX) {
              return await aV.queue.push({
                type: 'prepare_message',
                chat: ba.key.remoteJid,
                message: f1,
                options: f3,
              });
            }
            if (201 == eX) {
              const f4 =
                '---' +
                c9.lang.plugins.tictactoe.game_finish +
                '---\n\n' +
                c9.lang.plugins.tictactoe.winner +
                ' : @' +
                c9.jidToNum(eY[0]) +
                '\n\n' +
                eY[2];
              const f5 = {
                text: f4,
              };
              const f6 = {
                mentionedJid: [eY[0], eY[1]],
              };
              const f7 = {
                contextInfo: f6,
              };
              const f8 = {
                type: 'prepare_message',
                chat: ba.key.remoteJid,
                message: f5,
                options: f7,
              };
              return await aV.queue.push(f8);
            }
            if (403 == eX) {
              const f9 = '---Game Tie ⏹---\n\n' + eY[2];
              const fa = {
                text: f9,
              };
              const fb = {
                mentionedJid: [eY[0], eY[1]],
              };
              const fc = {
                contextInfo: fb,
              };
              const fd = {
                type: 'prepare_message',
                chat: ba.key.remoteJid,
                message: fa,
                options: fc,
              };
              return await aV.queue.push(fd);
            }
          }
        }
        if (cg[ba.session].AFK && cg[ba.session].AFK.isAfk && !ba.isBot && ba.text) {
          const fg =
            !ba.isGroup ||
            ba.mentions.includes(cg[ba.session].AFK.p) ||
            (ba.quoted && ba.quoted.participant == cg[ba.session].AFK.p);
          const fh = {
            text: c9.lang.plugins.afk.not_afk,
          };
          const fi = {
            key: b4,
            message: b5,
          };
          const fj = {
            quoted: fi,
          };
          if (ba.fromMe || ba.participant === cg[ba.session].AFK.p) {
            cg[ba.session].AFK.isAfk = false;
            return await aV.queue.push({
              type: 'prepare_message',
              chat: cg[ba.session].AFK.p,
              message: fh,
              options: fj,
            });
          }
          if (fg) {
            return await aV.queue.push({
              type: 'prepare_message',
              chat: b4.remoteJid,
              message: {
                text: cg[ba.session].AFK.reason.replace(
                  '#lastseen',
                  ch(Math.round(new Date().getTime() / 1000) - cg[ba.session].AFK.lastseen),
                ),
              },
              options: {
                quoted: {
                  key: b4,
                  message: b5,
                },
              },
            });
          }
        }
        let bu = false;
        const bv = aY.logout;
        let bw =
          ba.participant && ba.participant.endsWith('lid')
            ? cE(cg[ba.session].TEMP_SUDO[0])
            : c9.numToJid(cg[ba.session].TEMP_SUDO[0]);
        const bx = [aY.user.jid];
        if (aY.user.lid) {
          bx.push(aY.user.lid);
          bx.push(cx(aY.user.lid));
        }
        if (bw) {
          bx.push(bw);
        }
        const by =
          'event' !== ba.type && ba.mentions.some((fk) => bx.includes(fk) || bx.includes(bY(fk)));
        if (!ba.edited && !ba.isBot && by) {
          const fk = await c9.getMention(ba.session);
          if (fk && fk.enabled && !cw.includes(b4.remoteJid)) {
            const fl = {};
            const fm = {
              key: b4,
              message: b5,
            };
            fl.quoted = fm;
            fl.contextInfo = {};
            const fn = cg[ba.session].parsedMention;
            if (fn) {
              const fs = structuredClone(fn);
              await cA(fs);
              Object.assign(fl, fs);
            }
            const fo = cr(fk.text);
            const fp = cm(fk.text);
            let fq = fk.text;
            if (['mp4', 'image', 'gif'].includes(fp) && fo) {
              for (const ft of fo) {
                fq = fq.replace(ft, '').trim();
              }
              fl.caption = fq.replace('type/' + fp, '').trim();
            }
            if (fo && fp) {
              const fu = cI[fp];
              const fv = cJ[fp];
              const fw = dc(fo);
              fl.mimetype = fu;
              if ('gif' === fp) {
                fl.gifPlayback = true;
              }
              if ('audio' === fp) {
                fl.ptt = true;
              }
              let fx =
                '' +
                (c9.nameFromUrl(fw) || 'undefined') +
                ('sticker' === fp || 'audio' === fp ? fv : '');
              if (!bU.existsSync(bV(__dirname, '../media/mention/' + ba.session + fx))) {
                const fy = await dg(fw, fx, fp, ba.session);
                if (fy) {
                  let fz =
                    '```---ERROR REPORT---\n\nVersion : ' +
                    c7.VERSION +
                    '\nMessage : ' +
                    fy +
                    '\nError   : failed to fetch ' +
                    fw +
                    '\nJid     : ' +
                    b4.remoteJid +
                    '\ncommand : @mention\nPlatform : ' +
                    c9.PLATFORM +
                    '```\n\n```-----``` *Made by LyFE with ❣* ```-----```';
                  const fA = {
                    text: fz,
                  };
                  const fB = {
                    key: b4,
                    message: b5,
                  };
                  const fC = {
                    quoted: fB,
                  };
                  const fD = {
                    type: 'prepare_message',
                    chat: b1,
                    message: fA,
                    options: fC,
                  };
                  aV.queue.push(fD);
                  return;
                }
              }
              try {
                const fE = bU.readFileSync(bV(__dirname, '../media/mention/' + ba.session + fx));
                const fF = {
                  [cH[fp]]: fE,
                  ...fl,
                };
                const fG = {
                  type: 'prepare_message',
                  chat: b4.remoteJid,
                  message: fF,
                  options: fl,
                };
                aV.queue.push(fG);
              } catch (fI) {
                let fJ =
                  '```---ERROR REPORT---\n\nVersion : ' +
                  c7.VERSION +
                  '\nMessage : ' +
                  fI +
                  '\nError   : failed to fetch ' +
                  fw +
                  '\nJid     : ' +
                  b4.remoteJid +
                  '\ncommand : @mention\nPlatform : ' +
                  c9.PLATFORM +
                  '```\n\n```-----``` *Made by LyFE with ❣* ```-----```';
                const fK = {
                  text: fJ,
                };
                const fL = {
                  key: b4,
                  message: b5,
                };
                const fM = {
                  quoted: fL,
                };
                const fN = {
                  type: 'prepare_message',
                  chat: b1,
                  message: fK,
                  options: fM,
                };
                aV.queue.push(fN);
                return;
              }
            } else {
              aV.queue.push({
                type: 'prepare_message',
                chat: b4.remoteJid,
                message: {
                  text: fk.text,
                  ...fl,
                },
                options: fl,
              });
            }
          }
        }
        const bz = !!ba.text && /https?:\/\/|www\./i.test(ba.text);
        if (ba.isGroup && 'event' !== ba.type) {
          dm(ba, b4, b5, aV, aY, bb, bz, bj, dl).catch((fP) => {
            console.error('[TEST] Security check caught error:', fP.message);
            c9.logger.error(fP, 'Security check error');
          });
        }
        if (
          !b2 &&
          !('event' === ba.type) &&
          !cw.includes(b4.remoteJid) &&
          (!('null' == cg[ba.session].env.ANTI_DELETE) || !('null' == cg[ba.session].env.ANTI_EDIT))
        ) {
          c9.setTMessage(ba.key.id, {
            key: ba.key,
            message: ba.message,
          });
        }
        const bA = await c9.yami(ba.key.remoteJid, ba.session, true, ba.participant);
        d5();
        if (cq.test(ba.text) && ba.isBot && ba.isGroup && ba.fromMe) {
          b3 = !b3;
          ba.text = cg[ba.session].PREFIX + ba.text;
        }
        if (process.env.LEVANTER_TEST && 'event' === ba.type) {
          process.stdout.write(
            '[TEST] Event reaching mid-point. Action: ' + ba.event_action + '\n',
          );
        }
        const bB = aY;
        bB.owner = b1;
        bB.queue = aV.queue;
        const bC = '' + ba.text + ba.session;
        if (
          !ba.isBot &&
          !ba.votes &&
          (ba.fromMe || bk || bA) &&
          c9.cached[bC] &&
          c9.cached[bC].gid == b4.remoteJid &&
          (c9.cached[bC].uid == ba.participant || ba.fromMe || bk)
        ) {
          ba.text = cg[ba.session].PREFIX + c9.cached[bC].text;
          delete c9.cached[bC];
        } else if (ba.votes && !ba.isBot && (ba.fromMe || bk || bA)) {
          const fQ = ba.votes.find(
            (fR) => fR.voters.includes(ba.participant) || fR.voters.includes('me'),
          );
          if (
            fQ &&
            c9.cached[fQ.name] &&
            c9.cached[fQ.name].gid == b4.remoteJid &&
            (c9.cached[fQ.name].uid == ba.participant || ba.fromMe || bk)
          ) {
            ba.text = cg[ba.session].PREFIX + c9.cached[fQ.name].text;
            delete c9.cached[fQ.name];
            ba.message = null;
            ba.fakeQuoted = {
              key: {
                participant: '0@s.whatsapp.net',
                remoteJid: 'status@broadcast',
              },
              message: {
                extendedTextMessage: {
                  text: fQ.name,
                },
              },
            };
          }
        }
        const bD = aZ.pnr;
        const bE =
          ba.isGroup || ba.participant != c9.numToJid(cs) ? cg[aZ.id].cammands : cg[aZ.id].pammands;
        const bF = !ba.isGroup && ba.participant == c9.numToJid(cs);
        const bG =
          ba.isGroup && ba.admin && !bk && cg[ba.session].adminsjid.includes(ba.participant);
        const bH = bG ? await c9.getAmenu(ba.key.remoteJid, ba.session) : null;
        const bI =
          cw.includes(b4.remoteJid) && !cg[ba.session].TEMP_SUDO.includes(cs) && !process.env.pqrs;
        const bJ = async (fR, fS) => {
          if ('true' === cg[ba.session].env.CMD_REACTION) {
            if (1 !== fR) {
              await aV.queue.push({
                type: 'prepare_message',
                chat: b4.remoteJid,
                message: {
                  react: {
                    text: cp[fR],
                    key: b4,
                  },
                },
              });
            }
            if (fS) {
              setTimeout(() => {
                bJ(3, false);
              }, 5000);
            }
          }
        };
        if (b0) {
          c9.logger.info(
            '[Handler] Command matching: text="' +
              ba.text?.slice(0, 30) +
              '", r.E=' +
              aZ.E +
              ', isSudo=' +
              bk +
              ', commandCount=' +
              Object.keys(bE).length,
          );
        }
        for (const fR in bE) {
          const fS = bE[fR];
          cz.test(fR);
          if (fS.active) {
            const fT = fS.pattern && fS.pattern.test(ba.text) && aZ.E;
            if (!fT && fS.pattern) {
              continue;
            }
            const fU = bG && true === fT;
            const fV = (!ba.isBot && fT) || (b3 && ba.isBot && fT);
            const fW = fS.fromMe == cu;
            const fX =
              (fW && (bh || bk || bD || fU)) ||
              (fW && bA && bA.has(fS.name) && !df.includes(fS.name)) ||
              (fW && bG && bH && bH.includes(fS.name) && !df.includes(fS.name));
            const fY = fT && fX && true === fV;
            const fZ =
              !bu && fS.on && !fS.pattern && bh == fW && ('true' === process.env.WEB || !bh || !bp);
            if (fS.pattern && 0 == fS.fromMe) {
              bv();
            }
            const g0 = true === fY || true === (bF && fT && fW);
            const g1 = 'event' === fS.on && fS.event_action === ba.event_action;
            if ((true === g0 || true === fZ || true === g1) && !bI && c9.formatter.n) {
              const g2 = {
                text: c9.lang.extra.group_cmd,
              };
              if (fS.onlyGroup && !ba.isGroup && fS.pattern) {
                return await aV.queue.push({
                  type: 'prepare_message',
                  chat: ba.key.remoteJid,
                  message: g2,
                });
              }
              if ((fS.onlyGroup && ba.isGroup) || !fS.onlyGroup) {
                const g3 = ba.text && fS.pattern ? ba.text.match(fS.pattern) : '';
                if (fS.pattern) {
                  await bJ(0, false);
                }
                try {
                  let g4 = new ca(bB, ba, !!fS.pattern, aY);
                  await fS.function(
                    g4,
                    (g3 &&
                      (6 == g3.length
                        ? undefined === g3[3]
                          ? g3[4]
                          : g3[3]
                        : undefined === g3[2]
                          ? g3[3]
                          : g3[2])) ||
                      '',
                    bl,
                  );
                  if (process.env.LEVANTER_TEST) {
                    console.log('[TEST] Command completed successfully');
                  }
                  if (fS.pattern) {
                    cN(ba.participant || b4.remoteJid, fS.name, ba.isGroup);
                    await bJ(1, true);
                  }
                  g4 = null;
                } catch (g5) {
                  if (fS.pattern) {
                    await bJ(2, true);
                  }
                  const g6 = fS.name;
                  const g7 =
                    'object' == typeof g5.message ? JSON.stringify(g5.message) : g5.message || g5;
                  c9.logger.error(g5, g5.stack);
                  cM(
                    ba.participant || b4.remoteJid,
                    g6,
                    g5.stack + '\nMessage: ' + JSON.stringify(ba),
                  );
                  let g8 = c9.lang.extra.error_message.format(
                    c7.VERSION,
                    ba.text,
                    g7,
                    b4.remoteJid,
                    g6,
                    c9.PLATFORM,
                  );
                  const g9 = {
                    text: g8,
                  };
                  const ga = {
                    key: b4,
                    message: b5,
                  };
                  const gb = {
                    quoted: ga,
                  };
                  const gc = {
                    type: 'prepare_message',
                    chat: b1,
                    message: g9,
                    options: gb,
                  };
                  aV.queue.push(gc);
                }
              }
            }
          }
        }
        if (b0) {
          c9.logger.info('[Handler] Completed successfully for msg ' + b4?.id?.slice(-8));
        }
      } catch (gd) {
        if ('true' === process.env.DEBUG_RESTART) {
          c9.logger.error(
            '[Handler] Error processing msg ' + b4?.id?.slice(-8) + ': ' + gd.message,
          );
        }
        c9.logger.error(
          {
            error: gd.message,
            stack: gd.stack,
            messageId: b4?.id,
            remoteJid: b4?.remoteJid,
            messageType: bZ(c0(b5)),
          },
          'Handler error caught',
        );
        if (b1 && 'true' === c7.ERROR_NOTIFY) {
          try {
            const gf = {
              text: '⚠️ Handler Error:\n' + gd.message,
            };
            const gg = {
              type: 'prepare_message',
              chat: b1,
              message: gf,
            };
            await aV.queue.push(gg);
          } catch (gh) {
            c9.logger.error(gh, 'Failed to send error notification');
          }
        }
      }
    }
  };
}
