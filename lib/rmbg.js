const V = require('form-data');
const W = require('axios');
const X = require('fs-extra');
const Y = require('path');
exports.removeBg = async (j, k) => {
  const m = new V();
  m.append('size', 'auto');
  m.append('image_file', X.createReadStream(j), Y.basename(j));
  let n = {
    method: 'post',
    url: 'https://api.remove.bg/v1.0/removebg',
    headers: {
      'X-Api-Key': k,
      ...m.getHeaders(),
    },
    data: m,
    responseType: 'arraybuffer',
  };
  try {
    const { data: u } = await W(n);
    return u;
  } catch (v) {
    return v.message;
  }
};
