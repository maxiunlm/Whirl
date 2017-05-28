import IoC4Javascript from '../../../src/apis/ioc4javascript';

class ShotMaths {
    constructor(path, deltaRadius) {
        this.ioc = new IoC4Javascript();

        if (!!path) {
            this.initialize(path, deltaRadius);
        }
    }

    initialize(path, deltaRadius) {
        if (!path || !(path instanceof this.ioc.getType('ellipsePathKey'))) {
            throw new TypeError('EXCEPTION [initialize]: The "path" parameter is required.');
        }

        this.path = path;
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
