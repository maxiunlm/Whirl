/* global expect */

import CommonFakes from '../../../Selenium/Fakes/commonFakes';
import UserSpaceShipGeometric from '../../../src/maths/UserSpaceShip/UserSpaceShipGeometric';

describe('UserSpaceShipMaths - ', () => {
    let commonFakes = new CommonFakes();    
    
    describe('CONSTRUCTOR - ', () => {
        it('Initializes the Object', () => {
            let sut = new UserSpaceShipGeometric();
            
            expect(sut.height).toEqual(commonFakes.userSpaceShipHeight);
            expect(sut.width).toEqual(commonFakes.userSpaceShipWidth);
            expect(sut.top).toEqual(commonFakes.initialNumberValue);
            expect(sut.left).toEqual(commonFakes.initialNumberValue);
        });
    });
});
