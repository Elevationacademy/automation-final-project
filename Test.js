const HomePage = require("./HomePage");
const BasePage = require("./BasePage");

class Test {
    constructor() {
        this.testSelenium = new BasePage().selenium;
        this.homePage = new HomePage(this.testSelenium, "Bootuser01", "Boot1234");
    }
    async login() {
        await test1.homePage.login.navigateToLoginPage();
        await test1.homePage.login.login();
    }
}
let test1 = new Test();
test1.login()