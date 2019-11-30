const KPIDrillPopup = require('./KPIDrillPopup')
class KpiCards {
    constructor(selenium, card) {
        this.selenium = selenium
        this.name
        this.description
        this.points
        this.card = card
        this.popup = new KPIDrillPopup(this.selenium)
    }

    async init(){ 
        this.name = await this.selenium.getTextFromElement("className", "card-item-name", null, this.card)
        let desNpoint = await this.selenium.findElementListBy('className', 'big ng-star-inserted', this.card)
        this.description = await this.selenium.getTextFromElement(null,null, desNpoint[0])
        this.points = await this.selenium.getTextFromElement(null,null, desNpoint[1])
    }

    // This property gets card name.
    get Name() {
        return this.name
    }

    // This property gets the card description.
    get Description() {
        return this.description
    }

    // // This porperty gets the card points.
    get Points() {
        return this.points
    }

    // // This method clicks on a chosen card.
    async click() {
        await this.selenium.clickButton(null, null, this.card)
        await this.popup.init()
    }
}

module.exports = KpiCards