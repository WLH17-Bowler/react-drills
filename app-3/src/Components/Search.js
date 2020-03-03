import React, {Component} from 'react'

export default class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputFilter: '',
            cities: ["Porto Alegre, BR", "North Shore, HI", "New York City, NY", "Banff, CA", "Jackson, WY", "Las Vegas, NV", "Salt Lake City, UT"]
        }
    }
    handleChange = (filter) => {
        this.setState({inputFilter: filter})
    }
    render() {
        let list = this.state.cities.filter((element, index) => {
            return element.includes(this.state.inputFilter)
        }).map((element, index) => {
            return <h3 key={index} > {element} </h3>
        })
        return (
            <div>
                {/* <input type='text' id='text-box' placeholder='search' onChange={(e) => this.handleChange(e.target.value)} />
                {this.state.cities.map((element, index) => {
                    return <h3 key={index}> {element} </h3>
                })} */}
                <input id='text-box' type='text' placeholder='search' onChange={(e) => this.handleChange(e.target.value)} />
                {list}

            </div>
        )
    }
}