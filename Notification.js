class Notification {
    constructor(selenium) {
        this.selenium = selenium;
    }

    // click the notification icon in home page:
    async clickNotificationButton() {
        await this.selenium.clickButton("xpath", "//header-desktop/div/div[2]/div/div");
    }

    // return notifications list (web elements):
    async getNotificationslist() {
        let notificationList = await this.selenium.findElementListBy("className", "source-notifications");
        return notificationList;
    }

    // return the notification time:
    async getNotificationTime(element) {
        let timeElement = await this.selenium.findElementBy("className", "time-container", element);
        let time = await timeElement.getAttribute("innerText");
        return time;
    }

    // return the notification title:
    async getNotificationTitle(element) {
        let titleElement = await this.selenium.findElementBy("className", "title", element);
        let title = await titleElement.getAttribute("innerText");
        return title;
    }

    // return the notification description: 
    async getNotificationDescription(element) {
        let descriptionElement = await this.selenium.findElementBy("className", "description", element);
        let description = descriptionElement.getAttribute("innerText");
        return description;
    }

    // check if button is exists:
    async isButtonExists() {
        let isButtonExists = await this.selenium.isElementExists("xpath", "//button");
        return isButtonExists;
    }

    // click the button inside the notification popup:
    async clickInnerButton() {
        await this.selenium.clickButton("xpath", "//button");
    }
}

module.exports = Notification;