class User {
    constructor(selenium, webelement) {
        this.selenium = selenium;
        this.webelement = webelement;
    }
    
    async getAllDetails() {
        setTimeout(async () => {
            await this.selenium.isElementExists('xpath', '//div[@class="leaderboard-item has-drill-down ng-star-inserted"]')
            let user = await this.selenium.getTextFromElement('xpath', '//div[@class="leaderboard-item has-drill-down ng-star-inserted"]', null, this.webelement)
            console.log(user)
        }, 10000);
    }

    async  getName() {
        setTimeout(async () => {
            const name = await this.selenium.getTextFromElement('className', "item-name  column-value-center", null, this.webelement)
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

    async clickUser() {
        setTimeout(async () => {
            await this.selenium.clickButton('className', "item-value content-item column-value-center value-big", null, this.webelement)
            console.log("clicked")
            await this.selenium.URLvalidation('user')

        }, 10000);

    }

    async getMyName() {
        setTimeout(async () => {
            // await this.selenium.isElementExists('xpath', '//div[text() ="Me"]')
            const name = await this.selenium.getTextFromElement('xpath', '//div[text() ="Me"]')
            console.log("My name is " + name)
        }, 10000);
    }

    async getMyTeam() {
        setTimeout(async () => {
            // await this.selenium.isElementExists('xpath', '//div[@style="color: rgb(0, 76, 137);"]')
            const team = await this.selenium.getTextFromElement('xpath', '//div[@style="color: rgb(0, 76, 137);"]//div[@class="content-item column-value-center ng-star-inserted"]')
            console.log("My team is " + team)


        }, 10000);
    }


    async getMyLevel() {
        setTimeout(async () => {
            const level = await this.selenium.getTextFromElement('xpath', '//div[@style="color: rgb(0, 76, 137);"]//div[@class="content-item column-value-center ng-star-inserted"][2]')
            console.log("My level is " + level)

        }, 10000);

    }
    async  getMyScore() {
        setTimeout(async () => {
            const score = await this.selenium.getTextFromElement('xpath', '//div[@style="color: rgb(0, 76, 137);"]//div[@class="item-value content-item column-value-center last value-big"]')
            console.log("My score is " + score)

        }, 10000);

    }





}








module.exports = User

