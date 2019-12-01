class MyChallenges {
    constructor(selenium) {
        this.selenium = selenium;
        this.title = null;
        this.availableChallenges = null;
    }


    //get the title of the component of 'MyChallenges'
    async getTitle(){
        while(!(await this.selenium.isElementExists('xpath','(//*[@class="flow-cell-header ng-star-inserted"])[3]/span[@class="cell-header-title"]'))){
            continue
        }
        let titleElement = await this.selenium.findElementBy('xpath','(//*[@class="flow-cell-header ng-star-inserted"])[3]/span[@class="cell-header-title"]')
        this.title = await titleElement.getAttribute("innerText")
        return this.title
    }

    //get the availableChallenges of the component of 'MyChallenges'
    async getAvailableChallenges(){
        while(!(await this.selenium.isElementExists('xpath','(//*[@class="flow-cell-header ng-star-inserted"])[3]//div[@class="cell-header-label-wrapper"]'))){
            continue
        }
        let availableChallengesElement = await this.selenium.findElementBy('xpath','(//*[@class="flow-cell-header ng-star-inserted"])[3]//div[@class="cell-header-label-wrapper"]')
        this.availableChallenges=await availableChallengesElement.getAttribute("innerText")
        return this.availableChallenges
    }

}

module.exports = MyChallenges;