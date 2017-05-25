/* global actions */

import React, { Component } from 'react';
import IoC4Javascript from '../../apis/ioc4javascript';
import './UserSpaceShip.css';

class UserSpaceShip extends Component {
    constructor(props) {
        super(props);
        
        this.ioc = new IoC4Javascript();
        this.maths = this.getNewUserSpaceShipMaths();
        this.movementInterval = 0.04;
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
    
    getNewUserSpaceShipMaths() {
        return this.ioc.getInstanceOf('userSpaceShipMathsKey');
    }

    startMovingToLeft(event) {
        this.stopMoving();
        this.setState({
            image: this.state.images.toLeft
        });
        
        let moveToLeftEvent = this.moveToLeft.bind(this);

        this.movementToLeftInterval = setInterval(moveToLeftEvent, this.movementInterval);

        if (!!event && !!event.preventDefault) {
            event.preventDefault(); // prevent the default action (scroll / move caret)
        }
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

    startMovingToRight(event) {
        this.stopMoving();
        this.setState({
            image: this.state.images.toRight
        });
        
        let moveToRightEvent = this.moveToRight.bind(this);

        this.movementToRightInterval = setInterval(moveToRightEvent, this.movementInterval);

        if (!!event && !!event.preventDefault) {
            event.preventDefault(); // prevent the default action (scroll / move caret)
        }
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
    
    stopMoving() {
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
        this.props.actions.stopMovingUserSpaceShip = this.stopMoving.bind(this);
    }

    render() {
        return (
                <img id="userSpaceShip" src={this.state.image} alt="A" className="userSpaceShip" style={this.state.style}></img>
            );
    }
}

export default UserSpaceShip;


