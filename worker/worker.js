const { exit, stderr, stdout, stdin } = process;
const { pipeline } = require('stream');
const myReadingStream = require('../reading_stream');
const myWritingStream = require('../writing_stream');
const transformsCollector = require('../helpers/transformsCollector');
const listeners = require('../listeners/listeners');

module.exports = function ({
  codingScheme,
  pathToInputFile,
  pathToOutputFile,
}) {
  const input = pathToInputFile ? new myReadingStream(pathToInputFile) : stdin;
  const output = pathToOutputFile
    ? new myWritingStream(pathToOutputFile)
    : stdout;
  const transformsArr = transformsCollector(codingScheme);

  listeners(output, pathToOutputFile);

  pipeline(input, ...transformsArr, output, (err) => {
    if (err) {
      stderr.write('Data transmission error!');
      exit(1);
    }
  });
};
