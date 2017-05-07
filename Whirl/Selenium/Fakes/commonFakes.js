class CommonFakes {
    constructor() {
        this.anytime = 0;
        this.once = 1;
        this.twice = 2;
        this.threeTimes = 3;
        this.fourTimes = 4;
        this.fiveTimes = 5;
        this.startIndex = 0;
        this.initialNumberValue = 0;
        this.EmptyObject = {};

        this.flatAngleInRadians = Math.PI;
        this.flatAngleInDegrees = 180;
        
        this.loadAppFakes();
        this.loadUserSpaceShipFakes();
        this.loadEllipsePathFakes();
        this.loadPostionFakes();
    }
    
    loadAppFakes() {
        this.gameWidth = 1024;
        this.gameHeight = 768;
        this.spaceBarKeyCode = 32;
        this.leftKeyCode = 37;
        this.upKeyCode = 38;
        this.rightKeyCode = 39;
        this.downKeyCode = 40;   
        this.props = {
            height: this.gameHeight,
            width: this.gameWidth
        };
        this.eventLeftKeyCode = {
            keyCode: this.leftKeyCode
        };
        this.eventRightKeyCode = {
            keyCode: this.rightKeyCode,
            preventDefault: () => {
            }
        };       
    }
    
    loadUserSpaceShipFakes() {
        this.userSpaceShipImageStopped = '/images/UserSpaceShipStopped.png';
        this.userSpaceShipImageToLeft = '/images/UserSpaceShipToLeft.png';
        this.userSpaceShipImageToRight = '/images/UserSpaceShipToRight.png';
        this.userSpaceShipHeight = 70;
        this.userSpaceShipWidth = 40;
        this.actions = {};
        this.movementInterval = 0.04;
    }
    
    loadEllipsePathFakes(){
        this.ellipsePathHalfDivider = 2;
        this.ellipsePathDeltaA = -100;
        this.ellipsePathDeltaB = 100;
        this.ellipsePathRadiusPercentage = 0.54;
        this.ellipsePathInitialAngle = 0;
        this.ellipsePathDeltaAngle = 0.01;
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