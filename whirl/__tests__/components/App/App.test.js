/* global expect, Function, spyOn, jasmine */

import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import CommonFakes from '../../../Selenium/Fakes/commonFakes';
import App from '../../../src/components/App/App.js';

describe('APP - ', () => {
    let commonFakes = new CommonFakes();
    
    describe('CONSTRUCTOR - ', () => {
        it('With "props" parameters initialises the object', () => {

            let sut = new App(commonFakes.props);
            
            expect(sut.spaceBarKeyCode).toEqual(commonFakes.spaceBarKeyCode);
            expect(sut.leftKeyCode).toEqual(commonFakes.leftKeyCode);
            expect(sut.upKeyCode).toEqual(commonFakes.upKeyCode);
            expect(sut.rightKeyCode).toEqual(commonFakes.rightKeyCode);
            expect(sut.downKeyCode).toEqual(commonFakes.downKeyCode);
            expect(sut.actions).toBeDefined();
            expect(sut.actions.moveUserSpaceShipToLeft instanceof Function).toBeTruthy();
            expect(sut.actions.moveUserSpaceShipToRight instanceof Function).toBeTruthy();
            expect(sut.actions.stopMovingUserSpaceShipToLeft instanceof Function).toBeTruthy();
            expect(sut.actions.stopMovingUserSpaceShipToRight instanceof Function).toBeTruthy();
            expect(sut.actions.stopMovingUserSpaceShip instanceof Function).toBeTruthy();
            expect(sut.actions.startShotting instanceof Function).toBeTruthy();
            expect(sut.actions.stopShotting instanceof Function).toBeTruthy();
        });
        
        it('With "props" parameters initialises the events', () => {

            let sut = new App(commonFakes.props);
            
            expect(document.onkeydown instanceof Function).toBeTruthy();
            expect(document.onkeyup instanceof Function).toBeTruthy();
        });
        
        it('With "props" parameters invokes "bind" method from "Function" object twice', () => {
            let calledTimes = 0;
            spyOn(App.prototype.catchKeyEvents, 'bind').and.callFake(() => {
                calledTimes++;
            });
            spyOn(App.prototype.catchKeyUpEvent, 'bind').and.callFake(() => {
                calledTimes++;
            });
            
            
            let sut = new App(commonFakes);
            
            expect(App.prototype.catchKeyEvents.bind).toHaveBeenCalledWith(jasmine.any(App));
            expect(App.prototype.catchKeyEvents.bind.calls.count()).toEqual(commonFakes.once);
            expect(App.prototype.catchKeyUpEvent.bind).toHaveBeenCalledWith(jasmine.any(App));
            expect(App.prototype.catchKeyUpEvent.bind.calls.count()).toEqual(commonFakes.once);
            expect(calledTimes).toEqual(commonFakes.twice);
        });
    });
    
    describe('catchKeyEvents - ', () => {
        it('When the application catches the Left Keyboard Press event, then it invokes the "moveUserSpaceShipToLeft" method from the "actions" object', () => {
            let sut = new App(commonFakes.props);
            spyOn(sut.actions, 'moveUserSpaceShipToLeft').and.callFake(() => {
            });
            
            sut.catchKeyEvents(commonFakes.eventLeftKeyCode);
            
            expect(sut.actions.moveUserSpaceShipToLeft).toHaveBeenCalled();
            expect(sut.actions.moveUserSpaceShipToLeft.calls.count()).toEqual(commonFakes.once);
        });
        
        it('When the application catches the Right Keyboard Press event, then it invokes the "moveUserSpaceShipToRight" method from the "actions" object', () => {
            let sut = new App(commonFakes.props);
            spyOn(sut.actions, 'moveUserSpaceShipToRight').and.callFake((event) => {
            });
            
            sut.catchKeyEvents(commonFakes.eventRightKeyCode);
            
            expect(sut.actions.moveUserSpaceShipToRight).toHaveBeenCalled();
            expect(sut.actions.moveUserSpaceShipToRight.calls.count()).toEqual(commonFakes.once);
        });
        
        it('When the application catches the Space Bar Press event, then it invokes the "startShotting" method from the "actions" object', () => {
            let sut = new App(commonFakes.props);
            spyOn(sut.actions, 'startShotting').and.callFake((event) => {
            });
            
            sut.catchKeyEvents(commonFakes.eventSpaceBarKeyCode);
            
            expect(sut.actions.startShotting).toHaveBeenCalled();
            expect(sut.actions.startShotting.calls.count()).toEqual(commonFakes.once);
        });
        
        it('With a "keyboard event" invokes the "preventDefault" method from the "event" object', () => {
            let sut = new App(commonFakes.props);
            spyOn(commonFakes.eventRightKeyCodeWithPreventDefault, 'preventDefault').and.callFake((event) => {
            });
            
            sut.catchKeyEvents(commonFakes.eventRightKeyCodeWithPreventDefault);
            
            expect(commonFakes.eventRightKeyCodeWithPreventDefault.preventDefault).toHaveBeenCalled();
            expect(commonFakes.eventRightKeyCodeWithPreventDefault.preventDefault.calls.count()).toEqual(commonFakes.once);
        });
        
        it('With a "keyboard event" that doesn\'t have a "preventDefault" method, then it doesn\'t calls the "preventDefault" method', () => {
            let sut = new App(commonFakes.props);
            spyOn(commonFakes.eventRightKeyCodeWithPreventDefault, 'preventDefault').and.callFake((event) => {
            });
            
            sut.catchKeyEvents(commonFakes.eventRightKeyCode);
            
            expect(commonFakes.eventRightKeyCodeWithPreventDefault.preventDefault).not.toHaveBeenCalled();
        });
    });
    
    describe('catchKeyUpEvent - ', () => {
        it('When the application catches the "Right Keyboard Press Up" event, then it invokes the "stopMovingUserSpaceShip" method from the "actions" object', () => {
            let sut = new App(commonFakes.props);
            spyOn(sut.actions, 'stopMovingUserSpaceShip').and.callFake(() => {
            });
            
            sut.catchKeyUpEvent(commonFakes.eventRightKeyCode);
            
            expect(sut.actions.stopMovingUserSpaceShip).toHaveBeenCalled();
            expect(sut.actions.stopMovingUserSpaceShip.calls.count()).toEqual(commonFakes.once);
        });
        
        it('When the application catches the "Left Keyboard Press Up" event, then it invokes the "stopMovingUserSpaceShip" method from the "actions" object', () => {
            let sut = new App(commonFakes.props);
            spyOn(sut.actions, 'stopMovingUserSpaceShip').and.callFake(() => {
            });
            
            sut.catchKeyUpEvent(commonFakes.eventLeftKeyCode);
            
            expect(sut.actions.stopMovingUserSpaceShip).toHaveBeenCalled();
            expect(sut.actions.stopMovingUserSpaceShip.calls.count()).toEqual(commonFakes.once);
        });
        
        it('When the application catches the "Space Bar Keyboard Press Up" event, then it invokes the "stopShotting" method from the "actions" object', () => {
            let sut = new App(commonFakes.props);
            spyOn(sut.actions, 'stopShotting').and.callFake(() => {
            });
            
            sut.catchKeyUpEvent(commonFakes.eventSpaceBarKeyCode);
            
            expect(sut.actions.stopShotting).toHaveBeenCalled();
            expect(sut.actions.stopShotting.calls.count()).toEqual(commonFakes.once);
        });
        
        it('With a "keyboard event" invokes the "preventDefault" method from the "event" object', () => {
            let sut = new App(commonFakes.props);
            spyOn(commonFakes.eventRightKeyCodeWithPreventDefault, 'preventDefault').and.callFake((event) => {
            });
            
            sut.catchKeyUpEvent(commonFakes.eventRightKeyCodeWithPreventDefault);
            
            expect(commonFakes.eventRightKeyCodeWithPreventDefault.preventDefault).toHaveBeenCalled();
            expect(commonFakes.eventRightKeyCodeWithPreventDefault.preventDefault.calls.count()).toEqual(commonFakes.once);
        });
        
        it('With a "keyboard event" that doesn\'t have a "preventDefault" method, then it doesn\'t the "preventDefault" method', () => {
            let sut = new App(commonFakes.props);
            spyOn(commonFakes.eventRightKeyCodeWithPreventDefault, 'preventDefault').and.callFake((event) => {
            });
            
            sut.catchKeyUpEvent(commonFakes.eventRightKeyCode);
            
            expect(commonFakes.eventRightKeyCodeWithPreventDefault.preventDefault).not.toHaveBeenCalled();
        });
    });

    describe('render - ', () => {
        it('renders without crashing', () => {
            const div = document.createElement('div');
            ReactDOM.render(<App ioc={commonFakes.ioc} />, div);
        });

        xit('Without any parameter renders a "UserSpaceShip" component', () => {
            const app = shallow(
                    <App ioc={commonFakes.ioc} />
                    );

            var result = app.find('img');
            debugger;
            console.log(result);
            expect(result.is('img')).toBeTruthy();
            pending('Under construction');
        });
    });
});
