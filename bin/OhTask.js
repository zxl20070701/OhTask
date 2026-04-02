const Aidejs = require("@aidejs/core");
const Tools = require("@aidejs/tools");

Aidejs.use(Tools);

module.exports = function (logback, inputback) {
    new Aidejs({
        model: "qwen3",
        url: "http://localhost:11434/v1",
        apiKey: ""
    }).task(void 0, logback, inputback);
};