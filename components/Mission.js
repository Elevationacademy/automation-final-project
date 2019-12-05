class Mission {
  constructor(selenium, xpathMission,view="home") {
    this.selenium = selenium;
    this.xpathMission = xpathMission;
    this.view=view
  }
  async getName() {
    if(this.view === "home"){
      return await this.selenium.getTextFromElement("xpath", `${this.xpathMission}//div[@class='card-item-center']//div[@class='card-item-name']`)
    }
    return await this.selenium.getTextFromElement("xpath",`${this.xpathMission}`)
  }
  async getPercentage() {
    let percent
    if(this.view === "home"){
      percent = await this.selenium.getTextFromElement("xpath", `${this.xpathMission}//div[@class='card-item-left']//div[@class='card-item-progress']//descendant::div[@class='text-html percentage-text ng-star-inserted']`)
    } else {
      percent = await this.selenium.getTextFromElement("xpath", `${this.xpathMission}`)
    }
    return percent.split("%")[0]
  }
  async getPoints() {
    if(this.view === "home"){
      return await this.selenium.getTextFromElement("xpath", `${this.xpathMission}//div[@class='card-item-right']//div[@class='card-item-value']//descendant::span[@class='big ng-star-inserted']//span//var`)
    }
    return await this.selenium.getTextFromElement("xpath",`${this.xpathMission}`)
  }
  async getOpenMissions() {
    let openMissions
    if(this.view === "home"){
      openMissions = await this.selenium.getTextFromElement("xpath", `${this.xpathMission}//div[@class='card-item-center']//div[@class='card-item-description ng-star-inserted']`)
    } else {
      openMissions = await this.selenium.getTextFromElement("xpath", `${this.xpathMission}`)
    }
    return openMissions;
  }
  async clickArrow() {
    if(this.view === "home"){
      await this.selenium.clickButton("xpath", `${this.xpathMission}//div[@class='card-item-right']//div[@class='card-item-arrow ng-star-inserted']//i[@class='icon ion-ios-arrow-forward']`)
    } else {
      await this.selenium.clickButton("xpath", `${this.xpathMission}//div[@class='catalog-item-content']//div[contains(@class,'value-out-of-max')]`)
    }
  }
}
module.exports = Mission