const { getGAuth: V, setGAuth: W, GAuthDB: X } = require('./db');
let Y = null;
const Z = async () => (Y ??= await import('youtubei.js'));
const a0 = (l = '0', m) => W('yt_token', m, l);
const a1 = (l = '0') => V('yt_token', l);
const a2 = (l = '0') =>
  X.destroy({
    where: {
      type: 'yt_token',
      session: l,
    },
  });
const a3 = async (l = '0') => !!(await a1(l));
const a4 = async (l = '0', m) => {
  const q = await Z();
  const v = await q.Innertube.create({
    cache: new q.UniversalCache(false),
    generate_session_locally: true,
  });
  return await new Promise((w, x) => {
    let A = false;
    let B = null;
    const C = (D, E) => {
      A || ((A = true), B && clearTimeout(B), D(E));
    };
    v.session.once('auth-pending', (D) => {
      const F = 1000 * ((Number(D?.expires_in) || 1800) + 15);
      B = setTimeout(
        () => C(x, new Error('Login timed out \u2014 code expired. Run .ytlogin again.')),
        F,
      );
      try {
        m && m(D);
      } catch (H) {}
    });
    v.session.once('auth', async ({ credentials: D }) => {
      try {
        await a0(l, D);
      } catch (F) {}
      C(w, D);
    });
    v.session.once('auth-error', (D) => C(x, D));
    v.session.signIn().catch((D) => C(x, D));
  });
};
const a5 = {
  startYtLogin: a4,
  getYtCreds: a1,
  saveYtCreds: a0,
  clearYtCreds: a2,
  isYtLoggedIn: a3,
};
module.exports = a5;
