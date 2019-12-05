const expect = require('chai').expect;
const BasePage = require("../pages/BasePage");
const HomePage = require("../pages/HomePage");
const LeaderBoard = require('../components/LeaderBoard')
const app = require('chai').assert

describe('Team3 components tests ', async function () {
    let selenium = undefined
    let homePage = undefined
    let lb = undefined

    this.beforeAll(async () => {
        selenium = new BasePage().selenium
        homePage = new HomePage(selenium, "Bootuser01", "Boot1234")
        lb = new LeaderBoard(selenium)
        await homePage.login.navigateToLoginPage()
        await homePage.login.login()
    })

    it("supposed to receive a title of My Challenges", async function () {
        const title = await homePage.mychallenges.getTitle();
        expect(title).to.be.string
    })
    it("supposed to receive 'No Challenges'", async function () {
        const chall = await homePage.mychallenges.getAvailableChallenges();
        expect(chall).to.be.string
    })

    it("supposed to receive 'My Race'", async function () {
        const selected = await homePage.racingdash.getRaceType();
        expect(selected).to.be.equal("My Race")
    })
    it("supposed to receive a string of how many days left", async function () {
        const daysLeft = await homePage.racingdash.getAmountDaysLeft();
        expect(daysLeft).to.be.string
    })
    it("supposed to receive title of 'badges'", async function () {
        const title = await homePage.myBadges.getTitle();
        expect(title).to.be.string
    })
    it("supposed to get description of 'badges'", async function () {
        const desc = await homePage.myBadges.getDescription();
        expect(desc).to.be.string
    })
    it("supposed to receive 'No Challenges'", async function () {
        const chall = await homePage.myBadges.clickMyBadges();
        expect(chall).to.be.true
    })
    it("click on home page button", async function () {
        await homePage.navigateToHomePage()
        expect(await selenium.URLvalidation('home')).to.be.true
        
    })


    it('should be string of number of number', async function () {
        let rank = await lb.getRank()
        expect(rank).to.be.lengthOf(4)
    });

    it('After click the leader board page should open', async function () {
        let flag = await lb.clickComponent()
        expect(flag).to.be.true
    })

    this.afterAll(async () => {
        await selenium.close();
    });



})



