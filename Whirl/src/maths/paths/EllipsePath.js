class EllipsePath {
    constructor(dimensions, spaceShipGeometric) {
        this.centerX = Math.floor((dimensions.width - spaceShipGeometric.width) / 2);
        this.centerY = Math.floor((dimensions.height - spaceShipGeometric.height) / 2);
        this.deltaA = -100;
        this.deltaB = 100;
        this.radius = dimensions.height * 0.54;
        this.angle = 0;
        this.deltaAngle = 0.01;
    }
}

export default EllipsePath;
