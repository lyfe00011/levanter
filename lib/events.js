const am = require('./test/test');
const an = require('./config');
const ao = (j) =>
  j
    .toString()
    .match(/(\W*)([A-Za-z0-9_ğüşiö ç]*)/)[2]
    .trim();
const ap = (j) => {
  const l = an[j].env.PREFIX;
  const m = 'null' == l ? '' : l;
  let o =
    m.startsWith('^') || '' == m
      ? /\p{Emoji_Presentation}/gu.test(m)
        ? '^[.]'
        : m
      : m.replace('[', '').replace(']', '').replace(/\./g, '[.]');
  try {
    new RegExp((o.startsWith('^') ? o : '^' + o) + '(test| test)', 'is');
  } catch (s) {
    o = '^[' + o + ']';
  }
  let q = '';
  try {
    q = (
      'null' == o
        ? ''
        : o.startsWith('^')
          ? o.match(/\[(\W*)\]/)[1][0]
          : o.replace(/\[/g, '').replace(/\]/g, '')
    ).trim();
  } catch (w) {
    q = o;
  }
  an[j].PREFIX = q;
  an[j].handler = o.startsWith('^') ? o : '^' + o;
};
function aq(j, k) {
  const m = ['photo', 'image', 'text', 'sticker', 'message', 'event'];
  const o =
    j.on && !j.pattern
      ? j.on + (j.event_action || '') + (j.type || '')
      : j.f
        ? j.pattern.match(/(\W*)([A-Za-z0-9ğüşiö ç]*)/g)[0].trim() + (j.type || '')
        : j.pattern.match(/(\W*)([A-Za-z0-9ğüşiö ç]*)/g)[0].trim();
  const q = (u, v) => {
    const x = {
      fromMe: u.fromMe ?? true,
      onlyGroup: u.onlyGroup ?? false,
      desc: u.desc ?? '',
      dontAddCommandList: u.dontAddCommandList ?? false,
      type: u.type ? u.type : u.pattern ? 'misc' : 'undefined',
      active: true,
      function: k,
      name: u.pattern ? ao(u.pattern) : u.type,
      xpattern: u.pattern,
      pattern: null,
      event_action: u.event_action ?? '',
    };
    if (m.includes(u.on) && !u.pattern) {
      x.on = u.on;
    } else {
      if (!u.pattern) {
        throw new Error('unknown error');
      }
      x.pattern = new RegExp(an[v].handler + '(' + u.pattern + '| ' + u.pattern + ')', 'is');
    }
    return x;
  };
  if (false === an.pt) {
    for (const u of an.sessions) {
      'handler' in an[u] || ap(u);
      const v = q(j, u);
      v.pattern &&
        (an[u].pammands[o] = {
          ...v,
          pattern: new RegExp('^[+](' + j.pattern + '| ' + j.pattern + ')', 'is'),
        });
      v.pattern && an[u].commands.push(v);
      an[u].cammands[o] = v;
    }
  } else {
    if (an.plc) {
      'handler' in an[an.plc] || ap(an.plc);
      const y = q(j, an.plc);
      y.pattern &&
        (an[an.plc].pammands[o] = {
          ...y,
          pattern: new RegExp('^[+](' + j.pattern + '| ' + j.pattern + ')', 'is'),
        });
      y.pattern && an[an.plc].commands.push(y);
      an[an.plc].cammands[o] = y;
    }
  }
}
an.patchPrefix = (j) => {
  ap(j);
  for (const l in an[j].cammands)
    an[j].cammands[l].pattern &&
      (an[j].cammands[l].pattern = new RegExp(
        an[j].handler + '(' + an[j].cammands[l].xpattern + '| ' + an[j].cammands[l].xpattern + ')',
        'is',
      ));
};
exports.addCommand = aq;
