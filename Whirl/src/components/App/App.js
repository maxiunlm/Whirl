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
            }
        };
        
//        var spaceBarKeyCode = 32;
//        var leftKeyCode = 37;
//        var upKeyCode = 38;
//        var rightKeyCode = 39;
//        var downKeyCode = 40;
    }

//    catchKeyEvents() {
//        document.onkeydown = function (event) {
//            event = event || window.event;
//            var keyCode = event.which || event.keyCode;
//
//            moveShip(keyCode);
//
//            if (!!event.preventDefault) {
//                event.preventDefault(); // prevent the default action (scroll / move caret)
//            }
//        };
//    }
//
//    moveShip(keyCode) {
//        if (keyCode != leftKeyCode
//                && keyCode != rightKeyCode
//                && keyCode != spaceBarKeyCode) {
//            return;
//        }
//
//        switch (keyCode) {
//            case leftKeyCode:
//                ellipseShipPath.angle -= 0.05;
//                break;
//            case rightKeyCode:
//                ellipseShipPath.angle += 0.05;
//                break;
//                /*
//                 case upKeyCode:
//                 break;
//                 case downKeyCode:
//                 break;
//                 default: return; // exit this handler for other keys				
//                 // */
//            case spaceBarKeyCode:
//                doShot();
//                break;
//        }
//
//        if (ellipseShipPath.angle >= 2 * Math.PI) {
//            ellipseShipPath.angle -= 2 * Math.PI;
//        } else if (ellipseShipPath.angle <= -2 * Math.PI) {
//            ellipseShipPath.angle += 2 * Math.PI;
//        }
//
//        userSpaceShip.style.transform = 'rotate(' + (-1 * toDegrees(ellipseShipPath.angle) % (360)) + 'deg)';
//
//        var top = ellipseShipPath.centerY + ((ellipseShipPath.radius + ellipseShipPath.deltaA) * Math.cos(ellipseShipPath.angle));
//        var left = ellipseShipPath.centerX + ((ellipseShipPath.radius + ellipseShipPath.deltaB) * Math.sin(ellipseShipPath.angle));
//
//        userSpaceShip.style.top = (top) + 'px';
//        userSpaceShip.style.left = (left) + 'px';
//
//        showDebugData();
//    }

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
