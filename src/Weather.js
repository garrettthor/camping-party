import React, { Component } from 'react';
import './Weather.css';

class Weather extends Component {
    constructor(props){
        super(props)
        this.state = {

        };
    }

    render() {
        return(
            <div className="Weather">
                <h2>Current Weather for LOCATION</h2>
                {/* API data for 5 day forecast */}

            </div>
        );
    }
}

export default Weather;