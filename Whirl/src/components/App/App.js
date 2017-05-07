import React, { Component } from 'react';
import './App.css';
import UserSpaceShip from '../UserSpaceShip/UserSpaceShip.js';
import LeftDirection from '../Buttons/LeftDirection.js';
import RightDirection from '../Buttons/RightDirection.js';

class App extends Component {
    constructor(props) {
        super(props);
        this.height = props.height;
        this.width = props.width;

        this.actions = {
            moveUserSpaceShipToLeft: () => {
            },
            moveUserSpaceShipToRight: () => {
            },
            stopMovingUserSpaceShipToLeft: () => {
            },
            stopMovingUserSpaceShipToRight: () => {
            },
            stopMovingUserSpaceShip: () => {
            }
        };
        
        this.spaceBarKeyCode = 32;
        this.leftKeyCode = 37;
        this.upKeyCode = 38;
        this.rightKeyCode = 39;
        this.downKeyCode = 40;
        
        document.onkeydown = this.catchKeyEvents;
        document.onkeyup = this.catchKeyUpEvent;
    }

    catchKeyUpEvent(event) {
        this.actions.stopMovingUserSpaceShip();
        
        if (!!event.preventDefault) {
            event.preventDefault(); // prevent the default action (scroll / move caret)
        }        
    }

    catchKeyEvents(event) {
        event = event || window.event;
        let keyCode = event.which || event.keyCode;
        
        switch (keyCode) {
            case this.leftKeyCode:
                this.actions.moveUserSpaceShipToLeft();
                break;
            case this.rightKeyCode:
                this.actions.moveUserSpaceShipToRight();
                break;
//                 case upKeyCode:
//                 break;
//                 case downKeyCode:
//                 break;
//            case spaceBarKeyCode:
//                doShot();
//                break;
        }
        
        if (!!event.preventDefault) {
            event.preventDefault(); // prevent the default action (scroll / move caret)
        }
    }

    render() {
        return(
                <div>
                    <UserSpaceShip gameHeight={this.height} gameWidth={this.width} actions={this.actions} />
                    <LeftDirection
                        actionStart={() => this.actions.moveUserSpaceShipToLeft() }
                        actionStop={() => this.actions.stopMovingUserSpaceShipToLeft() }/>
                    <RightDirection
                        actionStart={() => this.actions.moveUserSpaceShipToRight() }
                        actionStop={() => this.actions.stopMovingUserSpaceShipToRight() }/>
                </div>
                );
    }
}

export default App;
