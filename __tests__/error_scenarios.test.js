const validation = require('../validation');
const worker = require('../worker/worker');

describe('Error scenarios', () => {
  const flags = jest.fn((x) => x.split(' ').slice(2));

  test.each([
    [
      'node my_caesar_cli -c C1-C1-A-R0 -c C0',
      'The config flag ("-c" or "--config") is required! And only one!',
    ],
    [
      'node my_caesar_cli C1-C1-A-R0 -i "./input.txt"',
      'The config flag ("-c" or "--config") is required! And only one!',
    ],
    [
      'node my_caesar_cli -c C1-C1-A-R0 -i "./test.txt"',
      'No file to read was found. Check the correctness of the entered parameters.',
    ],
    [
      'node my_caesar_cli -c C1-C1-A-R0 -o "../src/test.txt"',
      'No file to write was found. Check the correctness of the entered parameters.',
    ],
    [
      'node my_caesar_cli --config C1-C0-A-R1-R3 -o ./output.txt -i "./input.txt',
      'Incorrect coding scheme! Supported -c "C1-C1-A-R0" format and values C1,C0,R1,R0,A.',
    ],
  ])('entering incorrect data into the terminal', (argument, result) =>
    expect(() => {
      worker(validation(flags(argument)));
    }).toThrowError(result)
  );
});
