import RetryManagerConfiguration from './retryManagerConfiguration';

class RetryManager4Javascript {
    constructor(retryManagerConfiguration) {
        this.validateRetryManagerConfiguration(retryManagerConfiguration);

        this.counterAttempIndex = retryManagerConfiguration.startValue;
        this.hasAnotherAttempt = retryManagerConfiguration.hasAnotherAttempt;
        this.maxAttemps = retryManagerConfiguration.maxAttemps;
        this.exceptionMessage = retryManagerConfiguration.exceptionMessage;
        this.retryMessage = retryManagerConfiguration.retryMessage;
        this.onRetryEvent = retryManagerConfiguration.onRetryEvent;
        this.onStopRetryingEvent = retryManagerConfiguration.onStopRetryingEvent;
    }

    validateRetryManagerConfiguration(retryManagerConfiguration) {
        if (!retryManagerConfiguration instanceof RetryManagerConfiguration) {
            throw new TypeError('ERROR [validateRetryManagerConfiguration]: The "retryManagerConfiguration" object must be an instance of the "RetryManagerConfiguration" class.');
        }
    }

    getHasAnotherAttempt(exception, startValue) {
        this.counterAttempIndex++;
        this.hasAnotherAttempt = this.counterAttempIndex <= this.maxAttemps;

        if (this.hasAnotherAttempt) {
            let message = this.exceptionMessage +
                (exception.message || exception) +
                '\n' + this.retryMessage;

            if (confirm(message) && !!this.onRetryEvent) {
                this.onRetryEvent();
            } else if (this.onStopRetryingEvent) {
                this.onStopRetryingEvent();
                this.hasAnotherAttempt = false;
            }
        }

        return this.hasAnotherAttempt;
    }

    resetCounterAttempIndex(startValue) {
        this.counterAttempIndex = startValue || 0;
    }
}

export default RetryManager4Javascript;
