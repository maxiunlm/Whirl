class UtilsBase4Javascript {
    getCallStack(hasToPrintOnException) {
        try {
            let callStack = '';
            let caller = arguments.callee.caller;

            callStack += 'At "' + (caller.name || '<unknown>') + '" method.\n';

            do {
                caller = caller.caller;
                if (!!caller) {
                    callStack += '\t * And its caller is "' + (caller.name || '<unknown>') + '"  method.\n';
                }
            } while (!!caller);

            return callStack;
        } catch (e) {
            if(!!hasToPrintOnException) {
                console.log('EXCEPTION [getCallStack]: ', e);
            }
            
            return '';
        }
    }

    isObject(obj) {
        let objectType = typeof obj;

        return (objectType === 'object' && !!obj) || objectType === 'function';
    }

    isFunction(obj) {
        return (typeof obj === 'function' && !!obj) || false;
    }

    isString(obj) {
        return (typeof obj === 'string' || obj instanceof String);
    }

    validateKeyType(key, keyName) {
        keyName = keyName || 'key';

        if (!!key && !this.isString(key)) {
            throw('EXCEPTION [validateKeyType]: the "' + keyName + '" must be a "String".\n' + this.getCallStack())
        }
    }

    validateType(type, typeName) {
        typeName = typeName || 'type';

        if (!type || (!this.isString(type) && !this.isObject(type) && !this.isFunction(type))) {
            throw('EXCEPTION [validateType]: the "' + typeName + '" must be a valid javascript "Type".\n' + this.getCallStack())
        }
    }

    validateAlreadyRegistered(dictionary, key, dictionaryName, keyName) {
        keyName = keyName || 'key';
        dictionaryName = dictionaryName || 'types';

        if (!!key && !!dictionary[key]) {
            console.log('WARNING [validateAlreadyRegistered](' + dictionaryName + ', ' + keyName + '): the key "' + key + '" has been already registered.\n' + this.getCallStack())
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

        return new Object();
    }
}

export default UtilsBase4Javascript;
