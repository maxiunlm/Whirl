/* global actions */

import React, { Component } from 'react';
import './UserSpaceShip.css';
import UserSpaceShipMaths from '../../maths/UserSpaceShip/UserSpaceShipMaths';

class UserSpaceShip extends Component {
    constructor(props) {
        super(props);

        this.movingShipInterval = undefined;
        this.maths = new UserSpaceShipMaths(props);
        this.state = {
            style: {
                width: this.maths.getWidth(),
                height: this.maths.getHeight(),
                top: this.maths.getTop(),
                left: this.maths.getLeft()
            }
        };
    }

    moveToLeft() {
        this.setState({
            style: {
                width: this.maths.geometry.width,
                height: this.maths.geometry.height,
                top: this.maths.getTop(),
                left: this.maths.getLeft() - 100
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


