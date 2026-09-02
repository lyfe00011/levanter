const X = require('pm2');
const { loadBaileys: Y } = require('./baileys');
let Z;
const a0 = require('../config');
const { exec: a1 } = require('child_process');
const a2 = async (j, k, l) => {
  Z || (Z = (await Y()).delay);
  await Z(3000);
  const p = 'restart' === j ? process.env.RESTART_CMD : process.env.STOP_CMD;
  if (p) {
    a0.logger.info('Executing custom ' + j + ' command: ' + p);
    return void a1(p, (u, v, w) => {
      u && a0.logger.error(u);
      v && a0.logger.info(v);
      w && a0.logger.error(w);
      process.exit('restart' === j ? 1 : 0);
    });
  }
  if (!process.env.pm_id) {
    a0.logger.info('Not running under PM2. Executing standard process exit to ' + j + '.');
    return void process.exit('restart' === j ? 1 : 0);
  }
  const q = 'pm2 ' + j + 'ing instance ' + (l || '');
  a0.logger.info(q);
  X.connect((u) => {
    u && (a0.logger.error(u), process.exit(2));
    X[j](k || process.env.pm_id || 'levanter', (v) => {
      v && a0.logger.error(v);
      X.disconnect();
    });
  });
};
exports.stopInstance = (i, j) => {
  a2('stop', i, j);
};
exports.restartInstance = (i, j) => {
  a2('restart', i, j);
};
