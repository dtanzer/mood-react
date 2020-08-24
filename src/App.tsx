import React, { useState } from 'react';
import { Hello } from './Hello';
import './App.css';
import { ToolbarButton, ToolbarButtonClass, Toolbar } from './ToolbarButton';
import { JsComponent } from './JsButton';

function Inner(props: any) {
  return <button onClick={e => props.onInnerClicked() }>{props.someValue}</button>
}
function Outer() {
  const [val, setVal] = useState('concrete value')
  return <Inner onInnerClicked={() => setVal('clicked') } someValue={val} />
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hello defaultGreeting="React"/>
        <Toolbar showLabels={true}>
          <ToolbarButton text="func" />
          <ToolbarButtonClass text="class" />
        </Toolbar>

        <JsComponent text="js" icon="js" />
        <Outer/>
      </header>
    </div>
  );
}

export default App;
