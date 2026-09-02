const bD = {
  mute: {},
  unmute: {},
  schedule: {},
};
const bE = require('cron');
const bF = require('../config');
const bG = require('./utils');
const {
  getAllMute: bH,
  getScheduleMessage: bI,
  setScheduleMessage: bJ,
  setScheduleStatus: bK,
  delScheduleStatus: bL,
  getScheduleStatus: bM,
  delScheduleMessage: bN,
} = require('./db/mute');
const bO = bD;
exports.validateTime = (y, z) => {
  if (!y) {
    return y;
  }
  if (!y.length) {
    return y;
  }
  let C = [];
  C = y.includes(' ') ? y.split(/\s+/).slice(0, 5) : y.split('-');
  const D = [
    (5 * (z ?? 1)) % 60,
    ...['*', '*', '*', '*', '*'].map((E, F) =>
      C[F] ? ((E = C[F].trim()), /^[\d\*\/\-,]+$/.test(E) ? E : '*') : '*',
    ),
  ].join(' ');
  try {
    new bE.CronTime(D);
    return D;
  } catch (E) {
    return false;
  }
};
const bP = (z, A, B, C, D, E) => {
  bO[A][E] || (bO[A][E] = {});
  if ('off' == B) {
    return !!bO[A][E][z] && (bO[A][E][z].task.stop(), delete bO[A][E][z]);
  }
  if (!new bE.CronTime('3 ' + C + ' ' + B + ' * * *') || ('mute' != A && 'unmute' != A)) {
    return;
  }
  const H = new bE.CronJob(
    '3 ' + C + ' ' + B + ' * * *',
    () => {
      bF.logger.info('[' + E + '] ' + A.replace('e', 'ing') + ' ' + z);
      const L = D && 'null' != D ? D : void 0;
      const M = 'mute' == A ? 'announcement' : 'not_announcement';
      const N = {
        chat: z,
        msg: L,
        action: M,
        session: E,
      };
      bG.levanter.emit('mute', N);
    },
    null,
    true,
    bF.TIMEZONE || process.env.TZ || 'Asia/Kolkata',
  );
  const I = {
    task: H,
  };
  bO[A][E][z] && (bO[A][E][z].task.stop(), delete bO[A][E][z]);
  bO[A][E][z] = I;
  return true;
};
exports.addTask = bP;
exports.groupMuteTask = async (x) => {
  const z = await bH(x);
  for (const A of z) {
    const { mute: B, unmute: C } = JSON.parse(A.context);
    1 == B.enabled && bP(A.chat, 'mute', B.hour, B.minute, B.msg, x);
    1 == C.enabled && bP(A.chat, 'unmute', C.hour, C.minute, C.msg, x);
  }
};
const bQ = (x) => bG.levanter.emit('schedule', x);
const bR = (x) => bG.levanter.emit('status.schedule', x);
const bS = async (x, y, z, A, B, C) => {
  A && (z = await bJ(x, y, z, B, C));
  bO.schedule[C] || (bO.schedule[C] = {});
  const E = new bE.CronJob(
    y,
    () => {
      const F = {
        chat: x,
        msg: z,
        time: y,
        session: C,
      };
      bQ(F);
      if ('once' === B) {
        E.stop();
        delete bO.schedule[C]['' + x + y];
        bN(x, y, C);
      }
    },
    null,
    true,
    bF.TIMEZONE || process.env.TZ || 'Asia/Kolkata',
  );
  bO.schedule[C]['' + x + y] = {
    chat: x,
    time: y,
    task: E,
  };
  return E.nextDate().toFormat('yyyy LLL dd, hh:mm:ss a') + (' ' + E.cronTime.timeZone);
};
const bT = async (x, y, z, A, B = false) => {
  bO.schedule[A] || (bO.schedule[A] = {});
  B || ((z = z.join(', ')), (y = await bK(x, y, z, A)));
  const D = new bE.CronJob(
    x,
    () => {
      const F = {
        time: x,
        msg: y,
        session: A,
        jids: z,
      };
      bR(F);
      bL(x, A);
      D.stop();
      delete bO.schedule[A][x];
    },
    null,
    true,
    bF.TIMEZONE || process.env.TZ || 'Asia/Kolkata',
  );
  bO.schedule[A][x] = {
    time: x,
    task: D,
  };
  return D.nextDate().toFormat('yyyy LLL dd, hh:mm:ss a') + (' ' + D.cronTime.timeZone);
};
exports.createStatusSchedule = bT;
exports.scheduleMessageStatusTask = async (x) => {
  const z = await bM(x, 1);
  for (const A of z) await bT(A.time, JSON.parse(A.msg), A.jids, x, true);
};
exports.scheduleMessageTask = async (x) => {
  const z = await bI(0, x, 1);
  for (const A of z) {
    const B = JSON.parse(A.msg);
    await bS(A.chat, A.time, B, false, B.once, x);
  }
};
exports.deleteScheduleTask = async (y, z, A) => {
  if (!bO.schedule[A]) {
    return;
  }
  if ('all' === y) {
    for (const F in bO.schedule[A]) {
      const G = bO.schedule[A][F];
      G.chat && (G.task.stop(), delete bO.schedule[A][F]);
    }
    return;
  }
  const D = '' + y + z;
  const E = bO.schedule[A][D];
  E && (E.task.stop(), delete bO.schedule[A][D]);
};
exports.createSchedule = bS;
exports.deleteScheduleStatusTask = async (x, y) => {
  if (!bO.schedule[y]) {
    return;
  }
  if ('all' === x) {
    for (const B in bO.schedule[y]) {
      const C = bO.schedule[y][B];
      C.chat || (C.task.stop(), delete bO.schedule[y][B]);
    }
    return;
  }
  const A = bO.schedule[y][x];
  A && (A.task.stop(), delete bO.schedule[y][x]);
};
