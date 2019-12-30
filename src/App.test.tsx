import React from 'react';
import { render, act } from '@testing-library/react';
import App from './App';
import { unmountComponentAtNode } from 'react-dom';


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

it('Should be able to perform sum operation', ()=>{

  act(() => {
    render(<App />, container);
  });

  let seven = document.getElementsByClassName('seven')[0];
  seven.dispatchEvent(new Event('click', {bubbles: true}));

let plus = document.getElementsByClassName('plus')[0];
plus.dispatchEvent(new Event('click', {bubbles: true}));

  let nine = document.getElementsByClassName('nine')[0];
  nine.dispatchEvent(new Event('click', {bubbles: true}))

})