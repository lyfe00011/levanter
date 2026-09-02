const { setDb: as } = require('./db/store');
const at = require('./config');
const au = (x) => x[Math.floor(Math.random() * x.length)];
const av = (x) => x.split('@')[0];
const { lang: aw } = require('.');
const ax = {
  X: '❌',
  O: '⭕',
  1: '1️⃣',
  2: '2️⃣',
  3: '3️⃣',
  4: '4️⃣',
  5: '5️⃣',
  6: '6️⃣',
  7: '7️⃣',
  8: '8️⃣',
  9: '9️⃣',
};
const ay = () => [
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
];
const az = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
const aA = (x) => {
  if (!shift) {
    return shift;
  }
  for (const A of az) {
    const B = x[A[0]];
    const C = x[A[1]];
    const D = x[A[2]];
    if (B == C && C == D && B && C && D) {
      return !0;
    }
  }
  return !1;
};
const aB = (x, z) => parseInt(x) + parseInt(z);
const aC = (x) => ax[x];
const aD = () => [...''.padStart(9, ' ')].reverse().map((x, z) => aC(z + 1));
const aE = (x, z, A) => ({
  contentText: z,
  footerText: '',
  buttons: [
    {
      buttonId: A + 'tictactoe ' + x,
      buttonText: {
        displayText: aw.plugins.tictactoe.restart,
      },
      type: 1,
    },
  ],
  headerType: 1,
});
const aF = (x, z) =>
  (x.slice(0, 3).join('') + '\n' + x.slice(3, 6).join('') + '\n' + x.slice(6).join(''))
    .replace(/X/g, ax.X)
    .replace(/O/g, ax.O);
const aG = (z, A) => {
  const B = {
    RNgHW: function (E, F) {
      return E > F;
    },
    DfqJZ: function (E, F) {
      return E + F;
    },
  };
  const C = B;
  let D = at[z].db.game.room.tic;
  if (C.RNgHW(at[z].db.game.room[A].length, 2)) {
    let E = at[z].db.game.room[A].shift();
    D[E] = ax[C.DfqJZ(E, 1)];
    at[z].db.game.room.tic = D;
    at[z].db.game.room.tac[E] = undefined;
  }
  return (D.slice(0, 3).join('') + '\n' + D.slice(3, 6).join('') + '\n' + D.slice(6).join(''))
    .replace(/X/g, ax.X)
    .replace(/O/g, ax.O);
};
const aH = (x, z, A, B, C, D = 'infinite') =>
  '' +
  (A ? aw.plugins.tictactoe.header + '\n\n' : '') +
  aw.plugins.tictactoe.players +
  '\n' +
  aC('X') +
  ' : @' +
  x +
  '\n' +
  aC('O') +
  ' : @' +
  z +
  '\n\n' +
  (A ? aw.plugins.tictactoe.current_player + ' : @' + A + ' \n\n' : '') +
  (A && D === 'infinite' ? aG(B, C) : aF(at[B].db.game.room.tic));
