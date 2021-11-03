const { Worker, BroadcastChannel } = require('worker_threads');

//console.log('Index');
const worker = new Worker('./worker.js', {
  workerData: 5,
});

// worker.postMessage('Hello');

// worker.on('message', (msg) => {
//   console.log('msg from worker', msg);
// });

//******************************************************************** */
const bc = new BroadcastChannel('channel_1');

bc.onmessage = (msg) => {
  console.log('In parent', msg.data);
};
