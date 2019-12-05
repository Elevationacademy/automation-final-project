const JSONHelper = require("../helpers/JSON_Handler");

class Task {
  constructor(selenium, taskXpath) {
    this.selenium = selenium;
    this.taskXpath = taskXpath;
    this.JSONHelper = new JSONHelper();
  }
  async setMissionFilter(filtersArr) {
    await this.JSONHelper.setJSON(null, filtersArr);
  }
  // add a timeout of 1/5000 seconds between setting and getting the content of the json file functions
  async getMissionFilter() {
    return await this.JSONHelper.getJSON("mission");
  }
  async getName() {
    return await this.selenium.getTextFromElement("xpath", `${this.taskXpath}//div[contains(@class,'card-item-center')]//descendant::span`)
  }
  async getDescription() {
    if (await this.selenium.isElementExists("xpath", `${this.taskXpath}//div[contains(@class,'card-item-center')]//div[contains(@class,'text-with-more')]//div[@class='text']`)) {
      return await this.selenium.getTextFromElement("xpath", `${this.taskXpath}//div[contains(@class,'card-item-center')]//div[contains(@class,'text-with-more')]//div[@class='text']`)
    }
  }
  async getPoints() {
    return await this.selenium.getTextFromElement("xpath", `${this.taskXpath}//div[@class='card-item-right']//descendant::div[@class='card-item-value']//descendant::var`)
  }
}

module.exports = Task;




// mis.setMissionFilter([
//   { mission: true },
//   { mini: true },
//   { allTimesStart: true },
//   { allTimesEnd: true },
//   { all: true },
//   { done: true },
//   { open: true },
//   { quiz: true }
// ]);