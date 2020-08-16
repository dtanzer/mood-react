import React from 'react';
import { Hello } from './Hello';
import './App.css';
import { ToolbarButton, ToolbarButtonClass, Toolbar } from './ToolbarButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hello defaultGreeting="React"/>
        <Toolbar showLabels={true}>
          <ToolbarButton text="func" />
          <ToolbarButtonClass text="class" />
        </Toolbar>
      </header>
    </div>
  );
}

export default App;
