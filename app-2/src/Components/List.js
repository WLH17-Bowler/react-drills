import React, {Component} from 'react'

export default class List extends Component {
    state = {
        cities: ["Porto Alegre, BR", "North Shore, HI", "New York City, NY", "Banff, CA", "Jackson, WY", "Las Vegas, NV", "Salt Lake City, UT"]
    }
    render() {
        return (
            <div>
                {this.state.cities.map((element, index) => {
                    return <h3> <ul key={index}  > {element} </ul> </h3>
                })}
            </div>
        )
    }
}