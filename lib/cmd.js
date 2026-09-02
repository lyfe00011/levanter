const { setDb: a4, getDb: a5 } = require('./db/store');
const a6 = require('./config');
const a7 = 'aWxvdmV5b3Vzb29vb29vbWF0Y2hidXRpZG9udGtub3d3aHlpbGlrZWxvdmV3YW50dQ==';
const { iChecker: a8 } = require('./test/test');
const a9 = a8();
const aa = a9 == a7;
const ab = {
  manufacturer: 'Xiaomi',
  model: 'POCO F1',
};
const ac = {
  manufacturer: 'Xiaomi',
  model: 'Redmi 9A',
};
const ad = {
  manufacturer: 'Xiaomi',
  model: 'Xiaomi Mi 4',
};
const ae = {
  manufacturer: 'Vivo',
  model: 'Vivo Y20T',
};
const af = {
  manufacturer: 'OnePlus',
  model: 'OnePlus 8T',
};
const ag = {
  manufacturer: 'Realme',
  model: 'Realme 8 5G',
};
const ah = {
  manufacturer: 'Samsung',
  model: 'Samsung Galaxy M51',
};
aa &&
  ((exports.setCmd = async (j, { message: k, type: l }, n) => {
    const { fileSha256: p } = k.message[l];
    const q = p?.toString('base64');
    if (!q) {
      return -1;
    }
    a6[n].db.cmd = {
      ...a6[n].db.cmd,
      [q]: j,
    };
    await a4(n);
  }),
  (exports.getCmd = async (j) => {
    await a5(j);
    const l = [];
    for (const n in a6[j].db.cmd) l.push(a6[j].db.cmd[n]);
    return l;
  }),
  (exports.delCmd = async (j, k) => {
    if ('string' == typeof j) {
      const n = Object.keys(a6[k].db.cmd).filter((o) => a6[k].db.cmd[o] === j);
      if (!n.length) {
        return -1;
      }
      n.forEach((o) => delete a6[k].db.cmd[o]);
    } else {
      const p = j?.message?.message?.[j.type]?.fileSha256?.toString('base64');
      if (!p) {
        return -1;
      }
      delete a6[k].db.cmd[p];
    }
    await a4(k);
  }));
exports.phonesList = [ab, ac, ad, ae, af, ag, ah];
