class CenterNotification {
    constructor(selenium) {
        this.selenium = selenium;
    }

    // return the game name:
    async getGameName() {
        let gameName = await this.selenium.getTextFromElement("xpath", "//header-desktop/div/div[1]/div[1]/div[2]");
        return gameName;
    }

    // return the player level:
    async getPlayerLevel() {
        let level = await this.selenium.getTextFromElement("xpath", "//header-desktop/div/div[1]/div[2]/div[2]");
        return level;
    }

    // return the current points count:
    async getCurrentPoints() {
        let currentPoints = await this.selenium.getTextFromElement("xpath", "//header-desktop/div/div[1]/div[3]/div[1]");
        return currentPoints;
    }

    // return the current points count:
    async getPointsNeeded() {
        let pointsNeeded = await this.selenium.getTextFromElement("xpath", "//header-desktop/div/div[1]/div[3]/div[3]");
        return pointsNeeded;
    }

    // click game name and validate:
    async clickGameName() {
        let dropDownElement = await this.selenium.findElementBy("xpath", "//*[@class='header-desktop ng-star-inserted']//*[@class='selected-game']//*[@class='selected-game-list ng-star-inserted']");
        await this.selenium.clickButton(null, null, dropDownElement);
        return (await this.selenium.isElementExists('xpath', "//*[@class='gm-dropdown open']") ? 'Succsess to click on user center notification label' : 'Failed to click on user center notification label');
    }
}

module.exports = CenterNotification;