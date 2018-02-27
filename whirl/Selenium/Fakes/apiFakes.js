class ApiFakes {
    constructor() {
        this.defaultMaxAttemps = 3;
        this.once = 1;
        this.twice = 2;
        this.param1 = 'param1';
        this.param2 = 'param2';
        this.constructorKey = 'constructorKey';
        this.myFifthClassKey = 'myFifthClassKey';
        this.mySecondClassKey = 'mySecondClassKey';
        this.myThirdClassKey = 'myThirdClassKey';
        this.myFourthClassKey = 'myFourthClassKey';
        
        this.MyFifthClass = function () {
            this.pedro = '10';
        };

        this.MyFourthClass = function () {
            this.something = 'something';
        };

        this.MyThirdClass = function () {
            this.algo = 'algo';
        };
        
        this.MyThirdClass.prototype.constructAnArray = function () {
            return new Array();
        };

        this.MySecondClass = function () {
            this.pedro = -1;
            this.pepe = '3';
            this.lui = '4';
            this.objectAttribute;

            this.anotherTestMore = function () {
            };
        };

        this.MySecondClass.prototype.test2 = function (param1, param2) {
        };

        this.MySecondClass.prototype.anotherTest2 = function () {
        };

        this.MySecondClass.prototype.exceptionTest = function () {
            throw Error('the exception was throwed successfully');
        };

        this.MyClass = {
            pepe: '1',
            lui: '2',
            objectAttribute: undefined,
            anotherTest: function () {
            },
            test: function () {
            }
        };
        
        this.types = {
            'myClass': {
                key: 'myClass',
                typeName: 'MyClass',
                type: this.MyClass
            },
            'mySecondClass': {
                key: 'mySecondClass',
                typeName: 'MySecondClass',
                type: this.MySecondClass
            },
            'myThirdClass': {
                key: 'myThirdClass',
                typeName: 'MyThirdClass',
                type: this.MyThirdClass
            },
            'myFourthClass': {
                key: 'myFourthClass',
                typeName: 'MyFourthClass',
                type: this.MyFourthClass
            },
            'myFifthClass': {
                key: 'myFifthClass',
                typeName: 'MyFifthClass',
                type: this.MyFifthClass
            }
        };
    }
    
    beforeCallback () {
        //console.log('--> beforeCallback');
    }
    afterCallback () {
        //console.log('--> afterCallback');
    }
    exceptionCallback () {
        //console.log('--> exceptionCallback');
    }
    finallyCallback () {
        //console.log('--> finallyCallback');
    }
    wrapperCallback () {
        //console.log('--> wrapperCallback');
    }
}

export default ApiFakes;