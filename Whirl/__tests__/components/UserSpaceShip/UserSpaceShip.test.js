/* global expect, spyOn */

import React from 'react';
import ReactDOM from 'react-dom';
import CommonFakes from '../../../Selenium/Fakes/commonFakes';
import UserSpaceShipMaths from '../../../src/maths/UserSpaceShip/UserSpaceShipMaths';
import UserSpaceShip from '../../../src/components/UserSpaceShip/UserSpaceShip.js';

describe('UserSpaceShip - ', () => {
    let commonFakes = new CommonFakes();

    describe('COMPONENT - ', () => {
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

    describe('CONSTRUCTOR - ', () => {
        it('Initializes the object', () => {
            spyOn(UserSpaceShipMaths.prototype, 'getTop').and.callFake(() => {
                return Number.MAX_SAFE_INTEGER;
            });
            spyOn(UserSpaceShipMaths.prototype, 'getLeft').and.callFake(() => {
                return Number.MAX_SAFE_INTEGER;
            });
            spyOn(UserSpaceShipMaths.prototype, 'getWidth').and.callFake(() => {
                return commonFakes.userSpaceShipWidth;
            });
            spyOn(UserSpaceShipMaths.prototype, 'getHeight').and.callFake(() => {
                return commonFakes.userSpaceShipHeight;
            });

            let sut = new UserSpaceShip(commonFakes);

            expect(sut.maths).toBeDefined();
            expect(sut.maths instanceof UserSpaceShipMaths).toBeTruthy();
            expect(sut.state instanceof Object).toBeTruthy();
            expect(sut.state.style instanceof Object).toBeTruthy();
            expect(sut.state.style.width).toEqual(commonFakes.userSpaceShipWidth);
            expect(sut.state.style.height).toEqual(commonFakes.userSpaceShipHeight);
            expect(sut.state.style.top).toEqual(Number.MAX_SAFE_INTEGER);
            expect(sut.state.style.left).toEqual(Number.MAX_SAFE_INTEGER);
        });

        it('Invokes the "getTop" methos from "UserSpaceShipMaths" object', () => {
            spyOn(UserSpaceShipMaths.prototype, 'getTop').and.callFake(() => {
                return Number.MAX_SAFE_INTEGER;
            });
            spyOn(UserSpaceShipMaths.prototype, 'getLeft').and.callFake(() => {
                return Number.MAX_SAFE_INTEGER;
            });
            spyOn(UserSpaceShipMaths.prototype, 'getWidth').and.callFake(() => {
                return commonFakes.userSpaceShipWidth;
            });
            spyOn(UserSpaceShipMaths.prototype, 'getHeight').and.callFake(() => {
                return commonFakes.userSpaceShipHeight;
            });

            new UserSpaceShip(commonFakes);

            expect(UserSpaceShipMaths.prototype.getTop).toHaveBeenCalled();
            expect(UserSpaceShipMaths.prototype.getTop.calls.count()).toEqual(commonFakes.once);
        });

        it('Invokes the "getLeft" methos from "UserSpaceShipMaths" object', () => {
            spyOn(UserSpaceShipMaths.prototype, 'getTop').and.callFake(() => {
                return Number.MAX_SAFE_INTEGER;
            });
            spyOn(UserSpaceShipMaths.prototype, 'getLeft').and.callFake(() => {
                return Number.MAX_SAFE_INTEGER;
            });
            spyOn(UserSpaceShipMaths.prototype, 'getWidth').and.callFake(() => {
                return commonFakes.userSpaceShipWidth;
            });
            spyOn(UserSpaceShipMaths.prototype, 'getHeight').and.callFake(() => {
                return commonFakes.userSpaceShipHeight;
            });

            new UserSpaceShip(commonFakes);

            expect(UserSpaceShipMaths.prototype.getLeft).toHaveBeenCalled();
            expect(UserSpaceShipMaths.prototype.getLeft.calls.count()).toEqual(commonFakes.once);
        });

        it('Invokes the "getWidth" methos from "UserSpaceShipMaths" object', () => {
            spyOn(UserSpaceShipMaths.prototype, 'getTop').and.callFake(() => {
                return Number.MAX_SAFE_INTEGER;
            });
            spyOn(UserSpaceShipMaths.prototype, 'getLeft').and.callFake(() => {
                return Number.MAX_SAFE_INTEGER;
            });
            spyOn(UserSpaceShipMaths.prototype, 'getWidth').and.callFake(() => {
                return commonFakes.userSpaceShipWidth;
            });
            spyOn(UserSpaceShipMaths.prototype, 'getHeight').and.callFake(() => {
                return commonFakes.userSpaceShipHeight;
            });

            new UserSpaceShip(commonFakes);

            expect(UserSpaceShipMaths.prototype.getWidth).toHaveBeenCalled();
            expect(UserSpaceShipMaths.prototype.getWidth.calls.count()).toEqual(commonFakes.once);
        });

        it('Invokes the "getHeight" methos from "UserSpaceShipMaths" object', () => {
            spyOn(UserSpaceShipMaths.prototype, 'getTop').and.callFake(() => {
                return Number.MAX_SAFE_INTEGER;
            });
            spyOn(UserSpaceShipMaths.prototype, 'getLeft').and.callFake(() => {
                return Number.MAX_SAFE_INTEGER;
            });
            spyOn(UserSpaceShipMaths.prototype, 'getWidth').and.callFake(() => {
                return commonFakes.userSpaceShipWidth;
            });
            spyOn(UserSpaceShipMaths.prototype, 'getHeight').and.callFake(() => {
                return commonFakes.userSpaceShipHeight;
            });

            new UserSpaceShip(commonFakes);

            expect(UserSpaceShipMaths.prototype.getHeight).toHaveBeenCalled();
            expect(UserSpaceShipMaths.prototype.getHeight.calls.count()).toEqual(commonFakes.once);
        });
    });

    describe('moveToLeft - ', () => {
        describe('when user press moveToLeft button then ship is moved to left elliptical direction', () => {
            it('without any parameter invokes "moveToNextLeftEllipticalPosition" method from "UserSpaceShipMaths" object', () => {
                spyOn(UserSpaceShipMaths.prototype, 'moveToNextLeftEllipticalPosition').and.callFake(() => {                    
                    return commonFakes.position;
                });
                spyOn(UserSpaceShip.prototype, 'setState').and.callFake(() => {
                });
                let sut = new UserSpaceShip(commonFakes);
                
                sut.moveToLeft();
                
                expect(UserSpaceShipMaths.prototype.moveToNextLeftEllipticalPosition).toHaveBeenCalled();                
                expect(UserSpaceShipMaths.prototype.moveToNextLeftEllipticalPosition.calls.count()).toEqual(commonFakes.once);
            });
            
            it('without any parameter invokes "setState" method from the SUT object', () => {
                spyOn(UserSpaceShipMaths.prototype, 'moveToNextLeftEllipticalPosition').and.callFake(() => {
                    return commonFakes.position;
                });
                spyOn(UserSpaceShip.prototype, 'setState').and.callFake(() => {
                });                
                let sut = new UserSpaceShip(commonFakes);
                
                sut.moveToLeft();
                
                expect(UserSpaceShip.prototype.setState).toHaveBeenCalledWith(commonFakes.stateChangedPosition);                
                expect(UserSpaceShip.prototype.setState.calls.count()).toEqual(commonFakes.once);
            });
        });
    });
});
