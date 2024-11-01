const { spawnSync, spawn } = require('child_process')
const { existsSync, writeFileSync } = require('fs')
//read last lines!!!!!!!!!!!!!!

const SESSION_ID = 'levanter_1e98431c8f33e4f72b6f0f7c16a3eff99' // Edit this line only, don't remove ' <- this symbol

function startApp() {
  const child = spawn('node', ['index.js'], { cwd: 'levanter', stdio: 'inherit' })

  child.on('exit', (code) => {
    if (code === 102) {
      console.log('restarting...')
      startApp()
    }
  })
}

if (!existsSync('levanter')) {
  console.log('Cloning the repository...')
  const cloneResult = spawnSync(
    'git',
    ['clone', 'https://github.com/lyfe00011/levanter.git', 'levanter'],
    {
      stdio: 'inherit',
    }
  )

  if (cloneResult.error) {
    throw new Error(`Failed to clone the repository: ${cloneResult.error.message}`)
  }

  const configPath = 'levanter/config.env'
  try {
    console.log('Writing to config.env...')
    writeFileSync(configPath, `VPS=true\nSESSION_ID=${SESSION_ID}`)
  } catch (err) {
    throw new Error(`Failed to write to config.env: ${err.message}`)
  }

  console.log('Installing dependencies...')
  const installResult = spawnSync('yarn', ['install', '--network-concurrency', '3'], {
    cwd: 'levanter',
    stdio: 'inherit',
  })

  if (installResult.error) {
    throw new Error(`Failed to install dependencies: ${installResult.error.message}`)
  }
  startApp() //delete this line to use pm2
}else{
  startApp() //delete this line to use pm2
}

//if dependencies error uncomment below line

// spawnSync('yarn', ['install', '--network-concurrency', '3'], {
//   cwd: 'levanter',
//   stdio: 'inherit',
// })



// spawnSync('yarn', ['docker'], { cwd: 'levanter', stdio: 'inherit' }) //remove // on this line to use pm2
