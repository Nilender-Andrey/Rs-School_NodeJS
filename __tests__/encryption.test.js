const encryption = require('../src/encryption');

describe('encryption', () => {
  test.each([
    ['AAA', 1, 'BBB'],
    ['ccc', -1, 'bbb'],
    ['Привет', -1, 'Привет'],
    ['Привет', 1, 'Привет'],
    ['aaa', 'mirror', 'zzz'],
    ['RRR', 'mirror', 'III'],
    ['Привет', 'mirror', 'Привет'],
    ['AAA', 8, 'III'],
    ['ccc', -8, 'uuu'],
    ['Привет', -8, 'Привет'],
  ])('%p checking for incorrect input', (text, shift, result) =>
    expect(encryption(text, shift)).toBe(result)
  );
});
