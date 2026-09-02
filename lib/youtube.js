const aq = require('fs-extra');
const ar = require('path');
const as = require('fluent-ffmpeg');
const { SabrStream: at } = require('googlevideo/sabr-stream');
const { buildSabrFormat: au } = require('googlevideo/utils');
const { BG: av } = require('bgutils-js');
const { JSDOM: aw } = require('jsdom');
const ax = require('./config');
const { TEMP_DIR: ay } = require('./constant');
const { getYtCreds: az, saveYtCreds: aA } = require('./yt-auth');
const aB = require('./lang');
(async () => {
  try {
    const K = (await import('youtubei.js')).Platform;
    K.load({
      ...K.shim,
      eval: (L) => {
        const M = 'string' == typeof L ? L : L.output;
        return new Function(M)();
      },
    });
  } catch (L) {}
})();
let aC = null;
const aD = async () => aC || ((aC = await import('youtubei.js')), aC);
async function aE(K, L) {
  if (!K) {
    throw new Error('Could not get visitor data');
  }
  const N = new aw();
  const P = globalThis.window;
  const Q = globalThis.document;
  const R = {
    window: N.window,
    document: N.window.document,
  };
  Object.assign(globalThis, R);
  try {
    const U = {
      fetch: (a0, a1) => fetch(a0, a1),
      globalObj: globalThis,
      identifier: K,
      requestKey: 'O43z0dpjhgX20SCx4KAo',
    };
    const V = await av.Challenge.create(U);
    if (!V) {
      throw new Error('Could not get challenge');
    }
    const W = V.interpreterJavascript?.privateDoNotAccessOrElseSafeScriptWrappedValue;
    if (!W) {
      throw new Error('Could not load VM');
    }
    new Function(W)();
    const X = {
      program: V.program,
      globalName: V.globalName,
      bgConfig: U,
    };
    const Y = await av.PoToken.generate(X);
    if (!Y || !Y.poToken) {
      throw new Error('Failed to generate PO Token');
    }
    const Z = {
      visitorData: K,
      poToken: Y.poToken,
    };
    return Z;
  } catch (a0) {
    let a2 = K;
    if (K && K.length > 20) {
      try {
        const a3 = Buffer.from(
          K.replace(/-/g, '+').replace(/_/g, '/').replace(/%3D/g, '='),
          'base64',
        );
        if (10 === a3[0]) {
          const a4 = a3[1];
          const a5 = a3.slice(2, 2 + a4).toString('utf8');
          a5.length < 118 && (a2 = a5);
        }
      } catch (a7) {}
    }
    return {
      visitorData: K,
      poToken: av.PoToken.generateColdStartToken(a2),
    };
  } finally {
    if (void 0 === P) {
      delete globalThis.window;
    } else {
      globalThis.window = P;
    }
    if (void 0 === Q) {
      delete globalThis.document;
    } else {
      globalThis.document = Q;
    }
  }
}
const aF = ['1080p', '720p', '480p', '360p', '240p', '144p'];
const aG = ['AUDIO_QUALITY_HIGH', 'AUDIO_QUALITY_MEDIUM', 'AUDIO_QUALITY_LOW'];
const aH = (H, J, K) => {
  if (J.includes(H)) {
    return H;
  }
  const N = K.indexOf(H);
  if (-1 === N) {
    return J[0];
  }
  for (let P = N + 1; P < K.length; P++) {
    if (J.includes(K[P])) {
      return K[P];
    }
  }
  for (let Q = N - 1; Q >= 0; Q--) {
    if (J.includes(K[Q])) {
      return K[Q];
    }
  }
  return J[0];
};
const aI = (G) => {
  if (G) {
    return ax[G]?.env?.YT_COOKIE;
  }
};
const aJ = {};
const aK = async (G, H = 'WEB') => {
  const K = await aD();
  const L = (G || 'default') + '_' + H;
  if (aJ[L]) {
    return aJ[L];
  }
  const M = aI(G);
  const N = await K.Innertube.create({
    cache: new K.UniversalCache(false),
    cookie: M,
    generate_session_locally: true,
    client_type: H,
  });
  aJ[L] = N;
  return N;
};
const aL = async (K, L, M) => {
  const Q = {
    pyv: true,
  };
  const R = K.actions.execute.bind(K.actions, '/player');
  const U = {
    videoId: L,
    playbackContext: {
      adPlaybackContext: Q,
      contentPlaybackContext: {
        vis: 0,
        splay: false,
        lactMilliseconds: '-1',
        signatureTimestamp: K.session.player?.signature_timestamp,
      },
    },
    serviceIntegrityDimensions: M
      ? {
          poToken: M,
        }
      : void 0,
    contentCheckOk: true,
    racyCheckOk: true,
  };
  const V = {
    ...U,
  };
  V.parse = true;
  return await R.call(K.actions, V);
};
const aM = async (H, J) => {
  const L = {
    flags: 'w',
    encoding: 'binary',
  };
  const M = aq.createWriteStream(J, L);
  const N = new WritableStream({
    write: (P) =>
      new Promise((Q, R) => {
        M.write(P, (V) => {
          if (V) {
            R(V);
          } else {
            Q();
          }
        });
      }),
    close() {
      M.end();
    },
  });
  await H.pipeTo(N);
  if (0 === aq.statSync(J).size) {
    throw new Error('Downloaded file is empty: ' + J);
  }
};
const aN = (G, H, J) =>
  new Promise((K, L) => {
    const N = as(G);
    'audio' === J && N.audioBitrate(192).audioFrequency(44100).audioCodec('libmp3lame');
    N.save(H)
      .on('error', (P, Q, R) => L(new Error('FFmpeg error: ' + P.message + '. Stderr: ' + R)))
      .on('end', () => {
        try {
          const R = aq.readFileSync(H);
          K(R);
        } catch (U) {
          L(new Error('Failed to read output file: ' + U.message));
        }
      });
  });
