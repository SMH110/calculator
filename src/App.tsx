import React from 'react';
import './App.css';
import Button from './button/Button';

const App: React.FC = () => {
  return (
    <div className="App">
    <Button cssClass="seven"  name="7" value="7"/>
    <Button cssClass="eight" name="8" value="8"/>
    <Button cssClass="nine"  name="9" value="9"/>
    <Button  cssClass="multiply" name="&times;" value="x"/>
    </div>
  );
}

export default App;
