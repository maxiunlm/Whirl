import UserSpaceShipGeometric from './UserSpaceShipGeometric';
import EllipsePath from '../paths/EllipsePath';
import Position from '../paths/Position';

class UserSpaceShipMaths {
    constructor(dimensions) {
        this.geometry = new UserSpaceShipGeometric();
        this.path = new EllipsePath(dimensions, this.geometry);
    }
    
    getTop () {
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
    
    moveToNextLeftEllipticalPosition() {
        this.path.angle -= this.path.deltaAngle;
        
        if (this.path.angle <= -2 * Math.PI) {
            this.path.angle += 2 * Math.PI;
        }

        var left = this.path.centerX + ((this.path.radius + this.path.deltaB) * Math.sin(this.path.angle));
        var top = this.path.centerY + ((this.path.radius + this.path.deltaA) * Math.cos(this.path.angle));
        
        return new Position(left, top);
    }
    
//    moveToNextRightEllipticalPosition() {
//        this.path.angle += this.path.deltaAngle;
//        
//        if (ellipseShipPath.angle >= 2 * Math.PI) {
//            ellipseShipPath.angle -= 2 * Math.PI;
//        }
//        
//        var left = this.path.centerX + ((this.path.radius + this.path.deltaB) * Math.sin(this.path.angle));
//        var top = this.path.centerY + ((this.path.radius + this.path.deltaA) * Math.cos(this.path.angle));
//        
//        return new Position(left, top);
//    }

//    getRotation() {
//        return  userSpaceShip.style.transform = 'rotate(' + (-1 * toDegrees(ellipseShipPath.angle) % (360)) + 'deg)';
//    }
}

export default UserSpaceShipMaths;


