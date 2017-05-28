import IoC4Javascript from '../../../src/apis/ioc4javascript';

class ShotMaths {
    constructor(deltaRadius, path) {
        this.ioc = new IoC4Javascript();
        this.initialize(deltaRadius, path);
    }
    
    initialize(deltaRadius, path) {
        this.path = path;
        this.deltaRadius = deltaRadius || 2;
    }
    
    moveToNextEllipticalPosition() {
        /*if(this.path.radius - this.deltaRadius >= 10) {
            this.path.radius -= this.deltaRadius;
        }*/

        //let left = this.path.getNextLeftEllipticalPosition ();
        //let top = this.path.getNextTopEllipticalPosition ();
        
        //let position = this.ioc.getInstanceOf('positionKey'());
        //position.setPosition.bind(left, top)
        
        //return position;
    }
    
    setPosition(instance) {
        //instance.setPosition(this.left, this.top);
        //return instance; //????????????
    }
}

export default ShotMaths;
