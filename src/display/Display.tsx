import * as React from 'react';
import './Display.css'
export interface IDisplay {
    text: string;
}

export default class Display extends React.Component<IDisplay> {
    constructor(public props:IDisplay ){
        super(props)
    }

  public render() {
    return (
      <div className="display">
        <span className="result">{this.props.text}</span>
      </div>
    );
  }
}
