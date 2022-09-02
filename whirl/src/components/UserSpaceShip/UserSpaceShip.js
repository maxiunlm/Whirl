/* global actions */

import React, { Component } from "react";
import IoC4Javascript from "../../apis/ioc4javascript";
import UserShot from "../Shots/UserShot";
import "./UserSpaceShip.css";

class UserSpaceShip extends Component {
	constructor(props) {
		super(props);

		this.actions = {
			stopShotting: this.stopShotting.bind(this), // TODO: TDD !!!!
		};

		this.ioc = new IoC4Javascript();
		this.maths = this.getNewUserSpaceShipMaths();
		this.movementInterval = 0.04;
		this.lastShot = new Date();
		this.shots = [];
		this.state = {
			image: "/images/UserSpaceShipStopped.png",
			shots: false,
			images: {
				stopped: "/images/UserSpaceShipStopped.png",
				toLeft: "/images/UserSpaceShipToLeft.png",
				toRight: "/images/UserSpaceShipToRight.png",
			},
			style: {
				width: this.maths.getWidth(),
				height: this.maths.getHeight(),
				top: this.maths.getTop(),
				left: this.maths.getLeft(),
				transformOrigin: "top left",
				transform: "rotate(0deg)",
			},
			shipStyle: {
				width: this.maths.getWidth(),
				height: this.maths.getHeight(),
			},
		};
	}

	getNewUserSpaceShipMaths() {
		return this.ioc.getInstanceOf("userSpaceShipMathsKey");
	}

	startMovingToLeft(event) {
		this.stopMoving();
		this.setState({
			image: this.state.images.toLeft,
		});

		let moveToLeftEvent = this.moveToLeft.bind(this);

		this.movementToLeftInterval = setInterval(moveToLeftEvent, this.movementInterval);

		if (!!event && !!event.preventDefault) {
			event.preventDefault(); // prevent the default action (scroll / move caret)
		}
	}

	moveToLeft() {
		let position = this.maths.moveToNextLeftEllipticalPosition();
		let rotation = this.maths.getRotation();

		this.setState({
			style: {
				width: this.maths.getWidth(),
				height: this.maths.getHeight(),
				top: position.top,
				left: position.left,
				transformOrigin: "top left",
				transform: `rotate(${rotation}deg)`,
				//border: "1px red solid",
			},
		});
	}

	startMovingToRight(event) {
		this.stopMoving();
		this.setState({
			image: this.state.images.toRight,
		});

		let moveToRightEvent = this.moveToRight.bind(this);

		this.movementToRightInterval = setInterval(moveToRightEvent, this.movementInterval);

		if (!!event && !!event.preventDefault) {
			event.preventDefault(); // prevent the default action (scroll / move caret)
		}
	}

	moveToRight() {
		let position = this.maths.moveToNextRightEllipticalPosition();
		let rotation = this.maths.getRotation();

		this.setState({
			style: {
				width: this.maths.getWidth(),
				height: this.maths.getHeight(),
				top: position.top,
				left: position.left,
				transformOrigin: "top left",
				transform: `rotate(${rotation}deg)`,
			},
		});
	}

	stopMoving() {
		this.stopMovingToLeft();
		this.stopMovingToRight();
	}

	stopMovingToRight() {
		if (!!this.movementToRightInterval) {
			clearInterval(this.movementToRightInterval);
			this.setState({
				image: this.state.images.stopped,
			});
		}
	}

	stopMovingToLeft() {
		if (!!this.movementToLeftInterval) {
			clearInterval(this.movementToLeftInterval);
			this.setState({
				image: this.state.images.stopped,
			});
		}
	}

	stopShotting(shot) {
		// TODO: TDD !!!
		shot.stopShotting();

		const index = this.shots.indexOf(shot.props.shot);
		this.shots.slice(index, 1);
		this.setState({ refresh: true });
	}

	startShotting() {
		if (!this.canShotAgain()) {
			return;
		}

		this.shots.push({
			left: this.state.style.left,
			top: this.state.style.top,
			angle: this.maths.path.angle,
			rotation: this.maths.getRotation(),
			transform: this.state.style.transform,
		});

		this.setState({ refresh: true });
		this.lastShot = new Date();
	}

	canShotAgain() {
		const now = new Date();
		const deltaInMilliseconds = now.getTime() - this.lastShot.getTime();
		return deltaInMilliseconds > 1000;
	}

	componentDidMount() {
		this.props.actions.moveUserSpaceShipToLeft = this.startMovingToLeft.bind(this);
		this.props.actions.moveUserSpaceShipToRight = this.startMovingToRight.bind(this);
		this.props.actions.stopMovingUserSpaceShipToLeft = this.stopMovingToLeft.bind(this);
		this.props.actions.stopMovingUserSpaceShipToRight = this.stopMovingToRight.bind(this);
		this.props.actions.stopMovingUserSpaceShip = this.stopMoving.bind(this);
		this.props.actions.startShotting = this.startShotting.bind(this);
	}

	render() {
		return (
			<div id="userSpaceShipContainer">
				{this.shots.map((s) => {
					return <UserShot shot={s} actions={this.actions} />;
				})}
				<div id="userSpaceShip" className="userSpaceShip" style={this.state.style}>
					<img src={this.state.image} alt="A" style={this.state.shipStyle}></img>
				</div>
				{/* <div className="userSpaceShip" style={{ backgroundColor: "blue", top: this.state.style.top, left: this.state.style.left }}>
					.
				</div> */}
			</div>
		);
	}
}

export default UserSpaceShip;
