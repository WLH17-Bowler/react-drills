import React from 'react'
import Todo from './Components/Todo'
import './App.css'

const App = (props) => {
  return (
    <div>
      <header> React Drills #6 </header>
      <div id='main'>
      <Todo  />
      </div>
    </div>
  )
}
export default App