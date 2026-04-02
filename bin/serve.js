const { join } = require("path");
const { serve, ZipaperIntercept, VISLiteIntercept, ScssLoader, HtmlLoader } = require("@oipage/cli");
const packageValue = require("../package.json");

module.exports = function () {

    serve({
        name: "OhTask",
        version: packageValue.version,
        devServer: {
            open: "./index.html",
            port: 20000,
            baseUrl: join(__dirname, "../website"),
            cache: true,
            intercept: [
                ZipaperIntercept,
                VISLiteIntercept,
                {
                    test: /\.do$/,
                    handler(request, response) {

                        // 对于任务交易，通过SSE通信
                        // https://zxl20070701.github.io/notebook/index.html#/program/technology/SSE/introduction

                    }
                }
            ]
        },
        module: {
            rules: [{
                test: /\.scss$/,
                use: ScssLoader
            }, {
                test: /\.html$/,
                use: HtmlLoader
            }]
        }
    });

};