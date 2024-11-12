const { spawnSync, spawn } = require('child_process');
const { existsSync, writeFileSync } = require('fs');
const path = require('path');

const SESSION_ID = 'updateThis'; // Edit this line only, don't remove ' <- this symbol

function startApp() {
  const child = spawn('node', ['index.js'], { cwd: 'levanter', stdio: 'inherit' });

  child.on('exit', (code) => {
    if (code === 102) {
      console.log('restarting...');
      startApp();
    }
  });
}

function installDependencies() {
  console.log('Installing dependencies...');
  const installResult = spawnSync('yarn', ['install', '--force', '--non-interactive', '--network-concurrency', '3'], {
    cwd: 'levanter',
    stdio: 'inherit',
  });

  if (installResult.error) {
    throw new Error(`Failed to install dependencies: ${installResult.error.message}`);
  }
}

function checkDependencies() {
  if (!existsSync(path.resolve('levanter/package.json'))) {
    console.error('package.json not found!');
    process.exit(1);
  }

  try {
    console.log('Checking for missing dependencies...');
    spawnSync('yarn', ['check', '--verify-tree'], { cwd: 'levanter', stdio: 'inherit' });
    console.log('All dependencies are installed properly.');
  } catch (error) {
    console.error('Some dependencies are missing or incorrectly installed.');
    installDependencies();
  }
}

function cloneRepository() {
  console.log('Cloning the repository...');
  const cloneResult = spawnSync(
    'git',
    ['clone', 'https://github.com/lyfe00011/levanter.git', 'levanter'],
    {
      stdio: 'inherit',
    }
  );

  if (cloneResult.error) {
    throw new Error(`Failed to clone the repository: ${cloneResult.error.message}`);
  }

  const configPath = 'levanter/config.env';
  try {
    console.log('Writing to config.env...');
    writeFileSync(configPath, `VPS=true\nSESSION_ID=${SESSION_ID}`);
  } catch (err) {
    throw new Error(`Failed to write to config.env: ${err.message}`);
  }

  installDependencies();
}

if (!existsSync('levanter')) {
  cloneRepository();
  checkDependencies();
} else {
  checkDependencies();
}

startApp(); //delete this line to use pm2

// Uncomment below line to use pm2
// spawnSync('yarn', ['docker'], { cwd: 'levanter', stdio: 'inherit' });
