'use strict';
class O {
  constructor(j) {
    var m = {
      get: () => j,
    };
    Object.defineProperty(this, 'client', m);
  }
  _clone() {
    return Object.assign(Object.create(this), this);
  }
  _patch(h) {
    return h;
  }
}
module.exports = O;
