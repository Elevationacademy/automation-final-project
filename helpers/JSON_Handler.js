const fs = require("fs");

class JSONHandler {
  async setJSON(bool, filter) {
    try {
      if (bool != null) {
        let valueStringify = JSON.stringify({
          [filter]: bool
        });
        fs.writeFile(
          "./json/mission_page_filter_data.json",
          `${valueStringify}`,
          function () {
            console.log("value was added to the JSON file");
          }
        );
      } else {
        let valueStringify = JSON.stringify({
          filter
        });
        fs.writeFile(
          "./json/mission_filter_data.json",
          `${valueStringify}`,
          function () {
            console.log("array was added to the JSON file");
          }
        );
      }
    } catch (error) {
      console.error(error);
    }
  }
  async getJSON(name) {
    try {
      if (name == "missionPage") {
        let file = fs.readFileSync("./json/mission_page_filter_data.json");
        let res = await JSON.parse(file);
        return await res["ongoing"];
      } else {
        let file = fs.readFileSync("./json/mission_filter_data.json");
        let res = await JSON.parse(file);
        let final_array = [];
        for (let i = 0; i < res["filter"].length; i++) {
          final_array.push(Object.values(res["filter"][i])[0]);
        }
        return final_array;
      }
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = JSONHandler;
