/* global expect, spyOn, Function, jasmine */

import React from 'react';
import ReactDOM from 'react-dom';
import CommonFakes from '../../../Selenium/Fakes/commonFakes';
import UserSpaceShipMaths from '../../../src/maths/UserSpaceShip/UserSpaceShipMaths';
import UserSpaceShipGeometric from '../../../src/maths/UserSpaceShip/UserSpaceShipGeometric';
import Dimensions from '../../../src/maths/paths/Dimensions';
import UserSpaceShip from '../../../src/components/UserSpaceShip/UserSpaceShip';
import UserShot from '../../../src/components/Shots/UserShot';
import IoC4Javascript from '../../../src/apis/ioc4javascript';

describe('UserSpaceShip - ', () => {
    let commonFakes = new CommonFakes();
    
    describe('COMPONENT - ', () => {
        it('without any parameter, when is loaded, then renders without crashing', () => {
            const div = document.createElement('div');
            var actions = {
                moveUserSpaceShipToLeft: () => {
                },
                moveUserSpaceShipToRight: () => {
                }
            };

            ReactDOM.render(<UserSpaceShip ioc={commonFakes.ioc} actions={actions} />, div);
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

            expect(sut.ioc instanceof IoC4Javascript).toBeTruthy();
            expect(sut.movementInterval).toEqual(commonFakes.movementInterval);
            expect(sut.maths instanceof UserSpaceShipMaths).toBeTruthy();
            expect(sut.state instanceof Object).toBeTruthy();
            expect(sut.state.shots instanceof Array).toBeTruthy();
            expect(sut.state.style instanceof Object).toBeTruthy();
            expect(sut.state.style.width).toEqual(commonFakes.userSpaceShipWidth);
            expect(sut.state.style.height).toEqual(commonFakes.userSpaceShipHeight);
            expect(sut.state.style.top).toEqual(Number.MAX_SAFE_INTEGER);
            expect(sut.state.style.left).toEqual(Number.MAX_SAFE_INTEGER);
            expect(sut.state.image).toEqual(commonFakes.userSpaceShipImageStopped);
            expect(sut.state.images.stopped).toEqual(commonFakes.userSpaceShipImageStopped);
            expect(sut.state.images.toLeft).toEqual(commonFakes.userSpaceShipImageToLeft);
            expect(sut.state.images.toRight).toEqual(commonFakes.userSpaceShipImageToRight);
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
        
        it('Without any parameterinvokes the "getNewUserSpaceShipMaths" method from the "sut" object', () => {
            spyOn(UserSpaceShip.prototype, 'getNewUserSpaceShipMaths').and.callFake(() => {
                return new UserSpaceShipMaths(new Dimensions());
            });
            
            new UserSpaceShip(commonFakes);
            
            expect(UserSpaceShip.prototype.getNewUserSpaceShipMaths).toHaveBeenCalled();
            expect(UserSpaceShip.prototype.getNewUserSpaceShipMaths.calls.count()).toEqual(commonFakes.once);
        });
    });
    
    describe('getNewUserSpaceShipMaths - ', () => {
        it('With a "userSpaceShipMathsKey" string key invokes the "getInstanceOf" method from "IoC4Javascript" object', () => {
            spyOn(IoC4Javascript.prototype, 'getInstanceOf').and.callThrough();
            let sut = new UserSpaceShip(commonFakes);
            
            sut.getNewUserSpaceShipMaths();
            
            expect(IoC4Javascript.prototype.getInstanceOf).toHaveBeenCalledWith(commonFakes.userSpaceShipMathsKey);
            //TODO: REVISAR !!! Lo llama el 4 veces en lugar de una porque es un Singleton vuelve a computar (LOS TESTS NO SON INDEPENDEINTES) !!!
            //expect(IoC4Javascript.prototype.getInstanceOf.calls.count()).toEqual(commonFakes.once);            
            //// NO FUNCIONA !!! -> IoC4Javascript.prototype.getInstanceOf.calls.rest();
        });
        
        it('With a "userSpaceShipMathsKey" string key calls the "getInstanceOf" method from "IoC4Javascript" object wich returns an "UserSpaceShipMaths" instance', () => {
            spyOn(IoC4Javascript.prototype, 'getInstanceOf').and.callThrough();
            let sut = new UserSpaceShip(commonFakes);
            
            let result = sut.getNewUserSpaceShipMaths();
            
            expect(result instanceof UserSpaceShipMaths).toBeTruthy();
        });
    });

    describe('componentDidMount - ', () => {
        it('With the "actions" props object, then sets the "moveUserSpaceShipToLeft" method event', () => {            
            let sut = new UserSpaceShip(commonFakes);
            
            sut.componentDidMount();
            
            expect(sut.props.actions).toBeDefined();
            expect(sut.props.actions.moveUserSpaceShipToLeft).toBeDefined();
            expect(sut.props.actions.moveUserSpaceShipToLeft instanceof Function).toBeTruthy();
        });
        
        it('When the "moveUserSpaceShipToLeft" method is called, then invokes "startMovingToLeft" from teh "sut" object', () => {
            let sut = new UserSpaceShip(commonFakes);
            spyOn(sut, 'startMovingToLeft').and.callFake(() => {                
            });
            sut.componentDidMount();
            
            sut.props.actions.moveUserSpaceShipToLeft();
            
            expect(sut.startMovingToLeft).toHaveBeenCalled();
            expect(sut.startMovingToLeft.calls.count()).toEqual(commonFakes.once);
        });
        
        it('With the "actions" props object, then sets the "stopMovingUserSpaceShipToLeft" method event', () => {            
            let sut = new UserSpaceShip(commonFakes);
            
            sut.componentDidMount();
            
            expect(sut.props.actions).toBeDefined();
            expect(sut.props.actions.stopMovingUserSpaceShipToLeft).toBeDefined();
            expect(sut.props.actions.stopMovingUserSpaceShipToLeft instanceof Function).toBeTruthy();
        });
        
        it('When the "stopMovingUserSpaceShipToLeft" method is called, then invokes "stopMovingToLeft" from teh "sut" object', () => {
            let sut = new UserSpaceShip(commonFakes);
            spyOn(sut, 'stopMovingToLeft').and.callFake(() => {                
            });
            sut.componentDidMount();
            
            sut.props.actions.stopMovingUserSpaceShipToLeft();
            
            expect(sut.stopMovingToLeft).toHaveBeenCalled();
            expect(sut.stopMovingToLeft.calls.count()).toEqual(commonFakes.once);
        });
        
        it('With the "actions" props object, then sets the "moveUserSpaceShipToRight" method event', () => {          
            let sut = new UserSpaceShip(commonFakes);
            
            sut.componentDidMount();
            
            expect(sut.props.actions).toBeDefined();
            expect(sut.props.actions.moveUserSpaceShipToRight).toBeDefined();
            expect(sut.props.actions.moveUserSpaceShipToRight instanceof Function).toBeTruthy();
            
        });
        
        it('When the "moveUserSpaceShipToRight" method is called, then invokes "startMovingToLeft" from teh "sut" object', () => {
            let sut = new UserSpaceShip(commonFakes);
            spyOn(sut, 'startMovingToRight').and.callFake(() => {                
            });
            sut.componentDidMount();
            
            sut.props.actions.moveUserSpaceShipToRight();
            
            expect(sut.startMovingToRight).toHaveBeenCalled();
            expect(sut.startMovingToRight.calls.count()).toEqual(commonFakes.once);
        });
        
        it('With the "actions" props object, then sets the "stopMovingUserSpaceShipToRight" method event', () => {            
            let sut = new UserSpaceShip(commonFakes);
            
            sut.componentDidMount();
            
            expect(sut.props.actions).toBeDefined();
            expect(sut.props.actions.stopMovingUserSpaceShipToRight).toBeDefined();
            expect(sut.props.actions.stopMovingUserSpaceShipToRight instanceof Function).toBeTruthy();
        });
        
        it('When the "stopMovingUserSpaceShipToRight" method is called, then invokes "stopMovingToRight" from teh "sut" object', () => {
            let sut = new UserSpaceShip(commonFakes);
            spyOn(sut, 'stopMovingToRight').and.callFake(() => {                
            });
            sut.componentDidMount();
            
            sut.props.actions.stopMovingUserSpaceShipToRight();
            
            expect(sut.stopMovingToRight).toHaveBeenCalled();
            expect(sut.stopMovingToRight.calls.count()).toEqual(commonFakes.once);
        });
        
        it('Without any parameter invokes "bind" method from "Function" object seven times', () => {
            let sut = new UserSpaceShip(commonFakes);
            let calledTimes = 0;
            spyOn(sut.startMovingToLeft, 'bind').and.callFake(() => {
                calledTimes++;
            });
            spyOn(sut.startMovingToRight, 'bind').and.callFake(() => {
                calledTimes++;
            });
            spyOn(sut.stopMovingToLeft, 'bind').and.callFake(() => {
                calledTimes++;
            });
            spyOn(sut.stopMovingToRight, 'bind').and.callFake(() => {
                calledTimes++;
            });
            spyOn(sut.stopMoving, 'bind').and.callFake(() => {
                calledTimes++;
            });
            spyOn(sut.startShotting, 'bind').and.callFake(() => {
                calledTimes++;
            });
            spyOn(sut.stopShotting, 'bind').and.callFake(() => {
                calledTimes++;
            });
            
            sut.componentDidMount();
            
            expect(sut.startMovingToLeft.bind).toHaveBeenCalledWith(jasmine.any(UserSpaceShip));
            expect(sut.startMovingToLeft.bind.calls.count()).toEqual(commonFakes.once);
            expect(sut.startMovingToRight.bind).toHaveBeenCalledWith(jasmine.any(UserSpaceShip));
            expect(sut.startMovingToRight.bind.calls.count()).toEqual(commonFakes.once);
            expect(sut.stopMovingToLeft.bind).toHaveBeenCalledWith(jasmine.any(UserSpaceShip));
            expect(sut.stopMovingToLeft.bind.calls.count()).toEqual(commonFakes.once);
            expect(sut.stopMovingToRight.bind).toHaveBeenCalledWith(jasmine.any(UserSpaceShip));
            expect(sut.stopMovingToRight.bind.calls.count()).toEqual(commonFakes.once);
            expect(sut.stopMoving.bind).toHaveBeenCalledWith(jasmine.any(UserSpaceShip));
            expect(sut.stopMoving.bind.calls.count()).toEqual(commonFakes.once);
            expect(sut.startShotting.bind).toHaveBeenCalled();
            expect(sut.startShotting.bind.calls.count()).toEqual(commonFakes.once);
            expect(sut.stopShotting.bind).toHaveBeenCalled();
            expect(sut.stopShotting.bind.calls.count()).toEqual(commonFakes.once);
            expect(calledTimes).toEqual(commonFakes.sevenTimes);
        });
    });
    
    describe('startMovingToLeft - When the start moving to left event is called - ', () => {
        it('Without any parameter invokes "setInterval" method from "window" object', () => {
            let sut = new UserSpaceShip(commonFakes);
            spyOn(window, 'setInterval').and.callFake(() => {                
            });
            spyOn(sut, 'setState').and.callFake(function () {
                this.state.image = this.state.images.toLeft;
            }.bind(sut));
            
            sut.startMovingToLeft();
            
            expect(window.setInterval).toHaveBeenCalledWith(jasmine.any(Function), commonFakes.movementInterval);
            expect(window.setInterval.calls.count()).toEqual(commonFakes.once);
        });
        
        it('Without any parameter invokes "bind" method from "Function" object', () => {
            let sut = new UserSpaceShip(commonFakes);
            spyOn(window, 'setInterval').and.callFake(() => {                
            });
            spyOn(sut.moveToLeft, 'bind').and.callFake(() => {
            });
            spyOn(sut, 'setState').and.callFake(function () {
                this.state.image = this.state.images.toLeft;
            }.bind(sut));
            
            sut.startMovingToLeft();
            
            expect(sut.moveToLeft.bind).toHaveBeenCalledWith(jasmine.any(UserSpaceShip));
            expect(sut.moveToLeft.bind.calls.count()).toEqual(commonFakes.once);
        });
        
        it('Without any parameter calls "bind" method from "Function" object, then it sets the "movementToLeftInterval" value', () => {
            let sut = new UserSpaceShip(commonFakes);
            spyOn(window, 'setInterval').and.callFake(() => {
                return commonFakes.EmptyObject;
            });
            spyOn(sut.moveToLeft, 'bind').and.callFake(() => {
            });
            spyOn(sut, 'setState').and.callFake(function () {
                this.state.image = this.state.images.toLeft;
            }.bind(sut));
            
            sut.startMovingToLeft();
            
            expect(sut.movementToLeftInterval).toBeDefined();
        });
        
        it('Without any parameter invokes "stopMoving" from the "sut" object', () => {
            let sut = new UserSpaceShip(commonFakes);
            spyOn(window, 'setInterval').and.callFake(() => {
                return commonFakes.EmptyObject;
            });
            spyOn(sut.moveToLeft, 'bind').and.callFake(() => {
            });
            spyOn(sut, 'stopMoving').and.callFake(() => {
            });
            spyOn(sut, 'setState').and.callFake(function () {
                this.state.image = this.state.images.toLeft;
            }.bind(sut));
            
            sut.startMovingToLeft();
            
            expect(sut.stopMoving).toHaveBeenCalled();
            expect(sut.stopMoving.calls.count()).toEqual(commonFakes.once);
        });
        
        it('With the image to Left direction, invokes the "setState" from the "sut" object', () => {
            let sut = new UserSpaceShip(commonFakes);
            spyOn(sut, 'setState').and.callFake(function () {
                this.state.image = this.state.images.toLeft;
            }.bind(sut));
            
            sut.startMovingToLeft();
            
            expect(sut.setState).toHaveBeenCalled();
            expect(sut.setState.calls.count()).toEqual(commonFakes.once);
        });
        
        it('With another image, it changes to the image Left direction', () => {
            let sut = new UserSpaceShip(commonFakes);
            spyOn(sut, 'setState').and.callFake(function () {
                this.state.image = this.state.images.toLeft;
            }.bind(sut));
            
            sut.startMovingToLeft();
            
            expect(sut.state.image).toEqual(sut.state.images.toLeft);
        });
        
        it('With an "keyboard event" invokes the "preventDefault" method from the "event" object', () => {
            let sut = new UserSpaceShip(commonFakes);
            spyOn(sut, 'setState').and.callFake(function () {
                this.state.image = this.state.images.toLeft;
            }.bind(sut));
            spyOn(commonFakes.eventLeftKeyCodeWithPreventDefault, 'preventDefault').and.callFake((event) => {
            });
            
            sut.startMovingToLeft(commonFakes.eventLeftKeyCodeWithPreventDefault);
            
            expect(commonFakes.eventLeftKeyCodeWithPreventDefault.preventDefault).toHaveBeenCalled();
            expect(commonFakes.eventLeftKeyCodeWithPreventDefault.preventDefault.calls.count()).toEqual(commonFakes.once);
        });
        
        it('With an "keyboard event" that doesn\'t have a "preventDefault" method, then it doesn\'t do anything', () => {
            let sut = new UserSpaceShip(commonFakes);
            spyOn(sut, 'setState').and.callFake(function () {
                this.state.image = this.state.images.toLeft;
            }.bind(sut));
            spyOn(commonFakes.eventLeftKeyCodeWithPreventDefault, 'preventDefault').and.callFake((event) => {
            });
            
            sut.startMovingToLeft(commonFakes.eventLeftKeyCode);
            
            expect(commonFakes.eventLeftKeyCodeWithPreventDefault.preventDefault).not.toHaveBeenCalled();
        });
        
        it('Without a "keyboard event", then it doesn\'t throw any Exception', () => {
            let sut = new UserSpaceShip(commonFakes);
            spyOn(sut, 'setState').and.callFake(function () {
                this.state.image = this.state.images.toLeft;
            }.bind(sut));
            spyOn(commonFakes.eventRightKeyCodeWithPreventDefault, 'preventDefault').and.callFake((event) => {
            });
            
            expect(() => {
                sut.startMovingToLeft();
            }).not.toThrow();
        });
    });

    describe('moveToLeft - ', () => {
        describe('when user press moveToLeft button then ship is moved to left elliptical direction', () => {
            it('without any parameter invokes "moveToNextLeftEllipticalPosition" method from "UserSpaceShipMaths" object', () => {
                let sut = new UserSpaceShip(commonFakes);
                spyOn(UserSpaceShipMaths.prototype, 'getWidth').and.callFake(() => {
                    return commonFakes.userSpaceShipWidth;
                });
                spyOn(UserSpaceShipMaths.prototype, 'getHeight').and.callFake(() => {
                    return commonFakes.userSpaceShipHeight;
                });
                spyOn(UserSpaceShipMaths.prototype, 'moveToNextLeftEllipticalPosition').and.callFake(() => {                    
                    return commonFakes.position;
                });
                spyOn(UserSpaceShip.prototype, 'setState').and.callFake(() => {
                });
                
                sut.moveToLeft();
                
                expect(UserSpaceShipMaths.prototype.moveToNextLeftEllipticalPosition).toHaveBeenCalled();                
                expect(UserSpaceShipMaths.prototype.moveToNextLeftEllipticalPosition.calls.count()).toEqual(commonFakes.once);
            });
            
            it('without any parameter invokes "moveToNextLeftEllipticalPosition" which returns the new Position', () => {
                let setStateParameter;
                let sut = new UserSpaceShip(commonFakes);            
                spyOn(UserSpaceShipMaths.prototype, 'getWidth').and.callFake(() => {
                    return commonFakes.userSpaceShipWidth;
                });
                spyOn(UserSpaceShipMaths.prototype, 'getHeight').and.callFake(() => {
                    return commonFakes.userSpaceShipHeight;
                });
                spyOn(UserSpaceShipMaths.prototype, 'moveToNextLeftEllipticalPosition').and.callFake(() => {                    
                    return commonFakes.position;
                });
                spyOn(UserSpaceShip.prototype, 'setState').and.callFake((state) => {
                    setStateParameter = state;
                });
                
                sut.moveToLeft();
                
                expect(setStateParameter.style.top).toEqual(commonFakes.position.top);
                expect(setStateParameter.style.left).toEqual(commonFakes.position.left);
            });
            
            it('without any parameter invokes "setState" method from the SUT object', () => {
                let sut = new UserSpaceShip(commonFakes);
                spyOn(UserSpaceShipMaths.prototype, 'getWidth').and.callFake(() => {
                    return commonFakes.userSpaceShipWidth;
                });
                spyOn(UserSpaceShipMaths.prototype, 'getHeight').and.callFake(() => {
                    return commonFakes.userSpaceShipHeight;
                });
                spyOn(UserSpaceShipMaths.prototype, 'moveToNextLeftEllipticalPosition').and.callFake(() => {
                    return commonFakes.position;
                });
                spyOn(UserSpaceShip.prototype, 'setState').and.callFake(() => {
                });
                
                sut.moveToLeft();
                
                expect(UserSpaceShip.prototype.setState).toHaveBeenCalledWith(commonFakes.stateInitialPosition);                
                expect(UserSpaceShip.prototype.setState.calls.count()).toEqual(commonFakes.once);
            });
            
            it('Without any parameter invokes "getWidth" methos from "UserSpaceShipMaths" object', () => {
                let sut = new UserSpaceShip(commonFakes);
                spyOn(UserSpaceShipMaths.prototype, 'getWidth').and.callFake(() => {
                    return commonFakes.userSpaceShipWidth;
                });
                spyOn(UserSpaceShipMaths.prototype, 'getHeight').and.callFake(() => {
                    return commonFakes.userSpaceShipHeight;
                });
                spyOn(UserSpaceShipMaths.prototype, 'moveToNextLeftEllipticalPosition').and.callFake(() => {
                    return commonFakes.position;
                });
                spyOn(UserSpaceShip.prototype, 'setState').and.callFake(() => {
                });
                
                sut.moveToLeft();
                
                expect(UserSpaceShipMaths.prototype.getWidth).toHaveBeenCalled();
                expect(UserSpaceShipMaths.prototype.getWidth.calls.count()).toEqual(commonFakes.once);
            });
            
            it('Without any parameter invokes "getWidth" which returns the Width of the Ship', () => {
                let setStateParameter;                
                let sut = new UserSpaceShip(commonFakes);
                spyOn(UserSpaceShipMaths.prototype, 'getWidth').and.callFake(() => {
                    return commonFakes.userSpaceShipWidth;
                });
                spyOn(UserSpaceShipMaths.prototype, 'getHeight').and.callFake(() => {
                    return commonFakes.userSpaceShipHeight;
                });
                spyOn(UserSpaceShipMaths.prototype, 'moveToNextLeftEllipticalPosition').and.callFake(() => {
                    return commonFakes.position;
                });
                spyOn(UserSpaceShip.prototype, 'setState').and.callFake((state) => {
                    setStateParameter = state;
                });
                
                sut.moveToLeft();
                
                expect(setStateParameter.style.width).toEqual(commonFakes.userSpaceShipWidth);
            });
            
            it('Without any parameter invokes "getHeight" methos from "UserSpaceShipMaths" object', () => {
                let sut = new UserSpaceShip(commonFakes);
                spyOn(UserSpaceShipMaths.prototype, 'getHeight').and.callFake(() => {
                    return commonFakes.userSpaceShipHeight;
                });
                spyOn(UserSpaceShipMaths.prototype, 'getWidth').and.callFake(() => {
                    return commonFakes.userSpaceShipWidth;
                });
                spyOn(UserSpaceShipMaths.prototype, 'moveToNextLeftEllipticalPosition').and.callFake(() => {
                    return commonFakes.position;
                });
                spyOn(UserSpaceShip.prototype, 'setState').and.callFake(() => {
                });
                
                sut.moveToLeft();
                
                expect(UserSpaceShipMaths.prototype.getHeight).toHaveBeenCalled();
                expect(UserSpaceShipMaths.prototype.getHeight.calls.count()).toEqual(commonFakes.once);
            });
            
            it('Without any parameter invokes "getHeight" which returns the Width of the Ship', () => {
                let setStateParameter;                
                let sut = new UserSpaceShip(commonFakes);
                spyOn(UserSpaceShipMaths.prototype, 'getHeight').and.callFake(() => {
                    return commonFakes.userSpaceShipHeight;
                });
                spyOn(UserSpaceShipMaths.prototype, 'getWidth').and.callFake(() => {
                    return commonFakes.userSpaceShipWidth;
                });
                spyOn(UserSpaceShipMaths.prototype, 'moveToNextLeftEllipticalPosition').and.callFake(() => {
                    return commonFakes.position;
                });
                spyOn(UserSpaceShip.prototype, 'setState').and.callFake((state) => {
                    setStateParameter = state;
                });
                
                sut.moveToLeft();
                
                expect(setStateParameter.style.height).toEqual(commonFakes.userSpaceShipHeight);
            });
            
            it('Without any parameter invokes "getRotation" methos from "UserSpaceShipMaths" object', () => {
                let setStateParameter;                
                let sut = new UserSpaceShip(commonFakes);
                spyOn(UserSpaceShipMaths.prototype, 'getRotation').and.callFake(() => {
                    return commonFakes.ellipsePathInitialAngle;
                });
                spyOn(UserSpaceShipMaths.prototype, 'getHeight').and.callFake(() => {
                    return commonFakes.userSpaceShipHeight;
                });
                spyOn(UserSpaceShipMaths.prototype, 'getWidth').and.callFake(() => {
                    return commonFakes.userSpaceShipWidth;
                });
                spyOn(UserSpaceShipMaths.prototype, 'moveToNextLeftEllipticalPosition').and.callFake(() => {
                    return commonFakes.position;
                });
                spyOn(UserSpaceShip.prototype, 'setState').and.callFake((state) => {
                    setStateParameter = state;
                });
                
                sut.moveToLeft();
                
                expect(setStateParameter.style.height).toEqual(commonFakes.userSpaceShipHeight);
            });
        });
    });
    
    describe('stopMovingToLeft - ', () => {
        it('With a defined "movementToLeftInterval", then invokes "clearInterval" from "window" object', () => {
            spyOn(window, 'clearInterval').and.callFake(() => {                
            });            
            let sut = new UserSpaceShip(commonFakes);
            sut.movementToLeftInterval = commonFakes.EmptyObject;
            
            sut.stopMovingToLeft();
            
            expect(window.clearInterval).toHaveBeenCalledWith(commonFakes.EmptyObject);
            expect(window.clearInterval.calls.count()).toEqual(commonFakes.once);
        });
        
        it('With an undefined "movementToLeftInterval", then never invokes "clearInterval" from "window" object', () => {
            spyOn(window, 'clearInterval').and.callFake(() => {                
            });            
            let sut = new UserSpaceShip(commonFakes);
            sut.movementToLeftInterval = undefined;
            
            sut.stopMovingToLeft();
            
            expect(window.clearInterval).not.toHaveBeenCalled();
            expect(window.clearInterval.calls.count()).toEqual(commonFakes.anytime);
        });
        
        it('With a defined "movementToRightInterval" amd when the user space ship is stopped from left direction, with the stopped image, invokes the "setState" from the "sut" object', () => {
            let sut = new UserSpaceShip(commonFakes);
            sut.state.image = sut.state.images.toLeft;
            sut.movementToLeftInterval = commonFakes.EmptyObject;
            spyOn(sut, 'setState').and.callFake(function () {
                this.state.image = this.state.images.stopped;
            }.bind(sut));
            
            sut.stopMovingToLeft();
            
            expect(sut.setState).toHaveBeenCalled();
            expect(sut.setState.calls.count()).toEqual(commonFakes.once);
        });
        
        it('With a defined "movementToRightInterval" amd when the user space ship is stopped from left direction, it sets the stopped image', () => {
            let sut = new UserSpaceShip(commonFakes);
            sut.state.image = sut.state.images.toLeft;
            sut.movementToLeftInterval = commonFakes.EmptyObject;
            spyOn(sut, 'setState').and.callFake(function () {
                this.state.image = this.state.images.stopped;
            }.bind(sut));
            
            sut.stopMovingToLeft();
            
            expect(sut.state.image).toEqual(sut.state.images.stopped);
        });
    });
    
    describe('startMovingToRight - When the start moving to left event is called - ', () => {
        it('Without any parameter invokes "setInterval" method from "window" object', () => {
            let sut = new UserSpaceShip(commonFakes);
            spyOn(window, 'setInterval').and.callFake(() => {                
            });
            spyOn(sut, 'setState').and.callFake(function () {
                this.state.image = this.state.images.toRight;
            }.bind(sut));
            
            sut.startMovingToRight();
            
            expect(window.setInterval).toHaveBeenCalledWith(jasmine.any(Function), commonFakes.movementInterval);
            expect(window.setInterval.calls.count()).toEqual(commonFakes.once);
        });
        
        it('Without any parameter invokes "bind" method from "Function" object', () => {
            let sut = new UserSpaceShip(commonFakes);
            spyOn(sut, 'setState').and.callFake(function () {
                this.state.image = this.state.images.toRight;
            }.bind(sut));
            spyOn(window, 'setInterval').and.callFake(() => {                
            });
            spyOn(sut.moveToRight, 'bind').and.callFake(() => {
            });
            
            sut.startMovingToRight();
            
            expect(sut.moveToRight.bind).toHaveBeenCalledWith(jasmine.any(UserSpaceShip));
            expect(sut.moveToRight.bind.calls.count()).toEqual(commonFakes.once);
        });
        
        it('Without any parameter calls "bind" method from "Function" object, then it sets the "movementToRightInterval" value', () => {
            let sut = new UserSpaceShip(commonFakes);
            spyOn(sut, 'setState').and.callFake(function () {
                this.state.image = this.state.images.toRight;
            }.bind(sut));
            spyOn(window, 'setInterval').and.callFake(() => {
                return commonFakes.EmptyObject;
            });
            spyOn(sut.moveToRight, 'bind').and.callFake(() => {
            });
            
            sut.startMovingToRight();
            
            expect(sut.movementToRightInterval).toBeDefined();
        });
        
        it('Without any parameter invokes "stopMoving" from the "sut" object', () => {
            let sut = new UserSpaceShip(commonFakes);
            spyOn(sut, 'setState').and.callFake(function () {
                this.state.image = this.state.images.toRight;
            }.bind(sut));
            spyOn(window, 'setInterval').and.callFake(() => {
                return commonFakes.EmptyObject;
            });
            spyOn(sut.moveToRight, 'bind').and.callFake(() => {
            });
            spyOn(sut, 'stopMoving').and.callFake(() => {
            });
            
            sut.startMovingToRight();
            
            expect(sut.stopMoving).toHaveBeenCalled();
            expect(sut.stopMoving.calls.count()).toEqual(commonFakes.once);
        });
        
        it('With the image to Right direction, invokes the "setState" from the "sut" object', () => {
            let sut = new UserSpaceShip(commonFakes);
            spyOn(sut, 'setState').and.callFake(function () {
                this.state.image = this.state.images.toRight;
            }.bind(sut));
            
            sut.startMovingToRight();
            
            expect(sut.setState).toHaveBeenCalled();
            expect(sut.setState.calls.count()).toEqual(commonFakes.once);
        });
        
        it('With another image, it changes to the image Right direction', () => {
            let sut = new UserSpaceShip(commonFakes);
            spyOn(sut, 'setState').and.callFake(function () {
                this.state.image = this.state.images.toRight;
            }.bind(sut));
            
            sut.startMovingToRight();
            
            expect(sut.state.image).toEqual(sut.state.images.toRight);
        });
        
        it('With an "keyboard event" invokes the "preventDefault" method from the "event" object', () => {
            let sut = new UserSpaceShip(commonFakes);
            spyOn(sut, 'setState').and.callFake(function () {
                this.state.image = this.state.images.toLeft;
            }.bind(sut));
            spyOn(commonFakes.eventRightKeyCodeWithPreventDefault, 'preventDefault').and.callFake((event) => {
            });
            
            sut.startMovingToRight(commonFakes.eventRightKeyCodeWithPreventDefault);
            
            expect(commonFakes.eventRightKeyCodeWithPreventDefault.preventDefault).toHaveBeenCalled();
            expect(commonFakes.eventRightKeyCodeWithPreventDefault.preventDefault.calls.count()).toEqual(commonFakes.once);
        });
        
        it('With an "keyboard event" that doesn\'t have a "preventDefault" method, then it doesn\'t do anything', () => {
            let sut = new UserSpaceShip(commonFakes);
            spyOn(sut, 'setState').and.callFake(function () {
                this.state.image = this.state.images.toLeft;
            }.bind(sut));
            spyOn(commonFakes.eventRightKeyCodeWithPreventDefault, 'preventDefault').and.callFake((event) => {
            });
            
            sut.startMovingToRight(commonFakes.eventLeftKeyCode);
            
            expect(commonFakes.eventRightKeyCodeWithPreventDefault.preventDefault).not.toHaveBeenCalled();
        });
        
        it('Without a "keyboard event", then it doesn\'t throw any Exception', () => {
            let sut = new UserSpaceShip(commonFakes);
            spyOn(sut, 'setState').and.callFake(function () {
                this.state.image = this.state.images.toLeft;
            }.bind(sut));
            spyOn(commonFakes.eventRightKeyCodeWithPreventDefault, 'preventDefault').and.callFake((event) => {
            });
            
            expect(() => {
                sut.startMovingToRight();
            }).not.toThrow();
        });
    });

    describe('moveToRight - ', () => {
        describe('when user press moveToRight button then ship is moved to left elliptical direction', () => {
            it('without any parameter invokes "moveToNextRightEllipticalPosition" method from "UserSpaceShipMaths" object', () => {
                let sut = new UserSpaceShip(commonFakes);
                spyOn(UserSpaceShipMaths.prototype, 'getWidth').and.callFake(() => {
                    return commonFakes.userSpaceShipWidth;
                });
                spyOn(UserSpaceShipMaths.prototype, 'getHeight').and.callFake(() => {
                    return commonFakes.userSpaceShipHeight;
                });
                spyOn(UserSpaceShipMaths.prototype, 'moveToNextRightEllipticalPosition').and.callFake(() => {                    
                    return commonFakes.position;
                });
                spyOn(UserSpaceShip.prototype, 'setState').and.callFake(() => {
                });
                
                sut.moveToRight();
                
                expect(UserSpaceShipMaths.prototype.moveToNextRightEllipticalPosition).toHaveBeenCalled();                
                expect(UserSpaceShipMaths.prototype.moveToNextRightEllipticalPosition.calls.count()).toEqual(commonFakes.once);
            });
            
            it('without any parameter invokes "moveToNextRightEllipticalPosition" which returns the new Position', () => {
                let setStateParameter;
                let sut = new UserSpaceShip(commonFakes);            
                spyOn(UserSpaceShipMaths.prototype, 'getWidth').and.callFake(() => {
                    return commonFakes.userSpaceShipWidth;
                });
                spyOn(UserSpaceShipMaths.prototype, 'getHeight').and.callFake(() => {
                    return commonFakes.userSpaceShipHeight;
                });
                spyOn(UserSpaceShipMaths.prototype, 'moveToNextRightEllipticalPosition').and.callFake(() => {                    
                    return commonFakes.position;
                });
                spyOn(UserSpaceShip.prototype, 'setState').and.callFake((state) => {
                    setStateParameter = state;
                });
                
                sut.moveToRight();
                
                expect(setStateParameter.style.top).toEqual(commonFakes.position.top);
                expect(setStateParameter.style.left).toEqual(commonFakes.position.left);
            });
            
            it('without any parameter invokes "setState" method from the SUT object', () => {
                let sut = new UserSpaceShip(commonFakes);
                spyOn(UserSpaceShipMaths.prototype, 'getWidth').and.callFake(() => {
                    return commonFakes.userSpaceShipWidth;
                });
                spyOn(UserSpaceShipMaths.prototype, 'getHeight').and.callFake(() => {
                    return commonFakes.userSpaceShipHeight;
                });
                spyOn(UserSpaceShipMaths.prototype, 'moveToNextRightEllipticalPosition').and.callFake(() => {
                    return commonFakes.position;
                });
                spyOn(UserSpaceShip.prototype, 'setState').and.callFake(() => {
                });
                
                sut.moveToRight();
                
                expect(UserSpaceShip.prototype.setState).toHaveBeenCalledWith(commonFakes.stateInitialPosition);                
                expect(UserSpaceShip.prototype.setState.calls.count()).toEqual(commonFakes.once);
            });
            
            it('Without any parameter invokes "getWidth" methos from "UserSpaceShipMaths" object', () => {
                let sut = new UserSpaceShip(commonFakes);
                spyOn(UserSpaceShipMaths.prototype, 'getWidth').and.callFake(() => {
                    return commonFakes.userSpaceShipWidth;
                });
                spyOn(UserSpaceShipMaths.prototype, 'getHeight').and.callFake(() => {
                    return commonFakes.userSpaceShipHeight;
                });
                spyOn(UserSpaceShipMaths.prototype, 'moveToNextRightEllipticalPosition').and.callFake(() => {
                    return commonFakes.position;
                });
                spyOn(UserSpaceShip.prototype, 'setState').and.callFake(() => {
                });
                
                sut.moveToRight();
                
                expect(UserSpaceShipMaths.prototype.getWidth).toHaveBeenCalled();
                expect(UserSpaceShipMaths.prototype.getWidth.calls.count()).toEqual(commonFakes.once);
            });
            
            it('Without any parameter invokes "getWidth" which returns the Width of the Ship', () => {
                let setStateParameter;                
                let sut = new UserSpaceShip(commonFakes);
                spyOn(UserSpaceShipMaths.prototype, 'getWidth').and.callFake(() => {
                    return commonFakes.userSpaceShipWidth;
                });
                spyOn(UserSpaceShipMaths.prototype, 'getHeight').and.callFake(() => {
                    return commonFakes.userSpaceShipHeight;
                });
                spyOn(UserSpaceShipMaths.prototype, 'moveToNextRightEllipticalPosition').and.callFake(() => {
                    return commonFakes.position;
                });
                spyOn(UserSpaceShip.prototype, 'setState').and.callFake((state) => {
                    setStateParameter = state;
                });
                
                sut.moveToRight();
                
                expect(setStateParameter.style.width).toEqual(commonFakes.userSpaceShipWidth);
            });
            
            it('Without any parameter invokes "getHeight" methos from "UserSpaceShipMaths" object', () => {
                let sut = new UserSpaceShip(commonFakes);
                spyOn(UserSpaceShipMaths.prototype, 'getHeight').and.callFake(() => {
                    return commonFakes.userSpaceShipHeight;
                });
                spyOn(UserSpaceShipMaths.prototype, 'getWidth').and.callFake(() => {
                    return commonFakes.userSpaceShipWidth;
                });
                spyOn(UserSpaceShipMaths.prototype, 'moveToNextRightEllipticalPosition').and.callFake(() => {
                    return commonFakes.position;
                });
                spyOn(UserSpaceShip.prototype, 'setState').and.callFake(() => {
                });
                
                sut.moveToRight();
                
                expect(UserSpaceShipMaths.prototype.getHeight).toHaveBeenCalled();
                expect(UserSpaceShipMaths.prototype.getHeight.calls.count()).toEqual(commonFakes.once);
            });
            
            it('Without any parameter invokes "getHeight" which returns the Width of the Ship', () => {
                let setStateParameter;                
                let sut = new UserSpaceShip(commonFakes);
                spyOn(UserSpaceShipMaths.prototype, 'getHeight').and.callFake(() => {
                    return commonFakes.userSpaceShipHeight;
                });
                spyOn(UserSpaceShipMaths.prototype, 'getWidth').and.callFake(() => {
                    return commonFakes.userSpaceShipWidth;
                });
                spyOn(UserSpaceShipMaths.prototype, 'moveToNextRightEllipticalPosition').and.callFake(() => {
                    return commonFakes.position;
                });
                spyOn(UserSpaceShip.prototype, 'setState').and.callFake((state) => {
                    setStateParameter = state;
                });
                
                sut.moveToRight();
                
                expect(setStateParameter.style.height).toEqual(commonFakes.userSpaceShipHeight);
            });
            
            it('Without any parameter invokes "getRotation" methos from "UserSpaceShipMaths" object', () => {
                let setStateParameter;                
                let sut = new UserSpaceShip(commonFakes);
                spyOn(UserSpaceShipMaths.prototype, 'getRotation').and.callFake(() => {
                    return commonFakes.ellipsePathInitialAngle;
                });
                spyOn(UserSpaceShipMaths.prototype, 'getHeight').and.callFake(() => {
                    return commonFakes.userSpaceShipHeight;
                });
                spyOn(UserSpaceShipMaths.prototype, 'getWidth').and.callFake(() => {
                    return commonFakes.userSpaceShipWidth;
                });
                spyOn(UserSpaceShipMaths.prototype, 'moveToNextRightEllipticalPosition').and.callFake(() => {
                    return commonFakes.position;
                });
                spyOn(UserSpaceShip.prototype, 'setState').and.callFake((state) => {
                    setStateParameter = state;
                });
                
                sut.moveToRight();
                
                expect(setStateParameter.style.height).toEqual(commonFakes.userSpaceShipHeight);
            });
        });
    });
    
    describe('stopMovingToRight - ', () => {
        it('With a defined "movementToRightInterval", then invokes "clearInterval" from "window" object', () => {
            spyOn(window, 'clearInterval').and.callFake(() => {                
            });            
            let sut = new UserSpaceShip(commonFakes);
            sut.movementToRightInterval = commonFakes.EmptyObject;
            
            sut.stopMovingToRight();
            
            expect(window.clearInterval).toHaveBeenCalledWith(commonFakes.EmptyObject);
            expect(window.clearInterval.calls.count()).toEqual(commonFakes.once);
        });
        
        it('With an undefined "movementToRightInterval", then never invokes "clearInterval" from "window" object', () => {
            spyOn(window, 'clearInterval').and.callFake(() => {                
            });            
            let sut = new UserSpaceShip(commonFakes);
            sut.movementToRightInterval = undefined;
            
            sut.stopMovingToRight();
            
            expect(window.clearInterval).not.toHaveBeenCalled();
            expect(window.clearInterval.calls.count()).toEqual(commonFakes.anytime);
        });
        
        it('With a defined "movementToRightInterval" amd when the user space ship is stopped from right direction, with the stopped image, invokes the "setState" from the "sut" object', () => {
            let sut = new UserSpaceShip(commonFakes);
            sut.state.image = sut.state.images.toRight;
            sut.movementToRightInterval = commonFakes.EmptyObject;
            spyOn(sut, 'setState').and.callFake(function () {
                this.state.image = this.state.images.stopped;
            }.bind(sut));
            
            sut.stopMovingToRight();
            
            expect(sut.setState).toHaveBeenCalled();
            expect(sut.setState.calls.count()).toEqual(commonFakes.once);
        });
        
        it('With a defined "movementToRightInterval" amd when the user space ship is stopped from right direction, it sets the stopped image', () => {
            let sut = new UserSpaceShip(commonFakes);
            sut.state.image = sut.state.images.toRight;
            sut.movementToRightInterval = commonFakes.EmptyObject;
            spyOn(sut, 'setState').and.callFake(function () {
                this.state.image = this.state.images.stopped;
            }.bind(sut));
            
            sut.stopMovingToRight();
            
            expect(sut.state.image).toEqual(sut.state.images.stopped);
        });
    });
    
    describe('stopMoving - ', () => {
        it('Without any parameter invokes the "stopMovingToLeft" method from the "sut" object', () => {
            let sut = new UserSpaceShip(commonFakes);
            spyOn(sut, 'stopMovingToLeft').and.callFake(() => {
            });
            spyOn(sut, 'stopMovingToRight').and.callFake(() => {
            });
            
            sut.stopMoving();
            
            expect(sut.stopMovingToLeft).toHaveBeenCalled();            
            expect(sut.stopMovingToLeft.calls.count()).toEqual(commonFakes.once);
        });
        
        it('Without any parameter invokes the "stopMovingToRight" method from the "sut" object', () => {
            let sut = new UserSpaceShip(commonFakes);
            spyOn(sut, 'stopMovingToLeft').and.callFake(() => {
            });
            spyOn(sut, 'stopMovingToRight').and.callFake(() => {
            });
            sut.maths = commonFakes.ioc.getInstanceOf('userSpaceShipMathsKey');
            
            sut.stopMoving();
            
            expect(sut.stopMovingToRight).toHaveBeenCalled();            
            expect(sut.stopMovingToRight.calls.count()).toEqual(commonFakes.once);
        });
    });
    
    describe('startShotting - ', () => {
        it('With a "userShotKey" string key invokes the "getInstanceOf" method from "IoC4Javascript" object', () => {
            spyOn(IoC4Javascript.prototype, 'getInstanceOf').and.callThrough();
            let sut = new UserSpaceShip(commonFakes);
            
            sut.startShotting();
            
            expect(IoC4Javascript.prototype.getInstanceOf).toHaveBeenCalledWith(commonFakes.userShotKey);
            //TODO: REVISAR !!! Lo llama el 4 veces en lugar de una porque es un Singleton vuelve a computar (LOS TESTS NO SON INDEPENDEINTES) !!!
            //expect(IoC4Javascript.prototype.getInstanceOf.calls.count()).toEqual(commonFakes.once);            
            //// NO FUNCIONA !!! -> IoC4Javascript.prototype.getInstanceOf.calls.rest();
        });
        
        it('With a "position" invokes the "setPosition" method from "UserShot" object', () => {
            spyOn(IoC4Javascript.prototype, 'getInstanceOf').and.callThrough();
            spyOn(UserShot.prototype, 'setPosition').and.callFake(() => {
            });
            spyOn(UserShot.prototype, 'startShotting').and.callFake(() => {
            });
            let sut = new UserSpaceShip(commonFakes);
            
            sut.startShotting();
            
            expect(UserShot.prototype.setPosition).toHaveBeenCalledWith(sut.position);
        });
        
        it('Without any parameter invokes the "startShotting" method from "UserShot" object', () => {
            spyOn(IoC4Javascript.prototype, 'getInstanceOf').and.callThrough();
            spyOn(UserShot.prototype, 'setPosition').and.callFake(() => {
            });
            spyOn(UserShot.prototype, 'startShotting').and.callFake(() => {
            });
            let sut = new UserSpaceShip(commonFakes);
            
            sut.startShotting();
            
            expect(UserShot.prototype.startShotting).toHaveBeenCalled();
        });
    });
    
    describe('stopShotting - ', () => {
        it(' - ', () => {
            
        });
    });
});
