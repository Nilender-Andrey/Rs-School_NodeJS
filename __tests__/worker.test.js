const worker = require('../src/worker/worker');

describe('worker', () => {
  test('worker work', () => {
    const data = {
      codingScheme: ['A'],
      pathToInputFile: './input.txt',
      pathToOutputFile: './output.txt',
    };

    expect(worker(data)).toBeUndefined();
    expect(() => {
      worker(data);
    }).not.toThrowError();
  });
});
