const KPIs = require("./kpiDetails")
class User {
    constructor(selenium, webelement) {
        this.selenium = selenium;
        this.webelement = webelement;
        this.kpiDetailsArray = []
    }

    async getAllDetails() {

        await this.selenium.isElementExists('xpath', '//div[@class="leaderboard-item has-drill-down ng-star-inserted"]')
        let user = await this.selenium.getTextFromElement('xpath', '//div[@class="leaderboard-item has-drill-down ng-star-inserted"]', null, this.webelement)
        console.log(user)

    }

    async  getName() {

        const name = await this.selenium.getTextFromElement('className', "item-name  column-value-center", null, this.webelement);
        console.log("users name is " + name)
        return name

    }


    async  getTeam() {

        const team = await this.selenium.getTextFromElement('className', "content-item column-value-center ng-star-inserted", null, this.webelement)
        console.log("users team is " + team)
        return team


    }


    async getLevel() {

        const level = await this.selenium.getTextFromElement('xpath', '//div[@class="content-item column-value-center ng-star-inserted"][2]', null, this.webelement)
        console.log("users level is " + level)
        return level


    }
    async  getScore() {

        const score = await this.selenium.getTextFromElement('className', "item-value content-item column-value-center value-big", null, this.webelement)
        console.log("users score is " + score)


    }
    async initKPIsDetail() {

        await this.selenium.isElementExists('xpath', '//div[@class="content-item"]')
        let kpiDetails = await this.selenium.findElementListBy('xpath', '//div[@class="content-item"]')
        for (let kpi of kpiDetails) {
            this.kpiDetailsArray.push(new KPIs(this.selenium, kpi))
        }
        return this.kpiDetailsArray

    }

    async clickUser() {
        await this.selenium.sleep(1000)
        await this.selenium.clickButton('className', "item-value content-item column-value-center value-big", null, this.webelement)
        await this.selenium.URLvalidation('user')
        await this.selenium.sleep(1000)
        return "clicked"



    }

    async getMyName() {

        // await this.selenium.isElementExists('xpath', '//div[text() ="Me"]')
        const name = await this.selenium.getTextFromElement('xpath', '//div[text() ="Me"]')
        console.log("My name is " + name)

    }

    async getMyTeam() {

        // await this.selenium.isElementExists('xpath', '//div[@style="color: rgb(0, 76, 137);"]')
        const team = await this.selenium.getTextFromElement('xpath', '//div[@style="color: rgb(0, 76, 137);"]//div[@class="content-item column-value-center ng-star-inserted"]')
        console.log("My team is " + team)



    }


    async getMyLevel() {

        const level = await this.selenium.getTextFromElement('xpath', '//div[@style="color: rgb(0, 76, 137);"]//div[@class="content-item column-value-center ng-star-inserted"][2]')
        console.log("My level is " + level)



    }
    async  getMyScore() {

        const score = await this.selenium.getTextFromElement('xpath', '//div[@style="color: rgb(0, 76, 137);"]//div[@class="item-value content-item column-value-center last value-big"]')
        console.log("My score is " + score)



    }





}








module.exports = User

