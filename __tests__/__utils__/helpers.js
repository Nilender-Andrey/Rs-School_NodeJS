const { spawn } = require('child_process');

function createProcess(processPath, args = []) {
  args = [processPath].concat(args);

  return spawn('node', args);
}

function executeForFiles(processPath, args) {
  const flags = args.split(' ').slice(2);

  const cp = createProcess(processPath, flags);

  const promise = new Promise((resolve, reject) => {
    cp.stderr.once('data', (err) => {
      reject(err.toString());
    });

    cp.stdout.on('end', () => {
      resolve('test Ok');
    });
  });
  return promise;
}

function execute(processPath, args = [], textToEncrypt) {
  const cp = createProcess(processPath, args);
  cp.stdin.setEncoding('utf-8');

  const promise = new Promise((resolve, reject) => {
    cp.stderr.once('data', (err) => {
      reject(err.toString());
    });
    cp.on('error', reject);

    if (!textToEncrypt) resolve('test Ok');

    cp.stdin.write(`${textToEncrypt}\n`);
    cp.stdin.end();

    let res = '';
    cp.stdout.on('data', (data) => {
      res += data.toString();
    });

    cp.stdout.on('end', () => {
      resolve(res.trim());
    });
  });

  return promise;
}

module.exports = { execute, executeForFiles };
