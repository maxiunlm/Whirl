// https://www.npmjs.com/package/selenium-node-webdriver
// $ /cygdrive/e/phantomjs-2.1.1-windows/bin/phantomjs --webdriver=4444 & node ./Selenium/index.selenium.js

var WebDriver = require('selenium-node-webdriver');

WebDriver().
        then(function (driver) {
            driver.get('http://localhost:3000').
                    then(function () {
                        return driver.
                                findElement(driver.webdriver.By.name('userSpaceShip')).
                                sendKeys('webdriver');
                    });
        });
