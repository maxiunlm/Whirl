import RetryManagerConfiguration from './retryManagerConfiguration';
import RetryManager4Javascript from './retryManager4Javascript';

class AopConfigParameters {
    constructor(
            objectReference,
            methodName,
            beforeCallback,
            afterCallback,
            exceptionCallback,
            finallyCallback,
            wrapperCallback,
            mustUseRetryManager
            ) {
        this.objectReference = objectReference || window;
        this.methodName = methodName || '<unknown>';
        this.beforeCallback = beforeCallback || false;
        this.afterCallback = afterCallback || false;
        this.exceptionCallback = exceptionCallback || false;
        this.finallyCallback = finallyCallback || false;
        this.wrapperCallback = wrapperCallback || false;
        this.mustUseRetryManager = mustUseRetryManager || false;

        if (this.mustUseRetryManager) {
            this.setRetryManager();
        }
    }

    setRetryManager(configuration) {
        configuration = configuration || new RetryManagerConfiguration();
        this.retryManager = new RetryManager4Javascript(configuration);
    }

    copy(aopConfigParameters) {
        this.objectReference = aopConfigParameters.objectReference;
        this.methodName = aopConfigParameters.methodName;
        this.beforeCallback = aopConfigParameters.beforeCallback;
        this.afterCallback = aopConfigParameters.afterCallback;
        this.exceptionCallback = aopConfigParameters.exceptionCallback;
        this.finallyCallback = aopConfigParameters.finallyCallback;
        this.wrapperCallback = aopConfigParameters.wrapperCallback;
        this.mustUseRetryManager = aopConfigParameters.mustUseRetryManager;
        this.retryManager = aopConfigParameters.retryManager;
        this.wrapper = aopConfigParameters.wrapper;
    }
}


export default AopConfigParameters;
