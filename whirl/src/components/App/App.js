/* global actions */

import React, { Component }
from 'react';
import './App.css';
import UserSpaceShip from '../UserSpaceShip/UserSpaceShip.js';
import LeftDirection from '../Buttons/LeftDirection.js';

class App extends Component {
    constructor(props) {
        super(props);
        this.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        this.width = screen.width;
        
        window.actions = {};
        window.actions.moveUserSpaceShipToLeft = () => {};        
        //UserSpaceShip.contextTypes = { actions: this.actions };
    }

    render() {
        return (
                <div>
                    <UserSpaceShip gameHeight={this.height} gameWidth={this.width} />
                    <LeftDirection action={() => window.actions.moveUserSpaceShipToLeft() }/>
                            <button onClick={() => window.actions.moveUserSpaceShipToLeft()}>&lt; 2</button>
                </div>
                );
    }
}

export default App;
