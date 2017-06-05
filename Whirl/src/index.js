import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App.js';
import Calculus from '../src/maths/calculus/Calculus';
import Dimensions from '../src/maths/paths/Dimensions';
import EllipsePath from '../src/maths/paths/EllipsePath';
import Position from '../src/maths/paths/Position';
import UserSpaceShipMaths from './maths/UserSpaceShip/UserSpaceShipMaths';
import ShotMaths from './maths/Shots/ShotMaths';
import UserSpaceShipGeometric from './maths/UserSpaceShip/UserSpaceShipGeometric';
import UserShot from './components/Shots/UserShot';
import IoC4Javascript from './apis/ioc4javascript';
import './index.css';

class MainApp {
    constructor() {
        this.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        this.width = screen.width;
        this.ioc = new IoC4Javascript();
        this.registerObjectsConfigurations();
    }

    registerObjectsConfigurations() {
        this.ioc.getInstanceOf.bind(this.ioc);
        
        this.ioc.registerConstructor('dimensionsKey', this.constructDimensions.bind(this));
        
        this.ioc.registerType(UserSpaceShipMaths, 'userSpaceShipMathsKey');
        this.ioc.registerType(EllipsePath, 'ellipsePathKey');
        this.ioc.registerType(Position, 'positionKey');
        this.ioc.registerType(UserShot, 'userShotKey');
        
        this.ioc.registerSingletonType(Dimensions, 'dimensionsKey');
        this.ioc.registerSingletonType(UserSpaceShipGeometric, 'userSpaceShipGeometricKey');
        this.ioc.registerSingletonType(Calculus, 'calculusKey');
        this.ioc.registerSingletonType(ShotMaths, 'shotMathsKey');
    }

    constructDimensions(ioc, aop, mapper) {
        return new Dimensions(this.width, this.height);
    }

    startApplication() {
        ReactDOM.render(<App/>, document.getElementById('root'));
    }
}

export default MainApp;

try {
    var mainApp = new MainApp();
    mainApp.startApplication();
}
catch (exception) {
    console.log('Exception on startApplication: ' + exception.message);
}