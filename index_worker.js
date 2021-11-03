const {
  Worker,
  BroadcastChannel,
  isMainThread,
  workerData,
} = require('worker_threads');

const bc = new BroadcastChannel('channel_1');

if (isMainThread) {
  console.log('i am Index');
  const worker = new Worker('./index_worker.js', {
    workerData: 5,
  });

  bc.onmessage = (msg) => {
    console.log('In parent', msg.data);
  };
} else {
  console.log('i am Worker', workerData);
  bc.postMessage('worker 1 ready!');
}

//******************************************************************** */
