/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

module.exports = function (config) {
    config.set({
        basePath: '../..',
        
        files: [
            '**/*.test.js'
        ],
        
        exclude: [],
        
        autoWatch: true,
        
        frameworks: [
            'jasmine'
        ],
        
        browsers: [
            'Chrome'
        ],
        
        plugins: [
            'karma-junit-reporter',
            'karma-chrome-launcher',
            'karma-script-launcher',
            'karma-jasmine'
        ]
    });
};
