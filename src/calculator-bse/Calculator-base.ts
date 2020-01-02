import * as React from "react";
import { getDecimalSize, format } from "../helpers/number-helper";

export default class CalculatorBase extends React.Component<any> {
  public add(a: number, b: number): number {
    let decimalSize = getDecimalSize(a, b);

    return format(a + b, decimalSize);
  }

  public subtract(a: number, b: number): number {
    let decimalSize = getDecimalSize(a, b);
    return format(a - b, decimalSize);
  }

  public multiple(a: number, b: number): number {
    let decimalSize = getDecimalSize(a, b);
    return format(a * b, decimalSize);
  }

  public divide(a: number, b: number): number {
    let result = a / b;
    result = Number.isFinite(result) ? result : 0;

    return result;
  }
}
