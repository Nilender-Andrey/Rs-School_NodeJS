const { spawn } = require('child_process');

describe('Success scenarios', () => {
  test('1. Correct character sequence for --config', () => {
    const ENTERED_DATA_INTO_THE_TERMINAL = [
      'my_ciphering_cli.js',
      '--config',
      'C1-C0-A-R0-R1',
    ];

    const promise = new Promise((resolve) => {
      const cp = spawn('node', [...ENTERED_DATA_INTO_THE_TERMINAL]);
      let res = '';

      cp.stdin.write('Ok\n');
      cp.stdin.end();

      cp.stdout.on('data', (data) => {
        res += data.toString();
      });

      cp.stdout.on('end', () => {
        resolve(res.trim());
      });
    });

    expect.assertions(1);
    return expect(promise).resolves.toEqual('Lp');
  });

  test.each([
    [
      [
        'my_ciphering_cli.js',
        '-c',
        'C1-C1-R0-A',
        '-i',
        './input.txt',
        '-o',
        './output.txt',
      ],
    ],

    [
      [
        'my_ciphering_cli.js',
        '-c',
        'C1-C0-A-R1-R0-A-R0-R0-C1-A',
        '-i',
        './input.txt',
        '-o',
        './output.txt',
      ],
    ],
    [
      [
        'my_ciphering_cli.js',
        'A-A-A-R1-R0-R0-R0-C1-C1-A',
        '-i',
        './input.txt',
        '-o',
        './output.txt',
      ],
    ],
    [
      [
        'my_ciphering_cli.js',
        'C1-R1-C0-C0-A-R0-R1-R1-A-C1',
        '-i',
        './input.txt',
        '-o',
        './output.txt',
      ],
    ],
  ])('2. examples from first task', (enter) => {
    expect(() => {
      spawn('node', [...enter]);
    }).not.toThrowError();
  });
});
