const Login = require("../helpers/Login");
/** MISSIONS */
const myMissions = require("../components/MyMissions");
const Mission = require("../components/Mission");
const MyTasks = require("../components/MyTasks");
const Task = require("../components/Task");

/** KPIs */
const KPICardsTable = require("../components/KPICardsTable")

/** COMPONENTS */
const Nba = require("../components/nbaClass");
const MyBadges = require("../components/MyBadges");
const RacingDash=require("../components/RacingDash")
const MyChallenges = require('../components/MyChallenges')

class HomePage {
  constructor(selenium, userName, password) {
    this.selenium = selenium;
    this.login = new Login(selenium, userName, password);
     
  /** MISSIONS */
    this.myMissions = new myMissions(selenium,"home");
    this.mission = new Mission(selenium, "//campaigns//div[contains(@class,'campaigns')]//div[contains(@class,'campaign-summary-item')][1]");
    this.myTasks = new MyTasks(selenium);
    this.task = new Task(selenium,`//activities[@view-mode="open"]//descendant::div[@class="activity-item card-item box ng-star-inserted"][3]`);
  /** KPIs */
    this.kpis = new KPICardsTable(selenium)
  /** COMPONENTS */
    this.nba = new Nba(this.selenium);
    this.myBadges = new MyBadges(this.selenium);
    this.racingdash=new RacingDash(this.selenium)
    this.mychallenges = new MyChallenges(this.selenium)
  }
  async navigateToHomePage() {
    await this.selenium.getURL("https://vness.eu.gameffective.me/w/game/home");
  }
  async navigate() {
    await this.selenium.sleep(2000)
    // await this.selenium.clickButton('xpath', '//div[@class="item-container ng-trigger ng-trigger-animationOpenClose"]//div[text()="Leaderboard"]')
    await this.selenium.clickButton('xpath', '//div[@class="item-container ng-trigger ng-trigger-animationOpenClose"]//div[text()="Leaderboard"]')
    await this.selenium.sleep(2000)
    await this.selenium.URLvalidation('leaderboard')
}
}

module.exports = HomePage;
