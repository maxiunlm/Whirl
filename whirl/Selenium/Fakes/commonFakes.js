import IoC4Javascript from "../../src/apis/ioc4javascript";
import Calculus from "../../src/maths/calculus/Calculus";
import Dimensions from "../../src/maths/paths/Dimensions";
import EllipsePath from "../../src/maths/paths/EllipsePath";
import Position from "../../src/maths/paths/Position";
import UserSpaceShipMaths from "../../src/maths/UserSpaceShip/UserSpaceShipMaths";
import UserShot from "../../src/components/Shots/UserShot";
import ShotMaths from "../../src/maths/Shots/ShotMaths";
import UserSpaceShipGeometric from "../../src/maths/UserSpaceShip/UserSpaceShipGeometric";
import AlienSpaceShipMaths from "../../src/maths/AlienSpaceShip/AlienSpaceShipMaths";

class CommonFakes {
	constructor() {
		this.firstIndex = 0;
		this.secondIndex = 1;
		this.defaultInteger = 0;
		this.anytime = 0;
		this.once = 1;
		this.twice = 2;
		this.threeTimes = 3;
		this.fourTimes = 4;
		this.fiveTimes = 5;
		this.sixTimes = 6;
		this.sevenTimes = 7;
		this.startIndex = 0;
		this.initialNumberValue = 0;
		this.emptyString = "";
		this.emptyObject = {};

		this.startAngle = 0;
		this.flatAngleInRadians = Math.PI;
		this.flatAngleInDegrees = 180;

		this.loadAppFakes();
		this.loadAlienSpaceShipFakes();
		this.loadUserSpaceShipFakes();
		this.loadUserShotFakes();
		this.loadEllipsePathFakes();
		this.loadPostionFakes();
		this.loadObjectManagerConfigFakes();
		this.loadInstances();
	}

	loadObjectManagerConfigFakes() {
		this.dimensionsKey = "dimensionsKey";
		this.userSpaceShipMathsKey = "userSpaceShipMathsKey";
		this.alienSpaceShipMathsKey = "alienSpaceShipMathsKey";
		this.userSpaceShipGeometricKey = "userSpaceShipGeometricKey";
		this.ellipsePathKey = "ellipsePathKey";
		this.calculusKey = "calculusKey";
		this.positionKey = "positionKey";
		this.shotMathsKey = "shotMathsKey";
		this.userShotKey = "userShotKey";
		this.ioc = new IoC4Javascript(false);

		try {
			this.ioc.registerConstructor(
				this.dimensionsKey,
				function () {
					return new Dimensions(this.gameWidth, this.gameHeight);
				}.bind(this)
			);

			this.ioc.registerType.call(this.ioc, EllipsePath, this.ellipsePathKey);
			this.ioc.registerType.call(this.ioc, Position, this.positionKey);
			this.ioc.registerType.call(this.ioc, Position, this.positionKey);
			this.ioc.registerType.call(this.ioc, UserSpaceShipMaths, this.userSpaceShipMathsKey);
			this.ioc.registerType.call(this.ioc, AlienSpaceShipMaths, this.alienSpaceShipMathsKey);
			this.ioc.registerConstructor.call(this.ioc, "userShotKey", () => {
				return new UserShot(new Object());
			});

			this.ioc.registerSingletonType.call(this.ioc, UserSpaceShipGeometric, this.userSpaceShipGeometricKey);
			this.ioc.registerSingletonType.call(this.ioc, Dimensions, this.dimensionsKey);
			this.ioc.registerSingletonType.call(this.ioc, Calculus, this.calculusKey);
			this.ioc.registerType.call(this.ioc, ShotMaths, this.shotMathsKey);

			this.ioc.getInstanceOf.bind(this.ioc);
		} catch (e) {
			console.log("WARNING [CommonFakes::loadObjectManagerConfigFakes]: trying to config the IoC.", e);
		}
	}

	loadUserShotFakes() {
		this.minimumRadius = 10;
		this.deltaRadius = 2;
		this.movementShotInterval = 0.05;
	}

	loadInstances() {
		this.dimensions = new Dimensions(this.gameWidth, this.gameHeight);
		this.userSpaceShipGeometric = new UserSpaceShipGeometric();
		this.ellipsePath = new EllipsePath();
		this.userShot = new UserShot({ shot: this.shot });
	}

	loadAppFakes() {
		this.gameWidth = 1024;
		this.gameHeight = 768;
		this.spaceBarKeyCode = 32;
		this.leftKeyCode = 37;
		this.upKeyCode = 38;
		this.rightKeyCode = 39;
		this.downKeyCode = 40;
		this.props = {
			ioc: this.ioc,
			angle: this.startAngle,
		};
		this.eventSpaceBarKeyCode = {
			keyCode: this.spaceBarKeyCode,
		};
		this.eventLeftKeyCode = {
			keyCode: this.leftKeyCode,
		};
		this.eventRightKeyCode = {
			keyCode: this.rightKeyCode,
		};
		this.eventLeftKeyCodeWithPreventDefault = {
			keyCode: this.leftKeyCode,
			preventDefault: () => {},
		};
		this.eventRightKeyCodeWithPreventDefault = {
			keyCode: this.rightKeyCode,
			preventDefault: () => {},
		};
		this.refresh = { refresh: true };
	}

	loadUserSpaceShipFakes() {
		this.userSpaceShipImageStopped = "/images/UserSpaceShipStopped.png";
		this.userSpaceShipImageToLeft = "/images/UserSpaceShipToLeft.png";
		this.userSpaceShipImageToRight = "/images/UserSpaceShipToRight.png";
		this.userShotImage = "/images/userShot.png";
		this.userSpaceShipHeight = 70;
		this.userSpaceShipWidth = 40;
		this.actions = {
			stopShotting: function () {},
		};
		this.movementInterval = 0.04;
	}

	loadAlienSpaceShipFakes() {
		// this.alienSpaceShipImage = "/images/ufoShip.png";
		// this.alienShotImage = "/images/alienShot.png";
		this.alienSpaceShipHeight = 70;
		this.alienSpaceShipWidth = 40;
		// this.movementInterval = 0.04;
	}

	loadEllipsePathFakes() {
		this.ellipsePathHalfDivider = 2;
		this.ellipsePathDeltaA = -100;
		this.ellipsePathDeltaB = 100;
		this.ellipsePathRadiusPercentage = 0.54;
		this.ellipsePathInitialAngle = this.startAngle;
		this.ellipsePathDeltaAngle = 0.01;
		this.ellipsePathRadiusDelta = 2;
	}

	loadPostionFakes() {
		this.positionLeft = 1;
		this.positionTop = 2;
		this.position = { top: this.positionTop, left: this.positionLeft };
		this.centerPosition = { top: this.gameHeight / 2, left: this.gameWidth / 2 };
		this.shot = { angle: this.startAngle, top: this.positionTop, left: this.positionLeft };
		this.stateChangedPosition = {
			style: {
				width: this.userSpaceShipWidth,
				height: this.userSpaceShipHeight,
				top: this.position.top,
				left: this.position.left,
			},
		};
		this.stateInitialPosition = {
			style: {
				width: this.userSpaceShipWidth,
				height: this.userSpaceShipHeight,
				top: this.position.top,
				left: this.position.left,
				transform: "rotate(0deg)",
				transformOrigin: "top left",
			},
		};
	}

	rountToTwoDecimals(value) {
		return Math.round(value * 100) / 100;
	}
}

export default CommonFakes;
