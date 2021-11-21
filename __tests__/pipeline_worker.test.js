const WritingStream = require('../src/streams/writing_stream');
const pipelineWorker = require('../src/streams/pipeline_worker');
const { ATransformStream } = require('../src/streams/transform_streams');
const ReadingStream = require('../src/streams/reading_stream');

jest.mock('../src/streams/writing_stream');

describe('pipeline_worker', () => {
  test('works', () => {
    const transformsArr = [new ATransformStream()];
    const readingStream = new ReadingStream('./input.txt');

    const mockConsole = jest
      .spyOn(console, 'log')
      .mockImplementation(function () {
        return true;
      });

    try {
      pipelineWorker(readingStream, transformsArr, console.log);
    } catch (err) {
      expect(mockConsole).toHaveBeenCalled();
    }

    mockConsole.mockRestore();
  });
});
