import IoC4Javascript from '../../../src/apis/ioc4javascript';
import React, { Component } from 'react';
import './UserShot.css';

class UserShot extends Component {
    constructor(props) {
        super(props);
        
        this.ioc = new IoC4Javascript();
        this.maths = this.ioc.getInstanceOf('shotMathsKey');
        this.movementInterval = 0.04;
        
        this.state = {
            image: '/images/userShot.png',
            style: {
                //width: this.maths.getWidth(),
                //height: this.maths.getHeight(),
                top: props.position.top,
                left: props.position.left
            }
        };
    }
    
    // TODO: TDD !!!! setInterval para animar el disparo, cambiando la Position del STATE !!!!!!!!!!!!!!!
    /*
    animate() {
        setInterval(function () {
            let position = this.moveToNextEllipticalPosition();
            this.state = {
                style: {
                    top: position.top,
                    left: position.left
                }
            }
        }.bind(this), this.movementInterval);
    }
     */

    render() {
        return (
                <img className="userShot"  src={this.state.image} alt="." className="userShot" style={this.state.style} />
                );
    }
}

export default UserShot;
