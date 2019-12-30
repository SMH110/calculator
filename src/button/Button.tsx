import * as React from "react";
import "./Button.css";

export interface IButtonProps {
  name: string;
  value: string;
  cssClass?: string;
  onClick: Function;
}

export default class Button extends React.Component<IButtonProps> {

  onClick = (event)=>{
    this.props.onClick(this.props.value);
  }
  constructor(public props: IButtonProps) {
    super(props);
  }
  public render() {
    return <button onClick={this.onClick} className={this.props.cssClass + " calc-button"}>{this.props.name}</button>;
  }
}
