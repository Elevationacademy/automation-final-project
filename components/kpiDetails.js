class KpisDetails {
    constructor(selenium, webelement) {
        this.selenium = selenium;
        this.webelement = webelement;
    }
    async  getUserDetailsNum() {
        
            const nameUser = await this.selenium.getTextFromElement('xpath', "//div[@class='content-item']//*[@class='big ng-star-inserted']", null, this.webelement)
            console.log("users name is " + nameUser)
    
    }
    async  getUserDetailsItem() {
        
       ////div[@class='content-item']//parent::div//*[@class='content-item-peer' ] 
            const performance = await this.selenium.getTextFromElement('xpath', "//div[@class='content-item']//div[@class='value-out-of-max ng-star-inserted']" , null, this.webelement)
            console.log("users performance is " + performance)
        
    }
    async getKPIText() {
        
            const kpiText = await this.selenium.getTextFromElement('xpath', "//*[@class='content-item-name']", null, this.webelement)
            console.log("kpi text is " + kpiText)

    }
    async getText()
    {
        await this.selenium.sleep(1000)
       let result = await this.selenium.getTextFromElement(null,null,this.webelement)
       return result
    }
}
module.exports =KpisDetails