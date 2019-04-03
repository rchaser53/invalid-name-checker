const generateHash = require("random-hash").generateHash;
const check = require("./index");

describe('hello', () => {
  test('world', async () => {
    
    expect(check(generateHash({ length: 4 }))).toBe(false)
    expect(check(generateHash({ length: 5 }))).toBe(false)
    expect(check(generateHash({ length: 6 }))).toBe(false)
    expect(check(generateHash({ length: 7 }))).toBe(false)
    expect(check(generateHash({ length: 8 }))).toBe(false)
    expect(check(generateHash({ length: 9 }))).toBe(true)
  });
});