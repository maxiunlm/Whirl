import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App.js';
import Dimensions from '../src/maths/paths/Dimensions';
import UserSpaceShipMaths from './maths/UserSpaceShip/UserSpaceShipMaths';
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
        this.ioc.registerType(Dimensions, 'dimensionsKey');
        this.ioc.registerType(UserSpaceShipMaths, 'userSpaceShipMathsKey');
        // TODO: Registrar tipos: [UserSpaceShipGeometric, EllipsePath, Calculus, Position] con TDD !!!!!!!
        /*         
        this.ioc.registerType(UserSpaceShipGeometric, 'userSpaceShipGeometricKey');        
        this.ioc.registerType(EllipsePath, 'ellipsePathKey');
        this.ioc.registerType(Calculus, 'calculusKey');
        this.ioc.registerType(Position, 'positionKey');
         */

        this.ioc.registerConstructor('dimensionsKey', this.constructDimensions.bind(this));
        this.ioc.registerConstructor('userSpaceShipMathsKey', this.constructUserSpaceShipMaths.bind(this));
    }

    constructDimensions(ioc, aop, mapper) {
        return new Dimensions(this.width, this.height);
    }

    constructUserSpaceShipMaths(ioc, aop, mapper) {
        let dimensions = ioc.getInstanceOf('dimensionsKey');

        return new UserSpaceShipMaths(dimensions);
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