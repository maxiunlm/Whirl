using Microsoft.VisualStudio.TestTools.UnitTesting;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using System;
using TechTalk.SpecFlow;

namespace BDD.Tests.BDD.Index
{
    [Binding]
    public class IndexSteps
    {
        private static IWebDriver driver = new ChromeDriver();
        private IWebElement userSpaceShip;

        private const string userSpaceShipClassName = "userSpaceShip";

        [AfterTestRun]
        public static void AfterTestRun()
        {
            driver.Quit();
        }

        [Given(@"the url of the application"), Scope(Feature = "Strarting the Application")]
        public void GivenTheUriOfTheApplication()
        {
            driver.Url = CommonFakes.applicationUrl;
            driver.Navigate();
        }

        [When(@"the application is loaded"), Scope(Feature = "Strarting the Application")]
        public void WhenTheApplicationIsLoaded()
        {
            CommonFakes.WaitForPageLoaded(driver);
        }

        [Then(@"the game is presented to the gamer"), Scope(Feature = "Strarting the Application")]
        public void ThenTheGameIsPresentedToTheGamer()
        {
            userSpaceShip = driver.FindElement(By.Id("userSpaceShip"));

            Assert.AreEqual(userSpaceShipClassName, userSpaceShip.GetAttribute(CommonFakes.htmlTagClassAttributeName), "userSpaceShip wasn't loaded");
        }
    }
}
