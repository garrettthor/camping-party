import React, { Component } from 'react'
import './CampingGroup.css';

class CampingGroup extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render(){
        return(
            <div className="CampingGroup">
                <h2>Your Party</h2>
                {/* Loop over and display party members  */}
                <ul>
                    <li>Camp Leader</li>
                    <li>Camp Stoner</li>
                    <li>Camp Drunk</li>
                    <li>Camp Driver</li>
                    <li>Camp Firetender</li>
                    <li>Camp Idiot</li>
                </ul>
            </div>
        );
    }
}

export default CampingGroup;