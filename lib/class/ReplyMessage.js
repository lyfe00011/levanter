const { loadBaileys: Y } = require('../baileys');
let Z;
const a0 = require('./Base');
const { createWriteStream: a1 } = require('fs-extra');
const { join: a2 } = require('path');
const { TEMP_DIR: a3 } = require('../constant');
class a4 extends a0 {
  constructor(l, n) {
    super(l);
    n && this._patch(n);
  }
  _patch(u) {
    switch (
      ((this.key = u.key),
      (this.id = u.key.id),
      (this.jid = u.participant),
      (this.msg = u.message[u.type]),
      u.type)
    ) {
      case 'imageMessage':
        const w = {};
        w.key = u.key;
        w.message = u.message;
        this.message = w;
        this.text = null !== this.msg.caption ? this.msg.caption : '';
        this.mimetype = this.msg.mimetype;
        this.height = this.msg.height;
        this.width = this.msg.width;
        this.image = true;
        break;
      case 'videoMessage':
        const x = {};
        x.key = u.key;
        x.message = u.message;
        this.message = x;
        this.text = null !== this.msg.caption ? this.msg.caption : '';
        this.mimetype = this.msg.mimetype;
        this.height = this.msg.height;
        this.width = this.msg.width;
        this.seconds = this.msg.seconds;
        this.length = this.msg.fileLength
          ? isNaN(this.msg.fileLength)
            ? this.msg.fileLength.low / 1000000
            : this.msg.fileLength
          : 0;
        this.video = true;
        this.ptt = true;
        break;
      case 'stickerMessage':
        const y = {};
        y.key = u.key;
        y.message = u.message;
        this.message = y;
        this.animated = this.msg.isAnimated;
        this.mimetype = this.msg.mimetype;
        this.sticker = true;
        break;
      case 'audioMessage':
        const z = {};
        z.key = u.key;
        z.message = u.message;
        this.message = z;
        this.mimetype = this.msg.mimetype;
        this.seconds = this.msg.seconds;
        this.ptt = this.msg.ptt;
        this.audio = true;
        break;
      case 'documentMessage':
        const A = {};
        A.key = u.key;
        A.message = u.message;
        this.message = A;
        this.mimetype = this.msg.mimetype;
        this.image = /image/.test(this.msg.mimetype) && !/image\/gif/.test(this.msg.mimetype);
        this.video = /video/.test(this.msg.mimetype) || /image\/gif/.test(this.msg.mimetype);
        this.audio = /audio/.test(this.msg.mimetype);
        this.pdf = /application\/pdf/.test(this.msg.mimetype);
        break;
      case 'conversation':
      case 'extendedTextMessage':
        const B = {};
        B.key = u.key;
        B.message = u.message;
        this.message = B;
        this.text = u.text ? u.text : '';
        this.txt = true;
        break;
      default:
        this.text = u.text || '';
        this.message = {
          key: u.key,
          message: u.message,
        };
    }
    delete this.msg;
    this.type = u.type;
    return super._patch(u);
  }
  async downloadMediaMessage() {
    Z || (Z = (await Y()).downloadMediaMessage);
    return await Z(this.message, 'buffer');
  }
  async downloadAndSaveMediaMessage(l) {
    try {
      Z || (Z = (await Y()).downloadMediaMessage);
      const q = await Z(this.message, 'stream');
      const r = this.mimetype?.split(';')[0].split('/')[1];
      const u = a2(a3, l + '.' + r);
      const v = a1(u);
      return new Promise((w, x) => {
        q.pipe(v);
        v.on('finish', () => w(u));
        v.on('error', (z) => {
          x(z);
        });
      });
    } catch (w) {
      throw w;
    }
  }
}
module.exports = a4;
