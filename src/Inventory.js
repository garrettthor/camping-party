import React, { Component } from 'react'
import './Inventory.css';

class Inventory extends Component {
    constructor(props) {
        super(props)
        this.state = {

        };
    }

    render() {
        return (
            <div className="Inventory">
                <h2>Camping Gear</h2>
                {/* Each item should be a Component */}
                {/* two sides - still needed/unclaimed and fulfilled */}
                    <div className="Inventory-Total-List">
                        <h3>Total List</h3>
                        <ul>
                            <li>Beef Jerk</li>
                            <li>Tent</li>
                            <li>Poop shovel</li>
                            <li>Tarp</li>
                            <li>Whiskey</li>
                            <li>Lighter</li>
                            <li>Socks</li>
                            <li>Fire Starters</li>
                        </ul>
                    </div>
                    <div className="Inventory-Fulfilled-List">
                        <h3>Already got it!</h3>
                        <ul>
                            <li>Meat Tenderizer</li>
                            <li>Vegan Macaroni</li>
                            <li>Coffee packets</li>
                            <li>Mushrooms</li>
                            <li>Cigarettes</li>
                            <li>Ill intent</li>
                            <li>Hammock</li>
                        </ul>
                    </div>
            </div>
        );
    }
}

export default Inventory;