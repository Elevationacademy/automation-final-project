const { addFeature } = require('@wdio/allure-reporter').default
const SeleniumInfra = require("./SeleniumInfra");



class BasePage {
  constructor() {
    this.KPIxpath = `//div[@class="leaderboard-items gm-items"]`
    this.selenium = new SeleniumInfra();
    // this.allure = new { addFeature }

    
  }
}

module.exports = BasePage