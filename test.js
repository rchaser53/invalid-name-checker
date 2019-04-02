describe('hello', () => {
  test('world', async () => {
    expect(0x01 << ~~(7 / 8)).toEqual(0x01);
  });
});