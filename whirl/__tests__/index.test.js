import React from 'react';
import ReactDOM from 'react-dom';
import MainApp from '../src/index.js';

describe('Index - ', () => {
    var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    var width = screen.width;
    
    beforeEach(() => {
    });
    
    describe('CONSTRUCTOR - ', () => {
        it('Without any parameter when the app starts creates the MainApp object', () => {
            spyOn(console, 'log').and.callFake((message) => {});
            
            var result = new MainApp();   

            expect(result instanceof MainApp).toBeTruthy(); 
        });


        it('Obtain the game dimmensions', () => {
            spyOn(console, 'log').and.callFake((message) => {});
            
            var result = new MainApp();   

            expect(result.height).toBeDefined(); 
            expect(result.height).toEqual(height); 
            expect(result.width).toBeDefined(); 
            expect(result.width).toEqual(width); 
        });
    });
});