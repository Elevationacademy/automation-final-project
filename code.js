class LeaderBoard {
    constructor(selenium, name, teame) {
        this.selenium = selenium;
        this.name = name
        this.teame = teame
    }

    async getInfoAboutUser(userID) {
        await this.selenium.clickButton('xpath', '//div[@class="item-container ng-trigger ng-trigger-animationOpenClose"]//div[text()="Leaderboard"]')
        if (this.selenium.URLvalidation('leaderboard')) {
            console.log('The clicked button linked to the right page')
        }
        await this.selenium.findElementListBy('xpath', `//div[@class="leaderboard-items gm-items"]//div[@item-id=${userID}]`)
        const raw = await this.selenium.getTextFromElement('xpath', `//div[@class="leaderboard-items gm-items"]//div[@item-id=${userID}]`)
        if (raw) {
            console.log("the user is exists")
        }
        // await this.selenium.isElementExists('xpath',`//div[@class="leaderboard-items gm-items"]//div[@title='1st place']`)
        // const rank = await this.selenium.getTextFromElement('xpath',`//div[@class="leaderboard-items gm-items"]//div[@title='1st place']`)
        // console.log(rank)
        await this.selenium.isElementExists('xpath', `//div[@class="leaderboard-items gm-items"]//div[@item-id=${userID}]//div[@class="content-item item-user-details"]`)
        const name = await this.selenium.getTextFromElement('xpath', `//div[@class="leaderboard-items gm-items"]//div[@item-id=${userID}]//div[@class="content-item item-user-details"]`)
        console.log("users name is " + name)
        await this.selenium.isElementExists('xpath', `//div[@class="leaderboard-items gm-items"]//div[@item-id=${userID}]//div[@class="content-item column-value-center ng-star-inserted"][1]`)
        const teame = await this.selenium.getTextFromElement('xpath', `//div[@class="leaderboard-items gm-items"]//div[@item-id=${userID}]//div[@class="content-item column-value-center ng-star-inserted"][1]`)
        console.log("users teame is " + teame)
        await this.selenium.isElementExists('xpath', `//div[@class="leaderboard-items gm-items"]//div[@item-id=${userID}]//div[@class="content-item column-value-center ng-star-inserted"][2]`)
        const level = await this.selenium.getTextFromElement('xpath', `//div[@class="leaderboard-items gm-items"]//div[@item-id=${userID}]//div[@class="content-item column-value-center ng-star-inserted"][2]`)
        console.log("users level is " + level)
        await this.selenium.isElementExists('xpath', `//div[@class="leaderboard-items gm-items"]//div[@item-id=${userID}]//div[@class="item-value content-item column-value-center value-big"]`)
        const score = await this.selenium.getTextFromElement('xpath', `//div[@class="leaderboard-items gm-items"]//div[@item-id=${userID}]//div[@class="item-value content-item column-value-center value-big"]`)
        console.log("users score is " + score)
    }

    async clickUser(userID) {
        await this.selenium.clickButton('xpath', '//div[@class="item-container ng-trigger ng-trigger-animationOpenClose"]//div[text()="Leaderboard"]')
        if (await this.selenium.URLvalidation('leaderboard')) {
            console.log('The clicked button linked to the right page')
        }

        setTimeout(() => {
            this.selenium.clickButton('xpath', `//div[@class="leaderboard-items gm-items"]//div[@item-id=${userID}]`)
        }, 10000);
        setTimeout(() => {
            if (this.selenium.URLvalidation('650')) {
                console.log('The clicked user linked to KPIs page')
            }
        }, 10000);


    }


    async getInfoAboutUsers(){
        await this.selenium.clickButton('xpath', '//div[@class="item-container ng-trigger ng-trigger-animationOpenClose"]//div[text()="Leaderboard"]')
        if (this.selenium.URLvalidation('leaderboard')) {
            console.log('The clicked button linked to the right page')
        }
        await this.selenium.findElementListBy('xpath', `//div[@class="leaderboard-items gm-items"]`)
        const table =await this.selenium.getTextFromElement('xpath', `//div[@class="leaderboard-items gm-items"]`)
        console.table(table)           
        }
}



module.exports = LeaderBoard;
