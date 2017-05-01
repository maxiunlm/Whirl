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
            image: '/images/UserSpaceShipStopped.png',
            images: {
                stopped: '/images/UserSpaceShipStopped.png',
                toLeft: '/images/UserSpaceShipToLeft.png',
                toRight: '/images/UserSpaceShipToRight.png'
            },
            style: {
                width: this.maths.getWidth(),
                height: this.maths.getHeight(),
                top: this.maths.getTop(),
                left: this.maths.getLeft()
            }
        };
    }

    startMovingToLeft() {
        this.clearAllMovemnetIntervals();
        this.setState({
            image: this.state.images.toLeft
        });
        
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

    startMovingToRight() {
        this.clearAllMovemnetIntervals();
        this.setState({
            image: this.state.images.toRight
        });
        
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
    
    clearAllMovemnetIntervals() {
        this.stopMovingToLeft();
        this.stopMovingToRight();
    }

    stopMovingToRight() {
        if(!!this.movementToRightInterval) {
            clearInterval(this.movementToRightInterval);
            this.setState({
                image: this.state.images.stopped
            });
        }
    }

    stopMovingToLeft() {
        if(!!this.movementToLeftInterval) {
            clearInterval(this.movementToLeftInterval);
            this.setState({
                image: this.state.images.stopped
            });
        }
    }

    componentDidMount() {
        this.props.actions.moveUserSpaceShipToLeft = this.startMovingToLeft.bind(this);
        this.props.actions.moveUserSpaceShipToRight = this.startMovingToRight.bind(this);
        this.props.actions.stopMovingUserSpaceShipToLeft = this.stopMovingToLeft.bind(this);
        this.props.actions.stopMovingUserSpaceShipToRight = this.stopMovingToRight.bind(this);
    }

    render() {
        return (
                <img id="userSpaceShip" src={this.state.image} alt="A" className="userSpaceShip" style={this.state.style}></img>
            );
    }
}

export default UserSpaceShip;


