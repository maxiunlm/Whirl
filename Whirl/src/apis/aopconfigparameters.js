class AopConfigParameters {
    constructor(
            objectReference,
            methodName,
            beforeCallback,
            afterCallback,
            exceptionCallback,
            finallyCallback,
            wrapperCallback
            ) {
        this.objectReference = objectReference || window;
        this.methodName = methodName || '<unknown>';
        this.beforeCallback = beforeCallback || false;
        this.afterCallback = afterCallback || false;
        this.exceptionCallback = exceptionCallback || false;
        this.finallyCallback = finallyCallback || false;
        this.wrapperCallback = wrapperCallback || false;
    }

    copy(aopConfigParameters) {
        this.objectReference = aopConfigParameters.objectReference;
        this.methodName = aopConfigParameters.methodName;
        this.beforeCallback = aopConfigParameters.beforeCallback;
        this.afterCallback = aopConfigParameters.afterCallback;
        this.exceptionCallback = aopConfigParameters.exceptionCallback;
        this.finallyCallback = aopConfigParameters.finallyCallback;
        this.wrapperCallback = aopConfigParameters.wrapperCallback;
    }
}

export default AopConfigParameters;
