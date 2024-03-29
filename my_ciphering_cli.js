const validation = require('./src/validation');
const worker = require('./src/worker/worker');
const { ValidationError } = require('./src/my_errors/errors');
const { exit, stderr } = process;

const flags = process.argv.slice(2);

try {
  worker(validation(flags));
} catch (error) {
  if (error instanceof ValidationError) {
    stderr.write(error.name + ': ' + error.message);
  } else {
    stderr.write(error);
  }
  exit(1);
}
