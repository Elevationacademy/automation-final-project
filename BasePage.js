const SeleniumInfra = require("./SeleniumInfra");
class BasePage {
    constructor() {
        this.selenium = new SeleniumInfra();
    }
}
module.exports = BasePage;