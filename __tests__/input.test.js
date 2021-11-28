const input = require('../src/helpers/input');
const myReadingStream = require('../src/streams/reading_stream');
const { Readable } = require('stream');

describe('input', () => {
  test.each([
    ['./input.txt', myReadingStream],
    [null, Readable],
  ])('check return value', (letter, result) =>
    expect(input(letter)).toBeInstanceOf(result)
  );
});
