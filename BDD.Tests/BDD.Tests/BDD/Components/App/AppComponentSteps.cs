using Microsoft.VisualStudio.TestTools.UnitTesting;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using System;
using TechTalk.SpecFlow;

namespace BDD.Tests.BDD.Components.App
{
    [Binding]
    public class AppComponentSteps
    {
        private static IWebDriver driver = new ChromeDriver();
        private IWebElement userSpaceShip;
        private IWebElement leftDirection;
        private int prevoiusLeft;

        private const string userSpaceShipClassName = "userSpaceShip";

        [AfterTestRun]
        public static void AfterTestRun()
        {
            driver.Quit();
        }

        [Given(@"the url of the application"), Scope(Feature = "App Component")]
        public void GivenTheUriOfTheApplication()
        {
            driver.Url = CommonFakes.applicationUrl;
            driver.Navigate();
        }

        [When(@"I press the Left button"), Scope(Feature = "App Component")]
        public void WhenIPressTheLeftButton()
        {
            CommonFakes.WaitForPageLoaded(driver);

            userSpaceShip = driver.FindElement(By.Id("userSpaceShip"));

            string styleResult = CommonFakes.GetStyleProperty(
                userSpaceShip.GetAttribute(CommonFakes.htmlTagStyleAttributeName),
                CommonFakes.htmlTagLeftStylePropertyAttributeName);
            prevoiusLeft = CommonFakes.GetIntFromPixelsValue(styleResult);

            leftDirection = driver.FindElement(By.Id("leftDirection"));
            leftDirection.Click();
        }
        
        [Then(@"the user space ship moves to left direction"), Scope(Feature = "App Component")]
        public void ThenTheUserSpaceShipMovesToLeftDirection()
        {
            userSpaceShip = driver.FindElement(By.Id("userSpaceShip"));

            string styleResult = CommonFakes.GetStyleProperty(
                userSpaceShip.GetAttribute(CommonFakes.htmlTagStyleAttributeName),
                CommonFakes.htmlTagLeftStylePropertyAttributeName);
            int result = CommonFakes.GetIntFromPixelsValue(styleResult);

            Assert.IsTrue(result < prevoiusLeft, "userSpaceShip moved to Left Direction");
        }
    }
}
