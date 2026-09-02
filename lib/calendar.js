let a3;
const a4 = new Proxy(
  {},
  {
    get: (p, q) => ((a3 ??= require('googleapis').google), a3[q]),
  },
);
const a5 = require('moment-timezone');
const { refreshUserToken: a6 } = require('./google-auth');
const { nlpComplete: a7, getDate: a8 } = require('./index');
const a9 = require('../config');
const aa = async (q, u = '0') => {
  if (q.length >= 20) {
    return q;
  }
  const w = await a6(u);
  if (!w) {
    throw new Error('Not authorized');
  }
  const x = {
    version: 'v3',
    auth: w,
  };
  const y = a4.calendar(x);
  const z = (
    await y.events.list({
      calendarId: 'primary',
      timeMin: new Date().toISOString(),
      singleEvents: true,
      maxResults: 250,
    })
  ).data.items.filter((A) => A.id.startsWith(q));
  if (1 === z.length) {
    return z[0].id;
  }
  if (z.length > 1) {
    throw new Error(
      'Multiple events match "' +
        q +
        '":\n' +
        z.map((A) => A.summary + ' (' + A.id + ')').join('\n') +
        '\nPlease provide more characters.',
    );
  }
  return q;
};
const ab = async (z, A) => {
  const C = await a6(A);
  if (!C) {
    throw new Error('Not authorized. Use "gauth" to authenticate.');
  }
  const [D, E] = a8();
  const F = a9.TIMEZONE || process.env.TZ || 'UTC';
  const G =
    'You are a helpful assistant that extracts event details from natural language.\nCurrent local time: ' +
    E +
    ' (' +
    new Date(D).toDateString() +
    ').\n\nIMPORTANT: The user may write in ANY language \u2014 English, Hindi/Urdu (Romanized or native script), Arabic, Bengali, Malayalam, Spanish, French, Turkish, Indonesian, Russian, or mixed. Understand all of them.\n\nExtract the event summary and the start date/time. Keep the summary in the user\'s original language.\nRespond ONLY with a JSON object: {"summary": "string", "start": "ISO8601 string"}.\nIf you cannot determine the date, respond ONLY with {"error": "Could not understand the date"}.';
  const H = await a7(G + '\n\nUser input: "' + z + '"', A);
  let I;
  try {
    const O = H.data
      .replace(/```json/g, '')
      .replace(/```/g, '')
      .trim();
    I = JSON.parse(O);
  } catch (P) {
    throw new Error('Failed to parse AI response. Body: ' + H.data);
  }
  if (I.error) {
    throw new Error(I.error);
  }
  const J = {
    version: 'v3',
    auth: C,
  };
  const K = a4.calendar(J);
  const L = a5.tz(I.start, F);
  if (!L.isValid()) {
    throw new Error('Invalid date extracted by AI');
  }
  const M = a5(L).add(1, 'hour');
  const N = {
    summary: I.summary,
    start: {
      dateTime: L.format(),
      timeZone: F,
    },
    end: {
      dateTime: M.format(),
      timeZone: F,
    },
  };
  try {
    const R = {
      calendarId: 'primary',
      requestBody: N,
    };
    const S = await K.events.insert(R);
    return {
      id: S.data.id,
      link: S.data.htmlLink,
      summary: S.data.summary,
      start: a5.tz(S.data.start.dateTime, F).format('YYYY-MM-DD HH:mm:ss'),
    };
  } catch (T) {
    throw new Error('Google Calendar API error: ' + T.message);
  }
};
const ac = async (q = null, u = '0') => {
  const w = await a6(u);
  if (!w) {
    throw new Error('Not authorized. Use "gauth" to authenticate.');
  }
  const x = {
    version: 'v3',
    auth: w,
  };
  const y = a4.calendar(x);
  const z = {
    calendarId: 'primary',
    timeMin: new Date().toISOString(),
    maxResults: 50,
    singleEvents: true,
    orderBy: 'startTime',
  };
  q && (z.timeMax = q);
  try {
    const B = await y.events.list(z);
    const C = a9.TIMEZONE || process.env.TZ || 'UTC';
    return B.data.items.map((D) => ({
      id: D.id,
      summary: D.summary,
      start: a5.tz(D.start.dateTime || D.start.date, C).format('YYYY-MM-DD HH:mm:ss'),
      link: D.htmlLink,
    }));
  } catch (D) {
    throw new Error('Google Calendar API error: ' + D.message);
  }
};
const ad = async (u, v = '0') => {
  const x = await aa(u, v);
  const y = await a6(v);
  if (!y) {
    throw new Error('Not authorized. Use "gauth" to authenticate.');
  }
  const z = {
    version: 'v3',
    auth: y,
  };
  const A = a4.calendar(z);
  try {
    const B = {
      calendarId: 'primary',
      eventId: x,
    };
    await A.events.delete(B);
    return true;
  } catch (D) {
    throw new Error('Google Calendar API error: ' + D.message);
  }
};
const ae = {
  addCalendarEvent: ab,
  listCalendarEvents: ac,
  deleteCalendarEvent: ad,
  resolveCalendarId: aa,
};
module.exports = ae;
