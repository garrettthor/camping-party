import React, { Component } from 'react'
import './Inventory.css';

class Inventory extends Component {
    constructor(props) {
        super(props)
        this.state = {
            expanded: false
        };
        this.expand = this.expand.bind(this)

    }

    expand() {
        console.log(this.state.expanded)
        if (!this.state.expanded) {
            document.querySelector('.Inventory').style = 'overflow: visible;';
            document.querySelector('.Inventory').style = 'height: auto;';
            (this.setState({expanded: true}))
            console.log('Expanded')
        } else {
            document.querySelector('.Inventory').style = 'overflow: hidden;'
            document.querySelector('.Inventory').style = 'height: 22em;'
            this.setState({expanded: false})
            console.log('Collapsed')
        }
    }

    render() {
        return (
            <div className="Inventory">
                <div className="Inventory-Header-Bar">
                    <button className="btn" id="Inventory-Expand-Btn" onClick={this.expand}>...</button>
                    <button className="btn" id="Inventory-Add-Btn">+</button>
                </div>
                <h2>Inventory</h2>
                
                {/* Each item should be a Component */}
                {/* two sides - still needed/unclaimed and fulfilled */}
                <div className="Inventory-List-Container">
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
                            <li>Fire Starters</li>
                            <li>Fire Starters</li>
                            <li>Fire Starters</li>
                            <li>Fire Starters</li>
                            <li>Fire Starters</li>
                            <li>Fire Starters</li>
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
                    
            </div>
        );
    }
}

export default Inventory;