const HomePage = require("./HomePage");
const BasePage = require("./BasePage");

class Test {
    constructor(userName, password) {
        this.testSelenium = new BasePage().selenium;
        this.homePage = new HomePage(this.testSelenium, userName, password);
    }

    async notificationTest() {
        // login:
        await this.homePage.login.navigateToLoginPage();
        await this.homePage.login.login();
        await this.testSelenium.driver.sleep(5000);

        // click notification button:
        await this.homePage.notification.clickNotificationButton();

        // get notifications list:
        let notificationsList = await this.homePage.notification.getNotificationslist();
        
        // check if there are any notification:
        if (notificationsList.length == 0) { // there are No notifications
            console.log("There are no notifications right now");
        }
        else { // there is at least one notification

            // print time, title and description of wach notification:
            for (const notiElement of notificationsList) {
                let time = await this.homePage.notification.getNotificationTime(notiElement);
                console.log(`Notification time: ${time}`);
                let title = await this.homePage.notification.getNotificationTitle(notiElement);
                console.log(`Notifiction title: ${title}`);
                let description = await this.homePage.notification.getNotificationDescription(notiElement);
                console.log(`Notifiction description: ${description}`);
            }

            // check if there is a button in any notification:
            let isButtonExists = await this.homePage.notification.isButtonExists();
            if(isButtonExists){
                await this.homePage.notification.clickInnerButton();
                await this.testSelenium.URLvalidation("missions");
            }
        }
    }

    async centerNotificationTest() {
        //login:
        await this.homePage.login.navigateToLoginPage();
        await this.homePage.login.login();
        await this.testSelenium.driver.sleep(5000);

        // print game name:
        let gameName = await this.homePage.centerNotification.getGameName();
        console.log(`Game name: ${gameName}`);

        // print player level:
        let level = await this.homePage.centerNotification.getPlayerLevel();
        console.log(`Player level: ${level}`);

        // print current points count:
        let currentPoints = await this.homePage.centerNotification.getCurrentPoints();
        console.log(`Current points count: ${currentPoints}`);

        // print points needed to level up:
        let pointsNeeded = await this.homePage.centerNotification.getPointsNeeded();
        console.log(`Points needed: ${pointsNeeded}`);

        // click game name and validate:
        console.log(await this.homePage.centerNotification.clickGameName());
    }

    async myBadgesTest() {
        // login:
        await this.homePage.login.navigateToLoginPage();
        await this.homePage.login.login();
        await this.testSelenium.driver.sleep(5000);

        // print my badges description:
        await this.homePage.myBadges.setMyBadgesDescription();
        await this.homePage.myBadges.getMyBadgesDescription();
    }
}

let test = new Test("Bootuser10", "Boot1234");
test.notificationTest();
// test.myBadgesTest();
// test.centerNotificationTest();
