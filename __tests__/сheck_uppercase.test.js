const checkUppercase = require('../src/helpers/check_uppercase');

describe('checkUppercase', () => {
  test.each([
    ['AAA', 'Entered incorrect data'],
    ['fff', 'Entered incorrect data'],
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
