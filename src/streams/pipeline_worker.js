const { pipeline } = require('stream');
const { exit, stderr } = process;

module.exports = function (input, transformsArr, output) {
  return pipeline(input, ...transformsArr, output, (err) => {
    if (err) {
      stderr.write('Data transmission error!');
      exit(1);
    }
  });
};
