import React from "react";
import "./App.css";
import Button from "./button/Button";
import Display from "./display/Display";

class Calculator extends React.Component<any> {
  public state = {
    currentNumber: "0"
  };

  private previousNumber = null;

  public onNumberButtonClick(value) {
    if (this.state.currentNumber === "0") {
      this.setState({ currentNumber: value });
      return;
    }

    let current = this.state.currentNumber;
    this.setState({ currentNumber: current + value });
  }

  public onOperatorButtonClick(value) {
    console.log(value);
  }

  render() {
    return (
      <div className="App">
        <Display text={this.state.currentNumber} />
        <div className="buttons">
          <Button cssClass="seven" name="7" value="7" onClick={this.onNumberButtonClick.bind(this)} />
          <Button cssClass="eight" name="8" value="8" onClick={this.onNumberButtonClick.bind(this)} />
          <Button cssClass="nine" name="9" value="9" onClick={this.onNumberButtonClick.bind(this)} />
          <Button cssClass="multiply" name="&times;" value="x" onClick={this.onOperatorButtonClick} />
          <Button cssClass="plus" name="&#43;" value="+" onClick={this.onOperatorButtonClick} />
        </div>
      </div>
    );
  }
}

export default Calculator;
