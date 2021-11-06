const validation = require('./validation');
const worker = require('./worker/worker');

const flags = process.argv.slice(2);

worker(validation(flags));
