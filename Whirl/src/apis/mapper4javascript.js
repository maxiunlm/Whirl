import UtilsBase4Javascript from './utilbase4javascript';

class Mapper4Javascript extends UtilsBase4Javascript {
    constructor(mapperTypes) {
        super();
        this.mappers = {};
        this.mapperTypes = mapperTypes || {};
    }

    validateAlreadyRegisteredMapper(key, objectTypeName, keyName) {
        keyName = keyName || 'key';

        if (!!key
                && !!this.mapperTypes[key]
                && this.mapperTypes[key].typeName !== objectTypeName) {
            throw('EXCEPTION [validateAlreadyRegisteredMapper]: the ' +
                    keyName + ' "' + key + '" has been already registered.\n' + this.getCallStack());
        }
    }

    validateAlreadyRegisteredMapperHasNotBeenRegistered(key, keyName, mappers) {
        keyName = keyName || 'key';
        mappers = mappers || this.mapperTypes;

        if (!!key && !mappers[key]) {
            throw('EXCEPTION [validateAlreadyRegisteredMapperHasNotBeenRegistered]: the ' +
                    keyName + ' "' + key + '" has not been registered yet.\n' + this.getCallStack()
                    );
        }
    }

    validateOriginObjectMustBeAnInstancedObject(originObject) {
        if (!originObject) {
            throw('EXCEPTION [validateOriginObjectMustBeAnInstancedObject]: the "originObject" must be an instance of some Object.\n'
                    + this.getCallStack()
                    );
        }
    }

    validateObjectMustBeRegistered(obj, mapper) {
        if (!!obj && !mapper) {
            throw('EXCEPTION [validateObjectMustBeRegistered]: the "' +
                    obj.__proto__.constructor.name + '" must be registered before to use it.\n'
                    + this.getCallStack()
                    );
        }
    }

    validateDestinationObjectTypeMustBeRegistered(destinationObjectType, destinationMapper) {
        if (!destinationMapper) {
            throw('EXCEPTION [validateDestinationObjectTypeMustBeRegistered]: the "' + destinationObjectType.toString() + '" must be registered before to use it.\n".\n' + this.getCallStack())
        }
    }

    validateDestinationObjectType(destinationObjectType, destinationObject, destinationMapper) {
        if (!!destinationObjectType
                && !!destinationObject
                && destinationObject.__proto__.constructor.name !== destinationMapper.typeName) {
            throw ('EXCEPTION [validateDestinationObjectType]: The destination object type expeted is "' +
                    destinationObjectType + '" but the recived object type was "' +
                    destinationObject.__proto__.constructor.name + '".\n' + this.getCallStack()
                    );
        }
    }

    validateDestinationObjectInstance(destinationObjectType, destinationObject) {
        if (!!destinationObject) {
            this.validateType(destinationObject, 'destinationObject');
        }
    }

    getMappedObject(destinationObjectType, originObject, destinationObject) {
        this.validateKeyType(destinationObjectType, 'destinationObjectType')
        this.validateOriginObjectMustBeAnInstancedObject(originObject);
        this.validateType(originObject, 'originObject');
        this.validateDestinationObjectInstance(destinationObject);

        let destinationMapper = this.findFirstElement(this.mapperTypes, function (mapperType) {
            return mapperType.key === destinationObjectType;
        })
                || this.findFirstElement(this.mapperTypes, function (mapperType) {
                    return mapperType.typeName === destinationObjectType;
                });
        this.validateObjectMustBeRegistered(destinationObject, destinationMapper);
        this.validateDestinationObjectType(destinationObjectType, destinationObject, destinationMapper);

        let originMapper = this.findFirstElement(this.mapperTypes, function (mapperType) {
            return mapperType.typeName === originObject.__proto__.constructor.name;
        });
        this.validateObjectMustBeRegistered(originObject, originMapper);

        if (this.isString(destinationObjectType)) {
            destinationMapper = this.mapperTypes[destinationObjectType];
        } else {
            destinationMapper = this.findFirstElement(this.mapperTypes, function (mapperType) {
                return mapperType.typeName === destinationObjectType.__proto__.constructor.name;
            });
        }

        this.validateDestinationObjectTypeMustBeRegistered(destinationObjectType, destinationMapper);

        let originKey = originMapper.typeName || originMapper.key;
        this.validateKeyType(originKey, 'originKey');
        this.validateAlreadyRegisteredMapperHasNotBeenRegistered(originKey, 'originKey');

        let destinationKey = destinationMapper.typeName || destinationMapper.key;
        this.validateKeyType(destinationKey, 'destinationKey');
        this.validateAlreadyRegisteredMapperHasNotBeenRegistered(destinationKey, 'destinationKey');

        let key = originKey + '2' + destinationKey;
        this.validateAlreadyRegisteredMapperHasNotBeenRegistered(key, 'mapper key', this.mappers);

        if (!destinationObject) {
            destinationObject = new destinationMapper.type();
        }

        return this.mappers[key].mapperCallback(destinationObject, originObject);
    }

