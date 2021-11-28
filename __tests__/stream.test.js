const ReadingStream = require('../src/streams/reading_stream');
const WritingStream = require('../src/streams/writing_stream');
const open_fs = require('../src/streams/open_fs');

describe('reading_stream', () => {
  test('the constructor is working', () => {
    const readingStream = new ReadingStream('./input.txt');

    expect(readingStream.pathFile).not.toBeNull();
    expect(readingStream.fd).toBeNull();
  });
});

describe('writing_stream', () => {
  test('the constructor is working', () => {
    const readingStream = new WritingStream('./output.txt');

    expect(readingStream.pathFile).not.toBeNull();
    expect(readingStream.fd).toBeNull();
  });
});

describe('fs_stream', () => {
  test('open file', () => {
    return open_fs('./output.txt').then((data) => {
      expect(data.fd).toStrictEqual(expect.any(Number));
    });
  });
});
