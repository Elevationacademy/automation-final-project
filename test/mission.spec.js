const expect = require('chai').expect;
const BasePage = require("../pages/BasePage");
const HomePage = require("../pages/HomePage");

describe('Missions ', function () {
    let user = undefined;
    let selenium = undefined;
    let homePage = undefined;

    this.retries(4);

    this.beforeAll(async () => {
        user = {
            name: "Bootuser10",
            password: "Boot1234"
        };
        selenium = new BasePage().selenium;
        homePage = new HomePage(selenium, user.name, user.password);
        await homePage.login.navigateToLoginPage();
        await homePage.login.login();
    });

    this.afterEach(async () => {
        await homePage.navigateToHomePage();
    });

    it("click should go to correct page", async function () {
        await homePage.mission.clickArrow();
        const isValid = await selenium.URLvalidation("missions");
        expect(isValid).to.be.true;
    })

    it("click should have correct properties", async function () {
        const expectedName = "Welcome EffectiveNess";
        const expectedPercentage = "14";
        const expectedPoints = "10";
        const expectedOpenMissions = "6 open missions";

        const actualName = await homePage.mission.getName();
        const actualPercentage = await homePage.mission.getPercentage();
        const actualPoints = await homePage.mission.getPoints();
        const actualOpenMissions = await homePage.mission.getOpenMissions();

        expect(actualName).to.be.equal(expectedName);
        expect(actualPercentage).to.be.equal(expectedPercentage);
        expect(actualPoints).to.be.equal(expectedPoints);
        expect(actualOpenMissions).to.be.equal(expectedOpenMissions);
    })

    this.afterAll(async () => {
        await selenium.close();
    });
})


