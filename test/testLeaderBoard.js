const HomePage = require("../pages/HomePage")
const LeaderBoard = require("../components/classLeaderBoard")
const BasePage = require("../pages/BasePage")
const expect = require("chai").expect



describe("leaderBoard",function(){
    
    let leaderBoard = undefined
    let selenium = undefined
    let homePage = undefined
    
    this.retries(4)
    this.beforeAll(async ()=>{

        selenium = new BasePage().selenium
        homePage =await  new HomePage(selenium, "Bootuser22", "Boot1234");
        leaderBoard = await new LeaderBoard(selenium)
        await homePage.login.navigateToLoginPage()
        await homePage.login.login()
        await homePage.navigate()
        // await leaderBoard.navigate()
        await leaderBoard.usersInfo()
    })


    describe("filter",async()=>{
        
        it("set filter and validate if filter is clicked",async()=>{
            expect(await leaderBoard.filter.setFilter("Time View","This Week")).that.is.a("string")
        })
    })
    describe("userTable",async()=>{
        
        it("should get user name",async()=>{
            expect(await leaderBoard.allUsersArr[0].getName()).that.is.a("string")
        })

        it("should get level of user",async()=>{
            expect(await leaderBoard.allUsersArr[3].getLevel()).that.is.a("string")
        })
        it("should click on user",async()=>{
            expect(await leaderBoard.allUsersArr[3].clickUser()).to.be.equal("clicked")
        })
       
    })
    describe("userKpi",async()=>{
        it("check the validate of Kpi",async()=>{
            await leaderBoard.allUsersArr[3].initKPIsDetail()
            expect(await leaderBoard.allUsersArr[3].kpiDetailsArray[4].getText()).that.is.a("string")
        })
    })
    
    this.afterAll(async () => {
        await selenium.close()
    })
})