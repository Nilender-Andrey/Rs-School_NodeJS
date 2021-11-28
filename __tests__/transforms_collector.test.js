const transformsCollector = require('../src/helpers/transforms_collector');

describe('transformsCollector', () => {
  test('check return type', () =>
    expect(transformsCollector(['C1', 'C0', 'A', 'R1'])).toBeInstanceOf(Array));

  test('check the length of the return value', () =>
    expect(transformsCollector(['C1', 'C0', 'A', 'R1', 'R0']).length).toBe(5));

  test('check return type', () =>
    expect(Array.isArray(transformsCollector(['C1']))).toBeTruthy());
});
