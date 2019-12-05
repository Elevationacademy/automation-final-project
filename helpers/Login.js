class Login {
  constructor(selenium, userName, password) {
    this.selenium = selenium;
    this.userName = userName;
    this.password = password;
  }

  async navigateToLoginPage() {
    await this.selenium.getURL("https://vness.eu.gameffective.me/w/login");
  }

  async login() {
    await this.selenium.driver.sleep(3000);//debug
    await this.selenium.clickButton("css", "button[type='button']");
    await this.selenium.write(
      "xpath",
      "//*[@name='user-name']/child::div/child::input",
      this.userName
    );
    await this.selenium.write(
      "xpath",
      "//*[@name='password']/child::div/child::input",
      this.password
    );
    await this.selenium.driver.sleep(3000);//debug
    await this.selenium.clickButton("xpath", "//div[text() = 'Login']");
  }
}

module.exports = Login;
