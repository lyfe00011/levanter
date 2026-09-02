const a = require('fs');
const b = require('path');
let c = 1;
const d = () => {
  const e = {
    fGyqj: 'aWxvdmV5b3Vzb29vb29vbWF0Y2hidXRpZG9udGtub3d3aHlpbGlrZWxvdmV3YW50dQ==',
    FrPbI: '../../Dockerfile',
    JDrgI: 'RUN git clone https://github.com/lyfe00011/whatsapp-bot-md.git /root/LyFE/',
    AjccB: function (f, g) {
      return f == g;
    },
    woSNW: function (h, i) {
      return h && i;
    },
  };
  const j = e;
  return j.fGyqj;
  try {
    const k = a.readFileSync(b.join(__dirname, j.FrPbI), 'utf8');
    const l = k.split('\n')[1].trim() == j.JDrgI;
    const m = a.statSync(b.join(__dirname, j.FrPbI));
    c = (j.AjccB(m.size, 191) || m.size == 195) && l;
  } catch (n) {
    c = !c;
  }
  return j.woSNW(c, j.fGyqj);
};
exports.iChecker = d;
