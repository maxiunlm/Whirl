import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App.js';
import './index.css';

class MainApp {
    constructor() {
        this.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        this.width = screen.width;
    }

    startApplication() {
        ReactDOM.render(<App height={this.height} width={this.width}/>, document.getElementById('root'));
    }
}

export default MainApp;

try {
    var mainApp = new MainApp();
    mainApp.startApplication();
} catch (exception) {
    console.log('Exception on startApplication: ' + exception.message);
}