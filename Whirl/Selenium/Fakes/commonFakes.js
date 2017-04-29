class CommonFakes {
    constructor() {
        this.once = 1;
        this.twice = 2;
        this.startIndex = 0;
        this.initialNumberValue = 0;

        this.flatAngleInRadians = Math.PI;
        this.flatAngleInDegrees = 180;
        
        this.gameWidth = 1024;
        this.gameHeight = 768;
        
        this.loadUserSpaceShipFakes();
        this.loadEllipsePathFakes();
        this.loadPostionFakes();
    }
    
    loadUserSpaceShipFakes() {
        this.userSpaceShipHeight = 70;
        this.userSpaceShipWidth = 40;
        this.actions = {};
    }
    
    loadEllipsePathFakes(){
        this.ellipsePathHalfDivider = 2;
        this.ellipsePathDeltaA = -100;
        this.ellipsePathDeltaB = 100;
        this.ellipsePathRadiusPercentage = 0.54;
        this.ellipsePathInitialAngle = 0;
        this.ellipsePathDeltaAngle = 0.04;
    }
    
    loadPostionFakes(){
        this.positionLeft = 1;
        this.positionTop = 2;
        this.position = {top: 0, left: 0};
        this.stateChangedPosition = {
            style: {
                width: this.userSpaceShipWidth,
                height: this.userSpaceShipHeight,
                top: this.position.top,
                left: this.position.left
            }
        };
        this.stateInitialPosition = {
            style: {
                width: this.userSpaceShipWidth,
                height: this.userSpaceShipHeight,
                top: this.position.top,
                left: this.position.left,
                transform: 'rotate(0deg)'
            }
        };
    }
    
    rountToTwoDecimals(value) {
        return Math.round(value * 100) / 100;
    }
}

export default CommonFakes;