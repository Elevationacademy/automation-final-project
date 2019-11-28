const { Builder, By, Key, until } = require("selenium-webdriver");
const path = require("chromedriver").path;
const chrome = require("selenium-webdriver/chrome");
let service = new chrome.ServiceBuilder(path).build();
chrome.setDefaultService(service);
class SeleniumInfra {



    constructor() {
        this.driver = new Builder().forBrowser("chrome").build();
    }
    async URLvalidation(pageName) {
        try {
            console.log(`URL validation: ${await this.driver.wait(until.urlContains(pageName), 8000)}`)
        } catch (error) {
            console.error(error);
        }
    }



    async getURL(url) {
        try {
            await this.driver.sleep(2000);
            await this.driver.get(url);
            await this.driver.wait(until.urlIs(url), 5000);
            await this.driver.manage().window().maximize();
            console.log(`The navigation to ${url} was successful`);
        } catch (error) {
            console.error(error);
        }
    }



    async clickButton(locatorType, locatorValue, element = null, fromElement = null) {
        try {
            if (!element) {
                await this.driver.wait(
                    until.elementIsVisible(
                        this.driver.findElement(By[locatorType](locatorValue))), 5000)
                if (fromElement) {
                    element = await fromElement.findElement(
                        By[locatorType](locatorValue)
                    );
                } else {
                    element = await this.driver.findElement(
                        By[locatorType](locatorValue)
                    );
                }
            } else {
                await this.driver.wait(until.elementIsVisible(element, 5000))
            }
            await element.click();
            console.log(
                `Clicked on element with ${locatorType} and value ${locatorValue}`
            );
        } catch (error) {
            console.error(
                `Got error while trying to click on element with ${locatorType} and value ${locatorValue}`
            );
        }
    }



    async write(locatorType, locatorValue, data, element = null, fromElement = null) {
        try {
            await this.driver.sleep(1000);
            if (!element) {
                await this.driver.wait(
                    until.elementIsVisible(
                        this.driver.findElement(By[locatorType](locatorValue))), 5000);
                if (fromElement) {
                    element = await fromElement.findElement(
                        By[locatorType](locatorValue)
                    );
                } else {
                    element = await this.driver.findElement(
                        By[locatorType](locatorValue)
                    );
                }
            } else {
                await this.driver.wait(until.elementIsVisible(element, 5000))
            }
            await element.sendKeys(data);
            console.log(
                `success on writing element with ${locatorType} and value ${locatorValue}`
            );
        } catch (error) {
            console.error(
                `Got error while trying to find an element with ${locatorType} and value ${locatorValue}`
            );
        }
    }



    // Get text from element
    async getTextFromElement(locatorType, locatorValue, element = null, fromElement = null) {
        try {
            await this.driver.sleep(2000)
            if (!element) {
                await this.driver.wait(
                    until.elementIsVisible(
                        this.driver.findElement(By[locatorType](locatorValue))), 5000);
                if (fromElement) {
                    element = await fromElement.findElement(
                        By[locatorType](locatorValue)
                    );
                } else {
                    element = await this.driver.findElement(
                        By[locatorType](locatorValue)
                    );
                }
            } else {
                await this.driver.wait(until.elementIsVisible(element, 5000))
            }

            console.log(
                `success on finding element with ${locatorType} and value ${locatorValue}`
            );
                        if(locatorType=="xpath")
            {
                return await element.getAttribute("innerText")
            }
            return element.getText();
        } catch (error) {
            console.error(
                `Got error while trying to find an element with ${locatorType} and value ${locatorValue}`
            );
            return "";
        }
    }


    async clearElementField(locatorType, locatorValue, element = null, fromElement = null) {
        try {
            if (!element) {
                await this.driver.wait(
                    until.elementIsVisible(
                        this.driver.findElement(By[locatorType](locatorValue))), 5000)
                if (fromElement) {
                    element = await fromElement.findElement(
                        By[locatorType](locatorValue)
                    );
                } else {
                    element = await this.driver.findElement(
                        By[locatorType](locatorValue)
                    );
                }
            } else {
                await this.driver.wait(until.elementIsVisible(element, 5000))
            }
            await element.clear();
            console.log(
                `success on clearing element with ${locatorType} and value ${locatorValue}`
            );
        } catch (error) {
            console.error(
                `Got error while trying to find an element with ${locatorType} and value ${locatorValue} and clear`
            );
        }
    }



    async isElementExists(locatorType, locatorValue) {
        try {
            await this.driver.sleep(2000)
            if (await this.driver.findElement(By[locatorType](locatorValue))) {
                console.log("The element exists");
                return true;
            }
        } catch (error) {
            console.error("The element doesn't exists");
            return false;
        }
    }



    async close() {
        try {
            await this.driver.sleep(5000);
            this.driver.quit();
        } catch (error) {
            console.error(error);
        }
    }



    async findElementBy(locatorType, locatorValue, fromElement = null) {
        let element;
        try {
            if (fromElement) {
                element = await fromElement.findElement(By[locatorType](locatorValue));
            } else {
                element = await this.driver.findElement(By[locatorType](locatorValue));
            }
            console.log(`Find element with ${locatorType} = ${locatorValue} `);
            return element;
        } catch {
            console.error(
                `Got error while trying to find element with ${locatorType} = ${locatorValue}`
            );
        }
    }



    async findElementListBy(locatorType, locatorValue, fromElement = null) {
        let elementList = [];
        try {
            if (fromElement) {
                elementList = await fromElement.findElements(
                    By[locatorType](locatorValue)
                );
            } else {
                elementList = await this.driver.findElements(
                    By[locatorType](locatorValue)
                );
            }
            console.log(`Find element with ${locatorType} = ${locatorValue} `);
            return elementList;
        } catch {
            console.error(
                `Got error while trying to find element with ${locatorType} = ${locatorValue}`
            );
        }
    }
}
module.exports = SeleniumInfra;