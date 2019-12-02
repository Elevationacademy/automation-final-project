const HomePage = require("./HomePage");
const BasePage = require("./BasePage");
// ​
class Test {
    constructor(userName, password) {
        this.testSelenium = new BasePage().selenium;
        this.homePage = new HomePage(this.testSelenium, userName, password);
    }
    async login() {
        await test1.homePage.login.navigateToLoginPage();
        await test1.homePage.login.login()
    }
}
let test1 = new Test("Bootuser01", "Boot1234");
async function test() {
    await test1.login()
    await test1.homePage.leaderBoardPage.usersKPIsPage.navigateToLeaderBoardPage()
    await test1.homePage.leaderBoardPage.usersKPIsPage.clickSpecificUser("Boot User02")
    await test1.homePage.leaderBoardPage.usersKPIsPage.ValidateUserName("Boot User02")
    await test1.homePage.leaderBoardPage.usersKPIsPage.getUsersIndicator("סגירת תקלות")

}
test()
