import React from 'react';
import { Hello } from './Hello';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hello defaultGreeting="React"/>
      </header>
    </div>
  );
}

export default App;
