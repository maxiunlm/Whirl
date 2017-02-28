class CommonFakes {
    constructor() {
        this.once = 1;
        this.twice = 2;
        this.startIndex = 0;
        this.initialNumberValue = 0;
        
        this.gameWidth = 1024;
        this.gameHeight = 768;
        
        this.loadUserSpaceShipFakes();
        this.loadEllipsePath();
    }
    
    loadUserSpaceShipFakes() {
        this.userSpaceShipHeight = 70;
        this.userSpaceShipWidth = 40;
    }
    
    loadEllipsePath(){
        this.ellipsePathHalfDivider = 2;
        this.ellipsePathDeltaA = -100;
        this.ellipsePathDeltaB = 100;
        this.ellipsePathRadiusPercentage = 0.54;
        this.ellipsePathInitialAngle = 0;        
    }
}

export default CommonFakes;