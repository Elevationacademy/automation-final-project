const KPIDrillPopup = require("./KPIDrillPopup")

/**
 *  KPICard represents card element in component of KPIs.
 */


class KpiCards {
    constructor(selenium, card) {
        this.selenium = selenium
        this.card = card
        this.popup
        this.name
        this.description
        this.points
    }

    // This property return card name text.
    async getName() {
        this.name = await this.selenium.getTextFromElement("className", "card-item-name", null, this.card)
        return this.name
    }

    // This property return the card description - indication of the complete tasks in persents.
    async getDescription() {
        this.description = await this.selenium.getTextFromElement("className", "card-item-description", null, this.card)
        return this.description
    }

    // // This porperty return the card points.
    async getPoints() {
        this.points = (await this.selenium.getTextFromElement("className", "card-item-value", null, this.card)).split('\n')
        return this.points[0]
    }

    // // This method clicks on the chosen card.
    async click() {
        await this.selenium.clickButton(null, null, this.card)
        this.popup = new KPIDrillPopup(this.selenium)
    }
}

module.exports = KpiCards