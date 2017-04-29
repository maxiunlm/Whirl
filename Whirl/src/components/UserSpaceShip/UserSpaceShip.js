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
        let position = this.maths.moveToNextLeftEllipticalPosition();
        let rotation = this.maths.getRotation();
        
        this.setState({
            style: {
                width: this.maths.getWidth(),
                height: this.maths.getHeight(),
                top: position.top,
                left: position.left,
                transform: `rotate(${rotation}deg)`
            }
        });
    }
    
    moveToRight() {
        let position = this.maths.moveToNextRightEllipticalPosition();
        let rotation = this.maths.getRotation();
        
        this.setState({
            style: {
                width: this.maths.getWidth(),
                height: this.maths.getHeight(),
                top: position.top,
                left: position.left,
                transform: `rotate(${rotation}deg)`
            }
        });
    }
    
    componentDidMount() {
        this.props.actions.moveUserSpaceShipToLeft = this.moveToLeft.bind(this);
        this.props.actions.moveUserSpaceShipToRight = this.moveToRight.bind(this);
    }

    render() {
        return (
                <img id="userSpaceShip" src="/images/UserSpaceShip.png" alt="A" className="userSpaceShip" style={this.state.style}></img>
                );
    }
}

export default UserSpaceShip;


