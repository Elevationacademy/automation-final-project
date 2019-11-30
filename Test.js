const HomePage = require("./HomePage");
const BasePage = require("./BasePage");

class Test {
    constructor() {
        this.testSelenium = new BasePage().selenium;
        this.homePage = new HomePage(this.testSelenium, "Bootuser01", "Boot1234");
    }
    async main(){
        await this.login()
        await this.testSelenium.driver.sleep(5000)
        await this.kpiTable()
        await this.testSelenium.close()
    }
    async login() {
        await this.homePage.login.navigateToLoginPage()
        await this.homePage.login.login()
    }
    async kpiTable(){
        let kpi = this.homePage.kpis
        //*********** KPICardsTable ****** */
        await this.testSelenium.driver.sleep(5000)
        await kpi.init()
        console.log(await kpi.Name)
        console.log(await kpi.Filter)
        await kpi.setFilter('Last Month')
        console.log(await kpi.count())


        // //*********** KPICard *****/
        console.log(await kpi.cards[5].Name)
        console.log(await kpi.cards[5].Description)
        console.log(await kpi.cards[5].Points)
        await kpi.cards[5].click()

        // //***********KPIDrillPopup ************ */
        // await this.testSelenium.driver.sleep(5000)
        console.log(await kpi.cards[5].popup.Name)
        console.log(await kpi.cards[5].popup.LastUpdate)
        console.log(await kpi.cards[5].popup.MyScore)
        // await this.testSelenium.driver.sleep(5000)
        await kpi.cards[5].popup.clickTimeFrame('Daily')
        await this.testSelenium.driver.sleep(5000)
        await kpi.cards[5].popup.trendNscore('Score')
        await this.testSelenium.driver.sleep(5000)
        await kpi.cards[5].popup.close()
        await this.testSelenium.driver.sleep(5000)

    }
}
let test = new Test();
test.main()
