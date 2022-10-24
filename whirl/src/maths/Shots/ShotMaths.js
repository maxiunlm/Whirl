import IoC4Javascript from "../../../src/apis/ioc4javascript";

class ShotMaths {
	constructor(deltaRadius) {
		this.ioc = new IoC4Javascript();

		this.initialize(deltaRadius);
	}

	initialize(deltaRadius) {
		this.deltaRadius = deltaRadius || 2;
		this.path = this.ioc.getInstanceOf("ellipsePathKey");
	}

	setAngle(angle) {
		this.path.setAngle(angle);
	}

	moveToNextEllipticalPosition() {
		if (this.path.radius - this.deltaRadius >= 10) {
			this.path.radius -= this.deltaRadius;
		}

		let left = this.path.getNextLeftEllipticalPosition();
		let top = this.path.getNextTopEllipticalPosition();
		let position = this.ioc.getInstanceOf("positionKey");

		position.setPosition(left, top);

		return position;
	}

	isNearToCenter(position) {
		return this.path.isNearToCenter(position);
	}
}

export default ShotMaths;
