import React, { Component } from 'react';
import './App.css';
import UserSpaceShip from '../UserSpaceShip/UserSpaceShip.js';
import LeftDirection from '../Buttons/LeftDirection.js';
import RightDirection from '../Buttons/RightDirection.js';

class App extends Component {
    constructor(props) {
        super(props);

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

        document.onkeydown = this.catchKeyEvents.bind(this);
        document.onkeyup = this.catchKeyUpEvent.bind(this);
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
//            case spaceBarKeyCode: // TODO: TDD !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//                doShot();
//                break;
            default:
                break;
        }

        if (!!event.preventDefault) {
            event.preventDefault(); // prevent the default action (scroll / move caret)
        }
    }

    render() {
        return(
                <div>
                    <UserSpaceShip actions={this.actions} />
                    <LeftDirection
                        actionStart={(event) => this.actions.moveUserSpaceShipToLeft(event) }
                        actionStop={(event) => this.actions.stopMovingUserSpaceShipToLeft(event) }/>
                    <RightDirection
                        actionStart={(event) => this.actions.moveUserSpaceShipToRight(event) }
                        actionStop={(event) => this.actions.stopMovingUserSpaceShipToRight(event) }/>
                </div>
                );
    }
}

export default App;
