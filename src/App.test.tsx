import React from "react";
import { render, act } from "@testing-library/react";
import Calculator from "./App";
import { unmountComponentAtNode } from "react-dom";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  // container *must* be attached to document so events work correctly.
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("Should be able to perform sum operation", () => {
  act(() => {
    render(<Calculator />, container);
  });

  let seven = document.getElementsByClassName("seven")[0];
  seven.dispatchEvent(new Event("click", { bubbles: true }));

  let plus = document.getElementsByClassName("plus")[0];
  plus.dispatchEvent(new Event("click", { bubbles: true }));

  let nine = document.getElementsByClassName("nine")[0];
  nine.dispatchEvent(new Event("click", { bubbles: true }));

  let equal = document.getElementsByClassName("equal")[0];
  equal.dispatchEvent(new Event("click", { bubbles: true }));

  let result = document.querySelector(".display .result") as HTMLElement;
  expect(result.innerHTML).toBe("16");
});

it("Should evaluate possible active operation before setting an operation", () => {
  act(() => {
    render(<Calculator />, container);
  });

  // 9 + 9 +
  let nine = document.getElementsByClassName("nine")[0];
  let plus = document.getElementsByClassName("plus")[0];

  nine.dispatchEvent(new Event("click", { bubbles: true }));
  plus.dispatchEvent(new Event("click", { bubbles: true }));
  nine.dispatchEvent(new Event("click", { bubbles: true }));
  plus.dispatchEvent(new Event("click", { bubbles: true }));

  let result = document.querySelector(".display .result") as HTMLElement;
  expect(result.innerHTML).toBe("18");

  // add another 9 then press on +
  nine.dispatchEvent(new Event("click", { bubbles: true }));
  plus.dispatchEvent(new Event("click", { bubbles: true }));
  result = document.querySelector(".display .result") as HTMLElement;
  expect(result.innerHTML).toBe("27");
});

it("Should be able to use decimal numbers in operations", () => {
  act(() => {
    render(<Calculator />, container);
  });
  let one = document.getElementsByClassName("one")[0];
  let dot = document.getElementsByClassName("dot")[0];
  one.dispatchEvent(new Event("click", { bubbles: true }));
  dot.dispatchEvent(new Event("click", { bubbles: true }));
  one.dispatchEvent(new Event("click", { bubbles: true }));

  let result = document.querySelector(".display .result") as HTMLElement;
  expect(result.innerHTML).toBe("1.1");
});

// Clear button

it("should be able to clear", () => {
  act(() => {
    render(<Calculator />, container);
  });
  let one = document.getElementsByClassName("one")[0];
  let clear = document.getElementsByClassName("clear")[0];
  one.dispatchEvent(new Event("click", { bubbles: true }));
  clear.dispatchEvent(new Event("click", { bubbles: true }));

  let result = document.querySelector(".display .result") as HTMLElement;
  expect(result.innerHTML).toBe("0");
});

// toggle negative sign

it("Should be able to convert number to negative", () => {
  act(() => {
    render(<Calculator />, container);
  });
  let one = document.getElementsByClassName("one")[0];
  let plushMinus = document.getElementsByClassName("plus-minus")[0];
  one.dispatchEvent(new Event("click", { bubbles: true }));
  plushMinus.dispatchEvent(new Event("click", { bubbles: true }));
  let result = document.querySelector(".display .result") as HTMLElement;
  expect(result.innerHTML).toBe("-1");

  plushMinus.dispatchEvent(new Event("click", { bubbles: true }));
  result = document.querySelector(".display .result") as HTMLElement;
  expect(result.innerHTML).toBe("1");
});

it("Should be able to perform subtraction operation", () => {
  act(() => {
    render(<Calculator />, container);
  });

  let seven = document.getElementsByClassName("seven")[0];
  seven.dispatchEvent(new Event("click", { bubbles: true }));

  let minus = document.getElementsByClassName("minus")[0];
  minus.dispatchEvent(new Event("click", { bubbles: true }));

  let two = document.getElementsByClassName("two")[0];
  two.dispatchEvent(new Event("click", { bubbles: true }));

  let equal = document.getElementsByClassName("equal")[0];
  equal.dispatchEvent(new Event("click", { bubbles: true }));

  let result = document.querySelector(".display .result") as HTMLElement;
  expect(result.innerHTML).toBe("5");
});

it("Should be able to perform multiplication operation", () => {
  act(() => {
    render(<Calculator />, container);
  });
  let two = document.getElementsByClassName("two")[0];
  let seven = document.getElementsByClassName("seven")[0];
  seven.dispatchEvent(new Event("click", { bubbles: true }));

  let multiply = document.getElementsByClassName("multiply")[0];
  multiply.dispatchEvent(new Event("click", { bubbles: true }));

  two.dispatchEvent(new Event("click", { bubbles: true }));

  let equal = document.getElementsByClassName("equal")[0];
  equal.dispatchEvent(new Event("click", { bubbles: true }));

  let result = document.querySelector(".display .result") as HTMLElement;
  expect(result.innerHTML).toBe("14");
});

it("Should be able to perform division operation", () => {
  act(() => {
    render(<Calculator />, container);
  });
  let two = document.getElementsByClassName("two")[0];
  let seven = document.getElementsByClassName("seven")[0];
  seven.dispatchEvent(new Event("click", { bubbles: true }));

  let divide = document.getElementsByClassName("divide")[0];
  divide.dispatchEvent(new Event("click", { bubbles: true }));

  two.dispatchEvent(new Event("click", { bubbles: true }));

  let equal = document.getElementsByClassName("equal")[0];
  equal.dispatchEvent(new Event("click", { bubbles: true }));

  let result = document.querySelector(".display .result") as HTMLElement;
  expect(result.innerHTML).toBe("3.5");
});



it('Should be able to perform complicated operation', ()=>{
  act(() => {
    render(<Calculator />, container);
  });
  
  // 2 * 2 * 2 + 7 - 1 / 6
  let one = document.getElementsByClassName("one")[0];
  let two = document.getElementsByClassName("two")[0];
  let six = document.getElementsByClassName("six")[0];
  let seven = document.getElementsByClassName("seven")[0];
  let multiply = document.getElementsByClassName("multiply")[0];
  let divide = document.getElementsByClassName("divide")[0];
  let equal = document.getElementsByClassName("equal")[0];
  let minus = document.getElementsByClassName("minus")[0];
  let plus = document.getElementsByClassName("plus")[0];
 
  two.dispatchEvent(new Event("click", { bubbles: true }));
  multiply.dispatchEvent(new Event("click", { bubbles: true }));
  two.dispatchEvent(new Event("click", { bubbles: true }));
  multiply.dispatchEvent(new Event("click", { bubbles: true }));
  two.dispatchEvent(new Event("click", { bubbles: true }));


  
  plus.dispatchEvent(new Event("click", { bubbles: true }));
  seven.dispatchEvent(new Event("click", { bubbles: true }));
  
  
  minus.dispatchEvent(new Event("click", { bubbles: true }));
  one.dispatchEvent(new Event("click", { bubbles: true }));

  divide.dispatchEvent(new Event("click", { bubbles: true }));
  six.dispatchEvent(new Event("click", { bubbles: true }));


  equal.dispatchEvent(new Event("click", { bubbles: true }));

  let result = document.querySelector(".display .result") as HTMLElement;
  expect(result.innerHTML).toContain("2.3333333");


})
