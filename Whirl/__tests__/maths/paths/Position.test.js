/* global expect, spyOn */

import CommonFakes from '../../../Selenium/Fakes/commonFakes';
import Position from '../../../src/maths/paths/Position';

describe('Position - ', () => {
    let commonFakes = new CommonFakes();
    
    describe('CONSTRUCTOR - ', () => {
        it('Without any parameter initializes the Object', () => {
            
            let sut  = new Position();
            
            expect(sut.left).toEqual(commonFakes.initialNumberValue);
            expect(sut.top).toEqual(commonFakes.initialNumberValue);
        });
        
        it('With "Left" parameter initializes the Object', () => {
            
            let sut  = new Position(commonFakes.positionLeft);
            
            expect(sut.left).toEqual(commonFakes.positionLeft);
            expect(sut.top).toEqual(commonFakes.initialNumberValue);
        });
        
        it('With "Top" parameter initializes the Object', () => {
            
            let sut  = new Position(undefined, commonFakes.positionTop);
            
            expect(sut.left).toEqual(commonFakes.initialNumberValue);
            expect(sut.top).toEqual(commonFakes.positionTop);
        });
        
        it('With "Left" and  "Top" parameters initializes the Object', () => {
            
            let sut  = new Position(commonFakes.positionLeft, commonFakes.positionTop);
            
            expect(sut.left).toEqual(commonFakes.positionLeft);
            expect(sut.top).toEqual(commonFakes.positionTop);
        });
        
        it('With "left" and "top" parameters invokes the "setPosition" from the "sut" object', () => {
            spyOn(Position.prototype, 'setPosition').and.callFake(() => {});
            
            let sut = new Position(commonFakes.positionLeft, commonFakes.positionTop);
            
            expect(Position.prototype.setPosition).toHaveBeenCalledWith(commonFakes.positionLeft, commonFakes.positionTop);
            expect(Position.prototype.setPosition.calls.count()).toEqual(commonFakes.once);
        });
    });
    
    describe('setPosition - ',() => {
        it('With "left" and "top" parameters sets the position values', () => {
            let sut = new Position();
            
            sut.setPosition(commonFakes.positionLeft, commonFakes.positionTop);
            
            expect(sut.left).toEqual(commonFakes.positionLeft);
            expect(sut.top).toEqual(commonFakes.positionTop);
        });
        
        it('Without any parameter sets the position values to default Integer value', () => {
            let sut = new Position();
            
            sut.setPosition();
            
            expect(sut.left).toEqual(commonFakes.defaultInteger);
            expect(sut.top).toEqual(commonFakes.defaultInteger);
        });
    });
});
