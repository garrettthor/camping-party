import React, { Component } from 'react';
import './NavBar.css';

class NavBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }

    render(){
        return(
            <div className="NavBar">
                <div className="NavBar-Logo">
                    <h1>CAMPARTY</h1>
                </div>
                <div>
                    <ul>
                        <li>Home</li>
                        <li>User</li>
                        <li>Search</li>
                        <li>Logout</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default NavBar;