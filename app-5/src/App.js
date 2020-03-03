import React from 'react'
import Picture from './Components/Picture'
import './App.css'
import logo from './phillies.png'

const App = () => {
  return (
    <div className="App">
      <header> React Drills #5 </header>
      <div id='main'>
        <Picture phillies={logo} />
      </div>
    </div>
  )
}
export default App;