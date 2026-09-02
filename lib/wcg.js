const { loadBaileys: a9 } = require('./baileys');
const aa = require('path');
const { existsSync: ab, writeFileSync: ac, readFileSync: ad } = require('fs-extra');
const ae = require('./class/Wcg');
const { getBuffer: af } = require('./fetch');
let ag;
const ah = 'QWERTYUIOPASDFGHJKLZXCVBNM'.split('');
const ai = (z = '') => z.replace('@s.whatsapp.net', '').replace('@lid', '');
const aj = require('./utils');
const ak = require('./config');
const { lang: al } = require('.');
const am =
  'https://gist.githubusercontent.com/lyfe00011/dc86b4db7c6eafe5a57c3390adb26dfb/raw/word.txt';
function an(A) {
  const B = {
    id: A,
    longest_word: '',
    word_count: 0,
    letter_count: 0,
  };
  return B;
}
function ao(A) {
  for (let D = A.length - 1; D > 0; D--) {
    const F = Math.floor(Math.random() * (D + 1));
    const G = A[D];
    A[D] = A[F];
    A[F] = G;
  }
  return A;
}
const ap = (z) => (z ? 'hard' : 'easy');
function aq(z) {
  const A = new Date(null);
  A.setSeconds(z);
  return A.toISOString().slice(11, 19);
}
exports.wcg = {
  ie: '',
  room: {},
  _ensureDict: async function () {
    if (this.ie) {
      return this.ie;
    }
    const A = aa.join(__dirname, '../word.txt');
    if (!ab(A)) {
      const B = await af(am);
      if (!B || !B.buffer) {
        throw new Error('failed to download word.txt');
      }
      ac(A, B.buffer, 'utf8');
    }
    this.ie = new ae(ad(A, 'utf8'));
    return this.ie;
  },
  end: async function (A, B, C) {
    if (!ak[C]) {
      throw new Error('missing session');
    }
    const E = {
      text: al.plugins.wcg.game_ends,
    };
    ak[C].sock || (ag || (ag = await a9()), await ag.delay(10000));
    this.room[A] &&
      this.room[A].c === B &&
      ((this.room[A].state = -1),
      delete this.room[A],
      await ak[C].sock.sendMessage(A, E, {
        ephemeralExpiration: aj.expiration.get(A),
      }));
  },
  quit: async function (A, B, C) {
    0 === this.room[A].state &&
      this.room[A].players[B] &&
      (delete this.room[A].players[B],
      (this.room[A].participants = this.room[A].participants.filter((F) => F != B)));
  },
  get_char: function (A, B) {
    const E =
      'random' === this.room[A].mode
        ? ah[Math.round(Math.random() * ah.length)] || 'L'
        : B.charAt(B.length - 1).toUpperCase();
    this.room[A].current.letter = E;
  },
  start_game: async function (C, D, E, F, G = 'easy') {
    if (C in this.room) {
      if (0 == this.room[C].state) {
        this.room[C].m = 'hard' === G.toLowerCase();
        const J = this.room[C].m ? 'Hard' : 'Easy';
        return await ak[F].sock.sendMessage(C, {
          text: al.plugins.wcg.mode_update.format(J),
        });
      }
    } else {
      try {
        await this._ensureDict();
      } catch (M) {
        const N = {
          text: 'word list unavailable \u2014 try again later',
        };
        return void (ak[F]?.sock && (await ak[F].sock.sendMessage(C, N)));
      }
      const L = {
        player: '',
        size: 3,
        time: 40,
        next: '',
        letter: '',
      };
      this.room[C] = {
        m: 'hard' === G.toLowerCase(),
        mode: E,
        c: D,
        start: 0,
        state: 0,
        paused: false,
        used: [],
        players: {},
        joined: 0,
        time: 59,
        words: 0,
        round: 0,
        i: 0,
        cool: 40,
        participants: [],
        current: L,
      };
      await this.main(C, D, F);
    }
  },
  exist: function (z) {
    return this.ie.isWord(z.toLowerCase());
  },
  start: async function (A, B) {
    A in this.room && 0 == this.room[A].state && this.room[A].c === B && (this.room[A].time = 0);
  },
  isWord: async function (D, E, F, G, H) {
    if (
      !(D in this.room) ||
      1 != this.room[D].state ||
      this.room[D].current.player != E ||
      !this.room[D].participants.includes(E)
    ) {
      return false;
    }
    if (this.room[D].paused) {
      return;
    }
    const J = {
      text: al.plugins.wcg.already_used,
    };
    F = F.toLowerCase();
    if (this.room[D].used.includes(F)) {
      return await ak[H].sock.sendMessage(D, J, {
        ephemeralExpiration: aj.expiration.get(D),
        quoted: G,
      });
    }
    if (F.charAt(0).toUpperCase() != this.room[D].current.letter) {
      return await ak[H].sock.sendMessage(
        D,
        {
          text: al.plugins.wcg.not_starting_with.format(this.room[D].current.letter),
        },
        {
          ephemeralExpiration: aj.expiration.get(D),
          quoted: G,
        },
      );
    }
    if (F.length < this.room[D].current.size) {
      return await ak[H].sock.sendMessage(
        D,
        {
          text: al.plugins.wcg.length_limit.format(this.room[D].current.size),
        },
        {
          ephemeralExpiration: aj.expiration.get(D),
          quoted: G,
        },
      );
    }
    const K = {
      text: al.plugins.wcg.not_in_list,
    };
    if (!this.ie.isWord(F)) {
      return await ak[H].sock.sendMessage(D, K, {
        ephemeralExpiration: aj.expiration.get(D),
        quoted: G,
      });
    }
    this.room[D].paused = true;
    this.room[D].current.time = this.room[D].cool;
    this.room[D].used.push(F);
    this.room[D].words++;
    const L = {
      text: '\u2705',
      key: G.key,
    };
    const M = {
      react: L,
    };
    const N = M;
    this.get_char(D, F);
    this.room[D].players[E].word_count++;
    F.length > this.room[D].players[E].letter_count &&
      ((this.room[D].players[E].longest_word = F),
      (this.room[D].players[E].letter_count = F.length));
    await this.trun(D, H);
    ag || (ag = await a9());
    await ag.delay(200);
    await ak[H].sock.sendMessage(D, N, {
      ephemeralExpiration: aj.expiration.get(D),
    });
    return true;
  },
  trun: async function (z, A) {
    this.room[z] &&
      (this.room[z].i <= 0 &&
        ((this.room[z].i = this.room[z].participants.length),
        ((this.room[z].m && this.room[z].current.size < 13) ||
          (this.room[z].round % 3 == 0 && this.room[z].current.size < 13)) &&
          this.room[z].current.size++,
        ((this.room[z].m && this.room[z].cool > 20) ||
          (this.room[z].cool > 20 && this.room[z].round % 4 == 0)) &&
          (this.room[z].cool -= 5),
        this.room[z].round++),
      this.room[z].i--,
      (this.room[z].current.time = this.room[z].cool),
      (this.room[z].current.player = this.room[z].participants[0]),
      (this.room[z].current.next = this.room[z].participants[1]),
      this.room[z].participants.push(this.room[z].participants.shift()),
      await ak[A].sock.sendMessage(
        z,
        {
          text: al.plugins.wcg.turn_info.format(
            ai(this.room[z].current.player),
            ai(this.room[z].current.next),
            this.room[z].current.letter,
            this.room[z].current.size,
            this.room[z].participants.length,
            this.room[z].joined,
            this.room[z].current.time,
            this.room[z].words,
          ),
          mentions: [this.room[z].current.player, this.room[z].current.next],
        },
        {
          ephemeralExpiration: aj.expiration.get(z),
        },
      ),
      (this.room[z].paused = false));
  },
  sub_main: async function (z, A) {
    if (this.room[z]) {
      for (
        this.room[z].start = new Date().getTime(),
          this.room[z].participants = ao(this.room[z].participants),
          this.room[z].current.letter = ah[Math.round(Math.random() * ah.length)] || 'L',
          this.room[z].i = this.room[z].participants.length,
          await this.trun(z, A);
        1 == this.room[z].state;
      ) {
        ag || (ag = await a9());
        await ag.delay(1000);
        if (!ak[A].sock) {
          continue;
        }
        this.room[z].current.time--;
        const C = this.room[z].participants.length;
        const D = this.room[z].current.player;
        const E = this.room[z].current.next;
        if (this.room[z].current.time < 0) {
          this.room[z].participants = this.room[z].participants.filter((F) => F != D);
          await ak[A].sock.sendMessage(
            z,
            {
              text: al.plugins.wcg.timeout.format(ai(D)),
              mentions: [D],
            },
            {
              ephemeralExpiration: aj.expiration.get(z),
            },
          );
          if (2 == C) {
            const F = new Date().getTime() / 1000 - this.room[z].start / 1000;
            const G = Object.values(this.room[z].players).reduce((H, I) =>
              I.letter_count > H.letter_count ? I : H,
            );
            this.room[z].state = -1;
            await ak[A].sock.sendMessage(
              z,
              {
                text: al.plugins.wcg.winner.format(
                  ai(E),
                  this.room[z].words,
                  G.longest_word,
                  G.letter_count,
                  ai(G.id),
                  aq(F),
                ),
                mentions: [E, G.id],
              },
              {
                ephemeralExpiration: aj.expiration.get(z),
              },
            );
            return delete this.room[z];
          }
          await this.trun(z, A);
        }
      }
    }
  },
  join: async function (z, A, B) {
    return (
      z in this.room &&
      !(A in this.room[z].players) &&
      0 == this.room[z].state &&
      !this.room[z].paused &&
      ((this.room[z].players[A] = an(A)),
      this.room[z].participants.push(A),
      this.room[z].joined++,
      await ak[B].sock.sendMessage(
        z,
        {
          text: al.plugins.wcg.joined.format(ai(A)),
          mentions: [A],
        },
        {
          ephemeralExpiration: aj.expiration.get(z),
        },
      ),
      true)
    );
  },
  main: async function (A, B, C) {
    for (
      await ak[C].sock.sendMessage(
        A,
        {
          text: al.plugins.wcg.starting.format(ap(this.room[A].m)),
        },
        {
          ephemeralExpiration: aj.expiration.get(A),
        },
      ),
        ag || (ag = await a9()),
        await ag.delay(200),
        await this.join(A, B, C);
      this.room[A] && 0 == this.room[A].state;
    ) {
      if (!this.room[A]) {
        return;
      }
      ag || (ag = await a9());
      await ag.delay(1000);
      if (ak[C].sock) {
        const G = {
          text: al.plugins.wcg.terminated,
        };
        if (!(this.room[A].time > 0)) {
          if (this.room[A].participants.length < 2) {
            this.room[A].paused = true;
            await ak[C].sock.sendMessage(A, G, {
              ephemeralExpiration: aj.expiration.get(A),
            });
            return void delete this.room[A];
          } else {
            this.room[A].state = 1;
            return void this.sub_main(A, C);
          }
        }
        this.room[A].time--;
        [15, 30, 44].includes(this.room[A].time) &&
          (await ak[C].sock.sendMessage(
            A,
            {
              text: al.plugins.wcg.starts_in.format(
                this.room[A].time,
                ap(this.room[A].m),
                this.room[A].participants.length > 1
                  ? al.plugins.wcg.players_count.format(this.room[A].participants.length)
                  : '',
              ),
            },
            {
              ephemeralExpiration: aj.expiration.get(A),
            },
          ));
      }
    }
  },
};
