const KPICard = require('./KPICards')

class KPICardsTable {

    /** KPICardsTable represent the component of KPI cards in Home page.
     *  To get one card you sould call the list (this.cards) with index.
     *  Exapmle: this.KPICardTable.cards[0] // Return the first card 
     * 
     *  Before you start using all the methods you have you initilize 
     *  all the propeties by using init method
     *  Example: this.KPICardTable.init()
     */

    constructor(selenium) {
        this.selenium = selenium
        this.kpi
        this.name
        this.filter
        this.cards = []
        
    }

    // Initialize all the properties of the class
    async init(){
        const table = await this.selenium.findElementListBy("xpath", "//div[@class='flow-cell box ng-star-inserted']")
        this.kpi = table[0]
        this.name = await this.selenium.getTextFromElement("className", "cell-header-title", null, this.kpi)
        this.filter = await this.selenium.getTextFromElement("className", "selected-option", null, this.kpi)
        await this._createCardsList()
    }

    // Create list of KPICard objects
    async _createCardsList() {
        const webCards = await this.selenium.findElementListBy("xpath", "//div[@class='card-item kpi-item small clickable ng-star-inserted']", this.kpi)
        console.log(webCards)
        for (let card of webCards) {
            let cardObject = new KPICard(this.selenium, card)
            await cardObject.init()
            this.cards.push(cardObject) 
        }
    }
    /*getName() function return the title of the KPI's table */
    get Name() {
        return this.name
    }

    /* getFilter() Function return the current filter of the KPI's table */
    get Filter() {
        return this.filter
    }

    /* setFilter() Function get wanted filter, change it and validate changes */
     async setFilter(filter) {
        try {
            await this.selenium.clickButton("className", "selected-option", null, this.kpi)
            await this.selenium.clickButton('xpath' , `//div[contains(text(),'${filter}')]`, null, this.kpi)

            /* Validate that filter has changed */
            if(filter == this.filter){
                console.log(`Filter has changed to '${filter}'`)
            }else{
                console.log("There is problam to change the filter!")
            }
        } catch (error) {
            console.error(error)
        }
    }

    async count() {
        return this.cards.length
    }
}

module.exports = KPICardsTable