    defaultMapperCallback(destinationObject, originObject) {
        let destinationObjectKeys = Object.keys(destinationObject);

        destinationObjectKeys.forEach(function (key, index, allKeys) {
            this.copyAttribute(destinationObject, originObject, key);
        }.bind(this));

        return destinationObject;
    }

    copyAttribute(destinationObject, originObject, key) {
        if ((!!destinationObject[key] && !this.isFunction(destinationObject[key])) &&
                (!originObject[key] || (!!originObject[key] && !this.isFunction(originObject[key])))) {
            destinationObject[key] = originObject[key];
        }
    }

    mapAllOriginCallback(destinationObject, originObject) {
        let originObjectKeys = Object.keys(originObject);

        originObjectKeys.forEach(function (key, index, allKeys) {
            destinationObject[key] = originObject[key];
        });

        return destinationObject;
    }

    mapAllOriginAttributesCallback(destinationObject, originObject) {
        let originObjectKeys = Object.keys(originObject);

        originObjectKeys.forEach(function (key, index, allKeys) {
            if (!this.isFunction(originObject[key])) {
                destinationObject[key] = originObject[key];
            }
        });

        return destinationObject;
    }

    mapAllOriginMethodsCallback(destinationObject, originObject) {
        let originObjectKeys = Object.keys(originObject);

        originObjectKeys.forEach(function (key, index, allKeys) {
            if (this.isFunction(originObject[key])) {
                destinationObject[key] = originObject[key];
            }
        });

        return destinationObject;
    }

    mapAllCallback(destinationObject, originObject) {
        let destinationObjectKeys = Object.keys(destinationObject);

        destinationObjectKeys.forEach(function (key, index, allKeys) {
            if (!!originObject[key]) {
                destinationObject[key] = originObject[key];
            }
        });

        return destinationObject;
    }

    mapAllAttributesCallback(destinationObject, originObject) {
        let destinationObjectKeys = Object.keys(destinationObject);

        destinationObjectKeys.forEach(function (key, index, allKeys) {
            if (!!originObject[key] && !this.isFunction(originObject[key])) {
                destinationObject[key] = originObject[key];
            }
        });

        return destinationObject;
    }

    mapAllMethodsCallback(destinationObject, originObject) {
        let destinationObjectKeys = Object.keys(destinationObject);

        destinationObjectKeys.forEach(function (key, index, allKeys) {
            if (!!originObject[key] && this.isFunction(originObject[key])) {
                destinationObject[key] = originObject[key];
            }
        });

        return destinationObject;
    }

    registerMapper(destinationObjectType, originObjectType, mapperCallback, destinationKey, originKey) {
        this.validateKeyType(originKey, 'originKey');
        this.validateKeyType(destinationKey, 'destinationKey');
        this.validateType(destinationObjectType, 'destinationObjectType');
        this.validateType(originObjectType, 'originObjectType');
        this.validateAlreadyRegisteredMapper(originKey, originObjectType.name, 'originKey');
        this.validateAlreadyRegisteredMapper(destinationKey, destinationObjectType.name, 'destinationKey');

        originKey = originKey || originObjectType.name;
        destinationKey = destinationKey || destinationObjectType.name;

        if (!this.mapperTypes[originKey]) {
            this.registerMepperKeyTypes(originObjectType, originKey);
        }

        if (!this.mapperTypes[destinationKey]) {
            this.registerMepperKeyTypes(destinationObjectType, destinationKey);
        }

        let key = originKey + '2' + destinationKey;

        this.validateAlreadyRegistered(this.mappers, key, 'mappers');

        mapperCallback = mapperCallback || this.defaultMapperCallback.bind(this);

        this.mappers[key] = {
            key: key,
            originKey: originKey,
            destinationKey: destinationKey,
            destinationObjectType: destinationObjectType,
            originObjectType: originObjectType,
            mapperCallback: mapperCallback
        };
    }

    registerMepperKeyTypes(type, key) {
        this.validateKeyType(key);
        this.validateType(type);
        this.validateAlreadyRegisteredMapper(key, type.name, 'key');

        this.mapperTypes[key] = {key: key, typeName: type.name, type: type};
    }
}

export default Mapper4Javascript;
