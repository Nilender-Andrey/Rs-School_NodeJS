const validation = require('./validation');
const worker = require('./worker/worker');
const listeners = require('./listeners');

listeners();
const flags = process.argv.slice(2);

worker(validation(flags));
