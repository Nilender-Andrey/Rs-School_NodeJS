const input = require('../helpers/input');
const myReadingStream = require('../streams/reading_stream');
const { Readable } = require('stream');

test.each([
  ['./input.txt', myReadingStream],
  [null, Readable],
])('check different registers', (letter, result) =>
  expect(input(letter)).toBeInstanceOf(result)
);
