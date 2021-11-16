const checkUppercase = require('./сheck_uppercase');

describe('checkUppercase', () => {
  test.each([
    ['AAA', new Error('Entered incorrect data')],
    ['fff', new Error('Entered incorrect data')],
  ])('%p checking for incorrect input', (letter, result) =>
    expect(() => checkUppercase(letter, result)).toThrowError(result)
  );

  test.each([
    ['A', true],
    ['f', false],
  ])('%p checking for different registers', (letter, result) =>
    expect(checkUppercase(letter)).toBe(result)
  );
});
