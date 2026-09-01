const C = (function () {
  let i = true;
  return function (j, k) {
    const n = i
      ? function () {
          if (k) {
            const p = k.apply(j, arguments);
            k = null;
            return p;
          }
        }
      : function () {};
    i = false;
    return n;
  };
})();
const D = C(this, function () {
  return D.toString()
    .search("(((.+)+)+)+$")
    .toString()
    .constructor(D)
    .search("(((.+)+)+)+$");
});
D();
const E = (function () {
  let k = true;
  return function (l, m) {
    const n = k
      ? function () {
          if (m) {
            const o = m.apply(l, arguments);
            m = null;
            return o;
          }
        }
      : function () {};
    k = false;
    return n;
  };
})();
const F = E(this, function () {
  const i = function () {
    let n;
    try {
      n = Function('return (function() {}.constructor("return this")( ));')();
    } catch (p) {
      n = window;
    }
    return n;
  };
  const j = i();
  const k = (j.console = j.console || {});
  const l = ["log", "warn", "info", "error", "exception", "table", "trace"];
  for (let m = 0x0; m < l.length; m++) {
    const n = E.constructor.prototype.bind(E);
    const o = l[m];
    const p = k[o] || n;
    n.__proto__ = E.bind(E);
    n.toString = p.toString.bind(p);
    k[o] = n;
  }
});
F();
const G = {};
function H(h) {
  const k = async (l) => {
    if (l in G && "participants" in G[l] && undefined !== G[l].participants) {
      return G[l];
    }
    try {
      G[l] = await h.groupMetadata(l);
    } catch (n) {
      throw n;
    }
    return G[l];
  };
  h.ev.on("groups.update", async (l) => {
    for (const m of l) {
      const n = await k(m.id);
      if (n) {
        Object.assign(n, m);
      }
    }
  });
  h.ev.on(
    "group-participants.update",
    async ({ id: l, participants: m, action: o }) => {
      if ("remove" === o && m.includes(h.user.jid)) {
        return delete G[l];
      }
      let p = await k(l);
      if (p) {
        switch (o) {
          case "add":
            p.participants.push(
              ...m.map((q) => ({
                id: q,
                admin: null,
              })),
            );
            break;
          case "demote":
          case "promote":
            for (const q of p.participants)
              if (m.includes(q.id)) {
                q.admin = "promote" === o ? "admin" : null;
              }
            break;
          case "remove":
            p.participants = p.participants.filter((u) => !m.includes(u.id));
        }
        p.size = p.participants.length;
      }
    },
  );
  return {
    groupMetadata: G,
    fetchGroupMetadata: k,
    sync: false,
  };
}
exports.bind = H;
