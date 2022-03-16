import React, { Component } from "react";


class PersonCard extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            age: this.props.age
        }
    }

    IncreaseAge = () => {
        this.setState({age: this.state.age +1})
    }

    render(){
        return (
            <div>
                <h1>{this.props.lastName}, {this.props.firstName}</h1>
                <p>Age: {this.state.age}</p>
                <p>HairColor: {this.props.hairColor}</p>
                <button onClick={this.IncreaseAge}>Birthday Button for {this.props.firstName} {this.props.lastName} </button>
            </div>
        )            
    }
}

export default PersonCard;

