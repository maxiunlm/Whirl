/* global expect, spyOn */

import CommonFakes from '../../../Selenium/Fakes/commonFakes';
import UserSpaceShipGeometric from '../../../src/maths/UserSpaceShip/UserSpaceShipGeometric';
import EllipsePath from '../../../src/maths/paths/EllipsePath';
import Position from '../../../src/maths/paths/Position';
import Calculus from '../../../src/maths/calculus/Calculus';
import UserSpaceShipMaths from '../../../src/maths/UserSpaceShip/UserSpaceShipMaths';

describe('UserSpaceShipMaths - ', () => {
    let commonFakes = new CommonFakes();
    
    describe('CONSTRUCTOR - ', () => {
        it('Initialices the Object', () => {
            
            let sut = new UserSpaceShipMaths(commonFakes.dimensions);
            
            expect(sut.geometry).toBeDefined();
            expect(sut.geometry instanceof UserSpaceShipGeometric).toBeTruthy();
            expect(sut.path).toBeDefined();
            expect(sut.path instanceof EllipsePath).toBeTruthy();
            expect(sut.calculus instanceof Calculus).toBeTruthy();
        });
    });
    
    describe('getTop - ', () => {        
        it('Returns the "top" position value', () => {      
            let centerY = Math.floor((commonFakes.gameHeight - commonFakes.userSpaceShipHeight) / commonFakes.ellipsePathHalfDivider);            
            let radius = commonFakes.gameHeight * commonFakes.ellipsePathRadiusPercentage;
            let sut = new UserSpaceShipMaths(commonFakes.dimensions);
            
            let result = sut.getTop();
            
            expect(result).toEqual(centerY + ((radius + commonFakes.ellipsePathDeltaA) * Math.cos(commonFakes.ellipsePathInitialAngle)));
        });
    });
    
    describe('getLeft - ', () => {        
        it('Returns the "left" position value', () => {
            let centerX = Math.floor((commonFakes.gameWidth - commonFakes.userSpaceShipWidth) / commonFakes.ellipsePathHalfDivider);         
            let radius = commonFakes.gameHeight * commonFakes.ellipsePathRadiusPercentage;
            let sut = new UserSpaceShipMaths(commonFakes.dimensions);
            
            let result = sut.getLeft();
            
            expect(result).toEqual(centerX + ((radius + commonFakes.ellipsePathDeltaB) * Math.sin(commonFakes.ellipsePathInitialAngle)));
        });
    });
    
    describe('getWidth - ', () => {        
        it('Without any parameter returns the "width" value of the Space Ship', () => {            
            let sut = new UserSpaceShipMaths(commonFakes.dimensions);
            
            let result = sut.getWidth();
            
            expect(result).toEqual(commonFakes.userSpaceShipWidth);
        });
    });
    
    describe('getHeight - ', () => {        
        it('Without any parameter returns the "height" value of the Space Ship', () => {            
            let sut = new UserSpaceShipMaths(commonFakes.dimensions);
            
            let result = sut.getHeight();
            
            expect(result).toEqual(commonFakes.userSpaceShipHeight);
        });
    });
    
    describe('getRotation - ', () => {        
        it('With a "Radian Angle" parameter invokes the "toDegrees" method from "Calculus" object', () => {            
            let sut = new UserSpaceShipMaths(commonFakes.dimensions);
            spyOn(Calculus.prototype, 'toDegrees').and.callFake(() => {});
            
            let result = sut.getRotation();
            
            expect(Calculus.prototype.toDegrees).toHaveBeenCalledWith(commonFakes.ellipsePathInitialAngle);
            expect(Calculus.prototype.toDegrees.calls.count()).toEqual(commonFakes.once);
        });
        
        it('Without any parameter returns the "rotation angle" value of the Space Ship', () => {            
            let sut = new UserSpaceShipMaths(commonFakes.dimensions);
            let calculus = new Calculus();
            
            let result = sut.getRotation();
            
            expect(result).toEqual((-1 * calculus.toDegrees(commonFakes.ellipsePathInitialAngle) % (360)));
        });
    });
    
    describe('moveToNextLeftEllipticalPosition - ', () => {
        it('Without any parameter moves to the next left elliptical position', () => {            
            let sut = new UserSpaceShipMaths(commonFakes.dimensions);
            let actualAngle = sut.path.angle;
            
            let result = sut.moveToNextLeftEllipticalPosition();
            
            expect(sut.path.angle).toEqual(actualAngle - sut.path.deltaAngle);
            expect(result.left).toEqual(sut.path.centerX + ((sut.path.radius + sut.path.deltaB) * Math.sin(sut.path.angle)));
            expect(result.top).toEqual(sut.path.centerY + ((sut.path.radius + sut.path.deltaA) * Math.cos(sut.path.angle)));
        });
        
        it('With a big angle correct its value', () => {            
            let sut = new UserSpaceShipMaths(commonFakes.dimensions);
            sut.path.angle = -2 * Math.PI;
            
            sut.moveToNextLeftEllipticalPosition();
            
            expect(commonFakes.rountToTwoDecimals(sut.path.angle)).toEqual(-sut.path.deltaAngle);
        });
    });
    
    describe('moveToNextRightEllipticalPosition - ', () => {
        it('Without any parameter moves to the next left elliptical position', () => {            
            let sut = new UserSpaceShipMaths(commonFakes.dimensions);
            let actualAngle = sut.path.angle;
            
            let result = sut.moveToNextRightEllipticalPosition();
            
            expect(sut.path.angle).toEqual(sut.path.deltaAngle - actualAngle);
            expect(result.left).toEqual(sut.path.centerX + ((sut.path.radius + sut.path.deltaB) * Math.sin(sut.path.angle)));
            expect(result.top).toEqual(sut.path.centerY + ((sut.path.radius + sut.path.deltaA) * Math.cos(sut.path.angle)));
        });
        
        it('With a big angle correct its value', () => {            
            let sut = new UserSpaceShipMaths(commonFakes.dimensions);
            sut.path.angle = 2 * Math.PI;
            
            sut.moveToNextRightEllipticalPosition();
            
            expect(commonFakes.rountToTwoDecimals(sut.path.angle)).toEqual(sut.path.deltaAngle);
        });
    });
});