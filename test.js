const BasePage = require("./BasePage");
const code = require("./code")
const login = require('./Login')
const home = require('./HomePage')
// const logger = require('./winstone');

class ClientsPageTest {
    constructor() {
        this.bp = new BasePage().selenium
        this.logIn = new login(this.bp)
        this.page = new code(this.bp)
        this.hp = new home(this.bp,'Bootuser05', 'Boot1234')

        }
      

        async oneUserInfo(){
            await this.hp.login.navigateToLoginPage()
            await this.hp.login.login()
            setTimeout(() => {
            console.log("count to 10, it's timer")
             this.page.getInfoAboutUser("0")},10000)
        }



        async click(){
            await this.hp.login.navigateToLoginPage()
            await this.hp.login.login()
            setTimeout(() => {
                console.log("count to 10, it's timer")
            this.page.clickUser('0')},10000)
        }

        async allUsersInfo(){
            await this.hp.login.navigateToLoginPage()
            await this.hp.login.login()
            setTimeout(() => {
            this.page.getInfoAboutUsers() 
        },10000)
        }
}
let xx = new ClientsPageTest()
// xx.oneUserInfo()
xx.click()
// xx.allUsersInfo()