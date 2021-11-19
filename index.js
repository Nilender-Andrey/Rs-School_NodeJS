const { spawn } = require('child_process');

spawn('node', [
  'my_ciphering_cli.js',
  '-c',
  'C1-C1-R0-A',
  '-i',
  './input.txt',
  '-o',
  './output.txt',
]);

const ENTERED_DATA_INTO_THE_TERMINAL = [
  'my_ciphering_cli',
  '-c',
  'C1-C1-R0-A',
  '-i',
  './input.txt',
  '-o',
  './output.txt',
];

spawn('node', [...ENTERED_DATA_INTO_THE_TERMINAL]);
