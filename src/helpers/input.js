const myReadingStream = require('../streams/reading_stream');
const { stdin } = process;

module.exports = function (pathToInputFile) {
  return pathToInputFile ? new myReadingStream(pathToInputFile) : stdin;
};
