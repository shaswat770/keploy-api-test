// tests/logic.test.js
const { isAdult } = require('../logic');

describe('isAdult function tests', () => {
  test('returns true for age 20', () => {
    expect(isAdult(20)).toBe(true);
  });

  test('returns false for age 15', () => {
    expect(isAdult(15)).toBe(false);
  });
});
