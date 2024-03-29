const { executeForFiles } = require('./__utils__/helpers');

describe('Error scenarios', () => {
  test.each([
    [
      'node my_ciphering_cli -c C1-C1-A-R0 -c C0',
      'ValidationError: The config flag ("-c" or "--config") is required! And only one!',
    ],
    [
      'node my_ciphering_cli C1-C1-A-R0 -i ./input.txt',
      'ValidationError: The config flag ("-c" or "--config") is required! And only one!',
    ],
    [
      'node my_ciphering_cli -c C1-C1-A-R0 -i ./test.txt',
      'ValidationError: No file to read was found. Check the correctness of the entered parameters.',
    ],
    [
      'node my_ciphering_cli -c C1-C1-A-R0 -o ../src/test.txt',
      'ValidationError: No file to write was found. Check the correctness of the entered parameters.',
    ],
    [
      'node my_ciphering_cli --config C1-C0-A-R1-R3 -o ./output.txt -i ./input.txt',
      'ValidationError: Incorrect coding scheme! Supported -c "C1-C1-A-R0" format and values C1,C0,R1,R0,A.',
    ],
  ])('2. Examples from first task', (enter, result) => {
    return expect(
      executeForFiles('my_ciphering_cli.js', enter)
    ).rejects.toEqual(result);
  });
});
