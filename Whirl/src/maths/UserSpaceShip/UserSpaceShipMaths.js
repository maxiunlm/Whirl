import IoC4Javascript from '../../apis/ioc4javascript';

class UserSpaceShipMaths {
    constructor() {
        this.ioc = new IoC4Javascript();
        this.dimensions = this.getDimensions();
        this.geometry = this.getUserSpaceShipGeometric();
        this.path = this.getNewEllipsePath();;
        this.calculus = this.getNewCalculus();
    }
    
    getUserSpaceShipGeometric() {
        return this.ioc.getInstanceOf('userSpaceShipGeometricKey');
    }
    
    getDimensions() {
        return this.ioc.getInstanceOf('dimensionsKey');
    }
    
    getNewEllipsePath() {
        return this.ioc.getInstanceOf('ellipsePathKey');
    }
    
    getNewCalculus() {
        return this.ioc.getInstanceOf('calculusKey');
    }
    
    getTop() {
        return this.path.centerY + ((this.path.radius + this.path.deltaA) * Math.cos(this.path.angle));
    }
    
    getLeft() {
        return this.path.centerX + ((this.path.radius + this.path.deltaB) * Math.sin(this.path.angle));
    }
    
    getWidth () {
        return this.geometry.width;
    }
    
    getHeight() {
        return this.geometry.height;
    }
    
    getAngle() { // TODO: TDD !!!
        return this.path.angle;
    }
    
    moveToNextLeftEllipticalPosition() {
        this.path.angle -= this.path.deltaAngle;
        
        if (this.path.angle <= -2 * Math.PI) {
            this.path.angle += 2 * Math.PI;
        }

        let left = this.path.getNextLeftEllipticalPosition();
        let top = this.path.getNextTopEllipticalPosition();
        
        let position = this.ioc.getInstanceOf('positionKey');
        position.setPosition(left, top);
        
        return position; 
    }
        
    moveToNextRightEllipticalPosition() {
        this.path.angle += this.path.deltaAngle;
        
        if (this.path.angle >= 2 * Math.PI) {
            this.path.angle -= 2 * Math.PI;
        }
        
        let left = this.path.getNextLeftEllipticalPosition();
        let top = this.path.getNextTopEllipticalPosition();
        
        let position = this.ioc.getInstanceOf('positionKey');
        position.setPosition(left, top);
        
        return position;
    }

    getRotation() {
        return  -1 * this.calculus.toDegrees(this.path.angle) % 360;
    }
}

export default UserSpaceShipMaths;


