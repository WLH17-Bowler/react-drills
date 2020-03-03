import React, {Component} from 'react'
import NewTask from './NewTask'

export default class List extends Component {
    state = {
        list: []
    }
    addTask = (newTask) => {
        this.setState({
            list: [...this.state.list, newTask]
        })
    }    
    render() {
        let taskItem = this.state.list.map((element, index) => {
            return <h3 key={index} > {element} </h3>
        })
        return (
            <div>
                <NewTask addTask={this.addTask} />
                {taskItem}
            </div>
        )
    }
}