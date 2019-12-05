const KPICard = require('./KpiCard')
class KPICardsTable {

    /** 
     * KPICardsTable represents the component of KPI cards in Home page.
     * To get one card you should call the list (this.cards) with index number.
     * Exapmle: this.KPICardTable.cards[0] // Returns the first card 
     * 
     * You have to initialize init() method before you start using all methods.
     * Example: this.KPICardTable.init()
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
        // await this.selenium.scrollToElement('xpath' , "//span[@class='cell-header-title']")
        const table = await this.selenium.findElementListBy("xpath", "//div[@class='flow-cell box ng-star-inserted']")

        this.kpi = table[0]
        await this._createCardsList()
    }

    // Create list of KPICard objects
    async _createCardsList() {
        let webCards
        this.cards = []
        for(let i = 1 ; i < 4 ; i++){
            webCards = await this.selenium.findElementListBy("xpath", "//div[@class='card-item kpi-item small clickable ng-star-inserted']", this.kpi)
            console.log(`Try ${i}/3 to find card elements `)
            if(webCards.length > 0){
                for (let card of webCards) {
                     this.cards.push(new KPICard(this.selenium, card)) 
                }
                await this.selenium.driver.sleep(1000)
                break
            }
        }
       // console.log(webCards)
    }
    /*getName() function returns the title of the KPI's table */
    async getName() {
        this.name = await this.selenium.getTextFromElement("className", "cell-header-title", null, this.kpi)
        return this.name
    }

    /* getFilter() Function returns the current filter of the KPI's table */
    async getFilter() {
        this.filter = await this.selenium.getTextFromElement("className", "selected-option", null, this.kpi)
        return this.filter
    }

    /* setFilter() Function gets wanted filter, changes it and validate changes */
     async setFilter(filter) {
        try {
            await this.selenium.clickButton("className", "selected-option", null, this.kpi)
            await this.selenium.clickButton('xpath' , `//div[contains(text(),'${filter}')]`, null, this.kpi)
            await this.selenium.driver.sleep(1000)
            /* Validate that filter has changed */
            if(filter == await this.getFilter()){
                console.log(`Filter has changed to '${filter}'`)
                await this._createCardsList()
            }else{
                console.log(`There is a problem to change the filter to '${filter}'`)
            }
        } catch (error) {
            console.error(error)
        }
    }

    // Returns number of card elements
    async count() {
        return this.cards.length
    }
}

module.exports = KPICardsTable