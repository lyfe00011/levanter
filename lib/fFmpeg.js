const aQ = require('fluent-ffmpeg');
const aR = require('fs-extra');
const { exec: aS } = require('child_process');
const aT = require('node-webpmux');
const { join: aU, basename: aV } = require('path');
const aW = require('./config');
const aX = 'aWxvdmV5b3Vzb29vb29vbWF0Y2hidXRpZG9udGtub3d3aHlpbGlrZWxvdmV3YW50dQ==';
const { iChecker: aY } = require('./test/test');
const aZ = aY();
const b0 = require('google-tts-api');
const b1 = require('sharp');
b1.cache(false);
b1.concurrency(1);
const { TEMP_DIR: b2 } = require('./constant');
const b3 = aZ == aX;
const b4 = (x) => new Date().getTime() + '.' + x;
const b5 = (y) => {
  y && !y.includes('mention') && aR.unlink(y, () => {});
};
if (b3) {
  const b6 = async function (y, z, A, B, C = ['\uD83E\uDD70'], D = {}) {
    const [F, G] =
      'false' == aW[A].env.STICKER_PACKNAME ? [] : aW[A].env.STICKER_PACKNAME.split(',');
    B = B || G;
    Array.isArray(C) || (C = [C]);
    if (z) {
      const [N, O, P] = z.split(',');
      z = N;
      B = O;
      C = P;
    } else {
      z = F;
    }
    let H = new aT.Image();
    const I = {
      'sticker-pack-id': 'a855bd1fa49c0a05940f8ec2f47dca0b64bbd801e3b2d29e1f654574d4b294c5',
      'sticker-pack-name': z,
      'sticker-pack-publisher': B,
      emojis: C,
      ...D,
    };
    const J = I;
    let K = Buffer.from([73, 73, 42, 0, 8, 0, 0, 0, 1, 0, 65, 87, 7, 0, 0, 0, 0, 0, 22, 0, 0, 0]);
    let L = Buffer.from(JSON.stringify(J), 'utf8');
    let M = Buffer.concat([K, L]);
    M.writeUIntLE(L.length, 14, 4);
    await H.load(y);
    H.exif = M;
    return await H.save(null);
  };
  exports.addExif = b6;
  const b7 = {
    nonanimated: [
      '-y',
      '-vcodec libwebp',
      '-vf',
      'scale=2006:2006:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=2006:2006:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1',
    ],
    newnonanimated: [
      '-vcodec',
      'libwebp',
      '-vf',
      "crop=w='min(min(iw,ih),512)':h='min(min(iw,ih),512)',scale=2006:2006,setsar=1",
    ],
    animated2: [
      '-t',
      '15',
      '-vf',
      'scale=512:512:force_original_aspect_ratio=decrease,pad=512:512:(ow-iw)/2:(oh-ih)/2:color=white@0,fps=15',
      '-c:v',
      'libwebp',
      '-lossless',
      '0',
      '-loop',
      '1',
      '-preset',
      'default',
      '-an',
      '-pix_fmt',
      'yuva420p',
    ],
    animated1: [
      '-y',
      '-vf',
      'scale=512:512:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=512:512:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1,fps=20',
      '-lossless 0',
      '-preset default',
      '-loop 0',
      '-an',
      '-vsync 0',
      '-s 512:512',
    ],
    newanimated1: [
      '-vcodec',
      'libwebp',
      '-vf',
      "crop=w='min(min(iw,ih),512)':h='min(min(iw,ih),512)',scale=512:512,setsar=1",
      '-loop',
      '0',
      '-lossless 1',
      '-preset',
      'default',
      '-an',
      '-vsync',
      '0',
      '-s',
      '512:512',
    ],
    newanimated2: [
      '-vcodec',
      'libwebp',
      '-vf',
      "crop=w='min(min(iw,ih),512)':h='min(min(iw,ih),512)',scale=512:512,setsar=1,fps=20",
      '-loop',
      '0',
      '-lossless 0',
      '-preset',
      'default',
      '-an',
      '-vsync',
      '0',
      '-s',
      '512:512',
    ],
    left: ['-vf', 'transpose=2'],
    right: ['-vf', 'transpose=1'],
    flip: ['-vf', 'transpose=2,transpose=2'],
    videor: ['-y', '-vf', 'reverse', '-af', 'areverse'],
    audior: ['-y', '-af', 'areverse'],
    compress: ['-vcodec', 'libx265', '-crf', '28'],
    mp3: ['-vn', '-acodec', 'libmp3lame', '-q:a', '2'],
    wamp4: ['-c:v', 'copy', '-c:a', 'aac', '-movflags', '+faststart'],
    opus: [
      '-vn',
      '-map_metadata',
      '-1',
      '-acodec',
      'libopus',
      '-ac',
      '1',
      '-ar',
      '48000',
      '-b:a',
      '64k',
      '-f',
      'ogg',
    ],
    m4a: ['-vn', '-c:a', 'copy'],
    mp3_high: ['-vn', '-acodec', 'libmp3lame', '-b:a', '256k'],
    tts: ['-vn', '-acodec', 'libopus'],
    photo: [],
    lowmp3: ['-y', '-af', 'asetrate=44100*1.3', '-c:a', 'libmp3lame', '-q:a', '2'],
    avec: [
      '-y',
      '-filter_complex',
      '[0:a]avectorscope=s=720x1280:rf=5:gf=25:bf=5:draw=line,format=yuv420p[v]',
      '-map',
      '[v]',
      '-map 0:a',
    ],
    pitch: ['-y', '-af', 'asetrate=44100*0.9', '-c:a', 'libmp3lame', '-q:a', '2'],
    bass: ['-y', '-af', 'bass=g=10'],
    treble: ['-y', '-af', 'treble=g=10'],
    histo: [
      '-filter_complex',
      '[0:a]ahistogram=s=hd480:slide=scroll:scale=log,format=yuv420p[v]',
      '-map',
      '[v]',
      '-map',
      '0:a',
      '-b:a',
      '360k',
    ],
    vector: [
      '-filter_complex',
      '[0:a]avectorscope=s=512x512:zoom=1.5:rc=0:gc=200:bc=0:rf=0:gf=40:bf=0,format=yuv420p[v]',
      '-map',
      '[v]',
      '-map',
      '0:a',
      '-b:v',
      '700k',
      '-b:a',
      '360k',
    ],
    crop: ['-y', '-vf', 'crop=cw:ch:w:h'],
  };
  const b8 = b7;
  exports.getFfmpegBuffer = async (x, y, z) => {
    let B = 'false';
    let C = 'false';
    /bass,/.test(z) && ((B = z.split(',')[1]), (z = z.split(',')[0]));
    /treble,/.test(z) && ((C = z.split(',')[1]), (z = z.split(',')[0]));
    let D = [...b8[z]];
    'false' != B && (D[2] = 'bass=g=' + B);
    'false' != C && (D[2] = 'treble=g=' + C);
    let E = aQ(x);
    const F = aU(b2, y);
    return await new Promise(function (G, H) {
      E.outputOptions(D)
        .save(F)
        .on('error', (J, K, L) => {
          b5(x);
          b5(F);
          H(new Error('FFmpeg error: ' + J.message + '. Stderr: ' + L));
        })
        .on('end', async () => {
          b5(x);
          const J = aR.readFileSync(F);
          b5(F);
          G(J);
        });
    });
  };
  const b9 = (x) =>
    new Promise((y) => {
      aQ.ffprobe(x, (A, B) => {
        y(B);
      });
    });
  exports.cropsticker = (x, y, z = 1, A, B = '\uD83E\uDD70') => {
    A = A ?? '0';
    let D = b8.newnonanimated;
    2 == z && (D = b8.newanimated1);
    3 == z && (D = b8.newanimated2);
    const E = aU(b2, x + 'c.webp');
    return new Promise(function (F, G) {
      aQ(y)
        .outputOptions(D)
        .save(E)
        .on('error', (J) => G(new Error(J.message)))
        .on('end', async () => {
          const J = await b6(E, void 0, A, void 0, [B]).catch((K) => new Error(K.message));
          b5(y);
          b5(E);
          F(J);
        });
    });
  };
  exports.sticker = (x, y, z = 1, A, B = '\uD83E\uDD70') => {
    A = A ?? '0';
    let D = b8.nonanimated;
    2 == z && (D = b8.animated2);
    3 == z && (D = b8.animated1);
    const E = aU(b2, x + '.webp');
    return new Promise((F, G) => {
      aQ(y)
        .addOutputOptions(D)
        .save(E)
        .on('error', (I) => G(I.message))
        .toFormat('webp')
        .on('end', async () => {
          const I = await b6(aR.readFileSync(E), void 0, A, void 0, [B]).catch((J) => G(J.message));
          b5(y);
          b5(E);
          F(I);
        });
    });
  };
  exports.audioCut = (x, y, z, A = 'cut') => {
    const C = aU(b2, A + '.mp3');
    return new Promise(function (D, E) {
      aQ(x)
        .setStartTime(y)
        .setDuration(z)
        .save(C)
        .on('error', (G) => E(new Error(G.message)))
        .on('end', () => {
          const G = aR.readFileSync(C);
          D(G);
          b5(x);
          b5(C);
        });
    });
  };
  exports.avm = (x) => {
    x = x.reverse();
    const z = aU(b2, 'audvid.mp4');
    const A = aU(b2, 'avm');
    return new Promise(function (B, C) {
      let E = aQ();
      x.forEach((F) => E.input(aU(A, F)));
      E.outputOptions(['-map', '0:v', '-map', '1:a', '-c:v', 'copy', '-shortest']);
      E.save(z);
      E.on('error', (F) => C(new Error(F.message)));
      E.on('end', () => {
        aR.emptyDirSync(A);
        B(aR.readFileSync(z));
        b5(z);
      });
    });
  };
  exports.videoHeightWidth = async (y) => {
    const { streams: A } = await b9(y);
    const B = {
      width: A[0].width,
    };
    B.height = A[0].height;
    return B;
  };
  exports.videoTrim = (x, y, z) => {
    const B = aU(b2, 'videotrim.mp4');
    return new Promise(function (C, D) {
      aQ(x)
        .setStartTime(y.trim())
        .setDuration(z.trim())
        .withVideoCodec('copy')
        .withAudioCodec('copy')
        .on('error', (F) => D(new Error(F.message)))
        .save(B)
        .on('end', async () => {
          let F = aR.readFileSync(B);
          b5(B);
          b5(x);
          C(F);
        });
    });
  };
  const ba = (x) =>
    new Promise((y, z) => {
      aS(x, (B, C, D) => {
        if (B) {
          z(new Error(D || B.message));
        } else {
          y(C);
        }
      });
    });
  const bb = async (x) => {
    try {
      return (
        (
          await ba(
            'ffprobe -v error -select_streams a -show_entries stream=index -of csv=p=0 "' + x + '"',
          )
        ).trim().length > 0
      );
    } catch {
      return false;
    }
  };
  const bc = async (x) => {
    const z = await ba(
      'ffprobe -v error -select_streams v:0 -show_entries stream=width,height,r_frame_rate -of csv=p=0:s=x "' +
        x +
        '"',
    );
    const [A, B, C] = z.trim().split('x');
    const [D, E] = C.split('/').map((I) => parseInt(I, 10));
    const F = E ? D / E : D;
    const G = parseInt(A, 10);
    const H = parseInt(B, 10);
    return {
      width: G - (G % 2),
      height: H - (H % 2),
      fps: F,
    };
  };
  exports.mergeVideo = async () => {
    const y = aU(b2, 'video.txt');
    const z = aU(b2, 'merge.mp4');
    const A = aU(b2, 'merge');
    const B = aR.readdirSync(A).sort((H, I) => parseInt(H, 10) - parseInt(I, 10));
    if (0 === B.length) {
      throw new Error('No videos to merge');
    }
    const C = [];
    for (const H of B) C.push(await bc(aU(A, H)));
    const D = C.reduce((I, J) => (J.width * J.height > I.width * I.height ? J : I));
    const E = D.width;
    const F = D.height;
    const G =
      'scale=' +
      E +
      ':' +
      F +
      ':force_original_aspect_ratio=decrease,pad=' +
      E +
      ':' +
      F +
      ':(ow-iw)/2:(oh-ih)/2,setsar=1,fps=' +
      Math.round(Math.max(...C.map((I) => I.fps)));
    try {
      const I = [];
      for (let J = 0; J < B.length; J++) {
        const K = aU(A, B[J]);
        const L = aU(A, 'norm_' + J + '.mp4');
        const M = (await bb(K))
          ? 'ffmpeg -y -i "' +
            K +
            '" -vf "' +
            G +
            '" -map 0:v:0 -map 0:a:0 -c:v libx264 -preset slow -crf 18 -pix_fmt yuv420p -c:a aac -ar 48000 -ac 2 -b:a 192k "' +
            L +
            '"'
          : 'ffmpeg -y -i "' +
            K +
            '" -f lavfi -i anullsrc=channel_layout=stereo:sample_rate=48000 -vf "' +
            G +
            '" -map 0:v:0 -map 1:a:0 -c:v libx264 -preset slow -crf 18 -pix_fmt yuv420p -c:a aac -ar 48000 -ac 2 -b:a 192k -shortest "' +
            L +
            '"';
        await ba(M);
        I.push(L);
      }
      aR.writeFileSync(y, I.map((N) => "file '" + N + "'").join('\n') + '\n');
      await ba('ffmpeg -y -f concat -safe 0 -i "' + y + '" -c copy "' + z + '"');
      return aR.readFileSync(z);
    } finally {
      aR.emptyDirSync(A);
      aR.existsSync(z) && aR.unlinkSync(z);
      aR.existsSync(y) && aR.unlinkSync(y);
    }
  };
  exports.blackVideo = (x) => {
    const z = aU(b2, 'toblack.aac');
    const A = aU(b2, 'black.mp4');
    return new Promise(function (B, C) {
      aS('ffmpeg -y -i "' + x + '" "' + z + '"', () => {
        aS(
          'ffmpeg -y -loop 1 -framerate 1 -i "' +
            aU(__dirname, '../media/black.jpg') +
            '" -i "' +
            z +
            '" -map 0 -map 1:a -c:v libx264 -preset ultrafast -profile:v baseline -tune stillimage -vf "scale=\'min(360,iw)\':-2,format=yuv420p" -c:a copy -shortest "' +
            A +
            '"',
          (G) => {
            if (G) {
              C(new Error('black failed'));
            } else {
              const H = aR.readFileSync(A);
              b5(x);
              b5(A);
              b5(z);
              B(H);
            }
          },
        );
      });
    });
  };
  exports.cropVideo = (x, y, z, A, B) => {
    const D = aU(b2, 'croped.mp4');
    return new Promise(function (E, F) {
      aS(
        'ffmpeg -y -i "' +
          x +
          '" -vf "crop=' +
          y +
          ':' +
          z +
          ':' +
          A +
          ':' +
          B +
          '" -c:v libx264 -crf 1 -c:a copy "' +
          D +
          '"',
        (G) => {
          if (G) {
            F(new Error('crop failed'));
          } else {
            const J = aR.readFileSync(D);
            b5(D);
            b5(x);
            E(J);
          }
        },
      );
    });
  };
}
exports.gifToVideo = async (x) => {
  const z = aU(b2, aV(x) + '.mp4');
  return new Promise(function (A, B) {
    aQ(x)
      .save(z)
      .outputOptions([
        '-pix_fmt yuv420p',
        '-c:v libx264',
        '-movflags +faststart',
        "-filter:v crop='floor(in_w/2)*2:floor(in_h/2)*2'",
      ])
      .on('error', (C) => B(new Error(C.message)))
      .on('end', function () {
        const E = aR.readFileSync(z);
        A(E);
        b5(x);
        b5(z);
      });
  });
};
exports.videoToGif = async (x) => {
  const z = aU(b2, aV(x) + '.gif');
  return new Promise(function (A, B) {
    aQ(x)
      .save(z)
      .on('error', (D) => B(new Error(D.message)))
      .on('end', function () {
        const E = aR.readFileSync(z);
        A(E);
        b5(x);
        b5(z);
      });
  });
};
exports.circleSticker = async (y, z, A) => {
  A = A ?? '0';
  const C = z ? await exports.videoToGif(y) : aR.readFileSync(y);
  const D = {
    quality: 100,
  };
  D.lossless = false;
  b5(y);
  return await exports.addExif(
    await b1(C)
      .resize(512, 512, {
        fit: 'cover',
      })
      .composite([
        {
          input: Buffer.from(
            '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">\n\t<circle cx="256" cy="256" r="254" fill="rgba(0, 0, 0, 0)"/>\n\t\t\t</svg>',
          ),
          blend: 'dest-in',
        },
        {
          input: Buffer.from(
            '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">\n\t\t\t  <circle cx="256" cy="256" r="254" fill="rgba(255, 255, 255, 0)" stroke="rgba(110, 110, 110, 1)" stroke-width="2" />\n\t\t\t</svg>',
          ),
          blend: 'over',
        },
      ])
      .webp(D)
      .toBuffer(),
    void 0,
    A,
    void 0,
    [],
  );
};
exports.SpeachToText = async (y, z) => {
  const B = aU(b2, 'tts.mp3');
  const C = aU(b2, 'tts.opus');
  try {
    const D = {
      lang: y,
      slow: false,
      host: 'https://translate.google.com',
    };
    const E = await b0.getAllAudioBase64(z, D);
    aR.writeFileSync(B, Buffer.from(E.map((F) => F.base64).join(), 'base64'), {
      encoding: 'base64',
    });
    return new Promise(function (F) {
      aQ(B)
        .audioCodec('libopus')
        .save(C)
        .on('end', async () => {
          b5(B);
          F(aR.readFileSync(C));
          b5(C);
        });
    });
  } catch (F) {
    throw new Error(F.message);
  }
};
