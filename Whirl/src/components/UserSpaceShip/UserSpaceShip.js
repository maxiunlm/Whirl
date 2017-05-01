/* global actions */

import React, { Component } from 'react';
import './UserSpaceShip.css';
import UserSpaceShipMaths from '../../maths/UserSpaceShip/UserSpaceShipMaths';

class UserSpaceShip extends Component {
    constructor(props) {
        super(props);

        this.movementInterval = 0.04;
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

    stopMovingToLeft() {
        if(!!this.movementToLeftInterval) {
            clearInterval(this.movementToLeftInterval);
        }
    }

    startMovingToLeft() {
        let moveToLeftEvent = this.moveToLeft.bind(this);

        this.movementToLeftInterval = setInterval(moveToLeftEvent, this.movementInterval);
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

    stopMovingToRight() {
        if(!!this.movementToRightInterval) {
            clearInterval(this.movementToRightInterval);
        }
    }

    startMovingToRight() {
        let moveToRightEvent = this.moveToRight.bind(this);

        this.movementToRightInterval = setInterval(moveToRightEvent, this.movementInterval);
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
        this.props.actions.moveUserSpaceShipToLeft = this.startMovingToLeft.bind(this);
        this.props.actions.moveUserSpaceShipToRight = this.startMovingToRight.bind(this);
        this.props.actions.stopMovingUserSpaceShipToLeft = this.stopMovingToLeft.bind(this);
        this.props.actions.stopMovingUserSpaceShipToRight = this.stopMovingToRight.bind(this);
    }

    render() {
        return (
                <img id="userSpaceShip" src="/images/UserSpaceShip.png" alt="A" className="userSpaceShip" style={this.state.style}></img>
                );
    }
}

export default UserSpaceShip;


