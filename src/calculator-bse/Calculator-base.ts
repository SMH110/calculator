import * as React from "react";

export default class CalculatorBase extends React.Component<any> {
  public add(a: number, b: number): number {
    let decimalSize = this.getDecimalSize(a, b);

    return this.format(a + b, decimalSize);
  }

  private format(n: number, d: number) {
    let x = Number(1 + "0".repeat(d));

    return Math.round(n * x) / x;
  }

  public getDecimalSize(...numbers) {
    let x = numbers
      .map(x => String(x))
      .map(x => x.split("."))
      .map(x => x[1])
      .filter(x => !!x)
      .map(x => x.length);

    return Math.max(...x, 1);
  }
}
