
import React from 'react';
import ReactDOM from 'react-dom';
import CommonFakes from '../../../Selenium/Fakes/commonFakes';
import UserShot from '../../../src/components/Shots//UserShot';

describe('UserShot - ', () => {
    let commonFakes = new CommonFakes();
    
    describe('COMPONENT - ', () => {
        it('without any parameter, when is loaded, then renders without crashing', () => {
            const div = document.createElement('div');

            ReactDOM.render(<UserShot />, div);
        });
    });
    
});
