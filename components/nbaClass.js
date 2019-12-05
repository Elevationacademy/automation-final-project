class Nba {
    constructor(selenium) {
        this.selenium = selenium;
    }
    //Return points from screen
    async getPoints() {
        try {
            return await this.selenium.getTextFromElement(
                "xpath",
                "//div[@class='nba-item-right']"
            );
        }
        catch (err) {
            console.log(err);
        }
    }
    //Return description from screen
    async getDescription() {
        try {
            return await this.selenium.getTextFromElement(
                "xpath",
                "//div[@class='nba-item-left']"
            );
        }
        catch (err) {
            console.log(err);
        }
    }
    //Click NBA component and check if a pop is shown
    async clickNba() {
        await this.selenium.clickButton(
            "xpath",
            "//div[@class='nba-action-button']"
        );
        console.log(
            await this.selenium.isElementExists(
                "xpath",
                "//div[@id='start-screen']"
            )
        );
    }
    async close() {
        await this.selenium.close();
    }
}
module.exports = Nba;
