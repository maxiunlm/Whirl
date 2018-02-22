import IoC4Javascript from '../../../src/apis/ioc4javascript';
import React, { Component } from 'react';
import './UserShot.css';

class UserShot extends Component {
    constructor(props) {
        super(props);
        
        this.ioc = new IoC4Javascript();
        this.maths = this.getNewShotMaths();
        this.movementInterval = 0.04;        
        this.state = {
            image: '/images/userShot.png'
        };
                
        //    throw '-' + JSON.stringify(props.shot) + '-';
        if(!!props.shot) {            
            this.maths.setAngle(props.shot.angle);
            let style = {
                top: props.shot.top,
                left: props.shot.left
            };
                        
            this.state.style = style;
        }
    }
    
    getDimensions () {
        return this.ioc.getInstanceOf('dimensionsKey');
    }
    
    getNewShotMaths () {
        return this.ioc.getInstanceOf('shotMathsKey');
    }

    startShotting() {
        this.shotInterval = setInterval(this.doShot.bind(this), this.movementInterval);
    }

    stopShotting() {
        clearInterval(this.shotInterval);
    }
    
    doShot() {
        let position = this.maths.moveToNextEllipticalPosition();
        
        // TODO: si la postion esta cerca del centro:
        // this.props.actions.stopShotting(this);
        
        this.setState({
            style: {
                top: position.top,
                left: position.left
            }
        });
    }
    
    componentDidMount() {
        this.startShotting();
        // REVISAR ??? -> this.props.actions.stopShotting = this.stopShotting.bind(this);
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
