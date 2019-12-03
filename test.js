const BasePage = require("./basePage")
const HomePage = require("./HomePage");
const LeaderBoard = require("./leaderBoardClass")

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
        await this.leaderBoard.usersInfo()
        setTimeout(async () => {

        await this.leaderBoard.allUsersArr[0].getRank()
        await this.leaderBoard.allUsersArr[0].getName()
        await this.leaderBoard.allUsersArr[0].getTeam()
        await this.leaderBoard.allUsersArr[0].getLevel()
        await this.leaderBoard.allUsersArr[0].getScore()

        }, 15000)

    }
}

let leaderBoard = new LeaderBoardTest()
leaderBoard.infoUserTest()