/* global expect, spyOn */

import React from 'react';
import ReactDOM from 'react-dom';
import CommonFakes from '../../../Selenium/Fakes/commonFakes';
import UserShot from '../../../src/components/Shots/UserShot';
import Position from '../../../src/maths/paths/Position';
import ShotMaths from '../../../src/maths/Shots/ShotMaths';
import IoC4Javascript from '../../../src/apis/ioc4javascript';

describe('UserShot - ', () => {
    let commonFakes = new CommonFakes();
    
    describe('COMPONENT - ', () => {
        it('without any parameter, when is loaded, then renders without crashing', () => {
            const div = document.createElement('div');

            ReactDOM.render(<UserShot position={commonFakes.position} />, div);
        });
    });
    
    describe('CONSTRUCTOR - ', () => {
        it('initialices the object', ()=> {
            
            let sut = new UserShot(commonFakes);
            
            expect(sut.maths instanceof ShotMaths).toBeTruthy();
            expect(sut.ioc instanceof IoC4Javascript).toBeTruthy();
            expect(sut.movementInterval).toEqual(commonFakes.movementInterval);
            expect(sut.state.image).toEqual(commonFakes.userShotImage);
            expect(sut.state.style.left).toEqual(commonFakes.positionLeft);
            expect(sut.state.style.top).toEqual(commonFakes.positionTop);
        });
        
        
        it('with an "shotMathsKey" string key invokes the "getInstanceOf" method from the "IoC4Javascript" object', () => {
            spyOn(IoC4Javascript.prototype, 'getInstanceOf').and.callThrough();
            
            new UserShot(commonFakes);
            
            expect(IoC4Javascript.prototype.getInstanceOf).toHaveBeenCalledWith(commonFakes.shotMathsKey);
            // TODO: Falla porque es un Singleton -> expect(IoC4Javascript.prototype.getInstanceOf.calls.count()).toEqual(commonFakes.once);           
        });
    });
});
