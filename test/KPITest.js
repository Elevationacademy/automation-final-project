const BasePage = require("../pages/BasePage");
const HomePage = require("../pages/HomePage");
const expect = require('chai').expect;


describe('KPIs', function () {

    let selenium = undefined
    let homePage = undefined
    let kpi = undefined

    this.retries(4)

    this.beforeAll(async () => {
        selenium = new BasePage().selenium;
        homePage = new HomePage(selenium, "Bootuser01", "Boot1234");
        await homePage.login.navigateToLoginPage()
        await homePage.login.login()
        kpi = homePage.kpis
        await kpi.init()
    })

    describe('KPICardTable', async () => {

        it('getName() should return "My Preformance"', async () => {
            expect(await kpi.getName()).to.be.equal('My Performance')
        })

        it('getFilter() should return "This Week"', async () => {
            expect(await kpi.getFilter()).to.be.equal('This Week')
        })

        it('setFilter() shuold set filter to "Yesterday"', async () => {
            await kpi.setFilter('Yesterday')
            expect(await kpi.getFilter()).to.be.equal('Yesterday')

        })
        it('count() should return numbers of cards', async () => {
            expect(await kpi.count()).that.is.a('number')
        })
    })

    describe('KpiCard', async () => {
        it('getName() should return "RFT טיפול בתקלות"', async() => {
            expect(await kpi.cards[0].getName()).to.be.equal('RFT טיפול בתקלות')
        })

        it('getDescriptin() should return description', async() => {
            expect(await kpi.cards[0].getDescription()).that.is.a('string')
        })

        it('getPoints() should return string', async() => {
            expect(await kpi.cards[0].getPoints()).that.is.a('string')
        })

        it('click() should click on first card', async() => {
            await kpi.cards[0].click()
        })
    })

    describe('KPIDrillPopup', async () =>{
        it('getName() should return "RFT טיפול בתקלות"', async () => {
            expect(await kpi.cards[0].popup.getName()).to.be.equal('RFT טיפול בתקלות')
        })

        it('getLastUpdate() should get last update of the popup', async () =>{
            expect(await kpi.cards[0].popup.getLastUpdate()).that.is.a('string')
        })

        it('getMyScore() should get score of the popup', async () =>{
            expect(await kpi.cards[0].popup.getMyScore()).that.is.a('string')
        })

        it('clickTimeFrame() should click on "Weekly" Time frame', async () =>{
            await kpi.cards[0].popup.clickTimeFrame("Weekly")
            expect(await kpi.cards[0].popup.currentTimeFrame()).to.be.equal('Weekly')
        })

        it('trendNscore() should click on "Score" button', async () =>{
            await kpi.cards[0].popup.trendNscore("Score")
            expect(await kpi.cards[0].popup.isTrendScore()).to.be.equal('Score')
        })

        it('close() should close the popup window', async () =>{
            await kpi.cards[0].popup.close()
        })
    })

    this.afterAll(async () => {
        await selenium.close()
    })

})