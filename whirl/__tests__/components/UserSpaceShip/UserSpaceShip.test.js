import React from 'react';
import ReactDOM from 'react-dom';
import UserSpaceShip from '../../../src/components/UserSpaceShip/UserSpaceShip.js';

describe('UserSpaceShip - ', () => {
    it('without any parameter, when is loaded, then renders without crashing', () => {
        const div = document.createElement('div');
        
        ReactDOM.render(<UserSpaceShip />, div);
    });
});

