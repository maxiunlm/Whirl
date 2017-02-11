/* global expect, Function */

import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import CommonFakes from '../../../Selenium/Fakes/commonFakes';
import App from '../../../src/components/App/App.js';

describe('APP - ', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
    });

    describe('CONSTRUCTOR - ', () => {
        it('With "props" parameters initialises the object', () => {
            var props = {
                height: CommonFakes.height,
                width: CommonFakes.width
            };

            var app = new App(props);

            expect(app.height).toBe(CommonFakes.height);
            expect(app.width).toBe(CommonFakes.width);
            expect(app.actions).toBeDefined();
            expect(app.actions.moveUserSpaceShipToLeft instanceof Function).toBeTruthy();
        });
    });

    describe('render - ', () => {
        it('Without any parameter renders a "UserSpaceShip" component', () => {
            const app = shallow(
                    <App height={CommonFakes.height} width={CommonFakes.width} />
                    );

            var result = app.find('img');
            debugger;
            console.log(result);
            expect(result.is('img')).toBeTruthy();
        });
    });
});
