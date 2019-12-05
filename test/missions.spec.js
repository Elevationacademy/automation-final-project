const expect = require('chai').expect;
const BasePage = require("../pages/BasePage");
const HomePage = require("../pages/HomePage");

describe('myMissions ', function () {
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
        await homePage.myMissions.buildMissionTable();
    });

    it('should build missions array', async function () {
        expect(homePage.myMissions.missions).to.be.an('array');
    });
    it('should contains correct amount of missions', async function () {
        const countMissions = homePage.myMissions.countMissions();
        expect(homePage.myMissions.missions).to.have.lengthOf(countMissions);
    });
    it('should get mission with correct name', async function () {
        const seekMissionName = "סקר";
        const mission = await homePage.myMissions.getMissionByName(seekMissionName);
        const missionName = await mission.getName();
        expect(missionName).to.be.equal(seekMissionName);
    });
    this.afterAll(async () => {
        
        await selenium.close();
    });
});