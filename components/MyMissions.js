const Mission = require("../components/Mission")


class MyMissions {
    constructor(selenium, view="home") {
        this.selenium = selenium;
        this.missions = [];
        this.view = view;
    }
    get xpath() {
        if (this.view === "home"){
            return "//campaigns//div[contains(@class,'campaigns')]";
        }
        return "//div[contains(@class,'catalog-list')]"
    }
    get missionXpath() {
        if (this.view === "home"){
            return this.xpath + "//div[contains(@class,'campaign-summary-item')]";
        }
        return this.xpath + "//descendant::div[contains(@class,'catalog-item ng-star-inserted')]";
    }
    countMissions() {
        return this.missions.length;
    }
    getNthMissionXpath(missionIndex = 1) {
        return `${this.missionXpath}[${missionIndex}]`;
    }
    async getMissionByName(name = "") {
        for (let mission of this.missions) {
            const missionName = await mission.getName();
            if (missionName.toLowerCase() == name.toLowerCase()) {
                return mission;
            }
        }
        return undefined;
    }
    async buildMissionTable() {
        const missionsElements = await this.selenium.findElementListBy("xpath", this.missionXpath);
        for (let index in missionsElements) {
            const missionXpath = this.getNthMissionXpath(parseInt(index) + 1);
            const mission = new Mission(this.selenium, missionXpath,this.view);
            this.missions.push(mission);
        }
    }
}

module.exports = MyMissions;