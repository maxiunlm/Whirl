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
			const div = document.createElement("div");
			ReactDOM.render(<AlienSpaceShip />, div);

			expect(alienSpaceShipState.ioc instanceof IoC4Javascript).toBeTruthy();
			expect(alienSpaceShipState.alienSpaceShipMaths instanceof AlienSpaceShipMaths).toBeTruthy();
		});
	});
});
