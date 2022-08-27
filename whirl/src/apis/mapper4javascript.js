import UtilsBase4Javascript from './utilbase4javascript';
import GetterMapperConfiguration from './getterMapperConfiguration';
import RegisterMapperConfiguration from './registerMapperConfiguration';

class Mapper4Javascript extends UtilsBase4Javascript {
    constructor(defaultRegisterMapperConfiguration) {
        super();
        this.mappers = {};
        this.defaultConfiguration = defaultRegisterMapperConfiguration || new RegisterMapperConfiguration();
        this.mapperTypes = {};

        this.registerMapper = this.registerMapper.bind(this);
        this.getMappedObject = this.getMappedObject.bind(this);
        this.mapAllAttributesCallback = this.mapAllAttributesCallback.bind(this);
        this.mapAllOriginCallback = this.mapAllOriginCallback.bind(this);
        this.mapAllOriginAttributesCallback = this.mapAllOriginAttributesCallback.bind(this);
        this.mapAllOriginMethodsCallback = this.mapAllOriginMethodsCallback.bind(this);
        this.mapAllCallback = this.mapAllCallback.bind(this);
        this.mapAllMethodsCallback = this.mapAllMethodsCallback.bind(this);
    }

    validateAlreadyRegisteredMapper(key, objectTypeName, keyName) {
        keyName = keyName || 'key';

        if (!!key
                && !!this.mapperTypes[key]
                && this.mapperTypes[key].typeName !== objectTypeName) {
            throw new Error('EXCEPTION [validateAlreadyRegisteredMapper]: the ' +
                    keyName + ' "' + key + '" has been already registered.\n' + this.getCallStack());
        }
    }

    validateAlreadyRegisteredMapperHasNotBeenRegistered(key, keyName, mappers) {
        keyName = keyName || 'key';
        mappers = mappers || this.mapperTypes;

        if (!!key && !mappers[key]) {
            throw new Error('EXCEPTION [validateAlreadyRegisteredMapperHasNotBeenRegistered]: the ' +
                    keyName + ' "' + key + '" has not been registered yet.\n' + this.getCallStack());
        }
    }

    validateOriginObjectMustBeAnInstancedObject(originObject) {
        if (!originObject) {
            throw new Error('EXCEPTION [validateOriginObjectMustBeAnInstancedObject]: the "originObject" must be an instance of some Object.\n'
                    + this.getCallStack());
        }
    }

    validateObjectMustBeRegistered(obj, mapper) {
        if (!!obj && !mapper) {
            throw new Error('EXCEPTION [validateObjectMustBeRegistered]: the "' +
                    obj.__proto__.constructor.name + '" must be registered before to use it.\n'
                    + this.getCallStack());
        }
    }

    validateDestinationObjectTypeMustBeRegistered(destinationObjectType, destinationMapper) {
        if (!destinationMapper) {
            throw new Error('EXCEPTION [validateDestinationObjectTypeMustBeRegistered]: the "' + destinationObjectType.toString() + '" must be registered before to use it.\n".\n' + this.getCallStack())
        }
    }

    validateDestinationObjectType(destinationObjectType, destinationObject, destinationMapper) {
        if (!!destinationObjectType
                && !!destinationObject
                && destinationObject.__proto__.constructor.name !== destinationMapper.typeName) {
            throw new TypeError('EXCEPTION [validateDestinationObjectType]: The destination object type expeted is "' +
                    destinationObjectType + '" but the recived object type was "' +
                    destinationObject.__proto__.constructor.name + '".\nThe "Destination Mapper" is' +
                    JSON.stringify(destinationMapper) + '\n' + this.getCallStack());
        }
    }

    validateDestinationObjectInstance(destinationObject) {
        if (!!destinationObject) {
            this.validateType(destinationObject, 'destinationObject');
        }
    }

