const Login = require("./Login")

class HomePage {
    constructor(selenium, userName, password) {
        this.selenium = selenium;
        this.login = new Login(selenium, userName, password);
    }
}

module.exports = HomePage;