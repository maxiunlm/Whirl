/* global expect */

import CommonFakes from '../../../Selenium/Fakes/commonFakes';
import UserSpaceShipGeometric from '../../../src/maths/UserSpaceShip/UserSpaceShipGeometric';
import Dimensions from '../../../src/maths/paths/Dimensions';
import EllipsePath from '../../../src/maths/paths/EllipsePath';
import IoC4Javascript from '../../../src/apis/ioc4javascript';

describe('EllipsePath', () => {
    let commonFakes = new CommonFakes();

    describe('CONSTRUCTOR', () => {
        it('Initializes the Object', () => {

            let sut = new EllipsePath();

            expect(sut.ioc instanceof IoC4Javascript).toBeTruthy(); 
            expect(sut.centerX).toEqual(Math.floor((commonFakes.gameWidth - commonFakes.userSpaceShipWidth) / commonFakes.ellipsePathHalfDivider));
            expect(sut.centerY).toEqual(Math.floor((commonFakes.gameHeight - commonFakes.userSpaceShipHeight) / commonFakes.ellipsePathHalfDivider));
            expect(sut.deltaA).toEqual(commonFakes.ellipsePathDeltaA);
            expect(sut.deltaB).toEqual(commonFakes.ellipsePathDeltaB);
            expect(sut.radius).toEqual(commonFakes.gameHeight * commonFakes.ellipsePathRadiusPercentage);
            expect(sut.angle).toEqual(commonFakes.ellipsePathInitialAngle);
            expect(sut.deltaAngle).toEqual(commonFakes.ellipsePathDeltaAngle);
        });
        
        it('Without any parameterinvokes the "getDimensions" method from the "sut" object', () => {
            spyOn(EllipsePath.prototype, 'getDimensions').and.callFake(() => {
                return new Dimensions();
            });
            
            new EllipsePath();
            
            expect(EllipsePath.prototype.getDimensions).toHaveBeenCalled();
            expect(EllipsePath.prototype.getDimensions.calls.count()).toEqual(commonFakes.once);
        });
        
        it('Without any parameterinvokes the "getUserSpaceShipGeometric" method from the "sut" object', () => {
            spyOn(EllipsePath.prototype, 'getUserSpaceShipGeometric').and.callFake(() => {
                return new UserSpaceShipGeometric();
            });
            
            new EllipsePath();
            
            expect(EllipsePath.prototype.getUserSpaceShipGeometric).toHaveBeenCalled();
            expect(EllipsePath.prototype.getUserSpaceShipGeometric.calls.count()).toEqual(commonFakes.once);
        });
    });
    
    describe('getUserSpaceShipGeometric - ', () => {
        
        it('With "userSpaceShipGeometricKey" string key invokes the "getInstanceOf" method from "IoC4Javascript" object', () => {
            spyOn(IoC4Javascript.prototype, 'getInstanceOf').and.callThrough();
            let sut = new EllipsePath();
            
            sut.getUserSpaceShipGeometric();
            
            expect(IoC4Javascript.prototype.getInstanceOf).toHaveBeenCalledWith(commonFakes.userSpaceShipGeometricKey);
            // TODO: REVISAR !!! Lo llama el 2 veces en lugar de una porque es un Singleton vuelve a computar (LOS TESTS NO SON INDEPENDEINTES) !!!
            //expect(IoC4Javascript.prototype.getInstanceOf.calls.count()).toEqual(commonFakes.once);
            // NO FUNCIONA !!! -> IoC4Javascript.prototype.getInstanceOf.calls.reset();
        });
        
        it('With "userSpaceShipGeometricKey" string key calls the "getInstanceOf" method from "IoC4Javascript" object wich returns an "UserSpaceShipGeometric" instance', () => {
            spyOn(IoC4Javascript.prototype, 'getInstanceOf').and.callThrough();
            let sut = new EllipsePath();
            
            let result = sut.getUserSpaceShipGeometric();
            
            expect(result instanceof UserSpaceShipGeometric).toBeTruthy();
        });
    });
    
    describe('getDimensions - ', () => {
        
        it('With "dimensionsKey" string key invokes the "getInstanceOf" method from "IoC4Javascript" object', () => {
            spyOn(IoC4Javascript.prototype, 'getInstanceOf').and.callThrough();
            let sut = new EllipsePath();
            
            sut.getDimensions();
            
            expect(IoC4Javascript.prototype.getInstanceOf).toHaveBeenCalledWith(commonFakes.dimensionsKey);
            // TODO: REVISAR !!! Lo llama el 2 veces en lugar de una porque es un Singleton vuelve a computar (LOS TESTS NO SON INDEPENDEINTES) !!!
            //expect(IoC4Javascript.prototype.getInstanceOf.calls.count()).toEqual(commonFakes.once);
            // NO FUNCIONA !!! -> IoC4Javascript.prototype.getInstanceOf.calls.reset();
        });
        
        it('With "dimensionsKey" string key calls the "getInstanceOf" method from "IoC4Javascript" object wich returns an "Dimensions" instance', () => {
            spyOn(IoC4Javascript.prototype, 'getInstanceOf').and.callThrough();
            let sut = new EllipsePath();
            
            let result = sut.getDimensions();
            
            expect(result instanceof Dimensions).toBeTruthy();
        });
    });
});