const aO = async (H) => {
  for (const L of H)
    try {
      aq.existsSync(L) && aq.unlinkSync(L);
    } catch (N) {}
};
const aP = ['WEB', 'MWEB', 'TV', 'ANDROID', 'ANDROID_VR', 'TV_EMBEDDED', 'IOS'];
let aQ = null;
const aR = (G) =>
  aQ ||
  ((aQ = Object.keys(G.Constants.CLIENTS).sort((H, J) => {
    const M = aP.indexOf(H);
    const N = aP.indexOf(J);
    return -1 !== M && -1 !== N ? M - N : -1 !== M ? -1 : -1 !== N ? 1 : 0;
  })),
  aQ);
const aS = async (G, H, J, K = {}) => {
  const M = await aD();
  const N = aR(M);
  let P;
  const Q = async (W, X) => {
    const Z = M.Constants.CLIENTS[W].NAME;
    const a0 = await aK(H, Z);
    a0.session.player || (await a0.session.upgradeToFullPlayer());
    const a1 = a0.session.context.client.visitorData || G;
    const a2 = await aE(a1, G);
    const a3 = await M.Innertube.create({
      client_type: Z,
      cookie: aI(H),
      visitor_data: a1,
      po_token: 'WEB' === Z ? a2.poToken : void 0,
      generate_session_locally: true,
      cache: new M.UniversalCache(false),
    });
    X &&
      (a3.session.on('update-credentials', ({ credentials: af }) => {
        aA(H || '0', af).catch(() => {});
      }),
      await a3.session.signIn(X).catch(() => {}));
    const a4 = await a3.getBasicInfo(G);
    const a5 = a4.page;
    const a6 = Array.isArray(a5) ? a5[0] : a5;
    const a7 = {
      title: a4.basic_info?.title || 'Unknown Video',
      duration: a4.basic_info?.duration,
      views: a4.basic_info?.view_count,
      author: a4.basic_info?.author,
      id: a4.basic_info?.id,
    };
    const { Constants: a8 } = M;
    const a9 = a6.streaming_data?.server_abr_streaming_url;
    const aa = a9 ? await a3.session.player?.decipher(a9) : null;
    const ab = (a6.streaming_data?.adaptive_formats || []).map(au);
    let ac;
    let ad;
    if (a9) {
      const ag = a6.player_config || a6.playerConfig;
      const ah = ag?.media_common_config || ag?.mediaCommonConfig;
      const ai = ah?.media_ustreamer_request_config || ah?.mediaUstreamerRequestConfig;
      const aj = new at({
        formats: ab,
        serverAbrStreamingUrl: aa,
        videoPlaybackUstreamerConfig:
          ai?.video_playback_ustreamer_config || ai?.videoPlaybackUstreamerConfig,
        poToken: a2.poToken,
        clientInfo: {
          clientName: parseInt(M.Constants.CLIENT_NAME_IDS[a3.session.context.client.clientName]),
          clientVersion: a3.session.context.client.clientVersion,
        },
        fetch: (aY, aZ) => a3.session.http.fetch(aY, aZ),
      });
      aj.on('reloadPlayerResponse', async (aY) => {
        const aZ = await aL(a3, G, a2.poToken);
        const b0 = aZ.streaming_data?.server_abr_streaming_url;
        const b1 = b0 ? await a3.session.player?.decipher(b0) : null;
        const b2 =
          aZ.player_config?.media_common_config.media_ustreamer_request_config
            ?.video_playback_ustreamer_config;
        b1 && b2 && (aj.setStreamingURL(b1), aj.setUstreamerConfig(b2));
      });
      const ak = [
        ...new Set(
          ab
            .filter((aY) => aY.mimeType?.includes('video'))
            .map((aY) => aY.qualityLabel)
            .filter(Boolean),
        ),
      ];
      const al = [
        ...new Set(
          ab
            .filter((aY) => aY.mimeType?.includes('audio'))
            .map((aY) => aY.audioQuality)
            .filter(Boolean),
        ),
      ];
      const aU = K.videoQuality || '480p';
      const aV = K.audioQuality || 'AUDIO_QUALITY_MEDIUM';
      const aW = {
        preferWebM: false,
        preferOpus: false,
        videoQuality: ak.length > 0 ? aH(aU, ak, aF) : aU,
        audioQuality: al.length > 0 ? aH(aV, al, aG) : aV,
        enabledTrackTypes: 'audio' === J ? 1 : 0,
      };
      const aX = await aj.start(aW);
      ac = aX.videoStream;
      ad = aX.audioStream;
    } else {
      const aY = {
        type: 'audio' === J ? 'audio' : 'video+audio',
        quality: 'best',
        format: 'mp4',
      };
      const aZ = await a3.download(G, aY);
      if ('audio' === J) {
        ad = aZ;
      } else {
        ac = aZ;
        ad = null;
      }
    }
    const ae = [];
    if ('audio' === J) {
      const b0 = ar.join(ay, G + '_audio.m4a');
      ae.push(b0);
      await aM(ad, b0);
      return {
        audioPath: b0,
        metadata: a7,
        tempFiles: ae,
      };
    }
    {
      const b2 = ar.join(ay, G + '_video.mp4');
      const b3 = ar.join(ay, G + '_audio.m4a');
      ae.push(b2, b3);
      if (ad) {
        await Promise.all([aM(ac, b2), aM(ad, b3)]);
      } else {
        await aM(ac, b2);
        aq.copySync(b2, b3);
      }
      return {
        videoPath: b2,
        audioPath: b3,
        metadata: a7,
        tempFiles: ae,
      };
    }
  };
  const R = await az(H || '0').catch(() => null);
  if (R) {
    const W = ['TV', 'TV_EMBEDDED'].filter((X) => M.Constants.CLIENTS[X]);
    for (const X of W)
      try {
        return await Q(X, R);
      } catch (Y) {
        P = Y;
      }
  }
  for (const a0 of N)
    try {
      return await Q(a0, null);
    } catch (a1) {
      P = a1;
    }
  const U = !!aI(H) || !!R;
  const V =
    P?.message?.toLowerCase().includes('decipher') ||
    P?.message?.toLowerCase().includes('cipher') ||
    P?.message?.toLowerCase().includes('n function');
  if (!U && V) {
    throw new Error(aB.extra.yt_auth_required.replace('{0}', P?.message || 'Unknown'));
  }
  throw new Error('All clients failed to download. Last error: ' + (P?.message || 'Unknown error'));
};
const aT = (G, H, J) =>
  new Promise((K, L) => {
    as()
      .input(G)
      .input(H)
      .outputOptions(['-c:v copy', '-c:a aac', '-map 0:v:0', '-map 1:a:0'])
      .on('end', () => K())
      .on('error', (N, P, Q) =>
        L(new Error('Error merging files: ' + N.message + '. Stderr: ' + Q)),
      )
      .save(J);
  });
