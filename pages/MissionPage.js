const JSONHelper = require("../helpers/JSON_Handler");
const Login = require("../helpers/Login");
const myMissions = require("../components/MyMissions")

class MissionPage {
  constructor(selenium, userName, password) {
    this.selenium = selenium;
    this.JSONHelper = new JSONHelper();
    this.login = new Login(selenium, userName, password);
    this.myMissions = new myMissions(selenium,"mission");
  }
  async navigateToMissionPage() {
    await this.selenium.getURL(
      "https://vness.eu.gameffective.me/w/game/missions"
    );
  }
  async close() {
    await this.selenium.close();
  }
  async setMissionPageFilter(boolVar, filterName) {
    await this.JSONHelper.setJSON(boolVar, filterName);
  }
  // add a timeout of 1/5000 seconds between setting and getting the content of the json file functions
  async getMissionPageFilter() {
    return await this.JSONHelper.getJSON("missionPage");
  }
}

// mis.setMissionPageFilter(false, "ongoing");
// mis.getMissionPageFilter();

module.exports = MissionPage;
