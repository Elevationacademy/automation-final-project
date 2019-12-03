class User {
    constructor(selenium, webelement) {
        this.selenium = selenium;
        this.webelement = webelement
    }

    async getRank() {
        setTimeout(async () => {
            let rank
            if (await this.selenium.isElementExists('xpath', "//div[contains(@title, '1st')]", null, this.webelement)) {
                rank = 1
            }
            else if (await this.selenium.isElementExists('xpath', "//div[contains(@title, '2nd')]", null, this.webelement)) {
                rank = 2
            }
            else if (await this.selenium.isElementExists('xpath', "//div[contains(@title, '3rd')]", null, this.webelement)) {
                rank = 3
            }
            else {
                rank = await this.selenium.getTextFromElement('xpath', "//div[@class='content-item item-rank ng-star-inserted']", null, this.webelement)
            }
            console.log("users rank is " + rank)
        }, 1000)
    
    }

    async  getName() {
        setTimeout(async () => {
            const name = await this.selenium.getTextFromElement('className', "content-item item-user-details", null, this.webelement)
            console.log("users name is " + name)
        }, 10000);

    }
    async  getTeam() {
        setTimeout(async () => {
            const team = await this.selenium.getTextFromElement('className', "content-item column-value-center ng-star-inserted", null, this.webelement)
            console.log("users team is " + team)

        }, 10000);

    }
    async getLevel() {
        setTimeout(async () => {
            const level = await this.selenium.getTextFromElement('xpath', '//div[@class="content-item column-value-center ng-star-inserted"][2]', null, this.webelement)
            console.log("users level is " + level)

        }, 10000);

    }
    async  getScore() {
        setTimeout(async () => {
            const score = await this.selenium.getTextFromElement('className', "item-value content-item column-value-center value-big", null, this.webelement)
            console.log("users score is " + score)

        }, 10000);

    }
}


module.exports = User

