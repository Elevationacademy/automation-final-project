const BASE = require('./BasePage')
const LeaderBoard = require('./LeaderBoard')
const HOME = require('./HomePage')

class LeaderBoardTest {
    constructor() {
        this.selenium = new BASE().selenium
        this.homePage = new HOME(this.selenium, "Bootuser01", "Boot1234")
        this.leaderBoard = new LeaderBoard();
    }
    async login() {

        await this.homePage.login.navigateToLoginPage();
        await this.homePage.login.login()
    
    }

    async validateGetRank() {
        let rank = await this.leaderBoard.getRank()
        console.log(rank ? 'Succsess to get rank' : 'Failed to get rank ')
    }

    async click() {
        let flag = await this.leaderBoard.clickComponent()
        console.log(flag ? 'Succsess to move to LeaderBoard page by clicking on LeaderBoard component' : 'Failed to move to LeaderBoard page by clicking LeaderBoard component')
    }
}

async function test() {
    let lb = new LeaderBoardTest();
    await lb.login()
    await lb.validateGetRank()
    await lb.click()
}
test()