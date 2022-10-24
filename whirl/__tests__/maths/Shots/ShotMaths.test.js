/* global expect, spyOn, jasmine */

import CommonFakes from "../../../Selenium/Fakes/commonFakes";
import EllipsePath from "../../../src/maths/paths/EllipsePath";
import Position from "../../../src/maths/paths/Position";
import ShotMaths from "../../../src/maths/Shots/ShotMaths";
import IoC4Javascript from "../../../src/apis/ioc4javascript";

describe("ShotMaths - ", () => {
	let commonFakes = new CommonFakes();

	describe("CONSTRUCTOR - ", () => {
		it("initialices the Object", () => {
			let sut = new ShotMaths(commonFakes.ellipsePathRadiusDelta);

			expect(sut.ioc instanceof IoC4Javascript).toBeTruthy();
			expect(sut.deltaRadius).toEqual(commonFakes.ellipsePathRadiusDelta);
			expect(sut.path).toBeDefined();
			expect(sut.path instanceof EllipsePath).toBeTruthy();
		});

		it('with a "deltaRadius" invokes the "initialize" method from the "sut" object', () => {
			spyOn(ShotMaths.prototype, "initialize").and.callFake(() => {});

			let sut = new ShotMaths(commonFakes.ellipsePathRadiusDelta);

			expect(ShotMaths.prototype.initialize).toHaveBeenCalledWith(commonFakes.ellipsePathRadiusDelta);
			expect(ShotMaths.prototype.initialize.calls.count()).toEqual(commonFakes.once);
		});

		it('with an "ellipsePathKey" string key invokes the "getInstanceOf" method from the "IoC4Javascript" object', () => {
			spyOn(IoC4Javascript.prototype, "getInstanceOf").and.callThrough();

			new ShotMaths();

			expect(IoC4Javascript.prototype.getInstanceOf).toHaveBeenCalledWith(commonFakes.ellipsePathKey);
			// TODO: falla porque es Singleton -> expect(IoC4Javascript.prototype.getInstanceOf.calls.count()).toEqual(commonFakes.once);
		});
	});

	describe("initialize - ", () => {
		it('with a "deltaRadius" and an "EllipsePath" initialices the Object', () => {
			let sut = new ShotMaths();

			sut.initialize(commonFakes.ellipsePathRadiusDelta);

			expect(sut.deltaRadius).toEqual(commonFakes.ellipsePathRadiusDelta);
			expect(sut.path).toBeDefined();
			expect(sut.path instanceof EllipsePath).toBeTruthy();
		});
	});

	describe("moveToNextEllipticalPosition - ", () => {
		it('without any parameter returns the next "Position" object', () => {
			spyOn(EllipsePath.prototype, "getNextLeftEllipticalPosition").and.callFake(() => {
				return commonFakes.positionLeft;
			});
			spyOn(EllipsePath.prototype, "getNextTopEllipticalPosition").and.callFake(() => {
				return commonFakes.positionTop;
			});
			spyOn(Position.prototype, "setPosition").and.callFake(() => {});
			let sut = new ShotMaths(commonFakes.ellipsePath, commonFakes.ellipsePathRadiusDelta);

			let result = sut.moveToNextEllipticalPosition();

			expect(result instanceof Position).toBeTruthy();
		});

		it('with a "path" object invokes the "getNextLeftEllipticalPosition" method from the "EllipsePath" object', () => {
			spyOn(EllipsePath.prototype, "getNextLeftEllipticalPosition").and.callFake(() => {
				return commonFakes.positionLeft;
			});
			spyOn(EllipsePath.prototype, "getNextTopEllipticalPosition").and.callFake(() => {
				return commonFakes.positionTop;
			});
			spyOn(Position.prototype, "setPosition").and.callFake(() => {});
			let sut = new ShotMaths(commonFakes.ellipsePath, commonFakes.ellipsePathRadiusDelta);

			sut.moveToNextEllipticalPosition();

			expect(EllipsePath.prototype.getNextLeftEllipticalPosition).toHaveBeenCalled();
			expect(EllipsePath.prototype.getNextLeftEllipticalPosition.calls.count()).toEqual(commonFakes.once);
		});

		it('with a "path" object invokes the "getNextTopEllipticalPosition" method from the "EllipsePath" object', () => {
			spyOn(EllipsePath.prototype, "getNextLeftEllipticalPosition").and.callFake(() => {
				return commonFakes.positionLeft;
			});
			spyOn(EllipsePath.prototype, "getNextTopEllipticalPosition").and.callFake(() => {
				return commonFakes.positionTop;
			});
			spyOn(Position.prototype, "setPosition").and.callFake(() => {});
			let sut = new ShotMaths(commonFakes.ellipsePath, commonFakes.ellipsePathRadiusDelta);

			sut.moveToNextEllipticalPosition();

			expect(EllipsePath.prototype.getNextTopEllipticalPosition).toHaveBeenCalled();
			expect(EllipsePath.prototype.getNextTopEllipticalPosition.calls.count()).toEqual(commonFakes.once);
		});

		it('with an "positionKey" string key invokes the "getInstanceOf" method from the "IoC4Javascript" object', () => {
			spyOn(EllipsePath.prototype, "getNextLeftEllipticalPosition").and.callFake(() => {
				return commonFakes.positionLeft;
			});
			spyOn(EllipsePath.prototype, "getNextTopEllipticalPosition").and.callFake(() => {
				return commonFakes.positionTop;
			});
			spyOn(Position.prototype, "setPosition").and.callFake(() => {});
			spyOn(IoC4Javascript.prototype, "getInstanceOf").and.callThrough();
			let sut = new ShotMaths(commonFakes.ellipsePath, commonFakes.ellipsePathRadiusDelta);

			sut.moveToNextEllipticalPosition();

			expect(IoC4Javascript.prototype.getInstanceOf).toHaveBeenCalledWith(commonFakes.positionKey);
			// TODO: falla porque es Singleton -> expect(IoC4Javascript.prototype.getInstanceOf.calls.count()).toEqual(commonFakes.once);
		});

		it('with a "left" and a "top" parameters invokes the "setPosition" method from the "Position" object', () => {
			spyOn(EllipsePath.prototype, "getNextLeftEllipticalPosition").and.callFake(() => {
				return commonFakes.positionLeft;
			});
			spyOn(EllipsePath.prototype, "getNextTopEllipticalPosition").and.callFake(() => {
				return commonFakes.positionTop;
			});
			spyOn(Position.prototype, "setPosition").and.callFake(() => {});
			let sut = new ShotMaths(commonFakes.ellipsePath, commonFakes.ellipsePathRadiusDelta);

			sut.moveToNextEllipticalPosition();

			expect(Position.prototype.setPosition).toHaveBeenCalledWith(jasmine.any(Number), jasmine.any(Number));
		});

		it('with a "path radius" greater or equal  than the "minimum radius" subtracts the "delta radius" to the "path radius"', () => {
			spyOn(EllipsePath.prototype, "getNextLeftEllipticalPosition").and.callFake(() => {
				return commonFakes.positionLeft;
			});
			spyOn(EllipsePath.prototype, "getNextTopEllipticalPosition").and.callFake(() => {
				return commonFakes.positionTop;
			});
			spyOn(Position.prototype, "setPosition").and.callFake(() => {});
			let sut = new ShotMaths(commonFakes.ellipsePathRadiusDelta);
			let previousRadius = sut.path.radius;
			sut.moveToNextEllipticalPosition();

			let result = sut.path.radius;

			expect(result).toBeLessThan(previousRadius);
		});

		it('with a "path radius" less than the "minimum radius" then the "delta radius" must be equal than before', () => {
			spyOn(EllipsePath.prototype, "getNextLeftEllipticalPosition").and.callFake(() => {
				return commonFakes.positionLeft;
			});
			spyOn(EllipsePath.prototype, "getNextTopEllipticalPosition").and.callFake(() => {
				return commonFakes.positionTop;
			});
			spyOn(Position.prototype, "setPosition").and.callFake(() => {});
			let sut = new ShotMaths(commonFakes.ellipsePath, commonFakes.ellipsePathRadiusDelta);
			sut.path.radius = commonFakes.minimumRadius - 0.1;
			let previousRadius = sut.path.radius;
			sut.moveToNextEllipticalPosition();

			let result = sut.path.radius;

			expect(result).toEqual(previousRadius);
		});
	});

	describe("setAngle - ", () => {
		it("With an angle object invokes the setAngle method from the EllipsePath object", () => {
			spyOn(EllipsePath.prototype, "setAngle").and.callFake(() => {});
			let sut = new ShotMaths(commonFakes.ellipsePathRadiusDelta);

			sut.setAngle(commonFakes.startAngle);

			expect(EllipsePath.prototype.setAngle).toHaveBeenCalledWith(commonFakes.startAngle);
			expect(EllipsePath.prototype.setAngle.calls.count()).toEqual(commonFakes.once);
		});
	});

	describe("isNearToCenter - ", () => {
		it("With a position object invokes the isNearToCenter method from the EllipsePath object", () => {
			spyOn(EllipsePath.prototype, "isNearToCenter").and.callFake(() => {});
			let sut = new ShotMaths(commonFakes.ellipsePathRadiusDelta);

			sut.isNearToCenter(commonFakes.position);

			expect(EllipsePath.prototype.isNearToCenter).toHaveBeenCalledWith(commonFakes.position);
			expect(EllipsePath.prototype.isNearToCenter.calls.count()).toEqual(commonFakes.once);
		});
	});
});
