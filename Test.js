const HomePage = require("./HomePage");
const BasePage = require("./BasePage");

class Test {
    constructor(userName, password) {
        this.testSelenium = new BasePage().selenium;
        this.homePage = new HomePage(this.testSelenium, userName, password);
    }
    async login() {
        await test1.homePage.login.navigateToLoginPage();
        await test1.homePage.login.login();
    }
}
let test1 = new Test("Bootuser01", "Boot1234");
test1.login()
