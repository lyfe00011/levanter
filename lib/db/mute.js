const a7 = require('../../config');
const { DataTypes: a8 } = require('sequelize');
const a9 = a7.DATABASE.define('mute', {
  chat: {
    type: a8.STRING,
    allowNull: false,
  },
  context: {
    type: a8.TEXT,
    allowNull: false,
  },
  session: {
    type: a8.STRING,
    allowNull: false,
    defaultValue: '0',
  },
});
exports.setMute = async (w, x, y, z, A, B, C) => {
  const F = {
    chat: w,
    session: z,
  };
  const G = {
    where: F,
  };
  const H = await a9.findOne(G);
  if (H) {
    const I = JSON.parse(H.context);
    I[x].hour = A ?? I[x].hour;
    I[x].minute = B ?? I[x].minute;
    I[x].enabled = y ?? I[x].enabled;
    I[x].msg = C ?? I[x].msg ?? 'null';
    await H.update({
      chat: w,
      context: JSON.stringify(I),
      session: z,
    });
    return true;
  }
  {
    if (!B) {
      return false;
    }
    const K = {
      hour: '',
      minute: '',
      enabled: false,
      msg: '',
    };
    const L = {
      hour: '',
      minute: '',
      enabled: false,
      msg: '',
    };
    const M = {
      mute: K,
      unmute: L,
    };
    const N = M;
    N[x].hour = A;
    N[x].minute = B;
    N[x].enabled = y ?? false;
    N[x].msg = C ?? 'null';
    return await a9.create({
      chat: w,
      context: JSON.stringify(N),
      session: z,
    });
  }
};
exports.getMute = async (m, o, p) => {
  const q = {
    chat: m,
    session: p,
  };
  const r = {
    where: q,
  };
  const u = await a9.findOne(r);
  return !!u && JSON.parse(u.context)[o];
};
exports.delMute = async (k, l) =>
  await a9.destroy({
    where: {
      chat: k,
      session: l,
    },
  });
exports.getAllMute = async (k) =>
  await a9.findAll({
    where: {
      session: k,
    },
  });
const aa = {
  type: a8.STRING,
  allowNull: false,
};
const ab = {
  type: a8.TEXT,
  allowNull: false,
};
const ac = {
  type: a8.TEXT,
  allowNull: false,
};
const ad = {
  type: a8.STRING,
  allowNull: false,
  defaultValue: '0',
};
const ae = {
  chat: aa,
  time: ab,
  msg: ac,
  session: ad,
};
const af = a7.DATABASE.define('schedule', ae);
exports.setScheduleMessage = async (m, o, p, q, u) => {
  m = m.trim();
  o = o.trim();
  q = q ? q.trim() : '';
  try {
    let x = p.reply_message?.message?.message;
    if (!x) {
      throw new Error('Invalid message format');
    }
    x = {
      ...x,
    };
    let y = Object.keys(x)[0];
    if ('conversation' === y) {
      x.extendedTextMessage = {
        text: x[y],
      };
      delete x.conversation;
      y = 'extendedTextMessage';
    } else {
      if (!x[y]) {
        throw new Error('Invalid key in message');
      }
      x[y].contextInfo = {};
    }
    x.once = q;
    await af.create({
      chat: m,
      time: o,
      msg: JSON.stringify(x),
      session: u,
    });
    return x;
  } catch (z) {}
};
const ag = new RegExp('(\\*/\\d{1,2}|\\d{1,2}-\\d{1,2}|\\d{1,2})', 'g');
exports.getScheduleMessage = async (p, q, r) => {
  if (p) {
    const x = {
      chat: p,
      session: q,
    };
    const y = {
      where: x,
    };
    return (await af.findAll(y)).map((z) => ({
      jid: z.chat,
      time: z.time.match(ag)?.join('-'),
    }));
  }
  const u = {
    session: q,
  };
  const v = {
    where: u,
  };
  const w = await af.findAll(v);
  return r
    ? w
    : w.map((z) => ({
        jid: z.chat,
        time: z.time.match(ag)?.join('-'),
      }));
};
exports.delScheduleMessage = async (p, q, r) => {
  const w = {
    session: r,
  };
  const x = {
    where: w,
  };
  if ('all' === p) {
    await af.destroy(x);
    return true;
  }
  const y = {
    chat: (p = p.trim()),
    session: r,
  };
  (q = q ? q.trim() : '') && (y.time = q);
  const z = {
    where: y,
  };
  return !((await af.destroy(z)) < 1);
};
const ah = {
  type: a8.STRING,
  allowNull: false,
};
const ai = {
  type: a8.TEXT,
  allowNull: false,
};
const aj = {
  type: a8.TEXT,
  allowNull: false,
  defaultValue: '',
};
const ak = {
  type: a8.STRING,
  allowNull: false,
  defaultValue: '0',
};
const al = {
  time: ah,
  msg: ai,
  jids: aj,
  session: ak,
};
const am = a7.DATABASE.define('sstatus', al);
exports.setScheduleStatus = async (m, o, p, q) => {
  m = m.trim();
  const v = o.reply_message?.message?.message;
  let w = Object.keys(v)[0];
  'conversation' === w &&
    ((v.extendedTextMessage = {
      text: v[w],
    }),
    delete v.conversation,
    (w = 'extendedTextMessage'));
  if ('conversation' === w) {
    v.extendedTextMessage = {
      text: v[w],
    };
    delete v.conversation;
    w = 'extendedTextMessage';
  } else {
    v[w].contextInfo = {};
  }
  await am.create({
    time: m,
    msg: JSON.stringify(v),
    jids: p,
    session: q,
  });
  return v;
};
exports.getScheduleStatus = async (m, o) => {
  const p = {
    session: m,
  };
  const q = {
    where: p,
  };
  const r = await am.findAll(q);
  return o
    ? r
    : r.map((u) => ({
        time: u.time.match(ag)?.join('-'),
        jids: u.jids,
      }));
};
exports.delScheduleStatus = async (q, r) => {
  const w = {
    session: r,
  };
  const x = {
    where: w,
  };
  if ('all' === q) {
    await am.destroy(x);
    return true;
  }
  const y = {
    session: r,
  };
  const z = y;
  (q = q ? q.trim() : '') && (z.time = q);
  const A = {
    where: z,
  };
  return !((await am.destroy(A)) < 1);
};
