const a = 36;
function b(c) {
  let d = 0;
  for (let e = 1, f = a; e < c.length; d += f, e++, f *= a) {}
  for (let g = c.length - 1, h = 1; g >= 0; g--, h *= a) {
    let i = c.charCodeAt(g) - 48;
    if (i > 10) {
      i -= 7;
    }
    d += i * h;
  }
  return d;
}
function j(k) {
  let l = '';
  let m = 1;
  for (let n = a; k >= n; k -= n, m++, n *= a) {}
  while (m--) {
    let o = k % a;
    l = String.fromCharCode((o < 10 ? 48 : 55) + o) + l;
    k = (k - o) / a;
  }
  return l;
}
const p = ';';
const q = ',';
const r = '!';
const s = 'a';
const t = 'z';
const u = new Array(10).join(t);
const v = new RegExp('([' + s + '-' + t + ']+)(' + q + '|[0-9A-Z]+|$)', 'g');
const w = new RegExp('([0-9A-Z]+):([0-9A-Z]+)');
class x {
  nodes;
  syms = [];
  symCount;
  constructor(y) {
    this.nodes = y.split(p);
    this.syms = [];
    this.symCount = 0;
    while (true) {
      let z = w.exec(this.nodes[this.symCount]);
      if (!z) {
        break;
      }
      if (b(z[1]) !== this.symCount) {
        throw new Error(
          'Invalid Symbol name - found ' + z[1] + ' when expecting ' + j(this.symCount),
        );
      }
      this.syms[this.symCount] = b(z[2]);
      this.symCount++;
    }
    this.nodes.splice(0, this.symCount);
  }
  isWord(a1) {
    if (a1 === '') {
      return false;
    }
    return this.match(a1) === a1;
  }
  match(b1) {
    let c1 = this.matches(b1);
    if (c1.length === 0) {
      return '';
    }
    return c1[c1.length - 1];
  }
  matches(d1) {
    return this.words(d1, d1 + s);
  }
  completions(e1, f1) {
    return this.words(e1, g1(e1), f1);
  }
  words(h1, i1, j1) {
    let k1 = [];
    function l1(m1, n1) {
      if (j1 !== undefined && k1.length >= j1) {
        n1.abort = true;
        return;
      }
      k1.push(m1);
    }
    this.enumerate(0, '', {
      from: h1,
      beyond: i1,
      fn: l1,
      prefixes: h1 + s === i1,
    });
    return k1;
  }
  enumerate(o1, p1, q1) {
    let r1 = this.nodes[o1];
    function s1(t1) {
      if (q1.prefixes) {
        if (t1 === q1.from.slice(0, t1.length)) {
          q1.fn(t1, q1);
        }
        return;
      }
      if (q1.from <= t1 && t1 < q1.beyond) {
        q1.fn(t1, q1);
      }
    }
    if (r1[0] === r) {
      s1(p1);
      if (q1.abort) {
        return;
      }
      r1 = r1.slice(1);
    }
    r1.replace(v, (u1, v1, w1) => {
      let x1 = p1 + v1;
      if (q1.abort || x1 >= q1.beyond || x1 < q1.from.slice(0, x1.length)) {
        return '';
      }
      let y1 = w1 === q || w1 === '';
      if (y1) {
        s1(x1);
        return '';
      }
      this.enumerate(this.inodeFromRef(w1, o1), x1, q1);
      return '';
    });
  }
  inodeFromRef(z1, a2) {
    let b2 = b(z1);
    if (b2 < this.symCount) {
      return this.syms[b2];
    }
    b2 -= this.symCount;
    return a2 + b2 + 1;
  }
}
function g1(c2) {
  if (c2.length === 0) {
    return u;
  }
  let d2 = c2.charCodeAt(c2.length - 1);
  return c2.slice(0, -1) + String.fromCharCode(d2 + 1);
}
module.exports = x;
