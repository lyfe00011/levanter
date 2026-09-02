const { getFake: eZ, setFake: f0, addCode: f1, removeCode: f2 } = require('./fake');
const {
  getMention: f3,
  enableMention: f4,
  mentionMessage: f5,
  setPmMessage: f6,
  getPmMessage: f7,
} = require('./mention');
const f8 = 'aWxvdmV5b3Vzb29vb29vbWF0Y2hidXRpZG9udGtub3d3aHlpbGlrZWxvdmV3YW50dQ==';
const { iChecker: f9 } = require('../test/test');
const fa = f9();
const fb = fa == f8;
if (fb) {
  require('./team');
  const fc = require('./budget');
  const {
    getCreds: fd,
    setCreds: fe,
    setKeys: ff,
    restoreKeys: fg,
    deleteCreds: fh,
    deleteKeys: fi,
    getGAuth: fj,
    setGAuth: fk,
    deleteGAuth: fl,
    GAuthDB: fm,
    KeysDB: fn,
    CredsDB: fo,
  } = require('./session');
  const { getMessage: fp, deleteMessage: fq, setMessage: fr } = require('./greetings');
  const { getPlugin: fs, setPlugin: ft, delPlugin: fu } = require('./plugins');
  const fv = require('./nr');
  exports.zushi = fv.zushi;
  exports.yami = fv.yami;
  exports.ope = fv.ope;
  exports.logia = fv.logia;
  const { setAmenu: fw, getAmenu: fx, delAmenu: fy } = require('./amenu');
  exports.setAmenu = fw;
  exports.getAmenu = fx;
  exports.delAmenu = fy;
  const {
    setAntiLink: fz,
    getAntiLink: fA,
    setAntiSpam: fB,
    getAntiSpam: fC,
    setAntiSpamLevel: fD,
    setAntiSpamAction: fE,
    getWord: fF,
    setWord: fG,
    setAllowedUrl: fH,
    addWord: fI,
    removeWord: fJ,
  } = require('./antilink');
  exports.setAntiLink = fz;
  exports.getAntiLink = fA;
  exports.setSpam = fB;
  exports.getSpam = fC;
  exports.setAntiSpamLevel = fD;
  exports.setAntiSpamAction = fE;
  exports.setWord = fG;
  exports.getWord = fF;
  exports.setAllowedUrl = fH;
  exports.addWord = fI;
  exports.removeWord = fJ;
  const {
    setLydia: fK,
    getTruecaller: fL,
    setTruecaller: fM,
    delTruecaller: fN,
  } = require('./lydia');
  exports.setLydia = fK;
  exports.getTruecaller = fL;
  exports.setTruecaller = fM;
  exports.delTruecaller = fN;
  const {
    getPdm: fO,
    setPdm: fP,
    getTMessage: fQ,
    setTMessage: fR,
    updateTMessage: fS,
    getDeletedMessage: fT,
    setGroupMention: fU,
    getGroupMention: fV,
  } = require('./pdm');
  const { getData: fW, setData: fX, delData: fY } = require('./data');
  const { getFilter: fZ, setFilter: g0, delFilter: g1 } = require('./filter');
  const { deleteWarn: g2, getWarnCount: g3, setWarn: g4 } = require('./warn');
  const {
    getMute: g5,
    setMute: g6,
    delScheduleMessage: g7,
    getScheduleMessage: g8,
    delMute: g9,
  } = require('./mute');
  exports.setTMessage = fR;
  exports.getTMessage = fQ;
  exports.updateTMessage = fS;
  if ('on' === process.env.XMESSAGE) {
    const {
      setXMessage: gf,
      getXMessage: gg,
      delXMessage: gh,
      initXTime: gi,
      getXTime: gj,
    } = require('./pdm');
    exports.setXMessage = gf;
    exports.getXMessage = gg;
    exports.delXMessage = gh;
    exports.initXTime = gi;
    exports.getXTime = gj;
  }
  exports.getDeletedMessage = fT;
  exports.getFilter = fZ;
  exports.setFilter = g0;
  exports.deleteFilter = g1;
  exports.deleteWarn = g2;
  exports.getMute = g5;
  exports.setMute = g6;
  exports.delMute = g9;
  exports.getWarnCount = g3;
  exports.setWarn = g4;
  exports.setPdm = fP;
  exports.getPdm = fO;
  exports.delScheduleMessage = g7;
  exports.getScheduleMessage = g8;
  exports.getCreds = fd;
  exports.getMention = f3;
  exports.setCreds = fe;
  exports.setKeys = ff;
  exports.restoreKeys = fg;
  exports.deleteCreds = fh;
  exports.deleteKeys = fi;
  exports.getGAuth = fj;
  exports.setGAuth = fk;
  exports.deleteGAuth = fl;
  exports.GAuthDB = fm;
  exports.KeysDB = fn;
  exports.CredsDB = fo;
  exports.enableMention = f4;
  exports.mentionMessage = f5;
  exports.deleteMessage = fq;
  exports.setMessage = fr;
  exports.getMessage = fp;
  exports.getFake = eZ;
  exports.setFake = f0;
  exports.addCode = f1;
  exports.removeCode = f2;
  exports.getPlugin = fs;
  exports.setPlugin = ft;
  exports.delPlugin = fu;
  exports.setBudget = fc.setBudget;
  exports.getBudget = fc.getBudget;
  exports.delBudget = fc.detBudget;
  exports.setPmMessage = f6;
  exports.getPmMessage = f7;
  exports.setGroupMention = fU;
  exports.getGroupMention = fV;
  const {
    setAntiGstatus: ga,
    getAntiGstatus: gb,
    addAntiGstatusFilter: gc,
    removeAntiGstatusFilter: gd,
  } = require('./antigstatus');
  exports.setAntiGstatus = ga;
  exports.getAntiGstatus = gb;
  exports.addAntiGstatusFilter = gc;
  exports.removeAntiGstatusFilter = gd;
  exports.getData = fW;
  exports.setData = fX;
  exports.delData = fY;
}
