let a3;
const a4 = {
  access_type: 'offline',
  scope: [
    'https://www.googleapis.com/auth/drive.file',
    'https://www.googleapis.com/auth/calendar.events',
    'https://www.googleapis.com/auth/tasks',
    'https://www.googleapis.com/auth/youtube',
  ],
  prompt: 'consent',
};
const a5 = new Proxy(
  {},
  {
    get: (m, p) => ((a3 ??= require('googleapis').google), a3[p]),
  },
);
const { getGAuth: a6, setGAuth: a7, deleteGAuth: a8 } = require('./db');
const a9 = async (m = '0') => {
  let q = await a6('google_creds', m);
  if (!q) {
    throw new Error('missing google credentials. use .gauth import to add them.');
  }
  const u = q.installed ? 'installed' : q.web ? 'web' : null;
  if (!u) {
    throw new Error('Invalid Google credentials: Missing "installed" or "web" key.');
  }
  const v = q[u];
  return new a5.auth.OAuth2(
    v.client_id,
    v.client_secret,
    Array.isArray(v.redirect_uris) ? v.redirect_uris[0] : v.redirect_uris,
  );
};
const aa = async (m = '0') => {
  try {
    const u = await a9(m);
    let v = await a6('google_token', m);
    if (v) {
      u.setCredentials(v);
      const x = await u.getAccessToken();
      x &&
        x.token &&
        ((v.access_token = x.token),
        u.setCredentials(v),
        await a7('google_token', u.credentials, m));
      return u;
    }
  } catch (y) {
    return null;
  }
  return null;
};
const ab = async (m = '0') => (await a9(m)).generateAuthUrl(a4);
const ac = async (m, p = '0') => {
  let u = m;
  if (m.includes('code=')) {
    try {
      u = new URL(m).searchParams.get('code') || u;
    } catch (x) {
      const y = m.match(/[?&]code=([^&]+)/);
      y && (u = y[1]);
    }
  } else {
    m.startsWith('code ') && (u = m.replace('code ', '').trim());
  }
  try {
    const B = await a9(p);
    const { tokens: C } = await B.getToken(u);
    B.setCredentials(C);
    await a7('google_token', C, p);
    return true;
  } catch (D) {
    throw new Error(D.response?.data?.error_description || D.message);
  }
};
const ad = async (m, p = '0') => {
  if (!(m.installed ? 'installed' : m.web ? 'web' : null)) {
    throw new Error('Invalid credentials format');
  }
  await a7('google_creds', m, p);
};
const ae = async (m = '0') => {
  await a8('google_creds', m);
  await a8('google_token', m);
  await a8('task_pref', m);
};
module.exports = {
  getOAuth2Client: a9,
  refreshUserToken: aa,
  initiateUserToken: ab,
  validateUserCode: ac,
  getTaskPref: async (m) => (await a6('task_pref', m)) || '@default',
  setTaskPref: async (m, p) => await a7('task_pref', m, p),
  setGAuthCredentials: ad,
  clearGAuth: ae,
  isGAuthTokenActive: async (m = '0') => !!(await a6('google_token', m)),
};
