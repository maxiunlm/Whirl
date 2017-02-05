/* global actions */

import React, { Component } from 'react';
import './UserSpaceShip.css';

class UserSpaceShip extends Component {
    constructor(props) {
        super(props);

        this.height = 70;
        this.width = 40;
        this.movingShipInterval = undefined;
        this.ellipseShipPath = {
            centerX: Math.floor((props.gameWidth - this.width) / 2),
            deltaA: -100,
            deltaB: 100,
            centerY: Math.floor((props.gameHeight - this.height) / 2),
            radius: props.gameHeight * 0.54,
            angle: 0
        };
        this.top = this.ellipseShipPath.centerY + ((this.ellipseShipPath.radius + this.ellipseShipPath.deltaA) * Math.cos(this.ellipseShipPath.angle));
        this.left = this.ellipseShipPath.centerX - this.width / 2 + ((this.ellipseShipPath.radius + this.ellipseShipPath.deltaB) * Math.sin(this.ellipseShipPath.angle));
        this.state = {
            style: {
                width: this.width,
                height: this.height,
                top: this.top,
                left: this.left
            }
        };
    }

    moveToLeft() {
        this.setState({
            style: {
                width: this.width,
                height: this.height,
                top: this.top,
                left: this.state.style.left - 100
            }
        });
    }
    
    componentDidMount() {        
        this.props.actions.moveUserSpaceShipToLeft = this.moveToLeft.bind(this);
    }

    render() {
        return (
                <img id="userSpaceShip" src="/images/UserSpaceShip.png" alt="A" className="userSpaceShip" style={this.state.style}></img>
                );
    }
}
;

export default UserSpaceShip;


