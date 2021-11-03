const { workerData, parentPort, BroadcastChannel } = require('worker_threads');

// console.log('Worker', workerData);

// parentPort.on('message', (msg) => {
//   console.log('message', msg);
// });

// setTimeout(() => {
//   parentPort.postMessage('Hello_2 +2s');
// }, 2000);

//******************************************************************** */

const bc = new BroadcastChannel('channel_1');

bc.postMessage('worker 1 ready!');
console.log('Worker', workerData);
