import CalculatorBase from "./Calculator-base";

// Add -----------------------
it("Should add numbers as expected", () => {
  let calc = new CalculatorBase(null);

  let result = calc.add(1, 2);
  expect(result).toBe(3);
});

it("Should add decimal numbers as expected", () => {
  let calc = new CalculatorBase(null);

  let result = calc.add(0.2, 0.1);
  expect(result).toBe(0.3);
});

//   Subtract -----------------------
it("Should be able to perform subtraction operation as expected", () => {
  let calc = new CalculatorBase(null);
  let result = calc.subtract(2, 1);
  expect(result).toBe(1);
});

it("Should be able to perform subtraction operation as expected (decimal numbers)", () => {
  let calc = new CalculatorBase(null);
  let result = calc.subtract(2.5, 1.2);
  expect(result).toBe(1.3);
});

// Multiple -----------------------
it("Should be able to perform multiplications operation as expected", () => {
  let calc = new CalculatorBase(null);
  let result = calc.multiple(2, 2);
  expect(result).toBe(4);
});

it("Should be able to perform multiplications operation as expected (Decimals)", () => {
  let calc = new CalculatorBase(null);
  let result = calc.multiple(94, 0.16);
  expect(result).toBe(15.04);
});

it("Should be able to perform multiplications operation as expected (Decimals)", () => {
    let calc = new CalculatorBase(null);
    let result = calc.multiple(33.33,3);
    expect(result).toBe(99.99);
  });

// division -----------------------

it("Should be able to perform division operation as expected", () => {
  let calc = new CalculatorBase(null);
  let result = calc.divide(6, 2);
  expect(result).toBe(3);
});

it("Should  handle division by zero as expected", () => {
  let calc = new CalculatorBase(null);
  let result = calc.divide(6, 0);
  expect(result).toBe(0);
});

