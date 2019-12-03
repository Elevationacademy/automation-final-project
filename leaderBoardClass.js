const usser = require('./classUser')

class LeaderBoard {
    constructor(selenium, logger) {
        this.selenium = selenium;
        this.logger = logger
        this.allUsersArr = []
    }

    async navigate() {
        setTimeout(async () => {
            this.selenium.clickButton('xpath', '//div[@class="item-container ng-trigger ng-trigger-animationOpenClose"]//div[text()="Leaderboard"]')
            await this.selenium.clickButton('xpath', '//div[@class="item-container ng-trigger ng-trigger-animationOpenClose"]//div[text()="Leaderboard"]')
            await this.selenium.URLvalidation('leaderboard')
        }, 8000);
    }

    async usersInfo() {
        setTimeout(async () => {
            const users = await this.selenium.findElementListBy('xpath', `//div[@class="leaderboard-item has-drill-down ng-star-inserted"]`)
            for (let userElm of users) {
                this.allUsersArr.push(new usser(this.selenium, userElm));
            }
            this.meUser()
            return (this.allUsersArr)
        }, 8000)
    }

    async meUser(){
        setTimeout(async () => {
            let me = await this.selenium.findElementBy('className','leaderboard-item highlight fast-scroll-item has-drill-down ng-star-inserted' )
            this.allUsersArr.push(new usser(this.selenium, me))
        }, 5000);
    }
}

module.exports = LeaderBoard