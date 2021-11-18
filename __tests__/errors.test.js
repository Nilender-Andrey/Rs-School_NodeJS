const { ValidationError } = require('../my_errors/errors');

describe('error', () => {
  test('check return type', () =>
    expect(typeof new ValidationError()).toBe('object'));
});
