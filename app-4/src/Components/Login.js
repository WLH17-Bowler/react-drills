import React, {Component} from 'react'

export default class Login extends Component {
    state = {
        username: '',
        password: ''
    }
    handleUsernameChange = (val) => {
        this.setState({username: val})
    }
    handlePasswordChange = (pass) => {
        this.setState({password: pass})
    }
    handleClick = () => {
        this.setState({
            username: "",
            password: ""
        })
        alert(`Username: ${this.state.username} Password: ${this.state.password}`)
    }
    render() {
        const {username, password} = this.state
        return (
            <div id='main'>
                <input placeholder='username' onChange={(e) => this.handleUsernameChange(e.target.value)} value={username} />
                <input placeholder='password' onChange={(e) => this.handlePasswordChange(e.target.value)} value={password} />
                <button  onClick={this.handleClick}> Login </button>
            </div>
        )
    }
}