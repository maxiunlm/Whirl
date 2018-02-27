/* global expect */
import ApiFakes from '../../Selenium/Fakes/apiFakes';
import RegisterMapperConfiguration from '../../src/apis/RegisterMapperConfiguration';
import Mapper4Javascript from '../../src/apis/Mapper4Javascript';

describe('Mapper4Javascript - ', () => {
    let apiFakes = new ApiFakes();
    
    describe('CONSTRUCTOR - ', () => {
        it('without parameters then throws an instance a "TypeError" exception.', () => {
            try {
                let sut = new Mapper4Javascript();
                expect(false).toBeTruthy();
            } catch (e) {
                expect(e instanceof TypeError).toBeTruthy();
            }
        });
        
//        it('without parameters then instance an "Mapper4Javascript" object', () => {
//            let sut = new Mapper4Javascript();
//            
//            expect(sut.mappers).toBeDefined();
//            expect(sut.mapperTypes instanceof RegisterMapperConfiguration).toBeThruty();
//        });
    });
});


/*
var ioc = new IoC4Javascript();
var mapper = ioc.getInstanceOf('Mapper');

var MyFifthClass = function () {
	this.pedro = '10';
}

var MyFourthClass = function () {
	this.something = 'something';
}

var MyThirdClass = function () {
	this.algo = 'algo';
}

var MySecondClass = function() {
	this.pedro = -1;
	this.pepe = '3';
	this.lui = '4';
	this.objectAttribute;
	
	this.otraPruebaMas = function () {
		console.log('otraPruebaMas MySecondClass');
	};
};

MySecondClass.prototype.prueba = function(data) {
	console.log('prueba MySecondClass');
};

MySecondClass.prototype.otraPrueba = function(data) {
	console.log('otraPrueba MySecondClass');
};

var MyClass = {
	pepe: '1',
	lui: '2',
	objectAttribute: undefined,	
	otraPrueba: function () {
		console.log('MyClass otraPrueba MyClass');
	},	
	prueba: function(data) {
		console.log('MyClass prueba data: "' + data + '"');
		throw('MyClass.prototype.prueba Exception');
	}
}

ioc.registerSingletonType(MyFourthClass, 'myFourthClass');
ioc.registerType(MyThirdClass, 'myThirdClass');
ioc.registerType(MyClass, 'myClass', function (instance, ioc, aop, mapper) {
	instance.objectAttribute = this.getInstanceOf('myThirdClass');
	
	aop.wrap(aop.getAopConfigParameters(
		'myClass',
		'prueba',
		function() {
			console.log('myClass before!!!');
		},
		null,
		function (e) {
			console.log('MyClass Exception: ', e);
		},
		function () {
			console.log('MyClass prueba finally');
		}
	));
}.bind(ioc));

///////////////////////////////////////////////////////////

var myClass = ioc.getInstanceOf('myClass');
myClass.prueba('Hola Mundo!!');

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