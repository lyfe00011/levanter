const aH = require('axios').default;
const aI = require('fs-extra');
const aJ = require('path');
const aK = require('translate-google-api');
const aL = require('form-data');
const aM = require('moment');
const { loadBaileys: aN } = require('./baileys');
const aO = require('fluent-ffmpeg');
const aP = require('./config');
const { getJson: aQ, getBuffer: aR } = require('./fetch');
const { TEMP_DIR: aS, genThumbnail: aT, extractVideoThumb: aU } = require('./constant');
const aV = /[0-9]+(-[0-9]+|)(@g.us|@s.whatsapp.net|@lid|@newsletter)/g;
const aW = 'aWxvdmV5b3Vzb29vb29vbWF0Y2hidXRpZG9udGtub3d3aHlpbGlrZWxvdmV3YW50dQ==';
const { iChecker: aX } = require('./test/test');
const aY = aX();
const aZ = aY == aW;
const b0 = require('./lang');
let b1;
const b2 = () => (b1 ??= require('./fonts'));
const b3 = require('events');
const b4 = new b3();
exports.levanter = b4;
const b5 = {};
const b6 = require('crypto');
const b7 = () => process.env.PASSWORD_U.split('').reverse().join('');
let b8 = '';
const b9 = 'https://nobitaaahha-6103f058b087.herokuapp.com';
const ba = 'https://right-annmaria-lev-8a3a4814.koyeb.app';
const bb = [
  'YTMUSIC',
  'YTMUSIC_ANDROID',
  'IOS',
  'WEB',
  'MWEB',
  'ANDROID',
  'YTSTUDIO_ANDROID',
  'TV',
  'TV_EMBEDDED',
  'YTKIDS',
  'WEB_EMBEDDED',
  'WEB_CREATOR',
];
const bc = async () => {
  b8 = ba;
};
bc();
const bd = () => b6.createHash('sha256').update(String(b7())).digest('base64').substr(0, 32);
const be = (V) => {
  if (!V) {
    return;
  }
  return aP[V].env.YT_COOKIE;
};
const bf = (V) => {
  const Z = b6.createDecipheriv('aes-256-cbc', bd(), Buffer.from(V.id, 'hex'));
  let a0 = Z.update(V.token, 'hex', 'utf8');
  a0 += Z.final('utf8');
  return JSON.parse(a0);
};
async function bg(V, X) {
  const { isJidGroup: a0 } = await aN();
  if (!a0(V) || !X) {
    return '0';
  }
  const a1 = aP[X]?.groupMetadata?.[V];
  if (a1 && a1.participants) {
    return a1.ephemeralDuration;
  }
  const a2 = await aP[X].fetchGroupMetadata(V);
  return a2?.ephemeralDuration;
}
const bh =
  /((http|https):\/\/)?(www\.)?([a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+)(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/;
const bi = '793f303296683e6';
let bj = false;
let bk = false;
const { LRUCache: bl } = require('./db/nr');
const bm = new bl(1000, 3600000);
exports.expiration = bm;
if (aZ) {
  let bn = null;
  (async () => {
    bn = await import('youtubei.js');
    bn.Log.setLevel();
  })();
  const { setFake: bo, getFake: bp } = require('./db');
  const { genThumbnail: bq, extractVideoThumb: br } = require('./constant');
  exports.parsedJid = (V) => V.match(aV) || [];
  const bs = async (X) => {
    const a1 = new aL();
    a1.append('image', aI.createReadStream(X));
    try {
      const a2 = await aH.post('https://api.imgur.com/3/image', a1, {
        headers: {
          Authorization: 'Client-ID 224becfa2d16b53',
          ...a1.getHeaders(),
        },
        maxBodyLength: 1e400,
        maxContentLength: 1e400,
      });
      const a3 = a2?.data?.data?.link;
      if (!a3) {
        throw new Error('imgur returned no link: ' + JSON.stringify(a2?.data).slice(0, 200));
      }
      aI.existsSync(X) && aI.unlinkSync(X);
      return a3;
    } catch (a4) {
      aI.existsSync(X) && aI.unlinkSync(X);
      const a5 = a4.response?.status;
      const a6 =
        'object' == typeof a4.response?.data
          ? JSON.stringify(a4.response.data).slice(0, 200)
          : 'string' == typeof a4.response?.data
            ? a4.response.data.slice(0, 200)
            : '';
      throw new Error(
        'imgur upload failed' +
          (a5 ? ' (HTTP ' + a5 + ')' : '') +
          (a6 ? ': ' + a6 : ': ' + a4.message),
      );
    }
  };
  const bt = async (X) => {
    const a0 = new aL();
    const a1 = aI.createReadStream(X);
    const a2 = {
      filename: X,
    };
    a0.append('reqtype', 'fileupload');
    a0.append('fileToUpload', a1, a2);
    try {
      const a3 = await aH.post('https://catbox.moe/user/api.php', a0, {
        headers: {
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
          Accept: '*/*',
          'Accept-Language': 'en-US,en;q=0.9',
          Origin: 'https://catbox.moe',
          Referer: 'https://catbox.moe/',
          ...a0.getHeaders(),
        },
        maxBodyLength: 1e400,
        maxContentLength: 1e400,
      });
      const a4 = 'string' == typeof a3.data ? a3.data.trim() : '';
      if (!/^https?:\/\//.test(a4)) {
        throw new Error('catbox returned non-URL response: ' + (a4 || '(empty body)'));
      }
      aI.existsSync(X) && aI.unlinkSync(X);
      return a4;
    } catch (a6) {
      const a7 = a6.response?.status;
      const a8 = 'string' == typeof a6.response?.data ? a6.response.data.slice(0, 200).trim() : '';
      const a9 =
        'catbox upload failed' +
        (a7 ? ' (HTTP ' + a7 + ')' : '') +
        (a8 ? ': ' + a8 : ': ' + a6.message);
      try {
        return await bs(X);
      } catch (aa) {
        throw new Error(a9 + ' | imgur fallback failed: ' + aa.message);
      }
    }
  };
  exports.getUrl = async (V, X = true) => {
    if (true === X) {
      const a0 = new aL();
      a0.append('file', aI.createReadStream(V));
      const a1 = {
        method: 'post',
        url: 'https://levanter.onrender.com/image/',
        headers: {
          ...a0.getHeaders(),
        },
        data: a0,
      };
      const { data: a2 } = await aH(a1).catch((a3) => {
        console.log(a3);
      });
      aI.unlinkSync(V);
      return a2 ? 'https://levanter.onrender.com/get/' + a2?.url : void 0;
    }
    return 'imgur' === X ? bs(V) : bt(V);
  };
  const bu = async () => {
    let X = 10;
    return await (async () => {
      try {
        let { currentVersion: a0 } = await aQ(
          'https://web.whatsapp.com/check-update?version=2.2228.6&platform=web',
        );
        X--;
        if (!a0 && X > 0) {
          return await bu();
        } else {
          a0 = a0.split('.');
          return [+a0[0], +a0[1], +a0[2]];
        }
      } catch (a1) {}
    })();
  };
  exports.waWebVersion = bu;
  exports.genButtonMessage = async (Z, a0, a1, a2, a3) => {
    const a5 = [];
    for (const { id: a8, text: a9 } of Z)
      a5.push({
        buttonId: '' + aE + a8,
        buttonText: {
          displayText: a9,
        },
        type: 1,
      });
    const a6 = {
      contentText: a0,
      footerText: a1,
      buttons: a5,
      headerType: 1,
    };
    const a7 = a6;
    if (a2?.location || a2?.document) {
      const aa = a2.location ? 'locationMessage' : 'documentMessage';
      a7.headerType = 'locationMessage' == aa ? 6 : 3;
      a2 = a2.location || a2.document;
      a7[aa] =
        'object' == typeof a2
          ? a2
          : {
              jpegThumbnail: await bq(
                Buffer.isBuffer(a2) ? a2 : (await aR(a2, /ytimg/.test(a2))).buffer,
              ),
            };
    } else {
      if (a2) {
        const ac = {
          ad: a2[ad],
          jpegThumbnail: 'image' == ad ? await bq(ac[ad]) : (await br(ac[ad])).thumbnail,
        };
        const ad = 'image' in a2 ? 'image' : 'video';
        a7.headerType = 'image' == ad ? 4 : 5;
        if ('object' != typeof a2[ad] || Buffer.isBuffer(a2[ad])) {
          if (!Buffer.isBuffer(a2[ad])) {
            const { buffer: ah } = await aR(a2[ad], /ytimg/.test(a2));
            a2[ad] = ah;
          }
          const ae = {
            upload: a3.client.waUploadToServer,
          };
          const { prepareWAMessageMedia: af } = await aN();
          const ag = await af(ac, ae);
          if (ag.imageMessage) {
            a7.imageMessage = ag.imageMessage;
          } else {
            a7.videoMessage = ag.videoMessage;
          }
        } else {
          a7['image' == ad ? 'imageMessage' : 'videoMessage'] = a2[ad];
        }
      }
    }
    return a7;
  };
  let bv;
  const bw = async (V, X = 'video', Z, a0, a1) => {
    const a3 = be(a1);
    if (bj) {
      if (!a3) {
        throw new Error(b0.plugins.common.yt_cookie_needed);
      }
      return bz(V, X, a3, '');
    }
    try {
      const a6 = await bv.getInfo(V);
      if (!a6.playability_status || 'OK' != a6.playability_status.status) {
        bj = true;
        if (!a3) {
          throw new Error(b0.plugins.common.yt_cookie_needed + '\n' + a6.playability_status.reason);
        }
        return bz(V, X, a3, a6.playability_status.reason);
      }
      const a7 = 'song' === X ? 'm4a' : 'mp4';
      const a8 = {
        type: 'song' === X ? 'audio' : 'video+audio',
        quality: 'best',
        format: 'mp4',
      };
      let a9;
      a0 && (a8.type = a0);
      for (const ab of bb) {
        a8.client = ab;
        try {
          const ac = await bv.download(V, a8);
          const ad = aJ.join(aS, V + '.' + a7);
          const ae = aI.createWriteStream(ad);
          for await (const af of bn.Utils.streamToIterable(ac)) ae.write(af);
          ae.end();
          return ad;
        } catch (ah) {
          a9 = ah;
        }
      }
      if (a9) {
        throw a9;
      }
    } catch (aj) {
      if ('Video is unplayable' === aj.message && 'video' !== X) {
        return bw(V, 'audio', 'false', a0, a1);
      }
      if (aj.message.includes('non 2xx status code') && 'video+audio' !== a0) {
        return bw(V, 'audio', Z, 'video+audio', a1);
      }
      if (!a3) {
        throw new Error(b0.plugins.common.yt_cookie_needed + '\n' + aj.message);
      }
      return bz(V, X, a3, aj.message);
    }
  };
  const bx = async (a0, a1, a2) => {
    const a4 = be(a2);
    try {
      const a5 = [];
      if (1 == a1) {
        const a9 = await bv.music.search(a0);
        const aa = await a9.applyFilter('Songs');
        const [ab] = aa.contents;
        if (!ab) {
          throw new Error(b0.plugins.common.yt_not_found.format(a0));
        }
        for (const ac of ab.contents) {
          if ('DidYouMean' === ac.type || 'ShowingResultsFor' === ac.type) {
            return await bx(ac.corrected_query.text, a1, a2);
          }
          if (ac.title) {
            const af = {
              id: ac.id,
              title: ac.title,
              thumbnail: ac?.thumbnail?.contents[0]?.url || '',
              album: ac?.album?.name || '',
              duration: ac.duration.text,
              seconds: ac.duration.seconds,
              author: ac?.artists?.map((ag) => ag.name).join(', ') || '',
            };
            a5.push(af);
          }
        }
        if (a5.length) {
          return a5;
        }
      }
      const a6 = {
        type: 'video',
      };
      const a7 = (await bv.search(a0, a6)).results;
      for (const ag of a7) {
        if ('DidYouMean' === ag.type) {
          return await bx(ag.corrected_query.text, a1, a2);
        }
        if (ag?.published?.text) {
          const ah = {
            url: '',
          };
          const ai = {
            id: ag.id,
            title: ag.title.text,
            thumbnail: ag?.thumbnails?.[0] || ah,
            author: ag.author.name || '',
            published: ag.published.text || '',
            view: ag.short_view_count.text,
            duration: ag.duration.text,
            seconds: ag.duration.seconds,
          };
          const aj = ai;
          a5.push(aj);
        }
      }
      return a5;
    } catch (am) {
      if (!a4) {
        throw new Error(b0.plugins.common.yt_cookie_needed);
      }
      return bB(a0, a4, am.message);
    }
  };
  const by = async (Z, a0) => {
    const a2 = await bv.getInfo(Z);
    const a3 = be(a0);
    if ('OK' !== a2.playability_status.status) {
      if (!a3) {
        throw new Error(b0.plugins.common.yt_cookie_needed + '\n' + a2.playability_status.reason);
      }
      return bA(Z, a3);
    }
    const a4 = a2.primary_info;
    const a5 = a2.secondary_info;
    const a6 = {
      url: '',
    };
    const a7 = {
      id: Z,
      title: a4.title.text,
      view: a4.view_count.text,
      published: a4.published.text,
    };
    a7.description = a5.description.text || '';
    a7.thumbnail = a2.basic_info.thumbnail?.[0] || a6;
    a7.duration = a2.basic_info.duration;
    a7.author = a2.basic_info.author;
    return [a7];
  };
  const bz = async (Z, a0, a1, a2 = '') => {
    const a4 = process.env.PASSWORD_U;
    if (!a1) {
      throw new Error(b0.plugins.common.yt_cookie_needed);
    }
    try {
      const a6 = {
        id: Z,
        type: a0,
        cookie: a1,
        session: a4,
      };
      const a7 = {
        responseType: 'arraybuffer',
      };
      const a8 = await aH.post(b8 + '/yt/download', a6, a7);
      const a9 = aJ.join(aS, Z + '.mp4');
      aI.writeFileSync(a9, a8.data);
      return a9;
    } catch (aa) {
      throw new Error(a2);
    }
  };
  const bA = async (X, Z) => {
    const a0 = X;
    if (!Z) {
      throw new Error(b0.plugins.common.yt_cookie_needed);
    }
    const a1 = process.env.PASSWORD_U;
    let a2 = b8 + '/yt/search';
    try {
      const a3 = {
        ac: ah,
      };
      a3.query = a0;
      a3.id = '1';
      a3.cookie = Z;
      a3.session = a1;
      return (await aH.post(a2, a3)).data.result;
    } catch (a4) {}
  };
  const bB = async (X, Z, a0 = '') => {
    if (!Z) {
      throw new Error(b0.plugins.common.yt_cookie_needed);
    }
    const a2 = process.env.PASSWORD_U;
    let a3 = b8 + '/yt/search';
    try {
      const a4 = {
        query: X,
        id: '',
        cookie: Z,
        session: a2,
      };
      return (await aH.post(a3, a4)).data.result;
    } catch (a6) {
      throw new Error(a0);
    }
  };
  const bC = async (V) => {
    if (bv) {
      return;
    }
    const Z = be(V);
    bv = await bn.Innertube.create({
      cache: new bn.UniversalCache(false),
      cookie: Z,
      generate_session_locally: true,
    });
  };
  const bD = async (V, X = false, Z, a0) => (await bC(a0), X ? by(V, a0) : bx(V, Z, a0));
  exports.yts = bD;
  exports.song = async (V, X) => {
    await bC(X);
    const a0 = await bw(V, 'song', void 0, void 0, X);
    return (
      !!a0 &&
      new Promise((a1, a2) => {
        const a3 = aJ.join(aS, V + '.mp3');
        aO(a0)
          .audioBitrate(192)
          .audioFrequency(44100)
          .save(a3)
          .on('error', (a4) => a2(new Error(a4.message)))
          .on('end', () => {
            const a5 = aI.readFileSync(a3);
            a1(a5);
            aI.unlinkSync(a0);
            aI.unlinkSync(a3);
          });
      })
    );
  };
  exports.genListMessage = (a0, a1, a2, a3 = '', a4 = String.fromCharCode(8206)) => {
    const a7 = [];
    for (const { id: aa, text: ab, desc: ac } of a0)
      a7.push({
        title: ab,
        rowId: '' + aP[0].PREFIX + aa,
        description: ac || '',
      });
    const a8 = {
      title: a3,
      rows: a7,
    };
    const a9 = {
      title: a1,
      buttonText: a2,
      description: a4,
      sections: [a8],
      listType: 1,
    };
    return a9;
  };
  exports.video = async (V, X) => {
    await bC(X);
    const a0 = await bw(V, 'video', void 0, void 0, X);
    const a1 = aJ.join(aS, V + '_out.mp4');
    return new Promise((a2, a3) => {
      aO(a0)
        .save(a1)
        .on('error', (a5) => a3(new Error(a5.message)))
        .on('end', () => {
          const a5 = aI.readFileSync(a1);
          a2(a5);
          aI.rmSync(a1);
          aI.rmSync(a0);
        });
    });
  };
  const bE = async (V, X) => {
    if (!V) {
      return;
    }
    const { isJidGroup: a0 } = await aN();
    if (!bm.get(V) && a0(V)) {
      let a1 = await bg(V, X);
      bm.set(V, a1);
    }
    return bm.get(V);
  };
  exports.forwardOrBroadCast = async (V, X, Z = {}) => {
    const { proto: a1, generateWAMessageFromContent: a2, delay: a3 } = await aN();
    let a4 = X.reply_message?.message?.message || X.message?.message;
    if (!a4) {
      return;
    }
    a4 = a1.Message.decode(a1.Message.encode(a4).finish());
    'quoted' in Z && !Z.quoted && (Z.quoted = X.message);
    let a5 = Object.keys(a4)[0];
    if ('conversation' === a5) {
      a4.extendedTextMessage = {
        text: a4[a5],
      };
      delete a4.conversation;
      a5 = 'extendedTextMessage';
    }
    if ('conversation' === a5) {
      a4.extendedTextMessage = {
        text: a4[a5],
      };
      delete a4.conversation;
      a5 = 'extendedTextMessage';
    } else {
      a4[a5].contextInfo = {};
    }
    0 == Z.viewOnce && delete a4[a5]?.viewOnce;
    Object.assign(a4[a5], Z);
    Z.ephemeralExpiration = await bE(V, X.id || X.client.levanterId);
    Z.userJid = X.client.user.id;
    const a6 = a2(V, a4, Z);
    if ('audioMessage' == a5) {
      Z?.ptt &&
        (a6.message.ephemeralMessage
          ? (a6.message.ephemeralMessage.message[a5].ptt = Z.ptt)
          : (a6.message[a5].ptt = Z.ptt));
      Z?.duration &&
        (a6.message.ephemeralMessage
          ? (a6.message.ephemeralMessage.message[a5].seconds = Z.duration)
          : (a6.message[a5].seconds = Z.duration));
    }
    Z.linkPreview && delete Z.linkPreview;
    Z.contextInfo &&
      (a6.message.ephemeralMessage
        ? (a6.message.ephemeralMessage.message[a5].contextInfo = Object.assign(
            a6.message.ephemeralMessage.message[a5].contextInfo,
            {
              ...Z.contextInfo,
            },
          ))
        : (a6.message[a5].contextInfo = Object.assign(a6.message[a5].contextInfo, {
            ...Z.contextInfo,
          })));
    try {
      await X.client.relayMessage(V, a6.message, {
        messageId: a6.key.id,
        additionalAttributes: {},
      });
    } catch (a8) {
      throw a8;
    }
    await a3(1654);
    return a6;
  };
  exports.ctt = (V) =>
    V.toString()
      .replace(V.toString().match(/(\W*)([A-Za-z0-9_ğüşiö ç]*)/)[2], '')
      .match(/(\W*)([A-Za-z0-9ğüşiö ç]*)/)[2]
      .trim();
  const bF = (V, X) => ' '.repeat(('' + X).length - ('' + V).length);
  exports.addSpace = bF;
  const bG = (V, X) => {
    let a0 = '';
    V.split('').forEach((a1) => {
      let a3 = b2()[X][a1];
      a0 += null == a3 ? a1 : a3;
    });
    return a0;
  };
  exports.textToStylist = bG;
  exports.escapeRegExp = (V) => V.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  exports.stylishTextGen = (V) => {
    let Z = 1;
    let a0 = '';
    for (let a1 in b2()) {
      a0 += Z + bF(Z, 53) + ' ';
      a0 += bG(V, a1);
      a0 += '\n';
      Z++;
    }
    return a0;
  };
  exports.formatTime = (V, X) =>
    X ? aM(V).format('hh:mm a D-M-YYYY') : aM.unix(V).format('hh:mm a D-M-YYYY');
  exports.clearFiles = () => aI.emptyDirSync(aJ.join(__dirname, '../media/mention/'));
  exports.isUrl = (X = 'null') => {
    if ('string' != typeof X) {
      return false;
    }
    const a1 = X.match(bh);
    return !!a1 && a1[0];
  };
  const bH = (V) =>
    V.split(',')
      .filter((X) => '' != X)
      .join(',');
  exports.rmComma = bH;
  exports.enableAntiFake = async (V, X, Z) => {
    if ('on' != X && 'off' != X) {
      const { enabled: a1 } = await bp(V, Z);
      X = bH(X.trim());
      await bo(V, a1 ?? true, '^(' + X.replace(/,/g, '|') + ')', Z);
      const a2 = X.split(',');
      const a3 = a2.filter((a4) => a4.trim().startsWith('!'));
      return {
        allow: a3.map((a4) => a4.replace('!', '')),
        notallow: a2.filter((a4) => !a3.includes(a4)),
      };
    }
    await bo(V, 'on' == X, Z);
  };
  const bI = (V) =>
    V.replace('\\b', '')
      .replace('\\b', '')
      .replace('(', '')
      .replace(')', '')
      .replace('^', '')
      .split('|');
  exports.antiList = async (V, X, Z) => {
    if ('fake' === X) {
      const { code: a1 } = await bp(V, Z);
      return !!a1 && bI(a1);
    }
  };
  exports.parseGistUrls = (V) => {
    const X = V.match(
      /https:\/\/gist.(githubusercontent|github).com\/([-_.0-9A-Za-z]{0,37})\/([-_0-9A-Za-z]{32})/gm,
    );
    return !!X && X.filter((Z) => !Z.includes('mask-sir')).map((Z) => Z + '/raw');
  };
  exports.pluginsList = (V) =>
    V.match(/pattern: ["'](.*)["'],/gm).map((X) =>
      X.match(/["'](.*)["'],/gm)[0]
        .split(' ')[0]
        .replace(/'|"/g, ''),
    );
  exports.getQuote = async () => {
    try {
      return (await aQ('http://levanter.onrender.com/quote').catch(() => {})).content || '';
    } catch (X) {
      return '';
    }
  };
  exports.trt = async (V, X, Z) =>
    (
      await aK(V, {
        tld: 'co.in',
        to: X,
        from: Z,
      })
    )?.join();
  exports.secondsToHms = (V) => {
    V = Number(V);
    const Z = Math.floor(V / 86400);
    const a0 = Math.floor((V % 86400) / 3600);
    const a1 = Math.floor((V % 3600) / 60);
    const a2 = Math.floor(V % 60);
    return (
      (Z > 0 ? Z + (1 == Z ? b0.plugins.common.time_day : b0.plugins.common.time_days) : '') +
      (a0 > 0 ? a0 + (1 == a0 ? b0.plugins.common.time_hour : b0.plugins.common.time_hours) : '') +
      (a1 > 0
        ? a1 + (1 == a1 ? b0.plugins.common.time_minute : b0.plugins.common.time_minutes)
        : '') +
      (a2 && !Z > 0
        ? a2 + (1 == a2 ? b0.plugins.common.time_second : b0.plugins.common.time_seconds)
        : '')
    ).trim();
  };
  exports.isFeatureEnabled = (X, Z, a0) => {
    if (!X || 'null' === X || 'false' === X) {
      return false;
    }
    if ('true' === X || 'on' === X) {
      return true;
    }
    const a3 = X.split(',').map((a6) => a6.trim().toLowerCase());
    const a4 = Z.endsWith('@g.us');
    const a5 = 'status@broadcast' === Z;
    return (
      !(!a3.includes('p') || a4 || a5) ||
      !(!a3.includes('g') || !a4) ||
      !(!a3.includes('status') || !a5) ||
      !!a3.includes(Z.toLowerCase())
    );
  };
  exports.genHydratedButtons = async (Z, a0, a1, a2, a3) => {
    let a5 = 1;
    const a6 = [];
    for (const a9 of Z) {
      a9.urlButton &&
        (a6.push({
          index: a5,
          urlButton: {
            displayText: a9.urlButton.text,
            url: a9.urlButton.url,
          },
        }),
        a5++);
      a9.button &&
        (a6.push({
          index: a5,
          quickReplyButton: {
            displayText: a9.button.text,
            id: a9.button.text != a9.button.id ? '.' + a9.button.id : a9.button.id,
          },
        }),
        a5++);
      a9.callButton &&
        (a6.push({
          index: a5,
          callButton: {
            displayText: a9.callButton.text,
            phoneNumber: a9.callButton.number,
          },
        }),
        a5++);
    }
    const a7 = {
      hydratedButtons: a6,
      hydratedContentText: a0,
      hydratedFooterText: a1,
      headerType: 1,
    };
    const a8 = a7;
    if (a3?.location || a3?.document) {
      const aa = a3.location ? 'locationMessage' : 'documentMessage';
      a8.headerType = 'locationMessage' == aa ? 6 : 3;
      a3 = a3.location || a3.document;
      a8[aa] =
        'object' == typeof a3
          ? a3
          : {
              jpegThumbnail: await bq(
                Buffer.isBuffer(a3) ? a3 : (await aR(a3), /ytimg/.test(a3)).buffer,
              ),
            };
    } else {
      if (a3) {
        const ab = {
          ac: a3[ac],
          jpegThumbnail: 'image' == ac ? await bq(ab[ac]) : (await br(ab[ac])).thumbnail,
        };
        const ac = 'image' in a3 ? 'image' : 'video';
        a8.headerType = 'image' == ac ? 4 : 5;
        if ('object' != typeof a3[ac] || Buffer.isBuffer(a3[ac])) {
          if (!Buffer.isBuffer(a3[ac])) {
            const { buffer: ah } = await aR(a3[ac], /ytimg/.test(a3));
          }
          const ae = {
            upload: a2.client.waUploadToServer,
          };
          const af = await prepareWAMessageMedia(ab, ae);
          if (af.imageMessage) {
            a8.imageMessage = af.imageMessage;
          } else {
            a8.videoMessage = af.videoMessage;
          }
        } else {
          a8['image' == ac ? 'imageMessage' : 'videoMessage'] = a3[ac];
        }
      }
    }
    return a8;
  };
}
exports.getFloor = (V) => Math.floor(V);
exports.store = b5;
