import React from "react";
import "./App.css";
import Button from "./button/Button";
import Display from "./display/Display";
import CalculatorBase from "./calculator-bse/Calculator-base";

class Calculator extends CalculatorBase {
  public state = {
    currentNumber: "0"
  };

  private previousNumber = null;
  private activeOperation = null;
  private lastButtonClicked = null;
  static readonly operations = ["x", "/", "+", "-"];

  public onNumberButtonClick(value) {
    if (this.state.currentNumber === "0") {
      this.setState({ currentNumber: value });
      this.lastButtonClicked = value;
      return;
    }

    let current = this.state.currentNumber;
    if (Calculator.operations.includes(this.lastButtonClicked) && current !== "0") {
      this.previousNumber = this.state.currentNumber;
      current = "";
    }

    if (this.lastButtonClicked === "=") {
      current = "";
    }

    this.setState({ currentNumber: current + value });
    this.lastButtonClicked = value;
  }

  public onOperatorButtonClick(value) {
    // eslint-disable-next-line
    if (
      this.previousNumber !== "0" &&
      this.previousNumber != null &&
      Calculator.operations.includes(this.activeOperation)
    ) {
      this.evaluate("=");
    }
    this.lastButtonClicked = value;
    this.activeOperation = value;
  }

  public onDotClick(value) {
    if (this.state.currentNumber.includes(".")) return;
    let current = this.state.currentNumber;
    this.setState({ currentNumber: current + value });
  }

  public evaluate(value) {
    // eslint-disable-next-line
    if (this.activeOperation == null || this.lastButtonClicked === "=") return;

    let a = parseFloat(this.state.currentNumber);
    let b = parseFloat(this.previousNumber);
    let result = 0;
    switch (this.activeOperation) {
      case "x":
        result = this.multiple(a, b);
        break;

      case "+":
        result = this.add(a, b);
        break;

      case "-":
        result = this.subtract(b, a);
        break;
      case "/":
        result = this.divide(b, a);
        break;

      default:
        throw new Error("Undefined operation");
    }

    result = result || 0; // void NaN;
    this.setState({ currentNumber: result.toString() });
    this.lastButtonClicked = value;
    this.activeOperation = null;
    this.previousNumber = null;
  }

  public clear() {
    this.activeOperation = null;
    this.previousNumber = null;
    this.lastButtonClicked = null;
    this.setState({ currentNumber: "0" });
  }

  public togglePositiveNegative() {
    if (Number.isNaN(parseFloat(this.lastButtonClicked))) return;

    let current = String(this.state.currentNumber);
    let isNegative = current.startsWith("-");
    current = isNegative ? current.replace("-", "") : "-" + current;

    this.setState({ currentNumber: current });
  }

  render() {
    return (
      <div className="App">
        <Display text={this.state.currentNumber} />
        <div className="buttons">
          <div className="row">
            <Button cssClass="seven" name="7" value="7" onClick={this.onNumberButtonClick.bind(this)} />
            <Button cssClass="eight" name="8" value="8" onClick={this.onNumberButtonClick.bind(this)} />
            <Button cssClass="nine" name="9" value="9" onClick={this.onNumberButtonClick.bind(this)} />
          </div>
          <div className="row">
            <Button cssClass="four" name="4" value="4" onClick={this.onNumberButtonClick.bind(this)} />
            <Button cssClass="five" name="5" value="5" onClick={this.onNumberButtonClick.bind(this)} />
            <Button cssClass="six" name="6" value="6" onClick={this.onNumberButtonClick.bind(this)} />
          </div>
          <div className="row">
            <Button cssClass="one" name="1" value="1" onClick={this.onNumberButtonClick.bind(this)} />
            <Button cssClass="two" name="2" value="2" onClick={this.onNumberButtonClick.bind(this)} />
            <Button cssClass="three" name="3" value="3" onClick={this.onNumberButtonClick.bind(this)} />
          </div>
          <div className="row">
            <Button cssClass="zero" name="0" value="0" onClick={this.onNumberButtonClick.bind(this)} />
            <Button cssClass="dot" name="." value="." onClick={this.onDotClick.bind(this)} />
            <Button
              cssClass="plus-minus"
              name="&plusmn;"
              value="+-"
              onClick={this.togglePositiveNegative.bind(this)}
            />
          </div>
          <div className="row">
            <Button
              cssClass="multiply"
              name="&times;"
              value="x"
              onClick={this.onOperatorButtonClick.bind(this)}
            />
            <Button cssClass="plus" name="&#43;" value="+" onClick={this.onOperatorButtonClick.bind(this)} />
            <Button
              cssClass="minus"
              name="&minus;"
              value="-"
              onClick={this.onOperatorButtonClick.bind(this)}
            />
          </div>
          <div className="row">
            <Button
              cssClass="divide"
              name="&divide;"
              value="/"
              onClick={this.onOperatorButtonClick.bind(this)}
            />
            <Button cssClass="equal" name="=" value="=" onClick={this.evaluate.bind(this)} />
            <Button cssClass="clear" name="Clear" value="clear" onClick={this.clear.bind(this)} />
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
