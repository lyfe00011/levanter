const N = 'aWxvdmV5b3Vzb29vb29vbWF0Y2hidXRpZG9udGtub3d3aHlpbGlrZWxvdmV3YW50dQ==';
const { default: O } = require('axios');
const { iChecker: P } = require('./test/test');
const Q = P();
const R = Q == N;
if (R) {
  const U = {
    demon: 'demon_eyes_effect',
    bloody: 'halloween_mask',
    zombie: 'zombie',
    horned: 'horned_goblin',
    sketch: 'sketch',
    skull: 'skull_makeup',
    pencil: 'graphite_pencil_sketch',
    color: 'color_pencil_sketch',
    kiss: 'kisses_on_face_photo_effect',
    bokeh: 'christmas_bokeh',
    wanted: 'wanted',
    look: 'dramatic_look',
    gandm: 'hipster_glasses_and_mustache',
    dark: 'the_dark_knight',
  };
  const { getUrl: V } = require('./utils');
  const W = U;
  const X = async (k, l) => {
    try {
      return (await O.get('https://levanter.onrender.com/editor?method=' + l + '&url=' + k)).data;
    } catch (p) {
      throw new Error(p.message);
    }
  };
  exports.photoEditor = async (k, l) => await X(await V(k), W[l] || l);
}
