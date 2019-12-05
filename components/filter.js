
class FilterFeatur {
    constructor(selenium) {
        this.selenium = selenium;
        this.boolean = true
            this.object = {
                sideBarName: {
                    locatorType: "xpath",
                    locatorValue: locatorValueSideBarName => `//div[@class='item-content-group']//div[text()='${locatorValueSideBarName}']//parent::div`},
            filterCategoryName: {
                locatorType: "xpath",
                locatorValue: locatorValueFilterCategoryName => `//div[@class='category-title']//div[text()='${locatorValueFilterCategoryName}']`
            },        
            filterSubcategoryName: {
                locatorType: "xpath",
                locatorValue: locatorValueSubcategoryTitle => `//*[text()='${locatorValueSubcategoryTitle}']//parent::div//parent::div`
            }
        }
    }

    async setSidebar(strSidebarName) {
        let locatorValueSideBarName = strSidebarName
        await this.selenium.clickButton(this.object.sideBarName.locatorType, this.object.sideBarName.locatorValue(locatorValueSideBarName))
    }

    async setFilter(strCategoryTitle, strSubcategoryTitle) {
        await this.setFilterCategory(strCategoryTitle)
        await this.setFilterSubcategory(strSubcategoryTitle)
        if(this.boolean==true)
        {
            return "true"
        }
        return "false"
    }

    async setFilterCategory(strCategoryTitle) {
        let locatorValueFilterCategoryName = strCategoryTitle
        await this.selenium.clickButton(this.object.filterCategoryName.locatorType, this.object.filterCategoryName.locatorValue(locatorValueFilterCategoryName))
    }

    async setFilterSubcategory(strSubcategoryTitle) {
        let locatorValueSubcategoryTitle = strSubcategoryTitle
        await this.selenium.clickButton(this.object.filterSubcategoryName.locatorType, this.object.filterSubcategoryName.locatorValue(locatorValueSubcategoryTitle))
    }
}

module.exports = FilterFeatur;