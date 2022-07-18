import React from 'react';
import logo from './logo.svg';
import './App.css';
import Alarm from './ui/components/Alarm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Alarm</h3>
        <Alarm />
      </header>
    </div>
  );
}

export default App;
