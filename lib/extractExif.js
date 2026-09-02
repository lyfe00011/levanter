const H = require('node-webpmux');
const I = async (j) => {
  try {
    const m = new H.Image();
    await m.load(j);
    if (!m.exif?.length) {
      return null;
    }
    const o = m.exif.toString().match(/{.*}/s);
    if (!o) {
      return null;
    }
    const p = JSON.parse(o[0]);
    return {
      packId: p?.['sticker-pack-id'] || '',
      packname: p?.['sticker-pack-name'] || '',
      author: p?.['sticker-pack-publisher'] || '',
      emojis: p?.emojis?.length ? p.emojis.join(', ') : '',
    };
  } catch {
    return null;
  }
};
exports.extractExif = I;
