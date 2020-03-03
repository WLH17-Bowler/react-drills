import React, {Component} from 'react'

export default class NewTask extends Component {
    state = {
        input: ''
    }
    handleChange = (val) => {
        this.setState({input: val})
    }
    handleClick = () => {
        this.props.addTask(this.state.input)
        this.setState({input: ""})
    }
    render() {
        return (
            <div>
                <input onChange={(e) => this.handleChange(e.target.value)} value={this.state.input}  />
                <button onClick={this.handleClick} > Add Task </button>
            </div>
        )
    }
}