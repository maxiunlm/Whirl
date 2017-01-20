using OpenQA.Selenium;
using OpenQA.Selenium.Support.UI;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BDD.Tests.BDD
{
    public class CommonFakes
    {
        public const string applicationUrl = "http://localhost:3000";
        public const string htmlTagClassAttributeName = "class";
        public const string htmlTagStyleAttributeName = "style";
        public const string htmlTagLeftStylePropertyAttributeName = "left";

        public static void WaitForPageLoaded(IWebDriver driver)
        {
            IWait<IWebDriver> wait = new WebDriverWait(driver, new TimeSpan(0, 0, 10));
            wait.Until(webDriver =>
                ((IJavaScriptExecutor)webDriver).ExecuteScript("return document.readyState").Equals("complete")
            );
        }

        public static string GetStyleProperty(string style, string porperty)
        {
            try
            {
                string[] properties = style.Split(';');
                string propertyItem = properties.Where(o => o.Trim().StartsWith(porperty)).SingleOrDefault();

                return propertyItem.Split(':')[1];
            }
            catch (Exception)
            {
                return string.Empty;
            }
        }

        public static int GetIntFromPixelsValue(string value)
        {
            try
            {
                return int.Parse(value.Replace("px", string.Empty));
            }
            catch (Exception)
            {
                return 0;
            }
        }
    }
}
