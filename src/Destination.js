import React, { Component } from 'react'
import './Destination.css';

class Destination extends Component {
    constructor(props){
        super(props)
        this.state ={

        };
    }

    render() {
        return(
            <div className="Destination">
                <h1>Big Sur, California</h1>
                <h3>Departure: 9/5</h3><h3>Return: 9/14</h3>
            </div>
        );
    }
}

export default Destination;