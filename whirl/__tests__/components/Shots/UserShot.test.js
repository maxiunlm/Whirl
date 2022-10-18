/* global expect, spyOn, jasmine, Function, Dimensions, EllipsePath */

import React from "react";
import ReactDOM from "react-dom";
import CommonFakes from "../../../Selenium/Fakes/commonFakes";
import EllipsePath from "../../../src/maths/paths/EllipsePath";
import Dimensions from "../../../src/maths/paths/Dimensions";
import UserShot from "../../../src/components/Shots/UserShot";
import Position from "../../../src/maths/paths/Position";
import ShotMaths from "../../../src/maths/Shots/ShotMaths";
import IoC4Javascript from "../../../src/apis/ioc4javascript";

describe("UserShot - ", () => {
	let commonFakes = new CommonFakes();

	describe("COMPONENT - ", () => {
		it("without any parameter, when is loaded, then renders without crashing", () => {
			const div = document.createElement("div");

			ReactDOM.render(<UserShot position={commonFakes.position} shot={{}} />, div);
		});
	});

	describe("CONSTRUCTOR - ", () => {
		it("initialices the object", () => {
			let sut = new UserShot(commonFakes);

			expect(sut.maths instanceof ShotMaths).toBeTruthy();
			expect(sut.ioc instanceof IoC4Javascript).toBeTruthy();
			expect(sut.movementInterval).toEqual(commonFakes.movementShotInterval);
			expect(sut.actions).toEqual(commonFakes.props.actions);
			expect(sut.state.style.left).toEqual(commonFakes.positionLeft);
			expect(sut.state.style.top).toEqual(commonFakes.positionTop);
		});

		it("initialices the object without an initial position", () => {
			let sut = new UserShot(new Object());

			expect(sut.maths instanceof ShotMaths).toBeTruthy();
			expect(sut.ioc instanceof IoC4Javascript).toBeTruthy();
			expect(sut.movementInterval).toEqual(commonFakes.movementShotInterval);
			expect(sut.state.style).toEqual(undefined);
		});

		it('Without any parameterinvokes the "getDimensions" method from the "sut" object', () => {
			spyOn(EllipsePath.prototype, "getDimensions").and.callFake(() => {
				return new Dimensions();
			});

			new UserShot(new Object());

			expect(EllipsePath.prototype.getDimensions).toHaveBeenCalled();
			expect(EllipsePath.prototype.getDimensions.calls.count()).toEqual(commonFakes.once);
		});
	});

	describe("getNewShotMaths - ", () => {
		it('With a "shotMathsKey" string key invokes the "getInstanceOf" method from "IoC4Javascript" object', () => {
			spyOn(IoC4Javascript.prototype, "getInstanceOf").and.callThrough();
			let sut = new UserShot(commonFakes);

			sut.getNewShotMaths();

			expect(IoC4Javascript.prototype.getInstanceOf).toHaveBeenCalledWith(commonFakes.shotMathsKey);
			//TODO: REVISAR !!! Lo llama el 4 veces en lugar de una porque es un Singleton vuelve a computar (LOS TESTS NO SON INDEPENDEINTES) !!!
			//expect(IoC4Javascript.prototype.getInstanceOf.calls.count()).toEqual(commonFakes.once);
			//// NO FUNCIONA !!! -> IoC4Javascript.prototype.getInstanceOf.calls.rest();
		});

		it('With a "shotMathsKey" string key calls the "getInstanceOf" method from "IoC4Javascript" object wich returns an "ShotMaths" instance', () => {
			spyOn(IoC4Javascript.prototype, "getInstanceOf").and.callThrough();
			let sut = new UserShot(commonFakes);

			let result = sut.getNewShotMaths();

			expect(result instanceof ShotMaths).toBeTruthy();
		});
	});

	describe("startShotting - ", () => {
		it('Without any parameter invokes "setInterval" method from "window" object', () => {
			let sut = new UserShot(commonFakes);
			spyOn(window, "setInterval").and.callFake(() => {});
			spyOn(sut, "setState").and.callFake(
				function () {
					this.state.image = this.state.images.toLeft;
				}.bind(sut)
			);

			sut.startShotting();

			expect(window.setInterval).toHaveBeenCalledWith(jasmine.any(Function), commonFakes.movementShotInterval);
			expect(window.setInterval.calls.count()).toEqual(commonFakes.once);
		});

		it('Without any parameter invokes "bind" method from "Function" object', () => {
			let sut = new UserShot(commonFakes);
			spyOn(window, "setInterval").and.callFake(() => {});
			spyOn(sut.doShot, "bind").and.callFake(() => {});
			spyOn(sut, "setState").and.callFake(
				function () {
					this.state.image = this.state.images.toLeft;
				}.bind(sut)
			);

			sut.startShotting();

			expect(sut.doShot.bind).toHaveBeenCalled();
			expect(sut.doShot.bind.calls.count()).toEqual(commonFakes.once);
		});

		it('Without any parameter calls "bind" method from "Function" object, then it sets the "shotInterval" value', () => {
			let sut = new UserShot(commonFakes);
			spyOn(window, "setInterval").and.callFake(() => {
				return commonFakes.emptyObject;
			});
			spyOn(sut.doShot, "bind").and.callFake(() => {});
			spyOn(sut, "setState").and.callFake(
				function () {
					this.state.image = this.state.images.toLeft;
				}.bind(sut)
			);

			sut.startShotting();

			expect(sut.shotInterval).toBeDefined();
		});
	});

	describe("doShot - ", () => {
		it('without any parameter invokes "moveToNextEllipticalPosition" method from "UserSpaceShipMaths" object', () => {
			let sut = new UserShot(commonFakes);
			sut.startingAt = new Date();
			spyOn(ShotMaths.prototype, "moveToNextEllipticalPosition").and.callFake(() => {
				return commonFakes.position;
			});
			spyOn(UserShot.prototype, "setState").and.callFake(() => {});

			sut.doShot();

			expect(ShotMaths.prototype.moveToNextEllipticalPosition).toHaveBeenCalled();
			expect(ShotMaths.prototype.moveToNextEllipticalPosition.calls.count()).toEqual(commonFakes.once);
		});

		it('without any parameter invokes "moveToNextEllipticalPosition" which returns the new Position', () => {
			let setStateParameter;
			let sut = new UserShot(commonFakes);
			sut.startingAt = new Date();
			spyOn(ShotMaths.prototype, "moveToNextEllipticalPosition").and.callFake(() => {
				return commonFakes.position;
			});
			spyOn(UserShot.prototype, "setState").and.callFake((state) => {
				setStateParameter = state;
			});

			sut.doShot();

			expect(setStateParameter.style.top).toEqual(commonFakes.position.top);
			expect(setStateParameter.style.left).toEqual(commonFakes.position.left);
		});

		it('when the position is near to center point, then invokes "stopShotting" method from "actions" object', () => {
			let sut = new UserShot(commonFakes);
			sut.startingAt = new Date();
			spyOn(sut, "setState").and.callFake((state) => {
				sut.state = state;
			});
			spyOn(commonFakes.actions, "stopShotting").and.callThrough();
			spyOn(ShotMaths.prototype, "moveToNextEllipticalPosition").and.callFake(() => {
				return commonFakes.position;
			});
			spyOn(sut, "isNearToCenter").and.callFake(() => {
				return true;
			});

			sut.doShot();

			expect(commonFakes.actions.stopShotting).toHaveBeenCalled();
			expect(commonFakes.actions.stopShotting.calls.count()).toEqual(commonFakes.once);
		});
	});

	describe("componentDidMount - ", () => {
		it('Without parameters invokes "startShotting" from the "sut" object', () => {
			let sut = new UserShot(commonFakes);
			spyOn(sut, "startShotting").and.callFake(() => {});

			sut.componentDidMount();

			expect(sut.startShotting).toHaveBeenCalled();
			expect(sut.startShotting.calls.count()).toEqual(commonFakes.once);
		});
	});

	describe("componentWillUnmount - ", () => {
		it('Without parameters invokes "stopShotting" from the "sut" object', () => {
			let sut = new UserShot(commonFakes);
			spyOn(sut, "stopShotting").and.callFake(() => {});

			sut.componentWillUnmount();

			expect(sut.stopShotting).toHaveBeenCalled();
			expect(sut.stopShotting.calls.count()).toEqual(commonFakes.once);
		});
	});

	describe("stopShotting - ", () => {
		it('With an "interval value" invokes the "clearInterval" from the "window" object', () => {
			spyOn(window, "clearInterval").and.callFake((interval) => {});
			let sut = new UserShot(commonFakes);
			sut.shotInterval = commonFakes.emptyObjetc;

			sut.stopShotting();

			expect(window.clearInterval).toHaveBeenCalledWith(commonFakes.emptyObjetc);
			expect(window.clearInterval.calls.count()).toEqual(commonFakes.once);
		});

		it('With an "interval value" calls the "clearInterval" from the "window" object, then clen the "shotInterval" value', () => {
			spyOn(window, "clearInterval").and.callFake((interval) => {});
			let sut = new UserShot(commonFakes);
			sut.shotInterval = commonFakes.emptyObjetc;

			sut.stopShotting();

			expect(sut.shotInterval).toBeFalsy();
		});
	});

	describe("getDimensions - ", () => {
		it('With "dimensionsKey" string key invokes the "getInstanceOf" method from "IoC4Javascript" object', () => {
			spyOn(IoC4Javascript.prototype, "getInstanceOf").and.callThrough();
			let sut = new UserShot(commonFakes);

			sut.getDimensions();

			expect(IoC4Javascript.prototype.getInstanceOf).toHaveBeenCalledWith(commonFakes.dimensionsKey);
		});

		it('With "dimensionsKey" string key calls the "getInstanceOf" method from "IoC4Javascript" object which returns an "Dimensions" instance', () => {
			spyOn(IoC4Javascript.prototype, "getInstanceOf").and.callThrough();
			let sut = new UserShot(commonFakes);

			let result = sut.getDimensions();

			expect(result instanceof Dimensions).toBeTruthy();
		});
	});

	describe("isNearToCenter - ", () => {
		it("With a position object invokes the isNearToCenter method from a ShotMaths object", () => {
			spyOn(ShotMaths.prototype, "isNearToCenter").and.callFake(() => true);
			let sut = new UserShot(commonFakes);
			spyOn(sut, "isTimeout").and.callFake(() => false);

			sut.isNearToCenter(commonFakes.position);

			expect(ShotMaths.prototype.isNearToCenter).toHaveBeenCalledWith(commonFakes.position);
		});

		it("With a position object invokes the isTimeout method from the sut object", () => {
			spyOn(ShotMaths.prototype, "isNearToCenter").and.callFake(() => true);
			let sut = new UserShot(commonFakes);
			spyOn(sut, "isTimeout").and.callFake(() => false);

			sut.isNearToCenter(commonFakes.position);

			expect(sut.isTimeout).toHaveBeenCalled();
		});

		it("With a position object calls the isTimeout method which returns false", () => {
			spyOn(ShotMaths.prototype, "isNearToCenter").and.callFake(() => false);
			let sut = new UserShot(commonFakes);
			spyOn(sut, "isTimeout").and.callFake(() => false);

			let result = sut.isNearToCenter(commonFakes.position);

			expect(result).toBeFalsy();
		});

		it("With a position object calls the isNearToCenter method which returns false", () => {
			spyOn(ShotMaths.prototype, "isNearToCenter").and.callFake(() => false);
			let sut = new UserShot(commonFakes);
			spyOn(sut, "isTimeout").and.callFake(() => false);

			let result = sut.isNearToCenter(commonFakes.position);

			expect(result).toBeFalsy();
		});

		it("With a position object calls the isTimeout method which returns true", () => {
			spyOn(ShotMaths.prototype, "isNearToCenter").and.callFake(() => false);
			let sut = new UserShot(commonFakes);
			spyOn(sut, "isTimeout").and.callFake(() => true);

			let result = sut.isNearToCenter(commonFakes.position);

			expect(result).toBeTruthy();
		});

		it("With a position object calls the isNearToCenter method which returns true", () => {
			spyOn(ShotMaths.prototype, "isNearToCenter").and.callFake(() => true);
			let sut = new UserShot(commonFakes);
			spyOn(sut, "isTimeout").and.callFake(() => false);

			let result = sut.isNearToCenter(commonFakes.position);

			expect(result).toBeTruthy();
		});
	});

	describe("isTimeout", () => {
		it("With a startingAt date older than a second returns true", () => {
			let sut = new UserShot(commonFakes);
			sut.startingAt = new Date();
			sut.startingAt.setFullYear(sut.startingAt.getFullYear() - 1);

			let result = sut.isTimeout();

			expect(result).toBeTruthy();
		});

		it("With a startingAt date nearly than a second returns false", () => {
			let sut = new UserShot(commonFakes);
			sut.startingAt = new Date();
			sut.startingAt.setFullYear(sut.startingAt.getFullYear() + 1);

			let result = sut.isTimeout();

			expect(result).toBeFalsy();
		});

		it("With a startingAt date invokes the getTime method from the Date object twice", () => {
			spyOn(Date.prototype, "getTime").and.callThrough();
			let sut = new UserShot(commonFakes);
			sut.startingAt = new Date();

			sut.isTimeout();

			expect(Date.prototype.getTime).toHaveBeenCalled();
			expect(Date.prototype.getTime.calls.count()).toEqual(commonFakes.twice);
		});
	});
});
