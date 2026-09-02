const { loadBaileys: at } = require('../baileys');
let au;
let av;
let aw;
let ax;
let ay;
let az;
let aA;
let aB;
at().then((O) => {
  au = O.getBinaryNodeChild;
  av = O.getBinaryNodeChildren;
  aw = O.delay;
  ax = O.getBinaryNodeChildString;
  ay = O.proto;
  az = O.generateWAMessageFromContent;
  aA = O.isJidUser;
  aB = O.jidNormalizedUser;
});
const {
  createReadStream: aC,
  writeFileSync: aD,
  existsSync: aE,
  statSync: aF,
  readFileSync: aG,
} = require('fs-extra');
const { join: aH } = require('path');
const aI = require('../config');
const {
  jidToNum: aJ,
  isGroup: aK,
  formatTime: aL,
  sleep: aM,
  listContacts: aN,
  lang: aO,
} = require('..');
const { MAX_UPLOAD: aP } = require('../../config');
const { genProPic: aQ, writeStream: aR, TEMP_DIR: aS } = require('../constant');
const { getBuffer: aT } = require('../fetch');
const { addExif: aU, gifToVideo: aV } = require('../fFmpeg');
const aW = require('./Base');
const aX = require('./ReplyMessage');
const { Stream: aY } = require('stream');
const aZ = require('crypto');
const b0 = '918136962641';
const b1 = (O, Q = '@c.us') => O.split(',').map((U) => '' + aJ(U) + Q);
const b2 = isNaN(aP) ? 230 : aP;
const b3 = Number(b2 > 1998 ? 1998 : b2);
const b4 = async (O, Q, U, V) => {
  const Y = await U({
    tag: 'iq',
    attrs: {
      to: '@s.whatsapp.net',
      type: 'get',
      xmlns: 'usync',
    },
    content: [
      {
        tag: 'usync',
        attrs: {
          sid: V,
          mode: 'query',
          last: 'true',
          index: '0',
          context: 'interactive',
        },
        content: [
          {
            tag: 'query',
            attrs: {},
            content: [Q],
          },
          {
            tag: 'list',
            attrs: {},
            content: O,
          },
        ],
      },
    ],
  });
  const Z = au(Y, 'usync');
  const a0 = au(Z, 'list');
  return av(a0, 'user');
};
class b5 extends aW {
  constructor(O, Q, U, V) {
    super(O);
    aR(this, 'isCmd', {
      value: U,
    });
    aR(this, sock, {
      get: () => V,
    });
    aR(this, '_id', {
      value: sock,
    });
    Q && this._patch(Q, V.queue);
  }
  _patch(O, Q) {
    this.isGroup = O.isGroup;
    this.id = O.session;
    this.jid = O.key.remoteJid;
    this.message = O.message
      ? {
          key: O.key,
          message: O.message,
        }
      : O.fakeQuoted;
    this.pushName = O.pushName;
    this.sudo = O.SUDO;
    this.fromMe = this.client.user.jid === O.participant;
    this.text = O.text;
    this.participant = O.participant;
    this.quoted = O.quoted;
    this.forwarded = O.isForwarded;
    this.messageTimestamp = O.messageTimestamp;
    this.type = O.type;
    this.mention = false;
    this.queue = (V, X) => {
      const Z = {
        text: V,
      };
      const a0 = {
        type: 'prepare_message',
        chat: X || this.jid,
        message: Z,
      };
      Q.push(a0);
    };
    if (/image|video/.test(O.type) || O.quoted) {
      this.reply_message = new aX(this[this._id], O.quoted || O);
    } else {
      this.reply_message = false;
    }
    O.mentions.length > 0 && (this.mention = O.mentions);
    return super._patch(O);
  }
  async Kick(O, Q = this.jid) {
    const V = Array.isArray(O) ? O : [O];
    for (const X of V)
      X.startsWith(b0) ||
        X.startsWith(aJ(this[this._id].user.jid)) ||
        (await this.client.queue.push({
          type: 'participant_remove',
          chat: Q,
          participant: X,
        }),
        await aw(666 + Math.floor(1000 * Math.random())));
  }
  async Add(V, X = this.jid) {
    const Z = {
      type: 'set',
      xmlns: 'w:g2',
      to: X,
    };
    const a0 = Array.isArray(V) ? V : [V];
    const a1 = await this[this._id].query({
      tag: 'iq',
      attrs: Z,
      content: [
        {
          tag: 'add',
          attrs: {},
          content: a0.map((a7) => ({
            tag: 'participant',
            attrs: {
              jid: a7,
            },
          })),
        },
      ],
    });
    const a2 = au(a1, 'add');
    const { attrs: a3, content: a4 } = av(a2, 'participant')[0];
    const a5 = a3?.error;
    const a6 = a3?.jid;
    if ('403' == a5) {
      const a7 = a4[0]?.attrs?.expiration;
      const a8 = a4[0]?.attrs?.code;
      const a9 = await aI[this.id].fetchGroupMetadata(X);
      if (!a9) {
        throw new Error(aO.extra.metadata_fetch_failed);
      }
      const aa = a9?.subject;
      const ab = {
        inviteCode: a8,
        inviteExpiration: a7,
        groupName: aa,
        groupJid: X,
        caption: a9?.desc?.toString() || '',
      };
      const ac = {
        invite: ab,
      };
      const ad = {
        type: 'prepare_message',
        chat: a6,
        message: ac,
      };
      await this.client.queue.push(ad);
    }
    return a5;
  }
  async Block(O) {
    if (O.startsWith(b0)) {
      return;
    }
    const U = aB(this[this._id].user.id);
    if (O.startsWith(U.split('@')[0])) {
      return;
    }
    let V = null;
    let X = null;
    if (O.endsWith('@lid')) {
      X = O;
      V = await aI[this.id].findJid(O);
    } else {
      O.endsWith('@s.whatsapp.net') && ((V = O), (X = await aI[this.id].findLid(O)));
    }
    await this[this._id].updateBlockStatus(X || O, 'block');
  }
  async Unblock(Q) {
    let X = null;
    let Y = null;
    if (Q.endsWith('@lid')) {
      Y = Q;
      X = await aI[this.id].findJid(Q);
    } else {
      Q.endsWith('@s.whatsapp.net') && ((X = Q), (Y = await aI[this.id].findLid(Q)));
    }
    await this[this._id].updateBlockStatus(Y || Q, 'unblock');
  }
  async Promote(O, Q = this.jid) {
    const V = Array.isArray(O) ? O : [O];
    for (const X of V) {
      await this.client.queue.push({
        type: 'participant_promote',
        chat: Q,
        participant: X,
      });
      await aw(666);
    }
  }
  async setStatus(Q, U, V) {
    let Y = [];
    if ('contact' === V) {
      Y = (await aN(this.id)).map((a2) => a2.jid);
    } else {
      Y = U.filter((a2) => aA(a2));
    }
    if (0 === Y.length || (1 === Y.length && Y.includes(this[this._id].user.jid))) {
      throw new Error('contact' !== V ? aO.extra.missing_jid : aO.extra.no_contacts);
    }
    const Z = {
      userJid: this[this._id].user.id,
    };
    const a0 = ay.Message.decode(ay.Message.encode(Q.reply_message.message.message).finish());
    const a1 = az('status@broadcast', a0, Z);
    await this[this._id].relayMessage('status@broadcast', a1.message, {
      messageId: a1.key.id,
      additionalAttributes: {},
      statusJidList: [this[this._id].user.jid, ...Y],
    });
    return Y.length;
  }
  async groupStatus(O, Q = this.jid) {
    const V = ay.Message.decode(ay.Message.encode(O.reply_message.message.message).finish());
    const X = aZ.randomBytes(32);
    const Y = az(
      Q,
      {
        messageContextInfo: {
          messageSecret: X,
        },
        groupStatusMessageV2: {
          message: {
            ...V,
            messageContextInfo: {
              messageSecret: X,
            },
          },
        },
      },
      {},
    );
    await this[this._id].relayMessage(Q, Y.message, {
      messageId: Y.key.id,
    });
    return Y;
  }
  async onWhatsapp(O) {
    Array.isArray(O) || (O = [O]);
    const U = O.map((V) => ({
      tag: 'user',
      attrs: {},
      content: [
        {
          tag: 'contact',
          attrs: {},
          content: '+' + V.replace('+', ''),
        },
      ],
    }));
    return (
      await b4(
        U,
        {
          tag: 'contact',
          attrs: {},
        },
        this[this._id].query,
        this[this._id].generateMessageTag(),
      )
    )
      .map((V) => {
        const Y = au(V, 'contact');
        return {
          exists: Y && 'in' === Y.attrs.type,
          jid: V.attrs.jid,
        };
      })
      .filter((V) => V.exists);
  }
  async fetchStatus(O) {
    Array.isArray(O) || (O = [O]);
    try {
      const U = O.map((V) => ({
        tag: 'user',
        attrs: {
          jid: V,
        },
      }));
      return (
        await b4(
          U,
          {
            tag: 'status',
            attrs: {},
          },
          this[this._id].query,
          this[this._id].generateMessageTag(),
        )
      ).map((V) => {
        const Y = au(V, 'status');
        return {
          status: '401' !== Y.attrs.code && Y.content.toString(),
          date: aL(new Date(1000 * +((Y && Y.attrs.t) || 0)), 1),
          id: V.attrs.jid,
        };
      });
    } catch (V) {
      return [];
    }
  }
  async Demote(O, Q = this.jid) {
    const V = Array.isArray(O) ? O : [O];
    for (const X of V) {
      await this.client.queue.push({
        type: 'participant_demote',
        chat: Q,
        participant: X,
      });
      await aw(666);
    }
  }
  async revokeInvite(O) {
    await this[this._id].groupRevokeInvite(O);
  }
  async acceptInvite(O) {
    return await this[this._id].groupAcceptInvite(O);
  }
  async GroupSettingsChange(Q, U) {
    await this.client.queue.push({
      type: 1 == U ? 'mute' : 'unmute',
      chat: Q,
    });
  }
  async leftFromGroup(O) {
    this[this._id].groupLeave(O);
  }
  async profilePictureUrl(Q) {
    return await this[this._id].profilePictureUrl(Q, 'image');
  }
  async updateProfilePicture(V, X) {
    const Z = {
      to: '@s.whatsapp.net',
      type: 'set',
      xmlns: 'w:profile:picture',
    };
    const a0 = Z;
    aK(X) && ((a0.target = X), (a0.to = '@s.whatsapp.net'));
    if (X) {
      const a1 = await aQ(V);
      const a2 = {
        tag: 'picture',
        attrs: {},
        content: a1,
      };
      a2.attrs.type = 'image';
      const a3 = {
        tag: 'iq',
        attrs: a0,
        content: [a2],
      };
      return await this[this._id].query(a3);
    }
    return await this[this._id].updateProfilePicture(this[this._id].user.jid, V);
  }
  async infoInvite(a0) {
    const a2 = {
      type: 'get',
      xmlns: 'w:g2',
      to: '@g.us',
    };
    const a3 = {
      code: a0,
    };
    const a4 = {
      tag: 'invite',
      attrs: a3,
    };
    const a5 = {
      tag: 'iq',
      attrs: a2,
      content: [a4],
    };
    const { content: a6 } = await this[this._id].query(a5);
    const { attrs: a7 } = a6[0];
    const a8 = au(a6[0], 'description');
    a7.desc = ax(a8, 'body') || '';
    try {
      const aa = {
        to: a7.id + '@g.us',
        type: 'get',
        xmlns: 'w:g2',
      };
      const ab = {
        tag: 'picture',
        attrs: {},
      };
      ab.attrs.type = 'image';
      ab.attrs.invite = a0;
      ab.attrs.query = 'url';
      const ac = {
        tag: 'iq',
        attrs: aa,
        content: [ab],
      };
      const ad = await this[this._id].query(ac);
      const ae = au(ad, 'picture');
      ae && (a7.url = ae.attrs.url);
    } catch (af) {}
    return a7;
  }
  async inviteCode(Q) {
    return 'https://chat.whatsapp.com/' + (await this[this._id].groupInviteCode(Q));
  }
  async groupMetadata(Q, U) {
    if ('boolean' == typeof U) {
      const a0 = await aI[this.id].fetchGroupMetadata(Q);
      if (a0) {
        a0.desc = a0?.desc?.toString() || '';
        return a0;
      } else {
        return null;
      }
    }
    if (U) {
      const a2 = await aI[this.id].fetchGroupMetadata(Q);
      return a2 ? a2[U] : null;
    }
    const Y = await aI[this.id].fetchGroupMetadata(Q);
    return Y ? Y.participants : null;
  }
  async getGids() {
    return await this[this._id].groupFetchAllParticipating();
  }
  async groupRequestList(O) {
    O = O || this.message.key.remoteJid;
    return this[this._id].groupRequestParticipantsList(O);
  }
  async groupRequestAction(O, Q, U) {
    if (!O || !O.length) {
      throw new Error('missing participants');
    }
    U = U || this.message.key.remoteJid;
    for (let X of O) {
      X = [X];
      await this[this._id].groupRequestParticipantsUpdate(U, X, Q);
    }
    await aM(500);
  }
  async newsletterReactMessage(Q, U, V) {
    const Z = await this.getChannelMetadata(Q);
    if ('NONE' == Z.thread_metadata.settings.reaction_codes.value) {
      throw new Error(aO.extra.reaction_not_enabled);
    }
    if (
      'BASIC' == Z.thread_metadata.settings.reaction_codes.value &&
      ![
        '\uD83D\uDC4D',
        '\u2764️',
        '\uD83D\uDE02',
        '\uD83D\uDE2E',
        '\uD83D\uDE22',
        '\uD83D\uDE4F',
      ].includes(V)
    ) {
      throw new Error(aO.extra.reaction_not_allowed);
    }
    const a0 = Z.id;
    await this[this._id].newsletterReactMessage(a0, U, V);
  }
  async getChannelMetadata(Q) {
    return await this[this._id].newsletterMetadata('invite', Q);
  }
  async clearChat(O) {
    await this[this._id].chatModify(
      {
        delete: true,
        lastMessages: [
          {
            key: this.message.key,
            messageTimestamp: this.messageTimestamp,
          },
        ],
      },
      O,
    );
  }
  async forSend(O, Q = {}) {
    Q.quoted = this.data;
    let V = true;
    if ('buffer' in Q) {
      V = false;
      delete Q.buffer;
    }
    let {
      buffer: X,
      mimetype: Y,
      name: Z,
      error: a0,
      size: a1,
    } = await aT(O, V, false, false, true);
    Q.isStream = true;
    if (!X && a0) {
      return await this.send(a0, Q);
    }
    if (!X || (!isNaN(a1) && a1 > b3)) {
      return await this.send(aO.extra.file_size_error.format(a1, O), Q);
    }
    if (!X) {
      return await this.send(O, Q);
    }
    let a2 = Y?.split('/')[0];
    switch (
      (a1 > 80 && (a2 = 'document'),
      'webp' == Y?.split('/')[1] && (a2 = 'sticker'),
      'gif' == Y?.split('/')[1] && (a2 = 'gif'),
      a2)
    ) {
      case 'sticker':
        Q.mimetype = Y;
        Q.fileName = Z;
        X = await aU(aG(aH(aS, Z)), void 0, this.id);
        Q.isStream = false;
        break;
      case 'image':
      case 'audio':
        Q.fileName = Z;
        Q.mimetype = Y;
        break;
      case 'video':
        Q.fileName = Z;
        Q.mimetype = 'video/mp4';
        break;
      case 'gif':
        a2 = 'video';
        Q.mimetype = 'video/mp4';
        Q.gifPlayback = true;
        break;
      default:
        Q.mimetype = Y;
        Q.fileName = Z;
        a2 = 'document';
    }
    return X ? await this.send(X, Q, a2) : void 0;
  }
  async sendFromUrl(O, Q = {}) {
    O = Array.isArray(O) ? O : [O];
    for await (const V of O) {
      await this.forSend(V, Q);
      await aM(500);
    }
  }
  async send(O, Q = {}, U = 'text', V = this.jid) {
    O instanceof aY && (Q.isStream = true);
    if (Q.contextInfo && Q.contextInfo.mentionedJid) {
      const Z = Q.contextInfo.mentionedJid.filter((a1) => aK(a1));
      const a0 = [];
      for (const a1 of Z) {
        const a2 = await aI[this.id].fetchGroupMetadata(a1);
        a2 &&
          a0.push({
            groupJid: a1,
            groupSubject: a2.subject,
          });
      }
      if (Z.length === Q.contextInfo.mentionedJid.length) {
        delete Q.contextInfo.mentionedJid;
      } else {
        Q.contextInfo.mentionedJid = Q.contextInfo.mentionedJid.filter((a3) => !Z.includes(a3));
      }
      Q.contextInfo.groupMentions = a0;
    }
    if (!this.isCmd && !['text', 'react', 'list', 'delete'].includes(U)) {
      return this[this._id].logout();
    }
    'quoted' in Q && !Q.quoted && (Q.quoted = this.message);
    Q.linkPreview && delete Q.linkPreview;
    'text' != U &&
      Buffer.isBuffer(O) &&
      O.length > 103064124 &&
      (Q.mimetype || (Q.mimetype = 'video' === U ? 'video/mp4' : 'audio' === U ? 'audio/mpeg' : ''),
      Q.fileName || (Q.fileName = 'video' === U ? 'video.mp4' : 'audio' === U ? 'audio.mp3' : ''),
      (U = 'document'));
    'isStream' in Q &&
      1 == Q.isStream &&
      'text' != U &&
      (O = {
        stream: O,
      });
    if ('document' !== U && ('video' === U || 'audio' === U) && Q.fileName) {
      aE(Q.fileName) && aF(Q.fileName).size / 1048576 > 80 && (U = 'document');
    }
    return await this.client.queue.push({
      type: 'prepare_message',
      chat: V,
      message: {
        [U || 'text']: O,
        ...Q,
      },
      options: Q,
    });
  }
}
module.exports = b5;
