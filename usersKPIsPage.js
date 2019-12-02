'use strict';
const Selenium = require("./SeleniumInfra")
const fs = require('fs');

class UsersKPIsPage {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
    constructor(selenium) {
        this.selenium = selenium
    }

    async navigateToLeaderBoardPage() {
        await this.selenium.getURL("https://vness.eu.gameffective.me/w/game/leaderboard")
    }

    // clicks on the user we selected as "UserName" via the input
    async clickSpecificUser(UserName) {

        await this.selenium.sleep(5000)

        //users list is an array of all the users
        let usersList = await this.selenium.findElementListBy("xpath", "//div[@class ='leaderboard-item has-drill-down ng-star-inserted']//div[@class='item-name  column-value-center']")

        for (let user of usersList) {
            
            //get "UserName" from list of array
            let userNameText = await this.selenium.getTextFromElement(null,null,user)

            //compare "UserName" from list of array with "UserName" via the input.
                 if (userNameText == UserName) {
                    await this.selenium.clickButton("xpath", "//div[text() ='"+UserName+"']//parent::div//parent::div//parent::div") // click on "UserName" via the input.
    
                }
                else{
                    console.log("Specific User Not Found") // error Message in case user not found.
    
                }

        }
    }
//get Information from Specific User According to KPIs Name Parameter.
    async getUsersIndicator(KPIs_name) {
        await this.selenium.driver.sleep(5000)

        let kpisList = await this.selenium.findElementListBy("xpath", "//*[@class='content-item-name']") // Get All KPIs Names with Array
        for (let kpi of kpisList) {
            let kpiNameText = await this.selenium.getTextFromElement(null,null,kpi) // Get Specific KPIs name.

            //compare "KPIsName" from list of array with "KPIsName" via the input.
            if (kpiNameText == KPIs_name) { // 
                let line1 = await this.selenium.findElementBy("xpath", "//div[@class='content-item']//*[text()='"+KPIs_name+"'] //parent::div//*[@class='big ng-star-inserted' ]")
                let line2 = await this.selenium.findElementBy("xpath" , "//div[@class='content-item']//*[text()='"+KPIs_name+"'] //parent::div//*[@class='new-line-value-text ng-star-inserted' ]")
                let Value1 = await line1.getAttribute("innerText")
                let Value2 = await line2.getAttribute("innerText")

                console.log(Value2) // Print Result From Specific KPIs Name Line
                console.log(Value1) // Print Result From Specific KPIs Name Line

            }
            else {
                console.log("Specific User Not Found")
            }
        }
    }

//     async getUsersIndicatorList(name, KPIs_name){


//     }

    //Validate the clicked user with Dispaly user.
    async ValidateUserName(userNameclicked) {

        let name1 = await this.selenium.findElementBy("xpath", "//*[@class='content-header-peer']") // Find Name Parameter from User
        console.log(name1)
        let name2 = await this.selenium.findElementBy("className", "card-item-name user-name") // Find Name Parameter from User
        console.log(name2)
        let displayuser1 = await name1.getAttribute("innerText"); //Get Name Parameter from User
        let displayuser2 = await name2.getAttribute("innerText"); // Get Name Parameter from User
        if ((displayuser1 === userNameclicked) && (displayuser2 === userNameclicked)) { //compare "UserName" from Screen with "UaserName" via the input.
            console.log(`Validation Succssfuly! the ${userNameclicked} dispaly correct`)
        }
        else {
            console.log("Validation wrong -- Client Name was Not found Succssfuly")
        }
    }
}

module.exports=UsersKPIsPage
// let KPIPageTest = new UsersKPIsPage();

// KPIPageTest.clickSpecificUser("Boot User01")