function soma(a, b) {
  return a + b;
}

test('verify if return of function soma is equal to 9', () => {
  const result = soma(4, 5);

  expect(result).toBe(9);
});
