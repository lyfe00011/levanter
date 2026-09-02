const a5 = require('ws');
const a6 = {};
const a7 = 'aWxvdmV5b3Vzb29vb29vbWF0Y2hidXRpZG9udGtub3d3aHlpbGlrZWxvdmV3YW50dQ==';
const { iChecker: a8 } = require('../test/test');
const a9 = a8();
const aa = a9 == a7;
if (aa) {
  const ab = 'https://yt1d.io';
  const ac = ab + '/wp-admin/admin-ajax.php';
  const ad = 'https://fpa-balancer.flashydl.space/get-server';
  const ae =
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.0.0 Safari/537.36';
  const af = /(?:v=|\/embed\/|\/shorts\/|youtu\.be\/|\/v\/)([-_0-9A-Za-z]{11})/;
  const ag = (A) => {
    if (/^[-_0-9A-Za-z]{11}$/.test(A)) {
      return A;
    }
    const C = String(A).match(af);
    return C ? C[1] : A;
  };
  const ah = (A) =>
    String(A || 'video')
      .replace(/[\\/:*?"<>|]/g, '_')
      .slice(0, 100);
  async function ai() {
    const B = await fetch(ab + '/', {
      headers: {
        'User-Agent': ae,
        Accept: 'text/html',
      },
    });
    const C = await B.text();
    return {
      path: new URL(B.url).pathname,
      nonce: (C.match(/name="yt1_nonce" value="([^"]+)"/) || [])[1],
      mergeNonce: (C.match(/"merge_nonce":"([^"]+)"/) || [])[1],
    };
  }
  async function aj(A) {
    const { path: C, nonce: D, mergeNonce: E } = await ai();
    if (!D) {
      throw new Error('no nonce on landing');
    }
    const F = await fetch(ab + '/results/', {
      method: 'POST',
      headers: {
        'User-Agent': ae,
        'content-type': 'application/x-www-form-urlencoded',
        Origin: ab,
        Referer: '' + ab + C,
      },
      body: new URLSearchParams({
        yt1_nonce: D,
        _wp_http_referer: C,
        yt_video_url: A,
      }),
    });
    return [...(await F.text()).matchAll(/<[^>]*data-token="[^"]*"[^>]*>/g)]
      .map((G) => {
        const I = (J) => (G[0].match(new RegExp('data-' + J + '="([^"]*)"')) || [])[1];
        return {
          token: I('token'),
          quality: I('quality'),
          hasAudio: '1' === I('has-audio'),
          size: parseInt(I('filesize'), 10) || 0,
          title: I('title'),
          mergeId: I('merge-id'),
          mergeNonce: I('merge-nonce') || E,
        };
      })
      .filter((G) => G.token && G.quality);
  }
  async function ak(C) {
    const E = new FormData();
    E.append('action', 'yt1_resolve_streams');
    E.append('nonce', C.mergeNonce);
    E.append('token', C.token);
    E.append('quality', C.quality);
    const F = {
      Referer: ab + '/results/',
    };
    F['User-Agent'] = ae;
    const G = await fetch(ac, {
      method: 'POST',
      headers: F,
      body: E,
    });
    const H = await G.json().catch(() => ({}));
    if (!H.success || !H.data) {
      throw new Error('resolve failed');
    }
    const I = {
      videoUrl: H.data.video_url || '',
    };
    I.audioUrl = H.data.audio_url || '';
    return I;
  }
  async function al(B, C) {
    const E = new FormData();
    E.append('action', 'process_video_merge');
    E.append('nonce', C);
    E.append('request_data', JSON.stringify(B));
    const F = {
      Referer: ab + '/results/',
    };
    F['User-Agent'] = ae;
    const G = await fetch(ac, {
      method: 'POST',
      headers: F,
      body: E,
    });
    const H = await G.json().catch(() => ({}));
    if (!H.success) {
      throw new Error('merge start failed: ' + JSON.stringify(H.data || H).slice(0, 120));
    }
    return H;
  }
  async function am(C, D = 180000) {
    const F = {};
    F['User-Agent'] = ae;
    const G = {
      headers: F,
    };
    const H = (await (await fetch(ad, G)).text()).trim();
    if (!H) {
      throw new Error('no ws host');
    }
    return new Promise((I, J) => {
      const L = {};
      L['User-Agent'] = ae;
      const M = {
        headers: L,
      };
      const N = new a5('wss://' + H + '/pub/render/status_ws/' + C, M);
      const O = setTimeout(() => {
        N.close();
        J(new Error('render timeout'));
      }, D);
      N.on('message', (P) => {
        let R;
        try {
          R = JSON.parse(P.toString());
        } catch {
          return;
        }
        if ('done' === R.status && R.output?.url) {
          clearTimeout(O);
          N.close();
          I(R.output.url);
        } else {
          R.error && (clearTimeout(O), N.close(), J(new Error(JSON.stringify(R.error))));
        }
      });
      N.on('error', (P) => {
        clearTimeout(O);
        J(P);
      });
    });
  }
  async function an(F, G) {
    const { videoUrl: I, audioUrl: J } = await ak(F);
    if ('video' === G && F.hasAudio && I) {
      return I;
    }
    const K = {
      size: 209715200,
      concurrency: 3,
    };
    const L = {
      id: F.mergeId + '_' + F.quality,
      ttl: 3600000,
      chunk: K,
    };
    const M = L;
    let N;
    if ('audio' === G) {
      if (!J) {
        throw new Error('no audio stream');
      }
      const O = {
        url: J,
        ext: 'm4a',
      };
      N = {
        id: M.id,
        ttl: M.ttl,
        inputs: [O],
        output: {
          ext: 'mp3',
          downloadName: ah(F.title) + '_MP3.mp3',
          chunkUpload: M.chunk,
        },
        operation: {
          type: 'no_process',
        },
      };
    } else {
      if (!I || !J) {
        throw new Error('streams unavailable for this quality');
      }
      const R = {
        url: I,
        ext: 'mp4',
        chunkDownload: {},
      };
      R.chunkDownload.type = 'header';
      R.chunkDownload.size = 52428800;
      R.chunkDownload.concurrency = 3;
      const S = {
        url: J,
        ext: 'm4a',
      };
      N = {
        id: M.id,
        ttl: M.ttl,
        inputs: [R, S],
        output: {
          ext: 'mp4',
          downloadName: ah(F.title) + '_' + F.quality + '.mp4',
          chunkUpload: M.chunk,
        },
        operation: {
          type: 'replace_audio_in_video',
        },
      };
    }
    await al(N, F.mergeNonce);
    return am(N.id);
  }
  exports.y2mate = {
    get: async function (B, C) {
      try {
        const E = ag(B);
        const F = await aj('https://www.youtube.com/watch?v=' + E);
        if (!F.length) {
          return false;
        }
        const G = {};
        const H = {};
        for (const K of F)
          if ('MP3' === K.quality) {
            H['128kbps mp3'] = K;
          } else {
            G[K.quality] = K;
          }
        const I = {
          title: F[0].title,
          thumbnail: 'https://i.ytimg.com/vi/' + E + '/hqdefault.jpg',
          time: '',
          video: G,
          audio: H,
          id: E,
        };
        const J = I;
        a6[B] = J;
        return J;
      } catch (L) {
        console.error('[y2mate.get]', L.message);
        return false;
      }
    },
    dl: async function (A, B, C) {
      try {
        const E = a6[A] || (await this.get(A), a6[A]);
        if (!E) {
          return false;
        }
        if ('audio' === B) {
          const G = E.audio['128kbps mp3'] || Object.values(E.audio)[0];
          return !!G && (await an(G, 'audio'));
        }
        const F = E.video[C] || E.video[Object.keys(E.video)[0]];
        return !!F && (await an(F, 'video'));
      } catch (H) {
        console.error('[y2mate.dl]', H.message);
        return false;
      }
    },
  };
}
