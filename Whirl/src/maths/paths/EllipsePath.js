class EllipsePath {
    constructor(dimensions, spaceShipGeometric) {
        this.centerX = Math.floor((dimensions.gameWidth - spaceShipGeometric.width) / 2);
        this.centerY = Math.floor((dimensions.gameHeight - spaceShipGeometric.height) / 2);
        this.deltaA = -100;
        this.deltaB = 100;
        this.radius = dimensions.gameHeight * 0.54;
        this.angle = 0;
        this.deltaAngle = 0.04;
    }
}

export default EllipsePath;
