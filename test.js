const BasePage = require("./basePage")
const HomePage = require("./HomePage");
const LeaderBoard = require("./classLeaderBoard")

class LeaderBoardTest {
    constructor() {
        this.basePage = new BasePage()
        this.testSelenium = this.basePage.selenium
        this.logger = this.basePage.logger
        this.leaderBoard = new LeaderBoard(this.testSelenium, this.logger)
        this.homePage = new HomePage(this.testSelenium, "Bootuser22", "Boot1234");

    }
    async infoUserTest() {
        await this.homePage.login.navigateToLoginPage()
        await this.homePage.login.login()
        await this.leaderBoard.navigate()
        await this.leaderBoard.myInfo()
        setTimeout(async () => {
        await this.leaderBoard.meArr[0].getMyName()
        await this.leaderBoard.meArr[0].getMyTeam()
        await this.leaderBoard.meArr[0].getMyLevel()
        await this.leaderBoard.meArr[0].getMyScore()
        }, 18000);
        await this.leaderBoard.usersInfo()
        setTimeout(async () => {

            await this.leaderBoard.allUsersArr[3].getAllDetails()
            await this.leaderBoard.allUsersArr[3].getName()
            await this.leaderBoard.allUsersArr[3].getTeam()
            await this.leaderBoard.allUsersArr[3].getLevel()
            await this.leaderBoard.allUsersArr[3].getScore()
            await this.leaderBoard.allUsersArr[3].clickUser()

        }, 15000);








    }
}

let x = new LeaderBoardTest()
x.infoUserTest()


