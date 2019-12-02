class RacingDash {
    constructor(selenium) {
        this.selenium = selenium;
        this.selectedType = null;
        this.daysLeftTxt = null;
    }

    // get the text of how many days are left
    async getAmountDaysLeft() {
        while(!(await this.selenium.isElementExists('xpath','//*[@class="text-html ng-star-inserted"]'))){
            continue
        }
        let daysLeft = await this.selenium.findElementBy('xpath','//*[@class="text-html ng-star-inserted"]')
        this.daysLeftTxt = await daysLeft.getAttribute("innerText")
        return this.daysLeftTxt
        // console.log(`Days left text : ${daysLeftTxt}`)
    }


     // get the text of selected button by color
    async getRaceType() {
        while (!(await this.selenium.isElementExists('xpath','//*[contains(@class,"race-type-button") and contains(@class, "first-button")]'))){
            continue
        }
        let raceTypeBtn1 = await this.selenium.findElementBy('xpath','//*[contains(@class,"race-type-button") and contains(@class, "first-button")]')
        let raceTypeBtn2 = await this.selenium.findElementBy('xpath','//*[contains(@class,"race-type-button") and contains(@class, "last-button")]')
        let color1 = await raceTypeBtn1.getCssValue("background-color")
        let color2 = await raceTypeBtn2.getCssValue("background-color")
        let btn1Text = await raceTypeBtn1.getAttribute("innerText")
        let btn2Text = await raceTypeBtn2.getAttribute("innerText")
        if (color1 == "rgba(134, 137, 150, 1)"){
            // console.log(`Selected Button :${btn1Text}`)
            this.selectedType = btn1Text;
        }
        else if(color2 == "rgba(134, 137, 150, 1)"){
            // console.log(`Selected Button :${btn2Text}`)
            this.selectedType = btn2Text;
        }
        console.log(`first color :${color1}`)
        console.log(`second color :${color2}`)
        return this.selectedType
        
    }

    async clickTeamRace(){
        while (!(await this.selenium.isElementExists('xpath','//*[contains(@class,"race-type-button") and contains(@class, "last-button")]'))){
            continue
        }
        // await this.selenium.clickButton('xpath','//*[contains(@class,"race-type-button") and contains(@class, "last-button")]')
        let element=await this.selenium.findElementBy('xpath','//*[contains(@class,"race-type-button") and contains(@class, "last-button")]')
        // console.log(await element)
        await this.selenium.clickButton(null,null,element)
    }

}

module.exports = RacingDash;