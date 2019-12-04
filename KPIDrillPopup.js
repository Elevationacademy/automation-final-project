class KPIDrillPopup {

    /** 
    * KPIDrillPopup represents the SINGLE KPI card's pop up.
    */
    
    constructor(selenium) {
        this.selenium = selenium;
        this.name
        this.lastUpdate
        this.myScore
    }

    // gets the title of the card name.
    async getName() {
        let text = (await this.selenium.getTextFromElement("className", "title ng-star-inserted")).split('\n')
        this.name = text[0]
        return this.name
    }

    // gets the last update (date&time) of the card name.
    async getLastUpdate() {
        let lastUpdate = await this.selenium.getTextFromElement("className", "last-updated")
        this.lastUpdate = lastUpdate
        return this.lastUpdate
    }

    // gets the user's score. 
    async getMyScore() {
        let myScore = await this.selenium.getTextFromElement("className", "flag-value")
        this.myScore = myScore
        return this.myScore
    }

    // Return current time frame
    async currentTimeFrame(){
        let current = await this.selenium.getTextFromElement('xpath', "//div[@class='kpi-timeframe ng-star-inserted timeframe-selected']")
        return current
    }

    //this function clicks on a string Time Frame. It should get 'daily', 'weekly', or 'monthly'
    async clickTimeFrame(selectTimeFrame) {
        try {
            await this.selenium.clickButton('xpath', `//div[contains(text(),'${selectTimeFrame}')]`)
            if(selectTimeFrame == await this.currentTimeFrame()){
                console.log(`You're now under ${selectTimeFrame}`)
            }else{
                console.log(`Cannot click on ${selectTimeFrame} button`)
            }
        }
        catch (error) {
            console.error("Problem with clickTimeFrame function " + error)

        }
    }

    // Returns either Trend or Score 
    async isTrendScore(){
        let option = await this.selenium.getTextFromElement('className', 'tab selected selectable')
        return option
    }

    //this function clicks on Trend or Score and should get "Trend" / "Score"
    async trendNscore(trendOrScore) {
        try {
            await this.selenium.clickButton('xpath' , `//div[contains(text(),'${trendOrScore}')]`)
            if(trendOrScore == await this.isTrendScore()){
                console.log(`You're now under ${trendOrScore}`)
            }
            else{
                console.log(`Cannot click on ${trendOrScore} button`)
            }
        }
        catch (error) {
            console.error("Problem with trendNscore function " + error)
        }
    }

    // This function closes the PopUp window by clicking x button. 
    async close() { 
        try {
            await this.selenium.clickButton("xpath", "//div[@icon='close-button']")
        } catch (error) {
            console.error("Problem with close function " + error)
        }
    }
}


module.exports = KPIDrillPopup;