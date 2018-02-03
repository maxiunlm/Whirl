/* global expect, spyOn */

import CommonFakes from '../../../Selenium/Fakes/commonFakes';
import UserSpaceShipGeometric from '../../../src/maths/UserSpaceShip/UserSpaceShipGeometric';
import EllipsePath from '../../../src/maths/paths/EllipsePath';
import Position from '../../../src/maths/paths/Position';
import Dimensions from '../../../src/maths/paths/Dimensions';
import Calculus from '../../../src/maths/calculus/Calculus';
import UserSpaceShipMaths from '../../../src/maths/UserSpaceShip/UserSpaceShipMaths';
import IoC4Javascript from '../../../src/apis/ioc4javascript';

describe('UserSpaceShipMaths - ', () => {
    let commonFakes = new CommonFakes();
    
    describe('CONSTRUCTOR - ', () => {
        it('Initialices the Object', () => {
            
            let sut = new UserSpaceShipMaths();
            
            expect(sut.ioc instanceof IoC4Javascript).toBeTruthy();
            expect(sut.geometry).toBeDefined();
            expect(sut.geometry instanceof UserSpaceShipGeometric).toBeTruthy();
            expect(sut.path).toBeDefined();
            expect(sut.path instanceof EllipsePath).toBeTruthy();
            expect(sut.calculus instanceof Calculus).toBeTruthy();
        });
        
        it('Without any parameterinvokes the "getUserSpaceShipGeometric" method from the "sut" object', () => {
            spyOn(UserSpaceShipMaths.prototype, 'getUserSpaceShipGeometric').and.callFake(() => {
                return new UserSpaceShipGeometric();
            });
            
            new UserSpaceShipMaths(commonFakes);
            
            expect(UserSpaceShipMaths.prototype.getUserSpaceShipGeometric).toHaveBeenCalled();
            expect(UserSpaceShipMaths.prototype.getUserSpaceShipGeometric.calls.count()).toEqual(commonFakes.once);
        });
        
        it('Without any parameterinvokes the "getDimensions" method from the "sut" object', () => {
            spyOn(UserSpaceShipMaths.prototype, 'getDimensions').and.callFake(() => {
                return new Dimensions();
            });
            
            new UserSpaceShipMaths(commonFakes);
            
            expect(UserSpaceShipMaths.prototype.getDimensions).toHaveBeenCalled();
            expect(UserSpaceShipMaths.prototype.getDimensions.calls.count()).toEqual(commonFakes.once);
        });
        
        it('Without any parameterinvokes the "getNewEllipsePath" method from the "sut" object', () => {
            spyOn(UserSpaceShipMaths.prototype, 'getNewEllipsePath').and.callFake(() => {
                return new EllipsePath(new Dimensions(), new UserSpaceShipGeometric());
            });
            
            new UserSpaceShipMaths(commonFakes);
            
            expect(UserSpaceShipMaths.prototype.getNewEllipsePath).toHaveBeenCalled();
            expect(UserSpaceShipMaths.prototype.getNewEllipsePath.calls.count()).toEqual(commonFakes.once);
        });
        
        it('Without any parameterinvokes the "getNewCalculus" method from the "sut" object', () => {
            spyOn(UserSpaceShipMaths.prototype, 'getNewCalculus').and.callFake(() => {
                return new Calculus();
            });
            
            new UserSpaceShipMaths(commonFakes);
            
            expect(UserSpaceShipMaths.prototype.getNewCalculus).toHaveBeenCalled();
            expect(UserSpaceShipMaths.prototype.getNewCalculus.calls.count()).toEqual(commonFakes.once);
        });
    });
    
    describe('getUserSpaceShipGeometric - ', () => {
        
        it('With "userSpaceShipGeometricKey" string key invokes the "getInstanceOf" method from "IoC4Javascript" object', () => {
            spyOn(IoC4Javascript.prototype, 'getInstanceOf').and.callThrough();
            let sut = new UserSpaceShipMaths(commonFakes);
            
            sut.getUserSpaceShipGeometric();
            
            expect(IoC4Javascript.prototype.getInstanceOf).toHaveBeenCalledWith(commonFakes.userSpaceShipGeometricKey);
            // TODO: REVISAR !!! Lo llama el 2 veces en lugar de una porque es un Singleton vuelve a computar (LOS TESTS NO SON INDEPENDEINTES) !!!
            //expect(IoC4Javascript.prototype.getInstanceOf.calls.count()).toEqual(commonFakes.once);
            // NO FUNCIONA !!! -> IoC4Javascript.prototype.getInstanceOf.calls.reset();
        });
        
        it('With "userSpaceShipGeometricKey" string key calls the "getInstanceOf" method from "IoC4Javascript" object wich returns an "UserSpaceShipGeometric" instance', () => {
            spyOn(IoC4Javascript.prototype, 'getInstanceOf').and.callThrough();
            let sut = new UserSpaceShipMaths(commonFakes);
            
            let result = sut.getUserSpaceShipGeometric();
            
            expect(result instanceof UserSpaceShipGeometric).toBeTruthy();
        });
    });
    
    describe('getDimensions - ', () => {
        
        it('With "dimensionsKey" string key invokes the "getInstanceOf" method from "IoC4Javascript" object', () => {
            spyOn(IoC4Javascript.prototype, 'getInstanceOf').and.callThrough();
            let sut = new UserSpaceShipMaths(commonFakes);
            
            sut.getDimensions();
            
            expect(IoC4Javascript.prototype.getInstanceOf).toHaveBeenCalledWith(commonFakes.dimensionsKey);
            // TODO: REVISAR !!! Lo llama el 2 veces en lugar de una porque es un Singleton vuelve a computar (LOS TESTS NO SON INDEPENDEINTES) !!!
            //expect(IoC4Javascript.prototype.getInstanceOf.calls.count()).toEqual(commonFakes.once);
            // NO FUNCIONA !!! -> IoC4Javascript.prototype.getInstanceOf.calls.reset();
        });
        
        it('With "dimensionsKey" string key calls the "getInstanceOf" method from "IoC4Javascript" object wich returns an "Dimensions" instance', () => {
            spyOn(IoC4Javascript.prototype, 'getInstanceOf').and.callThrough();
            let sut = new UserSpaceShipMaths(commonFakes);
            
            let result = sut.getDimensions();
            
            expect(result instanceof Dimensions).toBeTruthy();
        });
    });
    
    describe('getNewEllipsePath - ', () => {
        
        it('With "ellipsePathKey" string key invokes the "getInstanceOf" method from "IoC4Javascript" object', () => {
            spyOn(IoC4Javascript.prototype, 'getInstanceOf').and.callThrough();
            let sut = new UserSpaceShipMaths(commonFakes);
            
            sut.getNewEllipsePath();
            
            expect(IoC4Javascript.prototype.getInstanceOf).toHaveBeenCalledWith(commonFakes.ellipsePathKey);
            // TODO: REVISAR !!! Lo llama el 2 veces en lugar de una porque es un Singleton vuelve a computar (LOS TESTS NO SON INDEPENDEINTES) !!!
            //expect(IoC4Javascript.prototype.getInstanceOf.calls.count()).toEqual(commonFakes.once);
            // NO FUNCIONA !!! -> IoC4Javascript.prototype.getInstanceOf.calls.reset();
        });
        
        it('With "ellipsePathKey" string key calls the "getInstanceOf" method from "IoC4Javascript" object wich returns an "EllipsePath" instance', () => {
            spyOn(IoC4Javascript.prototype, 'getInstanceOf').and.callThrough();
            let sut = new UserSpaceShipMaths(commonFakes);
            
            let result = sut.getNewEllipsePath();
            
            expect(result instanceof EllipsePath).toBeTruthy();
        });
    });
    
    describe('getNewCalculus - ', () => {
        
        it('With "calculusKey" string key invokes the "getInstanceOf" method from "IoC4Javascript" object', () => {
            spyOn(IoC4Javascript.prototype, 'getInstanceOf').and.callThrough();
            let sut = new UserSpaceShipMaths(commonFakes);
            
            sut.getNewCalculus();
            
            expect(IoC4Javascript.prototype.getInstanceOf).toHaveBeenCalledWith(commonFakes.calculusKey);
            // TODO: REVISAR !!! Lo llama el 2 veces en lugar de una porque es un Singleton vuelve a computar (LOS TESTS NO SON INDEPENDEINTES) !!!
            //expect(IoC4Javascript.prototype.getInstanceOf.calls.count()).toEqual(commonFakes.once);
            // NO FUNCIONA !!! -> IoC4Javascript.prototype.getInstanceOf.calls.reset();
        });
        
        it('With "calculusKey" string key calls the "getInstanceOf" method from "IoC4Javascript" object wich returns an "EllipsePath" instance', () => {
            spyOn(IoC4Javascript.prototype, 'getInstanceOf').and.callThrough();
            let sut = new UserSpaceShipMaths(commonFakes);
            
            let result = sut.getNewCalculus();
            
            expect(result instanceof Calculus).toBeTruthy();
        });
    });
    
    describe('getTop - ', () => {        
        it('Returns the "top" position value', () => {      
            let centerY = Math.floor((commonFakes.gameHeight - commonFakes.userSpaceShipHeight) / commonFakes.ellipsePathHalfDivider);            
            let radius = commonFakes.gameHeight * commonFakes.ellipsePathRadiusPercentage;
            let sut = new UserSpaceShipMaths();
            
            let result = sut.getTop();
            
            expect(result).toEqual(centerY + ((radius + commonFakes.ellipsePathDeltaA) * Math.cos(commonFakes.ellipsePathInitialAngle)));
        });
    });
    
    describe('getLeft - ', () => {        
        it('Returns the "left" position value', () => {
            let centerX = Math.floor((commonFakes.gameWidth - commonFakes.userSpaceShipWidth) / commonFakes.ellipsePathHalfDivider);         
            let radius = commonFakes.gameHeight * commonFakes.ellipsePathRadiusPercentage;
            let sut = new UserSpaceShipMaths();
            
            let result = sut.getLeft();
            
            expect(result).toEqual(centerX + ((radius + commonFakes.ellipsePathDeltaB) * Math.sin(commonFakes.ellipsePathInitialAngle)));
        });
    });
    
    describe('getWidth - ', () => {        
        it('Without any parameter returns the "width" value of the Space Ship', () => {            
            let sut = new UserSpaceShipMaths();
            
            let result = sut.getWidth();
            
            expect(result).toEqual(commonFakes.userSpaceShipWidth);
        });
    });
    
    describe('getHeight - ', () => {        
        it('Without any parameter returns the "height" value of the Space Ship', () => {            
            let sut = new UserSpaceShipMaths();
            
            let result = sut.getHeight();
            
            expect(result).toEqual(commonFakes.userSpaceShipHeight);
        });
    });
    
    describe('getRotation - ', () => {        
        it('With a "Radian Angle" parameter invokes the "toDegrees" method from "Calculus" object', () => {            
            let sut = new UserSpaceShipMaths();
            spyOn(Calculus.prototype, 'toDegrees').and.callFake(() => {});
            
            let result = sut.getRotation();
            
            expect(Calculus.prototype.toDegrees).toHaveBeenCalledWith(commonFakes.ellipsePathInitialAngle);
            expect(Calculus.prototype.toDegrees.calls.count()).toEqual(commonFakes.once);
        });
        
        it('Without parameters returns the "rotation angle" value of the Space Ship', () => {
            let sut = new UserSpaceShipMaths();
            let calculus = new Calculus();
            
            let result = sut.getRotation();
            
            expect(result).toEqual((-1 * calculus.toDegrees(commonFakes.ellipsePathInitialAngle) % (360)));
        });
    });
    
    describe('getAngle - ', () => {
        it('Without parameters returns the "angle" value of the Space Ship', () => {
            let sut = new UserSpaceShipMaths();
            
            let result = sut.getAngle();
            
            expect(result).toEqual(commonFakes.ellipsePathInitialAngle);            
        });
    });
    
    describe('moveToNextLeftEllipticalPosition - ', () => {
        it('Without any parameter moves to the next left elliptical position', () => {            
            let sut = new UserSpaceShipMaths();
            let actualAngle = sut.path.angle;
            
            let result = sut.moveToNextLeftEllipticalPosition();
            
            expect(sut.path.angle).toEqual(actualAngle - sut.path.deltaAngle);
            expect(result.left).toEqual(sut.path.centerX + ((sut.path.radius + sut.path.deltaB) * Math.sin(sut.path.angle)));
            expect(result.top).toEqual(sut.path.centerY + ((sut.path.radius + sut.path.deltaA) * Math.cos(sut.path.angle)));
        });
        
        it('With a big angle correct its value', () => {            
            let sut = new UserSpaceShipMaths();
            sut.path.angle = -2 * Math.PI;
            
            sut.moveToNextLeftEllipticalPosition();
            
            expect(commonFakes.rountToTwoDecimals(sut.path.angle)).toEqual(-sut.path.deltaAngle);
        });
    
        it('Without any parameter invokes the "getNextLeftEllipticalPosition" from "EllipsePath" object', () => {
            spyOn(EllipsePath.prototype, 'getNextLeftEllipticalPosition').and.callFake(() => {                
            });
            let sut = new UserSpaceShipMaths();
            
            sut.moveToNextLeftEllipticalPosition();
            
            expect(EllipsePath.prototype.getNextLeftEllipticalPosition).toHaveBeenCalled();
            expect(EllipsePath.prototype.getNextLeftEllipticalPosition.calls.count()).toEqual(commonFakes.once);
        });
    
        it('Without any parameter invokes the "getNextTopEllipticalPosition" from "EllipsePath" object', () => {
            spyOn(EllipsePath.prototype, 'getNextTopEllipticalPosition').and.callFake(() => {                
            });
            let sut = new UserSpaceShipMaths();
            
            sut.moveToNextLeftEllipticalPosition();
            
            expect(EllipsePath.prototype.getNextTopEllipticalPosition).toHaveBeenCalled();
            expect(EllipsePath.prototype.getNextTopEllipticalPosition.calls.count()).toEqual(commonFakes.once);
        });
        
        it('With the "positionKey" string key invokes the "getInstanceOf" method from the "IoC4Javascript" object', () => {
            spyOn(IoC4Javascript.prototype, 'getInstanceOf').and.callThrough();
            let sut = new UserSpaceShipMaths();
            
            sut.moveToNextLeftEllipticalPosition();
            
            expect(IoC4Javascript.prototype.getInstanceOf).toHaveBeenCalledWith(commonFakes.positionKey);
        });
        
        it('With "left" and "top" parameters invokes the "setPosition" from the "sut" object', () => {
            spyOn(Position.prototype, 'setPosition').and.callFake(() => {
            });
            let sut = new UserSpaceShipMaths();
            
            sut.moveToNextLeftEllipticalPosition();
            
            expect(Position.prototype.setPosition).toHaveBeenCalledWith(sut.path.getNextLeftEllipticalPosition(), sut.path.getNextTopEllipticalPosition());
        });
    });
    
    describe('moveToNextRightEllipticalPosition - ', () => {
        it('Without any parameter moves to the next left elliptical position', () => {            
            let sut = new UserSpaceShipMaths();
            let actualAngle = sut.path.angle;
            
            let result = sut.moveToNextRightEllipticalPosition();
            
            expect(sut.path.angle).toEqual(sut.path.deltaAngle - actualAngle);
            expect(result.left).toEqual(sut.path.centerX + ((sut.path.radius + sut.path.deltaB) * Math.sin(sut.path.angle)));
            expect(result.top).toEqual(sut.path.centerY + ((sut.path.radius + sut.path.deltaA) * Math.cos(sut.path.angle)));
        });
        
        it('With a big angle correct its value', () => {            
            let sut = new UserSpaceShipMaths();
            sut.path.angle = 2 * Math.PI;
            
            sut.moveToNextRightEllipticalPosition();
            
            expect(commonFakes.rountToTwoDecimals(sut.path.angle)).toEqual(sut.path.deltaAngle);
        });
    
        it('Without any parameter invokes the "getNextLeftEllipticalPosition" from "EllipsePath" object', () => {
            spyOn(EllipsePath.prototype, 'getNextLeftEllipticalPosition').and.callFake(() => {                
            });
            let sut = new UserSpaceShipMaths();
            
            sut.moveToNextRightEllipticalPosition();
            
            expect(EllipsePath.prototype.getNextLeftEllipticalPosition).toHaveBeenCalled();
            expect(EllipsePath.prototype.getNextLeftEllipticalPosition.calls.count()).toEqual(commonFakes.once);
        });
    
        it('Without any parameter invokes the "getNextTopEllipticalPosition" from "EllipsePath" object', () => {
            spyOn(EllipsePath.prototype, 'getNextTopEllipticalPosition').and.callFake(() => {                
            });
            let sut = new UserSpaceShipMaths();
            
            sut.moveToNextRightEllipticalPosition();
            
            expect(EllipsePath.prototype.getNextTopEllipticalPosition).toHaveBeenCalled();
            expect(EllipsePath.prototype.getNextTopEllipticalPosition.calls.count()).toEqual(commonFakes.once);
        });
        
        it('With the "positionKey" string key invokes the "getInstanceOf" method from the "IoC4Javascript" object', () => {
            spyOn(IoC4Javascript.prototype, 'getInstanceOf').and.callThrough();
            let sut = new UserSpaceShipMaths();
            
            sut.moveToNextRightEllipticalPosition();
            
            expect(IoC4Javascript.prototype.getInstanceOf).toHaveBeenCalledWith(commonFakes.positionKey);
        });
        
        it('With "left" and "top" parameters invokes the "setPosition" from the "sut" object', () => {
            let setPositionCalledCounter = -1; // The constructors do the first call
            spyOn(Position.prototype, 'setPosition').and.callFake(() => {                
                setPositionCalledCounter++;
            });
            let sut = new UserSpaceShipMaths();
            
            sut.moveToNextRightEllipticalPosition();
    
            expect(setPositionCalledCounter).toEqual(commonFakes.once);
        });
    });
});
