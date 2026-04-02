const { logform } = require("oipage/nodejs/logform/index.js");

module.exports = function () {
    require("./OhTask.js")(function (message) {
        process.stdout.write(message);
    }, function () {
        return new Promise((resolve) => {

            // 启用命令行录入
            logform([{
                type: "input",
                label: "等待用户输入："
            }]).then(result => {
                resolve(result[0]);
            });

        });
    });
};