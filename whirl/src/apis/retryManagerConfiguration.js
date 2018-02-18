class RetryManagerConfiguration {
    constructor(maxAttemps, retryMessage, exceptionMessage, startValue, onRetryEvent, onStopRetryingEvent, confirmAction) {
        this.startValue = startValue || 0;
        this.hasAnotherAttempt = false;
        this.exceptionMessage = exceptionMessage || 'There was an error: ';
        this.retryMessage = retryMessage || 'Retry?';
        this.setConfirmAction(confirmAction);
        this.onRetryEvent = onRetryEvent || this.defaultEvent.bind(this);
        this.onStopRetryingEvent = onStopRetryingEvent || this.defaultEvent.bind(this);
        this.setMaxAttemps(maxAttemps);

        this.validateConfiguration();
    }
    
    setConfirmAction(confirmAction) {
        this.confirmAction = confirmAction || false;
    }
    
    setMaxAttemps(maxAttemps) {
        this.maxAttemps = maxAttemps || 3;
    }
    
    defaultEvent() {
        return true;
    }

    validateConfiguration() {
        if (this.startValue >= this.maxAttemps) {
            throw new TypeError('ERROR [validateConfiguration]: The "startValue" must be less than the "maxAttemps" value.');
        }
    }
}

export default RetryManagerConfiguration;
