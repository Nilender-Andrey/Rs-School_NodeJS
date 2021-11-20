const myWritingStream = require('../streams/writing_stream');
const { stdout } = process;

module.exports = function (pathToOutputFile) {
  return pathToOutputFile ? new myWritingStream(pathToOutputFile) : stdout;
};
