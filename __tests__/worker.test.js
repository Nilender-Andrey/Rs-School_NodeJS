const worker = require('../src/worker/worker');
const pipelineWorker = require('../src/streams/pipeline_worker');

jest.mock('../src/streams/pipeline_worker.js');

describe('worker', () => {
  test.each([
    [
      {
        codingScheme: ['C1', 'C1', 'R0', 'A'],
        pathToInputFile: './input.txt',
        pathToOutputFile: './output.txt',
      },
    ],
    [
      {
        codingScheme: ['C1', 'C0', 'A', 'R1', 'R0', 'A', 'R0', 'R0', 'C1', 'A'],
        pathToInputFile: './input.txt',
        pathToOutputFile: './output.txt',
      },
    ],
    [
      {
        codingScheme: ['A', 'A', 'A', 'R1', 'R0', 'R0', 'R0', 'C1', 'C1', 'A'],
        pathToInputFile: './input.txt',
        pathToOutputFile: './output.txt',
      },
    ],
    [
      {
        codingScheme: [
          'C1',
          'R1',
          'C0',
          'C0',
          'A',
          'R0',
          'R1',
          'R1',
          'A',
          'C1',
        ],
        pathToInputFile: './input.txt',
        pathToOutputFile: './output.txt',
      },
    ],
  ])('test for valid data', (enter) => {
    pipelineWorker.mockImplementationOnce(() => 'Ok');

    worker(enter);

    expect(pipelineWorker).toHaveBeenCalledTimes(1);
    expect(pipelineWorker).toHaveLastReturnedWith('Ok');
  });
});