    verifyDestinationObjectInstance(getterMapperConfiguration) {
        if (!getterMapperConfiguration.destinationObject) {
            getterMapperConfiguration.destinationObject = new getterMapperConfiguration.destinationMapper.type();
        }

        return getterMapperConfiguration.destinationObject;
    }

    doMappedObjectForList(getterMapperConfiguration) {
        let mappedObject;

        getterMapperConfiguration.originObjects.forEach(function (originObject, index, allOriginObjects) {
            mappedObject = this.doMappedObject(originObject, getterMapperConfiguration);
        }.bind(this));

        return mappedObject;
    }

    doMappedObject(originObject, getterMapperConfiguration) {
        this.validateOriginObjectMustBeAnInstancedObject(originObject);
        this.validateType(originObject, 'originObject');

        let originMapper = this.findFirstElement(this.mapperTypes, function (mapperType) {
            return mapperType.typeName === originObject.__proto__.constructor.name;
        });
        this.validateObjectMustBeRegistered(originObject, originMapper);

        let originKey = this.getObjectMapperKey(originMapper);

        let key = originKey + '2' + getterMapperConfiguration.destinationKey;
        this.validateAlreadyRegisteredMapperHasNotBeenRegistered(key, 'mapper key', this.mappers);

        getterMapperConfiguration.configureIgnoredAttributes(this.mappers[key]);

        let mapperCallback = getterMapperConfiguration.mapperCallback || this.mappers[key].mapperCallback;

        return mapperCallback(getterMapperConfiguration, originObject);
    }

    getObjectMapperKey(objectMapper) {
        let key;

        if (!!objectMapper.key) {
            key = objectMapper.key;

            this.validateKeyType(key, 'destinationKey');
            this.validateAlreadyRegisteredMapperHasNotBeenRegistered(key, 'destinationKey');
        } else {
            key = objectMapper.typeName;

            this.validateKeyType(key, 'destinationKey');
            this.validateAlreadyRegisteredMapperHasNotBeenRegistered(key, 'destinationKey');
        }

        return key;
    }

    getOriginObjectList(originObject) {
        let originObjects = originObject;

        if (!Array.isArray(originObjects)) {
            originObjects = [originObject];
        }

        return originObjects;
    }

    getDestinationMapper(getterMapperConfiguration) {
        let destinationMapper = this.findFirstElement(this.mapperTypes, function (mapperType) {
            return mapperType.key === getterMapperConfiguration.destinationObjectType;
        })
                || this.findFirstElement(this.mapperTypes, function (mapperType) {
                    return mapperType.typeName === getterMapperConfiguration.destinationObjectType;
                });

        this.validateObjectMustBeRegistered(getterMapperConfiguration.destinationObject, destinationMapper);
        this.validateDestinationObjectType(getterMapperConfiguration.destinationObjectType, getterMapperConfiguration.destinationObject, destinationMapper);

        if (this.isString(getterMapperConfiguration.destinationObjectType)) {
            destinationMapper = this.mapperTypes[getterMapperConfiguration.destinationObjectType];
        } else {
            destinationMapper = this.findFirstElement(this.mapperTypes, function (mapperType) {
                return mapperType.typeName === getterMapperConfiguration.destinationObjectType.__proto__.constructor.name;
            });
        }

        this.validateDestinationObjectTypeMustBeRegistered(getterMapperConfiguration.destinationObjectType, destinationMapper);

        return destinationMapper;
    }

    defaultMapperCallback(getterMapperConfiguration, originObject) {
        return this.mapAllAttributesCallback(getterMapperConfiguration, originObject);
    }

    registerMepperKeyTypes(type, key) {
        this.validateKeyType(key);
        this.validateType(type);
        this.validateAlreadyRegisteredMapper(key, type.name, 'key');

        this.mapperTypes[key] = {key: key, typeName: type.name, type: type};
    }

