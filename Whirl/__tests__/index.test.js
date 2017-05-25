/* global spyOn, expect, jasmine, Function */

import React from 'react';
import ReactDOM from 'react-dom';
import MainApp from '../src/index.js';
import CommonFakes from '../Selenium/Fakes/commonFakes';
import IoC4Javascript from '../src/apis/ioc4javascript';
import Calculus from '../src/maths/calculus/Calculus';
import Dimensions from '../src/maths/paths/Dimensions';
import EllipsePath from '../src/maths/paths/EllipsePath';
import Position from '../src/maths/paths/Position';
import UserSpaceShipMaths from '../src/maths/UserSpaceShip/UserSpaceShipMaths';
import UserSpaceShipGeometric from '../src/maths/UserSpaceShip/UserSpaceShipGeometric';


describe('Index - ', () => {
    let commonFakes = new CommonFakes();
    let height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    let width = screen.width;
    
    beforeEach(() => {
        /*
        let ioc = new IoC4Javascript();
        ioc.deleteInstance();
        */
    });
    
    /* // No funciopna !!!! : Target container is not a DOM element. !!!!
    it('renders without crashing', () => {
        const div = document.createElement('div');
        var mainApp = new MainApp();
        
        mainApp.startApplication();
    });
    // */
    
    describe('CONSTRUCTOR - ', () => {
        it('Without any parameter when the app starts creates the MainApp object', () => {
            spyOn(console, 'log').and.callFake(() => {});
            spyOn(IoC4Javascript.prototype, 'registerType').and.callFake(() => {
            });
            spyOn(IoC4Javascript.prototype, 'registerConstructor').and.callFake(() => {
            });
            
            let sut = new MainApp();
            
            expect(sut instanceof MainApp).toBeTruthy();
            expect(sut.ioc instanceof IoC4Javascript).toBeTruthy(); 
        });

        it('Obtain the game dimmensions', () => {
            spyOn(console, 'log').and.callFake(() => {});
            spyOn(IoC4Javascript.prototype, 'registerType').and.callFake(() => {
            });
            spyOn(IoC4Javascript.prototype, 'registerConstructor').and.callFake(() => {
            });
            
            let sut = new MainApp();

            expect(sut.height).toBeDefined(); 
            expect(sut.height).toEqual(height); 
            expect(sut.width).toBeDefined(); 
            expect(sut.width).toEqual(width); 
        });
        
        it('Without any parameter invokes the "registerObjectsConfigurations" method from the "sut" object', ()=> {
            spyOn(IoC4Javascript.prototype, 'registerType').and.callFake(() => {
            });
            spyOn(IoC4Javascript.prototype, 'registerConstructor').and.callFake(() => {
            });
            spyOn(MainApp.prototype, 'registerObjectsConfigurations').and.callFake(() => {                
            });
            
            new MainApp();
            
            expect(MainApp.prototype.registerObjectsConfigurations).toHaveBeenCalled();
            expect(MainApp.prototype.registerObjectsConfigurations.calls.count()).toEqual(commonFakes.once);
        });
    });
    
    describe('registerObjectsConfigurations - ', () => {
        
        it('With the "Dimensions" type and the "dimensionsKey" string key invokes the "registerType" method from the "IoC4Javascript" object', () => {
            spyOn(IoC4Javascript.prototype, 'registerType').and.callFake(() => {
            });
            spyOn(IoC4Javascript.prototype, 'registerSingletonType').and.callFake(() => {
            });
            spyOn(IoC4Javascript.prototype, 'registerConstructor').and.callFake(() => {
            });
            let sut = new MainApp();
            
            sut.registerObjectsConfigurations();
            
            expect(IoC4Javascript.prototype.registerSingletonType).toHaveBeenCalledWith(Dimensions, commonFakes.dimensionsKey);
        });
        
        it('With the "UserSpaceShipMaths" type and the "userSpaceShipMathsKey" string key invokes the "registerType" method from the "IoC4Javascript" object', () => {
            spyOn(IoC4Javascript.prototype, 'registerType').and.callFake(() => {
            });
            spyOn(IoC4Javascript.prototype, 'registerSingletonType').and.callFake(() => {
            });
            spyOn(IoC4Javascript.prototype, 'registerConstructor').and.callFake(() => {
            });
            let sut = new MainApp();
            
            sut.registerObjectsConfigurations();
            
            expect(IoC4Javascript.prototype.registerType).toHaveBeenCalledWith(UserSpaceShipMaths, commonFakes.userSpaceShipMathsKey);
        });
        
        it('With the "UserSpaceShipGeometric" type and the "userSpaceShipGeometricKey" string key invokes the "registerType" method from the "IoC4Javascript" object', () => {
            spyOn(IoC4Javascript.prototype, 'registerType').and.callFake(() => {
            });
            spyOn(IoC4Javascript.prototype, 'registerSingletonType').and.callFake(() => {
            });
            spyOn(IoC4Javascript.prototype, 'registerConstructor').and.callFake(() => {
            });
            let sut = new MainApp();
            
            sut.registerObjectsConfigurations();
            
            expect(IoC4Javascript.prototype.registerSingletonType).toHaveBeenCalledWith(UserSpaceShipGeometric, commonFakes.userSpaceShipGeometricKey);
        });
        
        it('With the "EllipsePath" type and the "ellipsePathKey" string key invokes the "registerType" method from the "IoC4Javascript" object', () => {
            spyOn(IoC4Javascript.prototype, 'registerType').and.callFake(() => {
            });
            spyOn(IoC4Javascript.prototype, 'registerSingletonType').and.callFake(() => {
            });
            spyOn(IoC4Javascript.prototype, 'registerConstructor').and.callFake(() => {
            });
            let sut = new MainApp();
            
            sut.registerObjectsConfigurations();
            
            expect(IoC4Javascript.prototype.registerType).toHaveBeenCalledWith(EllipsePath, commonFakes.ellipsePathKey);
        });
        
        it('With the "Calculus" type and the "calculusKey" string key invokes the "registerType" method from the "IoC4Javascript" object', () => {
            spyOn(IoC4Javascript.prototype, 'registerType').and.callFake(() => {
            });
            spyOn(IoC4Javascript.prototype, 'registerSingletonType').and.callFake(() => {
            });
            spyOn(IoC4Javascript.prototype, 'registerConstructor').and.callFake(() => {
            });
            let sut = new MainApp();
            
            sut.registerObjectsConfigurations();
            
            expect(IoC4Javascript.prototype.registerSingletonType).toHaveBeenCalledWith(Calculus, commonFakes.calculusKey);
        });
        
        it('With the "Position" type and the "positionKey" string key invokes the "registerType" method from the "IoC4Javascript" object', () => {
            spyOn(IoC4Javascript.prototype, 'registerType').and.callFake(() => {
            });
            spyOn(IoC4Javascript.prototype, 'registerSingletonType').and.callFake(() => {
            });
            spyOn(IoC4Javascript.prototype, 'registerConstructor').and.callFake(() => {
            });
            let sut = new MainApp();
            
            sut.registerObjectsConfigurations();
            
            expect(IoC4Javascript.prototype.registerType).toHaveBeenCalledWith(Position, commonFakes.positionKey);
        });
        
        it('With a "constructorCallback" method and the "dimensionsKey" string key invokes the "registerConstructor" method from the "IoC4Javascript" object', () => {
            spyOn(IoC4Javascript.prototype, 'registerType').and.callFake(() => {
            });
            spyOn(IoC4Javascript.prototype, 'registerSingletonType').and.callFake(() => {
            });
            spyOn(IoC4Javascript.prototype, 'registerConstructor').and.callFake(() => {
            });
            let sut = new MainApp();
            
            sut.registerObjectsConfigurations();
            
            expect(IoC4Javascript.prototype.registerConstructor).toHaveBeenCalledWith(commonFakes.dimensionsKey, jasmine.any(Function));
        });
        
        /* TODO: REVISAR !!! Lo llama el 2 veces por cada TEST, como es un Singleton vuelve a computar (LOS TESTS NO SON INDEPENDEINTES) !!!
        it('Calls the "registerConstructor" method from the "IoC4Javascript" object twice', () => {
            spyOn(IoC4Javascript.prototype, 'registerType').and.callFake(() => {
            });
            spyOn(IoC4Javascript.prototype, 'registerConstructor').and.callFake(() => {
            });   
            let sut = new MainApp();
            
            sut.registerObjectsConfigurations();
            expect(IoC4Javascript.prototype.registerConstructor.calls.count()).toEqual(commonFakes.twice);
            //// NO FUNCIONA !!! -> IoC4Javascript.prototype.registerConstructor.calls.rest();
        });
        
        it('Calls the "registerType" method from the "IoC4Javascript" object twice', () => {
            spyOn(IoC4Javascript.prototype, 'registerType').and.callFake(() => {
            });
            spyOn(IoC4Javascript.prototype, 'registerConstructor').and.callFake(() => {
            });   
            let sut = new MainApp();
            
            sut.registerObjectsConfigurations();
            
            expect(IoC4Javascript.prototype.registerType.calls.count()).toEqual(commonFakes.twice);            
            //// NO FUNCIONA !!! -> IoC4Javascript.prototype.registerType.calls.rest();
        });*/
       
        it('With "IoC4Javascript" prototype invokes "bind" method from "Function" object once', () => {
            spyOn(IoC4Javascript.prototype, 'registerType').and.callFake(() => {
            });
            spyOn(IoC4Javascript.prototype, 'registerSingletonType').and.callFake(() => {
            });
            spyOn(IoC4Javascript.prototype, 'registerConstructor').and.callFake(() => {
            });
            spyOn(IoC4Javascript.prototype.getInstanceOf, 'bind').and.callFake(() => {
            });
            
            new MainApp();
            
            expect(IoC4Javascript.prototype.getInstanceOf.bind).toHaveBeenCalledWith(jasmine.any(IoC4Javascript));
            expect(IoC4Javascript.prototype.getInstanceOf.bind.calls.count()).toEqual(commonFakes.once);
        });
    });
    
    describe('constructDimensions - ', () => {
        it('With the screen dimensions create an instance of "Dimensions" object', () => {
            let sut = new MainApp();
            sut.width = commonFakes.gameWidth;
            sut.height = commonFakes.gameHeight;
            
            let result = sut.constructDimensions();
            
            expect(result instanceof Dimensions).toBeTruthy();
            expect(result.width).toEqual(commonFakes.gameWidth);
            expect(result.height).toEqual(commonFakes.gameHeight);
        });
    });
});