import React, { Component } from "react";
import "./App.css";
import UserSpaceShip from "../UserSpaceShip/UserSpaceShip.js";
import LeftDirection from "../Buttons/LeftDirection.js";
import RightDirection from "../Buttons/RightDirection.js";
import ShotButton from "../Buttons/ShotButton.js";
import AlienSpaceShip from "../AlienSpaceShip/AlienSpaceShip";

class App extends Component {
	constructor(props) {
		super(props);

		this.actions = {
			moveUserSpaceShipToLeft: () => {},
			moveUserSpaceShipToRight: () => {},
			stopMovingUserSpaceShipToLeft: () => {},
			stopMovingUserSpaceShipToRight: () => {},
			stopMovingUserSpaceShip: () => {},
			startShotting: () => {},
			//stopShotting: () => {            }
		};

		this.spaceBarKeyCode = 32;
		this.leftKeyCode = 37;
		this.upKeyCode = 38;
		this.rightKeyCode = 39;
		this.downKeyCode = 40;

		document.onkeydown = this.catchKeyEvents.bind(this);
		document.onkeyup = this.catchKeyUpEvent.bind(this);
	}

	catchKeyUpEvent(event) {
		event = event || window.event;
		let keyCode = event.which || event.keyCode;

		switch (keyCode) {
			case this.leftKeyCode:
			case this.rightKeyCode:
				this.actions.stopMovingUserSpaceShip();
				break;
			//                 case upKeyCode: // TODO: TDD !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
			//                 break;
			//                 case downKeyCode:
			//                 break;
			//            case this.spaceBarKeyCode:
			//                this.actions.stopShotting();
			//                break;
			default:
				break;
		}

		if (!!event.preventDefault) {
			event.preventDefault(); // prevent the default action (scroll / move caret)
		}
	}

	catchKeyEvents(event) {
		event = event || window.event;
		let keyCode = event.which || event.keyCode;

		switch (keyCode) {
			case this.leftKeyCode:
				this.actions.moveUserSpaceShipToLeft();
				break;
			case this.rightKeyCode:
				this.actions.moveUserSpaceShipToRight();
				break;
			//                 case upKeyCode: // TODO: TDD !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
			//                 break;
			//                 case downKeyCode:
			//                 break;
			case this.spaceBarKeyCode:
				this.actions.startShotting();
				break;
			default:
				break;
		}

		if (!!event.preventDefault) {
			event.preventDefault(); // prevent the default action (scroll / move caret)
		}
	}

	render() {
		// actionStop={(event) => this.actions.stopShotting(event) }
		// actionStop={(event) => this.actions.stopShotting(event) }
		return (
			<div>
				<UserSpaceShip actions={this.actions} />
				{/* <AlienSpaceShip /> */}
				<div className="leftCircleButtons">
					<LeftDirection
						actionStart={(event) => this.actions.moveUserSpaceShipToLeft(event)}
						actionStop={(event) => this.actions.stopMovingUserSpaceShipToLeft(event)}
					/>
					<br />
					<br />
					<br />
					<ShotButton actionStart={(event) => this.actions.startShotting(event)} />
				</div>

				<div className="rightCircleButtons">
					<RightDirection
						actionStart={(event) => this.actions.moveUserSpaceShipToRight(event)}
						actionStop={(event) => this.actions.stopMovingUserSpaceShipToRight(event)}
					/>
					<br />
					<br />
					<br />
					<ShotButton actionStart={(event) => this.actions.startShotting(event)} />
				</div>
			</div>
		);
	}
}

export default App;
