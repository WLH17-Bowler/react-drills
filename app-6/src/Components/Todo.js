import React, {Component} from 'react'

export default class Todo extends Component {
    state = {
        input: '',
        list: []
    }
    handleChange = (val) => {
        this.setState({input: val})
    }
    handleClick = () => {
        let newTask = this.state.input
        this.setState({
            list: [...this.state.list, newTask],
            input: ""
        }, () => console.log(this.state.list))
    }
    render() {
        const {input} = this.state
        let taskList = this.state.list.map((element, index) => {
        return <h3 key={index}> {element} </h3>
        })
        return (
            <div>
                <input value={input} placeholder='enter task' onChange={(e) => this.handleChange(e.target.value)} />
                {/* <button onClick={() => this.handleClick()}> Add Task </button> */}
                <button onClick={this.handleClick}> Add Task </button>
                {taskList}
            </div>
        )
    }
}