import IoC4Javascript from '../../apis/ioc4javascript';

class EllipsePath {
    constructor() {
        this.ioc = new IoC4Javascript();
        this.dimensions = this.getDimensions();
        this.geometry = this.getUserSpaceShipGeometric();
        this.centerX = Math.floor((this.dimensions.width - this.geometry.width) / 2);
        this.centerY = Math.floor((this.dimensions.height - this.geometry.height) / 2);
        this.deltaA = -100;
        this.deltaB = 100;
        this.radius = this.dimensions.height * 0.54;
        this.angle = 0;
        this.deltaAngle = 0.01;
    }
    
    setAngle(angle) { // TODO: TDD !!!
        this.angle = angle;
    }
    
    getDimensions() {
        return this.ioc.getInstanceOf('dimensionsKey');
    }
    
    getUserSpaceShipGeometric() {
        return this.ioc.getInstanceOf('userSpaceShipGeometricKey');
    }
    
    getNextLeftEllipticalPosition() {
        return this.centerX + ((this.radius + this.deltaB) * Math.sin(this.angle));
    }
    
    getNextTopEllipticalPosition() {
        return this.centerY + ((this.radius + this.deltaA) * Math.cos(this.angle));
    }
}

export default EllipsePath;
