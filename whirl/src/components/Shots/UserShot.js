import "./UserShot.css";
import userShotImg from "../../images/userShot.png";
import IoC4Javascript from "../../../src/apis/ioc4javascript";
import React, { Component } from "react";

class UserShot extends Component {
	constructor(props) {
		super(props);

		this.ioc = new IoC4Javascript();
		this.maths = this.getNewShotMaths();
		this.movementInterval = 0.05;
		this.state = {};
		this.mustContinue = true;

		if (!!props.shot) {
			this.maths.setAngle(props.shot.angle);

			this.state = {
				style: {
					top: props.shot.top,
					left: props.shot.left,
					transformOrigin: "center center",
				},
			};
		}
	}

	getDimensions() {
		return this.ioc.getInstanceOf("dimensionsKey");
	}

	getNewShotMaths() {
		return this.ioc.getInstanceOf("shotMathsKey");
	}

	startShotting() {
		this.startingAt = new Date();
		this.shotInterval = setInterval(this.doShot.bind(this), this.movementInterval);
	}

	stopShotting() {
		this.mustContinue = false;
		clearInterval(this.shotInterval);
	}

	doShot() {
		if (!this.mustContinue) {
			return;
		}

		let position = this.maths.moveToNextEllipticalPosition();

		if (this.isNearToCenter(position)) {
			this.props.actions.stopShotting(this);
			return;
		}

		this.setState({
			style: {
				top: position.top,
				left: position.left,
			},
		});
	}

	isNearToCenter(position) {
		const result = this.isTimeout() || this.maths.isNearToCenter(position);
		return result;
	}

	isTimeout() {
		const endingAt = new Date();
		const deltaInMilliseconds = endingAt.getTime() - this.startingAt.getTime();
		return deltaInMilliseconds > 1000;
	}

	componentDidMount() {
		this.startShotting();
		// REVISAR ??? -> this.props.actions.stopShotting = this.stopShotting.bind(this);
	}

	componentWillUnmount() {
		this.stopShotting();
		this.mustContinue = true;
	}

	render() {
		if (!this.mustContinue) {
			return <span />;
		}

		let style = this.state.style;
		style.transform = this.props.shot.transform;

		return <img className="userShot" src={userShotImg} alt="." style={style} />;
	}
}

export default UserShot;
