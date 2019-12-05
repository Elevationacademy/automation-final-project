const expect = require('chai').expect;
const BasePage = require("../pages/BasePage");
const HomePage = require("../pages/HomePage");

describe('myTasks ', function () {
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
        
        const seekMissionName = "Welcome EffectiveNess";
        const mission = await homePage.myMissions.getMissionByName(seekMissionName);
        await mission.clickArrow();
        await homePage.myTasks.buildTasks();

    });

    it('should build tasks array', async function () {
        expect(homePage.myTasks.tasks).to.be.an('array');
    });
    it('should contains correct amount of tasks', async function () {
        const countTasks = homePage.myTasks.countTasks();
        expect(homePage.myTasks.tasks).to.have.lengthOf(countTasks);
    });
    it('should get task with correct name', async function () {
        const seekTasknName = "עדכון תמונת פרופיל";
        const task = await homePage.myTasks.getTaskByName(seekTasknName);
        const taskName = await task.getName();
        expect(taskName).to.be.equal(seekTasknName);
    });
    this.afterAll(async () => {
        await selenium.close();
    });
});