/* global expect */
import ApiFakes from '../../Selenium/Fakes/apiFakes';
import IoC4Javascript from '../../src/apis/ioc4javascript';

describe('IoC4Javascript - ', () => {
    let apiFakes = new ApiFakes();
    describe('CONSTRUCTOR - ', () => {
        it('Without parameters then instance an "IoC4Javascript" object', () => {
            let sut = new IoC4Javascript();

            expect(sut instanceof IoC4Javascript).toBeTruthy();
            expect(sut.types instanceof Object).toBeTruthy();
            expect(sut.constructors instanceof Object).toBeTruthy();
            expect(sut.singletons instanceof Object).toBeTruthy();
            expect(sut.aop instanceof Object).toBeTruthy();
            expect(sut.mapper instanceof Object).toBeTruthy();
        });

        it('SINGLETON - ', () => {
            let sut = new IoC4Javascript();
            let sut2 = new IoC4Javascript();

            expect(window.ioc4JavascriptInstance instanceof IoC4Javascript).toBeTruthy();
            expect(sut).toBe(window.ioc4JavascriptInstance);
            expect(sut).toBe(sut2);
        });
    });

    describe('deleteInstance - ', () => {
        it('Without parameters instance an "IoC4Javascript" object when the "" methos is called then the Songleton Instance is null', () => {
            let sut = new IoC4Javascript();
            expect(window.ioc4JavascriptInstance instanceof IoC4Javascript).toBeTruthy();
            expect(sut).toBe(window.ioc4JavascriptInstance);
            
            sut.deleteInstance();
            expect(window.ioc4JavascriptInstance).toEqual(null);
            expect(sut).not.toBe(window.ioc4JavascriptInstance);
        });
    });
    
    describe('registerConstructor - ', () => {
        it('With a "String Key" and a constructor method then regster this method into the "IoC Object"', () => {
            let sut = new IoC4Javascript();
            let myThirdClass = new apiFakes.MyThirdClass();
            sut.registerConstructor(apiFakes.constructorKey, myThirdClass.constructAnArray.bind(myThirdClass));
            
            let result = sut.getInstanceOf(apiFakes.constructorKey);
            
            expect(result instanceof Array).toBeTruthy();
        });
    });
    
    describe('registerType - ', () => {
        
    });
});