const aI = 'aWxvdmV5b3Vzb29vb29vbWF0Y2hidXRpZG9udGtub3d3aHlpbGlrZWxvdmV3YW50dQ==';
const aJ = require('./test/test');
const aK = aJ.iChecker() == aI;
if (aK) {
  exports.ticTacToe = async (x, z, A, B, C) => {
    if (at[B].db.game.state && A) {
      exports.deleteTicTacToe(B);
    }
    if (0 == at[B].db.game.state && A) {
      const E = [z, A];
      const F = {
        fi: !!C,
        X: z,
        O: A,
        tic: aD(),
        currentPlayer: au(E),
        players: E,
        tac: ay(),
        id: x,
        mode: 'normal' === C ? 'normal' : 'infinite',
        [z]: [],
        [A]: [],
      };
      at[B].db.game.room = F;
      at[B].db.game.state = true;
      await as(B);
      return {
        text: aH(av(F.X), av(F.O), av(F.currentPlayer), B, F.currentPlayer, F.mode),
        code: 200,
      };
    }
    return false;
  };
}
exports.isTicTacToe = async (C, D, E, F) => {
  const G = {
    GjBTy: function (K, L) {
      return K != L;
    },
    tksOA: function (K, L) {
      return K(L);
    },
    qCtuL: function (K, L) {
      return K === L;
    },
    bpsVB: 'normal',
    ABCPp: function (K, L) {
      return K > L;
    },
    HSExv: function (K, L) {
      return K - L;
    },
    gwjRu: function (K, L) {
      return K == L;
    },
    TEArq: function (K, L) {
      return K == L;
    },
    UldVs: function (K, L) {
      return K == L;
    },
    htgEc: function (K, L) {
      return K == L;
    },
    Dioka: function (K, L, M, N, P, Q, R) {
      return K(L, M, N, P, Q, R);
    },
    lAeJh: function (K, L) {
      return K(L);
    },
    aJyUB: function (K, L) {
      return K(L);
    },
    vEvYU: function (K, L) {
      return K == L;
    },
    RUnCx: function (K, L) {
      return K === L;
    },
    PRmFK: 'gMgxD',
    MibTA: function (K, L, M, N, P, Q, R) {
      return K(L, M, N, P, Q, R);
    },
    HJmEc: function (K, L) {
      return K(L);
    },
    WoElH: function (K, L) {
      return K(L);
    },
    XWoet: function (K, L) {
      return K(L);
    },
  };
  const H = {
    code: 404,
    text: '',
  };
  if (
    !at[F].db.game.state ||
    (at[F].db.game.room.players && !at[F].db.game.room.players.includes(E)) ||
    G.GjBTy(at[F].db.game.room.id, D) ||
    G.GjBTy(at[F].db.game.room.currentPlayer, E) ||
    G.tksOA(isNaN, C) ||
    (G.qCtuL(G.bpsVB, at[F].db.game.room.mode) && G.ABCPp(C, 9))
  ) {
    return H;
  }
  C = G.HSExv(C.charAt(0), 1);
  const I = at[F].db.game.room.tic[C];
  const J = {
    text: aw.plugins.tictactoe.already_occupied,
    code: 300,
  };
  if (G.gwjRu('X', I) || G.TEArq('O', I)) {
    return J;
  }
  at[F].db.game.room.tic[C] = G.UldVs(at[F].db.game.room.X, E) ? 'X' : 'O';
  at[F].db.game.room.tac[C] = G.htgEc(at[F].db.game.room.X, E) ? 'X' : 'O';
  if (G.UldVs(1, G.tksOA(aA, at[F].db.game.room.tac))) {
    const K = [
      G.GjBTy(at[F].db.game.room.currentPlayer, at[F].db.game.room.O)
        ? at[F].db.game.room.X
        : at[F].db.game.room.O,
      G.GjBTy(at[F].db.game.room.currentPlayer, at[F].db.game.room.O)
        ? at[F].db.game.room.O
        : at[F].db.game.room.X,
      G.Dioka(
        aH,
        G.tksOA(av, at[F].db.game.room.X),
        G.lAeJh(av, at[F].db.game.room.O),
        undefined,
        F,
        undefined,
        at[F].db.game.room.mode,
      ),
      at[F].db.game.room.O,
    ];
    const L = {
      text: K,
      code: 201,
    };
    at[F].db.game.state = !1;
    at[F].db.game.room = {};
    await G.aJyUB(as, F);
    return L;
  }
  if (G.vEvYU(0, at[F].db.game.room.tac.filter((M) => !M).length)) {
    if (G.RUnCx(G.PRmFK, G.PRmFK)) {
      const M = [
        at[F].db.game.room.O,
        at[F].db.game.room.X,
        G.MibTA(
          aH,
          G.tksOA(av, at[F].db.game.room.X),
          G.lAeJh(av, at[F].db.game.room.O),
          undefined,
          F,
          undefined,
          at[F].db.game.room.mode,
        ),
        at[F].db.game.room.O,
      ];
      const N = {
        code: 403,
        text: M,
      };
      at[F].db.game.state = !1;
      at[F].db.game.room = {};
      await G.HJmEc(as, F);
      return N;
    } else {
      const S = G.constructor.prototype.bind(H);
      const T = I[J];
      const U = K[T] || S;
      S.__proto__ = L.bind(M);
      S.toString = U.toString.bind(U);
      N[T] = S;
    }
  }
  at[F].db.game.room[at[F].db.game.room.currentPlayer].push(C);
  at[F].db.game.room.currentPlayer = G.gwjRu(at[F].db.game.room.X, E)
    ? at[F].db.game.room.O
    : at[F].db.game.room.X;
  await G.lAeJh(as, F);
  return {
    text: [
      at[F].db.game.room.O,
      at[F].db.game.room.X,
      G.MibTA(
        aH,
        G.WoElH(av, at[F].db.game.room.X),
        G.XWoet(av, at[F].db.game.room.O),
        G.tksOA(av, at[F].db.game.room.currentPlayer),
        F,
        at[F].db.game.room.currentPlayer,
        at[F].db.game.room.mode,
      ),
      at[F].db.game.room.O,
    ],
    code: 301,
  };
};
exports.isGameActive = (z) => {
  const B = at[z].db.game.state
    ? aH(
        av(at[z].db.game.room.X),
        av(at[z].db.game.room.O),
        av(at[z].db.game.room.currentPlayer),
        z,
        at[z].db.game.room.currentPlayer,
        at[z].db.game.room.mode,
      )
    : '';
  const C = [at[z].db.game.room.X, at[z].db.game.room.O];
  const D = {
    state: at[z].db.game.state,
    text: B,
    mentionedJid: C,
  };
  return D;
};
exports.deleteTicTacToe = async (x) => {
  if (at[x].db.game.state) {
    at[x].db.game.room = {};
    at[x].db.game.state = !1;
    await as(x);
    return !0;
  }
};
