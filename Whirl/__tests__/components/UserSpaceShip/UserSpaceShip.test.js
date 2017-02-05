import React from 'react';
import ReactDOM from 'react-dom';
import CommonFakes from '../../../Selenium/Fakes/commonFakes';
import UserSpaceShip from '../../../src/components/UserSpaceShip/UserSpaceShip.js';

describe('UserSpaceShip - ', () => {
    it('without any parameter, when is loaded, then renders without crashing', () => {
        const div = document.createElement('div');
        var props = {
            height: CommonFakes.height,
            width: CommonFakes.width
        };
        var actions = {
            moveUserSpaceShipToLeft: () => {
            }
        };

        ReactDOM.render(<UserSpaceShip gameHeight={props.height} gameWidth={props.width} actions={actions} />, div);
    });
});

