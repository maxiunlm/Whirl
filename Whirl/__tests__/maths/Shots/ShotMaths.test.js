/* global expect */

import CommonFakes from '../../../Selenium/Fakes/commonFakes';
import EllipsePath from '../../../src/maths/paths/EllipsePath';
import Position from '../../../src/maths/paths/Position';
import ShotMaths from '../../../src/maths/Shots/ShotMaths';
import IoC4Javascript from '../../../src/apis/ioc4javascript';


describe('ShotMaths - ', () => {
    let commonFakes = new CommonFakes();
    
    describe('CONSTRUCTOR - ', () => {
        it('Initialices the Object', () => {
            
            let sut = new ShotMaths(commonFakes.ellipsePathDeltaRadius, commonFakes.ellipsePath);
            
            expect(sut.ioc instanceof IoC4Javascript).toBeTruthy();
            expect(sut.deltaRadius).toEqual(commonFakes.ellipsePathDeltaRadius);
            expect(sut.path).toBeDefined();
            expect(sut.path instanceof EllipsePath).toBeTruthy();
        });
        
        it('With a "deltaRadius" and an "EllipsePath" invokes the "initialize" method from the "sut" object', () => {
            spyOn(ShotMaths.prototype, 'initialize').and.callFake(() => {                
            });
            
            let sut = new ShotMaths(commonFakes.ellipsePathDeltaRadius, commonFakes.ellipsePath);
            
            expect(ShotMaths.prototype.initialize).toHaveBeenCalledWith(commonFakes.ellipsePathDeltaRadius, commonFakes.ellipsePath);
            expect(ShotMaths.prototype.initialize.calls.count()).toEqual(commonFakes.once);           
        });
    });
    
    describe('initialize - ', () => {
        it('With a "deltaRadius" and an "EllipsePath" initialices the Object', () => {            
            let sut = new ShotMaths();
            
            sut.initialize(commonFakes.ellipsePathDeltaRadius, commonFakes.ellipsePath);
            
            expect(sut.deltaRadius).toEqual(commonFakes.ellipsePathDeltaRadius);
            expect(sut.path).toBeDefined();
            expect(sut.path instanceof EllipsePath).toBeTruthy();
        });
    });
});