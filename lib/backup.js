const { existsSync: a6 } = require('fs-extra');
const { join: a7 } = require('path');
const a8 = require('cron');
const a9 = require('../config');
const {
  refreshUserToken: aa,
  initiateUserToken: ab,
  validateUserCode: ac,
} = require('./google-auth');
const { uploadFile: ad, uploadUrlToDrive: ae } = require('./gdrive');
const { getGAuth: af } = require('./db');
const ag = async (v, w = '0') => {
  const y = await ac(v, w);
  y && (await aj(w));
  return y;
};
const ah = async (v, w, x, y = '0') => {
  if (v && 'string' == typeof v) {
    return ae(v, w, y);
  }
  const A = [
    a7(__dirname, '../config.env'),
    a7(__dirname, '../database.db'),
    a7(__dirname, '../config.json'),
  ];
  for (const B of A)
    if (a6(B)) {
      try {
        await ad(B, y);
      } catch (D) {
        a9.logger.error(D.stack);
        if (!x) {
          throw new Error(D.message);
        }
      }
    }
};
const ai = new Map();
const aj = async (v = '0') => {
  ai.has(v) && (ai.get(v).stop(), ai.delete(v));
  if (!(await af('google_token', v))) {
    return;
  }
  const x = a8.CronJob.from({
    cronTime: '0 3 * * *',
    onTick: async () => {
      try {
        await ah(null, null, true, v);
        a9.logger.info('Daily backup completed for session ' + v);
      } catch (A) {
        a9.logger.error('Backup failed for session ' + v + ': ' + A.message);
      }
    },
    start: true,
    timeZone: process.env.TIMEZONE || process.env.TZ || 'UTC',
  });
  ai.set(v, x);
};
const ak = {
  backup: ah,
  validateUserCode: ag,
  initiateUserToken: ab,
  uploadUrlToDrive: ae,
  setupBackupCron: aj,
};
module.exports = ak;
