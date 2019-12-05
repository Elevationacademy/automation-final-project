const expect = require('chai').expect;
const BasePage = require("../pages/BasePage");
const HomePage = require("../pages/HomePage");

describe('Task ', function () {
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
    });


    it("task should have correct properties", async function () {
        const expectedName = "עדכון תמונת פרופיל";
        const expectedDescription = "כל מי שיעדכן את תמונת הפרופיל שלו יקבל ניקוד נוסף";
        const expectedPoints = "10";

        const actualName = await homePage.task.getName();
        const actualDescription = await homePage.task.getDescription();
        const actualPoints = await homePage.task.getPoints();


        expect(actualName).to.be.equal(expectedName);
        expect(actualDescription).to.be.equal(expectedDescription);
        expect(actualPoints).to.be.equal(expectedPoints);
    })

    this.afterAll(async () => {
        await selenium.close();
    });
})


