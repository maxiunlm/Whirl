import BaseMapperConfiguration from './baseMapperConfiguration';

class RegisterMapperConfiguration extends BaseMapperConfiguration {
    constructor(
            destinationObjectType,
            originObjectType,
            mapperCallback,
            destinationKey,
            originKey,
            ignoredAttributes,
            ignoreAllAttributes,
            exceptedAttributes
            ) {
        super(
                destinationObjectType,
                ignoredAttributes,
                ignoreAllAttributes,
                exceptedAttributes
                );
        
        this.originObjectType = originObjectType || Object; // false;
        this.mapperCallback = mapperCallback || false;
        this.destinationKey = destinationKey || '';
        this.originKey = originKey || '';

        this.validateKeyType(this.originKey, 'originKey');
        this.validateKeyType(this.destinationKey, 'destinationKey');
        this.validateType(this.originObjectType, 'originObjectType');
    }
}

export default RegisterMapperConfiguration;
