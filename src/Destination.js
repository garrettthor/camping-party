import React, { Component } from 'react'
import './Destination.css';

class Destination extends Component {
    constructor(props){
        super(props)
        this.state ={

        };
    }

    render() {
        let destMapUrl = `https://www.google.com/maps/embed/v1/place?q=${this.props.destination}&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8`
        return(
            <div className="Destination">
                <div className="Destination-Header-Bar">
                    <button id="Destination-Edit-Btn">Edit</button>
                </div>
                
                <div className="Destination-Container">
                    <div className="Destination-Text">
                        <h1>{this.props.destination}</h1>
                        <h3>Departure: {this.props.dptr}</h3><h3>Return: {this.props.rtn}</h3>
                    </div>
                    
                    {/* Add google map mini map - adjust right? */}
                    <div className="Destination-Map">
                        <div id="embeddedmap-display">
                            <iframe frameborder="0" src={destMapUrl}></iframe>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Destination;