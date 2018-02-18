import RetryManagerConfiguration from './retryManagerConfiguration';

class RetryManager4Javascript {
    constructor(retryManagerConfiguration) {
        this.validateRetryManagerConfiguration(retryManagerConfiguration);

        this.counterAttempIndex = retryManagerConfiguration.startValue || 0;
        this.hasAnotherAttempt = retryManagerConfiguration.hasAnotherAttempt;
        this.maxAttemps = retryManagerConfiguration.maxAttemps;
        this.exceptionMessage = retryManagerConfiguration.exceptionMessage;
        this.retryMessage = retryManagerConfiguration.retryMessage;
        this.onRetryEvent = retryManagerConfiguration.onRetryEvent;
        this.onStopRetryingEvent = retryManagerConfiguration.onStopRetryingEvent;
        this.setConfirmAction(false, retryManagerConfiguration);
        this.getHasAnotherAttempt = this.getHasAnotherAttempt.bind(this);
    }

    validateRetryManagerConfiguration(retryManagerConfiguration) {
        if (!retryManagerConfiguration instanceof RetryManagerConfiguration) {
            throw new TypeError('ERROR [validateRetryManagerConfiguration]: The "retryManagerConfiguration" object must be an instance of the "RetryManagerConfiguration" class.');
        }
    }
    
    setMaxAttemps(maxAttemps) {
        //console.log('setMaxAttemps: ' + maxAttemps);
        this.maxAttemps = maxAttemps || 3;
    }
    
    setConfirmAction(confirmAction, retryManagerConfiguration) {
        this.confirmAction = confirmAction 
                || retryManagerConfiguration.confirmAction
                || this.defaultConfirmAction.bind(this);
    }

    getHasAnotherAttempt(exception) {
        this.counterAttempIndex++;
        this.hasAnotherAttempt = this.counterAttempIndex < this.maxAttemps;
        
        if (this.hasAnotherAttempt) {
            let message = this.exceptionMessage +
                (exception.message || exception) +
                '\n' + this.retryMessage;

            if (this.confirmAction(message) && !!this.onRetryEvent) {
                this.onRetryEvent();
            } else if (this.onStopRetryingEvent) {
                this.onStopRetryingEvent();
                this.hasAnotherAttempt = false;
            }
        }

        //console.log('hasAnotherAttempt: ' + this.hasAnotherAttempt + '; counterAttempIndex: ' + this.counterAttempIndex);
        return this.hasAnotherAttempt;
    }
    
    defaultConfirmAction(message) {
        return confirm(message);
    }

    resetCounterAttempIndex(startValue) {
        this.counterAttempIndex = startValue || 0;
    }
}

export default RetryManager4Javascript;
