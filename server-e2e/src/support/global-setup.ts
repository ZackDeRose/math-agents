import { exec } from 'child_process';

/* eslint-disable */
var __TEARDOWN_MESSAGE__: string;

module.exports = async function () {
  // Start services that that the app needs to run (e.g. database, docker-compose, etc.).
  console.log('\nSetting up...\n');
  await new Promise((res) => {
    console.log('Starting server...\n');
    const child = exec(`nx run server:serve:development --verbose`);
    child.stdout.on('data', (data) => {
      console.log(data);
      if (
        data.toString().includes('Server running at http://localhost:3000/')
      ) {
        res(true);
      }
    });
  });
  console.log(`\nServer running at http://localhost:3000/\n`);

  // Hint: Use `globalThis` to pass variables to global teardown.
  globalThis.__TEARDOWN_MESSAGE__ = '\nTearing down...\n';
};
