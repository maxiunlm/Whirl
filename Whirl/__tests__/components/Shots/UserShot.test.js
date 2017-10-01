/* global expect, spyOn, jasmine, Function */

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
        
        it('initialices the object without an initial position', ()=> {
            
            let sut = new UserShot(new Object());
            
            expect(sut.maths instanceof ShotMaths).toBeTruthy();
            expect(sut.ioc instanceof IoC4Javascript).toBeTruthy();
            expect(sut.movementInterval).toEqual(commonFakes.movementInterval);
            expect(sut.state.image).toEqual(commonFakes.userShotImage);
            expect(sut.state.style).toEqual(undefined);
        });
    });
    
    describe('getNewShotMaths - ', () => {
        
        it('With a "shotMathsKey" string key invokes the "getInstanceOf" method from "IoC4Javascript" object', () => {
            spyOn(IoC4Javascript.prototype, 'getInstanceOf').and.callThrough();
            let sut = new UserShot(commonFakes);
            
            sut.getNewShotMaths();
            
            expect(IoC4Javascript.prototype.getInstanceOf).toHaveBeenCalledWith(commonFakes.shotMathsKey);
            //TODO: REVISAR !!! Lo llama el 4 veces en lugar de una porque es un Singleton vuelve a computar (LOS TESTS NO SON INDEPENDEINTES) !!!
            //expect(IoC4Javascript.prototype.getInstanceOf.calls.count()).toEqual(commonFakes.once);            
            //// NO FUNCIONA !!! -> IoC4Javascript.prototype.getInstanceOf.calls.rest();
        });
        
        it('With a "shotMathsKey" string key calls the "getInstanceOf" method from "IoC4Javascript" object wich returns an "ShotMaths" instance', () => {
            spyOn(IoC4Javascript.prototype, 'getInstanceOf').and.callThrough();
            let sut = new UserShot(commonFakes);
            
            let result = sut.getNewShotMaths();
            
            expect(result instanceof ShotMaths).toBeTruthy();
        });
    });
    
    describe('startShotting - ', () => {
        it('Without any parameter invokes "setInterval" method from "window" object', () => {
            let sut = new UserShot(commonFakes);
            spyOn(window, 'setInterval').and.callFake(() => {                
            });
            spyOn(sut, 'setState').and.callFake(function () {
                this.state.image = this.state.images.toLeft;
            }.bind(sut));
            
            sut.startShotting();
            
            expect(window.setInterval).toHaveBeenCalledWith(jasmine.any(Function), commonFakes.movementInterval);
            expect(window.setInterval.calls.count()).toEqual(commonFakes.once);
        });
        
        it('Without any parameter invokes "bind" method from "Function" object', () => {
            let sut = new UserShot(commonFakes);
            spyOn(window, 'setInterval').and.callFake(() => {                
            });
            spyOn(sut.doShot, 'bind').and.callFake(() => {
            });
            spyOn(sut, 'setState').and.callFake(function () {
                this.state.image = this.state.images.toLeft;
            }.bind(sut));
            
            sut.startShotting();
            
            expect(sut.doShot.bind).toHaveBeenCalled();
            expect(sut.doShot.bind.calls.count()).toEqual(commonFakes.once);
        });
        
        it('Without any parameter calls "bind" method from "Function" object, then it sets the "shotInterval" value', () => {
            let sut = new UserShot(commonFakes);
            spyOn(window, 'setInterval').and.callFake(() => {
                return commonFakes.EmptyObject;
            });
            spyOn(sut.doShot, 'bind').and.callFake(() => {
            });
            spyOn(sut, 'setState').and.callFake(function () {
                this.state.image = this.state.images.toLeft;
            }.bind(sut));
            
            sut.startShotting();
            
            expect(sut.shotInterval).toBeDefined();
        });
    });
    
    describe('doShot - ', () => {
        it('without any parameter invokes "moveToNextEllipticalPosition" method from "UserSpaceShipMaths" object', () => {
            let sut = new UserShot(commonFakes);
            spyOn(ShotMaths.prototype, 'moveToNextEllipticalPosition').and.callFake(() => {                    
                return commonFakes.position;
            });
            spyOn(UserShot.prototype, 'setState').and.callFake(() => {
            });

            sut.doShot();

            expect(ShotMaths.prototype.moveToNextEllipticalPosition).toHaveBeenCalled();                
            expect(ShotMaths.prototype.moveToNextEllipticalPosition.calls.count()).toEqual(commonFakes.once);
        });

        it('without any parameter invokes "moveToNextEllipticalPosition" which returns the new Position', () => {
            let setStateParameter;
            let sut = new UserShot(commonFakes);
            spyOn(ShotMaths.prototype, 'moveToNextEllipticalPosition').and.callFake(() => {                    
                return commonFakes.position;
            });
            spyOn(UserShot.prototype, 'setState').and.callFake((state) => {
                setStateParameter = state;
            });

            sut.doShot();

            expect(setStateParameter.style.top).toEqual(commonFakes.position.top);
            expect(setStateParameter.style.left).toEqual(commonFakes.position.left);
        });
    });
    
    describe('setPosition - ', () => {
        it('with a "Position object" sets the position attribute of the object', () => {
            let sut = new UserShot(commonFakes);
            let position = new Position();
           
            sut.setPosition(position);
            
            expect(sut.position).toEqual(position)
            ;            
        });
    });
});
