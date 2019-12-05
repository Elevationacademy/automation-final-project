const SeleniumInfra = require("../infrastructure/SeleniumInfra");

class BasePage {
  constructor() {
    this.selenium = new SeleniumInfra();
  }
}

module.exports = BasePage;
