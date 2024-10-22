const { writeFileSync } = require('fs-extra')
const a = require('./config.js')
console.log(a)
let env = { session1: {} }
for (const b in a) {
  if (b === 'DATABASE') continue
  env.session1[b] = a[b]
}
writeFileSync('config.json', JSON.stringify(env))
