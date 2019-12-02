const HomePage = require("./HomePage");
const BasePage = require("./BasePage");

class Test {
    constructor() {
        this.testSelenium = new BasePage().selenium;
        this.homePage = new HomePage(this.testSelenium, "Bootuser01", "Boot1234");
       
    }
    async login() {
        await this.homePage.login.navigateToLoginPage();
        await this.homePage.login.login();
        // console.log(await this.homePage.mychallenges.getTitle());
        // console.log(await this.homePage.mychallenges.getAvailableChallenges());
        console.log(await this.homePage.racingdash.getRaceType());
        console.log(await this.homePage.racingdash.getAmountDaysLeft());



    }
    //tests the functionality of selected button under raceDash
    async raceBtnClick(){
        await this.homePage.login.navigateToLoginPage();
        await this.homePage.login.login();
        let formerBtn=await this.homePage.racingdash.getRaceType();
        await this.homePage.racingdash.clickTeamRace();
        let currentBtn=await this.homePage.racingdash.getRaceType();
        console.log(`${formerBtn} was first selected , after click ${currentBtn} is selected`)
        if(formerBtn==currentBtn){
            console.log("test failed, selected button not changed")
        }
        else{
            console.log("test is success, selected button is different than former")
        }

    }

}
let test1 = new Test();
// test1.login()
test1.raceBtnClick();