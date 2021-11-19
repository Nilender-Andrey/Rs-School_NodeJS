const ReadingStream = require('../streams/reading_stream');

describe('reading_stream', () => {
  test('the constructor is working', () => {
    const readingStream = new ReadingStream('./input.txt');
    expect(readingStream.pathFile).toBe('./input.txt');
    expect(readingStream.fd).toBeNull();
  });
});
