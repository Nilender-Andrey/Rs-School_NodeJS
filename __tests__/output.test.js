const output = require('../src/helpers/output');
const myWritingStream = require('../src/streams/writing_stream');
const { Writable } = require('stream');

describe('output', () => {
  test.each([
    ['./output.txt', myWritingStream],
    [null, Writable],
  ])('check return value', (letter, result) =>
    expect(output(letter)).toBeInstanceOf(result)
  );
});
