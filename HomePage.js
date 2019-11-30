const Login = require("./Login")
const KPICardsTable = require('./KPICardsTable')
class HomePage {
    constructor(selenium, userName, password) {
        this.selenium = selenium;
        this.login = new Login(selenium, userName, password);
        this.kpis = new KPICardsTable(selenium)
    }
}
module.exports = HomePage;