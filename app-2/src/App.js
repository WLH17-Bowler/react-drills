import React from 'react';
import List from './Components/List'
import './App.css';

function App() {
  return (
    <div className="App">
      <header> React Drills #2 </header>
        <div id='main'>
        <h1> Destinations </h1>
          <List  />
        </div>
    </div>
  );
}

export default App;
