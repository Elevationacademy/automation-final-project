class MyBadges {
    constructor(selenium) {
        this.selenium = selenium;
    }
    //Return title from screen
    async getTitle() {
        try {
            let title = await this.selenium.findElementBy("xpath", "//div[(@class='flow-cell-content')]//div[@class= 'achievement-badges-widget']//ancestor::div[2]//div[@class='flow-cell-header ng-star-inserted']");
            return await title.getAttribute("innerText");
        }
        catch (err) {
            console.log(err);
        }
    }
    //Return description from screen
    async getDescription() {
        try {
            let description = await this.selenium.findElementBy("xpath", "//div[(@class='flow-cell-content')]//div[@class= 'achievement-badges-widget']");
            return await description.getAttribute("innerText");
        }
        catch (err) {
            console.log(err);
        }
    }
    //Click MyBadges component and check if the url changes
    async clickMyBadges() {
        try {
            let elementToClick = await this.selenium.findElementBy("xpath", "//div[(@class='flow-cell-content')]//div[@class= 'achievement-badges-widget']");
            await this.selenium.clickButton("", "", elementToClick);
           return await this.selenium.URLvalidation("badges");
        }
        catch (err) {
            console.log(err);
        }
    }
    async close() {
        await this.selenium.close();
    }
}
module.exports = MyBadges

