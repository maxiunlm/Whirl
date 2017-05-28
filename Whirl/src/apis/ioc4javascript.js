import UtilsBase4Javascript from './utilbase4javascript';
import AopConfigParameters from './aopconfigparameters';
import Aop4Javascript from './aop4javascript';
import Mapper4Javascript from './mapper4javascript';

let ioc4JavascriptInstance = null;

class IoC4Javascript extends UtilsBase4Javascript {   
    constructor(forceNewInstance) {
        super();

        if(!forceNewInstance && !!ioc4JavascriptInstance){
            return ioc4JavascriptInstance;
        }
        else if(!forceNewInstance) {
            ioc4JavascriptInstance = this;
        }
        
        this.types = {};
        this.constructors = {};
        this.singletons = {};
        this.aop = new Aop4Javascript(new AopConfigParameters(), this.types);
        this.mapper = new Mapper4Javascript(this.types);

        this.registerSingletonType(Aop4Javascript, 'AOP', null, this.aop);
        this.registerSingletonType(Mapper4Javascript, 'Mapper', null, this.mapper);
    }
    
    deleteInstance() {
        ioc4JavascriptInstance = null;
    }

    validateConstructorCallbackType(constructorCallback) {
        if (!this.isFunction(constructorCallback)) {
            throw('EXCEPTION [registerConstructor]: the "constructorCallback" must be a valid "Function" wich returns an instance object.\n' + this.getCallStack());
        }
    }

    createInstanceOf(key) {
        let instance = this.tryConstructorCallback(key);

        if (!instance) {
            if (!!this.types[key].type.prototype) {
                instance = new this.types[key].type();
            } else if (!!this.types[key].type) {
                instance = this.types[key].type;
            } else {
                throw ('You must register an Object Type for the key "' + key + '" before to use it.');
            }
        }

        if (!!this.types[key].instanceDefinitionCallback) {
            instance = this.types[key].instanceDefinitionCallback(instance, this, this.aop, this.mapper) || instance;
        }

        return instance;
    }

    getInstanceOf(key, instanceDefinitionCallback) {
        let instance = this.singletons[key]
                || this.tryConstructorCallback(key)
                || this.createInstanceOf(key);

        if (!!instanceDefinitionCallback) {
            instance = instanceDefinitionCallback(instance, this, this.aop, this.mapper) || instance;
        }
        
        return instance;
    }

    tryConstructorCallback(key) {
        return (!!this.constructors[key] &&
            this.constructors[key].constructorCallback(
                    this,
                    this.aop,
                    this.mapper
                )
            );
    }

    registerType(type, key, instanceDefinitionCallback) {
        this.validateAlreadyRegistered(this.types, key);
        this.validateKeyType(key);
        this.validateType(type);

        this.types[key] = {key: key, typeName: type.name, type: type, instanceDefinitionCallback: instanceDefinitionCallback};

        return this;
    }

    registerConstructor(key, constructorCallback) {
        this.validateAlreadyRegistered(this.constructors, key, 'constructors');
        this.validateKeyType(key);
        this.validateConstructorCallbackType(constructorCallback);

        this.constructors[key] = {constructorCallback: constructorCallback};
    }

    registerSingletonType(type, key, instanceDefinitionCallback, instance) {
        this.registerType(type, key, instanceDefinitionCallback);

        this.singletons[key] = instance || this.createInstanceOf(key);
    }
}

export default IoC4Javascript
