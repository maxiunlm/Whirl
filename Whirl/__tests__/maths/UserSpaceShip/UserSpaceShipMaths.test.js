/* global expect */

import CommonFakes from '../../../Selenium/Fakes/commonFakes';
import UserSpaceShipGeometric from '../../../src/maths/UserSpaceShip/UserSpaceShipGeometric';
import EllipsePath from '../../../src/maths/paths/EllipsePath';
import Position from '../../../src/maths/paths/Position';
import UserSpaceShipMaths from '../../../src/maths/UserSpaceShip/UserSpaceShipMaths';

describe('UserSpaceShipMaths - ', () => {
    let commonFakes = new CommonFakes();
    
    describe('CONSTRUCTOR - ', () => {
        it('Initialices the Object', () => {
            
            let sut = new UserSpaceShipMaths(commonFakes);
            
            expect(sut.geometry).toBeDefined();
            expect(sut.geometry instanceof UserSpaceShipGeometric).toBeTruthy();
            expect(sut.path).toBeDefined();
            expect(sut.path instanceof EllipsePath).toBeTruthy();
        });
    });
    
    describe('getTop - ', () => {        
        it('Returns the "top" position value', () => {      
            let centerY = Math.floor((commonFakes.gameHeight - commonFakes.userSpaceShipHeight) / commonFakes.ellipsePathHalfDivider);            
            let radius = commonFakes.gameHeight * commonFakes.ellipsePathRadiusPercentage;
            let sut = new UserSpaceShipMaths(commonFakes);
            
            let result = sut.getTop();
            
            expect(result).toEqual(centerY + ((radius + commonFakes.ellipsePathDeltaA) * Math.cos(commonFakes.ellipsePathInitialAngle)));
        });
    });
    
    describe('getLeft - ', () => {        
        it('Returns the "left" position value', () => {
            let centerX = Math.floor((commonFakes.gameWidth - commonFakes.userSpaceShipWidth) / commonFakes.ellipsePathHalfDivider);         
            let radius = commonFakes.gameHeight * commonFakes.ellipsePathRadiusPercentage;
            let sut = new UserSpaceShipMaths(commonFakes);
            
            let result = sut.getLeft();
            
            expect(result).toEqual(centerX + ((radius + commonFakes.ellipsePathDeltaB) * Math.sin(commonFakes.ellipsePathInitialAngle)));
        });
    });
    
    describe('getWidth - ', () => {        
        it('Returns the "width" value od the Space Ship', () => {            
            let sut = new UserSpaceShipMaths(commonFakes);
            
            let result = sut.getWidth();
            
            expect(result).toEqual(commonFakes.userSpaceShipWidth);
        });
    });
    
    describe('getHeight - ', () => {        
        it('Returns the "height" value od the Space Ship', () => {            
            let sut = new UserSpaceShipMaths(commonFakes);
            
            let result = sut.getHeight();
            
            expect(result).toEqual(commonFakes.userSpaceShipHeight);
        });
    });
    
    describe('moveToNextLeftEllipticalPosition - ', () => {
        it('Without any parameter moves to the next left elliptical position', () => {            
            let sut = new UserSpaceShipMaths(commonFakes);
            let actualAngle = sut.path.angle;
            
            let result = sut.moveToNextLeftEllipticalPosition();
            
            expect(sut.path.angle).toEqual(actualAngle - sut.path.deltaAngle);
            expect(result.left).toEqual(sut.path.centerX + ((sut.path.radius + sut.path.deltaB) * Math.sin(sut.path.angle)));
            expect(result.top).toEqual(sut.path.centerY + ((sut.path.radius + sut.path.deltaA) * Math.cos(sut.path.angle)));
        });
        
        it('With a big angle correct its value', () => {            
            let sut = new UserSpaceShipMaths(commonFakes);
            sut.path.angle = -2 * Math.PI;
            
            sut.moveToNextLeftEllipticalPosition();
            
            expect(commonFakes.rountToTwoDecimals(sut.path.angle)).toEqual(-sut.path.deltaAngle);
        });
    });
});