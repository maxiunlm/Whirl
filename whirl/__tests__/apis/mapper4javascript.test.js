/* global expect, jasmine, Function */
import ApiFakes from '../../Selenium/Fakes/apiFakes';
import RegisterMapperConfiguration from '../../src/apis/RegisterMapperConfiguration';
import Mapper4Javascript from '../../src/apis/Mapper4Javascript';

describe('Mapper4Javascript - ', () => {
    let apiFakes = new ApiFakes();

    describe('CONSTRUCTOR - ', () => {
        //        it('without parameters then throws an instances of "TypeError" exception.', () => {
        //            try {
        //                let sut = new Mapper4Javascript();
        //                expect(false).toBeTruthy();
        //            } catch (e) {
        //                expect(e instanceof TypeError).toBeTruthy();
        //            }
        //        });

        it('with a "RegisterMapperConfiguration" parameter then instances an "Mapper4Javascript" object', () => {
            let paramConfig = new RegisterMapperConfiguration(Array, Object);

            let sut = new Mapper4Javascript(paramConfig);

            expect(sut.mappers).toBeDefined();
            expect(sut.mapperTypes).toBeDefined();
            expect(sut.defaultConfiguration instanceof RegisterMapperConfiguration).toBeTruthy();
        });
    });

    describe('registerMapper - ', () => {
        it('with a "RegisterMapperConfiguration" parameter then registers a "Configuration"', () => {
            let sut = new Mapper4Javascript();
            let paramConfig = new RegisterMapperConfiguration(Array, Object);

            sut.registerMapper(paramConfig);

            expect(sut.mappers).toBeDefined();
            expect(sut.mappers['Object2Array'].originKey).toEqual('Object');
            expect(sut.mappers['Object2Array'].destinationKey).toEqual('Array');
            expect(sut.mappers['Object2Array'].destinationObjectType).toEqual(Array);
            expect(sut.mappers['Object2Array'].originObjectType instanceof Object).toBeTruthy();
            expect(sut.mappers['Object2Array'].mapperCallback).toEqual(jasmine.any(Function));
            expect(sut.mappers['Object2Array'].ignoredAttributes).toEqual(jasmine.any(Array));
            expect(sut.mappers['Object2Array'].exceptedAttributes).toEqual(jasmine.any(Array));
            expect(sut.mappers['Object2Array'].ignoreAllAttributes).toEqual(false);
        });
    });
});


/*
 
 let configuration = new RegisterMapperConfiguration(MySecondClass, MyClass);
 configuration.ignoredAttributes = ['lui'];
 //configuration.ignoreAllAttributes
 //configuration.exceptedAttributes
 mapper.registerMapper(configuration);//, 'mySecondClass');
 mapper.registerMapper(new RegisterMapperConfiguration(MySecondClass, MyFifthClass));//, 'mySecondClass');
 ioc.registerSingletonType(MySecondClass, 'mySecondClass', function (instance, ioc, aop, mapper) {
 instance.objectAttribute = this.getInstanceOf('myFourthClass')
 instance = mapper.getMappedObject(
 new GetterMapperConfiguration(
 'mySecondClass',
 [ myClass, new MyFifthClass() ],
 instance,
 ['pepe']
 )
 );
 return instance;
 }.bind(ioc));
 
 ///////////////////////////////////////////////////////////
 
 var mySecondClass = ioc.getInstanceOf('mySecondClass');
 
 console.log(Object.entries(mySecondClass));
 console.log(_.allKeys(MySecondClass));
 for (var key in MySecondClass) console.log(key)
 
 console.log('myClass', JSON.stringify(myClass));
 console.log('mySecondClass', JSON.stringify(mySecondClass));
 mySecondClass.prueba('Hola Mundo!!');
 mySecondClass.otraPrueba('Hola Mundo!!');
 mySecondClass.otraPruebaMas('Hola Mundo!!');
 
 */