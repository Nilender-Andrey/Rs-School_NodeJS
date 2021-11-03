const EventEmitter = require('events');
const target = new EventEmitter();

target.on('myEvent', (data) => {
  console.log(data);
});

target.emit('myEvent', 'Event emitted!');
