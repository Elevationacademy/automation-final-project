const HomePage = require("./HomePage");
const BasePage = require("./BasePage");

class KPITest {
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
        console.log(await kpi.getName())
        console.log(await kpi.getFilter())
        await kpi.setFilter('Last Month')
        console.log(await kpi.count())

        // //*********** KPICard *****/
        console.log(await kpi.cards[0].getName())
        console.log(await kpi.cards[0].getDescription())
        console.log(await kpi.cards[0].getPoints())
        await kpi.cards[0].click()

        // //***********KPIDrillPopup ************ */
        console.log(await kpi.cards[0].popup.getName())
        console.log(await kpi.cards[0].popup.getLastUpdate())
        console.log(await kpi.cards[0].popup.getMyScore())
        await kpi.cards[0].popup.clickTimeFrame('Daily')
        await kpi.cards[0].popup.trendNscore('Score')
        await kpi.cards[0].popup.close()
    }
}
let test = new KPITest();
test.main()
