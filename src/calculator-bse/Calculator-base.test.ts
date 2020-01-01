import CalculatorBase from "./Calculator-base";

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


  it('Should get numbers heights decimal size as expected (example 1)', ()=>{
    let calc = new CalculatorBase(null);
    let max = calc.getDecimalSize(1,2, 3.5);
    expect(max).toBe(1)
  })

  
  it('Should get numbers heights decimal size as expected (example 2)', ()=>{
    let calc = new CalculatorBase(null);
    let max = calc.getDecimalSize(1.55, 1.666, 1.77);
    expect(max).toBe(3)
  })

  it('Should get numbers heights decimal size as expected (example 3)', ()=>{
    let calc = new CalculatorBase(null);
    let max = calc.getDecimalSize(1,2,3);
    expect(max).toBe(1)
  })
