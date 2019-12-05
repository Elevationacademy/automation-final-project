const { Builder, By, Key, until } = require("selenium-webdriver");
const path = require("chromedriver").path;
const chrome = require("selenium-webdriver/chrome");
let service = new chrome.ServiceBuilder(path).build();
chrome.setDefaultService(service);
const waitTime = 10000;

class SeleniumInfra {
  constructor() {
    this.driver = new Builder().forBrowser("chrome").build();
  }

  async URLvalidation(pageName) {
    try {
      const isValid = await this.driver.wait(until.urlContains(pageName), waitTime);
      this.logPass("URLvalidation succeed");
      return isValid;
    } catch (error) {
      console.error(error);
      this.logError("Got Error when tring to validate URL", error);
      return Promise.reject();
    }
  }

  async getURL(url) {
    try {
      await this.driver.manage().window().maximize();
      await this.driver.get(url);
      await this.driver.wait(until.urlIs(url), waitTime);
      this.logPass(`The navigation to (${url}) was successful`);
    } catch (error) {
      this.logError(`Failed to GET the URL: (${url})`, error);
      return Promise.reject();
    }
  }

  async sleep(num)
  {
      await this.driver.sleep(num)
  }

  async clickButton(locatorType = "id", locatorValue = "", element = null, fromElement = null) {
    if (!element) {
      element = await this.findElementBy(locatorType, locatorValue, fromElement);
    }

    try {
      await element.click();
      this.logPass(`Clicked on element with (${locatorType}) and value (${locatorValue})`);
    } catch (error) {
      this.logError(`Could not CLICK on the element with:(${locatorType}):(${locatorValue}).`, error);
      return Promise.reject();
    }
  }

  async write(locatorType = "id", locatorValue = "", data = "", element = null, fromElement = null) {
    if (!element) {
      element = await this.findElementBy(locatorType, locatorValue, fromElement);
    }

    try {
      await element.sendKeys(data);
      this.logPass(`On writing element with (${locatorType}):(${locatorValue}), the following data: (${data})`);
    } catch (error) {
      this.logError(`Could not WRITE to the element with:(${locatorType}):(${locatorValue}), the following data: (${data})`, error);
      return Promise.reject();
    }
  }

  async getTextFromElement(locatorType = "id", locatorValue = "", element = null, fromElement = null) {
    if (!element) {
      element = await this.findElementBy(locatorType, locatorValue, fromElement);
    }

    try {
      const text = await element.getText();
      this.logPass(`Got the following text from element with (${locatorType}):(${locatorValue}) : ${text}`);
      return text;
    } catch (error) {
      this.logError(`Could not GET TEXT from the element with: (${locatorType}):(${locatorValue})`, error);
      return Promise.reject();
    }
  }

  async clearElementField(locatorType = "id", locatorValue = "", element = null, fromElement = null) {
    if (!element) {
      element = await this.findElementBy(locatorType, locatorValue, fromElement);
    }

    try {
      await element.clear();
      this.logPass(`Cleared element with (${locatorType}):(${locatorValue})`);
    } catch (error) {
      this.logError(`Could not CLEAR the element with:(${locatorType}):(${locatorValue})`, error);
      return Promise.reject();
    }
  }

  async isElementExists(locatorType = "id", locatorValue = "", fromElement = null) {
    try {
      await this.findElementBy(locatorType, locatorValue, fromElement);
      return true;
    } catch (error) {
      this.logError(`Got error while tring to find if this element exist (${locatorType}):(${locatorValue})`, error);
      return false;
    }
  }

  async close() {
    try {
      this.driver.quit();
    } catch (error) {
      this.logError(`Failed to ClOSE the Driver`, error);
      return Promise.reject();
    }
  }

  async findElementBy(locatorType = "id", locatorValue = "", fromElement = null) {
    try {
      if (!fromElement) {
        fromElement = this.driver;
      }
      await this.driver.wait(until.elementLocated(By[locatorType](locatorValue)), waitTime);
      const element = await fromElement.findElement(By[locatorType](locatorValue));
      this.logPass(`Find element with (${locatorType}) : (${locatorValue})`);
      await this.scrollToElement(element);
      return element;
    } catch (error) {
      this.logError(`Element NOT FOUND with: locator (${locatorType}):(${locatorValue})`, error);
      return Promise.reject();
    }
  }

  async findElementListBy(locatorType = "id", locatorValue = "", fromElement = null) {
    try {
      if (!fromElement) {
        fromElement = this.driver;
      }

      await this.driver.wait(until.elementsLocated(By[locatorType](locatorValue)), waitTime);
      const elementList = await fromElement.findElements(By[locatorType](locatorValue));
      this.logPass(`Found List of elements with (${locatorType}) : (${locatorValue})`);
      await this.scrollToElement(elementList[0]);
      return elementList;
    } catch (error) {
      this.logError(`Element List NOT FOUND with: locator (${locatorType}):(${locatorValue})`, error);
      return Promise.reject();
    }
  }

  async scrollToElement(element) {
    try {
      await this.driver.executeScript("console.log('scrooolling')", element);
      await this.driver.executeScript("arguments[0].scrollIntoView(true)", element);
    } catch (error) {
      this.logError(`Got error while trying to scroll to element`,error);
    }
  }

  logPass(msg = "") {
    // console.log(`[Successs] SeleniumInfra: ${msg}.`);
  }

  logError(msgHeader = "", errorObj = "") {
    console.error("--------");
    const errMsg = new Error(`[FAIL] SeleniumInfra: ${msgHeader}...`);
    console.error(errMsg);
    console.error(errorObj);
    console.error("--------");
  }
}
module.exports = SeleniumInfra;
