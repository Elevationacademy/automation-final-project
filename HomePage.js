const Login = require("./Login")

class HomePage {
    constructor(selenium, userName, password) {
        this.selenium = selenium;
        this.login = new Login(this.selenium, userName, password);
    }
}

module.exports = HomePage;