import React, { Component } from 'react';
import './App.css';
import UserSpaceShip from '../UserSpaceShip/UserSpaceShip.js';
import LeftDirection from '../Buttons/LeftDirection.js';

class App extends Component {
    constructor(props) {
        super(props);
        this.height = props.height;
        this.width = props.width;

        this.actions = {
            moveUserSpaceShipToLeft: () => {
            }
        };
    }

    render() {
        return(
                <div>
                    <UserSpaceShip gameHeight={this.height} gameWidth={this.width} actions={this.actions} />
                    <LeftDirection action={() => this.actions.moveUserSpaceShipToLeft() }/>
                </div>
                );
    }
}

export default App;