    mustMapAttribute(getterMapperConfiguration, attributeName) {
        let ignoreAllAttributes = !!getterMapperConfiguration.ignoreAllAttributes;
        let ignoredAttributes = getterMapperConfiguration.ignoredAttributes || '';
        let exceptedAttributes = getterMapperConfiguration.exceptedAttributes || '';

        if ((ignoreAllAttributes
                && exceptedAttributes.indexOf(attributeName) < 0)
                || ignoredAttributes.indexOf(attributeName) >= 0) {
            return false;
        }

        return true;
    }

    copyAttribute(getterMapperConfiguration, originObject, key) {
        if ((!!getterMapperConfiguration.destinationObject[key]
                && !this.isFunction(getterMapperConfiguration.destinationObject[key]))
                && (!!originObject[key] && !this.isFunction(originObject[key]))
                && this.mustMapAttribute(getterMapperConfiguration, key)
                ) {
            getterMapperConfiguration.destinationObject[key] = originObject[key];
        }
    }

    mapAllAttributesCallback(getterMapperConfiguration, originObject) {
        let destinationObjectKeys = Object.keys(getterMapperConfiguration.destinationObject);

        destinationObjectKeys.forEach(function (key, index, allKeys) {
            this.copyAttribute(getterMapperConfiguration, originObject, key);
        }.bind(this));

        return getterMapperConfiguration.destinationObject;
    }

    mapAllOriginCallback(getterMapperConfiguration, originObject) {
        let originObjectKeys = this.getAllMappedObjectKeys(originObject);

        originObjectKeys.forEach(function (key, index, allKeys) {
            if (this.mustMapAttribute(getterMapperConfiguration, key)) {
                getterMapperConfiguration.destinationObject[key] = originObject[key];
            }
        }.bind(this));

        return getterMapperConfiguration.destinationObject;
    }

    mapAllOriginAttributesCallback(getterMapperConfiguration, originObject) {
        let originObjectKeys = Object.keys(originObject);

        originObjectKeys.forEach(function (key, index, allKeys) {
            if (!this.isFunction(originObject[key])
                    && this.mustMapAttribute(getterMapperConfiguration, key)) {
                getterMapperConfiguration.destinationObject[key] = originObject[key];
            }
        }.bind(this));

        return getterMapperConfiguration.destinationObject;
    }

    mapAllOriginMethodsCallback(getterMapperConfiguration, originObject) {
        let originObjectKeys = this.getAllMappedObjectKeys(originObject);

        originObjectKeys.forEach(function (key, index, allKeys) {
            if (this.isFunction(originObject[key])
                    && this.mustMapAttribute(getterMapperConfiguration, key)) {
                getterMapperConfiguration.destinationObject[key] = originObject[key];
            }
        }.bind(this));

        return getterMapperConfiguration.destinationObject;
    }

    mapAllCallback(getterMapperConfiguration, originObject) {
        let destinationObjectKeys = this.getAllMappedObjectKeys(getterMapperConfiguration.destinationObject);

        destinationObjectKeys.forEach(function (key, index, allKeys) {
            if (!!originObject[key]
                    && this.mustMapAttribute(getterMapperConfiguration, key)) {
                getterMapperConfiguration.destinationObject[key] = originObject[key];
            }
        }.bind(this));

        return getterMapperConfiguration.destinationObject;
    }

    mapAllMethodsCallback(getterMapperConfiguration, originObject) {
        let destinationObjectKeys = this.getAllMappedObjectKeys(getterMapperConfiguration.destinationObject);

        destinationObjectKeys.forEach(function (key, index, allKeys) {
            if (key !== 'constructor' 
                    && !!originObject[key] 
                    && this.isFunction(originObject[key])
                    && this.mustMapAttribute(getterMapperConfiguration, key)) {
                console.log(originObject, key);
                getterMapperConfiguration.destinationObject[key] = originObject[key];
            } else {
                console.log(getterMapperConfiguration.destinationObject, key);
            }
        }.bind(this));

        return getterMapperConfiguration.destinationObject;
    }
    
