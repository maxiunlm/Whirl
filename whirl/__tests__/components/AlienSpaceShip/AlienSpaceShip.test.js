import React from "react";
import ReactDOM from "react-dom";
import CommonFakes from "../../../Selenium/Fakes/commonFakes";
import AlienSpaceShip from "../../../src/components/AlienSpaceShip/AlienSpaceShip";
import { alienSpaceShipState } from "../../../src/components/AlienSpaceShip/AlienSpaceShip";
import IoC4Javascript from "../../../src/apis/ioc4javascript";
import AlienSpaceShipMaths from "../../../src/maths/AlienSpaceShip/AlienSpaceShipMaths";

describe("AlienSpaceShip - ", () => {
	let commonFakes = new CommonFakes();

	describe("COMPONENT - ", () => {
		it("without any parameter, when is loaded, then renders without crashing", () => {
			const div = document.createElement("div");
			ReactDOM.render(<AlienSpaceShip />, div);
		});
	});

	describe("CONSTRUCTOR - ", () => {
		it("Initializes the object", () => {
			spyOn(AlienSpaceShipMaths.prototype, "getTop").and.callFake(() => commonFakes.positionTop);
			spyOn(AlienSpaceShipMaths.prototype, "getLeft").and.callFake(() => commonFakes.positionLeft);
			spyOn(AlienSpaceShipMaths.prototype, "getWidth").and.callFake(() => commonFakes.alienSpaceShipWidth);
			spyOn(AlienSpaceShipMaths.prototype, "getHeight").and.callFake(() => commonFakes.alienSpaceShipHeight);
			const div = document.createElement("div");
			ReactDOM.render(<AlienSpaceShip />, div);

			expect(alienSpaceShipState.ioc instanceof IoC4Javascript).toBeTruthy();
			expect(alienSpaceShipState.maths instanceof AlienSpaceShipMaths).toBeTruthy();
			expect(AlienSpaceShipMaths.prototype.getTop).toHaveBeenCalled();
			expect(AlienSpaceShipMaths.prototype.getTop.calls.count()).toEqual(commonFakes.once);
			expect(AlienSpaceShipMaths.prototype.getLeft).toHaveBeenCalled();
			expect(AlienSpaceShipMaths.prototype.getLeft.calls.count()).toEqual(commonFakes.once);
			expect(AlienSpaceShipMaths.prototype.getWidth).toHaveBeenCalled();
			expect(AlienSpaceShipMaths.prototype.getWidth.calls.count()).toEqual(commonFakes.once);
			expect(AlienSpaceShipMaths.prototype.getHeight).toHaveBeenCalled();
			expect(AlienSpaceShipMaths.prototype.getHeight.calls.count()).toEqual(commonFakes.once);
		});
	});
});
