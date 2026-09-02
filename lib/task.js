let aa;
const ab = new Proxy(
  {},
  {
    get: (z, A) => ((aa ??= require('googleapis').google), aa[A]),
  },
);
const ac = require('moment-timezone');
const { refreshUserToken: ad, getTaskPref: ae, setTaskPref: af } = require('./google-auth');
const { nlpComplete: ag, getDate: ah } = require('./index');
const ai = require('../config');
const aj = async (z) => await ae(z);
const ak = async (z, A) => await af(z, A);
const al = async (A) => {
  const C = await ad(A);
  if (!C) {
    throw new Error('Not authorized. Use "gauth" to authenticate.');
  }
  const D = {
    version: 'v1',
    auth: C,
  };
  const E = ab.tasks(D);
  try {
    return (await E.tasklists.list()).data.items || [];
  } catch (G) {
    throw new Error('Google Tasks API error: ' + G.message);
  }
};
const am = async (A, B) => {
  if (A.length >= 20) {
    return A;
  }
  const D = await ad(B);
  if (!D) {
    throw new Error('Not authorized');
  }
  const E = {
    version: 'v1',
    auth: D,
  };
  const F = ab.tasks(E);
  const G = await aj(B);
  const H = '@default' === G ? '@default' : G;
  const I = (
    (
      await F.tasks.list({
        tasklist: H,
        maxResults: 100,
        showCompleted: true,
        showHidden: true,
      })
    ).data.items || []
  ).filter((J) => J.id.startsWith(A));
  if (1 === I.length) {
    return I[0].id;
  }
  if (I.length > 1) {
    throw new Error(
      'Multiple tasks match "' +
        A +
        '":\n' +
        I.map((J) => J.title + ' (' + J.id + ')').join('\n') +
        '\nPlease provide more characters.',
    );
  }
  throw new Error('No task found matching "' + A + '"');
};
const an = async (C, D) => {
  const F = await ad(D);
  if (!F) {
    throw new Error('Not authorized. Use "gauth" to authenticate.');
  }
  const [G, H] = ah();
  const I =
    (ai.TIMEZONE || process.env.TZ,
    'You are a helpful assistant that extracts task details from natural language.\nCurrent local time: ' +
      H +
      ' (' +
      new Date(G).toDateString() +
      ').\n\nIMPORTANT: The user may write in ANY language \u2014 English, Hindi/Urdu (Romanized or native script), Arabic, Bengali, Malayalam, Spanish, French, Turkish, Indonesian, Russian, or mixed. Understand all of them.\n\nExtract the task title and the due date (if any). Keep the title in the user\'s original language.\nRespond ONLY with a JSON object: {"title": "string", "due": "RFC3339 timestamp string or null"}.\nIf no date is mentioned, set "due" to null.\nNote: Google Tasks Only supports date (YYYY-MM-DDT00:00:00.000Z) for due dates, logic implies due \'by\' that date.\nIf the user specifies a specific time, still extract it as RFC3339 but note it might be rounded to date by the API or app usually.');
  const J = await ag(I + '\n\nUser input: "' + C + '"', D);
  let K;
  try {
    const R = J.data
      .replace(/```json/g, '')
      .replace(/```/g, '')
      .trim();
    K = JSON.parse(R);
  } catch (S) {
    throw new Error('Failed to parse AI response. Body: ' + J.data);
  }
  const L = {
    version: 'v1',
    auth: F,
  };
  const M = {
    title: K.title,
  };
  const N = ab.tasks(L);
  const O = await aj(D);
  const P = '@default' === O ? '@default' : O;
  const Q = M;
  K.due && (Q.due = K.due);
  try {
    const U = {
      tasklist: P,
      requestBody: Q,
    };
    const V = await N.tasks.insert(U);
    return {
      id: V.data.id,
      title: V.data.title,
      due: V.data.due ? ac(V.data.due).format('YYYY-MM-DD') : null,
      status: V.data.status,
      selfLink: V.data.selfLink,
    };
  } catch (W) {
    throw new Error('Google Tasks API error: ' + W.message);
  }
};
const ao = async (B) => {
  const D = await ad(B);
  if (!D) {
    throw new Error('Not authorized. Use "gauth" to authenticate.');
  }
  const E = {
    version: 'v1',
    auth: D,
  };
  const F = ab.tasks(E);
  const G = await aj(B);
  const H = '@default' === G ? '@default' : G;
  try {
    const J = {
      tasklist: H,
      maxResults: 50,
      showCompleted: false,
    };
    return ((await F.tasks.list(J)).data.items || []).map((K) => ({
      id: K.id,
      title: K.title,
      status: K.status,
      due: K.due ? ac(K.due).format('YYYY-MM-DD') : null,
    }));
  } catch (K) {
    throw new Error('Google Tasks API error: ' + K.message);
  }
};
const ap = async (B, C) => {
  const E = await am(B, C);
  const F = await ad(C);
  if (!F) {
    throw new Error('Not authorized. Use "gauth" to authenticate.');
  }
  const G = {
    version: 'v1',
    auth: F,
  };
  const H = ab.tasks(G);
  const I = await aj(C);
  const J = '@default' === I ? '@default' : I;
  try {
    const K = {
      tasklist: J,
      task: E,
    };
    await H.tasks.delete(K);
    return true;
  } catch (M) {
    throw new Error('Google Tasks API error: ' + M.message);
  }
};
const aq = async (C, D, E) => {
  const G = await am(C, E);
  const H = await ad(E);
  if (!H) {
    throw new Error('Not authorized. Use "gauth" to authenticate.');
  }
  const I = {
    version: 'v1',
    auth: H,
  };
  const J = ab.tasks(I);
  const K = await aj(E);
  const L = '@default' === K ? '@default' : K;
  const M = await J.tasks.get({
    tasklist: L,
    task: G,
  });
  let N = {
    status: 'completed',
    title: D,
  };
  if ('completed' === D || 'done' === D) {
  } else {
    const [O, P] = ah();
    const Q =
      'You are a helpful assistant that figures out how to update a task.\nCurrent task title: "' +
      M.data.title +
      '"\nCurrent due date: "' +
      (M.data.due || 'none') +
      '"\nUser instruction: "' +
      D +
      '"\n\nIMPORTANT: The user may write in ANY language \u2014 English, Hindi/Urdu (Romanized or native script), Arabic, Bengali, Malayalam, Spanish, French, Turkish, Indonesian, Russian, or mixed. Understand all of them.\n\nDetermine if the user wants to rename the task, change the due date, or mark it as completed. Keep the title in the user\'s original language.\nRespond ONLY with a JSON object with any of these keys if changed: {"title": "new title", "due": "RFC3339 string", "status": "completed" or "needsAction"}.\n';
    const R = await ag('' + Q, E);
    try {
      const S = R.data
        .replace(/```json/g, '')
        .replace(/```/g, '')
        .trim();
      N = JSON.parse(S);
    } catch (U) {}
  }
  try {
    const W = {
      tasklist: L,
      task: G,
      requestBody: N,
    };
    const X = await J.tasks.patch(W);
    const Y = {
      id: X.data.id,
      title: X.data.title,
      status: X.data.status,
      due: X.data.due,
    };
    return Y;
  } catch (Z) {
    throw new Error('Google Tasks API error: ' + Z.message);
  }
};
const ar = async (z, A) => await aq(z, 'completed', A);
const as = {
  addTask: an,
  listTasks: ao,
  deleteTask: ap,
  updateTask: aq,
  completeTask: ar,
  getTaskLists: al,
  setTaskList: ak,
  getTaskList: aj,
};
module.exports = as;
