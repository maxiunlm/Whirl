/* global expect, spyOn, Function, jasmine */

import React from 'react';
import ReactDOM from 'react-dom';
import CommonFakes from '../../../Selenium/Fakes/commonFakes';
import UserSpaceShipMaths from '../../../src/maths/UserSpaceShip/UserSpaceShipMaths';
import UserSpaceShip from '../../../src/components/UserSpaceShip/UserSpaceShip';

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
                },
                moveUserSpaceShipToRight: () => {
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

            expect(sut.movementInterval).toEqual(commonFakes.movementInterval);
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
        
        it('Without any parameter invokes "bind" method from "Function" object four times', () => {
            let sut = new UserSpaceShip(commonFakes);
            spyOn(sut.startMovingToLeft, 'bind').and.callFake(() => {
            });
            spyOn(sut.startMovingToRight, 'bind').and.callFake(() => {
            });
            spyOn(sut.stopMovingToLeft, 'bind').and.callFake(() => {
            });
            spyOn(sut.stopMovingToRight, 'bind').and.callFake(() => {
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
        });
    });
    
    describe('startMovingToLeft - When the start moving to left event is called - ', () => {
        it('Without any parameter invokes "setInterval" method from "window" object', () => {
            spyOn(window, 'setInterval').and.callFake(() => {                
            });
            let sut = new UserSpaceShip(commonFakes);
            
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
            
            sut.startMovingToLeft();
            
            expect(sut.movementToLeftInterval).toBeDefined();
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
    });
    
    describe('startMovingToRight - When the start moving to left event is called - ', () => {
        it('Without any parameter invokes "setInterval" method from "window" object', () => {
            spyOn(window, 'setInterval').and.callFake(() => {                
            });
            let sut = new UserSpaceShip(commonFakes);
            
            sut.startMovingToRight();
            
            expect(window.setInterval).toHaveBeenCalledWith(jasmine.any(Function), commonFakes.movementInterval);
            expect(window.setInterval.calls.count()).toEqual(commonFakes.once);
        });
        
        it('Without any parameter invokes "bind" method from "Function" object', () => {
            let sut = new UserSpaceShip(commonFakes);
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
            spyOn(window, 'setInterval').and.callFake(() => {
                return commonFakes.EmptyObject;
            });
            spyOn(sut.moveToRight, 'bind').and.callFake(() => {
            });
            
            sut.startMovingToRight();
            
            expect(sut.movementToRightInterval).toBeDefined();
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
    });
});
