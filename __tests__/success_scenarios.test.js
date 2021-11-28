const { execute, executeForFiles } = require('./__utils__/helpers');

describe('Success scenarios', () => {
  test('1. Correct character sequence for --config', () => {
    const ENTERED_DATA = ['--config', 'C1-C0-A-R0-R1'];

    return expect(
      execute('my_ciphering_cli.js', ENTERED_DATA)
    ).resolves.toEqual('test Ok');
  });

  test.each([
    ['node my_ciphering_cli -c C1-C1-R0-A -i ./input.txt -o ./output.txt'],

    [
      'node my_ciphering_cli -c C1-C0-A-R1-R0-A-R0-R0-C1-A -i ./input.txt -o ./output.txt',
    ],
    [
      'node my_ciphering_cli -c A-A-A-R1-R0-R0-R0-C1-C1-A -i ./input.txt -o ./output.txt',
    ],
    [
      'node my_ciphering_cli -c C1-R1-C0-C0-A-R0-R1-R1-A-C1 -i ./input.txt -o ./output.txt',
    ],
  ])('2. Examples from first task', (enter) => {
    return expect(
      executeForFiles('my_ciphering_cli.js', enter)
    ).resolves.toEqual('test Ok');
  });
});
