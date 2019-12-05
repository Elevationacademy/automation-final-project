const Task = require("../components/Task")

class MyTasks {
    constructor(selenium) {
        this.selenium = selenium;
        this.tasks = [];
        this.activitiesHeader = undefined;
        this.openTasksXpath = `//activities[@view-mode="open"]`
        this.doneTasksXpath = `//activities[@view-mode="done"]`
        this.cardItemXpath = `//descendant::div[@class="activity-item card-item box ng-star-inserted"]`
    }
    countTasks() {
        return this.tasks.length;
    }
    async getTaskByName(name = "") {
        for (let task of this.tasks) {
            const taskName = await task.getName();
            if (taskName.toLowerCase() == name.toLowerCase()) {
                return task;
            }
        }
        return undefined;
    }
    getNthOpenTaskXpath(taskIndex = 1) {
        return `${this.openTasksXpath}${this.cardItemXpath}[${taskIndex}]`;
    }
    getNthDoneTaskXpath(taskIndex = 1) {
        return `${this.doneTasksXpath}${this.cardItemXpath}[${taskIndex}]`;
    }
    async buildTasks() {
        const openTasksElements = await this.selenium.findElementListBy("xpath", `${this.openTasksXpath}${this.cardItemXpath}`);
        const doneTasksElements = await this.selenium.findElementListBy("xpath", `${this.doneTasksXpath}${this.cardItemXpath}`);

        for (let i in openTasksElements) {
            const taskXpath = this.getNthOpenTaskXpath(parseInt(i) + 1);
            const task = new Task(this.selenium, taskXpath);
            this.tasks.push(task);
        }
        for (let j in doneTasksElements) {
            const taskXpath = this.getNthDoneTaskXpath(parseInt(j) + 1);
            const task = new Task(this.selenium, taskXpath);
            this.tasks.push(task);
        }
    }
}

module.exports = MyTasks;