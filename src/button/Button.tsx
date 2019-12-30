import * as React from 'react';
import './Button.css';

export interface IButtonProps {
    name: string;
    value: string;
    cssClass? : string;
}

export default class Button extends React.Component<IButtonProps> {
    constructor(public props: IButtonProps){
        super(props);
    }
  public render() {
    return (
    <button className={this.props.cssClass + " calc-button"}>{this.props.name}</button>
    );
  }
}
