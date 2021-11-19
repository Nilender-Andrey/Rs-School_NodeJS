const output = require('../helpers/output');
const myWritingStream = require('../streams/writing_stream');
const { Writable } = require('stream');

test.each([
  ['./output.txt', myWritingStream],
  [null, Writable],
])('check different registers', (letter, result) =>
  expect(output(letter)).toBeInstanceOf(result)
);
