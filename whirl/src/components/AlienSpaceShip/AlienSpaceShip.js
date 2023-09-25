import React from "react";
import { useState, useRef, useEffect, useLayoutEffect, createStore } from "react";
import IoC4Javascript from "../../apis/ioc4javascript";

const ioc = new IoC4Javascript();

export const alienSpaceShipState = {};

export default function AlienSpaceShip(_props) {
	alienSpaceShipState.ioc = ioc;
	alienSpaceShipState.alienSpaceShipMaths = ioc.getInstanceOf("alienSpaceShipMathsKey");

	const componentWillUnmount = () => {
		this.dispose();
	};

	//useLayoutEffect(componentWillUnmount, []);
	return <div></div>;
}
