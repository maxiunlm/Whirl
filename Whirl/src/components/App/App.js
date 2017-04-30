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
