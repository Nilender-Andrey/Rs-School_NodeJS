const encryption = require('../encryption');

describe('encryption', () => {
  test.each([
    ['AAA', 1, 'BBB'],
    ['ccc', -1, 'bbb'],
    ['aaa', 'mirror', 'zzz'],
    ['RRR', 'mirror', 'III'],
    ['Привет', 'mirror', 'Привет'],
    ['Привет', '-1', 'Привет'],
  ])('%p checking for incorrect input', (text, shift, result) =>
    expect(encryption(text, shift)).toBe(result)
  );
});
