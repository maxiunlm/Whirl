/* global expect, spyOn */

import CommonFakes from "../../../Selenium/Fakes/commonFakes";
import UserSpaceShipGeometric from "../../../src/maths/UserSpaceShip/UserSpaceShipGeometric";
import Dimensions from "../../../src/maths/paths/Dimensions";
import EllipsePath from "../../../src/maths/paths/EllipsePath";
import IoC4Javascript from "../../../src/apis/ioc4javascript";

describe("EllipsePath", () => {
	let commonFakes = new CommonFakes();

	describe("CONSTRUCTOR", () => {
		it("Initializes the Object", () => {
			let sut = new EllipsePath();

			expect(sut.ioc instanceof IoC4Javascript).toBeTruthy();
			expect(sut.centerX).toEqual(Math.floor((commonFakes.gameWidth - commonFakes.userSpaceShipWidth) / commonFakes.ellipsePathHalfDivider));
			expect(sut.centerY).toEqual(Math.floor((commonFakes.gameHeight - commonFakes.userSpaceShipHeight) / commonFakes.ellipsePathHalfDivider));
			expect(sut.deltaA).toEqual(commonFakes.ellipsePathDeltaA);
			expect(sut.deltaB).toEqual(commonFakes.ellipsePathDeltaB);
			expect(sut.radius).toEqual(commonFakes.gameHeight * commonFakes.ellipsePathRadiusPercentage);
			expect(sut.angle).toEqual(commonFakes.ellipsePathInitialAngle);
			expect(sut.deltaAngle).toEqual(commonFakes.ellipsePathDeltaAngle);
		});

		it('Without any parameterinvokes the "getDimensions" method from the "sut" object', () => {
			spyOn(EllipsePath.prototype, "getDimensions").and.callFake(() => {
				return new Dimensions();
			});

			new EllipsePath();

			expect(EllipsePath.prototype.getDimensions).toHaveBeenCalled();
			expect(EllipsePath.prototype.getDimensions.calls.count()).toEqual(commonFakes.once);
		});

		it('Without any parameterinvokes the "getUserSpaceShipGeometric" method from the "sut" object', () => {
			spyOn(EllipsePath.prototype, "getUserSpaceShipGeometric").and.callFake(() => {
				return new UserSpaceShipGeometric();
			});

			new EllipsePath();

			expect(EllipsePath.prototype.getUserSpaceShipGeometric).toHaveBeenCalled();
			expect(EllipsePath.prototype.getUserSpaceShipGeometric.calls.count()).toEqual(commonFakes.once);
		});
	});

	describe("getUserSpaceShipGeometric - ", () => {
		it('With "userSpaceShipGeometricKey" string key invokes the "getInstanceOf" method from "IoC4Javascript" object', () => {
			let sut = new EllipsePath();
			spyOn(sut.ioc, "getInstanceOf").and.callThrough();

			sut.getUserSpaceShipGeometric();

			expect(sut.ioc.getInstanceOf).toHaveBeenCalledWith(commonFakes.userSpaceShipGeometricKey);
			// TODO: REVISAR !!! Lo llama el 2 veces en lugar de una porque es un Singleton vuelve a computar (LOS TESTS NO SON INDEPENDEINTES) !!!
			//expect(IoC4Javascript.prototype.getInstanceOf.calls.count()).toEqual(commonFakes.once);
			// NO FUNCIONA !!! -> IoC4Javascript.prototype.getInstanceOf.calls.reset();
		});

		it('With "userSpaceShipGeometricKey" string key calls the "getInstanceOf" method from "IoC4Javascript" object wich returns an "UserSpaceShipGeometric" instance', () => {
			spyOn(IoC4Javascript.prototype, "getInstanceOf").and.callThrough();
			let sut = new EllipsePath();

			let result = sut.getUserSpaceShipGeometric();

			expect(result instanceof UserSpaceShipGeometric).toBeTruthy();
		});
	});

	describe("getDimensions - ", () => {
		it('With "dimensionsKey" string key invokes the "getInstanceOf" method from "IoC4Javascript" object', () => {
			let sut = new EllipsePath();
			spyOn(sut.ioc, "getInstanceOf").and.callThrough();

			sut.getDimensions();

			expect(sut.ioc.getInstanceOf).toHaveBeenCalledWith(commonFakes.dimensionsKey);
			// TODO: REVISAR !!! Lo llama el 2 veces en lugar de una porque es un Singleton vuelve a computar (LOS TESTS NO SON INDEPENDEINTES) !!!
			//expect(IoC4Javascript.prototype.getInstanceOf.calls.count()).toEqual(commonFakes.once);
			// NO FUNCIONA !!! -> IoC4Javascript.prototype.getInstanceOf.calls.reset();
		});

		it('With "dimensionsKey" string key calls the "getInstanceOf" method from "IoC4Javascript" object wich returns an "Dimensions" instance', () => {
			spyOn(IoC4Javascript.prototype, "getInstanceOf").and.callThrough();
			let sut = new EllipsePath();

			let result = sut.getDimensions();

			expect(result instanceof Dimensions).toBeTruthy();
		});
	});

	describe("getNextLeftEllipticalPosition - ", () => {
		it("Without any parameter returns the next left elliptical position", () => {
			let sut = new EllipsePath(commonFakes.dimensions);

			let result = sut.getNextLeftEllipticalPosition(commonFakes.ellipsePath);

			expect(result).toEqual(sut.centerX + (sut.radius + sut.deltaB) * Math.sin(sut.angle));
		});
	});

	describe("getNextTopEllipticalPosition - ", () => {
		it("Without any parameter returns the next top elliptical position", () => {
			let sut = new EllipsePath(commonFakes.dimensions);

			let result = sut.getNextTopEllipticalPosition(commonFakes.ellipsePath);

			expect(result).toEqual(sut.centerY + (sut.radius + sut.deltaA) * Math.cos(sut.angle));
		});
	});

	describe("setAngle - ", () => {
		it('Without parameters sets the "zero angle value" of the "sut" object', () => {
			let sut = new EllipsePath(commonFakes.dimensions);

			sut.setAngle();

			expect(sut.angle).toEqual(commonFakes.initialNumberValue);
		});

		it('With an angle sets the "angle value" of the "sut" object', () => {
			let sut = new EllipsePath(commonFakes.dimensions);

			sut.setAngle(commonFakes.flatAngleInRadians);

			expect(sut.angle).toEqual(commonFakes.flatAngleInRadians);
		});
	});

	describe("isNearToCenter - ", () => {
		it("With a dimensions object and a position object which is close to the center returns true", () => {
			let sut = new EllipsePath(commonFakes.dimensions);

			let result = sut.isNearToCenter(commonFakes.centerPosition);

			expect(result).toBeTruthy();
		});

		it("With a dimensions object and a position object which is far to the center returns false", () => {
			let sut = new EllipsePath(commonFakes.dimensions);

			let result = sut.isNearToCenter(commonFakes.position);

			expect(result).toBeFalsy();
		});

		it("With a dimensions object and a position invokes the isNearToCenterY method from the sut", () => {
			let sut = new EllipsePath(commonFakes.dimensions);
			spyOn(sut, "isNearToCenterY").and.callThrough();

			let result = sut.isNearToCenter(commonFakes.position);

			expect(sut.isNearToCenterY).toHaveBeenCalledWith(commonFakes.position);
			expect(sut.isNearToCenterY.calls.count()).toEqual(commonFakes.once);
		});

		it("With a dimensions object and a position invokes the isNearToCenterX method from the sut", () => {
			let sut = new EllipsePath(commonFakes.dimensions);
			spyOn(sut, "isNearToCenterX").and.callThrough();

			let result = sut.isNearToCenter(commonFakes.position);

			expect(sut.isNearToCenterX).toHaveBeenCalledWith(commonFakes.position);
			expect(sut.isNearToCenterX.calls.count()).toEqual(commonFakes.once);
		});
	});

	describe("isNearToCenterY - ", () => {
		it("With a dimensions object and a position object which is close to the center in the Y axis returns true", () => {
			let sut = new EllipsePath(commonFakes.dimensions);

			let result = sut.isNearToCenterY(commonFakes.centerPosition);

			expect(result).toBeTruthy();
		});

		it("With a dimensions object and a position object which is far to the center in the Y axis returns false", () => {
			let sut = new EllipsePath(commonFakes.dimensions);

			let result = sut.isNearToCenterY(commonFakes.position);

			expect(result).toBeFalsy();
		});
	});

	describe("isNearToCenterX - ", () => {
		it("With a dimensions object and a position object which is close to the center in the X axis returns true", () => {
			let sut = new EllipsePath(commonFakes.dimensions);

			let result = sut.isNearToCenterX(commonFakes.centerPosition);

			expect(result).toBeTruthy();
		});

		it("With a dimensions object and a position object which is far to the center in the X axis returns false", () => {
			let sut = new EllipsePath(commonFakes.dimensions);

			let result = sut.isNearToCenterX(commonFakes.position);

			expect(result).toBeFalsy();
		});
	});
});