    getAllMappedObjectKeys(mappedObject) {
        let keys = Object.keys(mappedObject);
        
        if (!!mappedObject.__proto__) {
            keys = keys.concat(
                    Object.getOwnPropertyNames(mappedObject.__proto__)
                    );
        }
        
        return keys;
    }

    getMappedObject(getterMapperConfiguration) {
        //this.validateInstance(getterMapperConfiguration, 'GetterMapperConfiguration', GetterMapperConfiguration);
        this.validateDestinationObjectInstance(getterMapperConfiguration.destinationObject);

        getterMapperConfiguration.destinationMapper = this.getDestinationMapper(getterMapperConfiguration);
        getterMapperConfiguration.destinationKey = this.getObjectMapperKey(getterMapperConfiguration.destinationMapper);
        getterMapperConfiguration.destinationObject = this.verifyDestinationObjectInstance(getterMapperConfiguration);
        getterMapperConfiguration.originObjects = this.getOriginObjectList(getterMapperConfiguration.originObject);
        let mappedObject = this.doMappedObjectForList(getterMapperConfiguration);

        return mappedObject;
    }

    registerMapper(registerMapperConfiguration) {
        //this.validateInstance(registerMapperConfiguration, 'RegisterMapperConfiguration', RegisterMapperConfiguration);
        this.validateAlreadyRegisteredMapper(
                registerMapperConfiguration.originKey
				|| this.defaultConfiguration.originKey,
                registerMapperConfiguration.originObjectType.name
				|| this.defaultConfiguration.originObjectType.name,
                'originKey');
        this.validateAlreadyRegisteredMapper(
                registerMapperConfiguration.destinationKey || this.defaultConfiguration.destinationKey,
                registerMapperConfiguration.destinationObjectType.name
				|| this.defaultConfiguration.destinationObjectType.name
				|| '',
                'destinationKey');

        let originKey = registerMapperConfiguration.originKey
                || registerMapperConfiguration.originObjectType.name
                || this.defaultConfiguration.originKey
                || this.defaultConfiguration.originObjectType.name;
        let destinationKey = registerMapperConfiguration.destinationKey
                || registerMapperConfiguration.destinationObjectType.name
                || this.defaultConfiguration.destinationKey
                || this.defaultConfiguration.destinationObjectType.name;

        if (!this.mapperTypes[originKey]) {
            this.registerMepperKeyTypes(
                    registerMapperConfiguration.originObjectType || this.defaultConfiguration.originObjectType,
                    originKey);
        }

        if (!this.mapperTypes[destinationKey]) {
            this.registerMepperKeyTypes(
                    registerMapperConfiguration.destinationObjectType || this.defaultConfiguration.destinationObjectType,
                    destinationKey);
        }

        let key = originKey + '2' + destinationKey;

        this.validateAlreadyRegistered(this.mappers, key, 'mappers');

        let mapperCallback = registerMapperConfiguration.mapperCallback || this.defaultMapperCallback.bind(this);

        this.mappers[key] = {
            key: key,
            originKey: originKey,
            destinationKey: destinationKey,
            destinationObjectType: registerMapperConfiguration.destinationObjectType || this.defaultConfiguration.destinationObjectType,
            originObjectType: registerMapperConfiguration.originObjectType || this.defaultConfiguration.originObjectType,
            mapperCallback: mapperCallback,
            ignoredAttributes: registerMapperConfiguration.ignoredAttributes || this.defaultConfiguration.ignoredAttributes,
            ignoreAllAttributes: registerMapperConfiguration.ignoreAllAttributes || this.defaultConfiguration.ignoreAllAttributes,
            exceptedAttributes: registerMapperConfiguration.exceptedAttributes || this.defaultConfiguration.exceptedAttributes
        };
    }
}

export default Mapper4Javascript;
