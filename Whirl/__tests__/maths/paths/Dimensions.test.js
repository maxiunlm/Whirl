/* global expect */

import Dimensions from '../../../src/maths/paths/Dimensions';
import CommonFakes from '../../../Selenium/Fakes/commonFakes';

describe('Dimensions - ', () => {
    let commonFakes = new CommonFakes();
    
    describe('CONSTRUCTOR - ', () => {
        it('With "with" and "height" dimensions sets the instance attributes', () => {
            
            let sut = new Dimensions(commonFakes.gameWidth, commonFakes.gameHeight);
            
            expect(sut.width).toEqual(commonFakes.gameWidth);
            expect(sut.height).toEqual(commonFakes.gameHeight);
            expect(sut.centerX).toEqual(commonFakes.gameWidth / 2);
            expect(sut.centerY).toEqual(commonFakes.gameHeight / 2);
        });
        
        it('Without any dimension sets the instance attributes to 0 (zero)', () => {
            
            let sut = new Dimensions();
            
            expect(sut.width).toEqual(commonFakes.defaultInteger);
            expect(sut.height).toEqual(commonFakes.defaultInteger);
        });
    });    
});

