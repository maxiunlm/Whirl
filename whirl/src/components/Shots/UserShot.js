import IoC4Javascript from '../../../src/apis/ioc4javascript';
import React, { Component } from 'react';
import './UserShot.css';

class UserShot extends Component {
    constructor(props) {
        super(props);
        
        this.ioc = new IoC4Javascript();
        this.maths = this.getNewShotMaths();
        this.dimensions = this.getDimensions();
        this.movementInterval = 0.04;
        this.actions = props.actions;
        this.state = {
            image: '/images/userShoot.png'
        };
                
        if(!!props.shot) {            
            this.maths.setAngle(props.shot.angle);
            let style = {
                top: props.shot.top,
                left: props.shot.left
            };
            
            this.state.style = style;
        }
    }
    
    getNewShotMaths () {
        return this.ioc.getInstanceOf('shotMathsKey');
    }
    
    getDimensions() {
        return this.ioc.getInstanceOf('dimensionsKey');
    }

    startShotting() {
        this.shotInterval = setInterval(this.doShot.bind(this), this.movementInterval);
    }

    stopShotting() {
        clearInterval(this.shotInterval);
    }
    
    doShot() {
        let position = this.maths.moveToNextEllipticalPosition();
        this.setState({
            style: {
                top: position.top,
                left: position.left
            }
        });
        
        if(position.top < this.dimensions.centerY + 10 // TODO: hacer método dimsnsions.isCloseToCenterScreenPoint(point)
            && position.top > this.dimensions.centerY - 10
            && position.left < this.dimensions.centerX + 10
            && position.left > this.dimensions.centerX - 10) {
            this.actions.stopShotting();
        }
    }
    
    componentDidMount() {
        this.startShotting();
    }
    
    componentWillUnmount() {
        this.stopShotting();
    }

    render() {
        return (
                <img className="userShot"  src={this.state.image} alt="." className="userShot" style={this.state.style} />
                );
    }
}

export default UserShot;
