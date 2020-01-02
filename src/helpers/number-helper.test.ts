import { getDecimalSize, format } from "./number-helper";

it("Should get numbers heights decimal size as expected (example 1)", () => {
  let max = getDecimalSize(1, 2, 3.5);
  expect(max).toBe(1);
});

it("Should get numbers heights decimal size as expected (example 2)", () => {
  let max = getDecimalSize(1.55, 1.666, 1.77);
  expect(max).toBe(3);
});

it("Should get numbers heights decimal size as expected (example 3)", () => {
  let max = getDecimalSize(1, 2, 3);
  expect(max).toBe(1);
});

//   Format Numbers
it("Should format decimal numbers as expected", () => {
  let formatted = format(4.5556, 3);
  expect(formatted).toBe(4.556);
});
