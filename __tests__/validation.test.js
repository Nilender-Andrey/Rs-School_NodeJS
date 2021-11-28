const validation = require('../src/validation');
const { ValidationError } = require('../src/my_errors/errors');

describe('validation', () => {
  test('correct data', () => {
    const correctData = [
      '-c',
      'C1-C0-A-R1-R0',
      '-i',
      './input.txt',
      '-o',
      './output.txt',
    ];

    const correctResult = {
      codingScheme: ['C1', 'C0', 'A', 'R1', 'R0'],
      pathToInputFile: './input.txt',
      pathToOutputFile: './output.txt',
    };
    expect(validation(correctData)).toBeInstanceOf(Object);
    expect(validation(correctData)).toEqual(correctResult);
  });

  test.each([
    [['-c', 'C1', '--output'], '"--output"'],
    [['--config', 'C1', '--input'], '"--input"'],
  ])('no file path', (line, result) =>
    expect(() => {
      validation(line);
    }).toThrow(
      new ValidationError(
        `The file path must be specified after the ${result} flag.`
      )
    )
  );

  test.each([
    [['-c', 'C1', '--config']],
    [['-c', 'C1', '-c']],
    [['--config', '--config', 'C1']],
  ])('duplicate parameters "--config"/ "-c"', (line) =>
    expect(() => {
      validation(line);
    }).toThrow(
      new ValidationError(
        'The config flag ("-c" or "--config") is required! And only one!'
      )
    )
  );

  test('wrong coding scheme', () => {
    const incorrect = ['-c', 'C1-C0-A-R1-R3'];
    const result = new ValidationError(
      'Incorrect coding scheme! Supported -c "C1-C1-A-R0" format and values C1,C0,R1,R0,A.'
    );
    expect(() => {
      validation(incorrect);
    }).toThrow(result);
  });

  test('no coding scheme', () => {
    const incorrect = ['-i', './input.txt', '-o', './output.txt', '-c'];
    const result = new ValidationError(
      `The "-c" or "--config" argument must come before the encoding scheme.`
    );
    expect(() => {
      validation(incorrect);
    }).toThrow(result);
  });

  test.each([
    [['--config', 'C1', '--output', './test.txt'], 'write'],
    [['--config', 'C1', '--input', './test.txt'], 'read'],
  ])('file does not exist', (line, result) =>
    expect(() => {
      validation(line);
    }).toThrow(
      new ValidationError(
        `No file to ${result} was found. Check the correctness of the entered parameters.`
      )
    )
  );

  test.each([
    [
      ['--config', 'C1', '--output', './output.txt', '-o'],
      '("-o" or "--output")',
    ],
    [['--config', 'C1', '--input', './input.txt', '-i'], '("-i" or "--input")'],
  ])(
    'duplicate parameters "--input"/ "-i" or "--output"/"-o"',
    (line, result) =>
      expect(() => {
        validation(line);
      }).toThrow(
        new ValidationError(`Only one ${result} configuration flag is allowed!`)
      )
  );
});
