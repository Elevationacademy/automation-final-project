class LeaderBoard {
    
    constructor(selenium) {
        this.selenium = selenium
        this.rank = null

    }

  async getRank() {

        let rank = await this.selenium.findElementBy('xpath', '//*[@class="widget-left ng-star-inserted"]//*[@class="value-out-of-max ng-star-inserted"]//*[@class="big ng-star-inserted"][1]')
        let textRank = await this.selenium.getTextFromElement(null, null, rank)
        let fromRank = await this.selenium.findElementBy('xpath', '//*[@class="widget-left ng-star-inserted"]//*[@class="value-out-of-max ng-star-inserted"]//*[@class="big ng-star-inserted"][2]')
        let textFromRank = await this.selenium.getTextFromElement(null, null, fromRank)
        this.rank = textRank + textFromRank
        return this.rank
    }
    
    async clickComponent() {

        await this.selenium.clickButton('className', 'leaderboard-widget widget ng-star-inserted')
       let flag= await this.selenium.URLvalidation('leaderboard')
        return flag 
    }
}   
module.exports = LeaderBoard