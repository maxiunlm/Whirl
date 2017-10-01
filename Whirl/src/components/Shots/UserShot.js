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
                
        if(!!props.position) {
            this.state.style = {
                top: props.position.top,//??? Exception ???!!!
                left: props.position.left
            };
        }
    }
    
    setPosition(position){
        this.position = position;
    }
    
    getNewShotMaths () {
        return this.ioc.getInstanceOf('shotMathsKey');
    }

    startShotting() {
        this.shotInterval = setInterval(this.doShot.bind(this), this.movementInterval);
    }
    
    doShot() {
        let position = this.maths.moveToNextEllipticalPosition();
        this.setState({
            style: {
                top: position.top,
                left: position.left
            }
        });
    }
    
    componentDidMount(){ // TODO: TDD !!!!!!!!!!!!!!!
        this.startShotting();
    }

    render() {
        return (
                <img className="userShot"  src={this.state.image} alt="." className="userShot" style={this.state.style} />
                );
    }
}

export default UserShot;
