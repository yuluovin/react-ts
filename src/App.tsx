import React from 'react';
import './App.css';
import Hello from './components/Hello'

function App() {
  return (
    <div className="App">
      <Hello name="Typescript" enthusiasmLevel={3} />
    </div>
  );
}

export default App;
