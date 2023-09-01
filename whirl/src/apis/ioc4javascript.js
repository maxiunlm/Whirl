import UtilsBase4Javascript from "./utilbase4javascript";
import AopConfigParameters from "./aopConfigParameters";
import Aop4Javascript from "./aop4javascript";
import Mapper4Javascript from "./mapper4javascript";

window.ioc4JavascriptInstance = null;

class IoC4Javascript extends UtilsBase4Javascript {
	constructor(forceNewInstance) {
		super();

		if (!forceNewInstance && !!window.ioc4JavascriptInstance) {
			return window.ioc4JavascriptInstance;
		} else if (!forceNewInstance) {
			window.ioc4JavascriptInstance = this;
		}

		this.getType = this.getType.bind(this);
		this.registerType = this.registerType.bind(this);
		this.getInstanceOf = this.getInstanceOf.bind(this);
		this.deleteInstance = this.deleteInstance.bind(this);
		this.createInstanceOf = this.createInstanceOf.bind(this);
		this.registerConstructor = this.registerConstructor.bind(this);
		this.registerSingletonType = this.registerSingletonType.bind(this);
		this.tryConstructorCallback = this.tryConstructorCallback.bind(this);
		this.validateTypeHasBeenRegistered = this.validateTypeHasBeenRegistered.bind(this);
		this.validateConstructorCallbackType = this.validateConstructorCallbackType.bind(this);
		this.types = {};
		this.constructors = {};
		this.singletons = {};

		if (typeof Aop4Javascript !== typeof undefined) {
			this.aop = new Aop4Javascript(new AopConfigParameters(), this.types);
			this.registerSingletonType(Aop4Javascript, "AOP", null, this.aop);
		}

		if (typeof Mapper4Javascript !== typeof undefined) {
			this.mapper = new Mapper4Javascript(this.types);
			this.registerSingletonType(Mapper4Javascript, "Mapper", null, this.mapper);
		}
	}

	deleteInstance() {
		window.ioc4JavascriptInstance = null;
	}

	validateConstructorCallbackType(constructorCallback) {
		if (!this.isFunction(constructorCallback)) {
			throw new Error(
				`EXCEPTION [registerConstructor]: the "constructorCallback" must be a valid "Function" which returns an instance object.\n${this.getCallStack()}`
			);
		}
	}

	validateTypeHasBeenRegistered(key) {
		if (!!key && !this.types[key]) {
			throw new Error('EXCEPTION [validateTypeHasBeenRegistered]: the key "' + key + '" has not been registered yet.\n' + this.getCallStack());
		}
	}

	createInstanceOf(key, hasToAddDisposeMethod) {
		hasToAddDisposeMethod = !!hasToAddDisposeMethod || false;
		let instance = this.tryConstructorCallback(key);

		if (!instance) {
			if (!!this.getType(key).prototype) {
				let objectType = this.getType(key);
				instance = new objectType();
			} else if (!!this.getType(key)) {
				instance = this.getType(key);
			} else {
				throw new Error('You must register an Object Type for the key "' + key + '" before to use it.');
			}
		}

		if (!!this.types[key].instanceDefinitionCallback) {
			instance = this.types[key].instanceDefinitionCallback(instance, this, this.aop, this.mapper) || instance;
		}

		if (hasToAddDisposeMethod) {
			this.addDisposeMethod(instance);
		}

		return instance;
	}

	getType(key) {
		this.validateKeyType(key);
		this.validateTypeHasBeenRegistered(key);

		return this.types[key].type;
	}

	getInstanceOf(key, instanceDefinitionCallback, hasToAddDisposeMethod) {
		hasToAddDisposeMethod = !!hasToAddDisposeMethod || false;
		let instance = this.singletons[key] || this.tryConstructorCallback(key) || this.createInstanceOf(key, hasToAddDisposeMethod);

		if (!!instanceDefinitionCallback) {
			// && this.isFunction(instanceDefinitionCallback)) {
			instance = instanceDefinitionCallback(instance, this, this.aop, this.mapper) || instance;
			// } else if (!!instanceDefinitionCallback && !this.isFunction(instanceDefinitionCallback)) {
			// 	throw new Error('"instanceDefinitionCallback" must be a Function or undefined');
		}

		if (hasToAddDisposeMethod) {
			this.addDisposeMethod(instance);
		}

		return instance;
	}

	tryConstructorCallback(key) {
		return !!this.constructors[key] && this.constructors[key].constructorCallback(this, this.aop, this.mapper);
	}

	registerType(type, key, instanceDefinitionCallback) {
		this.validateAlreadyRegistered(this.types, key);
		this.validateKeyType(key);
		this.validateType(type);

		this.types[key] = { key: key, typeName: type.name, type: type, instanceDefinitionCallback: instanceDefinitionCallback };

		return this;
	}

	registerConstructor(key, constructorCallback) {
		this.validateAlreadyRegistered(this.constructors, key, "constructors");
		this.validateKeyType(key);
		this.validateConstructorCallbackType(constructorCallback);

		this.constructors[key] = { constructorCallback: constructorCallback };
	}

	registerSingletonType(type, key, instanceDefinitionCallback, instance) {
		this.registerType(type, key, instanceDefinitionCallback);

		this.singletons[key] = instance || this.createInstanceOf(key);
	}
}

export default IoC4Javascript;
