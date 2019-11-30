class KPIDrillPopup {
    constructor(selenium) {
        this.selenium = selenium;
        this.name
        this.lastUpdate
        this.myScore
    }

    async init() {
        this.myScore = await this.selenium.getTextFromElement("className", "flag-value")
        let text = await this.selenium.getTextFromElement("xpath", "//div[@class='title ng-star-inserted']")
        let t = text.split('\n')
        this.name = t[0]
        this.lastUpdate = t[1]   
    }

    get Name() {
        return this.name
    }

    get LastUpdate() {
        return this.lastUpdate
    }

    // gets the user's score. 
    get MyScore() { 
        return this.myScore
    }

    //this function clicks on a string Time Frame. It should get 'daily', 'weekly', or 'monthly'
    async clickTimeFrame(selectTimeFrame) {   
        try {
            let timeFrame = await this.selenium.findElementListBy("className", "kpi-timeframe ng-star-inserted")
            for (let time of timeFrame) {
                let frame = await this.selenium.getTextFromElement(null, null, time)
                if (frame == selectTimeFrame) {
                    await this.selenium.clickButton(null, null, time)
                    return
                }
            }
            console.log(frame)
        }
        catch (error) {
            console.error("Problem with clickTimeFrame function " + error)

        }
    }

    //this function clicks on Trend or Score and should get "Trend" / "Score"
    async trendNscore(trendOrScore) { 
        try {
            let btn = await this.selenium.findElementListBy('className', 'kpi-drill-tabs ng-star-inserted')
            console.log(btn)
            if (trendOrScore == "Score"){
                return await this.selenium.clickButton(null, null, btn[1])
            }
            if (trendOrScore == "Trend"){
                return await this.selenium.clickButton(null, null, btn[0])
            }
        }
        catch (error) {
            console.error("Problem with clickTrendsOrScore function " + error)
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