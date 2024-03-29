class UtilsBase4Javascript {
	constructor() {
		this.dispose = this.dispose.bind(this);
		this.isObject = this.isObject.bind(this);
		this.isString = this.isString.bind(this);
		this.isFunction = this.isFunction.bind(this);
		this.getCallStack = this.getCallStack.bind(this);
		this.validateType = this.validateType.bind(this);
		this.validateKeyType = this.validateKeyType.bind(this);
		this.validateInstance = this.validateInstance.bind(this);
		this.findFirstElement = this.findFirstElement.bind(this);
		this.addDisposeMethod = this.addDisposeMethod.bind(this);
		this.validateAlreadyRegistered = this.validateAlreadyRegistered.bind(this);
	}

	getCallStack() {
		try {
			let callStack = "";
			let args = arguments;
			let caller = args.callee.caller;

			callStack += 'At "' + (caller.name || "<unknown>") + '" method.\n';

			do {
				caller = caller.caller;
				if (!!caller) {
					callStack += '\t * And its caller is "' + (caller.name || "<unknown>") + '"  method.\n';
				}
			} while (!!caller);

			return callStack;
		} catch (e) {
			//console.log('EXCEPTION [getCallStack]: ', e);
			return "EXCEPTION [getCallStack]: " + e.message;
		}
	}

	isObject(obj) {
		let objectType = typeof obj;

		return (objectType === "object" && !!obj) || objectType === "function";
	}

	isFunction(obj) {
		return (typeof obj === "function" && !!obj) || false;
	}

	isString(obj) {
		return typeof obj === "string" || obj instanceof String;
	}

	validateKeyType(key, keyName) {
		keyName = keyName || "key";

		if (!!key && !this.isString(key)) {
			throw new Error('EXCEPTION [validateKeyType]: the "' + keyName + '" must be a "String".\n' + this.getCallStack());
		}
	}

	validateType(type, typeName) {
		typeName = typeName || "type";

		if (!type || (!this.isString(type) && !this.isObject(type) && !this.isFunction(type))) {
			throw new TypeError('EXCEPTION [validateType]: the "' + typeName + '" must be a valid javascript "Type".\n' + this.getCallStack());
		}
	}

	validateInstance(instance, typeName, type) {
		typeName = typeName || "Object";

		if (!!instance && !!type && !(instance instanceof type)) {
			throw new TypeError('EXCEPTION [validateType]: the "' + typeName + '" must be a valid instance of "' + typeName + '".\n' + this.getCallStack());
		}

		if (!instance || (!this.isString(instance) && !this.isObject(instance) && !this.isFunction(instance))) {
			throw new TypeError('EXCEPTION [validateType]: the "' + typeName + '" must be a valid instance object.\n' + this.getCallStack());
		}
	}

	validateAlreadyRegistered(dictionary, key, dictionaryName, keyName) {
		keyName = keyName || "key";
		dictionaryName = dictionaryName || "types";

		if (!!key && !!dictionary[key]) {
			console.log(
				"WARNING [validateAlreadyRegistered](" +
					dictionaryName +
					", " +
					keyName +
					'): the key "' +
					key +
					'" has been already registered.\n' +
					this.getCallStack()
			);
		}
	}

	findFirstElement(objArray, conditionCallback) {
		let keys = Object.keys(objArray);
		let keysIndex = 0;

		for (; keysIndex < keys.length; keysIndex++) {
			let element = objArray[keys[keysIndex]];

			if (!!element && !!conditionCallback && conditionCallback(element)) {
				return element;
			}
		}

		return {};
	}

	dispose() {
		const keys = Object.keys(this);

		keys.forEach((k) => {
			if (!!this[k]) {
				if (!!this[k].dispose && this.isFunction(this[k].dispose)) {
					this[k].dispose();
				}

				this[k] = null;
			}
		});
	}

	addDisposeMethod(instance) {
		if (!!instance && this.isObject(instance) && !instance.dispose) {
			instance.dispose = this.dispose.bind(instance);
		}
	}
}

export default UtilsBase4Javascript;
