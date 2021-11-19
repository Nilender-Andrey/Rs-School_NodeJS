const checkUppercase = require('../helpers/check_uppercase');

describe('checkUppercase', () => {
  test.each([
    ['AAA', new Error('Entered incorrect data')],
    ['fff', new Error('Entered incorrect data')],
  ])('check if the input is correct', (letter, result) =>
    expect(() => checkUppercase(letter)).toThrowError(result)
  );

  test.each([
    ['A', true],
    ['f', false],
  ])('check different registers', (letter, result) =>
    expect(checkUppercase(letter)).toBe(result)
  );
});
