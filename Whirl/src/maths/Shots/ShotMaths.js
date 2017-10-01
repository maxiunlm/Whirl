import IoC4Javascript from '../../../src/apis/ioc4javascript';

class ShotMaths {
    constructor(deltaRadius) {
        this.ioc = new IoC4Javascript();
        this.path = this.ioc.getInstanceOf('ellipsePathKey');
        
        //if (!!deltaRadius) {
            this.initialize(deltaRadius);
        //}
    }

    initialize(deltaRadius) {
        this.deltaRadius = deltaRadius || 2;
    }

    moveToNextEllipticalPosition() {
        if(this.path.radius - this.deltaRadius >= 10) {
            this.path.radius -= this.deltaRadius;
        }

        let left = this.path.getNextLeftEllipticalPosition();
        let top = this.path.getNextTopEllipticalPosition();
        let position = this.ioc.getInstanceOf('positionKey');
        
        position.setPosition(left, top);

        return position;
    }
}

export default ShotMaths;
