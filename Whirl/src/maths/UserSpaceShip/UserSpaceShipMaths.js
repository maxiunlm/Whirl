import UserSpaceShipGeometric from './UserSpaceShipGeometric';
import EllipsePath from '../paths/EllipsePath';

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
}

export default UserSpaceShipMaths;


