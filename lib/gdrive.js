const {
  existsSync: ak,
  createReadStream: al,
  createWriteStream: am,
  copyFileSync: an,
  rmSync: ao,
  unlinkSync: ap,
} = require('fs');
let aq;
const ar = new Proxy(
  {},
  {
    get: (C, D) => ((aq ??= require('googleapis').google), aq[D]),
  },
);
const as = require('axios');
const { PassThrough: at } = require('stream');
const { tmpdir: au } = require('os');
const { pipeline: av } = require('stream/promises');
const { join: aw, basename: ax } = require('path');
const { refreshUserToken: ay } = require('./google-auth');
const { TEMP_DIR: az } = require('./constant');
const aA = async (D, E = '0') => {
  if (D.length >= 33) {
    return D;
  }
  const G = await ay(E);
  if (!G) {
    throw new Error('Not authorized');
  }
  const H = {
    version: 'v3',
    auth: G,
  };
  const I = ar.drive(H);
  const J = await aB(E);
  const K = (
    await I.files.list({
      q: "'" + J + "' in parents and trashed = false",
      fields: 'files(id, name)',
    })
  ).data.files.filter((L) => L.id.startsWith(D));
  if (1 === K.length) {
    return K[0].id;
  }
  if (K.length > 1) {
    throw new Error(
      'Multiple files match "' +
        D +
        '":\n' +
        K.map((L) => L.name + ' (' + L.id + ')').join('\n') +
        '\nPlease provide more characters.',
    );
  }
  return D;
};
const aB = async (F = '0') => {
  const H = await ay(F);
  if (!H) {
    throw new Error('Not authorized');
  }
  const I = {
    version: 'v3',
    auth: H,
  };
  const J = ar.drive(I);
  const K = process.env.BACKUP_FOLDER || 'Levanter';
  const L = await J.files.list({
    q: "name = '" + K + "' and mimeType = 'application/vnd.google-apps.folder' and trashed = false",
    fields: 'files(id)',
  });
  if (L.data.files.length > 0) {
    return L.data.files[0].id;
  }
  {
    const M = {
      name: K,
      mimeType: 'application/vnd.google-apps.folder',
    };
    const N = M;
    const O = {
      requestBody: N,
      fields: 'id',
    };
    return (await J.files.create(O)).data.id;
  }
};
const aC = async (H, I = '0') => {
  const K = await ay(I);
  if (!K) {
    throw new Error('Not authorized');
  }
  const L = {
    version: 'v3',
    auth: K,
  };
  const M = ar.drive(L);
  const N = await aB(I);
  const O = ax(H);
  const P = aw(az, O + '.' + Date.now());
  an(H, P);
  const Q = {
    q: "name = '" + O + "' and '" + N + "' in parents and trashed = false",
    fields: 'files(id)',
  };
  const R = await M.files.list(Q);
  const S = {
    mimeType: 'application/octet-stream',
    body: al(P),
  };
  if (R.data.files.length > 0) {
    const V = R.data.files[0].id;
    const W = {
      fileId: V,
      media: S,
      fields: 'id',
    };
    await M.files.update(W);
  } else {
    const X = {
      name: O,
      parents: [N],
    };
    const Y = X;
    const Z = {
      requestBody: Y,
      media: S,
      fields: 'id',
    };
    await M.files.create(Z);
  }
  ao(P);
};
const aD = async (E = '0') => {
  const G = await ay(E);
  if (!G) {
    throw new Error('Not authorized');
  }
  const H = {
    version: 'v3',
    auth: G,
  };
  const I = ar.drive(H);
  const J = await aB(E);
  const K = {
    q: "'" + J + "' in parents and trashed = false",
    fields: 'files(id, name, mimeType, size, createdTime)',
    orderBy: 'createdTime desc',
  };
  return (await I.files.list(K)).data.files;
};
const aE = async (E, F = '0') => {
  const H = await aA(E, F);
  const I = await ay(F);
  if (!I) {
    throw new Error('Not authorized');
  }
  const J = {
    version: 'v3',
    auth: I,
  };
  const K = ar.drive(J);
  const L = {
    fileId: H,
  };
  await K.files.delete(L);
  return true;
};
const aF = async (I, J, K = '0') => {
  const M = await ay(K);
  if (!M) {
    throw new Error('Not authorized');
  }
  const O = {
    version: 'v3',
    auth: M,
  };
  const Q = ar.drive(O);
  const R = await aB(K);
  const U = ax(new URL(I).pathname) || 'file-' + Date.now();
  const V = aw(au(), Date.now() + '-' + U);
  const W = async (a7) => {
    try {
      await J.send(a7);
    } catch (a8) {}
  };
  let X;
  try {
    const a7 = {
      responseType: 'stream',
      timeout: 60000,
    };
    X = await as.get(I, a7);
  } catch (a9) {
    throw new Error('Failed to download "' + I + '": ' + a9.message);
  }
  const Y = Number(X.headers['content-length']) || 0;
  let Z = 0;
  let a0 = 0;
  let a1 = Date.now();
  const a2 = new at();
  a2.on('data', (ab) => {
    Z += ab.length;
    if (Y) {
      const ad = Math.floor((Z / Y) * 100);
      const ae = Date.now();
      (ad >= a0 + 10 || 100 === ad) &&
        ae - a1 >= 5000 &&
        ((a0 = ad), (a1 = ae), W('Downloading ' + U + ': ' + ad + '%'));
    }
  });
  const a3 = am(V);
  await av(X.data, a2, a3);
  await W('Uploading ' + U + ' to Drive...');
  const a4 = {
    name: U,
    parents: [R],
  };
  const a5 = {
    mimeType: X.headers['content-type'] || 'application/octet-stream',
    body: al(V),
  };
  const a6 = await Q.files.create({
    requestBody: a4,
    media: a5,
    fields: 'id',
  });
  ak(V) && ap(V);
  return a6.data.id;
};
const aG = async (H, I = '0') => {
  const K = await aA(H, I);
  const L = await ay(I);
  if (!L) {
    throw new Error('Not authorized');
  }
  const M = {
    version: 'v3',
    auth: L,
  };
  const N = {
    fileId: K,
    fields: 'name, mimeType, size',
  };
  const O = {
    fileId: K,
    alt: 'media',
  };
  const P = {
    responseType: 'stream',
  };
  const Q = ar.drive(M);
  const R = await Q.files.get(N);
  const S = {
    stream: (await Q.files.get(O, P)).data,
    name: R.data.name,
    mimetype: R.data.mimeType,
    size: R.data.size ? (R.data.size / 1000000).toFixed(2) : 0,
  };
  let U = S.mimetype.split('/')[0];
  S.size > 80 && (U = 'document');
  'webp' === S.mimetype.split('/')[1] && (U = 'sticker');
  'gif' === S.mimetype.split('/')[1] && (U = 'gif');
  ['image', 'video', 'audio', 'sticker', 'gif'].includes(U) || (U = 'document');
  const V = {
    fileName: S.name,
    mimetype: S.mimetype,
  };
  const W = V;
  'gif' === U && ((U = 'video'), (W.mimetype = 'video/mp4'), (W.gifPlayback = true));
  return {
    file: S,
    options: W,
    type: U,
  };
};
const aH = {
  getOrCreateLevanterFolder: aB,
  uploadFile: aC,
  listDriveFiles: aD,
  deleteDriveFile: aE,
  uploadUrlToDrive: aF,
  downloadDriveFile: aG,
};
module.exports = aH;
