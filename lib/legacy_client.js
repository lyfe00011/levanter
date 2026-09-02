const {
  default: a,
  DisconnectReason: b,
  delay: c,
  jidNormalizedUser: d,
  fetchLatestBaileysVersion: e,
} = require('@adiwajshing/baileys');
const f = require('pino');
const { initAuthSys: g } = require('./auth');
const {
  deleteCreds: h,
  deleteKeys: i,
  waWebVersion: j,
  PREFIX: k,
  jidToNum: l,
  numToJid: m,
  PLUGINS: n,
} = require('./index');
const { handleMsg: o } = require('./handle');
const p = require('fs');
const q = require('path');
const { getPlugin: r, delPlugin: s, getDb: t, getPdm: u } = require('./db');
const v = require('got');
const { join: w } = require('path');
const { participantUpdate: x } = require('./participantUpdate');
const y = require('../config');
const { commands: z } = require('./events');
const a1 = require('./store');
let b1 = (y.SUDO.split(',')[0] && m(y.SUDO.split(',')[0])) || '';
const c1 = {
  isFirst: true,
  reason: '',
};
const d1 = c1;
const e1 = 'aWxvdmV5b3Vzb29vb29vbWF0Y2hidXRpZG9udGtub3d3aHlpbGlrZWxvdmV3YW50dQ==';
const { iChecker: f1 } = require('./test/test');
let g1 = [];
const { prepareMessage: h1 } = require('./sendMessage');
const { restartInstance: i1 } = require('./pm2');
exports.connect = async () => {
  const j1 = {};
  const { state: k1, saveState: l1 } = await g();
  await k1.keys.restore();
  const { version: m1, isLatest: n1 } = await e();
  console.log('using WA v' + m1.join('.') + ', isLatest: ' + n1);
  p.readdirSync(q.join(__dirname, '../plugins')).forEach((o1) => {
    if (q.extname(o1).toLowerCase() == '.js') {
      try {
        require('../plugins/' + o1);
      } catch (p1) {
        console.log(p1);
      }
    }
  });
  if (n.i == 0) {
    n.i = z.length - 1;
  }
  try {
    const q1 = (await r()) || [];
    if (q1.length) {
      console.log('Installing External plugins\n');
      for await (const { url: r1, name: s1 } of q1) {
        console.log(s1);
        if (!p.existsSync('../plugins/' + s1 + '.js')) {
          try {
            const t1 = await v(r1);
            if (t1.statusCode == 200) {
              try {
                p.writeFileSync(w(__dirname, '../plugins/' + s1 + '.js'), t1.body);
                require(w(__dirname, '../plugins/' + s1 + '.js'));
              } catch (u1) {
                console.log('Deleting ' + s1 + ', due to error');
                await s(s1);
              }
            }
          } catch (v1) {
            console.log('Deleting ' + s1 + ', due to error');
            await s(s1);
          }
        }
      }
      if (n.e == 0) {
        n.e = z.length - n.i - 1;
      }
      console.log('\nExternal Plugins Installed');
    }
  } catch (w1) {
    console.log(w1);
  }
  const x1 = () => {
    const y1 = {
      level: y.BAILEYS_LOG_LVL,
    };
    const z1 = a({
      version: m1,
      printQRInTerminal: true,
      logger: f(y1),
      auth: k1,
      msgRetryCounterMap: j1,
      getMessage: async ({ id: a2, remoteJid: b2 }) => {
        const c2 = chats[b2]?.find(({ key: d2 }) => d2.id == a2);
        return c2?.message;
      },
    });
    global.store = a1.bind(z1);
    z1.ev.on('messages.upsert', async ({ type: e2, messages: f2 }) => {
      const g2 = f2[1] || f2[0];
      if (e2 == 'notify' && g2) {
        return o(g2, z1);
      }
    });
    z1.ev.on('connection.update', (h2) => {
      const { connection: i2, lastDisconnect: j2 } = h2;
      if (i2 == 'open') {
        n.count = n.i + n.e;
        console.log('connected');
        const k2 = {
          text: 'started',
        };
        z1.sendMessage(z1.user.id, k2);
        z1.user.jid = d(z1.user.id);
      }
      const l2 = j2?.error?.output.statusCode == 403;
      const m2 =
        j2?.error?.data?.content?.find((n2) => n2.attrs?.type === 'device_removed') !== undefined;
      if (i2 === 'close') {
        if (j2.error?.output?.statusCode !== b.loggedOut && !m2 && !l2) {
          x1();
        } else {
          console.log('Connection closed. You are logged out.');
          h();
          i();
          c(3000).then(() => i1());
        }
      }
    });
    z1.ev.on('creds.update', l1);
    z1.ev.on('group-participants.update', async (o2) => {
      x(o2, z1);
    });
    z1.ws.on('CB:notification,type:w:gp2', async (p2) => {
      const { content: q2, attrs: r2 } = p2;
      const s2 = r2.from;
      const t2 = q2[0]?.tag;
      if (t2 == 'demote' || t2 == 'promote') {
        const u2 = await u(s2);
        if (!u2) {
          return;
        }
        const { announce: v2, participants: w2 } = await z1.groupMetadata(s2);
        const [x2] = w2.filter((y2) => y2.id == z1.user.jid);
        if (v2 && !x2.admin) {
          return;
        }
        const z2 = r2?.participant;
        const a3 = q2[0]?.content[0]?.attrs?.jid;
        await h1(
          s2,
          {
            text:
              '_@' + l(z2) + ' ' + (t2 == 'demote' ? 'demoted' : 'promoted') + ' @' + l(a3) + '_',
            mentions: [z2, a3],
          },
          {},
          z1,
        );
      }
    });
    return z1;
  };
  x1();
};
