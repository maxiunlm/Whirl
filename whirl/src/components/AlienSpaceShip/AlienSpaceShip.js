import React, { useState, useRef, useEffect, useLayoutEffect, createStore } from "react";
import IoC4Javascript from "../../apis/ioc4javascript";
import "./AlienSpaceShip.css";

const ioc = new IoC4Javascript();

export const alienSpaceShipState = {
	ioc: ioc,
};

const AlienSpaceShip = function (_props) {
	alienSpaceShipState.maths = ioc.getInstanceOf("alienSpaceShipMathsKey"); // TODO: review if alienSpaceShipMathsKey should be singleton or not?
	const style = {
		width: alienSpaceShipState.maths.getWidth(),
		height: alienSpaceShipState.maths.getHeight(),
		top: alienSpaceShipState.maths.getTop(),
		left: alienSpaceShipState.maths.getLeft(),
		transformOrigin: "top left",
		transform: "rotate(0deg)",
	};
	const componentWillUnmount = () => {
		this.dispose();
	};

	//useLayoutEffect(componentWillUnmount, []); // TODO: it's not working: TypeError: (0 , _react.useLayoutEffect) is not a function

	return (
		<div id="alienSpaceShipContainer">
			{/* {if(hasToShot) {
				return <AlienShot shot={s} actions={this.actions} />;
			})} */}
			<div id="alienSpaceShip" className="alienSpaceShip" style={style}>
				<img src="/images/ufoShip.png" alt="U" style={style}></img>
			</div>
		</div>
	);
};

export default AlienSpaceShip;
