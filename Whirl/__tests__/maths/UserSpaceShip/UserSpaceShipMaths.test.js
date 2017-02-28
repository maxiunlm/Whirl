/* global expect */

import CommonFakes from '../../../Selenium/Fakes/commonFakes';
import UserSpaceShipGeometric from '../../../src/maths/UserSpaceShip/UserSpaceShipGeometric';
import EllipsePath from '../../../src/maths/paths/EllipsePath';
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
});