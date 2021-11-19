const worker = require('./worker/worker');
const { spawn } = require('child_process');

const promise = new Promise((resolve) => {
  const data = {
    codingScheme: ['A'],
    pathToInputFile: null,
    pathToOutputFile: null,
  };

  resolve(spawn('node', [worker(data)]));
});

promise.then((cp) => {
  let res = '';

  cp.stdin.write('Ok\n');
  cp.stdin.end();
  //process.stdin.write('Ok\n');

  // cp.stdout.on('data', (data) => {
  //   res += data.toString();
  // });

  // cp.stdout.on('end', () => {
  //   console.log('end', res);
  //   // resolve(res.trim());
  // });
});

/*  let res = '';

  // cp.stdin.write('Ok\n');
  cp.stdin.end();
  //process.stdin.write('Ok\n');

  cp.stdout.on('data', (data) => {
    res += data.toString();
  });

  cp.stdout.on('end', () => {
    console.log('end', res);
    resolve(res.trim());
  }); */
