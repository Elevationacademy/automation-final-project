const usser = require('./classUser')

class LeaderBoard {
    constructor(selenium, logger) {
        this.selenium = selenium;
        this.logger = logger;
        this.allUsersArr = [];
        this.meArr = [];
        this.ranks = [];
    }


    async navigate() {
        setTimeout(async () => {
            this.selenium.clickButton('xpath', '//div[@class="item-container ng-trigger ng-trigger-animationOpenClose"]//div[text()="Leaderboard"]')
            await this.selenium.clickButton('xpath', '//div[@class="item-container ng-trigger ng-trigger-animationOpenClose"]//div[text()="Leaderboard"]')
            await this.selenium.URLvalidation('leaderboard')
        }, 5000);
    }

    async usersInfo() {
        setTimeout(async () => {
            const users = await this.selenium.findElementListBy('xpath', `//div[@class="leaderboard-item has-drill-down ng-star-inserted"]`)
            for (let userElm of users) {

                this.allUsersArr.push(new usser(this.selenium, userElm));
            }
            return (this.allUsersArr)
        }, 8000)


    }

    async myInfo() {
        setTimeout(async () => {
            let elem = await this.selenium.findElementListBy('className', 'leaderboard-item highlight fast-scroll-item has-drill-down ng-star-inserted')
            this.meArr.push(new usser(this.selenium, elem))
            return (this.meArr)
            // console.log ("my details are: " + elem)
        }, 10000);

    }

}

module.exports = LeaderBoard


