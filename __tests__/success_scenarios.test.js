const { spawn } = require('child_process');
const writingStream = require('../writing_stream');
const readingStream = require('../reading_stream');

/* jest.mock('../reading_stream', () => {
  return jest.fn(() => 'This is secret. Message about "_" symbol!');
}); */
//jest.mock('../writing_stream', () => jest.fn());

//const mockOne = jest.fn(() => false);

//const mockCallback = jest.fn(() => cp.stdin.end());

// function fakeTerminalAndInterceptFileWrite(enter, callback) {
//   const cp = spawn('node', [...enter]);
// }

describe('Success scenarios', () => {
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
  ])('examples from first task', (enter) => {
    expect(() => {
      spawn('node', [...enter]);
    }).not.toThrowError();
  });
});

//********************************************* */
/* 
function fakeTerminal(enter, callback) {
  const cp = spawn('node', [...enter]);
  let res = '';

  cp.stdin.write('Ok\n');
  cp.stdin.end();

  cp.stdout.on('data', (data) => {
    res += data.toString();
  });

  cp.stdout.on('end', () => {
    callback(res.trim());
  });
}

describe('Success scenarios', () => {
  const ENTERED_DATA_INTO_THE_TERMINAL = [
    'my_ciphering_cli.js',
    '--config',
    'C1-C0-A-R0-R1',
  ];

  test('1. Correct character sequence for --config', (done) => {
    function callback(data) {
      try {
        expect(data).toBe('Lp');
        done();
      } catch (error) {
        done(error);
      }
    }

    fakeTerminal(ENTERED_DATA_INTO_THE_TERMINAL, callback);
  });
});
*/
//********************************************* */
