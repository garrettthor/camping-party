import React, { Component } from 'react';
import './Dashboard.css';
import CampingGroup from './CampingGroup.js';
import Inventory from './Inventory.js';
import Weather from './Weather.js';
import Destination from './Destination.js';

class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    };

    render() {
        return(
            <div className="Dashboard">
                <h1>Welcome to Camping Party!</h1>
                <Destination />
                <div className="Dashboard-Container">
                <div className="Dashboard-Left">
                    <CampingGroup />
                    <Weather />
                </div>
                <div className="Dashboard-Right">
                <Inventory />
                </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;