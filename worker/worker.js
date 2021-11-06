const { exit, stderr, stdout, stdin } = process;
const { pipeline } = require('stream');
const myReadingStream = require('../readingStream');
const myWritingStream = require('../writingStream');
const myTransformStream = require('../transformStream');

module.exports = function ({
  codingScheme,
  pathToInputFile,
  pathToOutputFile,
}) {
  const input = pathToInputFile ? new myReadingStream(pathToInputFile) : stdin;
  const output = pathToOutputFile
    ? new myWritingStream(pathToOutputFile)
    : stdout;

  const transformArr = codingScheme.map((item) => new myTransformStream(item));

  pipeline(input, ...transformArr, output, (err) => {});
};