exports.getVideoInfo = async (H, J) => {
  const L = await aK(J);
  const M = await aL(L, H);
  const N = {
    id: H,
    title: M.video_details?.title || 'Unknown',
    duration: M.video_details?.duration,
    views: M.video_details?.view_count,
    author: M.video_details?.author,
    thumbnail: M.video_details?.thumbnails?.[0] || null,
  };
  return N;
};
exports.downloadAudio = async (G, H, J = {}) => {
  try {
    const { audioPath: L, tempFiles: M } = await aS(G, H, 'audio', J);
    const N = ar.join(ay, G + '.mp3');
    M.push(N);
    const P = await aN(L, N, 'audio');
    await aO(M);
    return P;
  } catch (Q) {
    throw new Error('Failed to download audio: ' + Q.message);
  }
};
exports.downloadVideo = async (G, H, J = {}) => {
  try {
    const { videoPath: L, audioPath: M, tempFiles: N } = await aS(G, H, 'video', J);
    const P = ar.join(ay, G + '_merged.mp4');
    const Q = ar.join(ay, G + '_out.mp4');
    N.push(P, Q);
    if (!aq.existsSync(L) || 0 === aq.statSync(L).size) {
      throw new Error('Video file is missing or empty: ' + L);
    }
    if (!aq.existsSync(M) || 0 === aq.statSync(M).size) {
      throw new Error('Audio file is missing or empty: ' + M);
    }
    await aT(L, M, P);
    const R = await aN(P, Q, 'video');
    await aO(N);
    return R;
  } catch (V) {
    throw new Error('Failed to download video: ' + V.message);
  }
};
exports.loadYoutube = aD;
