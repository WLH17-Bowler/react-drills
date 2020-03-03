import React, {Component} from 'react'
import './App.css'

export default class App extends Component {
  state = {
    input: ''
  }
  inputChange = (val) => {
    this.setState({input: val})
  }
  render() {
    return (
      <div>
        <header> React Drills #1 </header>
        <div>
          <div id='main'>
            <input placeholder='Type Here' id='text-box' onChange={(e) => this.inputChange(e.target.value)} />
            {this.state.input}
          </div>
        </div>
      </div>
    )
  }
}